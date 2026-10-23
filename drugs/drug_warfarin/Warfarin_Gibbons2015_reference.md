<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Gibbons_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Aoyama_2022_INR&quot;,&quot;label&quot;:&quot;Aoyama_2022 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Aoyama_2022_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hirai_2024_PT_INR&quot;,&quot;label&quot;:&quot;Hirai_2024 \u00b7 PT-INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Hirai_2024_PT_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Gibbons2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The enzalutamide model was rejected because its metabolites are unreachable, and a parameter's unit could not be converted to standard SI.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Gibbons2015_reference" status="rejected" stale="false" population="healthy male subjects" measured-compound="enzalutamide" parameterization="apparent" topology="general_linear"></div>

## Citation
Gibbons JA, de Vries M, Krauwinkel W, Ohtsu Y, Noukens J, van der Walt JS et al. Pharmacokinetic Drug Interaction Studies with Enzalutamide. Clinical pharmacokinetics 54(10):1057–1069 (2015).
  ·  DOI: [10.1007/s40262-015-0283-1](https://doi.org/10.1007/s40262-015-0283-1)

## Population and dosing

**Population:** healthy male subjects · age group adult · n = 47.

**Dosing:** 160 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC∞ (ng·h/mL) | AUC∞ | 9.19 | ng·h/mL |
| C max (ng/mL) | Cmax | 3.22 | ng/mL |
| C trough (μg/mL)a | Ctrough | 12.0 | μg/mL |
| AUCτ (μg·h/mL)a | AUCt | 322 | μg·h/mL |
| CL/F (L/h)a | CL/F | 0.52 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The enzalutamide model was rejected because its metabolites are unreachable, and a parameter's unit could not be converted to standard SI.**

Although metabolism links exist from enzalutamide to its metabolites, the parent compound itself has no path from the dose, leaving the metabolites as orphan compartments. The second reader disagreed on the AUC∞ value (30.0 vs 9.19 ng·h/mL) and Cmax (9.45 vs 3.22 ng/mL), but these discrepancies do not address the structural defect. A reported unit for one parameter could not be converted to standard SI units, preventing its value from being standardized for analysis. Extracted — warfarin: AUC∞ 9.19 ng·h/mL, Cmax 3.22 ng/mL, Ctrough 12 μg/mL, AUCt 322 μg·h/mL, CL/F 0.52 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has enzalutamide → n-desmethyl enzalutamide (metabolism); enzalutamide → enzalutamide carboxylic acid metabolite (metabolism); n-desmethyl enzalutamide → enzalutamide carboxylic acid metabolite (metabolism), the second reading enzalutamide → n-desmethyl enzalutamide (metabolism); enzalutamide → enzalutamide carboxylic acid metabolite (metabolism); n-desmethyl enzalutamide → enzalutamide carboxylic acid metabolite (metabolism) …; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC∞ (ng·h/mL) | `Q17` · AUC∞ | 9.19 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Tab6:row3:col1, Tab6:row3:col2, Tab6:row6:col1, Tab6:row6:col2, Tab6:row9:col1, Tab6:row9:col2, Tab6:row12:col1, Tab6:row12:col2, Tab6:row15:col1, Tab6:row15:col2 |
| C max (ng/mL) | `Q32` · Cmax | 3.22 | ng/mL |  |  | ng/ml | space_fold (0.95) | Tab6:row4:col1, Tab6:row4:col2, Tab6:row7:col1, Tab6:row7:col2, Tab6:row10:col1, Tab6:row10:col2, Tab6:row13:col1, Tab6:row13:col2, Tab6:row16:col1, Tab6:row16:col2 |
| C trough (μg/mL)a | `Q37` · Ctrough | 12.0 | μg/mL |  |  | μg/mL | llm_confirmed (0.6) | Gibbons_2015_table_4:row0:col1, Gibbons_2015_table_4:row0:col2, Gibbons_2015_table_4:row0:col3, Gibbons_2015_table_4:row0:col4 |
| AUCτ (μg·h/mL)a | `Q19` · AUCt | 322 | μg·h/mL |  |  | μg·h/mL | llm_confirmed (0.6) | Gibbons_2015_table_4:row3:col1, Gibbons_2015_table_4:row3:col2, Gibbons_2015_table_4:row3:col3, Gibbons_2015_table_4:row3:col4 |
| CL/F (L/h)a | `Q27` · CL/F | 0.52 | L/h | 1.444e-07 | m3/s | L/h | llm_confirmed (0.6) | Gibbons_2015_table_4:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CYP substrate metabolite and exposure parameter'
- dropped duplicate Q32 ('C max (μg/mL)a', value '16.6') — already have one for this compound
- implicit units: 'C trough (μg/mL)a' → μg/mL (from the paper text: "Table 4 header explicitly lists 'C trough (μg/mL)a'.")
- implicit units: 'AUCτ (μg·h/mL)a' → μg·h/mL (from the paper text: "Table 4 header explicitly lists 'AUCτ (μg·h/mL)a'.")
- implicit units: 'CL/F (L/h)a' → L/h (from the paper text: "Table 4 header explicitly lists 'CL/F (L/h)a'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enzalutamide
- topology: 3 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 1 linked by role; re-tagged N-desmethyl enzalutamide→parent ×6
- molar mass: 'enzalutamide carboxylic acid metabolite' ('enzalutamide carboxylic acid metabolite') not found in PubChem — left in mass units
- molar mass: none found for 'enzalutamide carboxylic acid metabolite' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'enzalutamide', not warfarin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab6:row3:col3 = '0.63 (0.52–0.77)'
- unparsed cell Tab6:row4:col3 = '0.60 (0.52–0.70)'
- unparsed cell Tab6:row6:col3 = '0.47 (0.35–0.63)'
- unparsed cell Tab6:row7:col3 = '0.83 (0.71–0.99)'
- unparsed cell Tab6:row9:col3 = '0.55 (0.51–0.58)'
- unparsed cell Tab6:row10:col3 = '0.99 (0.93–1.05)'
- unparsed cell Tab6:row12:col3 = '0.46 (0.39–0.53)'
- unparsed cell Tab6:row13:col3 = '0.64 (0.50–0.83)'
- unparsed cell Tab6:row15:col3 = '0.24 (0.20–0.28)'
- unparsed cell Tab6:row16:col3 = '0.29 (0.24–0.35)'
- transposed table Gibbons_2015_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (13 record(s))
- LLM selected parameter table(s) 4
- LLM region Gibbons_2015:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['enzalutamide', 'n-desmethyl enzalutamide', 'metabolism'], ['enzalutamide', 'enzalutamide carboxylic acid metabolite', 'metabolism'], ['n-desmethyl enzalutamide', 'enzalutamide carboxylic acid metabolite', 'metabolism']] | [['enzalutamide', 'n-desmethyl enzalutamide', 'metabolism'], ['enzalutamide', 'enzalutamide carboxylic acid metabolite', 'metabolism'], ['n-desmethyl enzalutamide', 'enzalutamide carboxylic acid metabolite', 'metabolism'], ['warfarin', '7-hydroxy-s-warfarin', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[aucτ (ug h/ml)a].parameter_id` | Q19 | Q18 | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab6:row3:col1', 'Tab6:row3:col2', 'Tab6:row6:col1', 'Tab6:row6:col2', 'Tab6:row9:col1', 'Tab6:row9:col2', 'Tab6:row12:col1', 'Tab6:row12:col2', 'Tab6:row15:col1', 'Tab6:row15:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Gibbons_2015_table_4:row3:col1', 'Gibbons_2015_table_4:row3:col2', 'Gibbons_2015_table_4:row3:col3', 'Gibbons_2015_table_4:row3:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Gibbons_2015_table_4:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab6:row4:col1', 'Tab6:row4:col2', 'Tab6:row7:col1', 'Tab6:row7:col2', 'Tab6:row10:col1', 'Tab6:row10:col2', 'Tab6:row13:col1', 'Tab6:row13:col2', 'Tab6:row16:col1', 'Tab6:row16:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Gibbons_2015_table_4:row0:col1', 'Gibbons_2015_table_4:row0:col2', 'Gibbons_2015_table_4:row0:col3', 'Gibbons_2015_table_4:row0:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.52 L/h | ['Gibbons_2015_table_4:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Gibbons2015_reference&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Gibbons2015_reference%0APaper%3A%20Gibbons_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Gibbons2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-27 11:39 UTC</sub>
