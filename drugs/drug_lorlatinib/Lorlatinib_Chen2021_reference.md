<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lorlatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/&quot;},{&quot;label&quot;:&quot;Chen_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lorlatinib_Hibma2022_reference&quot;,&quot;label&quot;:&quot;Hibma_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lorlatinib — `Lorlatinib_Chen2021_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.632). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Lorlatinib’s model bioavailability, distribution volume, and absorption lag time had no estimates (despite relative bioavailability of 0.759), so placeholders led to quarantine.**

No value for lorlatinib's bioavailability, volume of distribution and absorption lag time. The model was built, but lorlatinib's bioavailability, volume of distribution and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number; a relative bioavailability estimate of 0.759 is listed separately. The covariate scenarios were not simulated: the base model was simulated, not the covariate effects the record defines. Extracted — lorlatinib: CL 9.04 L/h, V2 121 L, kabs 3.11 h−1, Q 22 L/h, V3 155 L, D1 1.15 h, Frel 0.759.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_equation_variable_category: this record has none, the second reading 0.115; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Chen J et al., Population pharmacokinetic model with t…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12585](https://doi.org/10.1002/psp4.12585)

<div class="pk-model-meta" hidden drug="lorlatinib" model-id="Lorlatinib_Chen2021_reference" status="model_quarantined" stale="false" population="patients with ALK-positive or ROS1-positive NSCLC and healthy participants" measured-compound="lorlatinib" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CLI (L/h) | `Q22` · CL | 9.035 | L/h | 2.5097222222222223e-06 | [l] / [h] | not captured | llm (0.6) | psp412585-tbl-0004:row2:col1, psp412585-tbl-0004:row2:col4, psp412585-tbl-0004:row2:col5 | — | 0.030 (None% RSE) |
| θ V2 (L) | `Q64` · V2 | 120.511 | L | 0.120511 | [l] | not captured | llm_confirmed (0.6) | psp412585-tbl-0004:row3:col1, psp412585-tbl-0004:row3:col4, psp412585-tbl-0004:row3:col5 | — | 0.086 (None% RSE) |
| θ ka (h−1) | `Q49` · kabs | 3.113 | h−1 | 0.0008647222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | psp412585-tbl-0004:row4:col1, psp412585-tbl-0004:row4:col4, psp412585-tbl-0004:row4:col5 | — | 2.329 (None% RSE) |
| θ Q (L/h) | `Q30` · Q | 22.002 | L/h | 6.111666666666667e-06 | [l] / [h] | not captured | llm (0.6) | psp412585-tbl-0004:row5:col1, psp412585-tbl-0004:row5:col4, psp412585-tbl-0004:row5:col5 | — | not captured |
| θ V3 (L) | `Q77` · V3 | 154.905 | L | 0.15490500000000001 | [l] | not captured | llm_confirmed (0.6) | psp412585-tbl-0004:row6:col1, psp412585-tbl-0004:row6:col4, psp412585-tbl-0004:row6:col5 | — | 0.101 (None% RSE) |
| θ IND | `Q900` · equation variable | 0.020 | not captured | not captured | not captured | not captured | llm (0.6) | psp412585-tbl-0004:row7:col1, psp412585-tbl-0004:row7:col4 | — | not captured |
| θ D1 (h) | `Q310` · D1 | 1.148 | h | 4132.799999999999 | [h] | not captured | llm_confirmed (0.6) | psp412585-tbl-0004:row8:col1, psp412585-tbl-0004:row8:col4, psp412585-tbl-0004:row8:col5 | — | not captured |
| θ F | `Q87` · Frel | 0.759 | not captured | not captured | not captured | not captured | llm (0.6) | psp412585-tbl-0004:row9:col1, psp412585-tbl-0004:row9:col4, psp412585-tbl-0004:row9:col5 | — | not captured |
| theta_q315_category | `Q900` · theta_q315_category | 0.115 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412585-tbl-0004:row11:col1, psp412585-tbl-0004:row11:col4, psp412585-tbl-0004:row11:col5 | — | not captured |
| theta_q316_category | `Q900` · theta_q316_category | 0.438 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412585-tbl-0004:row12:col1, psp412585-tbl-0004:row12:col4, psp412585-tbl-0004:row12:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 CL' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ωFωCL (L/h)' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 F' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 V2' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ωV2ωV3' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 V3' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 ka' routed out of structural estimates ('IIV parameter')
- column 'model results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q22 ('θCLMX (L/h)', value '14.472') — already have one for this compound
- dropped duplicate Q900 ('θ BALB on CL', value '0.067') — already have one for this compound
- dropped duplicate Q900 ('θ TDOSE on CL', value '0.001') — already have one for this compound
- dropped duplicate Q900 ('θ WNCL on CL', value '0.235') — already have one for this compound
- dropped duplicate Q900 ('θ PPI on ka', value '-0.675') — already have one for this compound
- covariate effect for Q315 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q316 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θ CLI (L/h)); Q64 (θ V2 (L)); Q30 (θ Q (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lorlatinib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412585-tbl-0004:row7:col5 = '(−0.2136 to 0.2535)'
- unparsed cell psp412585-tbl-0004:row16:col5 = '(−0.8508 to −0.4986)'
- unparsed cell psp412585-tbl-0004:row19:col5 = '(−0.0173 to 0.0061)'
- unparsed cell psp412585-tbl-0004:row22:col5 = '(−0.0492 to 0.0160)'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.632 (12/19 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_equation_variable_category]` | not captured | 0.115 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_category]` | not captured | 0.438 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q315_category]` | 0.115 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q316_category]` | 0.438 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ f].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `qwen3.8-27b` | `parameters[θ f].parameter_id` | Q87 | Q900 | mismatch |
| `qwen3.8-27b` | `parameters[θ ind].covariate_forms` | [] | ['additive_shift'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412585-tbl-0004:row2:col1', 'psp412585-tbl-0004:row2:col4', 'psp412585-tbl-0004:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412585-tbl-0004:row5:col1', 'psp412585-tbl-0004:row5:col4', 'psp412585-tbl-0004:row5:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp412585-tbl-0004:row8:col1', 'psp412585-tbl-0004:row8:col4', 'psp412585-tbl-0004:row8:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412585-tbl-0004:row4:col1', 'psp412585-tbl-0004:row4:col4', 'psp412585-tbl-0004:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412585-tbl-0004:row3:col1', 'psp412585-tbl-0004:row3:col4', 'psp412585-tbl-0004:row3:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412585-tbl-0004:row6:col1', 'psp412585-tbl-0004:row6:col4', 'psp412585-tbl-0004:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.035 | not captured | not captured | ['psp412585-tbl-0004:row2:col1', 'psp412585-tbl-0004:row2:col4', 'psp412585-tbl-0004:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.04 L/h | not captured | not captured | ['psp412585-tbl-0004:row2:col1', 'psp412585-tbl-0004:row2:col4', 'psp412585-tbl-0004:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 121 L | not captured | not captured | ['psp412585-tbl-0004:row3:col1', 'psp412585-tbl-0004:row3:col4', 'psp412585-tbl-0004:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 606 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 30 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lorlatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2021` / `Chen_2021::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lorlatinib/models/modelica/_needs_review/Lorlatinib_Chen2021_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lorlatinib/models/modelica/_needs_review/Lorlatinib_Chen2021_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:47 UTC</sub>
