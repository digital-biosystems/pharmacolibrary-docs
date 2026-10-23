<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;brigatinib&quot;,&quot;href&quot;:&quot;drugs/drug_brigatinib/&quot;},{&quot;label&quot;:&quot;Gupta_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brigatinib_Gupta2021_reference&quot;,&quot;label&quot;:&quot;Gupta_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brigatinib/Brigatinib_Gupta2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brigatinib — `Brigatinib_Gupta2021_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Brigatinib’s absorption-rate parameter ka has no reported value and was defaulted, so the record was held back.

<div class="pk-model-meta" hidden drug="brigatinib" model-id="Brigatinib_Gupta2021_reference" status="needs_review" stale="false" population="healthy volunteers and patients with cancer" measured-compound="brigatinib" parameterization="apparent" topology="2C"></div>

## Citation
Gupta N, Wang X, Offman E, Prohn M, Narasimhan N, Kerstein D et al. Population Pharmacokinetics of Brigatinib in Healthy Volunteers and Patients With Cancer. Clinical pharmacokinetics 60(2):235–247 (2021).
  ·  DOI: [10.1007/s40262-020-00929-4](https://doi.org/10.1007/s40262-020-00929-4)

## Population and dosing

**Population:** healthy volunteers and patients with cancer · condition cancer and healthy volunteers · age group adult · n = 442.

**Dosing:** 90, 120, 180 mg, oral.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference.svg" alt="Brigatinib_Gupta2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 10.6 | L/h | 2.7 | 48.4 (7.1% RSE) |
| V1/F (L) | V1/F | 207 | L | 3.8 | 55.6 (8.4% RSE) |
| Q1/F (L/h) | Q/F | 12.6 | L/h | 9.2 |  |
| V2/F (L) | V2/F | 114 | L | 11.2 | 95.2 (12.2% RSE) |
| V3/F (L) | V3/F | 78.5 | L | 8.6 |  |
| No. of transit compartmentsc | n_transit | 2.35 |  |  |  |
| Mean transit time (h) | MTT | 0.9 | h | 3.6 | 59 (7.5% RSE) |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.85). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Brigatinib’s absorption-rate parameter ka has no reported value and was defaulted, so the record was held back.**

Ka use library defaults, not estimates from this paper. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. The model also defaulted the transit lag time and assumed first-order depot input with F=1 and Fm=1, without molar correction; a reported unit could not be converted to SI, so its parameter reached the model builder without an SI value. Extracted — brigatinib: CL/F 10.6 L/h, V1/F 207 L, Q/F 12.6 L/h, V2/F 114 L, V3/F 78.5 L, n_transit 2.35, MTT 0.9 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl/f].covariate_forms`: this record has none, the second reading ['linear_fractional']; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 10.6 | L/h | 2.944e-06 | m3/s | l/h | 2.7 | exact (1) | Tab3:row1:col1 | 48.4 (7.1% RSE) |
| V1/F (L) | `Q290` · V1/F | 207 | L | 0.207 | m3 | l | 3.8 | exact (1) | Tab3:row2:col1 | 55.6 (8.4% RSE) |
| Q1/F (L/h) | `Q69` · Q/F | 12.6 | L/h | 3.5e-06 | m3/s | l/h | 9.2 | exact (1) | Tab3:row3:col1 |  |
| V2/F (L) | `Q82` · V2/F | 114 | L | 0.114 | m3 | l | 11.2 | exact (1) | Tab3:row4:col1 | 95.2 (12.2% RSE) |
| V3/F (L) | `Q78` · V3/F | 78.5 | L | 0.0785 | m3 | l | 8.6 | exact (1) | Tab3:row6:col1 |  |
| No. of transit compartmentsc | `Q311` · n_transit | 2.35 |  |  |  |  |  | llm (0.6) | Tab3:row7:col1 |  |
| Mean transit time (h) | `Q81` · MTT | 0.9 | h |  |  | h | 3.6 | exact (1) | Tab3:row8:col1 | 59 (7.5% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code |
|---|---|
| theta_q900_albumin | Q900 |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('Inter-individual variability,a % (% CV)')
- table section iiv: 'V1/F (L)' routed out of structural estimates ('Inter-individual variability,a % (% CV)')
- table section iiv: 'V2/F (L)' routed out of structural estimates ('Inter-individual variability,a % (% CV)')
- table section iiv: 'No. of transit compartmentsc' routed out of structural estimates ('Inter-individual variability,a % (% CV)')
- table section iiv: 'Mean transit time (h)' routed out of structural estimates ('Inter-individual variability,a % (% CV)')
- dropped duplicate Q69 ('Q2/F (L/h)', value '2.7') — already have one for this compound
- dropped unlinked row (NIL): 'Condition numberd' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=brigatinib
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell Tab3:row1:col4 = '10.6 (10.2–11.1)'
- unparsed cell Tab3:row2:col4 = '208 (193–219)'
- unparsed cell Tab3:row3:col4 = '12.8 (10.5–16.2)'
- unparsed cell Tab3:row4:col4 = '118 (83.6–147)'
- unparsed cell Tab3:row5:col4 = '2.46 (1.09–4.76)'
- unparsed cell Tab3:row6:col4 = '82.3 (57.6–112)'
- unparsed cell Tab3:row7:col4 = '2.35 (–)'
- unparsed cell Tab3:row8:col4 = '0.9 (0.8–1.0)'
- unparsed cell Tab3:row9:col4 = '0.656 (0.474–0.849)'
- unparsed cell Tab3:row10:col4 = '0.269 (0.256–0.283)'
- unparsed cell Tab3:row11:col4 = '0.226 (0.191–0.270)'
- LLM selected parameter table(s) 3
- LLM region Gupta_2021:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.85 (17/20 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_f_albumin]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_albumin]` |  |  | only_one_extracted |

</details>

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row3:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab3:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.6 L/h | ['Tab3:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 207 L | ['Tab3:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 114 L | ['Tab3:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=brigatinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_modelica.zip" download>Brigatinib_Gupta2021_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_fmi.zip" download>Brigatinib_Gupta2021_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_matlab.zip" download>Brigatinib_Gupta2021_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_matlab_simbio.zip" download>Brigatinib_Gupta2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_sbml.zip" download>Brigatinib_Gupta2021_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_cellml.zip" download>Brigatinib_Gupta2021_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5841 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 9e-05 | kg |
| input | model | `Cl` | 2.944e-06 | m3/s |
| input | model | `VdPerKg` | 0.002957 | m3/kg |
| input | model | `k12` | 1.691e-05 | 1/s |
| input | model | `k21` | 3.07e-05 | 1/s |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gupta N, Wang X, Offman E, Prohn M, Narasimhan N, Kerstein D et al. Population Pharmacokinetics of Brigatinib in Healthy Volunteers and Patients With Cancer. Clinical pharmacokinetics 60(2):235–247 (2021). [doi:10.1007/s40262-020-00929-4](https://doi.org/10.1007/s40262-020-00929-4)

**This record:** Pharmacolibrary v26.09, model `Brigatinib_Gupta2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_brigatinib/Brigatinib_Gupta2021_reference>

```bibtex
@misc{pharmacolibrary_BrigatinibGupta2021reference,
  title  = {{Pharmacolibrary model Brigatinib_Gupta2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_brigatinib/Brigatinib_Gupta2021_reference},
  note   = {Parameters from doi:10.1007/s40262-020-00929-4},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 90 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 90, 120, 180 mg.

<dbs-fmusim paramsurl="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_brigatinib/Brigatinib_Gupta2021_reference/Brigatinib_Gupta2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Brigatinib_Gupta2021_reference_params.json` · controls `Brigatinib_Gupta2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrigatinib%5D%20Brigatinib_Gupta2021_reference&body=Drug%3A%20brigatinib%0ARecord%3A%20Brigatinib_Gupta2021_reference%0APaper%3A%20Gupta_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brigatinib/Brigatinib_Gupta2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 21:54 UTC</sub>
