<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Sumatriptan&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/&quot;},{&quot;label&quot;:&quot;Ohk_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sumatriptan_Fowler1991_reference&quot;,&quot;label&quot;:&quot;Fowler_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Fowler1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sumatriptan_Scott1991_reference&quot;,&quot;label&quot;:&quot;Scott_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Scott1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sumatriptan_Van1992_reference&quot;,&quot;label&quot;:&quot;Van_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Van1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sumatriptan_Humphrey1991_reference&quot;,&quot;label&quot;:&quot;Humphrey_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Humphrey1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sumatriptan — `Sumatriptan_Ohk2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Sumatriptan parameters CLm/F and CLfm both include bioavailability correction, creating a double correction for apparent clearance.

<div class="pk-model-meta" hidden drug="Sumatriptan" model-id="Sumatriptan_Ohk2022_reference" status="rejected" stale="false" population="healthy Korean subjects" measured-compound="Sumatriptan" parameterization="apparent" topology="1C"></div>

## Citation
Ohk B, Seong S, Lee J, Gwon M, Kang W, Lee H et al. Evaluation of sex differences in the pharmacokinetics of oral sumatriptan in healthy Korean subjects using population pharmacokinetic modeling. Biopharmaceutics & drug disposition 43(1):23-32 (2022).
  ·  DOI: [10.1002/bdd.2307](https://doi.org/10.1002/bdd.2307)

## Population and dosing

**Population:** healthy Korean subjects · condition healthy · age group adult · n = 38.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/FM (L/h) | CLm/F | 444 | L/h | 4 | 17.5 (25% RSE) |
| CL/FF (L/h) | CLfm | 281 | L/h | 7 |  |
| V3/F (L) | V3/F | 68.7 | L | 32 | 99.9 (30% RSE) |
| ka1 (h−1) | kabs | 0.568 | h−1 | 12 |  |
| MTT (h) | MTT | 1.52 | h | 11 | 42.43 (32% RSE) |
| NN | n_transit | 6.7 |  | 48 |  |
| ALAG1 (h) | tlag | 0.239 | h | 1 |  |
| f | Fab | 0.558 |  | 7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sumatriptan parameters CLm/F and CLfm both include bioavailability correction, creating a double correction for apparent clearance.**

The record lists CLm/F at 444 L/h and CLfm at 281 L/h, where CLfm represents the formation clearance from parent to metabolite. Both parameters are defined as apparent values adjusted for bioavailability (F), but the bioavailability of 0.558 is also recorded separately. This structure implies that F is applied twice to the clearance calculations, violating apparent-parameter coherence. Extracted — sumatriptan: CLm/F 444 L/h, CLfm 281 L/h, V3/F 68.7 L, kabs 0.568 h−1, MTT 1.52 h, n_transit 6.7, tlag 0.239 h, Fab 0.558.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/FM (L/h) | `Q351` · CLm/F | 444 | L/h | 0.0001233 | m3/s | l/h | 4 | exact (1) | bdd2307-tbl-0004:row1:col2 | 17.5 (25% RSE) |
| CL/FF (L/h) | `Q370` · CLfm | 281 | L/h | 7.806e-05 | m3/s | l/h | 7 | llm (0.6) | bdd2307-tbl-0004:row2:col2 |  |
| V3/F (L) | `Q78` · V3/F | 68.7 | L | 0.0687 | m3 | l | 32 | exact (1) | bdd2307-tbl-0004:row3:col2 | 99.9 (30% RSE) |
| ka1 (h−1) | `Q49` · kabs | 0.568 | h−1 | 0.0001578 | 1/s | 1/h | 12 | llm (0.6) | bdd2307-tbl-0004:row4:col2 |  |
| MTT (h) | `Q81` · MTT | 1.52 | h | 5472 | s | h | 11 | exact (1) | bdd2307-tbl-0004:row6:col2 | 42.43 (32% RSE) |
| NN | `Q311` · n_transit | 6.7 |  | 6.7 |  |  | 48 | exact (1) | bdd2307-tbl-0004:row7:col2 |  |
| ALAG1 (h) | `Q83` · tlag | 0.239 | h | 860.4 | s | h | 1 | llm (0.6) | bdd2307-tbl-0004:row8:col2 |  |
| f | `Q40` · Fab | 0.558 |  |  |  |  | 7 | exact (1) | bdd2307-tbl-0004:row9:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/FM (L/h)' routed out of structural estimates ('BSV (CV%) (%RSE)')
- table section iiv: 'V3/F (L)' routed out of structural estimates ('BSV (CV%) (%RSE)')
- table section iiv: 'ka2 (h−1)' routed out of structural estimates ('BSV (CV%) (%RSE)')
- table section iiv: 'MTT (h)' routed out of structural estimates ('BSV (CV%) (%RSE)')
- dropped duplicate Q49 ('ka2 (h−1)', value '0.295') — already have one for this compound
- dropped value-less row: 'CV'
- dropped value-less row: 'RSE'
- dropped value-less row: 'a 95% CI'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Sumatriptan
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- skipped review gap-fill of CL from Comisar_2025: its label names a different analyte ('intranasal') — 'apparent clearance of intranasal zavegepant'
- skipped review gap-fill of V from Comisar_2025: its label names a different analyte ('intranasal') — 'apparent volume of distribution of intranasal zavegepant'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table bdd2307-tbl-0004: unbound_uncertainty
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['bdd2307-tbl-0004:row1:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['bdd2307-tbl-0004:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bdd2307-tbl-0004:row4:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['bdd2307-tbl-0004:row3:col2'] |
| C5_dimension_Q81 | pass | [time] |  | ['bdd2307-tbl-0004:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['bdd2307-tbl-0004:row8:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.558 with apparent parameterization |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsumatriptan%5D%20Sumatriptan_Ohk2022_reference&body=Drug%3A%20sumatriptan%0ARecord%3A%20Sumatriptan_Ohk2022_reference%0APaper%3A%20Ohk_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sumatriptan/Sumatriptan_Ohk2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 05:46 UTC</sub>
