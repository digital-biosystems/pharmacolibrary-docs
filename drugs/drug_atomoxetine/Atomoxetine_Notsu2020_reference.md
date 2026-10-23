<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Notsu_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Li2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Tobin_2026_CYP2D6_Q27&quot;,&quot;label&quot;:&quot;Tobin_2026 \u00b7 CYP2D6&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/pgx_Tobin_2026_CYP2D6_Q27.md&quot;,&quot;status&quot;:&quot;quantitative&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Notsu2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:23 UTC) predates the latest extraction (2026-10-07 00:13 UTC); the status shown comes from the current checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="atomoxetine" model-id="Atomoxetine_Notsu2020_reference" status="needs_review" stale="true" population="Japanese pediatric ADHD patients genotyped for CYP2D6" measured-compound="atomoxetine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Notsu Y, Shimizu M, Sasaki T, Nakano A, Ota M, Yoshida S et al. Simple pharmacokinetic models accounting for drug monitoring results of atomoxetine and its 4-hydroxylated metabolites in Japanese pediatric patients genotyped for cytochrome P450 2D6. Drug metabolism and pharmacokinetics 35(2):191–200 (2020).
  ·  DOI: [10.1016/j.dmpk.2019.08.005](https://doi.org/10.1016/j.dmpk.2019.08.005)

## Population and dosing

**Population:** Japanese pediatric ADHD patients genotyped for CYP2D6 · condition ADHD · age group mixed · n = 33.

**Dosing:** 10, 80 mg/day, oral, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | equation variable | 66 |  |
| 3 | Q3 | 68 |  |
| 7 | kabs | 1 |  |
| 8 | V1 | 57.4 |  |
| 13 | kel | 0.157 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has atomoxetine → 4-hydroxyatomoxetine (metabolism), the second reading none; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 66 |  | llm (0.6) | tab_2:row1:col12 |
| 3 | `Q308` · Q3 | 68 |  | llm (0.6) | tab_2:row3:col9 |
| 7 | `Q49` · kabs | 1 |  | exact (1) | tab_2:row6:col1, tab_2:row6:col2, tab_2:row6:col3, tab_2:row6:col4, tab_2:row6:col5, tab_2:row6:col6, tab_2:row6:col7, tab_2:row6:col10, tab_2:row6:col11, tab_2:row6:col12 |
| 8 | `Q63` · V1 | 57.4 |  | exact (1) | tab_2:row7:col2, tab_2:row7:col4, tab_2:row7:col5, tab_2:row7:col6, tab_2:row7:col7, tab_2:row7:col10, tab_2:row7:col11, tab_2:row7:col12 |
| 13 | `Q47` · kel | 0.157 |  | exact (1) | tab_2:row10:col2, tab_2:row10:col3, tab_2:row10:col6, tab_2:row10:col9, tab_2:row10:col10, tab_2:row10:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (4/24 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['atomoxetine', '4-hydroxyatomoxetine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[13]` | 0.157 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[18 40]` |  | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[18]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1].parameter_id` | Q900 | Q374 | mismatch |
| `gpt-oss-120b` | `parameters[21 45]` |  | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[23]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[30 63]` |  | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[31]` |  | 0.157 | only_one_extracted |
| `gpt-oss-120b` | `parameters[36]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | 68 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[41]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[44]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[49]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[53]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[54]` |  | 0.157 | only_one_extracted |
| `gpt-oss-120b` | `parameters[59]` |  | 57.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[8 22]` |  | 99.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[8]` | 57.4 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q308 | fail | [length] ** 3 / [time] |  | ['tab_2:row3:col9'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['tab_2:row10:col2', 'tab_2:row10:col3', 'tab_2:row10:col6', 'tab_2:row10:col9', 'tab_2:row10:col10', 'tab_2:row10:col11'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6', 'tab_2:row6:col7', 'tab_2:row6:col10', 'tab_2:row6:col11', 'tab_2:row6:col12'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['tab_2:row7:col2', 'tab_2:row7:col4', 'tab_2:row7:col5', 'tab_2:row7:col6', 'tab_2:row7:col7', 'tab_2:row7:col10', 'tab_2:row7:col11', 'tab_2:row7:col12'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batomoxetine%5D%20Atomoxetine_Notsu2020_reference&body=Drug%3A%20atomoxetine%0ARecord%3A%20Atomoxetine_Notsu2020_reference%0APaper%3A%20Notsu_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atomoxetine/Atomoxetine_Notsu2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:13 UTC</sub>
