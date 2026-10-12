<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;lansoprazole&quot;,&quot;href&quot;:&quot;drugs/drug_lansoprazole/&quot;},{&quot;label&quot;:&quot;Sakurai_2007 \u00b7 1_compartment&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lansoprazole_Wu2019_reference&quot;,&quot;label&quot;:&quot;Wu_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lansoprazole/Lansoprazole_Wu2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lansoprazole — `Lansoprazole_Sakurai2007_1_compartment`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444), gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The lansoprazole record lacks any distribution volume and any clearance or elimination parameter, so it is not a compartmental population PK model but an exposure/outcome paper, and a unit mismatch on intercompartmental clearance Q (0.104 l/kg) was flagged.**

The record reports only intercompartmental clearances — Q at 0.104 l/kg (a clearance given per kilogram, a dimension mismatch for a structural parameter) and Q3 at 0.548 with no unit — while no distribution volume and no clearance or elimination rate are present. The unit l/kg could not be converted to SI, so Q reached the model without an SI value. A second reader also disagreed on the parameterization (mechanistic versus apparent) and on which q values (0.181, 0.179, 2.50 versus 0.154, 0.547) belong to the model. Extracted — lansoprazole: Q 0.104 l/kg, Q3 0.548.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lansoprazole, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:27.379578+00:00) predates the upstream re-run (2026-10-04 09:39:16.965871+00:00). Current validate status: `rejected`.

## Citation
Sakurai Y et al., Population pharmacokinetics and proton…, Biological & pharmaceutical… (2007)
  ·  DOI: [10.1248/bpb.30.2238](https://doi.org/10.1248/bpb.30.2238)

## Model component
<dbs-pgx drug="lansoprazole" model-id="Lansoprazole_Sakurai2007_1_compartment" status="rejected" stale="true" population="healthy Japanese males" measured-compound="lansoprazole" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| q 1 (l/kg) | `Q30` · Q | 0.104 | l/kg | not captured | [l] / [kg] | not captured | space_fold (0.95) | tab_0:row3:col2, tab_0:row3:col3, tab_0:row3:col4 | — | not captured |
| q 3 | `Q308` · Q3 | 0.548 | L/h/kg | 1.0655555555555558e-05 | L/h | not captured | space_fold (0.95) | tab_0:row5:col2, tab_0:row5:col3, tab_0:row5:col4 | — | not captured |
| CL, L/h | `Q22` · CL | 4.9 | L/h | 1.3611111111111114e-06 | L/h | not captured | review_gapfill (0.7) | Wu_2019:review | — | not captured |
| Vd, L | `Q61` · V | 11.0 | L | 0.011 | L | not captured | review_gapfill (0.7) | Wu_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'q 1 (l/kg)' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('q 2 (l/h/kg)', value '0.163') — already have one for this compound
- dropped unlinked row (NIL): 'q 4' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4'])
- unit_dimension_mismatch: 'q 5 (l/kg)' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('q 5 (l/kg)', value '0.179') — already have one for this compound
- dropped unlinked row (NIL): 'w V 2 s CV' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col2', 'tab_0:row10:col3'])
- dropped unlinked row (NIL): 's ADD (ng/ml)' — extend the ontology if this is a real PK parameter (source ['tab_0:row11:col2', 'tab_0:row11:col3', 'tab_0:row11:col4'])
- implicit units: 'q 3' → L/h/kg (from the paper text: "The abstract states: 'The mean inter-compartment clearance was estimated to be 0.0882 l/h/kg.' Although the value in the")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lansoprazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: '1-compartment' subgroup of Sakurai_2007 (paper reports 2 populations: 1-compartment, 2-compartment)
- gap-filled Q22 (CL) from Wu_2019's review values (primary lacked it)
- gap-filled Q61 (V) from Wu_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_0:row10:col1 = '0.0880 0.0525-0.113 0.0604 0.0521-0.0677'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.444 (4/9 fields) | 5 |
| `gpt-oss:120b` | partly confirmed | 0.857 (6/7 fields) | 1 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 4.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q 5]` | not captured | 0.179 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 11.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lansoprazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lansoprazole | unknown | mismatch |
| `gpt-oss:120b` | `parameters[q 5]` | not captured | 0.179 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wu_2019:review'] |
| C5_dimension_Q30 | fail | [length] ** 3 | l/kg | not captured | not captured | ['tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wu_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.9 | not captured | not captured | ['Wu_2019:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.9 L/h | not captured | not captured | ['Wu_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11 L | not captured | not captured | ['Wu_2019:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lansoprazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sakurai_2007` / `Sakurai_2007::1_compartment`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 09:39 UTC</sub>
