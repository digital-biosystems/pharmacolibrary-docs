<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belzutifan&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/&quot;},{&quot;label&quot;:&quot;Marathe_2023 \u00b7 geometric_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Belzutifan_Marathe2023_arithmetic_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Belzutifan_Marathe2023_geometric_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belzutifan — `Belzutifan_Marathe2023_geometric_mean`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.815). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00136, model 0.00085).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUCt, Cmin and Cmax), so that value has no SI equivalent. Extracted — belzutifan: CL/F 7.25 L/h, V/F 130 L, kabs 2.51 1/h, AUCt 16.7 μg∙h/mL, Cmin 307 ng/mL, Cmax 1.36e+03 ng/mL, tmax 1.42 h, t1/2α 2.6 h, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has belzutifan, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028)

<div class="pk-model-meta" hidden drug="belzutifan" model-id="Belzutifan_Marathe2023_geometric_mean" status="needs_review" stale="false" population="patients with VHL disease-associated RCC, CNS hemangioblastomas, and pancreatic neuroendocrine tumors" measured-compound="belzutifan" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 7.25 | L/h | 2.013888888888889e-06 | [l] / [h] | 51.36 | exact (1.0) | Marathe_2023_table_5:row0:col2, Marathe_2023_table_5:row0:col3 | — | not captured |
| V d/F (L) | `Q76` · V/F | 129.5 | L | 0.1295 | [l] | 35.18 | space_fold (0.95) | Marathe_2023_table_5:row1:col2, Marathe_2023_table_5:row1:col3 | — | not captured |
| KA (1/h) | `Q49` · kabs | 2.51 | 1/h | 0.0006972222222222221 | 1/h | 145.43 | exact (1.0) | Marathe_2023_table_5:row2:col2, Marathe_2023_table_5:row2:col3 | — | not captured |
| AUC0–24h (μg∙h/mL) | `Q19` · AUCt | 16.71 | μg∙h/mL | not captured | [[h] · [µg]] / [ml] | 52.34 | llm (0.6) | Marathe_2023_table_5:row4:col2, Marathe_2023_table_5:row4:col3 | — | not captured |
| C min (ng/mL) | `Q36` · Cmin | 306.66 | ng/mL | not captured | [ng] / [ml] | 92.3 | space_fold (0.95) | Marathe_2023_table_5:row5:col2, Marathe_2023_table_5:row5:col3 | — | not captured |
| C max (ng/mL) | `Q32` · Cmax | 1362.54 | ng/mL | not captured | [ng] / [ml] | 39.77 | space_fold (0.95) | Marathe_2023_table_5:row7:col2, Marathe_2023_table_5:row7:col3 | — | not captured |
| T max (h) | `Q56` · tmax | 1.42 | h | 5112.0 | [h] | 69.72 | space_fold (0.95) | Marathe_2023_table_5:row9:col2, Marathe_2023_table_5:row9:col3 | — | not captured |
| t 1/2 alpha (h) | `Q59` · t1/2α | 2.60 | h | 9360.0 | [h] | 37.28 | llm_corrected (0.6) | Marathe_2023_table_5:row11:col2, Marathe_2023_table_5:row11:col3 | — | not captured |
| t 1/2 beta (h) | `Q60` · t1/2β | 14.34 | h | 51624.0 | [h] | 36.82 | llm_corrected (0.6) | Marathe_2023_table_5:row12:col2, Marathe_2023_table_5:row12:col3 | — | not captured |
| t 1/2 eff (h) | `Q57` · t1/2z | 12.39 | h | 44604.0 | [h] | 41.61 | llm (0.6) | Marathe_2023_table_5:row13:col2, Marathe_2023_table_5:row13:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'FMF' — extend the ontology if this is a real PK parameter (source ['Marathe_2023_table_5:row3:col2', 'Marathe_2023_table_5:row3:col3', 'Marathe_2023_table_5:row6:col2', 'Marathe_2023_table_5:row6:col3', 'Marathe_2023_table_5:row8:col2', 'Marathe_2023_table_5:row8:col3', 'Marathe_2023_table_5:row10:col2', 'Marathe_2023_table_5:row10:col3', 'Marathe_2023_table_5:row15:col2', 'Marathe_2023_table_5:row15:col3'])
- dropped duplicate Q57 ('t 1/2 abs (h)', value '0.28') — already have one for this compound
- implicit units: 'KA (1/h)' → 1/h (from the popPK convention: 'The parameter is the absorption rate constant (KA). In population pharmacokinetic modeling, first-order rate constants a')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=belzutifan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = CL/Fpop * (WT/73.64)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'geometric mean' subgroup of Marathe_2023 (paper reports 4 populations: absolute parameter value, arithmetic mean, estimate, geometric mean)

