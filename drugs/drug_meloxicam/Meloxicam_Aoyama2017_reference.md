<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;meloxicam&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/&quot;},{&quot;label&quot;:&quot;Aoyama_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meloxicam_Aoyama2017_reference&quot;,&quot;label&quot;:&quot;Aoyama_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Meloxicam_Lehr2010_reference&quot;,&quot;label&quot;:&quot;Lehr_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/Meloxicam_Lehr2010_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# meloxicam — `Meloxicam_Aoyama2017_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-07 14:49 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="meloxicam" model-id="Meloxicam_Aoyama2017_reference" status="extracted" stale="true" population="healthy males" measured-compound="meloxicam" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Aoyama T, Ishida Y, Kaneko M, Miyamoto A, Saito Y, Tohkin M et al. Pharmacokinetics and Pharmacodynamics of Meloxicam in East Asian Populations: The Role of Ethnicity on Drug Response. CPT: pharmacometrics & systems pharmacology 6(12):823–832 (2017).
  ·  DOI: [10.1002/psp4.12259](https://doi.org/10.1002/psp4.12259)

## Population and dosing

**Population:** healthy males · condition healthy · age group adult · n = &gt; 139.

**Dosing:** 7.5 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference.svg" alt="Meloxicam_Aoyama2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 0.391 | L/h |  |
| cyp2c9_2_on_cl | cyp2c9_2_on_cl | -0.147 |  |  |
| Vc (L) | V1 | 7.79 | L |  |
| Q (L/h) | Q | 1.24 | L/h |  |
| Vp (L) | V2 | 2.73 | L |  |
| Ka (/h) | kabs | 2.00 | /h | 0.243 (None% RSE) |
| F | Fab | 0.425 |  |  |
| theta_cl_cyp2c9 | theta_cl_cyp2c9 | -0.400 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The meloxicam model record was rejected because the apparent-parameter coherence check found a double correction: the relative bioavailability Frel of 2.00 (labelled 'x 2 F') and the CL/F parameter were both applied, correcting clearance for bioavailability twice.**

The record contains meloxicam parameters CL = 0.390 L/h, V1 = 7.80 L, Q = 1.24 L/h, V2 = 2.72 L, kabs = 2.05 /h, and a relative bioavailability Frel = 2.00 labelled 'x 2 F', alongside a CL/F parameter (total clearance after oral administration adjusted for bioavailability). Applying the bioavailability factor both through Frel and through the CL/F parameter constitutes a double correction, violating apparent-parameter coherence, so the record was refused. The two readers disagreed only on how the 'x 2 F' bioavailability parameter should be classified, not on the rejection cause. Extracted — meloxicam: CL 0.39 L/h, V1 7.8 L, V 1.06, Q 1.24 L/h, V2 2.72 L, kabs 2.05 /h, Frel 2.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.391 | L/h | 1.086e-07 | m3/s | l/h | exact (1) | psp412259-tbl-0002:row2:col1, psp412259-tbl-0002:row2:col3 |  |
| cyp2c9_2_on_cl | `Q900` · cyp2c9_2_on_cl | -0.147 |  |  |  |  |  | psp412259-tbl-0002:row3:col1, psp412259-tbl-0002:row3:col3 |  |
| Vc (L) | `Q63` · V1 | 7.79 | L | 0.00779 | m3 | l | exact (1) | psp412259-tbl-0002:row5:col1, psp412259-tbl-0002:row5:col3 |  |
| Q (L/h) | `Q30` · Q | 1.24 | L/h | 3.444e-07 | m3/s | l/h | exact (1) | psp412259-tbl-0002:row7:col1, psp412259-tbl-0002:row7:col3 |  |
| Vp (L) | `Q64` · V2 | 2.73 | L | 0.00273 | m3 | l | exact (1) | psp412259-tbl-0002:row8:col1, psp412259-tbl-0002:row8:col3 |  |
| Ka (/h) | `Q49` · kabs | 2.00 | /h | 0.0005556 | 1/s | 1/h | exact (1) | psp412259-tbl-0002:row9:col1, psp412259-tbl-0002:row9:col3 | 0.243 (None% RSE) |
| F | `Q40` · Fab | 0.425 |  |  |  |  | exact (1) | psp412259-tbl-0002:row11:col1, psp412259-tbl-0002:row11:col3 |  |
| theta_cl_cyp2c9 | `Q900` · theta_cl_cyp2c9 | -0.400 |  |  |  |  |  | psp412259-tbl-0002:row4:col1, psp412259-tbl-0002:row4:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- covariate level 'CYP2C9 *2 on CL' → Q900:cyp2c9_2_on_cl = -0.147 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'LBM on Vd' — extend the ontology if this is a real PK parameter (source ['psp412259-tbl-0002:row6:col1', 'psp412259-tbl-0002:row6:col3'])
- dropped unlinked row (NIL): 'DT (h)' — extend the ontology if this is a real PK parameter (source ['psp412259-tbl-0002:row10:col1', 'psp412259-tbl-0002:row10:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=meloxicam
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell psp412259-tbl-0002:row2:col2 = '(0.375 to 0.407)'
- unparsed cell psp412259-tbl-0002:row2:col4 = '(0.375 to 0.407)'
- unparsed cell psp412259-tbl-0002:row3:col2 = '(−0.234 to −0.0604)'
- unparsed cell psp412259-tbl-0002:row3:col4 = '(−0.215 to −0.0410)'
- unparsed cell psp412259-tbl-0002:row4:col2 = '(−0.488 to −0.312)'
- unparsed cell psp412259-tbl-0002:row4:col4 = '(−0.483 to −0.301)'
- unparsed cell psp412259-tbl-0002:row5:col2 = '(7.24 to 8.34)'
- unparsed cell psp412259-tbl-0002:row5:col4 = '(7.01 to 8.35)'
- unparsed cell psp412259-tbl-0002:row6:col2 = '(0.695 to 1.40)'
- unparsed cell psp412259-tbl-0002:row6:col4 = '(0.746 to 1.41)'
- unparsed cell psp412259-tbl-0002:row7:col2 = '(0.948 to 1.53)'
- unparsed cell psp412259-tbl-0002:row7:col4 = '(1.00 to 1.68)'
- unparsed cell psp412259-tbl-0002:row8:col2 = '(2.20 to 3.26)'
- unparsed cell psp412259-tbl-0002:row8:col4 = '(2.22 to 3.49)'
- unparsed cell psp412259-tbl-0002:row9:col2 = '(1.38 to 2.62)'
- unparsed cell psp412259-tbl-0002:row9:col4 = '(1.44 to 2.84)'
- unparsed cell psp412259-tbl-0002:row10:col2 = '(1.86 to 1.96)'
- unparsed cell psp412259-tbl-0002:row10:col4 = '(1.83 to 1.94)'
- unparsed cell psp412259-tbl-0002:row11:col2 = '(0.367 to 0.483)'
- unparsed cell psp412259-tbl-0002:row11:col4 = '(0.364 to 0.481)'
- unparsed cell psp412259-tbl-0002:row12:col2 = '(18.4 to 23.9)'
- unparsed cell psp412259-tbl-0002:row12:col4 = '(18.2 to 23.5)'
- unparsed cell psp412259-tbl-0002:row13:col2 = '(13.4 to 20.3)'
- unparsed cell psp412259-tbl-0002:row13:col4 = '(14.0 to 20.0)'
- unparsed cell psp412259-tbl-0002:row14:col2 = '(68.1 to 201)'
- unparsed cell psp412259-tbl-0002:row14:col4 = '(81.5 to 193)'
- unparsed cell psp412259-tbl-0002:row15:col2 = '(1.46 to 2.60)'
- unparsed cell psp412259-tbl-0002:row15:col4 = '(1.45 to 2.62)'
- unparsed cell psp412259-tbl-0002:row16:col2 = '(0.0269 to 0.459)'
- unparsed cell psp412259-tbl-0002:row16:col4 = '(0.0421 to 0.482)'
- unparsed cell psp412259-tbl-0002:row17:col2 = '(11.3 to 13.2)'
- unparsed cell psp412259-tbl-0002:row17:col4 = '(11.4 to 13.2)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412259-tbl-0002:row2:col1', 'psp412259-tbl-0002:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412259-tbl-0002:row7:col1', 'psp412259-tbl-0002:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412259-tbl-0002:row9:col1', 'psp412259-tbl-0002:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412259-tbl-0002:row5:col1', 'psp412259-tbl-0002:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412259-tbl-0002:row8:col1', 'psp412259-tbl-0002:row8:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.391 | ['psp412259-tbl-0002:row2:col1', 'psp412259-tbl-0002:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.391 L/h | ['psp412259-tbl-0002:row2:col1', 'psp412259-tbl-0002:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.79 L | ['psp412259-tbl-0002:row5:col1', 'psp412259-tbl-0002:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.73 L | ['psp412259-tbl-0002:row8:col1', 'psp412259-tbl-0002:row8:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_modelica.zip" download>Meloxicam_Aoyama2017_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_fmi.zip" download>Meloxicam_Aoyama2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_matlab.zip" download>Meloxicam_Aoyama2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_matlab_simbio.zip" download>Meloxicam_Aoyama2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_sbml.zip" download>Meloxicam_Aoyama2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_cellml.zip" download>Meloxicam_Aoyama2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3514 | kg/mol |
| input | dosing | `F` | 0.425 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7.5e-06 | kg |
| input | model | `Cl` | 1.086e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001113 | m3/kg |
| input | model | `ka` | 0.0005556 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Aoyama T, Ishida Y, Kaneko M, Miyamoto A, Saito Y, Tohkin M et al. Pharmacokinetics and Pharmacodynamics of Meloxicam in East Asian Populations: The Role of Ethnicity on Drug Response. CPT: pharmacometrics & systems pharmacology 6(12):823–832 (2017). [doi:10.1002/psp4.12259](https://doi.org/10.1002/psp4.12259)

**This record:** Pharmacolibrary v26.09, model `Meloxicam_Aoyama2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference>

```bibtex
@misc{pharmacolibrary_MeloxicamAoyama2017reference,
  title  = {{Pharmacolibrary model Meloxicam_Aoyama2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference},
  note   = {Parameters from doi:10.1002/psp4.12259},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 7.5 mg, single dose, first-order absorption (ka 2 /h, F 0.425). Dose in the paper: 7.5 mg.

<dbs-fmusim paramsurl="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Meloxicam_Aoyama2017_reference_params.json` · controls `Meloxicam_Aoyama2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmeloxicam%5D%20Meloxicam_Aoyama2017_reference&body=Drug%3A%20meloxicam%0ARecord%3A%20Meloxicam_Aoyama2017_reference%0APaper%3A%20Aoyama_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:49 UTC</sub>
