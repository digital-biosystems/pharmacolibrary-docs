<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pomalidomide&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/&quot;},{&quot;label&quot;:&quot;Li_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pomalidomide_Fau2020_reference&quot;,&quot;label&quot;:&quot;Fau_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Fau2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pomalidomide_Ogasawara2021_reference&quot;,&quot;label&quot;:&quot;Ogasawara_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Ogasawara2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pomalidomide_Papathanasiou2025_reference&quot;,&quot;label&quot;:&quot;Papathanasiou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Papathanasiou2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pomalidomide — `Pomalidomide_Li2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the unit for the intercompartmental clearance parameter was unrecognizable, preventing verification of its physical dimensions.

<div class="pk-model-meta" hidden drug="pomalidomide" model-id="Pomalidomide_Li2017_reference" status="rejected" stale="false" population="adults with relapsed or refractory multiple myeloma" measured-compound="pomalidomide" parameterization="apparent" topology="1C"></div>

## Citation
Li Y, Wang X, O'Mara E, Dimopoulos MA, Sonneveld P, Weisel KC et al. Population pharmacokinetics of pomalidomide in patients with relapsed or refractory multiple myeloma with various degrees of impaired renal function. Clinical pharmacology : advances and applications 9:133–145 (2017).
  ·  DOI: [10.2147/CPAA.S144606](https://doi.org/10.2147/CPAA.S144606)

## Population and dosing

**Population:** adults with relapsed or refractory multiple myeloma · condition relapsed or refractory multiple myeloma · age group adult · n = &gt;=63.

**Dosing:** 2, 4 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, CLnorm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Ka (1/h) | kabs | 0.526 |  |  |
| V/F (L) | V/F | 54.502 | L | 0.156 (None% RSE) |
| CL/Fnormal (L/h) | CLnorm/F | 5.159 | L/h |  |
| CL/F ratio (group 2 vs group 1) | CL_ratio | 1.019 | group 2 vs group 1 |  |
| CL/F ratio (group 3 vs group 1) | CL/F | 1.018 | group 3 vs group 1 |  |
| Tlag (h) | tlag | 0.183 | h |  |
| δ2 | Q2 | 0.221 |  |  |
| Intercept (L/h) | CLint | 2.577 | L/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the unit for the intercompartmental clearance parameter was unrecognizable, preventing verification of its physical dimensions.**

The parameter Q2, representing apparent intercompartmental clearance between the central and second peripheral compartments, is listed with a value of 0.221 but no associated unit. Without a recognizable unit, the physical dimension of this structural parameter could not be validated against the required volume or flow dimensions. Extracted — pomalidomide: kabs 0.526, V/F 54.5 L, CLnorm/F 5.16 L/h, CL_ratio 1.02 group 2 vs group 1, CL/F 1.02 group 3 vs group 1, tlag 0.183 h, Q2 0.221, CLint 2.58 L/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.526 |  |  |  |  | exact (1) | t3-cpaa-9-133:row1:col1, t3-cpaa-9-133:row1:col2, t3-cpaa-9-133:row1:col3, Li_2017_table_6:row1:col1, Li_2017_table_6:row1:col2, Li_2017_table_6:row1:col3, Li_2017_table_6:row1:col4 |  |
| V/F (L) | `Q76` · V/F | 54.502 | L | 0.0545 | m3 | l | exact (1) | t3-cpaa-9-133:row2:col1, t3-cpaa-9-133:row2:col2, t3-cpaa-9-133:row2:col3, Li_2017_table_6:row2:col1, Li_2017_table_6:row2:col2, Li_2017_table_6:row2:col3, Li_2017_table_6:row2:col4 | 0.156 (None% RSE) |
| CL/Fnormal (L/h) | `Q355` · CLnorm/F | 5.159 | L/h | 1.433e-06 | m3/s | l/h | llm (0.6) | t3-cpaa-9-133:row3:col1, t3-cpaa-9-133:row3:col2, t3-cpaa-9-133:row3:col3 |  |
| CL/F ratio (group 2 vs group 1) | `Q31` · CL_ratio | 1.019 | group 2 vs group 1 |  |  | g·roup2·vsgroup1 | llm_corrected (0.6) | t3-cpaa-9-133:row4:col1, t3-cpaa-9-133:row4:col2, t3-cpaa-9-133:row4:col3 |  |
| CL/F ratio (group 3 vs group 1) | `Q27` · CL/F | 1.018 | group 3 vs group 1 |  |  | g·roup3·vsgroup1 | llm_confirmed (0.6) | t3-cpaa-9-133:row5:col1, t3-cpaa-9-133:row5:col2, t3-cpaa-9-133:row5:col3 |  |
| Tlag (h) | `Q83` · tlag | 0.183 | h | 658.8 | s | h | exact (1) | t3-cpaa-9-133:row7:col1, t3-cpaa-9-133:row7:col2, t3-cpaa-9-133:row7:col3 |  |
| δ2 | `Q99` · Q2 | 0.221 |  |  |  |  | llm (0.6) | t3-cpaa-9-133:row12:col1, t3-cpaa-9-133:row12:col2, t3-cpaa-9-133:row12:col3, Li_2017_table_6:row10:col1, Li_2017_table_6:row10:col2, Li_2017_table_6:row10:col3, Li_2017_table_6:row10:col4 |  |
| Intercept (L/h) | `Q3` · CLint | 2.577 | L/h |  |  | l/h | llm (0.6) | Li_2017_table_6:row3:col1, Li_2017_table_6:row3:col2, Li_2017_table_6:row3:col3, Li_2017_table_6:row3:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'group 2 vs group 1' (CL_ratio)
- unit_dimension_unknown: 'group 3 vs group 1' (CL/F)
- unit_dimension_unknown: 'group 4 vs group 1' (CL_ratio)
- dropped duplicate Q31 ('CL/F ratio (group 4 vs group 1)', value '0.729') — already have one for this compound
- unit_dimension_mismatch: 'Intercept (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped PD-category row 'Slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Li_2017_table_6:row4:col1', 'Li_2017_table_6:row4:col2', 'Li_2017_table_6:row4:col3', 'Li_2017_table_6:row4:col4'])
- dropped unlinked row (NIL): 'CrCl0 (mL/min) or eGFR0 (mL/min/1.73 m2)' — extend the ontology if this is a real PK parameter (source ['Li_2017_table_6:row5:col1', 'Li_2017_table_6:row5:col2', 'Li_2017_table_6:row5:col3', 'Li_2017_table_6:row5:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pomalidomide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 6 transcribed (40 record(s), model stage 'final')
- LLM selected parameter table(s) 4, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/h | ['Li_2017_table_6:row3:col1', 'Li_2017_table_6:row3:col2', 'Li_2017_table_6:row3:col3', 'Li_2017_table_6:row3:col4'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] |  | ['t3-cpaa-9-133:row3:col1', 't3-cpaa-9-133:row3:col2', 't3-cpaa-9-133:row3:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['t3-cpaa-9-133:row2:col1', 't3-cpaa-9-133:row2:col2', 't3-cpaa-9-133:row2:col3', 'Li_2017_table_6:row2:col1', 'Li_2017_table_6:row2:col2', 'Li_2017_table_6:row2:col3', 'Li_2017_table_6:row2:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['t3-cpaa-9-133:row7:col1', 't3-cpaa-9-133:row7:col2', 't3-cpaa-9-133:row7:col3'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | group 3 vs group 1 | ['t3-cpaa-9-133:row5:col1', 't3-cpaa-9-133:row5:col2', 't3-cpaa-9-133:row5:col3'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | group 2 vs group 1 | ['t3-cpaa-9-133:row4:col1', 't3-cpaa-9-133:row4:col2', 't3-cpaa-9-133:row4:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['t3-cpaa-9-133:row1:col1', 't3-cpaa-9-133:row1:col2', 't3-cpaa-9-133:row1:col3', 'Li_2017_table_6:row1:col1', 'Li_2017_table_6:row1:col2', 'Li_2017_table_6:row1:col3', 'Li_2017_table_6:row1:col4'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] |  | ['t3-cpaa-9-133:row12:col1', 't3-cpaa-9-133:row12:col2', 't3-cpaa-9-133:row12:col3', 'Li_2017_table_6:row10:col1', 'Li_2017_table_6:row10:col2', 'Li_2017_table_6:row10:col3', 'Li_2017_table_6:row10:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 54.5 L | ['t3-cpaa-9-133:row2:col1', 't3-cpaa-9-133:row2:col2', 't3-cpaa-9-133:row2:col3', 'Li_2017_table_6:row2:col1', 'Li_2017_table_6:row2:col2', 'Li_2017_table_6:row2:col3', 'Li_2017_table_6:row2:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpomalidomide%5D%20Pomalidomide_Li2017_reference&body=Drug%3A%20pomalidomide%0ARecord%3A%20Pomalidomide_Li2017_reference%0APaper%3A%20Li_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pomalidomide/Pomalidomide_Li2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:12 UTC</sub>
