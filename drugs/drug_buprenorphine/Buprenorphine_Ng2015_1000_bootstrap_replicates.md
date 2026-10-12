<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;buprenorphine&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/&quot;},{&quot;label&quot;:&quot;Ng_2015 \u00b7 1000_bootstrap_replicates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Kraft2018_reference&quot;,&quot;label&quot;:&quot;Kraft_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Kraft2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_i_v&quot;,&quot;label&quot;:&quot;Robertson_2005_i_v&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_i_v.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_otm&quot;,&quot;label&quot;:&quot;Robertson_2005_otm&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# buprenorphine — `Buprenorphine_Ng2015_1000_bootstrap_replicates`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The one-compartment model was rejected due to a dimension mismatch involving the 0.214 days Km parameter for buprenorphine.**

The record describes a one-compartment structure, yet it includes parameters for two peripheral compartments with volumes of 203 L and 3514 L. The intercompartmental clearance Q value of 589 L/hr further indicates a multi-compartment setup inconsistent with the stated topology. Additionally, the Km parameter value of 0.214 days could not be converted to SI units, preventing a valid dimension check. Extracted — buprenorphine: CL 157 L/hr, V2 203 L, Q 589 L/hr, V3 3.51e+03 L, Km 0.214 days, V 2.8 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has buprenorphine, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Ng CM et al., Population Pharmacokinetic Model of Sub…, Pharmacotherapy (2015)
  ·  DOI: [10.1002/phar.1610](https://doi.org/10.1002/phar.1610)

<div class="pk-model-meta" hidden drug="buprenorphine" model-id="Buprenorphine_Ng2015_1000_bootstrap_replicates" status="rejected" stale="false" population="neonates with NAS and healthy adults" measured-compound="buprenorphine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL (L/hr) | `Q22` · CL | 157 | L/hr | 4.361111111111111e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | T2:row8:col3, T2:row8:col4 | — | 0.446 (None% RSE) |
| θV2 (L) | `Q64` · V2 | 203 | L | 0.203 | [l] | not captured | llm_confirmed (0.6) | T2:row9:col3, T2:row9:col4 | — | not captured |
| θQ (L/hr) | `Q30` · Q | 589 | L/hr | 0.0001636111111111111 | [l] / [h] | not captured | llm (0.6) | T2:row10:col3, T2:row10:col4 | — | not captured |
| θV3 (L) | `Q77` · V3 | 3514 | L | 3.5140000000000002 | [l] | not captured | llm_confirmed (0.6) | T2:row11:col3, T2:row11:col4 | — | 2.10 (None% RSE) |
| KM (days) | `Q1` · Km | 0.214 | days | not captured | [d] | not captured | exact (1.0) | T2:row20:col3, T2:row20:col4 | — | not captured |
| BASE | `Q900` · equation variable | 0.0258 | not captured | not captured | not captured | not captured | llm (0.6) | T2:row25:col3, T2:row25:col4 | — | not captured |
| mean volume of distribution | `Q61` · V | 2.8 | L/kg | 0.196 | L | not captured | review_gapfill (0.7) | Tang_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 Ka' routed out of structural estimates ('Inter individual Variability')
- table section iiv: 'ω 2 CL' routed out of structural estimates ('Inter individual Variability')
- table section iiv: 'ω 2 V3' routed out of structural estimates ('Inter individual Variability')
- table section residual_error: 'Proportional error σprop' routed out of structural estimates ('Residual Variability')
- column '1000 bootstrap replicates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'KM (days)' → Q1 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row21:col3', 'T2:row21:col4'])
- dropped unlinked row (NIL): 'TF (day−1)' — extend the ontology if this is a real PK parameter (source ['T2:row23:col3', 'T2:row23:col4'])
- dropped unlinked row (NIL): 'KMV3 (days)' — extend the ontology if this is a real PK parameter (source ['T2:row26:col3', 'T2:row26:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=buprenorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: '1000 bootstrap replicates' subgroup of Ng_2015 (paper reports 2 populations: 1000 bootstrap replicates, original data set)
- gap-filled Q61 (V) from Tang_2021's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[base]` | 0.0258 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[km].value` | 0.214 | 0.00398 | mismatch |
| `gpt-oss-120b` | `parameters[mean volume of distribution]` | 2.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tf]` | not captured | 0.0203 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_wt]` | not captured | 1.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_effect_on_cl_and_q]` | not captured | 0.750 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[θcl].value` | 157 | 112 | mismatch |
| `gpt-oss-120b` | `parameters[θq].value` | 589 | 283 | mismatch |
| `gpt-oss-120b` | `parameters[θv2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[θv2].value` | 203 | 113 | mismatch |
| `gpt-oss-120b` | `parameters[θv3].value` | 3514 | 1488 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | buprenorphine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | buprenorphine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [time] | days | not captured | not captured | ['T2:row20:col3', 'T2:row20:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row8:col3', 'T2:row8:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row10:col3', 'T2:row10:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tang_2021:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row9:col3', 'T2:row9:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row11:col3', 'T2:row11:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 157.0 | not captured | not captured | ['T2:row8:col3', 'T2:row8:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 157 L/h | not captured | not captured | ['T2:row8:col3', 'T2:row8:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 196 L | not captured | not captured | ['Tang_2021:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 203 L | not captured | not captured | ['T2:row9:col3', 'T2:row9:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_buprenorphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ng_2015` / `Ng_2015::1000_bootstrap_replicates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:48 UTC</sub>
