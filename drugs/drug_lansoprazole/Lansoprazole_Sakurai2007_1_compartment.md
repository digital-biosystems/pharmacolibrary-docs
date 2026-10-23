<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;lansoprazole&quot;,&quot;href&quot;:&quot;drugs/drug_lansoprazole/&quot;},{&quot;label&quot;:&quot;Sakurai_2007 \u00b7 1_compartment&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lansoprazole_Wu2019_reference&quot;,&quot;label&quot;:&quot;Wu_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lansoprazole/Lansoprazole_Wu2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lansoprazole — `Lansoprazole_Sakurai2007_1_compartment`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-04 09:39 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The lansoprazole record lacks any distribution volume and any clearance or elimination parameter, so it is not a compartmental population PK model but an exposure/outcome paper, and a unit mismatch on intercompartmental clearance Q (0.104 l/kg) was flagged.

<div class="pk-model-meta" hidden drug="lansoprazole" model-id="Lansoprazole_Sakurai2007_1_compartment" status="rejected" stale="true" population="healthy Japanese males" measured-compound="lansoprazole" parameterization="mechanistic" topology="1C"></div>

## Citation
Sakurai Y, Hirayama M, Hashimoto M, Tanaka T, Hasegawa S, Irie S et al. Population pharmacokinetics and proton pump inhibitory effects of intravenous lansoprazole in healthy Japanese males. Biological & pharmaceutical bulletin 30(12):2238–2243 (2007).
  ·  DOI: [10.1248/bpb.30.2238](https://doi.org/10.1248/bpb.30.2238)

## Population and dosing

**Population:** healthy Japanese males · condition healthy · age group adult · n = &gt;=56.

**Dosing:** 15, 30 mg, iv, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| q 1 (l/kg) | Q | 0.104 | l/kg |
| q 3 | Q3 | 0.548 | L/h/kg |
| CL, L/h | CL | 4.9 | L/h |
| Vd, L | V | 11.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lansoprazole record lacks any distribution volume and any clearance or elimination parameter, so it is not a compartmental population PK model but an exposure/outcome paper, and a unit mismatch on intercompartmental clearance Q (0.104 l/kg) was flagged.**

The record reports only intercompartmental clearances — Q at 0.104 l/kg (a clearance given per kilogram, a dimension mismatch for a structural parameter) and Q3 at 0.548 with no unit — while no distribution volume and no clearance or elimination rate are present. The unit l/kg could not be converted to SI, so Q reached the model without an SI value. A second reader also disagreed on the parameterization (mechanistic versus apparent) and on which q values (0.181, 0.179, 2.50 versus 0.154, 0.547) belong to the model. Extracted — lansoprazole: Q 0.104 l/kg, Q3 0.548.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lansoprazole, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| q 1 (l/kg) | `Q30` · Q | 0.104 | l/kg |  |  | l/kg | space_fold (0.95) | tab_0:row3:col2, tab_0:row3:col3, tab_0:row3:col4 |
| q 3 | `Q308` · Q3 | 0.548 | L/h/kg | 1.066e-05 | m3/s | L/h | space_fold (0.95) | tab_0:row5:col2, tab_0:row5:col3, tab_0:row5:col4 |
| CL, L/h | `Q22` · CL | 4.9 | L/h | 1.361e-06 | m3/s | L/h | review_gapfill (0.7) | Wu_2019:review |
| Vd, L | `Q61` · V | 11.0 | L | 0.011 | m3 | L | review_gapfill (0.7) | Wu_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at "Needs review" — not promoted
- population split: '1-compartment' subgroup of Sakurai_2007 (paper reports 2 populations: 1-compartment, 2-compartment)
- gap-filled Q22 (CL) from Wu_2019's review values (primary lacked it)
- gap-filled Q61 (V) from Wu_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_0:row10:col1 = '0.0880 0.0525-0.113 0.0604 0.0521-0.0677'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 4.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q 5]` |  | 0.179 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 11.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | lansoprazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lansoprazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wu_2019:review'] |
| C5_dimension_Q30 | fail | [length] ** 3 | l/kg | ['tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wu_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.9 | ['Wu_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.9 L/h | ['Wu_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11 L | ['Wu_2019:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blansoprazole%5D%20Lansoprazole_Sakurai2007_1_compartment&body=Drug%3A%20lansoprazole%0ARecord%3A%20Lansoprazole_Sakurai2007_1_compartment%0APaper%3A%20Sakurai_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lansoprazole/Lansoprazole_Sakurai2007_1_compartment%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 09:39 UTC</sub>
