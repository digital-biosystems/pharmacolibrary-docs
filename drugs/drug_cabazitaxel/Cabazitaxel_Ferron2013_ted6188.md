<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;cabazitaxel&quot;,&quot;href&quot;:&quot;drugs/drug_cabazitaxel/&quot;},{&quot;label&quot;:&quot;Ferron_2013 \u00b7 ted6188&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cabazitaxel — `Cabazitaxel_Ferron2013_ted6188`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL, V and Vss have no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.221).

<div class="pk-model-meta" hidden drug="cabazitaxel" model-id="Cabazitaxel_Ferron2013_ted6188" status="needs_review" stale="false" population="patients with advanced solid tumors" measured-compound="cabazitaxel" parameterization="mechanistic" topology="1C"></div>

## Citation
Ferron GM, Dai Y, Semiond D. Population pharmacokinetics of cabazitaxel in patients with advanced solid tumors. Cancer chemotherapy and pharmacology 71(3):681–692 (2013).
  ·  DOI: [10.1007/s00280-012-2058-9](https://doi.org/10.1007/s00280-012-2058-9)

## Population and dosing

**Population:** patients with advanced solid tumors · condition advanced solid tumors · age group adult.

**Dosing:** 10, 30 mg/m2, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL, L/h/m2 | CL | 34.5 | n = 21 |
| V1, L/m2 | V | 17.1 | n = 21 |
| V ss, L/m² | Vss | 3660 | n = 21 |
| t 1/2α, min | t1/2α | 3.57 | min |
| t 1/2β, h | t1/2β | 1.56 | h |
| t 1/2γ, h | t1/2γ | 108 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL, V and Vss have no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.221).**

Without a unit the value cannot be converted, so the model cannot use it. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (CL, V and Vss), so that value has no SI equivalent. Extracted — cabazitaxel: CL 34.5 n = 21, V 17.1 n = 21, Vss 3.66e+03 n = 21, t1/2α 3.57 min, t1/2β 1.56 h, t1/2γ 108 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, L/h/m2 | `Q22` · CL | 34.5 | n = 21 |  |  | n=21 | llm_confirmed (0.6) | Ferron_2013_table_5:row0:col2 |
| V1, L/m2 | `Q61` · V | 17.1 | n = 21 |  |  | n=21 | llm_confirmed (0.6) | Ferron_2013_table_5:row1:col2 |
| V ss, L/m² | `Q65` · Vss | 3660 | n = 21 |  |  | n=21 | llm (0.6) | Ferron_2013_table_5:row2:col2 |
| t 1/2α, min | `Q59` · t1/2α | 3.57 | min | 214.2 | s | min | space_fold (0.95) | Ferron_2013_table_5:row3:col2 |
| t 1/2β, h | `Q60` · t1/2β | 1.56 | h | 5616 | s | h | space_fold (0.95) | Ferron_2013_table_5:row4:col2 |
| t 1/2γ, h | `Q89` · t1/2γ | 108 | h | 3.888e+05 | s | h | space_fold (0.95) | Ferron_2013_table_5:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n = 21' (CL)
- unit_dimension_unknown: 'n = 21' (V1)
- unit_dimension_unknown: 'n = 21' (Vss)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 170 (source ['Tab4:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL, L/h/m2' — the LLM proposed 'L/h/m2', whose dimension does not fit Q22; left unset
- implicit units: 'V1, L/m2' — the LLM proposed 'L/m2', whose dimension does not fit Q63; left unset
- implicit units: 'V ss, L/m²' — the LLM proposed 'L/m2', whose dimension does not fit Q65; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cabazitaxel
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1, L/m2' is the general volume)
- status held at "Needs review" — not promoted
- population split: 'ted6188(n = 21)' subgroup of Ferron_2013 (paper reports 6 populations: all(n = 170), ard6191(n = 34), efc6193(n = 67), ted6188(n = 21), ted6189(n = 13), ted6190(n = 35))

**Extraction notes:**
- unparsed cell Tab4:row1:col3 = '95 % CI (lower)'
- unparsed cell Tab4:row1:col4 = '95 % CI (upper)'
- transposed table Ferron_2013_table_5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 5 transcribed (36 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 1.56 | 0.344 | 0.2205 | 0.25 | reported t½β |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Ferron_2013_table_5:row3:col2'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Ferron_2013_table_5:row4:col2'] |
| C5_dimension_Q89 | pass | [time] |  |  |  | ['Ferron_2013_table_5:row5:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | n = 21 |  |  | ['Ferron_2013_table_5:row0:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | n = 21 |  |  | ['Ferron_2013_table_5:row1:col2'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 | n = 21 |  |  | ['Ferron_2013_table_5:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 34.5 |  |  | ['Ferron_2013_table_5:row0:col2'] |
| C8_topology | pass |  |  |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcabazitaxel%5D%20Cabazitaxel_Ferron2013_ted6188&body=Drug%3A%20cabazitaxel%0ARecord%3A%20Cabazitaxel_Ferron2013_ted6188%0APaper%3A%20Ferron_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cabazitaxel/Cabazitaxel_Ferron2013_ted6188%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:34 UTC</sub>
