<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iopamidol&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/&quot;},{&quot;label&quot;:&quot;Hooper_2025 \u00b7 stoch_approx&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iopamidol_Hooper2025_final&quot;,&quot;label&quot;:&quot;Hooper_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iopamidol_Hooper2025_pragmatic_model&quot;,&quot;label&quot;:&quot;Hooper_2025_pragmatic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_pragmatic_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iopamidol — `Iopamidol_Hooper2025_stoch_approx`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The iopamidol two-compartment model was rejected because its peripheral compartment (V2 = 350.195 L) is unreachable — no path connects it to the dose, so the published structure is incomplete.

<div class="pk-model-meta" hidden drug="iopamidol" model-id="Iopamidol_Hooper2025_stoch_approx" status="rejected" stale="false" population="healthy adults with varying kidney function" measured-compound="iopamidol" parameterization="mechanistic" topology="2C"></div>

## Citation
Hooper L, Heung M, Wang L, Matvekas A, Alikhani R, Kenes MT et al. Pharmacokinetic Characterization of Iopamidol and Iohexol for Optimizing Measured Glomerular Filtration Rate Assessment in Clinical Practice and Drug Development. Journal of clinical pharmacology 65(11):1350–1361 (2025).
  ·  DOI: [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046)

## Population and dosing

**Population:** healthy adults with varying kidney function · condition varying kidney function (eGFR 30-120 mL/min) · age group adult · n = 24.

**Dosing:** 1618 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Cl_pop | CL | 2.394 | mL/min | 14.579 (None% RSE) |
| beta_Cl_logtEGFR_comb | equation variable | 0.0766 |  |  |
| V1_pop | V1 | 457.506 | L | 24.864 (None% RSE) |
| V2_pop | V2 | 350.195 | L | 21.449 (None% RSE) |
| beta_Cl_logtBSA_mosteller | CLnorm | 0.209 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The iopamidol two-compartment model was rejected because its peripheral compartment (V2 = 350.195 L) is unreachable — no path connects it to the dose, so the published structure is incomplete.**

The record reports iopamidol clearance CL = 2.394 mL/min, central volume V1 = 457.506 L, and peripheral volume V2 = 350.195 L for healthy adults with varying kidney function, with covariate effects on clearance (beta_Cl_logtEGFR_comb = 0.0766; beta_Cl_logtBSA_mosteller = 0.209). The structural check found an unreachable or orphan compartment: the peripheral compartment has no connection from the dose, meaning the two-compartment topology as recorded cannot distribute drug to it. No other failed checks or builder deviations are recorded. Extracted — iopamidol: CL 2.39 mL/min, V1 458 L, V2 350 L, CLnorm 0.209.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of beta_cl_logtbsa_mosteller: this record has 0.209, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Cl_pop | `Q22` · CL | 2.394 | mL/min | 3.99e-08 | m3/s | L/h | llm (0.6) | Hooper_2025_table_S25:row2:col2, Hooper_2025_table_S25:row2:col4, Hooper_2025_table_S25:row2:col5, Hooper_2025_table_S25:row2:col6, Hooper_2025_table_S27:row2:col2, Hooper_2025_table_S27:row2:col4, Hooper_2025_table_S27:row2:col5, Hooper_2025_table_S27:row2:col6 | 14.579 (None% RSE) |
| beta_Cl_logtEGFR_comb | `Q900` · equation variable | 0.0766 |  |  |  |  | llm (0.6) | Hooper_2025_table_S25:row4:col2, Hooper_2025_table_S25:row4:col4, Hooper_2025_table_S25:row4:col5, Hooper_2025_table_S27:row4:col2, Hooper_2025_table_S27:row4:col4, Hooper_2025_table_S27:row4:col5 |  |
| V1_pop | `Q63` · V1 | 457.506 | L | 0.4575 | m3 | L | llm (0.6) | Hooper_2025_table_S25:row5:col2, Hooper_2025_table_S25:row5:col4, Hooper_2025_table_S25:row5:col5, Hooper_2025_table_S25:row5:col6, Hooper_2025_table_S27:row5:col2, Hooper_2025_table_S27:row5:col4, Hooper_2025_table_S27:row5:col5, Hooper_2025_table_S27:row5:col6 | 24.864 (None% RSE) |
| V2_pop | `Q64` · V2 | 350.195 | L | 0.3502 | m3 | L | llm (0.6) | Hooper_2025_table_S25:row8:col2, Hooper_2025_table_S25:row8:col4, Hooper_2025_table_S25:row8:col5, Hooper_2025_table_S25:row8:col6, Hooper_2025_table_S27:row8:col2, Hooper_2025_table_S27:row8:col4, Hooper_2025_table_S27:row8:col5, Hooper_2025_table_S27:row8:col6 | 21.449 (None% RSE) |
| beta_Cl_logtBSA_mosteller | `Q354` · CLnorm | 0.209 |  |  |  |  | llm (0.6) | Hooper_2025_table_S27:row3:col2, Hooper_2025_table_S27:row3:col4, Hooper_2025_table_S27:row3:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'beta_Cl_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'beta_V1_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Q_pop' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row7:col2', 'Hooper_2025_table_S25:row7:col4', 'Hooper_2025_table_S25:row7:col5', 'Hooper_2025_table_S25:row7:col6', 'Hooper_2025_table_S27:row7:col2', 'Hooper_2025_table_S27:row7:col4', 'Hooper_2025_table_S27:row7:col5', 'Hooper_2025_table_S27:row7:col6'])
- dropped unlinked row (NIL): 'beta_V2_logtWeight' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row9:col2', 'Hooper_2025_table_S25:row9:col4', 'Hooper_2025_table_S25:row9:col5'])
- routed 'Cl_Sex_0' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q22 ('Cl_Sex_1', value '4.797') — already have one for this compound
- dropped unlinked row (NIL): 'V1_Sex_0' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row13:col2', 'Hooper_2025_table_S25:row13:col4', 'Hooper_2025_table_S25:row13:col5'])
- dropped unlinked row (NIL): 'V1_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row14:col2', 'Hooper_2025_table_S25:row14:col4', 'Hooper_2025_table_S25:row14:col5'])
- dropped duplicate Q900 ('corr_V2_Cl', value '0.201') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row24:col2', 'Hooper_2025_table_S25:row24:col4', 'Hooper_2025_table_S25:row24:col5'])
- dropped duplicate Q900 ('b', value '0.00857') — already have one for this compound
- dropped duplicate Q63 ('beta_V1_logtBSA_mosteller', value '0.485') — already have one for this compound
- dropped duplicate Q64 ('beta_V2_Sex_1', value '0.122') — already have one for this compound
- dropped duplicate Q64 ('V2_Sex_0', value '287.311') — already have one for this compound
- dropped unlinked row (NIL): 'V2_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S27:row12:col2', 'Hooper_2025_table_S27:row12:col4', 'Hooper_2025_table_S27:row12:col5'])
- implicit units: 'Cl_pop' → mL/min (from the paper text: "Text states CL_pop estimates in mL/min: 'The estimated population clearance (CL_pop) for iohexol ... was 69.69 (95% CI; ")
- implicit units: 'V1_pop' → L (from the popPK convention: 'No unit stated for V1 in text or captions; volumes of distribution of the central compartment are conventionally reporte')
- implicit units: 'V2_pop' → L (from the popPK convention: 'No unit stated for V2 in text or captions; peripheral volume of distribution is conventionally in L, and 350.2 L is a pl')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iopamidol
- population split: 'stoch. approx.' subgroup of Hooper_2025 (paper reports 5 populations: base model, final model, pragmatic model, stoch. approx., value)

