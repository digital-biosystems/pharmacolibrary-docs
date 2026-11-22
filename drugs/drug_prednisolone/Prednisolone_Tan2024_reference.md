<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;prednisolone&quot;,&quot;href&quot;:&quot;drugs/drug_prednisolone/&quot;},{&quot;label&quot;:&quot;Tan_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prednisolone_Bouazza2025_reference&quot;,&quot;label&quot;:&quot;Bouazza_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisolone/Prednisolone_Bouazza2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisolone_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisolone/Prednisolone_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# prednisolone — `Prednisolone_Tan2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Prednisolone clearance of 7.74 was rejected because Tan_2024 studied methotrexate polyglutamates, with prednisolone only a concomitant medication or covariate.

<div class="pk-model-meta" hidden drug="prednisolone" model-id="Prednisolone_Tan2024_reference" status="rejected" stale="false" population="" measured-compound="prednisolone" parameterization="mechanistic" topology="1C"></div>

## Citation
Tan JM, Upton RN, Foster DJR, Proudman SM, Dhir V, Wiese MD. Pharmacokinetic-pharmacodynamic modelling and simulation of methotrexate dosing in patients with rheumatoid arthritis. British journal of clinical pharmacology 90(11):2763–2780 (2024).
  ·  DOI: [10.1111/bcp.16158](https://doi.org/10.1111/bcp.16158)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_prednisolone/Prednisolone_Tan2024_reference/Prednisolone_Tan2024_reference.svg" alt="Prednisolone_Tan2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL RBCs | CL | 7.74 | L.hour À1 |
| -V 1 | V1 | 9.6 | L |
| t lag,oral | tlag | 0.36 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Prednisolone clearance of 7.74 was rejected because Tan_2024 studied methotrexate polyglutamates, with prednisolone only a concomitant medication or covariate.**

The paper focuses on methotrexate polyglutamates, not prednisolone. The record lists prednisolone clearance of 7.74, central-compartment volume of 9.6 L, and absorption lag time of 0.36 hour; the lag time was not covered among the 3 parameters. A second reader disputed the verdict, with agreement of 0.333, and disagreed on several recorded values. Extracted — prednisolone: CL 7.74 L.hour À1, V1 9.6 L, tlag 0.36 hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of CL: this record has 7.74, the second reading 8.4; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL RBCs | `Q22` · CL | 7.74 | L.hour À1 | 2.15e-06 | m3/s | L/h | review (0.7) | Tan_2024:review |
| -V 1 | `Q63` · V1 | 9.6 | L | 0.0096 | m3 | L | review (0.7) | Tan_2024:review |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296 | s | h | review (0.7) | Tan_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Tan_2024) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (6/18 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.topology_template` | 1C | 2C | mismatch |
| `gpt-oss-120b` | `values[Q22]` | 7.74 | 8.4 | mismatch |
| `gpt-oss-120b` | `values[Q312]` | 31 | 14 | mismatch |
| `gpt-oss-120b` | `values[Q316]` |  | 0.590 | only_one_extracted |
| `gpt-oss-120b` | `values[Q317]` |  | 8.260 | only_one_extracted |
| `gpt-oss-120b` | `values[Q327]` | 6.55 | 12 | mismatch |
| `gpt-oss-120b` | `values[Q40]` |  | 0.7 | only_one_extracted |
| `gpt-oss-120b` | `values[Q47]` |  | 0.144 | only_one_extracted |
| `gpt-oss-120b` | `values[Q49]` |  | 0.87 | only_one_extracted |
| `gpt-oss-120b` | `values[Q51]` |  | 0.171 | only_one_extracted |
| `gpt-oss-120b` | `values[Q63]` | 9.6 | 0.3 | mismatch |
| `gpt-oss-120b` | `values[Q64]` |  | 0.3 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tan_2024:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tan_2024:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tan_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.74 | ['Tan_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.74 L/h | ['Tan_2024:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 9.6 L | ['Tan_2024:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | prednisolone (or metabolite) | paper about another drug |  | paper subject is not prednisolone: the paper is about another drug; this one is a co-medication or covariate: The study focuses on the pharmacokinetics of methotrexate polyglutamates, and prednisolone is only mentioned as a concomitant medication/covariate. |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=prednisolone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 3 scholar param(s) emitted or defaulted | 2 covered |  | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | second reader agrees | verdict disputed, agreement 0.333, 0 of 1 reader(s) agree | 0.333 | cross-check disputed by a second reader: verdict disputed, agreement 0.333, 0 of 1 reader(s) agree |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 10 mg parenteral (H02AB06) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_prednisolone/Prednisolone_Tan2024_reference/Prednisolone_Tan2024_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_prednisolone/Prednisolone_Tan2024_reference/Prednisolone_Tan2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Prednisolone_Tan2024_reference_params.json` · controls `Prednisolone_Tan2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprednisolone%5D%20Prednisolone_Tan2024_reference&body=Drug%3A%20prednisolone%0ARecord%3A%20Prednisolone_Tan2024_reference%0APaper%3A%20Tan_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_prednisolone/Prednisolone_Tan2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-04 03:03 UTC</sub>
