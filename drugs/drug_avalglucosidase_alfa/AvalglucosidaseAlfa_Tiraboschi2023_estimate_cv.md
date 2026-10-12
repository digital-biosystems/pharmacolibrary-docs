<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;avalglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_avalglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Tiraboschi_2023 \u00b7 estimate_cv&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avalglucosidase alfa — `AvalglucosidaseAlfa_Tiraboschi2023_estimate_cv`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722), gpt-oss:120b (not confirmed, agreement 0.632). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The avalglucosidase alfa record was rejected because a structural parameter failed a dimensional consistency check, and Km's reported unit µg/mL could not be converted to SI, so Km reached the model builder without an SI value.**

The two-compartment model for avalglucosidase alfa carries CL 0.808 L/h, V1 3.37 L, V2 296 L, V3 1.31 L, Q2 0.254 L/h, Q3 1.87 L/h, Vmax 12 mg/h and Km 0.541 µg/mL, but one structural parameter shows a dimension mismatch. Km's reported unit µg/mL could not be converted to SI units, so the parameter arrived without an SI value. A second reader also disagreed on the weight covariate effects: the record assigns 0.463 and 0.896 to the central-volume and clearance effects, while the second reader read 0.896 and 0.463 as effects on the intercompartmental clearances and returned null for the recorded effects; the covariate forms on clearance (linear_fractional) were also disputed. Extracted — avalglucosidase alfa: CL 0.808 L/h, V1 3.37 L, Vmax 12 mg/h, Km 0.541 µg/mL, Q 0.254 L/h, V2 296 L, Q3 1.87 L/h, V3 1.31 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has avalglucosidase_alfa, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:14.947358+00:00) predates the upstream re-run (2026-10-05 10:59:50.643363+00:00). Current validate status: `rejected`.

