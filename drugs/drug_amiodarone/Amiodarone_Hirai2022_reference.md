<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;amiodarone&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/&quot;},{&quot;label&quot;:&quot;Hirai_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amiodarone_Kolowrat2025_reference&quot;,&quot;label&quot;:&quot;Kolowrat_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Kolowrat2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Lesko1989_reference&quot;,&quot;label&quot;:&quot;Lesko_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Lesko1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Gaete1995_reference&quot;,&quot;label&quot;:&quot;Gaete_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Gaete1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Morath2025_reference&quot;,&quot;label&quot;:&quot;Morath_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Morath2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Hirai2022_reference&quot;,&quot;label&quot;:&quot;Hirai_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Hirai2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_amitarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_amitarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_amitarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_desethylamiodarone_typical_value&quot;,&quot;label&quot;:&quot;Pollak_2000_desethylamiodarone_typical_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/Amiodarone_Pollak2000_desethylamiodarone_typical_value.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sermsappasuk_2006_E_t&quot;,&quot;label&quot;:&quot;Sermsappasuk_2006 \u00b7 E(t)&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_amiodarone/pd_Sermsappasuk_2006_E_t.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amiodarone — `Amiodarone_Hirai2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the output was incorrectly defined as parent drug concentration instead of the measured metabolite.

<div class="pk-model-meta" hidden drug="amiodarone" model-id="Amiodarone_Hirai2022_reference" status="rejected" stale="false" population="adult patients" measured-compound="amiodarone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Hirai T, Kasai H, Takahashi M, Uchida S, Akai N, Hanada K et al. Population Pharmacokinetic Model of Amiodarone and N-Desethylamiodarone Focusing on Glucocorticoid and Inflammation. Biological & pharmaceutical bulletin 45(7):948–954 (2022).
  ·  DOI: [10.1248/bpb.b21-00940](https://doi.org/10.1248/bpb.b21-00940)

## Population and dosing

**Population:** adult patients · condition cardiac arrhythmia (implied by amiodarone treatment) · age group adult · n = 81.

**Dosing:** 200 mg, oral, multiple.

## Model

**Structure:** parent–metabolite model: parent with 1 compartment(s); metabolite N-desethylamiodarone: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference.svg" alt="Amiodarone_Hirai2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

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

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the output was incorrectly defined as parent drug concentration instead of the measured metabolite.**

The recorded output variable was the central compartment concentration for amiodarone, whereas the measured analyte in the population was the metabolite N-desethylamiodarone. Additionally, the record included unacceptable deviations where the lag time was left at library defaults and apparent assumptions were used without explicit estimates. A second reader disagreed on the parameterization classification, arguing for a mechanistic rather than apparent model. Extracted — amiodarone: CL 7.9 L/h, Vnorm 14 L/kg, Fab 54 fixed, kabs 1 1/h, Ctrough 1.08 µg/mL; N-desethylamiodarone: V 14 L/kg, Ctrough 0.9 µg/mL.

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

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

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
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 8 linked by role; re-tagged parent→N-desethylamiodarone ×5, amiodarone→parent ×2, amiodarone→N-desethylamiodarone ×2
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- unit_dimension_unknown: 'fixed' (V)
- implicit units: 'Vd AMD , L/kg (fixed)' → L/kg (from the paper text: "The text under 'Figures and Tables' states the final model equation: 'Vd _AMD = 14.0 × Body weight'. Since Body weight i")
- implicit units: 'k a , /h (fixed)' → 1/h (from the popPK convention: 'The parameter is the absorption rate constant (ka). In population pharmacokinetics, first-order rate constants are conve')
- implicit units: 'CL DEA /f m , L/h Glucocorticoids on CL DEA /f m' → L/h (from the paper text: "The text under 'Figures and Tables' states the final model equation: 'CL DEA /f m = 10.3 × (1-0.35 × [if glucocorticoid]")
- implicit units: 'Vd DEA , L/kg (fixed)' → L/kg (from the paper text: "The text under 'Figures and Tables' states the final model equation: 'Vd DEA = 14.0 × Body weight'. Since Body weight is")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amiodarone
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 13 linked by role; re-tagged parent→N-desethylamiodarone ×7, amiodarone→parent ×2, amiodarone→N-desethylamiodarone ×2

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
| T3_shared_parameters | skipped |  |  | parent–metabolite template: every compound has its own slot |
| T3_topology_template | pass | parent_metabolite → PK_3M_9C* | PK_3M_9C | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_id: defaulted_parameters: not acceptable; deviation_id: apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 1 /h, F 1). Dose in the paper: 200 mg.

<dbs-fmusim paramsurl="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_amiodarone/Amiodarone_Hirai2022_reference/Amiodarone_Hirai2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Amiodarone_Hirai2022_reference_params.json` · controls `Amiodarone_Hirai2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamiodarone%5D%20Amiodarone_Hirai2022_reference&body=Drug%3A%20amiodarone%0ARecord%3A%20Amiodarone_Hirai2022_reference%0APaper%3A%20Hirai_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amiodarone/Amiodarone_Hirai2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-22 10:37 UTC</sub>
