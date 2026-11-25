<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Friberg_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_estimate&quot;,&quot;label&quot;:&quot;Weisskopf_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma&quot;,&quot;label&quot;:&quot;Weisskopf_2020_model_for_scit_sdcit_in_plasma&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea&quot;,&quot;label&quot;:&quot;Weisskopf_2020_model_for_scit_sdcit_in_plasma_breast_milk&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Friberg_2006_QTci&quot;,&quot;label&quot;:&quot;Friberg_2006 \u00b7 QTci&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/pd_Friberg_2006_QTci.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# citalopram — `Citalopram_Friberg2006_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> K12, k21 use library defaults, not estimates from this paper; t6_deviations (+1 more).

<div class="pk-model-meta" hidden drug="citalopram" model-id="Citalopram_Friberg2006_reference" status="needs_review" stale="false" population="citalopram overdose patients" measured-compound="citalopram" parameterization="apparent" topology="2C"></div>

## Citation
Friberg LE, Isbister GK, Duffull SB. Pharmacokinetic-pharmacodynamic modelling of QT interval prolongation following citalopram overdoses. British journal of clinical pharmacology 61(2):177–190 (2006).
  ·  DOI: [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x)

## Population and dosing

**Population:** citalopram overdose patients · condition citalopram overdose · age group adult.

**Dosing:** 20, 1200 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference.svg" alt="Citalopram_Friberg2006_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α | λ1 | 0.364 | 1/h |
| teq (h) | equation variable | 1.43 | h |
| apparent (oral) clearance | CL | 22.1 | l h -1 |
| apparent volume of distribution | V/F | 1280 | l |
| absorption rate constant | kabs | 1.48 | h -1 |
| volume of distribution | V | 52 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**K12, k21 use library defaults, not estimates from this paper; t6_deviations (+1 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — citalopram: λ1 0.364 1/h, CL 22.1 l h -1, V/F 1.28e+03 l, kabs 1.48 h -1, V 52 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[teq].parameter_id`: this record has Q900, the second reading Q72; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α | `Q67` · λ1 | 0.364 | 1/h | 0.0001011 | 1/s | 1/h | exact (1) | Friberg_2006_table_3:row3:col1 |
| teq (h) | `Q900` · equation variable | 1.43 | h |  |  | h | llm (0.6) | Friberg_2006_table_3:row4:col1 |
| apparent (oral) clearance | `Q22` · CL | 22.1 | l h -1 | 6.139e-06 | m3/s | L/h | boundary (0.8) | Friberg_2006:other_prose |
| apparent volume of distribution | `Q76` · V/F | 1280 | l | 1.28 | m3 | L | exact (1) | Friberg_2006:other_prose |
| absorption rate constant | `Q49` · kabs | 1.48 | h -1 | 0.0004111 | 1/s | 1/h | exact (1) | Friberg_2006:other_prose |
| volume of distribution | `Q61` · V | 52 | L | 0.052 | m3 | L | exact (1) | Friberg_2006:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'population mean (95% ci)a' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped PD-category row 'Slope (ms l mg-1)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Friberg_2006_table_3:row2:col1'])
- dropped unlinked row (NIL): 'ΔQTciage' — extend the ontology if this is a real PK parameter (source ['Friberg_2006_table_3:row5:col1'])
- salvaged Q22 ('apparent (oral) clearance'=22.1) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution'=1280) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate constant'=1.48) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution'=52) from results prose — parameter table was unreadable
- implicit units: 'α' → 1/h (from the popPK convention: "The parameter alpha (alpha) is described as a 'Macro-rate constant' in the label. In pharmacokinetic modeling, rate cons")
- implicit units: 'volume of distribution' → L (from the paper text: "The text explicitly states: 'The population mean estimates were 22.1 l h -1 , 1280 l, 1.48 h -1 and 0.097 mg l -1 for ap")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=citalopram
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Friberg_2006_table_3: unbound_uncertainty
- table Friberg_2006_table_3: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[teq].parameter_id` | Q900 | Q72 | mismatch |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 52 |  | only_one_extracted |

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
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Friberg_2006:other_prose'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Friberg_2006_table_3:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.1 L/h | ['Friberg_2006:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 52 L | ['Friberg_2006:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.28e+03 L | ['Friberg_2006:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=citalopram) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.818 (9 of 11 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.818 | cross-check contradicted by a second reader: verdict disputed; agreement 0.818 (9 of 11 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_t_half_alpha | reference | skipped | 1 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_modelica.zip" download>Citalopram_Friberg2006_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_fmi.zip" download>Citalopram_Friberg2006_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_matlab.zip" download>Citalopram_Friberg2006_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_matlab_simbio.zip" download>Citalopram_Friberg2006_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_sbml.zip" download>Citalopram_Friberg2006_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_cellml.zip" download>Citalopram_Friberg2006_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `Cl` | 6.139e-06 | m3/s |
| input | model | `VdPerKg` | 0.01829 | m3/kg |
| input | model | `ka` | 0.0004111 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Friberg LE, Isbister GK, Duffull SB. Pharmacokinetic-pharmacodynamic modelling of QT interval prolongation following citalopram overdoses. British journal of clinical pharmacology 61(2):177–190 (2006). [doi:10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x)

**This record:** Pharmacolibrary, model `Citalopram_Friberg2006_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_citalopram/Citalopram_Friberg2006_reference>

```bibtex
@misc{pharmacolibrary_CitalopramFriberg2006reference,
  title  = {{Pharmacolibrary model Citalopram_Friberg2006_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_citalopram/Citalopram_Friberg2006_reference},
  note   = {Parameters from doi:10.1111/j.1365-2125.2005.02546.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 1.48 /h, F 1). Doses in the paper: 20–1200 mg.

<dbs-fmusim paramsurl="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_citalopram/Citalopram_Friberg2006_reference/Citalopram_Friberg2006_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Citalopram_Friberg2006_reference_params.json` · controls `Citalopram_Friberg2006_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitalopram%5D%20Citalopram_Friberg2006_reference&body=Drug%3A%20citalopram%0ARecord%3A%20Citalopram_Friberg2006_reference%0APaper%3A%20Friberg_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_citalopram/Citalopram_Friberg2006_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:18 UTC</sub>