**Extraction notes:**
- companion parameter table 2 transcribed (34 record(s), model stage 'final')
- companion parameter table S25 transcribed (103 record(s), model stage 'final')
- companion parameter table S27 transcribed (83 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, S25, S27

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[beta_cl_logtbsa_mosteller]` | 0.209 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta_cl_logtegfr_comb]` | 0.0766 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_pop].value` | 2.394 | 1.639 | mismatch |
| `gpt-oss-120b` | `parameters[q_pop]` |  | 15.274 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1_pop].value` | 457.506 | 399.26 | mismatch |
| `gpt-oss-120b` | `parameters[v2_pop].value` | 350.195 | 287.311 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hooper_2025_table_S25:row2:col2', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col2', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Hooper_2025_table_S25:row5:col2', 'Hooper_2025_table_S25:row5:col4', 'Hooper_2025_table_S25:row5:col5', 'Hooper_2025_table_S25:row5:col6', 'Hooper_2025_table_S27:row5:col2', 'Hooper_2025_table_S27:row5:col4', 'Hooper_2025_table_S27:row5:col5', 'Hooper_2025_table_S27:row5:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Hooper_2025_table_S25:row8:col2', 'Hooper_2025_table_S25:row8:col4', 'Hooper_2025_table_S25:row8:col5', 'Hooper_2025_table_S25:row8:col6', 'Hooper_2025_table_S27:row8:col2', 'Hooper_2025_table_S27:row8:col4', 'Hooper_2025_table_S27:row8:col5', 'Hooper_2025_table_S27:row8:col6'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] |  | ['Hooper_2025_table_S27:row3:col2', 'Hooper_2025_table_S27:row3:col4', 'Hooper_2025_table_S27:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.394 | ['Hooper_2025_table_S25:row2:col2', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col2', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.144 L/h | ['Hooper_2025_table_S25:row2:col2', 'Hooper_2025_table_S25:row2:col4', 'Hooper_2025_table_S25:row2:col5', 'Hooper_2025_table_S25:row2:col6', 'Hooper_2025_table_S27:row2:col2', 'Hooper_2025_table_S27:row2:col4', 'Hooper_2025_table_S27:row2:col5', 'Hooper_2025_table_S27:row2:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 458 L | ['Hooper_2025_table_S25:row5:col2', 'Hooper_2025_table_S25:row5:col4', 'Hooper_2025_table_S25:row5:col5', 'Hooper_2025_table_S25:row5:col6', 'Hooper_2025_table_S27:row5:col2', 'Hooper_2025_table_S27:row5:col4', 'Hooper_2025_table_S27:row5:col5', 'Hooper_2025_table_S27:row5:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 350 L | ['Hooper_2025_table_S25:row8:col2', 'Hooper_2025_table_S25:row8:col4', 'Hooper_2025_table_S25:row8:col5', 'Hooper_2025_table_S25:row8:col6', 'Hooper_2025_table_S27:row8:col2', 'Hooper_2025_table_S27:row8:col4', 'Hooper_2025_table_S27:row8:col5', 'Hooper_2025_table_S27:row8:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biopamidol%5D%20Iopamidol_Hooper2025_stoch_approx&body=Drug%3A%20iopamidol%0ARecord%3A%20Iopamidol_Hooper2025_stoch_approx%0APaper%3A%20Hooper_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iopamidol/Iopamidol_Hooper2025_stoch_approx%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:41 UTC</sub>
