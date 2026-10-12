<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;febuxostat&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/&quot;},{&quot;label&quot;:&quot;Iwama_2024 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Febuxostat_Kamel2022_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Febuxostat_Kamel2022_se_for_the_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_se_for_the_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_se_for_the_estimate.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# febuxostat — `Febuxostat_Iwama2024_median`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

**Febuxostat's central volume of distribution and absorption lag time lacked fitted values, causing the model to be quarantined.**

The model structure includes a central volume parameter, but the extracted value for V2/F (19.4 L) was not recognized as the central volume, leading to a coverage failure where the central volume parameter remained at its default placeholder. Consequently, the absorption lag time also lacked an extracted value and was set to a default. These missing explicit estimates for the core pharmacokinetic parameters of the measured compound required the use of library placeholders, which prevented publication. Extracted — febuxostat: CL/F 6.52 L/h, V2/F 19.4 L, Q/F 1.79 L/h, V3/F 15.6 L, kabs 3.51 1/h, Fab 0.839 FED.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has febuxostat, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Iwama R et al., An integrated population pharmacokineti…, Pharmacology research & per… (2024)
  ·  DOI: [10.1002/prp2.70032](https://doi.org/10.1002/prp2.70032)

<div class="pk-model-meta" hidden drug="febuxostat" model-id="Febuxostat_Iwama2024_median" status="model_quarantined" stale="false" population="pediatric patients with hyperuricemia and adult subjects" measured-compound="febuxostat" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 6.52 | L/h | 1.8111111111111111e-06 | [l] / [h] | not captured | exact (1.0) | prp270032-tbl-0002:row2:col7 | — | 0.0674 (None% RSE) |
| V2/F, L | `Q82` · V2/F | 19.4 | L | 0.0194 | [l] | not captured | exact (1.0) | prp270032-tbl-0002:row3:col7 | — | 0.0633 (None% RSE) |
| Q/F, L/h | `Q69` · Q/F | 1.79 | L/h | 4.972222222222223e-07 | [l] / [h] | not captured | exact (1.0) | prp270032-tbl-0002:row4:col7 | — | 0.409 (None% RSE) |
| V3/F, L | `Q78` · V3/F | 15.6 | L | 0.0156 | [l] | not captured | exact (1.0) | prp270032-tbl-0002:row5:col7 | — | 0.302 (None% RSE) |
| Ka, 1/h | `Q49` · kabs | 3.51 | 1/h | 0.000975 | [1] / [h] | not captured | exact (1.0) | prp270032-tbl-0002:row6:col7 | — | 2.37 (None% RSE) |
| F1 (FED) | `Q40` · Fab | 0.839 | FED | not captured | [fed] | not captured | exact (1.0) | prp270032-tbl-0002:row8:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ 2 (exponential error)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ALAG1, h' — extend the ontology if this is a real PK parameter (source ['prp270032-tbl-0002:row7:col7'])
- unit_dimension_unknown: 'FED' (Fab)
- dropped unlinked row (NIL): 'CLWGT' — extend the ontology if this is a real PK parameter (source ['prp270032-tbl-0002:row9:col7'])
- dropped unlinked row (NIL): 'CLEGFR' — extend the ontology if this is a real PK parameter (source ['prp270032-tbl-0002:row10:col7'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=febuxostat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'median' subgroup of Iwama_2024 (paper reports 2 populations: estimate, median)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp270032-tbl-0002:row2:col5 = '6.14, 6.92'
- unparsed cell prp270032-tbl-0002:row2:col8 = '6.13, 6.93'
- unparsed cell prp270032-tbl-0002:row3:col5 = '17.8, 21.0'
- unparsed cell prp270032-tbl-0002:row3:col8 = '17.9, 21.1'
- unparsed cell prp270032-tbl-0002:row4:col5 = '1.55, 2.05'
- unparsed cell prp270032-tbl-0002:row4:col8 = '1.52, 2.06'
- unparsed cell prp270032-tbl-0002:row5:col5 = '14.0, 17.2'
- unparsed cell prp270032-tbl-0002:row5:col8 = '13.8, 17.3'
- unparsed cell prp270032-tbl-0002:row6:col5 = '1.78, 5.08'
- unparsed cell prp270032-tbl-0002:row6:col8 = '2.47, 14.5'
- unparsed cell prp270032-tbl-0002:row7:col5 = '0.398, 0.476'
- unparsed cell prp270032-tbl-0002:row7:col8 = '0.406, 0.492'
- unparsed cell prp270032-tbl-0002:row8:col5 = '0.773, 0.903'
- unparsed cell prp270032-tbl-0002:row8:col8 = '0.780, 0.906'
- unparsed cell prp270032-tbl-0002:row9:col5 = '0.351, 0.817'
- unparsed cell prp270032-tbl-0002:row9:col8 = '0.347, 0.853'
- unparsed cell prp270032-tbl-0002:row10:col5 = '0.214, 0.434'
- unparsed cell prp270032-tbl-0002:row10:col8 = '0.207, 0.441'
- unparsed cell prp270032-tbl-0002:row12:col5 = '0.0435, 0.0889'
- unparsed cell prp270032-tbl-0002:row12:col8 = '0.0430, 0.0894'
- unparsed cell prp270032-tbl-0002:row13:col5 = '0.0279, 0.0687'
- unparsed cell prp270032-tbl-0002:row13:col8 = '0.0274, 0.0719'
- unparsed cell prp270032-tbl-0002:row15:col5 = '0.0258, 0.102'
- unparsed cell prp270032-tbl-0002:row15:col8 = '0.0312, 0.107'
- unparsed cell prp270032-tbl-0002:row16:col5 = '0.268, 0.554'
- unparsed cell prp270032-tbl-0002:row16:col8 = '0.281, 0.575'
- unparsed cell prp270032-tbl-0002:row17:col5 = '0.196, 0.418'
- unparsed cell prp270032-tbl-0002:row17:col8 = '0.209, 0.418'
- unparsed cell prp270032-tbl-0002:row19:col5 = '0.155, 0.363'
- unparsed cell prp270032-tbl-0002:row19:col8 = '0.165, 0.364'
- unparsed cell prp270032-tbl-0002:row20:col5 = '1.34, 3.34'
- unparsed cell prp270032-tbl-0002:row20:col8 = '1.60, 5.80'
- unparsed cell prp270032-tbl-0002:row24:col5 = '0.120, 0.152'
- unparsed cell prp270032-tbl-0002:row24:col8 = '0.120, 0.153'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag1]` | not captured | 0.438 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clwgt]` | not captured | 0.580 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | febuxostat | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | febuxostat | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp270032-tbl-0002:row2:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp270032-tbl-0002:row6:col7'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp270032-tbl-0002:row4:col7'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp270032-tbl-0002:row5:col7'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp270032-tbl-0002:row3:col7'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.52 L/h | not captured | not captured | ['prp270032-tbl-0002:row2:col7'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 19.4 L | not captured | not captured | ['prp270032-tbl-0002:row3:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_febuxostat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Iwama_2024` / `Iwama_2024::median`)
- model: `../../../knowledgebase/drugs/drug_febuxostat/models/modelica/_needs_review/Febuxostat_Iwama2024_median.mo`
- deviation: `../../../knowledgebase/drugs/drug_febuxostat/models/modelica/_needs_review/Febuxostat_Iwama2024_median.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:23 UTC</sub>
