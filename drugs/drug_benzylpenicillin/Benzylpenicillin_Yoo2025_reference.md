<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;benzylpenicillin&quot;,&quot;href&quot;:&quot;drugs/drug_benzylpenicillin/&quot;},{&quot;label&quot;:&quot;Yoo_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzylpenicillin_Shah2023_reference&quot;,&quot;label&quot;:&quot;Shah_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# benzylpenicillin — `Benzylpenicillin_Yoo2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="benzylpenicillin" model-id="Benzylpenicillin_Yoo2025_reference" status="needs_review" stale="false" population="healthy adult volunteers" measured-compound="benzylpenicillin" parameterization="mechanistic" topology="2C"></div>

## Citation
Yoo O, Salman S, Hla TK, Osowicki J, Page-Sharp M, Marsh JA et al. Population pharmacokinetics of penicillin G: insights into increased clearance at low concentrations to guide development of improved long-acting formulations for syphilis and prevention of rheumatic fever. Antimicrobial agents and chemotherapy 69(7):e0026925 (2025).
  ·  DOI: [10.1128/aac.00269-25](https://doi.org/10.1128/aac.00269-25)

## Population and dosing

**Population:** healthy adult volunteers · condition healthy · age group adult · n = 72.

**Dosing:** 600 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θ | Q | 13.3 | L/h | 2 |  |
| VC, l.70kg−1 | V1 | 14.6 | l.70kg−1 | 3 | 12 (None% RSE) |
| Vp, l.70kg−1 | V2 | 5.77 | l.70kg−1 | 4 | 11 (None% RSE) |
| Difference,CL,Css3, l.h−1where CLCss3 = CL + Difference,CL,Css3 | CL | 12.1 |  | 19 | 10 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — benzylpenicillin: Q 13.3 L/h, V1 14.6 l.70kg−1, V2 5.77 l.70kg−1, CL 12.1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has benzylpenicillin, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ | `Q30` · Q | 13.3 | L/h | 3.694e-06 | m3/s | L/h | 2 | llm (0.6) | T4:row2:col1, T4:row2:col2 |  |
| VC, l.70kg−1 | `Q63` · V1 | 14.6 | l.70kg−1 | 1.022 | m3 | l/kg | 3 | exact (1) | T4:row3:col1, T4:row3:col2 | 12 (None% RSE) |
| Vp, l.70kg−1 | `Q64` · V2 | 5.77 | l.70kg−1 | 0.4039 | m3 | l/kg | 4 | exact (1) | T4:row5:col1, T4:row5:col2 | 11 (None% RSE) |
| Difference,CL,Css3, l.h−1where CLCss3 = CL + Difference,CL,Css3 | `Q22` · CL | 12.1 |  |  |  |  | 19 | llm_confirmed (0.6) | T4:row7:col1, T4:row7:col2 | 10 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual Variability [shrinkage%]')
- table section iiv: 'VC' routed out of structural estimates ('Interindividual Variability [shrinkage%]')
- table section iiv: 'Vp' routed out of structural estimates ('Interindividual Variability [shrinkage%]')
- table section iiv: 'Difference,CL,Css3' routed out of structural estimates ('Interindividual Variability [shrinkage%]')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual Errors')
- dropped duplicate Q30 ('Q, l.h-1.70kg-1', value '5.34') — already have one for this compound
- dropped duplicate Q63 ('Ratio,Vcwhere Vc,Linf = Vc × Ratio,Vc', value '1.96') — already have one for this compound
- implicit units: 'θ' → L/h (from the popPK convention: "The parameter is an intercompartmental clearance (Q). The paper states 'Allometric scaling... was applied a priori, with")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=benzylpenicillin

**Extraction notes:**
- unparsed cell T4:row2:col3 = '13.31 [12.77–13.92]'
- unparsed cell T4:row3:col3 = '14.63 [13.79–15.54]'
- unparsed cell T4:row4:col3 = '5.33 [4.76–5.92]'
- unparsed cell T4:row5:col3 = '5.77 [5.33–6.25]'
- unparsed cell T4:row6:col3 = '1.96 [1.83–2.11]'
- unparsed cell T4:row7:col3 = '12.24 [7.85–16.92]'
- unparsed cell T4:row9:col1 = '14.4 [6]'
- unparsed cell T4:row9:col3 = '14.3 [11.3–17.5]'
- unparsed cell T4:row10:col1 = '16.9 [22]'
- unparsed cell T4:row10:col3 = '16.7 [12.3–20.5]'
- unparsed cell T4:row11:col1 = '13.7 [15]'
- unparsed cell T4:row11:col3 = '13.6 [10.2–16.4]'
- unparsed cell T4:row12:col1 = '42.9 [69]'
- unparsed cell T4:row12:col3 = '40.0 [13.5–63.5]'
- unparsed cell T4:row14:col1 = '16.5 [10]'
- unparsed cell T4:row14:col3 = '16.5 [15.3–17.7]'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[q]` |  | 5.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ]` | 13.3 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | benzylpenicillin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | benzylpenicillin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T4:row2:col1', 'T4:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T4:row3:col1', 'T4:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T4:row5:col1', 'T4:row5:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['T4:row7:col1', 'T4:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.1 | ['T4:row7:col1', 'T4:row7:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.02e+03 L | ['T4:row3:col1', 'T4:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 404 L | ['T4:row5:col1', 'T4:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzylpenicillin%5D%20Benzylpenicillin_Yoo2025_reference&body=Drug%3A%20benzylpenicillin%0ARecord%3A%20Benzylpenicillin_Yoo2025_reference%0APaper%3A%20Yoo_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_benzylpenicillin/Benzylpenicillin_Yoo2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:01 UTC</sub>
