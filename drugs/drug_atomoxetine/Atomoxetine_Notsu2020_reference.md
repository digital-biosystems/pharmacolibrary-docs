<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Notsu_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Li2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Tobin_2026_CYP2D6_Q27&quot;,&quot;label&quot;:&quot;Tobin_2026 \u00b7 CYP2D6&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/pgx_Tobin_2026_CYP2D6_Q27.md&quot;,&quot;status&quot;:&quot;quantitative&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Notsu2020_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (not confirmed, agreement 0.391). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has atomoxetine → 4-hydroxyatomoxetine (metabolism), the second reading none; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:23:27.123481+00:00) predates the upstream re-run (2026-10-07 00:13:16.820892+00:00). Current validate status: `needs_review`.

## Citation
Notsu Y et al., Simple pharmacokinetic models accountin…, Drug metabolism and pharmac… (2020)
  ·  DOI: [10.1016/j.dmpk.2019.08.005](https://doi.org/10.1016/j.dmpk.2019.08.005)

<div class="pk-model-meta" hidden drug="atomoxetine" model-id="Atomoxetine_Notsu2020_reference" status="needs_review" stale="true" population="Japanese pediatric ADHD patients genotyped for CYP2D6" measured-compound="atomoxetine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 66 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row1:col12 | — | not captured |
| 3 | `Q308` · Q3 | 68 | not captured | not captured | not captured | not captured | llm (0.6) | tab_2:row3:col9 | — | not captured |
| 7 | `Q49` · kabs | 1 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row6:col1, tab_2:row6:col2, tab_2:row6:col3, tab_2:row6:col4, tab_2:row6:col5, tab_2:row6:col6, tab_2:row6:col7, tab_2:row6:col10, tab_2:row6:col11, tab_2:row6:col12 | — | not captured |
| 8 | `Q63` · V1 | 57.4 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row7:col2, tab_2:row7:col4, tab_2:row7:col5, tab_2:row7:col6, tab_2:row7:col7, tab_2:row7:col10, tab_2:row7:col11, tab_2:row7:col12 | — | not captured |
| 13 | `Q47` · kel | 0.157 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row10:col2, tab_2:row10:col3, tab_2:row10:col6, tab_2:row10:col9, tab_2:row10:col10, tab_2:row10:col11 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'dmpk281_proof ■ 29 august 2019 ■ 8/10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col12'])
- dropped unlinked row (NIL): '4 5' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col5', 'tab_2:row4:col7', 'tab_2:row4:col8', 'tab_2:row4:col9'])
- dropped duplicate Q900 ('6', value '71') — already have one for this compound
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col3', 'tab_2:row8:col4', 'tab_2:row8:col5', 'tab_2:row8:col6', 'tab_2:row8:col7', 'tab_2:row8:col10', 'tab_2:row8:col11', 'tab_2:row8:col12'])
- dropped duplicate Q63 ('14', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('6 17', value '99.7') — already have one for this compound
- dropped duplicate Q63 ('18', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('8 22', value '99.7') — already have one for this compound
- dropped duplicate Q63 ('23', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('26', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('11 27', value '99.7') — already have one for this compound
- dropped duplicate Q47 ('31', value '0.157') — already have one for this compound
- dropped duplicate Q63 ('32', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('15 35', value '99.7') — already have one for this compound
- dropped duplicate Q63 ('36', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('18 40', value '99.7') — already have one for this compound
- dropped duplicate Q63 ('41', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('44', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('21 45', value '99.7') — already have one for this compound
- dropped duplicate Q63 ('49', value '57.4') — already have one for this compound
- dropped duplicate Q63 ('24 50', value '99.7') — already have one for this compound
- dropped duplicate Q63 ('53', value '57.4') — already have one for this compound
- dropped duplicate Q47 ('54', value '0.157') — already have one for this compound
- dropped duplicate Q63 ('28 58', value '99.7') — already have one for this compound
- dropped duplicate Q63 ('59', value '57.4') — already have one for this compound
- dropped duplicate Q47 ('62', value '0.157') — already have one for this compound
- dropped duplicate Q63 ('30 63', value '99.7') — already have one for this compound
- dropped duplicate Q47 ('31 64 65', value '0.223') — already have one for this compound
- implicit units: '8' — the LLM proposed 'L/h', whose dimension does not fit Q63; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (8)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atomoxetine
- template fit: PK_3M_3C — hepatic compartment; parent 1 + hepatic, metabolites [0] (site hepatic: 'F a F g k a Dose (p.o. administration) Central compartment V 1 primary metabolite , C b Q h Central compartment V 1_subs')
- row roles (LLM): model_class=compartmental; 33/33 row label(s) assigned, 215 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row4:col3 = 'k el , h À1'
- unparsed cell tab_2:row4:col11 = 'Estimated 4-hydroxy-'
- unparsed cell tab_2:row4:col12 = '69 70'
- unparsed cell tab_2:row6:col8 = '79.5/20.7'
- unparsed cell tab_2:row6:col9 = '181/36.9'
- unparsed cell tab_2:row7:col8 = '39.8/10.4'
- unparsed cell tab_2:row7:col9 = '90.5/18.5'
- unparsed cell tab_2:row8:col8 = '79.5/20.7'
- unparsed cell tab_2:row8:col9 = '181/36.9'
- unparsed cell tab_2:row10:col7 = '59.3/20.7'
- unparsed cell tab_2:row10:col8 = '54.1/36.9'
- unparsed cell tab_2:row11:col7 = '39.8/10.4'
- unparsed cell tab_2:row11:col8 = '90.5/18.5'
- unparsed cell tab_2:row13:col7 = '79.5/20.7'
- unparsed cell tab_2:row13:col8 = '181/36.9'
- unparsed cell tab_2:row14:col7 = '39.8/10.4'
- unparsed cell tab_2:row14:col8 = '90.5/18.5'
- unparsed cell tab_2:row16:col7 = '79.5/20.7'
- unparsed cell tab_2:row16:col8 = '181/36.9'
- unparsed cell tab_2:row17:col7 = '39.8/10.4'
- unparsed cell tab_2:row17:col8 = '90.5/18.5'
- unparsed cell tab_2:row19:col7 = '39.8/10.4'
- unparsed cell tab_2:row19:col8 = '90.5/18.5'
- unparsed cell tab_2:row20:col7 = '79.5/20.7'
- unparsed cell tab_2:row20:col8 = '181/36.9'
- unparsed cell tab_2:row22:col7 = '59.3/20.7'
- unparsed cell tab_2:row22:col8 = '54.1/36.9'
- unparsed cell tab_2:row23:col7 = '39.8/10.4'
- unparsed cell tab_2:row23:col8 = '90.5/18.5'
- unparsed cell tab_2:row25:col7 = '79.5/20.7'
- unparsed cell tab_2:row25:col8 = '181/36.9'
- unparsed cell tab_2:row26:col7 = '39.8/10.4'
- unparsed cell tab_2:row26:col8 = '90.5/18.5'
- unparsed cell tab_2:row28:col7 = '79.5/20.7'
- unparsed cell tab_2:row28:col8 = '181/36.9'
- unparsed cell tab_2:row29:col7 = '39.8/10.4'
- unparsed cell tab_2:row29:col8 = '90.5/18.5'
- unparsed cell tab_2:row31:col7 = '39.8/10.4'
- unparsed cell tab_2:row31:col8 = '90.5/18.5'
- unparsed cell tab_2:row32:col7 = '79.5/20.7'
- unparsed cell tab_2:row32:col8 = '181/36.9'
- unparsed cell tab_2:row34:col7 = '39.8/10.4'
- unparsed cell tab_2:row34:col8 = '90.5/18.5'
- unparsed cell tab_2:row35:col7 = '79.5/20.7'
- unparsed cell tab_2:row35:col8 = '181/36.9'
- unparsed cell tab_2:row37:col7 = '39.8/10.4'
- unparsed cell tab_2:row37:col8 = '90.5/18.5'
- unparsed cell tab_2:row38:col7 = '29.7/10.4'
- unparsed cell tab_2:row38:col8 = '27.1/18.5'
- unparsed cell tab_2:row40:col7 = '79.5/20.7'
- unparsed cell tab_2:row40:col8 = '181/36.9'
- unparsed cell tab_2:row41:col7 = '39.8/10.4'
- unparsed cell tab_2:row41:col8 = '90.5/18.5'
- unparsed cell tab_2:row43:col7 = '29.7/10.4'
- unparsed cell tab_2:row43:col8 = '27.1/18.5'
- unparsed cell tab_2:row44:col7 = '79.5/20.7'
- unparsed cell tab_2:row44:col8 = '181/36.9'
- unparsed cell tab_2:row45:col1 = '57.4 99.7'
- unparsed cell tab_2:row45:col3 = '964 378'
- unparsed cell tab_2:row45:col4 = '60.0 96.6'
- unparsed cell tab_2:row45:col5 = '0.750 1.50'
- unparsed cell tab_2:row45:col6 = '1.23 1.23'
- unparsed cell tab_2:row45:col7 = '39.8/10.4 79.5/20.7'
- unparsed cell tab_2:row45:col8 = '90.5/18.5 181/36.9'
- unparsed cell tab_2:row45:col9 = '1010 331'
- unparsed cell tab_2:row45:col10 = '1500 652'
- unparsed cell tab_2:row45:col11 = '129 130'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (4/24 fields) | 20 |
| `gpt-oss:120b` | not confirmed | 0.391 (9/23 fields) | 14 |

<details><summary>34 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['atomoxetine', '4-hydroxyatomoxetine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[13]` | 0.157 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[18 40]` | not captured | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[18]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1].parameter_id` | Q900 | Q374 | mismatch |
| `gpt-oss-120b` | `parameters[21 45]` | not captured | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[23]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[30 63]` | not captured | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[31]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss-120b` | `parameters[36]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | 68 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[41]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[44]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[49]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[53]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[54]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss-120b` | `parameters[59]` | not captured | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[8 22]` | not captured | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[8]` | 57.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[11 27]` | not captured | 92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[18]` | not captured | 83 | only_one_extracted |
| `gpt-oss:120b` | `parameters[23]` | not captured | 88 | only_one_extracted |
| `gpt-oss:120b` | `parameters[26]` | not captured | 91 | only_one_extracted |
| `gpt-oss:120b` | `parameters[28 58]` | not captured | 123 | only_one_extracted |
| `gpt-oss:120b` | `parameters[2]` | not captured | 67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[30 63]` | not captured | 128 | only_one_extracted |
| `gpt-oss:120b` | `parameters[31 64 65]` | 0.223 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[31]` | not captured | 96 | only_one_extracted |
| `gpt-oss:120b` | `parameters[32]` | not captured | 97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[3]` | not captured | 68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[44]` | not captured | 109 | only_one_extracted |
| `gpt-oss:120b` | `parameters[8 22]` | not captured | 87 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q308 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col9'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_2:row10:col2', 'tab_2:row10:col3', 'tab_2:row10:col6', 'tab_2:row10:col9', 'tab_2:row10:col10', 'tab_2:row10:col11'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6', 'tab_2:row6:col7', 'tab_2:row6:col10', 'tab_2:row6:col11', 'tab_2:row6:col12'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row7:col2', 'tab_2:row7:col4', 'tab_2:row7:col5', 'tab_2:row7:col6', 'tab_2:row7:col7', 'tab_2:row7:col10', 'tab_2:row7:col11', 'tab_2:row7:col12'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_atomoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Notsu_2020` / `Notsu_2020::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:13 UTC</sub>
