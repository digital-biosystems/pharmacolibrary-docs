<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;amifampridine&quot;,&quot;href&quot;:&quot;drugs/drug_amifampridine/&quot;},{&quot;label&quot;:&quot;Thakkar_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amifampridine_Thakkar2017_reference&quot;,&quot;label&quot;:&quot;Thakkar_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Thakkar_2017_3TUG&quot;,&quot;label&quot;:&quot;Thakkar_2017 \u00b7 3TUG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_amifampridine/pd_Thakkar_2017_3TUG.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amifampridine — `Amifampridine_Thakkar2017_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="amifampridine" model-id="Amifampridine_Thakkar2017_reference" status="not_simulated" stale="false" population="adults with Lambert-Eaton myasthenia" measured-compound="3,4-diaminopyridine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Thakkar N, Guptill JT, Aleš K, Jacobus D, Jacobus L, Peloquin C et al. Population Pharmacokinetics/Pharmacodynamics of 3,4-Diaminopyridine Free Base in Patients With Lambert-Eaton Myasthenia. CPT: pharmacometrics & systems pharmacology 6(9):625–634 (2017).
  ·  DOI: [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218)

## Population and dosing

**Population:** adults with Lambert-Eaton myasthenia · condition Lambert-Eaton myasthenia · age group adult.

**Dosing:** 5, 10, 15, 20, 30 mg, oral, multiple, every 8 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference.svg" alt="Amifampridine_Thakkar2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka, h-1 | kabs | 0.9 | h-1 | 8.9 | 36.2 (47.3% RSE) |
| CL/F, L/h | CL/F | 90 | L/h | 7.4 | 48.1 (28.9% RSE) |
| Vc/F, L | V1/F | 24 | L | 33.3 | 182.4 (36% RSE) |
| Q/F, L/h | Q/F | 111 | L/h | 12.1 | 48.7 (44.3% RSE) |
| Vp/F, L | V2/F | 669 | L | 17.6 | 89.8 (41.8% RSE) |
| CLm/F3AcDAP, L/h | CL | 20.5 | L/h | 6 |  |
| Vm/F3AcDAP, L | V | 36 | L | 10.7 |  |
| exponent_for_scr_on_clm_f3acdapc | exponent_for_scr_on_clm_f3acdapc | 0.7 |  | 31.8 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; the covariate scenarios were not simulated (+2 more).**

The base model was simulated, not the covariate effects the record defines. Extracted — amifampridine: kabs 0.9 h-1, CL/F 90 L/h, V1/F 24 L, Q/F 111 L/h, V2/F 669 L; 3-N-acetyl-3,4-diaminopyridine: CL 20.5 L/h, V 36 L.

Independently confirmed by `gpt-oss-120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka, h-1 | `Q49` · kabs | 0.9 | h-1 | 0.00025 | 1/s | 1/h | 8.9 | exact (1) | Thakkar_2017_table_p5_1:row0:col1 | 36.2 (47.3% RSE) |
| CL/F, L/h | `Q27` · CL/F | 90 | L/h | 2.5e-05 | m3/s | l/h | 7.4 | exact (1) | Thakkar_2017_table_p5_1:row1:col1 | 48.1 (28.9% RSE) |
| Vc/F, L | `Q290` · V1/F | 24 | L | 0.024 | m3 | l | 33.3 | exact (1) | Thakkar_2017_table_p5_1:row2:col1 | 182.4 (36% RSE) |
| Q/F, L/h | `Q69` · Q/F | 111 | L/h | 3.083e-05 | m3/s | l/h | 12.1 | exact (1) | Thakkar_2017_table_p5_1:row3:col1 | 48.7 (44.3% RSE) |
| Vp/F, L | `Q82` · V2/F | 669 | L | 0.669 | m3 | l | 17.6 | exact (1) | Thakkar_2017_table_p5_1:row4:col1 | 89.8 (41.8% RSE) |
| CLm/F3AcDAP, L/h | `Q22` · CL | 20.5 | L/h | 5.694e-06 | m3/s | l/h | 6 | exact (1) | Thakkar_2017_table_p5_1:row5:col1 |  |
| Vm/F3AcDAP, L | `Q61` · V | 36 | L | 0.036 | m3 | l | 10.7 | exact (1) | Thakkar_2017_table_p5_1:row6:col1 |  |
| exponent_for_scr_on_clm_f3acdapc | `Q900` · exponent_for_scr_on_clm_f3acdapc | 0.7 |  |  |  |  | 31.8 |  | Thakkar_2017_table_p5_1:row7:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- compound tags: 12 row(s) → 3-N-acetyl-3,4-diaminopyridine (m_suffix 12)
- table section iiv: 'Ka, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CL/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Vc/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Q/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Vp/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CLm/F3AcDAP, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CL/F-Vc/F covarianced' routed out of structural estimates ('Between subject variability (%CV)')
- table section residual_error: '3,4-DAP proportional error, %' routed out of structural estimates ('Residual error')
- table section residual_error: '3-Ac DAP proportional error, %' routed out of structural estimates ('Residual error')
- covariate level 'Exponent for SCR on CLm/F3AcDAPc' → Q900:exponent_for_scr_on_clm_f3acdapc = 0.7 (power on Q27)
- dropped value-less row: '3‐Ac DAP'
- dropped value-less row: '3,4‐DAP'
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CLm/F' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Q/F'
- dropped value-less row: 'CV'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Fm'
- dropped value-less row: 'KA'
- dropped value-less row: 'RSE'
- dropped value-less row: 'SCR'
- dropped value-less row: 'Vc/F'
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Vm/F3ACDAP'
- metabolite volume: 'Vm/F3AcDAP, L' Q63→Q61 for 3-N-acetyl-3,4-diaminopyridine — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=3,4-diaminopyridine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- row roles (LLM): model_class=compartmental; 31/31 row label(s) assigned, 7 linked by role; re-tagged parent→3-N-acetyl-3,4-diaminopyridine ×5, 3,4-diaminopyridine→3-N-acetyl-3,4-diaminopyridine ×4, 3,4-diaminopyridine→parent ×6
- molar mass: no plausible PubChem entry for '3-N-acetyl-3,4-diaminopyridine' ('3-N-acetyl-3,4-diaminopyridine') — left in mass units
- molar mass: none found for '3-N-acetyl-3,4-diaminopyridine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (21/21 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Thakkar_2017_table_p5_1:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Thakkar_2017_table_p5_1:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Thakkar_2017_table_p5_1:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thakkar_2017_table_p5_1:row0:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Thakkar_2017_table_p5_1:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Thakkar_2017_table_p5_1:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Thakkar_2017_table_p5_1:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 20.5 L/h | ['Thakkar_2017_table_p5_1:row5:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 90 L/h | ['Thakkar_2017_table_p5_1:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 24 L | ['Thakkar_2017_table_p5_1:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 36 L | ['Thakkar_2017_table_p5_1:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 669 L | ['Thakkar_2017_table_p5_1:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 7 scholar param(s) emitted or defaulted | 6 covered |  | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_shared_parameters |  | pass | 3 shared param(s) bound once | bound once |  | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | pass |  | verdict confirmed; agreement 1.0 (21 of 21 compared fields agree); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 1 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_modelica.zip" download>Amifampridine_Thakkar2017_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_fmi.zip" download>Amifampridine_Thakkar2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_matlab.zip" download>Amifampridine_Thakkar2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_matlab_simbio.zip" download>Amifampridine_Thakkar2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_sbml.zip" download>Amifampridine_Thakkar2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_cellml.zip" download>Amifampridine_Thakkar2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1091 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4e-05 | kg |
| input | model | `Cl` | 2.992e-05 | m3/s |
| input | model | `VdPerKg` | 0.001037 | m3/kg |
| input | model | `ka` | 0.0003056 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Thakkar N, Guptill JT, Aleš K, Jacobus D, Jacobus L, Peloquin C et al. Population Pharmacokinetics/Pharmacodynamics of 3,4-Diaminopyridine Free Base in Patients With Lambert-Eaton Myasthenia. CPT: pharmacometrics & systems pharmacology 6(9):625–634 (2017). [doi:10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218)

**This record:** Pharmacolibrary, model `Amifampridine_Thakkar2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference>

```bibtex
@misc{pharmacolibrary_AmifampridineThakkar2017reference,
  title  = {{Pharmacolibrary model Amifampridine_Thakkar2017_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference},
  note   = {Parameters from doi:10.1002/psp4.12218},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 40 mg, single dose, first-order absorption (ka 1.1 /h, F 1).

<dbs-fmusim paramsurl="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Amifampridine_Thakkar2017_reference_params.json` · controls `Amifampridine_Thakkar2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamifampridine%5D%20Amifampridine_Thakkar2017_reference&body=Drug%3A%20amifampridine%0ARecord%3A%20Amifampridine_Thakkar2017_reference%0APaper%3A%20Thakkar_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:15 UTC</sub>
