<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;parecoxib&quot;,&quot;href&quot;:&quot;drugs/drug_parecoxib/&quot;},{&quot;label&quot;:&quot;Tan_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# parecoxib — `Parecoxib_Tan2016_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

**Parecoxib's clearance lacked a specific value, and the metabolite valdecoxib was incorrectly assigned to a one-compartment structure.**

The record lists a total clearance of 19.1 L·h-1 ·70 kg-1 for parecoxib, yet no explicit estimate was extracted for the model. The model structure is one-compartment, contradicting the three-compartment parameters provided for parecoxib and the metabolite valdecoxib. Because the record was built from the abstract alone, these summary statistics stood in for a fitted model. Extracted — parecoxib: CLnorm 19.1 L·h-1 ·70 kg-1, V1 4.2 L·70 kg-1, Q 6.29 L·h-1 ·70 kg-1, V2 130 L·70 kg-1, Q2 6.02 L·h-1 ·70 kg-1, V3 2.03 L·70 kg-1; valdecoxib: CL 9.53 L·h-1 ·70 kg-1, V 51 L·70 kg-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has parecoxib, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Tan L et al., Pharmacokinetics and analgesic effectiv…, Paediatric anaesthesia (2016)
  ·  DOI: [10.1111/pan.13009](https://doi.org/10.1111/pan.13009)

<div class="pk-model-meta" hidden drug="parecoxib" model-id="Parecoxib_Tan2016_reference" status="model_quarantined" stale="false" population="children undergoing tonsillectomy and adenoidectomy" measured-compound="parecoxib" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLPARECOXIB | `Q354` · CLnorm | 19.1 | L·h-1 ·70 kg-1 | 0.000371388888888889 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Tan_2016:abstract | — | not captured |
| V1PARECOXIB | `Q63` · V1 | 4.2 | L·70 kg-1 | 0.29400000000000004 | [l] / [kg] | not captured | exact (1.0) | Tan_2016:abstract | — | not captured |
| Q2PARECOXIB | `Q30` · Q | 6.29 | L·h-1 ·70 kg-1 | 0.00012230555555555557 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Tan_2016:abstract | — | not captured |
| V2PARECOXIB | `Q64` · V2 | 130 | L·70 kg-1 | 9.1 | [l] / [kg] | not captured | exact (1.0) | Tan_2016:abstract | — | not captured |
| Q3PARECOXIB | `Q99` · Q2 | 6.02 | L·h-1 ·70 kg-1 | 0.00011705555555555555 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Tan_2016:abstract | — | not captured |
| V3PARECOXIB | `Q77` · V3 | 2.03 | L·70 kg-1 | 0.14209999999999998 | [l] / [kg] | not captured | exact (1.0) | Tan_2016:abstract | — | not captured |
| CLVALDECOXIB | `Q22` · CL | 9.53 | L·h-1 ·70 kg-1 | 0.00018530555555555555 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Tan_2016:abstract | — | not captured |
| VVALDECOXIB | `Q61` · V | 51 | L·70 kg-1 | 3.5700000000000003 | [l] / [kg] | not captured | exact (1.0) | Tan_2016:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- metabolite volume: 'VVALDECOXIB' Q63→Q61 for valdecoxib — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=parecoxib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 8 linked by role; re-tagged parecoxib→parent ×6, parecoxib→valdecoxib ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Tan_2016_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clparecoxib]` | 19.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clparecoxib]` | not captured | 19.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2parecoxib]` | 6.29 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2parecoxib]` | not captured | 6.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3parecoxib]` | 6.02 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3parecoxib]` | not captured | 6.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1parecoxib]` | 4.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1parecoxib]` | not captured | 4.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2parecoxib]` | 130 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2parecoxib]` | not captured | 130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3parecoxib]` | 2.03 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3parecoxib]` | not captured | 2.03 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | parecoxib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | parecoxib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tan_2016:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.53 | not captured | not captured | ['Tan_2016:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 667 L/h | not captured | not captured | ['Tan_2016:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.57e+03 L | not captured | not captured | ['Tan_2016:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 294 L | not captured | not captured | ['Tan_2016:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.1e+03 L | not captured | not captured | ['Tan_2016:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 5 covered | not captured | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_parecoxib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tan_2016` / `Tan_2016::reference`)
- model: `../../../knowledgebase/drugs/drug_parecoxib/models/modelica/_needs_review/Parecoxib_Tan2016_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_parecoxib/models/modelica/_needs_review/Parecoxib_Tan2016_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_matlab.zip" download>Parecoxib_Tan2016_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_matlab_simbio.zip" download>Parecoxib_Tan2016_reference_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_sbml.zip" download>Parecoxib_Tan2016_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_cellml.zip" download>Parecoxib_Tan2016_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:45 UTC</sub>