**Extraction notes:**
- unparsed cell psp413028-tbl-0002:row2:col3 = '5.25; 6.00'
- unparsed cell psp413028-tbl-0002:row3:col3 = '80.55; 90.26'
- unparsed cell psp413028-tbl-0002:row4:col3 = '3.89; 6.85'
- unparsed cell psp413028-tbl-0002:row5:col3 = '26.42; 34.34'
- unparsed cell psp413028-tbl-0002:row6:col3 = '2.04; 2.76'
- unparsed cell psp413028-tbl-0002:row7:col3 = '0.16; 0.17'
- unparsed cell psp413028-tbl-0002:row8:col3 = '−1.00; −0.75'
- unparsed cell psp413028-tbl-0002:row9:col3 = '0.45; 0.84'
- unparsed cell psp413028-tbl-0002:row10:col3 = '0.98; 1.14'
- unparsed cell psp413028-tbl-0002:row11:col3 = '0.24; 0.54'
- unparsed cell psp413028-tbl-0002:row12:col3 = '−0.34; −0.15'
- unparsed cell psp413028-tbl-0002:row13:col3 = '−0.47; −0.25'
- unparsed cell psp413028-tbl-0002:row14:col3 = '0.061;0.16'
- unparsed cell psp413028-tbl-0002:row15:col3 = '−0.79; −0.15'
- unparsed cell psp413028-tbl-0002:row16:col3 = '−0.30; −0.11'
- unparsed cell psp413028-tbl-0002:row17:col3 = '−0.52; −0.20'
- unparsed cell psp413028-tbl-0002:row19:col3 = '0.11; 0.18'
- unparsed cell psp413028-tbl-0002:row20:col3 = '0.0064; 0.019'
- unparsed cell psp413028-tbl-0002:row21:col3 = '0.052; 0.33'
- unparsed cell psp413028-tbl-0002:row22:col3 = '0.78; 1.52'
- unparsed cell psp413028-tbl-0002:row24:col3 = '0.24; 0.28'
- unparsed cell psp413028-tbl-0002:row25:col3 = '0.27; 0.31'
- unparsed cell Marathe_2023_table_3:row0:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row2:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row4:col1 = 'UGT2B17 (intermediate)'
- unparsed cell Marathe_2023_table_3:row4:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row5:col1 = 'UGT2B17 (extensive)'
- unparsed cell Marathe_2023_table_3:row6:col1 = 'UGT2B17 (poor)'
- unparsed cell Marathe_2023_table_3:row7:col1 = 'CYP2C19 (extensive)'
- unparsed cell Marathe_2023_table_3:row7:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row8:col1 = 'CYP2C19 (poor)'
- unparsed cell Marathe_2023_table_3:row9:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row10:col1 = 'UGT2B17 (poor)'
- companion parameter table 3 transcribed (18 record(s))
- transposed table Marathe_2023_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (5 record(s))
- companion parameter table 5 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- captured model equation F = CL/Fpop * (WT/73.64)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.815 (22/27 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 abs]` | not captured | 0.28 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | belzutifan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | belzutifan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row4:col2', 'Marathe_2023_table_5:row4:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row0:col2', 'Marathe_2023_table_5:row0:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row7:col2', 'Marathe_2023_table_5:row7:col3'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row5:col2', 'Marathe_2023_table_5:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row2:col2', 'Marathe_2023_table_5:row2:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row9:col2', 'Marathe_2023_table_5:row9:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row13:col2', 'Marathe_2023_table_5:row13:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row11:col2', 'Marathe_2023_table_5:row11:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row12:col2', 'Marathe_2023_table_5:row12:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row1:col2', 'Marathe_2023_table_5:row1:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.25 L/h | not captured | not captured | ['Marathe_2023_table_5:row0:col2', 'Marathe_2023_table_5:row0:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 130 L | not captured | not captured | ['Marathe_2023_table_5:row1:col2', 'Marathe_2023_table_5:row1:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=belzutifan) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.0013629999999999998 | 0.0008495011336897354 | 0.6233 | ng/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | pass | 1.42 | 1.655595208479981 | 1.1659 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_belzutifan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Marathe_2023` / `Marathe_2023::geometric_mean`)
- model: `../../../knowledgebase/drugs/drug_belzutifan/models/modelica/Belzutifan_Marathe2023_geometric_mean.mo`
- deviation: `../../../knowledgebase/drugs/drug_belzutifan/models/modelica/Belzutifan_Marathe2023_geometric_mean.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_belzutifan/models/modelica/Belzutifan_Marathe2023_geometric_mean.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean.svg" alt="Belzutifan_Marathe2023_geometric_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 2.51 /h, F 1). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Belzutifan_Marathe2023_geometric_mean_params.json` · controls `Belzutifan_Marathe2023_geometric_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 23:24 UTC</sub>
