<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;alpha-Zearalenol&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_zearalenol/&quot;},{&quot;label&quot;:&quot;Qin_2026 \u00b7 zol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlphaZearalenol_Qin2026_zol&quot;,&quot;label&quot;:&quot;Qin_2026_zol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alpha-Zearalenol — `AlphaZearalenol_Qin2026_zol`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> AUC has no unit.

<div class="pk-model-meta" hidden drug="alpha-Zearalenol" model-id="AlphaZearalenol_Qin2026_zol" status="needs_review" stale="false" population="male sheep" measured-compound="alpha-Zearalenol" parameterization="mechanistic" topology="retention"></div>

## Citation
Qin J, Zhang Q, Ren N, Su Z, Zheng Z, Yin T et al. Toxicokinetics, Biotransformation, Excretion, and Tissue Residue of Zearalenone-14-Glucoside in Male Sheep. Toxins 18(9) (2026).
  ·  DOI: [10.3390/toxins18090364](https://doi.org/10.3390/toxins18090364)

## Population and dosing

**Population:** male sheep · condition healthy · age group adult · n = 5.

**Dosing:** 2 mg·kg−1 BW, oral, single.

**Dosed compound ≠ measured compound:** dosed zearalenone-14-glucoside (Z14G), measured alpha-Zearalenol.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax | tmax | 1.00 | h |
| Cmax | Cmax | 42.30 | ng·mL−1 |
| AUC(0–72h) | AUC | 161.54 |  |
| Kel | kel | 0.06 | 1·h−1 |
| T½ | t1/2z | 10.60 | h |
| AUC%Extrap | AUC%ext | 15.02 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUC has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — alpha zearalenol: tmax 1 h, Cmax 42.3 ng·mL−1, AUC 162, kel 0.06 1·h−1, t1/2z 10.6 h, AUC%ext 15.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has alpha-Zearalenol, the second reading Zearalenone-14-glucoside (Z14G); it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax | `Q56` · tmax | 1.00 | h | 3600 | s | h | exact (1) | Qin_2026_table_3:row0:col4 |
| Cmax | `Q32` · Cmax | 42.30 | ng·mL−1 | 4.23e-05 | kg/m3 | ng/ml | exact (1) | Qin_2026_table_3:row1:col4 |
| AUC(0–72h) | `Q88` · AUC | 161.54 |  |  |  |  | exact (1) | Qin_2026_table_3:row2:col4 |
| Kel | `Q47` · kel | 0.06 | 1·h−1 | 1.667e-05 | 1/s | 1/h | exact (1) | Qin_2026_table_3:row3:col4 |
| T½ | `Q57` · t1/2z | 10.60 | h | 3.816e+04 | s | h | half_life_rule (0.95) | Qin_2026_table_3:row4:col4 |
| AUC%Extrap | `Q84` · AUC%ext | 15.02 |  | 15.02 |  |  | llm_corrected (0.6) | Qin_2026_table_3:row5:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / T½ (Q57)

**Interpretation flags:**
- conflicting source units for 'AUC(0–72h)': [{'unit': 'ng·mL−1·h', 'source': 'Qin_2026_table_3:row2:col1', 'scope': 'unit_column'}, {'unit': '0–72h', 'source': 'Qin_2026_table_3:row2:col0', 'scope': 'label'}]
- dropped duplicate Q88 ('AUC(0–∞)', value '243.23') — already have one for this compound
- dropped value-less row: 'Serum samples were determined for β-ZOL'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alpha-Zearalenol
- toxin: 3 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'α-zol' subgroup of Qin_2026 (paper reports 1 populations: α-zol)
- row roles (LLM): model_class=noncompartmental; 0/16 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'zearalenone-14-glucoside (Z14G)' — its concentrations stay mass-only
- molar mass: none found for 'zearalenone (ZEN)' — its concentrations stay mass-only
- molar mass: none found for 'beta-Zearalenol (β-ZOL)' — its concentrations stay mass-only
- molar mass: none found for 'alpha-Zearalenol' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from)

**Extraction notes:**
- table Qin_2026_table_3: conflicting_units
- companion parameter table 3 transcribed (27 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[auc%extrap]` | 15.02 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | 161.54 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc_%extrap]` |  | 12.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[aucinf]` |  | 3.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auclast]` |  | 3.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl_f]` |  | 412.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax].value` | 42.30 | 2.15 | mismatch |
| `gpt-oss:120b` | `parameters[kel]` | 0.06 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrtinf]` |  | 2.68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2elim]` |  | 0.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1⁄2]` | 10.60 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax].value` | 1.00 | 0.50 | mismatch |
| `gpt-oss:120b` | `parameters[vz/f]` |  | 1037.13 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | alpha-Zearalenol | Zearalenone-14-glucoside (Z14G) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Qin_2026_table_3:row1:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Qin_2026_table_3:row3:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Qin_2026_table_3:row0:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Qin_2026_table_3:row4:col4'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['Qin_2026_table_3:row2:col4'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol/AlphaZearalenol_Qin2026_zol_modelica.zip" download>AlphaZearalenol_Qin2026_zol_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol/AlphaZearalenol_Qin2026_zol_fmi.zip" download>AlphaZearalenol_Qin2026_zol_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol/AlphaZearalenol_Qin2026_zol_matlab.zip" download>AlphaZearalenol_Qin2026_zol_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol/AlphaZearalenol_Qin2026_zol_sbml.zip" download>AlphaZearalenol_Qin2026_zol_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol/AlphaZearalenol_Qin2026_zol_cellml.zip" download>AlphaZearalenol_Qin2026_zol_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 3.816e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Qin J, Zhang Q, Ren N, Su Z, Zheng Z, Yin T et al. Toxicokinetics, Biotransformation, Excretion, and Tissue Residue of Zearalenone-14-Glucoside in Male Sheep. Toxins 18(9) (2026). [doi:10.3390/toxins18090364](https://doi.org/10.3390/toxins18090364)

**This record:** Pharmacolibrary, model `AlphaZearalenol_Qin2026_zol`. <https://pharmacolibrary.github.io/#/drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol>

```bibtex
@misc{pharmacolibrary_AlphaZearalenolQin2026zol,
  title  = {{Pharmacolibrary model AlphaZearalenol_Qin2026_zol}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol},
  note   = {Parameters from doi:10.3390/toxins18090364},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol/AlphaZearalenol_Qin2026_zol_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol/AlphaZearalenol_Qin2026_zol_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `AlphaZearalenol_Qin2026_zol_params.json` · controls `AlphaZearalenol_Qin2026_zol_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balpha_zearalenol%5D%20AlphaZearalenol_Qin2026_zol&body=Drug%3A%20alpha_zearalenol%0ARecord%3A%20AlphaZearalenol_Qin2026_zol%0APaper%3A%20Qin_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 13:48 UTC</sub>
