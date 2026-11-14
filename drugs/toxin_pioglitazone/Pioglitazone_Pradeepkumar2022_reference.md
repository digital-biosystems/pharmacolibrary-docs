<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Pioglitazone&quot;,&quot;href&quot;:&quot;drugs/toxin_pioglitazone/&quot;},{&quot;label&quot;:&quot;Pradeepkumar_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pioglitazone_Budde2003_reference&quot;,&quot;label&quot;:&quot;Budde_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pioglitazone/Pioglitazone_Budde2003_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pioglitazone — `Pioglitazone_Pradeepkumar2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Pioglitazone AUCt is rejected because its unit ng/ml/h is dimensionally inconsistent with the parameter definition, preventing conversion to standard units.

<div class="pk-model-meta" hidden drug="Pioglitazone" model-id="Pioglitazone_Pradeepkumar2022_reference" status="rejected" stale="false" population="Rats (normal and diabetic) and Rabbits" measured-compound="Pioglitazone" parameterization="mechanistic" topology="1C"></div>

## Citation
Pradeepkumar B, Goruntla N, Chinthaginjala H, Reddy KS, Ahad A, Sudheer A et al. Influence of trazodone on the pharmacodynamics and pharmacokinetics of pioglitazone. Indian journal of pharmacology 54(3):194–197 (2022).
  ·  DOI: [10.4103/ijp.ijp_311_20](https://doi.org/10.4103/ijp.ijp_311_20)

## Population and dosing

**Population:** Rats (normal and diabetic) and Rabbits · condition healthy or induced diabetic · age group adult.

**Dosing:** 0.9, 3.5 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-t (ng/ml/h) | AUCt | 3195 | ng/ml/h |
| AUMC0-t (ng/ml/h×h) | AUMC | 28790 | ng/ml/h×h |
| AUC0-∞ | AUC∞ | 3785 | ng*h/mL |
| Cmax (ng/ml/) | Cmax | 2192 | ng/ml/ |
| Tmax (h) | tmax | 2 | h |
| Abs t1/2 (h) | t1/2ka | 1.05 | h |
| MRT (h) | MRT | 11.67 | h |
| Volume of distribution for the 0.75 mg dose | V | 19.2 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Pioglitazone AUCt is rejected because its unit ng/ml/h is dimensionally inconsistent with the parameter definition, preventing conversion to standard units.**

The AUCt value of 3195 ng/ml/h for pioglitazone has incorrect dimensions, as the unit lacks the time term required for area-under-the-curve calculations. This dimensional conflict prevents the value from being converted to standard SI units, causing the model record to be rejected. Extracted — pioglitazone: AUCt 3.2e+03 ng/ml/h, AUMC 2.88e+04 ng/ml/h×h, AUC∞ 3.78e+03 ng*h/mL, Cmax 2.19e+03 ng/ml/, tmax 2 h, t1/2ka 1.05 h, MRT 11.7 h, V 19.2 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-t (ng/ml/h) | `Q19` · AUCt | 3195 | ng/ml/h |  |  | ng/(h·ml) | exact (1) | T3:row1:col1, T3:row1:col3 |
| AUMC0-t (ng/ml/h×h) | `Q20` · AUMC | 28790 | ng/ml/h×h |  |  | ng/(h^2·ml) | exact (1) | T3:row2:col1, T3:row2:col3 |
| AUC0-∞ | `Q17` · AUC∞ | 3785 | ng*h/mL |  |  | ng*h/mL | exact (1) | T3:row3:col1, T3:row3:col3 |
| Cmax (ng/ml/) | `Q32` · Cmax | 2192 | ng/ml/ | 0.002192 | m3 | ng/ml | exact (1) | T3:row5:col1, T3:row5:col3 |
| Tmax (h) | `Q56` · tmax | 2 | h | 7200 | s | h | exact (1) | T3:row6:col1, T3:row6:col3 |
| Abs t1/2 (h) | `Q95` · t1/2ka | 1.05 | h | 3780 | s | h | half_life_rule (0.95) | T3:row7:col1, T3:row7:col3 |
| MRT (h) | `Q53` · MRT | 11.67 | h | 4.201e+04 | s | h | exact (1) | T3:row8:col1, T3:row8:col3 |
| Volume of distribution for the 0.75 mg dose | `Q61` · V | 19.2 | L | 0.0192 | m3 | L | review_gapfill (0.7) | Thompson_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC0-t (ng/ml/h)' → Q19 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'ng/ml/h×h' (AUMC)
- dropped duplicate Q20 ('AUMC0-∞', value '28970') — already have one for this compound
- unit_dimension_unknown: 'ng/ml/' (Cmax)
- implicit units: 'AUMC0-t (ng/ml/h×h)' — the LLM proposed 'ng*h/mL^2', whose dimension does not fit Q20; left unset
- implicit units: 'AUC0-∞' → ng*h/mL (from the popPK convention: 'The text does not state the unit for AUC0-∞. In population PK and pharmacokinetics, AUC is the integral of concentration')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Pioglitazone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Thompson_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table T3: unbound_uncertainty
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['T3:row3:col1', 'T3:row3:col3'] |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | ng/ml/h ([mass] / [time] / [length] ** 3) | ['T3:row1:col1', 'T3:row1:col3'] |
| C5_dimension_Q53 | pass | [time] |  | ['T3:row8:col1', 'T3:row8:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['T3:row6:col1', 'T3:row6:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Thompson_2016:review'] |
| C5_dimension_Q95 | pass | [time] |  | ['T3:row7:col1', 'T3:row7:col3'] |
| C5_unit_missing_Q20 | fail | [mass] * [time] / [length] ** 3 | ng/ml/h×h | ['T3:row2:col1', 'T3:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 19.2 L | ['Thompson_2016:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpioglitazone%5D%20Pioglitazone_Pradeepkumar2022_reference&body=Drug%3A%20pioglitazone%0ARecord%3A%20Pioglitazone_Pradeepkumar2022_reference%0APaper%3A%20Pradeepkumar_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pioglitazone/Pioglitazone_Pradeepkumar2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 20:20 UTC</sub>
