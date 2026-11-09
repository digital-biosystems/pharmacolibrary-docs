<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;2,4-Toluenediamine&quot;,&quot;href&quot;:&quot;drugs/toxin_24_toluenediamine/&quot;},{&quot;label&quot;:&quot;Luu_1998 \u00b7 human_4_872_g_implant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_24Toluenediamine_Luu1998_rat_0_52_mg_kg_feeding&quot;,&quot;label&quot;:&quot;Luu_1998_rat_0_52_mg_kg_feeding&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_24_toluenediamine/D_24Toluenediamine_Luu1998_rat_0_52_mg_kg_feeding.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_24Toluenediamine_Luu1998_rat_0_52_mg_kg_iv_bolus&quot;,&quot;label&quot;:&quot;Luu_1998_rat_0_52_mg_kg_iv_bolus&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_24_toluenediamine/D_24Toluenediamine_Luu1998_rat_0_52_mg_kg_iv_bolus.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_24Toluenediamine_Timchalk1994_reference&quot;,&quot;label&quot;:&quot;Timchalk_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_24_toluenediamine/D_24Toluenediamine_Timchalk1994_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 2,4-Toluenediamine — `D_24Toluenediamine_Luu1998_human_4_872_g_implant`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit ng/hr/ml ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="2,4-Toluenediamine" model-id="D_24Toluenediamine_Luu1998_human_4_872_g_implant" status="rejected" stale="false" population="58 kg human (simulated)" measured-compound="2,4-Toluenediamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Luu HM, Hutter JC, Bushar HF. A physiologically based pharmacokinetic model for 2,4-toluenediamine leached from polyurethane foam-covered breast implants. Environmental health perspectives 106(7):393–400 (1998).
  ·  DOI: [10.1289/ehp.98106393](https://doi.org/10.1289/ehp.98106393)

## Population and dosing

**Population:** 58 kg human (simulated) · condition breast implant degradation · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.80).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (ng/hr/ml) | AUC | 0.846 | ng/hr/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit ng/hr/ml ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (AUC), so that value has no SI equivalent. None of the extracted parameters is 24 toluenediamine's own; they describe 2,4-Toluenediamine. Extracted — 2,4-Toluenediamine: AUC 0.846 ng/hr/ml.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| AUC (ng/hr/ml) | `Q88` · AUC | 0.846 | ng/hr/ml | ng/(h·ml) | exact (1) | Luu_1998_table_2:row9:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Feces' — extend the ontology if this is a real PK parameter (source ['Luu_1998_table_2:row1:col4'])
- dropped unlinked row (NIL): 'Urine' — extend the ontology if this is a real PK parameter (source ['Luu_1998_table_2:row2:col4'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Luu_1998_table_2:row3:col4'])
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Luu_1998_table_2:row4:col4'])
- dropped unlinked row (NIL): 'RP tissue' — extend the ontology if this is a real PK parameter (source ['Luu_1998_table_2:row5:col4'])
- dropped unlinked row (NIL): 'SP tissue' — extend the ontology if this is a real PK parameter (source ['Luu_1998_table_2:row6:col4'])
- dropped unlinked row (NIL): 'GI tract' — extend the ontology if this is a real PK parameter (source ['Luu_1998_table_2:row7:col4'])
- unit_dimension_mismatch: 'AUC (ng/hr/ml)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- table mostly unlinked (7/8 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=2,4-Toluenediamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'human, 4.872 g implant' subgroup of Luu_1998 (paper reports 4 populations: human, 4.872 g implant, rat, 0.021 g implant, rat, 0.52 mg/kg feeding, rat, 0.52 mg/kg iv bolus)
- row roles (LLM): model_class=pbpk; 10/10 row label(s) assigned, 0 linked by role; re-tagged 2,4-Toluenediamine→parent ×2, 2,4-Toluenediamine→4-AAT ×2
- molar mass: no plausible PubChem entry for '4-AAT' ('4-N-acetyl-2-amino toluene') — left in mass units
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is '2,4-Toluenediamine' (LLM) — left in mass units
- molar mass: none found for '2,4-Toluenediamine' — its concentrations stay mass-only
- molar mass: none found for '4-AAT' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Luu_1998_table_2: ambiguous_numeric_format
- table Luu_1998_table_2: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | ng/hr/ml ([mass] / [time] / [length] ** 3) | ['Luu_1998_table_2:row9:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B24_toluenediamine%5D%20D_24Toluenediamine_Luu1998_human_4_872_g_implant&body=Drug%3A%2024_toluenediamine%0ARecord%3A%20D_24Toluenediamine_Luu1998_human_4_872_g_implant%0APaper%3A%20Luu_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_24_toluenediamine/D_24Toluenediamine_Luu1998_human_4_872_g_implant%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 02:08 UTC</sub>
