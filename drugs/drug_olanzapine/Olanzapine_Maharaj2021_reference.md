<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;olanzapine&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/&quot;},{&quot;label&quot;:&quot;Maharaj_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olanzapine_Zang2024_reference&quot;,&quot;label&quot;:&quot;Zang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Zang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olanzapine_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olanzapine_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olanzapine_Johnson2011_reference&quot;,&quot;label&quot;:&quot;Johnson_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Johnson2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# olanzapine — `Olanzapine_Maharaj2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-06 16:06 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The olanzapine model was quarantined because clearance, volume of distribution, absorption rate constant and lag time had no reported values and library placeholder values were substituted, and the invented absorption was judged unacceptable.

<div class="pk-model-meta" hidden drug="olanzapine" model-id="Olanzapine_Maharaj2021_reference" status="needs_review" stale="true" population="children receiving olanzapine per standard of care (infants to adolescents)" measured-compound="olanzapine" parameterization="apparent" topology="1C"></div>

## Citation
Maharaj AR, Wu H, Zimmerman KO, Autmizguine J, Kalra R, Al-Uzri A et al. Population pharmacokinetics of olanzapine in children. British journal of clinical pharmacology 87(2):542–554 (2021).
  ·  DOI: [10.1111/bcp.14414](https://doi.org/10.1111/bcp.14414)

## Population and dosing

**Population:** children receiving olanzapine per standard of care (infants to adolescents) · condition any indication, standard of care · age group mixed · n = 45.

**Dosing:** 1.4, 11.2 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| KA [1/h] | kabs | 0.758 | 1/h |  |
| CL/F [L/h, 70kg] | CL/F | 16 | L/h | 21 |
| V/F [L, 70kg] | Vnorm/F | 677.3 | L | 13 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The olanzapine model was quarantined because clearance, volume of distribution, absorption rate constant and lag time had no reported values and library placeholder values were substituted, and the invented absorption was judged unacceptable.**

The paper reports CL/F 26.5 L/h (70 kg) and V/F 914.1 L (70 kg), but the model builder substituted placeholder values for the missing clearance, volume of distribution, absorption rate constant and absorption lag time, so the model was held back rather than published with invented numbers. The defaulted absorption rate constant was flagged as an invented absorption, not acceptable, and the deviations check failed. Additionally, the reported unit 'weeks' for the TM50 parameter (value 317.3) could not be converted to SI, so that parameter reached the build without an SI value; a second reader also recorded no value (null) for this TM50 parameter against the record's 317.3. Extracted — olanzapine: kabs 0.758, CL/F 26.5 L/h, 70 kg, V/F 914 L, 70 kg, t1/2z 317 weeks, Hill 7.08, CL 0.796, prop_error 0.177, add_error 6.49.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has olanzapine, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| KA [1/h] | `Q49` · kabs | 0.758 | 1/h | 0.0002106 | 1/s | 1/h |  | llm_confirmed (0.6) | T3:row2:col1 |
| CL/F [L/h, 70kg] | `Q27` · CL/F | 16 | L/h | 4.444e-06 | m3/s | L/h | 21 | llm_confirmed (0.6) | T3:row3:col1, T3:row3:col2, T3:row3:col3, T3:row3:col4, T3:row3:col5 |
| V/F [L, 70kg] | `Q353` · Vnorm/F | 677.3 | L | 0.6773 | m3 | L | 13 | llm_corrected (0.6) | T3:row4:col1, T3:row4:col2, T3:row4:col3, T3:row4:col4, T3:row4:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'TM50 [weeks]' — extend the ontology if this is a real PK parameter (source ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row5:col4', 'T3:row5:col5'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row6:col1', 'T3:row6:col2', 'T3:row6:col3', 'T3:row6:col4', 'T3:row6:col5'])
- routed 'ӨCL,WT' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ԑ12 - proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'ԑ22 - additive error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: '&lt;2 years'
- dropped value-less row: '2–&lt;6 years'
- dropped value-less row: '6–&lt;12 years'
- dropped value-less row: '≥12 years'
- dropped value-less row: 'Overall'
- implicit units: 'CL/F [L/h, 70kg]' → L/h (from the paper text: "Text states 'CL/Fi is the participant-specific apparent clearance value (L/h)' and '21.6 vs. 16.8 L/h for the full and a")
- implicit units: 'V/F [L, 70kg]' → L (from the paper text: "Text refers to 'apparent volume of distribution (scaled to 70 kg)'; volumes of distribution are in L, consistent with al")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=olanzapine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row9:col1 = '0.309 [60.2%]'
- unparsed cell T3:row9:col3 = '0.035 [18.9%]'
- unparsed cell T3:row9:col4 = '0.283 [57.2%]'
- unparsed cell T3:row9:col5 = '0.688 [99.5%]'
- unparsed cell Maharaj_2021_table_4:row0:col2 = '0.35 (0.14–1.41)'
- unparsed cell Maharaj_2021_table_4:row0:col3 = '7.86 (2.32–31.39)'
- unparsed cell Maharaj_2021_table_4:row0:col4 = '18.56 (4.65–46.65)'
- unparsed cell Maharaj_2021_table_4:row1:col2 = '0.50 (0.18–1.7)'
- unparsed cell Maharaj_2021_table_4:row1:col3 = '15.16 (7.23–50.31)'
- unparsed cell Maharaj_2021_table_4:row1:col4 = '13.36 (3.86–35.86)'
- unparsed cell Maharaj_2021_table_4:row2:col2 = '0.24 (0.15–0.78)'
- unparsed cell Maharaj_2021_table_4:row2:col3 = '13.96 (6.34–44.71)'
- unparsed cell Maharaj_2021_table_4:row2:col4 = '26.92 (8.42–42.72)'
- unparsed cell Maharaj_2021_table_4:row3:col2 = '0.23 (0.12–0.47)'
- unparsed cell Maharaj_2021_table_4:row3:col3 = '18.69 (8.74–34.01)'
- unparsed cell Maharaj_2021_table_4:row3:col4 = '28.93 (14.11–56.44)'
- unparsed cell Maharaj_2021_table_4:row4:col2 = '0.37 (0.12–1.7)'
- unparsed cell Maharaj_2021_table_4:row4:col3 = '12.79 (2.32–50.31)'
- unparsed cell Maharaj_2021_table_4:row4:col4 = '17.65 (3.86–56.44)'
- companion parameter table 4 transcribed (5 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[v/f [l, 70kg]].parameter_id` | Q353 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[өcl,wt]` |  | 0.455 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | olanzapine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T3:row3:col1', 'T3:row3:col2', 'T3:row3:col3', 'T3:row3:col4', 'T3:row3:col5'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['T3:row4:col1', 'T3:row4:col2', 'T3:row4:col3', 'T3:row4:col4', 'T3:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T3:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16 L/h | ['T3:row3:col1', 'T3:row3:col2', 'T3:row3:col3', 'T3:row3:col4', 'T3:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 18.56 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 13.36 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 26.92 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 28.93 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 17.65 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bolanzapine%5D%20Olanzapine_Maharaj2021_reference&body=Drug%3A%20olanzapine%0ARecord%3A%20Olanzapine_Maharaj2021_reference%0APaper%3A%20Maharaj_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_olanzapine/Olanzapine_Maharaj2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 16:06 UTC</sub>
