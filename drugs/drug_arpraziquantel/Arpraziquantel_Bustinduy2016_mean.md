<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;arpraziquantel&quot;,&quot;href&quot;:&quot;drugs/drug_arpraziquantel/&quot;},{&quot;label&quot;:&quot;Bustinduy_2016 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arpraziquantel_Bustinduy2016_mean&quot;,&quot;label&quot;:&quot;Bustinduy_2016_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Arpraziquantel_Bustinduy2016_median&quot;,&quot;label&quot;:&quot;Bustinduy_2016_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# arpraziquantel — `Arpraziquantel_Bustinduy2016_mean`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The arpraziquantel two-compartment model was held back because the intercompartmental transfer rate constants k12 (25.90 h−1) and k21 (33.30 h−1) were not carried into the record, leaving only 4 of 6 parameters covered.

<div class="pk-model-meta" hidden drug="arpraziquantel" model-id="Arpraziquantel_Bustinduy2016_mean" status="needs_review" stale="false" population="Ugandan children with intestinal schistosomiasis" measured-compound="praziquantel racemate (R-PZQ plus S-PZQ)" parameterization="apparent" topology="1C"></div>

## Citation
Bustinduy AL, Waterhouse D, de Sousa-Figueiredo JC, Roberts SA, Atuhaire A, Van Dam GJ et al. Population Pharmacokinetics and Pharmacodynamics of Praziquantel in Ugandan Children with Intestinal Schistosomiasis: Higher Dosages Are Required for Maximal Efficacy. mBio 7(4) (2016).
  ·  DOI: [10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16)

## Population and dosing

**Population:** Ugandan children with intestinal schistosomiasis · condition schistosomiasis · age group child · n = 59.

**Dosing:** 2800, 4200 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed praziquantel, measured praziquantel racemate (R-PZQ plus S-PZQ).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean.svg" alt="Arpraziquantel_Bustinduy2016_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (h−1) | kabs | 14.89 | h−1 |
| SCL/F (liter/h) | CL/F | 608.02 | liter/h |
| V/F (liter) | V/F | 473.97 | liter |
| Kcp (h−1) | k12 | 25.90 | h−1 |
| Kpc (h−1) | k21 | 33.30 | h−1 |
| Tlag (h) | tlag | 1.94 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The arpraziquantel two-compartment model was held back because the intercompartmental transfer rate constants k12 (25.90 h−1) and k21 (33.30 h−1) were not carried into the record, leaving only 4 of 6 parameters covered.**

The paper reports k12 = 25.90 h−1 (central to peripheral) and k21 = 33.30 h−1 (peripheral to central), but neither value was emitted nor defaulted, so the peripheral distribution part of the structure is incomplete. The absorption lag time was also left at a default instead of the reported tlag of 1.94 h. The model was parameterized as apparent, assuming F = 1 and Fm = 1 with no molar correction, so CL/F (608.02 liter/h) and V/F (473.97 liter) are bioavailability-adjusted values. Extracted — arpraziquantel: kabs 14.9 h−1, CL/F 608 liter/h, V/F 474 liter, k12 25.9 h−1, k21 33.3 h−1, tlag 1.94 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has praziquantel racemate (R-PZQ plus S-PZQ), the second reading praziquantel. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (h−1) | `Q49` · kabs | 14.89 | h−1 | 0.004136 | 1/s | 1/h | exact (1) | tab3:row1:col1 |
| SCL/F (liter/h) | `Q27` · CL/F | 608.02 | liter/h | 0.0001689 | m3/s | l/h | llm (0.6) | tab3:row2:col1 |
| V/F (liter) | `Q76` · V/F | 473.97 | liter | 0.474 | m3 | l | exact (1) | tab3:row3:col1 |
| Kcp (h−1) | `Q301` · k12 | 25.90 | h−1 | 0.007194 | 1/s | 1/h | exact (1) | tab3:row4:col1 |
| Kpc (h−1) | `Q302` · k21 | 33.30 | h−1 | 0.00925 | 1/s | 1/h | exact (1) | tab3:row5:col1 |
| Tlag (h) | `Q83` · tlag | 1.94 | h | 6984 | s | h | exact (1) | tab3:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=praziquantel racemate (R-PZQ plus S-PZQ)
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'mean' subgroup of Bustinduy_2016 (paper reports 3 populations: mean, median, r-pzq)
- molar mass: no plausible PubChem entry for 'praziquantel racemate (R-PZQ plus S-PZQ)' ('praziquantel racemate') — left in mass units
- molar mass: none found for 'praziquantel racemate (R-PZQ plus S-PZQ)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'praziquantel racemate (R-PZQ plus S-PZQ)', not arpraziquantel — the review values are the parent's

**Extraction notes:**
- transposed table Bustinduy_2016_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.primary_analyte` | praziquantel racemate (R-PZQ plus S-PZQ) | praziquantel | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab3:row2:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['tab3:row4:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['tab3:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab3:row1:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab3:row3:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab3:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 608 L/h | ['tab3:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 474 L | ['tab3:row3:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=praziquantel racemate (R-PZQ plus S-PZQ)) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 6 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['k12', 'k21'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_modelica.zip" download>Arpraziquantel_Bustinduy2016_mean_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_fmi.zip" download>Arpraziquantel_Bustinduy2016_mean_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_matlab.zip" download>Arpraziquantel_Bustinduy2016_mean_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_matlab_simbio.zip" download>Arpraziquantel_Bustinduy2016_mean_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_sbml.zip" download>Arpraziquantel_Bustinduy2016_mean_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_cellml.zip" download>Arpraziquantel_Bustinduy2016_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0028 | kg |
| input | model | `Cl` | 0.0001689 | m3/s |
| input | model | `VdPerKg` | 0.006771 | m3/kg |
| input | model | `ka` | 0.004136 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bustinduy AL, Waterhouse D, de Sousa-Figueiredo JC, Roberts SA, Atuhaire A, Van Dam GJ et al. Population Pharmacokinetics and Pharmacodynamics of Praziquantel in Ugandan Children with Intestinal Schistosomiasis: Higher Dosages Are Required for Maximal Efficacy. mBio 7(4) (2016). [doi:10.1128/mBio.00227-16](https://doi.org/10.1128/mBio.00227-16)

**This record:** Pharmacolibrary v26.09, model `Arpraziquantel_Bustinduy2016_mean`. <https://pharmacolibrary.github.io/#/drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean>

```bibtex
@misc{pharmacolibrary_ArpraziquantelBustinduy2016mean,
  title  = {{Pharmacolibrary model Arpraziquantel_Bustinduy2016_mean}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean},
  note   = {Parameters from doi:10.1128/mBio.00227-16},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2800 mg, single dose, first-order absorption (ka 14.9 /h, F 1). Doses in the paper: 2800, 4200 mg.

<dbs-fmusim paramsurl="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean/Arpraziquantel_Bustinduy2016_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Arpraziquantel_Bustinduy2016_mean_params.json` · controls `Arpraziquantel_Bustinduy2016_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barpraziquantel%5D%20Arpraziquantel_Bustinduy2016_mean&body=Drug%3A%20arpraziquantel%0ARecord%3A%20Arpraziquantel_Bustinduy2016_mean%0APaper%3A%20Bustinduy_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_arpraziquantel/Arpraziquantel_Bustinduy2016_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:12 UTC</sub>
