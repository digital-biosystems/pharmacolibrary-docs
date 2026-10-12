<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/&quot;},{&quot;label&quot;:&quot;Yang_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cemiplimab — `Cemiplimab_Yang2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Nguyen_2022) cannot stand in for this paper's evidence. Extracted — cemiplimab: allometric_exponent 0.477, V 5.89 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of auc6wk,ss, mean (sd): this record has none, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Yang F et al., Population pharmacokinetic characterist…, Journal of pharmacokinetics… (2021)
  ·  DOI: [10.1007/s10928-021-09739-y](https://doi.org/10.1007/s10928-021-09739-y)

<div class="pk-model-meta" hidden drug="cemiplimab" model-id="Cemiplimab_Yang2021_reference" status="needs_review" stale="false" population="patients with advanced malignancies, including advanced cutaneous squamous cell carcinoma" measured-compound="cemiplimab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| WGT_ON_CLQ | `Q319` · allometric_exponent | 0.477 | not captured | not captured | not captured | 12.1 | llm (0.6) | Tab3:row10:col2 | — | not captured |
| IGG_ON_CLQ | `Q900` · equation variable | 0.184 | not captured | not captured | not captured | 15.1 | llm (0.6) | Tab3:row14:col2 | — | not captured |
| volume of distribution (Vss) | `Q61` · V | 5.89 | L | 0.005889999999999999 | L | not captured | review_gapfill (0.7) | Nguyen_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| TVCL | Q22 | not captured | tv_prefix |
| TVQ | Q30 | not captured | tv_prefix |
| AUC6wk,ss, mean (SD) (day mg/L) | Q18 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row9:col2'])
- dropped duplicate Q319 ('WGT_ON_VSS', value '0.970') — already have one for this compound
- dropped duplicate Q900 ('BLK_ON_T50', value '1.01') — already have one for this compound
- routed 'Ω' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_unknown: 'day mg/L' (AUCSS)
- dropped value-less row: 'Q1 (30.9, 65.5)' (captured trailing unit '30.9, 65.5' for child rows)
- dropped value-less row: 'Q2 (65.5, 76.2)' (captured trailing unit '65.5, 76.2' for child rows)
- dropped value-less row: 'Q3 (76.2, 88.5)' (captured trailing unit '76.2, 88.5' for child rows)
- dropped value-less row: 'Q4 (88.5, 172)' (captured trailing unit '88.5, 172' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cemiplimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'cemiplimab' — its concentrations stay mass-only
- gap-filled Q61 (V) from Nguyen_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab3:row16:col1 = 'Black (race) on T50'
- unparsed cell Tab3:row20:col1 = 'IIV on T50'
- unparsed cell Yang_2021_table_4:row1:col2 = '3280 (± 2220)'
- unparsed cell Yang_2021_table_4:row1:col3 = '58.4 (± 51.6)'
- unparsed cell Yang_2021_table_4:row1:col4 = '4510 (± 3180)'
- unparsed cell Yang_2021_table_4:row1:col5 = '70.3 (± 72.6)'
- unparsed cell Yang_2021_table_4:row2:col2 = '3750 (± 1330)'
- unparsed cell Yang_2021_table_4:row2:col3 = '66.8 (± 28.2)'
- unparsed cell Yang_2021_table_4:row2:col4 = '4100 (± 1440)'
- unparsed cell Yang_2021_table_4:row2:col5 = '64.0 (± 29.1)'
- unparsed cell Yang_2021_table_4:row3:col2 = '3960 (± 1220)'
- unparsed cell Yang_2021_table_4:row3:col3 = '70.6 (± 26.3)'
- unparsed cell Yang_2021_table_4:row3:col4 = '3760 (± 1190)'
- unparsed cell Yang_2021_table_4:row3:col5 = '58.8 (± 24.5)'
- unparsed cell Yang_2021_table_4:row4:col2 = '4200 (± 1430)'
- unparsed cell Yang_2021_table_4:row4:col3 = '74.0 (± 30.5)'
- unparsed cell Yang_2021_table_4:row4:col4 = '3190 (± 1110)'
- unparsed cell Yang_2021_table_4:row4:col5 = '49.0 (± 22.3)'
- companion parameter table 4 transcribed (5 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc6wk,ss, mean (sd)]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution]` | 5.89 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[wgt_on_clq]` | 0.477 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[wgt_on_vss]` | not captured | 0.970 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Nguyen_2022:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.89 L | not captured | not captured | ['Nguyen_2022:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cemiplimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2021` / `Yang_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:52 UTC</sub>
