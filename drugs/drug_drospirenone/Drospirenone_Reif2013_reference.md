<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;drospirenone&quot;,&quot;href&quot;:&quot;drugs/drug_drospirenone/&quot;},{&quot;label&quot;:&quot;Reif_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# drospirenone — `Drospirenone_Reif2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Drospirenone's volume of distribution lacked an extracted value, causing the model to be held back rather than published with a placeholder.

<div class="pk-model-meta" hidden drug="drospirenone" model-id="Drospirenone_Reif2013_reference" status="model_quarantined" stale="false" population="healthy young women" measured-compound="drospirenone and ethinylestradiol" parameterization="apparent" topology="1C"></div>

## Citation
Reif S, Snelder N, Blode H. Characterisation of the pharmacokinetics of ethinylestradiol and drospirenone in extended-cycle regimens: population pharmacokinetic analysis from a randomised Phase III study. The journal of family planning and reproductive health care 39(2):e1–e13 (2013).
  ·  DOI: [10.1136/jfprhc-2012-100397](https://doi.org/10.1136/jfprhc-2012-100397)

## Population and dosing

**Population:** healthy young women · condition healthy · age group adult · n = 1109.

**Dosing:** 0.003, 0.02 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| TVCL_week3/F | CL/F | 3.52 | L/h | 0.98 |
| V2/F | V2/F | 51.6 | L | 3.64 |
| V3/F | V3/F | 204 | L | 7.99 |
| Q3/F | Q3/F | 17.5 | L/h | 4.62 |
| ka | kabs | 2.18 | 1/h | 8.26 |
| ALAG | tlag | 0.372 | h | 2.54 |
| F | Fab | 1 |  |  |
| CL_BW | CLnorm | 0.672 | L/h/kg | 14.5 |
| Q4/F | Q/F | 8.49 | L/h | 34.3 |
| CL_AGE | CL | 20.8 | L/h | 29.1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Drospirenone's volume of distribution lacked an extracted value, causing the model to be held back rather than published with a placeholder.**

All 10 extracted parameters describe the measured compound 'drospirenone and ethinylestradiol', so no value exists for drospirenone's volume of distribution. Consequently, a library placeholder stood in for the missing value, causing the model to be held back rather than published with an invented number. Extracted — drospirenone and ethinylestradiol: CL/F 3.52 L/h, V2/F 51.6 L, V3/F 204 L, Q3/F 17.5 L/h, kabs 2.18 1/h, tlag 0.372 h, Fab 1, CLnorm 0.672 L/h/kg, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has drospirenone and ethinylestradiol, the second reading drospirenone; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| TVCL_week3/F | `Q27` · CL/F | 3.52 | L/h | 9.778e-07 | m3/s | L/h | 0.98 | llm (0.6) | tabb2:row2:col2, tabb2:row2:col3, Reif_2013_table_6:row1:col2, Reif_2013_table_6:row1:col3 |
| V2/F | `Q82` · V2/F | 51.6 | L | 0.0516 | m3 | L | 3.64 | exact (1) | tabb2:row4:col2, tabb2:row4:col3, Reif_2013_table_6:row3:col2, Reif_2013_table_6:row3:col3 |
| V3/F | `Q78` · V3/F | 204 | L | 0.204 | m3 | L | 7.99 | exact (1) | tabb2:row5:col2, tabb2:row5:col3, Reif_2013_table_5:row3:col2, Reif_2013_table_5:row3:col3, Reif_2013_table_6:row4:col2, Reif_2013_table_6:row4:col3 |
| Q3/F | `Q309` · Q3/F | 17.5 | L/h | 4.861e-06 | m3/s | L/h | 4.62 | exact (1) | tabb2:row6:col2, tabb2:row6:col3, Reif_2013_table_5:row5:col2, Reif_2013_table_5:row5:col3, Reif_2013_table_6:row5:col2, Reif_2013_table_6:row5:col3 |
| ka | `Q49` · kabs | 2.18 | 1/h | 0.0006056 | 1/s | 1/h | 8.26 | exact (1) | tabb2:row7:col1, tabb2:row7:col2, tabb2:row7:col3, Reif_2013_table_5:row7:col1, Reif_2013_table_5:row7:col2, Reif_2013_table_5:row7:col3, Reif_2013_table_6:row6:col1, Reif_2013_table_6:row6:col2, Reif_2013_table_6:row6:col3 |
| ALAG | `Q83` · tlag | 0.372 | h | 1339 | s | h | 2.54 | exact (1) | tabb2:row8:col2, tabb2:row8:col3, Reif_2013_table_5:row10:col2, Reif_2013_table_5:row10:col3, Reif_2013_table_6:row7:col2, Reif_2013_table_6:row7:col3 |
| F | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | tabb2:row9:col2, Reif_2013_table_6:row8:col2 |
| CL_BW | `Q354` · CLnorm | 0.672 | L/h/kg | 1.307e-05 | m3/s | L/h | 14.5 | llm (0.6) | tabb2:row11:col2, tabb2:row11:col3, Reif_2013_table_5:row13:col2, Reif_2013_table_5:row13:col3, Reif_2013_table_6:row10:col2, Reif_2013_table_6:row10:col3 |
| Q4/F | `Q69` · Q/F | 8.49 | L/h | 2.358e-06 | m3/s | L/h | 34.3 | llm (0.6) | Reif_2013_table_5:row6:col2, Reif_2013_table_5:row6:col3 |
| CL_AGE | `Q22` · CL | 20.8 | L/h | 5.778e-06 | m3/s | L/h | 29.1 | llm (0.6) | Reif_2013_table_5:row12:col2, Reif_2013_table_5:row12:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV_CL/F†' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section iiv: 'IIV_F†' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section iiv: 'ρ_CL/F,F (IIV)' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section iiv: 'IOV_F†' routed out of structural estimates ('Random effects: inter-individual variability (IIV) and inter-occasion variability (IOV)')
- table section residual_error: 'Proportional error†' routed out of structural estimates ('Random effects: residual error')
- table section residual_error: 'Additive error' routed out of structural estimates ('Random effects: residual error')
- table section iiv: 'IIV_CL‡' routed out of structural estimates ('Random effects: inter-individual variability (IIV)')
- table section residual_error: 'Proportional error‡' routed out of structural estimates ('Random effects: residual error')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q27 ('Diff_CL_week27/F', value '-6.55') — already have one for this compound
- dropped duplicate Q27 ('TVCL/F', value '25.3') — already have one for this compound
- dropped duplicate Q82 ('V2/F†', value '23.9') — already have one for this compound
- dropped duplicate Q78 ('V4/F†', value '23.9') — already have one for this compound
- dropped unlinked row (NIL): 'F_week3' — extend the ontology if this is a real PK parameter (source ['Reif_2013_table_5:row8:col2'])
- dropped unlinked row (NIL): 'Diff_F_week27' — extend the ontology if this is a real PK parameter (source ['Reif_2013_table_5:row9:col2', 'Reif_2013_table_5:row9:col3'])
- implicit units: 'TVCL_week3/F' → L/h (from the paper text: "The text states: 'The estimated population mean value for apparent oral clearance (Week 3) was 3.52 l/hour'.")
- implicit units: 'V2/F' → L (from the popPK convention: 'V2/F is a volume of distribution parameter. In population PK modeling, volumes are conventionally expressed in Liters (L')
- implicit units: 'V3/F' → L (from the popPK convention: 'V3/F is a volume of distribution parameter. In population PK modeling, volumes are conventionally expressed in Liters (L')
- implicit units: 'Q3/F' → L/h (from the popPK convention: 'Q3/F is an intercompartmental clearance parameter. In population PK modeling, clearances (including intercompartmental) ')
- implicit units: 'ka' → 1/h (from the popPK convention: 'ka is a first-order absorption rate constant. In population PK modeling, first-order rate constants are conventionally e')
- implicit units: 'ALAG' → h (from the popPK convention: 'ALAG (tlag) is an absorption lag time. In population PK modeling, time parameters are conventionally expressed in hours ')
- implicit units: 'CL_BW' → L/h/kg (from the paper text: "The text states: 'The estimated population mean value for apparent oral clearance was 25.3 l/hour based on a typical sub")
- implicit units: 'Q4/F' → L/h (from the popPK convention: 'Q4/F is an intercompartmental clearance parameter. In population PK modeling, intercompartmental clearances are conventi')
- implicit units: 'CL_AGE' → L/h (from the popPK convention: 'CL_AGE is a clearance parameter (proportionality factor for age). In population PK modeling, clearances are conventional')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=drospirenone and ethinylestradiol
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- molar mass: none found for 'drospirenone and ethinylestradiol' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tabb2:row2:col4 = "Typical subject's apparent oral clearance (Week 3) with median body weight of 62 kg"
- unparsed cell tabb2:row3:col1 = '% difference vs Week 3'
- unparsed cell tabb2:row3:col4 = "Difference in typical subject's apparent oral clearance (Week 27, expressed as percentage change to Week 3 value)"
- unparsed cell Reif_2013_table_5:row1:col4 = "Typical subject's apparent oral clearance with median age of 24 years and median body weight of 62 kg"
- unparsed cell Reif_2013_table_5:row8:col4 = 'Relative bioavailability (Week 3)'
- unparsed cell Reif_2013_table_5:row9:col1 = '% difference from Week 3'
- unparsed cell Reif_2013_table_5:row9:col4 = 'Difference in relative bioavailability (Week 27) (percentage change to Week 3 value)'
- companion parameter table 5 transcribed (27 record(s))
- unparsed cell Reif_2013_table_6:row1:col4 = "Typical subject's apparent oral clearance (Week 3) with median body weight of 62 kg"
- unparsed cell Reif_2013_table_6:row2:col1 = '% difference vs Week 3'
- unparsed cell Reif_2013_table_6:row2:col4 = "Difference in typical subject's apparent oral clearance (Week 27, expressed as percentage change to Week 3 value)"
- companion parameter table 6 transcribed (30 record(s))
- LLM selected parameter table(s) 5, 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[51*]` |  | 917.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` |  | 0.372 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | 0.372 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_age]` | 20.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_bw]` |  | 0.672 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_bw]` | 0.672 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 2.18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 2.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3/f]` |  | 17.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3/f]` | 17.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q4/f]` | 8.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl_week3/f]` |  | 3.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl_week3/f]` | 3.52 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 51.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 51.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 204 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 204 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` |  | 23.9 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | drospirenone and ethinylestradiol | drospirenone | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | drospirenone and ethinylestradiol | drospirenone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Reif_2013_table_5:row12:col2', 'Reif_2013_table_5:row12:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tabb2:row2:col2', 'tabb2:row2:col3', 'Reif_2013_table_6:row1:col2', 'Reif_2013_table_6:row1:col3'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['tabb2:row6:col2', 'tabb2:row6:col3', 'Reif_2013_table_5:row5:col2', 'Reif_2013_table_5:row5:col3', 'Reif_2013_table_6:row5:col2', 'Reif_2013_table_6:row5:col3'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['tabb2:row11:col2', 'tabb2:row11:col3', 'Reif_2013_table_5:row13:col2', 'Reif_2013_table_5:row13:col3', 'Reif_2013_table_6:row10:col2', 'Reif_2013_table_6:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tabb2:row7:col1', 'tabb2:row7:col2', 'tabb2:row7:col3', 'Reif_2013_table_5:row7:col1', 'Reif_2013_table_5:row7:col2', 'Reif_2013_table_5:row7:col3', 'Reif_2013_table_6:row6:col1', 'Reif_2013_table_6:row6:col2', 'Reif_2013_table_6:row6:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Reif_2013_table_5:row6:col2', 'Reif_2013_table_5:row6:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['tabb2:row5:col2', 'tabb2:row5:col3', 'Reif_2013_table_5:row3:col2', 'Reif_2013_table_5:row3:col3', 'Reif_2013_table_6:row4:col2', 'Reif_2013_table_6:row4:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tabb2:row4:col2', 'tabb2:row4:col3', 'Reif_2013_table_6:row3:col2', 'Reif_2013_table_6:row3:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['tabb2:row8:col2', 'tabb2:row8:col3', 'Reif_2013_table_5:row10:col2', 'Reif_2013_table_5:row10:col3', 'Reif_2013_table_6:row7:col2', 'Reif_2013_table_6:row7:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 20.8 L/h | ['Reif_2013_table_5:row12:col2', 'Reif_2013_table_5:row12:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.52 L/h | ['tabb2:row2:col2', 'tabb2:row2:col3', 'Reif_2013_table_6:row1:col2', 'Reif_2013_table_6:row1:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 51.6 L | ['tabb2:row4:col2', 'tabb2:row4:col3', 'Reif_2013_table_6:row3:col2', 'Reif_2013_table_6:row3:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdrospirenone%5D%20Drospirenone_Reif2013_reference&body=Drug%3A%20drospirenone%0ARecord%3A%20Drospirenone_Reif2013_reference%0APaper%3A%20Reif_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_drospirenone/Drospirenone_Reif2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:48 UTC</sub>
