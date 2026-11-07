<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;bleomycin&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/&quot;},{&quot;label&quot;:&quot;Alberts_1978 \u00b7 e_g_25_u&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bleomycin_Kramer1978_group_i&quot;,&quot;label&quot;:&quot;Kramer_1978_group_i&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Kramer1978_iii&quot;,&quot;label&quot;:&quot;Kramer_1978_iii&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Wilde2007_reference&quot;,&quot;label&quot;:&quot;Wilde_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bleomycin — `Bleomycin_Alberts1978_e_g_25_u`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; vnorm and Q have no unit.

<div class="pk-model-meta" hidden drug="bleomycin" model-id="Bleomycin_Alberts1978_e_g_25_u" status="needs_review" stale="false" population="cancer patients" measured-compound="bleomycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Alberts DS, Chen HS, Liu R, Himmelstein KJ, Mayersohn M, Perrier D et al. Bleomycin pharmacokinetics in man. I. Intravenous administration. Cancer chemotherapy and pharmacology 1(3):177–181 (1978).
  ·  DOI: [10.1007/BF00253118](https://doi.org/10.1007/BF00253118)

## Population and dosing

**Population:** cancer patients · condition cancer · age group adult · n = &gt;=10.

**Dosing:** 13.7, 19.9 U/M2, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ta t1/2 min | t1/2z | 29.0 | min |
| Va L/M2 | Vnorm | 14.4 |  |
| 24-h urinary excretion % dose | fe | 27.4 |  |
| Qe ml/min/m2 | Q | 14.1 |  |
| creatinine clearance | CL | 70.0 | ml/min |
| Vd(L) Younger Patients AVG | V | 32.17 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; vnorm and Q have no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Bitran_1985, Groselj_2021) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — bleomycin: t1/2z 29 min, Vnorm 14.4, fe 27.4, Q 14.1, CL 70 ml/min, V 32.2 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cxt mu min/ml: this record has none, the second reading 262.3; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ta t1/2 min | `Q57` · t1/2z | 29.0 | min | 1740 | s | h | llm_confirmed (0.6) | Alberts_1978_table_p3_1:row1:col1 |
| Va L/M2 | `Q352` · Vnorm | 14.4 |  |  |  |  | llm (0.6) | Alberts_1978_table_p3_1:row1:col5 |
| 24-h urinary excretion % dose | `Q44` · fe | 27.4 |  |  |  |  | llm_confirmed (0.6) | Alberts_1978_table_p3_1:row1:col7 |
| Qe ml/min/m2 | `Q30` · Q | 14.1 |  |  |  |  | llm (0.6) | Alberts_1978_table_p3_1:row1:col8 |
| creatinine clearance | `Q22` · CL | 70.0 | ml/min | 1.167e-06 | m3/s | L/h | review_gapfill (0.7) | Bitran_1985:review |
| Vd(L) Younger Patients AVG | `Q61` · V | 32.17 | L | 0.03217 | m3 | L | review_gapfill (0.7) | Groselj_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'e. g. 25 u' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q57 ('tb t1/2 min', value '191.5') — already have one for this compound
- dropped unlinked row (NIL): 'CXT mU · min/ml' — extend the ontology if this is a real PK parameter (source ['Alberts_1978_table_p3_1:row1:col3'])
- dropped unlinked row (NIL): 'CXTa' — extend the ontology if this is a real PK parameter (source ['Alberts_1978_table_p3_1:row1:col4'])
- dropped unlinked row (NIL): 'Qa ml/min/m2' — extend the ontology if this is a real PK parameter (source ['Alberts_1978_table_p3_1:row1:col6'])
- NIL: refused to back-fill base 'tmax' from footnote/prose loose number 4.0 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 15 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- implicit units: 'ta t1/2 min' → min (from the paper text: "The paper text in the Abstract states: 'Bleomycin initial and terminal plasma half-lives... were 24.4 +_ 4.0 min, 23 7.5")
- implicit units: 'Va L/M2' — the LLM proposed 'L/m2', whose dimension does not fit Q352; left unset
- implicit units: 'Qe ml/min/m2' — the LLM proposed 'ml/min/m2', whose dimension does not fit Q30; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bleomycin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'e. g. 25 u' subgroup of Alberts_1978 (paper reports 9 populations: e. g. 25 u, e. m. 25 u, h. h. 24 u, j. s. 22 u, m. a. 30 u, m. m. 30 u, m. r. 24 u, s. h. 30 u, s. r. 23 u)
- gap-filled Q22 (CL) from Bitran_1985's review values (primary lacked it)
- gap-filled Q61 (V) from Groselj_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Alberts_1978_table_p3_1: units_need_context
- transposed table Alberts_1978_table_p3_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.636 (7/11 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cxt mu min/ml]` |  | 262.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qa ml/min/m2]` |  | 52.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qe ml/min/m2]` | 14.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[va l/m2].parameter_id` | Q352 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bitran_1985:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Alberts_1978_table_p3_1:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Groselj_2021:review'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Alberts_1978_table_p3_1:row1:col8'] |
| C5_unit_missing_Q352 | fail | [length] ** 3 |  | ['Alberts_1978_table_p3_1:row1:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 70 | ['Bitran_1985:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.2 L/h | ['Bitran_1985:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 32.2 L | ['Groselj_2021:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbleomycin%5D%20Bleomycin_Alberts1978_e_g_25_u&body=Drug%3A%20bleomycin%0ARecord%3A%20Bleomycin_Alberts1978_e_g_25_u%0APaper%3A%20Alberts_1978%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bleomycin/Bleomycin_Alberts1978_e_g_25_u%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:41 UTC</sub>
