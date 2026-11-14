<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Buprenorphine&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/&quot;},{&quot;label&quot;:&quot;Bj\u00f6rnsson_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Bjrnsson2023_reference&quot;,&quot;label&quot;:&quot;Bj\u00f6rnsson_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Buprenorphine_Jensen2007v2_reference&quot;,&quot;label&quot;:&quot;Jensen_2007_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jensen2007v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jones2021_reference&quot;,&quot;label&quot;:&quot;Jones_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Olofsen2022_reference&quot;,&quot;label&quot;:&quot;Olofsen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Olofsen2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Buprenorphine — `Buprenorphine_Bjrnsson2023_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Buprenorphine" model-id="Buprenorphine_Bjrnsson2023_reference" status="extracted" stale="false" population="healthy participants and participants with Opioid Use Disorder (OUD)" measured-compound="Buprenorphine" parameterization="mechanistic" topology="2C"></div>

## Citation
Björnsson M, Acharya C, Strandgården K, Tiberg F. Population Pharmacokinetic Analysis Supports Initiation Treatment and Bridging from Sublingual Buprenorphine to Subcutaneous Administration of a Buprenorphine Depot (CAM2038) in the Treatment of Opioid Use Disorder. Clinical pharmacokinetics 62(10):1427-1443 (2023).
  ·  DOI: [10.1007/s40262-023-01288-6](https://doi.org/10.1007/s40262-023-01288-6)

## Population and dosing

**Population:** healthy participants and participants with Opioid Use Disorder (OUD) · condition healthy | Opioid Use Disorder · age group adult · n = 252.

**Dosing:** 8, 16, 24, 32, 64, 96, 128 mg, subcutaneous, multiple, every 168 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference.svg" alt="Buprenorphine_Bjrnsson2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL(L/h) | CL | 52.1 | L/h | 1.80 | 20.9 (None% RSE) |
| Vc(L) | V1 | 64.3 | L | 10.3 | 78.6 (None% RSE) |
| Q2(L/h) | Q | 186 | L/h | 2.51 |  |
| V2(L) | V2 | 130 | L | 1.86 |  |
| Q3(L/h) | Q3 | 60.3 | L/h | 4.13 | 38.0 (None% RSE) |
| V3(L) | V3 | 1580 | L | 3.88 | 29.8 (None% RSE) |
| tlag,SL1(h) | tlag | 0.171 | h | 1.85 |  |
| ka,SL1(h–1) | kabs | 1.72 | h–1 | 4.33 | 86.3 (None% RSE) |
| DSL1(h) | equation variable | 0.419 | h | 4.40 |  |
| wt_covariate_on_cl | wt_covariate_on_cl | 0.413 | h | 20.9 |  |
| sex_covariate_on_fq1w1b | sex_covariate_on_fq1w1b | 0.576 | h | 36.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL(L/h) | `Q22` · CL | 52.1 | L/h | 1.447e-05 | m3/s | l/h | 1.80 | exact (1) | Tab3:row2:col1 | 20.9 (None% RSE) |
| Vc(L) | `Q63` · V1 | 64.3 | L | 0.0643 | m3 | l | 10.3 | exact (1) | Tab3:row3:col1 | 78.6 (None% RSE) |
| Q2(L/h) | `Q30` · Q | 186 | L/h | 5.167e-05 | m3/s | l/h | 2.51 | special_case (0.95) | Tab3:row4:col1 |  |
| V2(L) | `Q64` · V2 | 130 | L | 0.13 | m3 | l | 1.86 | exact (1) | Tab3:row5:col1 |  |
| Q3(L/h) | `Q308` · Q3 | 60.3 | L/h | 1.675e-05 | m3/s | l/h | 4.13 | exact (1) | Tab3:row6:col1 | 38.0 (None% RSE) |
| V3(L) | `Q77` · V3 | 1580 | L | 1.58 | m3 | l | 3.88 | exact (1) | Tab3:row7:col1 | 29.8 (None% RSE) |
| tlag,SL1(h) | `Q83` · tlag | 0.171 | h | 615.6 | s | h | 1.85 | llm_confirmed (0.6) | Tab3:row9:col1 |  |
| ka,SL1(h–1) | `Q49` · kabs | 1.72 | h–1 | 0.0004778 | 1/s | 1/h | 4.33 | llm_confirmed (0.6) | Tab3:row10:col1 | 86.3 (None% RSE) |
| DSL1(h) | `Q900` · equation variable | 0.419 | h |  |  | h | 4.40 | llm (0.6) | Tab3:row13:col1 |  |
| wt_covariate_on_cl | `Q900` · wt_covariate_on_cl | 0.413 | h |  |  | h | 20.9 |  | Tab3:row23:col1 |  |
| sex_covariate_on_fq1w1b | `Q900` · sex_covariate_on_fq1w1b | 0.576 | h |  |  | h | 36.1 |  | Tab3:row25:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section iiv: 'CL(L/h)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'CL(L/h)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'Vc(L)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'Vc(L)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'Q3(L/h)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'Q3(L/h)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'V3(L)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'V3(L)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'FSL(%)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'FSL(%)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'ka,SL2(h–1)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'ka,SL2(h–1)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'FSL1(%)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'FSL1(%)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'ka,q1w2(h–1)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'ka,q1w2(h–1)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'Fq1w1(%)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'Fq1w1(%)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'ka,q4w2(h-1)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'ka,q4w2(h-1)' routed out of structural estimates ('IIV / RSE (%)')
- table section iiv: 'Fq4w1(%)' routed out of structural estimates ('IIV / CV (%)')
- table section iiv: 'Fq4w1(%)' routed out of structural estimates ('IIV / RSE (%)')
- dropped unlinked row (NIL): 'FSL(%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1'])
- dropped duplicate Q49 ('ka,SL2(h–1)', value '0.0875') — already have one for this compound
- dropped unlinked row (NIL): 'FSL1(%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1'])
- dropped duplicate Q49 ('ka,q1w1(h–1)', value '0.0401') — already have one for this compound
- dropped duplicate Q49 ('ka,q1w2(h–1)', value '0.00565') — already have one for this compound
- dropped unlinked row (NIL): 'Fq1w1(%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row17:col1'])
- dropped unlinked row (NIL): 'Dq1w1(h)' — extend the ontology if this is a real PK parameter (source ['Tab3:row18:col1'])
- dropped duplicate Q49 ('ka,q4w1(h–1)', value '0.0441') — already have one for this compound
- dropped duplicate Q49 ('ka,q4w2(h-1)', value '0.00166') — already have one for this compound
- dropped unlinked row (NIL): 'Fq4w1(%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row21:col1'])
- covariate level 'WT covariate on CL' → Q900:wt_covariate_on_cl = 0.413 (linear_fractional on Q22)
- covariate level 'Sex covariate on Fq1w1b' → Q900:sex_covariate_on_fq1w1b = 0.576 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Population covariate on Vca' — extend the ontology if this is a real PK parameter (source ['Tab3:row26:col1'])
- dropped value-less row: 'FSL1'
- dropped value-less row: 'Fq1w1'
- dropped value-less row: 'Fq4w1'
- unit inherited for wt_covariate_on_cl (Q900): 'h' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for sex_covariate_on_fq1w1b (Q900): 'h' from a same-Q-code sibling (this row's label had no unit)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL(L/h)); Q63 (Vc(L)); Q30 (Q2(L/h)); Q64 (V2(L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Buprenorphine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- model equation 'toCL = (Age/70)^θ' not bound — neither LHS nor base term 'Age' linked to an ontology parameter

**Extraction notes:**
- table Tab3: unbound_uncertainty
- LLM selected parameter table(s) 3
- captured model equation toCL = (Age/70)^θ

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row4:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Tab3:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row10:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row5:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab3:row7:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 52.1 | ['Tab3:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 52.1 L/h | ['Tab3:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 64.3 L | ['Tab3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 130 L | ['Tab3:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_modelica.zip" download>Buprenorphine_Bjrnsson2023_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_fmi.zip" download>Buprenorphine_Bjrnsson2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_matlab.zip" download>Buprenorphine_Bjrnsson2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_matlab_simbio.zip" download>Buprenorphine_Bjrnsson2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_sbml.zip" download>Buprenorphine_Bjrnsson2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_cellml.zip" download>Buprenorphine_Bjrnsson2023_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4676 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 615.6 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 8e-06 | kg |
| input | model | `Cl` | 1.447e-05 | m3/s |
| input | model | `VdPerKg` | 0.0009186 | m3/kg |
| input | model | `k12` | 0.0008035 | 1/s |
| input | model | `k21` | 0.0003974 | 1/s |
| input | model | `ka` | 0.0004778 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Björnsson M, Acharya C, Strandgården K, Tiberg F. Population Pharmacokinetic Analysis Supports Initiation Treatment and Bridging from Sublingual Buprenorphine to Subcutaneous Administration of a Buprenorphine Depot (CAM2038) in the Treatment of Opioid Use Disorder. Clinical pharmacokinetics 62(10):1427-1443 (2023). [doi:10.1007/s40262-023-01288-6](https://doi.org/10.1007/s40262-023-01288-6)

**This record:** Pharmacolibrary, model `Buprenorphine_Bjrnsson2023_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference>

```bibtex
@misc{pharmacolibrary_BuprenorphineBjrnsson2023reference,
  title  = {{Pharmacolibrary model Buprenorphine_Bjrnsson2023_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference},
  note   = {Parameters from doi:10.1007/s40262-023-01288-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 8 mg, single dose, first-order absorption (ka 1.72 /h, lag 10.3 min, F 0.9). Doses in the paper: 8, 16, 24, 32, 64, 96, 128 mg.

<dbs-fmusim paramsurl="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference/Buprenorphine_Bjrnsson2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Buprenorphine_Bjrnsson2023_reference_params.json` · controls `Buprenorphine_Bjrnsson2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Bjrnsson2023_reference&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Bjrnsson2023_reference%0APaper%3A%20Bj%C3%B6rnsson_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 13:29 UTC</sub>
