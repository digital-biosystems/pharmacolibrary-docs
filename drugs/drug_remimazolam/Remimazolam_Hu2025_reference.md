<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;remimazolam&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/&quot;},{&quot;label&quot;:&quot;Hu_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remimazolam_Chen2025_base_model&quot;,&quot;label&quot;:&quot;Chen_2025_base_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025_base_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Chen2025_median_by_1_000_bootstraps&quot;,&quot;label&quot;:&quot;Chen_2025_median_by_1_000_bootstraps&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025_median_by_1_000_bootstraps.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Chen2025v2_reference&quot;,&quot;label&quot;:&quot;Chen_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Colin2025_reference&quot;,&quot;label&quot;:&quot;Colin_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Colin2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Schttler2020_reference&quot;,&quot;label&quot;:&quot;Sch\u00fcttler_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Schttler2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_de2025_vellinga_38&quot;,&quot;label&quot;:&quot;de_2025_vellinga_38&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_de2025_vellinga_38.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remimazolam — `Remimazolam_Hu2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Rejected because remimazolam non-compartmental parameters carry unit/scale errors: kel is reported as 0.136 L/min though λz is a rate constant in 1/min, and CL of 0.149 mL/min/kg and V of 0.466 mL/kg are physiologically implausible.

<div class="pk-model-meta" hidden drug="remimazolam" model-id="Remimazolam_Hu2025_reference" status="rejected" stale="false" population="ICU patients on mechanical ventilation" measured-compound="remimazolam" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Hu J, Zhao Y, Shao L, Zhang W, Wang H, Liu Y et al. Pharmacokinetic Properties and Therapeutic Effectiveness of Remimazolam in ICU Patients With Mechanical Ventilation: A Preliminary Study. Pharmacology research & perspectives 13(3):e70130 (2025).
  ·  DOI: [10.1002/prp2.70130](https://doi.org/10.1002/prp2.70130)

## Population and dosing

**Population:** ICU patients on mechanical ventilation · condition ICU sedation (mechanical ventilation) · age group adult · n = 36.

**Dosing:** 7, 14, 21, 35 mg, iv, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t 1/2 (min) | t1/2z | 0.389 | min |
| AUC0–t (μg min/mL) | AUCt | 0.013 | μg min/mL |
| AUC0–∞ (μg min/mL) | AUC∞ | 0.010 | μg min/mL |
| λz (L/min) | kel | 0.136 | L/min |
| V d (mL/kg) | V | 0.466 | mL/kg |
| CL (mL/min/kg) | CL | 0.149 | mL/min/kg |
| MRT (min) | MRT | 0.268 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because remimazolam non-compartmental parameters carry unit/scale errors: kel is reported as 0.136 L/min though λz is a rate constant in 1/min, and CL of 0.149 mL/min/kg and V of 0.466 mL/kg are physiologically implausible.**

The terminal elimination rate constant kel (λz) was extracted with the unit L/min, a dimension mismatch for a first-order rate constant that should be in 1/min. The clearance (0.149 mL/min/kg) and volume of distribution (0.466 mL/kg) fall far outside physiological windows for remimazolam, consistent with a unit or scale extraction error. The reported unit could not be converted to SI, so the parameter values reached the record without SI values. The metabolite compartment count is 0, leaving the metabolite structure unspecified. Extracted — remimazolam: t1/2z 0.389 min, AUCt 0.013 μg min/mL, AUC∞ 0.01 μg min/mL, kel 0.136 L/min, V 0.466 mL/kg, CL 0.149 mL/min/kg, MRT 0.268 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has remimazolam, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t 1/2 (min) | `Q57` · t1/2z | 0.389 | min | 23.34 | s | min | space_fold (0.95) | prp270130-tbl-0002:row2:col5, prp270130-tbl-0002:row10:col5 |
| AUC0–t (μg min/mL) | `Q19` · AUCt | 0.013 | μg min/mL |  |  | (min·µg)/ml | exact (1) | prp270130-tbl-0002:row3:col5, prp270130-tbl-0002:row11:col5 |
| AUC0–∞ (μg min/mL) | `Q17` · AUC∞ | 0.010 | μg min/mL |  |  | (min·µg)/ml | exact (1) | prp270130-tbl-0002:row4:col5, prp270130-tbl-0002:row12:col5 |
| λz (L/min) | `Q47` · kel | 0.136 | L/min |  |  | l/min | exact (1) | prp270130-tbl-0002:row5:col5, prp270130-tbl-0002:row13:col5 |
| V d (mL/kg) | `Q61` · V | 0.466 | mL/kg | 3.262e-05 | m3 | ml/kg | space_fold (0.95) | prp270130-tbl-0002:row6:col5, prp270130-tbl-0002:row14:col5 |
| CL (mL/min/kg) | `Q22` · CL | 0.149 | mL/min/kg | 1.738e-07 | m3/s | ml/(min·kg) | exact (1) | prp270130-tbl-0002:row7:col5, prp270130-tbl-0002:row15:col5 |
| MRT (min) | `Q53` · MRT | 0.268 | min | 16.08 | s | min | exact (1) | prp270130-tbl-0002:row8:col5, prp270130-tbl-0002:row16:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Parameters' — extend the ontology if this is a real PK parameter (source ['prp270130-tbl-0002:row0:col2', 'prp270130-tbl-0002:row0:col3', 'prp270130-tbl-0002:row0:col4'])
- unit_dimension_unknown: 'μg min/mL' (AUCt)
- unit_dimension_unknown: 'μg min/mL' (AUC∞)
- unit_dimension_mismatch: 'λz (L/min)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped value-less row: 'AUC0–∞'
- dropped value-less row: 'AUC0–t'
- dropped value-less row: 'CL'
- dropped value-less row: 'MRT'
- dropped value-less row: 't 1/2'
- dropped value-less row: 'V d'
- implicit units: 'AUC0–t (μg min/mL)' — the LLM proposed 'μg min/mL', whose dimension does not fit Q19; left unset
- implicit units: 'AUC0–∞ (μg min/mL)' — the LLM proposed 'μg min/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remimazolam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 14/14 row label(s) assigned, 0 linked by role; re-tagged remimazolam→remimazolam metabolite ×6
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp270130-tbl-0002:row2:col1 = '101.79 [77.00, 155.09]'
- unparsed cell prp270130-tbl-0002:row2:col2 = '108.69 [75.59, 150.21]'
- unparsed cell prp270130-tbl-0002:row2:col3 = '115.51 [86.35, 218.89]'
- unparsed cell prp270130-tbl-0002:row2:col4 = '92.12 [62.35, 167.48]'
- unparsed cell prp270130-tbl-0002:row3:col1 = '370.29 [172.99, 623.97]'
- unparsed cell prp270130-tbl-0002:row3:col2 = '136.53 [95.66, 513.86]'
- unparsed cell prp270130-tbl-0002:row3:col3 = '360.89 [209.584, 876.04]'
- unparsed cell prp270130-tbl-0002:row3:col4 = '464.53 [372.09, 546.49]'
- unparsed cell prp270130-tbl-0002:row4:col1 = '401.96 [177.22, 712.33]'
- unparsed cell prp270130-tbl-0002:row4:col2 = '138.09 [98.09, 518.40]'
- unparsed cell prp270130-tbl-0002:row4:col3 = '365.40 [215.47, 1084.21]'
- unparsed cell prp270130-tbl-0002:row4:col4 = '461.53 [375.25, 562.00]'
- unparsed cell prp270130-tbl-0002:row5:col1 = '0.006 [0.004, 0.009]'
- unparsed cell prp270130-tbl-0002:row5:col2 = '0.006 [0.004, 0.009]'
- unparsed cell prp270130-tbl-0002:row5:col3 = '0.006 [0.003, 0.008]'
- unparsed cell prp270130-tbl-0002:row5:col4 = '0.007 [0.005, 0.01]'
- unparsed cell prp270130-tbl-0002:row6:col1 = '2656.58 [2147.14, 4028.14]'
- unparsed cell prp270130-tbl-0002:row6:col2 = '2524.34 [942.25, 3587.22]'
- unparsed cell prp270130-tbl-0002:row6:col3 = '2585.83 [2239.25, 4361.87]'
- unparsed cell prp270130-tbl-0002:row6:col4 = '3047.07 [2243.05, 5326.41]'
- unparsed cell prp270130-tbl-0002:row7:col1 = '22.23 [11.68, 31.83]'
- unparsed cell prp270130-tbl-0002:row7:col2 = '17.92 [6.01, 24.52]'
- unparsed cell prp270130-tbl-0002:row7:col3 = '19.70 (6.69, 33.45)'
- unparsed cell prp270130-tbl-0002:row7:col4 = '26.00 (21.38, 31.98)'
- unparsed cell prp270130-tbl-0002:row8:col1 = '78.51 [66.00, 90.58]'
- unparsed cell prp270130-tbl-0002:row8:col2 = '75.70 [66.03, 84.61]'
- unparsed cell prp270130-tbl-0002:row8:col3 = '89.87 [70.64, 101.27]'
- unparsed cell prp270130-tbl-0002:row8:col4 = '70.84 [57.61, 83.70]'
- unparsed cell prp270130-tbl-0002:row10:col1 = '656.02 [363.66, 1219.28]'
- unparsed cell prp270130-tbl-0002:row10:col2 = '435.99 [249.09, 1379.09]'
- unparsed cell prp270130-tbl-0002:row10:col3 = '656.02 [520.81, 1233.96]'
- unparsed cell prp270130-tbl-0002:row10:col4 = '708.89 [454.07, 1630.50]'
- unparsed cell prp270130-tbl-0002:row11:col1 = '5145.10 [3636.00, 10227.66]'
- unparsed cell prp270130-tbl-0002:row11:col2 = '3653.46[2729.65, 4221.03]'
- unparsed cell prp270130-tbl-0002:row11:col3 = '8550.49 [3786.87, 10391.08]'
- unparsed cell prp270130-tbl-0002:row11:col4 = '11063.64 [7939.58, 13444.99]'
- unparsed cell prp270130-tbl-0002:row12:col1 = '12834.54 [5947.28, 30552.86]'
- unparsed cell prp270130-tbl-0002:row12:col2 = '6256.00 [4234.82, 12278.36]'
- unparsed cell prp270130-tbl-0002:row12:col3 = '9698.90 [6353.84, 40974.70]'
- unparsed cell prp270130-tbl-0002:row12:col4 = '23435.96 [12039.16, 64757.68]'
- unparsed cell prp270130-tbl-0002:row13:col1 = '0.0009 [0.0004, 0.0014]'
- unparsed cell prp270130-tbl-0002:row13:col2 = '0.0013 [0.0005, 0.0023]'
- unparsed cell prp270130-tbl-0002:row13:col3 = '0.0008 [0.0004, 0.0012]'
- unparsed cell prp270130-tbl-0002:row13:col4 = '0.0009 [0.0004, 0.0013]'
- unparsed cell prp270130-tbl-0002:row14:col1 = '574.08 [417.32, 786.64]'
- unparsed cell prp270130-tbl-0002:row14:col2 = '412.66 [245.14, 575.69]'
- unparsed cell prp270130-tbl-0002:row14:col3 = '742.23 [404.28, 1418.18]'
- unparsed cell prp270130-tbl-0002:row14:col4 = '646.31 [499.36, 786.64]'
- unparsed cell prp270130-tbl-0002:row15:col1 = '0.49 [0.31, 0.80]'
- unparsed cell prp270130-tbl-0002:row15:col2 = '0.38 [0.20, 0.57]'
- unparsed cell prp270130-tbl-0002:row15:col3 = '0.74 [0.23, 1.44]'
- unparsed cell prp270130-tbl-0002:row15:col4 = '0.51 [0.28, 1.05]'
- unparsed cell prp270130-tbl-0002:row16:col1 = '645.96 [370.38, 1632.42]'
- unparsed cell prp270130-tbl-0002:row16:col2 = '710.09 [201.48, 4840.98]'
- unparsed cell prp270130-tbl-0002:row16:col3 = '706.15 [416.26, 1985.09]'
- unparsed cell prp270130-tbl-0002:row16:col4 = '642.69 [321.58, 3200.00]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf]` | 0.010 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 0.010 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` | 0.013 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` |  | 0.013 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.149 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.149 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 0.268 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` |  | 0.268 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 0.389 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` |  | 0.389 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d]` | 0.466 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d]` |  | 0.466 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` | 0.136 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` |  | 0.136 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | remimazolam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | remimazolam | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['prp270130-tbl-0002:row7:col5', 'prp270130-tbl-0002:row15:col5'] |
| C5_dimension_Q47 | fail | [length] ** 3 / [time] | L/min | ['prp270130-tbl-0002:row5:col5', 'prp270130-tbl-0002:row13:col5'] |
| C5_dimension_Q53 | pass | [time] |  | ['prp270130-tbl-0002:row8:col5', 'prp270130-tbl-0002:row16:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['prp270130-tbl-0002:row2:col5', 'prp270130-tbl-0002:row10:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['prp270130-tbl-0002:row6:col5', 'prp270130-tbl-0002:row14:col5'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | μg min/mL | ['prp270130-tbl-0002:row4:col5', 'prp270130-tbl-0002:row12:col5'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | μg min/mL | ['prp270130-tbl-0002:row3:col5', 'prp270130-tbl-0002:row11:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.149 | ['prp270130-tbl-0002:row7:col5', 'prp270130-tbl-0002:row15:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.626 L/h | ['prp270130-tbl-0002:row7:col5', 'prp270130-tbl-0002:row15:col5'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0326 L | ['prp270130-tbl-0002:row6:col5', 'prp270130-tbl-0002:row14:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremimazolam%5D%20Remimazolam_Hu2025_reference&body=Drug%3A%20remimazolam%0ARecord%3A%20Remimazolam_Hu2025_reference%0APaper%3A%20Hu_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remimazolam/Remimazolam_Hu2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 21:12 UTC</sub>
