<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;lenalidomide&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/&quot;},{&quot;label&quot;:&quot;Hughes_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lenalidomide_Gupta2019_reference&quot;,&quot;label&quot;:&quot;Gupta_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Gupta2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Papathanasiou2025_reference&quot;,&quot;label&quot;:&quot;Papathanasiou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Papathanasiou2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Hughes2019_reference&quot;,&quot;label&quot;:&quot;Hughes_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Hughes2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenalidomide — `Lenalidomide_Hughes2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The record was rejected because the elimination parameter for lenalidomide was mistakenly labeled as creatinine clearance instead of total drug clearance.**

The elimination parameter is identified in the record as creatinine clearance with a value of 30 mL/min, which is a renal biomarker rather than a property of lenalidomide. This biomarker was incorrectly assigned to the lenalidomide compartment in a one-compartment model, conflating drug disposition with a physiological marker. Additionally, the model relied on abstract-only data, where summary statistics stood in for a fitted pharmacokinetic model. Extracted — lenalidomide: CL/F 12 L/h, V/F 68.8 L, ktr 13.5 h-1, CL 30 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lenalidomide, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Hughes JH et al., Population pharmacokinetics of lenalido…, British journal of clinical… (2019)
  ·  DOI: [10.1111/bcp.13873](https://doi.org/10.1111/bcp.13873)

<div class="pk-model-meta" hidden drug="lenalidomide" model-id="Lenalidomide_Hughes2019_reference" status="rejected" stale="false" population="adults with B-cell malignancies (multiple myeloma, CLL, AML, ALL)" measured-compound="lenalidomide" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| apparent clearance | `Q27` · CL/F | 12 | L/h | 3.3333333333333333e-06 | [l] / [h] | not captured | exact (1.0) | Hughes_2019:abstract, Hughes_2019:abstract | — | not captured |
| apparent volume of distribution | `Q76` · V/F | 68.8 | L | 0.0688 | [l] | not captured | exact (1.0) | Hughes_2019:abstract, Hughes_2019:abstract | — | not captured |
| transit rate constant | `Q306` · ktr | 13.5 | h-1 | 0.00375 | [1] / [h] | not captured | exact (1.0) | Hughes_2019:abstract, Hughes_2019:abstract | — | not captured |
| creatinine clearance | `Q22` · CL | 30 | mL/min | 5e-07 | [ml] / [min] | not captured | llm_confirmed (0.6) | Hughes_2019:abstract, Hughes_2019:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `absorption_approximation`: transit absorption (ktr=0.00375/s, n=0) folded to first-order ka = ktr/(n+1) = 0.00375/s — same mean absorption time, no delay phase

**Interpretation flags:**
- unit_dimension_mismatch: 'lenalidomide clearance' → Q22 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('lenalidomide clearance', value 22) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenalidomide
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hughes_2019_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent clearance]` | 12 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance]` | not captured | 12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 68.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | not captured | 68.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance]` | 30 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance]` | not captured | 90 | only_one_extracted |
| `gpt-oss-120b` | `parameters[reduction in lenalidomide clearance]` | not captured | 22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[transit rate constant]` | 13.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[transit rate constant]` | not captured | 13.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lenalidomide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lenalidomide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hughes_2019:abstract', 'Hughes_2019:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hughes_2019:abstract', 'Hughes_2019:abstract'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Hughes_2019:abstract', 'Hughes_2019:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hughes_2019:abstract', 'Hughes_2019:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.8 L/h | not captured | not captured | ['Hughes_2019:abstract', 'Hughes_2019:abstract'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12 L/h | not captured | not captured | ['Hughes_2019:abstract', 'Hughes_2019:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 68.8 L | not captured | not captured | ['Hughes_2019:abstract', 'Hughes_2019:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | fail | lenalidomide (or metabolite) | creatinine clearance | not captured | disposition label(s) name a biomarker, not lenalidomide: 'creatinine clearance' |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=lenalidomide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lenalidomide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hughes_2019` / `Hughes_2019::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lenalidomide/models/modelica/Lenalidomide_Hughes2019_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lenalidomide/models/modelica/Lenalidomide_Hughes2019_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lenalidomide/models/modelica/Lenalidomide_Hughes2019_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 13.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 10 mg oral (L04AX04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_lenalidomide/Lenalidomide_Hughes2019_reference/Lenalidomide_Hughes2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_lenalidomide/Lenalidomide_Hughes2019_reference/Lenalidomide_Hughes2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Lenalidomide_Hughes2019_reference_params.json` · controls `Lenalidomide_Hughes2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:03 UTC</sub>
