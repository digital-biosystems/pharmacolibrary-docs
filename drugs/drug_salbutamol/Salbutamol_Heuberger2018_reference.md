<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Heuberger_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Courlet2022_reference&quot;,&quot;label&quot;:&quot;Courlet_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Courlet2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_estimate&quot;,&quot;label&quot;:&quot;Marques_2024_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Walsh2023_reference&quot;,&quot;label&quot;:&quot;Walsh_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Heuberger2018_reference&quot;,&quot;label&quot;:&quot;Heuberger_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Heuberger2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Boger_2019_FEV1&quot;,&quot;label&quot;:&quot;Boger_2019 \u00b7 FEV1&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Boger_2019_FEV1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Venkatasubramanian_2020_TPR&quot;,&quot;label&quot;:&quot;Venkatasubramanian_2020 \u00b7 TPR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Venkatasubramanian_2020_TPR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Heuberger2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Salbutamol's gut bioavailability and lag time used library defaults, and the cardiac output parameter was misclassified as intercompartmental clearance.

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Heuberger2018_reference" status="rejected" stale="false" population="virtual adult subjects (extrapolated from dog model, validated in humans)" measured-compound="salbutamol" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Heuberger JAAC, van Dijkman SC, Cohen AF. Futility of current urine salbutamol doping control. British journal of clinical pharmacology 84(8):1830-1838 (2018).
  ·  DOI: [10.1111/bcp.13619](https://doi.org/10.1111/bcp.13619)

## Population and dosing

**Population:** virtual adult subjects (extrapolated from dog model, validated in humans) · condition healthy · age group adult.

**Dosing:** 8, 800 mg, oral and inhaled, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_salbutamol/Salbutamol_Heuberger2018_reference/Salbutamol_Heuberger2018_reference.svg" alt="Salbutamol_Heuberger2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cardiac output (×weight 0.79 ) (l min −1 ) | Q | 0.166 | l min −1 |
| Bio‐availability Gut (%) | FG | 80 | % |
| Absorption lag gut (h) | tlag | 1.5 | h |
| Renal clearance salbutamol (l h −1 ) | CL | 17.5 | l h −1 |
| Renal clearance S‐SAL (l h −1 ) | CL | 5.91 | l h −1 |
| Cardiac output (*weight0.79) (L/min) | Qb | 0.166 | L/min |
| Absorption constant gut (h-1) | kabs | 0.5 | h-1 |
| Renal clearance salbutamol (L/h) | CLR | 17.5 | L/h |
| Central volume salbutamol (L/kg) | V1 | 1.4 | L/kg |
| Peripheral volume salbutamol (L/kg) | V2 | 4.8 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Salbutamol's gut bioavailability and lag time used library defaults, and the cardiac output parameter was misclassified as intercompartmental clearance.**

The record contains no extracted value for overall oral bioavailability or absorption lag, so library placeholders were used instead of paper-specific estimates. Additionally, the parameter labeled as cardiac output was interpreted as intercompartmental clearance, contradicting the paper's definition of cardiac output. This mismatch indicates a failure in correctly mapping the physiological parameters to their intended pharmacokinetic roles. Extracted — salbutamol: Q 0.166 l min −1, FG 80 %, tlag 1.5 h, CL 17.5 l h −1, Qb 0.166 L/min, kabs 0.5 h-1, CLR 17.5 L/h, V1 1.4 L/kg, … (+1); sulphated salbutamol: CL 5.91 l h −1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cardiac output (*weight0.79): this record has 0.166, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cardiac output (×weight 0.79 ) (l min −1 ) | `Q30` · Q | 0.166 | l min −1 | 2.767e-06 | m3/s | l/min | llm (0.6) | bcp13619-tbl-0001:row1:col1 |
| Bio‐availability Gut (%) | `Q41` · FG | 80 | % | 0.8 |  | % | llm (0.6) | bcp13619-tbl-0001:row3:col1 |
| Absorption lag gut (h) | `Q83` · tlag | 1.5 | h | 5400 | s | h | llm_confirmed (0.6) | bcp13619-tbl-0001:row5:col1, Heuberger_2018_table_S1:row4:col1 |
| Renal clearance salbutamol (l h −1 ) | `Q22` · CL | 17.5 | l h −1 | 4.861e-06 | m3/s | l/h | exact (1) | bcp13619-tbl-0001:row6:col1 |
| Renal clearance S‐SAL (l h −1 ) | `Q22` · CL | 5.91 | l h −1 | 1.642e-06 | m3/s | l/h | exact (1) | bcp13619-tbl-0001:row7:col1 |
| Cardiac output (*weight0.79) (L/min) | `Q54` · Qb | 0.166 | L/min | 2.767e-06 | m3/s | l/min | llm (0.6) | Heuberger_2018_table_S1:row0:col1 |
| Absorption constant gut (h-1) | `Q49` · kabs | 0.5 | h-1 | 0.0001389 | 1/s | 1/h | exact (1) | Heuberger_2018_table_S1:row3:col1, Heuberger_2018_table_S1:row3:col2 |
| Renal clearance salbutamol (L/h) | `Q26` · CLR | 17.5 | L/h | 4.861e-06 | m3/s | l/h | llm_confirmed (0.6) | Heuberger_2018_table_S1:row5:col1 |
| Central volume salbutamol (L/kg) | `Q63` · V1 | 1.4 | L/kg | 0.098 | m3 | l/kg | llm_confirmed (0.6) | Heuberger_2018_table_S1:row7:col1, Heuberger_2018_table_S1:row7:col2 |
| Peripheral volume salbutamol (L/kg) | `Q64` · V2 | 4.8 | L/kg | 0.336 | m3 | l/kg | llm_confirmed (0.6) | Heuberger_2018_table_S1:row8:col1, Heuberger_2018_table_S1:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Haematocrit' — extend the ontology if this is a real PK parameter (source ['bcp13619-tbl-0001:row2:col1', 'Heuberger_2018_table_S1:row1:col1'])
- dropped duplicate Q41 ('Bio-availability Gut (%)', value '80') — already have one for this compound
- dropped duplicate Q22 ('Renal clearance S-SAL (L/h)', value '5.91') — already have one for this compound
- dropped duplicate Q30 ('Intercompartmental clearance (L/h)', value '1.4') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Cardiac output (×weight 0.79 ) (l min −1 )); Q22 (Renal clearance salbutamol (l h −1 )); Q22 (Renal clearance S‐SAL (l h −1 )); Q63 (Central volume salbutamol (L/kg)); Q64 (Peripheral volume salbutamol (L/kg))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 14 linked by role; re-tagged parent→sulphated salbutamol ×4
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- table bcp13619-tbl-0001: conflicting_units
- table bcp13619-tbl-0001: unbound_uncertainty
- table bcp13619-tbl-0001: unparsed_numeric_cell
- companion parameter table S1 transcribed (16 record(s))
- LLM selected parameter table(s) S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cardiac output (*weight0.79)]` | 0.166 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cardiac output (×weight 0.79 )]` | 0.166 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` |  | 1.4 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp13619-tbl-0001:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp13619-tbl-0001:row7:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Heuberger_2018_table_S1:row5:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp13619-tbl-0001:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Heuberger_2018_table_S1:row3:col1', 'Heuberger_2018_table_S1:row3:col2'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['Heuberger_2018_table_S1:row0:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Heuberger_2018_table_S1:row7:col1', 'Heuberger_2018_table_S1:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Heuberger_2018_table_S1:row8:col1', 'Heuberger_2018_table_S1:row8:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['bcp13619-tbl-0001:row5:col1', 'Heuberger_2018_table_S1:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.5 | ['bcp13619-tbl-0001:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.5 L/h | ['bcp13619-tbl-0001:row6:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.91 L/h | ['bcp13619-tbl-0001:row7:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 98 L | ['Heuberger_2018_table_S1:row7:col1', 'Heuberger_2018_table_S1:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 336 L | ['Heuberger_2018_table_S1:row8:col1', 'Heuberger_2018_table_S1:row8:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | fail | Metabolite_C (measured=salbutamol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 7 scholar param(s) emitted or defaulted | 6 covered |  | neither emitted nor in defaulted[]: ['V2'] |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_shared_parameters |  | pass | 1 shared param(s) bound once | bound once |  | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | pass |  | verdict partial, agreement 0.786, 0 of 1 reader(s) agree | 0.786 | a second reader did not contradict the extraction |
| T1_cmax | reference | skipped |  | 4.146e-05 |  | non-numeric value |
| T1_cmax | reference | skipped | 100 | 4.146e-05 |  | unresolved concentration unit (exp 'ng ml⁻¹', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 8 mg, single dose, first-order absorption (ka 0.5 /h, F 0.9). Doses in the paper: 8, 800 mg.

<dbs-fmusim paramsurl="drugs/drug_salbutamol/Salbutamol_Heuberger2018_reference/Salbutamol_Heuberger2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_salbutamol/Salbutamol_Heuberger2018_reference/Salbutamol_Heuberger2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Salbutamol_Heuberger2018_reference_params.json` · controls `Salbutamol_Heuberger2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalbutamol%5D%20Salbutamol_Heuberger2018_reference&body=Drug%3A%20salbutamol%0ARecord%3A%20Salbutamol_Heuberger2018_reference%0APaper%3A%20Heuberger_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salbutamol/Salbutamol_Heuberger2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 03:24 UTC</sub>
