<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belimumab&quot;,&quot;href&quot;:&quot;drugs/drug_belimumab/&quot;},{&quot;label&quot;:&quot;Dimelow_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belimumab — `Belimumab_Dimelow2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="belimumab" model-id="Belimumab_Dimelow2021_reference" status="rejected" stale="false" population="paediatric patients with childhood-onset systemic lupus erythematosus (cSLE)" measured-compound="belimumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Dimelow R, Ji B, Struemper H. Pharmacokinetics of Belimumab in Children With Systemic Lupus Erythematosus. Clinical pharmacology in drug development 10(6):622–633 (2021).
  ·  DOI: [10.1002/cpdd.889](https://doi.org/10.1002/cpdd.889)

## Population and dosing

**Population:** paediatric patients with childhood-onset systemic lupus erythematosus (cSLE) · condition childhood-onset systemic lupus erythematosus · age group mixed · n = &gt;53.

**Dosing:** 700 mg, iv, multiple, every 288 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of effect of bffm: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V2 (mL) | Q64 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'implementation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Effect of BFFM' — extend the ontology if this is a real PK parameter (source ['cpdd889-tbl-0002:row3:col1', 'cpdd889-tbl-0002:row8:col1', 'cpdd889-tbl-0002:row11:col1'])
- dropped unlinked row (NIL): 'Effect of BEGFR' — extend the ontology if this is a real PK parameter (source ['cpdd889-tbl-0002:row4:col1'])
- dropped unlinked row (NIL): 'Effect of BIGG' — extend the ontology if this is a real PK parameter (source ['cpdd889-tbl-0002:row5:col1'])
- dropped unlinked row (NIL): 'Effect of BPROT' — extend the ontology if this is a real PK parameter (source ['cpdd889-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'Effect of BWBC' — extend the ontology if this is a real PK parameter (source ['cpdd889-tbl-0002:row9:col1'])
- table mostly unlinked (5/6 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belimumab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: none found for 'belimumab' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell cpdd889-tbl-0002:row3:col2 = '0.691 (18.6%, 0.439–0.942)'
- unparsed cell cpdd889-tbl-0002:row3:col3 = '0.691 (0.418–0.963)'
- unparsed cell cpdd889-tbl-0002:row4:col2 = '0.561 (34.4%, 0.183–0.939)'
- unparsed cell cpdd889-tbl-0002:row4:col3 = '0.510 (0.079–0.966)'
- unparsed cell cpdd889-tbl-0002:row5:col2 = '0.396 (24.8%, 0.204–0.588)'
- unparsed cell cpdd889-tbl-0002:row5:col3 = '0.415 (0.237–0.639)'
- unparsed cell cpdd889-tbl-0002:row6:col2 = '0.184 (26.4%, 0.089–0.279)'
- unparsed cell cpdd889-tbl-0002:row6:col3 = '0.176 (0.082–0.289)'
- unparsed cell cpdd889-tbl-0002:row8:col2 = '0.944 (13.5%, 0.694–1.19)'
- unparsed cell cpdd889-tbl-0002:row8:col3 = '0.941 (0.695–1.220)'
- unparsed cell cpdd889-tbl-0002:row9:col2 = '0.245 (39.9%, 0.054–0.437)'
- unparsed cell cpdd889-tbl-0002:row9:col3 = '0.242 (0.020–0.426)'
- unparsed cell cpdd889-tbl-0002:row12:col2 = '1622 (15.2%, 1138–2105)'
- unparsed cell cpdd889-tbl-0002:row12:col3 = '1635 (1128–2157)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (5/6 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect of bffm]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpdd889-tbl-0002:row12:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelimumab%5D%20Belimumab_Dimelow2021_reference&body=Drug%3A%20belimumab%0ARecord%3A%20Belimumab_Dimelow2021_reference%0APaper%3A%20Dimelow_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belimumab/Belimumab_Dimelow2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:30 UTC</sub>
