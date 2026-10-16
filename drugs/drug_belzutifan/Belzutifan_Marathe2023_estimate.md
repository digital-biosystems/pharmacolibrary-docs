<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belzutifan&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/&quot;},{&quot;label&quot;:&quot;Marathe_2023 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Belzutifan_Marathe2023_arithmetic_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Belzutifan_Marathe2023_geometric_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belzutifan — `Belzutifan_Marathe2023_estimate`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.476). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No value for belzutifan's volume of distribution; the covariate scenarios were not simulated (+1 more).**

The model was built, but belzutifan's volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — belzutifan: CL/F 5.63 L/h, V2/F 85.4 L, Q/F 5.37 L/h, V3/F 30.4 L, kabs 2.4 /h, tlag 0.16 h, allometric_exponent -0.2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has belzutifan, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028)

<div class="pk-model-meta" hidden drug="belzutifan" model-id="Belzutifan_Marathe2023_estimate" status="model_quarantined" stale="false" population="patients with solid tumors and VHL" measured-compound="belzutifan" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 5.63 | L/h | 1.5638888888888888e-06 | [l] / [h] | not captured | exact (1.0) | psp413028-tbl-0002:row2:col1 | — | 0.15 (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 85.4 | L | 0.0854 | [l] | not captured | exact (1.0) | psp413028-tbl-0002:row3:col1 | — | 0.013 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 5.37 | L/h | 1.4916666666666669e-06 | [l] / [h] | not captured | exact (1.0) | psp413028-tbl-0002:row4:col1 | — | not captured |
| V3/F (L) | `Q78` · V3/F | 30.38 | L | 0.03038 | [l] | not captured | exact (1.0) | psp413028-tbl-0002:row5:col1 | — | 0.19 (None% RSE) |
| KA (/h) | `Q49` · kabs | 2.40 | /h | 0.0006666666666666666 | [1] / [h] | not captured | exact (1.0) | psp413028-tbl-0002:row6:col1 | — | 1.15 (None% RSE) |
| ALAG (h) | `Q83` · tlag | 0.16 | h | 576.0 | [h] | not captured | exact (1.0) | psp413028-tbl-0002:row7:col1 | — | not captured |
| cl_ugt2b17_extensive_metabolizers | `Q900` · cl_ugt2b17_extensive_metabolizers | 0.39 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413028-tbl-0002:row11:col1 | — | not captured |
| cl_ugt2b17_poor_metabolizers | `Q900` · cl_ugt2b17_poor_metabolizers | -0.24 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413028-tbl-0002:row12:col1 | — | not captured |
| f_ugt2b17_poor_metabolizers | `Q900` · f_ugt2b17_poor_metabolizers | 0.11 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413028-tbl-0002:row14:col1 | — | not captured |
| V‐AGE | `Q319` · allometric_exponent | -0.20 | not captured | not captured | not captured | not captured | llm (0.6) | psp413028-tbl-0002:row16:col1 | — | not captured |
| theta_cl_cyp2c19 | `Q900` · theta_cl_cyp2c19 | -0.36 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413028-tbl-0002:row13:col1 | — | not captured |
| CL‐AGE | `Q900` · CL‐AGE | -0.36 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413028-tbl-0002:row17:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL‐AGE | Q22 | not captured | llm_confirmed |
| V2/Fpop | Q64 | not captured | exact |
| Q/Fpop | Q30 | not captured | exact |
| V3/Fpop | Q77 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'RES HV' routed out of structural estimates ('Residual error')
- table section residual_error: 'RES PAT' routed out of structural estimates ('Residual error')
- table section residual_error: 'EPS' routed out of structural estimates ('Residual error')
- dropped duplicate Q49 ('KA‐FED', value '-0.88') — already have one for this compound
- dropped unlinked row (NIL): 'CL‐WT' — extend the ontology if this is a real PK parameter (source ['psp413028-tbl-0002:row9:col1'])
- dropped unlinked row (NIL): 'V‐WT' — extend the ontology if this is a real PK parameter (source ['psp413028-tbl-0002:row10:col1'])
- covariate level 'CL‐UGT2B17 extensive metabolizers' → Q900:cl_ugt2b17_extensive_metabolizers = 0.39 (linear_fractional on Q27)
- covariate level 'CL‐UGT2B17 poor metabolizers' → Q900:cl_ugt2b17_poor_metabolizers = -0.24 (linear_fractional on Q27)
- covariate level 'F‐UGT2B17 poor metabolizers' → Q900:f_ugt2b17_poor_metabolizers = 0.11 (linear_fractional on Q27)
- dropped duplicate Q49 ('KA‐FORM', value '-0.47') — already have one for this compound
- implicit units: 'CL‐AGE' — the LLM proposed '1/h', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=belzutifan
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- bound model equation to Q22 (CL): CL/Fpop = CL/Fpop * (WT/73.64)^
- bound model equation to Q64 (V2): V2/Fpop = V2/Fpop * (WT/73.64)^
- bound model equation to Q30 (Q): Q/Fpop = Q/Fpop * (WT/73.64)^
- bound model equation to Q77 (V3): V3/Fpop = V3/Fpop * (WT/73.64)^
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL‐AGE'; equation kept verbatim
- Q64 (V2) is equation-defined: value moved to equation-variable 'V2/Fpop'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q/Fpop'; equation kept verbatim
- Q77 (V3) is equation-defined: value moved to equation-variable 'V3/Fpop'; equation kept verbatim
- pharmacogenetic covariate 'cl_ugt2b17_extensive_metabolizers' (ugt2b17) — PGx domain
- pharmacogenetic covariate 'cl_ugt2b17_poor_metabolizers' (ugt2b17) — PGx domain
- pharmacogenetic covariate 'f_ugt2b17_poor_metabolizers' (ugt2b17) — PGx domain
- pharmacogenetic covariate 'theta_cl_cyp2c19' (cyp2c19) — PGx domain
- population split: 'estimate' subgroup of Marathe_2023 (paper reports 4 populations: absolute parameter value, arithmetic mean, estimate, geometric mean)

**Extraction notes:**
- table psp413028-tbl-0002: unbound_uncertainty
- table psp413028-tbl-0002: unparsed_numeric_cell
- table Marathe_2023_table_3: units_need_context
- table Marathe_2023_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (18 record(s))
- table Marathe_2023_table_5: unbound_uncertainty
- table Marathe_2023_table_5: ragged_grid
- companion parameter table 5 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3, 5
- captured model equation CL/Fpop = CL/Fpop * (WT/73.64)^
- captured model equation V2/Fpop = V2/Fpop * (WT/73.64)^
- captured model equation Q/Fpop = Q/Fpop * (WT/73.64)^
- captured model equation V3/Fpop = V3/Fpop * (WT/73.64)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.476 (10/21 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl_ugt2b17_extensive_metabolizers]` | 0.39 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ugt2b17_poor_metabolizers]` | -0.24 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl‐age]` | -0.36 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl‐wt]` | not captured | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_ugt2b17]` | not captured | 0.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v‐wt]` | not captured | 1.06 | only_one_extracted |
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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413028-tbl-0002:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413028-tbl-0002:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413028-tbl-0002:row4:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413028-tbl-0002:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413028-tbl-0002:row3:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp413028-tbl-0002:row7:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.63 L/h | not captured | not captured | ['psp413028-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 85.4 L | not captured | not captured | ['psp413028-tbl-0002:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belzutifan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Marathe_2023` / `Marathe_2023::estimate`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belzutifan/models/modelica/_needs_review/Belzutifan_Marathe2023_estimate.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belzutifan/models/modelica/_needs_review/Belzutifan_Marathe2023_estimate.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 04:23 UTC</sub>
