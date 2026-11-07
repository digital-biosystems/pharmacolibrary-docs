<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Ferrari_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Davies2010_reference&quot;,&quot;label&quot;:&quot;Davies_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Davies2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Ferrari2017_reference&quot;,&quot;label&quot;:&quot;Ferrari_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Ferrari2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Warfarin_Gomeni2026_reference&quot;,&quot;label&quot;:&quot;Gomeni_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Gomeni2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Ooi2017_reference&quot;,&quot;label&quot;:&quot;Ooi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Ooi2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Aoyama_2022_INR&quot;,&quot;label&quot;:&quot;Aoyama_2022 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Aoyama_2022_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sasaki_2009_INR&quot;,&quot;label&quot;:&quot;Sasaki_2009 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Sasaki_2009_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Ferrari2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Bioavailability for S-warfarin was not extracted from the paper, so a library placeholder would have been used.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Ferrari2017_reference" status="needs_review" stale="false" population="patients starting warfarin therapy" measured-compound="S-warfarin" parameterization="mechanistic" topology="1C"></div>

## Citation
Ferrari M, Pengo V, Barolo M, Bezzo F, Padrini R. Assessing the relative potency of (S)- and (R)-warfarin with a new PK-PD model, in relation to VKORC1 genotypes. European journal of clinical pharmacology 73(6):699–707 (2017).
  ·  DOI: [10.1007/s00228-017-2248-9](https://doi.org/10.1007/s00228-017-2248-9)

## Population and dosing

**Population:** patients starting warfarin therapy · condition anticoagulation therapy · age group adult · n = &gt;&lt;/null&gt;57.

**Dosing:** 10 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed rac-warfarin, measured S-warfarin.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference.svg" alt="Warfarin_Ferrari2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MT₁ (h) | MRT | 5.6 | h |
| CL (L/h) | CL | 0.286 | L/h |
| VD (L) | V | 14.3 | L |
| Steady-state S/R ratio | Css_ratio | 0.55 | 0.91–0.1.19 |
| ka (1/h) | kabs | 0.214 | 1/h |
| Lag (h) | tlag | 1.29 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability for S-warfarin was not extracted from the paper, so a library placeholder would have been used.**

The record includes absorption parameters like ka and lag time but omits the bioavailability factor F. Consequently, the model relies on library placeholders for F instead of estimates supported by the source. This deviation means the simulated profile uses default conventions not explicitly justified in the paper. Extracted — warfarin: MRT 5.6 h, CL 0.286 L/h, V 14.3 L, Css_ratio 0.55 0.91–0.1.19; S-warfarin: kabs 0.214 1/h, tlag 1.29 h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MT₁ (h) | `Q53` · MRT | 5.6 | h | 2.016e+04 | s | h | llm (0.6) | Ferrari_2017_table_3:row1:col2 |
| CL (L/h) | `Q22` · CL | 0.286 | L/h | 7.944e-08 | m3/s | l/h | exact (1) | Ferrari_2017_table_2:row0:col2, Ferrari_2017_table_2:row1:col2 |
| VD (L) | `Q61` · V | 14.3 | L | 0.0143 | m3 | l | exact (1) | Ferrari_2017_table_2:row2:col2, Ferrari_2017_table_2:row3:col2 |
| Steady-state S/R ratio | `Q35` · Css_ratio | 0.55 | 0.91–0.1.19 |  |  | 0.91-0.1·19 | llm (0.6) | Ferrari_2017_table_2:row6:col2 |
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
- column 'vkorc1 genotype' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'm' — extend the ontology if this is a real PK parameter (source ['Ferrari_2017_table_3:row4:col2', 'Ferrari_2017_table_3:row4:col3', 'Ferrari_2017_table_3:row4:col4'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 27.5 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1.65 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-warfarin
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- table Ferrari_2017_table_3: missing_label
- table Ferrari_2017_table_3: unparsed_numeric_cell
- table Ferrari_2017_table_2: unknown_column_role
- table Ferrari_2017_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ferrari_2017_table_2:row0:col2', 'Ferrari_2017_table_2:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Ferrari_2017_table_3:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ferrari_2017_table_2:row2:col2', 'Ferrari_2017_table_2:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.286 | ['Ferrari_2017_table_2:row0:col2', 'Ferrari_2017_table_2:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.286 L/h | ['Ferrari_2017_table_2:row0:col2', 'Ferrari_2017_table_2:row1:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.3 L | ['Ferrari_2017_table_2:row2:col2', 'Ferrari_2017_table_2:row3:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=S-warfarin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_id: defaulted_parameters: not acceptable; defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_modelica.zip" download>Warfarin_Ferrari2017_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_fmi.zip" download>Warfarin_Ferrari2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_matlab.zip" download>Warfarin_Ferrari2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_matlab_simbio.zip" download>Warfarin_Ferrari2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_sbml.zip" download>Warfarin_Ferrari2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_cellml.zip" download>Warfarin_Ferrari2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 7.944e-08 | m3/s |
| input | model | `VdPerKg` | 0.0002043 | m3/kg |
| input | model | `ka` | 5.944e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ferrari M, Pengo V, Barolo M, Bezzo F, Padrini R. Assessing the relative potency of (S)- and (R)-warfarin with a new PK-PD model, in relation to VKORC1 genotypes. European journal of clinical pharmacology 73(6):699–707 (2017). [doi:10.1007/s00228-017-2248-9](https://doi.org/10.1007/s00228-017-2248-9)

**This record:** Pharmacolibrary, model `Warfarin_Ferrari2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Ferrari2017_reference>

```bibtex
@misc{pharmacolibrary_WarfarinFerrari2017reference,
  title  = {{Pharmacolibrary model Warfarin_Ferrari2017_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Ferrari2017_reference},
  note   = {Parameters from doi:10.1007/s00228-017-2248-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.214 /h, lag 77.4 min, F 0.9). Dose in the paper: 10 mg.

<dbs-fmusim paramsurl="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_warfarin/Warfarin_Ferrari2017_reference/Warfarin_Ferrari2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Warfarin_Ferrari2017_reference_params.json` · controls `Warfarin_Ferrari2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Ferrari2017_reference&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Ferrari2017_reference%0APaper%3A%20Ferrari_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Ferrari2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 15:04 UTC</sub>
