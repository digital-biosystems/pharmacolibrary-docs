<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;budesonide&quot;,&quot;href&quot;:&quot;drugs/drug_budesonide/&quot;},{&quot;label&quot;:&quot;Rubin_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# budesonide — `Budesonide_Rubin2015_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**AUC has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUC and Cmax), so that value has no SI equivalent. Extracted — budesonide: CL/F 464 L/h, V/F 2.7e+03 L, tlag 0.149 h, AUC 4.31 ng h/mL, Cmax 0.573 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has budesonide, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:36:20.840482+00:00) predates the upstream re-run (2026-10-04 19:23:25.360617+00:00). Current validate status: `needs_review`.

## Citation
Rubin DT et al., Budesonide Foam Has a Favorable Safety…, Digestive diseases and scie… (2015)
  ·  DOI: [10.1007/s10620-015-3868-5](https://doi.org/10.1007/s10620-015-3868-5)

<div class="pk-model-meta" hidden drug="budesonide" model-id="Budesonide_Rubin2015_reference" status="needs_review" stale="true" population="patients with mild-to-moderate ulcerative proctitis or proctosigmoiditis and healthy volunteers" measured-compound="budesonide" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance/F (L/h) | `Q27` · CL/F | 464 | L/h | 0.0001288888888888889 | [l] / [h] | not captured | llm_corrected (0.6) | Tab4:row1:col1 | — | not captured |
| Volume of distribution/F (L) | `Q76` · V/F | 2700 | L | 2.7 | [l] | not captured | llm_corrected (0.6) | Tab4:row2:col1 | — | not captured |
| Absorption lag time (h) | `Q83` · tlag | 0.149 | h | 536.4 | [h] | not captured | exact (1.0) | Tab4:row3:col1 | — | not captured |
| AUC (ng h/mL) | `Q88` · AUC | 4.31 | ng h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Tab4:row4:col1 | — | not captured |
| C max (ng/mL) | `Q32` · Cmax | 0.573 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Tab4:row5:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter, mean (CV)' — extend the ontology if this is a real PK parameter (source ['Tab4:row0:col1'])
- unit_dimension_unknown: 'ng h/mL' (AUC)
- implicit units: 'AUC (ng h/mL)' — the LLM proposed 'ng h/mL', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=budesonide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.214 (3/14 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag time]` | 0.149 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | not captured | 0.149 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | 4.31 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | not captured | 4.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 0.573 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | not captured | 0.573 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance/f]` | 464 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance/f]` | not captured | 464 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution/f]` | 2700 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution/f]` | not captured | 2700 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | budesonide | unknown | mismatch |
| `gpt-oss:120b` | `parameters[absorption lag time]` | 0.149 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption lag time]` | not captured | 0.149 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | 4.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | not captured | 4.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c max]` | 0.573 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c max]` | not captured | 0.573 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance/f]` | 464 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance/f]` | not captured | 464 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution/f]` | 2700 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution/f]` | not captured | 2700 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | budesonide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | budesonide | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row1:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab4:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row2:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab4:row3:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | ng h/mL | not captured | not captured | ['Tab4:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 464 L/h | not captured | not captured | ['Tab4:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.7e+03 L | not captured | not captured | ['Tab4:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_budesonide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rubin_2015` / `Rubin_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_budesonide/Budesonide_Rubin2015_reference/Budesonide_Rubin2015_reference_modelica.zip" download>Budesonide_Rubin2015_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_budesonide/Budesonide_Rubin2015_reference/Budesonide_Rubin2015_reference_fmi.zip" download>Budesonide_Rubin2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_budesonide/Budesonide_Rubin2015_reference/Budesonide_Rubin2015_reference_matlab.zip" download>Budesonide_Rubin2015_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_budesonide/Budesonide_Rubin2015_reference/Budesonide_Rubin2015_reference_matlab_simbio.zip" download>Budesonide_Rubin2015_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_budesonide/Budesonide_Rubin2015_reference/Budesonide_Rubin2015_reference_sbml.zip" download>Budesonide_Rubin2015_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_budesonide/Budesonide_Rubin2015_reference/Budesonide_Rubin2015_reference_cellml.zip" download>Budesonide_Rubin2015_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 19:23 UTC</sub>
