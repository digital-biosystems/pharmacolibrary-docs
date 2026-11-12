<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Monoethylhexyl phthalic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_monoethylhexyl_phthalic_acid/&quot;},{&quot;label&quot;:&quot;Li_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MonoethylhexylPhthalicAcid_Mittermeier2016_reference&quot;,&quot;label&quot;:&quot;Mittermeier_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_monoethylhexyl_phthalic_acid/MonoethylhexylPhthalicAcid_Mittermeier2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Monoethylhexyl phthalic acid — `MonoethylhexylPhthalicAcid_Li2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Transfer and absorption rate constants for mono (2-ethylhexyl) phthalate were recorded with mass/volume units instead of inverse time.

<div class="pk-model-meta" hidden drug="Monoethylhexyl phthalic acid" model-id="MonoethylhexylPhthalicAcid_Li2022_reference" status="rejected" stale="false" population="Human (general population/healthy volunteers)" measured-compound="mono (2-ethylhexyl) phthalate (MEHP)" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Li A, Kang L, Li R, Wu S, Liu K, Wang X. Modeling di (2-ethylhexyl) Phthalate (DEHP) and Its Metabolism in a Body's Organs and Tissues through Different Intake Pathways into Human Body. International journal of environmental research and public health 19(9) (2022).
  ·  DOI: [10.3390/ijerph19095742](https://doi.org/10.3390/ijerph19095742)

## Population and dosing

**Population:** Human (general population/healthy volunteers) · condition indoor exposure (oral, dermal, inhalation) · age group adult · n = 1 (for validation data).

**Dosed compound ≠ measured compound:** dosed di (2-ethylhexyl) phthalate (DEHP), measured mono (2-ethylhexyl) phthalate (MEHP).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW | MW | 391 | g/mole |
| vmaxgutM3 | Vmax | 0 | μg/min/mg MSP b |
| kmgutM2 | k41 | 22508 | μg/L |
| kmgutM4 | kabs | 219076 | μg/L |
| kmgutM5 | k12 | 187652 | μg/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Transfer and absorption rate constants for mono (2-ethylhexyl) phthalate were recorded with mass/volume units instead of inverse time.**

The record lists k41, kabs, and k12 with units of μg/L, which conflicts with their meanings as rate constants requiring dimensions of 1/[time]. Additionally, Vmax for MEHP metabolism has a value of 0. The reported units could not be converted to standard SI units. Extracted — monoethylhexyl phthalic acid: MW 391 g/mole; mono (2-ethylhexyl) phthalate (MEHP): Vmax 0 μg/min/mg MSP b; phthalic acid esters: k41 2.25e+04 μg/L, kabs 2.19e+05 μg/L, k12 1.88e+05 μg/L.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| MW | `Q374` · MW | 391 | g/mole | 0.391 | g/(m·ole) | exact (1) | Li_2022_table_1:row0:col3, Li_2022_table_1:row1:col3, Li_2022_table_1:row2:col3, Li_2022_table_1:row3:col3, Li_2022_table_1:row4:col3 |
| vmaxgutM3 | `Q66` · Vmax | 0 | μg/min/mg MSP b |  | µg/(ms·min·mg·b·p) | llm (0.6) | Li_2022_table_1:row24:col3 |
| kmgutM2 | `Q348` · k41 | 22508 | μg/L |  | µg/l | llm (0.6) | Li_2022_table_1:row28:col3 |
| kmgutM4 | `Q49` · kabs | 219076 | μg/L |  | µg/l | llm (0.6) | Li_2022_table_1:row30:col3 |
| kmgutM5 | `Q301` · k12 | 187652 | μg/L |  | µg/l | llm (0.6) | Li_2022_table_1:row31:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'values/contribution' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'LogKo:w' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row5:col3'])
- dropped unlinked row (NIL): 'fup' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row17:col3'])
- unit_dimension_unknown: 'μg/min/mg MSP b' (Vmax)
- dropped unlinked row (NIL): 'kmgutM1' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row27:col3'])
- unit_dimension_mismatch: 'kmgutM2' → Q348 (unit '[mass] / [length] ** 3' vs ontology '1 / [time]') — route to review
- dropped 'kmgutM3' → Q47 = 0: a rate of 0 is not a parameter value (source ['Li_2022_table_1:row29:col3'])
- unit_dimension_mismatch: 'kmgutM4' → Q49 (unit '[mass] / [length] ** 3' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'kmgutM5' → Q301 (unit '[mass] / [length] ** 3' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'kmgut_cytM1' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row32:col3'])
- dropped unlinked row (NIL): 'kmliver_cytM1' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row39:col3'])
- dropped unlinked row (NIL): 'kmliverM2' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row40:col3'])
- dropped unlinked row (NIL): 'kmliverM3' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row41:col3'])
- dropped unlinked row (NIL): 'kmliverM4' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row42:col3'])
- dropped unlinked row (NIL): 'kmliverM5' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_1:row43:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mono (2-ethylhexyl) phthalate (MEHP)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles: 11 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=pbpk; 15/15 row label(s) assigned, 0 linked by role; re-tagged parent→mono (2-ethylhexyl) phthalate (MEHP) ×1, parent→phthalic acid esters ×11
- molar mass: no plausible PubChem entry for 'di (2-ethylhexyl) phthalate (DEHP)' ('di (2-ethylhexyl) phthalate') — left in mass units
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'mono (2-ethylhexyl) phthalate (MEHP)' (LLM) — left in mass units
- molar mass: none found for 'di (2-ethylhexyl) phthalate (DEHP)' — its concentrations stay mass-only
- molar mass: none found for 'mono (2-ethylhexyl) phthalate (MEHP)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | fail | 1 / [time] | μg/L ([mass] / [length] ** 3) | ['Li_2022_table_1:row31:col3'] |
| C5_dimension_Q348 | fail | 1 / [time] | μg/L ([mass] / [length] ** 3) | ['Li_2022_table_1:row28:col3'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Li_2022_table_1:row0:col3', 'Li_2022_table_1:row1:col3', 'Li_2022_table_1:row2:col3', 'Li_2022_table_1:row3:col3', 'Li_2022_table_1:row4:col3'] |
| C5_dimension_Q49 | fail | 1 / [time] | μg/L ([mass] / [length] ** 3) | ['Li_2022_table_1:row30:col3'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] | μg/min/mg MSP b | ['Li_2022_table_1:row24:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmonoethylhexyl_phthalic_acid%5D%20MonoethylhexylPhthalicAcid_Li2022_reference&body=Drug%3A%20monoethylhexyl_phthalic_acid%0ARecord%3A%20MonoethylhexylPhthalicAcid_Li2022_reference%0APaper%3A%20Li_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_monoethylhexyl_phthalic_acid/MonoethylhexylPhthalicAcid_Li2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 07:52 UTC</sub>
