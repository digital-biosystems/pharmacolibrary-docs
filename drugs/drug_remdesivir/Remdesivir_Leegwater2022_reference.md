<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Leegwater_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Roberts2025_reference&quot;,&quot;label&quot;:&quot;Roberts_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Roberts2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Leegwater2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Leegwater2022_reference" status="needs_review" stale="false" population="hospitalized COVID-19 patients" measured-compound="remdesivir" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Leegwater E, Moes DJAR, Bosma LBE, Ottens TH, van der Meer IM, van Nieuwkoop C et al. Population Pharmacokinetics of Remdesivir and GS-441524 in Hospitalized COVID-19 Patients. Antimicrobial agents and chemotherapy 66(6):e0025422 (2022).
  ·  DOI: [10.1128/aac.00254-22](https://doi.org/10.1128/aac.00254-22)

## Population and dosing

**Population:** hospitalized COVID-19 patients · condition coronavirus disease 2019 (COVID-19) · age group adult · n = &gt; 17.

**Dosing:** 100, 200 mg, iv, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Metabolic CL (L/h) | CL | 207 | L/h | 13 | 38.9 (22% RSE) |
| Renal CL (L/h) | CLR | 20.7 | L/h |  |  |
| V (L) | V | 157 | L | 19 |  |
| CL (L/h) | CL | 27.6 | L/h | 17 |  |
| theta_cl_egfr | theta_cl_egfr | 1.76 |  | 22 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — remdesivir: CL 207 L/h, CLR 20.7 L/h, V 157 L; GS-441524: CL 27.6 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has remdesivir, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Metabolic CL (L/h) | `Q22` · CL | 207 | L/h | 5.75e-05 | m3/s | l/h | 13 | llm_confirmed (0.6) | Leegwater_2022_table_p4_1:row1:col1 | 38.9 (22% RSE) |
| Renal CL (L/h) | `Q26` · CLR | 20.7 | L/h | 5.75e-06 | m3/s | l/h |  | llm_corrected (0.6) | Leegwater_2022_table_p4_1:row2:col1 |  |
| V (L) | `Q61` · V | 157 | L | 0.157 | m3 | l | 19 | exact (1) | Leegwater_2022_table_p4_1:row3:col1 |  |
| CL (L/h) | `Q22` · CL | 27.6 | L/h | 7.667e-06 | m3/s | l/h | 17 | exact (1) | Leegwater_2022_table_p4_1:row5:col1 |  |
| theta_cl_egfr | `Q900` · theta_cl_egfr | 1.76 |  |  |  |  | 22 |  | Leegwater_2022_table_p4_1:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 11 row(s) → GS-441524 (name 11)
- table section iiv: 'Remdesivir nonrenal CL' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Remdesivir V' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'GS-441524 CL' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'GS-441524 V' routed out of structural estimates ('Interindividual variability (%)')
- table section residual_error: 'Remdesivir' routed out of structural estimates ('Residual variability')
- table section residual_error: 'GS-441524' routed out of structural estimates ('Residual variability')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remdesivir
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles: 4 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 4 linked by role; re-tagged parent→GS-441524 ×5
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- table Leegwater_2022_table_p4_1: ambiguous_numeric_format
- table Leegwater_2022_table_p4_1: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[egfr_on_cl]` | 0.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[metabolic cl].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[renal cl]` | 20.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal cl]` |  | 20.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_egfr]` |  | 0.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 834 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  | 834 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | remdesivir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | remdesivir | unknown | mismatch |

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
| C1_half_life_beta | pass | 0.48 | 0.526 | 1.096 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Leegwater_2022_table_p4_1:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Leegwater_2022_table_p4_1:row5:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  |  |  | ['Leegwater_2022_table_p4_1:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Leegwater_2022_table_p4_1:row3:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 207 |  |  | ['Leegwater_2022_table_p4_1:row1:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 207 L/h |  |  | ['Leegwater_2022_table_p4_1:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 27.6 L/h |  |  | ['Leegwater_2022_table_p4_1:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 157 L |  |  | ['Leegwater_2022_table_p4_1:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremdesivir%5D%20Remdesivir_Leegwater2022_reference&body=Drug%3A%20remdesivir%0ARecord%3A%20Remdesivir_Leegwater2022_reference%0APaper%3A%20Leegwater_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remdesivir/Remdesivir_Leegwater2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 12:38 UTC</sub>
