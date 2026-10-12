<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;asunaprevir&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/&quot;},{&quot;label&quot;:&quot;Zhu_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asunaprevir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asunaprevir_Zhu2018_reference&quot;,&quot;label&quot;:&quot;Zhu_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# asunaprevir — `Asunaprevir_Zhu2018_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Kabs has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — asunaprevir: CL/F 50.8 L/h, V1/F 47.6 L, kabs 0.484, Q/F 21.6 L/h, V2/F 561 L, D1 1.12 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 14:32:43.663445+00:00) predates the upstream re-run (2026-10-07 15:17:41.068364+00:00). Current validate status: `extracted`.

## Citation
Zhu L et al., Population Pharmacokinetic Analysis of…, Infectious diseases and the… (2018)
  ·  DOI: [10.1007/s40121-018-0197-y](https://doi.org/10.1007/s40121-018-0197-y)

<div class="pk-model-meta" hidden drug="asunaprevir" model-id="Asunaprevir_Zhu2018_reference" status="extracted" stale="true" population="adults with chronic HCV infection" measured-compound="asunaprevir" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 50.8 | L/h | 1.411111111111111e-05 | [l] / [h] | 4.1 | exact (1.0) | Tab2:row2:col1, Tab2:row2:col2 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 47.6 | L | 0.0476 | [l] | 5.3 | exact (1.0) | Tab2:row3:col1, Tab2:row3:col2 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.484 | 1/h | 0.00013444444444444444 | 1/h | 0.036 | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 21.6 | L/h | 6e-06 | [l] / [h] | 1.9 | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 561 | L | 0.561 | [l] | 45 | exact (1.0) | Tab2:row6:col1, Tab2:row6:col2 | — | not captured |
| D1 (h) | `Q310` · D1 | 1.12 | h | 4032.0000000000005 | [h] | 0.07 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2 | — | not captured |
| Relative F1 ~ 600 mg | `Q87` · Frel | 0.65 | not captured | not captured | not captured | 0.09 | llm_corrected (0.6) | Tab2:row23:col1, Tab2:row23:col2 | — | not captured |
| theta_q64_weight_power | `Q900` · theta_q64_weight_power | 1.42 | not captured | not captured | not captured | 0.416 | not captured (not captured) | Tab2:row14:col1, Tab2:row14:col2 | — | not captured |
| theta_q22_race_power | `Q900` · theta_q22_race_power | 0.0386 | not captured | not captured | not captured | 0.071 | not captured (not captured) | Tab2:row15:col1, Tab2:row15:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'ε' routed out of structural estimates ('Residual errorc')
- dropped duplicate Q27 ('CL/F ~ induction', value '0.355') — already have one for this compound
- dropped value-less row: 'Relative F ~ tablet'
- dropped duplicate Q310 ('D1 ~ tablet', value '0.864') — already have one for this compound
- dropped value-less row: 'CL ~ age'
- dropped value-less row: 'Vc ~ female'
- dropped value-less row: 'CL ~ female'
- dropped value-less row: 'CL ~ Asian Race'
- dropped value-less row: 'CL ~ Other Race'
- dropped value-less row: 'CL ~ baseline AST'
- dropped value-less row: 'CL ~ AST'
- dropped value-less row: 'Vc ~ cirrhosis'
- dropped value-less row: 'CL ~ cirrhosis'
- dropped value-less row: 'Ka ~ tablet'
- dropped duplicate Q27 ('CL/F', value '0.168') — already have one for this compound
- dropped duplicate Q290 ('Vc/F', value '2.19') — already have one for this compound
- dropped duplicate Q49 ('Ka', value '0.300') — already have one for this compound
- dropped duplicate Q82 ('Vp/F', value '0.777') — already have one for this compound
- dropped value-less row: 'aEstimates referenced to a non-cirrhotic, male, 70-kg, 55-year-old White subject with baseline AST of 60 IU/L receiving the soft-gel prior to induction'
- dropped value-less row: 'bBootstrap statistics derived from 449 out of 500 samples. RSE equals estimate/mean × 100 for non-transformed parameters, and equals SE × 100 for log-transformed parameters'
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'The paper does not state a unit for Ka. As a first-order absorption rate constant in population PK, Ka is conventionally')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=asunaprevir
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '43.3, 59.1'
- unparsed cell Tab2:row3:col3 = '39.4, 60.3'
- unparsed cell Tab2:row4:col3 = '0.42, 0.563'
- unparsed cell Tab2:row5:col3 = '18.3, 25.8'
- unparsed cell Tab2:row6:col3 = '483, 661'
- unparsed cell Tab2:row7:col3 = '1.00, 1.28'
- unparsed cell Tab2:row8:col3 = '0.199, 0.5'
- unparsed cell Tab2:row9:col1 = '− 0.215'
- unparsed cell Tab2:row9:col3 = '− 0.265, − 0.154'
- unparsed cell Tab2:row10:col3 = '0.7, 1.03'
- unparsed cell Tab2:row11:col1 = '− 0.341'
- unparsed cell Tab2:row11:col3 = '− 0.477, − 0.203'
- unparsed cell Tab2:row12:col1 = '− 0.608'
- unparsed cell Tab2:row12:col3 = '− 0.857, − 0.36'
- unparsed cell Tab2:row13:col1 = '− 0.117'
- unparsed cell Tab2:row13:col3 = '− 0.168, − 0.058'
- unparsed cell Tab2:row14:col3 = '0.686, 2.242'
- unparsed cell Tab2:row15:col3 = '− 0.095, 0.188'
- unparsed cell Tab2:row16:col1 = '− 0.255'
- unparsed cell Tab2:row16:col3 = '− 0.32, − 0.198'
- unparsed cell Tab2:row17:col1 = '− 0.0678'
- unparsed cell Tab2:row17:col3 = '− 0.276, 0.123'
- unparsed cell Tab2:row18:col1 = '− 0.46'
- unparsed cell Tab2:row18:col3 = '− 0.512, − 0.403'
- unparsed cell Tab2:row19:col1 = '− − 0.29'
- unparsed cell Tab2:row19:col3 = '− 0.325, − 0.251'
- unparsed cell Tab2:row20:col1 = '− 0.835'
- unparsed cell Tab2:row20:col3 = '− 1.251, − 0.475'
- unparsed cell Tab2:row21:col1 = '− 0.378'
- unparsed cell Tab2:row21:col3 = '− 0.447, − 0.298'
- unparsed cell Tab2:row22:col1 = '− 0.503'
- unparsed cell Tab2:row22:col3 = '− 0.635, − 0.356'
- unparsed cell Tab2:row23:col3 = '0.473, 0.825'
- unparsed cell Tab2:row25:col3 = '0.145, 0.186'
- unparsed cell Tab2:row26:col3 = '1.877, 2.519'
- unparsed cell Tab2:row27:col3 = '0.229, 0.395'
- unparsed cell Tab2:row28:col3 = '0.444, 1.101'
- unparsed cell Tab2:row30:col3 = '0.36, 0.407'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (22/22 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 50.8 L/h | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 47.6 L | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 561 L | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_asunaprevir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhu_2018` / `Zhu_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_modelica.zip" download>Asunaprevir_Zhu2018_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_fmi.zip" download>Asunaprevir_Zhu2018_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_matlab.zip" download>Asunaprevir_Zhu2018_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_matlab_simbio.zip" download>Asunaprevir_Zhu2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_sbml.zip" download>Asunaprevir_Zhu2018_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_cellml.zip" download>Asunaprevir_Zhu2018_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference.svg" alt="Asunaprevir_Zhu2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.484 /h, F 1). Doses in the paper: 100, 200, 600 mg.

<dbs-fmusim paramsurl="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_asunaprevir/Asunaprevir_Zhu2018_reference/Asunaprevir_Zhu2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Asunaprevir_Zhu2018_reference_params.json` · controls `Asunaprevir_Zhu2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:17 UTC</sub>
