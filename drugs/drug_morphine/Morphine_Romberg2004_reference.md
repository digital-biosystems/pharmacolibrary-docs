<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Romberg_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_reference&quot;,&quot;label&quot;:&quot;Andersen_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Romberg2004_reference&quot;,&quot;label&quot;:&quot;Romberg_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Romberg2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Morphine_Venkatasubramanian2014_reference&quot;,&quot;label&quot;:&quot;Venkatasubramanian_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Romberg2004_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 6.2, model 1.12); ka use library defaults, not estimates from this paper (+2 more).

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Romberg2004_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="morphine-6-glucuronide" parameterization="apparent" topology="1C"></div>

## Citation
Romberg R, Olofsen E, Sarton E, den Hartigh J, Taschner PE, Dahan A. Pharmacokinetic-pharmacodynamic modeling of morphine-6-glucuronide-induced analgesia in healthy volunteers: absence of sex differences. Anesthesiology 100(1):120–133 (2004).
  ·  DOI: [10.1097/00000542-200401000-00021](https://doi.org/10.1097/00000542-200401000-00021)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 20.

**Dosing:** 21 mg, iv, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_morphine/Morphine_Romberg2004_reference/Morphine_Romberg2004_reference.svg" alt="Morphine_Romberg2004_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1, l/kg | V1 | 0.052 | l/kg |
| V2, l/kg | V2 | 0.068 | l/kg |
| V3, l/kg | V3 | 0.067 | l/kg |
| Cl1, l·min−1·kg−1 | CLm/F | 0.0019 | l·min−1·kg−1 |
| Cl2, l·min−1·kg−1 | Q | 0.0088 | l·min−1·kg−1 |
| Cl3, l·min−1·kg−1 | Q2 | 0.00096 | l·min−1·kg−1 |
| C25, nM | equation variable | 275 | nM |
| t1/2Ke0, h | t1/2z | 6.2 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 6.2, model 1.12); ka use library defaults, not estimates from this paper (+2 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (equation variable), so that value has no SI equivalent. None of the extracted parameters is morphine's own; they describe morphine-6-glucuronide. Extracted — morphine-6-glucuronide: V1 0.052 l/kg, V2 0.068 l/kg, V3 0.067 l/kg, CLm/F 0.0019 l·min−1·kg−1, Q 0.0088 l·min−1·kg−1, Q2 0.00096 l·min−1·kg−1, t1/2z 6.2 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1, l/kg | `Q63` · V1 | 0.052 | l/kg | 0.00364 | m3 | l/kg | exact (1) | Romberg_2004_table_4:row1:col1 |
| V2, l/kg | `Q64` · V2 | 0.068 | l/kg | 0.00476 | m3 | l/kg | exact (1) | Romberg_2004_table_4:row2:col1 |
| V3, l/kg | `Q77` · V3 | 0.067 | l/kg | 0.00469 | m3 | l/kg | exact (1) | Romberg_2004_table_4:row3:col1 |
| Cl1, l·min−1·kg−1 | `Q351` · CLm/F | 0.0019 | l·min−1·kg−1 | 2.217e-06 | m3/s | l/(min·kg) | exact (1) | Romberg_2004_table_4:row4:col1 |
| Cl2, l·min−1·kg−1 | `Q30` · Q | 0.0088 | l·min−1·kg−1 | 1.027e-05 | m3/s | l/(min·kg) | exact (1) | Romberg_2004_table_4:row5:col1 |
| Cl3, l·min−1·kg−1 | `Q99` · Q2 | 0.00096 | l·min−1·kg−1 | 1.12e-06 | m3/s | l/(min·kg) | exact (1) | Romberg_2004_table_4:row6:col1 |
| C25, nM | `Q900` · equation variable | 275 | nM |  |  | nM | llm (0.6) | Romberg_2004_table_4:row9:col1 |
| t1/2Ke0, h | `Q57` · t1/2z | 6.2 | h | 2.232e+04 | s | h | fuzzy_llm_dim_refused (0.92) | Romberg_2004_table_4:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped PD-category row 'Baseline, mA' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Romberg_2004_table_4:row8:col1'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['Romberg_2004_table_4:row11:col1'])
- metabolite morphine-6-glucuronide: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=morphine-6-glucuronide
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 6 linked by role

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4
- table Romberg_2004_table_4: unbound_uncertainty

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.714 (10/14 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[c25, nm].parameter_id` | Q900 | Q75 | mismatch |
| `gpt-oss-120b` | `parameters[cl1].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl3]` | 0.00096 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Romberg_2004_table_4:row5:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Romberg_2004_table_4:row4:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Romberg_2004_table_4:row10:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Romberg_2004_table_4:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Romberg_2004_table_4:row2:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Romberg_2004_table_4:row3:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Romberg_2004_table_4:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.64 L | ['Romberg_2004_table_4:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.76 L | ['Romberg_2004_table_4:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=morphine-6-glucuronide) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 3 covered |  | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  |  | no second reading of this record |
| T1_t_half_terminal | reference | fail | 6.2 | 1.123 | 0.1812 | reported 6.2 h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 21 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 21 mg.

<dbs-fmusim paramsurl="drugs/drug_morphine/Morphine_Romberg2004_reference/Morphine_Romberg2004_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_morphine/Morphine_Romberg2004_reference/Morphine_Romberg2004_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Morphine_Romberg2004_reference_params.json` · controls `Morphine_Romberg2004_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Romberg2004_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Romberg2004_reference%0APaper%3A%20Romberg_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Romberg2004_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 07:18 UTC</sub>
