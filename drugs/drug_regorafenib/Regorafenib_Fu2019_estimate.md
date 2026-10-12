<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Fu_2019 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Fu2019_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was refused for a clearance/volume plausibility failure; regorafenib-N-oxide clearance is reported as 1.30 mL/hour, and both metabolites have zero compartments.**

The findings also flag an unreachable, orphan, or unlinked metabolite: regorafenib-N-oxide and regorafenib-glucuronide each have zero compartments despite listed metabolism links from regorafenib. The physiological-range finding does not specify which clearance or volume failed, so whether the 1.30 mL/hour clearance was the cause is inconclusive. Extracted — regorafenib: CL/F 0.629 mL/hour, V1 33.8 mL, V2 44.1 mL, Q/F 15.1 mL/hour, kabs 1.08 hour−1; regorafenib-N-oxide: CL 1.3 mL/hour; regorafenib-glucuronide: CL 0.598 mL/hour.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has regorafenib → regorafenib-n-oxide (metabolism); regorafenib → regorafenib-glucuronide (metabolism); regorafenib-glucuronide → regorafenib (hydrolysis), the second reading regorafenib → regorafenib-n-oxide (metabolism); regorafenib → regorafenib-glucuronide (metabolism); regorafenib-glucuronide → regorafenib (interconversion); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Fu Q et al., Interaction Between Sex and Organic Ani…, Clinical and translational… (2019)
  ·  DOI: [10.1111/cts.12630](https://doi.org/10.1111/cts.12630)

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Fu2019_estimate" status="rejected" stale="false" population="male and female wild-type and Oatp1b2-deficient mice" measured-compound="regorafenib" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (mL/hour) | `Q27` · CL/F | 0.629 | mL/hour | 1.747222222222222e-10 | [ml] / [h] | not captured | exact (1.0) | cts12630-tbl-0003:row1:col1 | — | 0.017 (13.3% RSE) |
| V2 (mL) | `Q63` · V1 | 33.8 | mL | 3.3799999999999995e-05 | [ml] | not captured | exact (1.0) | cts12630-tbl-0003:row2:col1 | — | not captured |
| V3 (mL) | `Q64` · V2 | 44.1 | mL | 4.41e-05 | [ml] | not captured | exact (1.0) | cts12630-tbl-0003:row3:col1 | — | not captured |
| Q/F (mL/hour) | `Q69` · Q/F | 15.1 | mL/hour | 4.1944444444444445e-09 | [ml] / [h] | not captured | exact (1.0) | cts12630-tbl-0003:row4:col1 | — | not captured |
| CLM1 (mL/hour) | `Q22` · CL | 1.30 | mL/hour | 3.611111111111111e-10 | [ml] / [h] | not captured | exact (1.0) | cts12630-tbl-0003:row5:col1 | — | not captured |
| CLM2 (mL/hour) | `Q22` · CL | 0.598 | mL/hour | 1.661111111111111e-10 | [ml] / [h] | not captured | exact (1.0) | cts12630-tbl-0003:row6:col1 | — | not captured |
| Ka (hour−1) | `Q49` · kabs | 1.08 | hour−1 | 0.00030000000000000003 | [1] / [h] | not captured | exact (1.0) | cts12630-tbl-0003:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV‐CL/F' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐V2' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐V3' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐CLM2' routed out of structural estimates ('IIV (variances and %CV)')
- table section iiv: 'IIV‐Ka' routed out of structural estimates ('IIV (variances and %CV)')
- dropped unlinked row (NIL): 'Sex' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row12:col1'])
- dropped unlinked row (NIL): 'Oatp1b2' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row13:col1'])
- dropped unlinked row (NIL): 'Regorafenib' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row21:col1'])
- dropped unlinked row (NIL): 'RG' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row22:col1'])
- dropped unlinked row (NIL): 'RO' — extend the ontology if this is a real PK parameter (source ['cts12630-tbl-0003:row23:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=regorafenib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — back-conversion needs PK_3M_3C, but formation is not hepatic
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Fu_2019 (paper reports 4 populations: estimate, regorafenib‐glucuronide, regorafenib‐n‐oxide, regorafinib)
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 34 linked by role; re-tagged parent→regorafenib-N-oxide ×10, parent→regorafenib-glucuronide ×26, regorafenib→parent ×22
- molar mass: no plausible PubChem entry for 'regorafenib-glucuronide' ('regorafenib-glucuronide') — left in mass units
- molar mass: none found for 'regorafenib-glucuronide' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts12630-tbl-0003:row8:col1 = '0.340a'
- unparsed cell cts12630-tbl-0003:row9:col1 = '0.280a'
- unparsed cell cts12630-tbl-0003:row10:col1 = '0.170a'
- unparsed cell cts12630-tbl-0003:row11:col1 = '0.090a'
- unparsed cell Fu_2019_table_1:row5:col3 = '0.466 ± 0.169*'
- unparsed cell Fu_2019_table_1:row7:col3 = '806 ± 605†, *'
- unparsed cell Fu_2019_table_1:row10:col3 = '4.08 ± 3.84†, *'
- companion parameter table 1 transcribed (43 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.714 (10/14 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['regorafenib', 'regorafenib-n-oxide', 'metabolism'], ['regorafenib', 'regorafenib-glucuronide', 'metabolism'], ['regorafenib-glucuronide', 'regorafenib', 'hydrolysis']] | [['regorafenib', 'regorafenib-n-oxide', 'metabolism'], ['regorafenib', 'regorafenib-glucuronide', 'metabolism'], ['regorafenib-glucuronide', 'regorafenib', 'interconversion']] | mismatch |
| `qwen3.8-27b` | `parameters[clm1].parameter_id` | Q22 | Q370 | mismatch |
| `qwen3.8-27b` | `parameters[clm2].parameter_id` | Q22 | Q370 | mismatch |
| `qwen3.8-27b` | `parameters[f]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12630-tbl-0003:row5:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12630-tbl-0003:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12630-tbl-0003:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts12630-tbl-0003:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts12630-tbl-0003:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts12630-tbl-0003:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12630-tbl-0003:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0013 L/h | not captured | not captured | ['cts12630-tbl-0003:row5:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.000598 L/h | not captured | not captured | ['cts12630-tbl-0003:row6:col1'] |
| C9_phys_window_Q27 | fail | clearance within physiological range | 0.000629 L/h | not captured | not captured | ['cts12630-tbl-0003:row1:col1'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0338 L | not captured | not captured | ['cts12630-tbl-0003:row2:col1'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.0441 L | not captured | not captured | ['cts12630-tbl-0003:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_regorafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fu_2019` / `Fu_2019::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:39 UTC</sub>
