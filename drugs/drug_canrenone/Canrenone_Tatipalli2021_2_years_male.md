<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;canrenone&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/&quot;},{&quot;label&quot;:&quot;Tatipalli_2021 \u00b7 2_years_male&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canrenone_Suyagh2012_final_pharmacokinetic_model&quot;,&quot;label&quot;:&quot;Suyagh_2012_final_pharmacokinetic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canrenone_Suyagh2012_median&quot;,&quot;label&quot;:&quot;Suyagh_2012_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_median.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canrenone_Suyagh2013_reference&quot;,&quot;label&quot;:&quot;Suyagh_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canrenone — `Canrenone_Tatipalli2021_2_years_male`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="canrenone" model-id="Canrenone_Tatipalli2021_2_years_male" status="needs_review" stale="false" population="healthy adults" measured-compound="spironolactone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Tatipalli M, Siripuram VK, Long T, Shuster D, Bernstein G, Martineau P et al. Model-Informed Optimization of a Pediatric Clinical Pharmacokinetic Trial of a New Spironolactone Liquid Formulation. Pharmaceutics 13(6) (2021).
  ·  DOI: [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = : 92.

**Dosing:** 25, 100 mg, oral, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 165.27 | L/h |
| V2 | V1 | 87.00 | L |
| Q | Q | 23.62 | L/h |
| V3 | V2 | 130.76 | L |
| ka | kabs | 5.22 | 1/h |
| V4 | V1 | 31.81 | L |
| CLM | CL | 4.47 | L/h |
| Q1 | Q | 15.76 | L/h |
| V5 | V2 | 75.39 | L |
| ALAG1 | tlag | 0.160 | h |
| Fm | fm | 0.70 |  |
| CLM1 | CLfm | 57.02 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — canrenone: CL 165 L/h, V1 87 L, Q 23.6 L/h, V2 131 L, kabs 5.22 1/h, V1 31.8 L, CL 4.47 L/h, Q 15.8 L/h, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has spironolactone, the second reading canrenone; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 165.27 | L/h | 4.591e-05 | m3/s | L/h | exact (1) | Tatipalli_2021_table_4:row0:col4 |
| V2 | `Q63` · V1 | 87.00 | L | 0.087 | m3 | L | exact (1) | Tatipalli_2021_table_4:row1:col4 |
| Q | `Q30` · Q | 23.62 | L/h | 6.561e-06 | m3/s | L/h | exact (1) | Tatipalli_2021_table_4:row2:col4 |
| V3 | `Q64` · V2 | 130.76 | L | 0.1308 | m3 | L | exact (1) | Tatipalli_2021_table_4:row3:col4 |
| ka | `Q49` · kabs | 5.22 | 1/h | 0.00145 | 1/s | 1/h | exact (1) | Tatipalli_2021_table_4:row4:col4 |
| V4 | `Q63` · V1 | 31.81 | L | 0.03181 | m3 | L | exact (1) | Tatipalli_2021_table_4:row5:col4 |
| CLM | `Q22` · CL | 4.47 | L/h | 1.242e-06 | m3/s | L/h | exact (1) | Tatipalli_2021_table_4:row6:col4 |
| Q1 | `Q30` · Q | 15.76 | L/h | 4.378e-06 | m3/s | L/h | exact (1) | Tatipalli_2021_table_4:row7:col4 |
| V5 | `Q64` · V2 | 75.39 | L | 0.07539 | m3 | L | exact (1) | Tatipalli_2021_table_4:row8:col4 |
| ALAG1 | `Q83` · tlag | 0.160 | h | 576 | s | h | exact (1) | Tatipalli_2021_table_4:row9:col4 |
| Fm | `Q45` · fm | 0.70 |  |  |  |  | exact (1) | Tatipalli_2021_table_4:row10:col4 |
| CLM1 | `Q370` · CLfm | 57.02 | L/h | 1.584e-05 | m3/s | L/h | exact (1) | Tatipalli_2021_table_4:row11:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'CL' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour' but does not explicitly state the unit for CL. However, CL is a clear")
- implicit units: 'V2' → L (from the popPK convention: "The table caption defines 'L, liter'. V2 is a volume of distribution parameter, and the value 87.00 is consistent with L")
- implicit units: 'Q' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. Q is an intercompartmental clearance parameter, and the value 23.62 ")
- implicit units: 'V3' → L (from the popPK convention: "The table caption defines 'L, liter'. V3 is a volume of distribution parameter, and the value 130.76 is consistent with ")
- implicit units: 'ka' → 1/h (from the popPK convention: "The table caption defines 'h, hour'. ka is a first-order absorption rate constant, and the value 5.22 is consistent with")
- implicit units: 'V4' → L (from the popPK convention: "The table caption defines 'L, liter'. V4 is a volume of distribution parameter, and the value 31.81 is consistent with L")
- implicit units: 'CLM' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. CLM is a clearance parameter, and the value 4.47 is consistent with ")
- implicit units: 'Q1' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. Q1 is an intercompartmental clearance parameter, and the value 15.76")
- implicit units: 'V5' → L (from the popPK convention: "The table caption defines 'L, liter'. V5 is a volume of distribution parameter, and the value 75.39 is consistent with L")
- implicit units: 'ALAG1' → h (from the popPK convention: "The table caption defines 'h, hour'. ALAG1 is a lag time parameter, and the value 0.160 is consistent with h.")
- implicit units: 'CLM1' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. CLM1 is a metabolic clearance parameter, and the value 57.02 is cons")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (V2); Q30 (Q); Q64 (V3); Q63 (V4); Q22 (CLM); Q30 (Q1); Q64 (V5)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=spironolactone
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- population split: '2 years—male' subgroup of Tatipalli_2021 (paper reports 9 populations: 12 years—female, 12 years—male, 17 years—female, 17 years—male, 2 years—female, 2 years—male, 6 years—female, 6 years—male, adults)
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 199 linked by role; re-tagged parent→canrenone ×106
- review gap-fill skipped: this record measures 'spironolactone', not canrenone — the review values are the parent's

**Extraction notes:**
- transposed table Tatipalli_2021_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tatipalli_2021_table_4:row3:col1 = '(h−1)'
- companion parameter table 4 transcribed (108 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (7/21 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['spironolactone', 'canrenone', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[clm1]` | 57.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm]` |  | 4.47 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm]` | 4.47 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` |  | 0.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` | 0.70 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1]` | 15.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2].parameter_id` | Q63 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[v3].parameter_id` | Q64 | Q77 | mismatch |
| `gpt-oss-120b` | `parameters[v4]` |  | 31.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4]` | 31.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v5]` | 75.39 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | spironolactone | canrenone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tatipalli_2021_table_4:row0:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tatipalli_2021_table_4:row6:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tatipalli_2021_table_4:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tatipalli_2021_table_4:row7:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tatipalli_2021_table_4:row11:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tatipalli_2021_table_4:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tatipalli_2021_table_4:row1:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tatipalli_2021_table_4:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tatipalli_2021_table_4:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tatipalli_2021_table_4:row8:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tatipalli_2021_table_4:row9:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 165.3 | ['Tatipalli_2021_table_4:row0:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 165 L/h | ['Tatipalli_2021_table_4:row0:col4'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.47 L/h | ['Tatipalli_2021_table_4:row6:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 87 L | ['Tatipalli_2021_table_4:row1:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 31.8 L | ['Tatipalli_2021_table_4:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 131 L | ['Tatipalli_2021_table_4:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 75.4 L | ['Tatipalli_2021_table_4:row8:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcanrenone%5D%20Canrenone_Tatipalli2021_2_years_male&body=Drug%3A%20canrenone%0ARecord%3A%20Canrenone_Tatipalli2021_2_years_male%0APaper%3A%20Tatipalli_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_canrenone/Canrenone_Tatipalli2021_2_years_male%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 17:47 UTC</sub>
