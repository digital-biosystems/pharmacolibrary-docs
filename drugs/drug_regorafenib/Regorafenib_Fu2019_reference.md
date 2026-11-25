<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Fu_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Fu2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> C8 unreachable/orphan compartment or unlinked metabolite; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Fu2019_reference" status="rejected" stale="false" population="wild-type and Oatp1b2-deficient male and female mice" measured-compound="regorafenib" parameterization="apparent" topology="general_linear"></div>

## Citation
Fu Q, Chen M, Anderson JT, Sun X, Hu S, Sparreboom A et al. Interaction Between Sex and Organic Anion-Transporting Polypeptide 1b2 on the Pharmacokinetics of Regorafenib and Its Metabolites Regorafenib-N-Oxide and Regorafenib-Glucuronide in Mice. Clinical and translational science 12(4):400–407 (2019).
  ·  DOI: [10.1111/cts.12630](https://doi.org/10.1111/cts.12630)

## Population and dosing

**Population:** wild-type and Oatp1b2-deficient male and female mice · condition healthy.

**Dosing:** 700 mg, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (mL/hour) | CL/F | 0.629 | mL/hour | 6.33 |
| V2 (mL) | V1 | 33.8 | mL | 13.5 |
| V3 (mL) | V2 | 44.1 | mL | 13.4 |
| Q/F (mL/hour) | Q/F | 15.1 | mL/hour | 15.9 |
| CLM1 (mL/hour) | CLfm | 1.30 | mL/hour | 7.32 |
| CLM2 (mL/hour) | CLfm | 0.598 | mL/hour | 21.1 |
| Ka (hour−1) | kabs | 1.08 | hour−1 | 12.2 |
| FMET1 | fm | 0.280 |  |  |
| FMET2 | fm | 0.170 |  |  |
| RG | FR | 27.0 |  | 15.7 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.708). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

