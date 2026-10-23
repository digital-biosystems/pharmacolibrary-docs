<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;S\u00e1ez-Bell\u00f3_2021 \u00b7 population_pk_model_estimates_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_SezBell2021_population_pk_model_estimates_rse`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="capecitabine" model-id="Capecitabine_SezBell2021_population_pk_model_estimates_rse" status="not_simulated" stale="false" population="adults with colorectal cancer" measured-compound="capecitabine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Sáez-Belló M, Mangas-Sanjuán V, Martínez-Gómez MA, López-Montenegro Soria MÁ, Climente-Martí M, Merino-Sanjuán M. Evaluation of ABC gene polymorphisms on the pharmacokinetics and pharmacodynamics of capecitabine in colorectal patients: Implications for dosing recommendations. British journal of clinical pharmacology 87(3):905–915 (2021).
  ·  DOI: [10.1111/bcp.14441](https://doi.org/10.1111/bcp.14441)

## Population and dosing

**Population:** adults with colorectal cancer · condition colorectal cancer · age group adult · n = 48.

**Dosing:** 1250, 2500 mg/m2, oral, multiple, every 24 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL₀ CAP (L/h) | CL | 12 | L/h |
| V₂ CAP (L) | V2 | 13 | L |
| t₁ag (%) | tlag | 29 |  |
| kₐ (%) | kabs | 15 |  |
| CL₂ (%) | Q | 17 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The capecitabine colorectal-cancer model was held back as not simulated because only 2 of its 5 parameters (CL and V2) were usable; tlag, kabs and V2 were not covered, and Q was replaced by a placeholder default.**

The record lists five parameters for capecitabine: CL (12 L/h), V2 (13 L), tlag (29), kabs (15) and Q (17). The parameter coverage check found only 2 covered, with tlag, kabs and V2 neither carried into the model nor given placeholder values, despite values appearing in the record. The intercompartmental clearance Q was substituted with a placeholder default (Q1) because no source value was available. The model was built but has not been simulated yet. Extracted — capecitabine: CL 12 L/h, V2 13 L, tlag 29, kabs 15, Q 17.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has capecitabine, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL₀ CAP (L/h) | `Q22` · CL | 12 | L/h | 3.333e-06 | m3/s | l/h | llm (0.6) | Sáez-Belló_2021_table_p5_1:row3:col2 |
| V₂ CAP (L) | `Q64` · V2 | 13 | L | 0.013 | m3 | l | llm_confirmed (0.6) | Sáez-Belló_2021_table_p5_1:row9:col2 |
| t₁ag (%) | `Q83` · tlag | 29 |  |  |  |  | llm (0.6) | Sáez-Belló_2021_table_p5_1:row13:col2 |
| kₐ (%) | `Q49` · kabs | 15 |  |  |  |  | exact (1) | Sáez-Belló_2021_table_p5_1:row14:col2 |
| CL₂ (%) | `Q30` · Q | 17 |  |  |  |  | special_case (0.95) | Sáez-Belló_2021_table_p5_1:row16:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[5'-dfur]` |  | 10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[5-fu]` |  | 11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta_t1ag_oxaliplatin]` |  | 8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1ag]` | 29 |  | only_one_extracted |
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
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Sáez-Belló_2021_table_p5_1:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Sáez-Belló_2021_table_p5_1:row9:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Sáez-Belló_2021_table_p5_1:row16:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Sáez-Belló_2021_table_p5_1:row14:col2'] |
| C5_unit_missing_Q83 | fail | [time] |  | ['Sáez-Belló_2021_table_p5_1:row13:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12 | ['Sáez-Belló_2021_table_p5_1:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12 L/h | ['Sáez-Belló_2021_table_p5_1:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13 L | ['Sáez-Belló_2021_table_p5_1:row9:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['V2', 'tlag', 'kabs'] |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_SezBell2021_population_pk_model_estimates_rse&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_SezBell2021_population_pk_model_estimates_rse%0APaper%3A%20S%C3%A1ez-Bell%C3%B3_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_capecitabine/Capecitabine_SezBell2021_population_pk_model_estimates_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-15 06:03 UTC</sub>
