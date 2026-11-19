<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ouabain&quot;,&quot;href&quot;:&quot;drugs/toxin_ouabain/&quot;},{&quot;label&quot;:&quot;Abaimov_2024 \u00b7 liver&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ouabain — `Ouabain_Abaimov2024_liver`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q32 unit ng/g (dimensionless) vs [mass] / [length] ** 3; Q19 unit ng × h/g ([time]) vs [mass] * [time] / [length] ** 3; Q76 unit g/kg ([mass]) vs [length] ** 3.

<div class="pk-model-meta" hidden drug="Ouabain" model-id="Ouabain_Abaimov2024_liver" status="rejected" stale="false" population="C57/black mice" measured-compound="Ouabain" parameterization="apparent" topology="1C"></div>

## Citation
Abaimov DA, Kazanskaya RB, Ageldinov RA, Nesterov MS, Timoshina YA, Platova AI et al. Evaluation of Ouabain's Tissue Distribution in C57/Black Mice Following Intraperitoneal Injection, Using Chromatography and Mass Spectrometry. International journal of molecular sciences 25(8) (2024).
  ·  DOI: [10.3390/ijms25084318](https://doi.org/10.3390/ijms25084318)

## Population and dosing

**Population:** C57/black mice · condition healthy · age group adult · n = 6.

**Dosing:** 87.5 mg, ip, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax, ng/g | Cmax | 2558.0 | ng/g |
| Tmax, h | tmax | 0.35 | h |
| AUCt, ng × h/g | AUCt | 2084.6 | ng × h/g |
| AUCinf, ngh/g | AUC∞ | 2207.6 |  |
| MRT, h | MRT | 0.98 | h |
| T1/2, h | t1/2z | 1.24 | h |
| Vz/F, g/kg | V/F | 1043 | g/kg |
| Cl/F, g/kg/h | CL/F | 584 | g/kg/h |
| λz, h−1 | kel | 0.7 | h−1 |
| Ft/p | Kp | 7.17 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q32 unit ng/g (dimensionless) vs [mass] / [length] ** 3; Q19 unit ng × h/g ([time]) vs [mass] * [time] / [length] ** 3; Q76 unit g/kg ([mass]) vs [length] ** 3.**

A reported unit could not be converted (Cmax, AUCt, V/F and CL/F), so that value has no SI equivalent. Extracted — ouabain: Cmax 2.56e+03 ng/g, tmax 0.35 h, AUCt 2.08e+03 ng × h/g, AUC∞ 2.21e+03, MRT 0.98 h, t1/2z 1.24 h, V/F 1.04e+03 g/kg, CL/F 584 g/kg/h, … (+2).

Independently confirmed by `gpt-oss:120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax, ng/g | `Q32` · Cmax | 2558.0 | ng/g |  |  | ng/g | exact (1) | Abaimov_2024_table_1:row4:col1 |
| Tmax, h | `Q56` · tmax | 0.35 | h | 1260 | s | h | exact (1) | Abaimov_2024_table_1:row4:col2 |
| AUCt, ng × h/g | `Q19` · AUCt | 2084.6 | ng × h/g |  |  | (h·ng)/g | exact (1) | Abaimov_2024_table_1:row4:col3 |
| AUCinf, ngh/g | `Q17` · AUC∞ | 2207.6 |  |  |  |  | llm_confirmed (0.6) | Abaimov_2024_table_1:row4:col4 |
| MRT, h | `Q53` · MRT | 0.98 | h | 3528 | s | h | exact (1) | Abaimov_2024_table_1:row4:col5 |
| T1/2, h | `Q57` · t1/2z | 1.24 | h | 4464 | s | h | half_life_rule (0.95) | Abaimov_2024_table_1:row4:col6 |
| Vz/F, g/kg | `Q76` · V/F | 1043 | g/kg |  |  | g/kg | exact (1) | Abaimov_2024_table_1:row4:col7 |
| Cl/F, g/kg/h | `Q27` · CL/F | 584 | g/kg/h |  |  | g/(h·kg) | exact (1) | Abaimov_2024_table_1:row4:col8 |
| λz, h−1 | `Q47` · kel | 0.7 | h−1 | 0.0001944 | 1/s | 1/h | exact (1) | Abaimov_2024_table_1:row4:col9 |
| Ft/p | `Q410` · Kp | 7.17 |  |  |  |  | llm (0.6) | Abaimov_2024_table_1:row4:col10 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cmax, ng/g' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUCt, ng × h/g' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vz/F, g/kg' → Q76 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Cl/F, g/kg/h' → Q27 (unit '[mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Ouabain
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'liver' subgroup of Abaimov_2024 (paper reports 5 populations: blood plasma, cardiac, geometric mean, kidney, liver)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table ijms-25-04318-t0A3: competing_summary_estimates
- transposed table ijms-25-04318-t0A3: logical view retains original source coordinates
- transposed table Abaimov_2024_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (40 record(s))
- table Abaimov_2024_table_3: competing_summary_estimates
- transposed table Abaimov_2024_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (108 record(s))
- table Abaimov_2024_table_4: competing_summary_estimates
- transposed table Abaimov_2024_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (108 record(s))
- table Abaimov_2024_table_5: competing_summary_estimates
- transposed table Abaimov_2024_table_5: logical view retains original source coordinates
- companion parameter table 5 transcribed (108 record(s))
- LLM selected parameter table(s) 1, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (14/14 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | ng × h/g ([time]) | ['Abaimov_2024_table_1:row4:col3'] |
| C5_dimension_Q27 | fail | [length] ** 3 / [time] | g/kg/h ([mass] / [time]) | ['Abaimov_2024_table_1:row4:col8'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | ng/g (dimensionless) | ['Abaimov_2024_table_1:row4:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Abaimov_2024_table_1:row4:col9'] |
| C5_dimension_Q53 | pass | [time] |  | ['Abaimov_2024_table_1:row4:col5'] |
| C5_dimension_Q56 | pass | [time] |  | ['Abaimov_2024_table_1:row4:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Abaimov_2024_table_1:row4:col6'] |
| C5_dimension_Q76 | fail | [length] ** 3 | g/kg ([mass]) | ['Abaimov_2024_table_1:row4:col7'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 |  | ['Abaimov_2024_table_1:row4:col4'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bouabain%5D%20Ouabain_Abaimov2024_liver&body=Drug%3A%20ouabain%0ARecord%3A%20Ouabain_Abaimov2024_liver%0APaper%3A%20Abaimov_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ouabain/Ouabain_Abaimov2024_liver%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:35 UTC</sub>
