<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;febuxostat&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/&quot;},{&quot;label&quot;:&quot;Kamel_2022 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Febuxostat_Kamel2022_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Febuxostat_Kamel2022_se_for_the_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_se_for_the_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_se_for_the_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# febuxostat — `Febuxostat_Kamel2022_estimate`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="febuxostat" model-id="Febuxostat_Kamel2022_estimate" status="accepted_with_caveats" stale="false" population="healthy subjects and people with gout" measured-compound="febuxostat" parameterization="apparent" topology="2C"></div>

## Citation
Kamel B, Abuhelwa AY, Foster D, Duong JK, Graham GG, Williams KM et al. Population pharmacokinetic modelling of febuxostat in healthy subjects and people with gout. British journal of clinical pharmacology 88(12):5359–5368 (2022).
  ·  DOI: [10.1111/bcp.15462](https://doi.org/10.1111/bcp.15462)

## Population and dosing

**Population:** healthy subjects and people with gout · condition healthy and gout · age group adult · n = &gt;= 38.

**Dosing:** 40, 80, 160 mg, oral, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate.svg" alt="Febuxostat_Kamel2022_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (ϴ 1) | CL/F | 6.91 | L/h | 13.6 (37.4% RSE) |
| Vc/F (ϴ 2) | V1/F | 32.8 | L | 22.0 (35.4% RSE) |
| Q (ϴ 3) | Q | 1.25 | L/h |  |
| Vp/F (ϴ 4) | V2/F | 19.4 | L | 19.5 (58.2% RSE) |
| ka (ϴ 5) | kabs | 3.62 | 1/h |  |
| covariate_food_on_oral_availability | covariate_food_on_oral_availability | -0.667 |  |  |
| theta_kabs_food | theta_kabs_food | -0.869 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has febuxostat, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (ϴ 1) | `Q27` · CL/F | 6.91 | L/h | 1.919e-06 | m3/s | L/h | exact (1) | bcp15462-tbl-0002:row1:col1 | 13.6 (37.4% RSE) |
| Vc/F (ϴ 2) | `Q290` · V1/F | 32.8 | L | 0.0328 | m3 | L | exact (1) | bcp15462-tbl-0002:row3:col1 | 22.0 (35.4% RSE) |
| Q (ϴ 3) | `Q30` · Q | 1.25 | L/h | 3.472e-07 | m3/s | L/h | exact (1) | bcp15462-tbl-0002:row5:col1 |  |
| Vp/F (ϴ 4) | `Q82` · V2/F | 19.4 | L | 0.0194 | m3 | L | exact (1) | bcp15462-tbl-0002:row6:col1 | 19.5 (58.2% RSE) |
| ka (ϴ 5) | `Q49` · kabs | 3.62 | 1/h | 0.001006 | 1/s | 1/h | exact (1) | bcp15462-tbl-0002:row7:col1 |  |
| covariate_food_on_oral_availability | `Q900` · covariate_food_on_oral_availability | -0.667 |  |  |  |  |  | bcp15462-tbl-0002:row8:col1 |  |
| theta_kabs_food | `Q900` · theta_kabs_food | -0.869 |  |  |  |  |  | bcp15462-tbl-0002:row9:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'BSV‐CL/F (ϴ 1)' routed out of structural estimates ('BSV (shrinkage %)')
- table section iiv: 'BSV‐Vc/F (ϴ 2)' routed out of structural estimates ('BSV (shrinkage %)')
- table section iiv: 'BSV‐Vp/F (ϴ 4)' routed out of structural estimates ('BSV‐Q (ϴ 3)')
- table section iiv: 'BSV‐FVAR' routed out of structural estimates ('BSV‐ka (ϴ 5)')
- table section iiv: 'RUV‐CV% (shrinkage %)' routed out of structural estimates ('BSV‐ka (ϴ 5)')
- routed 'Covariate TCrCL (ϴ 6)' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Covariate BMI (ϴ 7)' — extend the ontology if this is a real PK parameter (source ['bcp15462-tbl-0002:row4:col1'])
- covariate level 'Covariate food on oral availability' → Q900:covariate_food_on_oral_availability = -0.667 (linear_fractional on Q27)
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['bcp15462-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['bcp15462-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['bcp15462-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL/F (ϴ 1)' → L/h (from the paper text: "Abstract: 'population mean for apparent clearance (CL/F) ... were 6.91 l h−1'; Table 2 Caption: 'CL/F, apparent clearanc")
- implicit units: 'Vc/F (ϴ 2)' → L (from the paper text: "Abstract: 'apparent central volume of distribution (Vc/F) ... were ... 32.8 l'; Model equations text: 'Vc/F is the appar")
- implicit units: 'Q (ϴ 3)' → L/h (from the paper text: "Table 2 Caption: 'Q, intercompartmental clearance (L h−1)'")
- implicit units: 'Vp/F (ϴ 4)' → L (from the paper text: "Abstract: 'apparent peripheral volume of distribution (Vp/F) ... were ... 19.4 l'")
- implicit units: 'ka (ϴ 5)' → 1/h (from the paper text: "Abstract: 'absorption rate constant (ka) ... were ... 3.6 h−1'; Table 2 Caption: 'ka, absorption rate constant (h−1)'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=febuxostat
- population split: 'estimate' subgroup of Kamel_2022 (paper reports 2 populations: estimate, se% for the estimate)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[covariate bmi]` |  | 0.996 | only_one_extracted |
| `gpt-oss-120b` | `parameters[covariate_food_on_oral_availability]` | -0.667 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_food]` |  | -0.667 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | febuxostat | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | febuxostat | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bcp15462-tbl-0002:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['bcp15462-tbl-0002:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp15462-tbl-0002:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcp15462-tbl-0002:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['bcp15462-tbl-0002:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.91 L/h | ['bcp15462-tbl-0002:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 32.8 L | ['bcp15462-tbl-0002:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 19.4 L | ['bcp15462-tbl-0002:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=febuxostat) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_modelica.zip" download>Febuxostat_Kamel2022_estimate_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_fmi.zip" download>Febuxostat_Kamel2022_estimate_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_matlab.zip" download>Febuxostat_Kamel2022_estimate_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_matlab_simbio.zip" download>Febuxostat_Kamel2022_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_sbml.zip" download>Febuxostat_Kamel2022_estimate_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_cellml.zip" download>Febuxostat_Kamel2022_estimate_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3164 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4e-05 | kg |
| input | model | `Cl` | 1.919e-06 | m3/s |
| input | model | `VdPerKg` | 0.0004686 | m3/kg |
| input | model | `k12` | 1.059e-05 | 1/s |
| input | model | `k21` | 1.79e-05 | 1/s |
| input | model | `ka` | 0.001006 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kamel B, Abuhelwa AY, Foster D, Duong JK, Graham GG, Williams KM et al. Population pharmacokinetic modelling of febuxostat in healthy subjects and people with gout. British journal of clinical pharmacology 88(12):5359–5368 (2022). [doi:10.1111/bcp.15462](https://doi.org/10.1111/bcp.15462)

**This record:** Pharmacolibrary v26.09, model `Febuxostat_Kamel2022_estimate`. <https://pharmacolibrary.github.io/#/drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate>

```bibtex
@misc{pharmacolibrary_FebuxostatKamel2022estimate,
  title  = {{Pharmacolibrary model Febuxostat_Kamel2022_estimate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate},
  note   = {Parameters from doi:10.1111/bcp.15462},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 40 mg, single dose, first-order absorption (ka 3.62 /h, F 1). Doses in the paper: 40, 80, 160 mg.

<dbs-fmusim paramsurl="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate/Febuxostat_Kamel2022_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Febuxostat_Kamel2022_estimate_params.json` · controls `Febuxostat_Kamel2022_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfebuxostat%5D%20Febuxostat_Kamel2022_estimate&body=Drug%3A%20febuxostat%0ARecord%3A%20Febuxostat_Kamel2022_estimate%0APaper%3A%20Kamel_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:23 UTC</sub>
