<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;4,4&#x27;-Methylenedianiline&quot;,&quot;href&quot;:&quot;drugs/toxin_44_methylenedianiline/&quot;},{&quot;label&quot;:&quot;Do_2000 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 4,4'-Methylenedianiline — `D_44Methylenedianiline_Do2000_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> 4,4'-Methylenedianiline's clearance was rejected because its rat blood flow value of 5005 mL/h is physiologically implausible.

<div class="pk-model-meta" hidden drug="4,4&#39;-Methylenedianiline" model-id="D_44Methylenedianiline_Do2000_reference" status="rejected" stale="false" population="healthy individual; polyurethane plant workers; hemodialysis patients" measured-compound="4,4&#39;-Methylenedianiline and metabolites" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Do Luu HM, Hutter JC. Pharmacokinetic modeling of 4,4'-methylenedianiline released from reused polyurethane dialyzer potting materials. Journal of biomedical materials research 53(3):276–286 (2000).
  ·  DOI: [10.1002/(sici)1097-4636(2000)53:3<276::aid-jbm13>3.0.co;2-e](https://doi.org/10.1002/(sici)1097-4636(2000)53:3<276::aid-jbm13>3.0.co;2-e)

## Population and dosing

**Population:** healthy individual; polyurethane plant workers; hemodialysis patients · condition occupational exposure; hemodialysis exposure; IV administration (rat) · age group adult.

**Dosed compound ≠ measured compound:** dosed 4,4'-Methylenedianiline, measured 4,4'-Methylenedianiline and metabolites.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Rat Blood Flow (mL/h) | Qb | 5005 | mL/h |
| Rat Compartment Volume (mL) | V | 6.0 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**4,4'-Methylenedianiline's clearance was rejected because its rat blood flow value of 5005 mL/h is physiologically implausible.**

The record lists the blood flow to tissues as 5005 mL/h, which is outside the expected physiological range for a rat. This magnitude suggests a unit or scale error in the extracted parameter value. The model was rejected because this implausible value falls outside the acceptable window for clearance estimation. Extracted — 44 methylenedianiline: Qb 5e+03 mL/h, V 6 mL.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Rat Blood Flow (mL/h) | `Q54` · Qb | 5005 | mL/h | 1.39e-06 | m3/s | ml/h | llm_confirmed (0.6) | Do_2000_table_p4_1:row0:col1, Do_2000_table_p4_1:row1:col1, Do_2000_table_p4_1:row2:col1, Do_2000_table_p4_1:row3:col1, Do_2000_table_p4_1:row4:col1, Do_2000_table_p4_1:row5:col1 |
| Rat Compartment Volume (mL) | `Q61` · V | 6.0 | mL | 6e-06 | m3 | ml | llm_confirmed (0.6) | Do_2000_table_p4_1:row0:col2, Do_2000_table_p4_1:row1:col2, Do_2000_table_p4_1:row2:col2, Do_2000_table_p4_1:row3:col2, Do_2000_table_p4_1:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q54 ('Human Blood Flow (mL/h)', value '312000') — already have one for this compound
- dropped duplicate Q61 ('Human Compartment Volume (mL)', value '948') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=4,4'-Methylenedianiline and metabolites
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Do_2000:discussion_prose, Do_2000:other_prose, Do_2000_table_p4_1); populations human value, rat value kept as separate records
- row roles (LLM): model_class=pbpk; 9/9 row label(s) assigned, 22 linked by role; re-tagged parent→MDA metabolites ×2
- molar mass: no plausible PubChem entry for 'MDA metabolites' ("4,4'-methylenedianiline metabolites") — left in mass units
- molar mass: no plausible PubChem entry for "4,4'-Methylenedianiline and metabolites" ("4,4'-methylenedianiline and metabolites") — left in mass units
- molar mass: none found for 'MDA metabolites' — its concentrations stay mass-only
- molar mass: none found for "4,4'-Methylenedianiline and metabolites" — its concentrations stay mass-only
- review gap-fill skipped: this record measures "4,4'-Methylenedianiline and metabolites", not 44_methylenedianiline — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- table Do_2000_table_p4_1: unbound_uncertainty
- table Do_2000_table_p4_1: unparsed_numeric_cell
- transposed table Do_2000_table_p4_1: logical view retains original source coordinates
- table Do_2000_table_p4_2: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['Do_2000_table_p4_1:row0:col1', 'Do_2000_table_p4_1:row1:col1', 'Do_2000_table_p4_1:row2:col1', 'Do_2000_table_p4_1:row3:col1', 'Do_2000_table_p4_1:row4:col1', 'Do_2000_table_p4_1:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Do_2000_table_p4_1:row0:col2', 'Do_2000_table_p4_1:row1:col2', 'Do_2000_table_p4_1:row2:col2', 'Do_2000_table_p4_1:row3:col2', 'Do_2000_table_p4_1:row4:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.006 L | ['Do_2000_table_p4_1:row0:col2', 'Do_2000_table_p4_1:row1:col2', 'Do_2000_table_p4_1:row2:col2', 'Do_2000_table_p4_1:row3:col2', 'Do_2000_table_p4_1:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B44_methylenedianiline%5D%20D_44Methylenedianiline_Do2000_reference&body=Drug%3A%2044_methylenedianiline%0ARecord%3A%20D_44Methylenedianiline_Do2000_reference%0APaper%3A%20Do_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_44_methylenedianiline/D_44Methylenedianiline_Do2000_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 02:33 UTC</sub>
