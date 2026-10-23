<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anifrolumab&quot;,&quot;href&quot;:&quot;drugs/drug_anifrolumab/&quot;},{&quot;label&quot;:&quot;Almquist_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# anifrolumab — `Anifrolumab_Almquist2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Tmax has no unit.

<div class="pk-model-meta" hidden drug="anifrolumab" model-id="Anifrolumab_Almquist2022_reference" status="needs_review" stale="false" population="healthy volunteers and patients with systemic lupus erythematosus" measured-compound="anifrolumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Almquist J, Kuruvilla D, Mai T, Tummala R, White WI, Tang W et al. Nonlinear Population Pharmacokinetics of Anifrolumab in Healthy Volunteers and Patients With Systemic Lupus Erythematosus. Journal of clinical pharmacology 62(9):1106–1120 (2022).
  ·  DOI: [10.1002/jcph.2055](https://doi.org/10.1002/jcph.2055)

## Population and dosing

**Population:** healthy volunteers and patients with systemic lupus erythematosus · condition systemic lupus erythematosus · age group adult · n = # 670.

**Dosing:** 100, 150, 300, 1000 mg, iv, multiple, every 336 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Systemic clearance in patients with high IFNGS (CL) (L/day) | CL | 0.193 | L/day |
| Volume of distribution, central (Vc ) (L) | V1 | 2.93 | L |
| Intercompartmental clearance (Q) (L/day) | Q | 0.937 | L/day |
| Volume of distribution, peripheral (Vp ) (L) | V2 | 3.30 | L |
| Internalization rate constant (kint ) (day−1) | kint | 77.4 | day−1 |
| BW on CL (θCL,BW) | allometric_exponent | 0.601 | θCL,BW |
| Maximal possible change in the log of clearance (T max ) | tmax | -0.155 | T max |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.692). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Tmax has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (allometric_exponent and tmax), so that value has no SI equivalent. Extracted — anifrolumab: CL 0.193 L/day, V1 2.93 L, Q 0.937 L/day, V2 3.3 L, kint 77.4 day−1, allometric_exponent 0.601 θCL,BW, tmax -0.155 T max.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of bw on cl: this record has 0.601, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Systemic clearance in patients with high IFNGS (CL) (L/day) | `Q22` · CL | 0.193 | L/day | 2.234e-09 | m3/s | l/d | llm_confirmed (0.6) | jcph2055-tbl-0001:row1:col1 |
| Volume of distribution, central (Vc ) (L) | `Q63` · V1 | 2.93 | L | 0.00293 | m3 | l | boundary_compartment (0.9) | jcph2055-tbl-0001:row2:col1 |
| Intercompartmental clearance (Q) (L/day) | `Q30` · Q | 0.937 | L/day | 1.084e-08 | m3/s | l/d | llm_confirmed (0.6) | jcph2055-tbl-0001:row3:col1 |
| Volume of distribution, peripheral (Vp ) (L) | `Q64` · V2 | 3.30 | L | 0.0033 | m3 | l | boundary_compartment (0.9) | jcph2055-tbl-0001:row4:col1 |
| Internalization rate constant (kint ) (day−1) | `Q334` · kint | 77.4 | day−1 | 0.0008958 | 1/s | 1/d | llm_confirmed (0.6) | jcph2055-tbl-0001:row7:col1, jcph2055-tbl-0001:row7:col2 |
| BW on CL (θCL,BW) | `Q319` · allometric_exponent | 0.601 | θCL,BW |  |  | θcl | llm_corrected (0.6) | jcph2055-tbl-0001:row9:col1 |
| Maximal possible change in the log of clearance (T max ) | `Q56` · tmax | -0.155 | T max |  |  | tmax | llm_corrected (0.6) | jcph2055-tbl-0001:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Steady‐state constant (KSS ) (nmol/L)' — extend the ontology if this is a real PK parameter (source ['jcph2055-tbl-0001:row5:col1'])
- dropped PD-category row 'Baseline IFNAR1 level (R0 ) (nmol/L)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph2055-tbl-0001:row6:col1'])
- dropped unlinked row (NIL): 'Baseline IFNGS on CL: Factor for IFNGS low (FIFNGS‐low )' — extend the ontology if this is a real PK parameter (source ['jcph2055-tbl-0001:row8:col1'])
- unit_dimension_unknown: 'θCL,BW' (allometric_exponent)
- unit_dimension_unknown: 'θVc,BW' (allometric_exponent)
- dropped duplicate Q319 ('BW on Vc (θVc,BW)', value '0.764') — already have one for this compound
- unit_dimension_unknown: 'T max' (tmax)
- dropped PD-category row 'Time to reach half the maximal change in log clearance (TC 50)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph2055-tbl-0001:row12:col1'])
- routed 'Variance (ηCL)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Variance (ηVc)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Variance (ηR0)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'ηTmax' (tmax)
- dropped duplicate Q56 ('Variance (ηTmax)', value None) — already have one for this compound
- routed 'Standard deviation of additive error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Standard deviation of proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'Maximal possible change in the log of clearance (T max )' — the LLM proposed '1/h', whose dimension does not fit Q56; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=anifrolumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'anifrolumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell jcph2055-tbl-0001:row1:col2 = '0.201 (0.175 to 0.233)'
- unparsed cell jcph2055-tbl-0001:row2:col2 = '3.14 (2.91 to 3.37)'
- unparsed cell jcph2055-tbl-0001:row3:col2 = '0.929 (0.0581 to 1.13)'
- unparsed cell jcph2055-tbl-0001:row4:col2 = '2.65 (0.945 to 3.25)'
- unparsed cell jcph2055-tbl-0001:row5:col2 = '0.727 (0.536 to 1.82)'
- unparsed cell jcph2055-tbl-0001:row6:col2 = '0.0955 (0.0591 to 0.109)'
- unparsed cell jcph2055-tbl-0001:row8:col2 = '0.749 (0.656 to 0.838)'
- unparsed cell jcph2055-tbl-0001:row9:col2 = '0.603 (0.448 to 0.854)'
- unparsed cell jcph2055-tbl-0001:row10:col2 = '0.562 (0.0125 to 0.76)'
- unparsed cell jcph2055-tbl-0001:row11:col2 = '−0.384 (−1.59 to −0.112)'
- unparsed cell jcph2055-tbl-0001:row12:col2 = '414 (292 to 4633)'
- unparsed cell jcph2055-tbl-0001:row13:col2 = '0.0986 (0.0585 to 0.13)'
- unparsed cell jcph2055-tbl-0001:row14:col2 = '0.0733 (0.0567 to 0.0988)'
- unparsed cell jcph2055-tbl-0001:row15:col2 = '0.0846 (0.0233 to 0.178)'
- unparsed cell jcph2055-tbl-0001:row16:col2 = '0.16 (0.11 to 9.83)'
- unparsed cell jcph2055-tbl-0001:row17:col2 = '20.1 (8.13 to 300)'
- unparsed cell jcph2055-tbl-0001:row18:col2 = '0.297 (0.267 to 0.317)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bw on cl]` | 0.601 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal possible change in the log of clearance]` | -0.155 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady‐state constant (kss )]` |  | 0.712 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_category]` |  | 0.793 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph2055-tbl-0001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph2055-tbl-0001:row3:col1'] |
| C5_dimension_Q334 | pass | 1 / [time] |  | ['jcph2055-tbl-0001:row7:col1', 'jcph2055-tbl-0001:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jcph2055-tbl-0001:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph2055-tbl-0001:row4:col1'] |
| C5_unit_missing_Q56 | fail | [time] | T max | ['jcph2055-tbl-0001:row11:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.193 | ['jcph2055-tbl-0001:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00804 L/h | ['jcph2055-tbl-0001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.93 L | ['jcph2055-tbl-0001:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.3 L | ['jcph2055-tbl-0001:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Banifrolumab%5D%20Anifrolumab_Almquist2022_reference&body=Drug%3A%20anifrolumab%0ARecord%3A%20Anifrolumab_Almquist2022_reference%0APaper%3A%20Almquist_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:38 UTC</sub>
