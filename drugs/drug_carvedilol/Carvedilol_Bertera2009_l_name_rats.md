<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Bertera_2009 \u00b7 l_name_rats&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carvedilol_McTavish1993_reference&quot;,&quot;label&quot;:&quot;McTavish_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_McTavish1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final_s_carvedilol_final_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Bertera2009_l_name_rats`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727), gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The carvedilol record from Bertera_2009 was rejected because it reports only non-compartmental exposure metrics (t1/2z 2.1 min, C0 1325 µg ml-1, AUC0-180 548 ng ml-1 h-1) with no distribution volume and no clearance, and a structural parameter failed a dimensional consistency check.**

The paper gives no distribution volume and no clearance or elimination rate for carvedilol in male Wistar rats, so it is an exposure/outcome paper rather than a compartmental population PK model. A dimension mismatch was flagged on a structural parameter, and one reported unit could not be converted to SI, so that parameter was left without an SI value. A second reader also disagreed on which parameter the AUC0-180 value of 548 ng ml-1 h-1 corresponds to, and read a γ of 2.8 where this record had none; these disagreements are noted but the rejection rests on the missing volume and clearance and the failed structural-parameter check. Extracted — carvedilol: t1/2z 2.1 min, C0 1.32e+03 µg ml -1, AUCt 548 ng ml -1 h -1, AUC%ext 12.5.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clearance rates: this record has none, the second reading 83.8; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:24:55.191400+00:00) predates the upstream re-run (2026-10-07 00:33:00.136001+00:00). Current validate status: `rejected`.

## Citation
Bertera FM et al., Is urethane-chloralose anaesthesia appr…, Journal of pharmacological… (2009)
  ·  DOI: [10.1016/j.vascn.2008.10.001](https://doi.org/10.1016/j.vascn.2008.10.001)

## Model component
<dbs-pgx drug="carvedilol" model-id="Carvedilol_Bertera2009_l_name_rats" status="rejected" stale="true" population="control and L-NAME hypertensive rats" measured-compound="carvedilol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t 1/2 eq (min) | `Q57` · t1/2z | 2.1 | min | 126.0 | [min] | not captured | llm (0.6) | tab_4:row6:col2, tab_4:row6:col3, tab_4:row6:col4 | — | not captured |
| C 0 (µg ml -1 ) | `Q86` · C0 | 1325 | µg ml -1 | not captured | [µg] / [ml] | not captured | space_fold (0.95) | Bertera_2009_table_2:row2:col3, Bertera_2009_table_2:row2:col4 | — | not captured |
| AUC 0-180 (ng ml -1 h -1 ) | `Q19` · AUCt | 548 | ng ml -1 h -1 | not captured | [ng] / [[h] · [ml]] | not captured | llm_corrected (0.6) | Bertera_2009_table_2:row4:col3, Bertera_2009_table_2:row4:col4 | — | not captured |
| Extrapolated area (%) | `Q84` · AUC%ext | 12.5 | not captured | not captured | not captured | not captured | llm (0.6) | Bertera_2009_table_2:row5:col3, Bertera_2009_table_2:row5:col4 | — | not captured |
| plasma clearance | `Q22` · CL | 36.5 | L/h | 1.0138888888888888e-05 | L/h | not captured | review_gapfill (0.7) | McTavish_1993:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pharmacokinetic-' — extend the ontology if this is a real PK parameter (source ['tab_4:row0:col2'])
- dropped unlinked row (NIL): 'parameter' — extend the ontology if this is a real PK parameter (source ['tab_4:row2:col2', 'tab_4:row2:col3', 'tab_4:row2:col4'])
- dropped PD-category row 'EC 50 (ng ml -1 )' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_4:row3:col2', 'tab_4:row3:col3', 'tab_4:row3:col4'])
- dropped PD-category row 'E max (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_4:row4:col2', 'tab_4:row4:col3'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['tab_4:row5:col2', 'tab_4:row5:col3', 'tab_4:row5:col4'])
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['tab_4:row7:col2', 'tab_4:row7:col3', 'tab_4:row7:col4'])
- unit_dimension_mismatch: 'C 0 (µg ml -1 )' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC 0-180 (ng ml -1 h -1 )' → Q19 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=carvedilol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'l-name rats (n = 12)' subgroup of Bertera_2009 (paper reports 3 populations: control rats (n = 12), l-name rats (n = 12), l-name rats (n =12))
- gap-filled Q22 (CL) from McTavish_1993's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_4:row4:col4 = '-32.8 ± 3.0 #'
- companion parameter table 2 transcribed (12 record(s))
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance rates]` | not captured | 83.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | 36.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 eq].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss:120b` | `parameters[clearance rates]` | not captured | 83.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 eq].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | carvedilol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | carvedilol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | fail | [mass] / [length] ** 3 / [time] | ng ml -1 h -1 | not captured | not captured | ['Bertera_2009_table_2:row4:col3', 'Bertera_2009_table_2:row4:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['McTavish_1993:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_4:row6:col2', 'tab_4:row6:col3', 'tab_4:row6:col4'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | µg ml -1 | not captured | not captured | ['Bertera_2009_table_2:row2:col3', 'Bertera_2009_table_2:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 36.5 | not captured | not captured | ['McTavish_1993:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 36.5 L/h | not captured | not captured | ['McTavish_1993:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bertera_2009` / `Bertera_2009::l_name_rats`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:33 UTC</sub>
