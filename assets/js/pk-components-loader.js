// Docsify integration only. Component implementation and styles belong to dbs-components.
(function () {
  'use strict';
  var manifestPromise;
  var scripts = new Map();
  var components = new Map();

  function manifest() {
    if (!manifestPromise) {
      manifestPromise = fetch('components.lock.json').then(function (response) {
        if (!response.ok) throw new Error('Component release manifest is unavailable');
        return response.json();
      }).catch(function (error) { manifestPromise = null; throw error; });
    }
    return manifestPromise;
  }

  function script(url) {
    if (scripts.has(url)) return scripts.get(url);
    var pending = new Promise(function (resolve, reject) {
      var tag = document.createElement('script');
      var timer = setTimeout(function () { fail(new Error('Timed out loading ' + url)); }, 30000);
      function fail(error) {
        clearTimeout(timer);
        tag.remove();
        reject(error);
      }
      tag.src = url;
      tag.onload = function () { clearTimeout(timer); resolve(); };
      tag.onerror = function () { fail(new Error('Could not load ' + url)); };
      document.head.appendChild(tag);
    }).catch(function (error) { scripts.delete(url); throw error; });
    scripts.set(url, pending);
    return pending;
  }

  function registered(name) {
    return new Promise(function (resolve, reject) {
      var timer = setTimeout(function () {
        reject(new Error(name + ' did not register; check the matched component release'));
      }, 10000);
      customElements.whenDefined(name).then(function () { clearTimeout(timer); resolve(); }, function (error) {
        clearTimeout(timer); reject(error);
      });
    });
  }

  function load(name) {
    if (customElements.get(name)) return Promise.resolve();
    if (components.has(name)) return components.get(name);
    var pending = manifest().then(function (release) {
      var files = release.entrypoints[name];
      if (!files) throw new Error('No pinned release for ' + name);
      return files.reduce(function (chain, file) {
        return chain.then(function () { return script(release.base + file); });
      }, Promise.resolve());
    }).then(function () { return registered(name); }).catch(function (error) {
      components.delete(name);
      throw error;
    });
    components.set(name, pending);
    return pending;
  }

  window.pkComponents = { load: load };
  window.$docsify.plugins.push(function (hook) {
    hook.doneEach(function () {
      // Older generated pages carried an unwired custom tag containing only metadata.
      document.querySelectorAll('dbs-pgx').forEach(function (old) {
        var heading = old.previousElementSibling;
        if (heading && /^H[1-6]$/.test(heading.tagName) && heading.textContent.trim() === 'Model component') heading.remove();
        old.hidden = true;
      });
      if (!document.querySelector('dbs-fmusim')) return;
      load('dbs-fmusim').catch(function (error) {
        document.querySelectorAll('dbs-fmusim').forEach(function (element) {
          if (!element.isConnected || element.previousElementSibling?.classList.contains('pk-component-error')) return;
          var notice = document.createElement('p');
          notice.className = 'pk-component-error';
          notice.setAttribute('role', 'alert');
          notice.textContent = error.message + '. ';
          var retry = document.createElement('button');
          retry.textContent = 'Retry';
          retry.onclick = function () {
            load('dbs-fmusim').then(function () { notice.remove(); }).catch(function (e) { console.error(e); });
          };
          notice.appendChild(retry);
          element.before(notice);
        });
      });
    });
  });
})();
