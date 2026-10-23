<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/&quot;},{&quot;label&quot;:&quot;Gao_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trastuzumab_Verma2025_rat&quot;,&quot;label&quot;:&quot;Verma_2025_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab — `Trastuzumab_Gao2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Λ1 and V2 have no unit.

<div class="pk-model-meta" hidden drug="trastuzumab" model-id="Trastuzumab_Gao2026_reference" status="needs_review" stale="false" population="patients with HER2-expressing or mutated advanced solid tumors" measured-compound="trastuzumab rezetecan" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Gao X, Zhao K, Zhao Y, Zhang Y, Zhao J, Zhao C et al. Population Pharmacokinetics of Trastuzumab Rezetecan in Patients With HER2-Expressing or Mutated Advanced Solid Tumors. CPT: pharmacometrics & systems pharmacology 15(5):e70259 (2026).
  ·  DOI: [10.1002/psp4.70259](https://doi.org/10.1002/psp4.70259)

## Population and dosing

**Population:** patients with HER2-expressing or mutated advanced solid tumors · condition advanced solid tumors · age group adult · n = &gt;=645.

**Dosing:** 70, 560 mg, iv, multiple, every 21 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| θ CL (L/day) | CL | 0.360 | L/day | 0.0591 (None% RSE) |
| θ V1 (L) | V1 | 2.86 | L | 0.0408 (None% RSE) |
| θ Q (L/day) | Q | 0.162 | L/day |  |
| θ V2 (L) | V2 | 2.88 | L | 0.546 (None% RSE) |
| θ RAT (day−1) | kfm | 0.814 | day−1 |  |
| θ ALPHA | λ1 | 0.693 |  | 0.0692 (None% RSE) |
| θ CL3 (L/day) | CL | 392 | L/day |  |
| θ V3 (L) | V1 | 30.0 | L |  |
| θ V3_AGE | V2 | 0.420 |  | 0.146 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Λ1 and V2 have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — trastuzumab: CL 0.36 L/day, V1 2.86 L, Q 0.162 L/day, V2 2.88 L; rezetecan: kfm 0.814 day−1, λ1 0.693, CL 392 L/day, V1 30 L, V2 0.42.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has trastuzumab rezetecan, the second reading Trastuzumab Rezetecan (intact ADC); it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| θ CL (L/day) | `Q22` · CL | 0.360 | L/day | 4.167e-09 | m3/s | l/d | llm_confirmed (0.6) | psp470259-tbl-0001:row2:col1, psp470259-tbl-0001:row2:col2, psp470259-tbl-0001:row2:col4, psp470259-tbl-0001:row2:col6 | 0.0591 (None% RSE) |
| θ V1 (L) | `Q63` · V1 | 2.86 | L | 0.00286 | m3 | l | exact (1) | psp470259-tbl-0001:row3:col1, psp470259-tbl-0001:row3:col2, psp470259-tbl-0001:row3:col4, psp470259-tbl-0001:row3:col6 | 0.0408 (None% RSE) |
| θ Q (L/day) | `Q30` · Q | 0.162 | L/day | 1.875e-09 | m3/s | l/d | llm (0.6) | psp470259-tbl-0001:row4:col1, psp470259-tbl-0001:row4:col2, psp470259-tbl-0001:row4:col4, psp470259-tbl-0001:row4:col6 |  |
| θ V2 (L) | `Q64` · V2 | 2.88 | L | 0.00288 | m3 | l | exact (1) | psp470259-tbl-0001:row5:col1, psp470259-tbl-0001:row5:col2, psp470259-tbl-0001:row5:col4, psp470259-tbl-0001:row5:col6 | 0.546 (None% RSE) |
| θ RAT (day−1) | `Q305` · kfm | 0.814 | day−1 | 9.421e-06 | 1/s | 1/d | exact (1) | psp470259-tbl-0001:row6:col1, psp470259-tbl-0001:row6:col2, psp470259-tbl-0001:row6:col4, psp470259-tbl-0001:row6:col6 |  |
| θ ALPHA | `Q67` · λ1 | 0.693 |  |  |  |  | llm_confirmed (0.6) | psp470259-tbl-0001:row7:col1, psp470259-tbl-0001:row7:col2, psp470259-tbl-0001:row7:col4, psp470259-tbl-0001:row7:col6 | 0.0692 (None% RSE) |
| θ CL3 (L/day) | `Q22` · CL | 392 | L/day | 4.537e-06 | m3/s | l/d | exact (1) | psp470259-tbl-0001:row8:col1, psp470259-tbl-0001:row8:col2, psp470259-tbl-0001:row8:col4, psp470259-tbl-0001:row8:col6 |  |
| θ V3 (L) | `Q63` · V1 | 30.0 | L | 0.03 | m3 | l | exact (1) | psp470259-tbl-0001:row9:col1, psp470259-tbl-0001:row9:col2, psp470259-tbl-0001:row9:col4, psp470259-tbl-0001:row9:col6 |  |
| θ V3_AGE | `Q64` · V2 | 0.420 |  |  |  |  | llm (0.6) | psp470259-tbl-0001:row22:col1, psp470259-tbl-0001:row22:col2, psp470259-tbl-0001:row22:col4, psp470259-tbl-0001:row22:col6 | 0.146 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('θ CL_BW', value '0.525') — already have one for this compound
- dropped unlinked row (NIL): 'θ CL_SOD_B' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row11:col1', 'psp470259-tbl-0001:row11:col2', 'psp470259-tbl-0001:row11:col4', 'psp470259-tbl-0001:row11:col6'])
- dropped duplicate Q63 ('θ V1_BW', value '0.544') — already have one for this compound
- dropped duplicate Q63 ('θ V1_AGE', value '0.198') — already have one for this compound
- dropped duplicate Q63 ('θ V1_ALB', value '-0.363') — already have one for this compound
- dropped duplicate Q64 ('θ V2_ALB', value '-1.44') — already have one for this compound
- dropped unlinked row (NIL): 'θ RAT_BW' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row16:col1', 'psp470259-tbl-0001:row16:col2', 'psp470259-tbl-0001:row16:col4', 'psp470259-tbl-0001:row16:col6'])
- dropped unlinked row (NIL): 'θ RAT_SOD_B' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row17:col1', 'psp470259-tbl-0001:row17:col2', 'psp470259-tbl-0001:row17:col4', 'psp470259-tbl-0001:row17:col6'])
- dropped unlinked row (NIL): 'θ RAT_CT1 (day−1)' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row18:col1', 'psp470259-tbl-0001:row18:col2', 'psp470259-tbl-0001:row18:col4', 'psp470259-tbl-0001:row18:col6'])
- dropped unlinked row (NIL): 'θ RAT_CT2 (day−1)' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row19:col1', 'psp470259-tbl-0001:row19:col2', 'psp470259-tbl-0001:row19:col4', 'psp470259-tbl-0001:row19:col6'])
- dropped unlinked row (NIL): 'θ RAT_CT3 (day−1)' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row20:col1', 'psp470259-tbl-0001:row20:col2', 'psp470259-tbl-0001:row20:col4', 'psp470259-tbl-0001:row20:col6'])
- dropped unlinked row (NIL): 'θ CL3_AST' — extend the ontology if this is a real PK parameter (source ['psp470259-tbl-0001:row21:col1', 'psp470259-tbl-0001:row21:col2', 'psp470259-tbl-0001:row21:col4', 'psp470259-tbl-0001:row21:col6'])
- metabolite volume: 'θ V3_AGE' Q77→Q64 for rezetecan — its only peripheral volume is its first; the 2 numbers the molecule
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab rezetecan
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles: 3 per-group rows of rezetecan covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 28 linked by role; re-tagged parent→rezetecan ×69
- molar mass: no plausible PubChem entry for 'trastuzumab rezetecan' ('trastuzumab rezetecan') — left in mass units
- molar mass: no plausible PubChem entry for 'rezetecan' ('rezetecan') — left in mass units
- molar mass: none found for 'trastuzumab rezetecan' — its concentrations stay mass-only
- molar mass: none found for 'rezetecan' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp470259-tbl-0001:row2:col5 = '0.352 to 0.369'
- unparsed cell psp470259-tbl-0001:row3:col5 = '2.81 to 2.91'
- unparsed cell psp470259-tbl-0001:row4:col5 = '0.148 to 0.177'
- unparsed cell psp470259-tbl-0001:row5:col5 = '2.62 to 3.17'
- unparsed cell psp470259-tbl-0001:row6:col5 = '0.765 to 0.868'
- unparsed cell psp470259-tbl-0001:row7:col5 = '0.675 to 0.711'
- unparsed cell psp470259-tbl-0001:row8:col5 = '373 to 410'
- unparsed cell psp470259-tbl-0001:row9:col5 = '30.0 to 30.0'
- unparsed cell psp470259-tbl-0001:row10:col5 = '0.400 to 0.661'
- unparsed cell psp470259-tbl-0001:row11:col5 = '0.0344 to 0.108'
- unparsed cell psp470259-tbl-0001:row12:col5 = '0.460 to 0.652'
- unparsed cell psp470259-tbl-0001:row13:col5 = '0.116 to 0.267'
- unparsed cell psp470259-tbl-0001:row14:col5 = '−0.539 to −0.185'
- unparsed cell psp470259-tbl-0001:row15:col5 = '−1.96 to −0.348'
- unparsed cell psp470259-tbl-0001:row16:col5 = '−0.710 to −0.398'
- unparsed cell psp470259-tbl-0001:row17:col5 = '0.0527 to 0.152'
- unparsed cell psp470259-tbl-0001:row18:col5 = '−0.00304 to 0.114'
- unparsed cell psp470259-tbl-0001:row19:col5 = '−0.203 to −0.0593'
- unparsed cell psp470259-tbl-0001:row20:col5 = '−0.0337 to 0.122'
- unparsed cell psp470259-tbl-0001:row21:col5 = '−0.266 to −0.0777'
- unparsed cell psp470259-tbl-0001:row22:col5 = '0.156 to 0.621'
- unparsed cell psp470259-tbl-0001:row24:col5 = '0.0475 to 0.0711'
- unparsed cell psp470259-tbl-0001:row25:col5 = '0.0254 to 0.0621'
- unparsed cell psp470259-tbl-0001:row26:col5 = '0.0341 to 0.149'
- unparsed cell psp470259-tbl-0001:row27:col5 = '0.447 to 0.641'
- unparsed cell psp470259-tbl-0001:row28:col5 = '0.0213 to 0.0625'
- unparsed cell psp470259-tbl-0001:row29:col5 = '0.0518 to 0.0880'
- unparsed cell psp470259-tbl-0001:row30:col5 = '0.0995 to 0.180'
- unparsed cell psp470259-tbl-0001:row31:col5 = '0.108 to 0.185'
- unparsed cell psp470259-tbl-0001:row33:col5 = '0.0223 to 0.0418'
- unparsed cell psp470259-tbl-0001:row34:col5 = '1.41 to 3.21'
- unparsed cell psp470259-tbl-0001:row35:col5 = '0.0736 to 0.0854'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ alpha]` |  | 0.144 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ alpha]` | 0.693 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cl3]` |  | 0.255 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cl3]` | 392 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cl]` | 0.360 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cl]` |  | 0.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ q]` | 0.162 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ q]` |  | 0.617 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ rat]` |  | 0.369 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ rat]` | 0.814 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ rat_bw]` |  | 0.916 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ rat_ct1]` |  | 6.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v1]` | 2.86 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v1]` |  | 0.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v2]` | 2.88 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v2]` |  | 0.347 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v3]` |  | 0.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v3]` | 30.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v3_age]` |  | 1.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v3_age]` | 0.420 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab rezetecan | Trastuzumab Rezetecan (intact ADC) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp470259-tbl-0001:row2:col1', 'psp470259-tbl-0001:row2:col2', 'psp470259-tbl-0001:row2:col4', 'psp470259-tbl-0001:row2:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp470259-tbl-0001:row8:col1', 'psp470259-tbl-0001:row8:col2', 'psp470259-tbl-0001:row8:col4', 'psp470259-tbl-0001:row8:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp470259-tbl-0001:row4:col1', 'psp470259-tbl-0001:row4:col2', 'psp470259-tbl-0001:row4:col4', 'psp470259-tbl-0001:row4:col6'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['psp470259-tbl-0001:row6:col1', 'psp470259-tbl-0001:row6:col2', 'psp470259-tbl-0001:row6:col4', 'psp470259-tbl-0001:row6:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp470259-tbl-0001:row3:col1', 'psp470259-tbl-0001:row3:col2', 'psp470259-tbl-0001:row3:col4', 'psp470259-tbl-0001:row3:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp470259-tbl-0001:row9:col1', 'psp470259-tbl-0001:row9:col2', 'psp470259-tbl-0001:row9:col4', 'psp470259-tbl-0001:row9:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp470259-tbl-0001:row5:col1', 'psp470259-tbl-0001:row5:col2', 'psp470259-tbl-0001:row5:col4', 'psp470259-tbl-0001:row5:col6'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['psp470259-tbl-0001:row22:col1', 'psp470259-tbl-0001:row22:col2', 'psp470259-tbl-0001:row22:col4', 'psp470259-tbl-0001:row22:col6'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['psp470259-tbl-0001:row7:col1', 'psp470259-tbl-0001:row7:col2', 'psp470259-tbl-0001:row7:col4', 'psp470259-tbl-0001:row7:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.36 | ['psp470259-tbl-0001:row2:col1', 'psp470259-tbl-0001:row2:col2', 'psp470259-tbl-0001:row2:col4', 'psp470259-tbl-0001:row2:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.015 L/h | ['psp470259-tbl-0001:row2:col1', 'psp470259-tbl-0001:row2:col2', 'psp470259-tbl-0001:row2:col4', 'psp470259-tbl-0001:row2:col6'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.3 L/h | ['psp470259-tbl-0001:row8:col1', 'psp470259-tbl-0001:row8:col2', 'psp470259-tbl-0001:row8:col4', 'psp470259-tbl-0001:row8:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.86 L | ['psp470259-tbl-0001:row3:col1', 'psp470259-tbl-0001:row3:col2', 'psp470259-tbl-0001:row3:col4', 'psp470259-tbl-0001:row3:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 30 L | ['psp470259-tbl-0001:row9:col1', 'psp470259-tbl-0001:row9:col2', 'psp470259-tbl-0001:row9:col4', 'psp470259-tbl-0001:row9:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.88 L | ['psp470259-tbl-0001:row5:col1', 'psp470259-tbl-0001:row5:col2', 'psp470259-tbl-0001:row5:col4', 'psp470259-tbl-0001:row5:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrastuzumab%5D%20Trastuzumab_Gao2026_reference&body=Drug%3A%20trastuzumab%0ARecord%3A%20Trastuzumab_Gao2026_reference%0APaper%3A%20Gao_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trastuzumab/Trastuzumab_Gao2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:23 UTC</sub>
