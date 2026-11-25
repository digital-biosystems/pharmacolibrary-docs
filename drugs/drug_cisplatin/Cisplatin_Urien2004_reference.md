<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;cisplatin&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/&quot;},{&quot;label&quot;:&quot;Urien_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisplatin_MoritaOgawa2020_reference&quot;,&quot;label&quot;:&quot;Morita-Ogawa_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_MoritaOgawa2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Terranova2021_reference&quot;,&quot;label&quot;:&quot;Terranova_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_Terranova2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Mody_2022_R&quot;,&quot;label&quot;:&quot;Mody_2022 \u00b7 R&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/pd_Mody_2022_R.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cisplatin — `Cisplatin_Urien2004_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="cisplatin" model-id="Cisplatin_Urien2004_reference" status="not_simulated" stale="false" population="adult cancer patients" measured-compound="cisplatin" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Urien S, Lokiec F. Population pharmacokinetics of total and unbound plasma cisplatin in adult patients. British journal of clinical pharmacology 57(6):756–763 (2004).
  ·  DOI: [10.1111/j.1365-2125.2004.02082.x](https://doi.org/10.1111/j.1365-2125.2004.02082.x)

## Population and dosing

**Population:** adult cancer patients · condition malignancy · age group adult.

**Dosing:** 15, 80 mg, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V 1 (l) | V1 | 23.4 | l |
| CL (l h -1 ) | CL | 0.68 | l h -1 |
| V 2 (l) | V2 | 12.0 | l |
| T 1/2 , distribution (h) | t1/2α | 0.34 | h |
| T 1/2 , elimination (h) | t1/2z | 1.32 | h |
| CL, q BSA | CLnorm | +0.83 | L/h |
| Q (l h -1 ) | Q | 8.64 | l h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158), qwen3.8-27b (not confirmed, agreement 0.04). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; t3_param_coverage (+1 more).**

Extracted — cisplatin: V1 23.4 l, CL 0.68 l h -1, V2 12 l, t1/2α 0.34 h, t1/2z 1.32 h, CLnorm 0.83 L/h, Q 8.64 l h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has cisplatin → protein-bound platinum (interconversion), the second reading none; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V 1 (l) | `Q63` · V1 | 23.4 | l | 0.0234 | m3 | l | exact (1) | Urien_2004_table_2:row3:col1, Urien_2004_table_3:row3:col1 |
| CL (l h -1 ) | `Q22` · CL | 0.68 | l h -1 | 1.889e-07 | m3/s | l/h | exact (1) | Urien_2004_table_2:row5:col1 |
| V 2 (l) | `Q64` · V2 | 12.0 | l | 0.012 | m3 | l | exact (1) | Urien_2004_table_2:row7:col1, Urien_2004_table_3:row9:col1 |
| T 1/2 , distribution (h) | `Q59` · t1/2α | 0.34 | h | 1224 | s | h | half_life_rule (0.95) | Urien_2004_table_2:row15:col1, Urien_2004_table_3:row15:col1 |
| T 1/2 , elimination (h) | `Q57` · t1/2z | 1.32 | h | 4752 | s | h | half_life_rule (0.95) | Urien_2004_table_2:row16:col1, Urien_2004_table_3:row16:col1 |
| CL, q BSA | `Q354` · CLnorm | +0.83 | L/h | 2.306e-07 | m3/s | L/h | llm_corrected (0.6) | Urien_2004_table_3:row6:col1 |
| Q (l h -1 ) | `Q30` · Q | 8.64 | l h -1 | 2.4e-06 | m3/s | l/h | exact (1) | Urien_2004_table_3:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'covariate(s)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'None' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_1:row2:col2', 'Urien_2004_table_1:row6:col2', 'Urien_2004_table_1:row9:col2', 'Urien_2004_table_1:row14:col2'])
- dropped unlinked row (NIL): 'Gender' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_1:row3:col2'])
- dropped unlinked row (NIL): 'Gender †' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_1:row7:col2', 'Urien_2004_table_1:row10:col2'])
- dropped 'CLCr' → Q24 = -15: a clearance of -15 is not a parameter value (source ['Urien_2004_table_1:row12:col2'])
- dropped unlinked row (NIL): 'Serum proteins -11' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_1:row15:col2'])
- dropped unlinked row (NIL): 'Dose m -2  ‡' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_1:row16:col2'])
- dropped duplicate Q63 ('V 1 , q BSA', value '+1.60') — already have one for this compound
- dropped unlinked row (NIL): 'ISV(V 1 ) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_2:row10:col1', 'Urien_2004_table_3:row12:col1'])
- dropped unlinked row (NIL): 'ISV(CL) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_2:row11:col1', 'Urien_2004_table_3:row13:col1'])
- dropped unlinked row (NIL): 'ISV(Q) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_2:row12:col1'])
- dropped unlinked row (NIL): 'ISV(V 2 ) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_2:row13:col1'])
- dropped duplicate Q22 ('CL, q CLCr', value '+0.36') — already have one for this compound
- routed 'Res. Error (mg l -1 )' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- implicit units: 'CL, q BSA' → L/h (from the paper text: 'The paper explicitly states in the Results section: "The mean population estimates for total and unbound drug were, resp')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cisplatin
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 6 linked by role; re-tagged protein-bound platinum→parent ×21
- molar mass: no plausible PubChem entry for 'protein-bound platinum' ('protein-bound platinum') — left in mass units
- molar mass: none found for 'protein-bound platinum' — its concentrations stay mass-only

**Extraction notes:**
- table Urien_2004_table_1: ragged_grid
- table Urien_2004_table_1: unparsed_numeric_cell
- table Urien_2004_table_2: unknown_column_role
- table Urien_2004_table_2: ragged_grid
- table Urien_2004_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (30 record(s))
- table Urien_2004_table_3: unknown_column_role
- table Urien_2004_table_3: ragged_grid
- table Urien_2004_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |
| `qwen3.8-27b` | not confirmed | 0.04 (1/25 fields) | 24 |

<details><summary>40 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cisplatin', 'protein-bound platinum', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl m0 /v m]` |  | 0.014 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl, q bsa]` | +0.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl, q bsa]` |  | +0.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.68 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f m /v m]` |  | 0.017 | only_one_extracted |
| `gpt-oss-120b` | `parameters[none]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 8.64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 8.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 , distribution]` | 0.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 , distribution]` |  | 0.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 , elimination]` | 1.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1]` | 23.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1]` |  | 23.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2]` | 12.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2]` |  | 12.0 | only_one_extracted |
| `qwen3.8-27b` | `model.links` | [['cisplatin (unbound platinum)', 'irreversibly protein-bound platinum', 'metabolism']] | [['cisplatin', 'protein-bound platinum', 'interconversion']] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[cl m0 /v m]` | 0.014 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl m0 /v m]` |  | 0.014 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl, q bsa]` | +0.83 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` |  | 0.68 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 35.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q clcr]` | -0.36 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q clcr]` |  | -0.36 | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q dosem]` | -2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q dosem]` |  | -2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m]` | 0.017 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m]` |  | 0.017 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` |  | 22.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` | 8.64 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , distribution]` |  | 0.45 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , distribution]` | 0.34 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , elimination]` | 50 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , elimination]` |  | 50 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 1]` |  | 21.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 1]` | 23.4 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 2]` |  | 42.6 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 2]` | 12.0 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | unbound platinum (cisplatin) | unbound cisplatin | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Urien_2004_table_2:row5:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Urien_2004_table_3:row8:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Urien_2004_table_3:row6:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Urien_2004_table_2:row16:col1', 'Urien_2004_table_3:row16:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['Urien_2004_table_2:row15:col1', 'Urien_2004_table_3:row15:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Urien_2004_table_2:row3:col1', 'Urien_2004_table_3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Urien_2004_table_2:row7:col1', 'Urien_2004_table_3:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.68 | ['Urien_2004_table_2:row5:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.68 L/h | ['Urien_2004_table_2:row5:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 23.4 L | ['Urien_2004_table_2:row3:col1', 'Urien_2004_table_3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12 L | ['Urien_2004_table_2:row7:col1', 'Urien_2004_table_3:row9:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_param_coverage | fail | 4 scholar param(s) emitted or defaulted | 2 covered |  | neither emitted nor in defaulted[]: ['V1', 'V2'] |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.158 (3 of 19 compared fields agree, 15 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.158 | cross-check contradicted by a second reader: verdict disputed; agreement 0.158 (3 of 19 compared fields agree, 15 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cisplatin/Cisplatin_Urien2004_reference/Cisplatin_Urien2004_reference_modelica.zip" download>Cisplatin_Urien2004_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cisplatin/Cisplatin_Urien2004_reference/Cisplatin_Urien2004_reference_matlab.zip" download>Cisplatin_Urien2004_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cisplatin/Cisplatin_Urien2004_reference/Cisplatin_Urien2004_reference_matlab_simbio.zip" download>Cisplatin_Urien2004_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cisplatin/Cisplatin_Urien2004_reference/Cisplatin_Urien2004_reference_sbml.zip" download>Cisplatin_Urien2004_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cisplatin/Cisplatin_Urien2004_reference/Cisplatin_Urien2004_reference_cellml.zip" download>Cisplatin_Urien2004_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Urien S, Lokiec F. Population pharmacokinetics of total and unbound plasma cisplatin in adult patients. British journal of clinical pharmacology 57(6):756–763 (2004). [doi:10.1111/j.1365-2125.2004.02082.x](https://doi.org/10.1111/j.1365-2125.2004.02082.x)

**This record:** Pharmacolibrary, model `Cisplatin_Urien2004_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_cisplatin/Cisplatin_Urien2004_reference>

```bibtex
@misc{pharmacolibrary_CisplatinUrien2004reference,
  title  = {{Pharmacolibrary model Cisplatin_Urien2004_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cisplatin/Cisplatin_Urien2004_reference},
  note   = {Parameters from doi:10.1111/j.1365-2125.2004.02082.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcisplatin%5D%20Cisplatin_Urien2004_reference&body=Drug%3A%20cisplatin%0ARecord%3A%20Cisplatin_Urien2004_reference%0APaper%3A%20Urien_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cisplatin/Cisplatin_Urien2004_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:11 UTC</sub>
