<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iopamidol&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/&quot;},{&quot;label&quot;:&quot;Hooper_2025 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iopamidol_Hooper2025_final&quot;,&quot;label&quot;:&quot;Hooper_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iopamidol_Hooper2025_pragmatic_model&quot;,&quot;label&quot;:&quot;Hooper_2025_pragmatic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_pragmatic_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iopamidol — `Iopamidol_Hooper2025_base`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLnorm has no unit.

<div class="pk-model-meta" hidden drug="iopamidol" model-id="Iopamidol_Hooper2025_base" status="needs_review" stale="false" population="healthy adults with varying kidney function" measured-compound="iopamidol" parameterization="mechanistic" topology="2C"></div>

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
| CL_pop (mL/min) | CL | 58.65 | mL/min | 29.58 (14.59% RSE) |
| V1_pop (mL) | V1 | 5004.76 | mL | 25.82 (21.43% RSE) |
| Q_pop (mL/min) | Q | 123.7 | mL/min | 30.33 (37.10% RSE) |
| V2_pop (mL) | V2 | 4543.01 | mL | 25.24 (19.87% RSE) |
| beta_Cl_logtEGFR_comb | equation variable | 0.535 |  |  |
| beta_Cl_logtBSA_mosteller | CLnorm | 0.179 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLnorm has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — iopamidol: CL 58.6 mL/min, V1 5e+03 mL, Q 124 mL/min, V2 4.54e+03 mL, CLnorm 0.179.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[beta_cl_logtbsa_mosteller].parameter_id`: this record has Q354, the second reading Q319; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL_pop (mL/min) | `Q22` · CL | 58.65 | mL/min | 9.775e-07 | m3/s | ml/min | llm (0.6) | jcph70046-tbl-0003:row1:col1, Hooper_2025_table_2:row0:col1 | 29.58 (14.59% RSE) |
| V1_pop (mL) | `Q63` · V1 | 5004.76 | mL | 0.005005 | m3 | ml | llm (0.6) | jcph70046-tbl-0003:row5:col1, Hooper_2025_table_2:row4:col1 | 25.82 (21.43% RSE) |
| Q_pop (mL/min) | `Q30` · Q | 123.7 | mL/min | 2.062e-06 | m3/s | ml/min | llm (0.6) | jcph70046-tbl-0003:row7:col1, Hooper_2025_table_2:row6:col1 | 30.33 (37.10% RSE) |
| V2_pop (mL) | `Q64` · V2 | 4543.01 | mL | 0.004543 | m3 | ml | llm (0.6) | jcph70046-tbl-0003:row8:col1, Hooper_2025_table_2:row7:col1 | 25.24 (19.87% RSE) |
| beta_Cl_logtEGFR_comb | `Q900` · equation variable | 0.535 |  |  |  |  | llm (0.6) | Hooper_2025_table_S25:row4:col4, Hooper_2025_table_S25:row4:col5, Hooper_2025_table_S27:row4:col4, Hooper_2025_table_S27:row4:col5 |  |
| beta_Cl_logtBSA_mosteller | `Q354` · CLnorm | 0.179 |  |  |  |  | llm (0.6) | Hooper_2025_table_S27:row3:col4, Hooper_2025_table_S27:row3:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- table section iiv: 'V1' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- table section iiv: 'Q' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- table section iiv: 'V2' routed out of structural estimates ('Parameter Interindividual Variability (C.V. %)')
- dropped duplicate Q22 ('Cl_pop', value '65.158') — already have one for this compound
- routed 'beta_Cl_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q63 ('V1_pop', value '5091.933') — already have one for this compound
- dropped unlinked row (NIL): 'beta_V1_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row6:col4', 'Hooper_2025_table_S25:row6:col5'])
- dropped duplicate Q30 ('Q_pop', value '121.357') — already have one for this compound
- dropped duplicate Q64 ('V2_pop', value '5374.271') — already have one for this compound
- dropped duplicate Q64 ('beta_V2_logtWeight', value '0.316') — already have one for this compound
- dropped unlinked row (NIL): 'Cl_Sex_0' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row11:col4', 'Hooper_2025_table_S25:row11:col5'])
- dropped unlinked row (NIL): 'Cl_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row12:col4', 'Hooper_2025_table_S25:row12:col5'])
- dropped unlinked row (NIL): 'V1_Sex_0' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row13:col4', 'Hooper_2025_table_S25:row13:col5'])
- dropped unlinked row (NIL): 'V1_Sex_1' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row14:col4', 'Hooper_2025_table_S25:row14:col5'])
- dropped duplicate Q64 ('corr_V2_Cl', value '0.07') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Hooper_2025_table_S25:row24:col4', 'Hooper_2025_table_S25:row24:col5'])
- dropped duplicate Q900 ('b', value '0.0398') — already have one for this compound
- dropped duplicate Q63 ('beta_V1_logtBSA_mosteller', value '0.908') — already have one for this compound
- dropped duplicate Q64 ('beta_V2_Sex_1', value '0.0866') — already have one for this compound
- routed 'V2_Sex_0' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'V2_Sex_1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'beta_Cl_logtBSA_mosteller' — the LLM proposed 'mL/min/1.73m2', whose dimension does not fit Q354; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iopamidol
- model-stage split: 'base model' is the base model of Hooper_2025 (paper reports 5 stages: base model, final model, pragmatic model, stoch. approx., value); same population, different model-building step

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
| `gpt-oss-120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[beta_cl_logtbsa_mosteller].parameter_id` | Q354 | Q319 | mismatch |
| `gpt-oss-120b` | `parameters[beta_cl_logtegfr_comb]` | 0.535 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_pop].parameter_id` | Q30 | Q54 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph70046-tbl-0003:row1:col1', 'Hooper_2025_table_2:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph70046-tbl-0003:row7:col1', 'Hooper_2025_table_2:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jcph70046-tbl-0003:row5:col1', 'Hooper_2025_table_2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph70046-tbl-0003:row8:col1', 'Hooper_2025_table_2:row7:col1'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] |  | ['Hooper_2025_table_S27:row3:col4', 'Hooper_2025_table_S27:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 58.65 | ['jcph70046-tbl-0003:row1:col1', 'Hooper_2025_table_2:row0:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.52 L/h | ['jcph70046-tbl-0003:row1:col1', 'Hooper_2025_table_2:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5 L | ['jcph70046-tbl-0003:row5:col1', 'Hooper_2025_table_2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.54 L | ['jcph70046-tbl-0003:row8:col1', 'Hooper_2025_table_2:row7:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biopamidol%5D%20Iopamidol_Hooper2025_base&body=Drug%3A%20iopamidol%0ARecord%3A%20Iopamidol_Hooper2025_base%0APaper%3A%20Hooper_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iopamidol/Iopamidol_Hooper2025_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:41 UTC</sub>
