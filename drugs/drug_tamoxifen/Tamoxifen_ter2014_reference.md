<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;tamoxifen&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/&quot;},{&quot;label&quot;:&quot;ter_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tamoxifen_Bosch2023_reference&quot;,&quot;label&quot;:&quot;Bosch_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Bosch2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tamoxifen_Xu2026_reference&quot;,&quot;label&quot;:&quot;Xu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Xu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tamoxifen_MuellerSchoell2020_reference&quot;,&quot;label&quot;:&quot;Mueller-Schoell_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_MuellerSchoell2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Croxtall_1994_A549_cell_proliferation&quot;,&quot;label&quot;:&quot;Croxtall_1994 \u00b7 A549 cell proliferation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/pd_Croxtall_1994_A549_cell_proliferation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Montenegro_2011_vasorelaxation&quot;,&quot;label&quot;:&quot;Montenegro_2011 \u00b7 vasorelaxation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/pd_Montenegro_2011_vasorelaxation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tamoxifen — `Tamoxifen_ter2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model for tamoxifen includes dextromethorphan metabolites that are unlinked from the dose.

<div class="pk-model-meta" hidden drug="tamoxifen" model-id="Tamoxifen_ter2014_reference" status="rejected" stale="false" population="breast cancer patients" measured-compound="tamoxifen, endoxifen" parameterization="mechanistic" topology="general_linear"></div>

## Citation
ter Heine R, Binkhorst L, de Graan AJ, de Bruijn P, Beijnen JH, Mathijssen RH et al. Population pharmacokinetic modelling to assess the impact of CYP2D6 and CYP3A metabolic phenotypes on the pharmacokinetics of tamoxifen and endoxifen. British journal of clinical pharmacology 78(3):572–586 (2014).
  ·  DOI: [10.1111/bcp.12388](https://doi.org/10.1111/bcp.12388)

## Population and dosing

**Population:** breast cancer patients · condition breast cancer · age group adult · n = — 120. The text states: 'We assessed the CYP2D6 and CYP3A metabolic phenotypes in 40 breast cancer patients...' and later 'The parameter precision was good for all relevant parameters, as represented in the low relative standard error of the parameter estimates, indicating that all parameters could be reliably estimated.' The n_subjects for the analysis is 40..

**Dosing:** 20, 40 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed tamoxifen, dextromethorphan, measured tamoxifen, endoxifen.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Central Vd dextromethorphan (l) | V1 | 188 | l | 32.4 |  |
| Peripheral Vd dextromethorphan (l) | V2 | 1660 | l | 16.8 |  |
| k12 (h -1 ) | kabs | 0.213 | h -1 | 7.6 | 31 (39.7% RSE) |
| tlag (h) | tlag | 0.369 | h | 3.7 |  |
| CL2D6,1 (l h -1 ) | CL | 1560 | l h -1 | 27.8 |  |
| CL2D6,2 (l h -1 ) | CL | 362 | l h -1 | 46.1 |  |
| CL3A4,1 (l h -1 ) | CL | 44.7 | l h -1 | 26 |  |
| Q1 (l h -1 ) | Q | 415 | l h -1 | 22.1 |  |
| Q2 (l h -1 ) | Q2 | 200 | l h -1 | 37.3 |  |
| k57 (h -1 ) | kel | 1.11 | h -1 | 19.5 |  |
| k68 (h -1 ) | kel | 13.4 | h -1 | 12.4 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model for tamoxifen includes dextromethorphan metabolites that are unlinked from the dose.**

The model record lists dextromethorphan and its metabolites but assigns them to the central compartment without connecting them to the administered tamoxifen dose. This structural inconsistency results in orphan compartments that cannot be reached from the input. The rejection is due to this topological failure where the secondary drug molecules have no path from the dose. Extracted — dextromethorphan: V1 188 l, V2 1.66e+03 l, kabs 0.213 h -1, tlag 0.369 h, Q 415 l h -1, Q2 200 l h -1; dextrorphan: CL 1.56e+03 l h -1; 3-hydroxymorphinan: CL 362 l h -1, kel 1.11 h -1; 3-methoxymorphinan: CL 44.7 l h -1, kel 13.4 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tamoxifen, dextromethorphan, the second reading tamoxifen; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Central Vd dextromethorphan (l) | `Q63` · V1 | 188 | l | 0.188 | m3 | l | 32.4 | llm_confirmed (0.6) | ter_2014_table_1:row0:col1 |  |
| Peripheral Vd dextromethorphan (l) | `Q64` · V2 | 1660 | l | 1.66 | m3 | l | 16.8 | llm_confirmed (0.6) | ter_2014_table_1:row1:col1 |  |
| k12 (h -1 ) | `Q49` · kabs | 0.213 | h -1 | 5.917e-05 | 1/s | 1/h | 7.6 | exact (1) | ter_2014_table_1:row2:col1 | 31 (39.7% RSE) |
| tlag (h) | `Q83` · tlag | 0.369 | h | 1328 | s | h | 3.7 | exact (1) | ter_2014_table_1:row3:col1 |  |
| CL2D6,1 (l h -1 ) | `Q22` · CL | 1560 | l h -1 | 0.0004333 | m3/s | l/h | 27.8 | exact (1) | ter_2014_table_1:row4:col1 |  |
| CL2D6,2 (l h -1 ) | `Q22` · CL | 362 | l h -1 | 0.0001006 | m3/s | l/h | 46.1 | exact (1) | ter_2014_table_1:row5:col1 |  |
| CL3A4,1 (l h -1 ) | `Q22` · CL | 44.7 | l h -1 | 1.242e-05 | m3/s | l/h | 26 | exact (1) | ter_2014_table_1:row6:col1 |  |
| Q1 (l h -1 ) | `Q30` · Q | 415 | l h -1 | 0.0001153 | m3/s | l/h | 22.1 | exact (1) | ter_2014_table_1:row9:col1 |  |
| Q2 (l h -1 ) | `Q99` · Q2 | 200 | l h -1 | 5.556e-05 | m3/s | l/h | 37.3 | second_intercompartmental (0.9) | ter_2014_table_1:row10:col1 |  |
| k57 (h -1 ) | `Q47` · kel | 1.11 | h -1 | 0.0003083 | 1/s | 1/h | 19.5 | exact (1) | ter_2014_table_1:row11:col1 |  |
| k68 (h -1 ) | `Q47` · kel | 13.4 | h -1 | 0.003722 | 1/s | 1/h | 12.4 | exact (1) | ter_2014_table_1:row13:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 1 row(s) → dextrorphan (name 1)
- table section iiv: 'IIV CL3A4,2 (shrinkage)' routed out of structural estimates ('IIV CL3A4,1 (shrinkage) 89.8% (19.8%) 49.3%')
- table section iiv: 'IIV CLHM (shrinkage)' routed out of structural estimates ('IIV CL3A4,1 (shrinkage) 89.8% (19.8%) 49.3%')
- table section iiv: 'Residual error dextromethorphan (shrinkage)' routed out of structural estimates ('IIV CL3A4,1 (shrinkage) 89.8% (19.8%) 49.3%')
- table section iiv: 'Residual error dextrorphan (shrinkage)' routed out of structural estimates ('IIV CL3A4,1 (shrinkage) 89.8% (19.8%) 49.3%')
- table section iiv: 'Residual error 3-methoxymorphinan (shrinkage) 29.7% (9.2%)' routed out of structural estimates ('IIV CL3A4,1 (shrinkage) 89.8% (19.8%) 49.3%')
- table section iiv: 'Residual error 3-hydroxymorphinan (shrinkage) 30.7% (7%)' routed out of structural estimates ('IIV CL3A4,1 (shrinkage) 89.8% (19.8%) 49.3%')
- table section iiv: 'Condition number' routed out of structural estimates ('IIV CL3A4,1 (shrinkage) 89.8% (19.8%) 49.3%')
- dropped duplicate Q22 ('CL3A4,2 (l h -1 )', value '1840') — already have one for this compound
- dropped duplicate Q22 ('CLHM (l h -1 )', value '5730') — already have one for this compound
- 'Q2 (l h -1 )' linked to Q99: a second intercompartmental clearance beside the Q30 already present
- dropped duplicate Q47 ('k75 (h -1 )', value '0.0815') — already have one for this compound
- dropped duplicate Q47 ('k86 (h -1 )', value '0.0637') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Central Vd dextromethorphan (l)); Q64 (Peripheral Vd dextromethorphan (l)); Q22 (CL2D6,1 (l h -1 )); Q22 (CL2D6,2 (l h -1 )); Q22 (CL3A4,1 (l h -1 )); Q30 (Q1 (l h -1 )); Q99 (Q2 (l h -1 ))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tamoxifen, endoxifen
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 4 metabolites — the templates hold two (site hepatic: 'The drug concentration in the hypothetical liver compartment is denoted by CL and is described with the following equati')
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 15 linked by role; re-tagged parent→dextromethorphan ×8, parent→dextrorphan ×2, parent→3-hydroxymorphinan ×8, parent→3-methoxymorphinan ×4
- molar mass: no plausible PubChem entry for 'tamoxifen, endoxifen' ('no full name in the paper') — left in mass units
- molar mass: none found for 'tamoxifen, endoxifen' — its concentrations stay mass-only

**Extraction notes:**
- table tab_1: no_numeric_grid
- final table tab_1: no supported point estimates; targeted recovery unresolved
- table ter_2014_table_1: conflicting_units
- table ter_2014_table_1: ragged_grid
- table ter_2014_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (43 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (22/33 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl2d6,1].parameter_id` | Q22 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[cl2d6,2].parameter_id` | Q22 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[cl3a4,1].parameter_id` | Q22 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[clhm]` |  | 5730 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k57]` | 1.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k57]` |  | 1.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k68].parameter_id` | Q47 | Q305 | mismatch |
| `gpt-oss-120b` | `parameters[k75]` |  | 0.0815 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k86]` |  | 0.0637 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tamoxifen, dextromethorphan | tamoxifen | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tamoxifen, endoxifen | tamoxifen | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ter_2014_table_1:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ter_2014_table_1:row5:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ter_2014_table_1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['ter_2014_table_1:row9:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['ter_2014_table_1:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['ter_2014_table_1:row13:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['ter_2014_table_1:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['ter_2014_table_1:row0:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['ter_2014_table_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['ter_2014_table_1:row3:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['ter_2014_table_1:row10:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1560 | ['ter_2014_table_1:row4:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CL2D6,1', 'CLCYP3A,1', 'CLCYP3A,2', 'CL2D6,2'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.56e+03 L/h | ['ter_2014_table_1:row4:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 362 L/h | ['ter_2014_table_1:row5:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 44.7 L/h | ['ter_2014_table_1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 188 L | ['ter_2014_table_1:row0:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.66e+03 L | ['ter_2014_table_1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btamoxifen%5D%20Tamoxifen_ter2014_reference&body=Drug%3A%20tamoxifen%0ARecord%3A%20Tamoxifen_ter2014_reference%0APaper%3A%20ter_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tamoxifen/Tamoxifen_ter2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 12:05 UTC</sub>
