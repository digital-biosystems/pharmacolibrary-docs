<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;trandolapril&quot;,&quot;href&quot;:&quot;drugs/drug_trandolapril/&quot;},{&quot;label&quot;:&quot;Li_2016 \u00b7 trandolapril&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trandolapril — `Trandolapril_Li2016_trandolapril`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The trandolapril record was rejected because its metabolite trandolaprilat has no compartment of its own (n_cmt = 0) and no link parameter for the hydrolysis from trandolapril, leaving an unlinked metabolite with no path from the dose; additionally the extrapolated-AUC fraction (AUC%ext, 96.4) was reported without a unit convertible to SI.

<div class="pk-model-meta" hidden drug="trandolapril" model-id="Trandolapril_Li2016_trandolapril" status="rejected" stale="false" population="healthy Chinese subjects" measured-compound="trandolapril" parameterization="apparent" topology="general_linear"></div>

## Citation
Li X, Liu C, Wu M, Zhang H, Sun Y, Cheng L et al. Pharmacokinetics, Pharmacodynamics, and Tolerability of Single and Multiple Doses of Trandolapril, an Effective Angiotensin-Converting Enzyme Inhibitor, in Healthy Chinese Subjects. European journal of drug metabolism and pharmacokinetics 41(4):373–384 (2016).
  ·  DOI: [10.1007/s13318-015-0277-2](https://doi.org/10.1007/s13318-015-0277-2)

## Population and dosing

**Population:** healthy Chinese subjects · condition healthy · age group adult · n = 12.

**Dosing:** 1, 2, 4 mg, oral.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max | Cmax | 3.77 | ng/mL |
| C ssmin | Cmin | 0.00 | ng/mL |
| C ssav | Cavg | 0.00 | ng/mL |
| T max | tmax | 0.444 | h |
| AUC 0-t | AUCt | 3.46 | ng/mL·h |
| t 1/2 | t1/2z | 5.12 | h |
| Vz/F | V/F | 4789 | L |
| CLz/F | CL/F | 658 | L/h |
| MRT 0-t | MRT | 2.09 | h |
| AUC 0-t /AUC 0-? | AUC%ext | 96.4 |  |
| R | AUC ratio | 0.663 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.04). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The trandolapril record was rejected because its metabolite trandolaprilat has no compartment of its own (n_cmt = 0) and no link parameter for the hydrolysis from trandolapril, leaving an unlinked metabolite with no path from the dose; additionally the extrapolated-AUC fraction (AUC%ext, 96.4) was reported without a unit convertible to SI.**

The model lists trandolaprilat as formed from trandolapril by hydrolysis at the central compartment, but with n_cmt = 0 and no link parameter, so the metabolite is unlinked and unreachable from the administered dose. Separately, the AUC%ext parameter (value 96.4) was reported without a unit, so it could not be given an SI value. The remaining reported parameters (Cmax 3.77 ng/mL, tmax 0.444 h, AUCt 3.46 ng/mL·h, t1/2z 5.12 h, V/F 4789 L, CL/F 658 L/h, MRT 2.09 h, AUC ratio 0.663) carry units and values as stated. Extracted — trandolapril: Cmax 3.77 ng/mL, Cmin 0 ng/mL, Cavg 0 ng/mL, tmax 0.444 h, AUCt 3.46 ng/mL·h, t1/2z 5.12 h, V/F 4.79e+03 L, CL/F 658 L/h, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trandolapril, the second reading unknown; it also differs on 23 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max | `Q32` · Cmax | 3.77 | ng/mL |  |  | ng/mL | space_fold (0.95) | tab_3:row2:col1, tab_3:row2:col2, tab_3:row2:col5, Li_2016_table_3:row1:col1, Li_2016_table_3:row1:col2, Li_2016_table_3:row1:col3, Li_2016_table_3:row1:col6, Li_2016_table_3:row1:col7 |
| C ssmin | `Q36` · Cmin | 0.00 | ng/mL |  |  | ng/mL | llm (0.6) | tab_3:row3:col2, tab_3:row3:col5 |
| C ssav | `Q71` · Cavg | 0.00 | ng/mL |  |  | ng/mL | llm (0.6) | tab_3:row4:col2, tab_3:row4:col5, tab_3:footnote |
| T max | `Q56` · tmax | 0.444 | h | 1598 | s | h | space_fold (0.95) | tab_3:row5:col1, tab_3:row5:col2, tab_3:row5:col3, tab_3:row5:col5, Li_2016_table_3:row2:col2, Li_2016_table_3:row2:col3 |
| AUC 0-t | `Q19` · AUCt | 3.46 | ng/mL·h |  |  | ng/mL·h | space_fold (0.95) | tab_3:row6:col1, tab_3:row6:col2, tab_3:row6:col3, tab_3:row6:col5, Li_2016_table_3:row3:col1, Li_2016_table_3:row3:col2, Li_2016_table_3:row3:col3, Li_2016_table_3:row3:col6, Li_2016_table_3:row3:col7 |
| t 1/2 | `Q57` · t1/2z | 5.12 | h | 1.843e+04 | s | h | space_fold (0.95) | tab_3:row8:col1, tab_3:row8:col2, tab_3:row8:col5, tab_3:row8:col6, Li_2016_table_3:row5:col1, Li_2016_table_3:row5:col2, Li_2016_table_3:row5:col3, Li_2016_table_3:row5:col4, Li_2016_table_3:row5:col6, Li_2016_table_3:row5:col7, Li_2016_table_3:row5:col8 |
| Vz/F | `Q76` · V/F | 4789 | L | 4.789 | m3 | L | exact (1) | tab_3:row9:col1, tab_3:row9:col2, tab_3:row9:col5, Li_2016_table_3:row6:col1, Li_2016_table_3:row6:col2, Li_2016_table_3:row6:col3, Li_2016_table_3:row6:col4, Li_2016_table_3:row6:col6, Li_2016_table_3:row6:col7 |
| CLz/F | `Q27` · CL/F | 658 | L/h | 0.0001828 | m3/s | L/h | llm (0.6) | tab_3:row10:col1, tab_3:row10:col2, tab_3:row10:col3, tab_3:row10:col5, Li_2016_table_3:row7:col1, Li_2016_table_3:row7:col2, Li_2016_table_3:row7:col3, Li_2016_table_3:row7:col4, Li_2016_table_3:row7:col6, Li_2016_table_3:row7:col7 |
| MRT 0-t | `Q53` · MRT | 2.09 | h | 7524 | s | h | space_fold (0.95) | tab_3:row11:col1, tab_3:row11:col2, tab_3:row11:col3, tab_3:row11:col5, tab_3:row11:col6, Li_2016_table_3:row8:col1, Li_2016_table_3:row8:col2, Li_2016_table_3:row8:col4, Li_2016_table_3:row8:col6 |
| AUC 0-t /AUC 0-? | `Q84` · AUC%ext | 96.4 |  |  |  |  | llm_corrected (0.6) | tab_3:row13:col1, tab_3:row13:col2, tab_3:row13:col5, tab_3:row13:col6, Li_2016_table_3:row10:col1, Li_2016_table_3:row10:col2, Li_2016_table_3:row10:col3, Li_2016_table_3:row10:col4, Li_2016_table_3:row10:col6, Li_2016_table_3:row10:col7 |
| R | `Q21` · AUC ratio | 0.663 |  |  |  |  | llm (0.6) | tab_3:row15:col2, tab_3:row15:col5, tab_3:footnote |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q19 ('AUC 0-?', value '3.58') — already have one for this compound
- dropped duplicate Q53 ('MRT 0-?', value '3.15') — already have one for this compound
- dropped unlinked row (NIL): 'DF' — extend the ontology if this is a real PK parameter (source ['tab_3:row14:col2', 'tab_3:row14:col5', 'tab_3:footnote'])
- dropped value-less row: 'ssmin'
- dropped value-less row: '* P \\ 0.05 was considered statistically significant'
- implicit units: 'C max' → ng/mL (from the paper text: "Abstract states: 'peak plasma levels (C max , 1.57, 3.77, and 7.99 ng/mL)'; the value 3.77 corresponds to the 2 mg dose ")
- implicit units: 'C ssmin' → ng/mL (from the popPK convention: 'No unit stated for Cssmin in the table or text. The paper reports all plasma concentrations in ng/mL (e.g., Cmax in ng/m')
- implicit units: 'C ssav' → ng/mL (from the popPK convention: 'No unit stated for Cssav. The paper reports plasma concentrations in ng/mL (Cmax in ng/mL; troughs ~1 ng/mL), so the ave')
- implicit units: 'T max' → h (from the popPK convention: 'No unit stated for Tmax. Time to peak concentration is conventionally reported in hours; value 0.444 h is consistent wit')
- implicit units: 'AUC 0-t' → ng/mL·h (from the paper text: "Abstract states: 'AUCs (1.89, 3.46, and 6.47 ng/mL)'; the value 3.46 corresponds to the 2 mg dose AUC0-t. The paper's 'n")
- implicit units: 't 1/2' → h (from the popPK convention: 'No unit stated for t1/2. Half-life is conventionally in hours; t1/2 = 0.693/Kel with Kel in 1/h gives hours, and 5.12 h ')
- implicit units: 'Vz/F' → L (from the popPK convention: 'No unit stated for Vz/F. Apparent volume of distribution is conventionally in liters; 4789 L is consistent with an appar')
- implicit units: 'CLz/F' → L/h (from the popPK convention: 'No unit stated for CLz/F. Apparent oral clearance is conventionally in L/h; 658 L/h is consistent with Vz/F = 4789 L and')
- implicit units: 'MRT 0-t' → h (from the popPK convention: 'No unit stated for MRT0-t. Mean residence time is a time parameter, conventionally in hours; 2.09 h is consistent with t')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=trandolapril
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'trandolapril' subgroup of Li_2016 (paper reports 2 populations: trandolapril, trandolaprilat)
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 0 linked by role; re-tagged trandolapril→parent ×41

**Extraction notes:**
- unparsed cell tab_3:row2:col3 = '0.002*'
- unparsed cell tab_3:row2:col6 = '0.001*'
- unparsed cell tab_3:row5:col6 = '0.016*'
- unparsed cell tab_3:row6:col6 = '0.000*'
- unparsed cell tab_3:row7:col6 = '0.003*'
- unparsed cell tab_3:row8:col3 = '0.021*'
- unparsed cell tab_3:row9:col3 = '0.004*'
- unparsed cell tab_3:row9:col6 = '0.002*'
- unparsed cell tab_3:row10:col6 = '0.005*'
- unparsed cell tab_3:row12:col3 = '0.011*'
- unparsed cell tab_3:row13:col3 = '0.016*'
- unparsed cell Li_2016_table_3:row1:col4 = '0.000*'
- unparsed cell Li_2016_table_3:row1:col8 = '0.000*'
- unparsed cell Li_2016_table_3:row2:col1 = '0.722 ± 0.336 0.444 ± 0.109 0.444 ± 0.148 0.005*'
- unparsed cell Li_2016_table_3:row2:col4 = '3.58 ± 0.515 0.001*'
- unparsed cell Li_2016_table_3:row3:col4 = '0.001*'
- unparsed cell Li_2016_table_3:row3:col8 = '0.000*'
- unparsed cell Li_2016_table_3:row4:col4 = '0.001*'
- unparsed cell Li_2016_table_3:row4:col8 = '0.029*'
- unparsed cell Li_2016_table_3:row6:col8 = '0.001*'
- unparsed cell Li_2016_table_3:row7:col8 = '0.000*'
- unparsed cell Li_2016_table_3:row8:col3 = '2.26 ± 0.584 0.724'
- unparsed cell Li_2016_table_3:row8:col7 = '0.000*'
- unparsed cell Li_2016_table_3:row9:col8 = '0.036*'
- unparsed cell Li_2016_table_3:row10:col8 = '0.008*'
- companion parameter table 3 transcribed (61 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.04 (1/25 fields) | 24 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trandolapril', 'trandolaprilat', 'hydrolysis']] | [['trandolapril', 'trandolaprilat', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[auc 0-t /auc 0-?]` | 96.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-t /auc 0-?]` |  | 96.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-t]` | 3.46 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-t]` |  | 3.46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 3.77 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` |  | 3.77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssav]` | 0.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssav]` |  | 0.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssmin]` | 0.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssmin]` |  | 0.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clz/f]` | 658 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clz/f]` |  | 658 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt 0-t]` | 2.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt 0-t]` |  | 2.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[r]` | 0.663 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 5.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` |  | 5.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t max]` | 0.444 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t max]` |  | 0.444 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 4789 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` |  | 4789 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trandolapril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trandolapril | unknown | mismatch |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_3:row6:col1', 'tab_3:row6:col2', 'tab_3:row6:col3', 'tab_3:row6:col5', 'Li_2016_table_3:row3:col1', 'Li_2016_table_3:row3:col2', 'Li_2016_table_3:row3:col3', 'Li_2016_table_3:row3:col6', 'Li_2016_table_3:row3:col7'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_3:row10:col1', 'tab_3:row10:col2', 'tab_3:row10:col3', 'tab_3:row10:col5', 'Li_2016_table_3:row7:col1', 'Li_2016_table_3:row7:col2', 'Li_2016_table_3:row7:col3', 'Li_2016_table_3:row7:col4', 'Li_2016_table_3:row7:col6', 'Li_2016_table_3:row7:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_3:row2:col1', 'tab_3:row2:col2', 'tab_3:row2:col5', 'Li_2016_table_3:row1:col1', 'Li_2016_table_3:row1:col2', 'Li_2016_table_3:row1:col3', 'Li_2016_table_3:row1:col6', 'Li_2016_table_3:row1:col7'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['tab_3:row3:col2', 'tab_3:row3:col5'] |
| C5_dimension_Q53 | pass | [time] |  | ['tab_3:row11:col1', 'tab_3:row11:col2', 'tab_3:row11:col3', 'tab_3:row11:col5', 'tab_3:row11:col6', 'Li_2016_table_3:row8:col1', 'Li_2016_table_3:row8:col2', 'Li_2016_table_3:row8:col4', 'Li_2016_table_3:row8:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['tab_3:row5:col1', 'tab_3:row5:col2', 'tab_3:row5:col3', 'tab_3:row5:col5', 'Li_2016_table_3:row2:col2', 'Li_2016_table_3:row2:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_3:row8:col1', 'tab_3:row8:col2', 'tab_3:row8:col5', 'tab_3:row8:col6', 'Li_2016_table_3:row5:col1', 'Li_2016_table_3:row5:col2', 'Li_2016_table_3:row5:col3', 'Li_2016_table_3:row5:col4', 'Li_2016_table_3:row5:col6', 'Li_2016_table_3:row5:col7', 'Li_2016_table_3:row5:col8'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['tab_3:row4:col2', 'tab_3:row4:col5', 'tab_3:footnote'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_3:row9:col1', 'tab_3:row9:col2', 'tab_3:row9:col5', 'Li_2016_table_3:row6:col1', 'Li_2016_table_3:row6:col2', 'Li_2016_table_3:row6:col3', 'Li_2016_table_3:row6:col4', 'Li_2016_table_3:row6:col6', 'Li_2016_table_3:row6:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 658 L/h | ['tab_3:row10:col1', 'tab_3:row10:col2', 'tab_3:row10:col3', 'tab_3:row10:col5', 'Li_2016_table_3:row7:col1', 'Li_2016_table_3:row7:col2', 'Li_2016_table_3:row7:col3', 'Li_2016_table_3:row7:col4', 'Li_2016_table_3:row7:col6', 'Li_2016_table_3:row7:col7'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.79e+03 L | ['tab_3:row9:col1', 'tab_3:row9:col2', 'tab_3:row9:col5', 'Li_2016_table_3:row6:col1', 'Li_2016_table_3:row6:col2', 'Li_2016_table_3:row6:col3', 'Li_2016_table_3:row6:col4', 'Li_2016_table_3:row6:col6', 'Li_2016_table_3:row6:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrandolapril%5D%20Trandolapril_Li2016_trandolapril&body=Drug%3A%20trandolapril%0ARecord%3A%20Trandolapril_Li2016_trandolapril%0APaper%3A%20Li_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trandolapril/Trandolapril_Li2016_trandolapril%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-30 23:53 UTC</sub>
