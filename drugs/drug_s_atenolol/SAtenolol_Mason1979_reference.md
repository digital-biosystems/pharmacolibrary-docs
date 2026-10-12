<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;s-atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_s_atenolol/&quot;},{&quot;label&quot;:&quot;Mason_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SAtenolol_Buck1989_reference&quot;,&quot;label&quot;:&quot;Buck_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_s_atenolol/SAtenolol_Buck1989_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# s-atenolol — `SAtenolol_Mason1979_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.688), gpt-oss:120b (not confirmed, agreement 0.421). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**MAT has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — s atenolol: t1/2z 6.06 hr, V 0.173 L/kg, fe 94.1 %, CL 10.7 L/hr, CLR 10.4 L/hr, Fab 0.52 mg, tmax 3 hr, MAT 2 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absolute bioavailability: this record has none, the second reading 0.52; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-29 08:52:10.670040+00:00) predates the upstream re-run (2026-10-07 01:01:56.088117+00:00). Current validate status: `needs_review`.

## Citation
Mason WD et al., Kinetics and absolute bioavailability o…, Clinical pharmacology and t… (1979)
  ·  DOI: [10.1002/cpt1979254408](https://doi.org/10.1002/cpt1979254408)

<div class="pk-model-meta" hidden drug="s-atenolol" model-id="SAtenolol_Mason1979_reference" status="needs_review" stale="true" population="healthy volunteers" measured-compound="atenolol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| terminal elimination half-life | `Q57` · t1/2z | 6.06 | hr | 21816.0 | [h] | not captured | llm (0.6) | Mason_1979:abstract | — | not captured |
| volume of the central compartment | `Q61` · V | 0.173 | L/kg | 0.012110000000000001 | [l] / [kg] | not captured | exact (1.0) | Mason_1979:abstract | — | not captured |
| excreted in the urine | `Q44` · fe | 94.1 | % | not captured | [%] | not captured | llm (0.6) | Mason_1979:abstract | — | not captured |
| plasma clearance | `Q22` · CL | 10.7 | L/hr | 2.972222222222222e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | Mason_1979:abstract | — | not captured |
| renal plasma clearance | `Q26` · CLR | 10.4 | L/hr | 2.8888888888888894e-06 | [l] / [h] | not captured | llm_corrected (0.6) | Mason_1979:abstract | — | not captured |
| absolute bioavailability for the 25-... oral doses | `Q40` · Fab | 0.52 | mg | not captured | not captured | not captured | llm_confirmed (0.6) | Mason_1979:abstract, Mason_1979:abstract, Mason_1979:abstract | — | not captured |
| Time to mean maximum plasma concentration | `Q56` · tmax | 3.0 | hr | 10800.0 | [h] | not captured | llm (0.6) | Mason_1979:abstract | — | not captured |
| time for half of the bioavailable dose to be absorbed | `Q73` · MAT | 2.0 | hr | not captured | not captured | not captured | llm (0.6) | Mason_1979:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q26 ('renal plasma clearance after oral doses', value 9.49) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atenolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volume of the central compartment' is the general volume)
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'atenolol', not s_atenolol — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Mason_1979_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.688 (11/16 fields) | 5 |
| `gpt-oss:120b` | not confirmed | 0.421 (8/19 fields) | 11 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absolute bioavailability for the 25-... oral doses]` | 0.52 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute bioavailability]` | not captured | 0.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[excreted in the urine]` | 94.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[intravenous dose excreted in the urine]` | not captured | 94.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time for half of the bioavailable dose to be absorbed].parameter_id` | Q73 | Q95 | mismatch |
| `gpt-oss:120b` | `parameters[absolute bioavailability for the 25-... oral doses]` | 0.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[excreted in the urine]` | 94.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[intravenous dose is excreted in the urine]` | not captured | 94.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean (+/- sd) terminal elimination half-life]` | not captured | 6.06 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean absolute bioavailability for the 25-mg oral dose]` | not captured | 0.52 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean value of the plasma clearance]` | not captured | 10.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean volume of the central compartment]` | not captured | 0.173 | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma clearance]` | 10.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal elimination half-life]` | 6.06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[time for half of the bioavailable dose to be absorbed].parameter_id` | Q73 | Q95 | mismatch |
| `gpt-oss:120b` | `parameters[volume of the central compartment]` | 0.173 | not captured | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mason_1979:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mason_1979:abstract'] |
| C5_dimension_Q44 | pass | dimensionless | not captured | not captured | not captured | ['Mason_1979:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Mason_1979:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Mason_1979:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Mason_1979:abstract'] |
| C5_unit_missing_Q73 | fail | [time] | hr | not captured | not captured | ['Mason_1979:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.7 | not captured | not captured | ['Mason_1979:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.7 L/h | not captured | not captured | ['Mason_1979:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.1 L | not captured | not captured | ['Mason_1979:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_s_atenolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mason_1979` / `Mason_1979::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:01 UTC</sub>
