<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Homogentisic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_homogentisic_acid/&quot;},{&quot;label&quot;:&quot;Ranganath_2020 \u00b7 female_aku&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Homogentisic acid — `HomogentisicAcid_Ranganath2020_female_aku`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Unbound clearance for homogentisic acid was rejected because its unit, micromoles per day, does not dimensionally match a clearance parameter.

<div class="pk-model-meta" hidden drug="Homogentisic acid" model-id="HomogentisicAcid_Ranganath2020_female_aku" status="rejected" stale="false" population="AKU patients and non-AKU subjects" measured-compound="Homogentisic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Ranganath LR, Milan AM, Hughes AT, Khedr M, Davison AS, Shweihdi E et al. Homogentisic acid is not only eliminated by glomerular filtration and tubular secretion but also produced in the kidney in alkaptonuria. Journal of inherited metabolic disease 43(4):737–747 (2020).
  ·  DOI: [10.1002/jimd.12181](https://doi.org/10.1002/jimd.12181)

## Population and dosing

**Population:** AKU patients and non-AKU subjects · condition alcaptonuria · age group adult · n = 277.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLCREAT mL/min | CLR | 105.1 | mL/min |
| uPHE24 µmol/day | CLu | 108.8 | µmol/day |
| FEHGA% | fe | 708 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Unbound clearance for homogentisic acid was rejected because its unit, micromoles per day, does not dimensionally match a clearance parameter.**

The unbound clearance parameter, representing the elimination rate relative to unbound concentration, was recorded with a value of 108.8 and units of µmol/day. A clearance parameter must have dimensions of volume per time, but the recorded unit represents substance amount per time. This dimensional conflict caused the validation to fail for this specific structural parameter. Extracted — homogentisic acid: CLR 105 mL/min, CLu 109 µmol/day, fe 708.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLCREAT mL/min | `Q26` · CLR | 105.1 | mL/min | 1.752e-06 | m3/s | ml/min | llm (0.6) | Ranganath_2020_table_3:row4:col2 |
| uPHE24 µmol/day | `Q24` · CLu | 108.8 | µmol/day |  |  | (µM·ol)/d | llm (0.6) | Ranganath_2020_table_3:row10:col2 |
| FEHGA% | `Q44` · fe | 708 |  |  |  |  | llm (0.6) | Ranganath_2020_table_3:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Number' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row0:col2'])
- dropped unlinked row (NIL): 'Age years' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row1:col2'])
- dropped unlinked row (NIL): 'sCR µmol/L' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row2:col2'])
- dropped unlinked row (NIL): 'eGFR mL/min/1.73m²' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row3:col2'])
- dropped unlinked row (NIL): 'sHGA µmol/L' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row5:col2'])
- dropped unlinked row (NIL): 'sTYR µmol/L' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row6:col2'])
- dropped unlinked row (NIL): 'sPHE µmol/L' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row7:col2'])
- dropped unlinked row (NIL): 'uHGA24 µmol/day' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row8:col2'])
- unit_dimension_mismatch: 'uTYR24 µmol/day' → Q26 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q26 ('uTYR24 µmol/day', value '137') — already have one for this compound
- unit_dimension_mismatch: 'uPHE24 µmol/day' → Q24 (unit '[substance] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q26 ('CLHGA mL/min', value '720') — already have one for this compound
- dropped duplicate Q26 ('CLTYR mL/min', value '1.75') — already have one for this compound
- dropped duplicate Q26 ('CLPHE mL/min', value '0.9') — already have one for this compound
- dropped unlinked row (NIL): 'FETZR%' — extend the ontology if this is a real PK parameter (source ['Ranganath_2020_table_3:row15:col2'])
- 'FEPHE%' → Q44: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q44 ('FEPHE%', value '1.39') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Homogentisic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'female aku' subgroup of Ranganath_2020 (paper reports 2 populations: female aku, male aku)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3
- table Ranganath_2020_table_3: units_need_context
- toxin: the located table(s) gave no kinetic value — 96 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q24 | fail | [length] ** 3 / [time] | µmol/day ([substance] / [time]) | ['Ranganath_2020_table_3:row10:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Ranganath_2020_table_3:row4:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 108.8 | ['Ranganath_2020_table_3:row10:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhomogentisic_acid%5D%20HomogentisicAcid_Ranganath2020_female_aku&body=Drug%3A%20homogentisic_acid%0ARecord%3A%20HomogentisicAcid_Ranganath2020_female_aku%0APaper%3A%20Ranganath_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_homogentisic_acid/HomogentisicAcid_Ranganath2020_female_aku%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 13:22 UTC</sub>
