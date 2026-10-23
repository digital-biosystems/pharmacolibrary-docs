<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;abiraterone&quot;,&quot;href&quot;:&quot;drugs/drug_abiraterone/&quot;},{&quot;label&quot;:&quot;Stuyckens_2014 \u00b7 final_chemotherapy_pretreated_patients_final_model_1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abiraterone_Stuyckens2014_final&quot;,&quot;label&quot;:&quot;Stuyckens_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati&quot;,&quot;label&quot;:&quot;Stuyckens_2014_final_chemotherapy_pretreated_patients_final_model_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abiraterone — `Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record for abiraterone was held back because the peripheral volume of distribution parameter was missing from the extracted model parameters.

<div class="pk-model-meta" hidden drug="abiraterone" model-id="Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati" status="needs_review" stale="false" population="patients with metastatic castration-resistant prostate cancer and healthy volunteers" measured-compound="abiraterone" parameterization="apparent" topology="1C"></div>

## Citation
Stuyckens K, Saad F, Xu XS, Ryan CJ, Smith MR, Griffin TW et al. Population pharmacokinetic analysis of abiraterone in chemotherapy-naïve and docetaxel-treated patients with metastatic castration-resistant prostate cancer. Clinical pharmacokinetics 53(12):1149–1160 (2014).
  ·  DOI: [10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6)

## Population and dosing

**Population:** patients with metastatic castration-resistant prostate cancer and healthy volunteers · condition metastatic castration-resistant prostate cancer · age group adult · n = &gt;=359.

**Dosing:** 1000 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed abiraterone acetate, measured abiraterone.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati.svg" alt="Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Healthy subjects | CLm/F | 2240 | L/h |
| V 2 /F (L) | V1/F | 5630 | L |
| V 3 /F (L) | V2/F | 17400 | L |
| Q/F (L/h) | Q/F | 1350 | L/h |
| Modified fast b | kabs | 1.91 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for abiraterone was held back because the peripheral volume of distribution parameter was missing from the extracted model parameters.**

The model structure defines a two-compartment system, yet only three of the four required parameters were successfully extracted. Specifically, the peripheral volume of distribution (V2/F) was neither emitted nor included in the list of defaulted parameters. Consequently, the parameter coverage check failed, leaving the model incomplete for review. Extracted — abiraterone: CLm/F 2.24e+03 L/h, V1/F 5.63e+03 L, V2/F 1.74e+04 L, Q/F 1.35e+03 L/h, kabs 1.91 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abiraterone acetate, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Healthy subjects | `Q351` · CLm/F | 2240 | L/h | 0.0006222 | m3/s | L/h | exact (1) | tab_2:row4:col1, tab_2:row4:col3, tab_2:row4:col4 |
| V 2 /F (L) | `Q290` · V1/F | 5630 | L | 5.63 | m3 | l | exact (1) | tab_2:row6:col1, tab_2:row6:col3 |
| V 3 /F (L) | `Q82` · V2/F | 17400 | L | 17.4 | m3 | l | exact (1) | tab_2:row7:col1, tab_2:row7:col3 |
| Q/F (L/h) | `Q69` · Q/F | 1350 | L/h | 0.000375 | m3/s | l/h | exact (1) | tab_2:row8:col1, tab_2:row8:col3 |
| Modified fast b | `Q49` · kabs | 1.91 | h -1 | 0.0005306 | 1/s | 1/h | exact (1) | tab_2:row16:col3, tab_2:row16:col4, tab_2:row21:col3, tab_2:row21:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- unit_dimension_unknown: 'final model 1' (CL)
- dropped unlinked row (NIL): 'Fasting' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1', 'tab_2:row10:col3', 'tab_2:row10:col4', 'tab_2:row15:col1', 'tab_2:row15:col3', 'tab_2:row15:col4', 'tab_2:row20:col1', 'tab_2:row20:col3', 'tab_2:row20:col4'])
- unit_dimension_unknown: 'final model 1' (kabs)
- dropped duplicate Q49 ('Low-fat meal', value '1.85') — already have one for this compound
- dropped duplicate Q49 ('High-fat meal', value '1.91') — already have one for this compound
- implicit units: 'Healthy subjects' → L/h (from the popPK convention: 'The parameter is Total Clearance (CL). In population pharmacokinetic modeling, clearance is conventionally expressed in ')
- metabolite abiraterone: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abiraterone
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- model-stage split: 'chemotherapy-pretreated patients (final model 1)' is the final model of Stuyckens_2014 (paper reports 2 stages: all mcrpc patients (final model 2), chemotherapy-pretreated patients (final model 1)); same population, different model-building step
- row roles: 3 per-group rows of abiraterone absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: Healthy subjects, Fasting, Residual variability healthy
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 31 linked by role
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row5:col1 = '1,505 (34.1) d'
- unparsed cell tab_2:row5:col3 = '1,550 (15.9) d'
- unparsed cell tab_2:row16:col1 = '1 c (-)'
- unparsed cell tab_2:row18:col1 = '1 c (-)'
- unparsed cell tab_2:row21:col1 = '1 c (-)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fasting]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[healthy subjects]` | 2240 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[modified fast b]` | 1.91 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | abiraterone acetate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | abiraterone | unknown | mismatch |

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
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_2:row6:col1', 'tab_2:row6:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['tab_2:row4:col1', 'tab_2:row4:col3', 'tab_2:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row16:col3', 'tab_2:row16:col4', 'tab_2:row21:col3', 'tab_2:row21:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['tab_2:row8:col1', 'tab_2:row8:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_2:row7:col1', 'tab_2:row7:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 5.63e+03 L | ['tab_2:row6:col1', 'tab_2:row6:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.74e+04 L | ['tab_2:row7:col1', 'tab_2:row7:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=abiraterone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 4 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_modelica.zip" download>Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_modelica.zip</a> <span class="pk-size">(5.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_fmi.zip" download>Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3495 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001 | kg |
| input | model | `Cl` | 0.0006222 | m3/s |
| input | model | `VdPerKg` | 0.08043 | m3/kg |
| input | model | `ka` | 0.0005306 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Stuyckens K, Saad F, Xu XS, Ryan CJ, Smith MR, Griffin TW et al. Population pharmacokinetic analysis of abiraterone in chemotherapy-naïve and docetaxel-treated patients with metastatic castration-resistant prostate cancer. Clinical pharmacokinetics 53(12):1149–1160 (2014). [doi:10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6)

**This record:** Pharmacolibrary v26.09, model `Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati`. <https://pharmacolibrary.github.io/#/drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati>

```bibtex
@misc{pharmacolibrary_AbirateroneStuyckens2014finalchemotherapypretreatedpati,
  title  = {{Pharmacolibrary model Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati},
  note   = {Parameters from doi:10.1007/s40262-014-0178-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1000 mg, single dose, first-order absorption (ka 1.91 /h, F 1). Dose in the paper: 1000 mg.

<dbs-fmusim paramsurl="drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_params.json` · controls `Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babiraterone%5D%20Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati&body=Drug%3A%20abiraterone%0ARecord%3A%20Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati%0APaper%3A%20Stuyckens_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:41 UTC</sub>
