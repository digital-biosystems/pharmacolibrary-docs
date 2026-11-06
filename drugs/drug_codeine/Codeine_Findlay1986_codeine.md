<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/&quot;},{&quot;label&quot;:&quot;Findlay_1986 \u00b7 codeine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Guay1987_reference&quot;,&quot;label&quot;:&quot;Guay_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Guay1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019v2_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_KuKanich2016_reference&quot;,&quot;label&quot;:&quot;KuKanich_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_KuKanich2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# codeine — `Codeine_Findlay1986_codeine`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; aUC has no unit (+1 more).

<div class="pk-model-meta" hidden drug="codeine" model-id="Codeine_Findlay1986_codeine" status="needs_review" stale="false" population="healthy adults" measured-compound="codeine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Findlay JW, Fowle AS, Butz RF, Jones EC, Weatherley BC, Welch RM et al. Comparative disposition of codeine and pholcodine in man after single oral doses. British journal of clinical pharmacology 22(1):61–71 (1986).
  ·  DOI: [10.1111/j.1365-2125.1986.tb02881.x](https://doi.org/10.1111/j.1365-2125.1986.tb02881.x)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;10.

**Dosing:** 15, 30, 60 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng ml⁻¹) | Cmax | 36 | ng ml⁻¹ |
| tmax (h) | tmax | 0.5 | h |
| AUC* (ng ml⁻¹ h) | AUC | 108 | ng ml⁻¹ h |
| clearance (CL/F) | CL | 1286 | ml min-1 |
| Volume of Distribution (L/kg) | V | 3.2 | L/kg |
| Ka (hour−1) | kabs | 19.3 | hour−1 |
| tlapo | tlag | 2.35 | (h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; aUC has no unit (+1 more).**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Dean_2004, Gretler_2020, Persson_1992) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — codeine: Cmax 36 ng ml⁻¹, tmax 0.5 h, AUC 108 ng ml⁻¹ h, CL 1.29e+03 ml min-1, V 3.2 L/kg, kabs 19.3 hour−1, tlag 2.35 (h).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng ml⁻¹) | `Q32` · Cmax | 36 | ng ml⁻¹ |  |  | ng/ml | exact (1) | Findlay_1986_table_1:row0:col3, Findlay_1986_table_1:row1:col3, Findlay_1986_table_1:row2:col3, Findlay_1986_table_1:row3:col3, Findlay_1986_table_1:row4:col3, Findlay_1986_table_1:row5:col3, Findlay_1986_table_1:row12:col6, Findlay_1986_table_1:row13:col6, Findlay_1986_table_1:row14:col6, Findlay_1986_table_1:row15:col6, Findlay_1986_table_1:row16:col6, Findlay_1986_table_1:row17:col6, Findlay_1986_table_1:row24:col9, Findlay_1986_table_1:row25:col9, Findlay_1986_table_1:row26:col9, Findlay_1986_table_1:row27:col9, Findlay_1986_table_1:row28:col9, Findlay_1986_table_1:row29:col9 |
| tmax (h) | `Q56` · tmax | 0.5 | h | 1800 | s | h | exact (1) | Findlay_1986_table_1:row0:col4, Findlay_1986_table_1:row1:col4, Findlay_1986_table_1:row2:col4, Findlay_1986_table_1:row3:col4, Findlay_1986_table_1:row4:col4, Findlay_1986_table_1:row5:col4, Findlay_1986_table_1:row12:col7, Findlay_1986_table_1:row13:col7, Findlay_1986_table_1:row14:col7, Findlay_1986_table_1:row15:col7, Findlay_1986_table_1:row16:col7, Findlay_1986_table_1:row17:col7, Findlay_1986_table_1:row24:col10, Findlay_1986_table_1:row25:col10, Findlay_1986_table_1:row26:col10, Findlay_1986_table_1:row27:col10, Findlay_1986_table_1:row28:col10, Findlay_1986_table_1:row29:col10 |
| AUC* (ng ml⁻¹ h) | `Q88` · AUC | 108 | ng ml⁻¹ h |  |  | ng/(h·ml) | llm_confirmed (0.6) | Findlay_1986_table_1:row0:col5, Findlay_1986_table_1:row1:col5, Findlay_1986_table_1:row2:col5, Findlay_1986_table_1:row3:col5, Findlay_1986_table_1:row4:col5, Findlay_1986_table_1:row5:col5, Findlay_1986_table_1:row12:col8, Findlay_1986_table_1:row13:col8, Findlay_1986_table_1:row14:col8, Findlay_1986_table_1:row15:col8, Findlay_1986_table_1:row16:col8, Findlay_1986_table_1:row17:col8, Findlay_1986_table_1:row24:col11, Findlay_1986_table_1:row25:col11, Findlay_1986_table_1:row26:col11, Findlay_1986_table_1:row27:col11, Findlay_1986_table_1:row28:col11, Findlay_1986_table_1:row29:col11 |
| clearance (CL/F) | `Q22` · CL | 1286 | ml min-1 | 2.143e-05 | m3/s | L/h | exact (1) | Findlay_1986:results_prose |
| Volume of Distribution (L/kg) | `Q61` · V | 3.2 | L/kg | 0.224 | m3 | L | review_gapfill (0.7) | Dean_2004:review |
| Ka (hour−1) | `Q49` · kabs | 19.3 | hour−1 | 0.005361 | 1/s | 1/h | review_gapfill (0.7) | Gretler_2020:review |
| tlapo | `Q83` · tlag | 2.35 | (h) | 8460 | s | h | review_gapfill (0.7) | Persson_1992:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Subject' — extend the ontology if this is a real PK parameter (source ['Findlay_1986_table_1:row0:col2', 'Findlay_1986_table_1:row1:col2', 'Findlay_1986_table_1:row2:col2', 'Findlay_1986_table_1:row3:col2'])
- unit_dimension_unknown: 'ng ml⁻¹ h' (AUC)
- salvaged Q22 ('clearance (CL/F)'=1286) from results prose — parameter table was unreadable
- implicit units: 'AUC* (ng ml⁻¹ h)' — the LLM proposed 'ng ml⁻¹ h', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=codeine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- population split: 'codeine' subgroup of Findlay_1986 (paper reports 1 populations: codeine)
- gap-filled Q61 (V) from Dean_2004's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gretler_2020's review values (primary lacked it)
- gap-filled Q83 (tlag) from Persson_1992's review values (primary lacked it)

