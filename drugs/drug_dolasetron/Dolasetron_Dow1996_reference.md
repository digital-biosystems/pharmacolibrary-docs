<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;dolasetron&quot;,&quot;href&quot;:&quot;drugs/drug_dolasetron/&quot;},{&quot;label&quot;:&quot;Dow_1996 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dolasetron_Dow1996_reference&quot;,&quot;label&quot;:&quot;Dow_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolasetron/Dolasetron_Dow1996_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dolasetron — `Dolasetron_Dow1996_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

> The dolasetron record was rejected because the model output was the parent's central compartment instead of the measured analyte, the structure was a one-compartment enteral model rather than the required parent–metabolite structure, and apparent assumptions (F=1, Fm=1, no molar correction) were used.

<div class="pk-model-meta" hidden drug="dolasetron" model-id="Dolasetron_Dow1996_reference" status="rejected" stale="false" population="dogs" measured-compound="dolasetron" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Dow J, Francesco GF, Berg C. Comparison of the pharmacokinetics of dolasetron and its major active metabolite, reduced dolasetron, in dog. Journal of pharmaceutical sciences 85(7):685–689 (1996).
  ·  DOI: [10.1021/js960041m](https://doi.org/10.1021/js960041m)

## Population and dosing

**Population:** dogs · condition healthy · age group adult.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference.svg" alt="Dolasetron_Dow1996_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| terminal elimination half-life (t1/2) | t1/2z | 0.1 | h |
| total body plasma clearance (Cltot) | CL | 109 | mL/min/kg |
| apparent volume of distribution (aVd beta) | V/F | 0.83 | L/kg |
| bioavailability (F) | Fab | 7 | % |
| aVd beta | V1 | 8.5 | L/kg |
| apparent first-order formation rate constant (ki) | kfm | 7 | h-1 |
| median Tmax | tmax | 0.33 | h |
| first-order absorption rate constants (ka) | kabs | 14 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The dolasetron record was rejected because the model output was the parent's central compartment instead of the measured analyte, the structure was a one-compartment enteral model rather than the required parent–metabolite structure, and apparent assumptions (F=1, Fm=1, no molar correction) were used.**

The record, built from the abstract alone of Dow_1996 (dogs, dolasetron with reduced dolasetron metabolite), used summary statistics in place of a fitted model. The output compartment was the parent's central compartment rather than the measured analyte compartment, and the model structure was a one-compartment enteral model instead of the required three-compartment parent–metabolite topology. The builder assumed F=1 and Fm=1 with no molar correction (apparent parameterization), which was judged not acceptable, and left the lag time at a default value. A second reader also disputed the primary analyte (dolasetron and reduced dolasetron versus dolasetron alone) and the bioavailability value of 7%. Extracted — dolasetron: t1/2z 0.1 h, CL 109 mL/min/kg, V/F 0.83 L/kg, Fab 7 %, V1 8.5 L/kg, kfm 7 h-1, tmax 0.33 h, kabs 14 h-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has dolasetron, the second reading dolasetron or red-dolasetron; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| terminal elimination half-life (t1/2) | `Q57` · t1/2z | 0.1 | h | 360 | s | h | llm (0.6) | Dow_1996:abstract |
| total body plasma clearance (Cltot) | `Q22` · CL | 109 | mL/min/kg | 0.0001272 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Dow_1996:abstract |
| apparent volume of distribution (aVd beta) | `Q76` · V/F | 0.83 | L/kg | 0.0581 | m3 | l/kg | exact (1) | Dow_1996:abstract |
| bioavailability (F) | `Q40` · Fab | 7 | % |  |  |  | exact (1) | Dow_1996:abstract |
| aVd beta | `Q63` · V1 | 8.5 | L/kg | 0.595 | m3 | l/kg | llm_corrected (0.6) | Dow_1996:abstract |
| apparent first-order formation rate constant (ki) | `Q305` · kfm | 7 | h-1 | 0.001944 | 1/s | 1/h | llm_confirmed (0.6) | Dow_1996:abstract |
| median Tmax | `Q56` · tmax | 0.33 | h | 1188 | s | h | llm_confirmed (0.6) | Dow_1996:abstract, Dow_1996:abstract |
| first-order absorption rate constants (ka) | `Q49` · kabs | 14 | h-1 | 0.003889 | 1/s | 1/h | llm_confirmed (0.6) | Dow_1996:abstract, Dow_1996:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q57 ('t1/2', value 4.0) — already have one for this compound
- dropped duplicate Q22 ('Cltot', value 25) — already have one for this compound
- dropped value-less row: 'first-order elimination rate constant (kel)' (captured trailing unit 'kel' for child rows)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dolasetron
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Dow_1996_metadata.yaml (14 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/13 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 7 |  | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['dolasetron', 'reduced dolasetron', 'metabolism']] | [['dolasetron', 'red-dolasetron', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[apparent first-order formation rate constant]` | 7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` | 0.83 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[avd beta]` | 8.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[bioavailability]` | 7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[first-order absorption rate constants]` | 14 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[median tmax]` | 0.33 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal elimination half-life]` | 0.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body plasma clearance]` | 109 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | dolasetron | dolasetron or red-dolasetron | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | dolasetron | dolasetron and red-dolasetron | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Dow_1996:abstract'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Dow_1996:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Dow_1996:abstract', 'Dow_1996:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Dow_1996:abstract', 'Dow_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Dow_1996:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Dow_1996:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Dow_1996:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 458 L/h | ['Dow_1996:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 595 L | ['Dow_1996:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 58.1 L | ['Dow_1996:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=dolasetron) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 14 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 200 mg oral (A04AA04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dolasetron_Dow1996_reference_params.json` · controls `Dolasetron_Dow1996_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdolasetron%5D%20Dolasetron_Dow1996_reference&body=Drug%3A%20dolasetron%0ARecord%3A%20Dolasetron_Dow1996_reference%0APaper%3A%20Dow_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dolasetron/Dolasetron_Dow1996_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 13:51 UTC</sub>
