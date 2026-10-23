<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;mesna&quot;,&quot;href&quot;:&quot;drugs/drug_mesna/&quot;},{&quot;label&quot;:&quot;el-Yazigi_1997 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mesna — `Mesna_elYazigi1997_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The metabolite dimesna is disconnected from the dose, and the abstract-only record lacks a specific metabolism rate constant.

<div class="pk-model-meta" hidden drug="mesna" model-id="Mesna_elYazigi1997_reference" status="rejected" stale="false" population="patients undergoing bone marrow transplantation" measured-compound="mesna" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
el-Yazigi A, Ernst P, al-Rawithi S, Legayada E, Raines DA. Pharmacokinetics of mesna and dimesna after simultaneous intravenous bolus and infusion administration in patients undergoing bone marrow transplantation. Journal of clinical pharmacology 37(7):618–624 (1997).
  ·  DOI: [10.1002/j.1552-4604.1997.tb04344.x](https://doi.org/10.1002/j.1552-4604.1997.tb04344.x)

## Population and dosing

**Population:** patients undergoing bone marrow transplantation · condition hemorrhagic cystitis · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| distributive phase half-life (t1/2 alpha) | t1/2α | 0.12 | hours |
| postdistributive phase half-life (t1/2 beta) | t1/2β | 2.12 | hours |
| volume of distribution of the central compartment (Vdc) | V1 | 0.324 | L/kg |
| volume of distribution at steady state (Vdss) | Vss | 1.09 | L/kg |
| volume of distribution during the postdistributive phase (Vd beta) | V2 | 2.09 | L/kg |
| total clearance (Cl) | CL | 0.755 | L/hr.kg |
| mean residence time (MRT) | MRT | 6.77 | hours |
| t1/2 | t1/2z | 1.29 | hours |
| ratio of the area under the concentration-time curve (AUC) of mesna to that of dimesna | AUC ratio | 1.21 | not specified |
| fractions of dose excreted in urine in the form of mesna and dimesna in 20 hours (fu) | fu | 0.361 | not specified |
| renal clearance (ClR) | CLR | 0.244 | L/hr.kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The metabolite dimesna is disconnected from the dose, and the abstract-only record lacks a specific metabolism rate constant.**

Dimesna has no elimination pathway and zero compartments, making it an orphan metabolite with no path from the administered dose. The link from mesna to dimesna is missing a quantified rate parameter, as the specific link value is undefined. Because the record is abstract-only, these structural gaps were not resolved by fitted parameters. Extracted — mesna: t1/2α 0.12 hours, t1/2β 2.12 hours, V1 0.324 L/kg, Vss 1.09 L/kg, V2 2.09 L/kg, CL 0.755 L/hr.kg, MRT 6.77 hours, t1/2z 1.29 hours, … (+3).

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| distributive phase half-life (t1/2 alpha) | `Q59` · t1/2α | 0.12 | hours | 432 | s | h | llm (0.6) | el-Yazigi_1997:abstract |
| postdistributive phase half-life (t1/2 beta) | `Q60` · t1/2β | 2.12 | hours | 7632 | s | h | llm (0.6) | el-Yazigi_1997:abstract |
| volume of distribution of the central compartment (Vdc) | `Q63` · V1 | 0.324 | L/kg | 0.02268 | m3 | l/kg | boundary_compartment (0.9) | el-Yazigi_1997:abstract |
| volume of distribution at steady state (Vdss) | `Q65` · Vss | 1.09 | L/kg | 0.0763 | m3 | l/kg | llm_corrected (0.6) | el-Yazigi_1997:abstract |
| volume of distribution during the postdistributive phase (Vd beta) | `Q64` · V2 | 2.09 | L/kg | 0.1463 | m3 | l/kg | llm_corrected (0.6) | el-Yazigi_1997:abstract |
| total clearance (Cl) | `Q22` · CL | 0.755 | L/hr.kg |  |  | l/(h·kg) | exact (1) | el-Yazigi_1997:abstract |
| mean residence time (MRT) | `Q53` · MRT | 6.77 | hours | 2.437e+04 | s | h | exact (1) | el-Yazigi_1997:abstract |
| t1/2 | `Q57` · t1/2z | 1.29 | hours | 4644 | s | h | exact (1) | el-Yazigi_1997:abstract |
| ratio of the area under the concentration-time curve (AUC) of mesna to that of dimesna | `Q21` · AUC ratio | 1.21 | not specified |  |  | notspecified | llm_corrected (0.6) | el-Yazigi_1997:abstract |
| fractions of dose excreted in urine in the form of mesna and dimesna in 20 hours (fu) | `Q46` · fu | 0.361 | not specified |  |  | notspecified | llm (0.6) | el-Yazigi_1997:abstract, el-Yazigi_1997:abstract |
| renal clearance (ClR) | `Q26` · CLR | 0.244 | L/hr.kg |  |  | l/(h·kg) | exact (1) | el-Yazigi_1997:abstract, el-Yazigi_1997:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'total clearance (Cl)' → Q22 (unit '[length] ** 3 * [mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q53 ('MRT', value 6.68) — already have one for this compound
- unit_dimension_unknown: 'not specified' (AUC ratio)
- unit_dimension_unknown: 'not specified' (fu)
- unit_dimension_mismatch: 'renal clearance (ClR)' → Q26 (unit '[length] ** 3 * [mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mesna
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 12/12 row label(s) assigned, 0 linked by role
- molar mass: none of 1 PubChem candidate(s) is 'dimesna' (LLM) — left in mass units
- molar mass: none found for 'dimesna' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in el-Yazigi_1997_metadata.yaml (14 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 3 * [mass] / [time] | L/hr.kg | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q26 | fail | [length] ** 3 * [mass] / [time] | L/hr.kg | ['el-Yazigi_1997:abstract', 'el-Yazigi_1997:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['el-Yazigi_1997:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.755 | ['el-Yazigi_1997:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 22.7 L | ['el-Yazigi_1997:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 146 L | ['el-Yazigi_1997:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 76.3 L | ['el-Yazigi_1997:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmesna%5D%20Mesna_elYazigi1997_reference&body=Drug%3A%20mesna%0ARecord%3A%20Mesna_elYazigi1997_reference%0APaper%3A%20el-Yazigi_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mesna/Mesna_elYazigi1997_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:49 UTC</sub>
