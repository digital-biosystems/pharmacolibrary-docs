<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tramadol&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/&quot;},{&quot;label&quot;:&quot;Nordmeier_2021 \u00b7 u_47700_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bressolle2009_reference&quot;,&quot;label&quot;:&quot;Bressolle_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Bressolle2009_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Nordmeier2021_tramadol_estimate&quot;,&quot;label&quot;:&quot;Nordmeier_2021_tramadol_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tramadol — `Tramadol_Nordmeier2021_u_47700_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Tramadol" model-id="Tramadol_Nordmeier2021_u_47700_estimate" status="rejected" stale="false" population="pigs" measured-compound="Tramadol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Nordmeier F, Sihinevich I, Doerr AA, Walle N, Laschke MW, Lehr T et al. Toxicokinetics of U-47700, tramadol, and their main metabolites in pigs following intravenous administration: is a multiple species allometric scaling approach useful for the extrapolation of toxicokinetic parameters to humans?. Archives of toxicology 95(12):3681–3693 (2021).
  ·  DOI: [10.1007/s00204-021-03169-y](https://doi.org/10.1007/s00204-021-03169-y)

## Population and dosing

**Population:** pigs · condition healthy · age group adult · n = 6 per drug.

**Dosing:** 7, 70 mg, iv, single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Vcentral | V1 | 0.9 | L/kg | 15.5 |  |
| CL | CL | 1.6 | L/h/kg | 7.9 | 19.2 (15.5% RSE) |
| V2 | V2 | 1.5 | L/kg | 19.7 | 54.0 (33.9% RSE) |
| Q2 | Q | 0.4 | L/h/kg | 18.0 | 28.2 (13.9% RSE) |
| V3 | V3 | 0.6 | L/kg | 19.0 | 47.7 (25.4% RSE) |
| Q3 | Q3 | 5.2 | L/h/kg | 44.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vcentral | `Q63` · V1 | 0.9 | L/kg | 0.063 | m3 | l/kg | 15.5 | llm (0.6) | Tab1:row3:col4 |  |
| CL | `Q22` · CL | 1.6 | L/h/kg | 3.111e-05 | m3/s | l/(h·kg) | 7.9 | exact (1) | Tab1:row4:col4 | 19.2 (15.5% RSE) |
| V2 | `Q64` · V2 | 1.5 | L/kg | 0.105 | m3 | l/kg | 19.7 | exact (1) | Tab1:row5:col4 | 54.0 (33.9% RSE) |
| Q2 | `Q30` · Q | 0.4 | L/h/kg | 7.778e-06 | m3/s | l/(h·kg) | 18.0 | special_case (0.95) | Tab1:row6:col4 | 28.2 (13.9% RSE) |
| V3 | `Q77` · V3 | 0.6 | L/kg | 0.042 | m3 | l/kg | 19.0 | exact (1) | Tab1:row7:col4 | 47.7 (25.4% RSE) |
| Q3 | `Q308` · Q3 | 5.2 | L/h/kg | 0.0001011 | m3/s | l/(h·kg) | 44.7 | exact (1) | Tab1:row8:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Proportional residual error' routed out of structural estimates ('IIV Q3 (%CV) n.a')
- dropped value-less row: 'RSE'
- dropped value-less row: 'CL'
- dropped value-less row: 'V'
- dropped value-less row: 'Q'
- dropped value-less row: 'CV'
- dropped value-less row: 'n.a'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Tramadol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- population split: 'u-47700 / estimate' subgroup of Nordmeier_2021 (paper reports 2 populations: tramadol / estimate, u-47700 / estimate)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab1:row4:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab1:row6:col4'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Tab1:row8:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab1:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab1:row5:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab1:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.6 | ['Tab1:row4:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 112 L/h | ['Tab1:row4:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 63 L | ['Tab1:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 105 L | ['Tab1:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Nordmeier2021_u_47700_estimate&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Nordmeier2021_u_47700_estimate%0APaper%3A%20Nordmeier_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tramadol/Tramadol_Nordmeier2021_u_47700_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:52 UTC</sub>
