<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;adinazolam&quot;,&quot;href&quot;:&quot;drugs/drug_adinazolam/&quot;},{&quot;label&quot;:&quot;Venkatakrishnan_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adinazolam_Venkatakrishnan2005_reference&quot;,&quot;label&quot;:&quot;Venkatakrishnan_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# adinazolam — `Adinazolam_Venkatakrishnan2005_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The adinazolam parent–metabolite record was rejected because the absorption rate constant ka (and Tlag) were left at library defaults instead of values from the paper, and the model structure did not match the measured N-desmethyl adinazolam output.**

The record, built from the abstract only, reports summary statistics for adinazolam and N-desmethyl adinazolam (e.g. Vm/F 100 L, CLm/F 321 mL/min, t1/2z 2.8 h) but no fitted model. The model output was set to the parent drug's concentration in its central compartment rather than to the measured metabolite N-desmethyl adinazolam, and the structure was a single-compartment model with extravascular dosing instead of a parent–metabolite structure. The builder defaulted ka and Tlag, assumed F=1 and Fm=1 without molar correction, and used first-order depot input; the ka default is not supported by the paper and the deviation adjudication found defaulted parameters and invented absorption unacceptable. Extracted — adinazolam: Vm/F 106 L, t1/2z 2.9 hours, CLm/F 444 mL/min; N-desmethyl adinazolam: Vm/F 100 L, t1/2z 2.8 hours, CLm/F 321 mL/min; alprazolam: V 77 L, t1/2z 14.6 hours, CL 84 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has adinazolam, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `adinazolam`, measured `N-desmethyl adinazolam`.

## Citation
Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005)
  ·  DOI: [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105)

<div class="pk-model-meta" hidden drug="adinazolam" model-id="Adinazolam_Venkatakrishnan2005_reference" status="rejected" stale="false" population="healthy male volunteers" measured-compound="N-desmethyl adinazolam" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of distribution (L), adinazolam | `Q367` · Vm/F | 106 | L | 0.106 | [l] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| volume of distribution (L), NDMAD | `Q367` · Vm/F | 100 | L | 0.1 | [l] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| volume of distribution (L), alprazolam | `Q61` · V | 77 | L | 0.077 | [l] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| elimination half-life (hours), adinazolam | `Q57` · t1/2z | 2.9 | hours | 10440.0 | [h] | not captured | llm (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| elimination half-life (hours), NDMAD | `Q57` · t1/2z | 2.8 | hours | 10080.0 | [h] | not captured | llm (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| elimination half-life (hours), alprazolam | `Q57` · t1/2z | 14.6 | hours | 52560.0 | [h] | not captured | llm (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| clearance (mL/min), adinazolam | `Q351` · CLm/F | 444 | mL/min | 7.4e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| clearance (mL/min), NDMAD | `Q351` · CLm/F | 321 | mL/min | 5.35e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| clearance (mL/min), alprazolam | `Q22` · CL | 84 | mL/min | 1.4e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped PD-category row 'effect site equilibration half-life' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Venkatakrishnan_2005:abstract'])
- metabolite n-desmethyl adinazolam: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite n-desmethyl adinazolam: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=N-desmethyl adinazolam
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 0 linked by role; re-tagged N-desmethyl adinazolam→parent ×3, N-desmethyl adinazolam→alprazolam ×3
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Venkatakrishnan_2005_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.062 (1/16 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[clearance (ml/min), adinazolam]` | 444 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (ml/min), alprazolam]` | 84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (ml/min), ndmad]` | 321 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 444 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (hours), adinazolam]` | 2.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (hours), alprazolam]` | 14.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (hours), ndmad]` | 2.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | not captured | 2.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (l), adinazolam]` | 106 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (l), alprazolam]` | 77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (l), ndmad]` | 100 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 106 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | adinazolam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | N-desmethyl adinazolam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.04 L/h | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 77 L | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=N-desmethyl adinazolam) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_shared_parameters | not captured | pass | 3 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_adinazolam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Venkatakrishnan_2005` / `Venkatakrishnan_2005::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_adinazolam/models/modelica/Adinazolam_Venkatakrishnan2005_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_adinazolam/models/modelica/Adinazolam_Venkatakrishnan2005_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_adinazolam/models/modelica/Adinazolam_Venkatakrishnan2005_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference/Adinazolam_Venkatakrishnan2005_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference/Adinazolam_Venkatakrishnan2005_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Adinazolam_Venkatakrishnan2005_reference_params.json` · controls `Adinazolam_Venkatakrishnan2005_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:56 UTC</sub>
