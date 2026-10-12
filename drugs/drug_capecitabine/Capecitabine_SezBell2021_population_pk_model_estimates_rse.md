<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;S\u00e1ez-Bell\u00f3_2021 \u00b7 population_pk_model_estimates_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_SezBell2021_population_pk_model_estimates_rse`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The capecitabine colorectal-cancer model was held back as not simulated because only 2 of its 5 parameters (CL and V2) were usable; tlag, kabs and V2 were not covered, and Q was replaced by a placeholder default.**

The record lists five parameters for capecitabine: CL (12 L/h), V2 (13 L), tlag (29), kabs (15) and Q (17). The parameter coverage check found only 2 covered, with tlag, kabs and V2 neither carried into the model nor given placeholder values, despite values appearing in the record. The intercompartmental clearance Q was substituted with a placeholder default (Q1) because no source value was available. The model was built but has not been simulated yet. Extracted — capecitabine: CL 12 L/h, V2 13 L, tlag 29, kabs 15, Q 17.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has capecitabine, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Sáez-Belló M et al., Evaluation of ABC gene polymorphisms on…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14441](https://doi.org/10.1111/bcp.14441)

## Model component
<dbs-pgx drug="capecitabine" model-id="Capecitabine_SezBell2021_population_pk_model_estimates_rse" status="not_simulated" stale="false" population="adults with colorectal cancer" measured-compound="capecitabine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL₀ CAP (L/h) | `Q22` · CL | 12 | L/h | 3.3333333333333333e-06 | [l] / [h] | not captured | llm (0.6) | Sáez-Belló_2021_table_p5_1:row3:col2 | — | not captured |
| V₂ CAP (L) | `Q64` · V2 | 13 | L | 0.013000000000000001 | [l] | not captured | llm_confirmed (0.6) | Sáez-Belló_2021_table_p5_1:row9:col2 | — | not captured |
| t₁ag (%) | `Q83` · tlag | 29 | not captured | not captured | not captured | not captured | llm (0.6) | Sáez-Belló_2021_table_p5_1:row13:col2 | — | not captured |
| kₐ (%) | `Q49` · kabs | 15 | not captured | not captured | not captured | not captured | exact (1.0) | Sáez-Belló_2021_table_p5_1:row14:col2 | — | not captured |
| CL₂ (%) | `Q30` · Q | 17 | not captured | not captured | not captured | not captured | special_case (0.95) | Sáez-Belló_2021_table_p5_1:row16:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'beta_t1ag_oxaliplatin' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row1:col2'])
- dropped duplicate Q22 ('CL₂ CAP (L/h)', value '16') — already have one for this compound
- dropped duplicate Q22 ("CL₃ 5'-DFUR (L/h)", value '15') — already have one for this compound
- dropped unlinked row (NIL): 'beta_CL3_rs6720173' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row6:col2'])
- dropped duplicate Q22 ('CL₄ 5-FU (L/h)', value '23') — already have one for this compound
- dropped unlinked row (NIL): 'beta_CL4_rs2271862' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row8:col2'])
- dropped unlinked row (NIL): 'CL₀ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row15:col2'])
- dropped unlinked row (NIL): 'CL₃ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row17:col2'])
- dropped unlinked row (NIL): 'CL₄ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row18:col2'])
- dropped duplicate Q64 ('V₂ (%)', value '19') — already have one for this compound
- dropped unlinked row (NIL): 'CorrCL₂ − CL₀ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row20:col2'])
- dropped unlinked row (NIL): 'Corrkₐ − CL₀ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row21:col2'])
- dropped unlinked row (NIL): 'Corrkₐ − CL₂ (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row22:col2'])
- dropped unlinked row (NIL): 'CAP (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row24:col2'])
- dropped unlinked row (NIL): "5'-DFUR (%)" — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row25:col2'])
- dropped unlinked row (NIL): '5-FU (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row26:col2'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL₀ CAP (L/h)); Q64 (V₂ CAP (L)); Q30 (CL₂ (%))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=capecitabine
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- population split: 'population pk model estimates rse (%)' subgroup of Sáez-Belló_2021 (paper reports 3 populations: population pk model estimates rse (%), population pk model estimates shrinkage (%), population pk model estimates value)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Sáez-Belló_2021_table_p5_1:row21:col6 = '−88 to −71'
- unparsed cell Sáez-Belló_2021_table_p5_1:row22:col6 = '−101 to −87'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['capecitabine', "5'-deoxy-5-fluorouridine", 'metabolism'], ["5'-deoxy-5-fluorouridine", '5-fluorouracil', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[5'-dfur]` | not captured | 10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[5-fu]` | not captured | 11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta_t1ag_oxaliplatin]` | not captured | 8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 17 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1ag]` | 29 | not captured | only_one_extracted |
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
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row9:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row16:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row14:col2'] |
| C5_unit_missing_Q83 | fail | [time] | not captured | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row13:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.0 | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12 L/h | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13 L | not captured | not captured | ['Sáez-Belló_2021_table_p5_1:row9:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['V2', 'tlag', 'kabs'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_capecitabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sáez-Belló_2021` / `Sáez-Belló_2021::population_pk_model_estimates_rse`)
- model: `../../../knowledgebase/drugs/drug_capecitabine/models/modelica/Capecitabine_SezBell2021_population_pk_model_estimates_rse.mo`
- deviation: `../../../knowledgebase/drugs/drug_capecitabine/models/modelica/Capecitabine_SezBell2021_population_pk_model_estimates_rse.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 06:03 UTC</sub>
