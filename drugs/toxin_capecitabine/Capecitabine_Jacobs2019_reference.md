<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Capecitabine&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/&quot;},{&quot;label&quot;:&quot;Jacobs_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Gruber2018_reference&quot;,&quot;label&quot;:&quot;Gruber_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Gruber2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Janssen2021_reference&quot;,&quot;label&quot;:&quot;Janssen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Janssen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_OyagaIriarte2019_reference&quot;,&quot;label&quot;:&quot;Oyaga-Iriarte_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_OyagaIriarte2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Capecitabine — `Capecitabine_Jacobs2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Capecitabine" model-id="Capecitabine_Jacobs2019_reference" status="rejected" stale="false" population="cancer patients" measured-compound="Capecitabine" parameterization="apparent" topology="general_linear"></div>

## Citation
Jacobs BAW, Deenen MJ, Joerger M, Rosing H, de Vries N, Meulendijks D et al. Pharmacokinetics of Capecitabine and Four Metabolites in a Heterogeneous Population of Cancer Patients: A Comprehensive Analysis. CPT: pharmacometrics & systems pharmacology 8(12):940-950 (2019).
  ·  DOI: [10.1002/psp4.12474](https://doi.org/10.1002/psp4.12474)

## Population and dosing

**Population:** cancer patients · condition cancer treatment · age group adult · n = `237`.

**Dosing:** 1650 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 15 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| k tr (hour−1) | kabs | 5.08 | hour−1 | 8.7 |
| CLc/F CAP (L/hour) | CLm/F | 337 | L/hour | 5.3 |
| Vc/F CAP (L) | V1/F | 207 | L | 11.0 |
| Qp/F CAP (L/hour) | Q/F | 15.8 | L/hour | 8.2 |
| Vp/F CAP (L) | V3/F | 31.4 | L | 8.3 |
| CLc/F dFCR (L/hour) | CL/F | 148 | L/hour | 4.3 |
| Vc/F dFCR (L) | V1/F | 20.5 | L | 3.6 |
| Qp/F dFCR (L/hour) | Q/F | 94.1 | L/hour | 6.4 |
| Vp/F dFCR (L) | V2/F | 39 | L | 3.6 |
| k dFUR&gt;5‐FU (hour‐1) | kfm | 129 | 1/h | 2.9 |
| k 5‐FU&gt;FBAL (hour‐1) | kfm | 777 | 1/h | 3.6 |
| effect_of_dpyd_2a_heterozygous_mutation | effect_of_dpyd_2a_heterozygous_mutation | 0.785 |  | 11.2 |
| CLc/F FBAL (L/hour) | CL/F | 36.7 | L/hour | 5.2 |
| effect_of_age | effect_of_age | -0.97 |  | 19.1 |
| effect_of_gender_female | effect_of_gender_female | 0.757 |  | 6.5 |
| Vc/F FBAL (L) | V1/F | 84.7 | L | 4.8 |
| Qp/F FBAL (L/hour) | Q/F | 11.7 | L/hour | 11.7 |
| Vp/F FBAL (L) | V2/F | 39 | L | 33.3 |

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
| k tr (hour−1) | `Q49` · kabs | 5.08 | hour−1 | 0.001411 | 1/s | 1/h | 8.7 | exact (1) | psp412474-tbl-0003:row1:col1 |
| CLc/F CAP (L/hour) | `Q351` · CLm/F | 337 | L/hour | 9.361e-05 | m3/s | l/h | 5.3 | llm (0.6) | psp412474-tbl-0003:row4:col1 |
| Vc/F CAP (L) | `Q290` · V1/F | 207 | L | 0.207 | m3 | l | 11.0 | llm_confirmed (0.6) | psp412474-tbl-0003:row5:col1 |
| Qp/F CAP (L/hour) | `Q69` · Q/F | 15.8 | L/hour | 4.389e-06 | m3/s | l/h | 8.2 | llm (0.6) | psp412474-tbl-0003:row6:col1 |
| Vp/F CAP (L) | `Q78` · V3/F | 31.4 | L | 0.0314 | m3 | l | 8.3 | llm_corrected (0.6) | psp412474-tbl-0003:row7:col1 |
| CLc/F dFCR (L/hour) | `Q27` · CL/F | 148 | L/hour | 4.111e-05 | m3/s | l/h | 4.3 | exact (1) | psp412474-tbl-0003:row8:col1 |
| Vc/F dFCR (L) | `Q290` · V1/F | 20.5 | L | 0.0205 | m3 | l | 3.6 | exact (1) | psp412474-tbl-0003:row9:col1 |
| Qp/F dFCR (L/hour) | `Q69` · Q/F | 94.1 | L/hour | 2.614e-05 | m3/s | l/h | 6.4 | exact (1) | psp412474-tbl-0003:row10:col1 |
| Vp/F dFCR (L) | `Q82` · V2/F | 39 | L | 0.039 | m3 | l | 3.6 | exact (1) | psp412474-tbl-0003:row11:col1 |
| k dFUR&gt;5‐FU (hour‐1) | `Q305` · kfm | 129 | 1/h | 0.03583 | 1/s | 1/h | 2.9 | exact (1) | psp412474-tbl-0003:row12:col1 |
| k 5‐FU&gt;FBAL (hour‐1) | `Q305` · kfm | 777 | 1/h | 0.2158 | 1/s | 1/h | 3.6 | exact (1) | psp412474-tbl-0003:row13:col1 |
| effect_of_dpyd_2a_heterozygous_mutation | `Q900` · effect_of_dpyd_2a_heterozygous_mutation | 0.785 |  |  |  |  | 11.2 |  | psp412474-tbl-0003:row14:col1 |
| CLc/F FBAL (L/hour) | `Q27` · CL/F | 36.7 | L/hour | 1.019e-05 | m3/s | l/h | 5.2 | exact (1) | psp412474-tbl-0003:row15:col1 |
| effect_of_age | `Q900` · effect_of_age | -0.97 |  |  |  |  | 19.1 |  | psp412474-tbl-0003:row16:col1 |
| effect_of_gender_female | `Q900` · effect_of_gender_female | 0.757 |  |  |  |  | 6.5 |  | psp412474-tbl-0003:row17:col1 |
| Vc/F FBAL (L) | `Q290` · V1/F | 84.7 | L | 0.0847 | m3 | l | 4.8 | exact (1) | psp412474-tbl-0003:row18:col1 |
| Qp/F FBAL (L/hour) | `Q69` · Q/F | 11.7 | L/hour | 3.25e-06 | m3/s | l/h | 11.7 | exact (1) | psp412474-tbl-0003:row19:col1 |
| Vp/F FBAL (L) | `Q82` · V2/F | 39 | L | 0.039 | m3 | l | 33.3 | exact (1) | psp412474-tbl-0003:row20:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Effect of partial gastrectomy' — extend the ontology if this is a real PK parameter (source ['psp412474-tbl-0003:row2:col1'])
- dropped unlinked row (NIL): 'Effect of total gastrectomy' — extend the ontology if this is a real PK parameter (source ['psp412474-tbl-0003:row3:col1'])
- unit_dimension_unknown: 'hour‐1' (kfm)
- covariate level 'Effect of DPYD*2A heterozygous mutation' → Q900:effect_of_dpyd_2a_heterozygous_mutation = 0.785 (linear_fractional on Q351)
- covariate level 'Effect of age' → Q900:effect_of_age = -0.97 (linear_fractional on Q351)
- covariate level 'Effect of gender female' → Q900:effect_of_gender_female = 0.757 (linear_fractional on Q351)
- implicit units: 'k dFUR&gt;5‐FU (hour‐1)' → 1/h (from the paper text: "The table lists the parameter as 'k dFUR&gt;5‐FU (hour‐1)', explicitly stating the unit in the parameter description.")
- implicit units: 'k 5‐FU&gt;FBAL (hour‐1)' → 1/h (from the paper text: "The table lists the parameter as 'k 5‐FU&gt;FBAL (hour‐1)', explicitly stating the unit in the parameter description.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Capecitabine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 4 metabolites — the templates hold two
- pharmacogenetic covariate 'effect_of_dpyd_2a_heterozygous_mutation' (dpyd) — PGx domain
- status held at "Needs review" — not promoted
- row roles: 2 per-group rows of Capecitabine covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 15 linked by role; re-tagged parent→5′-deoxy-5-fluorocytidine (dFCR) ×4, parent→5-fluorouracil (5-FU) ×2, parent→fluoro-β-alanine (FBAL) ×5
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row8:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row15:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row9:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row18:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['psp412474-tbl-0003:row12:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['psp412474-tbl-0003:row13:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412474-tbl-0003:row1:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row10:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412474-tbl-0003:row19:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412474-tbl-0003:row20:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 148 L/h | ['psp412474-tbl-0003:row8:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 36.7 L/h | ['psp412474-tbl-0003:row15:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 207 L | ['psp412474-tbl-0003:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 20.5 L | ['psp412474-tbl-0003:row9:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 84.7 L | ['psp412474-tbl-0003:row18:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 39 L | ['psp412474-tbl-0003:row11:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 39 L | ['psp412474-tbl-0003:row20:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_Jacobs2019_reference&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_Jacobs2019_reference%0APaper%3A%20Jacobs_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_capecitabine/Capecitabine_Jacobs2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 18:33 UTC</sub>
