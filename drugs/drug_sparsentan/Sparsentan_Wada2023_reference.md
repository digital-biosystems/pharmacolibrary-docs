<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09X&quot;,&quot;href&quot;:&quot;atc/C09X.md&quot;},{&quot;label&quot;:&quot;sparsentan&quot;,&quot;href&quot;:&quot;drugs/drug_sparsentan/&quot;},{&quot;label&quot;:&quot;Wada_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sparsentan_Wada2023_reference&quot;,&quot;label&quot;:&quot;Wada_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sparsentan — `Sparsentan_Wada2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="sparsentan" model-id="Sparsentan_Wada2023_reference" status="accepted_with_caveats" stale="false" population="healthy volunteers and patients with focal segmental glomerulosclerosis" measured-compound="sparsentan" parameterization="apparent" topology="2C"></div>

## Citation
Wada R, Kleijn HJ, Zhang L, Chen SC. Population pharmacokinetic analysis of sparsentan in healthy volunteers and patients with focal segmental glomerulosclerosis. CPT: pharmacometrics & systems pharmacology 12(8):1080–1092 (2023).
  ·  DOI: [10.1002/psp4.12996](https://doi.org/10.1002/psp4.12996)

## Population and dosing

**Population:** healthy volunteers and patients with focal segmental glomerulosclerosis · age group mixed.

**Dosing:** 200, 400, 800 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference.svg" alt="Sparsentan_Wada2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 3.88 | L/h | 4.6 | 39.5 (None% RSE) |
| V c/F (L) | V1/F | 49.3 | L | 4.3 | 48.4 (None% RSE) |
| Q/F (L/h) | Q/F | 2.03 | L/h | 12.0 |  |
| V p/F (L) | V2/F | 12.1 | L | 10.5 |  |
| K a (1/h) | kabs | 0.740 | 1/h | 6.9 | 68.9 (None% RSE) |
| T lag (h) | tlag | 0.32 | h | 4.0 |  |
| T 1/2 (h) (derived) | t1/2z | 9.6 | h |  |  |
| Induction change in CL (L/h) | CL | 1.23 | L/h | 13.6 |  |
| moderate_cyp3a4 | moderate_cyp3a4 | -0.273 |  | 18.8 |  |
| strong_cyp3a4 | strong_cyp3a4 | -1.069 |  | 10.0 |  |
| crcl | crcl | 0.222 |  | 26.5 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 3.88 | L/h | 1.078e-06 | m3/s | l/h | 4.6 | exact (1) | psp412996-tbl-0002:row1:col1, psp412996-tbl-0002:row1:col2 | 39.5 (None% RSE) |
| V c/F (L) | `Q290` · V1/F | 49.3 | L | 0.0493 | m3 | l | 4.3 | space_fold (0.95) | psp412996-tbl-0002:row2:col1, psp412996-tbl-0002:row2:col2 | 48.4 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 2.03 | L/h | 5.639e-07 | m3/s | l/h | 12.0 | exact (1) | psp412996-tbl-0002:row3:col1, psp412996-tbl-0002:row3:col2 |  |
| V p/F (L) | `Q82` · V2/F | 12.1 | L | 0.0121 | m3 | l | 10.5 | space_fold (0.95) | psp412996-tbl-0002:row4:col1, psp412996-tbl-0002:row4:col2 |  |
| K a (1/h) | `Q49` · kabs | 0.740 | 1/h | 0.0002056 | 1/s | 1/h | 6.9 | space_fold (0.95) | psp412996-tbl-0002:row5:col1, psp412996-tbl-0002:row5:col2 | 68.9 (None% RSE) |
| T lag (h) | `Q83` · tlag | 0.32 | h | 1152 | s | h | 4.0 | space_fold (0.95) | psp412996-tbl-0002:row6:col1, psp412996-tbl-0002:row6:col2 |  |
| T 1/2 (h) (derived) | `Q57` · t1/2z | 9.6 | h | 3.456e+04 | s | h |  | space_fold (0.95) | psp412996-tbl-0002:row7:col1, psp412996-tbl-0002:row36:col1 |  |
| Induction change in CL (L/h) | `Q22` · CL | 1.23 | L/h | 3.417e-07 | m3/s | l/h | 13.6 | llm_confirmed (0.6) | psp412996-tbl-0002:row8:col1, psp412996-tbl-0002:row8:col2 |  |
| moderate_cyp3a4 | `Q900` · moderate_cyp3a4 | -0.273 |  |  |  |  | 18.8 |  | psp412996-tbl-0002:row12:col1, psp412996-tbl-0002:row12:col2 |  |
| strong_cyp3a4 | `Q900` · strong_cyp3a4 | -1.069 |  |  |  |  | 10.0 |  | psp412996-tbl-0002:row13:col1, psp412996-tbl-0002:row13:col2 |  |
| crcl | `Q900` · crcl | 0.222 |  |  |  |  | 26.5 |  | psp412996-tbl-0002:row15:col1, psp412996-tbl-0002:row15:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'V c/F (L)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K a (1/h)' routed out of structural estimates ('IIV (%)')
- unit_dimension_unknown: 'derived' (t1/2z)
- dropped duplicate Q57 ('Induction t 1/2 (day)', value '0.001') — already have one for this compound
- dropped unlinked row (NIL): 'Dose on F rel' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row10:col1', 'psp412996-tbl-0002:row10:col2'])
- covariate level 'Moderate CYP3A4' → Q900:moderate_cyp3a4 = -0.273 (linear_fractional on Q27)
- covariate level 'Strong CYP3A4' → Q900:strong_cyp3a4 = -1.069 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'ALKP' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row14:col1', 'psp412996-tbl-0002:row14:col2'])
- covariate level 'CrCL' → Q900:crcl = 0.222 (power on Q27)
- dropped unlinked row (NIL): 'Maleb' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row16:col1', 'psp412996-tbl-0002:row16:col2'])
- dropped unlinked row (NIL): 'Black or African American' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row18:col1', 'psp412996-tbl-0002:row18:col2'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row19:col1', 'psp412996-tbl-0002:row19:col2'])
- dropped unlinked row (NIL): 'Tablet' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row21:col1', 'psp412996-tbl-0002:row21:col2', 'psp412996-tbl-0002:row24:col1', 'psp412996-tbl-0002:row24:col2'])
- dropped unlinked row (NIL): 'Crushed tablet' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row22:col1', 'psp412996-tbl-0002:row22:col2', 'psp412996-tbl-0002:row25:col1', 'psp412996-tbl-0002:row25:col2'])
- routed 'Variance CL' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Variance V c' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row27:col1', 'psp412996-tbl-0002:row27:col2'])
- dropped unlinked row (NIL): 'Variance K a' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row28:col1', 'psp412996-tbl-0002:row28:col2'])
- routed 'SD of additive error (ng/mL)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'SD of proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- unit_dimension_unknown: 'derived' (CL/F)
- dropped duplicate Q27 ('CL/F (L/h) (derived)', value '5.47') — already have one for this compound
- unit_dimension_unknown: 'derived' (CL)
- dropped duplicate Q22 ('Steady‐state CL (L/h) (derived)', value '7.21') — already have one for this compound
- unit_dimension_unknown: 'derived' (V1/F)
- dropped duplicate Q290 ('V c /F (L) (derived)', value '69.5') — already have one for this compound
- unit_dimension_unknown: 'derived' (V2/F)
- dropped duplicate Q82 ('V p /F (L) (derived)', value '17.0') — already have one for this compound
- implicit units: 'K a (1/h)' → 1/h (from the paper text: "The paper text states: 'The K a and T lag were 0.740 h and 0.32 h, respectively.' Although the text contains a likely ty")
- implicit units: 'T 1/2 (h) (derived)' → h (from the paper text: "The paper text states: 'The terminal half‐life was 9.6 h at steady‐state (Table 2).'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sparsentan

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412996-tbl-0002:row8:col1', 'psp412996-tbl-0002:row8:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412996-tbl-0002:row1:col1', 'psp412996-tbl-0002:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412996-tbl-0002:row2:col1', 'psp412996-tbl-0002:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412996-tbl-0002:row5:col1', 'psp412996-tbl-0002:row5:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['psp412996-tbl-0002:row7:col1', 'psp412996-tbl-0002:row36:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412996-tbl-0002:row3:col1', 'psp412996-tbl-0002:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412996-tbl-0002:row4:col1', 'psp412996-tbl-0002:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp412996-tbl-0002:row6:col1', 'psp412996-tbl-0002:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.23 L/h | ['psp412996-tbl-0002:row8:col1', 'psp412996-tbl-0002:row8:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.88 L/h | ['psp412996-tbl-0002:row1:col1', 'psp412996-tbl-0002:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 49.3 L | ['psp412996-tbl-0002:row2:col1', 'psp412996-tbl-0002:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 12.1 L | ['psp412996-tbl-0002:row4:col1', 'psp412996-tbl-0002:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=sparsentan) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 7 scholar param(s) emitted or defaulted | 7 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.002468 | non-numeric value |
| T1_cmax | reference | skipped | 99 | 0.002468 | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16 | 0.002468 | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 10 | 0.002468 | unresolved concentration unit (exp '%', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_modelica.zip" download>Sparsentan_Wada2023_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_fmi.zip" download>Sparsentan_Wada2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_matlab.zip" download>Sparsentan_Wada2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_matlab_simbio.zip" download>Sparsentan_Wada2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_sbml.zip" download>Sparsentan_Wada2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_cellml.zip" download>Sparsentan_Wada2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5928 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1152 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0002 | kg |
| input | model | `Cl` | 1.078e-06 | m3/s |
| input | model | `VdPerKg` | 0.0007043 | m3/kg |
| input | model | `k12` | 1.144e-05 | 1/s |
| input | model | `k21` | 4.66e-05 | 1/s |
| input | model | `ka` | 0.0002056 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wada R, Kleijn HJ, Zhang L, Chen SC. Population pharmacokinetic analysis of sparsentan in healthy volunteers and patients with focal segmental glomerulosclerosis. CPT: pharmacometrics & systems pharmacology 12(8):1080–1092 (2023). [doi:10.1002/psp4.12996](https://doi.org/10.1002/psp4.12996)

**This record:** Pharmacolibrary v26.09, model `Sparsentan_Wada2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sparsentan/Sparsentan_Wada2023_reference>

```bibtex
@misc{pharmacolibrary_SparsentanWada2023reference,
  title  = {{Pharmacolibrary model Sparsentan_Wada2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sparsentan/Sparsentan_Wada2023_reference},
  note   = {Parameters from doi:10.1002/psp4.12996},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 0.74 /h, lag 19.2 min, F 1). Doses in the paper: 200, 400, 800 mg.

<dbs-fmusim paramsurl="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Sparsentan_Wada2023_reference_params.json` · controls `Sparsentan_Wada2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsparsentan%5D%20Sparsentan_Wada2023_reference&body=Drug%3A%20sparsentan%0ARecord%3A%20Sparsentan_Wada2023_reference%0APaper%3A%20Wada_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sparsentan/Sparsentan_Wada2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:44 UTC</sub>
