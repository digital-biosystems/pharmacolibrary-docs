<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;veliparib&quot;,&quot;href&quot;:&quot;drugs/drug_veliparib/&quot;},{&quot;label&quot;:&quot;Stodtmann_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Veliparib_Salem2014_reference&quot;,&quot;label&quot;:&quot;Salem_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_veliparib/Veliparib_Salem2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# veliparib — `Veliparib_Stodtmann2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.45). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Kabs has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — veliparib: CL/F 479 L/day, V/F 152 L, kabs 59.4.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of albumin_on_cl_f: this record has 0.427, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Stodtmann S et al., A Population Pharmacokinetic Meta-Analy…, Journal of clinical pharmac… (2021)
  ·  DOI: [10.1002/jcph.1875](https://doi.org/10.1002/jcph.1875)

<div class="pk-model-meta" hidden drug="veliparib" model-id="Veliparib_Stodtmann2021_reference" status="needs_review" stale="false" population="adult subjects with ovarian cancer, breast cancer, or other solid tumors" measured-compound="veliparib" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/day) | `Q27` · CL/F | 479 | L/day | 5.543981481481482e-06 | [l] / [d] | not captured | exact (1.0) | jcph1875-tbl-0004:row2:col1, jcph1875-tbl-0004:row2:col2 | — | not captured |
| Vc/F (L) | `Q76` · V/F | 152 | L | 0.152 | [l] | not captured | exact (1.0) | jcph1875-tbl-0004:row3:col1, jcph1875-tbl-0004:row3:col2 | — | not captured |
| ka (1/day) | `Q49` · kabs | 59.4 | not captured | not captured | not captured | not captured | exact (1.0) | jcph1875-tbl-0004:row4:col1, jcph1875-tbl-0004:row4:col2 | — | not captured |
| albumin_on_cl_f | `Q900` · albumin_on_cl_f | 0.427 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1875-tbl-0004:row7:col1, jcph1875-tbl-0004:row7:col2 | — | not captured |
| creatinine_clearance_on_cl_f | `Q900` · creatinine_clearance_on_cl_f | 0.513 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1875-tbl-0004:row8:col1, jcph1875-tbl-0004:row8:col2 | — | not captured |
| strong_inhibitors_of_cyp2d6_on_cl_f | `Q900` · strong_inhibitors_of_cyp2d6_on_cl_f | 0.885 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1875-tbl-0004:row9:col1, jcph1875-tbl-0004:row9:col2 | — | not captured |
| albumin_on_vc_f | `Q900` · albumin_on_vc_f | 0.260 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1875-tbl-0004:row10:col1, jcph1875-tbl-0004:row10:col2 | — | not captured |
| body_weight_on_vc_f | `Q900` · body_weight_on_vc_f | 0.505 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1875-tbl-0004:row12:col1, jcph1875-tbl-0004:row12:col2 | — | not captured |
| theta_kabs_fed | `Q900` · theta_kabs_fed | 0.356 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1875-tbl-0004:row5:col1, jcph1875-tbl-0004:row5:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('Fasting on ka', value '1.11') — already have one for this compound
- covariate level 'Albumin on CL/F' → Q900:albumin_on_cl_f = 0.427 (linear_fractional on Q27)
- covariate level 'Creatinine clearance on CL/F' → Q900:creatinine_clearance_on_cl_f = 0.513 (linear_fractional on Q27)
- covariate level 'Strong inhibitors of CYP2D6 on CL/F' → Q900:strong_inhibitors_of_cyp2d6_on_cl_f = 0.885 (linear_fractional on Q27)
- covariate level 'Albumin on Vc/F' → Q900:albumin_on_vc_f = 0.260 (linear_fractional on Q27)
- dropped duplicate Q290 ('Male on Vc/F', value '1.25') — already have one for this compound
- covariate level 'Body weight on Vc/F' → Q900:body_weight_on_vc_f = 0.505 (linear_fractional on Q27)
- dropped duplicate Q27 ('Male on CL/F', value '1.20') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=veliparib
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)

**Extraction notes:**
- unparsed cell jcph1875-tbl-0004:row2:col3 = '466‐490'
- unparsed cell jcph1875-tbl-0004:row3:col3 = '148‐155'
- unparsed cell jcph1875-tbl-0004:row4:col3 = '50.5‐77.4'
- unparsed cell jcph1875-tbl-0004:row5:col3 = '0.257‐0.447'
- unparsed cell jcph1875-tbl-0004:row6:col3 = '0.726‐1.55'
- unparsed cell jcph1875-tbl-0004:row7:col3 = '0.290‐0.565'
- unparsed cell jcph1875-tbl-0004:row8:col3 = '0.453‐0.571'
- unparsed cell jcph1875-tbl-0004:row9:col3 = '0.817‐0.953'
- unparsed cell jcph1875-tbl-0004:row10:col3 = '0.104‐0.417'
- unparsed cell jcph1875-tbl-0004:row11:col3 = '1.14‐1.38'
- unparsed cell jcph1875-tbl-0004:row12:col3 = '0.430‐0.585'
- unparsed cell jcph1875-tbl-0004:row13:col3 = '1.09‐1.32'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.45 (9/20 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[albumin_on_cl_f]` | 0.427 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[albumin_on_vc_f]` | 0.260 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_on_vc_f]` | 0.505 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[strong_inhibitors_of_cyp2d6_on_cl_f]` | 0.885 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_albumin]` | not captured | 0.426 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp2d6]` | not captured | 0.887 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_fed].value` | 0.356 | 0.350 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_f_albumin]` | not captured | 0.259 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_body_weight]` | not captured | 0.506 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1875-tbl-0004:row2:col1', 'jcph1875-tbl-0004:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1875-tbl-0004:row3:col1', 'jcph1875-tbl-0004:row3:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['jcph1875-tbl-0004:row4:col1', 'jcph1875-tbl-0004:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20 L/h | not captured | not captured | ['jcph1875-tbl-0004:row2:col1', 'jcph1875-tbl-0004:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 152 L | not captured | not captured | ['jcph1875-tbl-0004:row3:col1', 'jcph1875-tbl-0004:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_veliparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Stodtmann_2021` / `Stodtmann_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:50 UTC</sub>
