<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Wei_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methotrexate_Pan2026_reference&quot;,&quot;label&quot;:&quot;Pan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pan2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Pignon1994_reference&quot;,&quot;label&quot;:&quot;Pignon_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pignon1994_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Wei2025_reference&quot;,&quot;label&quot;:&quot;Wei_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Wei2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Methotrexate_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_van2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methotrexate — `Methotrexate_Wei2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**F use library defaults, not estimates from this paper; t6_deviations.**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (prop_error), so that value has no SI equivalent. Extracted — methotrexate: CL 8.5 L/h, Q 0.04 L/h, V1 33.5 L, V 1.15 L, prop_error 73.8 proportional, V2 5.32 L, kabs 0.268 day−1, tlag 0.36 hour.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Wei S et al., Population pharmacokinetics of high-dos…, Frontiers in pharmacology (2025)
  ·  DOI: [10.3389/fphar.2025.1578033](https://doi.org/10.3389/fphar.2025.1578033)

<div class="pk-model-meta" hidden drug="methotrexate" model-id="Methotrexate_Wei2025_reference" status="needs_review" stale="false" population="adult patients with primary central nervous system lymphoma" measured-compound="methotrexate" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 8.50 | L/h | 2.361111111111111e-06 | [l] / [h] | not captured | exact (1.0) | tab_3:row2:col1, tab_3:row2:col3, tab_3:row2:col5, tab_3:row2:col7 | — | 26.81 (None% RSE) |
| Q 1 (L/h) | `Q30` · Q | 0.04 | L/h | 1.1111111111111112e-08 | [l] / [h] | not captured | llm (0.5) | tab_3:row3:col1, tab_3:row3:col3, tab_3:row3:col5, tab_3:row3:col7 | — | 99.92 (None% RSE) |
| Vc (L) | `Q63` · V1 | 33.52 | L | 0.03352 | [l] | not captured | exact (1.0) | tab_3:row5:col1, tab_3:row5:col3, tab_3:row5:col5, tab_3:row5:col7 | — | 21.26 (None% RSE) |
| V P2 (L) | `Q61` · V | 1.15 | L | 0.00115 | [l] | not captured | llm (0.5) | tab_3:row7:col1, tab_3:row7:col3, tab_3:row7:col5, tab_3:row7:col7 | — | not captured |
| σ (proportional) | `Q316` · prop_error | 73.75 | proportional | not captured | [proportional] | not captured | llm (0.5) | tab_3:row18:col1, tab_3:row18:col3, tab_3:row18:col5, tab_3:row18:col7 | — | not captured |
| V2 | `Q64` · V2 | 5.32 | L | 0.00532 | L | not captured | review_gapfill (0.7) | Blackman_2026:review | — | not captured |
| absorption rate constant | `Q49` · kabs | 0.268 | day−1 | 3.101851851851852e-06 | 1/h | not captured | review_gapfill (0.7) | Pan_2026:review | — | not captured |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296.0 | h | not captured | review_gapfill (0.7) | Tan_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q30 ('Q 2 (L/h)', value '0.09') — already have one for this compound
- dropped duplicate Q63 ('V P1 (L)', value '18.32') — already have one for this compound
- dropped unlinked row (NIL): 'θ eGFR' — extend the ontology if this is a real PK parameter (source ['tab_3:row8:col1', 'tab_3:row8:col3', 'tab_3:row8:col5', 'tab_3:row8:col7'])
- dropped unlinked row (NIL): 'Θ BUN' — extend the ontology if this is a real PK parameter (source ['tab_3:row9:col1', 'tab_3:row9:col3', 'tab_3:row9:col5', 'tab_3:row9:col7'])
- dropped unlinked row (NIL): 'θ ALT' — extend the ontology if this is a real PK parameter (source ['tab_3:row10:col1', 'tab_3:row10:col3', 'tab_3:row10:col5', 'tab_3:row10:col7'])
- dropped unlinked row (NIL): 'θ TP' — extend the ontology if this is a real PK parameter (source ['tab_3:row11:col1', 'tab_3:row11:col5', 'tab_3:row11:col7'])
- dropped unlinked row (NIL): 'θ ABCC4-ABCG2-ADORA2A' — extend the ontology if this is a real PK parameter (source ['tab_3:row12:col7'])
- unit_dimension_unknown: 'proportional' (prop_error)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q64 (V2) from Blackman_2026's review values (primary lacked it)
- gap-filled Q49 (kabs) from Pan_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_3:row2:col2 = '(7.75, 8.66)'
- unparsed cell tab_3:row2:col4 = '(7.15, 9.39)'
- unparsed cell tab_3:row2:col6 = '(7.95, 8.94)'
- unparsed cell tab_3:row2:col8 = '(7.38, 9.71)'
- unparsed cell tab_3:row3:col2 = '(0.03, 0.05)'
- unparsed cell tab_3:row3:col4 = '(0.03, 0.05)'
- unparsed cell tab_3:row3:col6 = '(0.03, 0.05)'
- unparsed cell tab_3:row3:col8 = '(0.03, 0.05)'
- unparsed cell tab_3:row4:col2 = '(0.08, 0.10)'
- unparsed cell tab_3:row4:col4 = '(0.07, 0.11)'
- unparsed cell tab_3:row4:col6 = '(0.08, 0.10)'
- unparsed cell tab_3:row4:col8 = '(0.07, 0.11)'
- unparsed cell tab_3:row5:col2 = '(31.09, 35.69)'
- unparsed cell tab_3:row5:col4 = '(27.53, 39.82)'
- unparsed cell tab_3:row5:col6 = '(31.00, 35.57)'
- unparsed cell tab_3:row5:col8 = '(27.7, 40.44)'
- unparsed cell tab_3:row6:col2 = '(13.86, 21.94)'
- unparsed cell tab_3:row6:col4 = '(12.58, 28.03)'
- unparsed cell tab_3:row6:col6 = '(13.84, 21.87)'
- unparsed cell tab_3:row6:col8 = '(11.77, 30.67)'
- unparsed cell tab_3:row7:col2 = '(1.04, 1.23)'
- unparsed cell tab_3:row7:col4 = '(0.93, 1.36)'
- unparsed cell tab_3:row7:col6 = '(1.04, 1.24)'
- unparsed cell tab_3:row7:col8 = '(0.96, 1.37)'
- unparsed cell tab_3:row8:col2 = '(0.65, 0.70)'
- unparsed cell tab_3:row8:col4 = '(0.54, 0.84)'
- unparsed cell tab_3:row8:col6 = '(0.64, 0.70)'
- unparsed cell tab_3:row8:col8 = '(0.56, 0.85)'
- unparsed cell tab_3:row9:col2 = '(-0.09, -0.06)'
- unparsed cell tab_3:row9:col4 = '(-0.14, -0.03)'
- unparsed cell tab_3:row9:col6 = '(-0.09, -0.06)'
- unparsed cell tab_3:row9:col8 = '(-0.13, -0.02)'
- unparsed cell tab_3:row10:col2 = '(0.02, 0.03)'
- unparsed cell tab_3:row10:col4 = '(0, 0.05)'
- unparsed cell tab_3:row10:col6 = '(0.02, 0.03)'
- unparsed cell tab_3:row10:col8 = '(0.00, 0.05)'
- unparsed cell tab_3:row11:col2 = '(-1.96, -1.41)'
- unparsed cell tab_3:row11:col3 = '-1.64 (-37.89)'
- unparsed cell tab_3:row11:col4 = '(-2.97, -0.5)'
- unparsed cell tab_3:row11:col6 = '(-1.99, -1.44)'
- unparsed cell tab_3:row11:col8 = '(-3.30, -0.31)'
- unparsed cell tab_3:row12:col5 = '-0.09 (-30.63)'
- unparsed cell tab_3:row12:col6 = '(-0.14, -0.03)'
- unparsed cell tab_3:row12:col8 = '(-0.13, -0.04)'
- unparsed cell tab_3:row18:col2 = '(72.24, 75.35)'
- unparsed cell tab_3:row18:col4 = '(69.49, 77.89)'
- unparsed cell tab_3:row18:col6 = '(72.24, 75.34)'
- unparsed cell tab_3:row18:col8 = '(69.66, 78.42)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3', 'tab_3:row2:col5', 'tab_3:row2:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row3:col1', 'tab_3:row3:col3', 'tab_3:row3:col5', 'tab_3:row3:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Pan_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row7:col1', 'tab_3:row7:col3', 'tab_3:row7:col5', 'tab_3:row7:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col3', 'tab_3:row5:col5', 'tab_3:row5:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Blackman_2026:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tan_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.5 | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3', 'tab_3:row2:col5', 'tab_3:row2:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.5 L/h | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col3', 'tab_3:row2:col5', 'tab_3:row2:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.15 L | not captured | not captured | ['tab_3:row7:col1', 'tab_3:row7:col3', 'tab_3:row7:col5', 'tab_3:row7:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 33.5 L | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col3', 'tab_3:row5:col5', 'tab_3:row5:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.32 L | not captured | not captured | ['Blackman_2026:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=methotrexate) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 7 scholar param(s) emitted or defaulted | 7 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_methotrexate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wei_2025` / `Wei_2025::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_methotrexate/models/modelica/Methotrexate_Wei2025_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_methotrexate/models/modelica/Methotrexate_Wei2025_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_methotrexate/models/modelica/Methotrexate_Wei2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_modelica.zip" download>Methotrexate_Wei2025_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_fmi.zip" download>Methotrexate_Wei2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_matlab.zip" download>Methotrexate_Wei2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_matlab_simbio.zip" download>Methotrexate_Wei2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_sbml.zip" download>Methotrexate_Wei2025_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_cellml.zip" download>Methotrexate_Wei2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference.svg" alt="Methotrexate_Wei2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.5 mg, single dose, first-order absorption (ka 0.0112 /h, lag 21.6 min, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 2.5 mg oral (L04AX03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_methotrexate/Methotrexate_Wei2025_reference/Methotrexate_Wei2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Methotrexate_Wei2025_reference_params.json` · controls `Methotrexate_Wei2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 13:24 UTC</sub>
