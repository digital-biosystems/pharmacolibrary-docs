<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Dihydrotestosterone&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydrotestosterone/&quot;},{&quot;label&quot;:&quot;Zager_2012 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dihydrotestosterone — `Dihydrotestosterone_Zager2012_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The intercompartmental clearance Q was assigned a value of 1.06 with unit hr^-1, creating a dimension mismatch for a flow parameter.

<div class="pk-model-meta" hidden drug="Dihydrotestosterone" model-id="Dihydrotestosterone_Zager2012_reference" status="rejected" stale="false" population="adult male rat" measured-compound="Dihydrotestosterone" parameterization="mechanistic" topology="1C"></div>

## Citation
Zager MG, Barton HA. A multiscale, mechanism-driven, dynamic model for the effects of 5α-reductase inhibition on prostate maintenance. PloS one 7(9):e44359 (2012).
  ·  DOI: [10.1371/journal.pone.0044359](https://doi.org/10.1371/journal.pone.0044359)

## Population and dosing

**Population:** adult male rat · condition chronic finasteride administration · age group adult.

**Dosed compound ≠ measured compound:** dosed Finasteride, measured Dihydrotestosterone.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Km | Km | 0.6 | nM |
| kdg | kmet | 0.016 | hr−1 |
| Q_l | Q | 1.06 | L/hr |
| V_maxl | Vmax | 3.65 | nmol/hr |
| K_D | KD | 77.2 | hr^-1 |
| k a | kabs | 0.197 | h Ϫ1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance Q was assigned a value of 1.06 with unit hr^-1, creating a dimension mismatch for a flow parameter.**

The record lists Q with a value of 1.06 and unit hr^-1, but its meaning defines it as intercompartmental clearance, which requires volume per time dimensions. This mismatch, combined with the inability to convert the reported unit to standard SI units, prevented the parameter from receiving a valid value. Extracted — dihydrotestosterone: Km 0.6 nM, kmet 0.016 hr−1, Q 1.06 L/hr, Vmax 3.65 nmol/hr, KD 77.2 hr^-1, kabs 0.197 h Ϫ1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Km | `Q1` · Km | 0.6 | nM |  |  | nM | exact (1) | pone-0044359-t004:row4:col3 |
| kdg | `Q51` · kmet | 0.016 | hr−1 | 4.444e-06 | 1/s | 1/h | llm (0.6) | pone-0044359-t004:row10:col3 |
| Q_l | `Q30` · Q | 1.06 | L/hr | 2.944e-07 | m3/s | l/h | llm (0.6) | Zager_2012_table_2:row0:col3 |
| V_maxl | `Q66` · Vmax | 3.65 | nmol/hr |  |  | nM/h | llm (0.6) | Zager_2012_table_2:row1:col3 |
| K_D | `Q331` · KD | 77.2 | hr^-1 |  |  | 1/h | exact (1) | Zager_2012_table_2:row6:col3 |
| k a | `Q49` · kabs | 0.197 | h Ϫ1 | 5.472e-05 | 1/s | 1/h | review_gapfill (0.7) | Matsumoto_2005:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'k1': [{'unit': 'hr−1 nM−1', 'source': 'pone-0044359-t004:row1:col2', 'scope': 'unit_column'}, {'unit': '5', 'source': 'pone-0044359-t004:row1:col1', 'scope': 'description'}]
- conflicting source units for 'kcat': [{'unit': 'hr−1', 'source': 'pone-0044359-t004:row3:col2', 'scope': 'unit_column'}, {'unit': '4', 'source': 'pone-0044359-t004:row3:col1', 'scope': 'description'}]
- conflicting source units for 'k3': [{'unit': 'hr−1 nM−1', 'source': 'pone-0044359-t004:row5:col2', 'scope': 'unit_column'}, {'unit': '5', 'source': 'pone-0044359-t004:row5:col1', 'scope': 'description'}]
- conflicting source units for 'k5': [{'unit': 'hr−1', 'source': 'pone-0044359-t004:row7:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'pone-0044359-t004:row7:col1', 'scope': 'description'}]
- conflicting source units for 'k6': [{'unit': 'hr−1', 'source': 'pone-0044359-t004:row8:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'pone-0044359-t004:row8:col1', 'scope': 'description'}]
- conflicting source units for 'Ki5aR2': [{'unit': 'nM', 'source': 'pone-0044359-t004:row9:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'pone-0044359-t004:row9:col1', 'scope': 'description'}]
- conflicting source units for 'K_i^5aR1': [{'unit': 'nM', 'source': 'Zager_2012_table_2:row7:col2', 'scope': 'unit_column'}, {'unit': '2', 'source': 'Zager_2012_table_2:row7:col1', 'scope': 'description'}]
- dropped unlinked row (NIL): 'k1' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row1:col3'])
- dropped unlinked row (NIL): 'k2' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row2:col3'])
- dropped unlinked row (NIL): 'kcat' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row3:col3'])
- unit_dimension_mismatch: 'Km' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'k3' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row5:col3'])
- dropped unlinked row (NIL): 'k4' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row6:col3'])
- dropped unlinked row (NIL): 'k5' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row7:col3'])
- dropped unlinked row (NIL): 'k6' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row8:col3'])
- dropped unlinked row (NIL): 'Ki5aR2' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row9:col3'])
- dropped unlinked row (NIL): 'DNAo5aR20' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row13:col3'])
- unit_dimension_mismatch: 'V_maxl' → Q66 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'PT_l' — extend the ontology if this is a real PK parameter (source ['Zager_2012_table_2:row2:col3'])
- dropped unlinked row (NIL): 'PD_l' — extend the ontology if this is a real PK parameter (source ['Zager_2012_table_2:row3:col3'])
- unit_dimension_mismatch: 'K_m5a' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('K_m5a', value '2.3') — already have one for this compound
- dropped unlinked row (NIL): 'k_RT' — extend the ontology if this is a real PK parameter (source ['Zager_2012_table_2:row5:col3'])
- unit_dimension_mismatch: 'K_D' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'K_i^5aR1' — extend the ontology if this is a real PK parameter (source ['Zager_2012_table_2:row7:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Dihydrotestosterone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Matsumoto_2005's review values (primary lacked it)

**Extraction notes:**
- table pone-0044359-t004: conflicting_units
- table Zager_2012_table_2: conflicting_units
- companion parameter table 2 transcribed (8 record(s))
- table Zager_2012_table_4: no_numeric_grid
- companion parameter table 4 transcribed (0 record(s))
- table Zager_2012_table_6: no_numeric_grid
- companion parameter table 6 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 4, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | nM ([length]) | ['pone-0044359-t004:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Zager_2012_table_2:row0:col3'] |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | hr^-1 (1 / [time]) | ['Zager_2012_table_2:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Matsumoto_2005:review'] |
| C5_dimension_Q51 | pass | 1 / [time] |  | ['pone-0044359-t004:row10:col3'] |
| C5_dimension_Q66 | fail | [mass] / [time] | nmol/hr ([substance] / [time]) | ['Zager_2012_table_2:row1:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdihydrotestosterone%5D%20Dihydrotestosterone_Zager2012_reference&body=Drug%3A%20dihydrotestosterone%0ARecord%3A%20Dihydrotestosterone_Zager2012_reference%0APaper%3A%20Zager_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dihydrotestosterone/Dihydrotestosterone_Zager2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 01:42 UTC</sub>
