<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) succimer&quot;,&quot;href&quot;:&quot;drugs/drug_technetium_99mtc_succimer/&quot;},{&quot;label&quot;:&quot;Storgaard_2026_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Technetium99mtcSuccimer_Storgaard2026v2_reference&quot;,&quot;label&quot;:&quot;Storgaard_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# technetium (99mTc) succimer — `Technetium99mtcSuccimer_Storgaard2026v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the source paper studies a different drug, and clearance values conflict with a second reader's extraction.

<div class="pk-model-meta" hidden drug="technetium (99mTc) succimer" model-id="Technetium99mtcSuccimer_Storgaard2026v2_reference" status="rejected" stale="false" population="" measured-compound="technetium_99mtc_succimer" parameterization="apparent" topology="2C"></div>

## Citation
Storgaard IK, Nielsen RL, Houlind MB, Bornæs O, Christensen LWS, Andersen AL et al. Population pharmacokinetic modelling revealed large variability in oromucosal absorption of Δ&lt;sup&gt;9&lt;/sup&gt;-tetrahydrocannabinol in older patients with poor appetite. British journal of clinical pharmacology 92(2):504-514 (2026).
  ·  DOI: [10.1002/bcp.70284](https://doi.org/10.1002/bcp.70284)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference.svg" alt="Technetium99mtcSuccimer_Storgaard2026v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLO/F Apparent clearance of THC through other pathways | CL/F | 162.0 | L h−1 |
| V/F Apparent distribution volume for THC | V/F | 1669.0 | L |
| V2MET/F Apparent distribution volume of the peripheral THC‐OH compartment | V2 | 539.0 | L |
| QMET/F Intercompartmental clearance for THC‐OH | Q/F | 183.0 | L h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the source paper studies a different drug, and clearance values conflict with a second reader's extraction.**

The relevance screen confirmed the source paper does not mention technetium 99mTc succimer in its title or abstract. Additionally, the apparent clearance value of 162.0 L h−1 in this record was disputed by a second reader who recorded a value of 765. The second reader also failed to locate a value corresponding to the 539.0 L peripheral volume in this record, identifying it as null instead. Extracted — technetium 99mtc succimer: CL/F 162 L h−1, V/F 1.67e+03 L, V2 539 L, Q/F 183 L h−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on parameter Q22: this record has 696, the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLO/F Apparent clearance of THC through other pathways | `Q27` · CL/F | 162.0 | L h−1 | 4.5e-05 | m3/s | L/h | review (0.7) | Storgaard_2026_2:review |
| V/F Apparent distribution volume for THC | `Q76` · V/F | 1669.0 | L | 1.669 | m3 | L | review (0.7) | Storgaard_2026_2:review |
| V2MET/F Apparent distribution volume of the peripheral THC‐OH compartment | `Q64` · V2 | 539.0 | L | 0.539 | m3 | L | review (0.7) | Storgaard_2026_2:review |
| QMET/F Intercompartmental clearance for THC‐OH | `Q69` · Q/F | 183.0 | L h−1 | 5.083e-05 | m3/s | L/h | review (0.7) | Storgaard_2026_2:review |

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
- built from REVIEW reference values (Storgaard_2026_2) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.429 (6/14 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `values[Q22]` | 696 |  | only_one_extracted |
| `qwen3.8-27b` | `values[Q27]` | 162 | 765 | mismatch |
| `qwen3.8-27b` | `values[Q367]` |  | 77.5 | only_one_extracted |
| `qwen3.8-27b` | `values[Q370]` | 765 |  | only_one_extracted |
| `qwen3.8-27b` | `values[Q61]` | 66.4 |  | only_one_extracted |
| `qwen3.8-27b` | `values[Q63]` | 77.5 |  | only_one_extracted |
| `qwen3.8-27b` | `values[Q64]` | 539 |  | only_one_extracted |
| `qwen3.8-27b` | `values[Q82]` |  | 539 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Storgaard_2026_2:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Storgaard_2026_2:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Storgaard_2026_2:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Storgaard_2026_2:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 162 L/h | ['Storgaard_2026_2:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 539 L | ['Storgaard_2026_2:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.67e+03 L | ['Storgaard_2026_2:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | technetium_99mtc_succimer (or metabolite) | paper about another drug |  | paper subject is not technetium_99mtc_succimer: neither the title nor the abstract names this drug and the relevance screen rejected the paper |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=technetium_99mtc_succimer) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | second reader agrees | verdict disputed, agreement 0.429, 0 of 1 reader(s) agree | 0.429 | cross-check disputed by a second reader: verdict disputed, agreement 0.429, 0 of 1 reader(s) agree |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Technetium99mtcSuccimer_Storgaard2026v2_reference_params.json` · controls `Technetium99mtcSuccimer_Storgaard2026v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_succimer%5D%20Technetium99mtcSuccimer_Storgaard2026v2_reference&body=Drug%3A%20technetium_99mtc_succimer%0ARecord%3A%20Technetium99mtcSuccimer_Storgaard2026v2_reference%0APaper%3A%20Storgaard_2026_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 19:13 UTC</sub>
