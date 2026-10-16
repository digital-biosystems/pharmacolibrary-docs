<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;cabazitaxel&quot;,&quot;href&quot;:&quot;drugs/drug_cabazitaxel/&quot;},{&quot;label&quot;:&quot;Ferron_2013 \u00b7 ted6189&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cabazitaxel — `Cabazitaxel_Ferron2013_ted6189`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**CL, V and Vss have no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.279).**

Without a unit the value cannot be converted, so the model cannot use it. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (CL, V and Vss), so that value has no SI equivalent. Extracted — cabazitaxel: CL 25.5 n = 13, V 16 n = 13, Vss 3.16e+03 n = 13, t1/2α 3.38 min, t1/2β 1.9 h, t1/2γ 130 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Ferron GM et al., Population pharmacokinetics of cabazita…, Cancer chemotherapy and pha… (2013)
  ·  DOI: [10.1007/s00280-012-2058-9](https://doi.org/10.1007/s00280-012-2058-9)

<div class="pk-model-meta" hidden drug="cabazitaxel" model-id="Cabazitaxel_Ferron2013_ted6189" status="needs_review" stale="false" population="patients with advanced solid tumors" measured-compound="cabazitaxel" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/h/m2 | `Q22` · CL | 25.5 | n = 13 | not captured | [n=13] | not captured | llm_confirmed (0.6) | Ferron_2013_table_5:row0:col3 | — | not captured |
| V1, L/m2 | `Q61` · V | 16.0 | n = 13 | not captured | [n=13] | not captured | llm_confirmed (0.6) | Ferron_2013_table_5:row1:col3 | — | not captured |
| V ss, L/m² | `Q65` · Vss | 3160 | n = 13 | not captured | [n=13] | not captured | llm (0.6) | Ferron_2013_table_5:row2:col3 | — | not captured |
| t 1/2α, min | `Q59` · t1/2α | 3.38 | min | 202.79999999999998 | [min] | not captured | space_fold (0.95) | Ferron_2013_table_5:row3:col3 | — | not captured |
| t 1/2β, h | `Q60` · t1/2β | 1.90 | h | 6840.0 | [h] | not captured | space_fold (0.95) | Ferron_2013_table_5:row4:col3 | — | not captured |
| t 1/2γ, h | `Q89` · t1/2γ | 130 | h | 468000.0 | [h] | not captured | space_fold (0.95) | Ferron_2013_table_5:row5:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n = 13' (CL)
- unit_dimension_unknown: 'n = 13' (V1)
- unit_dimension_unknown: 'n = 13' (Vss)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 170 (source ['Tab4:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL, L/h/m2' — the LLM proposed 'L/h/m2', whose dimension does not fit Q22; left unset
- implicit units: 'V1, L/m2' — the LLM proposed 'L/m2', whose dimension does not fit Q63; left unset
- implicit units: 'V ss, L/m²' — the LLM proposed 'L/m2', whose dimension does not fit Q65; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cabazitaxel
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1, L/m2' is the general volume)
- status held at route_to_review — not promoted
- population split: 'ted6189(n = 13)' subgroup of Ferron_2013 (paper reports 6 populations: all(n = 170), ard6191(n = 34), efc6193(n = 67), ted6188(n = 21), ted6189(n = 13), ted6190(n = 35))

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
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 1.56 | 0.435 | 0.2788 | 0.25 | reported t½β |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Ferron_2013_table_5:row3:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Ferron_2013_table_5:row4:col3'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['Ferron_2013_table_5:row5:col3'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | n = 13 | not captured | not captured | ['Ferron_2013_table_5:row0:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | n = 13 | not captured | not captured | ['Ferron_2013_table_5:row1:col3'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 | n = 13 | not captured | not captured | ['Ferron_2013_table_5:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25.5 | not captured | not captured | ['Ferron_2013_table_5:row0:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cabazitaxel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ferron_2013` / `Ferron_2013::ted6189`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:34 UTC</sub>
