<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;certolizumab pegol&quot;,&quot;href&quot;:&quot;drugs/drug_certolizumab_pegol/&quot;},{&quot;label&quot;:&quot;Wade_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CertolizumabPegol_Menshykau2024_reference&quot;,&quot;label&quot;:&quot;Menshykau_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_certolizumab_pegol/CertolizumabPegol_Menshykau2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# certolizumab pegol — `CertolizumabPegol_Wade2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="certolizumab pegol" model-id="CertolizumabPegol_Wade2015_reference" status="needs_review" stale="false" population="adults with Crohn&#39;s disease" measured-compound="certolizumab_pegol" parameterization="apparent" topology="1C"></div>

## Citation
Wade JR, Parker G, Kosutic G, Feagen BG, Sandborn WJ, Laveille C et al. Population pharmacokinetic analysis of certolizumab pegol in patients with Crohn's disease. Journal of clinical pharmacology 55(8):866–874 (2015).
  ·  DOI: [10.1002/jcph.491](https://doi.org/10.1002/jcph.491)

## Population and dosing

**Population:** adults with Crohn's disease · condition Crohn's disease · age group adult · n = &lt;=.

**Dosing:** 100, 200, 400 mg, sc, multiple, every 1440 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| KA (/day), θ1 | kabs | 0.200 | 1/day | 0.01 | 50.1 (None% RSE) |
| CL/F, ATB –ve (L/day), θ2 | CL/F | 0.685 | L/day | 1.6 | 27.5 (None% RSE) |
| V/F (L), θ3 | V/F | 7.61 | L | 1.4 | 16.7 (None% RSE) |
| albumin_1_on_cl_7 | albumin_1_on_cl_7 | -0.0598 |  | 7.1 |  |
| albumin_2_on_cl_8 | albumin_2_on_cl_8 | -0.0177 |  | 18.1 |  |
| BSA on CL, θ9 | CL | 0.715 |  | 5.1 |  |
| BSA on V, θ12 | allometric_exponent | 0.656 |  | 8.1 |  |
| race_b_on_v_14 | race_b_on_v_14 | 0.265 |  | 52.0 |  |
| theta_q61_race | theta_q61_race | -0.250 |  | 15.5 |  |
| theta_q61_race | theta_q61_race | 0.415 |  | 65.0 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — certolizumab pegol: kabs 0.2 1/day, CL/F 0.685 L/day, V/F 7.61 L, CL 0.715, allometric_exponent 0.656.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has certolizumab_pegol, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (/day), θ1 | `Q49` · kabs | 0.200 | 1/day | 2.315e-06 | 1/s | 1/h | 0.01 | llm_confirmed (0.6) | jcph491-tbl-0003:row2:col1, jcph491-tbl-0003:row2:col2 | 50.1 (None% RSE) |
| CL/F, ATB –ve (L/day), θ2 | `Q27` · CL/F | 0.685 | L/day | 7.928e-09 | m3/s | L/h | 1.6 | llm_confirmed (0.6) | jcph491-tbl-0003:row3:col1, jcph491-tbl-0003:row3:col2 | 27.5 (None% RSE) |
| V/F (L), θ3 | `Q76` · V/F | 7.61 | L | 0.00761 | m3 | L | 1.4 | llm_confirmed (0.6) | jcph491-tbl-0003:row5:col1, jcph491-tbl-0003:row5:col2 | 16.7 (None% RSE) |
| albumin_1_on_cl_7 | `Q900` · albumin_1_on_cl_7 | -0.0598 |  |  |  |  | 7.1 |  | jcph491-tbl-0003:row7:col1, jcph491-tbl-0003:row7:col2 |  |
| albumin_2_on_cl_8 | `Q900` · albumin_2_on_cl_8 | -0.0177 |  |  |  |  | 18.1 |  | jcph491-tbl-0003:row8:col1, jcph491-tbl-0003:row8:col2 |  |
| BSA on CL, θ9 | `Q22` · CL | 0.715 |  |  |  |  | 5.1 | llm_confirmed (0.6) | jcph491-tbl-0003:row9:col1, jcph491-tbl-0003:row9:col2 |  |
| BSA on V, θ12 | `Q319` · allometric_exponent | 0.656 |  |  |  |  | 8.1 | llm (0.6) | jcph491-tbl-0003:row12:col1, jcph491-tbl-0003:row12:col2 |  |
| race_b_on_v_14 | `Q900` · race_b_on_v_14 | 0.265 |  |  |  |  | 52.0 |  | jcph491-tbl-0003:row14:col1, jcph491-tbl-0003:row14:col2 |  |
| theta_q61_race | `Q900` · theta_q61_race | -0.250 |  |  |  |  | 15.5 |  | jcph491-tbl-0003:row13:col1, jcph491-tbl-0003:row13:col2 |  |
| theta_q61_race | `Q900` · theta_q61_race | 0.415 |  |  |  |  | 65.0 |  | jcph491-tbl-0003:row15:col1, jcph491-tbl-0003:row15:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F (ATB –ve)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'CL/F (ATB +ve)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V/F' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'KA' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Baseline (ATB –ve)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Baseline (ATB +ve)' routed out of structural estimates ('IIV (%CV)')
- table section residual_error: 'Proportional error (%) (additive on Ln scale), θ6' routed out of structural estimates ('Residual error')
- dropped duplicate Q27 ('CL/F, ATB +ve (L/day), θ5', value '2.74') — already have one for this compound
- dropped unlinked row (NIL): 'Baseline (μg/mL), θ4' — extend the ontology if this is a real PK parameter (source ['jcph491-tbl-0003:row6:col1', 'jcph491-tbl-0003:row6:col2'])
- covariate level 'Albumin(1) on CL, θ7' → Q900:albumin_1_on_cl_7 = -0.0598 (linear_fractional on Q27)
- covariate level 'Albumin(2) on CL, θ8' → Q900:albumin_2_on_cl_8 = -0.0177 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'CRP(1) on CL, θ10' — extend the ontology if this is a real PK parameter (source ['jcph491-tbl-0003:row10:col1', 'jcph491-tbl-0003:row10:col2'])
- dropped unlinked row (NIL): 'CRP(2) on CL, θ11' — extend the ontology if this is a real PK parameter (source ['jcph491-tbl-0003:row11:col1', 'jcph491-tbl-0003:row11:col2'])
- covariate level 'RACE(B) on V, θ14' → Q900:race_b_on_v_14 = 0.265 (linear_fractional on Q27)
- dropped value-less row: 'ATB = 0 in the absence of antibodies, ATB = 1 in the presence of antibodies.'
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['jcph491-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['jcph491-tbl-0003:footnote']); the table cell was unparseable — needs review
- covariate albumin for equation variable from footnote/prose kept as documentation only (['jcph491-tbl-0003:footnote'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['jcph491-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['jcph491-tbl-0003:footnote']); the table cell was unparseable — needs review
- covariate race for equation variable from footnote/prose kept as documentation only (['jcph491-tbl-0003:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['jcph491-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['jcph491-tbl-0003:footnote']); the table cell was unparseable — needs review
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'KA (/day), θ1' → 1/day (from the paper text: "The parameter row explicitly lists the unit as '/day' in the notation 'KA (/day)'. Additionally, first-order absorption ")
- implicit units: 'CL/F, ATB –ve (L/day), θ2' → L/day (from the paper text: "The parameter row explicitly lists the unit as '(L/day)' in the notation 'CL/F, ATB –ve (L/day)'. The text also confirms")
- implicit units: 'V/F (L), θ3' → L (from the paper text: "The parameter row explicitly lists the unit as '(L)' in the notation 'V/F (L)'. The text also confirms V/F values in L, ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=certolizumab_pegol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- molar mass: none found for 'certolizumab_pegol' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.48 (12/25 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[albumin_1_on_cl_7]` | -0.0598 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[albumin_2_on_cl_8]` | -0.0177 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bsa on cl, θ9].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[bsa on v, θ12].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[bsa on v, θ12].parameter_id` | Q319 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f, atb -ve (l/day), θ2].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[race_b_on_v_14]` | 0.265 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[race_j_on_v_13]` |  | -0.250 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` |  | -0.0598 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_race]` | -0.250 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_race]` |  | 0.265 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | certolizumab_pegol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | certolizumab_pegol | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph491-tbl-0003:row3:col1', 'jcph491-tbl-0003:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph491-tbl-0003:row2:col1', 'jcph491-tbl-0003:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jcph491-tbl-0003:row5:col1', 'jcph491-tbl-0003:row5:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['jcph491-tbl-0003:row9:col1', 'jcph491-tbl-0003:row9:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0285 L/h | ['jcph491-tbl-0003:row3:col1', 'jcph491-tbl-0003:row3:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.61 L | ['jcph491-tbl-0003:row5:col1', 'jcph491-tbl-0003:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcertolizumab_pegol%5D%20CertolizumabPegol_Wade2015_reference&body=Drug%3A%20certolizumab_pegol%0ARecord%3A%20CertolizumabPegol_Wade2015_reference%0APaper%3A%20Wade_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_certolizumab_pegol/CertolizumabPegol_Wade2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:59 UTC</sub>
