<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefamandole&quot;,&quot;href&quot;:&quot;drugs/drug_cefamandole/&quot;},{&quot;label&quot;:&quot;Nielsen_1979 \u00b7 rate_constant&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefamandole — `Cefamandole_Nielsen1979_rate_constant`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Cefamandole is structurally orphaned because the hydrolysis link from cefamandole nafate lacks a defined clearance parameter.

<div class="pk-model-meta" hidden drug="cefamandole" model-id="Cefamandole_Nielsen1979_rate_constant" status="rejected" stale="false" population="dialysis patients and subjects with normal renal function" measured-compound="cefamandole" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Nielsen RL, Wolen R, Luft FC, Ozawa T. Hydrolysis of cefamandole nafate in dialysis patients. Antimicrobial agents and chemotherapy 16(5):683–685 (1979).
  ·  DOI: [10.1128/AAC.16.5.683](https://doi.org/10.1128/AAC.16.5.683)

## Population and dosing

**Population:** dialysis patients and subjects with normal renal function · condition renal impairment · age group adult · n = &gt;.

**Dosed compound ≠ measured compound:** dosed cefamandole nafate, measured cefamandole.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | equation variable | 0.140 |  |
| 2 | Q2 | 0.292 | L/h |
| AVD | V | 17.9 | liters |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cefamandole is structurally orphaned because the hydrolysis link from cefamandole nafate lacks a defined clearance parameter.**

The record defines a hydrolysis relationship connecting cefamandole nafate to cefamandole and formate, but the link parameter for this process is listed as none. Consequently, the cefamandole metabolite compartment has no path from the dose compartment, rendering it unreachable. The review rejected the model due to this missing connection, preventing proper mass balance calculations. Extracted — cefamandole: Q2 0.292 L/h, V 17.9 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cefamandole nafate, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 0.140 |  |  |  |  | llm (0.6) | tab_0:row3:col2, tab_0:row3:col3, tab_0:row3:col4 |
| 2 | `Q99` · Q2 | 0.292 | L/h | 8.111e-08 | m3/s | L/h | llm (0.6) | tab_0:row4:col2, tab_0:row4:col3, tab_0:row4:col4 |
| AVD | `Q61` · V | 17.9 | liters | 0.0179 | m3 | L | review_gapfill (0.7) | Barza_1976:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[4]` |  | 0.146 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` |  | 0.146 | only_one_extracted |
| `gpt-oss-120b` | `parameters[avd]` | 17.9 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cefamandole nafate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cefamandole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Barza_1976:review'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.9 L | ['Barza_1976:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefamandole%5D%20Cefamandole_Nielsen1979_rate_constant&body=Drug%3A%20cefamandole%0ARecord%3A%20Cefamandole_Nielsen1979_rate_constant%0APaper%3A%20Nielsen_1979%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefamandole/Cefamandole_Nielsen1979_rate_constant%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:48 UTC</sub>
