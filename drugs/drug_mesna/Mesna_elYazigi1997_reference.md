<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;mesna&quot;,&quot;href&quot;:&quot;drugs/drug_mesna/&quot;},{&quot;label&quot;:&quot;el-Yazigi_1997 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mesna — `Mesna_elYazigi1997_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The metabolite dimesna is disconnected from the dose, and the abstract-only record lacks a specific metabolism rate constant.**

Dimesna has no elimination pathway and zero compartments, making it an orphan metabolite with no path from the administered dose. The link from mesna to dimesna is missing a quantified rate parameter, as the specific link value is undefined. Because the record is abstract-only, these structural gaps were not resolved by fitted parameters. Extracted — mesna: t1/2α 0.12 hours, t1/2β 2.12 hours, V1 0.324 L/kg, Vss 1.09 L/kg, V2 2.09 L/kg, CL 0.755 L/hr.kg, MRT 6.77 hours, t1/2z 1.29 hours, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has mesna → dimesna (metabolism), the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
el-Yazigi A et al., Pharmacokinetics of mesna and dimesna a…, Journal of clinical pharmac… (1997)
  ·  DOI: [10.1002/j.1552-4604.1997.tb04344.x](https://doi.org/10.1002/j.1552-4604.1997.tb04344.x)

<div class="pk-model-meta" hidden drug="mesna" model-id="Mesna_elYazigi1997_reference" status="rejected" stale="false" population="patients undergoing bone marrow transplantation" measured-compound="mesna" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| distributive phase half-life (t1/2 alpha) | `Q59` · t1/2α | 0.12 | hours | 432.0 | [h] | not captured | llm (0.6) | el-Yazigi_1997:abstract | — | not captured |
| postdistributive phase half-life (t1/2 beta) | `Q60` · t1/2β | 2.12 | hours | 7632.0 | [h] | not captured | llm (0.6) | el-Yazigi_1997:abstract | — | not captured |
| volume of distribution of the central compartment (Vdc) | `Q63` · V1 | 0.324 | L/kg | 0.022680000000000002 | [l] / [kg] | not captured | boundary_compartment (0.9) | el-Yazigi_1997:abstract | — | not captured |
| volume of distribution at steady state (Vdss) | `Q65` · Vss | 1.09 | L/kg | 0.0763 | [l] / [kg] | not captured | llm_corrected (0.6) | el-Yazigi_1997:abstract | — | not captured |
| volume of distribution during the postdistributive phase (Vd beta) | `Q64` · V2 | 2.09 | L/kg | 0.14629999999999999 | [l] / [kg] | not captured | llm_corrected (0.6) | el-Yazigi_1997:abstract | — | not captured |
| total clearance (Cl) | `Q22` · CL | 0.755 | L/hr.kg | not captured | [l] / [[h] · [kg]] | not captured | exact (1.0) | el-Yazigi_1997:abstract | — | not captured |
| mean residence time (MRT) | `Q53` · MRT | 6.77 | hours | 24372.0 | [h] | not captured | exact (1.0) | el-Yazigi_1997:abstract | — | not captured |
| t1/2 | `Q57` · t1/2z | 1.29 | hours | 4644.0 | [h] | not captured | exact (1.0) | el-Yazigi_1997:abstract | — | not captured |
| ratio of the area under the concentration-time curve (AUC) of mesna to that of dimesna | `Q21` · AUC ratio | 1.21 | not specified | not captured | [notspecified] | not captured | llm_corrected (0.6) | el-Yazigi_1997:abstract | — | not captured |
| fractions of dose excreted in urine in the form of mesna and dimesna in 20 hours (fu) | `Q46` · fu | 0.361 | not specified | not captured | [notspecified] | not captured | llm (0.6) | el-Yazigi_1997:abstract, el-Yazigi_1997:abstract | — | not captured |
| renal clearance (ClR) | `Q26` · CLR | 0.244 | L/hr.kg | not captured | [l] / [[h] · [kg]] | not captured | exact (1.0) | el-Yazigi_1997:abstract, el-Yazigi_1997:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (12/18 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['mesna', 'dimesna', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[fraction of dose excreted in urine in the form of mesna]` | not captured | 0.361 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fractions of dose excreted in urine in the form of mesna and dimesna in 20 hours]` | 0.361 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance (clr)]` | not captured | 0.244 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | 0.244 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution during the postdistributive phase].parameter_id` | Q64 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [length] ** 3 * [mass] / [time] | L/hr.kg | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q26 | fail | [length] ** 3 * [mass] / [time] | L/hr.kg | not captured | not captured | ['el-Yazigi_1997:abstract', 'el-Yazigi_1997:abstract'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.755 | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 22.7 L | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 146 L | not captured | not captured | ['el-Yazigi_1997:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 76.3 L | not captured | not captured | ['el-Yazigi_1997:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_mesna/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `el-Yazigi_1997` / `el-Yazigi_1997::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:49 UTC</sub>
