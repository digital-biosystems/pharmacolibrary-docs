<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;heparin&quot;,&quot;href&quot;:&quot;drugs/drug_heparin/&quot;},{&quot;label&quot;:&quot;Lanoisel\u00e9e_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Heparin_Salem2022_reference&quot;,&quot;label&quot;:&quot;Salem_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_heparin/Heparin_Salem2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# heparin — `Heparin_Lanoisele2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The heparin model's terminal half-life (8.77 h) is 175.4939 times the paper's reported 0.05, and the intercompartmental clearance Q (0.29 L/h) was neither extracted nor defaulted, so the record was held back.**

Simulated as the paper dosed it, the model's terminal half-life is 8.77 h against the paper's 0.05, a ratio of 175.4939, far beyond tolerance. Parameter coverage also failed: of 4 expected parameters, only 3 were covered, with Q (intercompartmental clearance, 0.29 L/h) neither emitted nor defaulted. The model builder substituted library defaults for the missing bioavailability F and lag time Tlag. A second reader also disputed the heparin–protamine interconversion link, which this record leaves absent, and could not confirm the values for Q, ka (0.079 h⁻¹), clearance (1.5 L/h) and volume (3661.0 mL). Extracted — heparin: CL 1.5 L h -1, Q 0.29 L h -1, V 3.66e+03 mL, kabs 0.079 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has heparin, protamine, the second reading UFH; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:38:12.821744+00:00) predates the upstream re-run (2026-10-07 18:10:13.663561+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `heparin, protamine`, measured `heparin`.

## Citation
Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026)
  ·  DOI: [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057)

<div class="pk-model-meta" hidden drug="heparin" model-id="Heparin_Lanoisele2026_reference" status="needs_review" stale="true" population="adult cardiac surgery patients" measured-compound="heparin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| UFH clearance | `Q22` · CL | 1.5 | L h -1 | 4.1666666666666667e-07 | L/h | not captured | boundary (0.8) | Lanoiselée_2026:other_prose | — | not captured |
| intercompartmental clearance | `Q30` · Q | 0.29 | L h -1 | 8.055555555555555e-08 | L/h | not captured | exact (1.0) | Lanoiselée_2026:other_prose | — | not captured |
| V (mL)* | `Q61` · V | 3661.0 | mL | 0.0036609999999999998 | L | not captured | review_gapfill (0.7) | Gouin-Thibault_2024:review | — | not captured |
| Ka (h -1 ) | `Q49` · kabs | 0.079 | h -1 | 2.1944444444444445e-05 | 1/h | not captured | review_gapfill (0.7) | Gouin-Thibault_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Patients, n' — extend the ontology if this is a real PK parameter (source ['tab_0:row1:col1'])
- dropped unlinked row (NIL): 'Male, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1'])
- dropped unlinked row (NIL): 'Previous cardiac surgery, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1'])
- dropped unlinked row (NIL): 'Minimally invasive, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col1'])
- dropped unlinked row (NIL): 'CABG' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col1'])
- dropped unlinked row (NIL): 'Valve' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col1'])
- dropped unlinked row (NIL): 'CABG + valve' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col1'])
- dropped unlinked row (NIL): 'Heparin rebound, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row29:col1'])
- dropped unlinked row (NIL): '0 (insignificant)' — extend the ontology if this is a real PK parameter (source ['tab_0:row34:col1'])
- dropped unlinked row (NIL): '1 (mild)' — extend the ontology if this is a real PK parameter (source ['tab_0:row35:col1'])
- dropped unlinked row (NIL): '2 (moderate)' — extend the ontology if this is a real PK parameter (source ['tab_0:row36:col1'])
- dropped unlinked row (NIL): '3 (severe)' — extend the ontology if this is a real PK parameter (source ['tab_0:row37:col1'])
- dropped unlinked row (NIL): '4 (massive)' — extend the ontology if this is a real PK parameter (source ['tab_0:row38:col1'])
- table mostly unlinked (16/16 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('UFH clearance'=1.5) from results prose — parameter table was unreadable
- salvaged Q30 ('intercompartmental clearance'=0.29) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=heparin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'heparin' — its concentrations stay mass-only
- gap-filled Q61 (V) from Gouin-Thibault_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gouin-Thibault_2024's review values (primary lacked it)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.125 (1/8 fields) | 7 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` | not captured | 0.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` | 0.29 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.079 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ufh clearance]` | not captured | 1.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ufh clearance]` | 1.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v (ml)*]` | 3661.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | heparin, protamine | UFH | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | heparin (anti-Xa activity) | UFH | mismatch |
| `gpt-oss:120b` | `model.links` | [] | [['ufh', 'protamine', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[intercompartmental clearance]` | not captured | 0.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartmental clearance]` | 0.29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ufh clearance]` | not captured | 1.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ufh clearance]` | 1.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | heparin | UFH | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | heparin | UFH | mismatch |

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
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Gouin-Thibault_2024:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gouin-Thibault_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.5 | not captured | not captured | ['Lanoiselée_2026:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.5 L/h | not captured | not captured | ['Lanoiselée_2026:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.66 L | not captured | not captured | ['Gouin-Thibault_2024:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=unfractionated heparin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['Q'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped | 3.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | fail | 0.05 | 8.774696676956726 | 175.4939 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_heparin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lanoiselée_2026` / `Lanoiselée_2026::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_heparin/models/modelica/Heparin_Lanoisele2026_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_heparin/models/modelica/Heparin_Lanoisele2026_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_heparin/models/modelica/Heparin_Lanoisele2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_modelica.zip" download>Heparin_Lanoisele2026_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_fmi.zip" download>Heparin_Lanoisele2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_matlab.zip" download>Heparin_Lanoisele2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_matlab_simbio.zip" download>Heparin_Lanoisele2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_sbml.zip" download>Heparin_Lanoisele2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_heparin/Heparin_Lanoisele2026_reference/Heparin_Lanoisele2026_reference_cellml.zip" download>Heparin_Lanoisele2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:10 UTC</sub>
