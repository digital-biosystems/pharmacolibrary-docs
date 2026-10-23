<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;mexiletine&quot;,&quot;href&quot;:&quot;drugs/drug_mexiletine/&quot;},{&quot;label&quot;:&quot;Ueno_2002 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mexiletine — `Mexiletine_Ueno2002_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="mexiletine" model-id="Mexiletine_Ueno2002_reference" status="rejected" stale="false" population="Japanese adults" measured-compound="mexiletine" parameterization="mechanistic" topology="1C"></div>

## Citation
Ueno K, Tamamura A, Matsumoto K, Komamura K, Kamakura S, Miyatake K et al. Evaluation of mexiletine clearance in a Japanese population. The Annals of pharmacotherapy 36(2):241–245 (2002).
  ·  DOI: [10.1345/aph.10188](https://doi.org/10.1345/aph.10188)

## Population and dosing

**Population:** Japanese adults · condition ventricular arrhythmias · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '10-19 4 0.361 ± 0.034' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row1:col2', 'Ueno_2002_table_2:row1:col3'])
- dropped unlinked row (NIL): '20-29 8 0.365 ± 0.139' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row2:col1', 'Ueno_2002_table_2:row2:col2', 'Ueno_2002_table_2:row2:col3', 'Ueno_2002_table_2:row2:col4'])
- dropped unlinked row (NIL): '30-39 9 0.438 ± 0.156' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row3:col1', 'Ueno_2002_table_2:row3:col2', 'Ueno_2002_table_2:row3:col3', 'Ueno_2002_table_2:row3:col4'])
- dropped unlinked row (NIL): '40-49 31 0.387 ± 0.150' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row4:col1', 'Ueno_2002_table_2:row4:col2', 'Ueno_2002_table_2:row4:col3', 'Ueno_2002_table_2:row4:col4'])
- dropped unlinked row (NIL): '50-59 49 0.360 ± 0.110' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row5:col1', 'Ueno_2002_table_2:row5:col2', 'Ueno_2002_table_2:row5:col3', 'Ueno_2002_table_2:row5:col4'])
- dropped unlinked row (NIL): '60-69 82 0.340 ± 0.104' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row6:col1', 'Ueno_2002_table_2:row6:col2', 'Ueno_2002_table_2:row6:col3', 'Ueno_2002_table_2:row6:col4'])
- dropped unlinked row (NIL): '70-79 97 0.314 ± 0.096 b,c 30.6' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row7:col1', 'Ueno_2002_table_2:row7:col2', 'Ueno_2002_table_2:row7:col3'])
- dropped unlinked row (NIL): '≥80' — extend the ontology if this is a real PK parameter (source ['Ueno_2002_table_2:row8:col2', 'Ueno_2002_table_2:row8:col3', 'Ueno_2002_table_2:row8:col4'])
- table mostly unlinked (8/8 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mexiletine
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- LLM selected parameter table(s) 2
- unparsed cell Ueno_2002_table_2:row1:col1 = '9.42 0.383'
- unparsed cell Ueno_2002_table_2:row8:col1 = '27 0.292 ± 0.096 b,d 32.9'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (4/4 fields) | none |

_All readers agree on the compared fields of this record._

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmexiletine%5D%20Mexiletine_Ueno2002_reference&body=Drug%3A%20mexiletine%0ARecord%3A%20Mexiletine_Ueno2002_reference%0APaper%3A%20Ueno_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mexiletine/Mexiletine_Ueno2002_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-08 19:55 UTC</sub>
