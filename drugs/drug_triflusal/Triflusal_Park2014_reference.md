<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;triflusal&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/&quot;},{&quot;label&quot;:&quot;Park_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triflusal_Park2014_reference&quot;,&quot;label&quot;:&quot;Park_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triflusal — `Triflusal_Park2014_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The triflusal model was rejected because the output variable was the parent compartment instead of the measured metabolite HTB, and the model structure did not match the parent-metabolite topology.**

The model output was set to the central compartment concentration rather than the measured metabolite HTB concentration. The model structure used a one-compartment enteral design instead of the required parent-metabolite topology. Additionally, the allometric exponent parameter had a unit that could not be converted to SI, preventing a valid value from being assigned. Extracted — HTB: CLm/F 2.7 L/h, V 17.4 L, allometric_exponent 2.7 weight/71.65, kfm 15.1 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has triflusal → htb (metabolism), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> **Dose compound ≠ measured compound:** dosed `triflusal`, measured `HTB`.

## Citation
Park SM et al., Population pharmacokinetic and pharmaco…, BMC pharmacology & toxicolo… (2014)
  ·  DOI: [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75)

<div class="pk-model-meta" hidden drug="triflusal" model-id="Triflusal_Park2014_reference" status="rejected" stale="false" population="healthy Korean male volunteers" measured-compound="HTB" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ 1 | `Q351` · CLm/F | 2.7 | L/h | 7.5e-07 | L/h | not captured | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3 | — | not captured |
| θ 4 | `Q61` · V | 17.4 | L | 0.0174 | L | not captured | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3 | — | not captured |
| θ 2 | `Q319` · allometric_exponent | 2.7 | weight/71.65 | not captured | [weight] / [71.65] | not captured | llm (0.6) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col3 | — | not captured |
| k f = θ 3 | `Q305` · kfm | 15.1 | 1/h | 0.004194444444444444 | 1/h | not captured | exact (1.0) | Tab2:row9:col2, Tab2:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F | Q27 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual error (σ2)b')
- column 'description (units)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'weight/71.65' (allometric_exponent)
- unit_dimension_unknown: 'weight/71.65' (kfm)
- dropped unlinked row (NIL): 'θ 5' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3'])
- dropped unlinked row (NIL): 'θ 6' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col2', 'Tab2:row12:col3'])
- routed 'ω 1 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω 3 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω 4 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω 5 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'θ 1' → L/h (from the popPK convention: 'The parameter is identified as Total clearance (CL). In population PK modeling, clearance is conventionally expressed in')
- implicit units: 'θ 4' → L (from the popPK convention: 'The parameter is identified as Volume of distribution (V1). In population PK modeling, volume of distribution is convent')
- implicit units: 'k f = θ 3' → 1/h (from the popPK convention: 'The parameter is identified as a first-order rate constant (kf). First-order rate constants are conventionally expressed')
- metabolite htb: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'θ 4' Q63→Q61 for HTB — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=HTB
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'This approach may enable the identification of influential factors for HTB formation process including first-pass metabo')
- bound model equation to Q27 (CL/F): CL/F = θ 1 * (weight/71.65)^θ4
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 7 linked by role; re-tagged parent→HTB ×31
- review gap-fill skipped: this record measures 'HTB', not triflusal — the review values are the parent's
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- unparsed cell Tab2:row5:col4 = '0.1998 (0.1995 – 0.2002)'
- unparsed cell Tab2:row6:col4 = '0.840 (0.830 – 0.850)'
- unparsed cell Tab2:row8:col4 = '8.281 (8.267 – 8.295)'
- unparsed cell Tab2:row9:col1 = 'TV of k f (h-1)'
- unparsed cell Tab2:row9:col4 = '0.345 (0.341 – 0.348)'
- unparsed cell Tab2:row11:col4 = '85.19 (84.98 – 85.40)'
- unparsed cell Tab2:row12:col4 = '20.70 (20.32 – 21.08)'
- unparsed cell Tab2:row15:col4 = '14.4 (14.3 – 14.5)'
- unparsed cell Tab2:row16:col4 = '8.6 (8.4 – 8.8)'
- unparsed cell Tab2:row17:col4 = '73.5 (72.8 – 74.1)'
- unparsed cell Tab2:row19:col1 = 'BSV for EC 50'
- unparsed cell Tab2:row19:col4 = '21.4 (21.2 – 21.5)'
- unparsed cell Tab2:row22:col4 = '0.0977 (0.0973 – 0.0981)'
- LLM selected parameter table(s) 2
- captured model equation CL/F = θ 1 * (weight/71.65)^θ4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.308 (4/13 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['triflusal', 'htb', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k f = θ 3]` | not captured | 15.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k f = θ 3]` | 15.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 1]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 1].parameter_id` | Q351 | Q900 | mismatch |
| `gpt-oss-120b` | `parameters[θ 2]` | not captured | 2.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 2]` | 2.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 4]` | 17.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['triflusal', 'htb', 'metabolism']] | [] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ 1].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[θ 2].parameter_id` | Q319 | Q61 | mismatch |
| `gpt-oss:120b` | `parameters[θ 4].parameter_id` | Q61 | Q49 | mismatch |
| `gpt-oss:120b` | `parameters[θ 5]` | not captured | 4.0 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | triflusal | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | HTB | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row9:col2', 'Tab2:row9:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.4 L | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=HTB) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_triflusal/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Park_2014` / `Park_2014::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_triflusal/models/modelica/Triflusal_Park2014_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_triflusal/models/modelica/Triflusal_Park2014_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_triflusal/models/modelica/Triflusal_Park2014_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 15.1 /h, F 1). Doses in the paper: 600, 900 mg.

<dbs-fmusim paramsurl="drugs/drug_triflusal/Triflusal_Park2014_reference/Triflusal_Park2014_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_triflusal/Triflusal_Park2014_reference/Triflusal_Park2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Triflusal_Park2014_reference_params.json` · controls `Triflusal_Park2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 16:56 UTC</sub>
