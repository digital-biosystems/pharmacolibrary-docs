<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Courlet_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_reference&quot;,&quot;label&quot;:&quot;Marques_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Walsh_2023_Glucose&quot;,&quot;label&quot;:&quot;Walsh_2023 \u00b7 Glucose&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Walsh_2023_Glucose.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Courlet2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.538), gpt-oss:120b (not confirmed, agreement 0.615). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

**The salbutamol absorption half-life parameter t1/2ka carries a rate-constant unit (h−1) with value 1.47, a dimension mismatch on a structural parameter, so the record was rejected.**

The parameter labelled 'k a2 (h−1)' with value 1.47 is recorded as the half-life of the absorption phase, but a half-life should have dimensions of time, not inverse time — the reported unit h−1 could not be reconciled into a consistent dimension, giving a dimension mismatch on a structural parameter. A second reader also disagreed on this parameter, reading no value where the record holds 1.47, and additionally reported a urine production rate of 0.0426 that is absent from this record. Because the h−1 unit could not be converted to a standard unit, the parameter entered model construction without a consistent value. Extracted — salbutamol: Fab 0.2, kabs 31.6 h−1, t1/2ka 1.47 h−1, V3 203 L, kcomp 0.0432 h−1, CL 28 L h−1, V 167 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has salbutamol, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:40:28.869275+00:00) predates the upstream re-run (2026-10-07 14:20:02.345779+00:00). Current validate status: `extracted`.

## Citation
Courlet P et al., Model-based meta-analysis of salbutamol…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12773](https://doi.org/10.1002/psp4.12773)

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Courlet2022_reference" status="extracted" stale="true" population="healthy adults (MBMA of salbutamol PK studies)" measured-compound="salbutamol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F 1 | `Q40` · Fab | 0.2 | not captured | not captured | not captured | not captured | space_fold (0.95) | psp412773-tbl-0001:row2:col1, psp412773-fig-0001:caption | — | not captured |
| logitF 2 | `Q41` · FG | -0.328 | not captured | not captured | not captured | not captured | llm (0.6) | psp412773-tbl-0001:row3:col1 | — | not captured |
| k a1 (h−1) | `Q49` · kabs | 31.6 | h−1 | 0.008777777777777778 | [1] / [h] | not captured | llm (0.6) | psp412773-tbl-0001:row4:col1 | — | not captured |
| V 3 (L) | `Q77` · V3 | 205 | L | 0.20500000000000002 | [l] | not captured | space_fold (0.95) | psp412773-tbl-0001:row6:col1, psp412773-tbl-0001:row6:col2, psp412773-tbl-0001:row6:col3, psp412773-tbl-0001:row6:col4 | — | not captured |
| k 34 (h−1) | `Q48` · kcomp | 0.0468 | h−1 | 1.3000000000000001e-05 | [1] / [h] | not captured | space_fold (0.95) | psp412773-tbl-0001:row7:col1, psp412773-tbl-0001:row7:col2, psp412773-tbl-0001:row7:col3, psp412773-tbl-0001:row7:col4 | — | not captured |
| CL (L h−1) | `Q22` · CL | 28 | L h−1 | 7.777777777777777e-06 | [l] / [h] | not captured | exact (1.0) | psp412773-tbl-0001:row8:col1, psp412773-tbl-0001:row8:col2, psp412773-tbl-0001:row8:col3, psp412773-tbl-0001:row8:col4 | — | not captured |
| θ physical,UR_PROD | `Q900` · equation variable | -0.153 | not captured | not captured | not captured | not captured | llm (0.6) | psp412773-tbl-0001:row11:col1, psp412773-tbl-0001:row11:col2, psp412773-tbl-0001:row11:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q49 ('k a2 (h−1)', value '1.47') — already have one for this compound
- dropped unlinked row (NIL): 'UR_PROD (L h−1)' — extend the ontology if this is a real PK parameter (source ['psp412773-tbl-0001:row10:col1', 'psp412773-tbl-0001:row10:col3', 'psp412773-tbl-0001:row10:col4'])
- dropped value-less row: 'F 2'
- dropped value-less row: 'k a1'
- dropped value-less row: 'k a2'
- dropped value-less row: 'k 34'
- dropped value-less row: 'k 30'
- dropped value-less row: 'V 3'
- dropped value-less row: 'V u'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412773-tbl-0001:row10:col2 = '4.8 × 10−6'
- unparsed cell psp412773-tbl-0001:row11:col4 = '−0.254 to −0.020'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.538 (7/13 fields) | 6 |
| `gpt-oss:120b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k 34].value` | 0.0468 | 0.0432 | mismatch |
| `gpt-oss-120b` | `parameters[logitf 2].parameter_id` | Q41 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[ur_prod]` | not captured | 0.0426 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ physical,ur_prod]` | -0.153 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | salbutamol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | salbutamol | unknown | mismatch |
| `gpt-oss:120b` | `parameters[k a2]` | 1.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[logitf 2]` | not captured | -0.328 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ur_prod].parameter_id` | Q24 | Q30 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | salbutamol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | salbutamol | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row7:col1', 'psp412773-tbl-0001:row7:col2', 'psp412773-tbl-0001:row7:col3', 'psp412773-tbl-0001:row7:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412773-tbl-0001:row4:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412773-tbl-0001:row6:col1', 'psp412773-tbl-0001:row6:col2', 'psp412773-tbl-0001:row6:col3', 'psp412773-tbl-0001:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.0 | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28 L/h | not captured | not captured | ['psp412773-tbl-0001:row8:col1', 'psp412773-tbl-0001:row8:col2', 'psp412773-tbl-0001:row8:col3', 'psp412773-tbl-0001:row8:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_salbutamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Courlet_2022` / `Courlet_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:20 UTC</sub>
