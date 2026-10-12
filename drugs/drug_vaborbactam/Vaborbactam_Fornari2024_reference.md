<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Vaborbactam&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/&quot;},{&quot;label&quot;:&quot;Fornari_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vaborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vaborbactam — `Vaborbactam_Fornari2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The vaborbactam model was rejected because the parameter tmax, reported as 43.4 weeks, could not be converted to standard units.**

The record lists the value 43.4 for tmax with the unit weeks, which prevented the parameter from being standardized. Additionally, the model structure was flagged as having an unreachable compartment, meaning a compartment has no path from the dose. Extracted — vaborbactam: CL 9.84 L/h, tmax 43.4 weeks, V1 14.4 L, V1/F 1, Q 1.96 L/h, V2 2.56 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none → none (none), the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `meropenem/vaborbactam`, measured `vaborbactam`.

## Citation
Fornari C et al., Dose rationale for the use of meropenem…, British journal of clinical… (2024)
  ·  DOI: [10.1111/bcp.16145](https://doi.org/10.1111/bcp.16145)

<div class="pk-model-meta" hidden drug="Vaborbactam" model-id="Vaborbactam_Fornari2024_reference" status="rejected" stale="false" population="paediatric patients with Gram-negative bacterial infections" measured-compound="vaborbactam" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 9.84 | L/h | 2.733333333333333e-06 | [l] / [h] | not captured | exact (1.0) | tab_2:row4:col1, tab_2:row4:col2, tab_2:row4:col4, tab_2:row4:col5, tab_2:row28:col1, tab_2:row28:col2, tab_2:row28:col4, tab_2:row28:col5 | — | 0.561 (None% RSE) |
| PMA50 (weeks) | `Q56` · tmax | 43.4 | weeks | not captured | [weeks] | not captured | llm (0.6) | tab_2:row8:col4, tab_2:row32:col4 | — | not captured |
| V1 (L) | `Q63` · V1 | 14.4 | L | 0.014400000000000001 | [l] | not captured | exact (1.0) | tab_2:row9:col1, tab_2:row9:col2, tab_2:row9:col4, tab_2:row9:col5, tab_2:row33:col1, tab_2:row33:col2, tab_2:row33:col4, tab_2:row33:col5 | — | 0.565 (None% RSE) |
| βBW_V1 | `Q290` · V1/F | 1 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row10:col1, tab_2:row10:col4, tab_2:row34:col1, tab_2:row34:col4 | — | not captured |
| Q (L/h) | `Q30` · Q | 1.96 | L/h | 5.444444444444444e-07 | [l] / [h] | not captured | exact (1.0) | tab_2:row11:col1, tab_2:row11:col2, tab_2:row11:col4, tab_2:row11:col5, tab_2:row35:col1, tab_2:row35:col2, tab_2:row35:col4, tab_2:row35:col5 | — | 0.195 (None% RSE) |
| V2 (L) | `Q64` · V2 | 2.56 | L | 0.00256 | [l] | not captured | exact (1.0) | tab_2:row13:col1, tab_2:row13:col2, tab_2:row13:col4, tab_2:row13:col5, tab_2:row37:col1, tab_2:row37:col2, tab_2:row37:col4, tab_2:row37:col5 | — | 0.29 (None% RSE) |
| b | `Q900` · equation variable | 0.282 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row23:col1, tab_2:row23:col2, tab_2:row23:col4, tab_2:row23:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'βCLcr_CL' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col4', 'tab_2:row5:col5', 'tab_2:row29:col1', 'tab_2:row29:col2', 'tab_2:row29:col4', 'tab_2:row29:col5'])
- dropped duplicate Q22 ('βBW_CL', value '0.75') — already have one for this compound
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row7:col4', 'tab_2:row31:col4'])
- dropped duplicate Q30 ('βBW_Q', value '0.75') — already have one for this compound
- dropped duplicate Q64 ('βBW_V2', value '1') — already have one for this compound
- dropped duplicate Q22 ('corr V1 CL', value '0.787') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vaborbactam
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['none', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[b]` | 0.282 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[pma50]` | 43.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[βbw_v1]` | 1 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row28:col1', 'tab_2:row28:col2', 'tab_2:row28:col4', 'tab_2:row28:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row11:col1', 'tab_2:row11:col2', 'tab_2:row11:col4', 'tab_2:row11:col5', 'tab_2:row35:col1', 'tab_2:row35:col2', 'tab_2:row35:col4', 'tab_2:row35:col5'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tab_2:row8:col4', 'tab_2:row32:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row9:col1', 'tab_2:row9:col2', 'tab_2:row9:col4', 'tab_2:row9:col5', 'tab_2:row33:col1', 'tab_2:row33:col2', 'tab_2:row33:col4', 'tab_2:row33:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row13:col1', 'tab_2:row13:col2', 'tab_2:row13:col4', 'tab_2:row13:col5', 'tab_2:row37:col1', 'tab_2:row37:col2', 'tab_2:row37:col4', 'tab_2:row37:col5'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row10:col1', 'tab_2:row10:col4', 'tab_2:row34:col1', 'tab_2:row34:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.84 L/h | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row28:col1', 'tab_2:row28:col2', 'tab_2:row28:col4', 'tab_2:row28:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['tab_2:row9:col1', 'tab_2:row9:col2', 'tab_2:row9:col4', 'tab_2:row9:col5', 'tab_2:row33:col1', 'tab_2:row33:col2', 'tab_2:row33:col4', 'tab_2:row33:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.56 L | not captured | not captured | ['tab_2:row13:col1', 'tab_2:row13:col2', 'tab_2:row13:col4', 'tab_2:row13:col5', 'tab_2:row37:col1', 'tab_2:row37:col2', 'tab_2:row37:col4', 'tab_2:row37:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vaborbactam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fornari_2024` / `Fornari_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:49 UTC</sub>
