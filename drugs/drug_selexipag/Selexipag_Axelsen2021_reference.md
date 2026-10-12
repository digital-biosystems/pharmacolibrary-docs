<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;selexipag&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/&quot;},{&quot;label&quot;:&quot;Axelsen_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selexipag_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# selexipag — `Selexipag_Axelsen2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `selexipag`, measured `ACT-333679`.

## Citation
Axelsen LN et al., Clopidogrel, a CYP2C8 inhibitor, causes…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14365](https://doi.org/10.1111/bcp.14365)

<div class="pk-model-meta" hidden drug="selexipag" model-id="Selexipag_Axelsen2021_reference" status="rejected" stale="false" population="healthy subjects" measured-compound="ACT-333679" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| AUCτ geometric mean ratio (90% CI) | Q21 | not captured | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Treatment A c (n = 21)' — extend the ontology if this is a real PK parameter (source ['Axelsen_2021_table_1:row1:col1', 'Axelsen_2021_table_1:row1:col2', 'Axelsen_2021_table_1:row1:col3', 'Axelsen_2021_table_1:row1:col4'])
- dropped value-less row: 'Cmax [ng mL−1]' (captured trailing unit 'ng mL−1' for child rows)
- dropped value-less row: 'AUCτ [h*ng mL−1]' (captured trailing unit 'h*ng mL−1' for child rows)
- unit 'h*ng mL−1' inherited from a section-header row for AUC ratio (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ACT-333679
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles: 3 per-group rows of selexipag summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 4/4 row label(s) assigned, 0 linked by role; re-tagged ACT-333679→parent ×24
- review gap-fill skipped: this record measures 'ACT-333679', not selexipag — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1, 2, 3
- unparsed cell Axelsen_2021_table_1:row3:col4 = '1.35 (1.22, 1.50) [35.63]'
- unparsed cell Axelsen_2021_table_1:row3:col5 = '0.98 (0.89, 1.08) [32.82]'
- unparsed cell Axelsen_2021_table_1:row5:col4 = '1.44 (1.32, 1.56) [32.96]'
- unparsed cell Axelsen_2021_table_1:row5:col5 = '1.14 (1.04, 1.26) [29.03]'
- unparsed cell Axelsen_2021_table_1:row9:col4 = '1.69 (1.55, 1.84) [37.03]'
- unparsed cell Axelsen_2021_table_1:row9:col5 = '1.90 (1.72, 2.11) [33.83]'
- unparsed cell Axelsen_2021_table_1:row11:col4 = '2.25 (2.06, 2.46) [31.96]'
- unparsed cell Axelsen_2021_table_1:row11:col5 = '2.70 (2.45, 2.96) [30.91]'
- transposed table Axelsen_2021_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Axelsen_2021_table_2:row0:col3 = '1.41 (1.29, 1.54)'
- unparsed cell Axelsen_2021_table_2:row0:col4 = '2.06 (1.89, 2.25)'
- unparsed cell Axelsen_2021_table_2:row0:col6 = '1.08 (0.95, 1.23)'
- unparsed cell Axelsen_2021_table_2:row0:col7 = '2.42 (2.19, 2.68)'
- unparsed cell Axelsen_2021_table_2:row1:col3 = '1.68 (1.47, 1.92)'
- unparsed cell Axelsen_2021_table_2:row1:col4 = '2.88 (2.54, 3.27)'
- unparsed cell Axelsen_2021_table_2:row1:col6 = '1.27 (1.06, 1.53)'
- unparsed cell Axelsen_2021_table_2:row1:col7 = '3.36 (2.91, 3.89)'
- unparsed cell Axelsen_2021_table_2:row2:col3 = '1.02 (0.81, 1.29)'
- unparsed cell Axelsen_2021_table_2:row2:col4 = '1.86 (1.49, 2.32)'
- unparsed cell Axelsen_2021_table_2:row2:col6 = '1.19 (0.86, 1.63)'
- unparsed cell Axelsen_2021_table_2:row2:col7 = '2.70 (2.11, 3.47)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (5/5 fields) | none |

_All readers agree on the compared fields of this record._

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

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_selexipag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Axelsen_2021` / `Axelsen_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:20 UTC</sub>
