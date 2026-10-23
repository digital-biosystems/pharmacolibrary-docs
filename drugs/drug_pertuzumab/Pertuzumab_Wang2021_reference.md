<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pertuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pertuzumab_Luo2017_reference&quot;,&quot;label&quot;:&quot;Luo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Luo2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pertuzumab_Sakaeda2024_10_mg_kg_iv&quot;,&quot;label&quot;:&quot;Sakaeda_2024_10_mg_kg_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pertuzumab — `Pertuzumab_Wang2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kabs has no unit.

<div class="pk-model-meta" hidden drug="pertuzumab" model-id="Pertuzumab_Wang2021_reference" status="needs_review" stale="false" population="patients with HER2-positive early breast cancer" measured-compound="pertuzumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Wang B, Deng R, Hennig S, Badovinac Crnjevic T, Kaewphluk M, Kågedal M et al. Population pharmacokinetic and exploratory exposure-response analysis of the fixed-dose combination of pertuzumab and trastuzumab for subcutaneous injection in patients with HER2-positive early breast cancer in the FeDeriCa study. Cancer chemotherapy and pharmacology 88(3):499–512 (2021).
  ·  DOI: [10.1007/s00280-021-04296-0](https://doi.org/10.1007/s00280-021-04296-0)

## Population and dosing

**Population:** patients with HER2-positive early breast cancer · condition HER2-positive early breast cancer · age group adult · n = &gt;=489.

**Dosing:** 600, 1200 mg, sc, multiple, every 21 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| theta_q318_category | theta_q318_category | 31.0 |  |
| Q (L/days) | Q | 0.616 | L/days |
| θ1 CL, L/d | CL | 0.163 | L/d |
| θ2 Vc, L | V1 | 2.77 | L |
| θ4 Vp, L | V2 | 2.49 | L |
| θ5 ka, d | kabs | 0.348 | d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kabs has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kabs), so that value has no SI equivalent. Extracted — pertuzumab: Q 0.616 L/days, CL 0.163 L/d, V1 2.77 L, V2 2.49 L, kabs 0.348 d.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f: this record has none, the second reading none; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| theta_q318_category | `Q900` · theta_q318_category | 31.0 |  |  |  |  |  | Tab1:row2:col2, Tab1:row2:col3, Tab1:row2:col4, Tab1:row2:col5, Tab1:row2:col6, Tab1:row2:col7, Tab1:row2:col9, Tab1:row2:col10, Tab1:row2:col12, Tab1:row2:col13, Tab1:row2:col14, Tab1:row2:col15, Tab1:row2:col16 |
| Q (L/days) | `Q30` · Q | 0.616 | L/days | 7.13e-09 | m3/s | L/h | exact (1) | Wang_2021:results_prose |
| θ1 CL, L/d | `Q22` · CL | 0.163 | L/d | 1.887e-09 | m3/s | L/h | boundary (0.8) | Wang_2021:results_prose |
| θ2 Vc, L | `Q63` · V1 | 2.77 | L | 0.00277 | m3 | L | boundary (0.8) | Wang_2021:results_prose |
| θ4 Vp, L | `Q64` · V2 | 2.49 | L | 0.00249 | m3 | L | boundary (0.8) | Wang_2021:results_prose |
| θ5 ka, d | `Q49` · kabs | 0.348 | d |  |  | d | boundary (0.8) | Wang_2021:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Estimate (95% CI)' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col17'])
- dropped diagnostic row 'Shrinkage, %' → Q318 (shrinkage) — reported statistic, not a parameter
- covariate effect for Q318 has no base parameter row (kept as unattached equation-variable)
- salvaged Q30 ('Q (L/days)'=0.616) from results prose — parameter table was unreadable
- salvaged Q22 ('θ1 CL, L/d'=0.163) from results prose — parameter table was unreadable
- salvaged Q63 ('θ2 Vc, L'=2.77) from results prose — parameter table was unreadable
- salvaged Q64 ('θ4 Vp, L'=2.49) from results prose — parameter table was unreadable
- salvaged Q49 ('θ5 ka, d'=0.348) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Q (L/days)); Q22 (θ1 CL, L/d); Q63 (θ2 Vc, L); Q64 (θ4 Vp, L)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pertuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'pertuzumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Tab1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab1:row1:col1 = 'Estimate (95% CI)'
- unparsed cell Tab1:row1:col2 = '0.163 (0.144, 0.182)'
- unparsed cell Tab1:row1:col3 = '2.77 (2.60, 2.94)'
- unparsed cell Tab1:row1:col4 = '0.616 (0.553, 0.679)'
- unparsed cell Tab1:row1:col5 = '2.49 (2.11, 2.87)'
- unparsed cell Tab1:row1:col6 = '0.348 (0.295, 0.401)'
- unparsed cell Tab1:row1:col7 = '0.712 (0.489, 0.935)'
- unparsed cell Tab1:row1:col9 = '0.155 (0.142, 0.168)'
- unparsed cell Tab1:row1:col10 = '0.175 (0.160, 0.190)'
- unparsed cell Tab1:row1:col12 = '–0.629 (–0.221, –1.04)'
- unparsed cell Tab1:row1:col13 = '1.25 (0.922, 1.58)'
- unparsed cell Tab1:row1:col14 = '0.839 (0.545, 1.13)'
- unparsed cell Tab1:row1:col15 = '0.716 (0.251, 1.18)'
- unparsed cell Tab1:row1:col16 = '0.123 (0.049, 0.197)'
- unparsed cell Tab1:row3:col1 = 'IIV, CV% (95% CI)'
- unparsed cell Tab1:row3:col2 = '23.5 (4.89, 32.8)'
- unparsed cell Tab1:row3:col3 = '34.8 (32.1, 37.3)'
- unparsed cell Tab1:row3:col5 = '25.6 (23.5, 27.5)'
- unparsed cell Tab1:row3:col7 = '17.8 (17.6, 18.0)'
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
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.616 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rse_for_estimate]` |  | 31.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q318_category]` | 31.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tpcr q1 count]` |  | 38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tpcr q2 count]` |  | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ1 cl]` | 0.163 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2 vc]` | 2.77 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ4 vp]` | 2.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ5 ka]` | 0.348 |  | only_one_extracted |

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
| C5_unit_missing_Q49 | fail | 1 / [time] | d | ['Wang_2021:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.163 | ['Wang_2021:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00679 L/h | ['Wang_2021:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | ['Wang_2021:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.49 L | ['Wang_2021:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpertuzumab%5D%20Pertuzumab_Wang2021_reference&body=Drug%3A%20pertuzumab%0ARecord%3A%20Pertuzumab_Wang2021_reference%0APaper%3A%20Wang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pertuzumab/Pertuzumab_Wang2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:35 UTC</sub>
