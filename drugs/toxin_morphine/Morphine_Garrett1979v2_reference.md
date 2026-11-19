<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Morphine&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/&quot;},{&quot;label&quot;:&quot;Garrett_1979_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Garrett1979v2_reference&quot;,&quot;label&quot;:&quot;Garrett_1979_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Garrett1979v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Morphine_Glave2023_m3g&quot;,&quot;label&quot;:&quot;G\u00fclave_2023_m3g&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Glave2023_m3g.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Got1994_reference&quot;,&quot;label&quot;:&quot;Got_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Got1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_iv_morphine_2_mg_2_h&quot;,&quot;label&quot;:&quot;Morse_2022_iv_morphine_2_mg_2_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_iv_morphine_2_mg_2_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_po_morphine_10_mg_4_h&quot;,&quot;label&quot;:&quot;Morse_2022_po_morphine_10_mg_4_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Verscheijden2021_morphine&quot;,&quot;label&quot;:&quot;Verscheijden_2021_morphine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Verscheijden2021_morphine.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Yalcin2022_mulla_et_al_37_uk&quot;,&quot;label&quot;:&quot;Yalcin_2022_mulla_et_al_37_uk&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Yalcin2022_mulla_et_al_37_uk.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Morphine — `Morphine_Garrett1979v2_reference`

> ## <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<div class="pk-model-meta" hidden drug="Morphine" model-id="Morphine_Garrett1979v2_reference" status="simulated" stale="false" population="normal and bile-cannulated dogs" measured-compound="morphine" parameterization="mechanistic" topology="retention"></div>

## Citation
Garrett ER, Jackson AJ. Pharmacokinetics of morphine and its surrogates. III: Morphine and morphine 3-monoglucuronide pharmacokinetics in the dog as a function of dose. Journal of pharmaceutical sciences 68(6):753–771 (1979).
  ·  DOI: [10.1002/jps.2600680627](https://doi.org/10.1002/jps.2600680627)

## Population and dosing

**Population:** normal and bile-cannulated dogs · condition healthy · age group adult.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| major elimination half-lives at the high dose | t1/2z | 83 | min |
| Renal morphine clearance | CLR | 85 | ml/min |
| Morphine plasma protein binding | fu | 36 |  |
| red cell-plasma water partition coefficient | Kp | 1.11 |  |
| Vd threshold | V | 5.0 | L/kg |
| Ka (hour−1) | kabs | 0.889 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of intermediate doses: this record has none, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| major elimination half-lives at the high dose | `Q57` · t1/2z | 83 | min | 4980 | s | min | llm (0.6) | Garrett_1979_2:abstract |
| Renal morphine clearance | `Q26` · CLR | 85 | ml/min | 1.417e-06 | m3/s | ml/min | llm_corrected (0.6) | Garrett_1979_2:abstract |
| Morphine plasma protein binding | `Q46` · fu | 36 |  | 0.36 |  |  | llm_confirmed (0.6) | Garrett_1979_2:abstract |
| red cell-plasma water partition coefficient | `Q410` · Kp | 1.11 |  |  |  |  | llm_confirmed (0.6) | Garrett_1979_2:abstract |
| Vd threshold | `Q61` · V | 5.0 | L/kg | 0.35 | m3 | L | review_gapfill (0.7) | Hernández-Gago_2026:review |
| Ka (hour−1) | `Q49` · kabs | 0.889 | hour−1 | 0.0002469 | 1/s | 1/h | review_gapfill (0.7) | Tang_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / major elimination half-lives at the high dose (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Intermediate doses' — extend the ontology if this is a real PK parameter (source ['Garrett_1979_2:abstract'])
- dropped duplicate Q57 ('major elimination half-lives at the low dose', value 37) — already have one for this compound
- dropped duplicate Q26 ('Renal morphine conjugate clearance', value 41) — already have one for this compound
- 'Morphine plasma protein binding' → Q46: printed without a unit and above 1 — read as a percentage
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 0/7 row label(s) assigned, 0 linked by role
- molar mass: none found for 'morphine 3-monoglucuronide' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Hernández-Gago_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Tang_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Garrett_1979_2_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.5 (6/12 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[intermediate doses]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[major elimination half-lives at the high dose]` | 83 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[major elimination half-lives]` |  | 83 | only_one_extracted |
| `gpt-oss:120b` | `parameters[morphine conjugate clearance]` |  | 41 | only_one_extracted |
| `gpt-oss:120b` | `parameters[morphine plasma protein binding]` | 36 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma protein binding]` |  | 36 | only_one_extracted |

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
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Garrett_1979_2:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tang_2025:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Garrett_1979_2:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hernández-Gago_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 350 L | ['Hernández-Gago_2026:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | retainedFraction (measured=morphine) | retainedFraction | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template | pass | retention → TK_Retention* | TK_Retention | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_morphine/Morphine_Garrett1979v2_reference/Morphine_Garrett1979v2_reference_modelica.zip" download>Morphine_Garrett1979v2_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_morphine/Morphine_Garrett1979v2_reference/Morphine_Garrett1979v2_reference_fmi.zip" download>Morphine_Garrett1979v2_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_morphine/Morphine_Garrett1979v2_reference/Morphine_Garrett1979v2_reference_matlab.zip" download>Morphine_Garrett1979v2_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_morphine/Morphine_Garrett1979v2_reference/Morphine_Garrett1979v2_reference_sbml.zip" download>Morphine_Garrett1979v2_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_morphine/Morphine_Garrett1979v2_reference/Morphine_Garrett1979v2_reference_cellml.zip" download>Morphine_Garrett1979v2_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2853 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 4980 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Garrett ER, Jackson AJ. Pharmacokinetics of morphine and its surrogates. III: Morphine and morphine 3-monoglucuronide pharmacokinetics in the dog as a function of dose. Journal of pharmaceutical sciences 68(6):753–771 (1979). [doi:10.1002/jps.2600680627](https://doi.org/10.1002/jps.2600680627)

**This record:** Pharmacolibrary, model `Morphine_Garrett1979v2_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_morphine/Morphine_Garrett1979v2_reference>

```bibtex
@misc{pharmacolibrary_MorphineGarrett1979v2reference,
  title  = {{Pharmacolibrary model Morphine_Garrett1979v2_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_morphine/Morphine_Garrett1979v2_reference},
  note   = {Parameters from doi:10.1002/jps.2600680627},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_morphine/Morphine_Garrett1979v2_reference/Morphine_Garrett1979v2_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_morphine/Morphine_Garrett1979v2_reference/Morphine_Garrett1979v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Morphine_Garrett1979v2_reference_params.json` · controls `Morphine_Garrett1979v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Garrett1979v2_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Garrett1979v2_reference%0APaper%3A%20Garrett_1979_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_morphine/Morphine_Garrett1979v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:59 UTC</sub>
