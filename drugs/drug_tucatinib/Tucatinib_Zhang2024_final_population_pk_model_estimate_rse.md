<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tucatinib&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/&quot;},{&quot;label&quot;:&quot;Zhang_2024 \u00b7 final_population_pk_model_estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tucatinib_Zhang2024_final_population_pk_model_estimate_rse&quot;,&quot;label&quot;:&quot;Zhang_2024_final_population_pk_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_healthy_participants_300_mg_bid&quot;,&quot;label&quot;:&quot;Zhang_2024_healthy_participants_300_mg_bid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_her2_mcrcn_68&quot;,&quot;label&quot;:&quot;Zhang_2024_her2_mcrcn_68&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mcrcn_68.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tucatinib — `Tucatinib_Zhang2024_final_population_pk_model_estimate_rse`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 16.2, model 3.04).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — tucatinib: CL/F 112 L/h, V1/F 125 L, Q/F 89.9 L/h, V2/F 635 L, kabs 0.424 1/h, tlag 0.392 h.

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0)

<div class="pk-model-meta" hidden drug="tucatinib" model-id="Tucatinib_Zhang2024_final_population_pk_model_estimate_rse" status="needs_review" stale="false" population="healthy participants and patients with HER2+ metastatic breast or colorectal cancer" measured-compound="tucatinib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h), healthy participants | `Q27` · CL/F | 112 | L/h | 3.111111111111111e-05 | L/h | 4.3 | llm_confirmed (0.6) | Tab1:row1:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 125 | L | 0.125 | [l] | 11.3 | exact (1.0) | Tab1:row2:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 89.9 | L/h | 2.4972222222222226e-05 | [l] / [h] | 5.4 | exact (1.0) | Tab1:row3:col1 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 635 | L | 0.635 | [l] | 4.0 | exact (1.0) | Tab1:row4:col1 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.424 | 1/h | 0.00011777777777777778 | 1/h | 5.3 | exact (1.0) | Tab1:row5:col1 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.392 | h | 1411.2 | [h] | 0.56 | exact (1.0) | Tab1:row6:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Cov (CL/F, Vc/F)' routed out of structural estimates ('BSV correlations')
- table section residual_error: 'Additive residual error SD (ng/mL)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional residual error CV' routed out of structural estimates ('Residual variability')
- implicit units: 'CL/F (L/h), healthy participants' → L/h (from the paper text: 'The paper reports CL/F as a “geometric mean of 89.0 L/h,” establishing the unit for apparent clearance.')
- implicit units: 'Ka (1/h)' → 1/h (from the paper text: 'The paper states “Ka = 0.4 h−1” for the popPK model.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tucatinib
- population split: 'final population pk model estimate (%rse)' subgroup of Zhang_2024 (paper reports 4 populations: final population pk model estimate (%rse), healthy participants (300 mg bid)n = 128, her2+ mbcn = 52, her2+ mcrcn = 68)

**Extraction notes:**
- unparsed cell Tab1:row1:col2 = '112 (105, 119)'
- unparsed cell Tab1:row2:col2 = '104 (62.4, 145)'
- unparsed cell Tab1:row3:col2 = '83.4 (72.4, 97)'
- unparsed cell Tab1:row4:col2 = '659 (594, 740)'
- unparsed cell Tab1:row5:col2 = '0.385 (0.333, 0.453)'
- unparsed cell Tab1:row6:col2 = '0.395 (0.385, 0.445)'
- unparsed cell Tab1:row16:col2 = '0.274 (0.0326, 0.507)'
- unparsed cell Tab1:row18:col2 = '1.06 (0.0693, 1.57)'
- unparsed cell Tab1:row19:col2 = '0.326 (0.309, 0.343)'
- unparsed cell Zhang_2024_table_2:row1:col1 = '5770 [2100, 14,200]'
- unparsed cell Zhang_2024_table_2:row1:col3 = '3230 [1310, 9210]'
- unparsed cell Zhang_2024_table_2:row1:col5 = '2730 [541, 5760]'
- unparsed cell Zhang_2024_table_2:row2:col1 = '759 [221, 1840]'
- unparsed cell Zhang_2024_table_2:row2:col3 = '402 [141, 960]'
- unparsed cell Zhang_2024_table_2:row2:col5 = '480 [59, 1120]'
- unparsed cell Zhang_2024_table_2:row3:col1 = '303 [102, 870]'
- unparsed cell Zhang_2024_table_2:row3:col3 = '188 [42.9, 675]'
- unparsed cell Zhang_2024_table_2:row3:col5 = '88.4 [20.3, 263]'
- unparsed cell Zhang_2024_table_2:row4:col1 = '1.94 [1.36, 4.59]'
- unparsed cell Zhang_2024_table_2:row4:col3 = '2.45 [1.38, 5.32]'
- unparsed cell Zhang_2024_table_2:row4:col5 = '1.34 [1.13, 2.38]'
- unparsed cell Zhang_2024_table_2:row5:col1 = '1.59 [1.14, 3.99]'
- unparsed cell Zhang_2024_table_2:row5:col3 = '1.92 [1.16, 3.53]'
- unparsed cell Zhang_2024_table_2:row5:col5 = '1.19 [1.07, 2.12]'
- unparsed cell Zhang_2024_table_2:row6:col1 = '2.38 [1.49, 5.94]'
- unparsed cell Zhang_2024_table_2:row6:col3 = '2.96 [1.94, 6.81]'
- unparsed cell Zhang_2024_table_2:row6:col5 = '1.57 [1.23, 2.76]'
- unparsed cell Zhang_2024_table_2:row7:col1 = '52 [21.2, 143]'
- unparsed cell Zhang_2024_table_2:row7:col3 = '92.9 [32.6, 230]'
- unparsed cell Zhang_2024_table_2:row7:col5 = '110 [52.1, 555]'
- unparsed cell Zhang_2024_table_2:row8:col1 = '838 [257, 2190]'
- unparsed cell Zhang_2024_table_2:row8:col3 = '2130 [1680, 4690]'
- unparsed cell Zhang_2024_table_2:row8:col5 = '752 [409, 5650]'
- unparsed cell Zhang_2024_table_2:row9:col1 = '16.2 [7.48, 58.9]'
- unparsed cell Zhang_2024_table_2:row9:col3 = '21.3 [11.9, 53.5]'
- unparsed cell Zhang_2024_table_2:row9:col5 = '8.76 [5.22, 21]'
- companion parameter table 2 transcribed (27 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (16/16 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab1:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row4:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab1:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 112 L/h | not captured | not captured | ['Tab1:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 125 L | not captured | not captured | ['Tab1:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 635 L | not captured | not captured | ['Tab1:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=tucatinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.6 | 0.0003035767976770454 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.8 | 0.0003035767976770454 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.80 | 0.0003035767976770454 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 16.2 | 3.0439222147322087 | 0.1879 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 21.3 | 3.0439222147322087 | 0.1429 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tucatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2024` / `Zhang_2024::final_population_pk_model_estimate_rse`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tucatinib/models/modelica/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tucatinib/models/modelica/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tucatinib/models/modelica/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_modelica.zip" download>Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_fmi.zip" download>Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_matlab.zip" download>Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_matlab_simbio.zip" download>Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_sbml.zip" download>Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_cellml.zip" download>Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.svg" alt="Tucatinib_Zhang2024_final_population_pk_model_estimate_rse diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.424 /h, lag 23.5 min, F 1). Dose in the paper: 300 mg.

<dbs-fmusim paramsurl="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_params.json` · controls `Tucatinib_Zhang2024_final_population_pk_model_estimate_rse_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:33 UTC</sub>
