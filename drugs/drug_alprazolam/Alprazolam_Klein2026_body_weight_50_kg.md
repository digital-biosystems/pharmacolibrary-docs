<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;alprazolam&quot;,&quot;href&quot;:&quot;drugs/drug_alprazolam/&quot;},{&quot;label&quot;:&quot;Klein_2026 \u00b7 body_weight_50_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alprazolam_Klein2026_body_weight_50_kg&quot;,&quot;label&quot;:&quot;Klein_2026_body_weight_50_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alprazolam — `Alprazolam_Klein2026_body_weight_50_kg`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The alprazolam model was held back because its simulated time of peak concentration (4.06813627254509 h) differs from the paper's reported tmax (0.175 h, ratio 23.2465), and the absorption rate constant ka was left at library defaults instead of being reported.**

Simulated as the paper dosed it, the model's tmax is 4.06813627254509 h against an expected 0.175 h, a 23.2465-fold difference beyond tolerance. The absorption rate constant ka (and Tlag) were not extracted from the paper but defaulted, and the absorption input was invented rather than reported; adjudication judged both the defaulted parameters and the invented absorption unacceptable. The record also uses an apparent parameterization assuming F=1 and Fm=1 with no molar correction, and one reported unit could not be converted to SI, so that parameter arrived without an SI value. Extracted — alprazolam: Cmax 38.3 ng/mL, AUC∞ 281 h.ng/mL, AUClast 271 h.ng/mL, CL/F 7.11 L/h, V/F 67.5 L, t1/2z 6.82 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Klein P et al., Pharmacokinetics and tolerability of si…, Epilepsia (2026)
  ·  DOI: [10.1111/epi.18643](https://doi.org/10.1111/epi.18643)

<div class="pk-model-meta" hidden drug="alprazolam" model-id="Alprazolam_Klein2026_body_weight_50_kg" status="needs_review" stale="false" population="adults and adolescents with epilepsy" measured-compound="alprazolam" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max, ng/mL | `Q32` · Cmax | 38.27 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Klein_2026_table_1:row1:col1 | — | not captured |
| AUCinf, h.ng/mL | `Q17` · AUC∞ | 281.1 | h.ng/mL | not captured | h.ng/mL | not captured | llm_confirmed (0.6) | Klein_2026_table_1:row2:col1 | — | not captured |
| AUC0–t, h.ng/mL | `Q74` · AUClast | 270.8 | h.ng/mL | not captured | h.ng/mL | not captured | llm_corrected (0.6) | Klein_2026_table_1:row3:col1 | — | not captured |
| CL/F, L/h | `Q27` · CL/F | 7.114 | L/h | 1.976111111111111e-06 | [l] / [h] | not captured | exact (1.0) | Klein_2026_table_1:row4:col1 | — | not captured |
| Vss/F, L | `Q76` · V/F | 67.53 | L | 0.06753 | [l] | not captured | llm (0.6) | Klein_2026_table_1:row6:col1 | — | not captured |
| t 1/2, h | `Q57` · t1/2z | 6.816 | h | 24537.6 | [h] | not captured | space_fold (0.95) | Klein_2026_table_1:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- unit_dimension_unknown: 'n = 6' (AUC∞)
- unit_dimension_unknown: 'n = 6' (AUClast)
- implicit units: 'AUCinf, h.ng/mL' → h.ng/mL (from the paper text: "The parameter list itself shows 'AUCinf, h.ng/mL = 281.1', and the paper reports AUCinf as plasma exposure of alprazolam")
- implicit units: 'AUC0–t, h.ng/mL' → h.ng/mL (from the paper text: "The parameter list itself shows 'AUC0–t, h.ng/mL = 270.8', consistent with AUC0–t reported in the paper as plasma exposu")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=alprazolam
- population split: 'body weight &lt;50 kg (n = 6)' subgroup of Klein_2026 (paper reports 3 populations: all patients (n = 14), body weight &lt;50 kg (n = 6), body weight ≥50 kg (n = 8))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Klein_2026_table_1:row2:col2 = '278.8 (46.4) a'
- unparsed cell Klein_2026_table_1:row2:col3 = '280.0 (35.8) b'
- unparsed cell Klein_2026_table_1:row4:col2 = '7.174 (46.4) a'
- unparsed cell Klein_2026_table_1:row4:col3 = '7.144 (35.8) b'
- unparsed cell Klein_2026_table_1:row6:col2 = '87.38 (23.8) a'
- unparsed cell Klein_2026_table_1:row6:col3 = '76.82 (29.7) b'
- unparsed cell Klein_2026_table_1:row7:col2 = '8.477 (26.9) a'
- unparsed cell Klein_2026_table_1:row7:col3 = '7.601 (30.1) b'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 6.816 | 6.58 | 0.9654 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Klein_2026_table_1:row2:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Klein_2026_table_1:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Klein_2026_table_1:row1:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Klein_2026_table_1:row7:col1'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Klein_2026_table_1:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Klein_2026_table_1:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.11 L/h | not captured | not captured | ['Klein_2026_table_1:row4:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 67.5 L | not captured | not captured | ['Klein_2026_table_1:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=alprazolam) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 1.954201279184183e-05 | not captured | non-numeric value |
| T1_t_half_terminal | reference | skipped | not captured | 6.580908536070083 | not captured | non-numeric value |
| T1_t_half_terminal | reference | pass | 6.816 | 6.580908536070083 | 0.9655 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 8.477 | 6.580908536070083 | 0.7763 | h→SI vs simulated h |
| T1_tmax | reference | skipped | not captured | 4.06813627254509 | not captured | non-numeric value |
| T1_tmax | reference | fail | 0.175 | 4.06813627254509 | 23.2465 | min→SI vs simulated h |
| T1_tmax | reference | fail | 0.175 | 4.06813627254509 | 23.2465 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_alprazolam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Klein_2026` / `Klein_2026::body_weight_50_kg`)
- model: `../../../knowledgebase/drugs/drug_alprazolam/models/modelica/Alprazolam_Klein2026_body_weight_50_kg.mo`
- deviation: `../../../knowledgebase/drugs/drug_alprazolam/models/modelica/Alprazolam_Klein2026_body_weight_50_kg.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_alprazolam/models/modelica/Alprazolam_Klein2026_body_weight_50_kg.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_modelica.zip" download>Alprazolam_Klein2026_body_weight_50_kg_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_fmi.zip" download>Alprazolam_Klein2026_body_weight_50_kg_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_matlab.zip" download>Alprazolam_Klein2026_body_weight_50_kg_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_matlab_simbio.zip" download>Alprazolam_Klein2026_body_weight_50_kg_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_sbml.zip" download>Alprazolam_Klein2026_body_weight_50_kg_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_cellml.zip" download>Alprazolam_Klein2026_body_weight_50_kg_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg.svg" alt="Alprazolam_Klein2026_body_weight_50_kg diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 2 mg.

<dbs-fmusim paramsurl="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg/Alprazolam_Klein2026_body_weight_50_kg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Alprazolam_Klein2026_body_weight_50_kg_params.json` · controls `Alprazolam_Klein2026_body_weight_50_kg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 18:11 UTC</sub>
