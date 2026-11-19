<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Nicotinic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_nicotinic_acid/&quot;},{&quot;label&quot;:&quot;Ahlstr\u00f6m_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NicotinicAcid_Stack2014_reference&quot;,&quot;label&quot;:&quot;Stack_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nicotinic_acid/NicotinicAcid_Stack2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NicotinicAcid_Garrett1985_reference&quot;,&quot;label&quot;:&quot;Garrett_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nicotinic_acid/NicotinicAcid_Garrett1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nicotinic acid — `NicotinicAcid_Ahlstrm2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record was rejected because Vmax and Km use molar units rather than mass, and the molar unit for Vmax could not be converted to SI mass units.

<div class="pk-model-meta" hidden drug="Nicotinic acid" model-id="NicotinicAcid_Ahlstrm2011_reference" status="rejected" stale="false" population="male Sprague-Dawley rats" measured-compound="Nicotinic acid" parameterization="mechanistic" topology="2C"></div>

## Citation
Ahlström C, Peletier LA, Jansson-Löfmark R, Gabrielsson J. Feedback modeling of non-esterified fatty acids in rats after nicotinic acid infusions. Journal of pharmacokinetics and pharmacodynamics 38(1):1-24 (2011).
  ·  DOI: [10.1007/s10928-010-9172-2](https://doi.org/10.1007/s10928-010-9172-2)

## Population and dosing

**Population:** male Sprague-Dawley rats · condition healthy · age group adult · n = 63.

**Dosing:** 1, 5, 20, 51 µmol/kg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| V max1 (μmol min−1 kg−1) | Vmax | 0.0573 | μmol min−1 kg−1 | 1.57 |  |
| K m1 (μmol L−1) | Km | 0.00468 | μmol L−1 | 1.97 |  |
| V c (L kg−1) | V1 | 0.345 | L kg−1 | 0.559 |  |
| Cl d (L min−1 kg−1) | Q | 0.0203 | L min−1 kg−1 | 3.08 | 54.5 (88.6% RSE) |
| V t (L kg−1) | V | 3.54 | L kg−1 | 7.66 |  |
| Vitamin B 2 Control participants | CL | 1.87 | ml/min |  |  |
| Vp (L kg-1) | V2 | 0.393 | L kg-1 |  |  |
| ka (h-1) | kabs | 4.27 | h-1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because Vmax and Km use molar units rather than mass, and the molar unit for Vmax could not be converted to SI mass units.**

Vmax (0.0573 µmol min⁻¹ kg⁻¹) and Km (0.00468 µmol L⁻¹) are reported in molar terms, conflicting with the model’s required mass-based dimensions. Furthermore, the specific molar unit for Vmax could not be automatically converted to standard SI mass units, leaving the parameter without a valid numerical value for simulation. Extracted — nicotinic acid: Vmax 0.0573 μmol min−1 kg−1, Km 0.00468 μmol L−1, V1 0.345 L kg−1, Q 0.0203 L min−1 kg−1, V 3.54 L kg−1, CL 1.87 ml/min, V2 0.393 L kg-1, kabs 4.27 h-1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V max1 (μmol min−1 kg−1) | `Q66` · Vmax | 0.0573 | μmol min−1 kg−1 |  |  | (µM·ol)/(min·kg) | 1.57 | llm (0.6) | Tab1:row1:col2 |  |
| K m1 (μmol L−1) | `Q1` · Km | 0.00468 | μmol L−1 |  |  | (µM·ol)/l | 1.97 | llm (0.6) | Tab1:row2:col2 |  |
| V c (L kg−1) | `Q63` · V1 | 0.345 | L kg−1 | 0.02415 | m3 | l/kg | 0.559 | space_fold (0.95) | Tab1:row5:col2 |  |
| Cl d (L min−1 kg−1) | `Q30` · Q | 0.0203 | L min−1 kg−1 | 2.368e-05 | m3/s | l/(min·kg) | 3.08 | space_fold (0.95) | Tab1:row6:col2 | 54.5 (88.6% RSE) |
| V t (L kg−1) | `Q61` · V | 3.54 | L kg−1 | 0.2478 | m3 | l/kg | 7.66 | llm (0.6) | Tab1:row7:col2 |  |
| Vitamin B 2 Control participants | `Q22` · CL | 1.87 | ml/min | 3.117e-08 | m3/s | L/h |  | review_gapfill (0.7) | Iwakawa_2019:review |  |
| Vp (L kg-1) | `Q64` · V2 | 0.393 | L kg-1 | 0.02751 | m3 | L |  | review_gapfill (0.7) | Andersson_2017:review |  |
| ka (h-1) | `Q49` · kabs | 4.27 | h-1 | 0.001186 | 1/s | 1/h |  | review_gapfill (0.7) | Andersson_2017:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'V max2 (μmol min−1 kg−1)' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'Cl d (L min−1 kg−1)' routed out of structural estimates ('IIV (RSE%)')
- table section iiv: 'Synt (μmol min−1 kg−1)' routed out of structural estimates ('IIV (RSE%)')
- unit_dimension_mismatch: 'V max1 (μmol min−1 kg−1)' → Q66 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'K m1 (μmol L−1)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'V max2 (μmol min−1 kg−1)' → Q66 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q66 ('V max2 (μmol min−1 kg−1)', value '1.46') — already have one for this compound
- unit_dimension_mismatch: 'K m2 (μmol L−1)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('K m2 (μmol L−1)', value '16.6') — already have one for this compound
- dropped unlinked row (NIL): 'Synt (μmol min−1 kg−1)' — extend the ontology if this is a real PK parameter (source ['Tab1:row8:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Nicotinic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Iwakawa_2019's review values (primary lacked it)
- gap-filled Q64 (V2) from Andersson_2017's review values (primary lacked it)
- gap-filled Q49 (kabs) from Andersson_2017's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | μmol L−1 ([substance] / [length] ** 3) | ['Tab1:row2:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Iwakawa_2019:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab1:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Andersson_2017:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab1:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab1:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Andersson_2017:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μmol min−1 kg−1 ([substance] / [time]) | ['Tab1:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.87 | ['Iwakawa_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.112 L/h | ['Iwakawa_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 248 L | ['Tab1:row7:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 24.1 L | ['Tab1:row5:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 27.5 L | ['Andersson_2017:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnicotinic_acid%5D%20NicotinicAcid_Ahlstrm2011_reference&body=Drug%3A%20nicotinic_acid%0ARecord%3A%20NicotinicAcid_Ahlstrm2011_reference%0APaper%3A%20Ahlstr%C3%B6m_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nicotinic_acid/NicotinicAcid_Ahlstrm2011_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 00:21 UTC</sub>
