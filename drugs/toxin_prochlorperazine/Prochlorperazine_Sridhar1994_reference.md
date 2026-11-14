<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Prochlorperazine&quot;,&quot;href&quot;:&quot;drugs/toxin_prochlorperazine/&quot;},{&quot;label&quot;:&quot;Sridhar_1994 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prochlorperazine_Olver1989v2_reference&quot;,&quot;label&quot;:&quot;Olver_1989_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prochlorperazine/Prochlorperazine_Olver1989v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prochlorperazine_Sridhar1993_reference&quot;,&quot;label&quot;:&quot;Sridhar_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prochlorperazine/Prochlorperazine_Sridhar1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prochlorperazine_Taylor1987_reference&quot;,&quot;label&quot;:&quot;Taylor_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prochlorperazine/Prochlorperazine_Taylor1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Prochlorperazine — `Prochlorperazine_Sridhar1994_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Prochlorperazine AUC unit (ng ml h-1) mismatches clearance parameter dimension ([mass] * [time] / [length] ** 3).

<div class="pk-model-meta" hidden drug="Prochlorperazine" model-id="Prochlorperazine_Sridhar1994_reference" status="rejected" stale="false" population="patients with cancer (malignant mesothelioma, non-small-cell lung carcinoma, hepatoma)" measured-compound="Prochlorperazine" parameterization="mechanistic" topology="1C"></div>

## Citation
Sridhar KS, Krishan A, Samy TS, Duncan RC, Sauerteig A, McPhee GV et al. Phase I and pharmacokinetics studies of prochlorperazine 2-h i.v. infusion as a doxorubicin-efflux blocker. Cancer chemotherapy and pharmacology 34(5):377–384 (1994).
  ·  DOI: [10.1007/BF00685561](https://doi.org/10.1007/BF00685561)

## Population and dosing

**Population:** patients with cancer (malignant mesothelioma, non-small-cell lung carcinoma, hepatoma) · condition oncology patients · age group adult · n = 17.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| highest peak plasma PCZ concentration achieved | Cmax | 1100 | ng/ml |
| plasma half-life (t1/2 alpha) | t1/2z | 57 | min |
| volume of distribution (Vd) | V | 350.1 | l/m2 |
| total clearance (ClT) | CL | 260.7 | L/h |
| area under the curve (AUC) | AUC | 1539 | ng ml h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Prochlorperazine AUC unit (ng ml h-1) mismatches clearance parameter dimension ([mass] * [time] / [length] ** 3).**

The AUC is listed as 1539 ng ml h-1, which has dimensions of mass times length cubed per time. Clearance requires dimensions of mass times time per length cubed, creating a unit conflict that prevents model parameterization. Additionally, the model was constructed from abstract-only data, meaning reported summary statistics replaced actual fitted parameters. Extracted — prochlorperazine: Cmax 1.1e+03 ng/ml, t1/2z 57 min, V 350 l/m2, CL 261 L/h, AUC 1.54e+03 ng ml h-1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| highest peak plasma PCZ concentration achieved | `Q32` · Cmax | 1100 | ng/ml | 0.0011 | kg/m3 | ng/ml | llm_confirmed (0.6) | Sridhar_1994:abstract |
| plasma half-life (t1/2 alpha) | `Q57` · t1/2z | 57 | min | 3420 | s | min | half_life_rule (0.95) | Sridhar_1994:abstract |
| volume of distribution (Vd) | `Q61` · V | 350.1 | l/m2 | 0.6057 | m3 | l/m2 | exact (1) | Sridhar_1994:abstract, Sridhar_1994:abstract |
| total clearance (ClT) | `Q22` · CL | 260.7 | L/h | 7.242e-05 | m3/s | L/h | exact (1) | Sridhar_1994:abstract, Sridhar_1994:abstract |
| area under the curve (AUC) | `Q88` · AUC | 1539 | ng ml h-1 |  |  | (ng·ml)/h | exact (1) | Sridhar_1994:abstract, Sridhar_1994:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('peak PCZ plasma levels', value None) — already have one for this compound
- unit_dimension_unknown: 'l m2 h-1' (CL)
- unit_dimension_mismatch: 'area under the curve (AUC)' → Q88 (unit '[mass] * [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- implicit units: 'total clearance (ClT)' → L/h (from the popPK convention: 'No unit stated in text or table footnotes. In population pharmacokinetics, total clearance (ClT) is conventionally expre')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Prochlorperazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Sridhar_1994_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Sridhar_1994:abstract', 'Sridhar_1994:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Sridhar_1994:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Sridhar_1994:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Sridhar_1994:abstract', 'Sridhar_1994:abstract'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | ng ml h-1 ([mass] * [length] ** 3 / [time]) | ['Sridhar_1994:abstract', 'Sridhar_1994:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 260.7 | ['Sridhar_1994:abstract', 'Sridhar_1994:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 261 L/h | ['Sridhar_1994:abstract', 'Sridhar_1994:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 606 L | ['Sridhar_1994:abstract', 'Sridhar_1994:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprochlorperazine%5D%20Prochlorperazine_Sridhar1994_reference&body=Drug%3A%20prochlorperazine%0ARecord%3A%20Prochlorperazine_Sridhar1994_reference%0APaper%3A%20Sridhar_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_prochlorperazine/Prochlorperazine_Sridhar1994_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 00:39 UTC</sub>
