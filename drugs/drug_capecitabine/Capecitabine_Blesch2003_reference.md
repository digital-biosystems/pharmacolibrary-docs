<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Blesch_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Blesch2003_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:36 UTC) predates the latest extraction (2026-10-07 16:28 UTC); the status shown comes from the current checks. The capecitabine model was quarantined because capecitabine's elimination clearance and intercompartmental clearance had no extracted values and library placeholder values were substituted, and the absorption parameters kabs (1.09) and tlag (5.52E-4) were not covered.

<div class="pk-model-meta" hidden drug="capecitabine" model-id="Capecitabine_Blesch2003_reference" status="needs_review" stale="true" population="cancer patients" measured-compound="capecitabine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Blesch KS, Gieschke R, Tsukamoto Y, Reigner BG, Burger HU, Steimer JL. Clinical pharmacokinetic/pharmacodynamic and physiologically based pharmacokinetic modeling in new drug development: the capecitabine experience. Investigational new drugs 21(2):195–223 (2003).
  ·  DOI: [10.1023/a:1023525513696](https://doi.org/10.1023/a:1023525513696)

## Population and dosing

**Population:** cancer patients · condition cancer · age group adult.

**Dosing:** 829, 1255 mg/m2, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| KA | kabs | 1.09 |  | 0.0788 |
| TLAG | tlag | 5.52E-4 |  | 2.02E-4 |
| V1 | V | 90.6 |  | 30 |
| CL1 | CL | 75.8 |  | 0.00952 |
| V2 | V | 17.8 |  |  |
| CL2 | CL | 1190 |  | 0.0337 |
| V3 | V | 73.6 |  | 0.0213 |
| CL3 | CL | 27.5 |  | 0.0276 |
| CLRCL3 | CLR | 0.615 |  | 0.0769 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.238). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The capecitabine model was quarantined because capecitabine's elimination clearance and intercompartmental clearance had no extracted values and library placeholder values were substituted, and the absorption parameters kabs (1.09) and tlag (5.52E-4) were not covered.**

The record covers only 4 of the 6 expected parameters: kabs and tlag were neither emitted nor defaulted. The model builder substituted placeholder values for capecitabine's elimination clearance and intercompartmental clearance (Q1), so the model was held back rather than published with invented numbers. The remaining parameters (V1 90.6, CL 75.8, V2 17.8, Q 1190, V3 73.6, CLR 0.615) were extracted, but the missing clearances make the capecitabine disposition incomplete. Extracted — capecitabine: kabs 1.09, tlag 0.000552, V1 90.6, CL 75.8, V2 17.8, Q 1.19e+03, V3 73.6, CLR 0.615.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has capecitabine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | RSE% | link | source |
|---|---|---|---|---|---|---|
| KA | `Q49` · kabs | 1.09 |  | 0.0788 | exact (1) | tab_0:row1:col2, tab_0:row1:col3, tab_0:row1:col4, tab_0:row1:col5, tab_0:row10:col4, tab_0:row10:col5 |
| TLAG | `Q83` · tlag | 5.52E-4 |  | 2.02E-4 | exact (1) | tab_0:row2:col2, tab_0:row2:col3 |
| V1 | `Q61` · V | 90.6 |  | 30 | exact (1) | tab_0:row3:col2, tab_0:row3:col3, tab_0:row3:col4 |
| CL1 | `Q22` · CL | 75.8 |  | 0.00952 | exact (1) | tab_0:row4:col2, tab_0:row4:col3, tab_0:row4:col4, tab_0:row4:col5 |
| V2 | `Q61` · V | 17.8 |  |  | exact (1) | tab_0:row5:col2 |
| CL2 | `Q22` · CL | 1190 |  | 0.0337 | exact (1) | tab_0:row6:col2, tab_0:row6:col3, tab_0:row6:col4, tab_0:row6:col5 |
| V3 | `Q61` · V | 73.6 |  | 0.0213 | exact (1) | tab_0:row7:col2, tab_0:row7:col3, tab_0:row7:col4, tab_0:row7:col5 |
| CL3 | `Q22` · CL | 27.5 |  | 0.0276 | exact (1) | tab_0:row8:col2, tab_0:row8:col3, tab_0:row8:col4, tab_0:row8:col5 |
| CLRCL3 | `Q26` · CLR | 0.615 |  | 0.0769 | llm (0.6) | tab_0:row14:col2, tab_0:row14:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[cl1]` |  | 75.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl1]` | 75.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` |  | 1190 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 1190 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl3]` | 27.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrcl3]` |  | 0.615 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrcl3]` | 0.615 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 90.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 90.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 17.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 17.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 73.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 73.6 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | capecitabine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | capecitabine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col4', 'tab_0:row8:col5'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] |  | ['tab_0:row14:col2', 'tab_0:row14:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['tab_0:row1:col2', 'tab_0:row1:col3', 'tab_0:row1:col4', 'tab_0:row1:col5', 'tab_0:row10:col4', 'tab_0:row10:col5'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['tab_0:row5:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['tab_0:row7:col2', 'tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5'] |
| C5_unit_missing_Q83 | fail | [time] |  | ['tab_0:row2:col2', 'tab_0:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 75.8 | ['tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['kabs', 'tlag'] |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 40 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_Blesch2003_reference&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_Blesch2003_reference%0APaper%3A%20Blesch_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_capecitabine/Capecitabine_Blesch2003_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:28 UTC</sub>
