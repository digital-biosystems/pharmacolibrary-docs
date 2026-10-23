<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Hagos_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Hagos2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The reference check for the fentanyl model in critically ill children could not compute a comparison, leaving the record with no demonstrated fault but requiring further review.

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Hagos2019_reference" status="needs_review" stale="false" population="critically ill children" measured-compound="fentanyl" parameterization="mechanistic" topology="1C"></div>

## Citation
Hagos FT, Horvat CM, Au AK, Conley YP, Li L, Poloyac SM et al. Factors Contributing to Fentanyl Pharmacokinetic Variability Among Diagnostically Diverse Critically Ill Children. Clinical pharmacokinetics 58(12):1567–1576 (2019).
  ·  DOI: [10.1007/s40262-019-00773-1](https://doi.org/10.1007/s40262-019-00773-1)

## Population and dosing

**Population:** critically ill children · age group child · n = &gt;=66.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ1 (L h−1) | equation variable | 34.6 | L h−1 | 9.2 |
| theta_v1_wt_power | theta_v1_wt_power | 222 |  | 18.6 |
| theta_q30_wt_power | theta_q30_wt_power | 8.58 |  | 18.9 |
| theta_q64_wt_power | theta_q64_wt_power | 311 |  | 13.1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.524). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The reference check for the fentanyl model in critically ill children could not compute a comparison, leaving the record with no demonstrated fault but requiring further review.**

The check that was expected to compare the model against a reference failed without producing any numerical result. Because no comparison value was generated, the failure is inconclusive rather than a specific pharmacokinetic error. A second reader disagreed with the parameter extraction, identifying different covariate power values for the intercompartmental clearance.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has none, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|
| θ1 (L h−1) | `Q900` · equation variable | 34.6 | L h−1 | l/h | 9.2 | llm (0.6) | T2:row3:col2, T2:row3:col3 |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 222 |  |  | 18.6 |  | T2:row5:col2, T2:row5:col3 |
| theta_q30_wt_power | `Q900` · theta_q30_wt_power | 8.58 |  |  | 18.9 |  | T2:row6:col2, T2:row6:col3 |
| theta_q64_wt_power | `Q900` · theta_q64_wt_power | 311 |  |  | 13.1 |  | T2:row7:col2, T2:row7:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| COVCL-V1 | Q63 | llm_confirmed |
| theta_q22_wt_power | Q900 |  |
| CL | Q22 | exact |
| Q | Q30 | exact |
| V2 | Q64 | exact |

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.524 (11/21 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[covcl-v1]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_wt_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q63_wt_power]` |  | 222 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_wt_power]` | 222 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ1].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[θ1].parameter_id` | Q900 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[θ1].value` | 34.6 |  | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 4 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | pass |  |
| C2_reference | fail |  |
| C8_topology | pass |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Hagos2019_reference&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Hagos2019_reference%0APaper%3A%20Hagos_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Hagos2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-27 15:38 UTC</sub>
