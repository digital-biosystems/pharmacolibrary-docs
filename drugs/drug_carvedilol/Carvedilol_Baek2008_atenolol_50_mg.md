<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Baek_2008 \u00b7 atenolol_50_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carvedilol_McTavish1993_reference&quot;,&quot;label&quot;:&quot;McTavish_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_McTavish1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final_s_carvedilol_final_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Baek2008_atenolol_50_mg`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12), gpt-oss:120b (partly confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**T1/2ka  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUCt, Cmax and t1/2ka ), so that value has no SI equivalent. None of the extracted parameters is carvedilol's own; they describe atenolol. Extracted — atenolol: AUCt 3.05 µg·h/mL, Cmax 396 ng/mL, tmax 2.87 h, V/F 158 L, CL 18.1 L/h, kel 0.58 1/h, t1/2ka 0.53 h$^{-1}$, t1/2z 0.88 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading not captured → not captured (not captured); it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:24:48.304555+00:00) predates the upstream re-run (2026-10-07 00:32:51.546029+00:00). Current validate status: `needs_review`.

## Citation
Baek IH et al., Pharmacokinetic/pharmacodynamic modelin…, Archives of pharmacal resea… (2008)
  ·  DOI: [10.1007/s12272-001-1231-4](https://doi.org/10.1007/s12272-001-1231-4)

<div class="pk-model-meta" hidden drug="carvedilol" model-id="Carvedilol_Baek2008_atenolol_50_mg" status="needs_review" stale="true" population="healthy adults" measured-compound="carvedilol" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC$_{0-24hr}$ (µg h/mL) | `Q19` · AUCt | 3.05 | µg·h/mL | not captured | µg·h/mL | not captured | llm_corrected (0.6) | Baek_2008_table_2:row0:col1 | — | not captured |
| C$_{max}$ (ng/mL) | `Q32` · Cmax | 396.14 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Baek_2008_table_2:row2:col1 | — | not captured |
| T$_{max}$ (h) | `Q56` · tmax | 2.87 | h | 10332.0 | [h] | not captured | llm (0.6) | Baek_2008_table_2:row3:col1 | — | not captured |
| Volume/F (L) | `Q76` · V/F | 157.71 | L | 0.15771000000000002 | [l] | not captured | llm (0.6) | Baek_2008_table_2:row4:col1 | — | not captured |
| Clearance (L/h) | `Q22` · CL | 18.15 | L/h | 5.041666666666666e-06 | [l] / [h] | not captured | exact (1.0) | Baek_2008_table_2:row5:col1 | — | not captured |
| K$_{el}$ (h$^{-1}$) | `Q47` · kel | 0.58 | 1/h | 0.0001611111111111111 | 1/h | not captured | llm (0.6) | Baek_2008_table_3:row0:col1 | — | not captured |
| K$_{a}$ (h$^{-1}$) | `Q95` · t1/2ka | 0.53 | h$^{-1}$ | not captured | [$] · [h$] | not captured | llm (0.6) | Baek_2008_table_3:row1:col1 | — | not captured |
| K$_{cp}$ (h$^{-1}$) | `Q410` · Kp | 1.84 | h$^{-1}$ | not captured | [$] · [h$] | not captured | llm (0.6) | Baek_2008_table_3:row2:col1 | — | not captured |
| T$_{1/α}$ (h) | `Q59` · t1/2α | 0.88 | h | 3168.0 | [h] | not captured | llm (0.6) | Baek_2008_table_3:row4:col1 | — | not captured |
| T$_{1/β}$ (h) | `Q60` · t1/2β | 4.83 | h | 17388.0 | [h] | not captured | llm (0.6) | Baek_2008_table_3:row5:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'µg h/mL' (AUCt)
- unit_dimension_unknown: 'h$^{-1}$' (kel)
- unit_dimension_unknown: 'h$^{-1}$' (t1/2ka )
- unit_dimension_unknown: 'h$^{-1}$' (Kp)
- dropped unlinked row (NIL): 'K$_{pc}$ (h$^{-1}$)' — extend the ontology if this is a real PK parameter (source ['Baek_2008_table_3:row3:col1'])
- implicit units: 'AUC$_{0-24hr}$ (µg h/mL)' → µg·h/mL (from the paper text: "Table II caption and header list 'AUC 0-24hr (µg•h/mL)' for Atenolol.")
- implicit units: 'K$_{el}$ (h$^{-1}$)' → 1/h (from the paper text: "The text states 'The terminal elimination rate constant (K el ) was calculated... and the T 1/2 was calculated as 0.693/")
- implicit units: 'K$_{el}$ (h$^{-1}$)' → 1/h (from the popPK convention: 'K_el is a first-order elimination rate constant. The paper does not explicitly state the unit in the text or table heade')
- implicit units: 'K$_{a}$ (h$^{-1}$)' — the LLM proposed '1/h', whose dimension does not fit Q95; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=carvedilol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'atenolol (50 mg)' subgroup of Baek_2008 (paper reports 2 populations: atenolol (50 mg), carvedilol (25 mg))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |
| `gpt-oss:120b` | partly confirmed | 0.167 (4/24 fields) | 20 |

<details><summary>42 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[auc$_{0-24hr}$]` | 3.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc$_{0-30hr}$]` | not captured | 282.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c$_{max}$]` | 396.14 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c$_{max}$]` | not captured | 62.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 18.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 94.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_{a}$]` | 0.53 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_{a}$]` | not captured | 0.60 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_{cp}$]` | 1.84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_{cp}$]` | not captured | 4.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_{el}$]` | 0.58 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_{el}$]` | not captured | 4.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k$_{pc}$]` | not captured | 0.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t$_{1/α}$]` | 0.88 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t$_{1/α}$]` | not captured | 0.68 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t$_{1/β}$]` | 4.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t$_{1/β}$]` | not captured | 15.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t$_{max}$]` | 2.87 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t$_{max}$]` | not captured | 1.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume/f]` | 157.71 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume/f]` | not captured | 1561.78 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc$_{0-24hr}$]` | 3.05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc$_{0-30hr}$]` | not captured | 282.55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c$_{max}$]` | 396.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c$_{max}$]` | not captured | 62.74 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 18.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | not captured | 94.64 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k$_{a}$]` | 0.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k$_{a}$]` | not captured | 0.60 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k$_{cp}$]` | 1.84 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k$_{cp}$]` | not captured | 4.52 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k$_{el}$]` | 0.58 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k$_{el}$]` | not captured | 4.45 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t$_{1/α}$]` | 0.88 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t$_{1/α}$]` | not captured | 0.68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t$_{1/β}$]` | 4.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t$_{1/β}$]` | not captured | 15.84 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t$_{max}$]` | 2.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t$_{max}$]` | not captured | 1.26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume/f]` | 157.71 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume/f]` | not captured | 1561.78 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Baek_2008_table_2:row0:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Baek_2008_table_2:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Baek_2008_table_2:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Baek_2008_table_3:row0:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Baek_2008_table_2:row3:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Baek_2008_table_3:row4:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Baek_2008_table_3:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Baek_2008_table_2:row4:col1'] |
| C5_unit_missing_Q95 | fail | [time] | h$^{-1}$ | not captured | not captured | ['Baek_2008_table_3:row1:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.1 L/h | not captured | not captured | ['Baek_2008_table_2:row5:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 158 L | not captured | not captured | ['Baek_2008_table_2:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baek_2008` / `Baek_2008::atenolol_50_mg`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:32 UTC</sub>
