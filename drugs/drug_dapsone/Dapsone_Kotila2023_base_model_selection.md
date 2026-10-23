<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;dapsone&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/&quot;},{&quot;label&quot;:&quot;Kotila_2023 \u00b7 base_model_selection&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapsone_Kotila2023_mean&quot;,&quot;label&quot;:&quot;Kotila_2023_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Kotila2023_median&quot;,&quot;label&quot;:&quot;Kotila_2023_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_median.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Mirochnick2001_reference&quot;,&quot;label&quot;:&quot;Mirochnick_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Mirochnick2001_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dapsone — `Dapsone_Kotila2023_base_model_selection`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (model/paper ratio 1.55).

<div class="pk-model-meta" hidden drug="dapsone" model-id="Dapsone_Kotila2023_base_model_selection" status="needs_review" stale="false" population="healthy Nigerians" measured-compound="dapsone" parameterization="apparent" topology="1C"></div>

## Citation
Kotila OA, Ajayi DT, Masimirembwa C, Thelingwani R, Odetunde A, Falusi AG et al. Non-compartmental and population pharmacokinetic analysis of dapsone in healthy NIGERIANS: A pilot study. British journal of clinical pharmacology 89(11):3454–3459 (2023).
  ·  DOI: [10.1111/bcp.15862](https://doi.org/10.1111/bcp.15862)

## Population and dosing

**Population:** healthy Nigerians · age group adult · n = 11.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Tlag (h) | tlag | 0.40 | h | 10.0 (None% RSE) |
| ka (h−1) | kabs | 1.78 | h−1 |  |
| V/F (L) | V/F | 89.25 | L | 21.6 (32.3% RSE) |
| Cl/F (L/h) | CL/F | 1.32 | L/h | 27.7 (28.9% RSE) |
| sex_on_cl_f | sex_on_cl_f | 0.94 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.538). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 1.55).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — dapsone: tlag 0.4 h, kabs 1.78 h−1, V/F 89.2 L, CL/F 1.32 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 12.: this record has none, the second reading -5.96; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Tlag (h) | `Q83` · tlag | 0.40 | h | 1440 | s | h | exact (1) | T2:row25:col2, T2:row25:col3, T2:row25:col4 | 10.0 (None% RSE) |
| ka (h−1) | `Q49` · kabs | 1.78 | h−1 | 0.0004944 | 1/s | 1/h | exact (1) | T2:row26:col2, T2:row26:col3, T2:row26:col4 |  |
| V/F (L) | `Q76` · V/F | 89.25 | L | 0.08925 | m3 | l | exact (1) | T2:row27:col2, T2:row27:col3, T2:row27:col4 | 21.6 (32.3% RSE) |
| Cl/F (L/h) | `Q27` · CL/F | 1.32 | L/h | 3.667e-07 | m3/s | l/h | exact (1) | T2:row28:col2, T2:row28:col3, T2:row28:col4 | 27.7 (28.9% RSE) |
| sex_on_cl_f | `Q900` · sex_on_cl_f | 0.94 |  |  |  |  |  | T2:row35:col2, T2:row35:col3, T2:row35:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV Tlag' routed out of structural estimates ('Inter-individual variability (IIV, %)')
- table section iiv: 'IIV ka' routed out of structural estimates ('Inter-individual variability (IIV, %)')
- table section iiv: 'IIV V/F' routed out of structural estimates ('Inter-individual variability (IIV, %)')
- table section iiv: 'IIV Cl/F' routed out of structural estimates ('Inter-individual variability (IIV, %)')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual error model')
- column 'base model selection' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '2.' — extend the ontology if this is a real PK parameter (source ['T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4', 'T2:row4:col5'])
- dropped unlinked row (NIL): '3.' — extend the ontology if this is a real PK parameter (source ['T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4', 'T2:row5:col5'])
- dropped unlinked row (NIL): '4.' — extend the ontology if this is a real PK parameter (source ['T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4', 'T2:row6:col5'])
- dropped unlinked row (NIL): '6.' — extend the ontology if this is a real PK parameter (source ['T2:row12:col2', 'T2:row12:col3'])
- dropped unlinked row (NIL): '7.' — extend the ontology if this is a real PK parameter (source ['T2:row13:col2', 'T2:row13:col3'])
- dropped unlinked row (NIL): '8.' — extend the ontology if this is a real PK parameter (source ['T2:row14:col2', 'T2:row14:col3'])
- dropped unlinked row (NIL): '9.' — extend the ontology if this is a real PK parameter (source ['T2:row15:col2', 'T2:row15:col3'])
- dropped unlinked row (NIL): '10.' — extend the ontology if this is a real PK parameter (source ['T2:row16:col2', 'T2:row16:col3'])
- dropped unlinked row (NIL): '11.' — extend the ontology if this is a real PK parameter (source ['T2:row17:col2', 'T2:row17:col3'])
- dropped unlinked row (NIL): '12.' — extend the ontology if this is a real PK parameter (source ['T2:row18:col1', 'T2:row18:col2', 'T2:row18:col3'])
- dropped unlinked row (NIL): '13.' — extend the ontology if this is a real PK parameter (source ['T2:row19:col1', 'T2:row19:col2', 'T2:row19:col3'])
- covariate level 'Sex on Cl/F' → Q900:sex_on_cl_f = 0.94 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'BW on V/F' — extend the ontology if this is a real PK parameter (source ['T2:row36:col2', 'T2:row36:col3', 'T2:row36:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dapsone
- population split: 'base model selection' subgroup of Kotila_2023 (paper reports 3 populations: base model selection, mean, median)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T2:row4:col1 = '1 compartment, with lag time'
- unparsed cell T2:row5:col1 = '1 compartment with transit compartment'
- unparsed cell T2:row6:col1 = '2 compartment, no lag time'
- unparsed cell T2:row26:col1 = 'ka (h−1)'
- transposed table Kotila_2023_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (64 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[12.]` |  | -5.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[4.]` |  | -15.77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[6.]` |  | -0.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[sex_on_cl_f]` | 0.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` |  | 0.94 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 30.23 | 46.87 | 1.55 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row28:col2', 'T2:row28:col3', 'T2:row28:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['T2:row26:col2', 'T2:row26:col3', 'T2:row26:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['T2:row27:col2', 'T2:row27:col3', 'T2:row27:col4'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['T2:row25:col2', 'T2:row25:col3', 'T2:row25:col4'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.32 L/h |  |  | ['T2:row28:col2', 'T2:row28:col3', 'T2:row28:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 89.2 L |  |  | ['T2:row27:col2', 'T2:row27:col3', 'T2:row27:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdapsone%5D%20Dapsone_Kotila2023_base_model_selection&body=Drug%3A%20dapsone%0ARecord%3A%20Dapsone_Kotila2023_base_model_selection%0APaper%3A%20Kotila_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dapsone/Dapsone_Kotila2023_base_model_selection%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:43 UTC</sub>
