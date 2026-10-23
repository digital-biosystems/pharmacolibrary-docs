<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;W\u00f3jcicki_2003 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Wjcicki2003_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-06 23:09 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No model parameters were extracted from this paper.

<div class="pk-model-meta" hidden drug="atenolol" model-id="Atenolol_Wjcicki2003_reference" status="rejected" stale="true" population="obese and lean subjects" measured-compound="propranolol and atenolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Wójcicki J, Jaroszynska M, Droździk M, Pawlik A, Gawrońska-Szklarz B, Sterna R. Comparative pharmacokinetics and pharmacodynamics of propranolol and atenolol in normolipaemic and hyperlipidaemic obese subjects. Biopharmaceutics & drug disposition 24(5):211–218 (2003).
  ·  DOI: [10.1002/bdd.357](https://doi.org/10.1002/bdd.357)

## Population and dosing

**Population:** obese subjects with normolipaemia or hyperlipidaemia and healthy lean volunteers · condition obesity · age group adult · n = 43.

**Dosed compound ≠ measured compound:** dosed atenolol, measured propranolol and atenolol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atenolol, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propranolol and atenolol
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = '125.0 AE 4.2 81.0 AE 2.6 75.6 AE 1.8 132.2 AE 4.7 87.2 AE 2.4 61.4 AE 4.6 130.0 AE 5.6 88.3 AE 2.5 73.7 AE 5.8'
- unparsed cell tab_2:row3:col1 = '122.2 AE 2.9 81.4 AE 2.5 68.9 AE 1.2 a 126.7 AE 5.6 84.4 AE 3.2 56.7 AE 3.2 a 115.8 AE 4.0 a 88.3 AE 1.0 67.8 AE 4.8'
- unparsed cell tab_2:row4:col1 = '116.1 AE 2.2 a 78.9 AE 2.6 66.3 AE 1.2 a 122.8 AE 5.9 83.3 AE 3.1 57.1 AE 2.2 113.3 AE 1.7 a 85.8 AE 1.5 64.5 AE 4.7 a'
- unparsed cell tab_2:row5:col1 = '117.5 AE 2.6 78.6 AE 2.8 65.6 AE 1.6 a 118.9 AE 7.0 83.3 AE 3.7 56.1 AE 2.7 121.7 AE 6.7 90.0 AE 3.4 62.3 AE 5.0 a'
- unparsed cell tab_2:row6:col1 = '112.5 AE 2.7 a 76.8 AE 2.2 a 62.7 AE 1.1 a 117.2 AE 6.7 a 77.8 AE 4.7 a 55.2 AE 2.2 115.8 AE 6.0 86.7 AE 1.7 64.0 AE 5.8 a'
- unparsed cell tab_2:row7:col1 = '112.2 AE 2.9 a 77.5 AE 2.3 61.9 AE 1.4 a 111.1 AE 4.8 a 76.7 AE 3.2 51.8 AE 2.4 a 113.3 AE 5.7 80.8 AE 4.0 a 63.0 AE 5.2 a'
- unparsed cell tab_2:row8:col1 = '114.2 AE 3.1 a 74.2 AE 2.3 64.5 AE 1.3 a 109.4 AE 6.2 70.6 AE 4.3 56.0 AE 3.0 115.0 AE 5.5 79.2 AE 3.7 66.3 AE 6.2'
- unparsed cell tab_2:row9:col1 = '113.9 AE 4.2 a 74.4 AE 2.8 a 65.8 AE 1.4 122.8 AE 4.7 75.6 AE 3.3 56.0 AE 2.1 120.8 AE 4.4 85.0 AE 3.6 a 69.3 AE 6.2 a'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | atenolol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atenolol | unknown | mismatch |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Wjcicki2003_reference&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Wjcicki2003_reference%0APaper%3A%20W%C3%B3jcicki_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atenolol/Atenolol_Wjcicki2003_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:09 UTC</sub>
