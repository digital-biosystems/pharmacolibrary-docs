<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ribavirin&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/&quot;},{&quot;label&quot;:&quot;Wade_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ribavirin_Jin2012_mean_of_25_leverage_runs_cv&quot;,&quot;label&quot;:&quot;Jin_2012_mean_of_25_leverage_runs_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Jin2012_population_mean_in_final_pk_model&quot;,&quot;label&quot;:&quot;Jin_2012_population_mean_in_final_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_population_mean_in_final_pk_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Wade2006_reference&quot;,&quot;label&quot;:&quot;Wade_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Wade2006_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ribavirin — `Ribavirin_Wade2006_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.867). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The ribavirin three-compartment model's terminal half-life (43.3 h) is far from the paper's reported 303 h, and bioavailability F and Tlag were left at library defaults instead of the paper's estimates.**

Simulated as the paper dosed it, the model's terminal half-life is 43.3177412913841 h against the paper's 303 h (ratio 0.143), outside tolerance. The model builder substituted library defaults for the bioavailability F and the absorption lag time Tlag, which affect the simulated profile but are not supported by Wade_2006. Additionally, a reported unit on the bioavailability parameter (the high-fat-meal condition) could not be converted to SI, so that parameter reached the model without an SI value; the deviations check could not be adjudicated and returned 'defaulted_parameters: not acceptable'. Extracted — ribavirin: CL 19.8 l h -1, V1 472 l, Q 34.4 l h -1, V2 4.91e+03 l, Q3 97.7 l h -1, V3 871 l, Fab 1 high-fat meal, D1 710 h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[d1 (fasting and standard meal) (h) d1 (high-fat meal)].parameter_id`: this record has Q310, the second reading Q83; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Wade JR et al., Pharmacokinetics of ribavirin in patien…, British journal of clinical… (2006)
  ·  DOI: [10.1111/j.1365-2125.2006.02704.x](https://doi.org/10.1111/j.1365-2125.2006.02704.x)

<div class="pk-model-meta" hidden drug="ribavirin" model-id="Ribavirin_Wade2006_reference" status="needs_review" stale="false" population="adults with hepatitis C virus" measured-compound="ribavirin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL* (l h -1 ) | `Q22` · CL | 19.8 | l h -1 | 5.500000000000001e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | tab_0:row2:col2, tab_0:row2:col3, tab_0:row2:col5 | — | 16 (None% RSE) |
| LBW on CL | `Q900` · equation variable | 0.00869 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_0:row3:col2, tab_0:row3:col3 | — | not captured |
| V 1 (l) | `Q63` · V1 | 472 | l | 0.47200000000000003 | [l] | not captured | space_fold (0.95) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col3 | — | 25 (None% RSE) |
| Q2 (l h -1 ) | `Q30` · Q | 34.4 | l h -1 | 9.555555555555555e-06 | [l] / [h] | not captured | special_case (0.95) | tab_0:row5:col2, tab_0:row5:col3, tab_0:row5:col5 | — | 19 (None% RSE) |
| V 2 * (l) | `Q64` · V2 | 4910 | l | 4.91 | [l] | not captured | llm (0.6) | tab_0:row6:col1, tab_0:row6:col2, tab_0:row6:col3 | — | not captured |
| Q3 (l h -1 ) | `Q308` · Q3 | 97.7 | l h -1 | 2.713888888888889e-05 | [l] / [h] | not captured | exact (1.0) | tab_0:row8:col2, tab_0:row8:col3, tab_0:row8:col5 | — | 35 (None% RSE) |
| V 3 (l) | `Q77` · V3 | 871 | l | 0.871 | [l] | not captured | space_fold (0.95) | tab_0:row9:col1, tab_0:row9:col2, tab_0:row9:col3 | — | 43 (None% RSE) |
| F 1 (fasting and standard meal) F 1 (high-fat meal) | `Q40` · Fab | 1 | high-fat meal | not captured | [h] · [fatmeal] · [igh] | not captured | llm (0.6) | tab_0:row10:col1, tab_0:row10:col2, tab_0:row10:col3, tab_0:row10:col5, tab_0:row10:col7 | — | not captured |
| D1 (fasting and standard meal) (h) D1 (high-fat meal) (h) | `Q310` · D1 | 710 | h | 2556000.0 | [h] | not captured | llm_confirmed (0.6) | tab_0:row11:col5, tab_0:row11:col7 | — | 8.5 (None% RSE) |
| K a (fasting) (h -1 ) | `Q49` · kabs | 1.45 | h -1 | 0.0004027777777777778 | [1] / [h] | not captured | space_fold (0.95) | tab_0:row12:col2, tab_0:row12:col3 | — | 30 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'CL* (l h -1 )' routed out of structural estimates ('Interindividual')
- table section iiv: 'V 1 (l)' routed out of structural estimates ('Interindividual')
- table section iiv: 'Q2 (l h -1 )' routed out of structural estimates ('Interindividual')
- table section iiv: 'V 2 * (l)' routed out of structural estimates ('Interindividual')
- table section iiv: 'Q3 (l h -1 )' routed out of structural estimates ('Interindividual')
- table section iiv: 'V 3 (l)' routed out of structural estimates ('Interindividual')
- table section iiv: 'F 1 (fasting and standard meal) F 1 (high-fat meal)' routed out of structural estimates ('Interindividual')
- table section iov: 'F 1 (fasting and standard meal) F 1 (high-fat meal)' routed out of structural estimates ('Interoccasion')
- table section iiv: 'D1 (fasting and standard meal) (h) D1 (high-fat meal) (h)' routed out of structural estimates ('Interindividual')
- table section iov: 'D1 (fasting and standard meal) (h) D1 (high-fat meal) (h)' routed out of structural estimates ('Interoccasion')
- table section iiv: 'K a (standard meal) (h -1 )' routed out of structural estimates ('Interindividual')
- table section iov: 'K a (standard meal) (h -1 )' routed out of structural estimates ('Interoccasion')
- dropped duplicate Q64 ('LBW on V 2', value '0.011') — already have one for this compound
- unit_dimension_unknown: 'high-fat meal' (Fab)
- dropped duplicate Q49 ('K a (standard meal) (h -1 )', value '0.767') — already have one for this compound
- dropped duplicate Q49 ('K a (high-fat meal) (h -1 )', value '0.99') — already have one for this compound
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ribavirin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row11:col2 = '0.498 0.740'
- unparsed cell tab_0:row11:col3 = '8.5 11'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[d1 (fasting and standard meal) (h) d1 (high-fat meal)].parameter_id` | Q310 | Q83 | mismatch |
| `gpt-oss-120b` | `parameters[lbw on cl]` | 0.00869 | not captured | only_one_extracted |

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
| C1_half_life_beta | pass | 303.0 | 281.538 | 0.9292 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col5'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['tab_0:row11:col5', 'tab_0:row11:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row12:col2', 'tab_0:row12:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row9:col1', 'tab_0:row9:col2', 'tab_0:row9:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 19.8 | not captured | not captured | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 19.8 L/h | not captured | not captured | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 472 L | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.91e+03 L | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=ribavirin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 303.0 | 43.3177412913841 | 0.143 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 303.0 | 43.3177412913841 | 0.143 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ribavirin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wade_2006` / `Wade_2006::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ribavirin/models/modelica/Ribavirin_Wade2006_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ribavirin/models/modelica/Ribavirin_Wade2006_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ribavirin/models/modelica/Ribavirin_Wade2006_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_modelica.zip" download>Ribavirin_Wade2006_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_fmi.zip" download>Ribavirin_Wade2006_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_matlab.zip" download>Ribavirin_Wade2006_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_matlab_simbio.zip" download>Ribavirin_Wade2006_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_sbml.zip" download>Ribavirin_Wade2006_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_cellml.zip" download>Ribavirin_Wade2006_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference.svg" alt="Ribavirin_Wade2006_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 1.45 /h, F 0.9). Doses in the paper: 600, 800, 1000, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ribavirin/Ribavirin_Wade2006_reference/Ribavirin_Wade2006_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ribavirin_Wade2006_reference_params.json` · controls `Ribavirin_Wade2006_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:48 UTC</sub>
