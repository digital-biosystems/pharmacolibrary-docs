<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Vaborbactam&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/&quot;},{&quot;label&quot;:&quot;Fornari_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vaborbactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vaborbactam/Vaborbactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vaborbactam — `Vaborbactam_Fornari2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none → none (none), the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `meropenem/vaborbactam`, measured `vaborbactam`.

## Citation
Fornari C et al., Dose rationale for the use of meropenem…, British journal of clinical… (2024)
  ·  DOI: [10.1111/bcp.16145](https://doi.org/10.1111/bcp.16145)

<div class="pk-model-meta" hidden drug="Vaborbactam" model-id="Vaborbactam_Fornari2024_reference" status="rejected" stale="false" population="paediatric patients with Gram-negative bacterial infections" measured-compound="vaborbactam" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- table section covariance: 'Adult Value' routed out of structural estimates ('corr V1 CL')
- table section covariance: 'Adult RSE (%)' routed out of structural estimates ('corr V1 CL')
- table section covariance: 'Children Value' routed out of structural estimates ('corr V1 CL')
- table section covariance: 'Children RSE (%)' routed out of structural estimates ('corr V1 CL')
- column 'cl (l/h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'βcler_cl' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'βbw_cl' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'hill' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'pma50 (weeks)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'v1 (l)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'βbw_v1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'q (l/h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'βbw_q' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'v2 (l)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'βbw_v2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ωcl' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ωv1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ωq' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ωv2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Adult Value' — extend the ontology if this is a real PK parameter (source ['Fornari_2024_table_p26_1:row0:col3', 'Fornari_2024_table_p26_1:row1:col3', 'Fornari_2024_table_p26_1:row2:col3', 'Fornari_2024_table_p26_1:row5:col3', 'Fornari_2024_table_p26_1:row6:col3', 'Fornari_2024_table_p26_1:row7:col3', 'Fornari_2024_table_p26_1:row8:col3', 'Fornari_2024_table_p26_1:row9:col3', 'Fornari_2024_table_p26_1:row10:col3', 'Fornari_2024_table_p26_1:row11:col3', 'Fornari_2024_table_p26_1:row12:col3', 'Fornari_2024_table_p26_1:row13:col3', 'Fornari_2024_table_p26_1:row14:col3', 'Fornari_2024_table_p26_1:row16:col3', 'Fornari_2024_table_p26_1:row17:col3', 'Fornari_2024_table_p26_1:row18:col3', 'Fornari_2024_table_p26_1:row19:col3', 'Fornari_2024_table_p26_1:row22:col3', 'Fornari_2024_table_p26_1:row23:col3', 'Fornari_2024_table_p26_1:row24:col3', 'Fornari_2024_table_p26_1:row25:col3', 'Fornari_2024_table_p26_1:row26:col3', 'Fornari_2024_table_p26_1:row27:col3', 'Fornari_2024_table_p26_1:row28:col3', 'Fornari_2024_table_p26_1:row29:col3', 'Fornari_2024_table_p26_1:row30:col3', 'Fornari_2024_table_p26_1:row31:col3'])
- dropped unlinked row (NIL): 'Adult RSE (%)' — extend the ontology if this is a real PK parameter (source ['Fornari_2024_table_p26_1:row0:col4', 'Fornari_2024_table_p26_1:row1:col4', 'Fornari_2024_table_p26_1:row5:col4', 'Fornari_2024_table_p26_1:row7:col4', 'Fornari_2024_table_p26_1:row9:col4', 'Fornari_2024_table_p26_1:row11:col4', 'Fornari_2024_table_p26_1:row12:col4', 'Fornari_2024_table_p26_1:row13:col4', 'Fornari_2024_table_p26_1:row14:col4', 'Fornari_2024_table_p26_1:row16:col4', 'Fornari_2024_table_p26_1:row17:col4', 'Fornari_2024_table_p26_1:row18:col4', 'Fornari_2024_table_p26_1:row22:col4', 'Fornari_2024_table_p26_1:row24:col4', 'Fornari_2024_table_p26_1:row26:col4', 'Fornari_2024_table_p26_1:row28:col4', 'Fornari_2024_table_p26_1:row29:col4', 'Fornari_2024_table_p26_1:row30:col4', 'Fornari_2024_table_p26_1:row31:col4'])
- dropped unlinked row (NIL): 'Children Value' — extend the ontology if this is a real PK parameter (source ['Fornari_2024_table_p26_1:row0:col6', 'Fornari_2024_table_p26_1:row1:col6', 'Fornari_2024_table_p26_1:row2:col6', 'Fornari_2024_table_p26_1:row3:col6', 'Fornari_2024_table_p26_1:row4:col6', 'Fornari_2024_table_p26_1:row5:col6', 'Fornari_2024_table_p26_1:row6:col6', 'Fornari_2024_table_p26_1:row7:col6', 'Fornari_2024_table_p26_1:row8:col6', 'Fornari_2024_table_p26_1:row9:col6', 'Fornari_2024_table_p26_1:row10:col6', 'Fornari_2024_table_p26_1:row11:col6', 'Fornari_2024_table_p26_1:row12:col6', 'Fornari_2024_table_p26_1:row13:col6', 'Fornari_2024_table_p26_1:row14:col6', 'Fornari_2024_table_p26_1:row16:col6', 'Fornari_2024_table_p26_1:row17:col6', 'Fornari_2024_table_p26_1:row18:col6', 'Fornari_2024_table_p26_1:row19:col6', 'Fornari_2024_table_p26_1:row20:col6', 'Fornari_2024_table_p26_1:row21:col6', 'Fornari_2024_table_p26_1:row22:col6', 'Fornari_2024_table_p26_1:row23:col6', 'Fornari_2024_table_p26_1:row24:col6', 'Fornari_2024_table_p26_1:row25:col6', 'Fornari_2024_table_p26_1:row26:col6', 'Fornari_2024_table_p26_1:row27:col6', 'Fornari_2024_table_p26_1:row28:col6', 'Fornari_2024_table_p26_1:row29:col6', 'Fornari_2024_table_p26_1:row30:col6', 'Fornari_2024_table_p26_1:row31:col6'])
- dropped unlinked row (NIL): 'Children RSE (%)' — extend the ontology if this is a real PK parameter (source ['Fornari_2024_table_p26_1:row0:col7', 'Fornari_2024_table_p26_1:row1:col7', 'Fornari_2024_table_p26_1:row5:col7', 'Fornari_2024_table_p26_1:row7:col7', 'Fornari_2024_table_p26_1:row9:col7', 'Fornari_2024_table_p26_1:row11:col7', 'Fornari_2024_table_p26_1:row12:col7', 'Fornari_2024_table_p26_1:row13:col7', 'Fornari_2024_table_p26_1:row14:col7', 'Fornari_2024_table_p26_1:row16:col7', 'Fornari_2024_table_p26_1:row17:col7', 'Fornari_2024_table_p26_1:row18:col7', 'Fornari_2024_table_p26_1:row22:col7', 'Fornari_2024_table_p26_1:row24:col7', 'Fornari_2024_table_p26_1:row26:col7', 'Fornari_2024_table_p26_1:row28:col7', 'Fornari_2024_table_p26_1:row29:col7', 'Fornari_2024_table_p26_1:row30:col7', 'Fornari_2024_table_p26_1:row31:col7'])
- table mostly unlinked (4/4 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vaborbactam
- status held at route_to_review — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- transposed table Fornari_2024_table_p26_1: logical view retains original source coordinates
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['none', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[b]` | 0.282 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[pma50]` | 43.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[βbw_v1]` | 1 | not captured | only_one_extracted |

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

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_vaborbactam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fornari_2024` / `Fornari_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:38 UTC</sub>
