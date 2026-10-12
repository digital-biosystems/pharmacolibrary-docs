<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;trandolapril&quot;,&quot;href&quot;:&quot;drugs/drug_trandolapril/&quot;},{&quot;label&quot;:&quot;Li_2016 \u00b7 trandolapril&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trandolapril — `Trandolapril_Li2016_trandolapril`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.04). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The trandolapril record was rejected because its metabolite trandolaprilat has no compartment of its own (n_cmt = 0) and no link parameter for the hydrolysis from trandolapril, leaving an unlinked metabolite with no path from the dose; additionally the extrapolated-AUC fraction (AUC%ext, 96.4) was reported without a unit convertible to SI.**

The model lists trandolaprilat as formed from trandolapril by hydrolysis at the central compartment, but with n_cmt = 0 and no link parameter, so the metabolite is unlinked and unreachable from the administered dose. Separately, the AUC%ext parameter (value 96.4) was reported without a unit, so it could not be given an SI value. The remaining reported parameters (Cmax 3.77 ng/mL, tmax 0.444 h, AUCt 3.46 ng/mL·h, t1/2z 5.12 h, V/F 4789 L, CL/F 658 L/h, MRT 2.09 h, AUC ratio 0.663) carry units and values as stated. Extracted — trandolapril: Cmax 3.77 ng/mL, Cmin 0 ng/mL, Cavg 0 ng/mL, tmax 0.444 h, AUCt 3.46 ng/mL·h, t1/2z 5.12 h, V/F 4.79e+03 L, CL/F 658 L/h, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trandolapril, the second reading unknown; it also differs on 23 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Li X et al., Pharmacokinetics, Pharmacodynamics, and…, European journal of drug me… (2016)
  ·  DOI: [10.1007/s13318-015-0277-2](https://doi.org/10.1007/s13318-015-0277-2)

<div class="pk-model-meta" hidden drug="trandolapril" model-id="Trandolapril_Li2016_trandolapril" status="rejected" stale="false" population="healthy Chinese subjects" measured-compound="trandolapril" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max | `Q32` · Cmax | 3.77 | ng/mL | not captured | ng/mL | not captured | space_fold (0.95) | tab_3:row2:col1, tab_3:row2:col2, tab_3:row2:col5, Li_2016_table_3:row1:col1, Li_2016_table_3:row1:col2, Li_2016_table_3:row1:col3, Li_2016_table_3:row1:col6, Li_2016_table_3:row1:col7 | — | not captured |
| C ssmin | `Q36` · Cmin | 0.00 | ng/mL | not captured | ng/mL | not captured | llm (0.6) | tab_3:row3:col2, tab_3:row3:col5 | — | not captured |
| C ssav | `Q71` · Cavg | 0.00 | ng/mL | not captured | ng/mL | not captured | llm (0.6) | tab_3:row4:col2, tab_3:row4:col5, tab_3:footnote | — | not captured |
| T max | `Q56` · tmax | 0.444 | h | 1598.4 | h | not captured | space_fold (0.95) | tab_3:row5:col1, tab_3:row5:col2, tab_3:row5:col3, tab_3:row5:col5, Li_2016_table_3:row2:col2, Li_2016_table_3:row2:col3 | — | not captured |
| AUC 0-t | `Q19` · AUCt | 3.46 | ng/mL·h | not captured | ng/mL·h | not captured | space_fold (0.95) | tab_3:row6:col1, tab_3:row6:col2, tab_3:row6:col3, tab_3:row6:col5, Li_2016_table_3:row3:col1, Li_2016_table_3:row3:col2, Li_2016_table_3:row3:col3, Li_2016_table_3:row3:col6, Li_2016_table_3:row3:col7 | — | not captured |
| t 1/2 | `Q57` · t1/2z | 5.12 | h | 18432.0 | h | not captured | space_fold (0.95) | tab_3:row8:col1, tab_3:row8:col2, tab_3:row8:col5, tab_3:row8:col6, Li_2016_table_3:row5:col1, Li_2016_table_3:row5:col2, Li_2016_table_3:row5:col3, Li_2016_table_3:row5:col4, Li_2016_table_3:row5:col6, Li_2016_table_3:row5:col7, Li_2016_table_3:row5:col8 | — | not captured |
| Vz/F | `Q76` · V/F | 4789 | L | 4.789 | L | not captured | exact (1.0) | tab_3:row9:col1, tab_3:row9:col2, tab_3:row9:col5, Li_2016_table_3:row6:col1, Li_2016_table_3:row6:col2, Li_2016_table_3:row6:col3, Li_2016_table_3:row6:col4, Li_2016_table_3:row6:col6, Li_2016_table_3:row6:col7 | — | not captured |
| CLz/F | `Q27` · CL/F | 658 | L/h | 0.0001827777777777778 | L/h | not captured | llm (0.6) | tab_3:row10:col1, tab_3:row10:col2, tab_3:row10:col3, tab_3:row10:col5, Li_2016_table_3:row7:col1, Li_2016_table_3:row7:col2, Li_2016_table_3:row7:col3, Li_2016_table_3:row7:col4, Li_2016_table_3:row7:col6, Li_2016_table_3:row7:col7 | — | not captured |
| MRT 0-t | `Q53` · MRT | 2.09 | h | 7523.999999999999 | h | not captured | space_fold (0.95) | tab_3:row11:col1, tab_3:row11:col2, tab_3:row11:col3, tab_3:row11:col5, tab_3:row11:col6, Li_2016_table_3:row8:col1, Li_2016_table_3:row8:col2, Li_2016_table_3:row8:col4, Li_2016_table_3:row8:col6 | — | not captured |
| AUC 0-t /AUC 0-? | `Q84` · AUC%ext | 96.4 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_3:row13:col1, tab_3:row13:col2, tab_3:row13:col5, tab_3:row13:col6, Li_2016_table_3:row10:col1, Li_2016_table_3:row10:col2, Li_2016_table_3:row10:col3, Li_2016_table_3:row10:col4, Li_2016_table_3:row10:col6, Li_2016_table_3:row10:col7 | — | not captured |
| R | `Q21` · AUC ratio | 0.663 | not captured | not captured | not captured | not captured | llm (0.6) | tab_3:row15:col2, tab_3:row15:col5, tab_3:footnote | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[auc 0-t /auc 0-?]` | 96.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-t /auc 0-?]` | not captured | 96.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-t]` | 3.46 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc 0-t]` | not captured | 3.46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 3.77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | not captured | 3.77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssav]` | 0.00 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssav]` | not captured | 0.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssmin]` | 0.00 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c ssmin]` | not captured | 0.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clz/f]` | 658 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clz/f]` | not captured | 658 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt 0-t]` | 2.09 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt 0-t]` | not captured | 2.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[r]` | 0.663 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 5.12 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | not captured | 5.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t max]` | 0.444 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t max]` | not captured | 0.444 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 4789 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | not captured | 4789 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trandolapril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trandolapril | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row6:col1', 'tab_3:row6:col2', 'tab_3:row6:col3', 'tab_3:row6:col5', 'Li_2016_table_3:row3:col1', 'Li_2016_table_3:row3:col2', 'Li_2016_table_3:row3:col3', 'Li_2016_table_3:row3:col6', 'Li_2016_table_3:row3:col7'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_3:row10:col1', 'tab_3:row10:col2', 'tab_3:row10:col3', 'tab_3:row10:col5', 'Li_2016_table_3:row7:col1', 'Li_2016_table_3:row7:col2', 'Li_2016_table_3:row7:col3', 'Li_2016_table_3:row7:col4', 'Li_2016_table_3:row7:col6', 'Li_2016_table_3:row7:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row2:col1', 'tab_3:row2:col2', 'tab_3:row2:col5', 'Li_2016_table_3:row1:col1', 'Li_2016_table_3:row1:col2', 'Li_2016_table_3:row1:col3', 'Li_2016_table_3:row1:col6', 'Li_2016_table_3:row1:col7'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row3:col2', 'tab_3:row3:col5'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tab_3:row11:col1', 'tab_3:row11:col2', 'tab_3:row11:col3', 'tab_3:row11:col5', 'tab_3:row11:col6', 'Li_2016_table_3:row8:col1', 'Li_2016_table_3:row8:col2', 'Li_2016_table_3:row8:col4', 'Li_2016_table_3:row8:col6'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tab_3:row5:col1', 'tab_3:row5:col2', 'tab_3:row5:col3', 'tab_3:row5:col5', 'Li_2016_table_3:row2:col2', 'Li_2016_table_3:row2:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_3:row8:col1', 'tab_3:row8:col2', 'tab_3:row8:col5', 'tab_3:row8:col6', 'Li_2016_table_3:row5:col1', 'Li_2016_table_3:row5:col2', 'Li_2016_table_3:row5:col3', 'Li_2016_table_3:row5:col4', 'Li_2016_table_3:row5:col6', 'Li_2016_table_3:row5:col7', 'Li_2016_table_3:row5:col8'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_3:row4:col2', 'tab_3:row4:col5', 'tab_3:footnote'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_3:row9:col1', 'tab_3:row9:col2', 'tab_3:row9:col5', 'Li_2016_table_3:row6:col1', 'Li_2016_table_3:row6:col2', 'Li_2016_table_3:row6:col3', 'Li_2016_table_3:row6:col4', 'Li_2016_table_3:row6:col6', 'Li_2016_table_3:row6:col7'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 658 L/h | not captured | not captured | ['tab_3:row10:col1', 'tab_3:row10:col2', 'tab_3:row10:col3', 'tab_3:row10:col5', 'Li_2016_table_3:row7:col1', 'Li_2016_table_3:row7:col2', 'Li_2016_table_3:row7:col3', 'Li_2016_table_3:row7:col4', 'Li_2016_table_3:row7:col6', 'Li_2016_table_3:row7:col7'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.79e+03 L | not captured | not captured | ['tab_3:row9:col1', 'tab_3:row9:col2', 'tab_3:row9:col5', 'Li_2016_table_3:row6:col1', 'Li_2016_table_3:row6:col2', 'Li_2016_table_3:row6:col3', 'Li_2016_table_3:row6:col4', 'Li_2016_table_3:row6:col6', 'Li_2016_table_3:row6:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trandolapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2016` / `Li_2016::trandolapril`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 23:53 UTC</sub>
