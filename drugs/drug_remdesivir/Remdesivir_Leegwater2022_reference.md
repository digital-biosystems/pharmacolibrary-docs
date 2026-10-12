<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Leegwater_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Humeniuk2021_reference&quot;,&quot;label&quot;:&quot;Humeniuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Humeniuk2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remdesivir_Morrisette2020_reference&quot;,&quot;label&quot;:&quot;Morrisette_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Morrisette2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Leegwater2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — remdesivir: CL 152 L/h, CLR 20.7 L/h, V 834 L; GS-441524: CL 20.7 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has remdesivir, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:27.554897+00:00) predates the upstream re-run (2026-10-07 16:33:23.023101+00:00). Current validate status: `extracted`.

## Citation
Leegwater E et al., Population Pharmacokinetics of Remdesiv…, Antimicrobial agents and ch… (2022)
  ·  DOI: [10.1128/aac.00254-22](https://doi.org/10.1128/aac.00254-22)

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Leegwater2022_reference" status="extracted" stale="true" population="hospitalized COVID-19 patients with hypoxemia" measured-compound="remdesivir" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Metabolic CL (L/h) | `Q370` · CLfm | 152 | L/h | 4.222222222222222e-05 | [l] / [h] | not captured | exact (1.0) | T2:row4:col1, T2:row4:col2, T2:row4:col4, T2:row4:col5 | — | not captured |
| Renal CL (L/h) | `Q26` · CLR | 20.7 | L/h | 5.75e-06 | [l] / [h] | not captured | llm_corrected (0.6) | T2:row5:col1 | — | not captured |
| V (L) | `Q61` · V | 834 | L | 0.834 | [l] | not captured | exact (1.0) | T2:row6:col1, T2:row6:col2, T2:row6:col4, T2:row6:col5, T2:row11:col1, T2:row11:col2, T2:row11:col4, T2:row11:col5 | — | not captured |
| CL (L/h) | `Q22` · CL | 20.7 | L/h | 5.75e-06 | [l] / [h] | not captured | exact (1.0) | T2:row9:col1, T2:row9:col2, T2:row9:col4, T2:row9:col5 | — | 38.9 (None% RSE) |
| egfr_on_cl | `Q900` · egfr_on_cl | 0.31 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row10:col1, T2:row10:col2, T2:row10:col4, T2:row10:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Remdesivir nonrenal CL' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Remdesivir V' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'GS-441524 CL' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'GS-441524 V' routed out of structural estimates ('Interindividual variability (%)')
- table section residual_error: 'Remdesivir' routed out of structural estimates ('Residual variability')
- table section residual_error: 'GS-441524' routed out of structural estimates ('Residual variability')
- covariate level 'eGFR on CL' → Q900:egfr_on_cl = 0.31 (linear_fractional on Q370)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remdesivir
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 17 linked by role; re-tagged parent→GS-441524 ×26
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[egfr_on_cl]` | 0.31 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[metabolic cl].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[renal cl]` | 20.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal cl]` | not captured | 20.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_egfr]` | not captured | 0.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 834 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | not captured | 834 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | remdesivir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | remdesivir | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 20.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 20.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[metabolic cl]` | 152 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[metabolic cl]` | not captured | 152 | only_one_extracted |
| `gpt-oss:120b` | `parameters[renal cl]` | 20.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[renal cl]` | not captured | 20.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_egfr]` | 0.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q22_egfr]` | not captured | 0.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | 834 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 834 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | remdesivir | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | remdesivir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col4', 'T2:row9:col5'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row5:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5', 'T2:row11:col1', 'T2:row11:col2', 'T2:row11:col4', 'T2:row11:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 20.7 | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col4', 'T2:row9:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 20.7 L/h | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col4', 'T2:row9:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 834 L | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5', 'T2:row11:col1', 'T2:row11:col2', 'T2:row11:col4', 'T2:row11:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_remdesivir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Leegwater_2022` / `Leegwater_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Leegwater2022_reference/Remdesivir_Leegwater2022_reference_matlab.zip" download>Remdesivir_Leegwater2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Leegwater2022_reference/Remdesivir_Leegwater2022_reference_matlab_simbio.zip" download>Remdesivir_Leegwater2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Leegwater2022_reference/Remdesivir_Leegwater2022_reference_sbml.zip" download>Remdesivir_Leegwater2022_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Leegwater2022_reference/Remdesivir_Leegwater2022_reference_cellml.zip" download>Remdesivir_Leegwater2022_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:33 UTC</sub>
