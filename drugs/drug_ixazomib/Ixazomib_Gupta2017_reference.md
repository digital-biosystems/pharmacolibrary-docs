<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ixazomib&quot;,&quot;href&quot;:&quot;drugs/drug_ixazomib/&quot;},{&quot;label&quot;:&quot;Gupta_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ixazomib_Gupta2017_reference&quot;,&quot;label&quot;:&quot;Gupta_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ixazomib/Ixazomib_Gupta2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ixazomib — `Ixazomib_Gupta2017_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="ixazomib" model-id="Ixazomib_Gupta2017_reference" status="curated_candidate" stale="false" population="adults with multiple myeloma" measured-compound="ixazomib" parameterization="mechanistic" topology="2C"></div>

## Citation
Gupta N, Diderichsen PM, Hanley MJ, Berg D, van de Velde H, Harvey RD et al. Population Pharmacokinetic Analysis of Ixazomib, an Oral Proteasome Inhibitor, Including Data from the Phase III TOURMALINE-MM1 Study to Inform Labelling. Clinical pharmacokinetics 56(11):1355–1368 (2017).
  ·  DOI: [10.1007/s40262-017-0526-4](https://doi.org/10.1007/s40262-017-0526-4)

## Population and dosing

**Population:** adults with multiple myeloma · age group adult · n = condition: "multiple myeloma",.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference.svg" alt="Ixazomib_Gupta2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Absorption rate constant (log K a) | kabs | -1.09 | 1/h | 8 |
| Systemic clearance (log CL) | CL | 0.62 | L/h | 7 |
| Central volume of distribution (log V 2) | V1 | 2.62 | L | 4 |
| Absolute bioavailability (log F) | Fab | -0.55 | log F | 9 |
| First inter-compartmental clearance (log Q3) | Q3 | 1.65 | L/h | 7 |
| Volume of the first peripheral compartment (log V 3) | V2 | 5.73 | L | 1 |
| Second inter-compartmental clearance (log Q4) | Q | 3.26 | L/h | 2 |
| Volume of the second peripheral compartment (log V 4) | V3 | 5.32 | L | 1 |
| Absorption lag time (log T LAG) | tlag | -1.52 | h | 0 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Fab), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ixazomib, the second reading unknown; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant (log K a) | `Q49` · kabs | -1.09 | 1/h | -0.0003028 | 1/s | 1/h | 8 | exact (1) | Tab3:row1:col1, Tab3:row1:col2, Tab3:row1:col4 |
| Systemic clearance (log CL) | `Q22` · CL | 0.62 | L/h | 1.722e-07 | m3/s | L/h | 7 | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col4 |
| Central volume of distribution (log V 2) | `Q63` · V1 | 2.62 | L | 0.00262 | m3 | L | 4 | boundary_compartment (0.9) | Tab3:row3:col1, Tab3:row3:col2 |
| Absolute bioavailability (log F) | `Q40` · Fab | -0.55 | log F |  |  |  | 9 | exact (1) | Tab3:row4:col1, Tab3:row4:col2 |
| First inter-compartmental clearance (log Q3) | `Q308` · Q3 | 1.65 | L/h | 4.583e-07 | m3/s | L/h | 7 | llm_corrected (0.6) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col4 |
| Volume of the first peripheral compartment (log V 3) | `Q64` · V2 | 5.73 | L | 0.00573 | m3 | L | 1 | boundary_compartment (0.9) | Tab3:row6:col1, Tab3:row6:col2 |
| Second inter-compartmental clearance (log Q4) | `Q30` · Q | 3.26 | L/h | 9.056e-07 | m3/s | L/h | 2 | llm_confirmed (0.6) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col4 |
| Volume of the second peripheral compartment (log V 4) | `Q77` · V3 | 5.32 | L | 0.00532 | m3 | L | 1 | exact (1) | Tab3:row8:col1, Tab3:row8:col2 |
| Absorption lag time (log T LAG) | `Q83` · tlag | -1.52 | h | -5472 | s | h | 0 | exact (1) | Tab3:row9:col1, Tab3:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'log K a' (kabs)
- unit_dimension_unknown: 'log CL' (CL)
- unit_dimension_unknown: 'log V 2' (V1)
- unit_dimension_unknown: 'log Q3' (Q3)
- unit_dimension_unknown: 'log V 3' (V2)
- unit_dimension_unknown: 'log Q4' (Q)
- unit_dimension_unknown: 'log V 4' (V3)
- unit_dimension_unknown: 'log T LAG' (tlag)
- unit_dimension_unknown: 'V 4[BSA]' (V2)
- dropped duplicate Q64 ('Impact of BSA on V 4 (V 4[BSA])', value '2.06') — already have one for this compound
- implicit units: 'Absorption rate constant (log K a)' → 1/h (from the paper text: "Table 3 explicitly states the untransformed parameter for Absorption rate constant as '1/h ~ t 1/2 = 124 min'.")
- implicit units: 'Systemic clearance (log CL)' → L/h (from the paper text: "Table 3 explicitly states the untransformed parameter for Systemic clearance as '1.86 L/h'. The text also confirms 'syst")
- implicit units: 'Central volume of distribution (log V 2)' → L (from the paper text: "Table 3 explicitly states the untransformed parameter for Central volume of distribution as '13.7 L'. The text also conf")
- implicit units: 'First inter-compartmental clearance (log Q3)' → L/h (from the paper text: "Table 3 explicitly states the untransformed parameter for First inter-compartmental clearance as '5.18 L/h'.")
- implicit units: 'Volume of the first peripheral compartment (log V 3)' → L (from the paper text: "Table 3 explicitly states the untransformed parameter for Volume of the first peripheral compartment as '309 L'.")
- implicit units: 'Second inter-compartmental clearance (log Q4)' → L/h (from the paper text: "Table 3 explicitly states the untransformed parameter for Second inter-compartmental clearance as '27.4 L/h' (implied by")
- implicit units: 'Volume of the second peripheral compartment (log V 4)' → L (from the popPK convention: 'The text excerpt truncates the line for Volume of the second peripheral compartment. However, Volume of the first periph')
- implicit units: 'Absorption lag time (log T LAG)' → h (from the popPK convention: "The text excerpt truncates the line for Absorption lag time. However, the text mentions 'median time to maximum plasma c")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ixazomib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted

**Extraction notes:**
- unparsed cell Tab3:row3:col4 = '13.7 L'
- unparsed cell Tab3:row4:col4 = '58%'
- unparsed cell Tab3:row6:col4 = '309 L'
- unparsed cell Tab3:row8:col4 = '205 L'
- unparsed cell Tab3:row9:col4 = '13 min'
- unparsed cell Tab3:row10:col4 = '−37 and +46% at the 5th and 95th percentile (1.5 and 2.25 m2) on V 4 relative to median BSA (1.87 m2)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absolute bioavailability]` | -0.55 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute bioavailability]` |  | -0.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | -1.52 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` |  | -1.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | -1.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` |  | -1.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 2.62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` |  | 2.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[first inter-compartmental clearance]` | 1.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[first inter-compartmental clearance]` |  | 1.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[impact of bsa on v 4]` |  | 2.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[second inter-compartmental clearance]` | 3.26 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[second inter-compartmental clearance]` |  | 3.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | 0.62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` |  | 0.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the first peripheral compartment]` | 5.73 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the first peripheral compartment]` |  | 5.73 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the second peripheral compartment]` | 5.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the second peripheral compartment]` |  | 5.32 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ixazomib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ixazomib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 9.5 | 10.2 | 1.074 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row7:col1', 'Tab3:row7:col2', 'Tab3:row7:col4'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab3:row1:col1', 'Tab3:row1:col2', 'Tab3:row1:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  |  |  | ['Tab3:row8:col1', 'Tab3:row8:col2'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Tab3:row9:col1', 'Tab3:row9:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.62 |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col4'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.62 L/h |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.62 L |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.73 L |  |  | ['Tab3:row6:col1', 'Tab3:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=ixazomib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | 9.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 9.53 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 9.35 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_modelica.zip" download>Ixazomib_Gupta2017_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_fmi.zip" download>Ixazomib_Gupta2017_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_matlab.zip" download>Ixazomib_Gupta2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_matlab_simbio.zip" download>Ixazomib_Gupta2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_sbml.zip" download>Ixazomib_Gupta2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_cellml.zip" download>Ixazomib_Gupta2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.361 | kg/mol |
| input | dosing | `F` | -0.55 | 1 |
| input | dosing | `Tlag` | -5472 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4.3e-07 | kg |
| input | model | `Cl` | 1.722e-07 | m3/s |
| input | model | `VdPerKg` | 3.743e-05 | m3/kg |
| input | model | `k12` | 0.0003456 | 1/s |
| input | model | `k21` | 0.000158 | 1/s |
| input | model | `ka` | -0.0003028 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gupta N, Diderichsen PM, Hanley MJ, Berg D, van de Velde H, Harvey RD et al. Population Pharmacokinetic Analysis of Ixazomib, an Oral Proteasome Inhibitor, Including Data from the Phase III TOURMALINE-MM1 Study to Inform Labelling. Clinical pharmacokinetics 56(11):1355–1368 (2017). [doi:10.1007/s40262-017-0526-4](https://doi.org/10.1007/s40262-017-0526-4)

**This record:** Pharmacolibrary v26.09, model `Ixazomib_Gupta2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ixazomib/Ixazomib_Gupta2017_reference>

```bibtex
@misc{pharmacolibrary_IxazomibGupta2017reference,
  title  = {{Pharmacolibrary model Ixazomib_Gupta2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ixazomib/Ixazomib_Gupta2017_reference},
  note   = {Parameters from doi:10.1007/s40262-017-0526-4},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.43 mg, single dose, first-order absorption (ka -1.09 /h, lag -91.2 min, F -0.55). _The paper's dose was not captured; the default is the WHO ATC DDD 0.43 mg oral (L01XG03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ixazomib_Gupta2017_reference_params.json` · controls `Ixazomib_Gupta2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bixazomib%5D%20Ixazomib_Gupta2017_reference&body=Drug%3A%20ixazomib%0ARecord%3A%20Ixazomib_Gupta2017_reference%0APaper%3A%20Gupta_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ixazomib/Ixazomib_Gupta2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 20:49 UTC</sub>
