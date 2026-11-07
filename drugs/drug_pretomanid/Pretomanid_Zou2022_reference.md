<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;pretomanid&quot;,&quot;href&quot;:&quot;drugs/drug_pretomanid/&quot;},{&quot;label&quot;:&quot;Zou_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pretomanid_Nyangwa2026_parameter_estimate_rse&quot;,&quot;label&quot;:&quot;Nyangwa_2026_parameter_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pretomanid/Pretomanid_Nyangwa2026_parameter_estimate_rse.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pretomanid_Zou2022_reference&quot;,&quot;label&quot;:&quot;Zou_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pretomanid/Pretomanid_Zou2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Abdelwahab_2026_QTcF&quot;,&quot;label&quot;:&quot;Abdelwahab_2026 \u00b7 QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_pretomanid/pd_Abdelwahab_2026_QTcF.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Ngara_2025_Pretomanid&quot;,&quot;label&quot;:&quot;Ngara_2025 \u00b7 Pretomanid&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_pretomanid/pd_Ngara_2025_Pretomanid.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pretomanid — `Pretomanid_Zou2022_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="pretomanid" model-id="Pretomanid_Zou2022_reference" status="not_modelled" stale="false" population="healthy adults" measured-compound="pretomanid" parameterization="apparent" topology="1C"></div>

## Citation
Zou Y, Nedelman J, Lombardi A, Pappas F, Karlsson MO, Svensson EM. Characterizing Absorption Properties of Dispersible Pretomanid Tablets Using Population Pharmacokinetic Modelling. Clinical pharmacokinetics 61(11):1585–1593 (2022).
  ·  DOI: [10.1007/s40262-022-01163-w](https://doi.org/10.1007/s40262-022-01163-w)

## Population and dosing

**Population:** healthy adults · age group adult · n = condition.

**Dosing:** 10, 50, 200 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference.svg" alt="Pretomanid_Zou2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Apparent clearance (CL/F, L/h) | CL/F | 2.81 | L/h | 14 | 24.9 (32% RSE) |
| Apparent volume of distribution (Vd/F, L) | V/F | 68.0 | L | 3.7 | 8.67 (34% RSE) |
| Mean transit time (MTT, h) | MTT | 1.13 | h | 23 | 87.8 (20% RSE) |
| Absorption rate of DTF (KA, h-1) | kabs | 0.396 | h-1 | 14 | 53.3 (26% RSE) |
| Bioavailability (F) | Fab | 1 | F |  | 7.49 (13% RSE) |
| theta_q319_weight | theta_q319_weight | 0.75 |  |  |  |
| theta_q319_weight | theta_q319_weight | 1 |  |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (MTT and Fab), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dose effect (θ4) on f:f=(dose200mg)θ4: this record has none, the second reading 0.0822; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance (CL/F, L/h) | `Q27` · CL/F | 2.81 | L/h | 7.806e-07 | m3/s | l/h | 14 | exact (1) | Tab2:row1:col1 | 24.9 (32% RSE) |
| Apparent volume of distribution (Vd/F, L) | `Q76` · V/F | 68.0 | L | 0.068 | m3 | l | 3.7 | exact (1) | Tab2:row3:col1 | 8.67 (34% RSE) |
| Mean transit time (MTT, h) | `Q81` · MTT | 1.13 | h |  |  | h | 23 | exact (1) | Tab2:row5:col1 | 87.8 (20% RSE) |
| Absorption rate of DTF (KA, h-1) | `Q49` · kabs | 0.396 | h-1 | 0.00011 | 1/s | 1/h | 14 | llm_confirmed (0.6) | Tab2:row6:col1 | 53.3 (26% RSE) |
| Bioavailability (F) | `Q40` · Fab | 1 | F |  |  |  |  | exact (1) | Tab2:row8:col1 | 7.49 (13% RSE) |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.75 |  |  |  |  |  |  | Tab2:row2:col1 |  |
| theta_q319_weight | `Q900` · theta_q319_weight | 1 |  |  |  |  |  |  | Tab2:row4:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Apparent clearance (CL/F, L/h)' routed out of structural estimates ('IIV or IOV CV%b (RSE%c)')
- table section iiv: 'Apparent volume of distribution (Vd/F, L)' routed out of structural estimates ('IIV or IOV CV%b (RSE%c)')
- table section iiv: 'Mean transit time (MTT, h)' routed out of structural estimates ('IIV or IOV CV%b (RSE%c)')
- table section iiv: 'Absorption rate of DTF (KA, h-1)' routed out of structural estimates ('IIV or IOV CV%b (RSE%c)')
- table section iiv: 'Bioavailability (F)' routed out of structural estimates ('IIV or IOV CV%b (RSE%c)')
- table section residual_error: 'Proportional errorb,c' routed out of structural estimates ('RUV')
- table section residual_error: 'Additive error (ng/mL)b,c' routed out of structural estimates ('RUV')
- table section residual_error: 'Time-varying error term (θ5):d' routed out of structural estimates ('RUV')
- dropped duplicate Q49 ('Proportional effect (θ3) of MF on KA:KAMF=KADTF×θ3', value '1.65') — already have one for this compound
- dropped unlinked row (NIL): 'Dose effect (θ4) on F:F=(Dose200mg)θ4' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pretomanid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.778 (14/18 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose effect (θ4) on f:f=(dose200mg)θ4]` |  | 0.0822 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_weight]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_weight]` |  | 1 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row6:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.81 L/h | ['Tab2:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 68 L | ['Tab2:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | obtained | note |
|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_modelica.zip" download>Pretomanid_Zou2022_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_fmi.zip" download>Pretomanid_Zou2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_matlab.zip" download>Pretomanid_Zou2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_matlab_simbio.zip" download>Pretomanid_Zou2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_sbml.zip" download>Pretomanid_Zou2022_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_cellml.zip" download>Pretomanid_Zou2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3593 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 7.806e-07 | m3/s |
| input | model | `VdPerKg` | 0.0009714 | m3/kg |
| input | model | `ka` | 0.00011 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zou Y, Nedelman J, Lombardi A, Pappas F, Karlsson MO, Svensson EM. Characterizing Absorption Properties of Dispersible Pretomanid Tablets Using Population Pharmacokinetic Modelling. Clinical pharmacokinetics 61(11):1585–1593 (2022). [doi:10.1007/s40262-022-01163-w](https://doi.org/10.1007/s40262-022-01163-w)

**This record:** Pharmacolibrary, model `Pretomanid_Zou2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_pretomanid/Pretomanid_Zou2022_reference>

```bibtex
@misc{pharmacolibrary_PretomanidZou2022reference,
  title  = {{Pharmacolibrary model Pretomanid_Zou2022_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_pretomanid/Pretomanid_Zou2022_reference},
  note   = {Parameters from doi:10.1007/s40262-022-01163-w},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.396 /h, F 1). Doses in the paper: 10, 50, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_pretomanid/Pretomanid_Zou2022_reference/Pretomanid_Zou2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Pretomanid_Zou2022_reference_params.json` · controls `Pretomanid_Zou2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpretomanid%5D%20Pretomanid_Zou2022_reference&body=Drug%3A%20pretomanid%0ARecord%3A%20Pretomanid_Zou2022_reference%0APaper%3A%20Zou_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pretomanid/Pretomanid_Zou2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 11:18 UTC</sub>
