<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Didanosine&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/&quot;},{&quot;label&quot;:&quot;Velasque_2007 \u00b7 trial_no_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Didanosine_Bruzzese1995_reference&quot;,&quot;label&quot;:&quot;Bruzzese_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/Didanosine_Bruzzese1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Pai1992_reference&quot;,&quot;label&quot;:&quot;Pai_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/Didanosine_Pai1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_didanosine/Didanosine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Didanosine — `Didanosine_Velasque2007_trial_no_2`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Three parameters have wrong units: AUC is listed as clearance, CL/F as volume, and elimination rate constant as time.

<div class="pk-model-meta" hidden drug="Didanosine" model-id="Didanosine_Velasque2007_trial_no_2" status="rejected" stale="false" population="healthy adult volunteers" measured-compound="Didanosine" parameterization="apparent" topology="1C"></div>

## Citation
Velasque LS, Estrela RC, Suarez-Kurtz G, Struchiner CJ. A new model for the population pharmacokinetics of didanosine in healthy subjects. Brazilian journal of medical and biological research = Revista brasileira de pesquisas medicas e biologicas 40(1):97-104 (2007).
  ·  DOI: [10.1590/s0100-879x2007000100013](https://doi.org/10.1590/s0100-879x2007000100013)

## Population and dosing

**Population:** healthy adult volunteers · condition healthy · age group adult · n = 48.

**Dosing:** 200 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max (µg/L) | Cmax | 1.4 | µg/L |
| AUC 0-∞ (µg h -1 L -1 ) | AUC∞ | 2.1 | µg h -1 L -1 |
| T max (h) | tmax | 0.6 | h |
| t 1/2 (h) | t1/2z | 1.3 | h |
| CL/F (L) | CL/F | 183.5 | L |
| k el (h) | kel | 0.56 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Three parameters have wrong units: AUC is listed as clearance, CL/F as volume, and elimination rate constant as time.**

The AUC value of 2.1 is given in µg·h⁻¹·L⁻¹, which is a concentration-time unit, whereas AUC requires mass·time/volume dimensions. CL/F is recorded as 183.5 L, a volume unit, instead of volume per time required for clearance. The elimination rate constant is 0.56 h, a time unit, rather than the required inverse time. Extracted — didanosine: Cmax 1.4 µg/L, AUC∞ 2.1 µg h -1 L -1, tmax 0.6 h, t1/2z 1.3 h, CL/F 184 L, kel 0.56 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max (µg/L) | `Q32` · Cmax | 1.4 | µg/L | 1.4e-06 | kg/m3 | µg/l | space_fold (0.95) | Velasque_2007_table_2:row2:col6 |
| AUC 0-∞ (µg h -1 L -1 ) | `Q17` · AUC∞ | 2.1 | µg h -1 L -1 |  |  | µg/(h·l) | space_fold (0.95) | Velasque_2007_table_2:row3:col6 |
| T max (h) | `Q56` · tmax | 0.6 | h | 2160 | s | h | space_fold (0.95) | Velasque_2007_table_2:row4:col6 |
| t 1/2 (h) | `Q57` · t1/2z | 1.3 | h | 4680 | s | h | half_life_rule (0.95) | Velasque_2007_table_2:row5:col6 |
| CL/F (L) | `Q27` · CL/F | 183.5 | L |  |  | l | exact (1) | Velasque_2007_table_2:row6:col6 |
| k el (h) | `Q47` · kel | 0.56 | h |  |  | h | space_fold (0.95) | Velasque_2007_table_2:row7:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC 0-∞ (µg h -1 L -1 )' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'CL/F (L)' → Q27 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k el (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped value-less row: '95% CI'
- dropped value-less row: 'CL'
- dropped value-less row: 'V 2'
- dropped value-less row: 'Q'
- dropped value-less row: 'V 3'
- dropped value-less row: 'K a'
- dropped value-less row: 'D'
- dropped value-less row: 'CL CR'
- dropped value-less row: 'OF'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Didanosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'trial no. 2' subgroup of Velasque_2007 (paper reports 4 populations: final model estimate, initial model estimate, trial no. 1, trial no. 2)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Velasque_2007_table_2: unknown_column_role
- companion parameter table 2 transcribed (48 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | µg h -1 L -1 ([mass] / [time] / [length] ** 3) | ['Velasque_2007_table_2:row3:col6'] |
| C5_dimension_Q27 | fail | [length] ** 3 / [time] | L ([length] ** 3) | ['Velasque_2007_table_2:row6:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Velasque_2007_table_2:row2:col6'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['Velasque_2007_table_2:row7:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['Velasque_2007_table_2:row4:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['Velasque_2007_table_2:row5:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdidanosine%5D%20Didanosine_Velasque2007_trial_no_2&body=Drug%3A%20didanosine%0ARecord%3A%20Didanosine_Velasque2007_trial_no_2%0APaper%3A%20Velasque_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_didanosine/Didanosine_Velasque2007_trial_no_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 14:18 UTC</sub>
