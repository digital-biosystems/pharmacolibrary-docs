<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;protein C&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/&quot;},{&quot;label&quot;:&quot;Li_2025_2 \u00b7 population_estimate&quot;}]"></div>

# protein C — `ProteinC_Li2025v2_population_estimate`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T2_covariates_not_exercised; T3_param_coverage — expected 3 scholar param(s) emitted or defaulted — got 2 covered; T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.
6. Open the emitted .mo and compare its base class and parameters with the record.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `protein C concentrate`, measured `protein C`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Li_2025_2)

## Model component
<dbs-pgx drug="protein C" model-id="ProteinC_Li2025v2_population_estimate" status="model_quarantined" stale="false" population="patients with severe congenital protein C deficiency" measured-compound="protein C" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (dL/h) | `Q22` · CL | —(suppressed) | dL/h | — | [dl] / [h] | not captured | exact (1.0) | TB25050017-3:row1:col1 | — | 0.0992 (None% RSE) |
| Volume of distribution (dL) | `Q61` · V | —(suppressed) | dL | — | [dl] | not captured | exact (1.0) | TB25050017-3:row2:col1 | — | 0.0505 (None% RSE) |
| effect_of_age_on_the_rate_of_endogenous_protein_c_production | `Q900` · effect_of_age_on_the_rate_of_endogenous_protein_c_production | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | TB25050017-3:row5:col1 | — | not captured |
| First-order absorption rate constant (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | TB25050017-3:row13:col1 | — | not captured |
| Bioavailability | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | TB25050017-3:row14:col1 | — | not captured |
| theta_v_age | `Q900` · theta_v_age | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | TB25050017-3:row3:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Rate of endogenous protein C production (IU/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['TB25050017-3:row4:col1'])
- covariate level 'Effect of age on the rate of endogenous protein C production' → Q900:effect_of_age_on_the_rate_of_endogenous_protein_c_production = 0.589 (linear_fractional on Q22)
- dropped duplicate Q22 ('Effect of SCPCD indication on clearance', value '-0.575') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of SCPCD indication on rate of endogenous protein C production' — extend the ontology if this is a real PK parameter (source ['TB25050017-3:row9:col1'])
- dropped unlinked row (NIL): 'Duration of administration (h) b' — extend the ontology if this is a real PK parameter (source ['TB25050017-3:row15:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=protein C
- population split: 'population estimate' subgroup of Li_2025_2 (paper reports 3 populations: percentage relative standard error, population estimate, standard error)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell TB25050017-3:row13:col4 = '0.04 (0.0284, 0.0867)'
- unparsed cell TB25050017-3:row14:col4 = '0.764 (0.511, 0.886)'
- unparsed cell TB25050017-3:row15:col4 = '4.94 (3.34, 6.37)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['TB25050017-3:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['TB25050017-3:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.14 | not captured | not captured | ['TB25050017-3:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.714 L/h | not captured | not captured | ['TB25050017-3:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.07 L | not captured | not captured | ['TB25050017-3:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | fail | 3 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['kabs'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_protein_c/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2025_2` / `Li_2025_2::population_estimate`)
- model: `../../../knowledgebase/drugs/drug_protein_c/models/modelica/_needs_review/ProteinC_Li2025v2_population_estimate.mo`
- deviation: `../../../knowledgebase/drugs/drug_protein_c/models/modelica/_needs_review/ProteinC_Li2025v2_population_estimate.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_matlab.zip" download>ProteinC_Li2025v2_population_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_matlab_simbio.zip" download>ProteinC_Li2025v2_population_estimate_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_sbml.zip" download>ProteinC_Li2025v2_population_estimate_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_cellml.zip" download>ProteinC_Li2025v2_population_estimate_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
