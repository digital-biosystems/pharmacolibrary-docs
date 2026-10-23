<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Sulfadoxine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/&quot;},{&quot;label&quot;:&quot;de_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadoxine_Trenque2004_reference&quot;,&quot;label&quot;:&quot;Trenque_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_Trenque2004_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadoxine_Corvaisier2004_reference&quot;,&quot;label&quot;:&quot;Corvaisier_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_Corvaisier2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadoxine_de2018_reference&quot;,&quot;label&quot;:&quot;de_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_de2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sulfadoxine — `Sulfadoxine_de2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The sulfadoxine record was rejected because the covariate scenario yields a negative clearance: the reported -75.7% change in CL when non-pregnant, applied to the CL/F of 0.0303 L/h, fails the plausibility check.

<div class="pk-model-meta" hidden drug="Sulfadoxine" model-id="Sulfadoxine_de2017_reference" status="rejected" stale="false" population="pregnant and postpartum women" measured-compound="sulfadoxine" parameterization="apparent" topology="2C"></div>

## Citation
de Kock M, Tarning J, Workman L, Nyunt MM, Adam I, Barnes KI et al. Pharmacokinetics of Sulfadoxine and Pyrimethamine for Intermittent Preventive Treatment of Malaria During Pregnancy and After Delivery. CPT: pharmacometrics & systems pharmacology 6(7):430–438 (2017).
  ·  DOI: [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181)

## Population and dosing

**Population:** pregnant and postpartum women · condition malaria prophylaxis during pregnancy (IPTp) · age group adult · n = 98.

**Dosing:** 1500 mg, oral, multiple, every 672 h.

**Dosed compound ≠ measured compound:** dosed sulfadoxine/pyrimethamine, measured sulfadoxine.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F | Fab | 1 |  |
| CL/F during pregnancy [L/h]b | CL/F | 0.0303 | L/h |
| Vc/F [L]b | V1/F | 14.1 | L |
| ka [/h] | kabs | 0.531 | /h |
| Qp1/F [L/h]b | Q/F | 0.0252 | L/h |
| Vp1/F [L]b | V2/F | 179 | L |
| θRBC/PL [fraction of one] | Kp | 0.155 |  |
| Change in CL when non‐pregnant [%] | CL_ratio | -75.7 |  |
| T50 [weeks] | t1/2z | 6.35 | weeks |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The sulfadoxine record was rejected because the covariate scenario yields a negative clearance: the reported -75.7% change in CL when non-pregnant, applied to the CL/F of 0.0303 L/h, fails the plausibility check.**

The model is a two-compartment structure for sulfadoxine in pregnant and postpartum women, with CL/F 0.0303 L/h, V1/F 14.1 L, kabs 0.531 /h, Q/F 0.0252 L/h, V2/F 179 L, Fab 1, Kp 0.155, and a terminal half-life t1/2z of 6.35 weeks. The failed check concerns the clearance ratio parameter, reported as a -75.7% change in CL when non-pregnant, which was judged implausible in a covariate scenario (negative clearance or volume). Separately, the unit 'weeks' reported for t1/2z could not be converted to SI units, so this half-life was carried without a usable numeric value; this is a limitation of the data handling rather than a finding about the record itself. Extracted — sulfadoxine: Fab 1, CL/F 0.0303 L/h, V1/F 14.1 L, kabs 0.531 /h, Q/F 0.0252 L/h, V2/F 179 L, Kp 0.155, CL_ratio -75.7, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has sulfadoxine, the second reading sulfadoxine and pyrimethamine; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | psp412181-tbl-0002:row2:col1 |
| CL/F during pregnancy [L/h]b | `Q27` · CL/F | 0.0303 | L/h | 8.417e-09 | m3/s | l/h | llm_confirmed (0.6) | psp412181-tbl-0002:row3:col1 |
| Vc/F [L]b | `Q290` · V1/F | 14.1 | L | 0.0141 | m3 | l | llm_confirmed (0.6) | psp412181-tbl-0002:row4:col1 |
| ka [/h] | `Q49` · kabs | 0.531 | /h | 0.0001475 | 1/s | 1/h | llm_confirmed (0.6) | psp412181-tbl-0002:row5:col1 |
| Qp1/F [L/h]b | `Q69` · Q/F | 0.0252 | L/h | 7e-09 | m3/s | l/h | llm_confirmed (0.6) | psp412181-tbl-0002:row6:col1 |
| Vp1/F [L]b | `Q82` · V2/F | 179 | L | 0.179 | m3 | l | llm (0.6) | psp412181-tbl-0002:row7:col1 |
| θRBC/PL [fraction of one] | `Q410` · Kp | 0.155 |  |  |  |  | llm (0.6) | psp412181-tbl-0002:row10:col1 |
| Change in CL when non‐pregnant [%] | `Q31` · CL_ratio | -75.7 |  |  |  |  | llm_corrected (0.6) | psp412181-tbl-0002:row11:col1 |
| T50 [weeks] | `Q57` · t1/2z | 6.35 | weeks |  |  | weeks | llm (0.6) | psp412181-tbl-0002:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'γ – shape factor' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412181-tbl-0002:row13:col1'])
- routed 'Site effect (scaling on observations) in Mozambique [%]' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Site effect (scaling on observations) in Sudan [%]' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Site effect (scaling on observations) in Zambia [%]' — extend the ontology if this is a real PK parameter (source ['psp412181-tbl-0002:row17:col1'])
- dropped unlinked row (NIL): 'Mali' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row1:col4', 'de_2017_table_3:row1:col5'])
- dropped unlinked row (NIL): 'Mozambique' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row6:col4', 'de_2017_table_3:row6:col5'])
- dropped unlinked row (NIL): 'Sudan' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row11:col4', 'de_2017_table_3:row11:col5'])
- dropped unlinked row (NIL): 'Zambia' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row16:col4', 'de_2017_table_3:row16:col5'])
- dropped unlinked row (NIL): 'Total' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row21:col4', 'de_2017_table_3:row21:col5'])
- implicit units: 'Change in CL when non‐pregnant [%]' — the LLM proposed '%', whose dimension does not fit Q31; left unset
- implicit units: 'T50 [weeks]' → weeks (from the paper text: "Parameter listed as 'T50 [weeks] = 6.35'; text states the postpartum clearance decline occurs over '13 weeks'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulfadoxine
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412181-tbl-0002:row3:col2 = '0.0185, 0.0349'
- unparsed cell psp412181-tbl-0002:row4:col2 = '13.2, 14.4'
- unparsed cell psp412181-tbl-0002:row4:col4 = '151, 166'
- unparsed cell psp412181-tbl-0002:row5:col2 = '0.464, 0.565'
- unparsed cell psp412181-tbl-0002:row5:col4 = '1.11, 2.70'
- unparsed cell psp412181-tbl-0002:row6:col2 = '0.0136, 0.0269'
- unparsed cell psp412181-tbl-0002:row6:col4 = '0.72, 1.61'
- unparsed cell psp412181-tbl-0002:row7:col2 = '82, 212'
- unparsed cell psp412181-tbl-0002:row7:col4 = '23.9, 32.1'
- unparsed cell psp412181-tbl-0002:row8:col4 = '0.064, 0.166'
- unparsed cell psp412181-tbl-0002:row9:col4 = '142, 317'
- unparsed cell psp412181-tbl-0002:row10:col2 = '0.023, 0.189'
- unparsed cell psp412181-tbl-0002:row10:col4 = '0.106, 0.525'
- unparsed cell psp412181-tbl-0002:row11:col2 = '−88.7, −66.6'
- unparsed cell psp412181-tbl-0002:row11:col4 = '12.3, 24.9'
- unparsed cell psp412181-tbl-0002:row12:col2 = '5.47, 6.75'
- unparsed cell psp412181-tbl-0002:row13:col2 = '2.90, 7.41'
- unparsed cell psp412181-tbl-0002:row14:col4 = '−28.4, −17.4'
- unparsed cell psp412181-tbl-0002:row15:col2 = '8.2, 24.6'
- unparsed cell psp412181-tbl-0002:row15:col4 = '41.5, 60.6'
- unparsed cell psp412181-tbl-0002:row16:col2 = '4.8, 20.0'
- unparsed cell psp412181-tbl-0002:row16:col4 = '19.6, 35.6'
- unparsed cell psp412181-tbl-0002:row17:col2 = '−30.7, −22.2'
- unparsed cell psp412181-tbl-0002:row17:col4 = '−12.1, −3.9'
- unparsed cell psp412181-tbl-0002:row18:col2 = '21.8, 51.2'
- unparsed cell psp412181-tbl-0002:row18:col4 = '7.1, 16.9'
- unparsed cell psp412181-tbl-0002:row19:col2 = '16.7, 22.9'
- unparsed cell psp412181-tbl-0002:row19:col4 = '12.9, 21.5'
- unparsed cell psp412181-tbl-0002:row20:col4 = '11.8, 22.3'
- unparsed cell psp412181-tbl-0002:row21:col2 = '42.4, 70.1'
- unparsed cell psp412181-tbl-0002:row22:col2 = '55.9, 71.9'
- unparsed cell psp412181-tbl-0002:row23:col2 = '2.00, 2.21'
- unparsed cell psp412181-tbl-0002:row23:col4 = '2.01, 2.68'
- unparsed cell psp412181-tbl-0002:row24:col2 = '14.8, 17.5'
- unparsed cell psp412181-tbl-0002:row24:col4 = '15.1, 18.7'
- unparsed cell psp412181-tbl-0002:row25:col2 = '54.2, 63.9'
- unparsed cell de_2017_table_3:row18:col1 = '3.26 (3.25, 3.35)'
- unparsed cell de_2017_table_3:row18:col3 = '8.88 (7.37, 10.4)'
- unparsed cell de_2017_table_3:row18:col4 = '9.86 (8.50, 17.5)'
- companion parameter table 3 transcribed (21 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.706 (12/17 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[site effect (scaling on observations) in sudan [%]]` |  | 15.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f [l]b].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[vp1/f [l]b]` | 179 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θrbc/pl [fraction of one]].parameter_id` | Q410 | Q43 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulfadoxine | sulfadoxine and pyrimethamine | mismatch |

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
| C2_base_sign_Q31 | fail |  | -75.7 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412181-tbl-0002:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412181-tbl-0002:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412181-tbl-0002:row5:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['psp412181-tbl-0002:row12:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412181-tbl-0002:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412181-tbl-0002:row7:col1'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  | ['psp412181-tbl-0002:row11:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0303 L/h | ['psp412181-tbl-0002:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 14.1 L | ['psp412181-tbl-0002:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 179 L | ['psp412181-tbl-0002:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfadoxine%5D%20Sulfadoxine_de2017_reference&body=Drug%3A%20sulfadoxine%0ARecord%3A%20Sulfadoxine_de2017_reference%0APaper%3A%20de_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfadoxine/Sulfadoxine_de2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:47 UTC</sub>
