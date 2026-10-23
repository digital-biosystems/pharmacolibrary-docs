<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/&quot;},{&quot;label&quot;:&quot;Khwarg_2024 \u00b7 ct&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# proguanil — `Proguanil_Khwarg2024_ct`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="proguanil" model-id="Proguanil_Khwarg2024_ct" status="needs_review" stale="false" population="healthy Korean adults" measured-compound="proguanil" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Khwarg J, Yang E, Park CS, Ji SC, Yu KS, Lee S. Effect of SLC22A1 polymorphism on the pharmacokinetics of proguanil in Korean: A semi-physiologic population pharmacokinetic approach. Clinical and translational science 17(12):e70103 (2024).
  ·  DOI: [10.1111/cts.70103](https://doi.org/10.1111/cts.70103)

## Population and dosing

**Population:** healthy Korean adults · condition healthy · age group adult · n = 16.

**Dosing:** 100 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUClast (h*μg/L) | AUClast | 1420.90 | h*μg/L |
| C max (μg/L) | Cmax | 89.08 | μg/L |
| t 1/2 (h) | t1/2z | 18.04 | h |
| Metabolic ratio a | AUC ratio | 0.21 |  |
| CL | CL | 0.476 | L/h |
| Tlag,1 | tlag | 0.147 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Cherkaoui-Rbati_2023) cannot stand in for this paper's evidence. A reported unit could not be converted (AUClast and Cmax), so that value has no SI equivalent. Extracted — proguanil: AUClast 1.42e+03 h*μg/L, Cmax 89.1 μg/L, t1/2z 18 h, AUC ratio 0.21, CL 0.476 L/h, tlag 0.147 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has proguanil, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUClast (h*μg/L) | `Q74` · AUClast | 1420.90 | h*μg/L |  |  | (h·µg)/l | exact (1) | Khwarg_2024_table_2:row2:col4, Khwarg_2024_table_2:row2:col5, Khwarg_2024_table_2:row2:col6, Khwarg_2024_table_2:row7:col4, Khwarg_2024_table_2:row7:col5, Khwarg_2024_table_2:row7:col6 |
| C max (μg/L) | `Q32` · Cmax | 89.08 | μg/L |  |  | µg/l | space_fold (0.95) | Khwarg_2024_table_2:row3:col4, Khwarg_2024_table_2:row3:col5, Khwarg_2024_table_2:row3:col6, Khwarg_2024_table_2:row8:col4, Khwarg_2024_table_2:row8:col5, Khwarg_2024_table_2:row8:col6 |
| t 1/2 (h) | `Q57` · t1/2z | 18.04 | h | 6.494e+04 | s | h | space_fold (0.95) | Khwarg_2024_table_2:row5:col4, Khwarg_2024_table_2:row5:col5, Khwarg_2024_table_2:row5:col6, Khwarg_2024_table_2:row11:col4, Khwarg_2024_table_2:row11:col5, Khwarg_2024_table_2:row11:col6 |
| Metabolic ratio a | `Q21` · AUC ratio | 0.21 |  |  |  |  | llm (0.6) | Khwarg_2024_table_2:row9:col4, Khwarg_2024_table_2:row9:col5, Khwarg_2024_table_2:row9:col6 |
| CL | `Q22` · CL | 0.476 | L/h | 1.322e-07 | m3/s | L/h | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |
| Tlag,1 | `Q83` · tlag | 0.147 | h | 529.2 | s | h | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Genotype Parameter' — extend the ontology if this is a real PK parameter (source ['Khwarg_2024_table_2:row0:col4', 'Khwarg_2024_table_2:row0:col5', 'Khwarg_2024_table_2:row0:col6'])
- dropped value-less row: 'FUP'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=proguanil
- template fit: none — only the metabolite is modelled — no parent compartment (site hepatic: 'Based on the PK and genotype data, a parent‐metabolite joint population PK model including a well‐stirred liver compartm')
- population split: 'ct' subgroup of Khwarg_2024 (paper reports 3 populations: cc, ct, final model)
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 14 linked by role; re-tagged parent→cycloguanil ×9, proguanil→parent ×1
- gap-filled Q22 (CL) from Cherkaoui-Rbati_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 2 transcribed (48 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auclast]` | 1420.90 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast]` |  | 1420.90 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 89.08 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` |  | 89.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.476 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 18.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` |  | 18.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag,1]` | 0.147 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | proguanil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | proguanil | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Khwarg_2024_table_2:row3:col4', 'Khwarg_2024_table_2:row3:col5', 'Khwarg_2024_table_2:row3:col6', 'Khwarg_2024_table_2:row8:col4', 'Khwarg_2024_table_2:row8:col5', 'Khwarg_2024_table_2:row8:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['Khwarg_2024_table_2:row5:col4', 'Khwarg_2024_table_2:row5:col5', 'Khwarg_2024_table_2:row5:col6', 'Khwarg_2024_table_2:row11:col4', 'Khwarg_2024_table_2:row11:col5', 'Khwarg_2024_table_2:row11:col6'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 |  | ['Khwarg_2024_table_2:row2:col4', 'Khwarg_2024_table_2:row2:col5', 'Khwarg_2024_table_2:row2:col6', 'Khwarg_2024_table_2:row7:col4', 'Khwarg_2024_table_2:row7:col5', 'Khwarg_2024_table_2:row7:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.476 | ['Cherkaoui-Rbati_2023:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.476 L/h | ['Cherkaoui-Rbati_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bproguanil%5D%20Proguanil_Khwarg2024_ct&body=Drug%3A%20proguanil%0ARecord%3A%20Proguanil_Khwarg2024_ct%0APaper%3A%20Khwarg_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_proguanil/Proguanil_Khwarg2024_ct%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:59 UTC</sub>
