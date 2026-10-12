<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;oxytetracycline&quot;,&quot;href&quot;:&quot;drugs/drug_oxytetracycline/&quot;},{&quot;label&quot;:&quot;Winter_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxytetracycline — `Oxytetracycline_Winter2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.136). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The oxytetracycline three-compartment cattle model was rejected because a compartment has no path from the dose, and the reported units (e.g. 'adult' for V1=143, V2=973, V3=2458, CL=68.35) could not be converted to SI.**

The structure check found an unreachable or orphan compartment in the two-compartment oxytetracycline model, so the record was refused. Volumes and clearance carry the unit 'adult' instead of a physical unit, leaving them without SI values. A second reader also disagreed on several values, reading CL as 62.67 (with 68.35 as the relative standard error in percent) rather than 68.35, and on whether the parameterization is apparent or mechanistic; the covariate effects on tlag and clearance differ between readers (15.74 vs none, 14.96 vs none). Extracted — oxytetracycline: V1 143 adult, V2 973 adult, V3 2.46e+03 adult, CL 68.3 adult, kabs 0.235, Fab 1.42, tlag 1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:16.990327+00:00) predates the upstream re-run (2026-10-04 02:53:06.981348+00:00). Current validate status: `rejected`.

## Citation
Winter EA et al., Determination of pharmacokinetic-pharma…, Frontiers in microbiology (2024)
  ·  DOI: [10.3389/fmicb.2024.1498219](https://doi.org/10.3389/fmicb.2024.1498219)

<div class="pk-model-meta" hidden drug="oxytetracycline" model-id="Oxytetracycline_Winter2024_reference" status="rejected" stale="true" population="calves and adult cattle" measured-compound="oxytetracycline" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvV1 (adult) | `Q63` · V1 | 143 | L | 0.14300000000000002 | L | not captured | tv_prefix (0.95) | tab1:row3:col1, tab1:row3:col3, tab1:row3:col4, tab1:row3:col5, tab1:row3:col6 | — | not captured |
| tvV2 (adult) | `Q64` · V2 | 973 | L | 0.973 | L | not captured | tv_prefix (0.95) | tab1:row4:col1, tab1:row4:col3, tab1:row4:col4, tab1:row4:col5, tab1:row4:col6 | — | not captured |
| tvV3 (adult) | `Q77` · V3 | 2458 | L | 2.458 | L | not captured | tv_prefix (0.95) | tab1:row5:col1, tab1:row5:col3, tab1:row5:col4, tab1:row5:col5, tab1:row5:col6 | — | not captured |
| tvCl (adult) | `Q22` · CL | 68.35 | L/h | 1.898611111111111e-05 | L/h | not captured | tv_prefix (0.95) | tab1:row6:col1, tab1:row6:col3, tab1:row6:col4, tab1:row6:col5, tab1:row6:col6 | — | not captured |
| tvKa1 | `Q49` · kabs | 0.235 | 1/h | 6.527777777777778e-05 | 1/h | not captured | llm (0.6) | tab1:row9:col1, tab1:row9:col2, tab1:row9:col3, tab1:row9:col4, tab1:row9:col5, tab1:row9:col6 | — | not captured |
| tvF1 | `Q40` · Fab | 1.422 | not captured | not captured | not captured | not captured | tv_prefix (0.95) | tab1:row13:col1, tab1:row13:col3, tab1:row13:col4, tab1:row13:col5, tab1:row13:col6, tab1:row13:col7 | — | not captured |
| dadult_calfCla | `Q900` · equation variable | 0.570 | not captured | not captured | not captured | not captured | llm (0.6) | tab1:row14:col1, tab1:row14:col3, tab1:row14:col4, tab1:row14:col5, tab1:row14:col6 | — | not captured |
| nTlag | `Q83` · tlag | 0.040549 | h | 145.9764 | h | not captured | llm (0.6) | Winter_2024_table_2:row4:col1, Winter_2024_table_2:row4:col2, Winter_2024_table_2:row4:col3, Winter_2024_table_2:row4:col4 | — | not captured |
| theta_tlag_category | `Q900` · theta_tlag_category | 15.74 | not captured | not captured | not captured | not captured | not captured (not captured) | tab1:row11:col1, tab1:row11:col3, tab1:row11:col4, tab1:row11:col5, tab1:row11:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section covariance: 'nKa1' routed out of structural estimates ('Correlation')
- table section covariance: 'nKa2' routed out of structural estimates ('Correlation')
- table section covariance: 'nF1' routed out of structural estimates ('Correlation')
- table section covariance: 'nTlag' routed out of structural estimates ('Correlation')
- table section covariance: 'nFrapid' routed out of structural estimates ('Correlation')
- table section covariance: 'nV1' routed out of structural estimates ('Correlation')
- table section covariance: 'nV2' routed out of structural estimates ('Correlation')
- table section covariance: 'nV3' routed out of structural estimates ('Correlation')
- table section covariance: 'nCl' routed out of structural estimates ('Correlation')
- table section covariance: 'nCl2' routed out of structural estimates ('Correlation')
- table section covariance: 'nCl3' routed out of structural estimates ('Correlation')
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'adult' (V1)
- unit_dimension_unknown: 'adult' (V2)
- unit_dimension_unknown: 'adult' (V3)
- unit_dimension_unknown: 'adult' (CL)
- dropped duplicate Q22 ('tvCld2 (adult)', value '549') — already have one for this compound
- dropped duplicate Q22 ('tvCld3 (adult)', value '23.20') — already have one for this compound
- dropped duplicate Q49 ('tvKa2', value '0.0491') — already have one for this compound
- dropped unlinked row (NIL): 'tvFrapid' — extend the ontology if this is a real PK parameter (source ['tab1:row12:col1', 'tab1:row12:col3', 'tab1:row12:col4', 'tab1:row12:col5', 'tab1:row12:col6', 'tab1:row12:col7'])
- dropped duplicate Q900 ('dadult_calfCld2b', value '0.201') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfCld3c', value '0.228') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV1d', value '0.353') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV2e', value '0.154') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV3f', value '0.535') — already have one for this compound
- routed 'tvCMultStdev' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'nKa1' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row1:col1'])
- dropped unlinked row (NIL): 'nKa2' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row2:col1', 'Winter_2024_table_2:row2:col2'])
- dropped unlinked row (NIL): 'nF1' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row3:col1', 'Winter_2024_table_2:row3:col2', 'Winter_2024_table_2:row3:col3'])
- dropped unlinked row (NIL): 'nFrapid' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row5:col1', 'Winter_2024_table_2:row5:col2', 'Winter_2024_table_2:row5:col3', 'Winter_2024_table_2:row5:col4', 'Winter_2024_table_2:row5:col5'])
- dropped duplicate Q63 ('nV1', value '0.527444') — already have one for this compound
- dropped duplicate Q64 ('nV2', value '0.031032') — already have one for this compound
- dropped duplicate Q77 ('nV3', value '0.107616') — already have one for this compound
- dropped unlinked row (NIL): 'nCl' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row9:col6', 'Winter_2024_table_2:row9:col7', 'Winter_2024_table_2:row9:col8', 'Winter_2024_table_2:row9:col9'])
- dropped unlinked row (NIL): 'nCl2' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row10:col6', 'Winter_2024_table_2:row10:col7', 'Winter_2024_table_2:row10:col8', 'Winter_2024_table_2:row10:col9', 'Winter_2024_table_2:row10:col10'])
- dropped unlinked row (NIL): 'nCl3' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row11:col6', 'Winter_2024_table_2:row11:col7', 'Winter_2024_table_2:row11:col8', 'Winter_2024_table_2:row11:col9', 'Winter_2024_table_2:row11:col10', 'Winter_2024_table_2:row11:col11'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V1 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V2 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V3 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- implicit units: 'tvV1 (adult)' → L (from the popPK convention: 'V1 is a volume of distribution. In population PK modeling for cattle, volumes are typically expressed in liters (L). The')
- implicit units: 'tvV2 (adult)' → L (from the popPK convention: 'V2 is a volume of distribution. In population PK modeling for cattle, volumes are typically expressed in liters (L). The')
- implicit units: 'tvV3 (adult)' → L (from the popPK convention: 'V3 is a volume of distribution. In population PK modeling for cattle, volumes are typically expressed in liters (L). The')
- implicit units: 'tvCl (adult)' → L/h (from the popPK convention: 'Cl is total clearance. In population PK modeling, clearances are typically expressed in L/h. The magnitude (68.35) is co')
- implicit units: 'tvKa1' → 1/h (from the popPK convention: 'Ka1 is an absorption rate constant. First-order rate constants are typically expressed in 1/h. The magnitude (0.235) is ')
- implicit units: 'nTlag' → h (from the popPK convention: 'nTlag is a lag time. Lag times are typically expressed in hours (h). The magnitude (0.040549) is consistent with a lag t')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxytetracycline
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell tab1:row7:col7 = 'Clearance of distribution to V2 (adult)'
- unparsed cell tab1:row8:col7 = 'Clearance of distribution to V3 (adult)'
- unparsed cell tab1:row9:col7 = 'first rate constant of absorption corresponding to a Mean Absorption Time of 4.57 h'
- unparsed cell tab1:row10:col7 = 'second rate of absorption corresponding to a Mean Absorption Time of 22.1 h'
- unparsed cell tab1:row11:col7 = 'Lag-time between Ka1 and Ka2'
- unparsed cell tab1:row15:col7 = 'Categorical covariate on Cld2'
- unparsed cell tab1:row16:col7 = 'Categorical covariate on Cld3'
- unparsed cell tab1:row17:col7 = 'Categorical covariate on V1'
- unparsed cell tab1:row18:col7 = 'Categorical covariate on V2'
- unparsed cell tab1:row19:col7 = 'Categorical covariate on V3'
- companion parameter table 2 transcribed (83 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.136 (3/22 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[dadult_calfcla]` | 0.570 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[dadult_calfv3f]` | not captured | 0.358 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ntlag]` | 0.040549 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q83_category]` | not captured | 14.96 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_tlag_category]` | 15.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvcl].rse_percent` | not captured | 68.35 | mismatch |
| `gpt-oss:120b` | `parameters[tvcl].value` | 68.35 | 62.67 | mismatch |
| `gpt-oss:120b` | `parameters[tvcld2]` | not captured | 485 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvf1]` | 1.422 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvfrapid]` | not captured | 0.757 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvka1].rse_percent` | not captured | 0.235 | mismatch |
| `gpt-oss:120b` | `parameters[tvka1].value` | 0.235 | 0.214 | mismatch |
| `gpt-oss:120b` | `parameters[tvv1].rse_percent` | not captured | 143 | mismatch |
| `gpt-oss:120b` | `parameters[tvv1].value` | 143 | 126 | mismatch |
| `gpt-oss:120b` | `parameters[tvv2].rse_percent` | not captured | 973 | mismatch |
| `gpt-oss:120b` | `parameters[tvv2].value` | 973 | 914 | mismatch |
| `gpt-oss:120b` | `parameters[tvv3].rse_percent` | not captured | 2458 | mismatch |
| `gpt-oss:120b` | `parameters[tvv3].value` | 2458 | 2564 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab1:row6:col1', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5', 'tab1:row6:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab1:row9:col1', 'tab1:row9:col2', 'tab1:row9:col3', 'tab1:row9:col4', 'tab1:row9:col5', 'tab1:row9:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row3:col1', 'tab1:row3:col3', 'tab1:row3:col4', 'tab1:row3:col5', 'tab1:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row4:col1', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5', 'tab1:row4:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row5:col1', 'tab1:row5:col3', 'tab1:row5:col4', 'tab1:row5:col5', 'tab1:row5:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Winter_2024_table_2:row4:col1', 'Winter_2024_table_2:row4:col2', 'Winter_2024_table_2:row4:col3', 'Winter_2024_table_2:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 68.35 | not captured | not captured | ['tab1:row6:col1', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5', 'tab1:row6:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 68.3 L/h | not captured | not captured | ['tab1:row6:col1', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5', 'tab1:row6:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 143 L | not captured | not captured | ['tab1:row3:col1', 'tab1:row3:col3', 'tab1:row3:col4', 'tab1:row3:col5', 'tab1:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 973 L | not captured | not captured | ['tab1:row4:col1', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5', 'tab1:row4:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_oxytetracycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Winter_2024` / `Winter_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 02:53 UTC</sub>
