<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sabatolimab&quot;,&quot;href&quot;:&quot;drugs/drug_sabatolimab/&quot;},{&quot;label&quot;:&quot;Xu_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sabatolimab — `Sabatolimab_Xu2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="sabatolimab" model-id="Sabatolimab_Xu2023_reference" status="rejected" stale="false" population="patients with solid tumors and hematologic malignancies" measured-compound="sabatolimab" parameterization="mechanistic" topology="1C"></div>

## Citation
Xu S, Zhang N, Rinne ML, Sun H, Stein AM. Sabatolimab (MBG453) model-informed drug development for dose selection in patients with myelodysplastic syndrome/acute myeloid leukemia and solid tumors. CPT: pharmacometrics & systems pharmacology 12(11):1653–1665 (2023).
  ·  DOI: [10.1002/psp4.12962](https://doi.org/10.1002/psp4.12962)

## Population and dosing

**Population:** patients with solid tumors and hematologic malignancies · condition solid tumors and hematologic malignancies · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sabatolimab, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fixed effect' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row1:col3', 'psp412962-tbl-0001:row1:col4', 'psp412962-tbl-0001:row1:col5', 'psp412962-tbl-0001:row2:col3', 'psp412962-tbl-0001:row2:col4', 'psp412962-tbl-0001:row2:col5', 'psp412962-tbl-0001:row3:col3', 'psp412962-tbl-0001:row3:col4', 'psp412962-tbl-0001:row3:col5', 'psp412962-tbl-0001:row4:col3', 'psp412962-tbl-0001:row4:col4', 'psp412962-tbl-0001:row4:col5', 'psp412962-tbl-0001:row5:col3', 'psp412962-tbl-0001:row5:col4', 'psp412962-tbl-0001:row5:col5', 'psp412962-tbl-0001:row6:col3'])
- dropped unlinked row (NIL): 'Random effect b' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row7:col3', 'psp412962-tbl-0001:row7:col4', 'psp412962-tbl-0001:row7:col5', 'psp412962-tbl-0001:row8:col3', 'psp412962-tbl-0001:row8:col4', 'psp412962-tbl-0001:row8:col5', 'psp412962-tbl-0001:row9:col3', 'psp412962-tbl-0001:row9:col4', 'psp412962-tbl-0001:row9:col5', 'psp412962-tbl-0001:row10:col3', 'psp412962-tbl-0001:row10:col4', 'psp412962-tbl-0001:row10:col5'])
- dropped unlinked row (NIL): 'Error' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row12:col3', 'psp412962-tbl-0001:row12:col4', 'psp412962-tbl-0001:row12:col5', 'psp412962-tbl-0001:row13:col3', 'psp412962-tbl-0001:row13:col4', 'psp412962-tbl-0001:row13:col5'])
- dropped unlinked row (NIL): 'Covariate effect c' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row14:col3', 'psp412962-tbl-0001:row14:col4', 'psp412962-tbl-0001:row14:col5', 'psp412962-tbl-0001:row15:col3', 'psp412962-tbl-0001:row15:col4', 'psp412962-tbl-0001:row15:col5', 'psp412962-tbl-0001:row16:col3', 'psp412962-tbl-0001:row16:col4', 'psp412962-tbl-0001:row16:col5', 'psp412962-tbl-0001:row17:col3', 'psp412962-tbl-0001:row17:col4', 'psp412962-tbl-0001:row17:col5'])
- dropped unlinked row (NIL): 'Covariate effect d' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row18:col3', 'psp412962-tbl-0001:row18:col4', 'psp412962-tbl-0001:row18:col5', 'psp412962-tbl-0001:row19:col3', 'psp412962-tbl-0001:row19:col4', 'psp412962-tbl-0001:row19:col5', 'psp412962-tbl-0001:row20:col3', 'psp412962-tbl-0001:row20:col4', 'psp412962-tbl-0001:row20:col5'])
- table mostly unlinked (5/5 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sabatolimab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell psp412962-tbl-0001:row4:col1 = 'V2'
- unparsed cell psp412962-tbl-0001:row9:col1 = 'ω V2'
- unparsed cell psp412962-tbl-0001:row18:col1 = 'β CL,WT0'
- unparsed cell psp412962-tbl-0001:row18:col7 = '4.35e‐12'
- unparsed cell psp412962-tbl-0001:row19:col1 = 'β V,WT0'
- unparsed cell psp412962-tbl-0001:row19:col7 = '&lt;2.2e‐16'
- unparsed cell psp412962-tbl-0001:row20:col1 = 'β V2,WT0'
- unparsed cell psp412962-tbl-0001:row20:col7 = '2.91e‐07'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | sabatolimab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sabatolimab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsabatolimab%5D%20Sabatolimab_Xu2023_reference&body=Drug%3A%20sabatolimab%0ARecord%3A%20Sabatolimab_Xu2023_reference%0APaper%3A%20Xu_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sabatolimab/Sabatolimab_Xu2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:56 UTC</sub>
