<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;emicizumab&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/&quot;},{&quot;label&quot;:&quot;Retout_2020 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emicizumab_Retout2020_estimate&quot;,&quot;label&quot;:&quot;Retout_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/Emicizumab_Retout2020_estimate.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# emicizumab — `Emicizumab_Retout2020_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The emicizumab model was quarantined because its clearance, volume of distribution, absorption rate constant and lag time had no values in the source, so placeholder numbers were substituted.**

The record lists CL/F 28.7, V/F 25.9 and KA 72.5 for emicizumab, but the model builder left clearance, volume of distribution, absorption rate constant and absorption lag time without extracted values, so library placeholder numbers stood in for them. The absorption rate constant was invented by defaulting, which the adjudication marked as not acceptable. The model also assumes bioavailability F=1 and Fm=1 with no molar correction, i.e. an apparent parameterization. Extracted — emicizumab: CL/F 28.7, V/F 25.9, kabs 72.5.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has emicizumab, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:37:52.741800+00:00) predates the upstream re-run (2026-10-05 18:44:43.985850+00:00). Current validate status: `extracted`.

## Citation
Retout S et al., Population Pharmacokinetic Analysis and…, Clinical pharmacokinetics (2020)
  ·  DOI: [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z)

<div class="pk-model-meta" hidden drug="emicizumab" model-id="Emicizumab_Retout2020_estimate" status="extracted" stale="true" population="adult and pediatric persons with hemophilia A" measured-compound="emicizumab" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 0.272 | L/h | 7.555555555555557e-08 | L/h | not captured | exact (1.0) | Tab4:row2:col2 | — | 28.7 (None% RSE) |
| V/F | `Q76` · V/F | 10.4 | L | 0.010400000000000001 | L | not captured | exact (1.0) | Tab4:row3:col2 | — | 25.9 (None% RSE) |
| KA | `Q49` · kabs | 0.536 | 1/h | 0.0001488888888888889 | 1/h | not captured | exact (1.0) | Tab4:row4:col2 | — | 72.5 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variabilitya')
- table section iiv: 'V/F' routed out of structural estimates ('Inter-individual variabilitya')
- table section iiv: 'KA' routed out of structural estimates ('Inter-individual variabilitya')
- table section iiv: 'Correlation CL/F–V/F' routed out of structural estimates ('Inter-individual variabilitya')
- dropped unlinked row (NIL): 'Fixed effects (BW 70 kg; ALB 45 g/L; age &lt; 30 years)' — extend the ontology if this is a real PK parameter (source ['Tab4:row1:col2'])
- dropped duplicate Q27 ('Effect of BW on CL/F', value '0.911') — already have one for this compound
- dropped duplicate Q76 ('Effect of BW on V/F', value '1.00') — already have one for this compound
- dropped unlinked row (NIL): 'Condition numbere' — extend the ontology if this is a real PK parameter (source ['Tab4:row20:col2'])
- implicit units: 'CL/F' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CL/F in the provided text or table captions. However, CL/F is an appare')
- implicit units: 'V/F' → L (from the popPK convention: 'The paper does not explicitly state the unit for V/F in the provided text or table captions. V/F is an apparent volume o')
- implicit units: 'KA' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for KA in the provided text or table captions. KA is a first-order absorpti')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=emicizumab
- population split: 'estimate' subgroup of Retout_2020 (paper reports 4 populations: 1.5 mg/kg qw, 3 mg/kg q2w, 6 mg/kg q4w, estimate)
- molar mass: none found for 'emicizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab4:row6:col3 = '8.6b'
- unparsed cell Tab4:row7:col3 = '8.9b'
- unparsed cell Tab4:row8:col3 = '14.7b'
- unparsed cell Tab4:row9:col3 = '31.8c'
- unparsed cell Tab4:row13:col2 = '1.57 × 10–2'
- unparsed cell Tab4:row13:col4 = '0.696 × 10–2 to 2.44 × 10–2'
- unparsed cell Tab4:row15:col2 = '− 0.215'
- unparsed cell Tab4:row15:col4 = '− 0.298 to − 0.132'
- unparsed cell Tab4:row16:col2 = '6.51 × 10–3'
- unparsed cell Tab4:row16:col4 = '4.43 × 10–3 to 8.59 × 10–3'
- unparsed cell Retout_2020_table_5:row1:col2 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row1:col4 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row1:col6 = '25.1 [13.9–41.4]'
- unparsed cell Retout_2020_table_5:row2:col2 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row2:col4 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row2:col6 = '1.27 [0.897–3.80]'
- unparsed cell Retout_2020_table_5:row3:col2 = '53.9 [30.9–82.4]'
- unparsed cell Retout_2020_table_5:row3:col4 = '57.0 [33.6–85.9]'
- unparsed cell Retout_2020_table_5:row3:col6 = '65.9 [40.4–97.7]'
- unparsed cell Retout_2020_table_5:row4:col2 = '2.50 [2.25–3.00]'
- unparsed cell Retout_2020_table_5:row4:col4 = '3.50 [3.00–5.25]'
- unparsed cell Retout_2020_table_5:row4:col6 = '4.50 [2.50–10.0]'
- unparsed cell Retout_2020_table_5:row5:col2 = '49.9 [28.4–78.7]'
- unparsed cell Retout_2020_table_5:row5:col4 = '45.6 [24.9–75.0]'
- unparsed cell Retout_2020_table_5:row5:col6 = '36.5 [17.7–64.7]'
- unparsed cell Retout_2020_table_5:row6:col2 = '1.07 [1.03–1.15]'
- unparsed cell Retout_2020_table_5:row6:col4 = '1.24 [1.12–1.49]'
- unparsed cell Retout_2020_table_5:row6:col6 = '1.74 [1.36–2.85]'
- unparsed cell Retout_2020_table_5:row7:col2 = '366 [211–568]'
- unparsed cell Retout_2020_table_5:row7:col4 = '733 [423–1135]'
- unparsed cell Retout_2020_table_5:row7:col6 = '1465 [845–2271]'
- unparsed cell Retout_2020_table_5:row8:col2 = '52.3 [30.2–81.1]'
- unparsed cell Retout_2020_table_5:row8:col4 = '52.3 [30.2–81.1]'
- unparsed cell Retout_2020_table_5:row8:col6 = '52.3 [30.2–81.1]'
- companion parameter table 5 transcribed (24 record(s), model stage 'final')
- LLM selected parameter table(s) 4, 5
- skipped illustrative/example figure caption(s) Fig2 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl/f]` | 0.272 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 0.272 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.536 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 0.536 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | 10.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | not captured | 10.4 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | emicizumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | emicizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 26.8 | 26.503 | 0.9889 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.272 L/h | not captured | not captured | ['Tab4:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 10.4 L | not captured | not captured | ['Tab4:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 26.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 26.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.61 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.61 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_emicizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Retout_2020` / `Retout_2020::estimate`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_emicizumab/models/modelica/_needs_review/Emicizumab_Retout2020_estimate.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_emicizumab/models/modelica/_needs_review/Emicizumab_Retout2020_estimate.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_modelica.zip" download>Emicizumab_Retout2020_estimate_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_fmi.zip" download>Emicizumab_Retout2020_estimate_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_matlab.zip" download>Emicizumab_Retout2020_estimate_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_matlab_simbio.zip" download>Emicizumab_Retout2020_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_sbml.zip" download>Emicizumab_Retout2020_estimate_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_cellml.zip" download>Emicizumab_Retout2020_estimate_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate.svg" alt="Emicizumab_Retout2020_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 105 mg, single dose, first-order absorption (ka 0.536 /h, F 1). Doses in the paper: 105, 210, 420 mg.

<dbs-fmusim paramsurl="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Emicizumab_Retout2020_estimate_params.json` · controls `Emicizumab_Retout2020_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 18:44 UTC</sub>
