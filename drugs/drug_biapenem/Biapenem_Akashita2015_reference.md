<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;biapenem&quot;,&quot;href&quot;:&quot;drugs/drug_biapenem/&quot;},{&quot;label&quot;:&quot;Akashita_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Biapenem_Chen2024v2_reference&quot;,&quot;label&quot;:&quot;Chen_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_biapenem/Biapenem_Chen2024v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Biapenem_Fu2024_reference&quot;,&quot;label&quot;:&quot;Fu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_biapenem/Biapenem_Fu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Biapenem_Akashita2015_reference&quot;,&quot;label&quot;:&quot;Akashita_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_biapenem/Biapenem_Akashita2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# biapenem — `Biapenem_Akashita2015_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Bioavailability was left at library defaults instead of being reported or extracted from the continuous hemodiafiltration study.**

The model builder replaced the bioavailability fraction with a library default rather than using an estimate from Akashita_2015. This omission left four parameters covered instead of the expected six, specifically excluding the peripheral transfer constants from the final record. The record therefore relies on unreported bioavailability values that are not supported by the source paper's data. Extracted — biapenem: V 13.5 L, k12 0.75 hr−1, k21 0.95 hr−1, kel 0.39 hr−1, k13 0.13 hr−1, CL_CRRT 1.53 L/hr, CL 4.86 L/hr, kabs 0.5 /h.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Akashita G et al., PK/PD analysis of biapenem in patients…, Journal of pharmaceutical h… (2015)
  ·  DOI: [10.1186/s40780-015-0031-6](https://doi.org/10.1186/s40780-015-0031-6)

<div class="pk-model-meta" hidden drug="biapenem" model-id="Biapenem_Akashita2015_reference" status="needs_review" stale="false" population="patients undergoing continuous hemodiafiltration" measured-compound="biapenem" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V 1 (L) | `Q61` · V | 13.46 | L | 0.013460000000000001 | [l] | not captured | space_fold (0.95) | Tab3:row0:col2, Tab3:row0:col3, Tab3:row0:col4, Tab3:row0:col5, Tab3:row0:col6, Tab3:row0:col7, Tab3:row0:col8, Tab3:row0:col9, Tab3:row0:col10 | — | not captured |
| k 12 (hr−1) | `Q301` · k12 | 0.75 | hr−1 | 0.00020833333333333332 | [1] / [h] | not captured | space_fold (0.95) | Tab3:row1:col2, Tab3:row1:col3, Tab3:row1:col4, Tab3:row1:col5, Tab3:row1:col6, Tab3:row1:col7, Tab3:row1:col8, Tab3:row1:col9, Tab3:row1:col10 | — | not captured |
| k 21 (hr−1) | `Q302` · k21 | 0.95 | hr−1 | 0.00026388888888888886 | [1] / [h] | not captured | space_fold (0.95) | Tab3:row2:col2, Tab3:row2:col3, Tab3:row2:col4, Tab3:row2:col5, Tab3:row2:col6, Tab3:row2:col7, Tab3:row2:col8, Tab3:row2:col9, Tab3:row2:col10 | — | not captured |
| k 10 (hr−1) | `Q47` · kel | 0.39 | hr−1 | 0.00010833333333333334 | [1] / [h] | not captured | space_fold (0.95) | Tab3:row3:col2, Tab3:row3:col3, Tab3:row3:col4, Tab3:row3:col5, Tab3:row3:col6, Tab3:row3:col7, Tab3:row3:col8, Tab3:row3:col9, Tab3:row3:col10 | — | not captured |
| k 13 (hr−1) | `Q303` · k13 | 0.13 | hr−1 | 3.611111111111111e-05 | [1] / [h] | not captured | space_fold (0.95) | Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4, Tab3:row4:col5, Tab3:row4:col6, Tab3:row4:col7, Tab3:row4:col8, Tab3:row4:col9, Tab3:row4:col10 | — | not captured |
| CLCHDF (L/hr) | `Q357` · CL_CRRT | 1.53 | L/hr | 4.25e-07 | [l] / [h] | not captured | llm (0.6) | Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4, Tab3:row5:col5, Tab3:row5:col6, Tab3:row5:col7, Tab3:row5:col8, Tab3:row5:col9, Tab3:row5:col10 | — | not captured |
| CLnon-CHDF (L/hr) | `Q22` · CL | 4.86 | L/hr | 1.3500000000000002e-06 | [l] / [h] | not captured | llm (0.6) | Tab3:row6:col2, Tab3:row6:col3, Tab3:row6:col4, Tab3:row6:col5, Tab3:row6:col6, Tab3:row6:col7, Tab3:row6:col8, Tab3:row6:col9, Tab3:row6:col10 | — | not captured |
| Ka (final) | `Q49` · kabs | 0.5 | /h | 0.0001388888888888889 | 1/h | not captured | review_gapfill (0.7) | Chen_2024_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'a' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'e' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'f' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'g' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=biapenem
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V 1 (L)' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Chen_2024_2's review values (primary lacked it)

**Extraction notes:**
- transposed table Tab3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab3:row0:col1 = 'V 1 (L)'
- unparsed cell Tab3:row1:col1 = 'k 12 (hr−1)'
- unparsed cell Tab3:row2:col1 = 'k 21 (hr−1)'
- unparsed cell Tab3:row3:col1 = 'k 10 (hr−1)'
- unparsed cell Tab3:row4:col1 = 'k 13 (hr−1)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Tab3:row6:col5', 'Tab3:row6:col6', 'Tab3:row6:col7', 'Tab3:row6:col8', 'Tab3:row6:col9', 'Tab3:row6:col10'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col2', 'Tab3:row1:col3', 'Tab3:row1:col4', 'Tab3:row1:col5', 'Tab3:row1:col6', 'Tab3:row1:col7', 'Tab3:row1:col8', 'Tab3:row1:col9', 'Tab3:row1:col10'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4', 'Tab3:row2:col5', 'Tab3:row2:col6', 'Tab3:row2:col7', 'Tab3:row2:col8', 'Tab3:row2:col9', 'Tab3:row2:col10'] |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4', 'Tab3:row4:col5', 'Tab3:row4:col6', 'Tab3:row4:col7', 'Tab3:row4:col8', 'Tab3:row4:col9', 'Tab3:row4:col10'] |
| C5_dimension_Q357 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4', 'Tab3:row5:col5', 'Tab3:row5:col6', 'Tab3:row5:col7', 'Tab3:row5:col8', 'Tab3:row5:col9', 'Tab3:row5:col10'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4', 'Tab3:row3:col5', 'Tab3:row3:col6', 'Tab3:row3:col7', 'Tab3:row3:col8', 'Tab3:row3:col9', 'Tab3:row3:col10'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chen_2024_2:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row0:col2', 'Tab3:row0:col3', 'Tab3:row0:col4', 'Tab3:row0:col5', 'Tab3:row0:col6', 'Tab3:row0:col7', 'Tab3:row0:col8', 'Tab3:row0:col9', 'Tab3:row0:col10'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.86 | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Tab3:row6:col5', 'Tab3:row6:col6', 'Tab3:row6:col7', 'Tab3:row6:col8', 'Tab3:row6:col9', 'Tab3:row6:col10'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.86 L/h | not captured | not captured | ['Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4', 'Tab3:row6:col5', 'Tab3:row6:col6', 'Tab3:row6:col7', 'Tab3:row6:col8', 'Tab3:row6:col9', 'Tab3:row6:col10'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 13.5 L | not captured | not captured | ['Tab3:row0:col2', 'Tab3:row0:col3', 'Tab3:row0:col4', 'Tab3:row0:col5', 'Tab3:row0:col6', 'Tab3:row0:col7', 'Tab3:row0:col8', 'Tab3:row0:col9', 'Tab3:row0:col10'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=biapenem) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['k12', 'k21'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_biapenem/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Akashita_2015` / `Akashita_2015::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_biapenem/models/modelica/Biapenem_Akashita2015_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_biapenem/models/modelica/Biapenem_Akashita2015_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_biapenem/models/modelica/Biapenem_Akashita2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_modelica.zip" download>Biapenem_Akashita2015_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_fmi.zip" download>Biapenem_Akashita2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_matlab.zip" download>Biapenem_Akashita2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_matlab_simbio.zip" download>Biapenem_Akashita2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_sbml.zip" download>Biapenem_Akashita2015_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_cellml.zip" download>Biapenem_Akashita2015_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference.svg" alt="Biapenem_Akashita2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.5 /h, F 0.9). Dose in the paper: 300 mg.

<dbs-fmusim paramsurl="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_biapenem/Biapenem_Akashita2015_reference/Biapenem_Akashita2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Biapenem_Akashita2015_reference_params.json` · controls `Biapenem_Akashita2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:25 UTC</sub>
