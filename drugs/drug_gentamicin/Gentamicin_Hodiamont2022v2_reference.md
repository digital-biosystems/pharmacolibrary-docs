<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Hodiamont_2022_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Abbasi2023_reference&quot;,&quot;label&quot;:&quot;Abbasi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_Hodiamont2022v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-07 22:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No model parameters were extracted from this paper.

<div class="pk-model-meta" hidden drug="gentamicin" model-id="Gentamicin_Hodiamont2022v2_reference" status="rejected" stale="true" population="various patient populations" measured-compound="gentamicin" parameterization="mechanistic" topology="1C"></div>

## Citation
Hodiamont CJ, van den Broek AK, de Vroom SL, Prins JM, Mathôt RAA, van Hest RM. Clinical Pharmacokinetics of Gentamicin in Various Patient Populations and Consequences for Optimal Dosing for Gram-Negative Infections: An Updated Review. Clinical pharmacokinetics 61(8):1075–1094 (2022).
  ·  DOI: [10.1007/s40262-022-01143-0](https://doi.org/10.1007/s40262-022-01143-0)

## Population and dosing

**Population:** various patient populations · condition various · age group mixed.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (primary re-run, agreement 0.8), gpt-oss:120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of volume of distribution: this record has none, the second reading 19.5. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gentamicin
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col1 = '4.3–5.12 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col2 = '13.3–24.5 [11, 47, 49, 50, 52]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col3 = '15.8–36 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row0:col4 = '5.8–11.9 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col1 = '4.3–4.6 [47–49]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col2 = '10.5–20.3 [1, 47, 49, 50, 52]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col3 = '17.4 [46]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row1:col4 = '18.5 [46]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col1 = '1.15–5.7 [57]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col2 = '19–53c [57]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col3 = '29.3–83.7 [57]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row2:col4 = '10.9–64.4 [57, 59]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col1 = '5.6–9.1 [90–92]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col2 = '17.5–24.5 [89, 91, 92]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col3 = '16–39 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row3:col4 = '21.6–49 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col1 = '0.49–6.3 [89, 112, 114–117]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col2 = '26.6–63.7 [89, 111–117]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col3 = '16.1–58.6 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row4:col4 = '10.3–35 [3]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col1 = '3.0b [126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col2 = '14.6–35.9b [124, 126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col3 = '20.5 [126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row5:col4 = '10.5 [126]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col1 = '4.68–6.96ac [63, 129–132]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col2 = '12.4–23.1b [63, 64, 129–132]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col3 = '0.3d [137]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row6:col4 = '50.7 [137]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row7:col1 = '0.25ac [141]'
- unparsed cell Hodiamont_2022_2_table_p3_1:row7:col2 = '21.0 [141]'
- text-pointer recovery: parsed 0 structural record(s) from the flattened table 1 sentence
- LLM region Hodiamont_2022_2:discussion_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | primary re-run | 0.8 (4/5 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.8 (4/5 fields) | 1 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[volume of distribution]` |  | 19.5 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution]` |  | 19.5 | only_one_extracted |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgentamicin%5D%20Gentamicin_Hodiamont2022v2_reference&body=Drug%3A%20gentamicin%0ARecord%3A%20Gentamicin_Hodiamont2022v2_reference%0APaper%3A%20Hodiamont_2022_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gentamicin/Gentamicin_Hodiamont2022v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 22:08 UTC</sub>
