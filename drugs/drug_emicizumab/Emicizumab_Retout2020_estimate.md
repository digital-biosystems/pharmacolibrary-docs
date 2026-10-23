<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;emicizumab&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/&quot;},{&quot;label&quot;:&quot;Retout_2020 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emicizumab_Retout2020_estimate&quot;,&quot;label&quot;:&quot;Retout_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emicizumab/Emicizumab_Retout2020_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# emicizumab — `Emicizumab_Retout2020_estimate`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Needs review), but the paper was screened again on 2026-10-05 18:44 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="emicizumab" model-id="Emicizumab_Retout2020_estimate" status="extracted" stale="true" population="adult and pediatric persons with hemophilia A" measured-compound="emicizumab" parameterization="apparent" topology="1C"></div>

## Citation
Retout S, Schmitt C, Petry C, Mercier F, Frey N. Population Pharmacokinetic Analysis and Exploratory Exposure-Bleeding Rate Relationship of Emicizumab in Adult and Pediatric Persons with Hemophilia A. Clinical pharmacokinetics 59(12):1611–1625 (2020).
  ·  DOI: [10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z)

## Population and dosing

**Population:** adult and pediatric persons with hemophilia A · condition hemophilia A · age group mixed · n = 389.

**Dosing:** 105, 210, 420 mg, sc, multiple, every 168 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate.svg" alt="Emicizumab_Retout2020_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F | CL/F | 0.272 | L/h | 28.7 (None% RSE) |
| V/F | V/F | 10.4 | L | 25.9 (None% RSE) |
| KA | kabs | 0.536 | 1/h | 72.5 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The emicizumab model was quarantined because its clearance, volume of distribution, absorption rate constant and lag time had no values in the source, so placeholder numbers were substituted.**

The record lists CL/F 28.7, V/F 25.9 and KA 72.5 for emicizumab, but the model builder left clearance, volume of distribution, absorption rate constant and absorption lag time without extracted values, so library placeholder numbers stood in for them. The absorption rate constant was invented by defaulting, which the adjudication marked as not acceptable. The model also assumes bioavailability F=1 and Fm=1 with no molar correction, i.e. an apparent parameterization. Extracted — emicizumab: CL/F 28.7, V/F 25.9, kabs 72.5.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has emicizumab, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 0.272 | L/h | 7.556e-08 | m3/s | L/h | exact (1) | Tab4:row2:col2 | 28.7 (None% RSE) |
| V/F | `Q76` · V/F | 10.4 | L | 0.0104 | m3 | L | exact (1) | Tab4:row3:col2 | 25.9 (None% RSE) |
| KA | `Q49` · kabs | 0.536 | 1/h | 0.0001489 | 1/s | 1/h | exact (1) | Tab4:row4:col2 | 72.5 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss:120b` | `parameters[cl/f]` | 0.272 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` |  | 0.272 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.536 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` |  | 0.536 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | 10.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` |  | 10.4 | only_one_extracted |
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
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 26.8 | 26.5 | 0.9889 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Tab4:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab4:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Tab4:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.272 L/h |  |  | ['Tab4:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 10.4 L |  |  | ['Tab4:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 2 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 26.8 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 26.8 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.61 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.61 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.000105 | kg |
| input | model | `Cl` | 7.556e-08 | m3/s |
| input | model | `VdPerKg` | 0.0001486 | m3/kg |
| input | model | `ka` | 0.0001489 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Retout S, Schmitt C, Petry C, Mercier F, Frey N. Population Pharmacokinetic Analysis and Exploratory Exposure-Bleeding Rate Relationship of Emicizumab in Adult and Pediatric Persons with Hemophilia A. Clinical pharmacokinetics 59(12):1611–1625 (2020). [doi:10.1007/s40262-020-00904-z](https://doi.org/10.1007/s40262-020-00904-z)

**This record:** Pharmacolibrary v26.09, model `Emicizumab_Retout2020_estimate`. <https://pharmacolibrary.github.io/#/drugs/drug_emicizumab/Emicizumab_Retout2020_estimate>

```bibtex
@misc{pharmacolibrary_EmicizumabRetout2020estimate,
  title  = {{Pharmacolibrary model Emicizumab_Retout2020_estimate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_emicizumab/Emicizumab_Retout2020_estimate},
  note   = {Parameters from doi:10.1007/s40262-020-00904-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 105 mg, single dose, first-order absorption (ka 0.536 /h, F 1). Doses in the paper: 105, 210, 420 mg.

<dbs-fmusim paramsurl="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_emicizumab/Emicizumab_Retout2020_estimate/Emicizumab_Retout2020_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Emicizumab_Retout2020_estimate_params.json` · controls `Emicizumab_Retout2020_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bemicizumab%5D%20Emicizumab_Retout2020_estimate&body=Drug%3A%20emicizumab%0ARecord%3A%20Emicizumab_Retout2020_estimate%0APaper%3A%20Retout_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_emicizumab/Emicizumab_Retout2020_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 18:44 UTC</sub>
