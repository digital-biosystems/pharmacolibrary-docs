<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Di(2-ethylhexyl)phthalate&quot;,&quot;href&quot;:&quot;drugs/toxin_di2_ethylhexylphthalate/&quot;},{&quot;label&quot;:&quot;Li_2022 \u00b7 value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Di(2-ethylhexyl)phthalate — `Di2EthylhexylPhthalate_Li2022_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Structural parameters carry unit milliliter instead of clearance units, while all parameters lack kinetic values, leaving only volumes and permeabilities for a clearance-driven model.

<div class="pk-model-meta" hidden drug="Di(2-ethylhexyl)phthalate" model-id="Di2EthylhexylPhthalate_Li2022_value" status="rejected" stale="false" population="virtual human subjects simulated by PBPK model" measured-compound="Di(2-ethylhexyl)phthalate" parameterization="mechanistic" topology="1C"></div>

## Citation
Li A, Kang L, Li R, Wu S, Liu K, Wang X. Modeling di (2-ethylhexyl) Phthalate (DEHP) and Its Metabolism in a Body's Organs and Tissues through Different Intake Pathways into Human Body. International journal of environmental research and public health 19(9) (2022).
  ·  DOI: [10.3390/ijerph19095742](https://doi.org/10.3390/ijerph19095742)

## Population and dosing

**Population:** virtual human subjects simulated by PBPK model · condition indoor environmental exposure · age group adult.

**Dosing:** 0.5, 0.53, 0.65, 0.68, 0.8, 48.1 mg, other, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Bone | Vnorm | 4579 | milliliter |
| Heart | Q | 310 | milliliter |
| Liver | VH | 1690 | milliliter |
| Skin | Kp_derm | 7800 | milliliter |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Structural parameters carry unit milliliter instead of clearance units, while all parameters lack kinetic values, leaving only volumes and permeabilities for a clearance-driven model.**

Q is assigned 310 milliliter and VH 1690 milliliter, but both require volume per time to represent intercompartmental clearance and hepatic flow. Additionally, the record contains no half-lives, rate constants, or clearances, indicating the source paper reported only exposure outcomes without fitted kinetic parameters. Extracted — di2 ethylhexylphthalate: Vnorm 4.58e+03 milliliter, Q 310 milliliter, VH 1.69e+03 milliliter, Kp_derm 7.8e+03 milliliter.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bone | `Q352` · Vnorm | 4579 | milliliter | 0.004579 | m3 | ml | llm (0.6) | Li_2022_table_2:row1:col2 |
| Heart | `Q30` · Q | 310 | milliliter |  |  | ml | llm (0.6) | Li_2022_table_2:row4:col2 |
| Liver | `Q368` · VH | 1690 | milliliter | 0.00169 | m3 | ml | llm_confirmed (0.6) | Li_2022_table_2:row6:col2 |
| Skin | `Q412` · Kp_derm | 7800 | milliliter |  |  | ml | llm (0.6) | Li_2022_table_2:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Arterial Blood' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row0:col2'])
- dropped unlinked row (NIL): 'Brain' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row2:col2'])
- dropped unlinked row (NIL): 'Gut' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row3:col2'])
- unit_dimension_mismatch: 'Heart' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row5:col2'])
- dropped unlinked row (NIL): 'Lungs' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row7:col2'])
- dropped unlinked row (NIL): 'Pancreas' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row9:col2'])
- unit_dimension_mismatch: 'Skin' → Q412 (unit '[length] ** 3' vs ontology '[length] / [time]') — route to review
- dropped unlinked row (NIL): 'Spleen' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row12:col2'])
- dropped unlinked row (NIL): 'Thymus' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row13:col2'])
- dropped unlinked row (NIL): 'Urine' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_2:row14:col2'])
- unit_dimension_mismatch: 'Venous Blood' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('Venous Blood', value '3396') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Di(2-ethylhexyl)phthalate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 4 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'the record carries a hepatic compartment parameter (Q368)')
- status held at "Needs review" — not promoted
- population split: 'value' subgroup of Li_2022 (paper reports 2 populations: value, values/contribution)
- row roles (LLM): model_class=pbpk; 32/32 row label(s) assigned, 0 linked by role; re-tagged parent→mono(2-ethylhexyl) phthalate ×3, parent→mono(2-ethyl-5-hydroxyhexyl) phthalate ×2, parent→mono(2-ethyl-5-oxohexyl) phthalate ×2, parent→mono(2-ethyl-5-carboxypentyl) phthalate ×4
- molar mass: no plausible PubChem entry for 'Di(2-ethylhexyl)phthalate' ('Di(2-ethylhexyl)phthalate') — left in mass units
- molar mass: none found for 'Di(2-ethylhexyl)phthalate' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1, 2, 3
- table Li_2022_table_2: ambiguous_numeric_format

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | milliliter ([length] ** 3) | ['Li_2022_table_2:row4:col2'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Li_2022_table_2:row1:col2'] |
| C5_dimension_Q368 | pass | [length] ** 3 |  | ['Li_2022_table_2:row6:col2'] |
| C5_dimension_Q412 | fail | [length] / [time] | milliliter ([length] ** 3) | ['Li_2022_table_2:row11:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdi2_ethylhexylphthalate%5D%20Di2EthylhexylPhthalate_Li2022_value&body=Drug%3A%20di2_ethylhexylphthalate%0ARecord%3A%20Di2EthylhexylPhthalate_Li2022_value%0APaper%3A%20Li_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_di2_ethylhexylphthalate/Di2EthylhexylPhthalate_Li2022_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 22:37 UTC</sub>
