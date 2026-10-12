<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Pyronaridine&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/&quot;},{&quot;label&quot;:&quot;Ayyoub_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyronaridine_Tan2009_reference&quot;,&quot;label&quot;:&quot;Tan_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pyronaridine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pyronaridine — `Pyronaridine_Ayyoub2015_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 295, model 6.88); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — pyronaridine: CL/F 377 liters/day, V2/F 2.23e+03 liters, V3/F 3.23e+03 liters, Q/F 804 liters/day, kabs 17.9 day−1, V/F 156 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pyronaridine (as pyronaridine tetraphosphate, Pyramax granules with artesunate), the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `pyronaridine (as pyronaridine tetraphosphate, Pyramax granules with artesunate)`, measured `pyronaridine`.

## Citation
Ayyoub A et al., Population Pharmacokinetics of Pyronari…, Antimicrobial agents and ch… (2015)
  ·  DOI: [10.1128/AAC.02004-15](https://doi.org/10.1128/AAC.02004-15)

<div class="pk-model-meta" hidden drug="Pyronaridine" model-id="Pyronaridine_Ayyoub2015_reference" status="needs_review" stale="false" population="pediatric malaria patients younger than 16 years with uncomplicated malaria" measured-compound="pyronaridine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (liters/day) | `Q27` · CL/F | 377 | liters/day | 4.363425925925926e-06 | [l] / [d] | not captured | exact (1.0) | T2:row2:col1, T2:row2:col2, T2:row2:col4, T2:row2:col5 | — | 0.166 (None% RSE) |
| V2/F (liters) | `Q82` · V2/F | 2230 | liters | 2.23 | [l] | not captured | exact (1.0) | T2:row3:col1, T2:row3:col2, T2:row3:col4, T2:row3:col5 | — | 0.993 (None% RSE) |
| V3/F (liters) | `Q78` · V3/F | 3230 | liters | 3.23 | [l] | not captured | exact (1.0) | T2:row4:col1, T2:row4:col2, T2:row4:col4, T2:row4:col5 | — | 0.256 (None% RSE) |
| Q/F (liters/day) | `Q69` · Q/F | 804 | liters/day | 9.305555555555555e-06 | [l] / [d] | not captured | exact (1.0) | T2:row5:col1, T2:row5:col2, T2:row5:col4, T2:row5:col5 | — | not captured |
| Ka (day−1) | `Q49` · kabs | 17.9 | day−1 | 0.0002071759259259259 | [1] / [d] | not captured | exact (1.0) | T2:row6:col1, T2:row6:col2, T2:row6:col4, T2:row6:col5 | — | not captured |
| 6_age_on_v3_f | `Q900` · 6_age_on_v3_f | 0.624 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row7:col1, T2:row7:col2, T2:row7:col4, T2:row7:col5 | — | not captured |
| theta_kabs_formulation | `Q900` · theta_kabs_formulation | 1.63 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row8:col1, T2:row8:col2, T2:row8:col4, T2:row8:col5 | — | not captured |
| V/FPRQ (L) | `Q76` · V/F | 156.0 | L | 0.156 | L | not captured | review_gapfill (0.7) | Chairat_2018:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('IIV')
- table section iiv: 'V2/F' routed out of structural estimates ('IIV')
- table section iiv: 'V3/F' routed out of structural estimates ('IIV')
- covariate level 'θ6 age on V3/F' → Q900:6_age_on_v3_f = 0.624 (linear_fractional on Q27)
- dropped duplicate Q49 ('Ka', value '0.433') — already have one for this compound
- routed 'RV (additive error)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate category for t1/2α from footnote/prose kept as documentation only (['T2:footnote'])
- dropped value-less row: 'CL'
- dropped value-less row: 'V2'
- dropped value-less row: 'V3'
- dropped value-less row: 'Q'
- dropped value-less row: 'RV'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pyronaridine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q76 (V/F) from Chairat_2018's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.529 (9/17 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[6_age_on_v3_f]` | 0.624 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_f_age]` | not captured | 0.624 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fprq]` | 156.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | pyronaridine (as pyronaridine tetraphosphate, Pyramax granules with artesunate) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pyronaridine | unknown | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col4', 'T2:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row5:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.7 L/h | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col4', 'T2:row2:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 156 L | not captured | not captured | ['Chairat_2018:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.23e+03 L | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=pyronaridine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 295.20000000000005 | 6.883982118240299 | 0.0233 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pyronaridine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ayyoub_2015` / `Ayyoub_2015::reference`)
- model: `../../../knowledgebase/drugs/drug_pyronaridine/models/modelica/Pyronaridine_Ayyoub2015_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_pyronaridine/models/modelica/Pyronaridine_Ayyoub2015_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_pyronaridine/models/modelica/Pyronaridine_Ayyoub2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_modelica.zip" download>Pyronaridine_Ayyoub2015_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_fmi.zip" download>Pyronaridine_Ayyoub2015_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_matlab.zip" download>Pyronaridine_Ayyoub2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_matlab_simbio.zip" download>Pyronaridine_Ayyoub2015_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_sbml.zip" download>Pyronaridine_Ayyoub2015_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_cellml.zip" download>Pyronaridine_Ayyoub2015_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference.svg" alt="Pyronaridine_Ayyoub2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 420 mg, single dose, first-order absorption (ka 0.746 /h, F 1). Doses in the paper: 420, 630, 840 mg.

<dbs-fmusim paramsurl="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Pyronaridine_Ayyoub2015_reference_params.json` · controls `Pyronaridine_Ayyoub2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:25 UTC</sub>
