<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefamandole&quot;,&quot;href&quot;:&quot;drugs/drug_cefamandole/&quot;},{&quot;label&quot;:&quot;Nielsen_1979 \u00b7 rate_constant&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefamandole — `Cefamandole_Nielsen1979_rate_constant`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Cefamandole is structurally orphaned because the hydrolysis link from cefamandole nafate lacks a defined clearance parameter.**

The record defines a hydrolysis relationship connecting cefamandole nafate to cefamandole and formate, but the link parameter for this process is listed as none. Consequently, the cefamandole metabolite compartment has no path from the dose compartment, rendering it unreachable. The review rejected the model due to this missing connection, preventing proper mass balance calculations. Extracted — cefamandole: Q2 0.292 L/h, V 17.9 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cefamandole nafate, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `cefamandole nafate`, measured `cefamandole`.

## Citation
Nielsen RL et al., Hydrolysis of cefamandole nafate in dia…, Antimicrobial agents and ch… (1979)
  ·  DOI: [10.1128/AAC.16.5.683](https://doi.org/10.1128/AAC.16.5.683)

## Model component
<dbs-pgx drug="cefamandole" model-id="Cefamandole_Nielsen1979_rate_constant" status="rejected" stale="false" population="dialysis patients and subjects with normal renal function" measured-compound="cefamandole" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 0.140 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row3:col2, tab_0:row3:col3, tab_0:row3:col4 | — | not captured |
| 2 | `Q99` · Q2 | 0.292 | L/h | 8.11111111111111e-08 | L/h | not captured | llm (0.6) | tab_0:row4:col2, tab_0:row4:col3, tab_0:row4:col4 | — | not captured |
| AVD | `Q61` · V | 17.9 | liters | 0.0179 | L | not captured | review_gapfill (0.7) | Barza_1976:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col4'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col4'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col2', 'tab_0:row10:col3', 'tab_0:row10:col4'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['tab_0:row11:col2', 'tab_0:row11:col3', 'tab_0:row11:col4'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col2', 'tab_0:row12:col3', 'tab_0:row12:col4'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col4'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col2', 'tab_0:row14:col3', 'tab_0:row14:col4'])
- implicit units: '2' → L/h (from the popPK convention: 'The parameter represents an intercompartmental clearance (Q2) in a population pharmacokinetic study. In such contexts, w')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefamandole
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'rate constant' subgroup of Nielsen_1979 (paper reports 2 populations: disappearance of cn, rate constant)
- row roles: 10 per-group rows of cefamandole nafate summary_statistic but 5 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 0 linked by role
- gap-filled Q61 (V) from Barza_1976's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_0:row1:col2 = 'K1-2'
- unparsed cell tab_0:row1:col3 = 'K2-1'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cefamandole nafate', 'cefamandole', 'hydrolysis'], ['cefamandole nafate', 'formate', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[1].parameter_id` | Q900 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[4]` | not captured | 0.146 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | not captured | 0.146 | only_one_extracted |
| `gpt-oss-120b` | `parameters[avd]` | 17.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cefamandole nafate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cefamandole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Barza_1976:review'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.9 L | not captured | not captured | ['Barza_1976:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cefamandole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nielsen_1979` / `Nielsen_1979::rate_constant`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:48 UTC</sub>
