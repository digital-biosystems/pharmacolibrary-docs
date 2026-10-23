<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pertuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/&quot;},{&quot;label&quot;:&quot;Sakaeda_2024 \u00b7 10_mg_kg_iv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pertuzumab_Luo2017_reference&quot;,&quot;label&quot;:&quot;Luo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Luo2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pertuzumab_Sakaeda2024_10_mg_kg_iv&quot;,&quot;label&quot;:&quot;Sakaeda_2024_10_mg_kg_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pertuzumab — `Pertuzumab_Sakaeda2024_10_mg_kg_iv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 72, model 0.183).

<div class="pk-model-meta" hidden drug="pertuzumab" model-id="Pertuzumab_Sakaeda2024_10_mg_kg_iv" status="needs_review" stale="false" population="healthy adult males" measured-compound="pertuzumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Sakaeda M, Kotani N, Yoneya T, Zheng Y, Habara Y. [Pharmacological properties and clinical development overview of pertuzumab (genetical recombination), trastuzumab (genetical recombination) and vorhyaluronidase alfa (genetical recombination) (PHESGO. Nihon yakurigaku zasshi. Folia pharmacologica Japonica 159(4):241–253 (2024).
  ·  DOI: [10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022)

## Population and dosing

**Population:** healthy adult males · condition healthy · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv.svg" alt="Pertuzumab_Sakaeda2024_10_mg_kg_iv diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 0.0833 | h |
| Cmax (μg/mL) | Cmax | 288 | μg/mL |
| t1/2 (h) | t1/2z | 612 | h |
| AUCinf (μg・h/mL) | AUC∞ | 108000 | μg·h/mL |
| AUC0-672h (μg・h/mL) | AUCt | 59600 | μg·h/mL |
| CL (mL/min/kg) | CL | 0.00158 | mL/min/kg |
| Vss (L/kg) | Vss | 0.0782 | L/kg |
| MRT (h) | MRT | 844 | h |
| PertuzumabFuc+SA+ | V | 57.3 | mL/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.059). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 72, model 0.183).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, AUC∞ and AUCt), so that value has no SI equivalent. Extracted — pertuzumab: tmax 0.0833 h, Cmax 288 μg/mL, t1/2z 612 h, AUC∞ 1.08e+05 μg·h/mL, AUCt 5.96e+04 μg·h/mL, CL 0.00158 mL/min/kg, Vss 0.0782 L/kg, MRT 844 h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pertuzumab, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 0.0833 | h | 299.9 | s | h | exact (1) | Sakaeda_2024_table_3:row0:col1 |
| Cmax (μg/mL) | `Q32` · Cmax | 288 | μg/mL |  |  | µg/ml | exact (1) | Sakaeda_2024_table_3:row1:col1 |
| t1/2 (h) | `Q57` · t1/2z | 612 | h | 2.203e+06 | s | h | exact (1) | Sakaeda_2024_table_3:row2:col1 |
| AUCinf (μg・h/mL) | `Q17` · AUC∞ | 108000 | μg·h/mL |  |  | μg·h/mL | exact (1) | Sakaeda_2024_table_3:row3:col1 |
| AUC0-672h (μg・h/mL) | `Q19` · AUCt | 59600 | μg·h/mL |  |  | μg·h/mL | llm (0.6) | Sakaeda_2024_table_3:row4:col1 |
| CL (mL/min/kg) | `Q22` · CL | 0.00158 | mL/min/kg | 1.843e-09 | m3/s | ml/(min·kg) | exact (1) | Sakaeda_2024_table_3:row5:col1 |
| Vss (L/kg) | `Q65` · Vss | 0.0782 | L/kg | 0.005474 | m3 | l/kg | exact (1) | Sakaeda_2024_table_3:row6:col1 |
| MRT (h) | `Q53` · MRT | 844 | h | 3.038e+06 | s | h | exact (1) | Sakaeda_2024_table_3:row7:col1 |
| PertuzumabFuc+SA+ | `Q61` · V | 57.3 | mL/kg | 0.004011 | m3 | L | review_gapfill (0.7) | Luo_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'μg・h/mL' (AUC∞)
- unit_dimension_unknown: 'μg・h/mL' (AUCt)
- implicit units: 'AUCinf (μg・h/mL)' → μg·h/mL (from the paper text: "The parameter label in the input explicitly includes the unit: 'AUCinf (μg・h/mL)'. Additionally, the text describing Tab")
- implicit units: 'AUC0-672h (μg・h/mL)' → μg·h/mL (from the paper text: "The parameter label in the input explicitly includes the unit: 'AUC0-672h (μg・h/mL)'. The text for Table 3 also defines ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pertuzumab
- population split: '投与グループ (n=5/グループ) 10 mg/kg ベルツスマブ (iv)' subgroup of Sakaeda_2024 (paper reports 7 populations: 108 mg/動物 トラスツズマブ 0 u rhuph20, 108 mg/動物 トラスツズマブ 2,000 u rhuph20, 108 mg/動物 トラスツズマブ 6,000 u rhuph20, 216 mg/動物 トラスツズマブ 4,000 u rhuph20, 投与グループ (n=5/グループ) 10 mg/kg ベルツスマブ (iv), 投与グループ (n=5/グループ) 120 mg/動物 ベルツスマブ+ 2,000 u rhuph20 (sc), 投与グループ (n=5/グループ) 120 mg/動物 ベルツスマブ+ 2,000 u rhuph20 及び 120 mg/動物 トラスツズマブ+ 2,000 u rhuph20 (sc))
- molar mass: none found for 'pertuzumab' — its concentrations stay mass-only
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
| `gpt-oss-120b` | not confirmed | 0.059 (1/17 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 90.2 | only_one_extracted |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[auc0-672h].value` | 59600 | 31900 | mismatch |
| `gpt-oss-120b` | `parameters[aucinf]` | 108000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 0.0564 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.00158 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax].value` | 288 | 101 | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  | 90.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 844 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[pertuzumabfuc+sa+]` | 57.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 612 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax a]` |  | 72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 0.0833 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` | 0.0782 |  | only_one_extracted |
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
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Sakaeda_2024_table_3:row3:col1'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Sakaeda_2024_table_3:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Sakaeda_2024_table_3:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Sakaeda_2024_table_3:row1:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['Sakaeda_2024_table_3:row7:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Sakaeda_2024_table_3:row0:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Sakaeda_2024_table_3:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Luo_2017:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Sakaeda_2024_table_3:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.00158 | ['Sakaeda_2024_table_3:row5:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00664 L/h | ['Sakaeda_2024_table_3:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.01 L | ['Luo_2017:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 5.47 L | ['Sakaeda_2024_table_3:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=pertuzumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped |  | 0.004986 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.004986 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.004986 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.004986 |  | non-numeric value |
| T1_tmax | reference | fail | 72 | 0.1833 | 0.0025 | h→SI vs simulated h |
| T1_tmax | reference | fail | 24 | 0.1833 | 0.0076 | h→SI vs simulated h |
| T1_tmax | reference | fail | 24 | 0.1833 | 0.0076 | h→SI vs simulated h |
| T1_tmax | reference | fail | 24 | 0.1833 | 0.0076 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_modelica.zip" download>Pertuzumab_Sakaeda2024_10_mg_kg_iv_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_fmi.zip" download>Pertuzumab_Sakaeda2024_10_mg_kg_iv_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_matlab.zip" download>Pertuzumab_Sakaeda2024_10_mg_kg_iv_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_matlab_simbio.zip" download>Pertuzumab_Sakaeda2024_10_mg_kg_iv_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_sbml.zip" download>Pertuzumab_Sakaeda2024_10_mg_kg_iv_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_cellml.zip" download>Pertuzumab_Sakaeda2024_10_mg_kg_iv_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `Cl` | 1.843e-09 | m3/s |
| input | model | `VdPerKg` | 5.73e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sakaeda M, Kotani N, Yoneya T, Zheng Y, Habara Y. [Pharmacological properties and clinical development overview of pertuzumab (genetical recombination), trastuzumab (genetical recombination) and vorhyaluronidase alfa (genetical recombination) (PHESGO. Nihon yakurigaku zasshi. Folia pharmacologica Japonica 159(4):241–253 (2024). [doi:10.1254/fpj.24022](https://doi.org/10.1254/fpj.24022)

**This record:** Pharmacolibrary v26.09, model `Pertuzumab_Sakaeda2024_10_mg_kg_iv`. <https://pharmacolibrary.github.io/#/drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv>

```bibtex
@misc{pharmacolibrary_PertuzumabSakaeda202410mgkgiv,
  title  = {{Pharmacolibrary model Pertuzumab_Sakaeda2024_10_mg_kg_iv}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv},
  note   = {Parameters from doi:10.1254/fpj.24022},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 20 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 20 mg parenteral (L01FD02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv/Pertuzumab_Sakaeda2024_10_mg_kg_iv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Pertuzumab_Sakaeda2024_10_mg_kg_iv_params.json` · controls `Pertuzumab_Sakaeda2024_10_mg_kg_iv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpertuzumab%5D%20Pertuzumab_Sakaeda2024_10_mg_kg_iv&body=Drug%3A%20pertuzumab%0ARecord%3A%20Pertuzumab_Sakaeda2024_10_mg_kg_iv%0APaper%3A%20Sakaeda_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:34 UTC</sub>
