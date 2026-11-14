<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Clonidine&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/&quot;},{&quot;label&quot;:&quot;Gauda_2022 \u00b7 clon_q6h&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Cloesmeijer2020_reference&quot;,&quot;label&quot;:&quot;Cloesmeijer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Cloesmeijer2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q6h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q6h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_dog&quot;,&quot;label&quot;:&quot;Pflaum_2026_dog&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_dog.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_human&quot;,&quot;label&quot;:&quot;Pflaum_2026_human&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_human.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q8h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q8h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q8h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Clonidine — `Clonidine_Gauda2022_clon_q6h`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Clonidine" model-id="Clonidine_Gauda2022_clon_q6h" status="extracted" stale="false" population="infants with hypoxic ischemic encephalopathy undergoing therapeutic hypothermia" measured-compound="Clonidine" parameterization="apparent" topology="2C"></div>

## Citation
Gauda EB, Chavez-Valdez R, Northington FJ, Lee CKK, Rudek MA, Guglieri-Lopez B et al. Clonidine for sedation in infants during therapeutic hypothermia with neonatal encephalopathy: pilot study. Journal of perinatology : official journal of the California Perinatal Association 42(3):319-327 (2022).
  ·  DOI: [10.1038/s41372-021-01151-1](https://doi.org/10.1038/s41372-021-01151-1)

## Population and dosing

**Population:** infants with hypoxic ischemic encephalopathy undergoing therapeutic hypothermia · condition hypoxic ischemic encephalopathy treated with therapeutic hypothermia · age group neonate · n = 12.

**Dosing:** 0.07 mg, iv, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h.svg" alt="Clonidine_Gauda2022_clon_q6h diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution (Vd) | V | 280 | L |
| clearance (CL) of IV clonidine | CL | 11.89 | L/hour |
| CL/F for infants receiving oral clonidine | CL/F | 15.2 | L/hour/70 kg |
| Vd/F | V/F | 402 | L/70 kg |
| Ka | kabs | 0.889 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution (Vd) | `Q61` · V | 280 | L | 0.28 | m3 | L | exact (1) | Gauda_2022:prose |
| clearance (CL) of IV clonidine | `Q22` · CL | 11.89 | L/hour | 3.303e-06 | m3/s | L/h | boundary (0.8) | Gauda_2022:prose |
| CL/F for infants receiving oral clonidine | `Q27` · CL/F | 15.2 | L/hour/70 kg | 4.222e-06 | m3/s | L/h | boundary (0.8) | Gauda_2022:prose |
| Vd/F | `Q76` · V/F | 402 | L/70 kg | 0.402 | m3 | L | exact (1) | Gauda_2022:prose |
| Ka | `Q49` · kabs | 0.889 | hour−1 | 0.0002469 | 1/s | 1/h | review_gapfill (0.7) | Tang_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'DOL 1 Total (mg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row0:col2'])
- dropped unlinked row (NIL): 'DOL 2 Total (mg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row1:col2'])
- dropped unlinked row (NIL): 'DOL 1, Q6h Total (mg/kg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row2:col2'])
- dropped unlinked row (NIL): 'DOL 2, Q6h Total (mg/kg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row3:col2'])
- dropped unlinked row (NIL): 'DOL 1, PRN Total (mg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row4:col2'])
- dropped unlinked row (NIL): 'DOL 2, PRN Total (mg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row5:col2'])
- dropped unlinked row (NIL): 'DOL 1, PRN Total (mg/kg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row6:col2'])
- dropped unlinked row (NIL): 'DOL 2, PRN Total (mg/kg/24hr)' — extend the ontology if this is a real PK parameter (source ['Gauda_2022_table_2:row7:col2'])
- table mostly unlinked (8/8 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q61 ('volume of distribution (Vd)'=280) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance (CL) of IV clonidine'=11.89) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F for infants receiving oral clonidine'=15.2) from results prose — parameter table was unreadable
- salvaged Q76 ('Vd/F'=402) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'clon q6h(n=4)' subgroup of Gauda_2022 (paper reports 2 populations: clon q6h(n=4), clon q8h(n=8))
- gap-filled Q49 (kabs) from Tang_2025's review values (primary lacked it)

**Extraction notes:**
- table Gauda_2022_table_2: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 16 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[cl/f for infants receiving oral clonidine]` | 15.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance (cl) of iv clonidine]` | 11.89 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dol 1 total]` |  | 0.60 | only_one_extracted |
| `gpt-oss:120b` | `parameters[dol 2 total]` |  | 0.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f]` | 402 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | 280 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tang_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.9 L/h | ['Gauda_2022:prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.2 L/h | ['Gauda_2022:prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 280 L | ['Gauda_2022:prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 402 L | ['Gauda_2022:prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_modelica.zip" download>Clonidine_Gauda2022_clon_q6h_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_fmi.zip" download>Clonidine_Gauda2022_clon_q6h_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_matlab.zip" download>Clonidine_Gauda2022_clon_q6h_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_matlab_simbio.zip" download>Clonidine_Gauda2022_clon_q6h_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_sbml.zip" download>Clonidine_Gauda2022_clon_q6h_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_cellml.zip" download>Clonidine_Gauda2022_clon_q6h_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2301 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-08 | kg |
| input | model | `Cl` | 3.303e-06 | m3/s |
| input | model | `VdPerKg` | 0.004 | m3/kg |
| input | model | `ka` | 0.0002469 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gauda EB, Chavez-Valdez R, Northington FJ, Lee CKK, Rudek MA, Guglieri-Lopez B et al. Clonidine for sedation in infants during therapeutic hypothermia with neonatal encephalopathy: pilot study. Journal of perinatology : official journal of the California Perinatal Association 42(3):319-327 (2022). [doi:10.1038/s41372-021-01151-1](https://doi.org/10.1038/s41372-021-01151-1)

**This record:** Pharmacolibrary, model `Clonidine_Gauda2022_clon_q6h`. <https://pharmacolibrary.github.io/#/drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h>

```bibtex
@misc{pharmacolibrary_ClonidineGauda2022clonq6h,
  title  = {{Pharmacolibrary model Clonidine_Gauda2022_clon_q6h}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h},
  note   = {Parameters from doi:10.1038/s41372-021-01151-1},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.07 mg, single dose, first-order absorption (ka 0.889 /h, F 1). Dose in the paper: 0.07 mg.

<dbs-fmusim paramsurl="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h/Clonidine_Gauda2022_clon_q6h_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Clonidine_Gauda2022_clon_q6h_params.json` · controls `Clonidine_Gauda2022_clon_q6h_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Gauda2022_clon_q6h&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Gauda2022_clon_q6h%0APaper%3A%20Gauda_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:57 UTC</sub>
