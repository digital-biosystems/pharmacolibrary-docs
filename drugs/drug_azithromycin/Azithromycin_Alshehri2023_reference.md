<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;azithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/&quot;},{&quot;label&quot;:&quot;Alshehri_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azithromycin_Benn2017_reference&quot;,&quot;label&quot;:&quot;Benn_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Benn2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Benn_2017_HR&quot;,&quot;label&quot;:&quot;Benn_2017 \u00b7 HR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/pd_Benn_2017_HR.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azithromycin — `Azithromycin_Alshehri2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> paper_subject_is_other_drug; t0_analyte_identity (+1 more).

<div class="pk-model-meta" hidden drug="azithromycin" model-id="Azithromycin_Alshehri2023_reference" status="rejected" stale="false" population="" measured-compound="azithromycin" parameterization="apparent" topology="2C"></div>

## Citation
Alshehri A, Chhonker YS, Bala V, Edi C, Bjerum CM, Koudou BG et al. Population pharmacokinetic model of ivermectin in mass drug administration against lymphatic filariasis. PLoS neglected tropical diseases 17(6):e0011319 (2023).
  ·  DOI: [10.1371/journal.pntd.0011319](https://doi.org/10.1371/journal.pntd.0011319)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference/Azithromycin_Alshehri2023_reference.svg" alt="Azithromycin_Alshehri2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 7.02 | liters/h |
| Vc/F | V1/F | 138.0 | liters |
| Q/F | Q/F | 9.11 | liters/h |
| Tlag | tlag | 0.75 | h |
| Ka | kabs | 0.71 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**paper_subject_is_other_drug; t0_analyte_identity (+1 more).**

Extracted — azithromycin: CL/F 7.02 liters/h, V1/F 138 liters, Q/F 9.11 liters/h, tlag 0.75 h, kabs 0.71 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q74: this record has none, the second reading 1759. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 7.02 | liters/h | 1.95e-06 | m3/s | L/h | review (0.7) | Alshehri_2023:review |
| Vc/F | `Q290` · V1/F | 138.0 | liters | 0.138 | m3 | L | review (0.7) | Alshehri_2023:review |
| Q/F | `Q69` · Q/F | 9.11 | liters/h | 2.531e-06 | m3/s | L/h | review (0.7) | Alshehri_2023:review |
| Tlag | `Q83` · tlag | 0.75 | h | 2700 | s | h | review (0.7) | Alshehri_2023:review |
| Ka | `Q49` · kabs | 0.71 | 1/h | 0.0001972 | 1/s | 1/h | review (0.7) | Alshehri_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- built from REVIEW reference values (Alshehri_2023) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q74]` |  | 1759 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Alshehri_2023:review'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Alshehri_2023:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alshehri_2023:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Alshehri_2023:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Alshehri_2023:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.02 L/h | ['Alshehri_2023:review'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 138 L | ['Alshehri_2023:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | azithromycin (or metabolite) | paper about another drug |  | paper subject is not azithromycin: neither the title nor the abstract names this drug and the relevance screen rejected the paper |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=azithromycin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | pass |  | verdict partial; agreement 0.9 (9 of 10 compared fields agree, 1 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.9 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.71 /h, lag 45 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 300 mg oral (J01FA10) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference/Azithromycin_Alshehri2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference/Azithromycin_Alshehri2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Azithromycin_Alshehri2023_reference_params.json` · controls `Azithromycin_Alshehri2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazithromycin%5D%20Azithromycin_Alshehri2023_reference&body=Drug%3A%20azithromycin%0ARecord%3A%20Azithromycin_Alshehri2023_reference%0APaper%3A%20Alshehri_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 11:25 UTC</sub>
