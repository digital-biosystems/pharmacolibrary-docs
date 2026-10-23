<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;elagolix&quot;,&quot;href&quot;:&quot;drugs/drug_elagolix/&quot;},{&quot;label&quot;:&quot;Beck_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# elagolix — `Elagolix_Beck2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Elagolix absorption rate constant 2.46 L/h was rejected because the unit could not be converted to standard time-based units.

<div class="pk-model-meta" hidden drug="elagolix" model-id="Elagolix_Beck2022_reference" status="rejected" stale="false" population="healthy premenopausal women and premenopausal women with uterine fibroids or endometriosis" measured-compound="elagolix" parameterization="apparent" topology="2C"></div>

## Citation
Beck D, Winzenborg I, Liu M, Degner J, Mostafa NM, Noertersheuser P et al. Population Pharmacokinetics of Elagolix in Combination with Low-Dose Estradiol/Norethindrone Acetate in Women with Uterine Fibroids. Clinical pharmacokinetics 61(4):577–587 (2022).
  ·  DOI: [10.1007/s40262-021-01096-w](https://doi.org/10.1007/s40262-021-01096-w)

## Population and dosing

**Population:** healthy premenopausal women and premenopausal women with uterine fibroids or endometriosis · condition uterine fibroids, endometriosis, healthy · age group adult · n = . Population pharmacokinetic modeling.

**Dosing:** 150, 200, 300, 400 mg, oral, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 125 | L/h | 0.198 (46.8% RSE) |
| Vc/F (L) | V1/F | 279 | L | 0.208 (48.1% RSE) |
| body_weight_on_vc_fc | body_weight_on_vc_fc | 0.160 |  |  |
| KA (L/h) | kabs | 2.46 | L/h |  |
| Q/F (L/h) | Q/F | 5.63 | L/h |  |
| Vp/F (L) | V2/F | 51.7 | L |  |
| Lag time (h) | tlag | 0.207 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Elagolix absorption rate constant 2.46 L/h was rejected because the unit could not be converted to standard time-based units.**

The record lists the absorption rate constant with a value of 2.46 and units of L/h, which is dimensionally inconsistent for a first-order rate constant. This specific unit combination could not be converted to a valid SI unit, so the parameter lacked a valid value. Consequently, a dimension check failed on this structural parameter, resulting in the record's rejection. Extracted — elagolix: CL/F 125 L/h, V1/F 279 L, kabs 2.46 L/h, Q/F 5.63 L/h, V2/F 51.7 L, tlag 0.207 h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 125 | L/h | 3.472e-05 | m3/s | l/h | exact (1) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Tab3:row3:col4 | 0.198 (46.8% RSE) |
| Vc/F (L) | `Q290` · V1/F | 279 | L | 0.279 | m3 | l | exact (1) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4 | 0.208 (48.1% RSE) |
| body_weight_on_vc_fc | `Q900` · body_weight_on_vc_fc | 0.160 |  |  |  |  |  | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4 |  |
| KA (L/h) | `Q49` · kabs | 2.46 | L/h |  |  | l/h | exact (1) | Tab3:row6:col1, Tab3:row6:col2, Tab3:row6:col3, Tab3:row6:col4 |  |
| Q/F (L/h) | `Q69` · Q/F | 5.63 | L/h | 1.564e-06 | m3/s | l/h | exact (1) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col3, Tab3:row7:col4 |  |
| Vp/F (L) | `Q82` · V2/F | 51.7 | L | 0.0517 | m3 | l | exact (1) | Tab3:row8:col1, Tab3:row8:col2, Tab3:row8:col3, Tab3:row8:col4 |  |
| Lag time (h) | `Q83` · tlag | 0.207 | h | 745.2 | s | h | exact (1) | Tab3:row9:col1, Tab3:row9:col2, Tab3:row9:col3, Tab3:row9:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CL/F (% CV)b' routed out of structural estimates ('Inter-individual and residual variability')
- table section iiv: 'IIV on Vc/F (% CV)b' routed out of structural estimates ('Inter-individual and residual variability')
- table section iiv: 'Proportional error (phase I studies)' routed out of structural estimates ('Inter-individual and residual variability')
- table section iiv: 'Additive error (phase I studies)' routed out of structural estimates ('Inter-individual and residual variability')
- table section iiv: 'Proportional error (phase III studies)' routed out of structural estimates ('Inter-individual and residual variability')
- table section iiv: 'Additive error (phase III studies)' routed out of structural estimates ('Inter-individual and residual variability')
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['Tab3:row0:col3', 'Tab3:row0:col4'])
- covariate level 'Body weight on Vc/Fc' → Q900:body_weight_on_vc_fc = 0.160 (linear_fractional on Q27)
- unit_dimension_mismatch: 'KA (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'F1d' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1'])
- dropped unlinked row (NIL): 'Intermediate transporter on F1d' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2', 'Tab3:row11:col3', 'Tab3:row11:col4'])
- dropped unlinked row (NIL): 'Poor transporter on F1d' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1', 'Tab3:row12:col2', 'Tab3:row12:col3', 'Tab3:row12:col4'])
- dropped unlinked row (NIL): 'Missing transporter on F1d' — extend the ontology if this is a real PK parameter (source ['Tab3:row13:col1', 'Tab3:row13:col2', 'Tab3:row13:col3', 'Tab3:row13:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=elagolix
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

**Extraction notes:**
- unparsed cell Tab3:row18:col1 = '5.26 × 10–05 (7.05 × 10–06)'
- unparsed cell Tab3:row18:col3 = '5.07 × 10–05'
- unparsed cell Tab3:row18:col4 = '1.99 × 10–05, 9.76 × 10–05'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row7:col1', 'Tab3:row7:col2', 'Tab3:row7:col3', 'Tab3:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row8:col1', 'Tab3:row8:col2', 'Tab3:row8:col3', 'Tab3:row8:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row9:col1', 'Tab3:row9:col2', 'Tab3:row9:col3', 'Tab3:row9:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 125 L/h | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 279 L | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 51.7 L | ['Tab3:row8:col1', 'Tab3:row8:col2', 'Tab3:row8:col3', 'Tab3:row8:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Belagolix%5D%20Elagolix_Beck2022_reference&body=Drug%3A%20elagolix%0ARecord%3A%20Elagolix_Beck2022_reference%0APaper%3A%20Beck_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_elagolix/Elagolix_Beck2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:18 UTC</sub>
