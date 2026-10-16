<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;empagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/&quot;},{&quot;label&quot;:&quot;Rascher_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Baron_2016_FPG&quot;,&quot;label&quot;:&quot;Baron_2016 \u00b7 FPG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Baron_2016_FPG.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rascher_2025_HbA1c&quot;,&quot;label&quot;:&quot;Rascher_2025 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Rascher_2025_HbA1c.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sato_2024_HbA1c&quot;,&quot;label&quot;:&quot;Sato_2024 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Sato_2024_HbA1c.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# empagliflozin — `Empagliflozin_Rascher2025_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**Empagliflozin's volume of distribution and absorption lag time lacked extracted values, so placeholders were used and the model was quarantined.**

The record describes a three-compartment model but provides no specific values for the volume of distribution or absorption lag time. Because these parameters were missing, generic placeholders were substituted instead of explicit estimates. This lack of specific data prevented the model from being published. Extracted — empagliflozin: CL/F 1 L/h, V2/F 1 L, kabs 1 1/h, Q/F 1 L/h, V3/F 1 L, D1 1 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has empagliflozin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Rascher J et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2025)
  ·  DOI: [10.1002/bcp.70096](https://doi.org/10.1002/bcp.70096)

<div class="pk-model-meta" hidden drug="empagliflozin" model-id="Empagliflozin_Rascher2025_reference" status="model_quarantined" stale="false" population="paediatric patients aged 10–17 years with type 2 diabetes mellitus" measured-compound="empagliflozin" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 1.00 | L/h | 2.7777777777777776e-07 | [l] / [h] | not captured | exact (1.0) | bcp70096-tbl-0003:row2:col3, bcp70096-tbl-0003:row2:col5, bcp70096-tbl-0003:row2:col6, bcp70096-tbl-0003:row2:col7 | — | 33.3 (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 1.00 | L | 0.001 | [l] | not captured | exact (1.0) | bcp70096-tbl-0003:row3:col3, bcp70096-tbl-0003:row3:col5, bcp70096-tbl-0003:row3:col6, bcp70096-tbl-0003:row3:col7 | — | not captured |
| KA (1/h) | `Q49` · kabs | 1.00 | 1/h | 0.0002777777777777778 | 1/h | not captured | exact (1.0) | bcp70096-tbl-0003:row4:col3, bcp70096-tbl-0003:row4:col5, bcp70096-tbl-0003:row4:col6, bcp70096-tbl-0003:row4:col7 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 1.00 | L/h | 2.7777777777777776e-07 | [l] / [h] | not captured | exact (1.0) | bcp70096-tbl-0003:row5:col3, bcp70096-tbl-0003:row5:col5, bcp70096-tbl-0003:row5:col6, bcp70096-tbl-0003:row5:col7 | — | not captured |
| V3/F (L) | `Q78` · V3/F | 1.00 | L | 0.001 | [l] | not captured | exact (1.0) | bcp70096-tbl-0003:row6:col3, bcp70096-tbl-0003:row6:col5, bcp70096-tbl-0003:row6:col6, bcp70096-tbl-0003:row6:col7 | — | not captured |
| D1 (h) | `Q310` · D1 | 1.00 | h | 3600.0 | [h] | not captured | exact (1.0) | bcp70096-tbl-0003:row7:col3, bcp70096-tbl-0003:row7:col5, bcp70096-tbl-0003:row7:col6, bcp70096-tbl-0003:row7:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ΩCL/F' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Σ11' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Σ22' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Σ33' routed out of structural estimates ('Residual variability')
- column 'bulk ess' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'tail ess' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q27 ('EGFRCL/F', value '1.00') — already have one for this compound
- dropped unlinked row (NIL): 'BLACKCL/F' — extend the ontology if this is a real PK parameter (source ['bcp70096-tbl-0003:row10:col3', 'bcp70096-tbl-0003:row10:col5', 'bcp70096-tbl-0003:row10:col6', 'bcp70096-tbl-0003:row10:col7'])
- dropped unlinked row (NIL): 'ASIANCL/F' — extend the ontology if this is a real PK parameter (source ['bcp70096-tbl-0003:row11:col3', 'bcp70096-tbl-0003:row11:col5', 'bcp70096-tbl-0003:row11:col6', 'bcp70096-tbl-0003:row11:col7'])
- dropped unlinked row (NIL): 'FEMALECL/F' — extend the ontology if this is a real PK parameter (source ['bcp70096-tbl-0003:row12:col3', 'bcp70096-tbl-0003:row12:col5', 'bcp70096-tbl-0003:row12:col6', 'bcp70096-tbl-0003:row12:col7'])
- implicit units: 'KA (1/h)' → 1/h (from the popPK convention: "The paper text describes the parameter as 'absorption rate constant (ka)'. In population pharmacokinetics, first-order r")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=empagliflozin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell bcp70096-tbl-0003:row2:col1 = 'exp(Ɵ 1)'
- unparsed cell bcp70096-tbl-0003:row2:col4 = '(5.71, 7.90)'
- unparsed cell bcp70096-tbl-0003:row3:col1 = 'exp(Ɵ 2)'
- unparsed cell bcp70096-tbl-0003:row3:col4 = '(1.30, 6.63)'
- unparsed cell bcp70096-tbl-0003:row4:col1 = 'exp(Ɵ 3)'
- unparsed cell bcp70096-tbl-0003:row4:col4 = '(0.232, 0.246)'
- unparsed cell bcp70096-tbl-0003:row5:col1 = 'exp(Ɵ 4)'
- unparsed cell bcp70096-tbl-0003:row5:col4 = '(5.22, 5.83)'
- unparsed cell bcp70096-tbl-0003:row6:col1 = 'exp(Ɵ 5)'
- unparsed cell bcp70096-tbl-0003:row6:col4 = '(67.6, 76.2)'
- unparsed cell bcp70096-tbl-0003:row7:col1 = 'exp(Ɵ 6)'
- unparsed cell bcp70096-tbl-0003:row7:col4 = '(0.199, 0.542)'
- unparsed cell bcp70096-tbl-0003:row9:col1 = 'Ɵ 7'
- unparsed cell bcp70096-tbl-0003:row9:col4 = '(0.363, 0.454)'
- unparsed cell bcp70096-tbl-0003:row10:col1 = 'exp(Ɵ 8)'
- unparsed cell bcp70096-tbl-0003:row10:col4 = '(0.834, 0.967)'
- unparsed cell bcp70096-tbl-0003:row11:col1 = 'exp(Ɵ 9)'
- unparsed cell bcp70096-tbl-0003:row11:col4 = '(0.904, 0.965)'
- unparsed cell bcp70096-tbl-0003:row12:col1 = 'exp(Ɵ 10)'
- unparsed cell bcp70096-tbl-0003:row12:col4 = '(0.977, 1.45)'
- unparsed cell bcp70096-tbl-0003:row14:col1 = 'Ω1,1'
- unparsed cell bcp70096-tbl-0003:row14:col4 = '(25.3, 44.0)'
- unparsed cell bcp70096-tbl-0003:row16:col1 = 'Σ1,1'
- unparsed cell bcp70096-tbl-0003:row16:col4 = '(41.9, 54.2)'
- unparsed cell bcp70096-tbl-0003:row17:col1 = 'Σ2,2'
- unparsed cell bcp70096-tbl-0003:row17:col4 = '(0.664, 5.94)'
- unparsed cell bcp70096-tbl-0003:row18:col1 = 'Σ3,3'
- unparsed cell bcp70096-tbl-0003:row18:col4 = '(213, 731)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | empagliflozin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | empagliflozin | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70096-tbl-0003:row2:col3', 'bcp70096-tbl-0003:row2:col5', 'bcp70096-tbl-0003:row2:col6', 'bcp70096-tbl-0003:row2:col7'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['bcp70096-tbl-0003:row7:col3', 'bcp70096-tbl-0003:row7:col5', 'bcp70096-tbl-0003:row7:col6', 'bcp70096-tbl-0003:row7:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp70096-tbl-0003:row4:col3', 'bcp70096-tbl-0003:row4:col5', 'bcp70096-tbl-0003:row4:col6', 'bcp70096-tbl-0003:row4:col7'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70096-tbl-0003:row5:col3', 'bcp70096-tbl-0003:row5:col5', 'bcp70096-tbl-0003:row5:col6', 'bcp70096-tbl-0003:row5:col7'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70096-tbl-0003:row6:col3', 'bcp70096-tbl-0003:row6:col5', 'bcp70096-tbl-0003:row6:col6', 'bcp70096-tbl-0003:row6:col7'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70096-tbl-0003:row3:col3', 'bcp70096-tbl-0003:row3:col5', 'bcp70096-tbl-0003:row3:col6', 'bcp70096-tbl-0003:row3:col7'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1 L/h | not captured | not captured | ['bcp70096-tbl-0003:row2:col3', 'bcp70096-tbl-0003:row2:col5', 'bcp70096-tbl-0003:row2:col6', 'bcp70096-tbl-0003:row2:col7'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1 L | not captured | not captured | ['bcp70096-tbl-0003:row3:col3', 'bcp70096-tbl-0003:row3:col5', 'bcp70096-tbl-0003:row3:col6', 'bcp70096-tbl-0003:row3:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'Q/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_empagliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rascher_2025` / `Rascher_2025::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_empagliflozin/models/modelica/_needs_review/Empagliflozin_Rascher2025_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_empagliflozin/models/modelica/_needs_review/Empagliflozin_Rascher2025_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 23:44 UTC</sub>
