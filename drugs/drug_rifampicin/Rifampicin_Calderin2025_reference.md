<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;rifampicin&quot;,&quot;href&quot;:&quot;drugs/drug_rifampicin/&quot;},{&quot;label&quot;:&quot;Calderin_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifampicin_Srivastava2022_reference&quot;,&quot;label&quot;:&quot;Srivastava_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifampicin/Rifampicin_Srivastava2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifampicin_Calderin2025_reference&quot;,&quot;label&quot;:&quot;Calderin_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifampicin/Rifampicin_Calderin2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Srivastava_2022_CFU&quot;,&quot;label&quot;:&quot;Srivastava_2022 \u00b7 CFU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_rifampicin/pd_Srivastava_2022_CFU.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifampicin — `Rifampicin_Calderin2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> paper_subject_is_other_drug; t0_analyte_identity (+2 more).

<div class="pk-model-meta" hidden drug="rifampicin" model-id="Rifampicin_Calderin2025_reference" status="rejected" stale="false" population="" measured-compound="rifampicin" parameterization="apparent" topology="1C"></div>

## Citation
Calderin JM, Resendiz-Galvan JE, Abdelgawad N, Davis A, Stek C, Wiesner L et al. Pharmacokinetics of dexamethasone in tuberculosis meningitis. medRxiv : the preprint server for health sciences (2025).
  ·  DOI: [10.1101/2025.07.14.25331510](https://doi.org/10.1101/2025.07.14.25331510)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_rifampicin/Rifampicin_Calderin2025_reference/Rifampicin_Calderin2025_reference.svg" alt="Rifampicin_Calderin2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 131.0 | L/h |
| V/F | V/F | 26.6 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by glm-5.3-flash (partly confirmed, agreement 0.4), gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**paper_subject_is_other_drug; t0_analyte_identity (+2 more).**

Extracted — rifampicin: CL/F 131 L/h, V/F 26.6 L.

A second, independent reading of the paper (`glm-5.3-flash`) disagrees on parameter Q21: this record has none, the second reading 0.8; it also differs on 8 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 131.0 | L/h | 3.639e-05 | m3/s | L/h | review (0.7) | Calderin_2025:review |
| V/F | `Q76` · V/F | 26.6 | L | 0.0266 | m3 | L | review (0.7) | Calderin_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- built from REVIEW reference values (Calderin_2025) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `glm-5.3-flash` | partly confirmed | 0.4 (6/15 fields) | 9 |
| `gpt-oss-120b` | no answer | – | – (extracted nothing for this record) |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `glm-5.3-flash` | `values[Q21]` |  | 0.8 | only_one_extracted |
| `glm-5.3-flash` | `values[Q317]` |  | 20 | only_one_extracted |
| `glm-5.3-flash` | `values[Q319]` |  | 80 | only_one_extracted |
| `glm-5.3-flash` | `values[Q32]` |  | 0.0275 | only_one_extracted |
| `glm-5.3-flash` | `values[Q339]` | 27 |  | only_one_extracted |
| `glm-5.3-flash` | `values[Q61]` |  | 26.6 | only_one_extracted |
| `glm-5.3-flash` | `values[Q76]` | 26.6 |  | only_one_extracted |
| `glm-5.3-flash` | `values[Q88]` |  | 40 | only_one_extracted |
| `glm-5.3-flash` | `values[Q900]` |  | 24 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Calderin_2025:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Calderin_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 131 L/h | ['Calderin_2025:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 26.6 L | ['Calderin_2025:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | rifampicin (or metabolite) | paper about another drug |  | paper subject is not rifampicin: the paper is about another drug; this one is a co-medication or covariate: The study characterizes the pharmacokinetics of dexamethasone (a co-administered adjunctive therapy) while rifampicin is used as a co-administered drug to asses |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=rifampicin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict partial; agreement 0.4 (6 of 15 compared fields agree, 9 extracted by one reader only); 1 of 1 reader(s) without a contradiction (glm-5.3-flash) | 0.4 | cross-check agreement 0.4 is below 0.5: verdict partial; agreement 0.4 (6 of 15 compared fields agree, 9 extracted by one reader only); 1 of 1 reader(s) without a contradiction (glm-5.3-flash) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 600 mg oral (J04AB02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_rifampicin/Rifampicin_Calderin2025_reference/Rifampicin_Calderin2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_rifampicin/Rifampicin_Calderin2025_reference/Rifampicin_Calderin2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Rifampicin_Calderin2025_reference_params.json` · controls `Rifampicin_Calderin2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brifampicin%5D%20Rifampicin_Calderin2025_reference&body=Drug%3A%20rifampicin%0ARecord%3A%20Rifampicin_Calderin2025_reference%0APaper%3A%20Calderin_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rifampicin/Rifampicin_Calderin2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 12:22 UTC</sub>
