<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;Suramin&quot;,&quot;href&quot;:&quot;drugs/drug_suramin/&quot;},{&quot;label&quot;:&quot;Naviaux_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Suramin — `Suramin_Naviaux2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Suramin" model-id="Suramin_Naviaux2017_reference" status="rejected" stale="false" population="children with autism spectrum disorder" measured-compound="suramin" parameterization="mechanistic" topology="1C"></div>

## Citation
Naviaux RK, Curtis B, Li K, Naviaux JC, Bright AT, Reiner GE et al. Low-dose suramin in autism spectrum disorder: a small, phase I/II, randomized clinical trial. Annals of clinical and translational neurology 4(7):491-505 (2017).
  ·  DOI: [10.1002/acn3.424](https://doi.org/10.1002/acn3.424)

## Population and dosing

**Population:** children with autism spectrum disorder · condition autism spectrum disorder · age group child · n = 10.

**Dosing:** 1400 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of alpha elimination half-life: this record has none, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Beta elimination half-life | Q60 | half_life_rule |
| Alpha elimination half-life | Q59 | half_life_rule |
| Clearance | Q22 | exact |
| Steady state volume of distribution | Q65 | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- column 'outcome / time after treatment (days)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'suramin / p b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'suramin / p c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'placebo / p b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'placebo / p c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'outcome / factor or behavior' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'symbol' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mean ± sd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'ADOS‐2' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row3:col2', 'acn3424-tbl-0004:row3:col5', 'acn3424-tbl-0004:row3:col7', 'acn3424-tbl-0004:row3:col8', 'acn3424-tbl-0004:row3:col11', 'acn3424-tbl-0004:row3:col13', 'acn3424-tbl-0004:row3:col14'])
- dropped unlinked row (NIL): 'Raw' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row4:col1', 'acn3424-tbl-0004:row4:col2', 'acn3424-tbl-0004:row4:col5', 'acn3424-tbl-0004:row4:col7', 'acn3424-tbl-0004:row4:col8', 'acn3424-tbl-0004:row4:col11', 'acn3424-tbl-0004:row4:col13'])
- dropped unlinked row (NIL): 'Social' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row5:col1', 'acn3424-tbl-0004:row5:col2', 'acn3424-tbl-0004:row5:col5', 'acn3424-tbl-0004:row5:col7', 'acn3424-tbl-0004:row5:col8', 'acn3424-tbl-0004:row5:col11', 'acn3424-tbl-0004:row5:col13'])
- dropped unlinked row (NIL): 'Restr/Rep' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row6:col1', 'acn3424-tbl-0004:row6:col2', 'acn3424-tbl-0004:row6:col5', 'acn3424-tbl-0004:row6:col7', 'acn3424-tbl-0004:row6:col8', 'acn3424-tbl-0004:row6:col11', 'acn3424-tbl-0004:row6:col13'])
- dropped unlinked row (NIL): 'EOWPVT' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row7:col2', 'acn3424-tbl-0004:row7:col5', 'acn3424-tbl-0004:row7:col7', 'acn3424-tbl-0004:row7:col8', 'acn3424-tbl-0004:row7:col11', 'acn3424-tbl-0004:row7:col13', 'acn3424-tbl-0004:row7:col14'])
- dropped unlinked row (NIL): 'ABC' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row9:col2', 'acn3424-tbl-0004:row9:col5', 'acn3424-tbl-0004:row9:col7', 'acn3424-tbl-0004:row9:col8', 'acn3424-tbl-0004:row9:col11', 'acn3424-tbl-0004:row9:col13', 'acn3424-tbl-0004:row9:col14'])
- dropped unlinked row (NIL): 'Stereotypy' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row10:col1', 'acn3424-tbl-0004:row10:col2', 'acn3424-tbl-0004:row10:col5', 'acn3424-tbl-0004:row10:col7', 'acn3424-tbl-0004:row10:col8', 'acn3424-tbl-0004:row10:col11', 'acn3424-tbl-0004:row10:col13'])
- dropped unlinked row (NIL): 'ATEC' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row11:col2', 'acn3424-tbl-0004:row11:col5', 'acn3424-tbl-0004:row11:col7', 'acn3424-tbl-0004:row11:col8', 'acn3424-tbl-0004:row11:col11', 'acn3424-tbl-0004:row11:col13', 'acn3424-tbl-0004:row11:col14'])
- dropped unlinked row (NIL): 'Language' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row12:col1', 'acn3424-tbl-0004:row12:col2', 'acn3424-tbl-0004:row12:col5', 'acn3424-tbl-0004:row12:col7', 'acn3424-tbl-0004:row12:col8', 'acn3424-tbl-0004:row12:col11', 'acn3424-tbl-0004:row12:col13', 'acn3424-tbl-0004:row14:col1', 'acn3424-tbl-0004:row14:col2', 'acn3424-tbl-0004:row14:col5', 'acn3424-tbl-0004:row14:col7', 'acn3424-tbl-0004:row14:col8', 'acn3424-tbl-0004:row14:col11', 'acn3424-tbl-0004:row14:col13'])
- dropped unlinked row (NIL): 'Sociability' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row13:col1', 'acn3424-tbl-0004:row13:col2', 'acn3424-tbl-0004:row13:col5', 'acn3424-tbl-0004:row13:col7', 'acn3424-tbl-0004:row13:col8', 'acn3424-tbl-0004:row13:col11', 'acn3424-tbl-0004:row13:col13'])
- dropped unlinked row (NIL): 'CGI' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row15:col2', 'acn3424-tbl-0004:row15:col5', 'acn3424-tbl-0004:row15:col7', 'acn3424-tbl-0004:row15:col11', 'acn3424-tbl-0004:row15:col13'])
- dropped unlinked row (NIL): 'E. Language' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row16:col1', 'acn3424-tbl-0004:row16:col2', 'acn3424-tbl-0004:row16:col5', 'acn3424-tbl-0004:row16:col8', 'acn3424-tbl-0004:row16:col11'])
- dropped unlinked row (NIL): 'Social Inter.' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row17:col1', 'acn3424-tbl-0004:row17:col2', 'acn3424-tbl-0004:row17:col5', 'acn3424-tbl-0004:row17:col8', 'acn3424-tbl-0004:row17:col11'])
- dropped unlinked row (NIL): 'RBQ' — extend the ontology if this is a real PK parameter (source ['acn3424-tbl-0004:row18:col2', 'acn3424-tbl-0004:row18:col5', 'acn3424-tbl-0004:row18:col7', 'acn3424-tbl-0004:row18:col8', 'acn3424-tbl-0004:row18:col11', 'acn3424-tbl-0004:row18:col13', 'acn3424-tbl-0004:row18:col14'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=suramin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table acn3424-tbl-0004: ambiguous_uncertainty_binding
- table acn3424-tbl-0004: ragged_grid
- table Naviaux_2017_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alpha elimination half-life]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta elimination half-life]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance].value` |  | 1.95 | mismatch |
| `gpt-oss-120b` | `parameters[e. language]` |  | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady state volume of distribution]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady‐state volume of distribution]` |  | 0.83 | only_one_extracted |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsuramin%5D%20Suramin_Naviaux2017_reference&body=Drug%3A%20suramin%0ARecord%3A%20Suramin_Naviaux2017_reference%0APaper%3A%20Naviaux_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_suramin/Suramin_Naviaux2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 17:10 UTC</sub>
