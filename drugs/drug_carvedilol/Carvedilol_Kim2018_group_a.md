<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Kim_2018 \u00b7 group_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carvedilol_McTavish1993_reference&quot;,&quot;label&quot;:&quot;McTavish_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_McTavish1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final_s_carvedilol_final_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Kim2018_group_a`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.286), gpt-oss:120b (partly confirmed, agreement 0.308). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM popPK screen).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM popPK screen).

**Model:** No model was generated from this record.

### Reviewer guidance

**AUCt and AUC∞ have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax, AUCt and AUC∞), so that value has no SI equivalent. Extracted — carvedilol: tmax 0.95 h, Cmax 382 ng/mL, AUCt 1.96e+03 ng•h/mL, AUC∞ 1.97e+03 ng•h/mL, kel 0.21 h -1, t1/2z 3.28 h, CL/F 5.08 L/kg/h, V/F 24.2 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc 24 h: this record has 1961.74, the second reading none; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kim MS et al., Effect of dronedarone on the pharmacoki…, European journal of pharmac… (2018)
  ·  DOI: [10.1016/j.ejps.2017.09.029](https://doi.org/10.1016/j.ejps.2017.09.029)

<div class="pk-model-meta" hidden drug="carvedilol" model-id="Carvedilol_Kim2018_group_a" status="needs_review" stale="false" population="male Sprague-Dawley rats" measured-compound="carvedilol" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T max (h) | `Q56` · tmax | 0.95 | h | 3420.0 | [h] | not captured | space_fold (0.95) | Kim_2018_table_2:row0:col1 | — | not captured |
| C max (ng/mL) | `Q32` · Cmax | 381.69 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Kim_2018_table_2:row1:col1 | — | not captured |
| AUC 24 h (ng•h/mL) | `Q19` · AUCt | 1961.74 | ng•h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_corrected (0.6) | Kim_2018_table_2:row2:col1 | — | not captured |
| AUC inf (ng•h/mL) | `Q17` · AUC∞ | 1974.91 | ng•h/mL | not captured | [[h] · [ng]] / [ml] | not captured | space_fold (0.95) | Kim_2018_table_2:row3:col1 | — | not captured |
| λ z (h -1 ) | `Q47` · kel | 0.21 | h -1 | 5.833333333333333e-05 | [1] / [h] | not captured | space_fold (0.95) | Kim_2018_table_2:row4:col1 | — | not captured |
| t 1/2 (h) | `Q57` · t1/2z | 3.28 | h | 11808.0 | [h] | not captured | space_fold (0.95) | Kim_2018_table_2:row5:col1 | — | not captured |
| Cl t /F (L/kg/h) | `Q27` · CL/F | 5.08 | L/kg/h | 9.877777777777778e-05 | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Kim_2018_table_2:row6:col1 | — | not captured |
| V z /F (L/kg) | `Q76` · V/F | 24.16 | L/kg | 1.6912 | [l] / [kg] | not captured | space_fold (0.95) | Kim_2018_table_2:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ng•h/mL' (AUCt)
- unit_dimension_unknown: 'ng•h/mL' (AUC∞)
- implicit units: 'AUC 24 h (ng•h/mL)' — the LLM proposed 'ng•h/mL', whose dimension does not fit Q19; left unset
- implicit units: 'AUC inf (ng•h/mL)' — the LLM proposed 'ng•h/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=carvedilol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'group a (n = 10)' subgroup of Kim_2018 (paper reports 3 populations: group a (n = 10), group b (n = 10), value)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Kim_2018_table_2:row1:col3 = 'p &lt; 0.001'
- unparsed cell Kim_2018_table_2:row2:col3 = 'p &lt; 0.001'
- unparsed cell Kim_2018_table_2:row3:col3 = 'p &lt; 0.001'
- unparsed cell Kim_2018_table_2:row4:col3 = 'p &lt; 0.001'
- unparsed cell Kim_2018_table_2:row5:col3 = 'p &lt; 0.001'
- unparsed cell Kim_2018_table_2:row6:col3 = 'p &lt; 0.001'
- unparsed cell Kim_2018_table_2:row7:col3 = 'p &lt; 0.01'
- companion parameter table 2 transcribed (17 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.286 (4/14 fields) | 10 |
| `gpt-oss:120b` | partly confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc 24 h]` | 1961.74 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc inf]` | 1974.91 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 381.69 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl t /f]` | 5.08 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | not captured | 2.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 3.28 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t max]` | 0.95 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v z /f]` | 24.16 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 22.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ z]` | 0.21 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc 24 h]` | 1961.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc inf]` | 1974.91 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c max]` | 381.69 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl t /f]` | 5.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2]` | 3.28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t max]` | 0.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v z /f]` | 24.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f (l/kg) group a]` | not captured | 22.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[λ z]` | 0.21 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 3.28 | 3.297 | 1.0052 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kim_2018_table_2:row6:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Kim_2018_table_2:row1:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Kim_2018_table_2:row4:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Kim_2018_table_2:row0:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Kim_2018_table_2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kim_2018_table_2:row7:col1'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ng•h/mL | not captured | not captured | ['Kim_2018_table_2:row3:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ng•h/mL | not captured | not captured | ['Kim_2018_table_2:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 356 L/h | not captured | not captured | ['Kim_2018_table_2:row6:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.69e+03 L | not captured | not captured | ['Kim_2018_table_2:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2018` / `Kim_2018::group_a`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-01 15:57 UTC</sub>
