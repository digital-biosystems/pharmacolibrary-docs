<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;everolimus&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/&quot;},{&quot;label&quot;:&quot;Itohara_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Everolimus_Hirabatake2022_reference&quot;,&quot;label&quot;:&quot;Hirabatake_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Hirabatake2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_Moes2012_reference&quot;,&quot;label&quot;:&quot;Moes_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Moes2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_Sakaue2024_base&quot;,&quot;label&quot;:&quot;Sakaue_2024_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Sakaue2024_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_Sakaue2024_final&quot;,&quot;label&quot;:&quot;Sakaue_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_Sakaue2024_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_de2016_base&quot;,&quot;label&quot;:&quot;de_2016_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_de2016_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Everolimus_de2016_final&quot;,&quot;label&quot;:&quot;de_2016_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_everolimus/Everolimus_de2016_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# everolimus — `Everolimus_Itohara2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> For everolimus, CL/F was 6.89 L/h, but V/F was not extracted, so the record was held back.

<div class="pk-model-meta" hidden drug="everolimus" model-id="Everolimus_Itohara2022_reference" status="needs_review" stale="false" population="Japanese adult liver transplant patients" measured-compound="everolimus" parameterization="apparent" topology="1C"></div>

## Citation
Itohara K, Yano I, Nakagawa S, Sugimoto M, Hirai M, Yonezawa A et al. Population pharmacokinetics of everolimus in adult liver transplant patients: Comparison to tacrolimus disposition and extrapolation to pediatrics. Clinical and translational science 15(11):2652–2662 (2022).
  ·  DOI: [10.1111/cts.13389](https://doi.org/10.1111/cts.13389)

## Population and dosing

**Population:** Japanese adult liver transplant patients · condition liver transplantation · age group adult · n = 87.

**Dosing:** 0.5, 1 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 1 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θ 2 (TDM effect) | equation variable | 0.310 | TDM effect |
| θ 3 | kabs | 0.823 | 1/h |
| θ 1 | θ 1 | 6.89 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.312). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**For everolimus, CL/F was 6.89 L/h, but V/F was not extracted, so the record was held back.**

Only clearance was extracted—CL/F was 6.89 L/h—and no volume (V/F) was extracted. A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. The reported comparison was inconclusive because no comparison could be computed (ratio None). Extracted — everolimus: kabs 0.823 1/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl/f: this record has none, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θ 2 (TDM effect) | `Q900` · equation variable | 0.310 | TDM effect |  |  | tdmeffect | llm (0.6) | cts13389-tbl-0002:row4:col1, cts13389-tbl-0002:row4:col2, cts13389-tbl-0002:row4:col4, cts13389-tbl-0002:row4:col5 |
| θ 3 | `Q49` · kabs | 0.823 | 1/h | 0.0002286 | 1/s | 1/h | llm (0.6) | cts13389-tbl-0002:row5:col1, cts13389-tbl-0002:row5:col2, cts13389-tbl-0002:row5:col4, cts13389-tbl-0002:row5:col5 |
| θ 1 | `Q900` · θ 1 | 6.89 | L/h | 1.914e-06 | m3/s |  |  | cts13389-tbl-0002:row3:col1, cts13389-tbl-0002:row3:col2, cts13389-tbl-0002:row3:col4, cts13389-tbl-0002:row3:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| θ 1 (L/h) | Q27 | llm |
| Vd/F = θ 6 × (BW/57) | Q76 | llm_confirmed |
| theta_cl_f_egfr_power | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'TDM effect' (equation variable)
- dropped duplicate Q900 ('θ 4', value '0.258') — already have one for this compound
- dropped duplicate Q900 ('θ 5', value '1.23') — already have one for this compound
- unit_dimension_unknown: 'BW/57' (V/F)
- dropped duplicate Q76 ('θ 6 (L)', value '312') — already have one for this compound
- dropped duplicate Q49 ('ka (1/h)', value '6.07') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['cts13389-tbl-0002:footnote', 'cts13389-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'θ 3' → 1/h (from the popPK convention: 'The paper does not state a unit for kabs. As a first-order absorption rate constant, it is conventionally expressed in 1')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=everolimus
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q27 (CL/F): CL/F = θ 1 * (BW/57)^0.75 * (TDD/1.0)^θ2 * θ 3 FLCZ * (eGFR/55.2)^θ4 * θ 5 Female
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'θ 1 (L/h)'; equation kept verbatim
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2
- captured model equation CL/F = θ 1 * (BW/57)^0.75 * (TDD/1.0)^θ2 * θ 3 FLCZ * (eGFR/55.2)^θ4 * θ 5 Female

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka]` |  | 6.07 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_f_egfr_power]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q27_egfr_power]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ 1].covariate_forms` | ['power'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[θ 1].parameter_id` | Q27 | Q30 | mismatch |
| `qwen3.8-27b` | `parameters[θ 1].value` |  | 6.23 | mismatch |
| `qwen3.8-27b` | `parameters[θ 2]` | 0.310 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ 3].parameter_id` | Q49 | Q308 | mismatch |
| `qwen3.8-27b` | `parameters[θ 3].value` | 0.823 | 0.722 | mismatch |
| `qwen3.8-27b` | `parameters[θ 6]` |  | 258 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts13389-tbl-0002:row3:col1', 'cts13389-tbl-0002:row3:col2', 'cts13389-tbl-0002:row3:col4', 'cts13389-tbl-0002:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts13389-tbl-0002:row5:col1', 'cts13389-tbl-0002:row5:col2', 'cts13389-tbl-0002:row5:col4', 'cts13389-tbl-0002:row5:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beverolimus%5D%20Everolimus_Itohara2022_reference&body=Drug%3A%20everolimus%0ARecord%3A%20Everolimus_Itohara2022_reference%0APaper%3A%20Itohara_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_everolimus/Everolimus_Itohara2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:31 UTC</sub>
