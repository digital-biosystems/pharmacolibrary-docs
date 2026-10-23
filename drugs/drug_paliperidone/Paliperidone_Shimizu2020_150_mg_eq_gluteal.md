<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;paliperidone&quot;,&quot;href&quot;:&quot;drugs/drug_paliperidone/&quot;},{&quot;label&quot;:&quot;Shimizu_2020 \u00b7 150_mg_eq_gluteal&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paliperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paliperidone — `Paliperidone_Shimizu2020_150_mg_eq_gluteal`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="paliperidone" model-id="Paliperidone_Shimizu2020_150_mg_eq_gluteal" status="needs_review" stale="false" population="Japanese, Korean, and Taiwanese patients with schizophrenia" measured-compound="paliperidone" parameterization="mechanistic" topology="1C"></div>

## Citation
Shimizu H, Neyens M, De Meulder M, Gopal S, Tsukamoto Y, Samtani MN et al. Population Pharmacokinetics of Paliperidone Palmitate (Once-Monthly Formulation) in Japanese, Korean, and Taiwanese Patients With Schizophrenia. Clinical pharmacology in drug development 9(2):224–234 (2020).
  ·  DOI: [10.1002/cpdd.737](https://doi.org/10.1002/cpdd.737)

## Population and dosing

**Population:** Japanese, Korean, and Taiwanese patients with schizophrenia · condition schizophrenia · age group adult · n = 509.

**Dosing:** 25, 50, 75, 100, 150 mg eq., im.

**Dosed compound ≠ measured compound:** dosed paliperidone palmitate, measured paliperidone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 14 | ng/mL |
| tmax (days) | tmax | 14 | days |
| AUC(0,τ) (ng •h/mL) | AUC | 14 | ng·h/mL |
| Css,av (ng/mL) | Cavg | 14 | ng/mL |
| t1/2 (days) | t1/2z | 9 | days |
| apparent total CL in a 9-year-old child weighing 29 kg | CL | 3.8 | L/h |
| KaSC-RIS | kabs | 2.84 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Carrascosa-Arteaga_2025, Kozielska_2012) cannot stand in for this paper's evidence. A reported unit could not be converted (Cmax, AUC and Cavg), so that value has no SI equivalent. Extracted — paliperidone: Cmax 14 ng/mL, tmax 14 days, AUC 14 ng·h/mL, Cavg 14 ng/mL, t1/2z 9 days, CL 3.8 L/h, kabs 2.84 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of apparent total cl in a 9-year-old child weighing 29 kg: this record has 3.8, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 14 | ng/mL |  |  | ng/ml | exact (1) | cpdd737-tbl-0003:row2:col5, cpdd737-tbl-0003:row2:col6 |
| tmax (days) | `Q56` · tmax | 14 | days | 1.21e+06 | s | d | exact (1) | cpdd737-tbl-0003:row3:col5, cpdd737-tbl-0003:row3:col6 |
| AUC(0,τ) (ng •h/mL) | `Q88` · AUC | 14 | ng·h/mL |  |  | ng·h/mL | space_fold (0.95) | cpdd737-tbl-0003:row5:col5 |
| Css,av (ng/mL) | `Q71` · Cavg | 14 | ng/mL |  |  | ng/ml | llm_corrected (0.6) | cpdd737-tbl-0003:row6:col5, cpdd737-tbl-0003:row6:col6 |
| t1/2 (days) | `Q57` · t1/2z | 9 | days | 7.776e+05 | s | d | exact (1) | cpdd737-tbl-0003:row7:col5, cpdd737-tbl-0003:row7:col6 |
| apparent total CL in a 9-year-old child weighing 29 kg | `Q22` · CL | 3.8 | L/h | 1.056e-06 | m3/s | L/h | review_gapfill (0.7) | Carrascosa-Arteaga_2025:review |
| KaSC-RIS | `Q49` · kabs | 2.84 | 1/h | 0.0007889 | 1/s | 1/h | review_gapfill (0.7) | Kozielska_2012:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Median (range)' — extend the ontology if this is a real PK parameter (source ['cpdd737-tbl-0003:row4:col5'])
- unit_dimension_unknown: 'ng •h/mL' (AUC)
- implicit units: 'AUC(0,τ) (ng •h/mL)' → ng·h/mL (from the paper text: "Table 2 footnote defines AUC as 'area under the drug concentration time curve' and the caption lists 'AUC(0,τ) (ng •h/mL")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paliperidone
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: '150 mg eq. gluteal' subgroup of Shimizu_2020 (paper reports 3 populations: 100 mg eq. gluteal, 150 mg eq. gluteal, 50 mg eq. gluteal)
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 0 linked by role
- gap-filled Q22 (CL) from Carrascosa-Arteaga_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kozielska_2012's review values (primary lacked it)

**Extraction notes:**
- unparsed cell cpdd737-tbl-0003:row4:col2 = '10.99 (1.99‐21.01)'
- unparsed cell cpdd737-tbl-0003:row4:col4 = '7.89 (5.97‐21.81)'
- unparsed cell cpdd737-tbl-0003:row4:col6 = '7.50 (2.93‐27.01)'
- unparsed cell cpdd737-tbl-0003:row5:col4 = '15 898 (7535)'
- unparsed cell cpdd737-tbl-0003:row5:col6 = '21 853 (15 534)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent total cl in a 9-year-old child weighing 29 kg]` | 3.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kasc-ris]` | 2.84 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Carrascosa-Arteaga_2025:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['cpdd737-tbl-0003:row2:col5', 'cpdd737-tbl-0003:row2:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['cpdd737-tbl-0003:row3:col5', 'cpdd737-tbl-0003:row3:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['cpdd737-tbl-0003:row7:col5', 'cpdd737-tbl-0003:row7:col6'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['cpdd737-tbl-0003:row6:col5', 'cpdd737-tbl-0003:row6:col6'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['cpdd737-tbl-0003:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.8 | ['Carrascosa-Arteaga_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.8 L/h | ['Carrascosa-Arteaga_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpaliperidone%5D%20Paliperidone_Shimizu2020_150_mg_eq_gluteal&body=Drug%3A%20paliperidone%0ARecord%3A%20Paliperidone_Shimizu2020_150_mg_eq_gluteal%0APaper%3A%20Shimizu_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_paliperidone/Paliperidone_Shimizu2020_150_mg_eq_gluteal%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:17 UTC</sub>
