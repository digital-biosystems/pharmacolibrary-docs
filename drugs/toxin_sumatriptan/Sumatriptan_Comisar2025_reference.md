<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Sumatriptan&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/&quot;},{&quot;label&quot;:&quot;Comisar_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sumatriptan_Fowler1991_reference&quot;,&quot;label&quot;:&quot;Fowler_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Fowler1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sumatriptan_Scott1991_reference&quot;,&quot;label&quot;:&quot;Scott_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Scott1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sumatriptan_Van1992_reference&quot;,&quot;label&quot;:&quot;Van_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Van1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sumatriptan_Humphrey1991_reference&quot;,&quot;label&quot;:&quot;Humphrey_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sumatriptan/Sumatriptan_Humphrey1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sumatriptan — `Sumatriptan_Comisar2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Sumatriptan PK parameters are incorrectly labeled as intranasal zavegepant, including CL/F (266.0 L/h) and V/F (1774.0 L), indicating compound misassignment.

<div class="pk-model-meta" hidden drug="Sumatriptan" model-id="Sumatriptan_Comisar2025_reference" status="rejected" stale="false" population="" measured-compound="sumatriptan" parameterization="apparent" topology="2C"></div>

## Citation
Comisar CM, Francis J, Hughes JH, Bhardwaj R, Bertz R, Liu J. Population pharmacokinetic modeling of zavegepant, a calcitonin gene-related peptide receptor antagonist, in healthy adults and patients with migraine. CPT: pharmacometrics & systems pharmacology 14(1):179-191 (2025).
  ·  DOI: [10.1002/psp4.13257](https://doi.org/10.1002/psp4.13257)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| apparent clearance of intranasal zavegepant | CL/F | 266.0 | L/h |
| apparent volume of distribution of intranasal zavegepant | V/F | 1774.0 | L |
| V 2 | V2 | 12.1 | L |
| ka for intranasal zavegepant | kabs | 5.8 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sumatriptan PK parameters are incorrectly labeled as intranasal zavegepant, including CL/F (266.0 L/h) and V/F (1774.0 L), indicating compound misassignment.**

The record lists sumatriptan as the compound, yet the verbatim labels for all four parameters explicitly refer to 'intranasal zavegepant.' For example, CL/F is labeled 'apparent clearance of intranasal zavegepant' and kabs is labeled 'ka for intranasal zavegepant.' This direct contradiction between the assigned molecule and the parameter sources invalidates the record's integrity. Extracted — sumatriptan: CL/F 266 L/h, V/F 1.77e+03 L, V2 12.1 L, kabs 5.8 h−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| apparent clearance of intranasal zavegepant | `Q27` · CL/F | 266.0 | L/h | 7.389e-05 | m3/s | L/h | review (0.7) | Comisar_2025:review |
| apparent volume of distribution of intranasal zavegepant | `Q76` · V/F | 1774.0 | L | 1.774 | m3 | L | review (0.7) | Comisar_2025:review |
| V 2 | `Q64` · V2 | 12.1 | L | 0.0121 | m3 | L | review (0.7) | Comisar_2025:review |
| ka for intranasal zavegepant | `Q49` · kabs | 5.8 | h−1 | 0.001611 | 1/s | 1/h | review (0.7) | Comisar_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Comisar_2025) — secondary source
- volume reported by review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Comisar_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Comisar_2025:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Comisar_2025:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Comisar_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 266 L/h | ['Comisar_2025:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.1 L | ['Comisar_2025:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.77e+03 L | ['Comisar_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsumatriptan%5D%20Sumatriptan_Comisar2025_reference&body=Drug%3A%20sumatriptan%0ARecord%3A%20Sumatriptan_Comisar2025_reference%0APaper%3A%20Comisar_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sumatriptan/Sumatriptan_Comisar2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 05:43 UTC</sub>
