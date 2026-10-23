<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Solana-Altabella_2025 \u00b7 median&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_SolanaAltabella2025_median`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Quizartinib’s Q4 equation parameter (0.56) was linked to an unreachable compartment, so the record was rejected.

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_SolanaAltabella2025_median" status="rejected" stale="false" population="adult patients with newly diagnosed FLT3-ITD-negative AML" measured-compound="quizartinib" parameterization="mechanistic" topology="2C"></div>

## Citation
Solana-Altabella A, Iniesta-Navalón C, Chovi-Trull M, Rodriguez-Veiga R, Lopez-Nogueroles M, Martínez-Cuadrón D et al. Validation of pharmacokinetic model for quizartinib quantified by UPLC-MS/MS in patients with FLT3-ITD negative newly diagnosed acute myeloid leukemia. European journal of clinical pharmacology 81(11):1699–1709 (2025).
  ·  DOI: [10.1007/s00228-025-03909-4](https://doi.org/10.1007/s00228-025-03909-4)

## Population and dosing

**Population:** adult patients with newly diagnosed FLT3-ITD-negative AML · condition FLT3-ITD-negative acute myeloid leukemia · age group adult · n = 14.

**Dosing:** 30, 60 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 1.76 | L/h |
| KE | kel | 0.01 | 1/h |
| KA | kabs | 1.68 | 1/h |
| F1 | Fab | 0.75 |  |
| t1/2 | t1/2z | 82.50 | h |
| V2 | V2 | 227.32 | L |
| V3 | V3 | 176.03 | L |
| Q3 | Q3 | 26.56 | L/h |
| Q4 | equation variable | 0.56 |  |
| V4 | V | 39.30 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.867). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Quizartinib’s Q4 equation parameter (0.56) was linked to an unreachable compartment, so the record was rejected.**

The finding is that a compartment has no path from the dose. The record lists Q4 as an equation variable with value 0.56, but gives no pharmacokinetic meaning or unit for it, so its role in that disconnected structure is not specified. Extracted — quizartinib: CL 1.76 L/h, kel 0.01 1/h, kabs 1.68 1/h, Fab 0.75, t1/2z 82.5 h, V2 227 L, V3 176 L, Q3 26.6 L/h, … (+1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[q4].parameter_id`: this record has Q900, the second reading Q99; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 1.76 | L/h | 4.889e-07 | m3/s | L/h | exact (1) | Tab2:row1:col3 |
| KE | `Q47` · kel | 0.01 | 1/h | 2.778e-06 | 1/s | 1/h | exact (1) | Tab2:row2:col3 |
| KA | `Q49` · kabs | 1.68 | 1/h | 0.0004667 | 1/s | 1/h | exact (1) | Tab2:row3:col3, Tab2:row10:col3 |
| F1 | `Q40` · Fab | 0.75 |  |  |  |  | exact (1) | Tab2:row4:col3 |
| t1/2 | `Q57` · t1/2z | 82.50 | h | 2.97e+05 | s | h | exact (1) | Tab2:row5:col3 |
| V2 | `Q64` · V2 | 227.32 | L | 0.2273 | m3 | L | exact (1) | Tab2:row6:col3 |
| V3 | `Q77` · V3 | 176.03 | L | 0.176 | m3 | L | exact (1) | Tab2:row7:col3 |
| Q3 | `Q308` · Q3 | 26.56 | L/h | 7.378e-06 | m3/s | L/h | exact (1) | Tab2:row8:col3 |
| Q4 | `Q900` · equation variable | 0.56 |  |  |  |  | llm (0.6) | Tab2:row9:col3 |
| V4 | `Q61` · V | 39.30 | L | 0.0393 | m3 | L | llm (0.6) | Tab2:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('DV', value '135.00') — already have one for this compound
- dropped duplicate Q900 ('IPRED', value '131.04') — already have one for this compound
- dropped duplicate Q900 ('PRED', value '124.90') — already have one for this compound
- dropped unlinked row (NIL): 'NPDE' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col3'])
- implicit units: 'CL' → L/h (from the paper text: 'The paper states, “The median clearance (CL) was 1.76 L/h.”')
- implicit units: 'KE' → 1/h (from the popPK convention: 'The paper defines KE as an elimination rate constant but gives no unit for it; first-order rate constants are convention')
- implicit units: 'KA' → 1/h (from the paper text: 'The paper states that “the absorption rate constant (KA) had a median value of 1.67 h − 1.”')
- implicit units: 't1/2' → h (from the popPK convention: 'The paper defines t1/2 as half-life but gives no unit for it; half-lives are conventionally expressed in hours.')
- implicit units: 'V2' → L (from the paper text: 'The paper reports “V2 (central compartment) at 212.9 L.”')
- implicit units: 'V3' → L (from the paper text: 'The paper reports “V3 (peripheral compartment) at 176.03 L.”')
- implicit units: 'Q3' → L/h (from the paper text: 'The paper states, “Intercompartmental clearances were represented by Q3 at 26.36 L/h.”')
- implicit units: 'V4' → L (from the paper text: 'The paper reports “V4 at 39.30 L.”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- population split: 'median' subgroup of Solana-Altabella_2025 (paper reports 2 populations: mean, median)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[q4].parameter_id` | Q900 | Q99 | mismatch |
| `qwen3.8-27b` | `parameters[v4]` | 39.30 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col3'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Tab2:row8:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab2:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row3:col3', 'Tab2:row10:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row5:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row11:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row6:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab2:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.76 | ['Tab2:row1:col3'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.76 L/h | ['Tab2:row1:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 39.3 L | ['Tab2:row11:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 227 L | ['Tab2:row6:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquizartinib%5D%20Quizartinib_SolanaAltabella2025_median&body=Drug%3A%20quizartinib%0ARecord%3A%20Quizartinib_SolanaAltabella2025_median%0APaper%3A%20Solana-Altabella_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quizartinib/Quizartinib_SolanaAltabella2025_median%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:30 UTC</sub>
