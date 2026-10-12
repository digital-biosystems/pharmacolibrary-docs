<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;fesoterodine&quot;,&quot;href&quot;:&quot;drugs/drug_fesoterodine/&quot;},{&quot;label&quot;:&quot;Sano_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fesoterodine_Sano2023_reference&quot;,&quot;label&quot;:&quot;Sano_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fesoterodine — `Fesoterodine_Sano2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is fesoterodine's own; they describe 5-hydroxymethyl tolterodine.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 5-hydroxymethyl tolterodine, the second reading 5-HMT; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `fesoterodine`, measured `5-hydroxymethyl tolterodine`.

## Citation
Sano Y et al., Population Pharmacokinetic and Pharmaco…, European journal of drug me… (2023)
  ·  DOI: [10.1007/s13318-023-00818-8](https://doi.org/10.1007/s13318-023-00818-8)

<div class="pk-model-meta" hidden drug="fesoterodine" model-id="Fesoterodine_Sano2023_reference" status="accepted_with_caveats" stale="false" population="pediatric patients with neurogenic detrusor overactivity or overactive bladder" measured-compound="5-hydroxymethyl tolterodine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 5 covariate effects.

**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q351` · CLm/F | 71.4 | L/h | 1.9833333333333335e-05 | [l] / [h] | 6.7 | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3 | — | 0.298 (None% RSE) |
| Vd/F, L | `Q76` · V/F | 73.7 | L | 0.0737 | [l] | 29.7 | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3 | — | not captured |
| ka, h−1 | `Q49` · kabs | 0.0902 | h−1 | 2.5055555555555555e-05 | [1] / [h] | 5.99 | exact (1.0) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3 | — | not captured |
| ALAG, h | `Q83` · tlag | 0.279 | h | 1004.4000000000001 | [h] | 45.1 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3 | — | not captured |
| effect_of_cyp2d6_metabolizer_on_cl_fa | `Q900` · effect_of_cyp2d6_metabolizer_on_cl_fa | 0.534 | not captured | not captured | not captured | 12.5 | not captured (not captured) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3 | — | not captured |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row8:col1, Tab2:row8:col3 | — | not captured |
| theta_q76_weight | `Q900` · theta_q76_weight | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row9:col1, Tab2:row9:col3 | — | not captured |
| theta_cl_f_sex | `Q900` · theta_cl_f_sex | 0.862 | not captured | not captured | not captured | 8.52 | not captured (not captured) | Tab2:row12:col1, Tab2:row12:col2, Tab2:row12:col3 | — | not captured |
| theta_q76_sex | `Q900` · theta_q76_sex | 0.635 | not captured | not captured | not captured | 30.6 | not captured (not captured) | Tab2:row13:col1, Tab2:row13:col2, Tab2:row13:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ωCL/F, % CV' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωCL/F-Vd/F' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωVd/F, % CV' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωCL/F-Ka' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωVd/F-ka' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωka, % CV' routed out of structural estimates ('Inter-individual variance')
- table section residual_error: 'σ, % CV' routed out of structural estimates ('Residual variability')
- routed 'Condition numbera' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Effect of fesoterodine formulations on F' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'])
- covariate level 'Effect of CYP2D6 metabolizer on CL/Fa' → Q900:effect_of_cyp2d6_metabolizer_on_cl_fa = 0.534 (linear_fractional on Q27)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- metabolite 5-hydroxymethyl tolterodine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-hydroxymethyl tolterodine
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vd/F, L' is the general volume)
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 12 linked by role
- review gap-fill skipped: this record measures '5-hydroxymethyl tolterodine', not fesoterodine — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab2:row4:col4 = '63.0, 81.1'
- unparsed cell Tab2:row5:col4 = '10.8, 127'
- unparsed cell Tab2:row6:col4 = '0.0804, 0.105'
- unparsed cell Tab2:row7:col4 = '0.00263, 0.479'
- unparsed cell Tab2:row11:col4 = '0.343, 0.721'
- unparsed cell Tab2:row12:col4 = '0.716, 1.02'
- unparsed cell Tab2:row13:col4 = '0.161, 1.26'
- unparsed cell Tab2:row15:col4 = '37.4, 53'
- unparsed cell Tab2:row16:col4 = '− 0.095, 0.793'
- unparsed cell Tab2:row17:col4 = '72, 211'
- unparsed cell Tab2:row18:col4 = '0.00161, 0.131'
- unparsed cell Tab2:row22:col4 = '31.6, 42.7'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag]` | not captured | 0.279 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | 0.279 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 71.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 71.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of fesoterodine formulations on f]` | not captured | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_cyp2d6_metabolizer_on_cl_fa]` | 0.534 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.0902 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.0902 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp2d6]` | not captured | 0.534 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` | not captured | 0.862 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` | 0.862 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_sex]` | not captured | 0.635 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_sex]` | 0.635 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_weight]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_weight]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` | not captured | 73.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` | 73.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 5-hydroxymethyl tolterodine | 5-HMT | mismatch |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 73.7 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=5-hydroxymethyl tolterodine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 2.55 | 1.9802068228384323e-06 | not captured | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 7.73 | 7.682793239918832 | 0.9939 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fesoterodine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sano_2023` / `Sano_2023::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fesoterodine/models/modelica/Fesoterodine_Sano2023_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fesoterodine/models/modelica/Fesoterodine_Sano2023_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fesoterodine/models/modelica/Fesoterodine_Sano2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_modelica.zip" download>Fesoterodine_Sano2023_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_fmi.zip" download>Fesoterodine_Sano2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference.svg" alt="Fesoterodine_Sano2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2 mg, single dose, first-order absorption (ka 0.0902 /h, lag 16.7 min, F 1). Doses in the paper: 2, 4, 8 mg.

<dbs-fmusim paramsurl="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fesoterodine_Sano2023_reference_params.json` · controls `Fesoterodine_Sano2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:28 UTC</sub>
