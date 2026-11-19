<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Procaine&quot;,&quot;href&quot;:&quot;drugs/toxin_procaine/&quot;},{&quot;label&quot;:&quot;Seifen_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procaine_Uboh2000_reference&quot;,&quot;label&quot;:&quot;Uboh_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_procaine/Procaine_Uboh2000_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procaine_Seifen1979_reference&quot;,&quot;label&quot;:&quot;Seifen_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_procaine/Procaine_Seifen1979_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Procaine — `Procaine_Seifen1979_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record uses library default bioavailability (F) and lag time (Tlag) instead of paper-specific estimates, resulting in unsupported simulation inputs.

<div class="pk-model-meta" hidden drug="Procaine" model-id="Procaine_Seifen1979_reference" status="needs_review" stale="false" population="12 women undergoing hysterectomy during N2O-O2 and narcotic anesthesia" measured-compound="Procaine" parameterization="mechanistic" topology="1C"></div>

## Citation
Seifen AB, Ferrari AA, Seifen EE, Thompson DS, Chapman J. Pharmacokinetics of intravenous procaine infusion in humans. Anesthesia and analgesia 58(5):382–386 (1979).
  ·  DOI: [10.1213/00000539-197909000-00007](https://doi.org/10.1213/00000539-197909000-00007)

## Population and dosing

**Population:** 12 women undergoing hysterectomy during N2O-O2 and narcotic anesthesia · condition surgery · age group adult · n = 12.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference.svg" alt="Procaine_Seifen1979_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| distribution half-life | t1/2α | 2.49 | minutes |
| elimination half-life | t1/2z | 7.69 | minutes |
| volume of distribution at steady-state | Vss | 0.79 | L/kg |
| total body clearance | CL | 0.08 | L/kg/min |
| Ka_proc | kabs | 0.035 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record uses library default bioavailability (F) and lag time (Tlag) instead of paper-specific estimates, resulting in unsupported simulation inputs.**

The model builder substituted default values for bioavailability (F) and lag time (Tlag) because these parameters were not explicitly estimated in the source text. Additionally, steady-state volume of distribution (0.79 L/kg) was used as the primary distribution volume, as no central volume or apparent volume was reported. The record was built from the abstract only, meaning these defaults and substitutions stand in for a fitted pharmacokinetic model. Extracted — procaine: t1/2α 2.49 minutes, t1/2z 7.69 minutes, Vss 0.79 L/kg, CL 0.08 L/kg/min, kabs 0.035 1/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| distribution half-life | `Q59` · t1/2α | 2.49 | minutes | 149.4 | s | min | half_life_rule (0.95) | Seifen_1979:abstract |
| elimination half-life | `Q57` · t1/2z | 7.69 | minutes | 461.4 | s | min | half_life_rule (0.95) | Seifen_1979:abstract |
| volume of distribution at steady-state | `Q65` · Vss | 0.79 | L/kg | 0.0553 | m3 | l/kg | llm_corrected (0.6) | Seifen_1979:abstract, Seifen_1979:abstract |
| total body clearance | `Q22` · CL | 0.08 | L/kg/min | 9.333e-05 | m3/s | l/(min·kg) | llm_confirmed (0.6) | Seifen_1979:abstract, Seifen_1979:abstract |
| Ka_proc | `Q49` · kabs | 0.035 | 1/h | 9.722e-06 | 1/s | 1/h | review_gapfill (0.7) | Ferran_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- dropped unlinked row (NIL): 'fraction of drug in the central compartment' — extend the ontology if this is a real PK parameter (source ['Seifen_1979:abstract', 'Seifen_1979:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Procaine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ferran_2024's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Seifen_1979_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ferran_2024:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Seifen_1979:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Seifen_1979:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.08 | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 336 L/h | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 55.3 L | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=Procaine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_modelica.zip" download>Procaine_Seifen1979_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_fmi.zip" download>Procaine_Seifen1979_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_matlab.zip" download>Procaine_Seifen1979_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_matlab_simbio.zip" download>Procaine_Seifen1979_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_sbml.zip" download>Procaine_Seifen1979_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_cellml.zip" download>Procaine_Seifen1979_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2363 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 9.333e-05 | m3/s |
| input | model | `VdPerKg` | 0.00079 | m3/kg |
| input | model | `ka` | 9.722e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Seifen AB, Ferrari AA, Seifen EE, Thompson DS, Chapman J. Pharmacokinetics of intravenous procaine infusion in humans. Anesthesia and analgesia 58(5):382–386 (1979). [doi:10.1213/00000539-197909000-00007](https://doi.org/10.1213/00000539-197909000-00007)

**This record:** Pharmacolibrary, model `Procaine_Seifen1979_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_procaine/Procaine_Seifen1979_reference>

```bibtex
@misc{pharmacolibrary_ProcaineSeifen1979reference,
  title  = {{Pharmacolibrary model Procaine_Seifen1979_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_procaine/Procaine_Seifen1979_reference},
  note   = {Parameters from doi:10.1213/00000539-197909000-00007},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.035 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Procaine_Seifen1979_reference_params.json` · controls `Procaine_Seifen1979_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprocaine%5D%20Procaine_Seifen1979_reference&body=Drug%3A%20procaine%0ARecord%3A%20Procaine_Seifen1979_reference%0APaper%3A%20Seifen_1979%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_procaine/Procaine_Seifen1979_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 19:27 UTC</sub>
