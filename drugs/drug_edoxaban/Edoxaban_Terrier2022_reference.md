<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;edoxaban&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/&quot;},{&quot;label&quot;:&quot;Terrier_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Edoxaban_Zou2025_reference&quot;,&quot;label&quot;:&quot;Zou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Zou2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Edoxaban_Edwina2025_reference&quot;,&quot;label&quot;:&quot;Edwina_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Edwina2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# edoxaban — `Edoxaban_Terrier2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has dabigatran, apixaban, rivaroxaban, edoxaban, the second reading unknown; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:37:52.269642+00:00) predates the upstream re-run (2026-10-05 14:41:42.278075+00:00). Current validate status: `rejected`.

## Citation
Terrier J et al., Population Pharmacokinetic Models for D…, Clinical pharmacology and t… (2022)
  ·  DOI: [10.1002/cpt.2649](https://doi.org/10.1002/cpt.2649)

<div class="pk-model-meta" hidden drug="edoxaban" model-id="Edoxaban_Terrier2022_reference" status="rejected" stale="true" population="mixed (AF, VTE, healthy volunteers)" measured-compound="dabigatran, apixaban, rivaroxaban, edoxaban" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Leil TA et al (2014)' — extend the ontology if this is a real PK parameter (source ['Terrier_2022_table_S34:row1:col3'])
- dropped unlinked row (NIL): 'Byon W et al (2017) Total subjects' — extend the ontology if this is a real PK parameter (source ['Terrier_2022_table_S34:row2:col2', 'Terrier_2022_table_S34:row2:col3'])
- dropped unlinked row (NIL): 'Ueshima S et al (2018)' — extend the ontology if this is a real PK parameter (source ['Terrier_2022_table_S34:row3:col2', 'Terrier_2022_table_S34:row3:col3'])
- dropped value-less row: 'Cirincione B et al (2018)' (captured trailing unit '2018' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dabigatran, apixaban, rivaroxaban, edoxaban
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- LLM selected parameter table(s) S32, S33, S34, S35
- transposed table Terrier_2022_table_S32: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Terrier_2022_table_S33: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Terrier_2022_table_S34:row1:col1 = '2 compartments, first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row1:col6 = '34.1 (0.328-0.356 95%CI) (proportional) 3.38 (2.02-5.64 95%CI) (additive)'
- unparsed cell Terrier_2022_table_S34:row2:col1 = '2 compartments, first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row3:col1 = '1 compartment first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row3:col6 = '34 (12.0) (proportional)'
- unparsed cell Terrier_2022_table_S34:row4:col1 = '2 compartments, first-order absorption with a linear elimination'
- unparsed cell Terrier_2022_table_S34:row4:col6 = '31.00 ± 0.284 (± SE) (HV and Studies Japan NVAF phase II28, Japan ACS phase II); 66.7 ± 1.87 (± SE) (Study APPRAISE 1); 45.7 ± 1.65 (± SE) (Study ARISTOTLE) (proportional)'
- transposed table Terrier_2022_table_S35: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | primary re-run | 0.4 (2/5 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[byon w et al (2017) total subjects]` | not captured | 4.35 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | dabigatran, apixaban, rivaroxaban, edoxaban | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | dabigatran, apixaban, rivaroxaban, edoxaban | edoxaban | mismatch |

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

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_edoxaban/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Terrier_2022` / `Terrier_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 14:41 UTC</sub>
