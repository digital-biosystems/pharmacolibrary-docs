<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;ondansetron&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/&quot;},{&quot;label&quot;:&quot;de_1998 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Chiang2021_estimate&quot;,&quot;label&quot;:&quot;Chiang_2021_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021v2_reference&quot;,&quot;label&quot;:&quot;Chiang_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Landau2026_reference&quot;,&quot;label&quot;:&quot;Landau_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Landau2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ondansetron — `Ondansetron_de1998_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Rejected), but the paper was screened again on 2026-10-04 14:07 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="ondansetron" model-id="Ondansetron_de1998_reference" status="rejected" stale="true" population="paediatric patients, young, elderly and aged volunteers" measured-compound="ondansetron" parameterization="mechanistic" topology="1C"></div>

## Citation
de Alwis DP, Aarons L, Palmer JL. Population pharmacokinetics of ondansetron: a covariate analysis. British journal of clinical pharmacology 46(2):117–125 (1998).
  ·  DOI: [10.1046/j.1365-2125.1998.00756.x](https://doi.org/10.1046/j.1365-2125.1998.00756.x)

## Population and dosing

**Population:** paediatric patients, young, elderly and aged volunteers · condition healthy and chemotherapy patients · age group mixed · n = 99.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLd | Q | 235.8 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLd | `Q30` · Q | 235.8 | L/h | 6.55e-05 | m3/s | L/h | exact (1) | de_1998_table_2:row6:col3, de_1998_table_2:row16:col1, de_1998_table_2:row16:col2, de_1998_table_2:row16:col3, de_1998_table_2:row22:col1, de_1998_table_2:row22:col2, de_1998_table_2:row22:col3, de_1998_table_2:row28:col1, de_1998_table_2:row28:col2, de_1998_table_2:row28:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL | Q22 | exact |
| V 1 | Q61 | space_fold |
| V ss | Q65 | space_fold |

## Departures & gaps

**Interpretation flags:**
- column 'covariate relationships' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'compared against' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '1)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row0:col2'])
- dropped unlinked row (NIL): '2)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row1:col1', 'de_1998_table_1:row1:col7'])
- dropped unlinked row (NIL): '3)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row2:col1', 'de_1998_table_1:row2:col7'])
- dropped unlinked row (NIL): '4)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row3:col1', 'de_1998_table_1:row3:col7'])
- dropped unlinked row (NIL): '5)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row4:col1', 'de_1998_table_1:row4:col7'])
- dropped unlinked row (NIL): '6)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row5:col1'])
- dropped unlinked row (NIL): '7)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row7:col1'])
- dropped unlinked row (NIL): '8)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row9:col1'])
- dropped unlinked row (NIL): '9)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row11:col1'])
- dropped unlinked row (NIL): '10)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row14:col1', 'de_1998_table_1:row14:col7'])
- dropped unlinked row (NIL): '11)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row18:col1', 'de_1998_table_1:row18:col3'])
- dropped unlinked row (NIL): '12)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row19:col1', 'de_1998_table_1:row19:col3'])
- dropped unlinked row (NIL): '13)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row20:col1', 'de_1998_table_1:row20:col3'])
- dropped unlinked row (NIL): '14)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row21:col1', 'de_1998_table_1:row21:col2', 'de_1998_table_1:row21:col4'])
- dropped unlinked row (NIL): '15)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row22:col1', 'de_1998_table_1:row22:col3'])
- dropped unlinked row (NIL): '16)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row23:col1', 'de_1998_table_1:row23:col3'])
- dropped unlinked row (NIL): '17)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row24:col1', 'de_1998_table_1:row24:col3'])
- dropped unlinked row (NIL): '18)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row25:col1'])
- dropped unlinked row (NIL): '19)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row27:col1', 'de_1998_table_1:row27:col3'])
- dropped unlinked row (NIL): '20)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row28:col1', 'de_1998_table_1:row28:col3'])
- dropped unlinked row (NIL): '21)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row30:col1', 'de_1998_table_1:row30:col3'])
- dropped unlinked row (NIL): '22)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row32:col1', 'de_1998_table_1:row32:col2', 'de_1998_table_1:row32:col3', 'de_1998_table_1:row32:col4', 'de_1998_table_1:row32:col6'])
- dropped unlinked row (NIL): '23)' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row33:col1', 'de_1998_table_1:row33:col5'])
- dropped unlinked row (NIL): '24) ‡' — extend the ontology if this is a real PK parameter (source ['de_1998_table_1:row35:col1', 'de_1998_table_1:row35:col2', 'de_1998_table_1:row35:col3', 'de_1998_table_1:row35:col5'])
- dropped duplicate Q22 ('CL male', value None) — already have one for this compound
- dropped duplicate Q22 ('CL female', value None) — already have one for this compound
- dropped duplicate Q30 ('CLd male', value None) — already have one for this compound
- dropped duplicate Q30 ('CLd female', value None) — already have one for this compound
- dropped duplicate Q65 ('V ssmale', value None) — already have one for this compound
- dropped duplicate Q65 ('V ssfemale', value None) — already have one for this compound
- implicit units: 'CLd' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CLd in the provided text or table captions. However, CLd is an intercom')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ondansetron
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V 1' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- unparsed cell de_1998_table_1:row1:col6 = 'model 1'
- unparsed cell de_1998_table_1:row2:col6 = 'model 1'
- unparsed cell de_1998_table_1:row3:col6 = 'model 1'
- unparsed cell de_1998_table_1:row4:col6 = 'model 1'
- unparsed cell de_1998_table_1:row14:col6 = 'model 9'
- unparsed cell de_1998_table_1:row18:col2 = 'model 10'
- unparsed cell de_1998_table_1:row19:col2 = 'model 10'
- unparsed cell de_1998_table_1:row20:col2 = 'model 10'
- unparsed cell de_1998_table_1:row21:col3 = 'model 10'
- unparsed cell de_1998_table_1:row22:col2 = 'model 10'
- unparsed cell de_1998_table_1:row23:col2 = 'model 10'
- unparsed cell de_1998_table_1:row24:col2 = 'model 10'
- unparsed cell de_1998_table_1:row27:col2 = 'model 18'
- unparsed cell de_1998_table_1:row28:col2 = 'model 18 & 19'
- unparsed cell de_1998_table_1:row30:col2 = 'model 20'
- unparsed cell de_1998_table_1:row32:col5 = 'model 18'
- unparsed cell de_1998_table_1:row33:col4 = 'model 22'
- unparsed cell de_1998_table_1:row35:col4 = 'model 21 & 23'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['de_1998_table_2:row6:col3', 'de_1998_table_2:row16:col1', 'de_1998_table_2:row16:col2', 'de_1998_table_2:row16:col3', 'de_1998_table_2:row22:col1', 'de_1998_table_2:row22:col2', 'de_1998_table_2:row22:col3', 'de_1998_table_2:row28:col1', 'de_1998_table_2:row28:col2', 'de_1998_table_2:row28:col3'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bondansetron%5D%20Ondansetron_de1998_reference&body=Drug%3A%20ondansetron%0ARecord%3A%20Ondansetron_de1998_reference%0APaper%3A%20de_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ondansetron/Ondansetron_de1998_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 14:07 UTC</sub>
