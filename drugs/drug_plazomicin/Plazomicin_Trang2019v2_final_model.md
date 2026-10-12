<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;plazomicin&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/&quot;},{&quot;label&quot;:&quot;Trang_2019_2 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plazomicin_Kuti2019v2_reference&quot;,&quot;label&quot;:&quot;Kuti_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Kuti2019v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plazomicin_Trang2019v2_geometric_mean_value_cv_d&quot;,&quot;label&quot;:&quot;Trang_2019_2_geometric_mean_value_cv_d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Trang2019v2_geometric_mean_value_cv_d.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# plazomicin — `Plazomicin_Trang2019v2_final_model`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.381). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Kuti_2019_2) cannot stand in for this paper's evidence. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — plazomicin: CLNR 0.491 liters/h, CLR 4.8 liters/h, V 100 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[coefficient].parameter_id`: this record has Q900, the second reading Q61; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Trang M et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2019)
  ·  DOI: [10.1128/AAC.02329-18](https://doi.org/10.1128/AAC.02329-18)

<div class="pk-model-meta" hidden drug="plazomicin" model-id="Plazomicin_Trang2019v2_final_model" status="needs_review" stale="false" population="adult patients with cUTI/AP and serious infections caused by CRE" measured-compound="plazomicin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Nonrenal CL (liters/h) | `Q79` · CLNR | 0.491 | liters/h | 1.363888888888889e-07 | [l] / [h] | not captured | llm_corrected (0.6) | T2:row3:col1, T2:row3:col2 | — | not captured |
| CLR maximum (liters/h) | `Q26` · CLR | 4.80 | liters/h | 1.3333333333333332e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | T2:row4:col1, T2:row4:col2 | — | not captured |
| Coefficient | `Q900` · equation variable | 9.10 | liters | not captured | [l] | not captured | llm (0.6) | T2:row11:col1, T2:row11:col2, T2:row16:col1, T2:row16:col2, T2:row19:col1, T2:row19:col2, T2:row24:col1, T2:row24:col2, T2:row29:col1, T2:row29:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.529 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row7:col1, T2:row7:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.23 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row12:col1, T2:row12:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.17 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row20:col1, T2:row20:col2 | — | not captured |
| theta_q335_age_vp1_slope | `Q900` · theta_q335_age_vp1_slope | 0.00954 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row21:col1, T2:row21:col2 | — | not captured |
| theta_q319_height_power | `Q900` · theta_q319_height_power | 3.38 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row25:col1, T2:row25:col2 | — | not captured |
| Tigecycline 4 Vc (L) | `Q61` · V | 100.2 | L | 0.10020000000000001 | L | not captured | review_gapfill (0.7) | Kuti_2019_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive component' routed out of structural estimates ('Residual variability, σ2')
- table section residual_error: 'CCV component for phase 1 studies' routed out of structural estimates ('Residual variability, σ2')
- table section residual_error: 'CCV component for phase 2 studies' routed out of structural estimates ('Residual variability, σ2')
- table section residual_error: 'CCV component for phase 3 studies' routed out of structural estimates ('Residual variability, σ2')
- dropped unlinked row (NIL): 'Baseline CLCR50 (ml/min/1.73 m2)' — extend the ontology if this is a real PK parameter (source ['T2:row5:col1', 'T2:row5:col2'])
- dropped PD-category row 'Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1', 'T2:row6:col2'])
- dropped unlinked row (NIL): 'Proportional increase for AP patients' — extend the ontology if this is a real PK parameter (source ['T2:row8:col1', 'T2:row8:col2'])
- dropped unlinked row (NIL): 'Proportional increase for BSI patients' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1', 'T2:row9:col2'])
- dropped unlinked row (NIL): 'Proportional increase for cUTI and AP patients' — extend the ontology if this is a real PK parameter (source ['T2:row13:col1', 'T2:row13:col2', 'T2:row17:col1', 'T2:row17:col2', 'T2:row22:col1', 'T2:row22:col2', 'T2:row26:col1', 'T2:row26:col2'])
- dropped unlinked row (NIL): 'Proportional increase for BSI and HABP/VABP patients' — extend the ontology if this is a real PK parameter (source ['T2:row14:col1', 'T2:row14:col2', 'T2:row27:col1', 'T2:row27:col2'])
- dropped unlinked row (NIL): 'Vp2-weight power' — extend the ontology if this is a real PK parameter (source ['T2:row30:col1', 'T2:row30:col2'])
- dropped unlinked row (NIL): 'Proportional increase for vasopressor use' — extend the ontology if this is a real PK parameter (source ['T2:row31:col1', 'T2:row31:col2'])
- dropped unlinked row (NIL): 'Sum of UFR and DFR (liters/h)' — extend the ontology if this is a real PK parameter (source ['T2:row33:col1'])
- dropped unlinked row (NIL): 'Sieving coefficient' — extend the ontology if this is a real PK parameter (source ['T2:row34:col1', 'T2:row34:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=plazomicin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'final model' subgroup of Trang_2019_2 (paper reports 2 populations: final model, geometric mean value (% cv)d)
- gap-filled Q61 (V) from Kuti_2019_2's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T2:row3:col4 = '0.210 to 0.577'
- unparsed cell T2:row4:col4 = '4.44 to 5.48'
- unparsed cell T2:row5:col4 = '41.9 to 49.8'
- unparsed cell T2:row6:col4 = '2.01 to 2.93'
- unparsed cell T2:row7:col4 = '0.397 to 0.651'
- unparsed cell T2:row8:col4 = '0.0776 to 0.179'
- unparsed cell T2:row9:col4 = '–0.300 to 0.0648'
- unparsed cell T2:row11:col4 = '8.54 to 9.64'
- unparsed cell T2:row12:col4 = '0.869 to 1.59'
- unparsed cell T2:row13:col4 = '0.867 to 1.23'
- unparsed cell T2:row14:col4 = '1.14 to 1.99'
- unparsed cell T2:row16:col4 = '7.09 to 9.15'
- unparsed cell T2:row17:col4 = '–0.880 to 0.748'
- unparsed cell T2:row19:col4 = '8.19 to 9.16'
- unparsed cell T2:row20:col4 = '0.670 to 1.72'
- unparsed cell T2:row21:col4 = '0.00796 to 0.0111'
- unparsed cell T2:row22:col4 = '–0.530 to 0.309'
- unparsed cell T2:row24:col4 = '0.186 to 0.215'
- unparsed cell T2:row25:col4 = '2.15 to 4.43'
- unparsed cell T2:row26:col4 = '–0.533 to 0.0699'
- unparsed cell T2:row27:col4 = '1.62 to 5.00'
- unparsed cell T2:row29:col4 = '5.99 to 8.23'
- unparsed cell T2:row30:col4 = '0.881 to 2.13'
- unparsed cell T2:row31:col4 = '2.05 to 6.99'
- unparsed cell T2:row34:col4 = '0.405 to 0.999'
- unparsed cell T2:row35:col4 = '0.0870 to 0.120'
- unparsed cell T2:row36:col4 = '0.156 to 0.270'
- unparsed cell T2:row37:col4 = '0.00196 to 0.120'
- unparsed cell T2:row38:col4 = '0.0491 to 0.0998'
- unparsed cell T2:row39:col4 = '0.0165 to 0.0469'
- unparsed cell T2:row40:col4 = '0.0433 to 0.221'
- unparsed cell T2:row41:col4 = '0.000413 to 0.00287'
- unparsed cell T2:row42:col4 = '0.0701 to 0.122'
- unparsed cell T2:row43:col4 = '0.0589 to 0.0952'
- unparsed cell T2:row44:col4 = '0.0491 to 0.0906'
- unparsed cell T2:row46:col4 = '0.0000511 to 0.000179'
- unparsed cell T2:row47:col4 = '0.0256 to 0.0345'
- unparsed cell T2:row48:col4 = '0.133 to 0.207'
- unparsed cell T2:row49:col4 = '0.0727 to 0.0967'
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.381 (8/21 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[coefficient].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `gpt-oss-120b` | `parameters[coefficient].parameter_id` | Q900 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[sieving coefficient]` | not captured | 0.734 | only_one_extracted |
| `gpt-oss-120b` | `parameters[sum of ufr and dfr]` | not captured | 1.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_category]` | not captured | 0.130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_height_power]` | not captured | 3.38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_height_power]` | 3.38 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q335_age_vp1_slope]` | 0.00954 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q63_weight_power]` | not captured | 1.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q64_age_vp1_slope]` | not captured | 0.00954 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q64_weight_power]` | not captured | 1.17 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_category]` | not captured | 1.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tigecycline 4 vc]` | 100.2 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kuti_2019_2:review'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 100 L | not captured | not captured | ['Kuti_2019_2:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_plazomicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Trang_2019_2` / `Trang_2019_2::final_model`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:58 UTC</sub>
