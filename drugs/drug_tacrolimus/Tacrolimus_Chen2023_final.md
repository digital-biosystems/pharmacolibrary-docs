<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tacrolimus&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/&quot;},{&quot;label&quot;:&quot;Chen_2023 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tacrolimus_AbdelKahaar2023v2_reference&quot;,&quot;label&quot;:&quot;Abdel-Kahaar_2023_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_AbdelKahaar2023v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Chen2023_base&quot;,&quot;label&quot;:&quot;Chen_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Chen2023_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Chen2023_final&quot;,&quot;label&quot;:&quot;Chen_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Chen2023_final.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tacrolimus_Franken2022_reference&quot;,&quot;label&quot;:&quot;Franken_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Franken2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Hou2025_reference&quot;,&quot;label&quot;:&quot;Hou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Hou2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Paschier2023_reference&quot;,&quot;label&quot;:&quot;Paschier_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Paschier2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tacrolimus — `Tacrolimus_Chen2023_final`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="tacrolimus" model-id="Tacrolimus_Chen2023_final" status="accepted_with_caveats" stale="false" population="adults with myasthenia gravis" measured-compound="tacrolimus" parameterization="apparent" topology="1C"></div>

## Citation
Chen D, Yao Q, Chen W, Yin J, Hou S, Tian X et al. Population PK/PD model of tacrolimus for exploring the relationship between accumulated exposure and quantitative scores in myasthenia gravis patients. CPT: pharmacometrics & systems pharmacology 12(7):963–976 (2023).
  ·  DOI: [10.1002/psp4.12966](https://doi.org/10.1002/psp4.12966)

## Population and dosing

**Population:** adults with myasthenia gravis · condition myasthenia gravis · age group adult.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final.svg" alt="Tacrolimus_Chen2023_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 15.7 | L/h | 48.3 (None% RSE) |
| V/F (L) | V/F | 1410 | L | 74.9 (None% RSE) |
| k a (h−1) | kabs | 0.502 | h−1 |  |
| T lag (h) | tlag | 0.346 | h |  |
| ts0_for_osserman_i | ts0_for_osserman_i | 4.08 |  |  |
| ts0_for_osserman_iia_iib | ts0_for_osserman_iia_iib | 10.4 |  |  |
| ts0_for_osserman_iii_iv | ts0_for_osserman_iii_iv | 19.0 |  |  |
| theta_cl_f_cyp3a5 | theta_cl_f_cyp3a5 | 2.05 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].value`: this record has 15.7, the second reading 9.3; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 15.7 | L/h | 4.361e-06 | m3/s | l/h | exact (1) | psp412966-tbl-0002:row3:col3, psp412966-tbl-0002:row3:col4 | 48.3 (None% RSE) |
| V/F (L) | `Q76` · V/F | 1410 | L | 1.41 | m3 | l | exact (1) | psp412966-tbl-0002:row4:col3, psp412966-tbl-0002:row4:col4 | 74.9 (None% RSE) |
| k a (h−1) | `Q49` · kabs | 0.502 | h−1 | 0.0001394 | 1/s | 1/h | space_fold (0.95) | psp412966-tbl-0002:row5:col3, psp412966-tbl-0002:row5:col4 |  |
| T lag (h) | `Q83` · tlag | 0.346 | h | 1246 | s | h | space_fold (0.95) | psp412966-tbl-0002:row6:col3, psp412966-tbl-0002:row6:col4 |  |
| ts0_for_osserman_i | `Q900` · ts0_for_osserman_i | 4.08 |  |  |  |  |  | psp412966-tbl-0002:row16:col3, psp412966-tbl-0002:row16:col4 |  |
| ts0_for_osserman_iia_iib | `Q900` · ts0_for_osserman_iia_iib | 10.4 |  |  |  |  |  | psp412966-tbl-0002:row17:col3, psp412966-tbl-0002:row17:col4 |  |
| ts0_for_osserman_iii_iv | `Q900` · ts0_for_osserman_iii_iv | 19.0 |  |  |  |  |  | psp412966-tbl-0002:row18:col3, psp412966-tbl-0002:row18:col4 |  |
| theta_cl_f_cyp3a5 | `Q900` · theta_cl_f_cyp3a5 | 2.05 |  |  |  |  |  | psp412966-tbl-0002:row8:col3, psp412966-tbl-0002:row8:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual error')
- dropped duplicate Q76 ('TP on V/F', value '-0.0817') — already have one for this compound
- covariate level 'TS0 for Osserman I' → Q900:ts0_for_osserman_i = 4.08 (additive_shift on Q27)
- covariate level 'TS0 for Osserman IIa/IIb' → Q900:ts0_for_osserman_iia_iib = 10.4 (additive_shift on Q27)
- covariate level 'TS0 for Osserman III/IV' → Q900:ts0_for_osserman_iii_iv = 19.0 (additive_shift on Q27)
- dropped PD-category row 'E max' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412966-tbl-0002:row19:col3'])
- dropped unlinked row (NIL): 'EcAUC50 (ng*h/mL)' — extend the ontology if this is a real PK parameter (source ['psp412966-tbl-0002:row20:col3', 'psp412966-tbl-0002:row20:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tacrolimus
- model-stage split: 'final model' is the final model of Chen_2023 (paper reports 2 stages: base model, final model); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (7/14 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].value` | 15.7 | 9.3 | mismatch |
| `gpt-oss-120b` | `parameters[ecauc50]` |  | 33.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp3a5].value` | 2.05 | 14.1 | mismatch |
| `gpt-oss-120b` | `parameters[ts0_for_osserman_i].value` | 4.08 | 27.0 | mismatch |
| `gpt-oss-120b` | `parameters[ts0_for_osserman_iia_iib].value` | 10.4 | 11.5 | mismatch |
| `gpt-oss-120b` | `parameters[ts0_for_osserman_iii_iv].value` | 19.0 | 13.5 | mismatch |
| `gpt-oss-120b` | `parameters[v/f].value` | 1410 | 16.2 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412966-tbl-0002:row3:col3', 'psp412966-tbl-0002:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412966-tbl-0002:row5:col3', 'psp412966-tbl-0002:row5:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['psp412966-tbl-0002:row4:col3', 'psp412966-tbl-0002:row4:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp412966-tbl-0002:row6:col3', 'psp412966-tbl-0002:row6:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.7 L/h | ['psp412966-tbl-0002:row3:col3', 'psp412966-tbl-0002:row3:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.41e+03 L | ['psp412966-tbl-0002:row4:col3', 'psp412966-tbl-0002:row4:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=tacrolimus) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_modelica.zip" download>Tacrolimus_Chen2023_final_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_fmi.zip" download>Tacrolimus_Chen2023_final_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_matlab.zip" download>Tacrolimus_Chen2023_final_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_matlab_simbio.zip" download>Tacrolimus_Chen2023_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_sbml.zip" download>Tacrolimus_Chen2023_final_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_cellml.zip" download>Tacrolimus_Chen2023_final_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.804 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1246 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 4.361e-06 | m3/s |
| input | model | `VdPerKg` | 0.02014 | m3/kg |
| input | model | `ka` | 0.0001394 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chen D, Yao Q, Chen W, Yin J, Hou S, Tian X et al. Population PK/PD model of tacrolimus for exploring the relationship between accumulated exposure and quantitative scores in myasthenia gravis patients. CPT: pharmacometrics & systems pharmacology 12(7):963–976 (2023). [doi:10.1002/psp4.12966](https://doi.org/10.1002/psp4.12966)

**This record:** Pharmacolibrary v26.09, model `Tacrolimus_Chen2023_final`. <https://pharmacolibrary.github.io/#/drugs/drug_tacrolimus/Tacrolimus_Chen2023_final>

```bibtex
@misc{pharmacolibrary_TacrolimusChen2023final,
  title  = {{Pharmacolibrary model Tacrolimus_Chen2023_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tacrolimus/Tacrolimus_Chen2023_final},
  note   = {Parameters from doi:10.1002/psp4.12966},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 0.502 /h, lag 20.8 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 5 mg oral (L04AD02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tacrolimus/Tacrolimus_Chen2023_final/Tacrolimus_Chen2023_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tacrolimus_Chen2023_final_params.json` · controls `Tacrolimus_Chen2023_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btacrolimus%5D%20Tacrolimus_Chen2023_final&body=Drug%3A%20tacrolimus%0ARecord%3A%20Tacrolimus_Chen2023_final%0APaper%3A%20Chen_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tacrolimus/Tacrolimus_Chen2023_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:33 UTC</sub>
