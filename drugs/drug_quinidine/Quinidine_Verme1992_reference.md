<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;quinidine&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/&quot;},{&quot;label&quot;:&quot;Verme_1992 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinidine_Kuroda2024_reference&quot;,&quot;label&quot;:&quot;Kuroda_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinidine — `Quinidine_Verme1992_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:31 UTC (Rejected), but the paper was screened again on 2026-10-08 21:32 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The quinidine record was rejected because its clearance parameter is actually calculated creatinine clearance (50 ml/min), a biomarker, not quinidine clearance, and the abstract-only source left ka and Tlag defaulted with an apparent F=1 parameterization.

<div class="pk-model-meta" hidden drug="quinidine" model-id="Quinidine_Verme1992_reference" status="needs_review" stale="true" population="adult hospitalised men" measured-compound="quinidine" parameterization="mechanistic" topology="1C"></div>

## Citation
Verme CN, Ludden TM, Clementi WA, Harris SC. Pharmacokinetics of quinidine in male patients. A population analysis. Clinical pharmacokinetics 22(6):468–480 (1992).
  ·  DOI: [10.2165/00003088-199222060-00005](https://doi.org/10.2165/00003088-199222060-00005)

## Population and dosing

**Population:** adult hospitalised men · condition mixed · age group adult · n = &gt;=139.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| P₁₂ | k12 | -0.178 | 1/h | 38.1 |
| unexplained intersubject variance (proportional variance model) in clearance | CL | 0.0566 | clearance |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The quinidine record was rejected because its clearance parameter is actually calculated creatinine clearance (50 ml/min), a biomarker, not quinidine clearance, and the abstract-only source left ka and Tlag defaulted with an apparent F=1 parameterization.**

The analyte-identity check failed: the disposition parameter labelled 'calculated creatinine clearance' (50 ml/min) names a biomarker rather than quinidine or its metabolites, so the drug's own clearance is absent. The record was built from the abstract alone, so summary statistics stood in for a fitted model, and the builder substituted defaults for ka and Tlag, assumed F=1 and Fm=1 without molar correction, and used first-order depot input giving an apparent (/F) parameterization. A second reader disagreed on the parameterization (mechanistic rather than apparent) and returned no values for the 50 ml/min and 230 L parameters. Extracted — quinidine: V/F 230 L, CL 50 ml/min.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of p1: this record has none, the second reading 18.0; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| P₁₂ | `Q301` · k12 | -0.178 | 1/h | -4.944e-05 | 1/s | 1/h | 38.1 | llm (0.6) | Verme_1992_table_4:row6:col1, Verme_1992_table_4:row6:col2, Verme_1992_table_4:row6:col3 |
| unexplained intersubject variance (proportional variance model) in clearance | `Q22` · CL | 0.0566 | clearance |  |  | clearance |  | boundary (0.8) | Verme_1992:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'P₁' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_4:row0:col1', 'Verme_1992_table_4:row0:col2', 'Verme_1992_table_4:row0:col3'])
- dropped unlinked row (NIL): 'P₂' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_4:row1:col1', 'Verme_1992_table_4:row1:col2', 'Verme_1992_table_4:row1:col3'])
- dropped unlinked row (NIL): 'P₅' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_4:row2:col1', 'Verme_1992_table_4:row2:col2', 'Verme_1992_table_4:row2:col3'])
- dropped unlinked row (NIL): 'P₆' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_4:row3:col1', 'Verme_1992_table_4:row3:col2', 'Verme_1992_table_4:row3:col3'])
- dropped unlinked row (NIL): 'P₇' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_4:row4:col1', 'Verme_1992_table_4:row4:col2', 'Verme_1992_table_4:row4:col3'])
- dropped unlinked row (NIL): 'P₁₀' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_4:row5:col1', 'Verme_1992_table_4:row5:col2', 'Verme_1992_table_4:row5:col3'])
- dropped unlinked row (NIL): 'P1' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_6:row0:col1', 'Verme_1992_table_6:row0:col2', 'Verme_1992_table_6:row0:col3'])
- dropped unlinked row (NIL): 'P2' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_6:row1:col1', 'Verme_1992_table_6:row1:col2', 'Verme_1992_table_6:row1:col3'])
- dropped unlinked row (NIL): 'P12' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_6:row2:col1', 'Verme_1992_table_6:row2:col2', 'Verme_1992_table_6:row2:col3'])
- dropped unlinked row (NIL): 'P15' — extend the ontology if this is a real PK parameter (source ['Verme_1992_table_6:row3:col1', 'Verme_1992_table_6:row3:col2', 'Verme_1992_table_6:row3:col3'])
- dropped value-less row: 'P16'
- table mostly unlinked (10/11 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q22 ('unexplained intersubject variance (proportional variance model) in clearance'=0.0566) from results prose — parameter table was unreadable
- implicit units: 'P₁₂' → 1/h (from the popPK convention: 'The parameter is identified as a first-order transfer rate constant (k12). In population pharmacokinetics, first-order r')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4, 6
- unparsed cell Verme_1992_table_6:row4:col1 = '25 922'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[p1]` |  | 18.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[unexplained intersubject variance (proportional variance model) in clearance]` | 0.0566 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Verme_1992_table_4:row6:col1', 'Verme_1992_table_4:row6:col2', 'Verme_1992_table_4:row6:col3'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | clearance | ['Verme_1992:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0566 | ['Verme_1992:results_prose'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | fail | quinidine (or metabolite) | calculated creatinine clearance | disposition label(s) name a biomarker, not quinidine: 'calculated creatinine clearance' |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=quinidine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinidine%5D%20Quinidine_Verme1992_reference&body=Drug%3A%20quinidine%0ARecord%3A%20Quinidine_Verme1992_reference%0APaper%3A%20Verme_1992%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quinidine/Quinidine_Verme1992_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-08 21:32 UTC</sub>
