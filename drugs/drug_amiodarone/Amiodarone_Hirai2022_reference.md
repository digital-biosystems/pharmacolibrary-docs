<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;amiodarone&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/&quot;},{&quot;label&quot;:&quot;Hirai_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amiodarone_Lesko1989_reference&quot;,&quot;label&quot;:&quot;Lesko_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Lesko1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Gaete1995_reference&quot;,&quot;label&quot;:&quot;Gaete_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Gaete1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Hirai2022_reference&quot;,&quot;label&quot;:&quot;Hirai_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Hirai2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amiodarone_Kolowrat2025_reference&quot;,&quot;label&quot;:&quot;Kolowrat_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Kolowrat2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Morath2025_reference&quot;,&quot;label&quot;:&quot;Morath_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Morath2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_amitarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_amitarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_desethylamiodarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_desethylamiodarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_desethylamiodarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amiodarone — `Amiodarone_Hirai2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Amiodarone's bioavailability, volume of distribution, and absorption lag time lacked extracted values, causing the model to rely on library placeholders and be quarantined.

<div class="pk-model-meta" hidden drug="amiodarone" model-id="Amiodarone_Hirai2022_reference" status="model_quarantined" stale="false" population="adult patients" measured-compound="amiodarone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Hirai T, Kasai H, Takahashi M, Uchida S, Akai N, Hanada K et al. Population Pharmacokinetic Model of Amiodarone and N-Desethylamiodarone Focusing on Glucocorticoid and Inflammation. Biological & pharmaceutical bulletin 45(7):948–954 (2022).
  ·  DOI: [10.1248/bpb.b21-00940](https://doi.org/10.1248/bpb.b21-00940)

## Population and dosing

**Population:** adult patients · condition cardiac arrhythmia (implied by amiodarone treatment) · age group adult · n = 81.

**Dosing:** 200 mg, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference.svg" alt="Amiodarone_Hirai2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL AMD , L/h | CL | 7.9 | L/h | 10.9 | 43.3 (23.3% RSE) |
| Vd AMD , L/kg (fixed) | Vnorm | 14.0 | L/kg |  |  |
| F oral , % (fixed) | Fab | 54.0 | fixed |  |  |
| k a , /h (fixed) | kabs | 1.0 | 1/h |  |  |
| Vd DEA , L/kg (fixed) | V | 14.0 | L/kg |  |  |
| Mean trough AMD µg/mL | Ctrough | 1.08 | µg/mL |  |  |
| Mean trough DEA µg/mL | Ctrough | 0.90 | µg/mL |  |  |
| Measurement points a) | equation variable | 34 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Amiodarone's bioavailability, volume of distribution, and absorption lag time lacked extracted values, causing the model to rely on library placeholders and be quarantined.**

The record failed topology checks by assigning a single-compartment structure to a parent-metabolite system and misidentifying the output compartment. A second reader disagreed on the parameterization type and flagged missing values for daily dose, trough concentrations, and metabolite clearance. The model builder explicitly noted that bioavailability, volume of distribution, and lag time were set to defaults rather than using estimated parameters. Extracted — amiodarone: CL 7.9 L/h, Vnorm 14 L/kg, Fab 54 fixed, kabs 1 1/h, Ctrough 1.08 µg/mL; N-desethylamiodarone: V 14 L/kg, Ctrough 0.9 µg/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amiodarone, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL AMD , L/h | `Q22` · CL | 7.9 | L/h | 2.194e-06 | m3/s | l/h | 10.9 | llm_confirmed (0.6) | tab_0:row4:col1 | 43.3 (23.3% RSE) |
| Vd AMD , L/kg (fixed) | `Q352` · Vnorm | 14.0 | L/kg | 0.98 | m3 | L |  | llm_corrected (0.6) | tab_0:row5:col1 |  |
| F oral , % (fixed) | `Q40` · Fab | 54.0 | fixed |  |  | fixed |  | llm (0.6) | tab_0:row6:col1 |  |
| k a , /h (fixed) | `Q49` · kabs | 1.0 | 1/h | 0.0002778 | 1/s | 1/h |  | space_fold (0.95) | tab_0:row7:col1 |  |
| Vd DEA , L/kg (fixed) | `Q61` · V | 14.0 | L/kg | 0.98 | m3 | L |  | exact (1) | tab_0:row15:col1 |  |
| Mean trough AMD µg/mL | `Q37` · Ctrough | 1.08 | µg/mL |  |  | µg/mL |  | llm_confirmed (0.6) | Hirai_2022_table_2:row0:col8, Hirai_2022_table_2:row1:col8, Hirai_2022_table_2:row2:col8 |  |
| Mean trough DEA µg/mL | `Q37` · Ctrough | 0.90 | µg/mL |  |  | µg/mL |  | llm_confirmed (0.6) | Hirai_2022_table_2:row0:col9, Hirai_2022_table_2:row1:col9, Hirai_2022_table_2:row2:col9 |  |
| Measurement points a) | `Q900` · equation variable | 34 |  |  |  |  |  | llm (0.6) | Hirai_2022_table_2:row0:col10, Hirai_2022_table_2:row1:col10, Hirai_2022_table_2:row2:col10 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 5 row(s) → N-desethylamiodarone (abbreviation 5)
- table section iiv: 'ωCL AMD , %' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωCL DEA , %' routed out of structural estimates ('Interindividual variability')
- table representations disagree for 'CL AMD , L/h'; source reconciliation required
- table representations disagree for 'Vd AMD , L/kg (fixed)'; source reconciliation required
- table representations disagree for 'F oral , % (fixed)'; source reconciliation required
- table representations disagree for 'k a , /h (fixed)'; source reconciliation required
- table representations disagree for 'σ, %'; source reconciliation required
- table representations disagree for 'Vd DEA , L/kg (fixed)'; source reconciliation required
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'fixed' (Vnorm)
- unit_dimension_unknown: 'fixed' (Fab)
- unit_dimension_unknown: 'fixed' (kabs)
- unit_dimension_unknown: 'fixed' (V1)
- dropped unlinked row (NIL): 'Age year' — extend the ontology if this is a real PK parameter (source ['Hirai_2022_table_2:row0:col2', 'Hirai_2022_table_2:row1:col2', 'Hirai_2022_table_2:row2:col2'])
- dropped unlinked row (NIL): 'BW kg' — extend the ontology if this is a real PK parameter (source ['Hirai_2022_table_2:row0:col3', 'Hirai_2022_table_2:row1:col3', 'Hirai_2022_table_2:row2:col3'])
- dropped unlinked row (NIL): 'BMI kg/m 2' — extend the ontology if this is a real PK parameter (source ['Hirai_2022_table_2:row0:col4', 'Hirai_2022_table_2:row1:col4', 'Hirai_2022_table_2:row2:col4'])
- dropped unlinked row (NIL): 'Daily dose mg' — extend the ontology if this is a real PK parameter (source ['Hirai_2022_table_2:row0:col5', 'Hirai_2022_table_2:row1:col5', 'Hirai_2022_table_2:row2:col5'])
- dropped unlinked row (NIL): 'Treatment duration day' — extend the ontology if this is a real PK parameter (source ['Hirai_2022_table_2:row0:col6', 'Hirai_2022_table_2:row1:col6', 'Hirai_2022_table_2:row2:col6'])
- dropped unlinked row (NIL): 'CRP mg/dL' — extend the ontology if this is a real PK parameter (source ['Hirai_2022_table_2:row0:col7', 'Hirai_2022_table_2:row1:col7', 'Hirai_2022_table_2:row2:col7'])
- dropped duplicate Q22 ('CL AMD', value 7.9) — already have one for this compound
- NIL: refused to back-fill base 'V' from footnote/prose loose number 14.0 (source ['fig_0:caption']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 10.3 (source ['fig_0:caption']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number 14.0 (source ['fig_0:caption']); the table cell was unparseable — needs review
- implicit units: 'Vd AMD , L/kg (fixed)' → L/kg (from the paper text: "The figure caption and text state the model equation 'Vd _AMD = 14.0 × Body weight'. Since Vd is Volume of Distribution,")
- implicit units: 'k a , /h (fixed)' → 1/h (from the paper text: "The parameter list header explicitly labels it 'k a , /h (fixed) = 1.0'. The text also identifies k_a as the 'absorption")
- implicit units: 'Vd DEA , L/kg (fixed)' → L/kg (from the paper text: "The text states the model equation 'Vd DEA = 14.0 × Body weight'. This indicates Vd is normalized by body weight, implyi")
- implicit units: 'Mean trough AMD µg/mL' → µg/mL (from the paper text: "The abstract states 'The median trough concentrations were 0.49 [0.31-0.81] µg/mL for AMD'. The parameter list header ex")
- implicit units: 'Mean trough DEA µg/mL' → µg/mL (from the paper text: "The abstract states 'and 0.43 [0.28-0.71] µg/mL for DEA'. The parameter list header explicitly labels it 'Mean trough DE")
- metabolite volume: 'Vd DEA , L/kg (fixed)' Q63→Q61 for N-desethylamiodarone — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amiodarone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 8 linked by role; re-tagged parent→N-desethylamiodarone ×5, amiodarone→parent ×2, amiodarone→N-desethylamiodarone ×2
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_0: unbound_uncertainty
- table tab_0: unparsed_numeric_cell
- table tab_0: representations disagree; selected evidence retained, not merged
- table Hirai_2022_table_2: units_need_context
- transposed table Hirai_2022_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (27 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['amiodarone', 'n-desethylamiodarone', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl dea /f m , l/h glucocorticoids on cl dea /f m]` |  | 10.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl dea /f m , l/h glucocorticoids on cl dea /f m]` | 10.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[daily dose mg]` |  | 200 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean trough amd ug/ml]` |  | 1.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd dea]` | 14.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amiodarone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amiodarone | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row4:col1'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['tab_0:row5:col1'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Hirai_2022_table_2:row0:col8', 'Hirai_2022_table_2:row1:col8', 'Hirai_2022_table_2:row2:col8'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Hirai_2022_table_2:row0:col9', 'Hirai_2022_table_2:row1:col9', 'Hirai_2022_table_2:row2:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_0:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row15:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.9 | ['tab_0:row4:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.9 L/h | ['tab_0:row4:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 980 L | ['tab_0:row15:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=amiodarone) | C_central | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_shared_parameters | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_fmi.zip" download>Amiodarone_Hirai2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_matlab.zip" download>Amiodarone_Hirai2022_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_matlab_simbio.zip" download>Amiodarone_Hirai2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_sbml.zip" download>Amiodarone_Hirai2022_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_cellml.zip" download>Amiodarone_Hirai2022_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0002 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 2.861e-06 | m3/s |
| input | model | `MW` | 0.6453 |  |
| input | model | `MW_m1` | 0.6173 |  |
| input | model | `Vd1` | 0.98 |  |
| input | model | `Vd1m1` | 0.98 | m3 |
| input | model | `ka` | 0.0002778 | 1/s |
| input | model | `q1_m11` | 2.194e-06 | m3/s |
| output | concentration | `C_central` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Hirai T, Kasai H, Takahashi M, Uchida S, Akai N, Hanada K et al. Population Pharmacokinetic Model of Amiodarone and N-Desethylamiodarone Focusing on Glucocorticoid and Inflammation. Biological & pharmaceutical bulletin 45(7):948–954 (2022). [doi:10.1248/bpb.b21-00940](https://doi.org/10.1248/bpb.b21-00940)

**This record:** Pharmacolibrary v26.09, model `Amiodarone_Hirai2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amiodarone/Amiodarone_Hirai2022_reference>

```bibtex
@misc{pharmacolibrary_AmiodaroneHirai2022reference,
  title  = {{Pharmacolibrary model Amiodarone_Hirai2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amiodarone/Amiodarone_Hirai2022_reference},
  note   = {Parameters from doi:10.1248/bpb.b21-00940},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 1 /h, F 1). Dose in the paper: 200 mg.

<dbs-fmusim paramsurl="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Amiodarone_Hirai2022_reference_params.json` · controls `Amiodarone_Hirai2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamiodarone%5D%20Amiodarone_Hirai2022_reference&body=Drug%3A%20amiodarone%0ARecord%3A%20Amiodarone_Hirai2022_reference%0APaper%3A%20Hirai_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amiodarone/Amiodarone_Hirai2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:37 UTC</sub>
