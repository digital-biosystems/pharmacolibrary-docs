<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;metamizole sodium&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/&quot;},{&quot;label&quot;:&quot;Blaser_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MetamizoleSodium_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MetamizoleSodium_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metamizole sodium — `MetamizoleSodium_Blaser2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-11-07 15:18 UTC (Rejected), but the paper was screened again on 2026-10-22 11:57 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The record for 4-methylaminoantipyrine lacks compartmental volume or clearance parameters, rendering it an exposure summary rather than a PK model.

<div class="pk-model-meta" hidden drug="metamizole sodium" model-id="MetamizoleSodium_Blaser2021_reference" status="rejected" stale="true" population="healthy salt-depleted adults" measured-compound="4-methylaminoantipyrine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Blaser LS, Duthaler U, Bouitbir J, Leuppi-Taegtmeyer AB, Liakoni E, Dolf R et al. Comparative Effects of Metamizole (Dipyrone) and Naproxen on Renal Function and Prostacyclin Synthesis in Salt-Depleted Healthy Subjects - A Randomized Controlled Parallel Group Study. Frontiers in pharmacology 12:620635 (2021).
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

## Population and dosing

**Population:** healthy salt-depleted adults · condition healthy · age group adult · n = &gt; 15.

**Dosing:** 1000 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed metamizole_sodium, measured 4-methylaminoantipyrine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax [mg/L] | Cmax | 14.9 | mg/L |
| Tmax [h] | tmax | 1 | h |
| AUC0-24h [mg/L x h] | AUCt | 105 |  |
| AUC0-inf [mg/L x h] | AUC∞ | 107 |  |
| T1/2 [h] | t1/2z | 3.7 | h |
| Cmax ratio MD/SD | Cmax_ratio | 1.35 |  |
| AUC0-5h ratio MD/SD | AUC ratio | 1.42 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for 4-methylaminoantipyrine lacks compartmental volume or clearance parameters, rendering it an exposure summary rather than a PK model.**

The extracted parameters include only summary statistics like Cmax of 14.9 mg/L and AUC of 107 mg/L x h, with no distribution volume or clearance values. Because the metabolism links lack defined rate parameters, the metabolite compartments remain structurally unreachable from the parent drug. Extracted — 4-methylaminoantipyrine: Cmax 14.9 mg/L, tmax 1 h, AUCt 105, AUC∞ 107, t1/2z 3.7 h, Cmax_ratio 1.35, AUC ratio 1.42.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax [mg/L] | `Q32` · Cmax | 14.9 | mg/L |  |  | mg/l | llm_confirmed (0.6) | Blaser_2021_table_2:row1:col1, Blaser_2021_table_2:row1:col2, Blaser_2021_table_2:row1:col3, Blaser_2021_table_2:row1:col4, Blaser_2021_table_2:row8:col1, Blaser_2021_table_2:row8:col2, Blaser_2021_table_2:row8:col3, Blaser_2021_table_2:row8:col4 |
| Tmax [h] | `Q56` · tmax | 1 | h | 3600 | s | h | llm_confirmed (0.6) | Blaser_2021_table_2:row2:col1, Blaser_2021_table_2:row2:col2, Blaser_2021_table_2:row2:col3, Blaser_2021_table_2:row2:col4 |
| AUC0-24h [mg/L x h] | `Q19` · AUCt | 105 |  |  |  |  | llm (0.6) | Blaser_2021_table_2:row3:col1, Blaser_2021_table_2:row3:col2, Blaser_2021_table_2:row3:col3, Blaser_2021_table_2:row3:col4 |
| AUC0-inf [mg/L x h] | `Q17` · AUC∞ | 107 |  |  |  |  | llm_confirmed (0.6) | Blaser_2021_table_2:row4:col1, Blaser_2021_table_2:row4:col2, Blaser_2021_table_2:row4:col4 |
| T1/2 [h] | `Q57` · t1/2z | 3.7 | h | 1.332e+04 | s | h | llm_confirmed (0.6) | Blaser_2021_table_2:row6:col1, Blaser_2021_table_2:row6:col2, Blaser_2021_table_2:row6:col4 |
| Cmax ratio MD/SD | `Q33` · Cmax_ratio | 1.35 |  |  |  |  | llm_corrected (0.6) | Blaser_2021_table_2:row9:col1, Blaser_2021_table_2:row9:col2, Blaser_2021_table_2:row9:col3, Blaser_2021_table_2:row9:col4 |
| AUC0-5h ratio MD/SD | `Q21` · AUC ratio | 1.42 |  |  |  |  | llm (0.6) | Blaser_2021_table_2:row11:col1, Blaser_2021_table_2:row11:col2, Blaser_2021_table_2:row11:col3, Blaser_2021_table_2:row11:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '4-maa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4-aa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4-aaa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4-faa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q19 ('AUC0-5h [mg/L x h]', value '58') — already have one for this compound
- implicit units: 'AUC0-inf [mg/L x h]' — the LLM proposed 'mg/L x h', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=4-methylaminoantipyrine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Blaser_2021:other_prose, Blaser_2021_table_2); populations metamizole (n = 8), naproxen (n = 7) kept as separate records
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 27 linked by role; re-tagged parent→4-methylaminoantipyrine ×46, naproxen→4-methylaminoantipyrine ×13, parent→4-aminoantipyrine ×5, naproxen→4-aminoantipyrine ×7, parent→4-acetylaminoantipyrine ×3, parent→4-formylaminoantipyrine ×3, naproxen→4-acetylaminoantipyrine ×2, naproxen→4-formylaminoantipyrine ×1
- molar mass: none of 1 PubChem candidate(s) is '4-methylaminoantipyrine' (LLM) — left in mass units
- molar mass: none found for '4-methylaminoantipyrine' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '4-methylaminoantipyrine', not metamizole_sodium — the review values are the parent's

**Extraction notes:**
- table T3: unparsed_numeric_cell
- companion parameter table 2 transcribed (38 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Blaser_2021_table_2:row1:col1', 'Blaser_2021_table_2:row1:col2', 'Blaser_2021_table_2:row1:col3', 'Blaser_2021_table_2:row1:col4', 'Blaser_2021_table_2:row8:col1', 'Blaser_2021_table_2:row8:col2', 'Blaser_2021_table_2:row8:col3', 'Blaser_2021_table_2:row8:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Blaser_2021_table_2:row2:col1', 'Blaser_2021_table_2:row2:col2', 'Blaser_2021_table_2:row2:col3', 'Blaser_2021_table_2:row2:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Blaser_2021_table_2:row6:col1', 'Blaser_2021_table_2:row6:col2', 'Blaser_2021_table_2:row6:col4'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 |  | ['Blaser_2021_table_2:row4:col1', 'Blaser_2021_table_2:row4:col2', 'Blaser_2021_table_2:row4:col4'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['Blaser_2021_table_2:row3:col1', 'Blaser_2021_table_2:row3:col2', 'Blaser_2021_table_2:row3:col3', 'Blaser_2021_table_2:row3:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetamizole_sodium%5D%20MetamizoleSodium_Blaser2021_reference&body=Drug%3A%20metamizole_sodium%0ARecord%3A%20MetamizoleSodium_Blaser2021_reference%0APaper%3A%20Blaser_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metamizole_sodium/MetamizoleSodium_Blaser2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-22 11:57 UTC</sub>
