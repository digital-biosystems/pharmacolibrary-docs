<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;alfentanil&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/&quot;},{&quot;label&quot;:&quot;Helmers_1984 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alfentanil_Beers2004_reference&quot;,&quot;label&quot;:&quot;Beers_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Beers2004_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfentanil_Bouillon1999_reference&quot;,&quot;label&quot;:&quot;Bouillon_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Bouillon1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfentanil_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfentanil_Helmers1984_reference&quot;,&quot;label&quot;:&quot;Helmers_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Helmers1984_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Alfentanil_Davis1989_reference&quot;,&quot;label&quot;:&quot;Davis_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Davis1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfentanil_Mertens2004_reference&quot;,&quot;label&quot;:&quot;Mertens_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfentanil/Alfentanil_Mertens2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alfentanil — `Alfentanil_Helmers1984_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="alfentanil" model-id="Alfentanil_Helmers1984_reference" status="curated_candidate" stale="false" population="elderly surgical patients" measured-compound="alfentanil" parameterization="mechanistic" topology="2C"></div>

## Citation
Helmers H, Van Peer A, Woestenborghs R, Noorduin H, Heykants J. Alfentanil kinetics in the elderly. Clinical pharmacology and therapeutics 36(2):239–243 (1984).
  ·  DOI: [10.1038/clpt.1984.169](https://doi.org/10.1038/clpt.1984.169)

## Population and dosing

**Population:** elderly surgical patients · condition healthy · age group mixed · n = ?n_subjects.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference.svg" alt="Alfentanil_Helmers1984_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Apparent volumes of distribution of the central compartment ... in young adults and in elderly subjects | V1 | 201 | ml/kg |
| Apparent volumes of distribution ... at steady state ... in young adults and in elderly subjects | Vss | 460 | ml/kg |
| Apparent volumes of distribution ... of the AUC ... in young adults and in elderly subjects | V | 746 | ml/kg |
| Plasma clearance ... in elderly subjects | CL | 4.4 | ml/min/kg |
| terminal plasma t1/2 ... in the elderly patients | t1/2z | 137 | min |
| Fentanyl Mean v 2 | V2 | 275.7 | litre |
| central clearance | Q | 41.2 | ml/min/kg |
| t lag , min | tlag | 0.96 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.176). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Apparent volumes of distribution of the central compartment ... in young adults and in elderly subjects | `Q63` · V1 | 201 | ml/kg | 0.01407 | m3 | ml/kg | llm (0.6) | Helmers_1984:abstract, Helmers_1984:abstract |
| Apparent volumes of distribution ... at steady state ... in young adults and in elderly subjects | `Q65` · Vss | 460 | ml/kg | 0.0322 | m3 | ml/kg | llm (0.6) | Helmers_1984:abstract, Helmers_1984:abstract |
| Apparent volumes of distribution ... of the AUC ... in young adults and in elderly subjects | `Q61` · V | 746 | ml/kg | 0.05222 | m3 | ml/kg | llm_corrected (0.6) | Helmers_1984:abstract, Helmers_1984:abstract |
| Plasma clearance ... in elderly subjects | `Q22` · CL | 4.4 | ml/min/kg | 5.133e-06 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Helmers_1984:abstract |
| terminal plasma t1/2 ... in the elderly patients | `Q57` · t1/2z | 137 | min | 8220 | s | min | llm_confirmed (0.6) | Helmers_1984:abstract, Helmers_1984:abstract |
| Fentanyl Mean v 2 | `Q64` · V2 | 275.7 | litre | 0.2757 | m3 | L | review_gapfill (0.7) | Bower_1982:review |
| central clearance | `Q30` · Q | 41.2 | ml/min/kg | 4.807e-05 | m3/s | L/h | review_gapfill (0.7) | Egan_1995:review |
| t lag , min | `Q83` · tlag | 0.96 | min | 57.6 | s | h | review_gapfill (0.7) | Mertens_2004:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('Plasma clearance ... in young adults', value 6.5) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alfentanil
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q64 (V2) from Bower_1982's review values (primary lacked it)
- gap-filled Q30 (Q) from Egan_1995's review values (primary lacked it)
- gap-filled Q83 (tlag) from Mertens_2004's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Helmers_1984_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.176 (3/17 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution ... at steady state ... in young adults and in elderly subjects]` | 460 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution ... of the auc ... in young adults and in elderly subjects]` | 746 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution of the central compartment ... in young adults and in elderly subjects]` | 201 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution of the central compartment at steady state]` |  | 460 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution of the central compartment]` |  | 201 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 746 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central clearance]` | 41.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fentanyl mean v 2]` | 275.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance ... in elderly subjects]` | 4.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` |  | 4.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0.96 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal plasma t1/2 ... in the elderly patients]` | 137 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal plasma t1/2]` |  | 137 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Helmers_1984:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Egan_1995:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Helmers_1984:abstract', 'Helmers_1984:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Helmers_1984:abstract', 'Helmers_1984:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Helmers_1984:abstract', 'Helmers_1984:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Bower_1982:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Helmers_1984:abstract', 'Helmers_1984:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Mertens_2004:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.4 | ['Helmers_1984:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.5 L/h | ['Helmers_1984:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 52.2 L | ['Helmers_1984:abstract', 'Helmers_1984:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 14.1 L | ['Helmers_1984:abstract', 'Helmers_1984:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 276 L | ['Bower_1982:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 32.2 L | ['Helmers_1984:abstract', 'Helmers_1984:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=alfentanil) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_modelica.zip" download>Alfentanil_Helmers1984_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_fmi.zip" download>Alfentanil_Helmers1984_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_matlab.zip" download>Alfentanil_Helmers1984_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_matlab_simbio.zip" download>Alfentanil_Helmers1984_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_sbml.zip" download>Alfentanil_Helmers1984_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_cellml.zip" download>Alfentanil_Helmers1984_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4165 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 5.133e-06 | m3/s |
| input | model | `VdPerKg` | 0.000201 | m3/kg |
| input | model | `k12` | 0.003416 | 1/s |
| input | model | `k21` | 0.0001743 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Helmers H, Van Peer A, Woestenborghs R, Noorduin H, Heykants J. Alfentanil kinetics in the elderly. Clinical pharmacology and therapeutics 36(2):239–243 (1984). [doi:10.1038/clpt.1984.169](https://doi.org/10.1038/clpt.1984.169)

**This record:** Pharmacolibrary v26.09, model `Alfentanil_Helmers1984_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_alfentanil/Alfentanil_Helmers1984_reference>

```bibtex
@misc{pharmacolibrary_AlfentanilHelmers1984reference,
  title  = {{Pharmacolibrary model Alfentanil_Helmers1984_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_alfentanil/Alfentanil_Helmers1984_reference},
  note   = {Parameters from doi:10.1038/clpt.1984.169},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_alfentanil/Alfentanil_Helmers1984_reference/Alfentanil_Helmers1984_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Alfentanil_Helmers1984_reference_params.json` · controls `Alfentanil_Helmers1984_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balfentanil%5D%20Alfentanil_Helmers1984_reference&body=Drug%3A%20alfentanil%0ARecord%3A%20Alfentanil_Helmers1984_reference%0APaper%3A%20Helmers_1984%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alfentanil/Alfentanil_Helmers1984_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:03 UTC</sub>
