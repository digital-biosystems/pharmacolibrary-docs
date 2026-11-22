<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/&quot;},{&quot;label&quot;:&quot;Henrich_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clopidogrel_Jung2024_reference&quot;,&quot;label&quot;:&quot;Jung_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Jung2024_reference.md&quot;,&quot;status&quot;:&quot;Curated (human-checked)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Yousef2013_reference&quot;,&quot;label&quot;:&quot;Yousef_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Yousef2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Ma2014_reference&quot;,&quot;label&quot;:&quot;Ma_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Ma2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Jung_2024_PRU&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Jung_2024_PRU.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Simon_2015_IPA&quot;,&quot;label&quot;:&quot;Simon_2015 \u00b7 IPA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Simon_2015_IPA.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Jung_2024_CYP2C19_Q45&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 CYP2C19&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pgx_Jung_2024_CYP2C19_Q45.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 quantitative&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clopidogrel — `Clopidogrel_Henrich2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is for clopidogrel, but the paper studies selatogrel PK, with clopidogrel parameters taken from literature.

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Henrich2021_reference" status="rejected" stale="false" population="" measured-compound="clopidogrel" parameterization="mechanistic" topology="2C"></div>

## Citation
Henrich A, Claussen CH, Dingemanse J, Krause A. Pharmacokinetic/pharmacodynamic modeling of drug interactions at the P2Y. CPT: pharmacometrics & systems pharmacology 10(7):735–747 (2021).
  ·  DOI: [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference/Clopidogrel_Henrich2021_reference.svg" alt="Clopidogrel_Henrich2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 8.51 | L/h |
| Vcent (L) | V1 | 17.0 | L |
| Vp1 (L) | V2 | 51.4 | L |
| Qp1 (L/h) | Q | 3.19 | L/h |
| ka (1/h) | kabs | 5.95 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.381). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is for clopidogrel, but the paper studies selatogrel PK, with clopidogrel parameters taken from literature.**

The source text confirms the study focuses on the pharmacokinetics of selatogrel, using clopidogrel only as a comparator or concomitant drug. Consequently, the reported parameters, such as a clearance of 8.51 L/h and a central volume of 17.0 L, were taken from external literature rather than estimated from the study. The model builder also defaulted the bioavailability (F) and lag time (Tlag) parameters instead of providing explicit estimates. Extracted — clopidogrel: CL 8.51 L/h, V1 17 L, V2 51.4 L, Q 3.19 L/h, kabs 5.95 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q3: this record has none, the second reading 0.0071; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 8.51 | L/h | 2.364e-06 | m3/s | L/h | review (0.7) | Henrich_2021:review |
| Vcent (L) | `Q63` · V1 | 17.0 | L | 0.017 | m3 | L | review (0.7) | Henrich_2021:review |
| Vp1 (L) | `Q64` · V2 | 51.4 | L | 0.0514 | m3 | L | review (0.7) | Henrich_2021:review |
| Qp1 (L/h) | `Q30` · Q | 3.19 | L/h | 8.861e-07 | m3/s | L/h | review (0.7) | Henrich_2021:review |
| ka (1/h) | `Q49` · kabs | 5.95 | 1/h | 0.001653 | 1/s | 1/h | review (0.7) | Henrich_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- built from REVIEW reference values (Henrich_2021) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.381 (8/21 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q313]` | 2.49 | 3.63 | mismatch |
| `gpt-oss-120b` | `values[Q321]` | 0.278 | 0.278 | mismatch |
| `gpt-oss-120b` | `values[Q325]` |  | 2.49 | only_one_extracted |
| `gpt-oss-120b` | `values[Q328]` | 0.00641 | 0.00641 | mismatch |
| `gpt-oss-120b` | `values[Q329]` |  | 6.57 | only_one_extracted |
| `gpt-oss-120b` | `values[Q331]` | 11.0 | 11.0 | mismatch |
| `gpt-oss-120b` | `values[Q334]` |  | 2.21 | only_one_extracted |
| `gpt-oss-120b` | `values[Q336]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `values[Q3]` |  | 0.0071 | only_one_extracted |
| `gpt-oss-120b` | `values[Q47]` |  | 0.00820 | only_one_extracted |
| `gpt-oss-120b` | `values[Q61]` | 0.307 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q77]` | 448 | 448 | mismatch |
| `gpt-oss-120b` | `values[Q99]` | 4.18 | 4.18 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Henrich_2021:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Henrich_2021:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Henrich_2021:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Henrich_2021:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Henrich_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.51 | ['Henrich_2021:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.51 L/h | ['Henrich_2021:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 17 L | ['Henrich_2021:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 51.4 L | ['Henrich_2021:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | clopidogrel (or metabolite) | paper about another drug |  | paper subject is not clopidogrel: the paper is about another drug; this one is a co-medication or covariate: The study focuses on the PK of selatogrel; clopidogrel is used as a comparator/concomitant drug where its PK parameters were taken from literature and not estim · the biomarker kinetics are in the PD record(s) Henrich_2021::PRU |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=clopidogrel) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | second reader agrees | verdict disputed, agreement 0.381, 0 of 1 reader(s) agree | 0.381 | cross-check disputed by a second reader: verdict disputed, agreement 0.381, 0 of 1 reader(s) agree |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 75 mg, single dose, first-order absorption (ka 5.95 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 75 mg oral (B01AC04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference/Clopidogrel_Henrich2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference/Clopidogrel_Henrich2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Clopidogrel_Henrich2021_reference_params.json` · controls `Clopidogrel_Henrich2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclopidogrel%5D%20Clopidogrel_Henrich2021_reference&body=Drug%3A%20clopidogrel%0ARecord%3A%20Clopidogrel_Henrich2021_reference%0APaper%3A%20Henrich_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:45 UTC</sub>
