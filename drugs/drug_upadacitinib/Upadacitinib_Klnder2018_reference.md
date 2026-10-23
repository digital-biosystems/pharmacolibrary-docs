<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;upadacitinib&quot;,&quot;href&quot;:&quot;drugs/drug_upadacitinib/&quot;},{&quot;label&quot;:&quot;Kl\u00fcnder_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# upadacitinib — `Upadacitinib_Klnder2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL_ratio has no unit.

<div class="pk-model-meta" hidden drug="upadacitinib" model-id="Upadacitinib_Klnder2018_reference" status="needs_review" stale="false" population="healthy subjects and subjects with rheumatoid arthritis" measured-compound="upadacitinib" parameterization="apparent" topology="2C"></div>

## Citation
Klünder B, Mohamed MF, Othman AA. Population Pharmacokinetics of Upadacitinib in Healthy Subjects and Subjects with Rheumatoid Arthritis: Analyses of Phase I and II Clinical Trials. Clinical pharmacokinetics 57(8):977–988 (2018).
  ·  DOI: [10.1007/s40262-017-0605-6](https://doi.org/10.1007/s40262-017-0605-6)

## Population and dosing

**Population:** healthy subjects and subjects with rheumatoid arthritis · condition rheumatoid arthritis · age group adult · n = 573.

**Dosing:** 1, 3, 24, 48 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 39.7 | L/h |
| Vc/F (L) | V1/F | 146 | L |
| Ka (1/h)b | kabs | 12.3 | 1/h |
| ALAG1 (h) | tlag | 0.48 | h |
| Vp/F (L) | V2/F | 64.3 | L |
| Q/F (L/h) | Q/F | 3.23 | L/h |
| Ratio of CL/F in RA patients compared with healthy subjects (θ1)c | CL_ratio | 0.76 |  |
| theta_q314_crcl_power | theta_q314_crcl_power | 0.32 |  |
| theta_q319_body_weight_power | theta_q319_body_weight_power | 0.50 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL_ratio has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — upadacitinib: CL/F 39.7 L/h, V1/F 146 L, kabs 12.3 1/h, tlag 0.48 h, V2/F 64.3 L, Q/F 3.23 L/h, CL_ratio 0.76.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[alag1].value`: this record has 0.48, the second reading 0.47; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 39.7 | L/h | 1.103e-05 | m3/s | l/h | exact (1) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col3, Tab3:row2:col4 |
| Vc/F (L) | `Q290` · V1/F | 146 | L | 0.146 | m3 | l | exact (1) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Tab3:row3:col4 |
| Ka (1/h)b | `Q49` · kabs | 12.3 | 1/h | 0.003417 | 1/s | 1/h | space_fold (0.95) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4 |
| ALAG1 (h) | `Q83` · tlag | 0.48 | h | 1728 | s | h | llm (0.6) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4 |
| Vp/F (L) | `Q82` · V2/F | 64.3 | L | 0.0643 | m3 | l | exact (1) | Tab3:row6:col1, Tab3:row6:col2, Tab3:row6:col3, Tab3:row6:col4 |
| Q/F (L/h) | `Q69` · Q/F | 3.23 | L/h | 8.972e-07 | m3/s | l/h | exact (1) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col3, Tab3:row7:col4 |
| Ratio of CL/F in RA patients compared with healthy subjects (θ1)c | `Q31` · CL_ratio | 0.76 |  |  |  |  | llm_corrected (0.6) | Tab3:row15:col1, Tab3:row15:col2, Tab3:row15:col3, Tab3:row15:col4 |
| theta_q314_crcl_power | `Q900` · theta_q314_crcl_power | 0.32 |  |  |  |  |  | Tab3:row17:col1, Tab3:row17:col2, Tab3:row17:col3, Tab3:row17:col4 |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.50 |  |  |  |  |  | Tab3:row19:col1, Tab3:row19:col2, Tab3:row19:col3, Tab3:row19:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'ISVCL in healthy subjects (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1', 'Tab3:row8:col2', 'Tab3:row8:col3', 'Tab3:row8:col4'])
- dropped unlinked row (NIL): 'ISVCL in subjects with RA (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2', 'Tab3:row9:col3', 'Tab3:row9:col4'])
- routed 'ISVVc in healthy subjects (%)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ISVVc in subjects with RA (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2', 'Tab3:row11:col3', 'Tab3:row11:col4'])
- dropped diagnostic row 'ISVKa (%)' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped duplicate Q31 ('Ratio of CL/F in females compared with males (θ2)c', value '0.86') — already have one for this compound
- dropped unlinked row (NIL): 'Ratio of Vc/F in females compared with males (θ4)d' — extend the ontology if this is a real PK parameter (source ['Tab3:row18:col1', 'Tab3:row18:col2', 'Tab3:row18:col3', 'Tab3:row18:col4'])
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Ka (1/h)b' → 1/h (from the paper text: "The text states: '...mean absorption time were ... 0.08 (0.04–0.12) h, respectively', and earlier lists 'absorption lag ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=upadacitinib

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag1].value` | 0.48 | 0.47 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` | 39.7 | 37.8 | mismatch |
| `gpt-oss-120b` | `parameters[isvvc in healthy subjects]` |  | 10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka (1/h)b].value` | 12.3 | 8.37 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].value` | 3.23 | 2.79 | mismatch |
| `gpt-oss-120b` | `parameters[ratio of cl/f in ra patients compared with healthy subjects (θ1)c].value` | 0.76 | 0.7 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_crcl_power]` |  | 0.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_crcl_power]` | 0.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight_power].value` | 0.50 | 0.36 | mismatch |
| `gpt-oss-120b` | `parameters[vc/f].value` | 146 | 139 | mismatch |
| `gpt-oss-120b` | `parameters[vp/f].value` | 64.3 | 53.9 | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row7:col1', 'Tab3:row7:col2', 'Tab3:row7:col3', 'Tab3:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  | ['Tab3:row15:col1', 'Tab3:row15:col2', 'Tab3:row15:col3', 'Tab3:row15:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 39.7 L/h | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Tab3:row2:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 146 L | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Tab3:row3:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 64.3 L | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3', 'Tab3:row6:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bupadacitinib%5D%20Upadacitinib_Klnder2018_reference&body=Drug%3A%20upadacitinib%0ARecord%3A%20Upadacitinib_Klnder2018_reference%0APaper%3A%20Kl%C3%BCnder_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_upadacitinib/Upadacitinib_Klnder2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:01 UTC</sub>
