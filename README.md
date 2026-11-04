<!-- AUTOGEN:intro START — spliced from docs/README-template.md; edit THAT file, not this region -->
<!-- Icons: Tabler Icons v3.50.0, MIT licence, (c) Paweł Kuna, https://tabler.io/icons -->
# Pharmacolibrary

<p class="pk-home-lead">Mechanistic pharmacology from the literature, open and runnable.</p>
<p class="pk-home-sublead">Built for model-informed drug development, precision dosing research and teaching.</p>

<form class="pk-home-search" role="search" onsubmit="location.hash = '#/query?ask=' + encodeURIComponent(this.q.value); return false;">
  <input name="q" type="search" placeholder="A drug, brand name, gene or question: Glucophage, CYP2C19, metformin in kidney disease" aria-label="Search drugs, genes and models">
  <button type="submit"><svg class="pk-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg> Search</button>
</form>

<p class="pk-home-try">Try:
  <a href="#/query?ask=clopidogrel%20CYP2C19">Clopidogrel and CYP2C19</a>
  <a href="#/query?ask=clearance%20of%20midazolam%20in%20children">Midazolam clearance in children</a>
  <a href="#/sites?drugs=ibuprofen">Where is ibuprofen metabolised?</a>
  <a href="#/sites?drugs=simvastatin,clopidogrel">Do simvastatin and clopidogrel share enzymes?</a>
</p>

<p class="pk-home-numbers">2,758 drugs · 3,442 popPK, 3,701 PD and 478 PGx records extracted (rejected ones not counted) · <a href="#/pipeline">how they were made</a>.</p>

## Start where you are

<div class="pk-home-cards pk-home-roles">
  <div class="pk-home-card">
    <b><svg class="pk-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 3v18h18"/><path d="M7 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M10.16 10.62l2.34 2.88"/><path d="M15.088 13.328l2.837 -4.586"/></svg> Pharmacometricians</b>
    <span>Population PK, PD and PGx models extracted from the literature, with covariates, variability and a reproduction check against each paper.</span>
    <ul>
      <li><a href="#/query?ask=popPK%20models%20of%20midazolam">Compare popPK models for one drug</a></li>
      <li><a href="#/query">Query every parameter in SQL</a></li>
    </ul>
  </div>
  <div class="pk-home-card">
    <b><svg class="pk-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"/><path d="M8 15a6 6 0 1 0 12 0v-3"/><path d="M11 3v2"/><path d="M6 3v2"/><path d="M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/></svg> Clinicians</b>
    <span>What the published evidence says about genotype, interactions and special populations. An evidence summary, not a dosing tool.</span>
    <ul>
      <li><a href="#/drugs/drug_clopidogrel/pgx_Jung_2024_CYP2C19_Q45">Clopidogrel in a CYP2C19 poor metabolizer</a></li>
      <li><a href="#/sites?drugs=simvastatin,clopidogrel">Check shared enzymes and transporters</a></li>
    </ul>
  </div>
  <div class="pk-home-card">
    <b><svg class="pk-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 3l6 0"/><path d="M10 9l4 0"/><path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6"/></svg> Drug and pharma scientists</b>
    <span>Parameter ranges by therapeutic class, PBPK building blocks and models you can drop into your own pipelines.</span>
    <ul>
      <li><a href="#/atc/README">Browse by ATC class</a></li>
      <li><a href="#/atc/C10A">Compare a drug class: statins</a></li>
      <li><a href="https://github.com/pharmacolibrary">Use the Modelica library and FMUs</a></li>
    </ul>
  </div>
  <div class="pk-home-card">
    <b><svg class="pk-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"/><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"/></svg> Students and curious readers</b>
    <span>See where a medicine goes in the body and why two people can respond to the same dose differently.</span>
    <ul>
      <li><a href="#/sites?drugs=paracetamol">Follow paracetamol through the body</a></li>
      <li><a href="#/drugs/drug_metformin/">Explore metformin, a well-checked example</a></li>
      <li><a href="#/pipeline">How the models were made</a></li>
    </ul>
  </div>
</div>

<div class="pk-demo">
  <div class="pk-demo-sim" data-paramsurl="drugs/drug_clopidogrel/Clopidogrel_Jung2024_reference/Clopidogrel_Jung2024_reference_params.json" data-metaurl="assets/fmu/PK_3M_3C.vr.json" data-wasmurl="assets/fmu/PK_3M_3C.js" data-observable="C_M1"></div>
  <div class="pk-demo-anat" data-drug="clopidogrel"></div>
</div>

<p class="pk-demo-note">Left: only the active metabolite (clopidogrel H4) is drawn on a logarithmic axis, 5 days of daily dosing — the dashed light-blue curve is the default run (normal metaboliser, the paper dose of 75 mg a day); move the dose or pick a CYP2C19 phenotype and the solid blue curve answers, with the difference in Cmax and AUC underneath. Right: where this drug's acting sites sit, with the ADME view loading on first look. Nothing in either tile downloads until it is scrolled into view.</p>


## numbers

<div class="pklg">
<div class="tiles"><div class="tile"><i>Drugs with extracted records</i><b>2,176</b><em>drugs and toxins in the shipped database; every one has a page</em></div><div class="tile"><i>Papers behind the records</i><b>8,057</b><em>distinct papers with at least one extracted record</em></div><div class="tile"><i>Extracted parameters</i><b>37,986</b><em>parameter values the records carry, with units</em></div></div>
</div>
<!-- AUTOGEN:intro END -->
