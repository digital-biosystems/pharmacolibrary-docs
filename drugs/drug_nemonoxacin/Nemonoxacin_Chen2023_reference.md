<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;nemonoxacin&quot;,&quot;href&quot;:&quot;drugs/drug_nemonoxacin/&quot;},{&quot;label&quot;:&quot;Chen_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nemonoxacin_Wu2024_reference&quot;,&quot;label&quot;:&quot;Wu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nemonoxacin/Nemonoxacin_Wu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nemonoxacin_Chen2023_reference&quot;,&quot;label&quot;:&quot;Chen_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nemonoxacin — `Nemonoxacin_Chen2023_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.151, model 0.000866); f use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (Fab and equation variable), so that value has no SI equivalent. Extracted — nemonoxacin: CL 10.3 L/h, V2 103 L, Q 2 L/h, V3 28 L, kabs 2.2 1/h, tlag 0.19 h, Fab 0.88 F, V 7.1e+03 mL/kg.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Chen Y et al., Integrative population pharmacokinetic/…, Frontiers in pharmacology (2023)
  ·  DOI: [10.3389/fphar.2023.912962](https://doi.org/10.3389/fphar.2023.912962)

<div class="pk-model-meta" hidden drug="nemonoxacin" model-id="Nemonoxacin_Chen2023_reference" status="needs_review" stale="false" population="Chinese subjects (healthy and community-acquired pneumonia patients)" measured-compound="nemonoxacin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 10.3 | L/h | 2.861111111111111e-06 | L/h | not captured | exact (1.0) | T2:row2:col3, T2:row2:col6 | — | not captured |
| V2 | `Q64` · V2 | 103 | L | 0.10300000000000001 | L | not captured | exact (1.0) | T2:row3:col3, T2:row3:col6 | — | not captured |
| Q | `Q30` · Q | 2.0 | L/h | 5.555555555555555e-07 | L/h | not captured | exact (1.0) | T2:row4:col3, T2:row4:col6 | — | 0.0013 (75% RSE) |
| V3 | `Q77` · V3 | 28 | L | 0.028 | L | not captured | exact (1.0) | T2:row5:col3, T2:row5:col6 | — | not captured |
| KA | `Q49` · kabs | 2.2 | 1/h | 0.0006111111111111112 | 1/h | not captured | exact (1.0) | T2:row6:col1, T2:row6:col3, T2:row6:col6 | — | not captured |
| TLAG | `Q83` · tlag | 0.19 | h | 684.0 | h | not captured | exact (1.0) | T2:row7:col3, T2:row7:col6 | — | not captured |
| Food(F) | `Q40` · Fab | 0.88 | F | not captured | [f] | not captured | llm (0.6) | T2:row13:col3, T2:row13:col6 | — | not captured |
| πCL2 | `Q900` · equation variable | -4 | % | not captured | [%] | not captured | llm (0.6) | T2:row18:col6 | — | not captured |
| distribution volume | `Q61` · V | 7101.8 | mL/kg | 0.497126 | L | not captured | review_gapfill (0.7) | Wu_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table representations disagree for 'CL'; source reconciliation required
- column 'bias (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'V2'; source reconciliation required
- table representations disagree for 'Q'; source reconciliation required
- table representations disagree for 'V3'; source reconciliation required
- column 'unit / mean' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'KA'; source reconciliation required
- table representations disagree for 'TLAG'; source reconciliation required
- table representations disagree for 'CLcr (CL)'; source reconciliation required
- table representations disagree for 'Food (TLAG)'; source reconciliation required
- table representations disagree for 'SEX (V2)'; source reconciliation required
- table representations disagree for 'Food (Ka)'; source reconciliation required
- table representations disagree for 'DisStat (V3)'; source reconciliation required
- table representations disagree for 'Food(F)'; source reconciliation required
- table representations disagree for 'ωCL2'; source reconciliation required
- table representations disagree for 'ωV22'; source reconciliation required
- table representations disagree for 'ωV32'; source reconciliation required
- table representations disagree for 'ωKA2'; source reconciliation required
- table representations disagree for 'πCL2'; source reconciliation required
- table representations disagree for 'ωTLAG2'; source reconciliation required
- table representations disagree for 'ωF2'; source reconciliation required
- table representations disagree for 'σprop2'; source reconciliation required
- table representations disagree for 'σadd2'; source reconciliation required
- dropped unlinked row (NIL): 'CLcr (CL)' — extend the ontology if this is a real PK parameter (source ['T2:row8:col3', 'T2:row8:col6'])
- unit_dimension_mismatch: 'Food (TLAG)' → Q83 (unit 'dimensionless' vs ontology '[time]') — route to review
- dropped duplicate Q83 ('Food (TLAG)', value '1.6') — already have one for this compound
- unit_dimension_mismatch: 'SEX (V2)' → Q64 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q64 ('SEX (V2)', value '0.89') — already have one for this compound
- dropped unlinked row (NIL): 'Food (Ka)' — extend the ontology if this is a real PK parameter (source ['T2:row11:col3', 'T2:row11:col6'])
- unit_dimension_mismatch: 'DisStat (V3)' → Q77 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q77 ('DisStat (V3)', value '1.2') — already have one for this compound
- unit_dimension_unknown: 'F' (Fab)
- implicit units: 'CL' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CL in the provided text or table captions. However, CL is a clearance p')
- implicit units: 'V2' → L (from the popPK convention: 'The paper does not explicitly state the unit for V2. V2 is a volume of distribution parameter. A value of 103 is consist')
- implicit units: 'Q' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for Q. Q is an intercompartmental clearance parameter. A value of 2.0 is co')
- implicit units: 'V3' → L (from the popPK convention: 'The paper does not explicitly state the unit for V3. V3 is a peripheral volume of distribution parameter. A value of 28 ')
- implicit units: 'KA' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for KA. KA is a first-order absorption rate constant. A value of 2.2 is con')
- implicit units: 'TLAG' → h (from the popPK convention: 'The paper does not explicitly state the unit for TLAG. TLAG is a lag time parameter. A value of 0.19 is consistent with ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nemonoxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Wu_2024's review values (primary lacked it)

**Extraction notes:**
- table T2: unbound_uncertainty
- table T2: ragged_grid
- table T2: unparsed_numeric_cell
- table T2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col3', 'T2:row2:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row4:col3', 'T2:row4:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col3', 'T2:row6:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wu_2024:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col3', 'T2:row3:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row5:col3', 'T2:row5:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T2:row7:col3', 'T2:row7:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.3 | not captured | not captured | ['T2:row2:col3', 'T2:row2:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.3 L/h | not captured | not captured | ['T2:row2:col3', 'T2:row2:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 497 L | not captured | not captured | ['Wu_2024:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 103 L | not captured | not captured | ['T2:row3:col3', 'T2:row3:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=nemonoxacin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 0.151 | 0.0008658835756787687 | not captured | unresolved concentration unit (exp 'Cmax/MIC', sim 'kg/m3') |
| T1_cmax | reference | skipped | 7.32 | 0.0008658835756787687 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4.9 | 0.0008658835756787687 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16.3 | 0.0008658835756787687 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.0005 | 0.0008658835756787687 | 1.7318 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000125 | 0.0008658835756787687 | 6.9271 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0005 | 0.0008658835756787687 | 1.7318 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00025 | 0.0008658835756787687 | 3.4635 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 74 | 0.0008658835756787687 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 83 | 0.0008658835756787687 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nemonoxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2023` / `Chen_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nemonoxacin/models/modelica/Nemonoxacin_Chen2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nemonoxacin/models/modelica/Nemonoxacin_Chen2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nemonoxacin/models/modelica/Nemonoxacin_Chen2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_modelica.zip" download>Nemonoxacin_Chen2023_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_fmi.zip" download>Nemonoxacin_Chen2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_matlab.zip" download>Nemonoxacin_Chen2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_matlab_simbio.zip" download>Nemonoxacin_Chen2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_sbml.zip" download>Nemonoxacin_Chen2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_cellml.zip" download>Nemonoxacin_Chen2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference.svg" alt="Nemonoxacin_Chen2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 500 mg, single dose, first-order absorption (ka 2.2 /h, lag 11.4 min, F 0.9). Doses in the paper: 500, 750 mg.

<dbs-fmusim paramsurl="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_reference/Nemonoxacin_Chen2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Nemonoxacin_Chen2023_reference_params.json` · controls `Nemonoxacin_Chen2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:19 UTC</sub>
