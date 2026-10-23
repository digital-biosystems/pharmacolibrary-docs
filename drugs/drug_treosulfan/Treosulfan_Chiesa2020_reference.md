<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;treosulfan&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/&quot;},{&quot;label&quot;:&quot;Chiesa_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Treosulfan_Chiesa2020_reference&quot;,&quot;label&quot;:&quot;Chiesa_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Treosulfan_Danielak2018_reference&quot;,&quot;label&quot;:&quot;Danielak_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Danielak2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Rosser2023_reference&quot;,&quot;label&quot;:&quot;Rosser_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Rosser2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Ten2014_reference&quot;,&quot;label&quot;:&quot;Ten_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Ten2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_van2019_base&quot;,&quot;label&quot;:&quot;van_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_van2019_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_van2019_final&quot;,&quot;label&quot;:&quot;van_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_van2019_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# treosulfan — `Treosulfan_Chiesa2020_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="treosulfan" model-id="Treosulfan_Chiesa2020_reference" status="accepted_with_caveats" stale="false" population="pediatric patients with hematological diseases (allogeneic HSCT)" measured-compound="treosulfan" parameterization="mechanistic" topology="2C"></div>

## Citation
Chiesa R, Standing JF, Winter R, Nademi Z, Chu J, Pinner D et al. Proposed Therapeutic Range of Treosulfan in Reduced Toxicity Pediatric Allogeneic Hematopoietic Stem Cell Transplant Conditioning: Results From a Prospective Trial. Clinical pharmacology and therapeutics 108(2):264–273 (2020).
  ·  DOI: [10.1002/cpt.1715](https://doi.org/10.1002/cpt.1715)

## Population and dosing

**Population:** pediatric patients with hematological diseases (allogeneic HSCT) · condition hematological diseases · age group mixed · n = 87.

**Dosing:** 10, 12, 14 g/m2, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference.svg" alt="Treosulfan_Chiesa2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/hour) | CL | 17.31 | L/hour | 5.6 | 0.95 (25.1% RSE) |
| V1 (L) | V1 | 35.55 | L | 4.7 |  |
| Q (L/hour) | Q | 9.36 | L/hour | 12.7 |  |
| V2 (L) | V2 | 9.89 | L | 8.4 |  |
| theta_q900_age | theta_q900_age | 2.12 |  | 3.2 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of theta_q900_age: this record has 2.12, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/hour) | `Q22` · CL | 17.31 | L/hour | 4.808e-06 | m3/s | l/h | 5.6 | exact (1) | cpt1715-tbl-0002:row2:col1 | 0.95 (25.1% RSE) |
| V1 (L) | `Q63` · V1 | 35.55 | L | 0.03555 | m3 | l | 4.7 | exact (1) | cpt1715-tbl-0002:row3:col1 |  |
| Q (L/hour) | `Q30` · Q | 9.36 | L/hour | 2.6e-06 | m3/s | l/h | 12.7 | exact (1) | cpt1715-tbl-0002:row5:col1 |  |
| V2 (L) | `Q64` · V2 | 9.89 | L | 0.00989 | m3 | l | 8.4 | exact (1) | cpt1715-tbl-0002:row6:col1 |  |
| theta_q900_age | `Q900` · theta_q900_age | 2.12 |  |  |  |  | 3.2 |  | cpt1715-tbl-0002:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Covariance of CL + V' routed out of structural estimates ('IIV %CV (%RSE)')
- dropped unlinked row (NIL): 'θa (postmenstrual age in weeks at 50% mature)' — extend the ontology if this is a real PK parameter (source ['cpt1715-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'θc (creatinine power)' — extend the ontology if this is a real PK parameter (source ['cpt1715-tbl-0002:row9:col1'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=treosulfan

**Extraction notes:**
- unparsed cell cpt1715-tbl-0002:row2:col2 = '30% (25.1)'
- unparsed cell cpt1715-tbl-0002:row2:col3 = '14% (49.8)'
- unparsed cell cpt1715-tbl-0002:row2:col4 = '17.33 (15.38, 20.66)'
- unparsed cell cpt1715-tbl-0002:row2:col5 = '30% (22, 37%)'
- unparsed cell cpt1715-tbl-0002:row2:col6 = '13% (7, 18%)'
- unparsed cell cpt1715-tbl-0002:row3:col2 = '38% (27.1)'
- unparsed cell cpt1715-tbl-0002:row3:col4 = '35.95 (30.54, 41.55)'
- unparsed cell cpt1715-tbl-0002:row3:col5 = '38% (27, 47%)'
- unparsed cell cpt1715-tbl-0002:row4:col5 = '0.943 (0.941, 0.947)'
- unparsed cell cpt1715-tbl-0002:row5:col4 = '8.99 (3.17, 13.13)'
- unparsed cell cpt1715-tbl-0002:row6:col2 = '43% (38.4)'
- unparsed cell cpt1715-tbl-0002:row6:col4 = '9.51 (5.74, 11.9)'
- unparsed cell cpt1715-tbl-0002:row6:col5 = '42% (20, 64%)'
- unparsed cell cpt1715-tbl-0002:row7:col4 = '38.87 (28.17, 45.38)'
- unparsed cell cpt1715-tbl-0002:row8:col4 = '2.24 (0.79, 4.41)'
- unparsed cell cpt1715-tbl-0002:row9:col4 = '−0.31 (−0.49, −0.12)'
- unparsed cell cpt1715-tbl-0002:row10:col4 = '13.09 (10.07, 15.48)'
- unparsed cell cpt1715-tbl-0002:row11:col4 = '0.02 (0.01, 49.67)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q900_age]` | 2.12 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cpt1715-tbl-0002:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpt1715-tbl-0002:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cpt1715-tbl-0002:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpt1715-tbl-0002:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.31 | ['cpt1715-tbl-0002:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.3 L/h | ['cpt1715-tbl-0002:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 35.5 L | ['cpt1715-tbl-0002:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.89 L | ['cpt1715-tbl-0002:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=treosulfan) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_modelica.zip" download>Treosulfan_Chiesa2020_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_fmi.zip" download>Treosulfan_Chiesa2020_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_matlab.zip" download>Treosulfan_Chiesa2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_matlab_simbio.zip" download>Treosulfan_Chiesa2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_sbml.zip" download>Treosulfan_Chiesa2020_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_cellml.zip" download>Treosulfan_Chiesa2020_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2783 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 4.808e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005079 | m3/kg |
| input | model | `k12` | 7.314e-05 | 1/s |
| input | model | `k21` | 0.0002629 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chiesa R, Standing JF, Winter R, Nademi Z, Chu J, Pinner D et al. Proposed Therapeutic Range of Treosulfan in Reduced Toxicity Pediatric Allogeneic Hematopoietic Stem Cell Transplant Conditioning: Results From a Prospective Trial. Clinical pharmacology and therapeutics 108(2):264–273 (2020). [doi:10.1002/cpt.1715](https://doi.org/10.1002/cpt.1715)

**This record:** Pharmacolibrary v26.09, model `Treosulfan_Chiesa2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference>

```bibtex
@misc{pharmacolibrary_TreosulfanChiesa2020reference,
  title  = {{Pharmacolibrary model Treosulfan_Chiesa2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference},
  note   = {Parameters from doi:10.1002/cpt.1715},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference/Treosulfan_Chiesa2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Treosulfan_Chiesa2020_reference_params.json` · controls `Treosulfan_Chiesa2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btreosulfan%5D%20Treosulfan_Chiesa2020_reference&body=Drug%3A%20treosulfan%0ARecord%3A%20Treosulfan_Chiesa2020_reference%0APaper%3A%20Chiesa_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:33 UTC</sub>
