<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;fosinopril&quot;,&quot;href&quot;:&quot;drugs/drug_fosinopril/&quot;},{&quot;label&quot;:&quot;Hu_1997 \u00b7 caucasian&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fosinopril — `Fosinopril_Hu1997_caucasian`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.235). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The fosinoprilat record was rejected because the disposition rate constants λ1 (3.85) and kel (0.55) are reported in L/hr instead of reciprocal hours, a dimension mismatch on structural parameters, and the fraction excreted (fe, 45.90) carries 'n = 9' in place of a unit, which could not be converted to SI.**

For fosinoprilat, λ1 (fast disposition phase, 3.85) and kel (terminal elimination, 0.55) are macro-rate constants, so their unit should be per hour; the record gives L/hr, a flow dimension, which fails the dimensional check on structural parameters. The excretion fraction fe is reported as 45.90 with 'n = 9' — a subject count, not a unit — so this parameter reached the model without an SI value. The remaining fosinoprilat parameters (e.g. t1/2α 0.33 hr, t1/2β 1.58 hr, t1/2γ 8.24 hr, V 58.14 mL/kg, Vss 11638 mL, AUC∞ 3423 ng·hr/mL, MRT 4.71 hr, CL 1222 mL/hr) carry consistent units and show no dimensional problem. Extracted — fosinoprilat: λ1 3.85 L/hr, kel 0.55 L/hr, t1/2α 0.33 hr, t1/2β 1.58 hr, t1/2γ 8.24 hr, V 58.1 mL/kg, Vss 1.16e+04 mL, AUC∞ 3.42e+03 ng · hr/mL, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of aucinf: this record has 3423, the second reading none; it also differs on 12 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:53.708409+00:00) predates the upstream re-run (2026-10-07 06:29:47.178444+00:00). Current validate status: `rejected`.

## Citation
Hu OY et al., Pharmacokinetics of fosinoprilat in Chi…, Journal of clinical pharmac… (1997)
  ·  DOI: [10.1002/j.1552-4604.1997.tb05632.x](https://doi.org/10.1002/j.1552-4604.1997.tb05632.x)

<div class="pk-model-meta" hidden drug="fosinopril" model-id="Fosinopril_Hu1997_caucasian" status="rejected" stale="true" population="healthy Chinese and white men" measured-compound="fosinoprilat" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| α (L/hr) | `Q67` · λ1 | 3.85 | L/hr | not captured | [l] / [h] | not captured | exact (1.0) | Hu_1997_table_2:row0:col2 | — | not captured |
| β (L/hr) | `Q47` · kel | 0.55 | L/hr | not captured | [l] / [h] | not captured | exact (1.0) | Hu_1997_table_2:row1:col2 | — | not captured |
| t1/2α (hr) | `Q59` · t1/2α | 0.33 | hr | 1188.0 | [h] | not captured | exact (1.0) | Hu_1997_table_2:row3:col2 | — | not captured |
| t1/2β (hr) | `Q60` · t1/2β | 1.58 | hr | 5688.0 | [h] | not captured | exact (1.0) | Hu_1997_table_2:row4:col2 | — | not captured |
| t1/2γ, (hr) | `Q89` · t1/2γ | 8.24 | hr | 29664.0 | [h] | not captured | llm_confirmed (0.6) | Hu_1997_table_2:row5:col2 | — | not captured |
| Vc (mL/kg) | `Q61` · V | 58.14 | mL/kg | 0.004069799999999999 | [ml] / [kg] | not captured | exact (1.0) | Hu_1997_table_2:row8:col2 | — | not captured |
| Vdss (mL) | `Q65` · Vss | 11638 | mL | 0.011637999999999999 | [ml] | not captured | llm (0.6) | Hu_1997_table_2:row9:col2 | — | not captured |
| AUC∞ (ng · hr/mL) | `Q17` · AUC∞ | 3423 | ng · hr/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Hu_1997_table_2:row11:col2 | — | not captured |
| MRT (hr) | `Q53` · MRT | 4.71 | hr | 16956.0 | [h] | not captured | exact (1.0) | Hu_1997_table_2:row12:col2 | — | not captured |
| ClNR (mL/hr) | `Q22` · CL | 1222 | mL/hr | 3.3944444444444444e-07 | [ml] / [h] | not captured | exact (1.0) | Hu_1997_table_2:row17:col2 | — | not captured |
| CUE (%) | `Q44` · fe | 45.90 | n = 9 | not captured | [n=9] | not captured | llm (0.6) | Hu_1997_table_2:row19:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α (L/hr)' → Q67 (unit '[length] ** 3 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'β (L/hr)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k10 (L/hr)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('k10 (L/hr)', value '0.53') — already have one for this compound
- dropped duplicate Q65 ('Vdss (mL/kg)', value '152.49') — already have one for this compound
- dropped duplicate Q22 ('ClNR (mL/hr/kg)', value '15.87') — already have one for this compound
- unit_dimension_unknown: 'n = 9' (fe)
- metabolite volume: 'Vc (mL/kg)' Q63→Q61 for fosinoprilat — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fosinoprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 0, metabolites [1]
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'caucasian (n = 9)' subgroup of Hu_1997 (paper reports 2 populations: caucasian (n = 9), chinese (n = 12))
- row roles: 2 per-group rows of fosinoprilat distribution_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of fosinoprilat elimination_rate_constant but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of fosinoprilat summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of fosinoprilat central_volume but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of fosinoprilat other but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of fosinoprilat clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 15 linked by role

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Hu_1997_table_2:row7:col2 = '4,389 ± 299*'
- unparsed cell Hu_1997_table_2:row13:col2 = '2,280 ± 163*'
- unparsed cell Hu_1997_table_2:row14:col2 = '29.88 ± 2.12*'
- unparsed cell Hu_1997_table_2:row15:col2 = '1,057 ± 67*'
- unparsed cell Hu_1997_table_2:row16:col2 = '14.01 ± 1.17*'
- LLM region Hu_1997:results_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.235 (4/17 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[aucinf]` | 3423 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl,-]` | not captured | 6.85 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clnr]` | 1222 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cue]` | 45.90 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 4.71 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2α]` | 0.33 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2β]` | 1.58 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2γ,]` | 8.24 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | not captured | 29.38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 58.14 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` | 11638 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[α]` | 3.85 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.55 | not captured | only_one_extracted |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Hu_1997_table_2:row11:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row17:col2'] |
| C5_dimension_Q47 | fail | [length] ** 3 / [time] | L/hr | not captured | not captured | ['Hu_1997_table_2:row1:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row12:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row3:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hu_1997_table_2:row8:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hu_1997_table_2:row9:col2'] |
| C5_dimension_Q67 | fail | [length] ** 3 / [time] | L/hr | not captured | not captured | ['Hu_1997_table_2:row0:col2'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['Hu_1997_table_2:row5:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1222.0 | not captured | not captured | ['Hu_1997_table_2:row17:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.22 L/h | not captured | not captured | ['Hu_1997_table_2:row17:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.07 L | not captured | not captured | ['Hu_1997_table_2:row8:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11.6 L | not captured | not captured | ['Hu_1997_table_2:row9:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fosinopril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hu_1997` / `Hu_1997::caucasian`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:29 UTC</sub>
