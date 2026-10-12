<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tucatinib&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/&quot;},{&quot;label&quot;:&quot;Zhang_2024 \u00b7 her2_mbcn_52&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tucatinib_Zhang2024_final_population_pk_model_estimate_rse&quot;,&quot;label&quot;:&quot;Zhang_2024_final_population_pk_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_healthy_participants_300_mg_bid&quot;,&quot;label&quot;:&quot;Zhang_2024_healthy_participants_300_mg_bid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_her2_mcrcn_68&quot;,&quot;label&quot;:&quot;Zhang_2024_her2_mcrcn_68&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mcrcn_68.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tucatinib — `Tucatinib_Zhang2024_her2_mbcn_52`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.917). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**AUC has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUCSS, Cmax and Ctrough), so that value has no SI equivalent. Extracted — tucatinib: AUCSS 5.62e+03 ng·h/mL, Cmax 747 ng/mL, Ctrough 288 ng/mL, AUC 1.99, CL/F 53.4 L/h, V/F 903 L, t1/2β 16.7 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[vss/f].parameter_id`: this record has Q76, the second reading Q65. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0)

<div class="pk-model-meta" hidden drug="tucatinib" model-id="Tucatinib_Zhang2024_her2_mbcn_52" status="needs_review" stale="false" population="healthy participants and patients with HER2+ metastatic breast or colorectal cancer" measured-compound="tucatinib" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUCss (ng·h/mL) | `Q18` · AUCSS | 5620 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Zhang_2024_table_2:row1:col2 | — | not captured |
| Cmax,ss (ng/mL) | `Q32` · Cmax | 747 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Zhang_2024_table_2:row2:col2 | — | not captured |
| Ctrough,ss (ng/mL) | `Q37` · Ctrough | 288 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Zhang_2024_table_2:row3:col2 | — | not captured |
| Rac, AUC | `Q88` · AUC | 1.99 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Zhang_2024_table_2:row4:col2 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 53.4 | L/h | 1.4833333333333334e-05 | [l] / [h] | not captured | exact (1.0) | Zhang_2024_table_2:row7:col2 | — | not captured |
| Vss/F (L) | `Q76` · V/F | 903 | L | 0.903 | [l] | not captured | llm (0.6) | Zhang_2024_table_2:row8:col2 | — | not captured |
| T1/2, β (h) | `Q60` · t1/2β | 16.7 | h | 60120.0 | [h] | not captured | llm_corrected (0.6) | Zhang_2024_table_2:row9:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Rac, Cmax', value '1.64') — already have one for this compound
- dropped duplicate Q37 ('Rac, Ctrough', value '1.64') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tucatinib
- population split: 'her2+ mbcn = 52' subgroup of Zhang_2024 (paper reports 4 populations: final population pk model estimate (%rse), healthy participants (300 mg bid)n = 128, her2+ mbcn = 52, her2+ mcrcn = 68)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab1:row1:col2 = '112 (105, 119)'
- unparsed cell Tab1:row2:col2 = '104 (62.4, 145)'
- unparsed cell Tab1:row3:col2 = '83.4 (72.4, 97)'
- unparsed cell Tab1:row4:col2 = '659 (594, 740)'
- unparsed cell Tab1:row5:col2 = '0.385 (0.333, 0.453)'
- unparsed cell Tab1:row6:col2 = '0.395 (0.385, 0.445)'
- unparsed cell Tab1:row16:col2 = '0.274 (0.0326, 0.507)'
- unparsed cell Tab1:row18:col2 = '1.06 (0.0693, 1.57)'
- unparsed cell Tab1:row19:col2 = '0.326 (0.309, 0.343)'
- unparsed cell Zhang_2024_table_2:row1:col1 = '5770 [2100, 14,200]'
- unparsed cell Zhang_2024_table_2:row1:col3 = '3230 [1310, 9210]'
- unparsed cell Zhang_2024_table_2:row1:col5 = '2730 [541, 5760]'
- unparsed cell Zhang_2024_table_2:row2:col1 = '759 [221, 1840]'
- unparsed cell Zhang_2024_table_2:row2:col3 = '402 [141, 960]'
- unparsed cell Zhang_2024_table_2:row2:col5 = '480 [59, 1120]'
- unparsed cell Zhang_2024_table_2:row3:col1 = '303 [102, 870]'
- unparsed cell Zhang_2024_table_2:row3:col3 = '188 [42.9, 675]'
- unparsed cell Zhang_2024_table_2:row3:col5 = '88.4 [20.3, 263]'
- unparsed cell Zhang_2024_table_2:row4:col1 = '1.94 [1.36, 4.59]'
- unparsed cell Zhang_2024_table_2:row4:col3 = '2.45 [1.38, 5.32]'
- unparsed cell Zhang_2024_table_2:row4:col5 = '1.34 [1.13, 2.38]'
- unparsed cell Zhang_2024_table_2:row5:col1 = '1.59 [1.14, 3.99]'
- unparsed cell Zhang_2024_table_2:row5:col3 = '1.92 [1.16, 3.53]'
- unparsed cell Zhang_2024_table_2:row5:col5 = '1.19 [1.07, 2.12]'
- unparsed cell Zhang_2024_table_2:row6:col1 = '2.38 [1.49, 5.94]'
- unparsed cell Zhang_2024_table_2:row6:col3 = '2.96 [1.94, 6.81]'
- unparsed cell Zhang_2024_table_2:row6:col5 = '1.57 [1.23, 2.76]'
- unparsed cell Zhang_2024_table_2:row7:col1 = '52 [21.2, 143]'
- unparsed cell Zhang_2024_table_2:row7:col3 = '92.9 [32.6, 230]'
- unparsed cell Zhang_2024_table_2:row7:col5 = '110 [52.1, 555]'
- unparsed cell Zhang_2024_table_2:row8:col1 = '838 [257, 2190]'
- unparsed cell Zhang_2024_table_2:row8:col3 = '2130 [1680, 4690]'
- unparsed cell Zhang_2024_table_2:row8:col5 = '752 [409, 5650]'
- unparsed cell Zhang_2024_table_2:row9:col1 = '16.2 [7.48, 58.9]'
- unparsed cell Zhang_2024_table_2:row9:col3 = '21.3 [11.9, 53.5]'
- unparsed cell Zhang_2024_table_2:row9:col5 = '8.76 [5.22, 21]'
- companion parameter table 2 transcribed (27 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[vss/f].parameter_id` | Q76 | Q65 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row1:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Zhang_2024_table_2:row7:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row2:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row3:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Zhang_2024_table_2:row9:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row8:col2'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Zhang_2024_table_2:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 53.4 L/h | not captured | not captured | ['Zhang_2024_table_2:row7:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 903 L | not captured | not captured | ['Zhang_2024_table_2:row8:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_tucatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2024` / `Zhang_2024::her2_mbcn_52`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:33 UTC</sub>
