<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Blesch_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Blesch2003_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.238). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The capecitabine model was quarantined because capecitabine's elimination clearance and intercompartmental clearance had no extracted values and library placeholder values were substituted, and the absorption parameters kabs (1.09) and tlag (5.52E-4) were not covered.**

The record covers only 4 of the 6 expected parameters: kabs and tlag were neither emitted nor defaulted. The model builder substituted placeholder values for capecitabine's elimination clearance and intercompartmental clearance (Q1), so the model was held back rather than published with invented numbers. The remaining parameters (V1 90.6, CL 75.8, V2 17.8, Q 1190, V3 73.6, CLR 0.615) were extracted, but the missing clearances make the capecitabine disposition incomplete. Extracted — capecitabine: kabs 1.09, tlag 0.000552, V1 90.6, CL 75.8, V2 17.8, Q 1.19e+03, V3 73.6, CLR 0.615.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has capecitabine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:36:45.530277+00:00) predates the upstream re-run (2026-10-07 16:28:00.760680+00:00). Current validate status: `needs_review`.

## Citation
Blesch KS et al., Clinical pharmacokinetic/pharmacodynami…, Investigational new drugs (2003)
  ·  DOI: [10.1023/a:1023525513696](https://doi.org/10.1023/a:1023525513696)

## Model component
<dbs-pgx drug="capecitabine" model-id="Capecitabine_Blesch2003_reference" status="needs_review" stale="true" population="cancer patients" measured-compound="capecitabine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA | `Q49` · kabs | 1.09 | not captured | not captured | not captured | 0.0788 | exact (1.0) | tab_0:row1:col2, tab_0:row1:col3, tab_0:row1:col4, tab_0:row1:col5, tab_0:row10:col4, tab_0:row10:col5 | — | not captured |
| TLAG | `Q83` · tlag | 5.52E-4 | not captured | not captured | not captured | 2.02E-4 | exact (1.0) | tab_0:row2:col2, tab_0:row2:col3 | — | not captured |
| V1 | `Q61` · V | 90.6 | not captured | not captured | not captured | 30 | exact (1.0) | tab_0:row3:col2, tab_0:row3:col3, tab_0:row3:col4 | — | not captured |
| CL1 | `Q22` · CL | 75.8 | not captured | not captured | not captured | 0.00952 | exact (1.0) | tab_0:row4:col2, tab_0:row4:col3, tab_0:row4:col4, tab_0:row4:col5 | — | not captured |
| V2 | `Q61` · V | 17.8 | not captured | not captured | not captured | not captured | exact (1.0) | tab_0:row5:col2 | — | not captured |
| CL2 | `Q22` · CL | 1190 | not captured | not captured | not captured | 0.0337 | exact (1.0) | tab_0:row6:col2, tab_0:row6:col3, tab_0:row6:col4, tab_0:row6:col5 | — | not captured |
| V3 | `Q61` · V | 73.6 | not captured | not captured | not captured | 0.0213 | exact (1.0) | tab_0:row7:col2, tab_0:row7:col3, tab_0:row7:col4, tab_0:row7:col5 | — | not captured |
| CL3 | `Q22` · CL | 27.5 | not captured | not captured | not captured | 0.0276 | exact (1.0) | tab_0:row8:col2, tab_0:row8:col3, tab_0:row8:col4, tab_0:row8:col5 | — | not captured |
| CLRCL3 | `Q26` · CLR | 0.615 | not captured | not captured | not captured | 0.0769 | llm (0.6) | tab_0:row14:col2, tab_0:row14:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'BSAV3' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col2', 'tab_0:row12:col3'])
- dropped duplicate Q26 ('CLRV3', value '0.394') — already have one for this compound
- dropped value-less row: 'APHCL2'
- dropped value-less row: 'Res. Error 5 H -DFUR'
- dropped value-less row: 'Res. Error 5-FU'
- dropped unlinked row (NIL): 'Res. Error FBAL 1' — extend the ontology if this is a real PK parameter (source ['tab_0:row26:col2', 'tab_0:row26:col3'])
- implicit units: LLM call failed (JSONDecodeError) — units left missing
- metabolite volume: 'V1' Q63→Q61 for 5'-DFUR — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V2' Q63→Q61 for 5-FU — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V3' Q63→Q61 for FBAL — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V1); Q22 (CL1); Q61 (V2); Q22 (CL2); Q61 (V3); Q22 (CL3)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=capecitabine
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 28 linked by role; re-tagged parent→5'-DFUR ×8, parent→5-FU ×7, parent→FBAL ×16
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_0:row2:col4 = '49 498'
- unparsed cell tab_0:row2:col5 = '182 000'
- unparsed cell tab_0:row18:col2 = 'À0.169'
- unparsed cell tab_0:row22:col4 = '39/51'
- unparsed cell tab_0:row25:col4 = '58/76'
- unparsed cell tab_0:row26:col4 = '34/44'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.238 (5/21 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['capecitabine', "5'-dfcr", 'metabolism'], ["5'-dfcr", "5'-dfur", 'metabolism'], ["5'-dfur", '5-fu', 'metabolism'], ['5-fu', 'fbal', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl1]` | not captured | 75.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl1]` | 75.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | not captured | 1190 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 1190 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl3]` | 27.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrcl3]` | not captured | 0.615 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrcl3]` | 0.615 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | not captured | 90.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 90.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | not captured | 17.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 17.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | not captured | 73.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 73.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | capecitabine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | capecitabine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col4', 'tab_0:row8:col5'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row14:col2', 'tab_0:row14:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_0:row1:col2', 'tab_0:row1:col3', 'tab_0:row1:col4', 'tab_0:row1:col5', 'tab_0:row10:col4', 'tab_0:row10:col5'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row5:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col2', 'tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5'] |
| C5_unit_missing_Q83 | fail | [time] | not captured | not captured | not captured | ['tab_0:row2:col2', 'tab_0:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 75.8 | not captured | not captured | ['tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['kabs', 'tlag'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 40 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_capecitabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Blesch_2003` / `Blesch_2003::reference`)
- model: `../../../knowledgebase/drugs/drug_capecitabine/models/modelica/_needs_review/Capecitabine_Blesch2003_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_capecitabine/models/modelica/_needs_review/Capecitabine_Blesch2003_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:28 UTC</sub>
