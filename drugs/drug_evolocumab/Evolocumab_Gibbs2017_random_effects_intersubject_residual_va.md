<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;evolocumab&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/&quot;},{&quot;label&quot;:&quot;Gibbs_2017 \u00b7 random_effects_intersubject_residual_variance&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter&quot;,&quot;label&quot;:&quot;Gibbs_2017_fixed_effects_population_mean_parameter&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Evolocumab_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/Evolocumab_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# evolocumab — `Evolocumab_Gibbs2017_random_effects_intersubject_residual_va`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.077). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Evolocumab clearance of 0.924 L/day and volume of 0.158 L are physiologically implausible for a monoclonal antibody.**

The extracted clearance and volume values are orders of magnitude too small for a large protein, indicating a unit or scale extraction error. The second reader could not verify these parameter values, finding them null in the source. Additionally, the record lacks the base PCSK9 concentration and the drug-target interaction link required for the TMDD model. Extracted — evolocumab: kabs 0.807 1/h, V 0.158 L, CL 0.924 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading none → none (none); it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Gibbs JP et al., Impact of Target-Mediated Elimination o…, Journal of clinical pharmac… (2017)
  ·  DOI: [10.1002/jcph.840](https://doi.org/10.1002/jcph.840)

## Model component
<dbs-pgx drug="evolocumab" model-id="Evolocumab_Gibbs2017_random_effects_intersubject_residual_va" status="rejected" stale="false" population="healthy subjects and statin-treated hypercholesterolemic patients" measured-compound="evolocumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.807 | 1/h | 0.00022416666666666668 | 1/h | not captured | exact (1.0) | jcph840-tbl-0002:row2:col1, jcph840-tbl-0002:row2:col4, jcph840-tbl-0002:row2:col5 | — | not captured |
| V | `Q61` · V | 0.158 | L | 0.000158 | L | not captured | exact (1.0) | jcph840-tbl-0002:row3:col4, jcph840-tbl-0002:row3:col5 | — | not captured |
| CL | `Q22` · CL | 0.924 | L/day | 1.0694444444444445e-08 | L/h | not captured | exact (1.0) | jcph840-tbl-0002:row4:col4, jcph840-tbl-0002:row4:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| kint | Q334 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'random effects: intersubject/residual variance' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'kdeg' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph840-tbl-0002:row5:col1'])
- dropped unlinked row (NIL): 'BASEPCSK9' — extend the ontology if this is a real PK parameter (source ['jcph840-tbl-0002:row6:col4', 'jcph840-tbl-0002:row6:col5'])
- dropped unlinked row (NIL): 'kss' — extend the ontology if this is a real PK parameter (source ['jcph840-tbl-0002:row7:col4', 'jcph840-tbl-0002:row7:col5'])
- implicit units: 'ka' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for ka in the table or text. However, ka is a first-order absorption rate c')
- implicit units: 'V' → L (from the paper text: "The abstract states: 'The estimated linear clearance and volume of evolocumab were 0.256 L/day and 2.66 L, respectively'")
- implicit units: 'CL' → L/day (from the paper text: "The abstract states: 'The estimated linear clearance and volume of evolocumab were 0.256 L/day and 2.66 L, respectively'")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V); Q22 (CL)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=evolocumab
- population split: 'random effects: intersubject/residual variance' subgroup of Gibbs_2017 (paper reports 2 populations: fixed effects: population mean parameter, random effects: intersubject/residual variance)
- molar mass: none found for 'evolocumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph840-tbl-0002:row5:col4 = '0.00a'
- unparsed cell jcph840-tbl-0002:row8:col4 = '0.00a'
- unparsed cell jcph840-tbl-0002:row9:col4 = '0.00a'
- unparsed cell jcph840-tbl-0002:row11:col4 = '−0.671 (–78)'
- unparsed cell jcph840-tbl-0002:row12:col4 = '−0.183 (–48)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |
| `gpt-oss:120b` | not confirmed | 0.077 (1/13 fields) | 12 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[basepcsk9]` | not captured | 0.00583 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].value` | 0.924 | 0.260 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.807 | 0.157 | mismatch |
| `gpt-oss-120b` | `parameters[kint].value` | not captured | 0.00184 | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 0.158 | 0.0362 | mismatch |
| `gpt-oss:120b` | `model.links` | [] | [['evolocumab', 'pcsk9', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[basepcsk9]` | not captured | 0.00583 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 0.924 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 0.260 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.807 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kint]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kint]` | not captured | 0.00184 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | 0.158 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 0.0362 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | evolocumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | evolocumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph840-tbl-0002:row4:col4', 'jcph840-tbl-0002:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph840-tbl-0002:row2:col1', 'jcph840-tbl-0002:row2:col4', 'jcph840-tbl-0002:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph840-tbl-0002:row3:col4', 'jcph840-tbl-0002:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.924 | not captured | not captured | ['jcph840-tbl-0002:row4:col4', 'jcph840-tbl-0002:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0385 L/h | not captured | not captured | ['jcph840-tbl-0002:row4:col4', 'jcph840-tbl-0002:row4:col5'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.158 L | not captured | not captured | ['jcph840-tbl-0002:row3:col4', 'jcph840-tbl-0002:row3:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_evolocumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibbs_2017` / `Gibbs_2017::random_effects_intersubject_residual_variance`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:09 UTC</sub>
