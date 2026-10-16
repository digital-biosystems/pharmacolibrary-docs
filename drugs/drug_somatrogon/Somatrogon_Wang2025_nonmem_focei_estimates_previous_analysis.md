<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatrogon&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/&quot;},{&quot;label&quot;:&quot;Wang_2025 \u00b7 nonmem_focei_estimates_previous_analysis&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatrogon_Wang2025_previous_nonmem_model_estimates&quot;,&quot;label&quot;:&quot;Wang_2025_previous_nonmem_model_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# somatrogon — `Somatrogon_Wang2025_nonmem_focei_estimates_previous_analysis`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wang Y et al., Implementing a Bayesian approach using…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13279](https://doi.org/10.1002/psp4.13279)

<div class="pk-model-meta" hidden drug="somatrogon" model-id="Somatrogon_Wang2025_nonmem_focei_estimates_previous_analysis" status="rejected" stale="false" population="pediatric participants" measured-compound="somatrogon" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Variance on CL/F' — extend the ontology if this is a real PK parameter (source ['psp413279-tbl-0005:row12:col1'])
- routed 'Variance on Vc/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Variance on Ka' — extend the ontology if this is a real PK parameter (source ['psp413279-tbl-0005:row17:col1'])
- routed 'Variance of ADAT effect on CL/F' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=somatrogon
- population split: 'nonmem focei estimates (previous analysis)' subgroup of Wang_2025 (paper reports 2 populations: nonmem focei estimates (previous analysis), previous nonmem model estimates)

**Extraction notes:**
- unparsed cell psp413279-tbl-0005:row2:col1 = '0.472 (0.406, 0.538) a'
- unparsed cell psp413279-tbl-0005:row2:col2 = '0.478 (0.416, 0.545)'
- unparsed cell psp413279-tbl-0005:row2:col6 = '0.489 (0.429, 0.557)'
- unparsed cell psp413279-tbl-0005:row2:col10 = '0.524 (0.473, 0.578)'
- unparsed cell psp413279-tbl-0005:row3:col1 = '0.014 (0.009, 0.018) a'
- unparsed cell psp413279-tbl-0005:row3:col2 = '0.065 (0.039, 0.098)'
- unparsed cell psp413279-tbl-0005:row3:col6 = '0.063 (0.038, 0.093)'
- unparsed cell psp413279-tbl-0005:row3:col10 = '0.052 (0.031, 0.079)'
- unparsed cell psp413279-tbl-0005:row4:col1 = '10.9 (8.696, 13.104) a'
- unparsed cell psp413279-tbl-0005:row4:col2 = '6.805 (4.775, 9.503)'
- unparsed cell psp413279-tbl-0005:row4:col6 = '7.563 (5.397, 10.066)'
- unparsed cell psp413279-tbl-0005:row4:col10 = '9.952 (8.454, 11.431)'
- unparsed cell psp413279-tbl-0005:row5:col1 = '2.37 (0.314, 4.426) a'
- unparsed cell psp413279-tbl-0005:row5:col2 = '2.303 (1.568, 3.125)'
- unparsed cell psp413279-tbl-0005:row5:col6 = '2.252 (1.582, 3.077)'
- unparsed cell psp413279-tbl-0005:row5:col10 = '2.042 (1.456, 2.713)'
- unparsed cell psp413279-tbl-0005:row6:col1 = '0.313 (0.227, 0.399) a'
- unparsed cell psp413279-tbl-0005:row6:col2 = '0.178 (0.11, 0.309)'
- unparsed cell psp413279-tbl-0005:row6:col6 = '0.194 (0.111, 0.343)'
- unparsed cell psp413279-tbl-0005:row6:col10 = '0.256 (0.139, 0.477)'
- unparsed cell psp413279-tbl-0005:row7:col1 = '0.55 (0.475, 0.625) a'
- unparsed cell psp413279-tbl-0005:row7:col2 = '0.691 (0.655, 0.728)'
- unparsed cell psp413279-tbl-0005:row7:col6 = '0.692 (0.657, 0.728)'
- unparsed cell psp413279-tbl-0005:row7:col10 = '0.694 (0.656, 0.733)'
- unparsed cell psp413279-tbl-0005:row8:col1 = '0.353 (0.184, 0.522) a'
- unparsed cell psp413279-tbl-0005:row8:col2 = '1.116 (0.282, 1.625)'
- unparsed cell psp413279-tbl-0005:row8:col6 = '1.002 (0.225, 1.589)'
- unparsed cell psp413279-tbl-0005:row8:col10 = '0.784 (0.143, 1.436)'
- unparsed cell psp413279-tbl-0005:row9:col1 = '1.26 (0.994, 1.526) a'
- unparsed cell psp413279-tbl-0005:row9:col2 = '1.258 (0.83, 1.715)'
- unparsed cell psp413279-tbl-0005:row9:col6 = '1.265 (0.819, 1.703)'
- unparsed cell psp413279-tbl-0005:row9:col10 = '1.324 (0.892, 1.742)'
- unparsed cell psp413279-tbl-0005:row10:col1 = '1.74 (1.462, 2.018) a'
- unparsed cell psp413279-tbl-0005:row10:col2 = '1.341 (0.722, 2.004)'
- unparsed cell psp413279-tbl-0005:row10:col6 = '1.354 (0.692, 2.019)'
- unparsed cell psp413279-tbl-0005:row10:col10 = '1.448 (0.846, 2.067)'
- unparsed cell psp413279-tbl-0005:row11:col1 = '−0.258 (−0.274, −0.242) b'
- unparsed cell psp413279-tbl-0005:row11:col2 = '−0.111 (−0.267, 0.063)'
- unparsed cell psp413279-tbl-0005:row11:col6 = '−0.115 (−0.268, 0.062)'
- unparsed cell psp413279-tbl-0005:row11:col10 = '−0.117 (−0.287, 0.054)'
- unparsed cell psp413279-tbl-0005:row12:col2 = '0.058 (0.021, 0.113)'
- unparsed cell psp413279-tbl-0005:row12:col6 = '0.060 (0.022, 0.12)'
- unparsed cell psp413279-tbl-0005:row12:col10 = '0.076 (0.026, 0.151)'
- unparsed cell psp413279-tbl-0005:row13:col2 = '0.106 (0.02, 0.224)'
- unparsed cell psp413279-tbl-0005:row13:col6 = '0.104 (0.024, 0.223)'
- unparsed cell psp413279-tbl-0005:row13:col10 = '0.131 (0.036, 0.264)'
- unparsed cell psp413279-tbl-0005:row14:col2 = '0.352 (0.113, 0.685)'
- unparsed cell psp413279-tbl-0005:row14:col6 = '0.320 (0.113, 0.623)'
- unparsed cell psp413279-tbl-0005:row14:col10 = '0.325 (0.108, 0.626)'
- unparsed cell psp413279-tbl-0005:row15:col2 = '−0.024 (−0.115, 0.06)'
- unparsed cell psp413279-tbl-0005:row15:col6 = '−0.026 (−0.117, 0.059)'
- unparsed cell psp413279-tbl-0005:row15:col10 = '−0.017 (−0.133, 0.094)'
- unparsed cell psp413279-tbl-0005:row16:col2 = '0.006 (−0.191, 0.235)'
- unparsed cell psp413279-tbl-0005:row16:col6 = '0.002 (−0.192, 0.213)'
- unparsed cell psp413279-tbl-0005:row16:col10 = '−0.007 (−0.224, 0.245)'
- unparsed cell psp413279-tbl-0005:row17:col2 = '0.307 (0.069, 0.711)'
- unparsed cell psp413279-tbl-0005:row17:col6 = '0.338 (0.07, 0.776)'
- unparsed cell psp413279-tbl-0005:row17:col10 = '0.372 (0.077, 0.859)'
- unparsed cell psp413279-tbl-0005:row18:col2 = '0.005 (−0.04, 0.049)'
- unparsed cell psp413279-tbl-0005:row18:col6 = '0.003 (−0.045, 0.048)'
- unparsed cell psp413279-tbl-0005:row18:col10 = '0.002 (−0.06, 0.058)'
- unparsed cell psp413279-tbl-0005:row19:col2 = '−0.007 (−0.136, 0.108)'
- unparsed cell psp413279-tbl-0005:row19:col6 = '−0.011 (−0.131, 0.11)'
- unparsed cell psp413279-tbl-0005:row19:col10 = '−0.013 (−0.145, 0.112)'
- unparsed cell psp413279-tbl-0005:row20:col2 = '0.000 (−0.121, 0.122)'
- unparsed cell psp413279-tbl-0005:row20:col6 = '0.003 (−0.134, 0.134)'
- unparsed cell psp413279-tbl-0005:row20:col10 = '0.000 (−0.145, 0.145)'
- unparsed cell psp413279-tbl-0005:row21:col2 = '0.096 (0.017, 0.266)'
- unparsed cell psp413279-tbl-0005:row21:col6 = '0.095 (0.017, 0.25)'
- unparsed cell psp413279-tbl-0005:row21:col10 = '0.098 (0.018, 0.26)'
- unparsed cell Wang_2025_table_4:row0:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row0:col3 = 'N (0.472, 2)'
- unparsed cell Wang_2025_table_4:row0:col4 = 'N (0.472, 0.5)'
- unparsed cell Wang_2025_table_4:row1:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row1:col3 = 'N (0.0135, 0.1)'
- unparsed cell Wang_2025_table_4:row1:col4 = 'N (0.0135, 0.05)'
- unparsed cell Wang_2025_table_4:row2:col2 = 'U (0, 20)'
- unparsed cell Wang_2025_table_4:row2:col3 = 'N (10.9, 3)'
- unparsed cell Wang_2025_table_4:row2:col4 = 'N (10.9, 1)'
- unparsed cell Wang_2025_table_4:row3:col2 = 'U (0, 20)'
- unparsed cell Wang_2025_table_4:row3:col3 = 'N (2.37, 3)'
- unparsed cell Wang_2025_table_4:row3:col4 = 'N (2.37, 1)'
- unparsed cell Wang_2025_table_4:row4:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row4:col3 = 'N (0.313, 1)'
- unparsed cell Wang_2025_table_4:row4:col4 = 'N (0.313, 0.5)'
- unparsed cell Wang_2025_table_4:row5:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row5:col3 = 'N (0.55, 1)'
- unparsed cell Wang_2025_table_4:row5:col4 = 'N (0.55, 0.5)'
- unparsed cell Wang_2025_table_4:row6:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row6:col3 = 'N (0.353, 1)'
- unparsed cell Wang_2025_table_4:row6:col4 = 'N (0.353, 0.5)'
- unparsed cell Wang_2025_table_4:row7:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row7:col3 = 'N (1.26, 3)'
- unparsed cell Wang_2025_table_4:row7:col4 = 'N (1.26, 1)'
- unparsed cell Wang_2025_table_4:row8:col2 = 'U (0, 5)'
- unparsed cell Wang_2025_table_4:row8:col3 = 'N (1.74, 3)'
- unparsed cell Wang_2025_table_4:row8:col4 = 'N (1.74, 1)'
- unparsed cell Wang_2025_table_4:row9:col2 = 'U (−1, 5)'
- unparsed cell Wang_2025_table_4:row9:col3 = 'N (−0.258, 3)'
- unparsed cell Wang_2025_table_4:row9:col4 = 'N (−0.258, 1)'
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.5 (3/6 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[variance of adat effect on cl/f]` | not captured | 0.030 | only_one_extracted |
| `gpt-oss-120b` | `parameters[variance on vc/f]` | not captured | 0.343 | only_one_extracted |

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

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_somatrogon/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2025` / `Wang_2025::nonmem_focei_estimates_previous_analysis`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:21 UTC</sub>
