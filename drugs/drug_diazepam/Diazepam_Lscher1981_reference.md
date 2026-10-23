<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;diazepam&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/&quot;},{&quot;label&quot;:&quot;L\u00f6scher_1981 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diazepam_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diazepam_Helfer2026_reference&quot;,&quot;label&quot;:&quot;Helfer_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Helfer2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diazepam_Huang2025v2_reference&quot;,&quot;label&quot;:&quot;Huang_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Huang2025v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diazepam_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diazepam — `Diazepam_Lscher1981_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

> Orphan metabolite 3-hydroxydiazepam lacks a formation link and the diazepam clearance value is not extracted.

<div class="pk-model-meta" hidden drug="diazepam" model-id="Diazepam_Lscher1981_reference" status="rejected" stale="false" population="dogs" measured-compound="diazepam" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Löscher W, Frey HH. Pharmacokinetics of diazepam in the dog. Archives internationales de pharmacodynamie et de therapie 254(2):180–195 (1981).

## Population and dosing

**Population:** dogs · condition healthy · age group adult.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| elimination half-life t0.5(beta) | t1/2β | 3.2 | hr |
| half-life | t1/2z | 5.7 | hr |
| Oral bioavailability | Fab | 74-100% | % |
| apparent total CL in a 9-year-old child weighing 29 kg | CL | 3.8 | L/h |
| volume of distribution | V | 4.7 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Orphan metabolite 3-hydroxydiazepam lacks a formation link and the diazepam clearance value is not extracted.**

The metabolic network defines 3-hydroxydiazepam as a daughter metabolite but does not assign it a precursor, rendering that compartment unreachable from the dose. Furthermore, the diazepam clearance parameter has no value extracted, so a library placeholder would be used instead of the 3.8 L/h value reported in the abstract. Because the record relies solely on abstract summary statistics, these structural and parameter gaps prevent a valid model representation. Extracted — diazepam: t1/2β 3.2 hr, Fab 74-100% %, CL 3.8 L/h, V 4.7 L/kg; desmethyldiazepam: t1/2z 5.7 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has diazepam → desmethyldiazepam (metabolism); desmethyldiazepam → oxazepam (metabolism); diazepam → 3-hydroxydiazepam (metabolism), the second reading diazepam → desmethyldiazepam (metabolism); diazepam → oxazepam (metabolism); diazepam → 3-hydroxydiazepam (metabolism); it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| elimination half-life t0.5(beta) | `Q60` · t1/2β | 3.2 | hr | 1.152e+04 | s | h | llm (0.6) | Löscher_1981:abstract |
| half-life | `Q57` · t1/2z | 5.7 | hr | 2.052e+04 | s | h | llm (0.6) | Löscher_1981:abstract |
| Oral bioavailability | `Q40` · Fab | 74-100% | % |  |  |  | exact (1) | Löscher_1981:abstract |
| apparent total CL in a 9-year-old child weighing 29 kg | `Q22` · CL | 3.8 | L/h | 1.056e-06 | m3/s | L/h | review_gapfill (0.7) | Carrascosa-Arteaga_2025:review |
| volume of distribution | `Q61` · V | 4.7 | L/kg | 0.329 | m3 | L | review_gapfill (0.7) | Cavallaro_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'share of unmetabolized diazepam in the total area under curve after oral administration'
- dropped value-less row: 'share of unmetabolized diazepam in the total area under curve after i.v.'
- dropped value-less row: 'steady state plasma concentrations of desmethyldiazepam'
- dropped value-less row: 'maximal diazepam concentrations'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diazepam
- round-trip: Fab value not numeric ('74-100%')
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 0 linked by role; re-tagged diazepam→parent ×3, diazepam→desmethyldiazepam ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Carrascosa-Arteaga_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Cavallaro_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Löscher_1981_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (4/20 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 74-100% |  | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [['diazepam', 'desmethyldiazepam', 'metabolism'], ['desmethyldiazepam', 'oxazepam', 'metabolism'], ['diazepam', '3-hydroxydiazepam', 'metabolism']] | [['diazepam', 'desmethyldiazepam', 'metabolism'], ['diazepam', 'oxazepam', 'metabolism'], ['diazepam', '3-hydroxydiazepam', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[average elimination half-life t0.5]` |  | 3.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 1.236 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life t0.5]` | 3.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life]` |  | 5.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life]` | 5.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[i.v. administration of]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka *]` | 1.03 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal plasma concentrations]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[share of unmetabolized diazepam in the total area under curve after i.v. administration]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[share of unmetabolized diazepam in the total area under curve after oral administration]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady state plasma concentrations of desmethyldiazepam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to maximal plasma concentration]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.186 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 4.7 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Carrascosa-Arteaga_2025:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Löscher_1981:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Löscher_1981:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cavallaro_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.8 | ['Carrascosa-Arteaga_2025:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.8 L/h | ['Carrascosa-Arteaga_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 329 L | ['Cavallaro_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiazepam%5D%20Diazepam_Lscher1981_reference&body=Drug%3A%20diazepam%0ARecord%3A%20Diazepam_Lscher1981_reference%0APaper%3A%20L%C3%B6scher_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diazepam/Diazepam_Lscher1981_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 14:15 UTC</sub>
