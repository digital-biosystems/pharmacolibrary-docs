<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;buprenorphine&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/&quot;},{&quot;label&quot;:&quot;Ng_2015 \u00b7 original_data_set&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Kraft2018_reference&quot;,&quot;label&quot;:&quot;Kraft_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Kraft2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_i_v&quot;,&quot;label&quot;:&quot;Robertson_2005_i_v&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_i_v.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_otm&quot;,&quot;label&quot;:&quot;Robertson_2005_otm&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# buprenorphine — `Buprenorphine_Ng2015_original_data_set`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the buprenorphine peripheral volume of distribution unit, L/kg, could not be converted to standard SI units.

<div class="pk-model-meta" hidden drug="buprenorphine" model-id="Buprenorphine_Ng2015_original_data_set" status="rejected" stale="false" population="neonates with NAS and healthy adults" measured-compound="buprenorphine" parameterization="mechanistic" topology="1C"></div>

## Citation
Ng CM, Dombrowsky E, Lin H, Erlich ME, Moody DE, Barrett JS et al. Population Pharmacokinetic Model of Sublingual Buprenorphine in Neonatal Abstinence Syndrome. Pharmacotherapy 35(7):670–680 (2015).
  ·  DOI: [10.1002/phar.1610](https://doi.org/10.1002/phar.1610)

## Population and dosing

**Population:** neonates with NAS and healthy adults · age group mixed · n = condition.

**Dosing:** 4 mg, sublingual, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| θCL (L/hr) | CL | 141 | L/hr | 0.523 (None% RSE) |
| θV2 (L) | V2 | 205 | L |  |
| θQ (L/hr) | Q | 621 | L/hr |  |
| θV3 (L) | V3 | 3218 | L | 2.32 (None% RSE) |
| wt_effect_on_cl_and_q | wt_effect_on_cl_and_q | 0.750 |  |  |
| KM (days) | Km | 0.271 | days |  |
| BASE | equation variable | 0.0268 |  |  |
| theta_q314_wt | theta_q314_wt | 1.00 |  |  |
| mean volume of distribution | V | 2.8 | L/kg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.235). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the buprenorphine peripheral volume of distribution unit, L/kg, could not be converted to standard SI units.**

The structural mismatch arises because the peripheral compartment volume is listed in kilograms, while the intercompartmental clearance uses liters per hour. The second reader provided a value of 0.00377 for the base parameter, which the primary extraction missed. Additionally, a first-order absorption rate constant of 0.182 was extracted for the record, a value the second reader did not find. Extracted — buprenorphine: CL 141 L/hr, V2 205 L, Q 621 L/hr, V3 3.22e+03 L, Km 0.271 days, V 2.8 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has buprenorphine, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| θCL (L/hr) | `Q22` · CL | 141 | L/hr | 3.917e-05 | m3/s | l/h | llm_confirmed (0.6) | T2:row8:col1, T2:row8:col2 | 0.523 (None% RSE) |
| θV2 (L) | `Q64` · V2 | 205 | L | 0.205 | m3 | l | llm_confirmed (0.6) | T2:row9:col1, T2:row9:col2 |  |
| θQ (L/hr) | `Q30` · Q | 621 | L/hr | 0.0001725 | m3/s | l/h | llm (0.6) | T2:row10:col1, T2:row10:col2 |  |
| θV3 (L) | `Q77` · V3 | 3218 | L | 3.218 | m3 | l | llm_confirmed (0.6) | T2:row11:col1, T2:row11:col2 | 2.32 (None% RSE) |
| wt_effect_on_cl_and_q | `Q900` · wt_effect_on_cl_and_q | 0.750 |  |  |  |  |  | T2:row17:col1 |  |
| KM (days) | `Q1` · Km | 0.271 | days |  |  | d | exact (1) | T2:row20:col1, T2:row20:col2 |  |
| BASE | `Q900` · equation variable | 0.0268 |  |  |  |  | llm (0.6) | T2:row25:col1, T2:row25:col2 |  |
| theta_q314_wt | `Q900` · theta_q314_wt | 1.00 |  |  |  |  |  | T2:row18:col1 |  |
| mean volume of distribution | `Q61` · V | 2.8 | L/kg | 0.196 | m3 | L | review_gapfill (0.7) | Tang_2021:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 Ka' routed out of structural estimates ('Inter individual Variability')
- table section iiv: 'ω 2 CL' routed out of structural estimates ('Inter individual Variability')
- table section iiv: 'ω 2 V3' routed out of structural estimates ('Inter individual Variability')
- table section residual_error: 'Proportional error σprop' routed out of structural estimates ('Residual Variability')
- covariate level 'WT Effect on CL and Q' → Q900:wt_effect_on_cl_and_q = 0.750 (linear_fractional on Q22)
- unit_dimension_mismatch: 'KM (days)' → Q1 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row21:col1', 'T2:row21:col2'])
- dropped unlinked row (NIL): 'SLP' — extend the ontology if this is a real PK parameter (source ['T2:row22:col1'])
- dropped unlinked row (NIL): 'TF (day−1)' — extend the ontology if this is a real PK parameter (source ['T2:row23:col1', 'T2:row23:col2'])
- dropped unlinked row (NIL): 'KMV3 (days)' — extend the ontology if this is a real PK parameter (source ['T2:row26:col1', 'T2:row26:col2'])
- routed 'SLP1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=buprenorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'original data set' subgroup of Ng_2015 (paper reports 2 populations: 1000 bootstrap replicates, original data set)
- gap-filled Q61 (V) from Tang_2021's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.235 (4/17 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[base]` | 0.0268 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[km].value` | 0.271 | 0.00398 | mismatch |
| `gpt-oss-120b` | `parameters[mean volume of distribution]` | 2.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tf]` |  | 0.0203 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_wt]` | 1.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_wt]` |  | 1.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl].value` | 141 | 112 | mismatch |
| `gpt-oss-120b` | `parameters[θq].value` | 621 | 283 | mismatch |
| `gpt-oss-120b` | `parameters[θv2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[θv2].value` | 205 | 113 | mismatch |
| `gpt-oss-120b` | `parameters[θv3].value` | 3218 | 1488 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | buprenorphine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | buprenorphine | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | fail | [time] | days | ['T2:row20:col1', 'T2:row20:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row8:col1', 'T2:row8:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row10:col1', 'T2:row10:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tang_2021:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row9:col1', 'T2:row9:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T2:row11:col1', 'T2:row11:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 141 | ['T2:row8:col1', 'T2:row8:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 141 L/h | ['T2:row8:col1', 'T2:row8:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 196 L | ['Tang_2021:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 205 L | ['T2:row9:col1', 'T2:row9:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Ng2015_original_data_set&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Ng2015_original_data_set%0APaper%3A%20Ng_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_buprenorphine/Buprenorphine_Ng2015_original_data_set%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 04:48 UTC</sub>
