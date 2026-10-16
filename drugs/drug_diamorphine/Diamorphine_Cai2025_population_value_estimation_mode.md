<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;diamorphine&quot;,&quot;href&quot;:&quot;drugs/drug_diamorphine/&quot;},{&quot;label&quot;:&quot;Cai_2025 \u00b7 population_value_estimation_mode&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diamorphine — `Diamorphine_Cai2025_population_value_estimation_mode`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `diamorphine`, measured `morphine`.

## Citation
Cai L et al., Intranasal diamorphine population pharm…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13186](https://doi.org/10.1002/psp4.13186)

<div class="pk-model-meta" hidden drug="diamorphine" model-id="Diamorphine_Cai2025_population_value_estimation_mode" status="rejected" stale="false" population="adults (model) with pediatric simulation for breakthrough pain" measured-compound="morphine" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F% [per 70 kg] | Q40 | not captured | llm |
| V1 [L/per 70 kg] | Q63 | not captured | exact |
| V3 [L/per 70 kg] (= V2) | Q64 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'population value(estimation mode)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'Estimation Mode' (Fab)
- unit_dimension_unknown: 'Estimation Mode' (V1)
- unit_dimension_unknown: '= V2' (V2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'population value(estimation mode)' subgroup of Cai_2025 (paper reports 2 populations: fisher information matrix estimates (stochastic approximation), population value(estimation mode))
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 26 linked by role; re-tagged parent→morphine ×9
- review gap-fill skipped: this record measures 'morphine', not diamorphine — the review values are the parent's

**Extraction notes:**
- unparsed cell psp413186-tbl-0002:row2:col3 = '3.70 [1.67–4.63]'
- unparsed cell psp413186-tbl-0002:row3:col3 = '0.532 [0.504–0.592]'
- unparsed cell psp413186-tbl-0002:row4:col3 = '9.43 [5.17–12.5]'
- unparsed cell psp413186-tbl-0002:row5:col3 = '34.3 [29.8–38.7]'
- unparsed cell psp413186-tbl-0002:row6:col3 = '102 [83.6–127]'
- unparsed cell psp413186-tbl-0002:row7:col3 = '100 [91.6–115]'
- unparsed cell psp413186-tbl-0002:row8:col3 = '23.9 [23.3–24.6]'
- unparsed cell psp413186-tbl-0002:row9:col3 = '3.07 [2.14–3.42]'
- unparsed cell psp413186-tbl-0002:row10:col3 = '139 [123–164]'
- unparsed cell Cai_2025_table_S3:row1:col2 = '1 (MLE)'
- unparsed cell Cai_2025_table_S3:row2:col2 = '1 (MLE)'
- unparsed cell Cai_2025_table_S3:row3:col2 = '1 (MLE)'
- companion parameter table S3 transcribed (3 record(s))
- LLM selected parameter table(s) 2, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (3/21 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | not captured | 0.5564729359758813 | only_one_extracted |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[auc]` | not captured | 26.0086 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl [l/h/per 70 kg]]` | not captured | 97.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 57.3906 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f % [per 70 kg]]` | not captured | 0.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f% [per 70 kg]]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | 0.5564729359758813 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 12 [h-1/per 70 kg]]` | not captured | 70.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 23 [h-1/per 70 kg]]` | not captured | 73.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k 3p [h-1/per 70 kg]]` | not captured | 16.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a [h-1 per 70 kg]]` | not captured | 2.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k34]` | not captured | 49.8731671036749 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k43]` | not captured | 5.59181439173388 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1 [l/per 70 kg]]` | not captured | 6.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 3 [l/per 70 kg]]` | not captured | 21.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1 [l/per 70 kg]]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3 [l/per 70 kg]]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_diamorphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cai_2025` / `Cai_2025::population_value_estimation_mode`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:56 UTC</sub>
