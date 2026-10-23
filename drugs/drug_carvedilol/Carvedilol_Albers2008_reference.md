<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Albers_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carvedilol_McTavish1993_reference&quot;,&quot;label&quot;:&quot;McTavish_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_McTavish1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final_s_carvedilol_final_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Albers2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:24 UTC (Rejected), but the paper was screened again on 2026-10-07 00:32 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The carvedilol absorption rate constant kabs is recorded as 0.62 l h-1, a dimensionally wrong unit for a first-order rate constant (should be h-1), so the record was rejected.

<div class="pk-model-meta" hidden drug="carvedilol" model-id="Carvedilol_Albers2008_reference" status="rejected" stale="true" population="paediatric patients with congestive heart failure" measured-compound="carvedilol" parameterization="apparent" topology="1C"></div>

## Citation
Albers S, Meibohm B, Mir TS, Läer S. Population pharmacokinetics and dose simulation of carvedilol in paediatric patients with congestive heart failure. British journal of clinical pharmacology 65(4):511–522 (2008).
  ·  DOI: [10.1111/j.1365-2125.2007.03046.x](https://doi.org/10.1111/j.1365-2125.2007.03046.x)

## Population and dosing

**Population:** paediatric patients with congestive heart failure · condition congestive heart failure · age group mixed.

**Dosing:** 24.5 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (l h -1 ) | CL/F | 37.6 | l h -1 |
| V2/F (l) | V2/F | 21.8 | l |
| V3/F (l) | V3/F | 103.7 | l |
| Q/F (l h -1 ) | Q/F | 13.6 | l h -1 |
| KA (l h -1 ) | kabs | 0.62 | l h -1 |
| TLAG (h) | tlag | 0.15 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The carvedilol absorption rate constant kabs is recorded as 0.62 l h-1, a dimensionally wrong unit for a first-order rate constant (should be h-1), so the record was rejected.**

In the Albers_2008 paediatric congestive heart failure model, kabs is listed with unit 'l h -1', which does not match a rate constant's dimension of inverse time; the reported unit could not be converted to SI, so the parameter reached the record without an SI value. A second reader gave 2.67 for this parameter instead of the recorded 0.62, disagreeing with the extracted value. The other parameters (CL/F 37.6 l h-1, V2/F 21.8 l, V3/F 103.7 l, Q/F 13.6 l h-1, tlag 0.15 h) show no stated problems. Extracted — carvedilol: CL/F 37.6 l h -1, V2/F 21.8 l, V3/F 104 l, Q/F 13.6 l h -1, kabs 0.62 l h -1, tlag 0.15 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has carvedilol, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 ) | `Q27` · CL/F | 37.6 | l h -1 | 1.044e-05 | m3/s | l/h | exact (1) | tab_2:row2:col1, tab_2:row2:col2 |
| V2/F (l) | `Q82` · V2/F | 21.8 | l | 0.0218 | m3 | l | exact (1) | tab_2:row4:col1, tab_2:row4:col2 |
| V3/F (l) | `Q78` · V3/F | 103.7 | l | 0.1037 | m3 | l | exact (1) | tab_2:row6:col1, tab_2:row6:col2 |
| Q/F (l h -1 ) | `Q69` · Q/F | 13.6 | l h -1 | 3.778e-06 | m3/s | l/h | exact (1) | tab_2:row8:col1, tab_2:row8:col2 |
| KA (l h -1 ) | `Q49` · kabs | 0.62 | l h -1 |  |  | l/h | exact (1) | tab_2:row10:col1, tab_2:row10:col2 |
| TLAG (h) | `Q83` · tlag | 0.15 | h | 540 | s | h | exact (1) | tab_2:row12:col1, tab_2:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'KA (l h -1 )' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'q7' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1', 'tab_2:row14:col2'])
- dropped unlinked row (NIL): 'q8' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col1', 'tab_2:row16:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=carvedilol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted

**Extraction notes:**
- unparsed cell tab_2:row2:col3 = '31.6, 43.7'
- unparsed cell tab_2:row4:col3 = '13.4, 32.1'
- unparsed cell tab_2:row6:col3 = '62.6, 170.0'
- unparsed cell tab_2:row8:col3 = '10.3, 17.8'
- unparsed cell tab_2:row10:col3 = '0.55, 0.72'
- unparsed cell tab_2:row12:col3 = '0.11, 0.19'
- unparsed cell tab_2:row14:col3 = '2.44, 2.82'
- unparsed cell tab_2:row16:col3 = '-0.17, -0.04'
- LLM selected parameter table(s) 2
- LLM region Albers_2008:discussion_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q8]` |  | -0.12 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | carvedilol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | carvedilol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_2:row2:col1', 'tab_2:row2:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l h -1 | ['tab_2:row10:col1', 'tab_2:row10:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['tab_2:row8:col1', 'tab_2:row8:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['tab_2:row6:col1', 'tab_2:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_2:row12:col1', 'tab_2:row12:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 37.6 L/h | ['tab_2:row2:col1', 'tab_2:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 21.8 L | ['tab_2:row4:col1', 'tab_2:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarvedilol%5D%20Carvedilol_Albers2008_reference&body=Drug%3A%20carvedilol%0ARecord%3A%20Carvedilol_Albers2008_reference%0APaper%3A%20Albers_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carvedilol/Carvedilol_Albers2008_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:32 UTC</sub>
