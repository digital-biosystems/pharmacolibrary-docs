<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;mercaptopurine&quot;,&quot;href&quot;:&quot;drugs/drug_mercaptopurine/&quot;},{&quot;label&quot;:&quot;Jost_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mercaptopurine — `Mercaptopurine_Jost2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-07 16:51 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Rejected: the mercaptopurine/methotrexate record lacks any distribution volume and clearance, and its metabolism links to 6-thioguanine nucleotides and methotrexate polyglutamates 2 to 7 are unconnected to the dose.

<div class="pk-model-meta" hidden drug="mercaptopurine" model-id="Mercaptopurine_Jost2020_reference" status="rejected" stale="true" population="children with acute lymphoblastic leukemia" measured-compound="absolute neutrophil count" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Jost F, Zierk J, Le TTT, Raupach T, Rauh M, Suttorp M et al. Model-Based Simulation of Maintenance Therapy of Childhood Acute Lymphoblastic Leukemia. Frontiers in physiology 11:217 (2020).
  ·  DOI: [10.3389/fphys.2020.00217](https://doi.org/10.3389/fphys.2020.00217)

## Population and dosing

**Population:** children with acute lymphoblastic leukemia · condition acute lymphoblastic leukemia · age group child · n = 116.

**Dosing:** 25, 50, 100 mg/m2, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed 6-mercaptopurine and methotrexate, measured absolute neutrophil count.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k tr | ktr | 7.19 |  |
| slope | slope | 67.8 |  |
| γ | t1/2γ | 16.5 |  |
| Proportional additive error | add_error | 0.226 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.059). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected: the mercaptopurine/methotrexate record lacks any distribution volume and clearance, and its metabolism links to 6-thioguanine nucleotides and methotrexate polyglutamates 2 to 7 are unconnected to the dose.**

The record is an exposure/outcome paper for children with acute lymphoblastic leukemia, measuring absolute neutrophil count, with only ktr (7.19), slope (67.8), γ (16.5) and an additive error (0.226) reported; no volume or clearance/elimination parameters exist, so it is not a compartmental population PK model. The structure check also found an unreachable compartment or unlinked metabolite: the metabolism links from 6-mercaptopurine to 6-thioguanine nucleotides and from methotrexate to methotrexate polyglutamates 2 to 7 have no path from the dose. A second reader disagreed on the dose compound, primary analyte, the links, and the parameter identities for ktr and γ, but these disagreements do not change the missing PK parameters. Extracted — mercaptopurine: ktr 7.19, slope 67.8, t1/2γ 16.5, add_error 0.226.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has 6-mercaptopurine and methotrexate, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| k tr | `Q338` · ktr | 7.19 |  | llm (0.5) | tab_4:row3:col1, tab_4:row3:col2, tab_4:row8:col1, tab_4:row8:col2 |
| slope | `Q335` · slope | 67.8 |  | exact (1) | tab_4:row4:col1, tab_4:row4:col2, tab_4:row9:col1, tab_4:row9:col2 |
| γ | `Q89` · t1/2γ | 16.5 |  | llm (0.5) | tab_4:row5:col1, tab_4:row5:col2, tab_4:row10:col1, tab_4:row10:col2 |
| Proportional additive error | `Q317` · add_error | 0.226 |  | boundary (0.8) | tab_4:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Base' — extend the ontology if this is a real PK parameter (source ['tab_4:row2:col1', 'tab_4:row2:col2', 'tab_4:row7:col1', 'tab_4:row7:col2'])
- dropped unlinked row (NIL): 'Mean absolute error' — extend the ontology if this is a real PK parameter (source ['tab_4:row13:col1', 'tab_4:row13:col2'])
- dropped unlinked row (NIL): 'Root mean squared error' — extend the ontology if this is a real PK parameter (source ['tab_4:row14:col1', 'tab_4:row14:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=absolute neutrophil count
- topology: 2 first-order transfer(s) across 4 compounds → general_linear
- review gap-fill skipped: this record measures 'absolute neutrophil count', not mercaptopurine — the review values are the parent's

**Extraction notes:**
- unparsed cell tab_4:row11:col2 = '0.226 (FIXED)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.059 (1/17 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 0.22 | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [['6-mercaptopurine', '6-thioguanine nucleotides', 'metabolism'], ['methotrexate', 'methotrexate polyglutamates 2 to 7', 'metabolism']] | [['6-mercaptopurine', '6-thioguanine nucleotides', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  | 0.22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm3]` |  | 0.019 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k tr]` | 7.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k20]` |  | 12.72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 31.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kma]` |  | 2.3765 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kme]` |  | 9.9216 | only_one_extracted |
| `gpt-oss-120b` | `parameters[proportional additive error]` | 0.226 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[slope]` | 67.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[x6tgn]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[xpr]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[γ]` | 16.5 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | 6-mercaptopurine and methotrexate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | absolute neutrophil count | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q317 | fail | [mass] / [length] ** 3 |  | ['tab_4:row11:col1'] |
| C5_unit_missing_Q338 | fail | 1 / [time] |  | ['tab_4:row3:col1', 'tab_4:row3:col2', 'tab_4:row8:col1', 'tab_4:row8:col2'] |
| C5_unit_missing_Q89 | fail | [time] |  | ['tab_4:row5:col1', 'tab_4:row5:col2', 'tab_4:row10:col1', 'tab_4:row10:col2'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmercaptopurine%5D%20Mercaptopurine_Jost2020_reference&body=Drug%3A%20mercaptopurine%0ARecord%3A%20Mercaptopurine_Jost2020_reference%0APaper%3A%20Jost_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mercaptopurine/Mercaptopurine_Jost2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:51 UTC</sub>
