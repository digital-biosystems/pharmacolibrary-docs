<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pertuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/&quot;},{&quot;label&quot;:&quot;Sakaeda_2024 \u00b7 120_mg_2_000_u_rhuph20_120_mg_2_000_u_rhuph20_sc&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pertuzumab_Luo2017_reference&quot;,&quot;label&quot;:&quot;Luo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Luo2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pertuzumab_Sakaeda2024_10_mg_kg_iv&quot;,&quot;label&quot;:&quot;Sakaeda_2024_10_mg_kg_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pertuzumab — `Pertuzumab_Sakaeda2024_120_mg_2_000_u_rhuph20_120_mg_2_000_u`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="pertuzumab" model-id="Pertuzumab_Sakaeda2024_120_mg_2_000_u_rhuph20_120_mg_2_000_u" status="needs_review" stale="false" population="healthy adult males" measured-compound="pertuzumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Sakaeda M, Kotani N, Yoneya T, Zheng Y, Habara Y. [Pharmacological properties and clinical development overview of pertuzumab (genetical recombination), trastuzumab (genetical recombination) and vorhyaluronidase alfa (genetical recombination) (PHESGO. Nihon yakurigaku zasshi. Folia pharmacologica Japonica 159(4):241–253 (2024).
  ·  DOI: [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022)

## Population and dosing

**Population:** healthy adult males · condition healthy · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 24 | h |
| Cmax (μg/mL) | Cmax | 296 | μg/mL |
| t1/2 (h) | t1/2z | 396 | h |
| AUCinf (μg・h/mL) | AUC∞ | 157000 | μg·h/mL |
| AUC0-672h (μg・h/mL) | AUCt | 108000 | μg·h/mL |
| MRT (h) | MRT | 570 | h |
| CL | CL | 0.235 | L/day |
| PertuzumabFuc+SA+ | V | 57.3 | mL/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Kirschbrown_2019, Luo_2017) cannot stand in for this paper's evidence. A reported unit could not be converted (Cmax, AUC∞ and AUCt), so that value has no SI equivalent. Extracted — pertuzumab: tmax 24 h, Cmax 296 μg/mL, t1/2z 396 h, AUC∞ 1.57e+05 μg·h/mL, AUCt 1.08e+05 μg·h/mL, MRT 570 h, CL 0.235 L/day, V 57.3 mL/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pertuzumab, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 24 | h | 8.64e+04 | s | h | exact (1) | Sakaeda_2024_table_3:row0:col3 |
| Cmax (μg/mL) | `Q32` · Cmax | 296 | μg/mL |  |  | µg/ml | exact (1) | Sakaeda_2024_table_3:row1:col3 |
| t1/2 (h) | `Q57` · t1/2z | 396 | h | 1.426e+06 | s | h | exact (1) | Sakaeda_2024_table_3:row2:col3 |
| AUCinf (μg・h/mL) | `Q17` · AUC∞ | 157000 | μg·h/mL |  |  | μg·h/mL | exact (1) | Sakaeda_2024_table_3:row3:col3 |
| AUC0-672h (μg・h/mL) | `Q19` · AUCt | 108000 | μg·h/mL |  |  | μg·h/mL | llm (0.6) | Sakaeda_2024_table_3:row4:col3 |
| MRT (h) | `Q53` · MRT | 570 | h | 2.052e+06 | s | h | exact (1) | Sakaeda_2024_table_3:row7:col3 |
| CL | `Q22` · CL | 0.235 | L/day | 2.72e-09 | m3/s | L/h | review_gapfill (0.7) | Kirschbrown_2019:review |
| PertuzumabFuc+SA+ | `Q61` · V | 57.3 | mL/kg | 0.004011 | m3 | L | review_gapfill (0.7) | Luo_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'μg・h/mL' (AUC∞)
- unit_dimension_unknown: 'μg・h/mL' (AUCt)
- implicit units: 'AUCinf (μg・h/mL)' → μg·h/mL (from the paper text: "The parameter label in the input explicitly includes the unit: 'AUCinf (μg・h/mL)'. Additionally, the text mentions serum")
- implicit units: 'AUC0-672h (μg・h/mL)' → μg·h/mL (from the paper text: "The parameter label in the input explicitly includes the unit: 'AUC0-672h (μg・h/mL)'. The text also defines AUC0-672h in")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pertuzumab
- population split: '投与グループ (n=5/グループ) 120 mg/動物 ベルツスマブ+ 2,000 u rhuph20 及び 120 mg/動物 トラスツズマブ+ 2,000 u rhuph20 (sc)' subgroup of Sakaeda_2024 (paper reports 7 populations: 108 mg/動物 トラスツズマブ 0 u rhuph20, 108 mg/動物 トラスツズマブ 2,000 u rhuph20, 108 mg/動物 トラスツズマブ 6,000 u rhuph20, 216 mg/動物 トラスツズマブ 4,000 u rhuph20, 投与グループ (n=5/グループ) 10 mg/kg ベルツスマブ (iv), 投与グループ (n=5/グループ) 120 mg/動物 ベルツスマブ+ 2,000 u rhuph20 (sc), 投与グループ (n=5/グループ) 120 mg/動物 ベルツスマブ+ 2,000 u rhuph20 及び 120 mg/動物 トラスツズマブ+ 2,000 u rhuph20 (sc))
- molar mass: none found for 'pertuzumab' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Kirschbrown_2019's review values (primary lacked it)
- gap-filled Q61 (V) from Luo_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.062 (1/16 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 90.2 | only_one_extracted |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[auc0-672h].value` | 108000 | 31900 | mismatch |
| `gpt-oss-120b` | `parameters[aucinf]` | 157000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 0.0564 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.235 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax].value` | 296 | 101 | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  | 90.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 570 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[pertuzumabfuc+sa+]` | 57.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 396 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax a]` |  | 72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 24 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pertuzumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pertuzumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Sakaeda_2024_table_3:row3:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Sakaeda_2024_table_3:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kirschbrown_2019:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Sakaeda_2024_table_3:row1:col3'] |
| C5_dimension_Q53 | pass | [time] |  | ['Sakaeda_2024_table_3:row7:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Sakaeda_2024_table_3:row0:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Sakaeda_2024_table_3:row2:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Luo_2017:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.235 | ['Kirschbrown_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00979 L/h | ['Kirschbrown_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.01 L | ['Luo_2017:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpertuzumab%5D%20Pertuzumab_Sakaeda2024_120_mg_2_000_u_rhuph20_120_mg_2_000_u&body=Drug%3A%20pertuzumab%0ARecord%3A%20Pertuzumab_Sakaeda2024_120_mg_2_000_u_rhuph20_120_mg_2_000_u%0APaper%3A%20Sakaeda_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_120_mg_2_000_u_rhuph20_120_mg_2_000_u%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:34 UTC</sub>
