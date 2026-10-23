<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Doshi_2015 \u00b7 typical_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Doshi2015_typical_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-07 16:27 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="capecitabine" model-id="Capecitabine_Doshi2015_typical_value" status="rejected" stale="true" population="patients with advanced or metastatic gastric/GEJ cancer" measured-compound="rilotumumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Doshi S, Gisleskog PO, Zhang Y, Zhu M, Oliner KS, Loh E et al. Rilotumumab exposure-response relationship in patients with advanced or metastatic gastric cancer. Clinical cancer research : an official journal of the American Association for Cancer Research 21(11):2453–2461 (2015).
  ·  DOI: [10.1158/1078-0432.CCR-14-1661](https://doi.org/10.1158/1078-0432.CCR-14-1661)

## Population and dosing

**Population:** patients with advanced or metastatic gastric/GEJ cancer · condition gastric/GEJ cancer · age group adult · n = 88.

**Dosing:** 525, 1050 mg, iv, multiple, every 216 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k d (per year per mg) | KD | 0.0527 | per year per mg |
| k PD (per year) | CL_PD | 18.3 | per year |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (KD and CL_PD), so that value has no SI equivalent. None of the extracted parameters is capecitabine's own; they describe rilotumumab.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rilotumumab, the second reading ritolumumab; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| k d (per year per mg) | `Q331` · KD | 0.0527 | per year per mg | peryearpermg | space_fold (0.95) | tab_0:row6:col1 |
| k PD (per year) | `Q358` · CL_PD | 18.3 | per year | peryear | llm (0.6) | tab_0:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Baseline (mm) a' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row2:col1'])
- dropped unlinked row (NIL): 'k g (per year)' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1'])
- dropped PD-category row 'EC 50 (mg/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row4:col1'])
- dropped unlinked row (NIL): 'k res,R (per year)' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1'])
- unit_dimension_unknown: 'per year per mg' (KD)
- unit_dimension_unknown: 'per year' (CL_PD)
- dropped PD-category row 'k res,ECX (per year)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row8:col1'])
- dropped PD-category row 'Skewness parameter' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row13:col1'])
- dropped PD-category row 'Width parameter' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row14:col1'])
- dropped duplicate Q331 ('h kd', value '88') — already have one for this compound
- dropped unlinked row (NIL): 'h kres,ECX' — extend the ontology if this is a real PK parameter (source ['tab_0:row16:col1'])
- dropped unlinked row (NIL): 'h kg' — extend the ontology if this is a real PK parameter (source ['tab_0:row17:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rilotumumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'typical value' subgroup of Doshi_2015 (paper reports 2 populations: estimate value, typical value)
- review gap-fill skipped: this record measures 'rilotumumab', not capecitabine — the review values are the parent's

**Extraction notes:**
- unparsed cell tab_0:row2:col2 = '96.4 (79.2-115)'
- unparsed cell tab_0:row3:col2 = '0.534 (0.0397-1.11)'
- unparsed cell tab_0:row4:col2 = '6.41 (0-21.3)'
- unparsed cell tab_0:row5:col2 = '0.427 (0-1.67)'
- unparsed cell tab_0:row6:col2 = '0.0584 (0.0367-0.0929)'
- unparsed cell tab_0:row8:col2 = '7.20 (3.88-16.2)'
- unparsed cell tab_0:row13:col2 = '0.657 (0.527-0.797)'
- unparsed cell tab_0:row14:col2 = '6.74 (4.31-11.1)'
- unparsed cell tab_0:row15:col2 = '85.7 (44.6-122)'
- unparsed cell tab_0:row16:col2 = '70.8 (0.59-156)'
- unparsed cell tab_0:row17:col2 = '139 (1.17-248)'
- unparsed cell tab_0:row18:col2 = '16.9 (10.1-24.2)'
- unparsed cell Doshi_2015_table_2:row1:col2 = '0.00292 (0.00223-0.00380)'
- unparsed cell Doshi_2015_table_2:row2:col2 = '0.00420 (0.00320-0.00522)'
- unparsed cell Doshi_2015_table_2:row3:col2 = '0.419 (0.00473-1.00)'
- unparsed cell Doshi_2015_table_2:row4:col2 = '1.71 (1.43-2.02)'
- unparsed cell Doshi_2015_table_2:row8:col2 = '204 (190-250)'
- unparsed cell Doshi_2015_table_2:row9:col2 = '71.5 (60.3-107)'
- companion parameter table 2 transcribed (7 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.429 (3/7 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k g]` |  | 0.531 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k pd]` | 18.3 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rilotumumab | ritolumumab | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rilotumumab | ritolumumab | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | per year per mg | ['tab_0:row6:col1'] |
| C5_unit_missing_Q358 | fail | [length] ** 3 / [time] | per year | ['tab_0:row7:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_Doshi2015_typical_value&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_Doshi2015_typical_value%0APaper%3A%20Doshi_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_capecitabine/Capecitabine_Doshi2015_typical_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:27 UTC</sub>
