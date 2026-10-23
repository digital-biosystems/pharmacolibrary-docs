<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iohexol&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/&quot;},{&quot;label&quot;:&quot;Hooper_2025 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iohexol_Hooper2025_final&quot;,&quot;label&quot;:&quot;Hooper_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_Hooper2025_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iohexol_Hooper2025_stoch_approx&quot;,&quot;label&quot;:&quot;Hooper_2025_stoch_approx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_Hooper2025_stoch_approx.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iohexol_Taubert2018_reference&quot;,&quot;label&quot;:&quot;Taubert_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_Taubert2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iohexol_sberg2020_mean&quot;,&quot;label&quot;:&quot;\u00c5sberg_2020_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_sberg2020_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iohexol_sberg2020_median&quot;,&quot;label&quot;:&quot;\u00c5sberg_2020_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iohexol/Iohexol_sberg2020_median.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iohexol — `Iohexol_Hooper2025_value`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLnorm has no unit.

<div class="pk-model-meta" hidden drug="iohexol" model-id="Iohexol_Hooper2025_value" status="needs_review" stale="false" population="healthy adults with varying kidney function" measured-compound="iohexol" parameterization="mechanistic" topology="2C"></div>

## Citation
Hooper L, Heung M, Wang L, Matvekas A, Alikhani R, Kenes MT et al. Pharmacokinetic Characterization of Iopamidol and Iohexol for Optimizing Measured Glomerular Filtration Rate Assessment in Clinical Practice and Drug Development. Journal of clinical pharmacology 65(11):1350–1361 (2025).
  ·  DOI: [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046)

## Population and dosing

**Population:** healthy adults with varying kidney function · condition varying kidney function (eGFR 30-120 mL/min) · age group adult · n = 24.

**Dosing:** 1618 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Cl_pop | CL | 69.692 | mL/min | 0.145 (None% RSE) |
| beta_Cl_logtEGFR_comb | equation variable | 0.685 |  |  |
| V1_pop | V1 | 5920.612 | mL | 0.245 (None% RSE) |
| Q_pop | Q | 167.913 | mL/min | 0.525 (None% RSE) |
| V2_pop | V2 | 6021.421 | mL | 0.212 (None% RSE) |
| beta_Cl_logtBSA_mosteller | CLnorm | 0.589 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLnorm has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — iohexol: CL 69.7 mL/min, V1 5.92e+03 mL, Q 168 mL/min, V2 6.02e+03 mL, CLnorm 0.589.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has iohexol, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Cl_pop | `Q22` · CL | 69.692 | mL/min | 1.162e-06 | m3/s | L/h | llm (0.6) | Hooper_2025_table_S25:row2:col1, Hooper_2025_table_S25:row2:col4, Hooper_2025_table_S25:row2:col5, Hooper_2025_table_S25:row2:col6, Hooper_2025_table_S27:row2:col1, Hooper_2025_table_S27:row2:col4, Hooper_2025_table_S27:row2:col5, Hooper_2025_table_S27:row2:col6 | 0.145 (None% RSE) |
| beta_Cl_logtEGFR_comb | `Q900` · equation variable | 0.685 |  |  |  |  | llm (0.6) | Hooper_2025_table_S25:row4:col1, Hooper_2025_table_S25:row4:col4, Hooper_2025_table_S25:row4:col5, Hooper_2025_table_S27:row4:col1, Hooper_2025_table_S27:row4:col4, Hooper_2025_table_S27:row4:col5 |  |
| V1_pop | `Q63` · V1 | 5920.612 | mL | 0.005921 | m3 | L | llm (0.6) | Hooper_2025_table_S25:row5:col1, Hooper_2025_table_S25:row5:col4, Hooper_2025_table_S25:row5:col5, Hooper_2025_table_S25:row5:col6, Hooper_2025_table_S27:row5:col1, Hooper_2025_table_S27:row5:col4, Hooper_2025_table_S27:row5:col5, Hooper_2025_table_S27:row5:col6 | 0.245 (None% RSE) |
| Q_pop | `Q30` · Q | 167.913 | mL/min | 2.799e-06 | m3/s | L/h | llm (0.6) | Hooper_2025_table_S25:row7:col1, Hooper_2025_table_S25:row7:col4, Hooper_2025_table_S25:row7:col5, Hooper_2025_table_S25:row7:col6, Hooper_2025_table_S27:row7:col1, Hooper_2025_table_S27:row7:col4, Hooper_2025_table_S27:row7:col5, Hooper_2025_table_S27:row7:col6 | 0.525 (None% RSE) |
| V2_pop | `Q64` · V2 | 6021.421 | mL | 0.006021 | m3 | L | llm (0.6) | Hooper_2025_table_S25:row8:col1, Hooper_2025_table_S25:row8:col4, Hooper_2025_table_S25:row8:col5, Hooper_2025_table_S25:row8:col6, Hooper_2025_table_S27:row8:col1, Hooper_2025_table_S27:row8:col4, Hooper_2025_table_S27:row8:col5, Hooper_2025_table_S27:row8:col6 | 0.212 (None% RSE) |
| beta_Cl_logtBSA_mosteller | `Q354` · CLnorm | 0.589 |  |  |  |  | llm (0.6) | Hooper_2025_table_S27:row3:col1, Hooper_2025_table_S27:row3:col4, Hooper_2025_table_S27:row3:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'value' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'beta_Cl_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'beta_V1_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row6:col1', 'Hooper_2025_table_S25:row6:col4', 'Hooper_2025_table_S25:row6:col5'])
- dropped unlinked row (NIL): 'beta_V2_logtWeight' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row9:col1', 'Hooper_2025_table_S25:row9:col4', 'Hooper_2025_table_S25:row9:col5'])
- dropped duplicate Q22 ('Cl_Sex_0', value '69.692') — already have one for this compound
- dropped unlinked row (NIL): 'Cl_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row12:col1', 'Hooper_2025_table_S25:row12:col4', 'Hooper_2025_table_S25:row12:col5'])
- dropped unlinked row (NIL): 'V1_Sex_0' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row13:col1', 'Hooper_2025_table_S25:row13:col4', 'Hooper_2025_table_S25:row13:col5'])
- dropped unlinked row (NIL): 'V1_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row14:col1', 'Hooper_2025_table_S25:row14:col4', 'Hooper_2025_table_S25:row14:col5'])
- dropped duplicate Q64 ('corr_V2_Cl', value '0.753') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row24:col1', 'Hooper_2025_table_S25:row24:col4', 'Hooper_2025_table_S25:row24:col5'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row25:col1', 'Hooper_2025_table_S25:row25:col4', 'Hooper_2025_table_S25:row25:col5', 'Hooper_2025_table_S27:row20:col1', 'Hooper_2025_table_S27:row20:col4', 'Hooper_2025_table_S27:row20:col5'])
- dropped duplicate Q63 ('beta_V1_logtBSA_mosteller', value '1.86') — already have one for this compound
- routed 'beta_V2_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q64 ('V2_Sex_0', value '4154.603') — already have one for this compound
- dropped duplicate Q64 ('V2_Sex_1', value '5751.292') — already have one for this compound
- implicit units: 'Cl_pop' → mL/min (from the paper text: 'Text states CL_pop for iohexol final model was 69.69 (95% CI; 65.2, 74.5) mL/min.')
- implicit units: 'V1_pop' → mL (from the popPK convention: 'No unit stated for volumes; with clearance in mL/min, V1 of ~5920 corresponds to ~5.9 L, so mL is the consistent unit.')
- implicit units: 'Q_pop' → mL/min (from the popPK convention: 'No unit stated; intercompartmental clearance shares clearance units, and with CL in mL/min, Q = 167.913 mL/min (~0.17 L/')
- implicit units: 'V2_pop' → mL (from the popPK convention: 'No unit stated; V2 ~6021 corresponds to ~6 L, consistent with mL given clearance reported in mL/min.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iohexol
- population split: 'value' subgroup of Hooper_2025 (paper reports 5 populations: base model, final model, pragmatic model, stoch. approx., value)

**Extraction notes:**
- companion parameter table 3 transcribed (31 record(s), model stage 'final')
- companion parameter table S25 transcribed (103 record(s), model stage 'final')
- companion parameter table S27 transcribed (83 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, S25, S27

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[beta_cl_logtbsa_mosteller]` | 0.589 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta_cl_logtegfr_comb]` | 0.685 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_pop]` | 69.692 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_pop]` |  | 75.057 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_pop]` | 167.913 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_pop]` |  | 158.796 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1_pop]` | 5920.612 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1_pop]` |  | 6083.555 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2_pop]` | 6021.421 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2_pop]` |  | 5937.716 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | iohexol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | iohexol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hooper_2025_table_S25:row2:col1', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col1', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Hooper_2025_table_S25:row7:col1', 'Hooper_2025_table_S25:row7:col4', 'Hooper_2025_table_S25:row7:col5', 'Hooper_2025_table_S25:row7:col6', 'Hooper_2025_table_S27:row7:col1', 'Hooper_2025_table_S27:row7:col4', 'Hooper_2025_table_S27:row7:col5', 'Hooper_2025_table_S27:row7:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Hooper_2025_table_S25:row5:col1', 'Hooper_2025_table_S25:row5:col4', 'Hooper_2025_table_S25:row5:col5', 'Hooper_2025_table_S25:row5:col6', 'Hooper_2025_table_S27:row5:col1', 'Hooper_2025_table_S27:row5:col4', 'Hooper_2025_table_S27:row5:col5', 'Hooper_2025_table_S27:row5:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Hooper_2025_table_S25:row8:col1', 'Hooper_2025_table_S25:row8:col4', 'Hooper_2025_table_S25:row8:col5', 'Hooper_2025_table_S25:row8:col6', 'Hooper_2025_table_S27:row8:col1', 'Hooper_2025_table_S27:row8:col4', 'Hooper_2025_table_S27:row8:col5', 'Hooper_2025_table_S27:row8:col6'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] |  | ['Hooper_2025_table_S27:row3:col1', 'Hooper_2025_table_S27:row3:col4', 'Hooper_2025_table_S27:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 69.69 | ['Hooper_2025_table_S25:row2:col1', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col1', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.18 L/h | ['Hooper_2025_table_S25:row2:col1', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col1', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.92 L | ['Hooper_2025_table_S25:row5:col1', 'Hooper_2025_table_S25:row5:col4', 'Hooper_2025_table_S25:row5:col5', 'Hooper_2025_table_S25:row5:col6', 'Hooper_2025_table_S27:row5:col1', 'Hooper_2025_table_S27:row5:col4', 'Hooper_2025_table_S27:row5:col5', 'Hooper_2025_table_S27:row5:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.02 L | ['Hooper_2025_table_S25:row8:col1', 'Hooper_2025_table_S25:row8:col4', 'Hooper_2025_table_S25:row8:col5', 'Hooper_2025_table_S25:row8:col6', 'Hooper_2025_table_S27:row8:col1', 'Hooper_2025_table_S27:row8:col4', 'Hooper_2025_table_S27:row8:col5', 'Hooper_2025_table_S27:row8:col6'] |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biohexol%5D%20Iohexol_Hooper2025_value&body=Drug%3A%20iohexol%0ARecord%3A%20Iohexol_Hooper2025_value%0APaper%3A%20Hooper_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iohexol/Iohexol_Hooper2025_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:23 UTC</sub>
