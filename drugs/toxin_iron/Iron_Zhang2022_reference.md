<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Iron&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/&quot;},{&quot;label&quot;:&quot;Zhang_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iron_Borella2022_reference&quot;,&quot;label&quot;:&quot;Borella_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Borella2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Fan2025_reference&quot;,&quot;label&quot;:&quot;Fan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Fan2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Zhang2022_reference&quot;,&quot;label&quot;:&quot;Zhang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Zhang2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Iron — `Iron_Zhang2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The iron absorption rate constant was not reported in the source, leaving it at a software default instead of an estimated value.

<div class="pk-model-meta" hidden drug="Iron" model-id="Iron_Zhang2022_reference" status="needs_review" stale="false" population="healthy subjects and patients with hemodialysis-dependent stage 5 chronic kidney disease (CKD-5HD)" measured-compound="iron" parameterization="apparent" topology="1C"></div>

## Citation
Zhang L, Gan L, Li K, Xie P, Tan Y, Wei G et al. Ethnicity evaluation of ferric pyrophosphate citrate among Asian and Non-Asian populations: a population pharmacokinetics analysis. European journal of clinical pharmacology 78(9):1421-1434 (2022).
  ·  DOI: [10.1007/s00228-022-03328-9](https://doi.org/10.1007/s00228-022-03328-9)

## Population and dosing

**Population:** healthy subjects and patients with hemodialysis-dependent stage 5 chronic kidney disease (CKD-5HD) · condition healthy and CKD-5HD · age group adult · n = 91.

**Dosing:** 0.15, 12 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed ferric pyrophosphate citrate, measured iron.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference.svg" alt="Iron_Zhang2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL, L/h | CLm/F | 0.477 | L/h | 8.2 |
| Vd, L | Vm/F | 3.62 | L | 7.0 |
| CL/F, L/h | CLm/F | 1.02 | L/h | 5.9 |
| Vd/F, L | Vm/F | 3.57 | L | 3.8 |
| CL/F | CL/F | 0.982 | L/h |  |
| Vd/F | V/F | 3.32 | L |  |
| tR | tlag | 27.5 | min |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The iron absorption rate constant was not reported in the source, leaving it at a software default instead of an estimated value.**

The model builder substituted a default ka value for the iron drug because the paper did not provide an explicit estimate. This invented absorption rate makes the simulated profile unsupported by the provided data. The record was held back because this key pharmacokinetic parameter lacks a source-derived value. Extracted — iron: CLm/F 0.477 L/h, Vm/F 3.62 L, CLm/F 1.02 L/h, Vm/F 3.57 L, CL/F 0.982 L/h, V/F 3.32 L, tlag 27.5 min.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q351` · CLm/F | 0.477 | L/h | 1.325e-07 | m3/s | l/h | 8.2 | exact (1) | Tab2:row4:col1 |
| Vd, L | `Q367` · Vm/F | 3.62 | L | 0.00362 | m3 | l | 7.0 | exact (1) | Tab2:row5:col1 |
| CL/F, L/h | `Q351` · CLm/F | 1.02 | L/h | 2.833e-07 | m3/s | l/h | 5.9 | exact (1) | Tab2:row16:col1, Tab2:row28:col1 |
| Vd/F, L | `Q367` · Vm/F | 3.57 | L | 0.00357 | m3 | l | 3.8 | exact (1) | Tab2:row17:col1, Tab2:row29:col1 |
| CL/F | `Q27` · CL/F | 0.982 | L/h | 2.728e-07 | m3/s | L/h |  | review_gapfill (0.7) | Zhang_2022:review |
| Vd/F | `Q76` · V/F | 3.32 | L | 0.00332 | m3 | L |  | review_gapfill (0.7) | Zhang_2022:review |
| tR | `Q83` · tlag | 27.5 | min | 1650 | s | h |  | review_gapfill (0.7) | Wang_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'ω1 (CL, %)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2 (Vd, %)' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'σ (add), ng/ml' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ1 (prop), %' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ2 (add), ng/ml' routed out of structural estimates ('Residual error')
- table representations disagree for 'CL, L/h'; source reconciliation required
- table representations disagree for 'Vd, L'; source reconciliation required
- table representations disagree for 'LBM on Vd'; source reconciliation required
- table representations disagree for 'Fe.av on Vd (× 10−4)'; source reconciliation required
- table representations disagree for 'θsex on Vd'; source reconciliation required
- table representations disagree for 'CL/F, L/h'; source reconciliation required
- table representations disagree for 'Vd/F, L'; source reconciliation required
- table representations disagree for 'LBM on Vd/F'; source reconciliation required
- dropped unlinked row (NIL): 'LBM on Vd' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col1'])
- dropped unlinked row (NIL): 'Fe.av on Vd (× 10−4)' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- dropped duplicate Q61 ('θsex on Vd', value '1.80') — already have one for this compound
- dropped unlinked row (NIL): 'LBM on Vd/F' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col1', 'Tab2:row31:col1'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 2.8 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- metabolite iron: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite iron: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite iron: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite iron: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=iron
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 6 linked by role; re-tagged iron→parent ×22
- gap-filled Q27 (CL/F) from Zhang_2022's review values (primary lacked it)
- gap-filled Q76 (V/F) from Zhang_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Wang_2026's review values (primary lacked it)

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Zhang_2022:review'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row16:col1', 'Tab2:row28:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Tab2:row5:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Tab2:row17:col1', 'Tab2:row29:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Zhang_2022:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Wang_2026:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.982 L/h | ['Zhang_2022:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.32 L | ['Zhang_2022:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=iron) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_modelica.zip" download>Iron_Zhang2022_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_fmi.zip" download>Iron_Zhang2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_matlab.zip" download>Iron_Zhang2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_matlab_simbio.zip" download>Iron_Zhang2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_sbml.zip" download>Iron_Zhang2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_cellml.zip" download>Iron_Zhang2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.05584 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1650 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.5e-07 | kg |
| input | model | `Cl` | 2.728e-07 | m3/s |
| input | model | `VdPerKg` | 4.743e-05 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhang L, Gan L, Li K, Xie P, Tan Y, Wei G et al. Ethnicity evaluation of ferric pyrophosphate citrate among Asian and Non-Asian populations: a population pharmacokinetics analysis. European journal of clinical pharmacology 78(9):1421-1434 (2022). [doi:10.1007/s00228-022-03328-9](https://doi.org/10.1007/s00228-022-03328-9)

**This record:** Pharmacolibrary, model `Iron_Zhang2022_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_iron/Iron_Zhang2022_reference>

```bibtex
@misc{pharmacolibrary_IronZhang2022reference,
  title  = {{Pharmacolibrary model Iron_Zhang2022_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_iron/Iron_Zhang2022_reference},
  note   = {Parameters from doi:10.1007/s00228-022-03328-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.15 mg, single dose, first-order absorption (ka 0.5 /h, lag 27.5 min, F 1). Doses in the paper: 0.15–12 mg.

<dbs-fmusim paramsurl="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_iron/Iron_Zhang2022_reference/Iron_Zhang2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Iron_Zhang2022_reference_params.json` · controls `Iron_Zhang2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biron%5D%20Iron_Zhang2022_reference&body=Drug%3A%20iron%0ARecord%3A%20Iron_Zhang2022_reference%0APaper%3A%20Zhang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_iron/Iron_Zhang2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 22:26 UTC</sub>
