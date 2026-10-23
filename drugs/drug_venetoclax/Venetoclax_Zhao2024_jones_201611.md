<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;venetoclax&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/&quot;},{&quot;label&quot;:&quot;Zhao_2024 \u00b7 jones_201611&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Venetoclax_Liu2026_reference&quot;,&quot;label&quot;:&quot;Liu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Liu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_minocha_201817&quot;,&quot;label&quot;:&quot;Zhao_2024_minocha_201817&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_minocha_201817.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_deng_201915&quot;,&quot;label&quot;:&quot;Zhao_2024_deng_201915&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_deng_201915.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_gong_202316&quot;,&quot;label&quot;:&quot;Zhao_2024_gong_202316&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_gong_202316.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_jones_201611&quot;,&quot;label&quot;:&quot;Zhao_2024_jones_201611&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_samineni_2022a18&quot;,&quot;label&quot;:&quot;Zhao_2024_samineni_2022a18&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_samineni_2022a18.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_samineni_2022b19&quot;,&quot;label&quot;:&quot;Zhao_2024_samineni_2022b19&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_samineni_2022b19.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# venetoclax — `Venetoclax_Zhao2024_jones_201611`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The venetoclax record was held back because the intercompartmental clearance parameter was missing from the extracted set, despite being required for the model structure.

<div class="pk-model-meta" hidden drug="venetoclax" model-id="Venetoclax_Zhao2024_jones_201611" status="needs_review" stale="false" population="adults with hematologic malignancies" measured-compound="venetoclax" parameterization="apparent" topology="1C"></div>

## Citation
Zhao Y, Guo N, Zhu Y, Shang J, Chen J, Luo X et al. Population Pharmacokinetic Models of Venetoclax in Hematologic Malignancies: A Systematic Review. Drug design, development and therapy 18:1771–1784 (2024).
  ·  DOI: [10.2147/DDDT.S458927](https://doi.org/10.2147/DDDT.S458927)

## Population and dosing

**Population:** adults with hematologic malignancies · condition hematologic malignancies · age group adult.

**Dosing:** 10, 1200 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611.svg" alt="Venetoclax_Zhao2024_jones_201611 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/Day) | CL/F | 413 | L/Day |
| Q/F (L/ Day) | Q/F | 94.5 | L/ Day |
| V2/F (L) | V2/F | 113 | L |
| V3/F (L) | V3/F | 116 | L |
| apparent volume of distribution (Vd/F) | V/F | 181.0 | L |
| ka value | kabs | 0.16 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The venetoclax record was held back because the intercompartmental clearance parameter was missing from the extracted set, despite being required for the model structure.**

The review noted that four parameters were covered, but the expected five were not fully accounted for, specifically omitting the apparent intercompartmental clearance between the central and peripheral compartments. Additionally, the absorption lag time was not provided with an explicit estimate and was instead left without a defined value in the record. Extracted — venetoclax: CL/F 413 L/Day, Q/F 94.5 L/ Day, V2/F 113 L, V3/F 116 L, V/F 181 L, kabs 0.16 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of apparent volume of distribution: this record has 181.0, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/Day) | `Q27` · CL/F | 413 | L/Day | 4.78e-06 | m3/s | l/d | exact (1) | t0003:row1:col2 |
| Q/F (L/ Day) | `Q69` · Q/F | 94.5 | L/ Day | 1.094e-06 | m3/s | l/d | exact (1) | t0003:row2:col2 |
| V2/F (L) | `Q82` · V2/F | 113 | L | 0.113 | m3 | l | exact (1) | t0003:row3:col2 |
| V3/F (L) | `Q78` · V3/F | 116 | L | 0.116 | m3 | l | exact (1) | t0003:row4:col2 |
| apparent volume of distribution (Vd/F) | `Q76` · V/F | 181.0 | L | 0.181 | m3 | L | review_gapfill (0.7) | Liu_2026:review |
| ka value | `Q49` · kabs | 0.16 | /h | 4.444e-05 | 1/s | 1/h | review_gapfill (0.7) | Liu_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'jones 201611' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=venetoclax
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- population split: 'jones 201611' subgroup of Zhao_2024 (paper reports 6 populations: deng 201915, gong 202316, jones 201611, minocha 201817, samineni 2022a18, samineni 2022b19)
- gap-filled Q76 (V/F) from Liu_2026's review values (primary lacked it)
- gap-filled Q49 (kabs) from Liu_2026's review values (primary lacked it)

**Extraction notes:**
- transposed table t0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell t0003:row3:col3 = 'Apparent central volume of distribution in females, L 37'
- unparsed cell t0003:row5:col3 = 'CL 38%, central volume of distribution 68%, absorption rate constant 19%'
- unparsed cell t0003:row6:col3 = 'Proportional residual error (40%)'
- unparsed cell t0003:row6:col7 = 'σ2prop 0.189'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 181.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka value]` | 0.16 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t0003:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Liu_2026:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['t0003:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Liu_2026:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['t0003:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['t0003:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 17.2 L/h | ['t0003:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 181 L | ['Liu_2026:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 113 L | ['t0003:row3:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=venetoclax) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['V2/F'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_modelica.zip" download>Venetoclax_Zhao2024_jones_201611_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_fmi.zip" download>Venetoclax_Zhao2024_jones_201611_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_matlab.zip" download>Venetoclax_Zhao2024_jones_201611_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_matlab_simbio.zip" download>Venetoclax_Zhao2024_jones_201611_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_sbml.zip" download>Venetoclax_Zhao2024_jones_201611_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_cellml.zip" download>Venetoclax_Zhao2024_jones_201611_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.8685 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 4.78e-06 | m3/s |
| input | model | `VdPerKg` | 0.002586 | m3/kg |
| input | model | `ka` | 4.444e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhao Y, Guo N, Zhu Y, Shang J, Chen J, Luo X et al. Population Pharmacokinetic Models of Venetoclax in Hematologic Malignancies: A Systematic Review. Drug design, development and therapy 18:1771–1784 (2024). [doi:10.2147/DDDT.S458927](https://doi.org/10.2147/DDDT.S458927)

**This record:** Pharmacolibrary v26.09, model `Venetoclax_Zhao2024_jones_201611`. <https://pharmacolibrary.github.io/#/drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611>

```bibtex
@misc{pharmacolibrary_VenetoclaxZhao2024jones201611,
  title  = {{Pharmacolibrary model Venetoclax_Zhao2024_jones_201611}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611},
  note   = {Parameters from doi:10.2147/DDDT.S458927},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.16 /h, F 1). Doses in the paper: 10–1200 mg.

<dbs-fmusim paramsurl="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611/Venetoclax_Zhao2024_jones_201611_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Venetoclax_Zhao2024_jones_201611_params.json` · controls `Venetoclax_Zhao2024_jones_201611_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvenetoclax%5D%20Venetoclax_Zhao2024_jones_201611&body=Drug%3A%20venetoclax%0ARecord%3A%20Venetoclax_Zhao2024_jones_201611%0APaper%3A%20Zhao_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:52 UTC</sub>
