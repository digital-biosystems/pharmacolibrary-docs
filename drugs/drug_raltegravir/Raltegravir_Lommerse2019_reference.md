<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;raltegravir&quot;,&quot;href&quot;:&quot;drugs/drug_raltegravir/&quot;},{&quot;label&quot;:&quot;Lommerse_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Raltegravir_Gurjar2023_reference&quot;,&quot;label&quot;:&quot;Gurjar_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_raltegravir/Raltegravir_Gurjar2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# raltegravir — `Raltegravir_Lommerse2019_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**The raltegravir mother–neonate model was held back because the volume of distribution (Vd) and absorption lag time (Tlag) had no extracted values, so library placeholder values stood in for these parameters.**

The record lists raltegravir parameters including V2 (7.04 L), V3 (10.3 L), CL (9.44 L/h), Q (0.786 L/h), kabs (0.43 1/h) and Fab (0.517), but the volume of distribution and absorption lag time had no value, so placeholders were used instead of explicit estimates. The parameter-coverage check expected 4 parameters emitted or defaulted and obtained only 3, with V2 neither emitted nor defaulted. The deviations check returned 'defaulted_parameters: not acceptable', confirming that placeholders rather than fitted values were used. Extracted — raltegravir: V2 7.04 L, V3 10.3 L, CL 9.44 L/h, Q 0.786 L/h, kabs 0.43 1/h, Fab 0.517.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has raltegravir, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Lommerse J et al., Maternal-Neonatal Raltegravir Populatio…, CPT: pharmacometrics & syst… (2019)
  ·  DOI: [10.1002/psp4.12443](https://doi.org/10.1002/psp4.12443)

<div class="pk-model-meta" hidden drug="raltegravir" model-id="Raltegravir_Lommerse2019_reference" status="model_quarantined" stale="false" population="mothers and neonates with in utero raltegravir exposure" measured-compound="raltegravir" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V2 | `Q64` · V2 | 7.04 | L | 0.00704 | L | not captured | exact (1.0) | psp412443-tbl-0002:row3:col2, psp412443-tbl-0002:row3:col3, psp412443-tbl-0002:row3:col4, psp412443-tbl-0002:row3:col5, psp412443-tbl-0002:row3:col6, psp412443-tbl-0002:row3:col7 | — | not captured |
| V3 | `Q77` · V3 | 10.3 | L | 0.0103 | L | not captured | exact (1.0) | psp412443-tbl-0002:row4:col2, psp412443-tbl-0002:row4:col3, psp412443-tbl-0002:row4:col4, psp412443-tbl-0002:row4:col5, psp412443-tbl-0002:row4:col6, psp412443-tbl-0002:row4:col7 | — | not captured |
| CLmax | `Q22` · CL | 9.44 | L/h | 2.6222222222222225e-06 | L/h | not captured | llm (0.6) | psp412443-tbl-0002:row5:col2, psp412443-tbl-0002:row5:col3, psp412443-tbl-0002:row5:col4, psp412443-tbl-0002:row5:col5, psp412443-tbl-0002:row5:col6, psp412443-tbl-0002:row5:col7 | — | 0.33 (None% RSE) |
| Q | `Q30` · Q | 0.786 | L/h | 2.1833333333333334e-07 | L/h | not captured | exact (1.0) | psp412443-tbl-0002:row6:col2, psp412443-tbl-0002:row6:col3, psp412443-tbl-0002:row6:col4, psp412443-tbl-0002:row6:col5, psp412443-tbl-0002:row6:col6, psp412443-tbl-0002:row6:col7 | — | not captured |
| KAmax | `Q49` · kabs | 0.43 | 1/h | 0.00011944444444444444 | 1/h | not captured | llm (0.6) | psp412443-tbl-0002:row7:col1, psp412443-tbl-0002:row7:col2, psp412443-tbl-0002:row7:col3, psp412443-tbl-0002:row7:col4, psp412443-tbl-0002:row7:col5, psp412443-tbl-0002:row7:col6, psp412443-tbl-0002:row7:col7 | — | 0.196 (None% RSE) |
| F | `Q40` · Fab | 0.517 | not captured | not captured | not captured | not captured | exact (1.0) | psp412443-tbl-0002:row21:col2, psp412443-tbl-0002:row21:col3, psp412443-tbl-0002:row21:col4, psp412443-tbl-0002:row21:col5, psp412443-tbl-0002:row21:col6, psp412443-tbl-0002:row21:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'RUV‐prop' routed out of structural estimates ('Residual error')
- table section residual_error: 'RUV‐add' routed out of structural estimates ('Residual error')
- column 'bootstrap result' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'raltegravir unexposed and raltegravir exposed' (CL)
- unit_dimension_unknown: 'raltegravir unexposed and raltegravir exposed' (kabs)
- dropped unlinked row (NIL): 'F4 (fixed)' — extend the ontology if this is a real PK parameter (source ['psp412443-tbl-0002:row8:col2', 'psp412443-tbl-0002:row8:col5', 'psp412443-tbl-0002:row8:col6', 'psp412443-tbl-0002:row8:col7'])
- dropped duplicate Q22 ('CLbase', value '0') — already have one for this compound
- dropped duplicate Q22 ('CLtau', value '11.3') — already have one for this compound
- dropped duplicate Q49 ('Kabase', value '0.0915') — already have one for this compound
- dropped unlinked row (NIL): 'Katau' — extend the ontology if this is a real PK parameter (source ['psp412443-tbl-0002:row12:col1', 'psp412443-tbl-0002:row12:col2', 'psp412443-tbl-0002:row12:col3', 'psp412443-tbl-0002:row12:col4', 'psp412443-tbl-0002:row12:col5', 'psp412443-tbl-0002:row12:col6', 'psp412443-tbl-0002:row12:col7'])
- unit_dimension_unknown: 'fixed' (V2)
- dropped duplicate Q64 ('V2 (fixed)', value '3.52') — already have one for this compound
- unit_dimension_unknown: 'fixed' (V3)
- dropped duplicate Q77 ('V3 (fixed)', value '27') — already have one for this compound
- unit_dimension_unknown: 'fixed' (CL)
- dropped duplicate Q22 ('CL (fixed)', value '9.73') — already have one for this compound
- unit_dimension_unknown: 'fixed' (Q)
- dropped duplicate Q30 ('Q (fixed)', value '0.866') — already have one for this compound
- dropped duplicate Q49 ('KA', value '0.175') — already have one for this compound
- NIL: refused to back-fill base 'allometric_exponent' from footnote/prose loose number 25 (source ['psp412443-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'V2' → L (from the paper text: '"The estimates of central V and peripheral V of distribution were 7.03 and 10.4 L, respectively."')
- implicit units: 'V3' → L (from the paper text: '"The estimates of central V and peripheral V of distribution were 7.03 and 10.4 L, respectively."')
- implicit units: 'CLmax' → L/h (from the paper text: '"the CL increased ... to an estimated 9.44 L/hour at full maturation"')
- implicit units: 'Q' → L/h (from the popPK convention: 'No unit stated for Q; intercompartmental clearances are conventionally in L/h, consistent with clearances in L/hour in t')
- implicit units: 'KAmax' → 1/h (from the paper text: '"At birth, the estimated KA was 0.0915 hour−1"; absorption rate constants are in 1/h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=raltegravir
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 0.517 | 0.734 | mismatch |
| `gpt-oss-120b` | `parameters[clmax].value` | 9.44 | 11.8 | mismatch |
| `gpt-oss-120b` | `parameters[f4]` | not captured | 15.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f].value` | 0.517 | 0.734 | mismatch |
| `gpt-oss-120b` | `parameters[kamax].value` | 0.43 | 0.875 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 0.786 | 1.2 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 7.04 | 9.91 | mismatch |
| `gpt-oss-120b` | `parameters[v3].value` | 10.3 | 13.4 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | raltegravir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | raltegravir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q40 | fail | 0.517 | 25.0 | 48.3559 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412443-tbl-0002:row5:col2', 'psp412443-tbl-0002:row5:col3', 'psp412443-tbl-0002:row5:col4', 'psp412443-tbl-0002:row5:col5', 'psp412443-tbl-0002:row5:col6', 'psp412443-tbl-0002:row5:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412443-tbl-0002:row6:col2', 'psp412443-tbl-0002:row6:col3', 'psp412443-tbl-0002:row6:col4', 'psp412443-tbl-0002:row6:col5', 'psp412443-tbl-0002:row6:col6', 'psp412443-tbl-0002:row6:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412443-tbl-0002:row7:col1', 'psp412443-tbl-0002:row7:col2', 'psp412443-tbl-0002:row7:col3', 'psp412443-tbl-0002:row7:col4', 'psp412443-tbl-0002:row7:col5', 'psp412443-tbl-0002:row7:col6', 'psp412443-tbl-0002:row7:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412443-tbl-0002:row3:col2', 'psp412443-tbl-0002:row3:col3', 'psp412443-tbl-0002:row3:col4', 'psp412443-tbl-0002:row3:col5', 'psp412443-tbl-0002:row3:col6', 'psp412443-tbl-0002:row3:col7'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412443-tbl-0002:row4:col2', 'psp412443-tbl-0002:row4:col3', 'psp412443-tbl-0002:row4:col4', 'psp412443-tbl-0002:row4:col5', 'psp412443-tbl-0002:row4:col6', 'psp412443-tbl-0002:row4:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.44 | not captured | not captured | ['psp412443-tbl-0002:row5:col2', 'psp412443-tbl-0002:row5:col3', 'psp412443-tbl-0002:row5:col4', 'psp412443-tbl-0002:row5:col5', 'psp412443-tbl-0002:row5:col6', 'psp412443-tbl-0002:row5:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.44 L/h | not captured | not captured | ['psp412443-tbl-0002:row5:col2', 'psp412443-tbl-0002:row5:col3', 'psp412443-tbl-0002:row5:col4', 'psp412443-tbl-0002:row5:col5', 'psp412443-tbl-0002:row5:col6', 'psp412443-tbl-0002:row5:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.04 L | not captured | not captured | ['psp412443-tbl-0002:row3:col2', 'psp412443-tbl-0002:row3:col3', 'psp412443-tbl-0002:row3:col4', 'psp412443-tbl-0002:row3:col5', 'psp412443-tbl-0002:row3:col6', 'psp412443-tbl-0002:row3:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_raltegravir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lommerse_2019` / `Lommerse_2019::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_raltegravir/models/modelica/_needs_review/Raltegravir_Lommerse2019_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_raltegravir/models/modelica/_needs_review/Raltegravir_Lommerse2019_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:27 UTC</sub>
