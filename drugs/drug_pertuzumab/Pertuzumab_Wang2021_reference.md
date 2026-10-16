<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pertuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pertuzumab_Luo2017_reference&quot;,&quot;label&quot;:&quot;Luo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Luo2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pertuzumab_Sun2022_reference&quot;,&quot;label&quot;:&quot;Sun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Sun2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pertuzumab_Sakaeda2024_10_mg_kg_iv&quot;,&quot;label&quot;:&quot;Sakaeda_2024_10_mg_kg_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pertuzumab — `Pertuzumab_Wang2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Kabs has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kabs), so that value has no SI equivalent. Extracted — pertuzumab: CL 0.163 L/d, V1 2.77 L, V2 2.49 L, kabs 0.348 d, Q 0.616 L/d.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f: this record has none, the second reading none; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wang B et al., Population pharmacokinetic and explorat…, Cancer chemotherapy and pha… (2021)
  ·  DOI: [10.1007/s00280-021-04296-0](https://doi.org/10.1007/s00280-021-04296-0)

<div class="pk-model-meta" hidden drug="pertuzumab" model-id="Pertuzumab_Wang2021_reference" status="needs_review" stale="false" population="adults with HER2-positive early breast cancer" measured-compound="pertuzumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| theta_q312_category | `Q900` · theta_q312_category | 31.0 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab1:row1:col3, Tab1:row2:col3, Tab1:row3:col3, Tab1:row4:col3, Tab1:row5:col3, Tab1:row6:col3, Tab1:row11:col3, Tab1:row12:col3, Tab1:row13:col3, Tab1:row14:col3, Tab1:row15:col3 | — | not captured |
| θ1 CL, L/d | `Q22` · CL | 0.163 | L/d | 1.886574074074074e-09 | L/h | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |
| θ2 Vc, L | `Q63` · V1 | 2.77 | L | 0.00277 | L | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |
| θ4 Vp, L | `Q64` · V2 | 2.49 | L | 0.0024900000000000005 | L | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |
| θ5 ka, d | `Q49` · kabs | 0.348 | d | not captured | d | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |
| θ3 Q, L/d | `Q30` · Q | 0.616 | L/d | 7.12962962962963e-09 | L/h | not captured | review_gapfill (0.7) | Wang_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Estimate (95% CI)' routed out of structural estimates ('Residual error')
- table section residual_error: 'RSE for estimate, %' routed out of structural estimates ('Residual error')
- conflicting source units for 'RSE for estimate, %': [{'unit': '%', 'source': 'Tab1:row0:col3', 'scope': 'label'}, {'unit': 'L/d', 'source': 'Tab1:row1:col1', 'scope': 'description'}]
- conflicting source units for 'RSE for IIV, %': [{'unit': '%', 'source': 'Tab1:row0:col5', 'scope': 'label'}, {'unit': 'L/d', 'source': 'Tab1:row1:col1', 'scope': 'description'}]
- conflicting source units for 'RSE for estimate, %': [{'unit': '%', 'source': 'Tab1:row0:col3', 'scope': 'label'}, {'unit': 'L', 'source': 'Tab1:row2:col1', 'scope': 'description'}]
- conflicting source units for 'RSE for IIV, %': [{'unit': '%', 'source': 'Tab1:row0:col5', 'scope': 'label'}, {'unit': 'L', 'source': 'Tab1:row2:col1', 'scope': 'description'}]
- conflicting source units for 'RSE for estimate, %': [{'unit': '%', 'source': 'Tab1:row0:col3', 'scope': 'label'}, {'unit': 'L/d', 'source': 'Tab1:row3:col1', 'scope': 'description'}]
- conflicting source units for 'RSE for estimate, %': [{'unit': '%', 'source': 'Tab1:row0:col3', 'scope': 'label'}, {'unit': 'L', 'source': 'Tab1:row4:col1', 'scope': 'description'}]
- conflicting source units for 'RSE for IIV, %': [{'unit': '%', 'source': 'Tab1:row0:col5', 'scope': 'label'}, {'unit': 'L', 'source': 'Tab1:row4:col1', 'scope': 'description'}]
- conflicting source units for 'RSE for estimate, %': [{'unit': '%', 'source': 'Tab1:row0:col3', 'scope': 'label'}, {'unit': 'd', 'source': 'Tab1:row5:col1', 'scope': 'description'}]
- dropped unlinked row (NIL): 'Estimate (95% CI)' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col2', 'Tab1:row2:col2', 'Tab1:row3:col2', 'Tab1:row4:col2', 'Tab1:row5:col2', 'Tab1:row6:col2', 'Tab1:row11:col2', 'Tab1:row12:col2', 'Tab1:row13:col2', 'Tab1:row14:col2', 'Tab1:row15:col2', 'Tab1:row16:col2'])
- covariate effect for Q312 has no base parameter row (kept as unattached equation-variable)
- salvaged Q22 ('θ1\nCL, L/d'=0.163) from results prose — parameter table was unreadable
- salvaged Q63 ('θ2\nVc, L'=2.77) from results prose — parameter table was unreadable
- salvaged Q64 ('θ4\nVp, L'=2.49) from results prose — parameter table was unreadable
- salvaged Q49 ('θ5\nka, d'=0.348) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θ1
CL, L/d); Q63 (θ2
Vc, L); Q64 (θ4
Vp, L)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pertuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'pertuzumab' — its concentrations stay mass-only
- gap-filled Q30 (Q) from Wang_2021's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab1: conflicting_units
- transposed table Tab1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.616 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[rse_for_estimate]` | not captured | 31.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q318_category]` | 31.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tpcr q1 count]` | not captured | 38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tpcr q2 count]` | not captured | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ1 cl]` | 0.163 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2 vc]` | 2.77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ4 vp]` | 2.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ5 ka]` | 0.348 | not captured | only_one_extracted |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2021:review'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | d | not captured | not captured | ['Wang_2021:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.163 | not captured | not captured | ['Wang_2021:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00679 L/h | not captured | not captured | ['Wang_2021:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['Wang_2021:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.49 L | not captured | not captured | ['Wang_2021:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_pertuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:59 UTC</sub>
