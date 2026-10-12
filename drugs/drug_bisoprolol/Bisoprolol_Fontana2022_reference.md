<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;bisoprolol&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/&quot;},{&quot;label&quot;:&quot;Fontana_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bisoprolol_Cvan2016_reference&quot;,&quot;label&quot;:&quot;Cvan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Momilovi2019_reference&quot;,&quot;label&quot;:&quot;Mom\u010dilovi\u0107_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Momilovi2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Nikolic2016_reference&quot;,&quot;label&quot;:&quot;Nikolic_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Nikolic2016_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Nikolic2018_reference&quot;,&quot;label&quot;:&quot;Nikolic_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Nikolic2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bisoprolol — `Bisoprolol_Fontana2022_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143), gpt-oss:120b (not confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The bisoprolol model was quarantined because bisoprolol's clearance and volume of distribution had no extracted values and library placeholders were substituted, and the absorption lag time tlag (0.149) was not covered.**

For bisoprolol in Fontana_2022, the record lists tlag 0.149, absorption half-life 2.31, volume of distribution 218.00, clearance 0.382 and blood clearance 0.000882, yet the model builder substituted library placeholder values for the missing clearance and volume of distribution, so the model was held back rather than published with an invented number. The parameter coverage check expected 4 parameters emitted or defaulted but obtained 3, with tlag neither emitted nor defaulted. A second reader disagreed on the blood clearance parameter, reading 0.05 where this record has 0.000882, and on whether the absorption half-life parameter is the absorption half-life or the absorption rate constant, so those values are contested. Extracted — bisoprolol: tlag 0.149, t1/2ka 2.31, V 218, CL 0.382, CLb 0.000882.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bisoprolol, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Fontana V et al., Chromosomal Region 11p14.1 is Associate…, Pharmacogenomics and person… (2022)
  ·  DOI: [10.2147/PGPM.S352719](https://doi.org/10.2147/PGPM.S352719)

## Model component
<dbs-pgx drug="bisoprolol" model-id="Bisoprolol_Fontana2022_reference" status="model_quarantined" stale="false" population="patients with non-ST elevation acute coronary syndrome on bisoprolol" measured-compound="bisoprolol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag_pop | `Q83` · tlag | 0.149 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row1:col1, tab_1:row1:col2 | — | 0.038 (None% RSE) |
| ka_pop | `Q95` · t1/2ka | 2.31 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row2:col1 | — | not captured |
| V_pop | `Q61` · V | 218.00 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row3:col1 | — | 0.03 (None% RSE) |
| Cl_pop | `Q22` · CL | 0.382 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row4:col1, tab_1:row4:col2 | — | 0.015 (None% RSE) |
| beta_Cl_DIURETIC | `Q23` · CLb | 0.000882 | not captured | not captured | not captured | not captured | llm (0.5) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('beta_Cl_tAGE', value '0.12') — already have one for this compound
- dropped duplicate Q22 ('beta_Cl_tWT', value '0.11') — already have one for this compound
- dropped duplicate Q23 ('beta_Cl_SMOKING', value '0.000335') — already have one for this compound
- dropped duplicate Q22 ('beta_Cl_SEX', value '0.00971') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col1'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bisoprolol
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_1:row5:col3 = '1.32x 10 -8'
- unparsed cell tab_1:row6:col3 = '8.96x 10 -10'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |
| `gpt-oss:120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b]` | not captured | 0.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta_cl_diuretic]` | 0.000882 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_pop]` | 0.382 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_pop]` | not captured | 13.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka_pop]` | 2.31 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka_pop]` | not captured | 2.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag_pop]` | 0.149 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag_pop]` | not captured | 3.17 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_pop]` | 218.00 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_pop]` | not captured | 218.00 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | bisoprolol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bisoprolol | unknown | mismatch |
| `gpt-oss:120b` | `parameters[b]` | not captured | 0.05 | only_one_extracted |
| `gpt-oss:120b` | `parameters[beta_cl_diuretic]` | 0.000882 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka_pop].parameter_id` | Q95 | Q49 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row3:col1'] |
| C5_unit_missing_Q83 | fail | [time] | not captured | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['tab_1:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.382 | not captured | not captured | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_bisoprolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fontana_2022` / `Fontana_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_bisoprolol/models/modelica/_needs_review/Bisoprolol_Fontana2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_bisoprolol/models/modelica/_needs_review/Bisoprolol_Fontana2022_reference.deviation.json`


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 10:08 UTC</sub>
