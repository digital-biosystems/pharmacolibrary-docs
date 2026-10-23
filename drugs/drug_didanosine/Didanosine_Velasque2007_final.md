<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;didanosine&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/&quot;},{&quot;label&quot;:&quot;Velasque_2007 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Didanosine_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Ngara2020_reference&quot;,&quot;label&quot;:&quot;Ngara_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Ngara2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# didanosine — `Didanosine_Velasque2007_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 14:20 UTC (Rejected), but the paper was screened again on 2026-10-07 16:10 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Didanosine volume and absorption rate parameters carried L/h units, causing dimension mismatches and implausible magnitudes that forced rejection.

<div class="pk-model-meta" hidden drug="didanosine" model-id="Didanosine_Velasque2007_final" status="rejected" stale="true" population="healthy adult volunteers" measured-compound="didanosine" parameterization="mechanistic" topology="1C"></div>

## Citation
Velasque LS, Estrela RC, Suarez-Kurtz G, Struchiner CJ. A new model for the population pharmacokinetics of didanosine in healthy subjects. Brazilian journal of medical and biological research = Revista brasileira de pesquisas medicas e biologicas 40(1):97–104 (2007).
  ·  DOI: [10.1590/s0100-879x2007000100013](https://doi.org/10.1590/s0100-879x2007000100013)

## Population and dosing

**Population:** healthy adult volunteers · condition healthy · age group adult · n = 48.

**Dosing:** 200 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| θ CL (L/h) | CL | 91.12 | L/h | 0.02 (None% RSE) |
| θ V 2 (L/h) | V2 | 5.58 | L/h |  |
| θ Q (L/h) | Q | 22.60 | L/h |  |
| θ V 3 (L/h) | Q3 | 58.28 | L/h |  |
| θ K a (L/h) | kabs | 1.24 | L/h |  |
| θ D (h) | t1/2α | 0.41 | h |  |
| θ Sex-V 3 (L) | V3 | 22.90 | L |  |
| AIC | AUC | 5109.87 |  |  |
| volume of distribution | V | 1.7 | L/kg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Didanosine volume and absorption rate parameters carried L/h units, causing dimension mismatches and implausible magnitudes that forced rejection.**

The peripheral volume (5.58), absorption rate (1.24), and intercompartmental clearances (22.60, 58.28) all carry L/h units instead of L or 1/h. The unit L/h could not be converted to SI for these parameters. This dimensional inconsistency produced physiological window violations for the clearance and volume estimates. Extracted — didanosine: CL 91.1 L/h, V2 5.58 L/h, Q 22.6 L/h, Q2 58.3 L/h, kabs 1.24 L/h, V3 22.9 L, V 2.25 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of aic: this record has 5109.87, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| θ CL (L/h) | `Q22` · CL | 91.12 | L/h | 2.531e-05 | m3/s | l/h | llm_confirmed (0.6) | tab_2:row2:col2, tab_2:row2:col3, tab_2:row2:col4 | 0.02 (None% RSE) |
| θ V 2 (L/h) | `Q64` · V2 | 5.58 | L/h | 1.55e-06 | m3/s | l/h | llm (0.6) | tab_2:row3:col2, tab_2:row3:col3, tab_2:row3:col4 |  |
| θ Q (L/h) | `Q30` · Q | 22.60 | L/h | 6.278e-06 | m3/s | l/h | llm (0.6) | tab_2:row4:col2, tab_2:row4:col3, tab_2:row4:col4 |  |
| θ V 3 (L/h) | `Q308` · Q3 | 58.28 | L/h | 1.619e-05 | m3/s | l/h | llm (0.6) | tab_2:row5:col2, tab_2:row5:col3, tab_2:row5:col4 |  |
| θ K a (L/h) | `Q49` · kabs | 1.24 | L/h |  |  | l/h | llm (0.6) | tab_2:row6:col2, tab_2:row6:col3, tab_2:row6:col4 |  |
| θ D (h) | `Q59` · t1/2α | 0.41 | h | 1476 | s | h | llm (0.6) | tab_2:row7:col2, tab_2:row7:col3, tab_2:row7:col4 |  |
| θ Sex-V 3 (L) | `Q77` · V3 | 22.90 | L | 0.0229 | m3 | l | llm (0.6) | tab_2:row9:col3, tab_2:row9:col4 |  |
| AIC | `Q88` · AUC | 5109.87 |  |  |  |  | llm (0.6) | tab_2:row16:col3 |  |
| volume of distribution | `Q61` · V | 1.7 | L/kg | 0.119 | m3 | L | review_gapfill (0.7) | Greenberg_2022:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'θ V 2 (L/h)' → Q64 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'θ K a (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q22 ('θ CL CR -CL (L/h)', value '240.00') — already have one for this compound
- dropped duplicate Q22 ('θ Sex-CL (L/h)', value '16.6') — already have one for this compound
- dropped unlinked row (NIL): 'OF' — extend the ontology if this is a real PK parameter (source ['tab_2:row15:col3', 'tab_2:footnote'])
- dropped value-less row: '95% CI'
- dropped value-less row: 'CL'
- dropped value-less row: 'V 2'
- dropped value-less row: 'Q'
- dropped value-less row: 'V 3'
- dropped value-less row: 'K a'
- dropped value-less row: 'D'
- dropped value-less row: 'CL CR'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θ CL (L/h)); Q64 (θ V 2 (L/h)); Q30 (θ Q (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=didanosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- model-stage split: 'final model' is the final model of Velasque_2007 (paper reports 2 stages: final model, initial model); same population, different model-building step
- gap-filled Q61 (V) from Greenberg_2022's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[aic]` | 5109.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 1.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ d].parameter_id` | Q59 | Q83 | mismatch |
| `gpt-oss-120b` | `parameters[θ sex-v 3]` | 22.90 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v 3].parameter_id` | Q308 | Q77 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['tab_2:row7:col2', 'tab_2:row7:col3', 'tab_2:row7:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Greenberg_2022:review'] |
| C5_dimension_Q64 | fail | [length] ** 3 / [time] | L/h | ['tab_2:row3:col2', 'tab_2:row3:col3', 'tab_2:row3:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['tab_2:row9:col3', 'tab_2:row9:col4'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['tab_2:row16:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 91.12 | ['tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 91.1 L/h | ['tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 119 L | ['Greenberg_2022:review'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.00155 L | ['tab_2:row3:col2', 'tab_2:row3:col3', 'tab_2:row3:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdidanosine%5D%20Didanosine_Velasque2007_final&body=Drug%3A%20didanosine%0ARecord%3A%20Didanosine_Velasque2007_final%0APaper%3A%20Velasque_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_didanosine/Didanosine_Velasque2007_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:10 UTC</sub>
