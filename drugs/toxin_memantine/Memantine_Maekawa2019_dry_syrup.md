<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Memantine&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/&quot;},{&quot;label&quot;:&quot;Maekawa_2019 \u00b7 dry_syrup&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Memantine_Lee2016_reference&quot;,&quot;label&quot;:&quot;Lee_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Lee2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Memantine_Maekawa2019_dry_syrup&quot;,&quot;label&quot;:&quot;Maekawa_2019_dry_syrup&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Memantine_Maekawa2019_tablet&quot;,&quot;label&quot;:&quot;Maekawa_2019_tablet&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Maekawa2019_tablet.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Memantine_Saleh2022_reference&quot;,&quot;label&quot;:&quot;Saleh_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Saleh2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Memantine_Wang2026v2_reference&quot;,&quot;label&quot;:&quot;Wang_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Wang2026v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Memantine — `Memantine_Maekawa2019_dry_syrup`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 2.73e-05, model 0.999); the model does not reproduce the paper's time of the peak (tmax) (paper 6, model 0.183).

<div class="pk-model-meta" hidden drug="Memantine" model-id="Memantine_Maekawa2019_dry_syrup" status="needs_review" stale="false" population="Healthy Japanese Males" measured-compound="Memantine" parameterization="mechanistic" topology="retention"></div>

## Citation
Maekawa Y, Hasegawa S, Ishizuka T, Shiosakai K, Ishizuka H. Pharmacokinetics and Bioequivalence of Memantine Tablet and a New Dry Syrup Formulation in Healthy Japanese Males: Two Single-Dose Crossover Studies. Advances in therapy 36(10):2930–2940 (2019).
  ·  DOI: [10.1007/s12325-019-01044-y](https://doi.org/10.1007/s12325-019-01044-y)

## Population and dosing

**Population:** Healthy Japanese Males · condition healthy · age group adult.

**Dosing:** 20 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Memantine hydrochloride, measured Memantine.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 27.3 | ng/mL |
| AUCinf (ng h/mL) | AUC∞ | 2170 | ng h/mL |
| Tmax (h)a | tmax | 6.00 | h |
| T½ (h) | t1/2z | 60.6 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 2.73e-05, model 0.999); the model does not reproduce the paper's time of the peak (tmax) (paper 6, model 0.183).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — memantine: Cmax 27.3 ng/mL, AUC∞ 2.17e+03 ng h/mL, tmax 6 h, t1/2z 60.6 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 27.3 | ng/mL | 2.73e-05 | kg/m3 | ng/ml | exact (1) | Tab2:row2:col1, Tab2:row8:col1 |
| AUCinf (ng h/mL) | `Q17` · AUC∞ | 2170 | ng h/mL | 7.812 | kg*s/m3 | (h·ng)/ml | exact (1) | Tab2:row4:col1 |
| Tmax (h)a | `Q56` · tmax | 6.00 | h | 2.16e+04 | s | h | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row11:col1 |
| T½ (h) | `Q57` · t1/2z | 60.6 | h | 2.182e+05 | s | h | half_life_rule (0.95) | Tab2:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / T½ (h) (Q57)

**Interpretation flags:**
- table representations disagree for 'Study I (n = 19)'; source reconciliation required
- table representations disagree for 'Cmax (ng/mL)'; source reconciliation required
- table representations disagree for 'AUCinf (ng h/mL)'; source reconciliation required
- table representations disagree for 'Tmax (h)a'; source reconciliation required
- table representations disagree for 'T½ (h)'; source reconciliation required
- table representations disagree for 'Study II (n = 22)'; source reconciliation required
- dropped unlinked row (NIL): 'Study I (n = 19)' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1'])
- dropped unlinked row (NIL): 'Study II (n = 22)' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Memantine
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'dry syrup' subgroup of Maekawa_2019 (paper reports 2 populations: dry syrup, tablet)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab2:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab2:row2:col1', 'Tab2:row8:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab2:row5:col1', 'Tab2:row11:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row6:col1'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Memantine) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 2.73e-05 | 0.999 | 3.66e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.79e-05 | 0.999 | 3.581e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.77e-05 | 0.999 | 3.607e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.85e-05 | 0.999 | 3.505e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.981 | 0.999 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | fail | 2.77e-05 | 0.999 | 3.607e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.85e-05 | 0.999 | 3.505e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.973 | 0.999 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 60.6 | 60.59 | 0.9999 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 60.3 | 60.59 | 1.005 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 57.1 | 60.59 | 1.061 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 57.3 | 60.59 | 1.058 | h→SI vs simulated h |
| T1_tmax | reference | fail | 6 | 0.1833 | 0.0306 | h→SI vs simulated h |
| T1_tmax | reference | fail | 6 | 0.1833 | 0.0306 | h→SI vs simulated h |
| T1_tmax | reference | fail | 5 | 0.1833 | 0.0367 | h→SI vs simulated h |
| T1_tmax | reference | fail | 5 | 0.1833 | 0.0367 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup/Memantine_Maekawa2019_dry_syrup_modelica.zip" download>Memantine_Maekawa2019_dry_syrup_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup/Memantine_Maekawa2019_dry_syrup_fmi.zip" download>Memantine_Maekawa2019_dry_syrup_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup/Memantine_Maekawa2019_dry_syrup_matlab.zip" download>Memantine_Maekawa2019_dry_syrup_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup/Memantine_Maekawa2019_dry_syrup_sbml.zip" download>Memantine_Maekawa2019_dry_syrup_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup/Memantine_Maekawa2019_dry_syrup_cellml.zip" download>Memantine_Maekawa2019_dry_syrup_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1793 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.182e+05 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Maekawa Y, Hasegawa S, Ishizuka T, Shiosakai K, Ishizuka H. Pharmacokinetics and Bioequivalence of Memantine Tablet and a New Dry Syrup Formulation in Healthy Japanese Males: Two Single-Dose Crossover Studies. Advances in therapy 36(10):2930–2940 (2019). [doi:10.1007/s12325-019-01044-y](https://doi.org/10.1007/s12325-019-01044-y)

**This record:** Pharmacolibrary, model `Memantine_Maekawa2019_dry_syrup`. <https://pharmacolibrary.github.io/#/drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup>

```bibtex
@misc{pharmacolibrary_MemantineMaekawa2019drysyrup,
  title  = {{Pharmacolibrary model Memantine_Maekawa2019_dry_syrup}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup},
  note   = {Parameters from doi:10.1007/s12325-019-01044-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup/Memantine_Maekawa2019_dry_syrup_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup/Memantine_Maekawa2019_dry_syrup_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Memantine_Maekawa2019_dry_syrup_params.json` · controls `Memantine_Maekawa2019_dry_syrup_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmemantine%5D%20Memantine_Maekawa2019_dry_syrup&body=Drug%3A%20memantine%0ARecord%3A%20Memantine_Maekawa2019_dry_syrup%0APaper%3A%20Maekawa_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 01:09 UTC</sub>
