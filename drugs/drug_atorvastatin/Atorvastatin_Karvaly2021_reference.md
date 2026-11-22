<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;atorvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/&quot;},{&quot;label&quot;:&quot;Karvaly_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atorvastatin_Karvaly2021_reference&quot;,&quot;label&quot;:&quot;Karvaly_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Atorvastatin_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Courlet2020_reference&quot;,&quot;label&quot;:&quot;Courlet_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vargo_2014_LDL_C&quot;,&quot;label&quot;:&quot;Vargo_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/pd_Vargo_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atorvastatin — `Atorvastatin_Karvaly2021_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="atorvastatin" model-id="Atorvastatin_Karvaly2021_reference" status="curated_candidate" stale="false" population="patients with hyperlipidemia" measured-compound="atorvastatin+atorvastatin lactone" parameterization="apparent" topology="1C"></div>

## Citation
Karvaly GB, Karádi I, Vincze I, Neely MN, Trojnár E, Prohászka Z et al. A pharmacokinetics-based approach to the monitoring of patient adherence to atorvastatin therapy. Pharmacology research & perspectives 9(5):e00856 (2021).
  ·  DOI: [10.1002/prp2.856](https://doi.org/10.1002/prp2.856)

## Population and dosing

**Population:** patients with hyperlipidemia · condition hyperlipidemia · age group adult · n = 39.

**Dosing:** 20, 40 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed atorvastatin, measured atorvastatin+atorvastatin lactone.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference/Atorvastatin_Karvaly2021_reference.svg" alt="Atorvastatin_Karvaly2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Median Ka (range, 1/h) | kabs | 1.74 | 1/h |
| Median Ke (range, 1/h) | kel | 0.135 | 1/h |
| Median V/F (range, L) | V/F | 358 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

None of the extracted parameters is atorvastatin's own; they describe atorvastatin+atorvastatin lactone.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has atorvastatin+atorvastatin lactone, the second reading atorvastatin; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Median Ka (range, 1/h) | `Q49` · kabs | 1.74 | 1/h | 0.0004833 | 1/s | 1/h | boundary_llm_dim_refused (0.8) | prp2856-tbl-0002:row4:col1, prp2856-tbl-0002:row4:col2 |
| Median Ke (range, 1/h) | `Q47` · kel | 0.135 | 1/h | 3.75e-05 | 1/s | 1/h | llm_confirmed (0.6) | prp2856-tbl-0002:row5:col1, prp2856-tbl-0002:row5:col2 |
| Median V/F (range, L) | `Q76` · V/F | 358 | L | 0.358 | m3 | l | llm_confirmed (0.6) | prp2856-tbl-0002:row6:col1, prp2856-tbl-0002:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'Slope of the regression line of predicted versus observed concentrations (95% confidence interval)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['prp2856-tbl-0002:row1:col1', 'prp2856-tbl-0002:row1:col2'])
- dropped unlinked row (NIL): 'Intercept of the regression line of predicted versus observed concentrations (95% confidence interval)' — extend the ontology if this is a real PK parameter (source ['prp2856-tbl-0002:row2:col1', 'prp2856-tbl-0002:row2:col2'])
- routed 'Random effects' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Fixed effect' — extend the ontology if this is a real PK parameter (source ['Karvaly_2021_table_S3:row4:col2'])
- dropped unlinked row (NIL): 'Mean weighted prediction error(p-value of difference from 0)' — extend the ontology if this is a real PK parameter (source ['Karvaly_2021_table_S3:row6:col1', 'Karvaly_2021_table_S3:row6:col2'])
- dropped unlinked row (NIL): 'Bias-adjusted mean weighted squared prediction error' — extend the ontology if this is a real PK parameter (source ['Karvaly_2021_table_S3:row7:col1', 'Karvaly_2021_table_S3:row7:col2'])
- dropped unlinked row (NIL): 'Mean weighted squared prediction error' — extend the ontology if this is a real PK parameter (source ['Karvaly_2021_table_S3:row8:col1', 'Karvaly_2021_table_S3:row8:col2'])
- dropped unlinked row (NIL): 'Number of support points' — extend the ontology if this is a real PK parameter (source ['Karvaly_2021_table_S3:row11:col1', 'Karvaly_2021_table_S3:row11:col2'])
- routed '-2 x log-likelihood' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Akaike information criterion' — extend the ontology if this is a real PK parameter (source ['Karvaly_2021_table_S3:row18:col1', 'Karvaly_2021_table_S3:row18:col2'])
- dropped unlinked row (NIL): 'Bayesian information criterion' — extend the ontology if this is a real PK parameter (source ['Karvaly_2021_table_S3:row19:col1', 'Karvaly_2021_table_S3:row19:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atorvastatin+atorvastatin lactone
- molar mass: no plausible PubChem entry for 'atorvastatin+atorvastatin lactone' ('no full name in the paper') — left in mass units
- molar mass: none found for 'atorvastatin+atorvastatin lactone' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- derived CL/F=48.33 L/h from Ke × V/F = CL/F (Q47 × Q76); not separately reported

**Extraction notes:**
- table prp2856-tbl-0002: units_need_context
- table Karvaly_2021_table_S3: unbound_uncertainty
- table Karvaly_2021_table_S3: unknown_column_role
- table Karvaly_2021_table_S3: missing_label
- table Karvaly_2021_table_S3: units_need_context
- table Karvaly_2021_table_S3: ragged_grid
- companion parameter table S3 transcribed (31 record(s), model stage 'final')
- LLM selected parameter table(s) S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[estimated median v/f of atr+atrl]` |  | 376 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[median ka]` | 1.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[median ke]` | 0.135 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[median v/f]` | 358 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | atorvastatin+atorvastatin lactone | atorvastatin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['prp2856-tbl-0002:row5:col1', 'prp2856-tbl-0002:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['prp2856-tbl-0002:row4:col1', 'prp2856-tbl-0002:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['prp2856-tbl-0002:row6:col1', 'prp2856-tbl-0002:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 358 L | ['prp2856-tbl-0002:row6:col1', 'prp2856-tbl-0002:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=atorvastatin+atorvastatin lactone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  |  | no second reading of this record |
| T1_t_half_terminal | reference | pass | 5.1 | 5.135 | 1.007 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 6.3 | 5.135 | 0.8151 | h→SI vs simulated h |

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

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 1.74 /h, F 1). Doses in the paper: 20, 40 mg.

<dbs-fmusim paramsurl="drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference/Atorvastatin_Karvaly2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference/Atorvastatin_Karvaly2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Atorvastatin_Karvaly2021_reference_params.json` · controls `Atorvastatin_Karvaly2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batorvastatin%5D%20Atorvastatin_Karvaly2021_reference&body=Drug%3A%20atorvastatin%0ARecord%3A%20Atorvastatin_Karvaly2021_reference%0APaper%3A%20Karvaly_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 08:56 UTC</sub>
