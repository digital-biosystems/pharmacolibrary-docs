<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Aflatoxin G&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/&quot;},{&quot;label&quot;:&quot;Rejeb_2020 \u00b7 toxicokinetic_parameters_iv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_reference&quot;,&quot;label&quot;:&quot;Rejeb_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_route_of_administration_po&quot;,&quot;label&quot;:&quot;Rejeb_2020_route_of_administration_po&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_route_of_administration_po.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_route_of_administration_po_po_cc&quot;,&quot;label&quot;:&quot;Rejeb_2020_route_of_administration_po_po_cc&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_route_of_administration_po_po_cc.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_route_of_administration_po_po_cp&quot;,&quot;label&quot;:&quot;Rejeb_2020_route_of_administration_po_po_cp&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_route_of_administration_po_po_cp.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aflatoxin G — `AflatoxinG_Rejeb2020_toxicokinetic_parameters_iv`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Aflatoxin G" model-id="AflatoxinG_Rejeb2020_toxicokinetic_parameters_iv" status="rejected" stale="false" population="broiler chickens" measured-compound="AFG1" parameterization="mechanistic" topology="1C"></div>

## Citation
Rejeb R, Baere S, Devreese M, Ducatelle R, Croubels S, Ayed MH et al. Calcination Improves the In Vivo Efficacy of a Montmorillonite Clay to Bind Aflatoxin G1 in Broiler Chickens: A Toxicokinetic Approach. Toxins 12(10) (2020).
  ·  DOI: [10.3390/toxins12100660](https://doi.org/10.3390/toxins12100660)

## Population and dosing

**Population:** broiler chickens · condition healthy · n = 40.

**Dosing:** 2 mg/kg BW, iv, single.

**Dosed compound ≠ measured compound:** dosed Aflatoxin G1 (AFG1), measured AFG1.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-t (h*ng/mL) | AUCt | 89.06 | h*ng/mL |
| AUC0-∞ (h*ng/mL) | AUC∞ | 89.86 | h*ng/mL |
| C0 (ng/mL) | C0 | 274.62 | ng/mL |
| kel (h-1) | kel | 1.53 | h-1 |
| T1/2el (h) | t1/2z | 0.50 | h |
| Cl (L/h/kg) | CL | 28.50 | L/h/kg |
| Vd (L/kg) | V | 22.52 | L/kg |
| F (%) | Fab | 100 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (C0 and Fab), so that value has no SI equivalent. None of the extracted parameters is aflatoxin g's own; they describe AFG1. Extracted — AFG1: AUCt 89.1 h*ng/mL, AUC∞ 89.9 h*ng/mL, C0 275 ng/mL, kel 1.53 h-1, t1/2z 0.5 h, CL 28.5 L/h/kg, V 22.5 L/kg, Fab 100 %.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Aflatoxin G1 (AFG1), the second reading Aflatoxin G1; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-t (h*ng/mL) | `Q19` · AUCt | 89.06 | h*ng/mL | 0.3206 | kg*s/m3 | (h·ng)/ml | exact (1) | toxins-12-00660-t002:row3:col1 |
| AUC0-∞ (h*ng/mL) | `Q17` · AUC∞ | 89.86 | h*ng/mL | 0.3235 | kg*s/m3 | (h·ng)/ml | exact (1) | toxins-12-00660-t002:row4:col1 |
| C0 (ng/mL) | `Q86` · C0 | 274.62 | ng/mL |  |  | ng/ml | exact (1) | toxins-12-00660-t002:row6:col1 |
| kel (h-1) | `Q47` · kel | 1.53 | h-1 | 0.000425 | 1/s | 1/h | exact (1) | toxins-12-00660-t002:row8:col1 |
| T1/2el (h) | `Q57` · t1/2z | 0.50 | h | 1800 | s | h | half_life_rule (0.95) | toxins-12-00660-t002:row9:col1 |
| Cl (L/h/kg) | `Q22` · CL | 28.50 | L/h/kg | 0.0005542 | m3/s | l/(h·kg) | exact (1) | toxins-12-00660-t002:row10:col1 |
| Vd (L/kg) | `Q61` · V | 22.52 | L/kg | 1.576 | m3 | l/kg | exact (1) | toxins-12-00660-t002:row11:col1 |
| F (%) | `Q40` · Fab | 100 | % |  |  |  | exact (1) | toxins-12-00660-t002:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped value-less row: 'AUC0−t'
- dropped value-less row: 'AUC0−∞'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'C0'
- dropped value-less row: 'tmax'
- dropped value-less row: 'kel'
- dropped value-less row: 't1/2el'
- dropped value-less row: 'Cl'
- dropped value-less row: 'Vd'
- dropped value-less row: 'p'
- dropped value-less row: 'SD'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=AFG1
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'toxicokinetic parameters / iv' subgroup of Rejeb_2020 (paper reports 4 populations: route of administration / po, route of administration / po / po + cc, route of administration / po / po + cp, toxicokinetic parameters / iv)
- molar mass: none found for 'AFG1' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'AFG1', not aflatoxin_g — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | Aflatoxin G1 (AFG1) | Aflatoxin G1 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | AFG1 | Aflatoxin G1 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['toxins-12-00660-t002:row4:col1'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['toxins-12-00660-t002:row3:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['toxins-12-00660-t002:row10:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['toxins-12-00660-t002:row8:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['toxins-12-00660-t002:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['toxins-12-00660-t002:row11:col1'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) | ['toxins-12-00660-t002:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.5 | ['toxins-12-00660-t002:row10:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2e+03 L/h | ['toxins-12-00660-t002:row10:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.58e+03 L | ['toxins-12-00660-t002:row11:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baflatoxin_g%5D%20AflatoxinG_Rejeb2020_toxicokinetic_parameters_iv&body=Drug%3A%20aflatoxin_g%0ARecord%3A%20AflatoxinG_Rejeb2020_toxicokinetic_parameters_iv%0APaper%3A%20Rejeb_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_toxicokinetic_parameters_iv%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:19 UTC</sub>
