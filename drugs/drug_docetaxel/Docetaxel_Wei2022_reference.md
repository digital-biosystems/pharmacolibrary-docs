<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;docetaxel&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/&quot;},{&quot;label&quot;:&quot;Wei_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Docetaxel_Clarke1999_reference&quot;,&quot;label&quot;:&quot;Clarke_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_Clarke1999_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Docetaxel_LaunayIliadis1995_reference&quot;,&quot;label&quot;:&quot;Launay-Iliadis_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_LaunayIliadis1995_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# docetaxel — `Docetaxel_Wei2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Docetaxel allometric exponent of -0.71 implies a physiologically implausible decrease in clearance with increasing body size.**

The record lists an allometric exponent of -0.71 for the relationship between body size and clearance. This negative value indicates that the model predicts drug elimination slows down as patients get larger, which contradicts standard pharmacokinetic principles where clearance typically scales positively with body weight. The review rejected the model because this parameter magnitude falls outside the accepted physiological window, suggesting an extraction or estimation error. Extracted — docetaxel: CL 53.4 L/h, V1 48.2 L, Q 0.42 L/h, V2 0.06 L, allometric_exponent -0.71.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 53.40, the second reading 52.42; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Wei J et al., Docetaxel population pharmacokinetic mo…, Annals of translational med… (2022)
  ·  DOI: [10.21037/atm-22-2619](https://doi.org/10.21037/atm-22-2619)

<div class="pk-model-meta" hidden drug="docetaxel" model-id="Docetaxel_Wei2022_reference" status="rejected" stale="false" population="Chinese cancer patients" measured-compound="docetaxel" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 53.40 | L/h | 1.4833333333333334e-05 | [l] / [h] | not captured | exact (1.0) | t2:row2:col1, t2:row2:col2, t2:row2:col4, t2:row2:col6, t2:row2:col8 | — | not captured |
| Vc (L) | `Q63` · V1 | 48.21 | L | 0.04821 | [l] | not captured | exact (1.0) | t2:row3:col1, t2:row3:col2, t2:row3:col4, t2:row3:col6, t2:row3:col8 | — | not captured |
| Q (L/h) | `Q30` · Q | 0.42 | L/h | 1.1666666666666667e-07 | [l] / [h] | not captured | exact (1.0) | t2:row4:col1, t2:row4:col2, t2:row4:col4, t2:row4:col6, t2:row4:col8 | — | not captured |
| Vp (L) | `Q64` · V2 | 0.06 | L | 6e-05 | [l] | not captured | exact (1.0) | t2:row5:col1, t2:row5:col2, t2:row5:col4, t2:row5:col6, t2:row5:col8 | — | not captured |
| fAge-CL | `Q319` · allometric_exponent | -0.71 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | t2:row6:col1, t2:row6:col2, t2:row6:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ' routed out of structural estimates ('Residual error (proportional error, CV%)')
- dropped duplicate Q22 ('fBMI-CL', value '1.35') — already have one for this compound
- dropped duplicate Q22 ('fBSA-CL', value '1.04') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=docetaxel

**Extraction notes:**
- unparsed cell t2:row2:col3 = '34.80 to 41.60'
- unparsed cell t2:row2:col7 = '29.53 to 44.44'
- unparsed cell t2:row3:col3 = '5.13 to 6.34'
- unparsed cell t2:row3:col7 = '4.20 to 6.41'
- unparsed cell t2:row4:col3 = '38.94 to 43.04'
- unparsed cell t2:row4:col7 = '35.76 to 47.70'
- unparsed cell t2:row5:col3 = '241.8 to 299.85'
- unparsed cell t2:row5:col7 = '199.13 to 344.00'
- unparsed cell t2:row6:col3 = '−0.79 to −0.65'
- unparsed cell t2:row6:col7 = '−0.82 to −0.51'
- unparsed cell t2:row7:col3 = '1.19 to 1.43'
- unparsed cell t2:row7:col7 = '1.18 to 1.53'
- unparsed cell t2:row8:col3 = '0.93 to 1.04'
- unparsed cell t2:row8:col7 = '0.72 to 1.23'
- unparsed cell t2:row10:col3 = '24.99 to 29.57'
- unparsed cell t2:row10:col7 = '25.69 to 28.96'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 53.40 | 52.42 | mismatch |
| `gpt-oss-120b` | `parameters[fage-cl]` | -0.71 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].value` | 0.42 | 0.32 | mismatch |
| `gpt-oss-120b` | `parameters[vp].value` | 0.06 | 0.05 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t2:row2:col1', 't2:row2:col2', 't2:row2:col4', 't2:row2:col6', 't2:row2:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t2:row4:col1', 't2:row4:col2', 't2:row4:col4', 't2:row4:col6', 't2:row4:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['t2:row3:col1', 't2:row3:col2', 't2:row3:col4', 't2:row3:col6', 't2:row3:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['t2:row5:col1', 't2:row5:col2', 't2:row5:col4', 't2:row5:col6', 't2:row5:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 53.4 | not captured | not captured | ['t2:row2:col1', 't2:row2:col2', 't2:row2:col4', 't2:row2:col6', 't2:row2:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 53.4 L/h | not captured | not captured | ['t2:row2:col1', 't2:row2:col2', 't2:row2:col4', 't2:row2:col6', 't2:row2:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 48.2 L | not captured | not captured | ['t2:row3:col1', 't2:row3:col2', 't2:row3:col4', 't2:row3:col6', 't2:row3:col8'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.06 L | not captured | not captured | ['t2:row5:col1', 't2:row5:col2', 't2:row5:col4', 't2:row5:col6', 't2:row5:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_docetaxel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wei_2022` / `Wei_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:51 UTC</sub>
