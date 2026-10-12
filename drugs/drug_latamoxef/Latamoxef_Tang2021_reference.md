<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;latamoxef&quot;,&quot;href&quot;:&quot;drugs/drug_latamoxef/&quot;},{&quot;label&quot;:&quot;Tang_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# latamoxef — `Latamoxef_Tang2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; q2 has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — latamoxef: Q2 0.544, CL 87 mL/min, CLR 66 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has latamoxef, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Tang BH et al., Drug Clearance in Neonates: A Combinati…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-021-01033-x](https://doi.org/10.1007/s40262-021-01033-x)

<div class="pk-model-meta" hidden drug="latamoxef" model-id="Latamoxef_Tang2021_reference" status="needs_review" stale="false" population="neonates" measured-compound="latamoxef" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 | `Q900` · equation variable | 0.863 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row16:col2, tab_0:row16:col3, tab_0:row16:col4, tab_0:row16:col5, tab_0:row16:col6, tab_0:row16:col7 | — | not captured |
| θ2 | `Q99` · Q2 | 0.544 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row18:col2, tab_0:row18:col3, tab_0:row18:col4, tab_0:row18:col5, tab_0:row18:col6, tab_0:row18:col7 | — | not captured |
| Total Clearance (mL/min) | `Q22` · CL | 87 | mL/min | 1.45e-06 | [ml] / [min] | not captured | exact (1.0) | Tang_2021_table_2:row0:col4 | — | not captured |
| Renal Clearance (mL/min) | `Q26` · CLR | 66 | mL/min | 1.0999999999999998e-06 | [ml] / [min] | not captured | exact (1.0) | Tang_2021_table_2:row1:col4 | — | not captured |
| θCL | `Q900` · θCL | 0.0680 | mL/min | 1.1333333333333333e-09 | not captured | not captured | not captured (not captured) | tab_0:row14:col2, tab_0:row14:col3, tab_0:row14:col4, tab_0:row14:col5, tab_0:row14:col6, tab_0:row14:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| θCL | Q22 | not captured | llm_confirmed |
| Fage | Q40 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Patients' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col4', 'tab_0:row2:col5', 'tab_0:row2:col6', 'tab_0:row2:col7'])
- dropped unlinked row (NIL): 'Samples' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5', 'tab_0:row3:col6', 'tab_0:row3:col7'])
- dropped unlinked row (NIL): 'Fsize' — extend the ontology if this is a real PK parameter (source ['tab_0:row15:col2', 'tab_0:row15:col3', 'tab_0:row15:col4', 'tab_0:row15:col5', 'tab_0:row15:col6', 'tab_0:row15:col7'])
- dropped duplicate Q900 ('θ3', value '0.214') — already have one for this compound
- dropped unlinked row (NIL): 'FRF' — extend the ontology if this is a real PK parameter (source ['tab_0:row20:col2', 'tab_0:row20:col3', 'tab_0:row20:col4', 'tab_0:row20:col5'])
- dropped unlinked row (NIL): 'θ4' — extend the ontology if this is a real PK parameter (source ['tab_0:row21:col2', 'tab_0:row21:col3'])
- dropped duplicate Q900 ('θ5', value '0.666') — already have one for this compound
- unit inherited for CL (Q22): 'mL/min' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=latamoxef
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q22 (CL): CL = 5.9*(CW/70)^0.75*(PMA/3
- Q22 (CL) is equation-defined: value moved to equation-variable 'θCL'; equation kept verbatim
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table Tang_2021_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tang_2021_table_2:row0:col6 = '~300'
- unparsed cell Tang_2021_table_2:row1:col6 = '~166'
- companion parameter table 2 transcribed (10 record(s))
- captured model equation CL = 5.9*(CW/70)^0.75*(PMA/3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fage]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[frf]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ1]` | 0.863 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2]` | 0.544 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl]` | 0.0680 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl]` | not captured | 0.0680 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | latamoxef | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | latamoxef | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tang_2021_table_2:row0:col4'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tang_2021_table_2:row1:col4'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row18:col2', 'tab_0:row18:col3', 'tab_0:row18:col4', 'tab_0:row18:col5', 'tab_0:row18:col6', 'tab_0:row18:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 87.0 | not captured | not captured | ['Tang_2021_table_2:row0:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.22 L/h | not captured | not captured | ['Tang_2021_table_2:row0:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_latamoxef/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tang_2021` / `Tang_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:31 UTC</sub>
