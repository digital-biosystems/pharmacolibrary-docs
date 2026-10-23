<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;quinine&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/&quot;},{&quot;label&quot;:&quot;Kloprogge_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinine_Hendriksen2013_reference&quot;,&quot;label&quot;:&quot;Hendriksen_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Hendriksen2013_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Kloprogge2014_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Kloprogge2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Quinine_Phillips1986_reference&quot;,&quot;label&quot;:&quot;Phillips_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Phillips1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinine — `Quinine_Kloprogge2014_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="quinine" model-id="Quinine_Kloprogge2014_reference" status="curated_candidate" stale="false" population="pregnant women with uncomplicated falciparum malaria" measured-compound="quinine" parameterization="apparent" topology="2C"></div>

## Citation
Kloprogge F, Jullien V, Piola P, Dhorda M, Muwanga S, Nosten F et al. Population pharmacokinetics of quinine in pregnant women with uncomplicated Plasmodium falciparum malaria in Uganda. The Journal of antimicrobial chemotherapy 69(11):3033–3040 (2014).
  ·  DOI: [10.1093/jac/dku228](https://doi.org/10.1093/jac/dku228)

## Population and dosing

**Population:** pregnant women with uncomplicated falciparum malaria · condition uncomplicated Plasmodium falciparum malaria in pregnancy · age group adult · n = 22.

**Dosing:** 700 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed quinine sulphate, measured quinine.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference.svg" alt="Quinine_Kloprogge2014_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| ka | kabs | 0.817 | (1/h) |
| CL/F | CL/F | 10.4 | (L/h) |
| Vc/F | V1/F | 174 | (L) |
| Q/F | Q/F | 10.7 | (L/h) |
| Vp/F | V2/F | 54.3 | (L) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.817 | (1/h) | 0.0002269 | 1/s | 1/h | exact (1) | Kloprogge_2014:results_prose |
| CL/F | `Q27` · CL/F | 10.4 | (L/h) | 2.889e-06 | m3/s | L/h | exact (1) | Kloprogge_2014:results_prose |
| Vc/F | `Q290` · V1/F | 174 | (L) | 0.174 | m3 | L | exact (1) | Kloprogge_2014:results_prose |
| Q/F | `Q69` · Q/F | 10.7 | (L/h) | 2.972e-06 | m3/s | L/h | exact (1) | Kloprogge_2014:results_prose |
| Vp/F | `Q82` · V2/F | 54.3 | (L) | 0.0543 | m3 | L | exact (1) | Kloprogge_2014:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F (%) | Q40 | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ka (1/h)' routed out of structural estimates ('IIV/IOV (% CV)a (% RSE)b')
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV/IOV (% CV)a (% RSE)b')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('IIV/IOV (% CV)a (% RSE)b')
- dropped value-less row: 'ka (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'CL/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Vc/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Q/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Vp/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Parasitaemia (log10) on F (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'Temperature on CL/F'
- dropped value-less row: 'The additive error (σ) variance will essentially be exponential on normal scale data.'
- dropped value-less row: 'bThe relative standard error (RSE) is calculated as 100 × (standard deviation/mean value) from 1000 runs of a non-parametric bootstrap. The 95% CI is displayed as the 2.5th to 97.5th percentiles of the bootstrap estimates.'
- dropped value-less row: 'cPost hoc estimates were calculated as the medians and ranges of the empirical Bayes estimates.'
- salvaged Q49 ('ka'=0.817) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F'=10.4) from results prose — parameter table was unreadable
- salvaged Q290 ('Vc/F'=174) from results prose — parameter table was unreadable
- salvaged Q69 ('Q/F'=10.7) from results prose — parameter table was unreadable
- salvaged Q82 ('Vp/F'=54.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=quinine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell DKU228TB2:row4:col3 = '12.3 (77.0)/21.4 (48.8)'
- unparsed cell DKU228TB2:row4:col4 = '0.170–48.8/19.3–93.3'
- unparsed cell DKU228TB2:row8:col2 = '−0.427 to −0.180'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

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
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.4 L/h | ['Kloprogge_2014:results_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 174 L | ['Kloprogge_2014:results_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 54.3 L | ['Kloprogge_2014:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=quinine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 4.06 (2.40–7.92) | 0.002982 | unresolved concentration unit (exp '(mg/L)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.95 (2.54–6.62) | 0.002982 | unresolved concentration unit (exp '(mg/L)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4.16 (2.40–7.92) | 0.002982 | unresolved concentration unit (exp '(mg/L)', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped | 15.3 (10.4–30.8) | 12.93 | unresolved time unit '(h)' |
| T1_t_half_terminal | reference | skipped | 14.6 (11.0–29.3) | 12.93 | unresolved time unit '(h)' |
| T1_t_half_terminal | reference | skipped | 16.1 (10.4–30.8) | 12.93 | unresolved time unit '(h)' |
| T1_tmax | reference | skipped | 3.01 (1.85–8.00) | 3.627 | unresolved time unit '(h)' |
| T1_tmax | reference | skipped | 3.01 (2.00–8.00) | 3.627 | unresolved time unit '(h)' |
| T1_tmax | reference | skipped | 2.75 (1.85–4.34) | 3.627 | unresolved time unit '(h)' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_modelica.zip" download>Quinine_Kloprogge2014_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_fmi.zip" download>Quinine_Kloprogge2014_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_matlab.zip" download>Quinine_Kloprogge2014_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_matlab_simbio.zip" download>Quinine_Kloprogge2014_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_sbml.zip" download>Quinine_Kloprogge2014_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_cellml.zip" download>Quinine_Kloprogge2014_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3244 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 2.889e-06 | m3/s |
| input | model | `VdPerKg` | 0.002486 | m3/kg |
| input | model | `k12` | 1.708e-05 | 1/s |
| input | model | `k21` | 5.474e-05 | 1/s |
| input | model | `ka` | 0.0002269 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kloprogge F, Jullien V, Piola P, Dhorda M, Muwanga S, Nosten F et al. Population pharmacokinetics of quinine in pregnant women with uncomplicated Plasmodium falciparum malaria in Uganda. The Journal of antimicrobial chemotherapy 69(11):3033–3040 (2014). [doi:10.1093/jac/dku228](https://doi.org/10.1093/jac/dku228)

**This record:** Pharmacolibrary v26.09, model `Quinine_Kloprogge2014_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_quinine/Quinine_Kloprogge2014_reference>

```bibtex
@misc{pharmacolibrary_QuinineKloprogge2014reference,
  title  = {{Pharmacolibrary model Quinine_Kloprogge2014_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_quinine/Quinine_Kloprogge2014_reference},
  note   = {Parameters from doi:10.1093/jac/dku228},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 0.817 /h, F 1). Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_quinine/Quinine_Kloprogge2014_reference/Quinine_Kloprogge2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Quinine_Kloprogge2014_reference_params.json` · controls `Quinine_Kloprogge2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinine%5D%20Quinine_Kloprogge2014_reference&body=Drug%3A%20quinine%0ARecord%3A%20Quinine_Kloprogge2014_reference%0APaper%3A%20Kloprogge_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quinine/Quinine_Kloprogge2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:36 UTC</sub>
