<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;sodium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/&quot;},{&quot;label&quot;:&quot;Lowenthal_1974 \u00b7 four_normal_subjects&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium salicylate — `SodiumSalicylate_Lowenthal1974_four_normal_subjects`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571), gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 5, model 1.37).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — sodium salicylate: V 5.43 liter, t1/2β 247 min, CL 0.04 L/h/kg, kabs 0.64 1/h, tlag 0.42 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sodium salicylate, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:40:31.533864+00:00) predates the upstream re-run (2026-10-07 06:13:56.554236+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `sodium salicylate`, measured `salicylic acid`.

## Citation
Lowenthal DT et al., Kinetics of salicylate elimination by a…, The Journal of clinical inv… (1974)
  ·  DOI: [10.1172/JCI107865](https://doi.org/10.1172/JCI107865)

<div class="pk-model-meta" hidden drug="sodium salicylate" model-id="SodiumSalicylate_Lowenthal1974_four_normal_subjects" status="needs_review" stale="true" population="anephric patients" measured-compound="salicylic acid" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vₐ, liter | `Q61` · V | 5.43 | liter | 0.00543 | [l] | not captured | llm (0.6) | Lowenthal_1974_table_3:row5:col2 | — | not captured |
| tₔ (β), min | `Q60` · t1/2β | 247 | min | 14820.0 | [min] | not captured | llm (0.6) | Lowenthal_1974_table_3:row7:col2 | — | not captured |
| lag time | `Q83` · tlag | 0.42 | h | 1512.0 | h | not captured | review_gapfill (0.7) | Somani_2016:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('Vₐ (area), liter', value '9.18') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylic acid
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'four normal subjects*' subgroup of Lowenthal_1974 (paper reports 3 populations: four normal subjects*, patients, six anephric patients)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Somani_2016's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Lowenthal_1974_table_3:row5:col3 = '&gt; 0.7'
- unparsed cell Lowenthal_1974_table_3:row6:col3 = '&gt; 0.8'
- unparsed cell Lowenthal_1974_table_3:row7:col3 = '&gt; 0.1'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (4/7 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[lag time]` | 0.42 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sodium salicylate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | salicylic acid | unknown | mismatch |
| `gpt-oss:120b` | `parameters[clearance]` | 0.04 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 0.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | sodium salicylate | sodium_salicylate | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | salicylic acid | sodium_salicylate | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_3:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lowenthal_1974_table_3:row5:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Somani_2016:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.43 L | not captured | not captured | ['Lowenthal_1974_table_3:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=salicylic acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 5.0 | 1.3700019176854161 | 0.274 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.266666666666667 | 1.3700019176854161 | 0.2601 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sodium_salicylate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lowenthal_1974` / `Lowenthal_1974::four_normal_subjects`)
- model: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_four_normal_subjects.mo`
- deviation: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_four_normal_subjects.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_four_normal_subjects.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_modelica.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_fmi.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab_simbio.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_sbml.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects/SodiumSalicylate_Lowenthal1974_four_normal_subjects_cellml.zip" download>SodiumSalicylate_Lowenthal1974_four_normal_subjects_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:13 UTC</sub>
