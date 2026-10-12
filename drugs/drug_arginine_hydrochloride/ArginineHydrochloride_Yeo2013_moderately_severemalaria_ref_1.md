<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;arginine hydrochloride&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_hydrochloride/&quot;},{&quot;label&quot;:&quot;Yeo_2013 \u00b7 moderately_severemalaria_ref_15&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ArginineHydrochloride_Gaudinski2018_reference&quot;,&quot;label&quot;:&quot;Gaudinski_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Gaudinski2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# arginine hydrochloride — `ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

**Arginine hydrochloride's clearance, volume of distribution, and central-to-peripheral rate constant lacked extracted values, so the model was quarantined.**

Although the record lists specific values for clearance, central volume, peripheral volume, and intercompartmental clearance, the review found these parameters were not extracted and defaulted to library placeholders. A second reader also disagreed on the dose compound and primary analyte, marking them as unknown. Additionally, the second reader identified a missing gradient value of 0.0612 that was null in the record. Extracted — arginine hydrochloride: CL 31 L/h, V1 27 L, V2 21 L, Q 74 L/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has L-arginine hydrochloride, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> **Dose compound ≠ measured compound:** dosed `L-arginine hydrochloride`, measured `L-arginine`.

## Citation
Yeo TW et al., A randomized pilot study of L-arginine…, PloS one (2013)
  ·  DOI: [10.1371/journal.pone.0069587](https://doi.org/10.1371/journal.pone.0069587)

<div class="pk-model-meta" hidden drug="arginine hydrochloride" model-id="ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1" status="model_quarantined" stale="false" population="adults with severe falciparum malaria" measured-compound="L-arginine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 31 | L/h | 8.611111111111112e-06 | [l] / [h] | not captured | exact (1.0) | pone-0069587-t003:row2:col1 | — | 0.274 (None% RSE) |
| V1 (L) | `Q63` · V1 | 27 | L | 0.027 | [l] | not captured | exact (1.0) | pone-0069587-t003:row3:col1 | — | 0.0103 (None% RSE) |
| V2 (L) | `Q64` · V2 | 21 | L | 0.021 | [l] | not captured | exact (1.0) | pone-0069587-t003:row4:col1 | — | not captured |
| Q (L/h) | `Q30` · Q | 74 | L/h | 2.0555555555555555e-05 | [l] / [h] | not captured | exact (1.0) | pone-0069587-t003:row5:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Base' — extend the ontology if this is a real PK parameter (source ['pone-0069587-t003:row7:col1'])
- dropped unlinked row (NIL): 'Gradient 1' — extend the ontology if this is a real PK parameter (source ['pone-0069587-t003:row8:col1'])
- dropped unlinked row (NIL): 'Gradient 2' — extend the ontology if this is a real PK parameter (source ['pone-0069587-t003:row9:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=L-arginine
- population split: 'moderately severemalaria (ref [15])' subgroup of Yeo_2013 (paper reports 2 populations: moderately severemalaria (ref [15]), severemalaria)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[gradient 1]` | not captured | 0.0612 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | L-arginine hydrochloride | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | L-arginine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pone-0069587-t003:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pone-0069587-t003:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pone-0069587-t003:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pone-0069587-t003:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 31.0 | not captured | not captured | ['pone-0069587-t003:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 31 L/h | not captured | not captured | ['pone-0069587-t003:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 27 L | not captured | not captured | ['pone-0069587-t003:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 21 L | not captured | not captured | ['pone-0069587-t003:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_arginine_hydrochloride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yeo_2013` / `Yeo_2013::moderately_severemalaria_ref_15`)
- model: `../../../knowledgebase/drugs/drug_arginine_hydrochloride/models/modelica/_needs_review/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1.mo`
- deviation: `../../../knowledgebase/drugs/drug_arginine_hydrochloride/models/modelica/_needs_review/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_matlab.zip" download>ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_matlab_simbio.zip" download>ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_sbml.zip" download>ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_arginine_hydrochloride/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1/ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_cellml.zip" download>ArginineHydrochloride_Yeo2013_moderately_severemalaria_ref_1_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 00:13 UTC</sub>
