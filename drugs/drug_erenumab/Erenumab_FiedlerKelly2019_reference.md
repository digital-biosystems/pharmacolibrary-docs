<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;erenumab&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/&quot;},{&quot;label&quot;:&quot;Fiedler-Kelly_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erenumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Erenumab_Kielbasa2019_reference&quot;,&quot;label&quot;:&quot;Kielbasa_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Kielbasa2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vu_2017_DBF&quot;,&quot;label&quot;:&quot;Vu_2017 \u00b7 DBF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/pd_Vu_2017_DBF.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# erenumab — `Erenumab_FiedlerKelly2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> paper_subject_is_other_drug; t0_analyte_identity (+1 more).

<div class="pk-model-meta" hidden drug="erenumab" model-id="Erenumab_FiedlerKelly2019_reference" status="rejected" stale="false" population="" measured-compound="erenumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Fiedler-Kelly JB, Cohen-Barak O, Morris DN, Ludwig E, Rasamoelisolo M, Shen H et al. Population pharmacokinetic modelling and simulation of fremanezumab in healthy subjects and patients with migraine. British journal of clinical pharmacology 85(12):2721-2733 (2019).
  ·  DOI: [10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096)

## Population and dosing

**Population:** review reference.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference/Erenumab_FiedlerKelly2019_reference.svg" alt="Erenumab_FiedlerKelly2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| central CL | CL | 0.0902 | L/d |
| Vc,SC | V | 1.88 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by glm-5.3-flash (partly confirmed, agreement 0.444), gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**paper_subject_is_other_drug; t0_analyte_identity (+1 more).**

Extracted — erenumab: CL 0.0902 L/d, V 1.88 L.

A second, independent reading of the paper (`glm-5.3-flash`) disagrees on parameter Q312: this record has none, the second reading 23.4; it also differs on 4 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| central CL | `Q22` · CL | 0.0902 | L/d | 1.044e-09 | m3/s | L/h | review (0.7) | Fiedler-Kelly_2019:review |
| Vc,SC | `Q61` · V | 1.88 | L | 0.00188 | m3 | L | review (0.7) | Fiedler-Kelly_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Fiedler-Kelly_2019) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `glm-5.3-flash` | partly confirmed | 0.444 (4/9 fields) | 5 |
| `gpt-oss-120b` | no answer | – | – (extracted nothing for this record) |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `glm-5.3-flash` | `values[Q312]` |  | 23.4 | only_one_extracted |
| `glm-5.3-flash` | `values[Q315]` |  | 23.1 | only_one_extracted |
| `glm-5.3-flash` | `values[Q317]` |  | 93.3 | only_one_extracted |
| `glm-5.3-flash` | `values[Q61]` | 1.88 |  | only_one_extracted |
| `glm-5.3-flash` | `values[Q63]` |  | 1.88 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fiedler-Kelly_2019:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Fiedler-Kelly_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0902 | ['Fiedler-Kelly_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00376 L/h | ['Fiedler-Kelly_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.88 L | ['Fiedler-Kelly_2019:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | erenumab (or metabolite) | paper about another drug |  | paper subject is not erenumab: neither the title nor the abstract names this drug and the relevance screen rejected the paper |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=erenumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | no second reader contradicts | verdict partial; agreement 0.444 (4 of 9 compared fields agree, 5 extracted by one reader only); 1 of 1 reader(s) without a contradiction (glm-5.3-flash) | 0.444 | cross-check agreement 0.444 is below 0.5: verdict partial; agreement 0.444 (4 of 9 compared fields agree, 5 extracted by one reader only); 1 of 1 reader(s) without a contradiction (glm-5.3-flash) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 2.5 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 2.5 mg parenteral (N02CD01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference/Erenumab_FiedlerKelly2019_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference/Erenumab_FiedlerKelly2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Erenumab_FiedlerKelly2019_reference_params.json` · controls `Erenumab_FiedlerKelly2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Berenumab%5D%20Erenumab_FiedlerKelly2019_reference&body=Drug%3A%20erenumab%0ARecord%3A%20Erenumab_FiedlerKelly2019_reference%0APaper%3A%20Fiedler-Kelly_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 06:34 UTC</sub>
