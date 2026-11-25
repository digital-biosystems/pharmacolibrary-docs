<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zidovudine&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/&quot;},{&quot;label&quot;:&quot;Tang_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zidovudine — `Zidovudine_Tang2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q371 unit h^-1 (1 / [time]) vs [length] ** 3 / [time]; Q371 unit h^-1 (1 / [time]) vs [length] ** 3 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="zidovudine" model-id="Zidovudine_Tang2026_reference" status="rejected" stale="false" population="healthy Chinese volunteers" measured-compound="zidovudine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Tang F, Ji S, Lai X, Yan T, Peng J. The study on the transport and phosphorylation kinetics of zidovudine in the Chinese population and its significance for individualized antiretroviral therapy. Scientific reports 16(1) (2026).
  ·  DOI: [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1)

## Population and dosing

**Population:** healthy Chinese volunteers · condition healthy · age group adult · n = 6.

**Dosing:** 600 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k_in (ng/10^6 cells/µM/h) | kfm | 1.22 | ng/10^6 cells/µM/h |
| k_out (h^-1) | kel | 3.76 | h^-1 |
| k_MP-O (h^-1) | CLmp | 0.792 | h^-1 |
| k_MP-DP (h^-1) | kfm | 0.659 | h^-1 |
| k_DP-TP (h^-1) | kfm | 3.18 | h^-1 |
| k_TP-DP (h^-1) | CLmp | 4.62 | h^-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), qwen3.8-27b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q371 unit h^-1 (1 / [time]) vs [length] ** 3 / [time]; Q371 unit h^-1 (1 / [time]) vs [length] ** 3 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (kfm, CLmp and CLmp), so that value has no SI equivalent. None of the extracted parameters is zidovudine's own; they describe zidovudine monophosphate, zidovudine diphosphate and zidovudine triphosphate. Extracted — zidovudine monophosphate: kfm 1.22 ng/10^6 cells/µM/h, kel 3.76 h^-1, CLmp 0.792 h^-1; zidovudine diphosphate: kfm 0.659 h^-1, CLmp 4.62 h^-1; zidovudine triphosphate: kfm 3.18 h^-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has zidovudine → zidovudine monophosphate (metabolism); zidovudine monophosphate → zidovudine diphosphate (metabolism); zidovudine diphosphate → zidovudine triphosphate (metabolism), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k_in (ng/10^6 cells/µM/h) | `Q305` · kfm | 1.22 | ng/10^6 cells/µM/h |  |  | (ng·106cells)/(h·µM) | exact (1) | Tang_2026_table_2:row0:col1 |
| k_out (h^-1) | `Q47` · kel | 3.76 | h^-1 | 0.001044 | 1/s | 1/h | exact (1) | Tang_2026_table_2:row1:col1 |
| k_MP-O (h^-1) | `Q371` · CLmp | 0.792 | h^-1 |  |  | 1/h | exact (1) | Tang_2026_table_2:row3:col1 |
| k_MP-DP (h^-1) | `Q305` · kfm | 0.659 | h^-1 | 0.0001831 | 1/s | 1/h | exact (1) | Tang_2026_table_2:row4:col1 |
| k_DP-TP (h^-1) | `Q305` · kfm | 3.18 | h^-1 | 0.0008833 | 1/s | 1/h | exact (1) | Tang_2026_table_2:row6:col1 |
| k_TP-DP (h^-1) | `Q371` · CLmp | 4.62 | h^-1 |  |  | 1/h | exact (1) | Tang_2026_table_2:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ng/10^6 cells/µM/h' (kfm)
- dropped unlinked row (NIL): 'k_O-MP (h^-1)' — extend the ontology if this is a real PK parameter (source ['Tang_2026_table_2:row2:col1'])
- unit_dimension_mismatch: 'k_MP-O (h^-1)' → Q371 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k_DP-MP (h^-1)' → Q371 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q371 ('k_DP-MP (h^-1)', value '1.72') — already have one for this compound
- unit_dimension_mismatch: 'k_TP-DP (h^-1)' → Q371 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=zidovudine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — turnover model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=turnover; 8/8 row label(s) assigned, 7 linked by role; re-tagged parent→zidovudine monophosphate ×4, parent→zidovudine diphosphate ×2, parent→zidovudine triphosphate ×1

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |
| `qwen3.8-27b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['zidovudine', 'zidovudine monophosphate', 'metabolism'], ['zidovudine monophosphate', 'zidovudine diphosphate', 'metabolism'], ['zidovudine diphosphate', 'zidovudine triphosphate', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[k_dp-tp]` | 3.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_in]` | 1.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_mp-dp]` | 0.659 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_mp-o]` |  | 0.792 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_mp-o]` | 0.792 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_o-mp]` |  | 0.478 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_out]` | 3.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_tp-dp]` | 4.62 |  | only_one_extracted |
| `qwen3.8-27b` | `model.links` | [['zidovudine (azt)', 'zidovudine monophosphate (azt-mp)', 'metabolism'], ['zidovudine monophosphate (azt-mp)', 'zidovudine diphosphate (azt-dp)', 'metabolism'], ['zidovudine diphosphate (azt-dp)', 'zidovudine triphosphate (azt-tp)', 'metabolism']] | [['zidovudine', 'zidovudine monophosphate', 'metabolism'], ['zidovudine monophosphate', 'zidovudine diphosphate', 'metabolism'], ['zidovudine diphosphate', 'zidovudine triphosphate', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[kdp-mp]` | 76 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[kdp-tp]` |  | 79 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kdp-tp]` | 79 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[kmp-dp]` | 81 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[kmp-dp]` |  | 81 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ko-mp]` | 45 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[kout]` | 72 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ktp-dp]` | 88 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | zidovudine (AZT) | zidovudine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | zidovudine (AZT) | zidovudine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Tang_2026_table_2:row4:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Tang_2026_table_2:row6:col1'] |
| C5_dimension_Q371 | fail | [length] ** 3 / [time] | h^-1 (1 / [time]) | ['Tang_2026_table_2:row3:col1'] |
| C5_dimension_Q371 | fail | [length] ** 3 / [time] | h^-1 (1 / [time]) | ['Tang_2026_table_2:row7:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tang_2026_table_2:row1:col1'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | ng/10^6 cells/µM/h | ['Tang_2026_table_2:row0:col1'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzidovudine%5D%20Zidovudine_Tang2026_reference&body=Drug%3A%20zidovudine%0ARecord%3A%20Zidovudine_Tang2026_reference%0APaper%3A%20Tang_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zidovudine/Zidovudine_Tang2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:12 UTC</sub>
