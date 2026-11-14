<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Buprenorphine&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/&quot;},{&quot;label&quot;:&quot;Santiago_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Bjrnsson2023_reference&quot;,&quot;label&quot;:&quot;Bj\u00f6rnsson_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jensen2007v2_reference&quot;,&quot;label&quot;:&quot;Jensen_2007_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jensen2007v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jones2021_reference&quot;,&quot;label&quot;:&quot;Jones_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Olofsen2022_reference&quot;,&quot;label&quot;:&quot;Olofsen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Olofsen2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Buprenorphine — `Buprenorphine_Santiago2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Buprenorphine" model-id="Buprenorphine_Santiago2020_reference" status="rejected" stale="false" population="stable opioid use disorder (OUD) subjects in Puerto Rico" measured-compound="buprenorphine" parameterization="apparent" topology="general_linear"></div>

## Citation
Santiago D, Mangas-Sanjuan V, Melin K, Duconge J, Zhao W, Venkataramanan R. Pharmacokinetic Characterization and External Evaluation of a Quantitative Framework of Sublingual Buprenorphine in Patients with an Opioid Disorder in Puerto Rico. Pharmaceutics 12(12):E1226 (2020).
  ·  DOI: [10.3390/pharmaceutics12121226](https://doi.org/10.3390/pharmaceutics12121226)

## Population and dosing

**Population:** stable opioid use disorder (OUD) subjects in Puerto Rico · condition chronic medication administration for opioid use disorder · age group adult · n = 12.

**Dosing:** 4, 8, 16 mg, other, single.

**Dosed compound ≠ measured compound:** dosed buprenorphine/naloxone sublingual film, measured buprenorphine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| K14 | k14 | 61 | 1.29 | 1.27 |
| K24 | kfm | 32 | 1/h |  |
| K23 | kfm | 78 | 1/h | 65 |
| K26 | k41 | 23 | 1/h |  |
| K35 | kfm | 69 | 1/h | 71 |
| K30 | kel | 21 | 1/h |  |
| K50 | kel | 38 | 1/h | 58 |
| KA | kabs | 58 | 2.54 | 2.43 |
| V2/F | V1/F | 11 | L | 872 |
| V3/F | V1/F | 16 | L | 712 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| K14 | `Q347` · k14 | 61 | 1.29 |  |  | 1.29 | 1.27 | exact (1) | pharmaceutics-12-01226-t004:row3:col1, pharmaceutics-12-01226-t004:row3:col3 |
| K24 | `Q305` · kfm | 32 | 1/h | 0.008889 | 1/s | 1/h |  | exact (1) | pharmaceutics-12-01226-t004:row4:col1, pharmaceutics-12-01226-t004:row4:col3 |
| K23 | `Q305` · kfm | 78 | 1/h | 0.02167 | 1/s | 1/h | 65 | exact (1) | pharmaceutics-12-01226-t004:row5:col1, pharmaceutics-12-01226-t004:row5:col3, pharmaceutics-12-01226-t004:row16:col3 |
| K26 | `Q348` · k41 | 23 | 1/h | 0.006389 | 1/s | 1/h |  | llm (0.6) | pharmaceutics-12-01226-t004:row6:col1, pharmaceutics-12-01226-t004:row6:col3 |
| K35 | `Q305` · kfm | 69 | 1/h | 0.01917 | 1/s | 1/h | 71 | exact (1) | pharmaceutics-12-01226-t004:row8:col1, pharmaceutics-12-01226-t004:row8:col3, pharmaceutics-12-01226-t004:row17:col3 |
| K30 | `Q47` · kel | 21 | 1/h | 0.005833 | 1/s | 1/h |  | exact (1) | pharmaceutics-12-01226-t004:row10:col1, pharmaceutics-12-01226-t004:row10:col3 |
| K50 | `Q47` · kel | 38 | 1/h | 0.01056 | 1/s | 1/h | 58 | exact (1) | pharmaceutics-12-01226-t004:row11:col1, pharmaceutics-12-01226-t004:row11:col3, pharmaceutics-12-01226-t004:row19:col3 |
| KA | `Q49` · kabs | 58 | 2.54 |  |  | 2.54 | 2.43 | exact (1) | pharmaceutics-12-01226-t004:row12:col1, pharmaceutics-12-01226-t004:row12:col3 |
| V2/F | `Q290` · V1/F | 11 | L | 0.011 | m3 | L | 872 | exact (1) | pharmaceutics-12-01226-t004:row13:col3 |
| V3/F | `Q290` · V1/F | 16 | L | 0.016 | m3 | L | 712 | exact (1) | pharmaceutics-12-01226-t004:row14:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Fixed-effects'; source reconciliation required
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'K14'; source reconciliation required
- table representations disagree for 'K24'; source reconciliation required
- table representations disagree for 'K23'; source reconciliation required
- table representations disagree for 'K26'; source reconciliation required
- table representations disagree for 'K62'; source reconciliation required
- table representations disagree for 'K35'; source reconciliation required
- table representations disagree for 'K45'; source reconciliation required
- table representations disagree for 'K30'; source reconciliation required
- table representations disagree for 'K50'; source reconciliation required
- table representations disagree for 'KA'; source reconciliation required
- table representations disagree for 'V2/F'; source reconciliation required
- table representations disagree for 'V3/F'; source reconciliation required
- table representations disagree for 'Inter-individual variability'; source reconciliation required
- table representations disagree for 'Residual error'; source reconciliation required
- table representations disagree for 'Nor-BUP'; source reconciliation required
- table representations disagree for 'BUP-g'; source reconciliation required
- table representations disagree for 'Nor-BUP-g'; source reconciliation required
- dropped unlinked row (NIL): 'Fixed-effects' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01226-t004:row2:col3'])
- unit_dimension_mismatch: 'K14' → Q347 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: '1.28 × 10−1' (kfm)
- unit_dimension_unknown: '2.18 × 10−1' (k41)
- dropped unlinked row (NIL): 'K62' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01226-t004:row7:col1', 'pharmaceutics-12-01226-t004:row7:col3'])
- dropped duplicate Q305 ('K45', value '121') — already have one for this compound
- conflicting Q305 for norbuprenorphine-3-glucuronide: 'K45' = '121' vs 'K35' = '69' — route to review
- unit_dimension_unknown: '3.81 × 10−4' (kel)
- unit_dimension_mismatch: 'KA' → Q49 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Nor-BUP' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01226-t004:row21:col3'])
- dropped unlinked row (NIL): 'BUP-g' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01226-t004:row22:col3'])
- dropped unlinked row (NIL): 'Nor-BUP-g' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01226-t004:row23:col3'])
- unit inherited for kfm (Q305): '1.28 × 10−1' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for kel (Q47): '3.81 × 10−4' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'K24' → 1/h (from the paper text: "The abstract states: 'metabolism (k24 = 1.28 × 10−1 h−1'.")
- implicit units: 'K23' → 1/h (from the paper text: "The abstract states: 'metabolism (... k23 = 6.43 × 10−2 h−1)'.")
- implicit units: 'K26' → 1/h (from the paper text: "The text describes the model parameters as 'first order rate constants' and provides other rate constants with units of ")
- implicit units: 'K35' → 1/h (from the paper text: "The abstract states: 'metabolism (... k35 = 1.23 × 10−1 h−1)'.")
- implicit units: 'K30' → 1/h (from the paper text: "The abstract states: 'metabolism (... k30 = 3.81 × 10−3 h−1)'.")
- implicit units: 'K50' → 1/h (from the paper text: "The abstract states: 'metabolism (... k50 = 1.27 × 10−1 h−1)'.")
- implicit units: 'V2/F' → L (from the popPK convention: 'No unit is explicitly stated for V2/F in the provided text. However, for a non-oral or bioavailability-adjusted volume o')
- implicit units: 'V3/F' → L (from the popPK convention: 'No unit is explicitly stated for V3/F in the provided text. Consistent with V2/F and general population PK conventions f')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=buprenorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 20 linked by role; re-tagged parent→buprenorphine ×2, parent→buprenorphine-3-glucuronide ×6, parent→norbuprenorphine ×10, parent→norbuprenorphine-3-glucuronide ×10
- molar mass: none of 1 PubChem candidate(s) is 'norbuprenorphine-3-glucuronide' (LLM) — left in mass units
- molar mass: none found for 'norbuprenorphine-3-glucuronide' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pharmaceutics-12-01226-t004: ragged_grid
- table pharmaceutics-12-01226-t004: unparsed_numeric_cell
- table pharmaceutics-12-01226-t004: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 4
- toxin: the located table(s) gave no kinetic value — 13 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['pharmaceutics-12-01226-t004:row13:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['pharmaceutics-12-01226-t004:row14:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['pharmaceutics-12-01226-t004:row4:col1', 'pharmaceutics-12-01226-t004:row4:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['pharmaceutics-12-01226-t004:row5:col1', 'pharmaceutics-12-01226-t004:row5:col3', 'pharmaceutics-12-01226-t004:row16:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['pharmaceutics-12-01226-t004:row8:col1', 'pharmaceutics-12-01226-t004:row8:col3', 'pharmaceutics-12-01226-t004:row17:col3'] |
| C5_dimension_Q347 | fail | 1 / [time] | 1.29 (dimensionless) | ['pharmaceutics-12-01226-t004:row3:col1', 'pharmaceutics-12-01226-t004:row3:col3'] |
| C5_dimension_Q348 | pass | 1 / [time] |  | ['pharmaceutics-12-01226-t004:row6:col1', 'pharmaceutics-12-01226-t004:row6:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pharmaceutics-12-01226-t004:row10:col1', 'pharmaceutics-12-01226-t004:row10:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pharmaceutics-12-01226-t004:row11:col1', 'pharmaceutics-12-01226-t004:row11:col3', 'pharmaceutics-12-01226-t004:row19:col3'] |
| C5_dimension_Q49 | fail | 1 / [time] | 2.54 (dimensionless) | ['pharmaceutics-12-01226-t004:row12:col1', 'pharmaceutics-12-01226-t004:row12:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 11 L | ['pharmaceutics-12-01226-t004:row13:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 16 L | ['pharmaceutics-12-01226-t004:row14:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Santiago2020_reference&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Santiago2020_reference%0APaper%3A%20Santiago_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_buprenorphine/Buprenorphine_Santiago2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 13:30 UTC</sub>
