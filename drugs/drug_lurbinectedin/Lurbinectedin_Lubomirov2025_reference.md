<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;lurbinectedin&quot;,&quot;href&quot;:&quot;drugs/drug_lurbinectedin/&quot;},{&quot;label&quot;:&quot;Lubomirov_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lurbinectedin_Fudio2021_reference&quot;,&quot;label&quot;:&quot;Fudio_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lurbinectedin/Lurbinectedin_Fudio2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lurbinectedin_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lurbinectedin — `Lurbinectedin_Lubomirov2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Lurbinectedin's inter-compartmental transfer rates defaulted to placeholders because the paper's non-standard unit prevented SI conversion.

<div class="pk-model-meta" hidden drug="lurbinectedin" model-id="Lurbinectedin_Lubomirov2025_reference" status="needs_review" stale="false" population="cancer patients" measured-compound="lurbinectedin" parameterization="mechanistic" topology="2C"></div>

## Citation
Lubomirov R, Pérez-Ramos L, Fudio S, Asín-Prieto E, Ibarra-Gómez L, Zubiaur P. CYP3A Genotype Is Associated With Variability in the Exposure and Clearance of the Novel Oncogenic Transcription Inhibitor Lurbinectedin. Clinical and translational science 18(4):e70173 (2025).
  ·  DOI: [10.1111/cts.70173](https://doi.org/10.1111/cts.70173)

## Population and dosing

**Population:** cancer patients · condition cancer · age group adult · n = 719.

**Dosing:** 2, 3.2, 5 mg/m2, iv, single.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference.svg" alt="Lurbinectedin_Lubomirov2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 0 | equation variable | 3542.05 | ng × h/L |
| volume of distribution at steady state | V | 438 | L |
| central volume | V1 | 11.6 | L |
| CL | CL | 11.2 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lurbinectedin's inter-compartmental transfer rates defaulted to placeholders because the paper's non-standard unit prevented SI conversion.**

The record lists a parameter with the value 3542.05 ng × h/L, but this unit could not be converted to SI units. Consequently, the inter-compartmental transfer rates lacked explicit estimates from the paper and were substituted with generic library defaults. These defaulted values determine the simulated profile but are not supported by the specific study data. Extracted — lurbinectedin: V 438 L, V1 11.6 L, CL 11.2 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lurbinectedin, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 0 | `Q900` · equation variable | 3542.05 | ng × h/L |  |  | (h·ng)/l | llm (0.6) | cts70173-tbl-0003:row6:col2, cts70173-tbl-0003:row6:col3, cts70173-tbl-0003:row6:col4, cts70173-tbl-0003:row6:col5 |
| volume of distribution at steady state | `Q61` · V | 438 | L | 0.438 | m3 | L | boundary (0.8) | Lubomirov_2025:other_prose |
| central volume | `Q63` · V1 | 11.6 | L | 0.0116 | m3 | L | exact (1) | Lubomirov_2025:other_prose |
| CL | `Q22` · CL | 11.2 | L/h | 3.111e-06 | m3/s | L/h | exact (1) | Lubomirov_2025:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']

**Interpretation flags:**
- column 'aucu (ng × h/l)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'clu (kl/h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row2:col2', 'cts70173-tbl-0003:row2:col3', 'cts70173-tbl-0003:row2:col5', 'cts70173-tbl-0003:row2:col6'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row3:col2', 'cts70173-tbl-0003:row3:col3', 'cts70173-tbl-0003:row3:col4', 'cts70173-tbl-0003:row3:col5'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row4:col2', 'cts70173-tbl-0003:row4:col3', 'cts70173-tbl-0003:row4:col4', 'cts70173-tbl-0003:row4:col5'])
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row5:col2', 'cts70173-tbl-0003:row5:col3', 'cts70173-tbl-0003:row5:col4', 'cts70173-tbl-0003:row5:col5'])
- unit_dimension_unknown: 'ng × h/L' (equation variable)
- dropped unlinked row (NIL): '*1/*1 (NM)' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row8:col2', 'cts70173-tbl-0003:row8:col3', 'cts70173-tbl-0003:row8:col4', 'cts70173-tbl-0003:row8:col5', 'cts70173-tbl-0003:row8:col6', 'cts70173-tbl-0003:row12:col2', 'cts70173-tbl-0003:row12:col3', 'cts70173-tbl-0003:row12:col4', 'cts70173-tbl-0003:row12:col5', 'cts70173-tbl-0003:row12:col6', 'cts70173-tbl-0003:row12:col7'])
- dropped unlinked row (NIL): '*1/*3 (IM)' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row9:col2', 'cts70173-tbl-0003:row9:col3', 'cts70173-tbl-0003:row9:col4', 'cts70173-tbl-0003:row9:col5'])
- dropped unlinked row (NIL): '*3/*3 (PM)' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row10:col2', 'cts70173-tbl-0003:row10:col3', 'cts70173-tbl-0003:row10:col4', 'cts70173-tbl-0003:row10:col5'])
- dropped unlinked row (NIL): '*1/*22 (IM)' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row13:col2', 'cts70173-tbl-0003:row13:col3', 'cts70173-tbl-0003:row13:col4', 'cts70173-tbl-0003:row13:col5'])
- dropped unlinked row (NIL): '*22/*22 (PM)' — extend the ontology if this is a real PK parameter (source ['cts70173-tbl-0003:row14:col2', 'cts70173-tbl-0003:row14:col3', 'cts70173-tbl-0003:row14:col4', 'cts70173-tbl-0003:row14:col5'])
- table mostly unlinked (9/10 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('volume of distribution at steady state'=438) from results prose — parameter table was unreadable
- salvaged Q63 ('central volume'=11.6) from results prose — parameter table was unreadable
- salvaged Q22 ('CL'=11.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lurbinectedin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell cts70173-tbl-0003:row2:col4 = '&lt; 0.001'
- unparsed cell cts70173-tbl-0003:row2:col7 = '&lt; 0.001'
- unparsed cell cts70173-tbl-0003:row8:col7 = '&lt; 0.001'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[0]` | 3542.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[4]` |  | 6.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume]` | 11.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 11.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution at steady state]` | 438 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lurbinectedin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lurbinectedin | unknown | mismatch |

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
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.2 | ['Lubomirov_2025:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.2 L/h | ['Lubomirov_2025:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 438 L | ['Lubomirov_2025:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.6 L | ['Lubomirov_2025:other_prose'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=lurbinectedin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_modelica.zip" download>Lurbinectedin_Lubomirov2025_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_fmi.zip" download>Lurbinectedin_Lubomirov2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_matlab.zip" download>Lurbinectedin_Lubomirov2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_matlab_simbio.zip" download>Lurbinectedin_Lubomirov2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_sbml.zip" download>Lurbinectedin_Lubomirov2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_cellml.zip" download>Lurbinectedin_Lubomirov2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.7849 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 3.111e-06 | m3/s |
| input | model | `VdPerKg` | 0.006257 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Lubomirov R, Pérez-Ramos L, Fudio S, Asín-Prieto E, Ibarra-Gómez L, Zubiaur P. CYP3A Genotype Is Associated With Variability in the Exposure and Clearance of the Novel Oncogenic Transcription Inhibitor Lurbinectedin. Clinical and translational science 18(4):e70173 (2025). [doi:10.1111/cts.70173](https://doi.org/10.1111/cts.70173)

**This record:** Pharmacolibrary v26.09, model `Lurbinectedin_Lubomirov2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference>

```bibtex
@misc{pharmacolibrary_LurbinectedinLubomirov2025reference,
  title  = {{Pharmacolibrary model Lurbinectedin_Lubomirov2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference},
  note   = {Parameters from doi:10.1111/cts.70173},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference/Lurbinectedin_Lubomirov2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Lurbinectedin_Lubomirov2025_reference_params.json` · controls `Lurbinectedin_Lubomirov2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blurbinectedin%5D%20Lurbinectedin_Lubomirov2025_reference&body=Drug%3A%20lurbinectedin%0ARecord%3A%20Lurbinectedin_Lubomirov2025_reference%0APaper%3A%20Lubomirov_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lurbinectedin/Lurbinectedin_Lubomirov2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:44 UTC</sub>
