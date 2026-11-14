<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Buprenorphine&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/&quot;},{&quot;label&quot;:&quot;Jensen_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Bjrnsson2023_reference&quot;,&quot;label&quot;:&quot;Bj\u00f6rnsson_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jensen2007v2_reference&quot;,&quot;label&quot;:&quot;Jensen_2007_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jensen2007v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jones2021_reference&quot;,&quot;label&quot;:&quot;Jones_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Olofsen2022_reference&quot;,&quot;label&quot;:&quot;Olofsen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Olofsen2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Buprenorphine — `Buprenorphine_Jensen2007_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Buprenorphine" model-id="Buprenorphine_Jensen2007_reference" status="rejected" stale="false" population="sheep" measured-compound="Buprenorphine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Jensen ML, Foster D, Upton R, Grant C, Martinez A, Somogyi A. Comparison of cerebral pharmacokinetics of buprenorphine and norbuprenorphine in an in vivo sheep model. Xenobiotica; the fate of foreign compounds in biological systems 37(4):441–457 (2007).
  ·  DOI: [10.1080/00498250701251126](https://doi.org/10.1080/00498250701251126)

## Population and dosing

**Population:** sheep · condition healthy.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-life of 20 min | t1/2z | 20 | min |
| permeability (47 ml min(-1)) | CLint | 47 | ml min(-1) |
| cerebral distribution volume (595 ml) | V2 | 595 | ml |
| cerebral distribution volume (157 ml) | V2 | 157 | ml |
| blood-brain equilibration half-life (21 min) | t1/2z | 21 | min |
| Estimated BPN CL | CL | 52.1 | L/h |
| plasma volume | V | 1.0 | mL |
| ka = | kabs | 2.54 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-life of 20 min | `Q57` · t1/2z | 20 | min | 1200 | s | min | half_life_rule (0.95) | Jensen_2007:abstract |
| permeability (47 ml min(-1)) | `Q3` · CLint | 47 | ml min(-1) |  |  | ml/min | llm (0.6) | Jensen_2007:abstract |
| cerebral distribution volume (595 ml) | `Q64` · V2 | 595 | ml | 0.000595 | m3 | ml | exact (1) | Jensen_2007:abstract |
| cerebral distribution volume (157 ml) | `Q64` · V2 | 157 | ml | 0.000157 | m3 | ml | exact (1) | Jensen_2007:abstract |
| blood-brain equilibration half-life (21 min) | `Q57` · t1/2z | 21 | min | 1260 | s | min | toxin_unit_relink (0.85) | Jensen_2007:abstract |
| Estimated BPN CL | `Q22` · CL | 52.1 | L/h | 1.447e-05 | m3/s | L/h | review_gapfill (0.7) | Björnsson_2023:review |
| plasma volume | `Q61` · V | 1.0 | mL | 1e-06 | m3 | L | review_gapfill (0.7) | Rivera-Espinosa_2024:review |
| ka = | `Q49` · kabs | 2.54 | h−1 | 0.0007056 | 1/s | 1/h | review_gapfill (0.7) | Santiago_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '0.04 mg kg(-1) BUP' — extend the ontology if this is a real PK parameter (source ['Jensen_2007:abstract'])
- dropped unlinked row (NIL): '0.6 mg kg(-1) norBUP' — extend the ontology if this is a real PK parameter (source ['Jensen_2007:abstract'])
- unit_dimension_mismatch: 'permeability (47 ml min(-1))' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped unlinked row (NIL): 'permeability (6 ml min(-1))' — extend the ontology if this is a real PK parameter (source ['Jensen_2007:abstract'])
- relinked 'blood-brain equilibration half-life (21 min)' Q100 → Q57: a half-life by its label (the unit decides, not the label)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Buprenorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 8/8 row label(s) assigned, 2 linked by role; re-tagged Buprenorphine→parent ×4, Buprenorphine→Norbuprenorphine ×3
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Björnsson_2023's review values (primary lacked it)
- gap-filled Q61 (V) from Rivera-Espinosa_2024's review values (primary lacked it)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Santiago_2020's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jensen_2007_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Björnsson_2023:review'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | ml min(-1) ([length] ** 3 / [time]) | ['Jensen_2007:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Santiago_2020:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Jensen_2007:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Jensen_2007:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Rivera-Espinosa_2024:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Jensen_2007:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Jensen_2007:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 52.1 | ['Björnsson_2023:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 52.1 L/h | ['Björnsson_2023:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.001 L | ['Rivera-Espinosa_2024:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.595 L | ['Jensen_2007:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.157 L | ['Jensen_2007:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Jensen2007_reference&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Jensen2007_reference%0APaper%3A%20Jensen_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_buprenorphine/Buprenorphine_Jensen2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 13:30 UTC</sub>