**Extraction notes:**
- table Findlay_1986_table_2: competing_summary_estimates
- transposed table Findlay_1986_table_2: logical view retains original source coordinates
- transposed table Findlay_1986_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (116 record(s))
- table Findlay_1986_table_3: competing_summary_estimates
- transposed table Findlay_1986_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (48 record(s))
- transposed table Findlay_1986_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (36 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[auc*].value` | 108 | 6152 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 1001 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 1286 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax].value` | 36 | 1383 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2z]` |  | 37.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax].value` | 0.5 | 1.3 | mismatch |
| `gpt-oss-120b` | `parameters[v/f]` |  | 3207 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` |  | 265 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Findlay_1986_table_1:row0:col3', 'Findlay_1986_table_1:row1:col3', 'Findlay_1986_table_1:row2:col3', 'Findlay_1986_table_1:row3:col3', 'Findlay_1986_table_1:row4:col3', 'Findlay_1986_table_1:row5:col3', 'Findlay_1986_table_1:row12:col6', 'Findlay_1986_table_1:row13:col6', 'Findlay_1986_table_1:row14:col6', 'Findlay_1986_table_1:row15:col6', 'Findlay_1986_table_1:row16:col6', 'Findlay_1986_table_1:row17:col6', 'Findlay_1986_table_1:row24:col9', 'Findlay_1986_table_1:row25:col9', 'Findlay_1986_table_1:row26:col9', 'Findlay_1986_table_1:row27:col9', 'Findlay_1986_table_1:row28:col9', 'Findlay_1986_table_1:row29:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gretler_2020:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Findlay_1986_table_1:row0:col4', 'Findlay_1986_table_1:row1:col4', 'Findlay_1986_table_1:row2:col4', 'Findlay_1986_table_1:row3:col4', 'Findlay_1986_table_1:row4:col4', 'Findlay_1986_table_1:row5:col4', 'Findlay_1986_table_1:row12:col7', 'Findlay_1986_table_1:row13:col7', 'Findlay_1986_table_1:row14:col7', 'Findlay_1986_table_1:row15:col7', 'Findlay_1986_table_1:row16:col7', 'Findlay_1986_table_1:row17:col7', 'Findlay_1986_table_1:row24:col10', 'Findlay_1986_table_1:row25:col10', 'Findlay_1986_table_1:row26:col10', 'Findlay_1986_table_1:row27:col10', 'Findlay_1986_table_1:row28:col10', 'Findlay_1986_table_1:row29:col10'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Dean_2004:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Persson_1992:review'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | ng ml⁻¹ h | ['Findlay_1986_table_1:row0:col5', 'Findlay_1986_table_1:row1:col5', 'Findlay_1986_table_1:row2:col5', 'Findlay_1986_table_1:row3:col5', 'Findlay_1986_table_1:row4:col5', 'Findlay_1986_table_1:row5:col5', 'Findlay_1986_table_1:row12:col8', 'Findlay_1986_table_1:row13:col8', 'Findlay_1986_table_1:row14:col8', 'Findlay_1986_table_1:row15:col8', 'Findlay_1986_table_1:row16:col8', 'Findlay_1986_table_1:row17:col8', 'Findlay_1986_table_1:row24:col11', 'Findlay_1986_table_1:row25:col11', 'Findlay_1986_table_1:row26:col11', 'Findlay_1986_table_1:row27:col11', 'Findlay_1986_table_1:row28:col11', 'Findlay_1986_table_1:row29:col11'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1286 | ['Findlay_1986:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 77.2 L/h | ['Findlay_1986:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 224 L | ['Dean_2004:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcodeine%5D%20Codeine_Findlay1986_codeine&body=Drug%3A%20codeine%0ARecord%3A%20Codeine_Findlay1986_codeine%0APaper%3A%20Findlay_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_codeine/Codeine_Findlay1986_codeine%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 19:30 UTC</sub>
