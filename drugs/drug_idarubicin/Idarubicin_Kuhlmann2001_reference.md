<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;idarubicin&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/&quot;},{&quot;label&quot;:&quot;Kuhlmann_2001 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Idarubicin_Tamura1996_reference&quot;,&quot;label&quot;:&quot;Tamura_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/Idarubicin_Tamura1996_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Idarubicin_Kuhlmann2001_reference&quot;,&quot;label&quot;:&quot;Kuhlmann_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Meg_as_Vericat_2019_LPC&quot;,&quot;label&quot;:&quot;Meg\u00edas-Vericat_2019 \u00b7 LPC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_idarubicin/pd_Meg_as_Vericat_2019_LPC.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# idarubicin — `Idarubicin_Kuhlmann2001_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> T3_output_variable; t3_topology_template (+1 more).

<div class="pk-model-meta" hidden drug="idarubicin" model-id="Idarubicin_Kuhlmann2001_reference" status="rejected" stale="false" population="rats" measured-compound="idarubicin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kuhlmann O, Hofmann S, Weiss M. Pharmacokinetics and toxicity of idarubicin in the rat. European journal of drug metabolism and pharmacokinetics 26(4):215–219 (2001).
  ·  DOI: [10.1007/BF03226374](https://doi.org/10.1007/BF03226374)

## Population and dosing

**Population:** rats · condition healthy · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference/Idarubicin_Kuhlmann2001_reference.svg" alt="Idarubicin_Kuhlmann2001_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance | CL | 27.0 | ml min(-1) |
| mean disposition residence time | MRT | 519.2 | min |
| volume of distribution at steady state | Vss | 12.51 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3), qwen3.8-27b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T3_output_variable; t3_topology_template (+1 more).**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — idarubicin: CL 27 ml min(-1), MRT 519 min, Vss 12.5 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has idarubicin → idarubicinol (metabolism), the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 27.0 | ml min(-1) | 4.5e-07 | m3/s | ml/min | exact (1) | Kuhlmann_2001:abstract |
| mean disposition residence time | `Q53` · MRT | 519.2 | min | 3.115e+04 | s | min | llm (0.6) | Kuhlmann_2001:abstract |
| volume of distribution at steady state | `Q65` · Vss | 12.51 | L | 0.01251 | m3 | L | llm_corrected (0.6) | Kuhlmann_2001:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- implicit units: 'volume of distribution at steady state' → L (from the popPK convention: 'No unit is provided in the text or table. By standard population PK convention, volume of distribution at steady state i')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=idarubicin
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 3/3 row label(s) assigned, 1 linked by role; re-tagged idarubicin→parent ×3
- molar mass: none found for 'idarubicinol' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kuhlmann_2001_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |
| `qwen3.8-27b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['idarubicin', 'idarubicinol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clearance]` | 27.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 27.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean disposition residence time]` | 519.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean disposition residence time]` |  | 519.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution at steady state]` | 12.51 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution at steady state]` |  | 12.51 | only_one_extracted |
| `qwen3.8-27b` | `model.links` | [] | [['idarubicin', 'idarubicinol', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[cl]` | 27.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clearance (cl]` |  | 27.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[mdrt]` | 519.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[mean disposition residence time (mdrt]` |  | 519.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution at steady state (vss]` |  | 12.51 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vss]` | 12.51 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kuhlmann_2001:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Kuhlmann_2001:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kuhlmann_2001:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 27 | ['Kuhlmann_2001:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.62 L/h | ['Kuhlmann_2001:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 12.5 L | ['Kuhlmann_2001:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=idarubicin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 1 scholar param(s) emitted or defaulted | 1 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.3 (3 of 10 compared fields agree, 6 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.3 | cross-check contradicted by a second reader: verdict disputed; agreement 0.3 (3 of 10 compared fields agree, 6 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

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

<dbs-fmusim paramsurl="drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference/Idarubicin_Kuhlmann2001_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference/Idarubicin_Kuhlmann2001_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Idarubicin_Kuhlmann2001_reference_params.json` · controls `Idarubicin_Kuhlmann2001_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bidarubicin%5D%20Idarubicin_Kuhlmann2001_reference&body=Drug%3A%20idarubicin%0ARecord%3A%20Idarubicin_Kuhlmann2001_reference%0APaper%3A%20Kuhlmann_2001%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_idarubicin/Idarubicin_Kuhlmann2001_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 22:17 UTC</sub>
