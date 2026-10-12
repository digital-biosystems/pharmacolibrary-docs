<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;inotuzumab ozogamicin&quot;,&quot;href&quot;:&quot;drugs/drug_inotuzumab_ozogamicin/&quot;},{&quot;label&quot;:&quot;Garrett_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# inotuzumab ozogamicin — `InotuzumabOzogamicin_Garrett2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 0.262).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — inotuzumab ozogamicin: CL 0.113 L/h, Q 0.369 L/h, V1 6.7 L, V2 5.1 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of kdes: this record has none, the second reading 0.0337; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Garrett M et al., Population pharmacokinetics of inotuzum…, Journal of pharmacokinetics… (2019)
  ·  DOI: [10.1007/s10928-018-9614-9](https://doi.org/10.1007/s10928-018-9614-9)

## Model component
<dbs-pgx drug="inotuzumab ozogamicin" model-id="InotuzumabOzogamicin_Garrett2019_reference" status="needs_review" stale="false" population="patients with relapsed/refractory B-cell ALL or NHL" measured-compound="inotuzumab ozogamicin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL1, L/h | `Q22` · CL | 0.113 | L/h | 3.138888888888889e-08 | [l] / [h] | not captured | llm (0.6) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col6, Tab2:row3:col7, Tab2:row3:col8 | — | not captured |
| RITX + InO effect | `Q900` · equation variable | 0.155 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col6, Tab2:row6:col7, Tab2:row6:col8 | — | not captured |
| CL2, L/h | `Q30` · Q | 0.369 | L/h | 1.0250000000000001e-07 | [l] / [h] | not captured | special_case (0.95) | Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col6, Tab2:row7:col7, Tab2:row7:col8 | — | not captured |
| V1, L | `Q63` · V1 | 6.70 | L | 0.0067 | [l] | not captured | exact (1.0) | Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col6, Tab2:row9:col7, Tab2:row9:col8 | — | 41.2 (None% RSE) |
| V2, L | `Q64` · V2 | 5.10 | L | 0.0050999999999999995 | [l] | not captured | exact (1.0) | Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col4, Tab2:row15:col6, Tab2:row15:col7, Tab2:row15:col8 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'nonparametric bootstrap results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['Tab2:row0:col2', 'Tab2:row0:col3', 'Tab2:row0:col4', 'Tab2:row0:col5'])
- dropped unlinked row (NIL): 'BBSA effect' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row5:col8', 'Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col6', 'Tab2:row8:col7', 'Tab2:row8:col8', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4', 'Tab2:row10:col6', 'Tab2:row10:col7', 'Tab2:row10:col8'])
- dropped unlinked row (NIL): 'kdes, h−1' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row11:col8'])
- dropped duplicate Q30 ('Q, L/h', value '0.0405') — already have one for this compound
- dropped unlinked row (NIL): "\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\text{O'}}^{2}_{\\text{prop}} - {\\text{NHL}}^{\\text{f}}$$\\end{document}O'prop2-NHLf" — extend the ontology if this is a real PK parameter (source ['Tab2:row23:col2', 'Tab2:row23:col3', 'Tab2:row23:col4', 'Tab2:row23:col5', 'Tab2:row23:col6', 'Tab2:row23:col7', 'Tab2:row23:col8'])
- routed "\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\text{O'}}^{2}_{\\text{prop}} - {\\text{ALL}}^{\\text{f}}$$\\end{document}O'prop2-ALLf" → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: 'ALL effect'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=inotuzumab ozogamicin
- molar mass: none found for 'inotuzumab_ozogamicin' — its concentrations stay mass-only
- molar mass: none found for 'inotuzumab ozogamicin' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row16:col1 = 'Variance–covariance matrix of the interindividual effects in CL1'
- unparsed cell Tab2:row17:col1 = 'Variance–covariance matrix of the interindividual effects in CL2'
- unparsed cell Tab2:row18:col1 = 'Variance–covariance matrix of the interindividual effects in V1'
- unparsed cell Tab2:row20:col2 = '0.156e'
- unparsed cell Tab2:row21:col2 = '0.213e'
- unparsed cell Tab2:row22:col2 = '0.222e'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[kdes]` | not captured | 0.0337 | only_one_extracted |
| `qwen3.8-27b` | `parameters[parameter]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ritx + ino effect]` | 0.155 | not captured | only_one_extracted |

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
| C1_half_life_beta | fail | 293.0 | 76.838 | 0.2622 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row3:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col6', 'Tab2:row7:col7', 'Tab2:row7:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col6', 'Tab2:row9:col7', 'Tab2:row9:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4', 'Tab2:row15:col6', 'Tab2:row15:col7', 'Tab2:row15:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.113 | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row3:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.113 L/h | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row3:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.7 L | not captured | not captured | ['Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col6', 'Tab2:row9:col7', 'Tab2:row9:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.1 L | not captured | not captured | ['Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4', 'Tab2:row15:col6', 'Tab2:row15:col7', 'Tab2:row15:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_inotuzumab_ozogamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Garrett_2019` / `Garrett_2019::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:43 UTC</sub>