## Citation
Tiraboschi G et al., Population pharmacokinetic modeling and…, Journal of pharmacokinetics… (2023)
  ·  DOI: [10.1007/s10928-023-09874-8](https://doi.org/10.1007/s10928-023-09874-8)

<div class="pk-model-meta" hidden drug="avalglucosidase alfa" model-id="AvalglucosidaseAlfa_Tiraboschi2023_estimate_cv" status="rejected" stale="true" population="pediatric and adult patients with Pompe disease" measured-compound="avalglucosidase_alfa" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.808 | L/h | 2.2444444444444445e-07 | [l] / [h] | not captured | exact (1.0) | Tab3:row1:col1 | — | not captured |
| V1 (L) | `Q63` · V1 | 3.37 | L | 0.00337 | [l] | not captured | exact (1.0) | Tab3:row2:col1 | — | not captured |
| Vmax (mg/h) | `Q66` · Vmax | 12 | mg/h | not captured | [mg] / [h] | not captured | special_case (0.95) | Tab3:row3:col1 | — | not captured |
| Km (µg/mL) | `Q1` · Km | 0.541 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | Tab3:row4:col1 | — | not captured |
| Q2 (L/h) | `Q30` · Q | 0.254 | L/h | 7.055555555555556e-08 | [l] / [h] | not captured | special_case (0.95) | Tab3:row5:col1 | — | not captured |
| V2 (L) | `Q64` · V2 | 296 | L | 0.296 | [l] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| Q3 (L/h) | `Q308` · Q3 | 1.87 | L/h | 5.194444444444445e-07 | [l] / [h] | not captured | exact (1.0) | Tab3:row7:col1 | — | not captured |
| V3 (L) | `Q77` · V3 | 1.31 | L | 0.0013100000000000002 | [l] | not captured | exact (1.0) | Tab3:row8:col1 | — | not captured |
| effect_of_wt_on_vmc | `Q900` · effect_of_wt_on_vmc | 0.463 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row12:col1 | — | not captured |
| theta_cl_wt | `Q900` · theta_cl_wt | 0.896 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row10:col1 | — | not captured |
| theta_v1_wt | `Q900` · theta_v1_wt | 0.661 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row11:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (cv %)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_mismatch: 'Vmax (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q30 ('Qpc (L/h)', value '0.0157') — already have one for this compound
- covariate level 'Effect of WT on Vmc' → Q900:effect_of_wt_on_vmc = 0.463 (linear_fractional on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avalglucosidase_alfa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate (cv %)' subgroup of Tiraboschi_2023 (paper reports 3 populations: 20 mg/kg, 40 mg/kg, estimate (cv %))
- molar mass: none found for 'avalglucosidase_alfa' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab3:row1:col2 = '3.33%'
- unparsed cell Tab3:row1:col3 = '[0.755;0.862]'
- unparsed cell Tab3:row1:col5 = '[0.674;0.874]'
- unparsed cell Tab3:row2:col2 = '2.21%'
- unparsed cell Tab3:row2:col3 = '[3.22;3.52]'
- unparsed cell Tab3:row2:col5 = '[3;3.57]'
- unparsed cell Tab3:row3:col2 = '4.59%'
- unparsed cell Tab3:row3:col3 = '[10.9;13.1]'
- unparsed cell Tab3:row3:col5 = '[9.28;15.1]'
- unparsed cell Tab3:row4:col2 = '4.45%'
- unparsed cell Tab3:row4:col3 = '[0.493;0.589]'
- unparsed cell Tab3:row4:col5 = '[0.395;0.728]'
- unparsed cell Tab3:row9:col2 = '11.60%'
- unparsed cell Tab3:row9:col3 = '[0.0121;0.0194]'
- unparsed cell Tab3:row9:col5 = '[0.00826;0.0227]'
- unparsed cell Tab3:row10:col2 = '7.91%'
- unparsed cell Tab3:row10:col3 = '[0.754;1.04]'
- unparsed cell Tab3:row10:col5 = '[0.618;1.1]'
- unparsed cell Tab3:row11:col2 = '6.29%'
- unparsed cell Tab3:row11:col3 = '[0.578;0.744]'
- unparsed cell Tab3:row11:col5 = '[0.484;0.78]'
- unparsed cell Tab3:row12:col2 = '12%'
- unparsed cell Tab3:row12:col3 = '[0.352;0.574]'
- unparsed cell Tab3:row12:col5 = '[0.166;0.652]'
- unparsed cell Tab3:row14:col1 = '0.0907 (30.8%)'
- unparsed cell Tab3:row14:col2 = '18.50%'
- unparsed cell Tab3:row14:col3 = '[0.0578;0.124] (7.56%)'
- unparsed cell Tab3:row14:col5 = '[0.0573;0.136]'
- unparsed cell Tab3:row15:col1 = '0.0184 (13.6%)'
- unparsed cell Tab3:row15:col2 = '35.20%'
- unparsed cell Tab3:row15:col3 = '[0.00569;0.031] (28.3%)'
- unparsed cell Tab3:row15:col5 = '[0.00476;0.0388]'
- unparsed cell Tab3:row16:col1 = '0.118 (35.4%)'
- unparsed cell Tab3:row16:col2 = '25.40%'
- unparsed cell Tab3:row16:col3 = '[0.0593;0.177] (30.4%)'
- unparsed cell Tab3:row16:col5 = '[0.0201;0.236]'
- unparsed cell Tab3:row17:col1 = '0.243 (52.4%)'
- unparsed cell Tab3:row17:col2 = '27.90%'
- unparsed cell Tab3:row17:col3 = '[0.11;0.376] (29.6%)'
- unparsed cell Tab3:row17:col5 = '[0.0702;0.417]'
- unparsed cell Tab3:row18:col1 = '1.23 (156%)'
- unparsed cell Tab3:row18:col2 = '26.20%'
- unparsed cell Tab3:row18:col3 = '[0.599;1.86] (30.6%)'
- unparsed cell Tab3:row18:col5 = '[0.492;3.48]'
- unparsed cell Tab3:row20:col1 = '0.12 (34.6%)'
- unparsed cell Tab3:row20:col2 = '2.43%'
- unparsed cell Tab3:row20:col3 = '[0.114;0.125]'
- unparsed cell Tab3:row20:col5 = '[0.0967;0.136]'
- unparsed cell Tiraboschi_2023_table_4:row3:col3 = '[157; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row3:col4 = '[591; 463–1089]'
- unparsed cell Tiraboschi_2023_table_4:row3:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row3:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row4:col3 = '[266; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row4:col4 = '[1164; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row6:col6 = '[216; 195–250]'
- unparsed cell Tiraboschi_2023_table_4:row6:col7 = '[1419; 1247–1584]'
- unparsed cell Tiraboschi_2023_table_4:row7:col2 = '[157; 151–256]'
- unparsed cell Tiraboschi_2023_table_4:row7:col3 = '[157; 151–256]'
- unparsed cell Tiraboschi_2023_table_4:row7:col4 = '[591; 576–1089]'
- unparsed cell Tiraboschi_2023_table_4:row7:col6 = '[320; 232–382]'
- unparsed cell Tiraboschi_2023_table_4:row7:col7 = '[2181; 1536–2620]'
- unparsed cell Tiraboschi_2023_table_4:row9:col2 = '[268; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row9:col3 = '[268; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row9:col4 = '[1141; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row10:col2 = '[265; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row10:col3 = '[265; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row10:col4 = '[1264; 824–2086]'
- unparsed cell Tiraboschi_2023_table_4:row12:col2 = '[209; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row12:col3 = '[209; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row12:col4 = '[833; 463–1089]'
- unparsed cell Tiraboschi_2023_table_4:row12:col6 = '[250; 195–381]'
- unparsed cell Tiraboschi_2023_table_4:row12:col7 = '[1584; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row13:col2 = '[263; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row13:col3 = '[263; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row13:col4 = '[1164; 749–2086]'
- unparsed cell Tiraboschi_2023_table_4:row14:col2 = '[307; 273–378]'
- unparsed cell Tiraboschi_2023_table_4:row14:col3 = '[307; 273–378]'
- unparsed cell Tiraboschi_2023_table_4:row14:col4 = '[1333; 997–2149]'
- unparsed cell Tiraboschi_2023_table_4:row16:col2 = '[254; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row16:col3 = '[254; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row16:col4 = '[1053; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row16:col6 = '[232; 195–328]'
- unparsed cell Tiraboschi_2023_table_4:row16:col7 = '[1536; 1247–2277]'
- unparsed cell Tiraboschi_2023_table_4:row17:col2 = '[271; 151–378]'
- unparsed cell Tiraboschi_2023_table_4:row17:col3 = '[271; 151–378]'
- unparsed cell Tiraboschi_2023_table_4:row17:col4 = '[1188; 576–2086]'
- unparsed cell Tiraboschi_2023_table_4:row17:col6 = '[275; 216–382]'
- unparsed cell Tiraboschi_2023_table_4:row17:col7 = '[1872; 1419–2620]'
- unparsed cell Tiraboschi_2023_table_4:row19:col2 = '[231; 151–279]'
- unparsed cell Tiraboschi_2023_table_4:row19:col3 = '[231; 151–279]'
- unparsed cell Tiraboschi_2023_table_4:row19:col4 = '[933; 591–1175]'
- unparsed cell Tiraboschi_2023_table_4:row19:col6 = '[275; 232–381]'
- unparsed cell Tiraboschi_2023_table_4:row19:col7 = '[1872; 1536–2620]'
- unparsed cell Tiraboschi_2023_table_4:row20:col2 = '[255; 255–278]'
- unparsed cell Tiraboschi_2023_table_4:row20:col3 = '[255; 255–278]'
- unparsed cell Tiraboschi_2023_table_4:row20:col4 = '[1204; 1204–1264]'
- unparsed cell Tiraboschi_2023_table_4:row21:col2 = '[265; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row21:col3 = '[265; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row21:col4 = '[1141; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row21:col6 = '[216; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row21:col7 = '[1419; 1247–2449]'
- unparsed cell Tiraboschi_2023_table_4:row23:col2 = '[266; 189–368]'
- unparsed cell Tiraboschi_2023_table_4:row23:col3 = '[266; 189–368]'
- unparsed cell Tiraboschi_2023_table_4:row23:col4 = '[1179; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row24:col2 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row24:col3 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row24:col4 = '[1072; 463–1764]'
- unparsed cell Tiraboschi_2023_table_4:row24:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row24:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row26:col2 = '[265; 265–265]'
- unparsed cell Tiraboschi_2023_table_4:row26:col3 = '[265; 265–265]'
- unparsed cell Tiraboschi_2023_table_4:row27:col2 = '[301; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row27:col3 = '[301; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row27:col4 = '[1459; 824–2086]'
- unparsed cell Tiraboschi_2023_table_4:row28:col2 = '[259; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row28:col3 = '[259; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row28:col4 = '[1140; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row28:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row28:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row30:col2 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row30:col3 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row30:col4 = '[1038; 463–2086]'
- unparsed cell Tiraboschi_2023_table_4:row30:col6 = '[250; 232–275]'
- unparsed cell Tiraboschi_2023_table_4:row30:col7 = '[1584; 1536–1872]'
- unparsed cell Tiraboschi_2023_table_4:row31:col2 = '[273; 189–366]'
- unparsed cell Tiraboschi_2023_table_4:row31:col3 = '[273; 189–366]'
- unparsed cell Tiraboschi_2023_table_4:row31:col4 = '[1179; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row31:col6 = '[320; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row31:col7 = '[2181; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row33:col2 = '[255; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row33:col3 = '[255; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row33:col4 = '[1118; 737–1764]'
- unparsed cell Tiraboschi_2023_table_4:row34:col2 = '[265; 139–368]'
- unparsed cell Tiraboschi_2023_table_4:row34:col3 = '[265; 139–368]'
- unparsed cell Tiraboschi_2023_table_4:row34:col4 = '[1189; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row34:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row34:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row36:col2 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row36:col3 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row36:col4 = '[1160; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row37:col2 = '[256; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row37:col3 = '[256; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row37:col4 = '[1089; 463–1846]'
- unparsed cell Tiraboschi_2023_table_4:row37:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row37:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row39:col2 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row39:col3 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row39:col4 = '[1164; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row40:col2 = '[255; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row40:col3 = '[255; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row40:col4 = '[1053; 463–1846]'
- unparsed cell Tiraboschi_2023_table_4:row40:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row40:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row42:col2 = '[252; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row42:col3 = '[252; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row42:col4 = '[1053; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row42:col6 = '[250; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row42:col7 = '[1584; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row43:col2 = '[273; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row43:col3 = '[273; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row43:col4 = '[1189; 737–2086]'
- unparsed cell Tiraboschi_2023_table_4:row43:col6 = '[314; 275–320]'
- unparsed cell Tiraboschi_2023_table_4:row43:col7 = '[2116; 1872–2181]'
- unparsed cell Tiraboschi_2023_table_4:row45:col2 = '[271; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row45:col3 = '[271; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row45:col4 = '[1188; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row46:col2 = '[256; 151–355]'
- unparsed cell Tiraboschi_2023_table_4:row46:col3 = '[256; 151–355]'
- unparsed cell Tiraboschi_2023_table_4:row46:col4 = '[1053; 591–1566]'
- unparsed cell Tiraboschi_2023_table_4:row46:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row46:col7 = '[1872; 1247–2620]'
- companion parameter table 4 transcribed (86 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.722 (13/18 fields) | 5 |
| `gpt-oss:120b` | not confirmed | 0.632 (12/19 fields) | 7 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_wt]` | 0.896 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_wt]` | not captured | 0.896 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | avalglucosidase_alfa | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | avalglucosidase_alfa | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[effect_of_wt_on_vmc]` | 0.463 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_wt]` | 0.896 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_wt]` | not captured | 0.896 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_wt]` | not captured | 0.463 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | avalglucosidase_alfa | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | avalglucosidase_alfa | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['Tab3:row3:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.808 | not captured | not captured | ['Tab3:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.808 L/h | not captured | not captured | ['Tab3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.37 L | not captured | not captured | ['Tab3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 296 L | not captured | not captured | ['Tab3:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_avalglucosidase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tiraboschi_2023` / `Tiraboschi_2023::estimate_cv`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 10:59 UTC</sub>
