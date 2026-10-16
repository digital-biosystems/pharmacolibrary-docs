<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;4-aminosalicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_4_aminosalicylic_acid/&quot;},{&quot;label&quot;:&quot;Sy_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_4AminosalicylicAcid_de2014_reference&quot;,&quot;label&quot;:&quot;de_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_de2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_4AminosalicylicAcid_Sy2015_reference&quot;,&quot;label&quot;:&quot;Sy_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 4-aminosalicylic acid — `D_4AminosalicylicAcid_Sy2015_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.733), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is 4 aminosalicylic acid's own; they describe para-aminosalicylic acid. Extracted — para-aminosalicylic acid: CL/F 8.14 liters/h, V/F 48.9 liters, ktr 0.617 h Ϫ1, n_transit 3.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].covariate_forms`: this record has ['linear_fractional'], the second reading ['linear_fractional', 'linear_fractional']; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
SherwinK BSy Department of Pharmaceutics College of Pharmacy University of Florida Gainesville Florida USA et al., N-Acetyltransferase Genotypes and the P… (2015)
  ·  DOI: [10.1128/AAC.04049-14](https://doi.org/10.1128/AAC.04049-14)

<div class="pk-model-meta" hidden drug="4-aminosalicylic acid" model-id="D_4AminosalicylicAcid_Sy2015_reference" status="needs_review" stale="false" population="tuberculosis patients" measured-compound="para-aminosalicylic acid" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, liters/h | `Q27` · CL/F | 8.14 | liters/h | 2.2611111111111117e-06 | [l] / [h] | 11.3 | exact (1.0) | tab_2:row3:col1 | — | not captured |
| Apparent V/F, liters | `Q76` · V/F | 48.9 | liters | 0.0489 | [l] | 6.9 | llm_confirmed (0.6) | tab_2:row4:col1 | — | not captured |
| K tr , h Ϫ1 | `Q306` · ktr | 0.617 | h Ϫ1 | 0.0001713888888888889 | [1] / [h] | 10.2 | space_fold (0.95) | tab_2:row5:col1 | — | not captured |
| No. of transit compartments | `Q311` · n_transit | 3 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_2:row6:col1 | — | not captured |
| gender_on_cl_f | `Q900` · gender_on_cl_f | 0.315 | not captured | not captured | not captured | 40.3 | not captured (not captured) | tab_2:row19:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `absorption_approximation`: transit absorption (ktr=0.0001714/s, n=3) folded to first-order ka = ktr/(n+1) = 4.285e-05/s — same mean absorption time, no delay phase

**Interpretation flags:**
- dropped duplicate Q27 ('CL/F', value '32.2') — already have one for this compound
- dropped duplicate Q76 ('V/F', value '25.2') — already have one for this compound
- dropped duplicate Q306 ('Ktr', value '44.7') — already have one for this compound
- dropped unlinked row (NIL): 'Efavirenz on CL/F' — extend the ontology if this is a real PK parameter (source ['tab_2:row18:col1'])
- covariate level 'Gender on CL/F' → Q900:gender_on_cl_f = 0.315 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=para-aminosalicylic acid

**Extraction notes:**
- unparsed cell tab_2:row20:col1 = 'Ϫ0.19 (56.3)'
- unparsed cell tab_2:row21:col1 = 'Ϫ0.644 (26.2)'
- unparsed cell tab_2:row22:col1 = 'Ϫ0.32 (35.0)'
- unparsed cell tab_2:row23:col1 = 'Ϫ92.633'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.733 (11/15 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[gender_on_cl_f]` | 0.315 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_gender]` | not captured | 0.315 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_nat2]` | not captured | -0.32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[% change in oral clearance associated with efavirenz]` | not captured | 25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect of efavirenz on oral clearance]` | 25 | not captured | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.14 L/h | not captured | not captured | ['tab_2:row3:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 48.9 L | not captured | not captured | ['tab_2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=para-aminosalicylic acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 0.028952653702793915 | not captured | non-numeric value |
| T1_cmax | reference | fail | 9.999999999999999e-06 | 0.028952653702793915 | 2895.2654 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000135 | 0.028952653702793915 | 214.4641 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 22.4 | 0.028952653702793915 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 51.6 | 0.028952653702793915 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 14.3 | 0.028952653702793915 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 125 | 0.028952653702793915 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | -3.9 | 0.028952653702793915 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.873 | 0.028952653702793915 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.873 | 0.028952653702793915 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_4_aminosalicylic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sy_2015` / `Sy_2015::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_4_aminosalicylic_acid/models/modelica/D_4AminosalicylicAcid_Sy2015_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_4_aminosalicylic_acid/models/modelica/D_4AminosalicylicAcid_Sy2015_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_4_aminosalicylic_acid/models/modelica/D_4AminosalicylicAcid_Sy2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_modelica.zip" download>D_4AminosalicylicAcid_Sy2015_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_fmi.zip" download>D_4AminosalicylicAcid_Sy2015_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_matlab.zip" download>D_4AminosalicylicAcid_Sy2015_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_matlab_simbio.zip" download>D_4AminosalicylicAcid_Sy2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_sbml.zip" download>D_4AminosalicylicAcid_Sy2015_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_cellml.zip" download>D_4AminosalicylicAcid_Sy2015_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference.svg" alt="D_4AminosalicylicAcid_Sy2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 4000 mg, single dose, first-order absorption (ka 0.154 /h, F 1). Doses in the paper: 4000, 8000 mg.

<dbs-fmusim paramsurl="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `D_4AminosalicylicAcid_Sy2015_reference_params.json` · controls `D_4AminosalicylicAcid_Sy2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 09:22 UTC</sub>
