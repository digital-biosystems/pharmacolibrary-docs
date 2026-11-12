<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Lysine&quot;,&quot;href&quot;:&quot;drugs/toxin_l_lysine/&quot;},{&quot;label&quot;:&quot;Frimpter_1967 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# L-Lysine — `LLysine_Frimpter1967_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because the single parameter, a normalized volume of distribution for cystathionine, is not a kinetic quantity.

<div class="pk-model-meta" hidden drug="L-Lysine" model-id="LLysine_Frimpter1967_reference" status="rejected" stale="false" population="adult male patient with cystinuria" measured-compound="Cystathionine" parameterization="mechanistic" topology="1C"></div>

## Citation
Frimpter GW, Greenberg AJ. Renal clearance of cystathionine in homozygous and heterozygous cystathioninuria, cystinuria, and the normal state. The Journal of clinical investigation 46(6):975–982 (1967).
  ·  DOI: [10.1172/JCI105604](https://doi.org/10.1172/JCI105604)

## Population and dosing

**Population:** adult male patient with cystinuria · condition cystinuria · age group adult · n = 1.

**Dosed compound ≠ measured compound:** dosed L-Cystathionine, measured Cystathionine.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| I | Vnorm | 15 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because the single parameter, a normalized volume of distribution for cystathionine, is not a kinetic quantity.**

The model defines only a normalized volume of distribution with a value of 15. The review found no half-life, rate constant, or clearance parameters. Consequently, the record lacks the kinetic metrics required for a pharmacokinetic model. Extracted — l lysine: Vnorm 15.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| I | `Q352` · Vnorm | 15 |  | llm (0.6) | Frimpter_1967_table_2:row0:col1, Frimpter_1967_table_2:row0:col2, Frimpter_1967_table_2:row0:col3, Frimpter_1967_table_2:row0:col4, Frimpter_1967_table_2:row0:col5, Frimpter_1967_table_3:row0:col1, Frimpter_1967_table_3:row0:col3, Frimpter_1967_table_3:row0:col4, Frimpter_1967_table_3:row0:col5, Frimpter_1967_table_3:row0:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Frimpter_1967_table_1:row0:col2', 'Frimpter_1967_table_1:row0:col4', 'Frimpter_1967_table_1:row0:col5', 'Frimpter_1967_table_1:row0:col6', 'Frimpter_1967_table_1:row0:col7', 'Frimpter_1967_table_1:row1:col2', 'Frimpter_1967_table_1:row1:col4', 'Frimpter_1967_table_1:row1:col5', 'Frimpter_1967_table_1:row1:col6', 'Frimpter_1967_table_1:row1:col7', 'Frimpter_1967_table_1:row2:col2', 'Frimpter_1967_table_1:row2:col4', 'Frimpter_1967_table_1:row2:col5', 'Frimpter_1967_table_1:row2:col6', 'Frimpter_1967_table_1:row2:col7', 'Frimpter_1967_table_1:row3:col2', 'Frimpter_1967_table_1:row3:col4', 'Frimpter_1967_table_1:row3:col5', 'Frimpter_1967_table_1:row3:col6', 'Frimpter_1967_table_1:row3:col7', 'Frimpter_1967_table_1:row4:col2', 'Frimpter_1967_table_1:row4:col4', 'Frimpter_1967_table_1:row4:col5', 'Frimpter_1967_table_1:row4:col6', 'Frimpter_1967_table_1:row4:col7', 'Frimpter_1967_table_1:row5:col2', 'Frimpter_1967_table_1:row5:col4', 'Frimpter_1967_table_1:row5:col5', 'Frimpter_1967_table_1:row5:col6', 'Frimpter_1967_table_1:row5:col7', 'Frimpter_1967_table_4:row0:col1', 'Frimpter_1967_table_4:row0:col3', 'Frimpter_1967_table_4:row0:col4', 'Frimpter_1967_table_4:row0:col5', 'Frimpter_1967_table_4:row0:col6', 'Frimpter_1967_table_4:row1:col1', 'Frimpter_1967_table_4:row1:col3', 'Frimpter_1967_table_4:row1:col4', 'Frimpter_1967_table_4:row1:col5', 'Frimpter_1967_table_4:row1:col6', 'Frimpter_1967_table_4:row2:col1', 'Frimpter_1967_table_4:row2:col3', 'Frimpter_1967_table_4:row2:col4', 'Frimpter_1967_table_4:row2:col5', 'Frimpter_1967_table_4:row2:col6'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Frimpter_1967_table_1:row6:col2', 'Frimpter_1967_table_1:row6:col4', 'Frimpter_1967_table_1:row6:col5', 'Frimpter_1967_table_1:row6:col6', 'Frimpter_1967_table_1:row6:col7', 'Frimpter_1967_table_1:row7:col2', 'Frimpter_1967_table_1:row7:col4', 'Frimpter_1967_table_1:row7:col5', 'Frimpter_1967_table_1:row7:col6', 'Frimpter_1967_table_1:row7:col7', 'Frimpter_1967_table_1:row8:col2', 'Frimpter_1967_table_1:row8:col4', 'Frimpter_1967_table_1:row8:col5', 'Frimpter_1967_table_1:row8:col6', 'Frimpter_1967_table_1:row8:col7', 'Frimpter_1967_table_1:row9:col2', 'Frimpter_1967_table_1:row9:col4', 'Frimpter_1967_table_1:row9:col5', 'Frimpter_1967_table_1:row9:col6', 'Frimpter_1967_table_1:row9:col7', 'Frimpter_1967_table_1:row10:col2', 'Frimpter_1967_table_1:row10:col4', 'Frimpter_1967_table_1:row10:col5', 'Frimpter_1967_table_1:row10:col6', 'Frimpter_1967_table_1:row10:col7', 'Frimpter_1967_table_1:row11:col2', 'Frimpter_1967_table_1:row11:col4', 'Frimpter_1967_table_1:row11:col5', 'Frimpter_1967_table_1:row11:col6', 'Frimpter_1967_table_1:row11:col7', 'Frimpter_1967_table_1:row12:col2', 'Frimpter_1967_table_1:row12:col4', 'Frimpter_1967_table_1:row12:col5', 'Frimpter_1967_table_1:row12:col6', 'Frimpter_1967_table_1:row12:col7', 'Frimpter_1967_table_1:row13:col2', 'Frimpter_1967_table_1:row13:col4', 'Frimpter_1967_table_1:row13:col5', 'Frimpter_1967_table_1:row13:col6', 'Frimpter_1967_table_1:row13:col7', 'Frimpter_1967_table_4:row3:col1', 'Frimpter_1967_table_4:row3:col3', 'Frimpter_1967_table_4:row3:col4', 'Frimpter_1967_table_4:row3:col5', 'Frimpter_1967_table_4:row3:col6', 'Frimpter_1967_table_4:row4:col1', 'Frimpter_1967_table_4:row4:col3', 'Frimpter_1967_table_4:row4:col4', 'Frimpter_1967_table_4:row4:col5', 'Frimpter_1967_table_4:row4:col6', 'Frimpter_1967_table_4:row5:col1', 'Frimpter_1967_table_4:row5:col3', 'Frimpter_1967_table_4:row5:col4', 'Frimpter_1967_table_4:row5:col5', 'Frimpter_1967_table_4:row5:col6', 'Frimpter_1967_table_4:row6:col1', 'Frimpter_1967_table_4:row6:col3', 'Frimpter_1967_table_4:row6:col4', 'Frimpter_1967_table_4:row6:col5', 'Frimpter_1967_table_4:row6:col6'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Frimpter_1967_table_1:row14:col2', 'Frimpter_1967_table_1:row14:col4', 'Frimpter_1967_table_1:row14:col5', 'Frimpter_1967_table_1:row14:col6', 'Frimpter_1967_table_1:row14:col7', 'Frimpter_1967_table_1:row15:col2', 'Frimpter_1967_table_1:row15:col4', 'Frimpter_1967_table_1:row15:col5', 'Frimpter_1967_table_1:row15:col6', 'Frimpter_1967_table_1:row15:col7', 'Frimpter_1967_table_1:row16:col2', 'Frimpter_1967_table_1:row16:col4', 'Frimpter_1967_table_1:row16:col5', 'Frimpter_1967_table_1:row16:col6', 'Frimpter_1967_table_1:row16:col7', 'Frimpter_1967_table_1:row17:col2', 'Frimpter_1967_table_1:row17:col4', 'Frimpter_1967_table_1:row17:col5', 'Frimpter_1967_table_1:row17:col6', 'Frimpter_1967_table_1:row17:col7', 'Frimpter_1967_table_1:row18:col2', 'Frimpter_1967_table_1:row18:col4', 'Frimpter_1967_table_1:row18:col5', 'Frimpter_1967_table_1:row18:col6', 'Frimpter_1967_table_1:row18:col7', 'Frimpter_1967_table_1:row19:col2', 'Frimpter_1967_table_1:row19:col4', 'Frimpter_1967_table_1:row19:col5', 'Frimpter_1967_table_1:row19:col6', 'Frimpter_1967_table_1:row19:col7', 'Frimpter_1967_table_4:row7:col1', 'Frimpter_1967_table_4:row7:col3', 'Frimpter_1967_table_4:row7:col4', 'Frimpter_1967_table_4:row7:col5', 'Frimpter_1967_table_4:row7:col6', 'Frimpter_1967_table_4:row8:col1', 'Frimpter_1967_table_4:row8:col3', 'Frimpter_1967_table_4:row8:col4', 'Frimpter_1967_table_4:row8:col5', 'Frimpter_1967_table_4:row8:col6', 'Frimpter_1967_table_4:row9:col1', 'Frimpter_1967_table_4:row9:col3', 'Frimpter_1967_table_4:row9:col4', 'Frimpter_1967_table_4:row9:col5', 'Frimpter_1967_table_4:row9:col6'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Frimpter_1967_table_1:row20:col2', 'Frimpter_1967_table_1:row20:col4', 'Frimpter_1967_table_1:row20:col5', 'Frimpter_1967_table_1:row20:col6', 'Frimpter_1967_table_1:row20:col7', 'Frimpter_1967_table_1:row21:col2', 'Frimpter_1967_table_1:row21:col4', 'Frimpter_1967_table_1:row21:col5', 'Frimpter_1967_table_1:row21:col6', 'Frimpter_1967_table_1:row21:col7', 'Frimpter_1967_table_1:row22:col2', 'Frimpter_1967_table_1:row22:col4', 'Frimpter_1967_table_1:row22:col5', 'Frimpter_1967_table_1:row22:col6', 'Frimpter_1967_table_1:row22:col7', 'Frimpter_1967_table_1:row23:col2', 'Frimpter_1967_table_1:row23:col4', 'Frimpter_1967_table_1:row23:col5', 'Frimpter_1967_table_1:row23:col6', 'Frimpter_1967_table_1:row23:col7', 'Frimpter_1967_table_1:row24:col2', 'Frimpter_1967_table_1:row24:col4', 'Frimpter_1967_table_1:row24:col5', 'Frimpter_1967_table_1:row24:col6', 'Frimpter_1967_table_1:row24:col7', 'Frimpter_1967_table_1:row25:col2', 'Frimpter_1967_table_1:row25:col4', 'Frimpter_1967_table_1:row25:col5', 'Frimpter_1967_table_1:row25:col6', 'Frimpter_1967_table_1:row25:col7'])
- dropped unlinked row (NIL): 'II' — extend the ontology if this is a real PK parameter (source ['Frimpter_1967_table_2:row1:col1', 'Frimpter_1967_table_2:row1:col2', 'Frimpter_1967_table_2:row1:col3', 'Frimpter_1967_table_2:row1:col4', 'Frimpter_1967_table_2:row1:col5', 'Frimpter_1967_table_3:row1:col1', 'Frimpter_1967_table_3:row1:col2', 'Frimpter_1967_table_3:row1:col3', 'Frimpter_1967_table_3:row1:col4', 'Frimpter_1967_table_3:row1:col5', 'Frimpter_1967_table_3:row1:col6'])
- dropped unlinked row (NIL): 'III' — extend the ontology if this is a real PK parameter (source ['Frimpter_1967_table_2:row2:col1', 'Frimpter_1967_table_2:row2:col2', 'Frimpter_1967_table_2:row2:col3', 'Frimpter_1967_table_2:row2:col4', 'Frimpter_1967_table_2:row2:col5', 'Frimpter_1967_table_3:row2:col1', 'Frimpter_1967_table_3:row2:col2', 'Frimpter_1967_table_3:row2:col3', 'Frimpter_1967_table_3:row2:col4', 'Frimpter_1967_table_3:row2:col5', 'Frimpter_1967_table_3:row2:col6'])
- dropped unlinked row (NIL): 'IV' — extend the ontology if this is a real PK parameter (source ['Frimpter_1967_table_3:row3:col1', 'Frimpter_1967_table_3:row3:col2', 'Frimpter_1967_table_3:row3:col3', 'Frimpter_1967_table_3:row3:col4', 'Frimpter_1967_table_3:row3:col5', 'Frimpter_1967_table_3:row3:col6'])
- dropped 'V' → Q61 = -2: a volume of -2 is not a parameter value (source ['Frimpter_1967_table_3:row4:col1', 'Frimpter_1967_table_3:row4:col2', 'Frimpter_1967_table_3:row4:col3', 'Frimpter_1967_table_3:row4:col4', 'Frimpter_1967_table_3:row4:col5', 'Frimpter_1967_table_3:row4:col6'])
- table mostly unlinked (7/9 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- implicit units: 'I' — the LLM proposed 'mL/min', whose dimension does not fit Q352; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cystathionine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record measures 'Cystathionine', not l_lysine — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2, 3, 4
- table Frimpter_1967_table_1: units_need_context
- table Frimpter_1967_table_2: units_need_context
- table Frimpter_1967_table_3: units_need_context
- table Frimpter_1967_table_4: units_need_context

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q352 | fail | [length] ** 3 |  | ['Frimpter_1967_table_2:row0:col1', 'Frimpter_1967_table_2:row0:col2', 'Frimpter_1967_table_2:row0:col3', 'Frimpter_1967_table_2:row0:col4', 'Frimpter_1967_table_2:row0:col5', 'Frimpter_1967_table_3:row0:col1', 'Frimpter_1967_table_3:row0:col3', 'Frimpter_1967_table_3:row0:col4', 'Frimpter_1967_table_3:row0:col5', 'Frimpter_1967_table_3:row0:col6'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_lysine%5D%20LLysine_Frimpter1967_reference&body=Drug%3A%20l_lysine%0ARecord%3A%20LLysine_Frimpter1967_reference%0APaper%3A%20Frimpter_1967%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_lysine/LLysine_Frimpter1967_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 22:42 UTC</sub>
