<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;piperacillin&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/&quot;},{&quot;label&quot;:&quot;Sulaiman_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperacillin_Dohmann2025_reference&quot;,&quot;label&quot;:&quot;Dohmann_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Dohmann2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperacillin_Sulaiman2026_reference&quot;,&quot;label&quot;:&quot;Sulaiman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# piperacillin — `Piperacillin_Sulaiman2026_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has piperacillin, the second reading piperacillin/tazobactam; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Sulaiman H et al., A multicentre evaluation of pharmacokin…, The Journal of antimicrobia… (2026)
  ·  DOI: [10.1093/jac/dkag199](https://doi.org/10.1093/jac/dkag199)

<div class="pk-model-meta" hidden drug="piperacillin" model-id="Piperacillin_Sulaiman2026_reference" status="curated_candidate" stale="false" population="critically ill adults with sepsis or septic shock" measured-compound="piperacillin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLpip (L/h) | `Q22` · CL | 8.78 | L/h | 2.4388888888888886e-06 | [l] / [h] | 5.69 | llm (0.6) | dkag199-T2:row2:col1 | — | not captured |
| Vtaz (L) | `Q65` · Vss | 27.15 | L | 0.02715 | [l] | 9.77 | llm (0.6) | dkag199-T2:row6:col1 | — | not captured |
| Average Vd for piperacillin | `Q61` · V | 24.1 | L | 0.024100000000000003 | L | not captured | review_gapfill (0.7) | Veillette_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLpip (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Vpip (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'CLtaz (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Vtaz (%)' routed out of structural estimates ('Between-subject variability')
- table section iov: 'CLpip (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'Vpip (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'CLtaz (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'Vtaz (%)' routed out of structural estimates ('Between-occasion variability')
- dropped unlinked row (NIL): 'Vpip (L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row3:col1'])
- dropped unlinked row (NIL): 'CLcr effect on CLpip' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row4:col1'])
- dropped duplicate Q22 ('CLtaz (L/h)', value '8.74') — already have one for this compound
- dropped unlinked row (NIL): 'CLcr effect on CLtaz' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row7:col1'])
- dropped unlinked row (NIL): 'Additivepip (mg/L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row19:col1'])
- dropped unlinked row (NIL): 'Proportionalpip (%)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row20:col1'])
- dropped unlinked row (NIL): 'Additivetaz (mg/L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row21:col1'])
- dropped unlinked row (NIL): 'Proportionaltaz (%)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row22:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=piperacillin
- gap-filled Q61 (V) from Veillette_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of KA from de_2011: its label names a different analyte ('rats') — 'k max (3.11±0.02 h À1 for rats and 3.19 ± 1.39 h À1 for humans) for rats'

**Extraction notes:**
- unparsed cell dkag199-T2:row2:col2 = '8.73 (7.78–9.92)'
- unparsed cell dkag199-T2:row3:col2 = '25.73 (2.17–31.59)'
- unparsed cell dkag199-T2:row4:col2 = '0.89 (0.74–1.09)'
- unparsed cell dkag199-T2:row5:col2 = '8.7 (7.65–9.87)'
- unparsed cell dkag199-T2:row6:col2 = '27.88 (15.95–34.47)'
- unparsed cell dkag199-T2:row7:col2 = '0.96 (0.77–1.18)'
- unparsed cell dkag199-T2:row9:col2 = '20.20 (0–41.65)'
- unparsed cell dkag199-T2:row10:col2 = '42.78 (0–64.53)'
- unparsed cell dkag199-T2:row11:col2 = '26.45 (0–48.54)'
- unparsed cell dkag199-T2:row12:col2 = '45.07 (0–69.80)'
- unparsed cell dkag199-T2:row14:col2 = '32.84 (14.07–48.54)'
- unparsed cell dkag199-T2:row15:col2 = '25.40 (17.12–100)'
- unparsed cell dkag199-T2:row16:col2 = '35.01 (12.04–55.72)'
- unparsed cell dkag199-T2:row17:col2 = '24.35 (16.10–100)'
- unparsed cell dkag199-T2:row19:col2 = '2.54 (0.71–4.78)'
- unparsed cell dkag199-T2:row20:col2 = '17 (12–22)'
- unparsed cell dkag199-T2:row21:col2 = '0.43 (0.2–0.8)'
- unparsed cell dkag199-T2:row22:col2 = '16 (1–20)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[additivetaz]` | not captured | 0.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[average vd for piperacillin]` | 24.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vpip]` | not captured | 25.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtaz]` | 27.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | piperacillin | piperacillin/tazobactam | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['dkag199-T2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Veillette_2021:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['dkag199-T2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.78 | not captured | not captured | ['dkag199-T2:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.78 L/h | not captured | not captured | ['dkag199-T2:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 24.1 L | not captured | not captured | ['Veillette_2021:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 27.2 L | not captured | not captured | ['dkag199-T2:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=piperacillin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_piperacillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sulaiman_2026` / `Sulaiman_2026::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_piperacillin/models/modelica/Piperacillin_Sulaiman2026_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_piperacillin/models/modelica/Piperacillin_Sulaiman2026_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_piperacillin/models/modelica/Piperacillin_Sulaiman2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_modelica.zip" download>Piperacillin_Sulaiman2026_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_fmi.zip" download>Piperacillin_Sulaiman2026_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_matlab.zip" download>Piperacillin_Sulaiman2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_matlab_simbio.zip" download>Piperacillin_Sulaiman2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_sbml.zip" download>Piperacillin_Sulaiman2026_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_cellml.zip" download>Piperacillin_Sulaiman2026_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference.svg" alt="Piperacillin_Sulaiman2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 4500 mg infusion over 10 min, single dose. Dose in the paper: 4500 mg.

<dbs-fmusim paramsurl="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Piperacillin_Sulaiman2026_reference_params.json` · controls `Piperacillin_Sulaiman2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:15 UTC</sub>
