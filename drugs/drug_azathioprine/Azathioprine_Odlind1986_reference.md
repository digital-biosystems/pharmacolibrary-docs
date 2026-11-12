<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;azathioprine&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/&quot;},{&quot;label&quot;:&quot;Odlind_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azathioprine_Lin2021_reference&quot;,&quot;label&quot;:&quot;Lin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Lin2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Simon_1997_RCR&quot;,&quot;label&quot;:&quot;Simon_1997 \u00b7 RCR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/pd_Simon_1997_RCR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azathioprine — `Azathioprine_Odlind1986_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> KD and AUC have no unit.

<div class="pk-model-meta" hidden drug="azathioprine" model-id="Azathioprine_Odlind1986_reference" status="needs_review" stale="false" population="uremic patients" measured-compound="azathioprine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Odlind B, Hartvig P, Lindström B, Lönnerholm G, Tufveson G, Grefberg N. Serum azathioprine and 6-mercaptopurine levels and immunosuppressive activity after azathioprine in uremic patients. International journal of immunopharmacology 8(1):1–11 (1986).
  ·  DOI: [10.1016/0192-0561(86)90067-6](https://doi.org/10.1016/0192-0561(86)90067-6)

## Population and dosing

**Population:** uremic patients · condition uremia · age group adult · n = , the subjects are people; do not assume it..

**Dosing:** 100 mg, iv, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MC | equation variable | 109 |  |
| KD | KD | 40 |  |
| GU | FG | 37 |  |
| t,,,a, | t1/2α | 5 | min |
| t~.a | kel | 40 | 1/min |
| A UC | AUC | 138 |  |
| Cl | CL | 2.6 | l/min |
| Vc, | V1 | 150 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**KD and AUC have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — azathioprine: KD 40, FG 37, t1/2α 5 min, kel 40 1/min, AUC 138, CL 2.6 l/min, V1 150 l.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MC | `Q900` · equation variable | 109 |  |  |  |  | llm (0.6) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col7 |
| KD | `Q331` · KD | 40 |  |  |  |  | exact (1) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col4, tab_1:row5:col5, tab_1:row5:col7 |
| GU | `Q41` · FG | 37 |  |  |  |  | llm (0.6) | tab_1:row18:col1, tab_1:row18:col2, tab_1:row18:col3, tab_1:row18:col5, tab_1:row18:col7 |
| t,,,a, | `Q59` · t1/2α | 5 | min | 300 | s | h | llm (0.6) | Odlind_1986_table_3:row1:col2, Odlind_1986_table_3:row2:col2, Odlind_1986_table_3:row3:col2, Odlind_1986_table_3:row4:col2, Odlind_1986_table_3:row5:col2, Odlind_1986_table_3:row6:col2, Odlind_1986_table_3:row7:col2, Odlind_1986_table_3:row8:col2, Odlind_1986_table_3:row9:col2, Odlind_1986_table_3:row11:col2, Odlind_1986_table_3:row12:col2, Odlind_1986_table_3:row13:col2, Odlind_1986_table_3:row14:col2, Odlind_1986_table_3:row15:col2, Odlind_1986_table_3:row17:col2 |
| t~.a | `Q47` · kel | 40 | 1/min | 0.6667 | 1/s | 1/h | exact (1) | Odlind_1986_table_3:row1:col4, Odlind_1986_table_3:row2:col4, Odlind_1986_table_3:row3:col4, Odlind_1986_table_3:row4:col4, Odlind_1986_table_3:row5:col4, Odlind_1986_table_3:row6:col4, Odlind_1986_table_3:row7:col4, Odlind_1986_table_3:row8:col4, Odlind_1986_table_3:row9:col4, Odlind_1986_table_3:row11:col4, Odlind_1986_table_3:row12:col4, Odlind_1986_table_3:row13:col4, Odlind_1986_table_3:row14:col4, Odlind_1986_table_3:row15:col4, Odlind_1986_table_3:row17:col4, Odlind_1986_table_3:row18:col4, Odlind_1986_table_3:row19:col4 |
| A UC | `Q88` · AUC | 138 |  |  |  |  | space_fold (0.95) | Odlind_1986_table_3:row1:col5, Odlind_1986_table_3:row2:col5, Odlind_1986_table_3:row3:col5, Odlind_1986_table_3:row4:col5, Odlind_1986_table_3:row5:col5, Odlind_1986_table_3:row6:col5, Odlind_1986_table_3:row7:col5, Odlind_1986_table_3:row8:col5, Odlind_1986_table_3:row9:col5, Odlind_1986_table_3:row11:col5, Odlind_1986_table_3:row12:col5, Odlind_1986_table_3:row13:col5, Odlind_1986_table_3:row14:col5, Odlind_1986_table_3:row15:col5, Odlind_1986_table_3:row17:col5, Odlind_1986_table_3:row18:col5, Odlind_1986_table_3:row19:col5 |
| Cl | `Q22` · CL | 2.6 | l/min | 4.333e-05 | m3/s | L/h | exact (1) | Odlind_1986_table_3:row1:col6, Odlind_1986_table_3:row2:col6, Odlind_1986_table_3:row3:col6, Odlind_1986_table_3:row4:col6, Odlind_1986_table_3:row5:col6, Odlind_1986_table_3:row6:col6, Odlind_1986_table_3:row7:col6, Odlind_1986_table_3:row8:col6, Odlind_1986_table_3:row9:col6, Odlind_1986_table_3:row11:col6, Odlind_1986_table_3:row12:col6, Odlind_1986_table_3:row13:col6, Odlind_1986_table_3:row14:col6, Odlind_1986_table_3:row15:col6, Odlind_1986_table_3:row17:col6, Odlind_1986_table_3:row18:col6, Odlind_1986_table_3:row19:col6 |
| Vc, | `Q63` · V1 | 150 | l | 0.15 | m3 | L | llm_confirmed (0.6) | Odlind_1986_table_3:row1:col7, Odlind_1986_table_3:row2:col7, Odlind_1986_table_3:row3:col7, Odlind_1986_table_3:row4:col7, Odlind_1986_table_3:row5:col7, Odlind_1986_table_3:row6:col7, Odlind_1986_table_3:row7:col7, Odlind_1986_table_3:row8:col7, Odlind_1986_table_3:row9:col7, Odlind_1986_table_3:row11:col7, Odlind_1986_table_3:row12:col7, Odlind_1986_table_3:row13:col7, Odlind_1986_table_3:row14:col7, Odlind_1986_table_3:row15:col7, Odlind_1986_table_3:row17:col7, Odlind_1986_table_3:row18:col7, Odlind_1986_table_3:row19:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'v~' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ba' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mb' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mc' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'kd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'lej' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'jl' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'kal' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'un' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'jo' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'hp' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mr 1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'gu' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '.f' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'BA' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col4', 'tab_1:row2:col5', 'tab_1:row2:col7'])
- dropped unlinked row (NIL): 'MB' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col7'])
- dropped duplicate Q331 ('BH', value '100') — already have one for this compound
- dropped unlinked row (NIL): 'LEJ' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col7'])
- dropped unlinked row (NIL): 'JL' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4', 'tab_1:row8:col5', 'tab_1:row8:col7'])
- dropped unlinked row (NIL): 'KAL' — extend the ontology if this is a real PK parameter (source ['tab_1:row9:col1', 'tab_1:row9:col2', 'tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col5', 'tab_1:row9:col7'])
- dropped unlinked row (NIL): 'TM 1' — extend the ontology if this is a real PK parameter (source ['tab_1:row10:col1', 'tab_1:row10:col2', 'tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5', 'tab_1:row10:col7'])
- dropped unlinked row (NIL): 'UN' — extend the ontology if this is a real PK parameter (source ['tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4', 'tab_1:row12:col5', 'tab_1:row12:col7'])
- dropped unlinked row (NIL): 'JO' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col1', 'tab_1:row13:col2', 'tab_1:row13:col4', 'tab_1:row13:col5', 'tab_1:row13:col7'])
- dropped unlinked row (NIL): 'TO' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col1', 'tab_1:row14:col2', 'tab_1:row14:col3', 'tab_1:row14:col4', 'tab_1:row14:col5', 'tab_1:row14:col7'])
- dropped unlinked row (NIL): 'HP' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col1', 'tab_1:row15:col2', 'tab_1:row15:col3', 'tab_1:row15:col4', 'tab_1:row15:col5', 'tab_1:row15:col7'])
- dropped unlinked row (NIL): 'MR 1' — extend the ontology if this is a real PK parameter (source ['tab_1:row16:col1', 'tab_1:row16:col2', 'tab_1:row16:col3', 'tab_1:row16:col4', 'tab_1:row16:col5', 'tab_1:row16:col7'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_1:row19:col1', 'tab_1:row19:col3', 'tab_1:row19:col4', 'tab_1:row19:col5', 'tab_1:row19:col7'])
- dropped unlinked row (NIL): 'S.D.' — extend the ontology if this is a real PK parameter (source ['tab_1:row20:col1', 'tab_1:row20:col3', 'tab_1:row20:col4', 'tab_1:row20:col5', 'tab_1:row20:col7'])
- dropped duplicate Q900 ('t ,:,', value '5.0') — already have one for this compound
- linked 't~.a' as 'kel' → Q47 (kel) for  — compound marker removed
- dropped unlinked row (NIL): 'C,n~' — extend the ontology if this is a real PK parameter (source ['Odlind_1986_table_3:row2:col1', 'Odlind_1986_table_3:row3:col1', 'Odlind_1986_table_3:row4:col1', 'Odlind_1986_table_3:row5:col1', 'Odlind_1986_table_3:row6:col1', 'Odlind_1986_table_3:row7:col1', 'Odlind_1986_table_3:row8:col1', 'Odlind_1986_table_3:row9:col1', 'Odlind_1986_table_3:row11:col1', 'Odlind_1986_table_3:row12:col1', 'Odlind_1986_table_3:row13:col1', 'Odlind_1986_table_3:row14:col1', 'Odlind_1986_table_3:row15:col1', 'Odlind_1986_table_3:row17:col1', 'Odlind_1986_table_3:row18:col1', 'Odlind_1986_table_3:row19:col1'])
- implicit units: 'KD' — the LLM proposed 'µM', whose dimension does not fit Q331; left unset
- implicit units: 't,,,a,' → min (from the paper text: "The text states: 'The mean half-time for the first, rapid phase of elimination (tv~o) was 6.1 rain' (where 'rain' is an ")
- implicit units: 't~.a' → 1/min (from the popPK convention: 'The parameter is identified as kel, the elimination rate constant. In this paper, all time-related parameters (half-live')
- implicit units: 'A UC' — the LLM proposed 'µM × min', whose dimension does not fit Q88; left unset
- implicit units: 'Cl' → l/min (from the paper text: "The text states: 'The mean total plasma clearance (CI) was 6.9 1./min'. This explicitly provides the unit for total clea")
- implicit units: 'Vc,' → l (from the paper text: "The text states: 'The mean VD was 438 1.'. This explicitly provides the unit for the volume of distribution (Vd) as lite")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azathioprine
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles: 16 per-group rows of azathioprine other but 0 reference group(s) — kept as printed
- row roles: 3 per-group rows of azathioprine summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of azathioprine distribution_rate_constant but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 24/24 row label(s) assigned, 51 linked by role
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tab_1: unbound_uncertainty
- table Odlind_1986_table_3: ragged_grid
- table Odlind_1986_table_3: unparsed_numeric_cell
- transposed table Odlind_1986_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (114 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Odlind_1986_table_3:row1:col6', 'Odlind_1986_table_3:row2:col6', 'Odlind_1986_table_3:row3:col6', 'Odlind_1986_table_3:row4:col6', 'Odlind_1986_table_3:row5:col6', 'Odlind_1986_table_3:row6:col6', 'Odlind_1986_table_3:row7:col6', 'Odlind_1986_table_3:row8:col6', 'Odlind_1986_table_3:row9:col6', 'Odlind_1986_table_3:row11:col6', 'Odlind_1986_table_3:row12:col6', 'Odlind_1986_table_3:row13:col6', 'Odlind_1986_table_3:row14:col6', 'Odlind_1986_table_3:row15:col6', 'Odlind_1986_table_3:row17:col6', 'Odlind_1986_table_3:row18:col6', 'Odlind_1986_table_3:row19:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Odlind_1986_table_3:row1:col4', 'Odlind_1986_table_3:row2:col4', 'Odlind_1986_table_3:row3:col4', 'Odlind_1986_table_3:row4:col4', 'Odlind_1986_table_3:row5:col4', 'Odlind_1986_table_3:row6:col4', 'Odlind_1986_table_3:row7:col4', 'Odlind_1986_table_3:row8:col4', 'Odlind_1986_table_3:row9:col4', 'Odlind_1986_table_3:row11:col4', 'Odlind_1986_table_3:row12:col4', 'Odlind_1986_table_3:row13:col4', 'Odlind_1986_table_3:row14:col4', 'Odlind_1986_table_3:row15:col4', 'Odlind_1986_table_3:row17:col4', 'Odlind_1986_table_3:row18:col4', 'Odlind_1986_table_3:row19:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['Odlind_1986_table_3:row1:col2', 'Odlind_1986_table_3:row2:col2', 'Odlind_1986_table_3:row3:col2', 'Odlind_1986_table_3:row4:col2', 'Odlind_1986_table_3:row5:col2', 'Odlind_1986_table_3:row6:col2', 'Odlind_1986_table_3:row7:col2', 'Odlind_1986_table_3:row8:col2', 'Odlind_1986_table_3:row9:col2', 'Odlind_1986_table_3:row11:col2', 'Odlind_1986_table_3:row12:col2', 'Odlind_1986_table_3:row13:col2', 'Odlind_1986_table_3:row14:col2', 'Odlind_1986_table_3:row15:col2', 'Odlind_1986_table_3:row17:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Odlind_1986_table_3:row1:col7', 'Odlind_1986_table_3:row2:col7', 'Odlind_1986_table_3:row3:col7', 'Odlind_1986_table_3:row4:col7', 'Odlind_1986_table_3:row5:col7', 'Odlind_1986_table_3:row6:col7', 'Odlind_1986_table_3:row7:col7', 'Odlind_1986_table_3:row8:col7', 'Odlind_1986_table_3:row9:col7', 'Odlind_1986_table_3:row11:col7', 'Odlind_1986_table_3:row12:col7', 'Odlind_1986_table_3:row13:col7', 'Odlind_1986_table_3:row14:col7', 'Odlind_1986_table_3:row15:col7', 'Odlind_1986_table_3:row17:col7', 'Odlind_1986_table_3:row18:col7', 'Odlind_1986_table_3:row19:col7'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row5:col7'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['Odlind_1986_table_3:row1:col5', 'Odlind_1986_table_3:row2:col5', 'Odlind_1986_table_3:row3:col5', 'Odlind_1986_table_3:row4:col5', 'Odlind_1986_table_3:row5:col5', 'Odlind_1986_table_3:row6:col5', 'Odlind_1986_table_3:row7:col5', 'Odlind_1986_table_3:row8:col5', 'Odlind_1986_table_3:row9:col5', 'Odlind_1986_table_3:row11:col5', 'Odlind_1986_table_3:row12:col5', 'Odlind_1986_table_3:row13:col5', 'Odlind_1986_table_3:row14:col5', 'Odlind_1986_table_3:row15:col5', 'Odlind_1986_table_3:row17:col5', 'Odlind_1986_table_3:row18:col5', 'Odlind_1986_table_3:row19:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.6 | ['Odlind_1986_table_3:row1:col6', 'Odlind_1986_table_3:row2:col6', 'Odlind_1986_table_3:row3:col6', 'Odlind_1986_table_3:row4:col6', 'Odlind_1986_table_3:row5:col6', 'Odlind_1986_table_3:row6:col6', 'Odlind_1986_table_3:row7:col6', 'Odlind_1986_table_3:row8:col6', 'Odlind_1986_table_3:row9:col6', 'Odlind_1986_table_3:row11:col6', 'Odlind_1986_table_3:row12:col6', 'Odlind_1986_table_3:row13:col6', 'Odlind_1986_table_3:row14:col6', 'Odlind_1986_table_3:row15:col6', 'Odlind_1986_table_3:row17:col6', 'Odlind_1986_table_3:row18:col6', 'Odlind_1986_table_3:row19:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 156 L/h | ['Odlind_1986_table_3:row1:col6', 'Odlind_1986_table_3:row2:col6', 'Odlind_1986_table_3:row3:col6', 'Odlind_1986_table_3:row4:col6', 'Odlind_1986_table_3:row5:col6', 'Odlind_1986_table_3:row6:col6', 'Odlind_1986_table_3:row7:col6', 'Odlind_1986_table_3:row8:col6', 'Odlind_1986_table_3:row9:col6', 'Odlind_1986_table_3:row11:col6', 'Odlind_1986_table_3:row12:col6', 'Odlind_1986_table_3:row13:col6', 'Odlind_1986_table_3:row14:col6', 'Odlind_1986_table_3:row15:col6', 'Odlind_1986_table_3:row17:col6', 'Odlind_1986_table_3:row18:col6', 'Odlind_1986_table_3:row19:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 150 L | ['Odlind_1986_table_3:row1:col7', 'Odlind_1986_table_3:row2:col7', 'Odlind_1986_table_3:row3:col7', 'Odlind_1986_table_3:row4:col7', 'Odlind_1986_table_3:row5:col7', 'Odlind_1986_table_3:row6:col7', 'Odlind_1986_table_3:row7:col7', 'Odlind_1986_table_3:row8:col7', 'Odlind_1986_table_3:row9:col7', 'Odlind_1986_table_3:row11:col7', 'Odlind_1986_table_3:row12:col7', 'Odlind_1986_table_3:row13:col7', 'Odlind_1986_table_3:row14:col7', 'Odlind_1986_table_3:row15:col7', 'Odlind_1986_table_3:row17:col7', 'Odlind_1986_table_3:row18:col7', 'Odlind_1986_table_3:row19:col7'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazathioprine%5D%20Azathioprine_Odlind1986_reference&body=Drug%3A%20azathioprine%0ARecord%3A%20Azathioprine_Odlind1986_reference%0APaper%3A%20Odlind_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azathioprine/Azathioprine_Odlind1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 15:27 UTC</sub>
