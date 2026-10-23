<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Zhu_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Aoyama_2022_INR&quot;,&quot;label&quot;:&quot;Aoyama_2022 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Aoyama_2022_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hirai_2024_PT_INR&quot;,&quot;label&quot;:&quot;Hirai_2024 \u00b7 PT-INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Hirai_2024_PT_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Zhu2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The bioavailability fraction (F) for warfarin was left at library defaults instead of using a value reported in the paper.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Zhu2017_reference" status="needs_review" stale="false" population="Chinese patients with valve replacement" measured-compound="S-warfarin" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhu YB, Hong XH, Wei M, Hu J, Chen X, Wang SK et al. Development of a novel individualized warfarin dose algorithm based on a population pharmacokinetic model with improved prediction accuracy for Chinese patients after heart valve replacement. Acta pharmacologica Sinica 38(3):434–442 (2017).
  ·  DOI: [10.1038/aps.2016.163](https://doi.org/10.1038/aps.2016.163)

## Population and dosing

**Population:** Chinese patients with valve replacement · age group adult · n = &gt;=296.

**Dosed compound ≠ measured compound:** dosed warfarin, measured S-warfarin.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference.svg" alt="Warfarin_Zhu2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 0.258 | L/h |
| CL (L/h) | CL | 0.586 | L/h |
| V (L) | V | 26.2 | L |
| V (L) | V | 22.9 | L |
| ka (1/h) | kabs | 0.214 | 1/h |
| Lag (h) | tlag | 1.29 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The bioavailability fraction (F) for warfarin was left at library defaults instead of using a value reported in the paper.**

The record explicitly flags F as an unreported parameter that relies on defaults rather than estimates from Zhu_2017. While other parameters like clearance and volume of distribution are present, the bioavailability value is missing. This forces the use of arbitrary placeholders that are not supported by the source data, affecting the accuracy of the simulated concentration profile. Extracted — R-warfarin: CL 0.258 L/h, V 26.2 L; warfarin: CL 0.586 L/h, V 22.9 L; S-warfarin: kabs 0.214 1/h, tlag 1.29 h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.258 | L/h | 7.167e-08 | m3/s | l/h | exact (1) | tab_2:row3:col2 |
| CL (L/h) | `Q22` · CL | 0.586 | L/h | 1.628e-07 | m3/s | l/h | exact (1) | tab_2:row3:col6 |
| V (L) | `Q61` · V | 26.2 | L | 0.0262 | m3 | l | exact (1) | tab_2:row5:col2 |
| V (L) | `Q61` · V | 22.9 | L | 0.0229 | m3 | l | exact (1) | tab_2:row5:col6 |
| ka (1/h) | `Q49` · kabs | 0.214 | 1/h | 5.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Gomeni_2026:review |
| Lag (h) | `Q83` · tlag | 1.29 | h | 4644 | s | h | review_gapfill (0.7) | Gomeni_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col2'])
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col6'])
- routed 'Inter-individual variation' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Intra-individual variation' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-warfarin
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_2:row3:col3 = '(0.229, 0.287)'
- unparsed cell tab_2:row3:col4 = '5.54%'
- unparsed cell tab_2:row3:col7 = '(0.536, 0.636)'
- unparsed cell tab_2:row3:col8 = '4.32%'
- unparsed cell tab_2:row5:col3 = '(22.0, 30.4)'
- unparsed cell tab_2:row5:col4 = '7.94%'
- unparsed cell tab_2:row5:col7 = '(20.0, 25.8)'
- unparsed cell tab_2:row5:col8 = '6.33%'
- unparsed cell tab_2:row7:col3 = '(0.128, 0.314)'
- unparsed cell tab_2:row7:col4 = '21.0%'
- unparsed cell tab_2:row7:col7 = '(0.0654, 0.1706)'
- unparsed cell tab_2:row7:col8 = '22.3%'
- unparsed cell tab_2:row9:col3 = '(0.0127, 0.0241)'
- unparsed cell tab_2:row9:col4 = '15.4%'
- unparsed cell tab_2:row9:col7 = '(0.0237, 0.0395)'
- unparsed cell tab_2:row9:col8 = '12.6%'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row3:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row3:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_2:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_2:row5:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.258 | ['tab_2:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.258 L/h | ['tab_2:row3:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.586 L/h | ['tab_2:row3:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 26.2 L | ['tab_2:row5:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 22.9 L | ['tab_2:row5:col6'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=S-warfarin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | dev1: not acceptable; defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_modelica.zip" download>Warfarin_Zhu2017_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_fmi.zip" download>Warfarin_Zhu2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_matlab.zip" download>Warfarin_Zhu2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_matlab_simbio.zip" download>Warfarin_Zhu2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_sbml.zip" download>Warfarin_Zhu2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_cellml.zip" download>Warfarin_Zhu2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3083 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 4644 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7.5e-06 | kg |
| input | model | `Cl` | 1.628e-07 | m3/s |
| input | model | `VdPerKg` | 0.0003271 | m3/kg |
| input | model | `ka` | 5.944e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhu YB, Hong XH, Wei M, Hu J, Chen X, Wang SK et al. Development of a novel individualized warfarin dose algorithm based on a population pharmacokinetic model with improved prediction accuracy for Chinese patients after heart valve replacement. Acta pharmacologica Sinica 38(3):434–442 (2017). [doi:10.1038/aps.2016.163](https://doi.org/10.1038/aps.2016.163)

**This record:** Pharmacolibrary v26.09, model `Warfarin_Zhu2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Zhu2017_reference>

```bibtex
@misc{pharmacolibrary_WarfarinZhu2017reference,
  title  = {{Pharmacolibrary model Warfarin_Zhu2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Zhu2017_reference},
  note   = {Parameters from doi:10.1038/aps.2016.163},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 7.5 mg, single dose, first-order absorption (ka 0.214 /h, lag 77.4 min, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 7.5 mg oral (B01AA03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_warfarin/Warfarin_Zhu2017_reference/Warfarin_Zhu2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Warfarin_Zhu2017_reference_params.json` · controls `Warfarin_Zhu2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Zhu2017_reference&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Zhu2017_reference%0APaper%3A%20Zhu_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Zhu2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-27 11:42 UTC</sub>
