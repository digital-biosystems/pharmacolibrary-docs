<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Cholecalciferol&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/&quot;},{&quot;label&quot;:&quot;Tuey_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cholecalciferol_Deb2020_reference&quot;,&quot;label&quot;:&quot;Deb_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_Deb2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_Dueland1983_reference&quot;,&quot;label&quot;:&quot;Dueland_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_Dueland1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_urek2023_liposome_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_liposome_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_urek2023_liposome_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_urek2023_oil_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_oil_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_urek2023_oil_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cholecalciferol — `Cholecalciferol_Tuey2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The cholecalciferol peripheral volume V2 and intercompartmental clearance Q lack values, and an orphan compartment causes rejection.

<div class="pk-model-meta" hidden drug="Cholecalciferol" model-id="Cholecalciferol_Tuey2024_reference" status="rejected" stale="false" population="CKD patients with vitamin D insufficiency and deficiency" measured-compound="Cholecalciferol" parameterization="apparent" topology="general_linear"></div>

## Citation
Tuey SM, Ghimire A, Guzy S, Prebehalla L, Roque AA, Roda G et al. Population Pharmacokinetic Model of Vitamin D3 and Metabolites in Chronic Kidney Disease Patients with Vitamin D Insufficiency and Deficiency. International journal of molecular sciences 25(22) (2024).
  ·  DOI: [10.3390/ijms252212279](https://doi.org/10.3390/ijms252212279)

## Population and dosing

**Population:** CKD patients with vitamin D insufficiency and deficiency · condition Chronic Kidney Disease (CKD) with vitamin D insufficiency and deficiency · age group adult · n = }]29.

**Dosing:** 5000 I.U., oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| VitD3, apparent central volume of distribution (L) | V1/F | 21.3 | L |
| VitD3, apparent clearance (L/h) | CL/F | 1.4 | L/h |
| 25D3, volume of distribution (L) | V | 58.3 | L |
| 25D3, clearance (L/h) | CL | 0.02 | L/h |
| 1,25D3, volume of distribution (L) | V | 71.5 | L |
| 1,25D3, clearance (L/h) | CL | 0.08 | L/h |
| 24,25D3, volume of distribution (L) | V | 105.2 | L |
| 24,25D3, clearance (L/h) | CL | 0.40 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The cholecalciferol peripheral volume V2 and intercompartmental clearance Q lack values, and an orphan compartment causes rejection.**

The peripheral volume V2 and intercompartmental clearance Q for cholecalciferol have no reported numerical values. The verdict cites an unreachable or orphan compartment, indicating a structural discontinuity where a compartment has no path from the dose. Extracted — cholecalciferol: V1/F 21.3 L, CL/F 1.4 L/h; 25-hydroxyvitamin D3: V 58.3 L, CL 0.02 L/h; 1,25-dihydroxyvitamin D3: V 71.5 L, CL 0.08 L/h; 24,25-dihydroxyvitamin D3: V 105 L, CL 0.4 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| VitD3, apparent central volume of distribution (L) | `Q290` · V1/F | 21.3 | L | 0.0213 | m3 | l | exact (1) | ijms-25-12279-t002:row4:col1, ijms-25-12279-t002:row4:col2 |
| VitD3, apparent clearance (L/h) | `Q27` · CL/F | 1.4 | L/h | 3.889e-07 | m3/s | l/h | exact (1) | ijms-25-12279-t002:row5:col1, ijms-25-12279-t002:row5:col2 |
| 25D3, volume of distribution (L) | `Q61` · V | 58.3 | L | 0.0583 | m3 | l | exact (1) | ijms-25-12279-t002:row9:col2 |
| 25D3, clearance (L/h) | `Q22` · CL | 0.02 | L/h | 5.556e-09 | m3/s | l/h | exact (1) | ijms-25-12279-t002:row10:col2 |
| 1,25D3, volume of distribution (L) | `Q61` · V | 71.5 | L | 0.0715 | m3 | l | exact (1) | ijms-25-12279-t002:row12:col2 |
| 1,25D3, clearance (L/h) | `Q22` · CL | 0.08 | L/h | 2.222e-08 | m3/s | l/h | exact (1) | ijms-25-12279-t002:row13:col2 |
| 24,25D3, volume of distribution (L) | `Q61` · V | 105.2 | L | 0.1052 | m3 | l | exact (1) | ijms-25-12279-t002:row15:col2 |
| 24,25D3, clearance (L/h) | `Q22` · CL | 0.40 | L/h | 1.111e-07 | m3/s | l/h | exact (1) | ijms-25-12279-t002:row16:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| VitD3, peripheral volume of distribution (L) | Q64 | exact |
| VitD3, intercompartmental clearance (L/h) | Q30 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'symbol' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'VitD3 baseline concentration (nmol/L)' — extend the ontology if this is a real PK parameter (source ['ijms-25-12279-t002:row1:col2'])
- dropped unlinked row (NIL): '25D3, baseline concentration, (nmol/L)' — extend the ontology if this is a real PK parameter (source ['ijms-25-12279-t002:row8:col2'])
- dropped unlinked row (NIL): '1,25D3, baseline concentration (nmol/L)' — extend the ontology if this is a real PK parameter (source ['ijms-25-12279-t002:row11:col2'])
- dropped unlinked row (NIL): '24,25D3, baseline concentration (nmol/L)' — extend the ontology if this is a real PK parameter (source ['ijms-25-12279-t002:row14:col2'])
- metabolite volume: '25D3, volume of distribution (L)' Q63→Q61 for 25-hydroxyvitamin D3 — it is 1-compartment, so its central volume is its only volume
- metabolite volume: '1,25D3, volume of distribution (L)' Q63→Q61 for 1,25-dihydroxyvitamin D3 — it is 1-compartment, so its central volume is its only volume
- metabolite volume: '24,25D3, volume of distribution (L)' Q63→Q61 for 24,25-dihydroxyvitamin D3 — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Cholecalciferol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 12 linked by role; re-tagged parent→25-hydroxyvitamin D3 ×4, parent→1,25-dihydroxyvitamin D3 ×4, parent→24,25-dihydroxyvitamin D3 ×4

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ijms-25-12279-t002:row10:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ijms-25-12279-t002:row13:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ijms-25-12279-t002:row16:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['ijms-25-12279-t002:row5:col1', 'ijms-25-12279-t002:row5:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['ijms-25-12279-t002:row4:col1', 'ijms-25-12279-t002:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['ijms-25-12279-t002:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['ijms-25-12279-t002:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['ijms-25-12279-t002:row12:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['ijms-25-12279-t002:row15:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['ijms-25-12279-t002:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['1 - fm2'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.02 L/h | ['ijms-25-12279-t002:row10:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.08 L/h | ['ijms-25-12279-t002:row13:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.4 L/h | ['ijms-25-12279-t002:row16:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.4 L/h | ['ijms-25-12279-t002:row5:col1', 'ijms-25-12279-t002:row5:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 21.3 L | ['ijms-25-12279-t002:row4:col1', 'ijms-25-12279-t002:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 58.3 L | ['ijms-25-12279-t002:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 71.5 L | ['ijms-25-12279-t002:row12:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 105 L | ['ijms-25-12279-t002:row15:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcholecalciferol%5D%20Cholecalciferol_Tuey2024_reference&body=Drug%3A%20cholecalciferol%0ARecord%3A%20Cholecalciferol_Tuey2024_reference%0APaper%3A%20Tuey_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cholecalciferol/Cholecalciferol_Tuey2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 13:09 UTC</sub>
