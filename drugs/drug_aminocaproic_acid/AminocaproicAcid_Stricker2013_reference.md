<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;aminocaproic acid&quot;,&quot;href&quot;:&quot;drugs/drug_aminocaproic_acid/&quot;},{&quot;label&quot;:&quot;Stricker_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminocaproicAcid_Ross2007_reference&quot;,&quot;label&quot;:&quot;Ross_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminocaproic_acid/AminocaproicAcid_Ross2007_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminocaproicAcid_Stricker2013_reference&quot;,&quot;label&quot;:&quot;Stricker_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aminocaproic acid — `AminocaproicAcid_Stricker2013_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="aminocaproic acid" model-id="AminocaproicAcid_Stricker2013_reference" status="curated_candidate" stale="false" population="infants undergoing craniofacial reconstruction surgery" measured-compound="epsilon-aminocaproic acid" parameterization="mechanistic" topology="2C"></div>

## Citation
Stricker PA, Zuppa AF, Fiadjoe JE, Maxwell LG, Sussman EM, Pruitt EY et al. Population pharmacokinetics of epsilon-aminocaproic acid in infants undergoing craniofacial reconstruction surgery. British journal of anaesthesia 110(5):788–799 (2013).
  ·  DOI: [10.1093/bja/aes507](https://doi.org/10.1093/bja/aes507)

## Population and dosing

**Population:** infants undergoing craniofacial reconstruction surgery · condition craniofacial reconstruction surgery · age group infant.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference.svg" alt="AminocaproicAcid_Stricker2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| pre-/postoperative plasma drug clearance | CL | 32 | ml min(-1) |
| inter-compartmental clearance | Q | 42.4 | ml min(-1) |
| central volume of distribution | V1 | 1.27 | litre |
| peripheral volume of distribution | V2 | 2.53 | litre |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has epsilon-aminocaproic acid, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| pre-/postoperative plasma drug clearance | `Q22` · CL | 32 | ml min(-1) | 5.333e-07 | m3/s | ml/min | llm_confirmed (0.6) | Stricker_2013:abstract |
| inter-compartmental clearance | `Q30` · Q | 42.4 | ml min(-1) | 7.067e-07 | m3/s | ml/min | llm_confirmed (0.6) | Stricker_2013:abstract |
| central volume of distribution | `Q63` · V1 | 1.27 | litre | 0.00127 | m3 | l | boundary_compartment (0.9) | Stricker_2013:abstract, Stricker_2013:abstract |
| peripheral volume of distribution | `Q64` · V2 | 2.53 | litre | 0.00253 | m3 | l | boundary_compartment (0.9) | Stricker_2013:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Intra-operative clearance' — extend the ontology if this is a real PK parameter (source ['Stricker_2013:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=epsilon-aminocaproic acid
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Stricker_2013_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[central volume of distribution of]` |  | 1.27 | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | 1.27 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[infusion (civi) regimens]` |  | 25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[inter-compartmental clearance]` | 42.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[intra-operative clearance]` |  | 89 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution of]` |  | 2.53 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution]` | 2.53 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[pre-/postoperative plasma drug clearance of]` |  | 32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[pre-/postoperative plasma drug clearance]` | 32 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | epsilon-aminocaproic acid | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | epsilon-aminocaproic acid | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Stricker_2013:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Stricker_2013:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Stricker_2013:abstract', 'Stricker_2013:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Stricker_2013:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32 | ['Stricker_2013:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.92 L/h | ['Stricker_2013:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.27 L | ['Stricker_2013:abstract', 'Stricker_2013:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.53 L | ['Stricker_2013:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=epsilon-aminocaproic acid) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_modelica.zip" download>AminocaproicAcid_Stricker2013_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_fmi.zip" download>AminocaproicAcid_Stricker2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_matlab.zip" download>AminocaproicAcid_Stricker2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_matlab_simbio.zip" download>AminocaproicAcid_Stricker2013_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_sbml.zip" download>AminocaproicAcid_Stricker2013_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_cellml.zip" download>AminocaproicAcid_Stricker2013_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1312 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.016 | kg |
| input | model | `Cl` | 5.333e-07 | m3/s |
| input | model | `VdPerKg` | 1.814e-05 | m3/kg |
| input | model | `k12` | 0.0005564 | 1/s |
| input | model | `k21` | 0.0002793 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Stricker PA, Zuppa AF, Fiadjoe JE, Maxwell LG, Sussman EM, Pruitt EY et al. Population pharmacokinetics of epsilon-aminocaproic acid in infants undergoing craniofacial reconstruction surgery. British journal of anaesthesia 110(5):788–799 (2013). [doi:10.1093/bja/aes507](https://doi.org/10.1093/bja/aes507)

**This record:** Pharmacolibrary v26.09, model `AminocaproicAcid_Stricker2013_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference>

```bibtex
@misc{pharmacolibrary_AminocaproicAcidStricker2013reference,
  title  = {{Pharmacolibrary model AminocaproicAcid_Stricker2013_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference},
  note   = {Parameters from doi:10.1093/bja/aes507},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 16000 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 16000 mg parenteral (B02AA01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference/AminocaproicAcid_Stricker2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `AminocaproicAcid_Stricker2013_reference_params.json` · controls `AminocaproicAcid_Stricker2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminocaproic_acid%5D%20AminocaproicAcid_Stricker2013_reference&body=Drug%3A%20aminocaproic_acid%0ARecord%3A%20AminocaproicAcid_Stricker2013_reference%0APaper%3A%20Stricker_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 16:28 UTC</sub>
