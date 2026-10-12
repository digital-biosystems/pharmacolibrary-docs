<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;evogliptin&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/&quot;},{&quot;label&quot;:&quot;Kim_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Evogliptin_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/Evogliptin_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Kim_2025_DPP_4&quot;,&quot;label&quot;:&quot;Kim_2025 \u00b7 DPP-4&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/pd_Kim_2025_DPP_4.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# evogliptin — `Evogliptin_Kim2025_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.65), gpt-oss:120b (not confirmed, agreement 0.083). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of amyl-f1: this record has none, the second reading 0.36; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kim B et al., Population pharmacokinetic and pharmaco…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13263](https://doi.org/10.1002/psp4.13263)

<div class="pk-model-meta" hidden drug="evogliptin" model-id="Evogliptin_Kim2025_reference" status="accepted_with_caveats" stale="false" population="patients with varying degrees of renal disease and healthy subjects" measured-compound="evogliptin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 22.1 | L/h | 6.138888888888889e-06 | [l] / [h] | not captured | exact (1.0) | psp413263-tbl-0001:row3:col1, psp413263-tbl-0001:row3:col2 | — | 20.2 (None% RSE) |
| Vc/F (L) | `Q290` · V1/F | 829.0 | L | 0.8290000000000001 | [l] | not captured | exact (1.0) | psp413263-tbl-0001:row4:col1, psp413263-tbl-0001:row4:col2 | — | 25.0 (None% RSE) |
| Ka (/h) | `Q49` · kabs | 1.26 | /h | 0.00035 | [1] / [h] | not captured | exact (1.0) | psp413263-tbl-0001:row5:col1, psp413263-tbl-0001:row5:col2 | — | 76.8 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 46.3 | L/h | 1.2861111111111112e-05 | [l] / [h] | not captured | exact (1.0) | psp413263-tbl-0001:row6:col1, psp413263-tbl-0001:row6:col2 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 465.0 | L | 0.465 | [l] | not captured | exact (1.0) | psp413263-tbl-0001:row7:col1, psp413263-tbl-0001:row7:col2 | — | not captured |
| F1c | `Q87` · Frel | 1 | not captured | not captured | not captured | not captured | llm (0.6) | psp413263-tbl-0001:row8:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413263-tbl-0001:row9:col1 | — | not captured |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413263-tbl-0001:row10:col1 | — | not captured |
| theta_q_f_wt_power | `Q900` · theta_q_f_wt_power | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413263-tbl-0001:row11:col1 | — | not captured |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413263-tbl-0001:row12:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'Vc/F (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'Ka (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'F1 (%)' routed out of structural estimates ('PK IIV')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('PK residual variability')
- table section iiv: 'EC50 (%)' routed out of structural estimates ('PD IIV')
- table section residual_error: 'Additive error (%inhibition)e' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Amyl~F1' — extend the ontology if this is a real PK parameter (source ['psp413263-tbl-0001:row13:col1', 'psp413263-tbl-0001:row13:col2'])
- dropped unlinked row (NIL): 'TG ~ F1' — extend the ontology if this is a real PK parameter (source ['psp413263-tbl-0001:row14:col1', 'psp413263-tbl-0001:row14:col2'])
- dropped PD-category row 'E max (%inhibition)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413263-tbl-0001:row23:col1', 'psp413263-tbl-0001:row23:col2'])
- dropped PD-category row 'EC50 (μg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413263-tbl-0001:row24:col1', 'psp413263-tbl-0001:row24:col2'])
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=evogliptin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413263-tbl-0001:row3:col3 = '22.0 (19.2–25.9)'
- unparsed cell psp413263-tbl-0001:row4:col3 = '834.7 (717.3–977.9)'
- unparsed cell psp413263-tbl-0001:row5:col3 = '1.29 (1.01–1.67)'
- unparsed cell psp413263-tbl-0001:row6:col3 = '45.9 (17.9–67.8)'
- unparsed cell psp413263-tbl-0001:row7:col3 = '461.8 (364.0–567.3)'
- unparsed cell psp413263-tbl-0001:row13:col3 = '0.35 (0.17–0.64)'
- unparsed cell psp413263-tbl-0001:row14:col3 = '0.26 (0.09–0.43)'
- unparsed cell psp413263-tbl-0001:row16:col3 = '20.6 (7.1–30.2)'
- unparsed cell psp413263-tbl-0001:row17:col3 = '23.8 (9.2–36.5)'
- unparsed cell psp413263-tbl-0001:row18:col3 = '76.7 (62.0–91.5)'
- unparsed cell psp413263-tbl-0001:row19:col3 = '22.6 (12.0–36.5)'
- unparsed cell psp413263-tbl-0001:row21:col3 = '11.1 (9.8–12.4)'
- unparsed cell psp413263-tbl-0001:row23:col3 = '89.0 (87.8–90.4)'
- unparsed cell psp413263-tbl-0001:row24:col3 = '1.08 (0.98–1.18)'
- unparsed cell psp413263-tbl-0001:row25:col3 = '2.14 (1.97–2.31)'
- unparsed cell psp413263-tbl-0001:row27:col3 = '25.1 (18.7–33.4)'
- unparsed cell psp413263-tbl-0001:row29:col3 = '16.2 (11.6–22.9)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.65 (13/20 fields) | 7 |
| `gpt-oss:120b` | not confirmed | 0.083 (2/24 fields) | 22 |

<details><summary>29 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[amyl-f1]` | not captured | 0.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c1]` | not captured | 65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['power'] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_q76_wt_power]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt_power]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[wt_vp_fd]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[amyl-f1]` | not captured | 34.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 22.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 7.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1c]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1c]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 1.26 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 12.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f]` | 46.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f]` | not captured | 27.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_wt_power]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_wt_power]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q76_wt_power]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q76_wt_power]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q_f_wt_power]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q_f_wt_power]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v2_f_wt_power]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f]` | 829.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f]` | not captured | 7.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/f]` | 465.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/f]` | not captured | 11.4 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | evogliptin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | evogliptin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413263-tbl-0001:row3:col1', 'psp413263-tbl-0001:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413263-tbl-0001:row4:col1', 'psp413263-tbl-0001:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413263-tbl-0001:row5:col1', 'psp413263-tbl-0001:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413263-tbl-0001:row6:col1', 'psp413263-tbl-0001:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413263-tbl-0001:row7:col1', 'psp413263-tbl-0001:row7:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.1 L/h | not captured | not captured | ['psp413263-tbl-0001:row3:col1', 'psp413263-tbl-0001:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 829 L | not captured | not captured | ['psp413263-tbl-0001:row4:col1', 'psp413263-tbl-0001:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 465 L | not captured | not captured | ['psp413263-tbl-0001:row7:col1', 'psp413263-tbl-0001:row7:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=evogliptin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_evogliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2025` / `Kim_2025::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_evogliptin/models/modelica/Evogliptin_Kim2025_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_evogliptin/models/modelica/Evogliptin_Kim2025_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_evogliptin/models/modelica/Evogliptin_Kim2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_modelica.zip" download>Evogliptin_Kim2025_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_fmi.zip" download>Evogliptin_Kim2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_matlab.zip" download>Evogliptin_Kim2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_matlab_simbio.zip" download>Evogliptin_Kim2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_sbml.zip" download>Evogliptin_Kim2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_cellml.zip" download>Evogliptin_Kim2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference.svg" alt="Evogliptin_Kim2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 1.26 /h, F 1). Dose in the paper: 5 mg.

<dbs-fmusim paramsurl="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Evogliptin_Kim2025_reference_params.json` · controls `Evogliptin_Kim2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 23:49 UTC</sub>
