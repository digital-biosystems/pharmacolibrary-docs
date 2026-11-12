<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Succinic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/&quot;},{&quot;label&quot;:&quot;Jung_2022 \u00b7 13c4sa_po&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SuccinicAcid_Sharma2024_reference&quot;,&quot;label&quot;:&quot;Sharma_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/SuccinicAcid_Sharma2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SuccinicAcid_Jung2022_13c4sa_po&quot;,&quot;label&quot;:&quot;Jung_2022_13c4sa_po&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;SuccinicAcid_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_succinic_acid/SuccinicAcid_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Succinic acid — `SuccinicAcid_Jung2022_13c4sa_po`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The model does not reproduce the paper's time of the peak (tmax).

<div class="pk-model-meta" hidden drug="Succinic acid" model-id="SuccinicAcid_Jung2022_13c4sa_po" status="needs_review" stale="false" population="mice" measured-compound="Succinic acid-13C4" parameterization="mechanistic" topology="retention"></div>

## Citation
Jung Y, Song JS, Ahn S. Pharmacokinetics and Tissue Distribution of 13C-Labeled Succinic Acid in Mice. Nutrients 14(22) (2022).
  ·  DOI: [10.3390/nu14224757](https://doi.org/10.3390/nu14224757)

## Population and dosing

**Population:** mice · condition healthy · age group adult · n = 6.

**Dosing:** 700, 7000 mg, intravenous, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 0.25 | h |
| Cmax (ng/mL) | Cmax | 629.7 | ng/mL |
| T1/2 (h) | t1/2z | 0.83 | h |
| AUC4h (ng·h/mL) | AUCt | 321.7 | ng·h/mL |
| AUC∞ (ng·h/mL) | AUC∞ | 322.5 | ng·h/mL |
| MRT∞ (h) | MRT | 0.45 | h |
| F (%) | Fab | 1.45 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Fab), so that value has no SI equivalent. None of the extracted parameters is succinic acid's own; they describe Succinic acid-13C4. Extracted — Succinic acid-13C4: tmax 0.25 h, Cmax 630 ng/mL, t1/2z 0.83 h, AUCt 322 ng·h/mL, AUC∞ 322 ng·h/mL, MRT 0.45 h, Fab 1.45 %.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 0.25 | h | 900 | s | h | exact (1) | nutrients-14-04757-t005:row3:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 629.7 | ng/mL | 0.0006297 | kg/m3 | ng/ml | exact (1) | nutrients-14-04757-t005:row4:col2 |
| T1/2 (h) | `Q57` · t1/2z | 0.83 | h | 2988 | s | h | half_life_rule (0.95) | nutrients-14-04757-t005:row5:col2 |
| AUC4h (ng·h/mL) | `Q19` · AUCt | 321.7 | ng·h/mL | 1.158 | kg*s/m3 | (h·ng)/ml | llm (0.6) | nutrients-14-04757-t005:row6:col2 |
| AUC∞ (ng·h/mL) | `Q17` · AUC∞ | 322.5 | ng·h/mL | 1.161 | kg*s/m3 | (h·ng)/ml | exact (1) | nutrients-14-04757-t005:row7:col2 |
| MRT∞ (h) | `Q53` · MRT | 0.45 | h | 1620 | s | h | exact (1) | nutrients-14-04757-t005:row11:col2 |
| F (%) | `Q40` · Fab | 1.45 | % |  |  |  | exact (1) | nutrients-14-04757-t005:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / T1/2 (h) (Q57)

**Interpretation flags:**
- unit_dimension_mismatch: 'MRT4h (h)' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('MRT4h (h)', value '0.44') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Succinic acid-13C4
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: '13c4sa / po' subgroup of Jung_2022 (paper reports 2 populations: 13c4sa / iv, 13c4sa / po)
- molar mass: no plausible PubChem entry for 'Succinic acid-13C4' ('succinic acid-13C4') — left in mass units
- molar mass: none found for 'Succinic acid-13C4' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table nutrients-14-04757-t005: ragged_grid
- LLM selected parameter table(s) 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['nutrients-14-04757-t005:row7:col2'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['nutrients-14-04757-t005:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['nutrients-14-04757-t005:row4:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['nutrients-14-04757-t005:row11:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['nutrients-14-04757-t005:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['nutrients-14-04757-t005:row5:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Succinic acid-13C4) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.987 |  | non-numeric value |
| T1_cmax | reference | skipped | 1168 | 0.987 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 244.8 | 0.987 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 149 | 0.987 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 128.8 | 0.987 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 44.5 | 0.987 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 13.3 | 0.987 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1168 | 0.987 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped |  | 1.867 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.0481 |  | non-numeric value |
| T1_tmax | reference | fail | 0.25 | 0.0481 | 0.1924 | min→SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.0481 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po/SuccinicAcid_Jung2022_13c4sa_po_modelica.zip" download>SuccinicAcid_Jung2022_13c4sa_po_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po/SuccinicAcid_Jung2022_13c4sa_po_fmi.zip" download>SuccinicAcid_Jung2022_13c4sa_po_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po/SuccinicAcid_Jung2022_13c4sa_po_matlab.zip" download>SuccinicAcid_Jung2022_13c4sa_po_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po/SuccinicAcid_Jung2022_13c4sa_po_sbml.zip" download>SuccinicAcid_Jung2022_13c4sa_po_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po/SuccinicAcid_Jung2022_13c4sa_po_cellml.zip" download>SuccinicAcid_Jung2022_13c4sa_po_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2988 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jung Y, Song JS, Ahn S. Pharmacokinetics and Tissue Distribution of 13C-Labeled Succinic Acid in Mice. Nutrients 14(22) (2022). [doi:10.3390/nu14224757](https://doi.org/10.3390/nu14224757)

**This record:** Pharmacolibrary, model `SuccinicAcid_Jung2022_13c4sa_po`. <https://pharmacolibrary.github.io/#/drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po>

```bibtex
@misc{pharmacolibrary_SuccinicAcidJung202213c4sapo,
  title  = {{Pharmacolibrary model SuccinicAcid_Jung2022_13c4sa_po}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po},
  note   = {Parameters from doi:10.3390/nu14224757},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po/SuccinicAcid_Jung2022_13c4sa_po_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po/SuccinicAcid_Jung2022_13c4sa_po_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `SuccinicAcid_Jung2022_13c4sa_po_params.json` · controls `SuccinicAcid_Jung2022_13c4sa_po_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsuccinic_acid%5D%20SuccinicAcid_Jung2022_13c4sa_po&body=Drug%3A%20succinic_acid%0ARecord%3A%20SuccinicAcid_Jung2022_13c4sa_po%0APaper%3A%20Jung_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_succinic_acid/SuccinicAcid_Jung2022_13c4sa_po%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 00:48 UTC</sub>
