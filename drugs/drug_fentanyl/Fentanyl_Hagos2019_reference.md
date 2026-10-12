<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Hagos_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Introna2026_reference&quot;,&quot;label&quot;:&quot;Introna_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Introna2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Hagos2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.524), gpt-oss:120b (not confirmed, agreement 0.524). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The fentanyl record from Hagos_2019 was held back because the reference check could not compute a comparison (ratio None), and several parameter values, including clearance and the weight covariate effects, are missing or disputed between readers.**

The reference check failed with ratio None, meaning no comparison could be computed, so the failure is inconclusive rather than a demonstrated fault. The record lacks values for clearance (CL), intercompartmental clearance (Q), central and peripheral volumes (V1, V2), and the clearance weight covariate effect, while the value 222 is assigned to the V1 weight covariate effect by one reader and to a different covariate effect by the second reader. The two readers also disagree on whether the θ1 parameter (34.6 L h−1) denotes clearance or an intercompartmental clearance.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has none, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Hagos FT et al., Factors Contributing to Fentanyl Pharma…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-019-00773-1](https://doi.org/10.1007/s40262-019-00773-1)

## Model component
<dbs-pgx drug="fentanyl" model-id="Fentanyl_Hagos2019_reference" status="needs_review" stale="false" population="critically ill children" measured-compound="fentanyl" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 (L h−1) | `Q900` · equation variable | 34.6 | L h−1 | not captured | [l] / [h] | 9.2 | llm (0.6) | T2:row3:col2, T2:row3:col3 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 222 | not captured | not captured | not captured | 18.6 | not captured (not captured) | T2:row5:col2, T2:row5:col3 | — | not captured |
| theta_q30_wt_power | `Q900` · theta_q30_wt_power | 8.58 | not captured | not captured | not captured | 18.9 | not captured (not captured) | T2:row6:col2, T2:row6:col3 | — | not captured |
| theta_q64_wt_power | `Q900` · theta_q64_wt_power | 311 | not captured | not captured | not captured | 13.1 | not captured (not captured) | T2:row7:col2, T2:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| COVCL-V1 | Q63 | not captured | llm_confirmed |
| theta_q22_wt_power | Q900 | not captured | not captured |
| CL | Q22 | not captured | exact |
| Q | Q30 | not captured | exact |
| V2 | Q64 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θ9' — extend the ontology if this is a real PK parameter (source ['T2:row4:col2', 'T2:row4:col3'])
- dropped value-less row: 'Proportional (%CV)' (captured trailing unit '%CV' for child rows)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q30 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- bound model equation to Q22 (CL): CL = θ1 * (WT/70)^0.75 * θ9INDU
- bound model equation to Q63 (V1): V1 = θ2 * (WT /70)^1
- bound model equation to Q30 (Q): Q = θ3 * (WT /70)^0.75
- bound model equation to Q64 (V2): V2 = θ4 * (WT /70)^1
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'COVCL-V1'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q'; equation kept verbatim
- Q64 (V2) is equation-defined: value moved to equation-variable 'V2'; equation kept verbatim
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell T2:row3:col4 = '34.7 [27.7, 40.9]'
- unparsed cell T2:row4:col4 = '1.54 [1.2, 1.89]'
- unparsed cell T2:row5:col1 = 'θ2 (L)'
- unparsed cell T2:row5:col4 = '9.24 [3.72, 13.32]'
- unparsed cell T2:row6:col1 = 'θ3 (L h−1)'
- unparsed cell T2:row6:col4 = '9.24 [3.72, 13.32]'
- unparsed cell T2:row7:col1 = 'θ4 (L)'
- unparsed cell T2:row7:col4 = '332 [150, 472]'
- unparsed cell T2:row9:col2 = '0.37 (60.7%)'
- unparsed cell T2:row9:col4 = '0.34 [0.07, 0.67]'
- unparsed cell T2:row10:col2 = '1.15 (107.2%)'
- unparsed cell T2:row10:col4 = '1.15 [0.1, 2.2]'
- unparsed cell T2:row11:col4 = '0.55 [0.04, 1.22]'
- unparsed cell T2:row13:col2 = '52%'
- unparsed cell T2:row13:col4 = '50.6% [43.3%, 59.7%]'
- LLM selected parameter table(s) 2
- captured model equation CL = θ1 * (WT/70)^0.75 * θ9INDU
- captured model equation V1 = θ2 * (WT /70)^1
- captured model equation Q = θ3 * (WT /70)^0.75
- captured model equation V2 = θ4 * (WT /70)^1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.524 (11/21 fields) | 10 |
| `gpt-oss:120b` | not confirmed | 0.524 (11/21 fields) | 10 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[covcl-v1]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt_power]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_wt_power]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q63_wt_power]` | not captured | 222 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_wt_power]` | 222 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ1].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[θ1].parameter_id` | Q900 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[θ1].value` | 34.6 | not captured | mismatch |
| `gpt-oss:120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[covcl-v1]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_wt_power]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q22_wt_power]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q63_wt_power]` | not captured | 222 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v1_wt_power]` | 222 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ1].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss:120b` | `parameters[θ1].parameter_id` | Q900 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[θ1].value` | 34.6 | not captured | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fentanyl/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hagos_2019` / `Hagos_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-27 15:38 UTC</sub>
