<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;(S,E)-Zearalenone&quot;,&quot;href&quot;:&quot;drugs/toxin_se_zearalenone/&quot;},{&quot;label&quot;:&quot;Qin_2026 \u00b7 zol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SeZearalenone_Buranatragool2015_reference&quot;,&quot;label&quot;:&quot;Buranatragool_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_se_zearalenone/SeZearalenone_Buranatragool2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SeZearalenone_Escriv2017_reference&quot;,&quot;label&quot;:&quot;Escriv\u00e1_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_se_zearalenone/SeZearalenone_Escriv2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SeZearalenone_Guerre2015_reference&quot;,&quot;label&quot;:&quot;Guerre_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_se_zearalenone/SeZearalenone_Guerre2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SeZearalenone_Mukherjee2014_reference&quot;,&quot;label&quot;:&quot;Mukherjee_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_se_zearalenone/SeZearalenone_Mukherjee2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SeZearalenone_Qin2026_zol&quot;,&quot;label&quot;:&quot;Qin_2026_zol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_se_zearalenone/SeZearalenone_Qin2026_zol.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# (S,E)-Zearalenone — `SeZearalenone_Qin2026_zol`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 1, model 0.144); the model does not reproduce the paper's terminal half-life (paper 7.44, model 10.6).

<div class="pk-model-meta" hidden drug="(S,E)-Zearalenone" model-id="SeZearalenone_Qin2026_zol" status="needs_review" stale="false" population="male sheep" measured-compound="Zearalenone" parameterization="mechanistic" topology="retention"></div>

## Citation
Qin J, Zhang Q, Ren N, Su Z, Zheng Z, Yin T et al. Toxicokinetics, Biotransformation, Excretion, and Tissue Residue of Zearalenone-14-Glucoside in Male Sheep. Toxins 18(9) (2026).
  ·  DOI: [10.3390/toxins18090364](https://doi.org/10.3390/toxins18090364)

## Population and dosing

**Population:** male sheep · condition healthy · age group adult · n = 5.

**Dosing:** 140 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Zearalenone-14-glucoside, measured Zearalenone.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax | tmax | 1.00 | h |
| Cmax | Cmax | 42.30 | ng·mL−1 |
| AUC(0–72h) | AUC | 161.54 | ng*h/mL |
| Kel | kel | 0.06 | 1·h−1 |
| T½ | t1/2z | 10.60 | h |
| AUC%Extrap | AUC%ext | 15.02 |  |
| Vd | V | 6.4 | L/kg |
| Aflatoxin B2 tRa | tlag | 5.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 1, model 0.144); the model does not reproduce the paper's terminal half-life (paper 7.44, model 10.6).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — beta-zearalenol: tmax 1 h, Cmax 42.3 ng·mL−1; se zearalenone: AUC 162 ng*h/mL, kel 0.06 1·h−1, t1/2z 10.6 h, AUC%ext 15, V 6.4 L/kg, tlag 5 min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax | `Q56` · tmax | 1.00 | h | 3600 | s | h | exact (1) | Qin_2026_table_3:row0:col4 |
| Cmax | `Q32` · Cmax | 42.30 | ng·mL−1 | 4.23e-05 | kg/m3 | ng/ml | exact (1) | Qin_2026_table_3:row1:col4 |
| AUC(0–72h) | `Q88` · AUC | 161.54 | ng*h/mL |  |  | ng*h/mL | exact (1) | Qin_2026_table_3:row2:col4 |
| Kel | `Q47` · kel | 0.06 | 1·h−1 | 1.667e-05 | 1/s | 1/h | exact (1) | Qin_2026_table_3:row3:col4 |
| T½ | `Q57` · t1/2z | 10.60 | h | 3.816e+04 | s | h | half_life_rule (0.95) | Qin_2026_table_3:row4:col4 |
| AUC%Extrap | `Q84` · AUC%ext | 15.02 |  | 15.02 |  |  | llm_corrected (0.6) | Qin_2026_table_3:row5:col4 |
| Vd | `Q61` · V | 6.4 | L/kg | 0.448 | m3 | L | review_gapfill (0.7) | Buranatragool_2015:review |
| Aflatoxin B2 tRa | `Q83` · tlag | 5.0 | min | 300 | s | h | review_gapfill (0.7) | Braun_2020_2:review |

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
- implicit units: 'AUC(0–72h)' → ng*h/mL (from the popPK convention: 'No explicit unit is provided in the text or table footnotes for the AUC value. In population pharmacokinetics and toxico')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Zearalenone
- toxin: 4 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'α-zol' subgroup of Qin_2026 (paper reports 5 populations: z14g, zen, α-zol, β-zal, β-zol)
- row roles (LLM): model_class=noncompartmental; 15/15 row label(s) assigned, 9 linked by role; re-tagged parent→beta-zearalenol ×37, parent→Zearalenone ×17
- molar mass: no plausible PubChem entry for 'Zearalenone-14-glucoside' ('zearalenone-14-glucoside') — left in mass units
- molar mass: none found for 'Zearalenone-14-glucoside' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Buranatragool_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Braun_2020_2's review values (primary lacked it)

**Extraction notes:**
- table Qin_2026_table_3: conflicting_units
- companion parameter table 3 transcribed (27 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

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
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Buranatragool_2015:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Braun_2020_2:review'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  | ['Qin_2026_table_3:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 448 L | ['Buranatragool_2015:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Zearalenone) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 0.5 | 0.9958 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmax | reference | skipped | 154.8 | 0.9958 |  | unresolved concentration unit (exp 'ng·mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 83.56 | 0.9958 |  | unresolved concentration unit (exp 'ng·mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 42.3 | 0.9958 |  | unresolved concentration unit (exp 'ng·mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 21.71 | 0.9958 |  | unresolved concentration unit (exp 'ng·mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4.16 | 0.9958 |  | unresolved concentration unit (exp 'ng·mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20.25 | 0.9958 |  | unresolved concentration unit (exp 'ng·mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.01 | 0.9958 |  | unresolved concentration unit (exp 'ng·mL−1', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 7.44 | 10.6 | 1.425 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.94 | 10.6 | 11.28 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 2.79 | 10.6 | 3.799 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 2.63 | 10.6 | 4.03 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1443 | 0.1443 | h→SI vs simulated h |
| T1_tmax | reference | fail | 3 | 0.1443 | 0.0481 | h→SI vs simulated h |

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

<dbs-fmusim paramsurl="drugs/toxin_se_zearalenone/SeZearalenone_Qin2026_zol/SeZearalenone_Qin2026_zol_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_se_zearalenone/SeZearalenone_Qin2026_zol/SeZearalenone_Qin2026_zol_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `SeZearalenone_Qin2026_zol_params.json` · controls `SeZearalenone_Qin2026_zol_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bse_zearalenone%5D%20SeZearalenone_Qin2026_zol&body=Drug%3A%20se_zearalenone%0ARecord%3A%20SeZearalenone_Qin2026_zol%0APaper%3A%20Qin_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_se_zearalenone/SeZearalenone_Qin2026_zol%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:01 UTC</sub>
