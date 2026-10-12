<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/&quot;},{&quot;label&quot;:&quot;Schlachter_2026 \u00b7 phase_1_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Schlachter_2026_2_MMD&quot;,&quot;label&quot;:&quot;Schlachter_2026_2 \u00b7 MMD&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/pd_Schlachter_2026_2_MMD.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atogepant — `Atogepant_Schlachter2026_phase_1_model`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The atogepant record was quarantined because clearance, volume of distribution, absorption rate constant, lag time and both intercompartmental rate constants had no source values and library placeholder values were substituted.**

Although the paper reports apparent parameters for atogepant (CL/F 19.82 L/h, V1/F 73.52 L, Q/F 2.75 L/h, V2/F 47.97 L, ka 2.44 /h, ALAG 0.30 h), the model builder substituted placeholder values for the missing clearance, volume of distribution, absorption rate constant, lag time and both intercompartmental rate constants, so the model was held back rather than published with invented numbers. The builder also assumed F=1 and Fm=1 without molar correction, and defaulted ka even though it was not reported in the source, which was judged not acceptable. The covariate effects defined in the record, such as the female sex effect on CL/F (-0.19) and the famotidine pre-treatment effect on relative bioavailability (-0.15), were not exercised in simulation; only the reference individual was simulated. A second reader disagreed on where the -0.19 female sex effect belongs, reading it as an effect on CL/F sex covariate rather than on female_sex_on_cl_f, and read no value for the absolute bioavailability parameter. Extracted — atogepant: kabs 2.44, CL/F 19.8, V1/F 73.5, Q/F 2.75, V2/F 48, tlag 0.3, Frel -0.15.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atogepant, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:36:13.729055+00:00) predates the upstream re-run (2026-10-07 06:23:55.690380+00:00). Current validate status: `needs_review`.

## Citation
Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5)

## Model component
<dbs-pgx drug="atogepant" model-id="Atogepant_Schlachter2026_phase_1_model" status="needs_review" stale="true" population="healthy participants and patients with migraine" measured-compound="atogepant" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant [ka (/h)] | `Q49` · kabs | 2.44 | 1/h | 0.0006777777777777778 | 1/h | not captured | boundary_llm_dim_refused (0.8) | Tab2:row2:col1 | — | not captured |
| Apparent clearance healthy participants [CL/F (L/h)] | `Q27` · CL/F | 19.82 | L/h | 5.5055555555555555e-06 | L/h | not captured | llm_confirmed (0.6) | Tab2:row4:col1 | — | not captured |
| Apparent central volume of distribution [V1/F (L)] | `Q290` · V1/F | 73.52 | L | 0.07352 | L | not captured | llm_confirmed (0.6) | Tab2:row6:col1 | — | not captured |
| Apparent first intercompartmental clearance [Q/F (L/h)] | `Q69` · Q/F | 2.75 | L/h | 7.638888888888888e-07 | L/h | not captured | llm_corrected (0.6) | Tab2:row7:col1 | — | not captured |
| Apparent first peripheral volume of distribution [V2/F (L)] | `Q64` · V2 | 47.97 | L | 0.04797 | L | not captured | boundary_compartment (0.9) | Tab2:row8:col1 | — | not captured |
| Lag time [ALAG (h)] | `Q83` · tlag | 0.30 | h | 1080.0 | h | not captured | llm_confirmed (0.6) | Tab2:row11:col1 | — | not captured |
| female_sex_on_cl_f | `Q900` · female_sex_on_cl_f | -0.19 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row12:col1 | — | not captured |
| Famotidine pre-treatment on Frel | `Q87` · Frel | -0.15 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab2:row13:col1 | — | not captured |
| Famotidine pre-treatment on ka | `Q95` · t1/2ka | -0.51 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab2:row15:col1 | — | not captured |
| theta_kabs_weight_power | `Q900` · theta_kabs_weight_power | -0.41 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row34:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- covariate level 'Female sex on CL/F' → Q900:female_sex_on_cl_f = -0.19 (linear_fractional on Q27)
- implicit units: 'Absorption rate constant [ka (/h)]' → 1/h (from the paper text: "The paper states 'derived first-order absorption rate constant (ka) was 2.48/h' and defines the relationship 'ka = Fk0/[")
- implicit units: 'Apparent clearance healthy participants [CL/F (L/h)]' → L/h (from the paper text: "The paper explicitly states 'CL/F ... was 22.9 L/h in healthy participants' and the model equation block shows 'CL/F = .")
- implicit units: 'Apparent central volume of distribution [V1/F (L)]' → L (from the paper text: "The paper explicitly states 'The apparent central volume of distribution (V1/F) was 86.1 L'.")
- implicit units: 'Apparent first intercompartmental clearance [Q/F (L/h)]' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is a flow rate parameter. In population PK, it is standardly expressed in L/h, and the ')
- implicit units: 'Apparent first peripheral volume of distribution [V2/F (L)]' → L (from the popPK convention: 'Volume of distribution (V) is a volumetric parameter. In population PK, it is standardly expressed in L, and the value 4')
- implicit units: 'Lag time [ALAG (h)]' → h (from the paper text: "The paper explicitly states 'lengthened absorption lag time from 0.276 to 0.46 h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atogepant
- bound model equation to Q40 (Fab): F = 86.1 * (bodyweight/76.8)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'phase 1 model' subgroup of Schlachter_2026 (paper reports 3 populations: phase 1 model, phase 2 modela, phase 3 modela)

**Extraction notes:**
- unparsed cell Tab2:row18:col5 = '(−0.669 to −0.654)'
- unparsed cell Tab2:row19:col5 = '(−0.164 to −0.0924)'
- unparsed cell Tab2:row25:col5 = '(−0.305 to −0.266)'
- unparsed cell Tab2:row27:col5 = '(−0.325 to −0.172)'
- unparsed cell Tab2:row29:col5 = '(−0.503 to −0.230)'
- unparsed cell Tab2:row32:col1 = '−0.44/−0.42'
- unparsed cell Tab2:row32:col5 = '(−0.507 to −0.198)'
- LLM selected parameter table(s) 2
- captured model equation F = 86.1 * (bodyweight/76.8)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (12/18 fields) | 6 |
| `gpt-oss:120b` | not confirmed | 0.667 (12/18 fields) | 6 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[famotidine pre-treatment on ka]` | -0.51 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[female_sex_on_cl_f]` | -0.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` | not captured | -0.19 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atogepant | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atogepant | unknown | mismatch |
| `gpt-oss:120b` | `parameters[apparent first peripheral volume of distribution [v2/f (l)]].parameter_id` | Q82 | Q64 | mismatch |
| `gpt-oss:120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[female_sex_on_cl_f]` | -0.19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_sex]` | not captured | -0.19 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | atogepant | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | atogepant | unknown | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row7:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row11:col1'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['Tab2:row15:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.8 L/h | not captured | not captured | ['Tab2:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 73.5 L | not captured | not captured | ['Tab2:row6:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 48 L | not captured | not captured | ['Tab2:row8:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 13 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atogepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schlachter_2026` / `Schlachter_2026::phase_1_model`)
- model: `../../../knowledgebase/drugs/drug_atogepant/models/modelica/_needs_review/Atogepant_Schlachter2026_phase_1_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_atogepant/models/modelica/_needs_review/Atogepant_Schlachter2026_phase_1_model.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:23 UTC</sub>
