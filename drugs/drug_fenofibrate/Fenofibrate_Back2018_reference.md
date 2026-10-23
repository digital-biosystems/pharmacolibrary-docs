<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;fenofibrate&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/&quot;},{&quot;label&quot;:&quot;Back_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fenofibrate_Back2018_reference&quot;,&quot;label&quot;:&quot;Back_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/Fenofibrate_Back2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fenofibrate_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/Fenofibrate_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fenofibrate — `Fenofibrate_Back2018_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="fenofibrate" model-id="Fenofibrate_Back2018_reference" status="curated_candidate" stale="false" population="healthy adults" measured-compound="fenofibric acid" parameterization="apparent" topology="1C"></div>

## Citation
Back HM, Song B, Pradhan S, Chae JW, Han N, Kang W et al. A mechanism-based pharmacokinetic model of fenofibrate for explaining increased drug absorption after food consumption. BMC pharmacology & toxicology 19(1):4 (2018).
  ·  DOI: [10.1186/s40360-018-0194-5](https://doi.org/10.1186/s40360-018-0194-5)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 250 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed fenofibrate, measured fenofibric acid.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference.svg" alt="Fenofibrate_Back2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| kg (hr−1) | kabs | 0.042 | hr−1 |
| km&a (hr− 1) | kfm | 0.172 | hr− 1 |
| kel (hr− 1) | kel | 0.28 | hr− 1 |
| Vc/F (L) | V/F | 11.91 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading fenofibrate → fenofibric acid (metabolism); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| kg (hr−1) | `Q49` · kabs | 0.042 | hr−1 | 1.167e-05 | 1/s | 1/h | exact (1) | Tab3:row1:col4 |
| km&a (hr− 1) | `Q305` · kfm | 0.172 | hr− 1 | 4.778e-05 | 1/s | 1/h | exact (1) | Tab3:row2:col4 |
| kel (hr− 1) | `Q47` · kel | 0.28 | hr− 1 | 7.778e-05 | 1/s | 1/h | exact (1) | Tab3:row3:col4 |
| Vc/F (L) | `Q76` · V/F | 11.91 | L | 0.01191 | m3 | l | exact (1) | Tab3:row4:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Proportional error (% RSE)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Vstomach (L)' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1', 'Tab3:row5:col4'])
- dropped duplicate Q47 ('kg’ (hr−1)', value '0.011') — already have one for this compound
- dropped PD-category row 'kout (hr−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row8:col4'])
- dropped unlinked row (NIL): 'E bile' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col4'])
- dropped unlinked row (NIL): 'MTIME2 (hr)' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col4'])
- dropped unlinked row (NIL): 'E food' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fenofibric acid
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 4 linked by role; re-tagged fenofibric acid→parent ×2
- review gap-fill skipped: this record measures 'fenofibric acid', not fenofibrate — the review values are the parent's
- derived CL/F=3.3348 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- unparsed cell Tab3:row1:col1 = '0.0412 (8.5%)'
- unparsed cell Tab3:row1:col2 = '31.7% (22.1%)'
- unparsed cell Tab3:row2:col1 = '0.198 (28.9%)'
- unparsed cell Tab3:row3:col1 = '0.27 (13. 6%)'
- unparsed cell Tab3:row3:col2 = '86.3% (29.2%)'
- unparsed cell Tab3:row3:col3 = '44.9% (43.5%)'
- unparsed cell Tab3:row4:col1 = '12.9 (27.8%)'
- unparsed cell Tab3:row4:col2 = '93% (28.9%)'
- unparsed cell Tab3:row4:col3 = '50.9% (22.6%)'
- unparsed cell Tab3:row7:col1 = '0.00971 (58.9%)'
- unparsed cell Tab3:row8:col1 = '0.00972 (38.3%)'
- unparsed cell Tab3:row9:col1 = '0.0239 (22.2%)'
- unparsed cell Tab3:row11:col1 = '6.94 (12.4%)'
- unparsed cell Tab3:row12:col1 = '0.617 (40.4%)'
- unparsed cell Tab3:row16:col1 = '0.608 (6.4%)'
- companion parameter table 5 transcribed (0 record(s))
- LLM selected parameter table(s) 5
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (7/14 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['fenofibrate', 'fenofibric acid', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[e bile]` |  | 0.027 | only_one_extracted |
| `gpt-oss-120b` | `parameters[e food]` |  | 0.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kg’]` |  | 0.011 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtime2]` |  | 6.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].parameter_id` | Q76 | Q290 | mismatch |
| `gpt-oss-120b` | `parameters[vstomach]` |  |  | only_one_extracted |

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
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Tab3:row2:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab3:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row1:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab3:row4:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.9 L | ['Tab3:row4:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_derived_parameters | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | pass | C_central (measured=fenofibric acid) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_modelica.zip" download>Fenofibrate_Back2018_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_fmi.zip" download>Fenofibrate_Back2018_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3188 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00025 | kg |
| input | model | `Cl` | 9.263e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001701 | m3/kg |
| input | model | `ka` | 1.167e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Back HM, Song B, Pradhan S, Chae JW, Han N, Kang W et al. A mechanism-based pharmacokinetic model of fenofibrate for explaining increased drug absorption after food consumption. BMC pharmacology & toxicology 19(1):4 (2018). [doi:10.1186/s40360-018-0194-5](https://doi.org/10.1186/s40360-018-0194-5)

**This record:** Pharmacolibrary v26.09, model `Fenofibrate_Back2018_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_fenofibrate/Fenofibrate_Back2018_reference>

```bibtex
@misc{pharmacolibrary_FenofibrateBack2018reference,
  title  = {{Pharmacolibrary model Fenofibrate_Back2018_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fenofibrate/Fenofibrate_Back2018_reference},
  note   = {Parameters from doi:10.1186/s40360-018-0194-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 250 mg, single dose, first-order absorption (ka 0.042 /h, F 1). Dose in the paper: 250 mg.

<dbs-fmusim paramsurl="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fenofibrate/Fenofibrate_Back2018_reference/Fenofibrate_Back2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fenofibrate_Back2018_reference_params.json` · controls `Fenofibrate_Back2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfenofibrate%5D%20Fenofibrate_Back2018_reference&body=Drug%3A%20fenofibrate%0ARecord%3A%20Fenofibrate_Back2018_reference%0APaper%3A%20Back_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fenofibrate/Fenofibrate_Back2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:36 UTC</sub>
