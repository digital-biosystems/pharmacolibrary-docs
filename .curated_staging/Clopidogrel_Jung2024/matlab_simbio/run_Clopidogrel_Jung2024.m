% Build Clopidogrel_Jung2024 as a SimBiology model and simulate it.
% Amounts in kg, volumes in m^3, time in seconds — the same system as the other
% formats in this bundle.

m = sbiomodel('Clopidogrel_Jung2024');
c = addcompartment(m, 'body', 1);

addspecies(c, 'A_depot', 0.0003);
addspecies(c, 'A_hepatic', 0);
addparameter(m, 'V_hepatic', 1.46392);
addspecies(c, 'A_central', 0);
addparameter(m, 'V_central', 1.46392);
addspecies(c, 'A_peripheral', 0);
addparameter(m, 'V_peripheral', 2.82398);
addspecies(c, 'A_central_H4', 0);
addparameter(m, 'V_central_H4', 0.05145);
addspecies(c, 'A_central_carboxylic_acid', 0);
addparameter(m, 'V_central_carboxylic_acid', 0.01734);
addspecies(c, 'A_peripheral_carboxylic_acid', 0);
addparameter(m, 'V_peripheral_carboxylic_acid', 0.05189);
addparameter(m, 'ka', 0.0054555555555555555);
addparameter(m, 'Tlag', 705.6);

r = addreaction(m, 'A_depot -> A_hepatic');
k = addkineticlaw(r, 'Unknown');
set(k, 'ParameterVariableNames', {});
% absorption starts after the lag
set(r, 'ReactionRate', 'ka * A_depot * (time >= Tlag)');
addparameter(m, 'CL_Qc', 0.00023491666666666667);
r = addreaction(m, 'A_hepatic -> A_central');
set(r, 'ReactionRate', 'CL_Qc * (A_hepatic/V_hepatic - A_central/V_central)');
addparameter(m, 'CL_Qp', 0.00016331388888888887);
r = addreaction(m, 'A_central -> A_peripheral');
set(r, 'ReactionRate', 'CL_Qp * (A_central/V_central - A_peripheral/V_peripheral)');
addparameter(m, 'CL_Qm2', 1.2433333333333332e-06);
r = addreaction(m, 'A_central_carboxylic_acid -> A_peripheral_carboxylic_acid');
set(r, 'ReactionRate', 'CL_Qm2 * (A_central_carboxylic_acid/V_central_carboxylic_acid - A_peripheral_carboxylic_acid/V_peripheral_carboxylic_acid)');
addparameter(m, 'CLf_Qhm1', 0.00030857499999999995);
r = addreaction(m, 'A_hepatic -> A_central_H4');   % ONE-WAY formation
set(r, 'ReactionRate', 'CLf_Qhm1 * A_hepatic/V_hepatic');
addparameter(m, 'CLf_Qhm2', 0.002160033333333333);
r = addreaction(m, 'A_hepatic -> A_central_carboxylic_acid');   % ONE-WAY formation
set(r, 'ReactionRate', 'CLf_Qhm2 * A_hepatic/V_hepatic');
addparameter(m, 'CLe_CLm11', 0.00010285833333333333);
r = addreaction(m, 'A_hepatic -> null');
set(r, 'ReactionRate', 'CLe_CLm11 * A_hepatic/V_hepatic');
addparameter(m, 'CLe_CLm1', 2.0625e-05);
r = addreaction(m, 'A_central_H4 -> null');
set(r, 'ReactionRate', 'CLe_CLm1 * A_central_H4/V_central_H4');
addparameter(m, 'CLe_CLm2', 2.0133333333333333e-06);
r = addreaction(m, 'A_central_carboxylic_acid -> null');
set(r, 'ReactionRate', 'CLe_CLm2 * A_central_carboxylic_acid/V_central_carboxylic_acid');

cs = getconfigset(m);
set(cs, 'StopTime', 86400);
set(cs.SolverOptions, 'AbsoluteTolerance', 1e-14, 'RelativeTolerance', 1e-8);
[t, x, names] = sbiosimulate(m);
figure; plot(t/3600, x); xlabel('time (h)'); ylabel('amount (kg)');
legend(names, 'Interpreter', 'none'); grid on;
title('Clopidogrel_Jung2024');
