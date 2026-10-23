<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/&quot;},{&quot;label&quot;:&quot;Roberts_2015 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dexamfetamine — `Dexamfetamine_Roberts2015_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The dextroamphetamine record was rejected because the peripheral volume V2/F is reported as 17.7 mg instead of a volume unit, and the peripheral compartment is unreachable from the dose.

<div class="pk-model-meta" hidden drug="dexamfetamine" model-id="Dexamfetamine_Roberts2015_final" status="rejected" stale="false" population="healthy adults" measured-compound="dextroamphetamine" parameterization="apparent" topology="2C"></div>

## Citation
Roberts JK, Cook SF, Stockmann C, Rollins DE, Wilkins DG, Sherwin CM. A Population Pharmacokinetic Analysis of Dextroamphetamine in the Plasma and Hair of Healthy Adults. Clinical drug investigation 35(10):633–643 (2015).
  ·  DOI: [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 40.

**Dosing:** 10 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| K12 (h−1) | k12 | 0.527 | h−1 | 0.0106 (None% RSE) |
| V1/F (L) | V1/F | 377 | L |  |
| θ1 | allometric_exponent | 0.618 |  |  |
| CL/F (L/h) | CL/F | 28.7 | L/h | 0.0212 (None% RSE) |
| V2/F (mg) | V2/F | 17.7 | mg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The dextroamphetamine record was rejected because the peripheral volume V2/F is reported as 17.7 mg instead of a volume unit, and the peripheral compartment is unreachable from the dose.**

For dextroamphetamine in healthy adults, the peripheral-compartment volume V2/F carries the unit mg, a dimension mismatch for a structural volume parameter, and its unit could not be converted to SI. The two-compartment structure lists only the transfer rate constant from the central to the peripheral compartment (k12 = 0.527 h−1), leaving the peripheral compartment without a return path, so it is unreachable from the dose. The remaining parameters — CL/F 28.7 L/h, V1/F 377 L, allometric exponent 0.618 — are dimensionally consistent. Extracted — dexamfetamine: k12 0.527 h−1, V1/F 377 L, allometric_exponent 0.618, CL/F 28.7 L/h, V2/F 17.7 mg.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| K12 (h−1) | `Q301` · k12 | 0.527 | h−1 | 0.0001464 | 1/s | 1/h | exact (1) | T3:row2:col1, T3:row2:col2, T3:row2:col3, T3:row2:col4 | 0.0106 (None% RSE) |
| V1/F (L) | `Q290` · V1/F | 377 | L | 0.377 | m3 | l | exact (1) | T3:row3:col1 |  |
| θ1 | `Q319` · allometric_exponent | 0.618 |  |  |  |  | llm (0.6) | T3:row4:col1, T3:row4:col2, T3:row4:col3, T3:row4:col4, T3:footnote |  |
| CL/F (L/h) | `Q27` · CL/F | 28.7 | L/h | 7.972e-06 | m3/s | l/h | exact (1) | T3:row5:col1, T3:row5:col2, T3:row5:col3, T3:row5:col4 | 0.0212 (None% RSE) |
| V2/F (mg) | `Q82` · V2/F | 17.7 | mg |  |  | mg | exact (1) | T3:row8:col1, T3:row8:col2, T3:row8:col3, T3:row8:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'K12' routed out of structural estimates ('ω2-BSV')
- table section iiv: 'CL/F' routed out of structural estimates ('ω2-BSV')
- table section residual_error: 'Additive (ng/mL)' routed out of structural estimates ('σ2-RUV')
- table section residual_error: 'Proportional' routed out of structural estimates ('σ2-RUV')
- dropped duplicate Q319 ('θ2', value '0.422') — already have one for this compound
- unit_dimension_mismatch: 'V2/F (mg)' → Q82 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- dropped value-less row: 'SE'
- dropped value-less row: 'CI'
- dropped value-less row: 'NA'
- dropped value-less row: 'K12'
- dropped value-less row: 'V1/F'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'K23'
- dropped value-less row: 'V2/F'
- dropped value-less row: 'θ3'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dextroamphetamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'final linked model' is the final model of Roberts_2015 (paper reports 2 stages: final linked model, final plasma model); same population, different model-building step
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row7:col1 = '1.60E−06'
- unparsed cell T3:row7:col2 = '2.76E−07'
- unparsed cell T3:row7:col3 = '1.06E−06'
- unparsed cell T3:row7:col4 = '2.14E−06'
- unparsed cell T3:row7:col6 = '2.70E−07'
- unparsed cell T3:row7:col7 = '1.02E−06'
- unparsed cell T3:row7:col8 = '2.07E−06'
- unparsed cell T3:row11:col7 = '1.00E–06'
- unparsed cell Roberts_2015_table_2:row7:col7 = '2.00E–06'
- companion parameter table 2 transcribed (79 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row5:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T3:row3:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['T3:row2:col1', 'T3:row2:col2', 'T3:row2:col3', 'T3:row2:col4'] |
| C5_dimension_Q82 | fail | [mass] | mg | ['T3:row8:col1', 'T3:row8:col2', 'T3:row8:col3', 'T3:row8:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 28.7 L/h | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row5:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 377 L | ['T3:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexamfetamine%5D%20Dexamfetamine_Roberts2015_final&body=Drug%3A%20dexamfetamine%0ARecord%3A%20Dexamfetamine_Roberts2015_final%0APaper%3A%20Roberts_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:25 UTC</sub>
