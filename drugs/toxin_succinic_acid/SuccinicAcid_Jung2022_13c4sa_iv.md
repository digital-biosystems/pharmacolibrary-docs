<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Succinic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/&quot;},{&quot;label&quot;:&quot;Jung_2022 \u00b7 13c4sa_iv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SuccinicAcid_Sharma2024_reference&quot;,&quot;label&quot;:&quot;Sharma_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/SuccinicAcid_Sharma2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SuccinicAcid_Jung2022_13c4sa_po&quot;,&quot;label&quot;:&quot;Jung_2022_13c4sa_po&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SuccinicAcid_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/SuccinicAcid_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Succinic acid — `SuccinicAcid_Jung2022_13c4sa_iv`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The succinic acid clearance value of 4574.5 mL/h/kg was rejected as physiologically implausible.

<div class="pk-model-meta" hidden drug="Succinic acid" model-id="SuccinicAcid_Jung2022_13c4sa_iv" status="rejected" stale="false" population="mice" measured-compound="Succinic acid-13C4" parameterization="mechanistic" topology="1C"></div>

## Citation
Jung Y, Song JS, Ahn S. Pharmacokinetics and Tissue Distribution of 13C-Labeled Succinic Acid in Mice. Nutrients 14(22) (2022).
  ·  DOI: [10.3390/nu14224757](https://doi.org/10.3390/nu14224757)

## Population and dosing

**Population:** mice · condition healthy · age group adult · n = 6.

**Dosing:** 700, 7000 mg, intravenous, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 0.08 | h |
| Cmax (ng/mL) | Cmax | 6226.7 | ng/mL |
| T1/2 (h) | t1/2z | 0.56 | h |
| AUC4h (ng·h/mL) | AUCt | 2222.8 | ng·h/mL |
| AUC∞ (ng·h/mL) | AUC∞ | 2223.8 | ng·h/mL |
| CL (mL/h/kg) | CL | 4574.5 | mL/h/kg |
| Vss (mL/kg) | Vss | 520.8 | mL/kg |
| MRT∞ (h) | MRT | 0.11 | h |
| Volume | V | 30.0 | µL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The succinic acid clearance value of 4574.5 mL/h/kg was rejected as physiologically implausible.**

The record lists total clearance for succinic acid as 4574.5 mL/h/kg, a magnitude far exceeding standard physiological windows for small molecules. This extreme value likely indicates a unit or scale extraction error rather than a valid pharmacokinetic parameter. Extracted — Succinic acid-13C4: tmax 0.08 h, Cmax 6.23e+03 ng/mL, t1/2z 0.56 h, AUCt 2.22e+03 ng·h/mL, AUC∞ 2.22e+03 ng·h/mL, CL 4.57e+03 mL/h/kg, Vss 521 mL/kg, MRT 0.11 h, … (+1).

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 0.08 | h | 288 | s | h | exact (1) | nutrients-14-04757-t005:row3:col1 |
| Cmax (ng/mL) | `Q32` · Cmax | 6226.7 | ng/mL | 0.006227 | kg/m3 | ng/ml | exact (1) | nutrients-14-04757-t005:row4:col1 |
| T1/2 (h) | `Q57` · t1/2z | 0.56 | h | 2016 | s | h | half_life_rule (0.95) | nutrients-14-04757-t005:row5:col1 |
| AUC4h (ng·h/mL) | `Q19` · AUCt | 2222.8 | ng·h/mL | 8.002 | kg*s/m3 | (h·ng)/ml | llm (0.6) | nutrients-14-04757-t005:row6:col1 |
| AUC∞ (ng·h/mL) | `Q17` · AUC∞ | 2223.8 | ng·h/mL | 8.006 | kg*s/m3 | (h·ng)/ml | exact (1) | nutrients-14-04757-t005:row7:col1 |
| CL (mL/h/kg) | `Q22` · CL | 4574.5 | mL/h/kg | 8.895e-05 | m3/s | ml/(h·kg) | exact (1) | nutrients-14-04757-t005:row8:col1 |
| Vss (mL/kg) | `Q65` · Vss | 520.8 | mL/kg | 0.03646 | m3 | ml/kg | exact (1) | nutrients-14-04757-t005:row9:col1 |
| MRT∞ (h) | `Q53` · MRT | 0.11 | h | 396 | s | h | exact (1) | nutrients-14-04757-t005:row11:col1 |
| Volume | `Q61` · V | 30.0 | µL | 3e-08 | m3 | L | review_gapfill (0.7) | Zhai_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(10 mg/kg)' — extend the ontology if this is a real PK parameter (source ['nutrients-14-04757-t005:row2:col1'])
- unit_dimension_mismatch: 'MRT4h (h)' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('MRT4h (h)', value '0.11') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Succinic acid-13C4
- population split: '13c4sa / iv' subgroup of Jung_2022 (paper reports 2 populations: 13c4sa / iv, 13c4sa / po)
- molar mass: no plausible PubChem entry for 'Succinic acid-13C4' ('succinic acid-13C4') — left in mass units
- molar mass: none found for 'Succinic acid-13C4' — its concentrations stay mass-only
- gap-filled Q61 (V) from Zhai_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table nutrients-14-04757-t005: ragged_grid
- LLM selected parameter table(s) 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['nutrients-14-04757-t005:row7:col1'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['nutrients-14-04757-t005:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['nutrients-14-04757-t005:row8:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['nutrients-14-04757-t005:row4:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['nutrients-14-04757-t005:row11:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['nutrients-14-04757-t005:row3:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['nutrients-14-04757-t005:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zhai_2019:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['nutrients-14-04757-t005:row9:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 4574 | ['nutrients-14-04757-t005:row8:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 320 L/h | ['nutrients-14-04757-t005:row8:col1'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 3e-05 L | ['Zhai_2019:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 36.5 L | ['nutrients-14-04757-t005:row9:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsuccinic_acid%5D%20SuccinicAcid_Jung2022_13c4sa_iv&body=Drug%3A%20succinic_acid%0ARecord%3A%20SuccinicAcid_Jung2022_13c4sa_iv%0APaper%3A%20Jung_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_iv%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 00:48 UTC</sub>
