<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Epirubicin&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/&quot;},{&quot;label&quot;:&quot;Sandstr\u00f6m_1996 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epirubicin_Camaggi1988_reference&quot;,&quot;label&quot;:&quot;Camaggi_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Camaggi1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Janssen2023_reference&quot;,&quot;label&quot;:&quot;Janssen_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Janssen2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Robert1994_reference&quot;,&quot;label&quot;:&quot;Robert_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Robert1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_1&quot;,&quot;label&quot;:&quot;Twelves_1992_group_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_2&quot;,&quot;label&quot;:&quot;Twelves_1992_group_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_2.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_3&quot;,&quot;label&quot;:&quot;Twelves_1992_group_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_3.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Epirubicin — `Epirubicin_Sandstrm1996_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Epirubicin's volume of distribution is listed as 200 microliters with 59 L/h clearance, a physically implausible combination suggesting a unit scaling error.

<div class="pk-model-meta" hidden drug="Epirubicin" model-id="Epirubicin_Sandstrm1996_reference" status="rejected" stale="false" population="breast cancer patients" measured-compound="Epirubicin" parameterization="mechanistic" topology="1C"></div>

## Citation
Sandström M, Freijs A, Larsson R, Nygren P, Fjällskog ML, Bergh J et al. Lack of relationship between systemic exposure for the component drug of the fluorouracil, epirubicin, and 4-hydroxycyclophosphamide regimen in breast cancer patients. Journal of clinical oncology : official journal of the American Society of Clinical Oncology 14(5):1581-1588 (1996).
  ·  DOI: [10.1200/jco.1996.14.5.1581](https://doi.org/10.1200/jco.1996.14.5.1581)

## Population and dosing

**Population:** breast cancer patients · condition breast cancer · age group adult · n = }.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vmax | Vmax | 105 | mg/L.h |
| Km | Km | 27 | mg/L |
| mean terminal half-life | t1/2z | 24 | hours |
| clearance (CL) | CL | 59 | L/h |
| total volume | V | 200.0 | µL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Epirubicin's volume of distribution is listed as 200 microliters with 59 L/h clearance, a physically implausible combination suggesting a unit scaling error.**

The total volume of distribution for epirubicin is recorded as 200 µL, which is orders of magnitude smaller than physiological volumes for a one-compartment model. Combined with a clearance of 59 L/h, this yields a terminal half-life inconsistent with the reported mean of 24 hours, indicating a severe unit or scale extraction error. Additionally, the maximum metabolic rate unit contains a conflicting dimensional structure relative to expected mass per time. Extracted — epirubicin: Vmax 105 mg/L.h, Km 27 mg/L, t1/2z 24 hours, CL 59 L/h, V 200 µL.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vmax | `Q66` · Vmax | 105 | mg/L.h |  |  | mg/(h·l) | special_case (0.95) | Sandström_1996:abstract |
| Km | `Q1` · Km | 27 | mg/L | 0.027 | kg/m3 | mg/l | exact (1) | Sandström_1996:abstract |
| mean terminal half-life | `Q57` · t1/2z | 24 | hours | 8.64e+04 | s | h | half_life_rule (0.95) | Sandström_1996:abstract |
| clearance (CL) | `Q22` · CL | 59 | L/h | 1.639e-05 | m3/s | l/h | exact (1) | Sandström_1996:abstract |
| total volume | `Q61` · V | 200.0 | µL | 2e-07 | m3 | L | review_gapfill (0.7) | Ansaar_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vmax' → Q66 (unit '[mass] * [time] / [length] ** 3' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q57 ('mean half-life', value 7) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Epirubicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 1 linked by role; re-tagged Epirubicin→parent ×5
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Ansaar_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Sandström_1996_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Sandström_1996:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Sandström_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Sandström_1996:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ansaar_2023:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/L.h ([mass] * [time] / [length] ** 3) | ['Sandström_1996:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 59 | ['Sandström_1996:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 59 L/h | ['Sandström_1996:abstract'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | ['Ansaar_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepirubicin%5D%20Epirubicin_Sandstrm1996_reference&body=Drug%3A%20epirubicin%0ARecord%3A%20Epirubicin_Sandstrm1996_reference%0APaper%3A%20Sandstr%C3%B6m_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_epirubicin/Epirubicin_Sandstrm1996_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 13:07 UTC</sub>
