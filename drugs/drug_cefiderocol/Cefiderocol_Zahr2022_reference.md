<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefiderocol&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/&quot;},{&quot;label&quot;:&quot;Zahr_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefiderocol_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Bilal2021_14c_cf_studya&quot;,&quot;label&quot;:&quot;Bilal_2021_14c_cf_studya&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Bilal2021_14c_cf_studya.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Bilal2021_final&quot;,&quot;label&quot;:&quot;Bilal_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Bilal2021_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Bilal2021_final_final_model_with_crcla&quot;,&quot;label&quot;:&quot;Bilal_2021_final_final_model_with_crcla&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Bilal2021_final_final_model_with_crcla.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Koenig2025_reference&quot;,&quot;label&quot;:&quot;Koenig_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Koenig2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_SanzCodina2024_reference&quot;,&quot;label&quot;:&quot;Sanz-Codina_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_SanzCodina2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefiderocol_Zahr2022_reference&quot;,&quot;label&quot;:&quot;Zahr_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefiderocol — `Cefiderocol_Zahr2022_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.06, model 0.0426); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="cefiderocol" model-id="Cefiderocol_Zahr2022_reference" status="needs_review" stale="false" population="critically ill adult patients" measured-compound="cefiderocol" parameterization="mechanistic" topology="1C"></div>

## Citation
Zahr N, Urien S, Llopis B, Noé G, Tissot N, Bihan K et al. Total and Unbound Pharmacokinetics of Cefiderocol in Critically Ill Patients. Pharmaceutics 14(12) (2022).
  ·  DOI: [10.3390/pharmaceutics14122786](https://doi.org/10.3390/pharmaceutics14122786)

## Population and dosing

**Population:** critically ill adult patients · condition critical illness / ventilator-associated pneumonia · age group adult · n = 55.

**Dosing:** 750, 2000 mg, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference.svg" alt="Cefiderocol_Zahr2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| V1U, L | V | 17 | L | 22 |  |
| CLU, L/h per CKD = 100 | CLu | 7.38 | L/h | 6.8 | 0.467 (10.4% RSE) |
| QU, L/h | Q | 34 | L/h | 39 |  |
| theta_q46_albumin_power | theta_q46_albumin_power | 0.036 |  |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.06, model 0.0426); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — cefiderocol: V 17 L, CLu 7.38 L/h, Q 34 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 1. free #: this record has none, the second reading 6.26; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1U, L | `Q61` · V | 17 | L | 0.017 | m3 | l | 22 | llm (0.6) | pharmaceutics-14-02786-t003:row1:col1, pharmaceutics-14-02786-t003:row1:col2 |  |
| CLU, L/h per CKD = 100 | `Q24` · CLu | 7.38 | L/h | 2.05e-06 | m3/s | L/h | 6.8 | llm_confirmed (0.6) | pharmaceutics-14-02786-t003:row2:col1, pharmaceutics-14-02786-t003:row2:col2 | 0.467 (10.4% RSE) |
| QU, L/h | `Q30` · Q | 34 | L/h | 9.444e-06 | m3/s | l/h | 39 | llm (0.6) | pharmaceutics-14-02786-t003:row3:col1, pharmaceutics-14-02786-t003:row3:col2 |  |
| theta_q46_albumin_power | `Q900` · theta_q46_albumin_power | 0.036 |  |  |  |  |  |  | pharmaceutics-14-02786-t003:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'V2U, L' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02786-t003:row4:col1', 'pharmaceutics-14-02786-t003:row4:col2'])
- dropped duplicate Q24 ('CKD effect on CLU', value '0.426') — already have one for this compound
- covariate effect for Q46 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLU, L/h per CKD = 100' → L/h (from the paper text: "The paper explicitly states the unit in the equation for the final covariate sub-model: 'The final covariate sub-model f")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefiderocol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1U, L' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1. free #]` |  | 6.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qu].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q46_albumin_power]` | 0.036 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1u].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[v2u]` |  | 46 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-02786-t003:row2:col1', 'pharmaceutics-14-02786-t003:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-02786-t003:row3:col1', 'pharmaceutics-14-02786-t003:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-14-02786-t003:row1:col1', 'pharmaceutics-14-02786-t003:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.38 | ['pharmaceutics-14-02786-t003:row2:col1', 'pharmaceutics-14-02786-t003:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q24 | pass | clearance within physiological range | 7.38 L/h | ['pharmaceutics-14-02786-t003:row2:col1', 'pharmaceutics-14-02786-t003:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 17 L | ['pharmaceutics-14-02786-t003:row1:col1', 'pharmaceutics-14-02786-t003:row1:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=cefiderocol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 0.06 | 0.04256 | 0.7093 | mg/L→SI vs simulated kg/m3 |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_modelica.zip" download>Cefiderocol_Zahr2022_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_fmi.zip" download>Cefiderocol_Zahr2022_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_matlab.zip" download>Cefiderocol_Zahr2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_matlab_simbio.zip" download>Cefiderocol_Zahr2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_sbml.zip" download>Cefiderocol_Zahr2022_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_cellml.zip" download>Cefiderocol_Zahr2022_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.7522 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00075 | kg |
| input | model | `Cl` | 2.05e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002429 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zahr N, Urien S, Llopis B, Noé G, Tissot N, Bihan K et al. Total and Unbound Pharmacokinetics of Cefiderocol in Critically Ill Patients. Pharmaceutics 14(12) (2022). [doi:10.3390/pharmaceutics14122786](https://doi.org/10.3390/pharmaceutics14122786)

**This record:** Pharmacolibrary v26.09, model `Cefiderocol_Zahr2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference>

```bibtex
@misc{pharmacolibrary_CefiderocolZahr2022reference,
  title  = {{Pharmacolibrary model Cefiderocol_Zahr2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics14122786},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 750 mg infusion over 10 min, single dose. Doses in the paper: 750–2000 mg.

<dbs-fmusim paramsurl="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference/Cefiderocol_Zahr2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Cefiderocol_Zahr2022_reference_params.json` · controls `Cefiderocol_Zahr2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefiderocol%5D%20Cefiderocol_Zahr2022_reference&body=Drug%3A%20cefiderocol%0ARecord%3A%20Cefiderocol_Zahr2022_reference%0APaper%3A%20Zahr_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefiderocol/Cefiderocol_Zahr2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:36 UTC</sub>
