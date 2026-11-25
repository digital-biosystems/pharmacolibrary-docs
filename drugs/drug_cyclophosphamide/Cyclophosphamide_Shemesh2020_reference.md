<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;cyclophosphamide&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/&quot;},{&quot;label&quot;:&quot;Shemesh_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cyclophosphamide_Iliopoulou2021_reference&quot;,&quot;label&quot;:&quot;Iliopoulou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Iliopoulou2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Cao2025_reference&quot;,&quot;label&quot;:&quot;Cao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Cao2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Huang2026_reference&quot;,&quot;label&quot;:&quot;Huang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Huang2026_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Shemesh2020_reference&quot;,&quot;label&quot;:&quot;Shemesh_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Shemesh2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cyclophosphamide_Tsyplakova2025_reference&quot;,&quot;label&quot;:&quot;Tsyplakova_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Tsyplakova2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Xie2025_reference&quot;,&quot;label&quot;:&quot;Xie_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Xie2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Zhou2026_reference&quot;,&quot;label&quot;:&quot;Zhou_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cyclophosphamide/Cyclophosphamide_Zhou2026_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cyclophosphamide — `Cyclophosphamide_Shemesh2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> paper_subject_is_other_drug; t0_analyte_identity (+1 more).

<div class="pk-model-meta" hidden drug="cyclophosphamide" model-id="Cyclophosphamide_Shemesh2020_reference" status="rejected" stale="false" population="" measured-compound="cyclophosphamide" parameterization="mechanistic" topology="1C"></div>

## Citation
Shemesh CS, Agarwal P, Lu T, Lee C, Dere RC, Li X et al. Pharmacokinetics of polatuzumab vedotin in combination with R/G-CHP in patients with B-cell non-Hodgkin lymphoma. Cancer chemotherapy and pharmacology 85(5):831–842 (2020).
  ·  DOI: [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cyclophosphamide/Cyclophosphamide_Shemesh2020_reference/Cyclophosphamide_Shemesh2020_reference.svg" alt="Cyclophosphamide_Shemesh2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 12.7 | mL/day/kg |
| V (derived from CL·t½/ln2) | V | 6.0921 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by glm-5.3-flash (not confirmed, agreement 0.143), gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**paper_subject_is_other_drug; t0_analyte_identity (+1 more).**

Extracted — cyclophosphamide: CL 12.7 mL/day/kg, V 6.09 L.

A second, independent reading of the paper (`glm-5.3-flash`) disagrees on parameter Q17: this record has 1800, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 12.7 | mL/day/kg | 1.029e-08 | m3/s | L/h | review (0.7) | Shemesh_2020:review |
| V (derived from CL·t½/ln2) | `Q61` · V | 6.0921 | L | 0.006092 | m3 | L | review (0.7) | Shemesh_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Shemesh_2020) — secondary source
- central volume derived from CL·t½/ln2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `glm-5.3-flash` | not confirmed | 0.143 (1/7 fields) | 6 |
| `gpt-oss-120b` | no answer | – | – (extracted nothing for this record) |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `glm-5.3-flash` | `values[Q17]` | 1800 |  | only_one_extracted |
| `glm-5.3-flash` | `values[Q22]` | 12.7 |  | only_one_extracted |
| `glm-5.3-flash` | `values[Q32]` | 350 | 2 | mismatch |
| `glm-5.3-flash` | `values[Q57]` | 4.75 |  | only_one_extracted |
| `glm-5.3-flash` | `values[Q74]` | 20.4 |  | only_one_extracted |
| `glm-5.3-flash` | `values[Q88]` | 1300 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Shemesh_2020:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Shemesh_2020:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.7 | ['Shemesh_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.037 L/h | ['Shemesh_2020:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.09 L | ['Shemesh_2020:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | cyclophosphamide (or metabolite) | paper about another drug |  | paper subject is not cyclophosphamide: the paper is about another drug; this one is a co-medication or covariate: The study reports pharmacokinetic parameters for polatuzumab vedotin (acMMAE and unconjugated MMAE); cyclophosphamide is only a co-administered comparator agent |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=cyclophosphamide) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.143 (1 of 7 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (glm-5.3-flash) | 0.143 | cross-check contradicted by a second reader: verdict disputed; agreement 0.143 (1 of 7 compared fields agree, 5 extracted by one reader only); 0 of 1 reader(s) without a contradiction (glm-5.3-flash) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_cyclophosphamide/Cyclophosphamide_Shemesh2020_reference/Cyclophosphamide_Shemesh2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_cyclophosphamide/Cyclophosphamide_Shemesh2020_reference/Cyclophosphamide_Shemesh2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Cyclophosphamide_Shemesh2020_reference_params.json` · controls `Cyclophosphamide_Shemesh2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyclophosphamide%5D%20Cyclophosphamide_Shemesh2020_reference&body=Drug%3A%20cyclophosphamide%0ARecord%3A%20Cyclophosphamide_Shemesh2020_reference%0APaper%3A%20Shemesh_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cyclophosphamide/Cyclophosphamide_Shemesh2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 16:40 UTC</sub>
