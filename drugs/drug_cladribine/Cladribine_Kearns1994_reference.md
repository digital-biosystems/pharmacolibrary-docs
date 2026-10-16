<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/&quot;},{&quot;label&quot;:&quot;Kearns_1994 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_population_average_estimate&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_population_average_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cladribine — `Cladribine_Kearns1994_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.818), gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — cladribine: CL 39.4 L/h, Css 37.7 nM, t1/2z 19.7 h, Vss 357 L, CLR 318 mL/min, V 1.25e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cladribine, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Kearns CM et al., Pharmacokinetics of cladribine (2-chlor…, Cancer research (1994)

<div class="pk-model-meta" hidden drug="cladribine" model-id="Cladribine_Kearns1994_reference" status="rejected" stale="false" population="children with acute leukemia" measured-compound="cladribine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| clearance | `Q22` · CL | 39.4 | L/h | 1.0944444444444444e-05 | L/h | not captured | exact (1.0) | Kearns_1994:abstract, Kearns_1994:abstract | — | not captured |
| steady-state plasma concentration (predicted 120-h concentration) | `Q34` · Css | 37.7 | nM | not captured | [nM] | not captured | llm (0.6) | Kearns_1994:abstract, Kearns_1994:abstract | — | not captured |
| terminal phase half-life | `Q57` · t1/2z | 19.7 | h | 70920.0 | [h] | not captured | llm (0.6) | Kearns_1994:abstract, Kearns_1994:abstract | — | not captured |
| volume of distribution at steady state | `Q65` · Vss | 356.6 | L | 0.35660000000000003 | L | not captured | llm_corrected (0.6) | Kearns_1994:abstract | — | not captured |
| Renal clearance | `Q26` · CLR | 317.9 | mL/min | 5.298333333333333e-06 | L/h | not captured | exact (1.0) | Kearns_1994:abstract, Kearns_1994:abstract | — | not captured |
| volume of distribution (V d) | `Q61` · V | 1250.0 | L | 1.25 | L | not captured | review_gapfill (0.7) | Lu_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'cladribine as a single agent' — extend the ontology if this is a real PK parameter (source ['Kearns_1994:abstract'])
- unit_dimension_unknown: 'liters/h/m2' (CL)
- unit_dimension_mismatch: 'steady-state plasma concentration (predicted 120-h concentration)' → Q34 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'liters/m2' (Vss)
- unit_dimension_unknown: 'ml/min/m2' (CLR)
- unit_dimension_mismatch: 'Renal clearance as a percentage of total systemic clearance' → Q26 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q26 ('Renal clearance as a percentage of total systemic clearance', value 51.0) — already have one for this compound
- implicit units: 'clearance' → L/h (from the popPK convention: 'Clearance is conventionally expressed in L/h in population PK; the value 39.4 is consistent with this magnitude.')
- implicit units: 'volume of distribution at steady state' → L (from the popPK convention: 'Volume of distribution is conventionally expressed in L; the value 356.6 is consistent with this magnitude.')
- implicit units: 'Renal clearance' → mL/min (from the popPK convention: 'Renal clearance is conventionally expressed in mL/min (or L/h); the value 317.9 is consistent with mL/min (approx 5.3 L/')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cladribine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Lu_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kearns_1994_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.818 (9/11 fields) | 2 |
| `gpt-oss-120b` | not confirmed | 0.333 (5/15 fields) | 10 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 39.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` | not captured | 8.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean (sd) clearance]` | 39.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean (sd) steady-state plasma concentration]` | 37.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance as percentage of total systemic clearance]` | not captured | 51.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance].value` | 317.9 | 7 | mismatch |
| `gpt-oss-120b` | `parameters[steady-state plasma concentration]` | not captured | 37.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal phase half-life].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 1250.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cladribine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cladribine as a single agent]` | not captured | 8.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[renal clearance as a percentage of total systemic clearance]` | not captured | 51.0 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kearns_1994:abstract', 'Kearns_1994:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kearns_1994:abstract', 'Kearns_1994:abstract'] |
| C5_dimension_Q34 | fail | [length] | nM | not captured | not captured | ['Kearns_1994:abstract', 'Kearns_1994:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Kearns_1994:abstract', 'Kearns_1994:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lu_2024:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kearns_1994:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 39.4 | not captured | not captured | ['Kearns_1994:abstract', 'Kearns_1994:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 39.4 L/h | not captured | not captured | ['Kearns_1994:abstract', 'Kearns_1994:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.25e+03 L | not captured | not captured | ['Lu_2024:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 357 L | not captured | not captured | ['Kearns_1994:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cladribine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kearns_1994` / `Kearns_1994::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 01:05 UTC</sub>
