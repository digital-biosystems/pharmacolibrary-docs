<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;ampicillin&quot;,&quot;href&quot;:&quot;drugs/drug_ampicillin/&quot;},{&quot;label&quot;:&quot;Gastine_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ampicillin_Bardhi2026_reference&quot;,&quot;label&quot;:&quot;Bardhi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ampicillin/Ampicillin_Bardhi2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ampicillin_Onita2026_reference&quot;,&quot;label&quot;:&quot;Onita_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ampicillin/Ampicillin_Onita2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ampicillin_Yin2026_reference&quot;,&quot;label&quot;:&quot;Yin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ampicillin/Ampicillin_Yin2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ampicillin_Gastine2022_reference&quot;,&quot;label&quot;:&quot;Gastine_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ampicillin/Ampicillin_Gastine2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ampicillin_Judy2024_reference&quot;,&quot;label&quot;:&quot;Judy_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ampicillin/Ampicillin_Judy2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ampicillin_Padari2021_reference&quot;,&quot;label&quot;:&quot;Padari_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ampicillin/Ampicillin_Padari2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ampicillin — `Ampicillin_Gastine2022_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Ampicillin model failed peak concentration check due to unit mismatch, and bioavailability/elimination parameters relied on defaults.

<div class="pk-model-meta" hidden drug="ampicillin" model-id="Ampicillin_Gastine2022_reference" status="needs_review" stale="false" population="neonates" measured-compound="ampicillin and gentamicin" parameterization="mechanistic" topology="2C"></div>

## Citation
Gastine S, Obiero C, Kane Z, Williams P, Readman J, Murunga S et al. Simultaneous pharmacokinetic/pharmacodynamic (PKPD) assessment of ampicillin and gentamicin in the treatment of neonatal sepsis. The Journal of antimicrobial chemotherapy 77(2):448–456 (2022).
  ·  DOI: [10.1093/jac/dkab413](https://doi.org/10.1093/jac/dkab413)

## Population and dosing

**Population:** neonates · condition neonatal sepsis · age group neonate.

**Dosing:** 3500, 7000 mg, iv, multiple, every 8 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference.svg" alt="Ampicillin_Gastine2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLGFR (L/h) | CL | 6.89 | L/h | 8 |
| Central VdGent (L) | V1 | 26.4 | L | 18 |
| QGent (L/h) | Q | 0.956 | L/h | 28 |
| Peripheral VdGent (L) | V2 | 6.69 | L | 36 |
| creatinine_on_clgfr | creatinine_on_clgfr | -0.423 |  | 53 |
| Ka (absorption rate constant) | kabs | 6.45 | h-1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ampicillin model failed peak concentration check due to unit mismatch, and bioavailability/elimination parameters relied on defaults.**

The simulated peak concentration was 4.23e-06 mg/L, far below the paper's reported 0.01 mg/L, indicating a fundamental discrepancy. Bioavailability and elimination rate constants were not estimated from the paper but left at library defaults. Additionally, the creatinine covariate effect was defined but the corresponding scenarios were not simulated. Extracted — ampicillin: CL 6.89 L/h, V1 26.4 L, Q 0.956 L/h, V2 6.69 L; ampicillin and gentamicin: kabs 6.45 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ampicillin and gentamicin, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLGFR (L/h) | `Q22` · CL | 6.89 | L/h | 1.914e-06 | m3/s | l/h | 8 | llm (0.6) | dkab413-T2:row1:col1, dkab413-T2:row1:col3 |
| Central VdGent (L) | `Q63` · V1 | 26.4 | L | 0.0264 | m3 | l | 18 | llm (0.6) | dkab413-T2:row2:col1, dkab413-T2:row2:col3 |
| QGent (L/h) | `Q30` · Q | 0.956 | L/h | 2.656e-07 | m3/s | l/h | 28 | llm (0.6) | dkab413-T2:row3:col1, dkab413-T2:row3:col3 |
| Peripheral VdGent (L) | `Q64` · V2 | 6.69 | L | 0.00669 | m3 | l | 36 | llm (0.6) | dkab413-T2:row4:col1, dkab413-T2:row4:col3 |
| creatinine_on_clgfr | `Q900` · creatinine_on_clgfr | -0.423 |  |  |  |  | 53 |  | dkab413-T2:row9:col1 |
| Ka (absorption rate constant) | `Q49` · kabs | 6.45 | h-1 | 0.001792 | 1/s | 1/h |  | review_gapfill (0.7) | Jimenez-Toro_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag', 'k12']

**Interpretation flags:**
- table section iiv: 'CLGFR (L/h)' routed out of structural estimates ('IIV (%) (RSE, %)')
- table section iiv: 'Central VdGent (L)' routed out of structural estimates ('IIV (%) (RSE, %)')
- table section iiv: 'CLnon-GFR (L/h)' routed out of structural estimates ('IIV (%) (RSE, %)')
- dropped duplicate Q22 ('CLnon-GFR (L/h)', value '5.3') — already have one for this compound
- dropped duplicate Q63 ('Central VdAmp (L)', value '52.7') — already have one for this compound
- dropped unlinked row (NIL): 'PNAfract (%)' — extend the ontology if this is a real PK parameter (source ['dkab413-T2:row7:col1'])
- dropped unlinked row (NIL): 'PNAcoeff' — extend the ontology if this is a real PK parameter (source ['dkab413-T2:row8:col1'])
- covariate level 'Creatinine on CLGFR' → Q900:creatinine_on_clgfr = -0.423 (linear_fractional on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ampicillin and gentamicin
- molar mass: no plausible PubChem entry for 'ampicillin and gentamicin' ('ampicillin and gentamicin') — left in mass units
- molar mass: none found for 'ampicillin and gentamicin' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Jimenez-Toro_2020's review values (primary lacked it)

**Extraction notes:**
- unparsed cell dkab413-T2:row9:col3 = '−1 to 0.05'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.526 (10/19 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clgfr].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clgfr].parameter_id` | Q22 | Q26 | mismatch |
| `gpt-oss-120b` | `parameters[clnon-gfr]` |  | 5.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine_on_clgfr]` | -0.423 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 6.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[pnafract]` |  | 44.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_creatinine]` |  | -0.423 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ampicillin and gentamicin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ampicillin and gentamicin | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['dkab413-T2:row1:col1', 'dkab413-T2:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['dkab413-T2:row3:col1', 'dkab413-T2:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jimenez-Toro_2020:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['dkab413-T2:row2:col1', 'dkab413-T2:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['dkab413-T2:row4:col1', 'dkab413-T2:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.89 | ['dkab413-T2:row1:col1', 'dkab413-T2:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.89 L/h | ['dkab413-T2:row1:col1', 'dkab413-T2:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 26.4 L | ['dkab413-T2:row2:col1', 'dkab413-T2:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.69 L | ['dkab413-T2:row4:col1', 'dkab413-T2:row4:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=ampicillin and gentamicin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.01 | 4.227e-06 | 0.0004 | mg/L→SI vs simulated kg/m3 |
| T1_cmin_ss | reference | skipped | 1 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_modelica.zip" download>Ampicillin_Gastine2022_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_fmi.zip" download>Ampicillin_Gastine2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_matlab.zip" download>Ampicillin_Gastine2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_matlab_simbio.zip" download>Ampicillin_Gastine2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_sbml.zip" download>Ampicillin_Gastine2022_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_cellml.zip" download>Ampicillin_Gastine2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0035 | kg |
| input | model | `Cl` | 1.914e-06 | m3/s |
| input | model | `VdPerKg` | 0.0003771 | m3/kg |
| input | model | `k21` | 3.969e-05 | 1/s |
| input | model | `ka` | 0.001792 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gastine S, Obiero C, Kane Z, Williams P, Readman J, Murunga S et al. Simultaneous pharmacokinetic/pharmacodynamic (PKPD) assessment of ampicillin and gentamicin in the treatment of neonatal sepsis. The Journal of antimicrobial chemotherapy 77(2):448–456 (2022). [doi:10.1093/jac/dkab413](https://doi.org/10.1093/jac/dkab413)

**This record:** Pharmacolibrary v26.09, model `Ampicillin_Gastine2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ampicillin/Ampicillin_Gastine2022_reference>

```bibtex
@misc{pharmacolibrary_AmpicillinGastine2022reference,
  title  = {{Pharmacolibrary model Ampicillin_Gastine2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ampicillin/Ampicillin_Gastine2022_reference},
  note   = {Parameters from doi:10.1093/jac/dkab413},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3500 mg, single dose, first-order absorption (ka 6.45 /h, F 0.9). Doses in the paper: 3500, 7000 mg.

<dbs-fmusim paramsurl="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ampicillin/Ampicillin_Gastine2022_reference/Ampicillin_Gastine2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ampicillin_Gastine2022_reference_params.json` · controls `Ampicillin_Gastine2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bampicillin%5D%20Ampicillin_Gastine2022_reference&body=Drug%3A%20ampicillin%0ARecord%3A%20Ampicillin_Gastine2022_reference%0APaper%3A%20Gastine_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ampicillin/Ampicillin_Gastine2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:20 UTC</sub>
