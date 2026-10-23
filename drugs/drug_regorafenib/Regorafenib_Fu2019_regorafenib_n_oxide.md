<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Fu_2019 \u00b7 regorafenib_n_oxide&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Fu2019_regorafenib_n_oxide`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The record was rejected because regorafenib’s Fm metabolism parameter has no value, and regorafenib-N-oxide and regorafenib-glucuronide each have zero compartments.

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Fu2019_regorafenib_n_oxide" status="rejected" stale="false" population="male and female wild-type and Oatp1b2-deficient mice" measured-compound="regorafenib" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Fu Q, Chen M, Anderson JT, Sun X, Hu S, Sparreboom A et al. Interaction Between Sex and Organic Anion-Transporting Polypeptide 1b2 on the Pharmacokinetics of Regorafenib and Its Metabolites Regorafenib-N-Oxide and Regorafenib-Glucuronide in Mice. Clinical and translational science 12(4):400–407 (2019).
  ·  DOI: [10.1111/cts.12630](https://doi.org/10.1111/cts.12630)

## Population and dosing

**Population:** male and female wild-type and Oatp1b2-deficient mice · condition Oatp1b2 deficiency and sex comparison · n = 40.

**Dosing:** 700 mg, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 257 | ng/mL |
| Tmax (hour) | tmax | 2.95 | hour |
| AUClast (μg × hour/mL) | AUClast | 1.91 | μg·h/mL |
| CL | CL | 158.0 | L/h |
| REG ka IREG (n = 8) | kabs | 0.41 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because regorafenib’s Fm metabolism parameter has no value, and regorafenib-N-oxide and regorafenib-glucuronide each have zero compartments.**

Both metabolites are listed with zero compartments; their formation links use Fm, whose kind is unknown and for which no value is reported, while the glucuronide hydrolysis link has no parameter. Separately, a reported unit could not be converted to SI, but the record does not identify the affected parameter or unit. Extracted — regorafenib: Cmax 257 ng/mL, tmax 2.95 hour, AUClast 1.91 μg·h/mL, CL 158 L/h, kabs 0.41 h−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has regorafenib → regorafenib-n-oxide (metabolism); regorafenib → regorafenib-glucuronide (metabolism); regorafenib-glucuronide → regorafenib (hydrolysis), the second reading regorafenib → regorafenib-n-oxide (metabolism); regorafenib → regorafenib-glucuronide (metabolism); regorafenib-glucuronide → regorafenib (interconversion); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 257 | ng/mL |  |  | ng/ml | exact (1) | Fu_2019_table_1:row2:col5, Fu_2019_table_1:row2:col6, Fu_2019_table_1:row7:col5, Fu_2019_table_1:row7:col6 |
| Tmax (hour) | `Q56` · tmax | 2.95 | hour | 1.062e+04 | s | h | exact (1) | Fu_2019_table_1:row3:col5, Fu_2019_table_1:row3:col6, Fu_2019_table_1:row8:col5, Fu_2019_table_1:row8:col6 |
| AUClast (μg × hour/mL) | `Q74` · AUClast | 1.91 | μg·h/mL |  |  | μg·h/mL | exact (1) | Fu_2019_table_1:row5:col5, Fu_2019_table_1:row5:col6, Fu_2019_table_1:row10:col5, Fu_2019_table_1:row10:col6 |
| CL | `Q22` · CL | 158.0 | L/h | 4.389e-05 | m3/s | L/h | review_gapfill (0.7) | Delahousse_2024:review |
| REG ka IREG (n = 8) | `Q49` · kabs | 0.41 | h−1 | 0.0001139 | 1/s | 1/h | review_gapfill (0.7) | Szkutnik-Fiedler_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'regorafenib‐n‐oxide' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'μg × hour/mL' (AUClast)
- dropped unlinked row (NIL): 'Oatp1b2(−/−) mice' — extend the ontology if this is a real PK parameter (source ['Fu_2019_table_1:row6:col5', 'Fu_2019_table_1:row6:col6'])
- implicit units: 'AUClast (μg × hour/mL)' → μg·h/mL (from the paper text: 'The parameter is explicitly given as “AUClast (μg × hour/mL)”; this is equivalent to μg·h/mL.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=regorafenib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'regorafenib‐n‐oxide' subgroup of Fu_2019 (paper reports 4 populations: estimate, regorafenib‐glucuronide, regorafenib‐n‐oxide, regorafinib)
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 34 linked by role; re-tagged parent→regorafenib-N-oxide ×10, parent→regorafenib-glucuronide ×26, regorafenib→parent ×22
- molar mass: no plausible PubChem entry for 'regorafenib-glucuronide' ('regorafenib-glucuronide') — left in mass units
- molar mass: none found for 'regorafenib-glucuronide' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Delahousse_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Szkutnik-Fiedler_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell cts12630-tbl-0003:row8:col1 = '0.340a'
- unparsed cell cts12630-tbl-0003:row9:col1 = '0.280a'
- unparsed cell cts12630-tbl-0003:row10:col1 = '0.170a'
- unparsed cell cts12630-tbl-0003:row11:col1 = '0.090a'
- unparsed cell Fu_2019_table_1:row5:col3 = '0.466 ± 0.169*'
- unparsed cell Fu_2019_table_1:row7:col3 = '806 ± 605†, *'
- unparsed cell Fu_2019_table_1:row10:col3 = '4.08 ± 3.84†, *'
- companion parameter table 1 transcribed (43 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['regorafenib', 'regorafenib-n-oxide', 'metabolism'], ['regorafenib', 'regorafenib-glucuronide', 'metabolism'], ['regorafenib-glucuronide', 'regorafenib', 'hydrolysis']] | [['regorafenib', 'regorafenib-n-oxide', 'metabolism'], ['regorafenib', 'regorafenib-glucuronide', 'metabolism'], ['regorafenib-glucuronide', 'regorafenib', 'interconversion']] | mismatch |
| `qwen3.8-27b` | `parameters[cl]` | 158.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[reg ka ireg]` | 0.41 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Delahousse_2024:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Fu_2019_table_1:row2:col5', 'Fu_2019_table_1:row2:col6', 'Fu_2019_table_1:row7:col5', 'Fu_2019_table_1:row7:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Szkutnik-Fiedler_2024:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Fu_2019_table_1:row3:col5', 'Fu_2019_table_1:row3:col6', 'Fu_2019_table_1:row8:col5', 'Fu_2019_table_1:row8:col6'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Fu_2019_table_1:row5:col5', 'Fu_2019_table_1:row5:col6', 'Fu_2019_table_1:row10:col5', 'Fu_2019_table_1:row10:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 158 | ['Delahousse_2024:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 158 L/h | ['Delahousse_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bregorafenib%5D%20Regorafenib_Fu2019_regorafenib_n_oxide&body=Drug%3A%20regorafenib%0ARecord%3A%20Regorafenib_Fu2019_regorafenib_n_oxide%0APaper%3A%20Fu_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_regorafenib/Regorafenib_Fu2019_regorafenib_n_oxide%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:39 UTC</sub>
