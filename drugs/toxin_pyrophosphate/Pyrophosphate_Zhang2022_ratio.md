<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Pyrophosphate&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrophosphate/&quot;},{&quot;label&quot;:&quot;Zhang_2022 \u00b7 ratio&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyrophosphate_Tanaudommongkon2022_reference&quot;,&quot;label&quot;:&quot;Tanaudommongkon_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrophosphate/Pyrophosphate_Tanaudommongkon2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pyrophosphate — `Pyrophosphate_Zhang2022_ratio`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="Pyrophosphate" model-id="Pyrophosphate_Zhang2022_ratio" status="not_simulated" stale="false" population="healthy adults and hemodialysis-dependent stage 5 chronic kidney disease (CKD-5HD) patients" measured-compound="total serum iron (element of ferric pyrophosphate)" parameterization="apparent" topology="general_linear"></div>

## Citation
Zhang L, Gan L, Li K, Xie P, Tan Y, Wei G et al. Ethnicity evaluation of ferric pyrophosphate citrate among Asian and Non-Asian populations: a population pharmacokinetics analysis. European journal of clinical pharmacology 78(9):1421-1434 (2022).
  ·  DOI: [10.1007/s00228-022-03328-9](https://doi.org/10.1007/s00228-022-03328-9)

## Population and dosing

**Population:** healthy adults and hemodialysis-dependent stage 5 chronic kidney disease (CKD-5HD) patients · condition healthy and hemodialysis-dependent CKD-5HD · age group adult · n = 91.

**Dosed compound ≠ measured compound:** dosed ferric pyrophosphate citrate (Triferic, containing pyrophosphate), measured total serum iron (element of ferric pyrophosphate).

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Cmax(ng/mL) | Cmax | 1.55 | ng/mL |  |
| CL, L/h | CL | 0.477 | L/h | 8.2 |
| Vd, L | V | 3.62 | L | 7.0 |
| CL/F, L/h | CL/F | 0.982 | L/h | 6.3 |
| Vd/F, L | V/F | 3.32 | L | 3.5 |
| AUC0-4 h (h ng/mL) | AUCt | 139.5 | h ng/mL |  |
| AUC0-24 h (h ng/mL) | AUC | 101.6 | h ng/mL |  |
| AUC0-∞ (h ng/mL) | AUC∞ | 101.2 | h ng/mL |  |
| ka | kabs | 1.17 | 1/s |  |
| ALAG | tlag | 0.522 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.312). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; t3_param_coverage.**

Extracted — pyrophosphate: Cmax 1.55 ng/mL, CL 0.477 L/h, V 3.62 L, CL/F 0.982 L/h, V/F 3.32 L, AUCt 140 h ng/mL, AUC 102 h ng/mL, AUC∞ 101 h ng/mL; total serum iron (element of ferric pyrophosphate): kabs 1.17 1/s, tlag 0.522 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has ferric pyrophosphate citrate (Triferic, containing pyrophosphate), the second reading ferric pyrophosphate citrate; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Cmax(ng/mL) | `Q32` · Cmax | 1.55 | ng/mL | 1.55e-06 | kg/m3 | ng/ml |  | exact (1) | Zhang_2022_table_3:row12:col1, Zhang_2022_table_3:row25:col1, Zhang_2022_table_3:row38:col1, Zhang_2022_table_3:row51:col1 |
| CL, L/h | `Q22` · CL | 0.477 | L/h | 1.325e-07 | m3/s | l/h | 8.2 | exact (1) | Tab2:row4:col1 |
| Vd, L | `Q61` · V | 3.62 | L | 0.00362 | m3 | l | 7.0 | exact (1) | Tab2:row5:col1 |
| CL/F, L/h | `Q27` · CL/F | 0.982 | L/h | 2.728e-07 | m3/s | l/h | 6.3 | exact (1) | Tab2:row16:col1, Tab2:row28:col1 |
| Vd/F, L | `Q76` · V/F | 3.32 | L | 0.00332 | m3 | l | 3.5 | exact (1) | Tab2:row17:col1, Tab2:row29:col1 |
| AUC0-4 h (h ng/mL) | `Q19` · AUCt | 139.5 | h ng/mL | 0.5022 | kg*s/m3 | (h·ng)/ml |  | llm (0.6) | Zhang_2022_table_4:row4:col2, Zhang_2022_table_4:row4:col3, Zhang_2022_table_4:row4:col4, Zhang_2022_table_4:row4:col5 |
| AUC0-24 h (h ng/mL) | `Q88` · AUC | 101.6 | h ng/mL | 0.3658 | kg*s/m3 | (h·ng)/ml |  | llm (0.6) | Zhang_2022_table_4:row8:col2, Zhang_2022_table_4:row8:col3, Zhang_2022_table_4:row8:col4, Zhang_2022_table_4:row8:col5, Zhang_2022_table_4:row30:col2, Zhang_2022_table_4:row30:col3, Zhang_2022_table_4:row30:col4, Zhang_2022_table_4:row30:col5 |
| AUC0-∞ (h ng/mL) | `Q17` · AUC∞ | 101.2 | h ng/mL | 0.3643 | kg*s/m3 | (h·ng)/ml |  | exact (1) | Zhang_2022_table_4:row10:col2, Zhang_2022_table_4:row10:col3, Zhang_2022_table_4:row10:col4, Zhang_2022_table_4:row10:col5, Zhang_2022_table_4:row32:col2, Zhang_2022_table_4:row32:col3, Zhang_2022_table_4:row32:col4, Zhang_2022_table_4:row32:col5 |
| ka | `Q49` · kabs | 1.17 | 1/s | 1.17 | 1/s | 1/h |  | review_gapfill (0.7) | Apgar_2018:review |
| ALAG | `Q83` · tlag | 0.522 | h | 1879 | s | h |  | review_gapfill (0.7) | Tanaudommongkon_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- transposed table Zhang_2022_table_3: rows are variants (5th (39.01 kg), 95th (58.3 kg), Ratio(5th/95th), 5th (453.32 ng/mL), 95th (1099.28 ng/mL), Ratio (5th/95th)), the parameters are the column headers (Cmax(ng/mL)) — read one record per variant
- table section iiv: 'ω1 (CL, %)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2 (Vd, %)' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'σ (add), ng/ml' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ1 (prop), %' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ2 (add), ng/ml' routed out of structural estimates ('Residual error')
- column 'final model / estimates (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- table representations disagree for 'CL, L/h'; source reconciliation required
- table representations disagree for 'Vd, L'; source reconciliation required
- table representations disagree for 'LBM on Vd'; source reconciliation required
- table representations disagree for 'Fe.av on Vd (× 10−4)'; source reconciliation required
- table representations disagree for 'θsex on Vd'; source reconciliation required
- table representations disagree for 'CL/F, L/h'; source reconciliation required
- table representations disagree for 'Vd/F, L'; source reconciliation required
- table representations disagree for 'LBM on Vd/F'; source reconciliation required
- dropped duplicate Q61 ('LBM on Vd', value '3.26') — already have one for this compound
- dropped unlinked row (NIL): 'Fe.av on Vd (× 10−4)' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- dropped unlinked row (NIL): 'θsex on Vd' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1'])
- dropped unlinked row (NIL): 'LBM on Vd/F' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col1', 'Tab2:row31:col1'])
- dropped duplicate Q32 ('Cmax (ng/mL)', value '107.7') — already have one for this compound
- dropped unlinked row (NIL): 'Non-Asians' — extend the ontology if this is a real PK parameter (source ['Zhang_2022_table_4:row3:col1', 'Zhang_2022_table_4:row3:col2'])
- dropped duplicate Q19 ('AUC0-12 h (h ng/mL)', value '103.5') — already have one for this compound
- dropped duplicate Q19 ('AUC0-4 h (h.ng/mL)', value '104.3') — already have one for this compound
- dropped duplicate Q19 ('AUC0-12 h (h.ng/mL)', value '93.3') — already have one for this compound
- dropped duplicate Q88 ('AUC0-24 h (h.ng/mL)', value '90.1') — already have one for this compound
- dropped duplicate Q17 ('AUC0-∞ (h.ng/mL)', value '89.7') — already have one for this compound
- dropped duplicate Q19 ('AUC0-3 h (h ng/mL)', value '108.0') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=total serum iron (element of ferric pyrophosphate)
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- status held at "Needs review" — not promoted
- estimate-method split: 'Ratio' is one of 23 estimates of Zhang_2022's substance matrix (5th (39.01 kg), 95th (58.3 kg), Ratio(5th/95th), 5th (453.32 ng/mL), 95th (1099.28 ng/mL), Ratio (5th/95th), 5thLBM, 95th Febaseline, 95th LBM, 5th Febaseline, Ratio, 5th (39.07 kg), 95th (58.23 kg), 5th (517.4 ng/mL), 95th (1146.6 ng/mL), 5th LBM, 95th Febaseline, 5th (45.73 kg), 95th (68.55 kg), 5th (280 ng/mL), 95th (1040 ng/mL), 95thLBM, 5th Febaseline, 5th (48.4 kg), 95th (68.66 kg), 5th (317 ng/mL), 95th (1022 ng/mL)); same population, different estimation method
- molar mass: none found for 'total serum iron (element of ferric pyrophosphate)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Apgar_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tanaudommongkon_2022's review values (primary lacked it)

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- companion parameter table 3 transcribed (144 record(s))
- table Zhang_2022_table_4: missing_label
- table Zhang_2022_table_4: ragged_grid
- companion parameter table 4 transcribed (62 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['ferric pyrophosphate citrate', 'total iron (fe)', 'measured element']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[auc0-24 h]` | 101.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-4 h]` | 139.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-inf]` | 101.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f].rse_percent` | 6.3 | 5.9 | mismatch |
| `gpt-oss:120b` | `parameters[cl/f].value` | 0.982 | 1.02 | mismatch |
| `gpt-oss:120b` | `parameters[cmax]` | 1.55 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f].rse_percent` | 3.5 | 3.8 | mismatch |
| `gpt-oss:120b` | `parameters[vd/f].value` | 3.32 | 3.57 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | ferric pyrophosphate citrate (Triferic, containing pyrophosphate) | ferric pyrophosphate citrate | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | total serum iron (element of ferric pyrophosphate) | total iron | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q22 | pass | 0.477 | 0.477 | 1 | 0.05 | footnote reference category |
| C2_base_Q61 | pass | 3.62 | 3.62 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Zhang_2022_table_4:row10:col2', 'Zhang_2022_table_4:row10:col3', 'Zhang_2022_table_4:row10:col4', 'Zhang_2022_table_4:row10:col5', 'Zhang_2022_table_4:row32:col2', 'Zhang_2022_table_4:row32:col3', 'Zhang_2022_table_4:row32:col4', 'Zhang_2022_table_4:row32:col5'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Zhang_2022_table_4:row4:col2', 'Zhang_2022_table_4:row4:col3', 'Zhang_2022_table_4:row4:col4', 'Zhang_2022_table_4:row4:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row16:col1', 'Tab2:row28:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Zhang_2022_table_3:row12:col1', 'Zhang_2022_table_3:row25:col1', 'Zhang_2022_table_3:row38:col1', 'Zhang_2022_table_3:row51:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Apgar_2018:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Tab2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Tab2:row17:col1', 'Tab2:row29:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Tanaudommongkon_2022:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Zhang_2022_table_4:row8:col2', 'Zhang_2022_table_4:row8:col3', 'Zhang_2022_table_4:row8:col4', 'Zhang_2022_table_4:row8:col5', 'Zhang_2022_table_4:row30:col2', 'Zhang_2022_table_4:row30:col3', 'Zhang_2022_table_4:row30:col4', 'Zhang_2022_table_4:row30:col5'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.477 L/h |  |  | ['Tab2:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.982 L/h |  |  | ['Tab2:row16:col1', 'Tab2:row28:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.62 L |  |  | ['Tab2:row5:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.32 L |  |  | ['Tab2:row17:col1', 'Tab2:row29:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['kabs', 'tlag'] |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio/Pyrophosphate_Zhang2022_ratio_modelica.zip" download>Pyrophosphate_Zhang2022_ratio_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio/Pyrophosphate_Zhang2022_ratio_matlab.zip" download>Pyrophosphate_Zhang2022_ratio_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio/Pyrophosphate_Zhang2022_ratio_matlab_simbio.zip" download>Pyrophosphate_Zhang2022_ratio_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio/Pyrophosphate_Zhang2022_ratio_sbml.zip" download>Pyrophosphate_Zhang2022_ratio_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio/Pyrophosphate_Zhang2022_ratio_cellml.zip" download>Pyrophosphate_Zhang2022_ratio_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Zhang L, Gan L, Li K, Xie P, Tan Y, Wei G et al. Ethnicity evaluation of ferric pyrophosphate citrate among Asian and Non-Asian populations: a population pharmacokinetics analysis. European journal of clinical pharmacology 78(9):1421-1434 (2022). [doi:10.1007/s00228-022-03328-9](https://doi.org/10.1007/s00228-022-03328-9)

**This record:** Pharmacolibrary, model `Pyrophosphate_Zhang2022_ratio`. <https://pharmacolibrary.github.io/#/drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio>

```bibtex
@misc{pharmacolibrary_PyrophosphateZhang2022ratio,
  title  = {{Pharmacolibrary model Pyrophosphate_Zhang2022_ratio}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio},
  note   = {Parameters from doi:10.1007/s00228-022-03328-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrophosphate%5D%20Pyrophosphate_Zhang2022_ratio&body=Drug%3A%20pyrophosphate%0ARecord%3A%20Pyrophosphate_Zhang2022_ratio%0APaper%3A%20Zhang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pyrophosphate/Pyrophosphate_Zhang2022_ratio%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 12:36 UTC</sub>
