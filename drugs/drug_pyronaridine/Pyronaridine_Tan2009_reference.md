<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Pyronaridine&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/&quot;},{&quot;label&quot;:&quot;Tan_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyronaridine_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Tan2009_reference&quot;,&quot;label&quot;:&quot;Tan_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Felices_2025_QTcF&quot;,&quot;label&quot;:&quot;Felices_2025 \u00b7 \u0394QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/pd_Felices_2025_QTcF.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pyronaridine — `Pyronaridine_Tan2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> paper_subject_is_other_drug; t0_analyte_identity (+1 more).

<div class="pk-model-meta" hidden drug="Pyronaridine" model-id="Pyronaridine_Tan2009_reference" status="rejected" stale="false" population="" measured-compound="pyronaridine" parameterization="apparent" topology="2C"></div>

## Citation
Tan B, Naik H, Jang IJ, Yu KS, Kirsch LE, Shin CS et al. Population pharmacokinetics of artesunate and dihydroartemisinin following single- and multiple-dosing of oral artesunate in healthy subjects. Malaria journal 8:304 (2009).
  ·  DOI: [10.1186/1475-2875-8-304](https://doi.org/10.1186/1475-2875-8-304)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference/Pyronaridine_Tan2009_reference.svg" alt="Pyronaridine_Tan2009_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 1190.0 | L/h |
| V/F (reported) | V/F | 70.5 | L |
| V2/F | V2/F | 1210.0 | L |
| Q/F | Q/F | 5.74 | L/h |
| Ka | kabs | 3.85 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.579). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**paper_subject_is_other_drug; t0_analyte_identity (+1 more).**

Extracted — pyronaridine: CL/F 1.19e+03 L/h, V/F 70.5 L, V2/F 1.21e+03 L, Q/F 5.74 L/h, kabs 3.85 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q312: this record has 135, the second reading 112; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 1190.0 | L/h | 0.0003306 | m3/s | L/h | review (0.7) | Tan_2009:review |
| V/F (reported) | `Q76` · V/F | 70.5 | L | 0.0705 | m3 | L | review (0.7) | Tan_2009:review |
| V2/F | `Q82` · V2/F | 1210.0 | L | 1.21 | m3 | L | review (0.7) | Tan_2009:review |
| Q/F | `Q69` · Q/F | 5.74 | L/h | 1.594e-06 | m3/s | L/h | review (0.7) | Tan_2009:review |
| Ka | `Q49` · kabs | 3.85 | h-1 | 0.001069 | 1/s | 1/h | review (0.7) | Tan_2009:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- built from REVIEW reference values (Tan_2009) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.579 (11/19 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q312]` | 135 | 112 | mismatch |
| `gpt-oss-120b` | `values[Q314]` | 112 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q352]` | 19.7 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q353]` | 6.34 | 19.7 | mismatch |
| `gpt-oss-120b` | `values[Q354]` | 1.52 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q57]` | 0.66 | 1 | mismatch |
| `gpt-oss-120b` | `values[Q60]` |  | 0.66 | only_one_extracted |
| `gpt-oss-120b` | `values[Q76]` | 70.5 | 18.5 | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tan_2009:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tan_2009:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tan_2009:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tan_2009:review'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tan_2009:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.19e+03 L/h | ['Tan_2009:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 70.5 L | ['Tan_2009:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.21e+03 L | ['Tan_2009:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | pyronaridine (or metabolite) | paper about another drug |  | paper subject is not pyronaridine: the paper is about another drug; this one is a co-medication or covariate: This is a population PK study of artesunate and its metabolite DHA; pyronaridine is only a co-administered comparator drug, and no pyronaridine PK parameters ar |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=pyronaridine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.579 (11 of 19 compared fields agree, 4 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.579 | cross-check contradicted by a second reader: verdict disputed; agreement 0.579 (11 of 19 compared fields agree, 4 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 3.85 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference/Pyronaridine_Tan2009_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference/Pyronaridine_Tan2009_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Pyronaridine_Tan2009_reference_params.json` · controls `Pyronaridine_Tan2009_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyronaridine%5D%20Pyronaridine_Tan2009_reference&body=Drug%3A%20pyronaridine%0ARecord%3A%20Pyronaridine_Tan2009_reference%0APaper%3A%20Tan_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 08:25 UTC</sub>
