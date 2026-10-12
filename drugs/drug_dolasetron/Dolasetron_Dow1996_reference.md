<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;dolasetron&quot;,&quot;href&quot;:&quot;drugs/drug_dolasetron/&quot;},{&quot;label&quot;:&quot;Dow_1996 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dolasetron_Dow1996_reference&quot;,&quot;label&quot;:&quot;Dow_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolasetron/Dolasetron_Dow1996_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dolasetron — `Dolasetron_Dow1996_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The dolasetron record was rejected because the model output was the parent's central compartment instead of the measured analyte, the structure was a one-compartment enteral model rather than the required parent–metabolite structure, and apparent assumptions (F=1, Fm=1, no molar correction) were used.**

The record, built from the abstract alone of Dow_1996 (dogs, dolasetron with reduced dolasetron metabolite), used summary statistics in place of a fitted model. The output compartment was the parent's central compartment rather than the measured analyte compartment, and the model structure was a one-compartment enteral model instead of the required three-compartment parent–metabolite topology. The builder assumed F=1 and Fm=1 with no molar correction (apparent parameterization), which was judged not acceptable, and left the lag time at a default value. A second reader also disputed the primary analyte (dolasetron and reduced dolasetron versus dolasetron alone) and the bioavailability value of 7%. Extracted — dolasetron: t1/2z 0.1 h, CL 109 mL/min/kg, V/F 0.83 L/kg, Fab 7 %, V1 8.5 L/kg, kfm 7 h-1, tmax 0.33 h, kabs 14 h-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has dolasetron, the second reading dolasetron or red-dolasetron; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Dow J et al., Comparison of the pharmacokinetics of d…, Journal of pharmaceutical s… (1996)
  ·  DOI: [10.1021/js960041m](https://doi.org/10.1021/js960041m)

<div class="pk-model-meta" hidden drug="dolasetron" model-id="Dolasetron_Dow1996_reference" status="rejected" stale="false" population="dogs" measured-compound="dolasetron" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| terminal elimination half-life (t1/2) | `Q57` · t1/2z | 0.1 | h | 360.0 | [h] | not captured | llm (0.6) | Dow_1996:abstract | — | not captured |
| total body plasma clearance (Cltot) | `Q22` · CL | 109 | mL/min/kg | 0.00012716666666666665 | [ml] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Dow_1996:abstract | — | not captured |
| apparent volume of distribution (aVd beta) | `Q76` · V/F | 0.83 | L/kg | 0.0581 | [l] / [kg] | not captured | exact (1.0) | Dow_1996:abstract | — | not captured |
| bioavailability (F) | `Q40` · Fab | 7 | % | not captured | not captured | not captured | exact (1.0) | Dow_1996:abstract | — | not captured |
| aVd beta | `Q63` · V1 | 8.5 | L/kg | 0.5950000000000001 | [l] / [kg] | not captured | llm_corrected (0.6) | Dow_1996:abstract | — | not captured |
| apparent first-order formation rate constant (ki) | `Q305` · kfm | 7 | h-1 | 0.0019444444444444444 | [1] / [h] | not captured | llm_confirmed (0.6) | Dow_1996:abstract | — | not captured |
| median Tmax | `Q56` · tmax | 0.33 | h | 1188.0 | [h] | not captured | llm_confirmed (0.6) | Dow_1996:abstract, Dow_1996:abstract | — | not captured |
| first-order absorption rate constants (ka) | `Q49` · kabs | 14 | h-1 | 0.0038888888888888888 | [1] / [h] | not captured | llm_confirmed (0.6) | Dow_1996:abstract, Dow_1996:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
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
| `gpt-oss:120b` | `model.bioavailability.theta` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['dolasetron', 'reduced dolasetron', 'metabolism']] | [['dolasetron', 'red-dolasetron', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[apparent first-order formation rate constant]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` | 0.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[avd beta]` | 8.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[bioavailability]` | 7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[first-order absorption rate constants]` | 14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[median tmax]` | 0.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal elimination half-life]` | 0.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body plasma clearance]` | 109 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | dolasetron | dolasetron or red-dolasetron | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | dolasetron | dolasetron and red-dolasetron | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Dow_1996:abstract', 'Dow_1996:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Dow_1996:abstract', 'Dow_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 458 L/h | not captured | not captured | ['Dow_1996:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 595 L | not captured | not captured | ['Dow_1996:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 58.1 L | not captured | not captured | ['Dow_1996:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=dolasetron) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dolasetron/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dow_1996` / `Dow_1996::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dolasetron/models/modelica/Dolasetron_Dow1996_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dolasetron/models/modelica/Dolasetron_Dow1996_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dolasetron/models/modelica/Dolasetron_Dow1996_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 14 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 200 mg oral (A04AA04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dolasetron_Dow1996_reference_params.json` · controls `Dolasetron_Dow1996_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 13:51 UTC</sub>
