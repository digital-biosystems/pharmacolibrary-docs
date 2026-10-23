<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;pregabalin&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/&quot;},{&quot;label&quot;:&quot;Chan_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pregabalin_Bae2016_reference&quot;,&quot;label&quot;:&quot;Bae_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pregabalin — `Pregabalin_Chan2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-07 07:16 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Only volume was extracted — no clearance; v/F, kabs and tlag have no unit.

<div class="pk-model-meta" hidden drug="pregabalin" model-id="Pregabalin_Chan2021_reference" status="needs_review" stale="true" population="children (4–16 years) and adults with focal onset seizures" measured-compound="pregabalin" parameterization="apparent" topology="1C"></div>

## Citation
Chan PLS, Marshall SF, McFadyen L, Liu J. Pregabalin Population Pharmacokinetic and Exposure-Response Analyses for Focal Onset Seizures in Children (4-16 years) and Adults, to Support Dose Recommendations in Children. Clinical pharmacology and therapeutics 110(1):132–140 (2021).
  ·  DOI: [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132)

## Population and dosing

**Population:** children (4–16 years) and adults with focal onset seizures · condition focal onset seizures · age group mixed · n = &lt;null&gt;.

**Dosing:** 150, 600 mg/day, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| body_weight_on_cl_fd | body_weight_on_cl_fd | 0.48 |  |
| sex_on_cl_fe | sex_on_cl_fe | 0.88 |  |
| V/F | V/F | 10.3 | L/kg |
| body_weight_on_v_fd | body_weight_on_v_fd | 0.64 |  |
| ka fastedf | t1/2ka | 7.44 |  |
| T lag | tlag | 0.31 | h |
| k a | kabs | 103 | 1/h |
| theta_q44_sex | theta_q44_sex | 0.79 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.368). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance; v/F, kabs and tlag have no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — pregabalin: V/F 10.3, kabs 7.44, tlag 0.31.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of body_weight_on_cl_fd: this record has 0.48, the second reading none; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| body_weight_on_cl_fd | `Q900` · body_weight_on_cl_fd | 0.48 |  |  |  |  |  | cpt2132-tbl-0002:row3:col2 |
| sex_on_cl_fe | `Q900` · sex_on_cl_fe | 0.88 |  |  |  |  |  | cpt2132-tbl-0002:row4:col2 |
| V/F | `Q76` · V/F | 10.3 | L/kg | 0.721 | m3 | L | exact (1) | cpt2132-tbl-0002:row6:col2, cpt2132-tbl-0002:row15:col2 |
| body_weight_on_v_fd | `Q900` · body_weight_on_v_fd | 0.64 |  |  |  |  |  | cpt2132-tbl-0002:row8:col2 |
| ka fastedf | `Q95` · t1/2ka | 7.44 |  |  |  |  | llm_corrected (0.6) | cpt2132-tbl-0002:row9:col1, cpt2132-tbl-0002:row9:col2 |
| T lag | `Q83` · tlag | 0.31 | h | 1116 | s | h | space_fold (0.95) | cpt2132-tbl-0002:row12:col2 |
| k a | `Q49` · kabs | 103 | 1/h | 0.02861 | 1/s | 1/h | space_fold (0.95) | cpt2132-tbl-0002:row16:col2 |
| theta_q44_sex | `Q900` · theta_q44_sex | 0.79 |  |  |  |  |  | cpt2132-tbl-0002:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Model parameter' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row2:col2', 'cpt2132-tbl-0002:row2:col3'])
- covariate level 'Body weight on CL/Fd' → Q900:body_weight_on_cl_fd = 0.48 (linear_fractional on the model)
- covariate level 'Sex on CL/Fe' → Q900:sex_on_cl_fe = 0.88 (linear_fractional on the model)
- dropped unlinked row (NIL): 'CLcr breakpoint' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row5:col1', 'cpt2132-tbl-0002:row5:col2'])
- covariate level 'Body weight on V/Fd' → Q900:body_weight_on_v_fd = 0.64 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Food: fedg' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row10:col2'])
- dropped unlinked row (NIL): 'Food: unknowng' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row11:col2'])
- dropped unlinked row (NIL): 'Food: fedh' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row13:col2'])
- dropped value-less row: 'Interindividual variability'
- dropped duplicate Q49 ('ka: fed', value '25.5') — already have one for this compound
- dropped unlinked row (NIL): 'Phase III adult' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row19:col2', 'cpt2132-tbl-0002:row23:col1', 'cpt2132-tbl-0002:row23:col2'])
- dropped unlinked row (NIL): 'Phase I pediatric' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row20:col2'])
- dropped unlinked row (NIL): 'Phase III pediatric' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row21:col2', 'cpt2132-tbl-0002:row24:col1', 'cpt2132-tbl-0002:row24:col2'])
- covariate effect for Q44 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'V/F' → L/kg (from the paper text: "The text states: 'The apparent volume of distribution (V/F) following oral administration is ~ 0.5 L/kg.' This defines t")
- implicit units: 'ka fastedf' — the LLM proposed '1/h', whose dimension does not fit Q95; left unset
- implicit units: 'T lag' → h (from the paper text: "The text states: 'limited number of observations prior to the estimated T lag (~ 0.32 hours).' This confirms the unit of")
- implicit units: 'k a' → 1/h (from the popPK convention: 'The parameter is identified as an absorption rate constant (ka). In population PK, first-order rate constants are expres')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pregabalin
- skipped review gap-fill of CL from Bae_2016: its label names a different analyte ('apparent') — 'u 1 Typical value of apparent clearance (L/h)'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell cpt2132-tbl-0002:row3:col1 = '0.52 [4.72]'
- unparsed cell cpt2132-tbl-0002:row4:col1 = '0.92 [2.00]'
- unparsed cell cpt2132-tbl-0002:row6:col1 = '39.8 [1.62] L'
- unparsed cell cpt2132-tbl-0002:row7:col1 = '0.83 [2.48]'
- unparsed cell cpt2132-tbl-0002:row8:col1 = '0.70 [4.59]'
- unparsed cell cpt2132-tbl-0002:row10:col1 = '0.71 [2.39]'
- unparsed cell cpt2132-tbl-0002:row11:col1 = '1.22 [3.26]'
- unparsed cell cpt2132-tbl-0002:row12:col1 = '0.32 [1.52] hr'
- unparsed cell cpt2132-tbl-0002:row13:col1 = '0.43 [10.5]'
- unparsed cell cpt2132-tbl-0002:row14:col2 = '20.2 [18.7]%'
- unparsed cell cpt2132-tbl-0002:row14:col4 = '27.4%'
- unparsed cell cpt2132-tbl-0002:row15:col1 = '12.8 [21.7]%'
- unparsed cell cpt2132-tbl-0002:row15:col3 = '60.7%'
- unparsed cell cpt2132-tbl-0002:row16:col1 = '117 [13.9]%'
- unparsed cell cpt2132-tbl-0002:row16:col3 = '46.2%'
- unparsed cell cpt2132-tbl-0002:row17:col1 = '57.9 [74.4]%'
- unparsed cell cpt2132-tbl-0002:row17:col3 = '89.6%'
- unparsed cell cpt2132-tbl-0002:row18:col2 = '16.6 [10.1]%'
- unparsed cell cpt2132-tbl-0002:row18:col4 = '8.2%'
- unparsed cell cpt2132-tbl-0002:row19:col1 = '28.9 [7.49]%'
- unparsed cell cpt2132-tbl-0002:row19:col3 = '13.5%'
- unparsed cell cpt2132-tbl-0002:row20:col1 = '29.8 [22.7]%'
- unparsed cell cpt2132-tbl-0002:row20:col3 = '11.4%'
- unparsed cell cpt2132-tbl-0002:row21:col1 = '35.0 [21.0]%'
- unparsed cell cpt2132-tbl-0002:row21:col3 = '10.3%'
- unparsed cell cpt2132-tbl-0002:row22:col4 = '5.15%'
- unparsed cell cpt2132-tbl-0002:row23:col3 = '13.5%'
- unparsed cell cpt2132-tbl-0002:row24:col3 = '10.3%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.368 (7/19 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[body_weight_on_cl_fd]` | 0.48 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_on_v_fd]` | 0.64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[food: fedg]` |  | 0.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 103 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka fastedf].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss-120b` | `parameters[sex_on_cl_fe]` | 0.88 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_body_weight]` |  | 0.48 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_sex]` |  | 0.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q44_sex]` | 0.79 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_body_weight]` |  | 0.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_sex]` |  | 0.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt2132-tbl-0002:row16:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['cpt2132-tbl-0002:row6:col2', 'cpt2132-tbl-0002:row15:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['cpt2132-tbl-0002:row12:col2'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['cpt2132-tbl-0002:row9:col1', 'cpt2132-tbl-0002:row9:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 721 L | ['cpt2132-tbl-0002:row6:col2', 'cpt2132-tbl-0002:row15:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpregabalin%5D%20Pregabalin_Chan2021_reference&body=Drug%3A%20pregabalin%0ARecord%3A%20Pregabalin_Chan2021_reference%0APaper%3A%20Chan_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pregabalin/Pregabalin_Chan2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:16 UTC</sub>
