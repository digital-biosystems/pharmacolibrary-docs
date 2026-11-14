<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cisplatin&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/&quot;},{&quot;label&quot;:&quot;Chen_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisplatin_Chen2013_reference&quot;,&quot;label&quot;:&quot;Chen_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/Cisplatin_Chen2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cisplatin_MoritaOgawa2020_reference&quot;,&quot;label&quot;:&quot;Morita-Ogawa_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/Cisplatin_MoritaOgawa2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Morrison1986_reference&quot;,&quot;label&quot;:&quot;Morrison_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/Cisplatin_Morrison1986_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Schneider2025_reference&quot;,&quot;label&quot;:&quot;Schneider_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/Cisplatin_Schneider2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Terranova2021_reference&quot;,&quot;label&quot;:&quot;Terranova_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/Cisplatin_Terranova2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Arshad2020_reference&quot;,&quot;label&quot;:&quot;Arshad_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/Cisplatin_Arshad2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Schneider2019_reference&quot;,&quot;label&quot;:&quot;Schneider_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cisplatin/Cisplatin_Schneider2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cisplatin — `Cisplatin_Chen2013_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Cisplatin" model-id="Cisplatin_Chen2013_reference" status="extracted" stale="false" population="patients with non-small-cell lung carcinoma receiving cisplatin chemotherapy" measured-compound="Cisplatin" parameterization="mechanistic" topology="2C"></div>

## Citation
Chen R, Li J, Hu WW, Wang ML, Zou SL, Miao LY. Circadian variability of pharmacokinetics of cisplatin in patients with non-small-cell lung carcinoma: analysis with the NONMEM program. Cancer chemotherapy and pharmacology 72(5):1111-1123 (2013).
  ·  DOI: [10.1007/s00280-013-2288-5](https://doi.org/10.1007/s00280-013-2288-5)

## Population and dosing

**Population:** patients with non-small-cell lung carcinoma receiving cisplatin chemotherapy · condition non-small-cell lung carcinoma (cancer chemotherapy patients) · age group adult.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference.svg" alt="Cisplatin_Chen2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| clearance (CL), total drug | CL | 0.463 | l h⁻¹ |
| clearance (CL), unbound drug | CLu | 25.4 | l h⁻¹ |
| central distribution volume (V₁), total drug | V1 | 24.2 | l |
| intercompartmental clearance (Q), total drug | Q | 10.2 | l h⁻¹ |
| peripheral compartment volume (V₂), total drug | V2 | 32.0 | l |
| typical value of ka | kabs | 9.37 | hours−1 |
| tlag | tlag | 0.48 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.308). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of central distribution volume (v1), total drug: this record has 24.2, the second reading none; it also differs on 8 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance (CL), total drug | `Q22` · CL | 0.463 | l h⁻¹ | 1.286e-07 | m3/s | l/h | llm_confirmed (0.6) | Chen_2013:abstract |
| clearance (CL), unbound drug | `Q24` · CLu | 25.4 | l h⁻¹ | 7.056e-06 | m3/s | l/h | llm_corrected (0.6) | Chen_2013:abstract |
| central distribution volume (V₁), total drug | `Q63` · V1 | 24.2 | l | 0.0242 | m3 | l | boundary_compartment (0.9) | Chen_2013:abstract |
| intercompartmental clearance (Q), total drug | `Q30` · Q | 10.2 | l h⁻¹ | 2.833e-06 | m3/s | l/h | llm_confirmed (0.6) | Chen_2013:abstract |
| peripheral compartment volume (V₂), total drug | `Q64` · V2 | 32.0 | l | 0.032 | m3 | l | llm_confirmed (0.6) | Chen_2013:abstract |
| typical value of ka | `Q49` · kabs | 9.37 | hours−1 | 0.002603 | 1/s | 1/h | review_gapfill (0.7) | Fountzilas_2021:review |
| tlag | `Q83` · tlag | 0.48 | hour | 1728 | s | h | review_gapfill (0.7) | Fountzilas_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q63 ('central distribution volume (V₁), unbound drug', value 20.5) — already have one for this compound
- dropped duplicate Q30 ('intercompartmental clearance (Q), unbound drug', value 9.82) — already have one for this compound
- dropped duplicate Q64 ('peripheral compartment volume (V₂), unbound drug', value 6.77) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cisplatin
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q49 (kabs) from Fountzilas_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Fountzilas_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Chen_2013_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[central distribution volume (v1), total drug]` | 24.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[central distribution volume]` |  | 24.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance (cl), total drug]` | 0.463 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance (cl), unbound drug]` | 25.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` |  | 0.463 | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartmental clearance (q), total drug]` | 10.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartmental clearance]` |  | 10.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral compartment volume (v2), total drug]` | 32.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral compartment volume]` |  | 32.0 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Chen_2013:abstract'] |
| C5_dimension_Q24 | pass | [length] ** 3 / [time] |  | ['Chen_2013:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Chen_2013:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fountzilas_2021:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Chen_2013:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Chen_2013:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Fountzilas_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.463 | ['Chen_2013:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.463 L/h | ['Chen_2013:abstract'] |
| C9_phys_window_Q24 | pass | clearance within physiological range | 25.4 L/h | ['Chen_2013:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 24.2 L | ['Chen_2013:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 32 L | ['Chen_2013:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_modelica.zip" download>Cisplatin_Chen2013_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_fmi.zip" download>Cisplatin_Chen2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_matlab.zip" download>Cisplatin_Chen2013_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_matlab_simbio.zip" download>Cisplatin_Chen2013_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_sbml.zip" download>Cisplatin_Chen2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_cellml.zip" download>Cisplatin_Chen2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 1728 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.286e-07 | m3/s |
| input | model | `VdPerKg` | 0.0003457 | m3/kg |
| input | model | `k12` | 0.0001171 | 1/s |
| input | model | `k21` | 8.854e-05 | 1/s |
| input | model | `ka` | 0.002603 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chen R, Li J, Hu WW, Wang ML, Zou SL, Miao LY. Circadian variability of pharmacokinetics of cisplatin in patients with non-small-cell lung carcinoma: analysis with the NONMEM program. Cancer chemotherapy and pharmacology 72(5):1111-1123 (2013). [doi:10.1007/s00280-013-2288-5](https://doi.org/10.1007/s00280-013-2288-5)

**This record:** Pharmacolibrary, model `Cisplatin_Chen2013_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_cisplatin/Cisplatin_Chen2013_reference>

```bibtex
@misc{pharmacolibrary_CisplatinChen2013reference,
  title  = {{Pharmacolibrary model Cisplatin_Chen2013_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_cisplatin/Cisplatin_Chen2013_reference},
  note   = {Parameters from doi:10.1007/s00280-013-2288-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 9.37 /h, lag 28.8 min, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_cisplatin/Cisplatin_Chen2013_reference/Cisplatin_Chen2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Cisplatin_Chen2013_reference_params.json` · controls `Cisplatin_Chen2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcisplatin%5D%20Cisplatin_Chen2013_reference&body=Drug%3A%20cisplatin%0ARecord%3A%20Cisplatin_Chen2013_reference%0APaper%3A%20Chen_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cisplatin/Cisplatin_Chen2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 09:51 UTC</sub>
