<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefotaxime&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/&quot;},{&quot;label&quot;:&quot;Trang_1985 \u00b7 noncompartmental&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefotaxime_Guerrini1986_reference&quot;,&quot;label&quot;:&quot;Guerrini_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Guerrini1986_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_dctx&quot;,&quot;label&quot;:&quot;Trang_1985_dctx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_noncompartmental&quot;,&quot;label&quot;:&quot;Trang_1985_noncompartmental&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cefotaxime_Branger2018_reference&quot;,&quot;label&quot;:&quot;B\u00e9ranger_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Branger2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefotaxime — `Cefotaxime_Trang1985_noncompartmental`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 0.8, model 0.562).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — cefotaxime: kel 0.954 1/h, t1/2z 0.81 h, Vss 0.361 liter/kg, CL 0.289 L/h/kg, CLR 0.174 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of mean ± sda auc: this record has none, the second reading 82.4; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Trang JM et al., Cefotaxime and desacetylcefotaxime phar…, Antimicrobial agents and ch… (1985)
  ·  DOI: [10.1128/AAC.28.6.791](https://doi.org/10.1128/AAC.28.6.791)

<div class="pk-model-meta" hidden drug="cefotaxime" model-id="Cefotaxime_Trang1985_noncompartmental" status="needs_review" stale="false" population="infants and children with meningitis" measured-compound="cefotaxime" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean ± SDᵃ Kₑₗ or 1/MRT (1/h) | `Q47` · kel | 0.954 | 1/h | 0.000265 | 1/h | not captured | llm_confirmed (0.6) | Trang_1985_table_3:row0:col2 | — | not captured |
| Mean ± SDᵃ t½ᵃ (h) | `Q57` · t1/2z | 0.81 | h | 2916.0 | [h] | not captured | llm (0.6) | Trang_1985_table_3:row1:col2 | — | not captured |
| Mean ± SDᵃ V or Vₛₛ (liter/kg) | `Q65` · Vss | 0.361 | liter/kg | 0.02527 | [l] / [kg] | not captured | llm_confirmed (0.6) | Trang_1985_table_3:row2:col2 | — | not captured |
| Mean ± SDᵃ CL (liter/h per kg) | `Q22` · CL | 0.289 | L/h/kg | 5.619444444444444e-06 | L/h | not captured | llm_confirmed (0.6) | Trang_1985_table_3:row3:col2 | — | not captured |
| Mean ± SDᵃ CLᴿ (liter/h per kg) | `Q26` · CLR | 0.174 | L/h/kg | 3.3833333333333337e-06 | L/h | not captured | llm_confirmed (0.6) | Trang_1985_table_3:row4:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- column 'noncompartmental' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'liter/h per kg' (CL)
- unit_dimension_unknown: 'liter/h per kg' (CLR)
- dropped value-less row: 'K, c'
- NIL: refused to back-fill base 'V' from footnote/prose loose number 0.361 (source ['tab_2:footnote']); the table cell was unparseable — needs review
- implicit units: 'Mean ± SDᵃ Kₑₗ or 1/MRT (1/h)' → 1/h (from the paper text: "The unit '1/h' is explicitly provided in the parameter label text 'Mean ± SDᵃ Kₑₗ or 1/MRT (1/h) = 0.954' and confirmed ")
- implicit units: 'Mean ± SDᵃ CL (liter/h per kg)' → L/h/kg (from the paper text: "The unit 'liter/h per kg' is explicitly provided in the parameter label text 'Mean ± SDᵃ CL (liter/h per kg) = 0.289' an")
- implicit units: 'Mean ± SDᵃ CLᴿ (liter/h per kg)' → L/h/kg (from the paper text: "The unit 'liter/h per kg' is explicitly provided in the parameter label text 'Mean ± SDᵃ CLᴿ (liter/h per kg) = 0.174' a")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefotaxime
- population split: 'noncompartmental' subgroup of Trang_1985 (paper reports 3 populations: dctx, model-dependent, noncompartmental)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_2: grid unusable → re-running vision table extraction for Trang_1985
- transposed table Trang_1985_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Trang_1985_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[mean ± sda auc]` | not captured | 82.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean ± sda clr].value` | 0.174 | 0.363 | mismatch |
| `gpt-oss-120b` | `parameters[mean ± sda u]` | not captured | 205.7 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 0.8 | 0.866 | 1.0825 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Trang_1985_table_3:row3:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Trang_1985_table_3:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Trang_1985_table_3:row0:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Trang_1985_table_3:row1:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Trang_1985_table_3:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.289 | not captured | not captured | ['Trang_1985_table_3:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 20.2 L/h | not captured | not captured | ['Trang_1985_table_3:row3:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 25.3 L | not captured | not captured | ['Trang_1985_table_3:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=cefotaxime) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 0.8 | 0.5620527908168855 | 0.7026 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 2.1 | 0.5620527908168855 | 0.2676 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.8 | 0.5620527908168855 | 0.7026 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.1 | 0.5620527908168855 | 0.2676 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.1 | 0.5620527908168855 | 0.2676 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cefotaxime/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Trang_1985` / `Trang_1985::noncompartmental`)
- model: `../../../knowledgebase/drugs/drug_cefotaxime/models/modelica/Cefotaxime_Trang1985_noncompartmental.mo`
- deviation: `../../../knowledgebase/drugs/drug_cefotaxime/models/modelica/Cefotaxime_Trang1985_noncompartmental.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_cefotaxime/models/modelica/Cefotaxime_Trang1985_noncompartmental.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_modelica.zip" download>Cefotaxime_Trang1985_noncompartmental_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_fmi.zip" download>Cefotaxime_Trang1985_noncompartmental_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_matlab.zip" download>Cefotaxime_Trang1985_noncompartmental_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_matlab_simbio.zip" download>Cefotaxime_Trang1985_noncompartmental_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_sbml.zip" download>Cefotaxime_Trang1985_noncompartmental_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_cellml.zip" download>Cefotaxime_Trang1985_noncompartmental_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental.svg" alt="Cefotaxime_Trang1985_noncompartmental diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 3500 mg infusion over 10 min, single dose. Dose in the paper: 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental/Cefotaxime_Trang1985_noncompartmental_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Cefotaxime_Trang1985_noncompartmental_params.json` · controls `Cefotaxime_Trang1985_noncompartmental_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:17 UTC</sub>
