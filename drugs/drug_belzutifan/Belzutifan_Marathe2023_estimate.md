<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belzutifan&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/&quot;},{&quot;label&quot;:&quot;Marathe_2023 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Belzutifan_Marathe2023_arithmetic_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Belzutifan_Marathe2023_geometric_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belzutifan — `Belzutifan_Marathe2023_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the UGT2B17 poor metabolizer covariate effect on clearance is negative, implying an implausible reduction in elimination.

<div class="pk-model-meta" hidden drug="belzutifan" model-id="Belzutifan_Marathe2023_estimate" status="rejected" stale="false" population="patients with VHL disease-associated RCC, CNS hemangioblastomas, and pancreatic neuroendocrine tumors" measured-compound="belzutifan" parameterization="apparent" topology="1C"></div>

## Citation
Marathe DD, Jauslin PM, Kleijn HJ, de Miranda Silva C, Chain A, Bateman T et al. Population pharmacokinetic analyses for belzutifan to inform dosing considerations and labeling. CPT: pharmacometrics & systems pharmacology 12(10):1499–1510 (2023).
  ·  DOI: [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028)

## Population and dosing

**Population:** patients with VHL disease-associated RCC, CNS hemangioblastomas, and pancreatic neuroendocrine tumors · condition von Hippel–Lindau (VHL) disease · age group adult.

**Dosing:** 120 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 5.63 | L/h | 0.15 (None% RSE) |
| V2/F (L) | V2/F | 85.4 | L | 0.013 (None% RSE) |
| Q/F (L/h) | Q/F | 5.37 | L/h |  |
| V3/F (L) | V3/F | 30.38 | L | 0.19 (None% RSE) |
| KA (/h) | kabs | 2.40 | /h | 1.15 (None% RSE) |
| ALAG (h) | tlag | 0.16 | h |  |
| cl_ugt2b17_extensive_metabolizers | cl_ugt2b17_extensive_metabolizers | 0.39 |  |  |
| cl_ugt2b17_poor_metabolizers | cl_ugt2b17_poor_metabolizers | -0.24 |  |  |
| f_ugt2b17_poor_metabolizers | f_ugt2b17_poor_metabolizers | 0.11 |  |  |
| CL‐AGE | CL | -0.36 |  |  |
| theta_cl_cyp2c19 | theta_cl_cyp2c19 | -0.36 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.476). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the UGT2B17 poor metabolizer covariate effect on clearance is negative, implying an implausible reduction in elimination.**

The parameter cl_ugt2b17_poor_metabolizers has a value of -0.24, which represents a negative shift in clearance for this genetic subgroup. This negative covariate effect contradicts the expected pharmacokinetic behavior where poor metabolizers typically exhibit reduced clearance. The review identified this negative value as an implausible base value or shift, leading to the rejection of the model. Extracted — belzutifan: CL/F 5.63 L/h, V2/F 85.4 L, Q/F 5.37 L/h, V3/F 30.4 L, kabs 2.4 /h, tlag 0.16 h, CL -0.36.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has belzutifan, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 5.63 | L/h | 1.564e-06 | m3/s | l/h | exact (1) | psp413028-tbl-0002:row2:col1 | 0.15 (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 85.4 | L | 0.0854 | m3 | l | exact (1) | psp413028-tbl-0002:row3:col1 | 0.013 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 5.37 | L/h | 1.492e-06 | m3/s | l/h | exact (1) | psp413028-tbl-0002:row4:col1 |  |
| V3/F (L) | `Q78` · V3/F | 30.38 | L | 0.03038 | m3 | l | exact (1) | psp413028-tbl-0002:row5:col1 | 0.19 (None% RSE) |
| KA (/h) | `Q49` · kabs | 2.40 | /h | 0.0006667 | 1/s | 1/h | exact (1) | psp413028-tbl-0002:row6:col1 | 1.15 (None% RSE) |
| ALAG (h) | `Q83` · tlag | 0.16 | h | 576 | s | h | exact (1) | psp413028-tbl-0002:row7:col1 |  |
| cl_ugt2b17_extensive_metabolizers | `Q900` · cl_ugt2b17_extensive_metabolizers | 0.39 |  |  |  |  |  | psp413028-tbl-0002:row11:col1 |  |
| cl_ugt2b17_poor_metabolizers | `Q900` · cl_ugt2b17_poor_metabolizers | -0.24 |  |  |  |  |  | psp413028-tbl-0002:row12:col1 |  |
| f_ugt2b17_poor_metabolizers | `Q900` · f_ugt2b17_poor_metabolizers | 0.11 |  |  |  |  |  | psp413028-tbl-0002:row14:col1 |  |
| CL‐AGE | `Q22` · CL | -0.36 |  |  |  |  | llm_confirmed (0.6) | psp413028-tbl-0002:row17:col1 |  |
| theta_cl_cyp2c19 | `Q900` · theta_cl_cyp2c19 | -0.36 |  |  |  |  |  | psp413028-tbl-0002:row13:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'RES HV' routed out of structural estimates ('Residual error')
- table section residual_error: 'RES PAT' routed out of structural estimates ('Residual error')
- table section residual_error: 'EPS' routed out of structural estimates ('Residual error')
- dropped duplicate Q49 ('KA‐FED', value '-0.88') — already have one for this compound
- dropped unlinked row (NIL): 'CL‐WT' — extend the ontology if this is a real PK parameter (source ['psp413028-tbl-0002:row9:col1'])
- dropped unlinked row (NIL): 'V‐WT' — extend the ontology if this is a real PK parameter (source ['psp413028-tbl-0002:row10:col1'])
- covariate level 'CL‐UGT2B17 extensive metabolizers' → Q900:cl_ugt2b17_extensive_metabolizers = 0.39 (linear_fractional on Q27)
- covariate level 'CL‐UGT2B17 poor metabolizers' → Q900:cl_ugt2b17_poor_metabolizers = -0.24 (linear_fractional on Q27)
- covariate level 'F‐UGT2B17 poor metabolizers' → Q900:f_ugt2b17_poor_metabolizers = 0.11 (linear_fractional on Q27)
- dropped duplicate Q49 ('KA‐FORM', value '-0.47') — already have one for this compound
- dropped unlinked row (NIL): 'V‐AGE' — extend the ontology if this is a real PK parameter (source ['psp413028-tbl-0002:row16:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=belzutifan
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- bound model equation to Q40 (Fab): F = CL/Fpop * (WT/73.64)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'estimate' subgroup of Marathe_2023 (paper reports 4 populations: absolute parameter value, arithmetic mean, estimate, geometric mean)

**Extraction notes:**
- unparsed cell psp413028-tbl-0002:row2:col3 = '5.25; 6.00'
- unparsed cell psp413028-tbl-0002:row3:col3 = '80.55; 90.26'
- unparsed cell psp413028-tbl-0002:row4:col3 = '3.89; 6.85'
- unparsed cell psp413028-tbl-0002:row5:col3 = '26.42; 34.34'
- unparsed cell psp413028-tbl-0002:row6:col3 = '2.04; 2.76'
- unparsed cell psp413028-tbl-0002:row7:col3 = '0.16; 0.17'
- unparsed cell psp413028-tbl-0002:row8:col3 = '−1.00; −0.75'
- unparsed cell psp413028-tbl-0002:row9:col3 = '0.45; 0.84'
- unparsed cell psp413028-tbl-0002:row10:col3 = '0.98; 1.14'
- unparsed cell psp413028-tbl-0002:row11:col3 = '0.24; 0.54'
- unparsed cell psp413028-tbl-0002:row12:col3 = '−0.34; −0.15'
- unparsed cell psp413028-tbl-0002:row13:col3 = '−0.47; −0.25'
- unparsed cell psp413028-tbl-0002:row14:col3 = '0.061;0.16'
- unparsed cell psp413028-tbl-0002:row15:col3 = '−0.79; −0.15'
- unparsed cell psp413028-tbl-0002:row16:col3 = '−0.30; −0.11'
- unparsed cell psp413028-tbl-0002:row17:col3 = '−0.52; −0.20'
- unparsed cell psp413028-tbl-0002:row19:col3 = '0.11; 0.18'
- unparsed cell psp413028-tbl-0002:row20:col3 = '0.0064; 0.019'
- unparsed cell psp413028-tbl-0002:row21:col3 = '0.052; 0.33'
- unparsed cell psp413028-tbl-0002:row22:col3 = '0.78; 1.52'
- unparsed cell psp413028-tbl-0002:row24:col3 = '0.24; 0.28'
- unparsed cell psp413028-tbl-0002:row25:col3 = '0.27; 0.31'
- unparsed cell Marathe_2023_table_3:row0:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row2:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row4:col1 = 'UGT2B17 (intermediate)'
- unparsed cell Marathe_2023_table_3:row4:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row5:col1 = 'UGT2B17 (extensive)'
- unparsed cell Marathe_2023_table_3:row6:col1 = 'UGT2B17 (poor)'
- unparsed cell Marathe_2023_table_3:row7:col1 = 'CYP2C19 (extensive)'
- unparsed cell Marathe_2023_table_3:row7:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row8:col1 = 'CYP2C19 (poor)'
- unparsed cell Marathe_2023_table_3:row9:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row10:col1 = 'UGT2B17 (poor)'
- companion parameter table 3 transcribed (18 record(s))
- transposed table Marathe_2023_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (5 record(s))
- companion parameter table 5 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- captured model equation F = CL/Fpop * (WT/73.64)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.476 (10/21 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl_ugt2b17_extensive_metabolizers]` | 0.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ugt2b17_poor_metabolizers]` | -0.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl‐age]` | -0.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl‐wt]` |  | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_ugt2b17]` |  | 0.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v‐wt]` |  | 1.06 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | belzutifan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | belzutifan | unknown | mismatch |

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
| C2_base_sign_Q22 | fail |  | -0.36 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413028-tbl-0002:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413028-tbl-0002:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp413028-tbl-0002:row4:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['psp413028-tbl-0002:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp413028-tbl-0002:row3:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp413028-tbl-0002:row7:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['psp413028-tbl-0002:row17:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.63 L/h | ['psp413028-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 85.4 L | ['psp413028-tbl-0002:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelzutifan%5D%20Belzutifan_Marathe2023_estimate&body=Drug%3A%20belzutifan%0ARecord%3A%20Belzutifan_Marathe2023_estimate%0APaper%3A%20Marathe_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belzutifan/Belzutifan_Marathe2023_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 23:24 UTC</sub>
