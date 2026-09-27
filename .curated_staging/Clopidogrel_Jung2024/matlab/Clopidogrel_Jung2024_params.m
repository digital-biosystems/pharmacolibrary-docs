function p = Clopidogrel_Jung2024_params()
% Parameters for Clopidogrel_Jung2024 — SI units (kg, m^3, s).
% Generated from the authored Modelica exemplar via its curated structure.

p.comps = {'hepatic', 'central', 'peripheral', 'central_H4', 'central_carboxylic_acid', 'peripheral_carboxylic_acid'};
p.V = [1.46392, 1.46392, 2.82398, 0.05145, 0.01734, 0.05189];
p.dose = 0.0003;   p.ka = 0.0054555555555555555;   p.Tlag = 705.6;
p.dose_idx = 1;
% [from to CL]  two-way distribution
p.two_way = [1 2 0.00023491666666666667; 2 3 0.00016331388888888887; 5 6 1.2433333333333332e-06];
% [from to CL]  ONE-WAY metabolite formation
p.one_way = [1 4 0.00030857499999999995; 1 5 0.002160033333333333];
% [comp CL]     elimination
p.elim = [1 0.00010285833333333333; 4 2.0625e-05; 5 2.0133333333333333e-06];
end
