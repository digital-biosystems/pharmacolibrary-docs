<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;galactose&quot;,&quot;href&quot;:&quot;drugs/drug_galactose/&quot;},{&quot;label&quot;:&quot;Henderson_1982 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# galactose — `Galactose_Henderson1982_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The galactose record was rejected because a structural parameter carries a dimension mismatch: extrahepatic non-renal clearance (CLNR) is given as 2.3 % and fe as 2 %, percentages rather than clearance values with flow units, while total clearance is 1378 ml/min.

<div class="pk-model-meta" hidden drug="galactose" model-id="Galactose_Henderson1982_reference" status="rejected" stale="false" population="healthy adults and patients with liver disease (cirrhosis, acute hepatocellular damage)" measured-compound="galactose" parameterization="mechanistic" topology="1C"></div>

## Citation
Henderson JM, Kutner MH, Bain RP. First-order clearance of plasma galactose: the effect of liver disease. Gastroenterology 83(5):1090–1096 (1982).

## Population and dosing

**Population:** healthy adults and patients with liver disease (cirrhosis, acute hepatocellular damage) · condition liver disease (cirrhosis, acute hepatocellular damage); healthy controls · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| plasma steady state | AUCSS | 95 | % |
| reduction in clearance | CL_ratio | 8 | % |
| Extrahepatic clearance in the urine | fe | 2 | % |
| Extrahepatic clearance by erythrocyte metabolism | CLNR | 2.3 | % |
| overall mean (+/-SD) clearance in the normal subjects | CL | 1378 | ml/min |
| waiting time | tlag | 1.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.211). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The galactose record was rejected because a structural parameter carries a dimension mismatch: extrahepatic non-renal clearance (CLNR) is given as 2.3 % and fe as 2 %, percentages rather than clearance values with flow units, while total clearance is 1378 ml/min.**

The record describes a one-compartment galactose model in healthy adults and patients with liver disease, with total clearance 1378 ml/min, an 8 % reduction in clearance, 95 % steady-state AUC, a 1.0 min absorption lag time, and a 1-minute zero-order infusion duration. The non-renal extrahepatic clearance by erythrocyte metabolism is reported as 2.3 % and the fraction excreted unchanged in urine as 2 %, so these structural parameters are dimensionless fractions where a clearance in flow units is expected, triggering the dimension mismatch. The record was also built from the paper's abstract alone, so reported summary statistics stood in for a fitted model. Extracted — galactose: AUCSS 95 %, CL_ratio 8 %, fe 2 %, CLNR 2.3 %, CL 1.38e+03 ml/min, tlag 1 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of extrahepatic clearance by erythrocyte metabolism: this record has 2.3, the second reading none; it also differs on 14 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| plasma steady state | `Q18` · AUCSS | 95 | % |  |  | % | llm (0.6) | Henderson_1982:abstract |
| reduction in clearance | `Q31` · CL_ratio | 8 | % |  |  | % | llm_corrected (0.6) | Henderson_1982:abstract |
| Extrahepatic clearance in the urine | `Q44` · fe | 2 | % |  |  | % | llm_corrected (0.6) | Henderson_1982:abstract |
| Extrahepatic clearance by erythrocyte metabolism | `Q79` · CLNR | 2.3 | % |  |  | % | llm_corrected (0.6) | Henderson_1982:abstract |
| overall mean (+/-SD) clearance in the normal subjects | `Q22` · CL | 1378 | ml/min | 2.297e-05 | m3/s | ml/min | llm_confirmed (0.6) | Henderson_1982:abstract |
| waiting time | `Q83` · tlag | 1.0 | min | 60 | s | h | review_gapfill (0.7) | Ibrahim_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| plasma concentrations | Q75 | llm |
| infusion | Q310 | llm |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mg D-galactose per minute' (D1)
- unit_dimension_mismatch: 'plasma steady state' → Q18 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'reduction in clearance' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Extrahepatic clearance by erythrocyte metabolism' → Q79 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- covariate category for CL from footnote/prose kept as documentation only (['Henderson_1982:abstract'])
- covariate category for CLH from footnote/prose kept as documentation only (['Henderson_1982:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=galactose
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Ibrahim_2024's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Henderson_1982_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.211 (4/19 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[extrahepatic clearance by erythrocyte metabolism]` | 2.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[extrahepatic clearance in the urine]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[extrahepatic clearance in urine]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[infusion duration]` |  | 140 | only_one_extracted |
| `gpt-oss-120b` | `parameters[infusion]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[overall mean (+/-sd) clearance in the normal subjects]` | 1378 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[overall mean clearance in the normal subjects]` |  | 1378 | only_one_extracted |
| `gpt-oss-120b` | `parameters[percent of plasma steady state attained]` |  | 95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma concentrations of]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma concentrations]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma steady state]` | 95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[reduction in clearance at the higher rate]` |  | 8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[reduction in clearance]` | 8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to reach 95% steady state]` |  | 80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[waiting time]` | 1.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q18 | fail | dimensionless | % | ['Henderson_1982:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Henderson_1982:abstract'] |
| C5_dimension_Q31 | fail | dimensionless | % | ['Henderson_1982:abstract'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['Henderson_1982:abstract'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Henderson_1982:abstract'] |
| C5_dimension_Q79 | fail | dimensionless | % | ['Henderson_1982:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Ibrahim_2024:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1378 | ['Henderson_1982:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 82.7 L/h | ['Henderson_1982:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgalactose%5D%20Galactose_Henderson1982_reference&body=Drug%3A%20galactose%0ARecord%3A%20Galactose_Henderson1982_reference%0APaper%3A%20Henderson_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_galactose/Galactose_Henderson1982_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:32 UTC</sub>
