<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;voriconazole&quot;,&quot;href&quot;:&quot;drugs/drug_voriconazole/&quot;},{&quot;label&quot;:&quot;Tilen_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voriconazole_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_voriconazole/Voriconazole_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# voriconazole — `Voriconazole_Tilen2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This record lacks units for the trough concentration and has an incomplete disposition core with no volume parameter.

<div class="pk-model-meta" hidden drug="voriconazole" model-id="Voriconazole_Tilen2022_reference" status="needs_review" stale="false" population="pediatric patients with invasive fungal infections" measured-compound="voriconazole" parameterization="mechanistic" topology="1C"></div>

## Citation
Tilen R, Paioni P, Goetschi AN, Goers R, Seibert I, Müller D et al. Pharmacogenetic Analysis of Voriconazole Treatment in Children. Pharmaceutics 14(6) (2022).
  ·  DOI: [10.3390/pharmaceutics14061289](https://doi.org/10.3390/pharmaceutics14061289)

## Population and dosing

**Population:** pediatric patients with invasive fungal infections · condition invasive fungal infections · age group child · n = &lt;null&gt;.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 7 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ1, Intercept (log(Ctrough)) | Ctrough | -2.0763 |  | 0.4637 |
| θ2, ln(dose/weight, mg/kg) | equation variable | 0.8905 | mg/kg | 0.2004 |
| θ3, Δ ln(surface area, m2) | allometric_exponent | 1.1437 | surface area, m2 | 0.2388 |
| 8_abcc2_rs2273697 | 8_abcc2_rs2273697 | -0.6581 | mg/kg | 0.1708 |
| 9_abcc2_rs717620 | 9_abcc2_rs717620 | 0.4130 | mg/kg | 0.1918 |
| 10_abcg2_rs2231142 | 10_abcg2_rs2231142 | 0.4481 | mg/kg | 0.1391 |
| 11_cyp2c19_rs4244285 | 11_cyp2c19_rs4244285 | 0.8990 | mg/kg | 0.1980 |
| 13_cyp3a4_rs35599367 | 13_cyp3a4_rs35599367 | 3.3737 | mg/kg | 0.6203 |
| 14_metamizole_cyp2c19_rs4244285 | 14_metamizole_cyp2c19_rs4244285 | -0.4911 | mg/kg | 0.2231 |
| theta_equation_variable_cyp2c19 | theta_equation_variable_cyp2c19 | 1.6289 |  | 0.4302 |
| CL | CL | 9.16 | L/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.586). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This record lacks units for the trough concentration and has an incomplete disposition core with no volume parameter.**

The trough concentration value (-2.0763) has no unit, preventing conversion to standard units. The model also lacks a volume parameter to define the disposition core. Clearance of 9.16 L/h was extracted, but a volume is also needed for a complete model. Extracted — voriconazole: Ctrough -2.08, allometric_exponent 1.14 surface area, m2, CL 9.16 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has voriconazole, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θ1, Intercept (log(Ctrough)) | `Q37` · Ctrough | -2.0763 |  |  |  |  | 0.4637 | llm_confirmed (0.6) | pharmaceutics-14-01289-t004:row2:col2, pharmaceutics-14-01289-t004:row2:col3 |
| θ2, ln(dose/weight, mg/kg) | `Q900` · equation variable | 0.8905 | mg/kg |  |  | mg/kg | 0.2004 | llm (0.6) | pharmaceutics-14-01289-t004:row3:col1, pharmaceutics-14-01289-t004:row3:col2, pharmaceutics-14-01289-t004:row3:col3 |
| θ3, Δ ln(surface area, m2) | `Q319` · allometric_exponent | 1.1437 | surface area, m2 |  |  | s·urfacearea | 0.2388 | llm (0.6) | pharmaceutics-14-01289-t004:row4:col2, pharmaceutics-14-01289-t004:row4:col3 |
| 8_abcc2_rs2273697 | `Q900` · 8_abcc2_rs2273697 | -0.6581 | mg/kg |  |  | mg/kg | 0.1708 |  | pharmaceutics-14-01289-t004:row9:col2, pharmaceutics-14-01289-t004:row9:col3, pharmaceutics-14-01289-t004:row9:col4 |
| 9_abcc2_rs717620 | `Q900` · 9_abcc2_rs717620 | 0.4130 | mg/kg |  |  | mg/kg | 0.1918 |  | pharmaceutics-14-01289-t004:row10:col2, pharmaceutics-14-01289-t004:row10:col3, pharmaceutics-14-01289-t004:row10:col4 |
| 10_abcg2_rs2231142 | `Q900` · 10_abcg2_rs2231142 | 0.4481 | mg/kg |  |  | mg/kg | 0.1391 |  | pharmaceutics-14-01289-t004:row11:col2, pharmaceutics-14-01289-t004:row11:col3, pharmaceutics-14-01289-t004:row11:col4 |
| 11_cyp2c19_rs4244285 | `Q900` · 11_cyp2c19_rs4244285 | 0.8990 | mg/kg |  |  | mg/kg | 0.1980 |  | pharmaceutics-14-01289-t004:row12:col2, pharmaceutics-14-01289-t004:row12:col3 |
| 13_cyp3a4_rs35599367 | `Q900` · 13_cyp3a4_rs35599367 | 3.3737 | mg/kg |  |  | mg/kg | 0.6203 |  | pharmaceutics-14-01289-t004:row14:col2, pharmaceutics-14-01289-t004:row14:col3 |
| 14_metamizole_cyp2c19_rs4244285 | `Q900` · 14_metamizole_cyp2c19_rs4244285 | -0.4911 | mg/kg |  |  | mg/kg | 0.2231 |  | pharmaceutics-14-01289-t004:row15:col2, pharmaceutics-14-01289-t004:row15:col3, pharmaceutics-14-01289-t004:row15:col4 |
| theta_equation_variable_cyp2c19 | `Q900` · theta_equation_variable_cyp2c19 | 1.6289 |  |  |  |  | 0.4302 |  | pharmaceutics-14-01289-t004:row13:col2, pharmaceutics-14-01289-t004:row13:col3, pharmaceutics-14-01289-t004:row13:col4 |
| CL | `Q22` · CL | 9.16 | L/h | 2.544e-06 | m3/s | L/h |  | review_gapfill (0.7) | Yang_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'surface area, m2' (allometric_exponent)
- dropped duplicate Q900 ('θ4, ciprofloxacin', value '-0.9497') — already have one for this compound
- dropped unlinked row (NIL): 'θ5, levetiracetam' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01289-t004:row6:col2', 'pharmaceutics-14-01289-t004:row6:col3', 'pharmaceutics-14-01289-t004:row6:col4'])
- dropped duplicate Q900 ('θ6, propranolol', value '-0.5887') — already have one for this compound
- dropped unlinked row (NIL): 'θ7, metamizole' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01289-t004:row8:col2', 'pharmaceutics-14-01289-t004:row8:col3', 'pharmaceutics-14-01289-t004:row8:col4'])
- covariate level 'θ8, ABCC2 rs2273697' → Q900:8_abcc2_rs2273697 = -0.6581 (linear_fractional on the model)
- covariate level 'θ9, ABCC2 rs717620' → Q900:9_abcc2_rs717620 = 0.4130 (linear_fractional on the model)
- covariate level 'θ10, ABCG2 rs2231142' → Q900:10_abcg2_rs2231142 = 0.4481 (linear_fractional on the model)
- covariate level 'θ11, CYP2C19 rs4244285' → Q900:11_cyp2c19_rs4244285 = 0.8990 (linear_fractional on the model)
- covariate level 'θ13, CYP3A4 rs35599367' → Q900:13_cyp3a4_rs35599367 = 3.3737 (linear_fractional on the model)
- covariate level 'θ14, metamizole × CYP2C19 rs4244285' → Q900:14_metamizole_cyp2c19_rs4244285 = -0.4911 (linear_fractional on the model)
- unit inherited for 8_abcc2_rs2273697 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 9_abcc2_rs717620 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 10_abcg2_rs2231142 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 11_cyp2c19_rs4244285 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 13_cyp3a4_rs35599367 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 14_metamizole_cyp2c19_rs4244285 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=voriconazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q22 (CL) from Yang_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-14-01289-t004:row2:col4 = '&lt;10−4'
- unparsed cell pharmaceutics-14-01289-t004:row3:col4 = '&lt;10−4'
- unparsed cell pharmaceutics-14-01289-t004:row4:col1 = 'ln(1 m2)'
- unparsed cell pharmaceutics-14-01289-t004:row4:col4 = '&lt;10−5'
- unparsed cell pharmaceutics-14-01289-t004:row9:col1 = 'ABCC2 rs2273697 GG'
- unparsed cell pharmaceutics-14-01289-t004:row10:col1 = 'ABCC2 rs717620 CC'
- unparsed cell pharmaceutics-14-01289-t004:row11:col1 = 'ABCG2 rs2231142 CC'
- unparsed cell pharmaceutics-14-01289-t004:row12:col1 = 'CYP2C19 rs4244285 GG'
- unparsed cell pharmaceutics-14-01289-t004:row12:col4 = '&lt;10−5'
- unparsed cell pharmaceutics-14-01289-t004:row13:col1 = 'CYP2C19 rs4986893 GG'
- unparsed cell pharmaceutics-14-01289-t004:row14:col1 = 'CYP3A4 rs35599367 CC'
- unparsed cell pharmaceutics-14-01289-t004:row14:col4 = '&lt;10−6'
- unparsed cell pharmaceutics-14-01289-t004:row15:col1 = 'No metamizole, CYP2C19 rs4244285 GG'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.586 (17/29 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[10_abcg2_rs2231142].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[11_cyp2c19_rs4244285].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[12_cyp2c19_rs4986893]` |  | 1.6289 | only_one_extracted |
| `gpt-oss-120b` | `parameters[13_cyp3a4_rs35599367].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[14_metamizole_cyp2c19_rs4244285]` | -0.4911 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[8_abcc2_rs2273697].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[9_abcc2_rs717620].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | 9.16 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_equation_variable_cyp2c19]` | 1.6289 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_cyp2c19]` |  | -0.4911 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2, ln]` | 0.8905 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | voriconazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Yang_2021:review'] |
| C5_unit_missing_Q37 | fail | [mass] / [length] ** 3 |  | ['pharmaceutics-14-01289-t004:row2:col2', 'pharmaceutics-14-01289-t004:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.16 | ['Yang_2021:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.16 L/h | ['Yang_2021:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvoriconazole%5D%20Voriconazole_Tilen2022_reference&body=Drug%3A%20voriconazole%0ARecord%3A%20Voriconazole_Tilen2022_reference%0APaper%3A%20Tilen_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_voriconazole/Voriconazole_Tilen2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 13:03 UTC</sub>
