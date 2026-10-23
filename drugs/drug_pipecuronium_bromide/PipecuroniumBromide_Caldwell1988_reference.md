<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;pipecuronium bromide&quot;,&quot;href&quot;:&quot;drugs/drug_pipecuronium_bromide/&quot;},{&quot;label&quot;:&quot;Caldwell_1988 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PipecuroniumBromide_Yajima1990_reference&quot;,&quot;label&quot;:&quot;Yajima_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Yajima1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pipecuronium bromide — `PipecuroniumBromide_Caldwell1988_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The pipecuronium parent and metabolite compartments were rejected because the metabolite link had no defined path from the dose.

<div class="pk-model-meta" hidden drug="pipecuronium bromide" model-id="PipecuroniumBromide_Caldwell1988_reference" status="rejected" stale="false" population="ASA class I or II patients" measured-compound="pipecuronium" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Caldwell JE, Castagnoli KP, Canfell PC, Fahey MR, Lynam DP, Fisher DM et al. Pipecuronium and pancuronium: comparison of pharmacokinetics and duration of action. British journal of anaesthesia 61(6):693–697 (1988).
  ·  DOI: [10.1093/bja/61.6.693](https://doi.org/10.1093/bja/61.6.693)

## Population and dosing

**Population:** ASA class I or II patients · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed pipecuronium bromide, measured pipecuronium.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Pipecuronium Vss | Vss | 309 | ml kg-1 |
| Pipecuronium Cl | CL | 2.4 | ml kg-1 min-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The pipecuronium parent and metabolite compartments were rejected because the metabolite link had no defined path from the dose.**

The parent_metabolite structure implies a metabolite exists, but the record's link data is empty with an unknown parameter. This created an unlinked metabolite that is unreachable from the dose administration site. Additionally, the record was abstract-only, so the reported Vss of 309 ml kg-1 and CL of 2.4 ml kg-1 min-1 are summary statistics rather than fitted parameters. Extracted — pipecuronium bromide: Vss 309 ml kg-1, CL 2.4 ml kg-1 min-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pipecuronium bromide, the second reading pipecuronium; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Pipecuronium Vss | `Q65` · Vss | 309 | ml kg-1 | 0.02163 | m3 | ml/kg | llm_confirmed (0.6) | Caldwell_1988:abstract |
| Pipecuronium Cl | `Q22` · CL | 2.4 | ml kg-1 min-1 | 2.8e-06 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Caldwell_1988:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q65 ('pancuronium Vss', value 199) — already have one for this compound
- dropped duplicate Q22 ('pancuronium Cl', value 1.5) — already have one for this compound
- dropped unlinked row (NIL): 'pipecuronium duration of action' — extend the ontology if this is a real PK parameter (source ['Caldwell_1988:abstract'])
- dropped unlinked row (NIL): 'pancuronium duration of action' — extend the ontology if this is a real PK parameter (source ['Caldwell_1988:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pipecuronium
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Caldwell_1988_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['', '', '']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` |  | 2.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[duration of action]` |  | 98.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[pipecuronium cl]` | 2.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[pipecuronium vss]` | 309 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` |  | 309 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pipecuronium bromide | pipecuronium | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Caldwell_1988:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Caldwell_1988:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.4 | ['Caldwell_1988:abstract'] |
| C8_topology | fail | linked Kfm/Fm/formation clearance |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.1 L/h | ['Caldwell_1988:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 21.6 L | ['Caldwell_1988:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpipecuronium_bromide%5D%20PipecuroniumBromide_Caldwell1988_reference&body=Drug%3A%20pipecuronium_bromide%0ARecord%3A%20PipecuroniumBromide_Caldwell1988_reference%0APaper%3A%20Caldwell_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Caldwell1988_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 02:35 UTC</sub>
