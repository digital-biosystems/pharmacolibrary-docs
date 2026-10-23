<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;avalglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_avalglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Tiraboschi_2023 \u00b7 20_mg_kg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avalglucosidase alfa — `AvalglucosidaseAlfa_Tiraboschi2023_20_mg_kg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-05 10:59 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="avalglucosidase alfa" model-id="AvalglucosidaseAlfa_Tiraboschi2023_20_mg_kg" status="rejected" stale="true" population="pediatric and adult patients with Pompe disease" measured-compound="avalglucosidase_alfa" parameterization="mechanistic" topology="1C"></div>

## Citation
Tiraboschi G, Marchionni D, Tuffal G, Fabre D, Martinez JM, Haack KA et al. Population pharmacokinetic modeling and dosing simulation of avalglucosidase alfa for selecting alternative dosing regimen in pediatric patients with late-onset pompe disease. Journal of pharmacokinetics and pharmacodynamics 50(6):461–474 (2023).
  ·  DOI: [10.1007/s10928-023-09874-8](https://doi.org/10.1007/s10928-023-09874-8)

## Population and dosing

**Population:** pediatric and adult patients with Pompe disease · condition Pompe disease · age group mixed · n = &gt;=91.

**Dosing:** 1400, 2800 mg, iv, multiple, every 336 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has avalglucosidase_alfa, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL CRN (mL/min/1.73 m²) | Q22 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'IOPD' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row3:col1', 'Tiraboschi_2023_table_4:row3:col2'])
- dropped unlinked row (NIL): 'LOPD' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row4:col1', 'Tiraboschi_2023_table_4:row4:col2'])
- dropped unlinked row (NIL): '&lt; 6' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row6:col1', 'Tiraboschi_2023_table_4:row6:col2', 'Tiraboschi_2023_table_4:row6:col3', 'Tiraboschi_2023_table_4:row6:col4'])
- dropped unlinked row (NIL): '6–11' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row7:col1'])
- dropped unlinked row (NIL): '12–17' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row8:col1', 'Tiraboschi_2023_table_4:row8:col2', 'Tiraboschi_2023_table_4:row8:col3', 'Tiraboschi_2023_table_4:row8:col4'])
- dropped unlinked row (NIL): '18–64' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row9:col1'])
- dropped unlinked row (NIL): '≥ 65' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row10:col1'])
- dropped unlinked row (NIL): '&lt; 50' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row12:col1'])
- dropped unlinked row (NIL): '50–100' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row13:col1'])
- dropped unlinked row (NIL): '≥ 100' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row14:col1'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row16:col1'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row17:col1'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row19:col1'])
- dropped unlinked row (NIL): 'Black' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row20:col1'])
- dropped unlinked row (NIL): 'Caucasian' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row21:col1'])
- dropped unlinked row (NIL): 'Naïve' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row23:col1'])
- dropped unlinked row (NIL): 'Pre-treated' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row24:col1'])
- unit_dimension_unknown: 'mL/min/1.73 m²' (CL)
- dropped unlinked row (NIL): '30:60' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row26:col1', 'Tiraboschi_2023_table_4:row26:col4'])
- dropped unlinked row (NIL): '60:90' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row27:col1'])
- dropped unlinked row (NIL): '≥ 90' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row28:col1'])
- dropped unlinked row (NIL): '&lt; 45e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row30:col1'])
- dropped unlinked row (NIL): '≥ 45e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row31:col1'])
- dropped unlinked row (NIL): '&lt; 73e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row33:col1'])
- dropped unlinked row (NIL): '≥ 73e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row34:col1'])
- dropped unlinked row (NIL): '&lt; 66e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row36:col1'])
- dropped unlinked row (NIL): '≥ 66e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row37:col1'])
- dropped unlinked row (NIL): '&lt; 64e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row39:col1'])
- dropped unlinked row (NIL): '≥ 64e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row40:col1'])
- dropped unlinked row (NIL): '&lt; 6.8e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row42:col1'])
- dropped unlinked row (NIL): '≥ 6.8e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row43:col1'])
- dropped unlinked row (NIL): '&lt; 580e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row45:col1'])
- dropped unlinked row (NIL): '≥ 580e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row46:col1'])
- table mostly unlinked (32/33 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avalglucosidase_alfa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: '20 mg/kg' subgroup of Tiraboschi_2023 (paper reports 3 populations: 20 mg/kg, 40 mg/kg, estimate (cv %))
- molar mass: none found for 'avalglucosidase_alfa' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[&lt; 45e]` |  | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[&lt; 73e]` |  | 38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[≥ 45e]` |  | 44 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | avalglucosidase_alfa | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | avalglucosidase_alfa | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bavalglucosidase_alfa%5D%20AvalglucosidaseAlfa_Tiraboschi2023_20_mg_kg&body=Drug%3A%20avalglucosidase_alfa%0ARecord%3A%20AvalglucosidaseAlfa_Tiraboschi2023_20_mg_kg%0APaper%3A%20Tiraboschi_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_avalglucosidase_alfa/AvalglucosidaseAlfa_Tiraboschi2023_20_mg_kg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 10:59 UTC</sub>
