<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatrogon&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/&quot;},{&quot;label&quot;:&quot;Wang_2025 \u00b7 nonmem_focei_estimates_previous_analysis&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatrogon_Wang2025_previous_nonmem_model_estimates&quot;,&quot;label&quot;:&quot;Wang_2025_previous_nonmem_model_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# somatrogon — `Somatrogon_Wang2025_nonmem_focei_estimates_previous_analysis`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wang Y et al., Implementing a Bayesian approach using…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13279](https://doi.org/10.1002/psp4.13279)

## Model component
<dbs-pgx drug="somatrogon" model-id="Somatrogon_Wang2025_nonmem_focei_estimates_previous_analysis" status="rejected" stale="false" population="pediatric participants" measured-compound="somatrogon" parameterization="mechanistic" topology="1C"></dbs-pgx>

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

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_somatrogon/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2025` / `Wang_2025::nonmem_focei_estimates_previous_analysis`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:21 UTC</sub>
