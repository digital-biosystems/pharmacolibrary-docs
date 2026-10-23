<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;raltegravir&quot;,&quot;href&quot;:&quot;drugs/drug_raltegravir/&quot;},{&quot;label&quot;:&quot;Bukkems_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Raltegravir_Gurjar2023_reference&quot;,&quot;label&quot;:&quot;Gurjar_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# raltegravir — `Raltegravir_Bukkems2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The raltegravir model was rejected because the atazanavir drug-interaction covariate is recorded as a factor change in CL/F of -0.17, a negative value that is implausible for a clearance effect.

<div class="pk-model-meta" hidden drug="raltegravir" model-id="Raltegravir_Bukkems2021_reference" status="rejected" stale="false" population="pregnant and nonpregnant women living with HIV and healthy subjects" measured-compound="raltegravir" parameterization="apparent" topology="2C"></div>

## Citation
Bukkems VE, Post TM, Colbers AP, Burger DM, Svensson EM. A population pharmacokinetics analysis assessing the exposure of raltegravir once-daily 1200 mg in pregnant women living with HIV. CPT: pharmacometrics & systems pharmacology 10(2):161–172 (2021).
  ·  DOI: [10.1002/psp4.12586](https://doi.org/10.1002/psp4.12586)

## Population and dosing

**Population:** pregnant and nonpregnant women living with HIV and healthy subjects · condition HIV infection (including pregnancy) · age group adult · n = 221.

**Dosing:** 400, 1200 mg, oral, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka, h−1 | kabs | 0.741 | h−1 | 2 |  |
| Vc/F, L b | V1/F | 44.3 | L | 7 | 69.7 (14% RSE) |
| CL/F, L/h b | CL/F | 55.8 | L/h | 5 | 28.6 (6% RSE) |
| Factor change in CL with atazanavir a | CL_ratio | -0.17 |  | 25 |  |
| Q/F, L/h b | Q/F | 5.68 | L/h | 7 | 71.5 (12% RSE) |
| Vp/F, L b | V2/F | 92.8 | L | 9 | 115.2 (22% RSE) |
| Factor change in F low‐fat meal a | Frel | -0.459 |  | 9 |  |
| theta_q73_fasted_mat_h | theta_q73_fasted_mat_h | 0.336 |  | 8 |  |
| theta_q73_fed_factor_change_in_mat_a | theta_q73_fed_factor_change_in_mat_a | 1.6 |  | 19 |  |
| theta_frel_formulation_factor_change_in_f_600_mg_a | theta_frel_formulation_factor_change_in_f_600_mg_a | 0.209 |  | 26 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.917). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The raltegravir model was rejected because the atazanavir drug-interaction covariate is recorded as a factor change in CL/F of -0.17, a negative value that is implausible for a clearance effect.**

The base raltegravir parameters (kabs 0.741 h−1, V1/F 44.3 L, CL/F 55.8 L/h, Q/F 5.68 L/h, V2/F 92.8 L) are plausible, but the factor change in CL with atazanavir is -0.17. A negative factor change on clearance is implausible, so the covariate scenario fails the plausibility check and the record was rejected. Extracted — raltegravir: kabs 0.741 h−1, V1/F 44.3 L, CL/F 55.8 L/h, CL_ratio -0.17, Q/F 5.68 L/h, V2/F 92.8 L, Frel -0.459.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f c: this record has none, the second reading 1; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka, h−1 | `Q49` · kabs | 0.741 | h−1 | 0.0002058 | 1/s | 1/h | 2 | exact (1) | psp412586-tbl-0002:row1:col1, psp412586-tbl-0002:row1:col2 |  |
| Vc/F, L b | `Q290` · V1/F | 44.3 | L | 0.0443 | m3 | L | 7 | llm_confirmed (0.6) | psp412586-tbl-0002:row4:col1, psp412586-tbl-0002:row4:col2 | 69.7 (14% RSE) |
| CL/F, L/h b | `Q27` · CL/F | 55.8 | L/h | 1.55e-05 | m3/s | L/h | 5 | llm_confirmed (0.6) | psp412586-tbl-0002:row5:col1, psp412586-tbl-0002:row5:col2 | 28.6 (6% RSE) |
| Factor change in CL with atazanavir a | `Q31` · CL_ratio | -0.17 |  |  |  |  | 25 | llm_corrected (0.6) | psp412586-tbl-0002:row6:col1, psp412586-tbl-0002:row6:col2 |  |
| Q/F, L/h b | `Q69` · Q/F | 5.68 | L/h | 1.578e-06 | m3/s | L/h | 7 | llm_confirmed (0.6) | psp412586-tbl-0002:row7:col1, psp412586-tbl-0002:row7:col2 | 71.5 (12% RSE) |
| Vp/F, L b | `Q82` · V2/F | 92.8 | L | 0.0928 | m3 | L | 9 | llm_confirmed (0.6) | psp412586-tbl-0002:row8:col1, psp412586-tbl-0002:row8:col2 | 115.2 (22% RSE) |
| Factor change in F low‐fat meal a | `Q87` · Frel | -0.459 |  |  |  |  | 9 | llm (0.6) | psp412586-tbl-0002:row11:col1, psp412586-tbl-0002:row11:col2 |  |
| theta_q73_fasted_mat_h | `Q900` · theta_q73_fasted_mat_h | 0.336 |  |  |  |  | 8 |  | psp412586-tbl-0002:row2:col1, psp412586-tbl-0002:row2:col2 |  |
| theta_q73_fed_factor_change_in_mat_a | `Q900` · theta_q73_fed_factor_change_in_mat_a | 1.6 |  |  |  |  | 19 |  | psp412586-tbl-0002:row3:col1, psp412586-tbl-0002:row3:col2 |  |
| theta_frel_formulation_factor_change_in_f_600_mg_a | `Q900` · theta_frel_formulation_factor_change_in_f_600_mg_a | 0.209 |  |  |  |  | 26 |  | psp412586-tbl-0002:row10:col1, psp412586-tbl-0002:row10:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'F c' — extend the ontology if this is a real PK parameter (source ['psp412586-tbl-0002:row9:col1'])
- dropped duplicate Q87 ('Factor change in F pregnancy a', value '-0.487') — already have one for this compound
- dropped duplicate Q87 ('Factor change in F efavirenz co‐administration a', value '-0.167') — already have one for this compound
- covariate fed for MAT from footnote/prose kept as documentation only (['psp412586-tbl-0002:footnote'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['psp412586-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate formulation for Frel from footnote/prose kept as documentation only (['psp412586-tbl-0002:footnote'])
- covariate effect for Q73 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Vc/F, L b' → L (from the paper text: "Parameter list states 'Vc/F, L b = 44.3'")
- implicit units: 'CL/F, L/h b' → L/h (from the paper text: "Parameter list states 'CL/F, L/h b = 55.8'")
- implicit units: 'Q/F, L/h b' → L/h (from the paper text: "Parameter list states 'Q/F, L/h b = 5.68'")
- implicit units: 'Vp/F, L b' → L (from the paper text: "Parameter list states 'Vp/F, L b = 92.8'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=raltegravir
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.917 (22/24 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f c]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[factor change in f low‐fat meal a]` | -0.459 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q31 | fail |  | -0.17 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412586-tbl-0002:row5:col1', 'psp412586-tbl-0002:row5:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412586-tbl-0002:row4:col1', 'psp412586-tbl-0002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412586-tbl-0002:row1:col1', 'psp412586-tbl-0002:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412586-tbl-0002:row7:col1', 'psp412586-tbl-0002:row7:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412586-tbl-0002:row8:col1', 'psp412586-tbl-0002:row8:col2'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  | ['psp412586-tbl-0002:row6:col1', 'psp412586-tbl-0002:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 55.8 L/h | ['psp412586-tbl-0002:row5:col1', 'psp412586-tbl-0002:row5:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 44.3 L | ['psp412586-tbl-0002:row4:col1', 'psp412586-tbl-0002:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 92.8 L | ['psp412586-tbl-0002:row8:col1', 'psp412586-tbl-0002:row8:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Braltegravir%5D%20Raltegravir_Bukkems2021_reference&body=Drug%3A%20raltegravir%0ARecord%3A%20Raltegravir_Bukkems2021_reference%0APaper%3A%20Bukkems_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_raltegravir/Raltegravir_Bukkems2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:27 UTC</sub>
