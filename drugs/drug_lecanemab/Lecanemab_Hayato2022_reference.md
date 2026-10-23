<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;lecanemab&quot;,&quot;href&quot;:&quot;drugs/drug_lecanemab/&quot;},{&quot;label&quot;:&quot;Hayato_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lecanemab — `Lecanemab_Hayato2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The lecanemab two-compartment model from Hayato_2022 was rejected because one structural parameter's reported unit could not be converted to SI units, producing a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="lecanemab" model-id="Lecanemab_Hayato2022_reference" status="rejected" stale="false" population="adults with early Alzheimer&#39;s disease" measured-compound="lecanemab" parameterization="mechanistic" topology="2C"></div>

## Citation
Hayato S, Takenaka O, Sreerama Reddy SH, Landry I, Reyderman L, Koyama A et al. Population pharmacokinetic-pharmacodynamic analyses of amyloid positron emission tomography and plasma biomarkers for lecanemab in subjects with early Alzheimer's disease. CPT: pharmacometrics & systems pharmacology 11(12):1578–1591 (2022).
  ·  DOI: [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862)

## Population and dosing

**Population:** adults with early Alzheimer's disease · condition early Alzheimer's disease · age group adult · n = 725.

**Dosing:** 175, 350, 700 mg, iv, multiple, every 336 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 0.0181 | L/h | 38.9 (None% RSE) |
| V 1 (L) | V1 | 3.22 | L | 14.0 (None% RSE) |
| Q (L/h) | Q | 0.0349 | L/h |  |
| V 2 (L) | V2 | 2.19 | L | 99.5 (None% RSE) |
| Females ~ CL (ratio) | CL_ratio | 0.792 | ratio |  |
| theta_q87_category | theta_q87_category | 0.998 |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.403 |  |  |
| theta_q319_albumin_power | theta_q319_albumin_power | -0.243 |  |  |
| theta_cl_ratio_ada_power | theta_cl_ratio_ada_power | 1.09 |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.606 |  |  |
| theta_v2_race_power | theta_v2_race_power | 0.455 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lecanemab two-compartment model from Hayato_2022 was rejected because one structural parameter's reported unit could not be converted to SI units, producing a dimension mismatch on a structural parameter.**

The record reports lecanemab clearance CL 0.0181 L/h, central volume V1 3.22 L, intercompartmental clearance Q 0.0349 L/h and peripheral volume V2 2.19 L, plus a female clearance ratio of 0.792 and several covariate effects. The rejection reason is a dimension mismatch on a structural parameter, and the stated limitation is that a reported unit could not be converted to SI, so that parameter was carried without an SI value. The bioavailability parameter Fab is listed for lecanemab with no value, and the weight covariate effect on intercompartmental clearance appears twice with conflicting values, 0.403 and 0.606. Extracted — lecanemab: CL 0.0181 L/h, V1 3.22 L, Q 0.0349 L/h, V2 2.19 L, CL_ratio 0.792 ratio.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lecanemab, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.0181 | L/h | 5.028e-09 | m3/s | l/h | exact (1) | psp412862-tbl-0001:row3:col1, psp412862-tbl-0001:row3:col2 | 38.9 (None% RSE) |
| V 1 (L) | `Q63` · V1 | 3.22 | L | 0.00322 | m3 | l | space_fold (0.95) | psp412862-tbl-0001:row4:col1, psp412862-tbl-0001:row4:col2 | 14.0 (None% RSE) |
| Q (L/h) | `Q30` · Q | 0.0349 | L/h | 9.694e-09 | m3/s | l/h | exact (1) | psp412862-tbl-0001:row5:col1, psp412862-tbl-0001:row5:col2 |  |
| V 2 (L) | `Q64` · V2 | 2.19 | L | 0.00219 | m3 | l | space_fold (0.95) | psp412862-tbl-0001:row6:col1, psp412862-tbl-0001:row6:col2 | 99.5 (None% RSE) |
| Females ~ CL (ratio) | `Q31` · CL_ratio | 0.792 | ratio |  |  | ratio | llm_corrected (0.6) | psp412862-tbl-0001:row11:col1, psp412862-tbl-0001:row11:col2 |  |
| theta_q87_category | `Q900` · theta_q87_category | 0.998 |  |  |  |  |  | psp412862-tbl-0001:row7:col1, psp412862-tbl-0001:row7:col2 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.403 |  |  |  |  |  | psp412862-tbl-0001:row9:col1, psp412862-tbl-0001:row9:col2 |  |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | -0.243 |  |  |  |  |  | psp412862-tbl-0001:row10:col1, psp412862-tbl-0001:row10:col2 |  |
| theta_cl_ratio_ada_power | `Q900` · theta_cl_ratio_ada_power | 1.09 |  |  |  |  |  | psp412862-tbl-0001:row12:col1, psp412862-tbl-0001:row12:col2 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.606 |  |  |  |  |  | psp412862-tbl-0001:row13:col1, psp412862-tbl-0001:row13:col2 |  |
| theta_v2_race_power | `Q900` · theta_v2_race_power | 0.455 |  |  |  |  |  | psp412862-tbl-0001:row15:col1, psp412862-tbl-0001:row15:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'V 1' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'V 2' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'F' routed out of structural estimates ('Interindividual variability (CV%)')
- table section residual_error: 'Proportional: study 101' routed out of structural estimates ('Residual variability (CV%)')
- table section residual_error: 'Proportional: study 104' routed out of structural estimates ('Residual variability (CV%)')
- table section residual_error: 'Proportional: study 201' routed out of structural estimates ('Residual variability (CV%)')
- unit_dimension_mismatch: 'Females ~ CL (ratio)' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Females ~ V 1 (ratio)' → Q63 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('Females ~ V 1 (ratio)', value '0.893') — already have one for this compound
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 9.96 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number 30.5 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number 31.7 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Frel' from footnote/prose loose number 63.2 (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['psp412862-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lecanemab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'lecanemab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412862-tbl-0001:row3:col3 = '0.0181 (0.0175–0.0188)'
- unparsed cell psp412862-tbl-0001:row4:col3 = '3.22 (3.15–3.28)'
- unparsed cell psp412862-tbl-0001:row5:col3 = '0.0349 (0.0294–0.0396)'
- unparsed cell psp412862-tbl-0001:row6:col3 = '2.20 (2.00–2.40)'
- unparsed cell psp412862-tbl-0001:row7:col3 = '0.999 (0.950–1.06)'
- unparsed cell psp412862-tbl-0001:row9:col3 = '0.393 (0.217–0.495)'
- unparsed cell psp412862-tbl-0001:row10:col3 = '−0.237 (−0.405 to −0.0771)'
- unparsed cell psp412862-tbl-0001:row11:col3 = '0.790 (0.735–0.825)'
- unparsed cell psp412862-tbl-0001:row12:col3 = '1.09 (1.05–1.12)'
- unparsed cell psp412862-tbl-0001:row13:col3 = '0.603 (0.548–0.663)'
- unparsed cell psp412862-tbl-0001:row14:col3 = '0.893 (0.870–0.919)'
- unparsed cell psp412862-tbl-0001:row15:col3 = '0.450 (0.338–0.583)'
- unparsed cell psp412862-tbl-0001:row17:col3 = '38.9 (36.7–40.4)'
- unparsed cell psp412862-tbl-0001:row18:col3 = '14.0 (12.7–15.1)'
- unparsed cell psp412862-tbl-0001:row19:col3 = '99.8 (84.4–109)'
- unparsed cell psp412862-tbl-0001:row20:col3 = '34.1 (28.7–37.4)'
- unparsed cell psp412862-tbl-0001:row22:col3 = '14.0 (12.6–15.1)'
- unparsed cell psp412862-tbl-0001:row23:col3 = '19.6 (16.9–22.1)'
- unparsed cell psp412862-tbl-0001:row24:col3 = '30.2 (28.7–31.2)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.722 (13/18 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lecanemab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lecanemab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412862-tbl-0001:row3:col1', 'psp412862-tbl-0001:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412862-tbl-0001:row5:col1', 'psp412862-tbl-0001:row5:col2'] |
| C5_dimension_Q31 | fail | dimensionless | ratio | ['psp412862-tbl-0001:row11:col1', 'psp412862-tbl-0001:row11:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412862-tbl-0001:row4:col1', 'psp412862-tbl-0001:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412862-tbl-0001:row6:col1', 'psp412862-tbl-0001:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0181 | ['psp412862-tbl-0001:row3:col1', 'psp412862-tbl-0001:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0181 L/h | ['psp412862-tbl-0001:row3:col1', 'psp412862-tbl-0001:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.22 L | ['psp412862-tbl-0001:row4:col1', 'psp412862-tbl-0001:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.19 L | ['psp412862-tbl-0001:row6:col1', 'psp412862-tbl-0001:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blecanemab%5D%20Lecanemab_Hayato2022_reference&body=Drug%3A%20lecanemab%0ARecord%3A%20Lecanemab_Hayato2022_reference%0APaper%3A%20Hayato_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lecanemab/Lecanemab_Hayato2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:53 UTC</sub>
