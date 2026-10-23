<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;evogliptin&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/&quot;},{&quot;label&quot;:&quot;Kim_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Evogliptin_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/Evogliptin_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Kim_2025_DPP_4&quot;,&quot;label&quot;:&quot;Kim_2025 \u00b7 DPP-4&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/pd_Kim_2025_DPP_4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# evogliptin — `Evogliptin_Kim2025_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="evogliptin" model-id="Evogliptin_Kim2025_reference" status="accepted_with_caveats" stale="false" population="patients with varying degrees of renal disease and healthy subjects" measured-compound="evogliptin" parameterization="apparent" topology="2C"></div>

## Citation
Kim B, Kim JE, Lee S, Oh J, Cho JY, Jang IJ et al. Population pharmacokinetic and pharmacodynamic model of evogliptin: Severe uremia increases the bioavailability of evogliptin. CPT: pharmacometrics & systems pharmacology 14(2):246–256 (2025).
  ·  DOI: [10.1002/psp4.13263](https://doi.org/10.1002/psp4.13263)

## Population and dosing

**Population:** patients with varying degrees of renal disease and healthy subjects · condition renal impairment · age group adult · n = 46.

**Dosing:** 5 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference.svg" alt="Evogliptin_Kim2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 22.1 | L/h | 20.2 (None% RSE) |
| Vc/F (L) | V1/F | 829.0 | L | 25.0 (None% RSE) |
| Ka (/h) | kabs | 1.26 | /h | 76.8 (None% RSE) |
| Q/F (L/h) | Q/F | 46.3 | L/h |  |
| Vp/F (L) | V2/F | 465.0 | L |  |
| F1c | Frel | 1 |  |  |
| theta_cl_f_wt_power | theta_cl_f_wt_power | 0.75 |  |  |
| theta_q76_wt_power | theta_q76_wt_power | 1 |  |  |
| theta_q_f_wt_power | theta_q_f_wt_power | 0.75 |  |  |
| theta_q76_wt_power | theta_q76_wt_power | 1 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.65). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of amyl-f1: this record has none, the second reading 0.36; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 22.1 | L/h | 6.139e-06 | m3/s | l/h | exact (1) | psp413263-tbl-0001:row3:col1, psp413263-tbl-0001:row3:col2 | 20.2 (None% RSE) |
| Vc/F (L) | `Q290` · V1/F | 829.0 | L | 0.829 | m3 | l | exact (1) | psp413263-tbl-0001:row4:col1, psp413263-tbl-0001:row4:col2 | 25.0 (None% RSE) |
| Ka (/h) | `Q49` · kabs | 1.26 | /h | 0.00035 | 1/s | 1/h | exact (1) | psp413263-tbl-0001:row5:col1, psp413263-tbl-0001:row5:col2 | 76.8 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 46.3 | L/h | 1.286e-05 | m3/s | l/h | exact (1) | psp413263-tbl-0001:row6:col1, psp413263-tbl-0001:row6:col2 |  |
| Vp/F (L) | `Q82` · V2/F | 465.0 | L | 0.465 | m3 | l | exact (1) | psp413263-tbl-0001:row7:col1, psp413263-tbl-0001:row7:col2 |  |
| F1c | `Q87` · Frel | 1 |  |  |  |  | llm (0.6) | psp413263-tbl-0001:row8:col1 |  |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.75 |  |  |  |  |  | psp413263-tbl-0001:row9:col1 |  |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 1 |  |  |  |  |  | psp413263-tbl-0001:row10:col1 |  |
| theta_q_f_wt_power | `Q900` · theta_q_f_wt_power | 0.75 |  |  |  |  |  | psp413263-tbl-0001:row11:col1 |  |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 1 |  |  |  |  |  | psp413263-tbl-0001:row12:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'Vc/F (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'Ka (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'F1 (%)' routed out of structural estimates ('PK IIV')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('PK residual variability')
- table section iiv: 'EC50 (%)' routed out of structural estimates ('PD IIV')
- table section residual_error: 'Additive error (%inhibition)e' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Amyl~F1' — extend the ontology if this is a real PK parameter (source ['psp413263-tbl-0001:row13:col1', 'psp413263-tbl-0001:row13:col2'])
- dropped unlinked row (NIL): 'TG ~ F1' — extend the ontology if this is a real PK parameter (source ['psp413263-tbl-0001:row14:col1', 'psp413263-tbl-0001:row14:col2'])
- dropped PD-category row 'E max (%inhibition)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413263-tbl-0001:row23:col1', 'psp413263-tbl-0001:row23:col2'])
- dropped PD-category row 'EC50 (μg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413263-tbl-0001:row24:col1', 'psp413263-tbl-0001:row24:col2'])
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=evogliptin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413263-tbl-0001:row3:col3 = '22.0 (19.2–25.9)'
- unparsed cell psp413263-tbl-0001:row4:col3 = '834.7 (717.3–977.9)'
- unparsed cell psp413263-tbl-0001:row5:col3 = '1.29 (1.01–1.67)'
- unparsed cell psp413263-tbl-0001:row6:col3 = '45.9 (17.9–67.8)'
- unparsed cell psp413263-tbl-0001:row7:col3 = '461.8 (364.0–567.3)'
- unparsed cell psp413263-tbl-0001:row13:col3 = '0.35 (0.17–0.64)'
- unparsed cell psp413263-tbl-0001:row14:col3 = '0.26 (0.09–0.43)'
- unparsed cell psp413263-tbl-0001:row16:col3 = '20.6 (7.1–30.2)'
- unparsed cell psp413263-tbl-0001:row17:col3 = '23.8 (9.2–36.5)'
- unparsed cell psp413263-tbl-0001:row18:col3 = '76.7 (62.0–91.5)'
- unparsed cell psp413263-tbl-0001:row19:col3 = '22.6 (12.0–36.5)'
- unparsed cell psp413263-tbl-0001:row21:col3 = '11.1 (9.8–12.4)'
- unparsed cell psp413263-tbl-0001:row23:col3 = '89.0 (87.8–90.4)'
- unparsed cell psp413263-tbl-0001:row24:col3 = '1.08 (0.98–1.18)'
- unparsed cell psp413263-tbl-0001:row25:col3 = '2.14 (1.97–2.31)'
- unparsed cell psp413263-tbl-0001:row27:col3 = '25.1 (18.7–33.4)'
- unparsed cell psp413263-tbl-0001:row29:col3 = '16.2 (11.6–22.9)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.65 (13/20 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[amyl-f1]` |  | 0.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c1]` |  | 65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['power'] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_q76_wt_power]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt_power]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[wt_vp_fd]` |  | 1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413263-tbl-0001:row3:col1', 'psp413263-tbl-0001:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp413263-tbl-0001:row4:col1', 'psp413263-tbl-0001:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413263-tbl-0001:row5:col1', 'psp413263-tbl-0001:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp413263-tbl-0001:row6:col1', 'psp413263-tbl-0001:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp413263-tbl-0001:row7:col1', 'psp413263-tbl-0001:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.1 L/h | ['psp413263-tbl-0001:row3:col1', 'psp413263-tbl-0001:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 829 L | ['psp413263-tbl-0001:row4:col1', 'psp413263-tbl-0001:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 465 L | ['psp413263-tbl-0001:row7:col1', 'psp413263-tbl-0001:row7:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=evogliptin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_modelica.zip" download>Evogliptin_Kim2025_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_fmi.zip" download>Evogliptin_Kim2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_matlab.zip" download>Evogliptin_Kim2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_matlab_simbio.zip" download>Evogliptin_Kim2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_sbml.zip" download>Evogliptin_Kim2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_cellml.zip" download>Evogliptin_Kim2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4014 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 6.139e-06 | m3/s |
| input | model | `VdPerKg` | 0.01184 | m3/kg |
| input | model | `k12` | 1.551e-05 | 1/s |
| input | model | `k21` | 2.766e-05 | 1/s |
| input | model | `ka` | 0.00035 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kim B, Kim JE, Lee S, Oh J, Cho JY, Jang IJ et al. Population pharmacokinetic and pharmacodynamic model of evogliptin: Severe uremia increases the bioavailability of evogliptin. CPT: pharmacometrics & systems pharmacology 14(2):246–256 (2025). [doi:10.1002/psp4.13263](https://doi.org/10.1002/psp4.13263)

**This record:** Pharmacolibrary v26.09, model `Evogliptin_Kim2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_evogliptin/Evogliptin_Kim2025_reference>

```bibtex
@misc{pharmacolibrary_EvogliptinKim2025reference,
  title  = {{Pharmacolibrary model Evogliptin_Kim2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_evogliptin/Evogliptin_Kim2025_reference},
  note   = {Parameters from doi:10.1002/psp4.13263},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 1.26 /h, F 1). Dose in the paper: 5 mg.

<dbs-fmusim paramsurl="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_evogliptin/Evogliptin_Kim2025_reference/Evogliptin_Kim2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Evogliptin_Kim2025_reference_params.json` · controls `Evogliptin_Kim2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bevogliptin%5D%20Evogliptin_Kim2025_reference&body=Drug%3A%20evogliptin%0ARecord%3A%20Evogliptin_Kim2025_reference%0APaper%3A%20Kim_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_evogliptin/Evogliptin_Kim2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 23:49 UTC</sub>
