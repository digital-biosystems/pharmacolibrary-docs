<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;triflusal&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/&quot;},{&quot;label&quot;:&quot;Park_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triflusal_Park2014_reference&quot;,&quot;label&quot;:&quot;Park_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triflusal — `Triflusal_Park2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The triflusal model was rejected because the output variable was the parent compartment instead of the measured metabolite HTB, and the model structure did not match the parent-metabolite topology.

<div class="pk-model-meta" hidden drug="triflusal" model-id="Triflusal_Park2014_reference" status="rejected" stale="false" population="healthy Korean male volunteers" measured-compound="HTB" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Park SM, Lee J, Seong SJ, Park JG, Gwon MR, Lim MS et al. Population pharmacokinetic and pharmacodynamic modeling of transformed binary effect data of triflusal in healthy Korean male volunteers: a randomized, open-label, multiple dose, crossover study. BMC pharmacology & toxicology 15:75 (2014).
  ·  DOI: [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75)

## Population and dosing

**Population:** healthy Korean male volunteers · condition healthy · age group adult · n = &gt;=34.

**Dosing:** 600, 900 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed triflusal, measured HTB.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_triflusal/Triflusal_Park2014_reference/Triflusal_Park2014_reference.svg" alt="Triflusal_Park2014_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θ 1 | CLm/F | 2.7 | L/h |
| θ 4 | V | 17.4 | L |
| θ 2 | allometric_exponent | 2.7 | weight/71.65 |
| k f = θ 3 | kfm | 15.1 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The triflusal model was rejected because the output variable was the parent compartment instead of the measured metabolite HTB, and the model structure did not match the parent-metabolite topology.**

The model output was set to the central compartment concentration rather than the measured metabolite HTB concentration. The model structure used a one-compartment enteral design instead of the required parent-metabolite topology. Additionally, the allometric exponent parameter had a unit that could not be converted to SI, preventing a valid value from being assigned. Extracted — HTB: CLm/F 2.7 L/h, V 17.4 L, allometric_exponent 2.7 weight/71.65, kfm 15.1 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has triflusal → htb (metabolism), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θ 1 | `Q351` · CLm/F | 2.7 | L/h | 7.5e-07 | m3/s | L/h | exact (1) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3 |
| θ 4 | `Q61` · V | 17.4 | L | 0.0174 | m3 | L | exact (1) | Tab2:row6:col2, Tab2:row6:col3 |
| θ 2 | `Q319` · allometric_exponent | 2.7 | weight/71.65 |  |  | weight/71.65 | llm (0.6) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col3 |
| k f = θ 3 | `Q305` · kfm | 15.1 | 1/h | 0.004194 | 1/s | 1/h | exact (1) | Tab2:row9:col2, Tab2:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F | Q27 | exact |

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['triflusal', 'htb', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k f = θ 3]` |  | 15.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k f = θ 3]` | 15.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 1]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 1].parameter_id` | Q351 | Q900 | mismatch |
| `gpt-oss-120b` | `parameters[θ 2]` |  | 2.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 2]` | 2.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 4]` | 17.4 |  | only_one_extracted |

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
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Tab2:row9:col2', 'Tab2:row9:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row6:col2', 'Tab2:row6:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.4 L | ['Tab2:row6:col2', 'Tab2:row6:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=HTB) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 15.1 /h, F 1). Doses in the paper: 600, 900 mg.

<dbs-fmusim paramsurl="drugs/drug_triflusal/Triflusal_Park2014_reference/Triflusal_Park2014_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_triflusal/Triflusal_Park2014_reference/Triflusal_Park2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Triflusal_Park2014_reference_params.json` · controls `Triflusal_Park2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriflusal%5D%20Triflusal_Park2014_reference&body=Drug%3A%20triflusal%0ARecord%3A%20Triflusal_Park2014_reference%0APaper%3A%20Park_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_triflusal/Triflusal_Park2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 16:56 UTC</sub>
