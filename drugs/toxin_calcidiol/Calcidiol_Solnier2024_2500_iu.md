<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Calcidiol&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/&quot;},{&quot;label&quot;:&quot;Solnier_2024 \u00b7 2500_iu&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Calcidiol_Hidiroglou1979_reference&quot;,&quot;label&quot;:&quot;Hidiroglou_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/Calcidiol_Hidiroglou1979_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcidiol_urek2023_liposome_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_liposome_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/Calcidiol_urek2023_liposome_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcidiol_urek2023_oil_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_oil_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/Calcidiol_urek2023_oil_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Calcidiol — `Calcidiol_Solnier2024_2500_iu`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit pmol day/L ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q32 unit nmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3 (+1 more).

<div class="pk-model-meta" hidden drug="Calcidiol" model-id="Calcidiol_Solnier2024_2500_iu" status="rejected" stale="false" population="healthy adults" measured-compound="Calcidiol (calcifediol, 25(OH)D)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Solnier J, Chang C, Zhang Y, Kuo YC, Du M, Roh YS et al. A Comparison and Safety Evaluation of Micellar versus Standard Vitamin D3 Oral Supplementation in a Randomized, Double-Blind Human Pilot Study. Nutrients 16(11) (2024).
  ·  DOI: [10.3390/nu16111573](https://doi.org/10.3390/nu16111573)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 35.

**Dosing:** 1000, 2500 IU, oral, multiple.

**Dosed compound ≠ measured compound:** dosed Vitamin D3 (cholecalciferol), measured Calcidiol (calcifediol, 25(OH)D).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| iAUC(5–30) [pmol day/L] | AUCt | 180 | pmol day/L |
| Cmax [nmol/L] | Cmax | 160 | nmol/L |
| Tmax [days] | tmax | 29 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit pmol day/L ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q32 unit nmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3 (+1 more).**

A reported unit could not be converted (AUCt and Cmax), so that value has no SI equivalent. Extracted — calcidiol: AUCt 180 pmol day/L, Cmax 160 nmol/L, tmax 29 days.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has Calcidiol (calcifediol, 25(OH)D), the second reading Calcidiol (25(OH)D); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| iAUC(5–30) [pmol day/L] | `Q19` · AUCt | 180 | pmol day/L |  |  | (d·pM)/l | llm (0.6) | nutrients-16-01573-t003:row2:col3, nutrients-16-01573-t003:row2:col4 |
| Cmax [nmol/L] | `Q32` · Cmax | 160 | nmol/L |  |  | nM/l | llm_confirmed (0.6) | nutrients-16-01573-t003:row8:col3, nutrients-16-01573-t003:row8:col4, Solnier_2024_table_2:row7:col3, Solnier_2024_table_2:row7:col4 |
| Tmax [days] | `Q56` · tmax | 29 | days | 2.506e+06 | s | d | llm_confirmed (0.6) | nutrients-16-01573-t003:row9:col3, nutrients-16-01573-t003:row9:col4, Solnier_2024_table_2:row8:col3, Solnier_2024_table_2:row8:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'STD1000n = 8'; source reconciliation required
- table representations disagree for 'iAUC(5–30) [pmol day/L]'; source reconciliation required
- table representations disagree for 'iAUC(5–45) [pmol day/L]'; source reconciliation required
- table representations disagree for 'iAUC(5–60) [pmol day/L]'; source reconciliation required
- table representations disagree for 'iAUC(30–60) [pmol day/L]'; source reconciliation required
- table representations disagree for 'iAUC(15–45) [pmol day/L]'; source reconciliation required
- table representations disagree for 'AUC(0–60) [pmol day/L]'; source reconciliation required
- table representations disagree for 'Cmax [nmol/L]'; source reconciliation required
- table representations disagree for 'Tmax [days]'; source reconciliation required
- dropped unlinked row (NIL): 'STD1000n = 8' — extend the ontology if this is a real PK parameter (source ['nutrients-16-01573-t003:row1:col3', 'Solnier_2024_table_2:row0:col3'])
- unit_dimension_mismatch: 'iAUC(5–30) [pmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'iAUC(5–45) [pmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(5–45) [pmol day/L]', value '250') — already have one for this compound
- unit_dimension_mismatch: 'iAUC(5–60) [pmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(5–60) [pmol day/L]', value '330') — already have one for this compound
- unit_dimension_mismatch: 'iAUC(30–60) [pmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(30–60) [pmol day/L]', value '150') — already have one for this compound
- unit_dimension_mismatch: 'iAUC(15–45) [pmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(15–45) [pmol day/L]', value '250') — already have one for this compound
- unit_dimension_mismatch: 'AUC(0–60) [pmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('AUC(0–60) [pmol day/L]', value '8070') — already have one for this compound
- unit_dimension_mismatch: 'Cmax [nmol/L]' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'iAUC(5–30) [nmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(5–30) [nmol day/L]', value '337') — already have one for this compound
- unit_dimension_mismatch: 'iAUC(5–45) [nmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(5–45) [nmol day/L]', value '724') — already have one for this compound
- unit_dimension_mismatch: 'iAUC(5–60) [nmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(5–60) [nmol day/L]', value '1050') — already have one for this compound
- unit_dimension_mismatch: 'iAUC(30–60) [nmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(30–60) [nmol day/L]', value '715') — already have one for this compound
- unit_dimension_mismatch: 'iAUC(15–45) [nmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('iAUC(15–45) [nmol day/L]', value '654') — already have one for this compound
- unit_dimension_mismatch: 'AUC(0–60) [nmol day/L]' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('AUC(0–60) [nmol day/L]', value '3790') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Calcidiol (calcifediol, 25(OH)D)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: '2500 iu' subgroup of Solnier_2024 (paper reports 2 populations: 1000 iu, 2500 iu)
- row roles (LLM): model_class=noncompartmental; 0/15 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Vitamin D3 (cholecalciferol)' — its concentrations stay mass-only
- molar mass: none found for 'Calcidiol (calcifediol, 25(OH)D)' — its concentrations stay mass-only
- molar mass: none found for 'Calcitriol (1,25(OH)2D)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table nutrients-16-01573-t003: ragged_grid
- table nutrients-16-01573-t003: representations disagree; selected evidence retained, not merged
- table Solnier_2024_table_2: ragged_grid
- companion parameter table 2 transcribed (35 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['vitamin d3 (cholecalciferol)', 'calcidiol (calcifediol, 25(oh)d)', 'metabolite'], ['calcidiol (calcifediol, 25(oh)d)', 'calcitriol (1,25(oh)2d)', 'metabolite']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[auc(0-60) [pmol day/l]]` |  | 8070 | only_one_extracted |
| `gpt-oss:120b` | `parameters[iauc(5-30) [pmol day/l]].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Calcidiol (calcifediol, 25(OH)D) | Calcidiol (25(OH)D) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | pmol day/L ([substance] * [time] / [length] ** 3) | ['nutrients-16-01573-t003:row2:col3', 'nutrients-16-01573-t003:row2:col4'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | nmol/L ([substance] / [length] ** 3) | ['nutrients-16-01573-t003:row8:col3', 'nutrients-16-01573-t003:row8:col4', 'Solnier_2024_table_2:row7:col3', 'Solnier_2024_table_2:row7:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['nutrients-16-01573-t003:row9:col3', 'nutrients-16-01573-t003:row9:col4', 'Solnier_2024_table_2:row8:col3', 'Solnier_2024_table_2:row8:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalcidiol%5D%20Calcidiol_Solnier2024_2500_iu&body=Drug%3A%20calcidiol%0ARecord%3A%20Calcidiol_Solnier2024_2500_iu%0APaper%3A%20Solnier_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_calcidiol/Calcidiol_Solnier2024_2500_iu%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 23:04 UTC</sub>
