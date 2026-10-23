<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;golimumab&quot;,&quot;href&quot;:&quot;drugs/drug_golimumab/&quot;},{&quot;label&quot;:&quot;Dreesen_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Golimumab_Dreesen2020_reference&quot;,&quot;label&quot;:&quot;Dreesen_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_golimumab/Golimumab_Dreesen2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Golimumab_Lee2023_reference&quot;,&quot;label&quot;:&quot;Lee_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_golimumab/Golimumab_Lee2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Golimumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_golimumab/Golimumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# golimumab — `Golimumab_Dreesen2020_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="golimumab" model-id="Golimumab_Dreesen2020_reference" status="curated_candidate" stale="false" population="adults with ulcerative colitis" measured-compound="golimumab" parameterization="apparent" topology="2C"></div>

## Citation
Dreesen E, Kantasiripitak W, Detrez I, Stefanović S, Vermeire S, Ferrante M et al. A Population Pharmacokinetic and Exposure-Response Model of Golimumab for Targeting Endoscopic Remission in Patients With Ulcerative Colitis. Inflammatory bowel diseases 26(4):570–580 (2020).
  ·  DOI: [10.1093/ibd/izz144](https://doi.org/10.1093/ibd/izz144)

## Population and dosing

**Population:** adults with ulcerative colitis · condition ulcerative colitis · age group adult · n = —56.

**Dosing:** 50, 100, 200 mg, sc, multiple, every 240 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference.svg" alt="Golimumab_Dreesen2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| k a , d -1 | kabs | 0.473 | d -1 |  |
| CL/F, L/d | CL/F | 0.442 | L/d | 38.1 (39% RSE) |
| V c /F, L | V1/F | 8.64 | L |  |
| Q/F, L/d | Q/F | 0.430 | L/d |  |
| V p /F, L | V2/F | 4.48 | L |  |
| When no PREV | equation variable | 3.85 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has golimumab, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| k a , d -1 | `Q49` · kabs | 0.473 | d -1 | 5.475e-06 | 1/s | 1/d | space_fold (0.95) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col4 |  |
| CL/F, L/d | `Q27` · CL/F | 0.442 | L/d | 5.116e-09 | m3/s | l/d | exact (1) | tab_1:row6:col1 | 38.1 (39% RSE) |
| V c /F, L | `Q290` · V1/F | 8.64 | L | 0.00864 | m3 | l | space_fold (0.95) | tab_1:row10:col1, tab_1:row10:col2, tab_1:row10:col4 |  |
| Q/F, L/d | `Q69` · Q/F | 0.430 | L/d | 4.977e-09 | m3/s | l/d | exact (1) | tab_1:row11:col1, tab_1:row11:col2, tab_1:row11:col4 |  |
| V p /F, L | `Q82` · V2/F | 4.48 | L | 0.00448 | m3 | l | space_fold (0.95) | tab_1:row12:col1 |  |
| When no PREV | `Q900` · equation variable | 3.85 |  |  |  |  | llm (0.6) | tab_1:row13:col2, tab_1:row13:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL, %' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V c /F, %' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V p /F, %' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Corr(CL/F-V c /F), %' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Corr(CL/F-V p /F), %' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Corr(V c /F-V p /F), %' routed out of structural estimates ('Interindividual variability')
- dropped unlinked row (NIL): 'When no ATG' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col2', 'tab_1:row8:col4'])
- dropped unlinked row (NIL): 'When ATG' — extend the ontology if this is a real PK parameter (source ['tab_1:row9:col2', 'tab_1:row9:col4'])
- dropped unlinked row (NIL): 'When PREV' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col2', 'tab_1:row14:col4'])
- dropped unlinked row (NIL): 'Dried blood spot-to-' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col1', 'tab_1:row15:col2', 'tab_1:row15:col4'])
- dropped duplicate Q900 ('C 98,50 3→2 , mg/L', value '0.5') — already have one for this compound
- dropped duplicate Q900 ('C 98,50 2→1,0 , mg/L', value '4.1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=golimumab
- molar mass: none found for 'golimumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row5:col3 = '0.501 (0.417 to 0.596)'
- unparsed cell tab_1:row8:col3 = '0.413 (0.370 to 0.464)'
- unparsed cell tab_1:row9:col3 = '0.541 (0.464 to 0.627)'
- unparsed cell tab_1:row10:col3 = '8.88 (7.79 to 9.83)'
- unparsed cell tab_1:row11:col3 = '0.461 (0.368 to 0.587)'
- unparsed cell tab_1:row13:col3 = '3.93 (3.03 to 5.18)'
- unparsed cell tab_1:row14:col3 = '15.2 (8.48 to 31.0)'
- unparsed cell tab_1:row15:col3 = '4.14 (3.95 to 4.34)'
- unparsed cell tab_1:row18:col1 = '58.7 (12) [3]'
- unparsed cell tab_1:row18:col2 = '56.6 (13) [4]'
- unparsed cell tab_1:row18:col3 = '57.1 (45.0 to 71.8)'
- unparsed cell tab_1:row19:col1 = '29.4 (15) [13]'
- unparsed cell tab_1:row19:col2 = '28.3 (16) [14]'
- unparsed cell tab_1:row19:col3 = '28.6 (22.4 to 36.1)'
- unparsed cell tab_1:row20:col1 = '169.0 (17) [18]'
- unparsed cell tab_1:row20:col2 = '220.7 (22) [21]'
- unparsed cell tab_1:row20:col3 = '240.4 (133.7 to 419.8)'
- unparsed cell tab_1:row21:col3 = '37.2 (13.7 to 64.1)'
- unparsed cell tab_1:row22:col3 = '-43.5 (-64.1 to -16.8)'
- unparsed cell tab_1:row23:col3 = '48.3 (21.6 to 72.5)'
- unparsed cell tab_1:row26:col1 = '2.43 (19) [7]'
- unparsed cell tab_1:row26:col2 = '2.62 (20) [7]'
- unparsed cell tab_1:row26:col3 = '2.61 (1.74 to 3.66)'
- unparsed cell tab_1:row27:col1 = '0.976 (28) [7]'
- unparsed cell tab_1:row27:col2 = '0.874 (34) [7]'
- unparsed cell tab_1:row27:col3 = '0.886 (0.650 to 1.117)'
- unparsed cell tab_1:row29:col1 = '5.38 (19) [7]'
- unparsed cell tab_1:row29:col2 = '6.00 (6) [7]'
- unparsed cell tab_1:row29:col3 = '6.04 (4.79 to 7.17)'
- unparsed cell tab_1:row30:col1 = '0.134 (97) [7]'
- unparsed cell tab_1:row30:col2 = '0.059 (104) [7]'
- unparsed cell tab_1:row30:col3 = '0.060 (0.025 to 0.136)'
- unparsed cell tab_1:row32:col3 = '0.5 (0.2 to 1.0)'
- unparsed cell tab_1:row33:col3 = '4.2 (2.0 to 8.1)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[c 98,50 3-2]` |  | 0.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dried blood spot-to-]` |  | 4.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[when no prev]` | 3.85 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | golimumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | golimumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row10:col1', 'tab_1:row10:col2', 'tab_1:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_1:row12:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0184 L/h | ['tab_1:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.64 L | ['tab_1:row10:col1', 'tab_1:row10:col2', 'tab_1:row10:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.48 L | ['tab_1:row12:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=golimumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_modelica.zip" download>Golimumab_Dreesen2020_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_fmi.zip" download>Golimumab_Dreesen2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_matlab.zip" download>Golimumab_Dreesen2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_matlab_simbio.zip" download>Golimumab_Dreesen2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_sbml.zip" download>Golimumab_Dreesen2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_cellml.zip" download>Golimumab_Dreesen2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 5.116e-09 | m3/s |
| input | model | `VdPerKg` | 0.0001234 | m3/kg |
| input | model | `k12` | 5.76e-07 | 1/s |
| input | model | `k21` | 1.111e-06 | 1/s |
| input | model | `ka` | 5.475e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Dreesen E, Kantasiripitak W, Detrez I, Stefanović S, Vermeire S, Ferrante M et al. A Population Pharmacokinetic and Exposure-Response Model of Golimumab for Targeting Endoscopic Remission in Patients With Ulcerative Colitis. Inflammatory bowel diseases 26(4):570–580 (2020). [doi:10.1093/ibd/izz144](https://doi.org/10.1093/ibd/izz144)

**This record:** Pharmacolibrary v26.09, model `Golimumab_Dreesen2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_golimumab/Golimumab_Dreesen2020_reference>

```bibtex
@misc{pharmacolibrary_GolimumabDreesen2020reference,
  title  = {{Pharmacolibrary model Golimumab_Dreesen2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_golimumab/Golimumab_Dreesen2020_reference},
  note   = {Parameters from doi:10.1093/ibd/izz144},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.0197 /h, F 1). Doses in the paper: 50, 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_golimumab/Golimumab_Dreesen2020_reference/Golimumab_Dreesen2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Golimumab_Dreesen2020_reference_params.json` · controls `Golimumab_Dreesen2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgolimumab%5D%20Golimumab_Dreesen2020_reference&body=Drug%3A%20golimumab%0ARecord%3A%20Golimumab_Dreesen2020_reference%0APaper%3A%20Dreesen_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_golimumab/Golimumab_Dreesen2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:10 UTC</sub>
