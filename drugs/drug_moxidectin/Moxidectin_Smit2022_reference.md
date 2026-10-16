<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;moxidectin&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/&quot;},{&quot;label&quot;:&quot;Smit_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxidectin_Chhonker2023_reference&quot;,&quot;label&quot;:&quot;Chhonker_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Chhonker2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxidectin_Smit2022_reference&quot;,&quot;label&quot;:&quot;Smit_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxidectin/Moxidectin_Smit2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# moxidectin — `Moxidectin_Smit2022_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.63). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 278, model 109); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — moxidectin: tlag 1.64 h, kabs 3.38 /h, CL/F 4.47 L/h, V1/F 136 L, Q/F 10 L/h, V2/F 1.17e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[q/fpop [l/h]].covariate_forms`: this record has none, the second reading ['linear_fractional']; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Smit C et al., Characterization of the Population Phar…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01048-4](https://doi.org/10.1007/s40262-021-01048-4)

<div class="pk-model-meta" hidden drug="moxidectin" model-id="Moxidectin_Smit2022_reference" status="needs_review" stale="false" population="adults infected with Strongyloides stercoralis" measured-compound="moxidectin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag [h] | `Q83` · tlag | 1.64 | h | 5904.0 | [h] | 1.6 | llm_confirmed (0.6) | Tab2:row2:col1 | — | 0.1 (None% RSE) |
| Ka [/h] | `Q49` · kabs | 3.38 | /h | 0.0009388888888888888 | [1] / [h] | 11 | llm_confirmed (0.6) | Tab2:row3:col1 | — | 0.672 (14% RSE) |
| CL/Fpop [L/h] | `Q27` · CL/F | 4.47 | L/h | 1.2416666666666667e-06 | [l] / [h] | 7.6 | llm (0.6) | Tab2:row4:col1 | — | 0.625 (8.6% RSE) |
| V1/Fpop [L] | `Q290` · V1/F | 136 | L | 0.136 | [l] | 3.4 | llm (0.6) | Tab2:row5:col1 | — | 0.297 (9.2% RSE) |
| Q/Fpop [L/h] | `Q69` · Q/F | 10.0 | L/h | 2.777777777777778e-06 | [l] / [h] | 4.5 | llm (0.6) | Tab2:row6:col1 | — | 0.343 (11% RSE) |
| V2/Fpop [L] | `Q82` · V2/F | 1172 | L | 1.172 | [l] | 11 | llm (0.6) | Tab2:row7:col1 | — | 0.779 (11% RSE) |
| wt_on_q_f | `Q900` · wt_on_q_f | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row12:col1 | — | not captured |
| theta_q314_wt | `Q900` · theta_q314_wt | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row9:col1 | — | not captured |
| theta_q900_wt | `Q900` · theta_q900_wt | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row10:col1 | — | not captured |
| theta_q314_wt | `Q900` · theta_q314_wt | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ωTlag' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωKa' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωCL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωV1/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωQ/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωV2/F' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional errorb' routed out of structural estimates ('Residual variability')
- dropped value-less row: 'Parameter'
- covariate level 'WT on Q/F' → Q900:wt_on_q_f = 0.75 (linear_fractional on Q27)
- dropped value-less row: 'AGE'
- dropped value-less row: 'CI'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'CL/Fpop'
- dropped value-less row: 'Ka'
- dropped value-less row: 'Q/F'
- dropped value-less row: 'Q/Fpop'
- dropped value-less row: 'Tlag'
- dropped value-less row: 'V1/F'
- dropped value-less row: 'V1/Fpop'
- dropped value-less row: 'V2/F'
- dropped value-less row: 'V2/Fpop'
- dropped value-less row: 'WT'
- dropped value-less row: 'ω'
- dropped value-less row: '%RSE'
- NIL: refused to back-fill base 'omega_cov' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=moxidectin

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '1.63 (1.56–1.70)'
- unparsed cell Tab2:row3:col2 = '3.35 (2.53–4.44)'
- unparsed cell Tab2:row4:col2 = '4.47 (3.63–5.39)'
- unparsed cell Tab2:row5:col2 = '136 (126–146)'
- unparsed cell Tab2:row6:col2 = '10.0 (9.10–11.0)'
- unparsed cell Tab2:row7:col2 = '1169 (875–1523)'
- unparsed cell Tab2:row16:col2 = '0.604 (0.355–0.850)'
- unparsed cell Tab2:row17:col2 = '0.627 (0.519–0.724)'
- unparsed cell Tab2:row18:col2 = '0.291 (0.220–0.379)'
- unparsed cell Tab2:row19:col2 = '0.344 (0.236–0.445)'
- unparsed cell Tab2:row20:col2 = '0.743 (0.436–0.976)'
- unparsed cell Tab2:row22:col2 = '0.169 (0.144–0.199)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.63 (17/27 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[q/fpop [l/h]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_wt]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_wt]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_wt]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_f_wt]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_wt]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/fpop [l]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v2/fpop [l]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[wt_on_q_f]` | 0.75 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 278.0 | 277.899 | 0.9996 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.47 L/h | not captured | not captured | ['Tab2:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 136 L | not captured | not captured | ['Tab2:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.17e+03 L | not captured | not captured | ['Tab2:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=moxidectin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 278.0 | 109.40477102897422 | 0.3935 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_moxidectin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Smit_2022` / `Smit_2022::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_moxidectin/models/modelica/Moxidectin_Smit2022_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_moxidectin/models/modelica/Moxidectin_Smit2022_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_moxidectin/models/modelica/Moxidectin_Smit2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_modelica.zip" download>Moxidectin_Smit2022_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_fmi.zip" download>Moxidectin_Smit2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_matlab.zip" download>Moxidectin_Smit2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_matlab_simbio.zip" download>Moxidectin_Smit2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_sbml.zip" download>Moxidectin_Smit2022_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_cellml.zip" download>Moxidectin_Smit2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference.svg" alt="Moxidectin_Smit2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2 mg, single dose, first-order absorption (ka 3.38 /h, lag 98.4 min, F 1). Doses in the paper: 2–12 mg.

<dbs-fmusim paramsurl="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_moxidectin/Moxidectin_Smit2022_reference/Moxidectin_Smit2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Moxidectin_Smit2022_reference_params.json` · controls `Moxidectin_Smit2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:54 UTC</sub>