Extracted — regorafenib: CL/F 0.629 mL/hour, V1 33.8 mL, V2 44.1 mL, Q/F 15.1 mL/hour, kabs 1.08 hour−1; regorafenib-N-oxide: CLfm 1.3 mL/hour, fm 0.28; regorafenib-glucuronide: CLfm 0.598 mL/hour, fm 0.17, FR 27.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[v2].parameter_id`: this record has Q63, the second reading Q64; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (mL/hour) | `Q27` · CL/F | 0.629 | mL/hour | 1.747e-10 | m3/s | ml/h | 6.33 | exact (1) | cts12630-tbl-0003:row1:col1, cts12630-tbl-0003:row1:col3 |
| V2 (mL) | `Q63` · V1 | 33.8 | mL | 3.38e-05 | m3 | ml | 13.5 | exact (1) | cts12630-tbl-0003:row2:col1, cts12630-tbl-0003:row2:col3 |
| V3 (mL) | `Q64` · V2 | 44.1 | mL | 4.41e-05 | m3 | ml | 13.4 | exact (1) | cts12630-tbl-0003:row3:col1, cts12630-tbl-0003:row3:col3 |
| Q/F (mL/hour) | `Q69` · Q/F | 15.1 | mL/hour | 4.194e-09 | m3/s | ml/h | 15.9 | exact (1) | cts12630-tbl-0003:row4:col1, cts12630-tbl-0003:row4:col3 |
| CLM1 (mL/hour) | `Q370` · CLfm | 1.30 | mL/hour | 3.611e-10 | m3/s | ml/h | 7.32 | exact (1) | cts12630-tbl-0003:row5:col1, cts12630-tbl-0003:row5:col3 |
| CLM2 (mL/hour) | `Q370` · CLfm | 0.598 | mL/hour | 1.661e-10 | m3/s | ml/h | 21.1 | exact (1) | cts12630-tbl-0003:row6:col1, cts12630-tbl-0003:row6:col3 |
| Ka (hour−1) | `Q49` · kabs | 1.08 | hour−1 | 0.0003 | 1/s | 1/h | 12.2 | exact (1) | cts12630-tbl-0003:row7:col1, cts12630-tbl-0003:row7:col3 |
| FMET1 | `Q45` · fm | 0.280 |  | 0.28 |  |  |  | exact (1) | cts12630-tbl-0003:row9:col3, cts12630-tbl-0003:row9:col4 |
| FMET2 | `Q45` · fm | 0.170 |  | 0.17 |  |  |  | exact (1) | cts12630-tbl-0003:row10:col3, cts12630-tbl-0003:row10:col4 |
| RG | `Q43` · FR | 27.0 |  | 0.27 |  |  | 15.7 | llm (0.6) | cts12630-tbl-0003:row22:col1, cts12630-tbl-0003:row22:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 2 row(s) → regorafenib-N-oxide, 2 row(s) → regorafenib-glucuronide (m_suffix 4)
- table section iiv: 'IIV‐CL/F' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐V2' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐V3' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐CLM2' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐Ka' routed out of structural estimates ('IIV (variances and %CV)')
- dropped unlinked row (NIL): 'FEHC' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row8:col3', 'cts12630-tbl-0003:row8:col4'])
- dropped unlinked row (NIL): 'TEHC' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row11:col3', 'cts12630-tbl-0003:row11:col4'])
- dropped unlinked row (NIL): 'Sex' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row12:col1', 'cts12630-tbl-0003:row12:col3'])
- dropped unlinked row (NIL): 'Oatp1b2' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row13:col1', 'cts12630-tbl-0003:row13:col3'])
- dropped unlinked row (NIL): 'Regorafenib' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row21:col1', 'cts12630-tbl-0003:row21:col3'])
- 'RG' → Q43: printed without a unit and above 1 — read as a percentage
- dropped unlinked row (NIL): 'RO' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row23:col1', 'cts12630-tbl-0003:row23:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=regorafenib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — back-conversion needs PK_3M_3C, but formation is not hepatic
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 18 linked by role; re-tagged parent→regorafenib-N-oxide ×6, parent→regorafenib-glucuronide ×16
- molar mass: none found for 'regorafenib-N-oxide' — its concentrations stay mass-only
- molar mass: none found for 'regorafenib-glucuronide' — its concentrations stay mass-only

**Extraction notes:**
- table cts12630-tbl-0003: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.708 (17/24 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fehc]` |  | 0.340 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fmet2]` | 0.170 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rg]` | 27.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2].parameter_id` | Q63 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[v3]` | 44.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 44.1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts12630-tbl-0003:row1:col1', 'cts12630-tbl-0003:row1:col3'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['cts12630-tbl-0003:row5:col1', 'cts12630-tbl-0003:row5:col3'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['cts12630-tbl-0003:row6:col1', 'cts12630-tbl-0003:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts12630-tbl-0003:row7:col1', 'cts12630-tbl-0003:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts12630-tbl-0003:row2:col1', 'cts12630-tbl-0003:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts12630-tbl-0003:row3:col1', 'cts12630-tbl-0003:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts12630-tbl-0003:row4:col1', 'cts12630-tbl-0003:row4:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['TEHC'] |  |
| C9_phys_window_Q27 | fail | clearance within physiological range | 0.000629 L/h | ['cts12630-tbl-0003:row1:col1', 'cts12630-tbl-0003:row1:col3'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0338 L | ['cts12630-tbl-0003:row2:col1', 'cts12630-tbl-0003:row2:col3'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.0441 L | ['cts12630-tbl-0003:row3:col1', 'cts12630-tbl-0003:row3:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bregorafenib%5D%20Regorafenib_Fu2019_reference&body=Drug%3A%20regorafenib%0ARecord%3A%20Regorafenib_Fu2019_reference%0APaper%3A%20Fu_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_regorafenib/Regorafenib_Fu2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:17 UTC</sub>
