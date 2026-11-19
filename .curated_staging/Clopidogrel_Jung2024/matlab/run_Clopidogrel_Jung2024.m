% Simulate Clopidogrel_Jung2024 over 0..86400 s and plot the observed concentrations.
p = Clopidogrel_Jung2024_params();
y0 = zeros(1 + numel(p.V), 1);  y0(1) = p.dose;
opts = odeset('RelTol', 1e-8, 'AbsTol', 1e-14);
[t, y] = ode15s(@(t, y) Clopidogrel_Jung2024_rhs(t, y, p), [0 86400], y0, opts);
figure;
    plot(t/3600, y(:, 1+2)/p.V(2), 'DisplayName', 'clopidogrel (parent)'); hold on;
    plot(t/3600, y(:, 1+4)/p.V(4), 'DisplayName', 'clopidogrel H4 (active metabolite)'); hold on;
    plot(t/3600, y(:, 1+5)/p.V(5), 'DisplayName', 'clopidogrel carboxylic acid (inactive metabolite)'); hold on;
xlabel('time (h)'); ylabel('concentration (kg/m^3 = g/L)'); legend show; grid on;
title('Clopidogrel_Jung2024');
writematrix([t, y], 'Clopidogrel_Jung2024.csv');
fprintf('wrote Clopidogrel_Jung2024.csv (%d rows)\n', size(t, 1));
