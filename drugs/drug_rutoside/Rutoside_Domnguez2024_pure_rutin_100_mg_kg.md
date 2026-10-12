<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2024 \u00b7 pure_rutin_100_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2024_pure_rutin_100_mg_kg`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091), gpt-oss:120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The rutoside (rutin) record was rejected because the dose-normalised exposure AUC0–∞/dose for quercetin is reported as 0.093 h/L/kg, a unit combination that could not be converted to SI, so the structural parameter failed a dimensional-consistency check.**

For quercetin formed from rutin in New Zealand rabbits, the record reports AUC∞ 9278.77 ng·h/mL, Cmax 640.88 ng/mL, V/F 226.60 L/kg, CL/F 11.98 L/h/kg, kel 0.054 h−1 and MRT 21.70 h, but the AUC0–∞/dose value 0.093 with unit h/L/kg triggered the dimension mismatch; because that unit could not be converted to SI, the parameter had no SI value. A second reader also disagreed on the model parameterization (mechanistic versus apparent) and on several values, reading k 1.61, k12 4.02, k21 9.42 and V 0.32 where the record has none, and leaving AUC0–∞/dose, MRT and tmax empty where the record reports 0.093, 21.70 and 0.35. Extracted — quercetin: AUC∞ 9.28e+03 ng ·h/mL, Cmax 641 ng/mL, V/F 227 L/kg, CL/F 12 L/h/kg, Cmax/dose 0.0064 L−1/kg; rutoside: tmax 0.35 h, kel 0.054 h−1, MRT 21.7 h, AUC/dose 0.093 h/L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rutin, the second reading unknown; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:31:40.283032+00:00) predates the upstream re-run (2026-10-06 22:20:12.420883+00:00). Current validate status: `rejected`.

## Citation
Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024)
  ·  DOI: [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241)

<div class="pk-model-meta" hidden drug="rutoside" model-id="Rutoside_Domnguez2024_pure_rutin_100_mg_kg" status="rejected" stale="true" population="New Zealand rabbits" measured-compound="rutin" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0–∞ (ng ·h/mL) | `Q17` · AUC∞ | 9278.77 | ng ·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Domínguez_2024_table_2:row0:col1 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | 640.88 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Domínguez_2024_table_2:row1:col1 | — | not captured |
| Tmax (h) | `Q56` · tmax | 0.35 | h | 1260.0 | [h] | not captured | exact (1.0) | Domínguez_2024_table_2:row2:col1 | — | not captured |
| Vz/F (L/kg) | `Q76` · V/F | 226.60 | L/kg | 15.862 | [l] / [kg] | not captured | exact (1.0) | Domínguez_2024_table_2:row3:col1 | — | not captured |
| Cl/F (L/h/kg) | `Q27` · CL/F | 11.98 | L/h/kg | 0.00023294444444444447 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Domínguez_2024_table_2:row4:col1 | — | not captured |
| λz (h−1) | `Q47` · kel | 0.054 | h−1 | 1.5e-05 | [1] / [h] | not captured | exact (1.0) | Domínguez_2024_table_2:row5:col1 | — | not captured |
| MRT (h) | `Q53` · MRT | 21.70 | h | 78120.0 | [h] | not captured | exact (1.0) | Domínguez_2024_table_2:row6:col1 | — | not captured |
| AUC0–∞/dose (h/L/kg) | `Q189` · AUC/dose | 0.093 | h/L/kg | not captured | [h] / [[kg] · [l]] | not captured | llm_confirmed (0.6) | Domínguez_2024_table_2:row7:col1 | — | not captured |
| Cmax/dose (L−1/kg) | `Q174` · Cmax/dose | 0.0064 | L−1/kg | not captured | [1] / [[kg] · [l]] | not captured | exact (1.0) | Domínguez_2024_table_2:row8:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC0–∞/dose (h/L/kg)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'L−1/kg' (Cmax/dose)
- dropped value-less row: 'β'
- dropped value-less row: 'Ω'
- dropped value-less row: 'b'
- dropped value-less row: 'R.S.E.'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 177 (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- implicit units: 'Cmax/dose (L−1/kg)' — the LLM proposed 'L−1/kg', whose dimension does not fit Q174; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'pure rutin(100 mg/kg)' subgroup of Domínguez_2024 (paper reports 4 populations: extract(equivalent to 7.4 mg/kg of rutin), intravenous administration (i.v.), oral administration (p.o.), pure rutin(100 mg/kg))
- row roles (LLM): model_class=noncompartmental; 47/47 row label(s) assigned, 56 linked by role; re-tagged rutin→parent ×131, rutin→quercetin ×58
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-16-01241-t003:row7:col4 = '−1.2–−0.23'
- unparsed cell Domínguez_2024_table_1:row4:col2 = '0.91 ± 0.320 *'
- unparsed cell Domínguez_2024_table_1:row5:col2 = '0.18 ± 0.055 *'
- unparsed cell Domínguez_2024_table_1:row5:col4 = '5.20 ± 1.470 *'
- unparsed cell Domínguez_2024_table_1:row6:col2 = '0.300 ± 0.060 *'
- unparsed cell Domínguez_2024_table_1:row6:col4 = '1.69 ± 0.267 *'
- unparsed cell Domínguez_2024_table_1:row7:col4 = '0.33 ± 0.047 *'
- unparsed cell Domínguez_2024_table_1:row9:col2 = '2.94 ± 0.515 *'
- unparsed cell Domínguez_2024_table_1:row9:col4 = '14.89 ± 1.690 *'
- unparsed cell Domínguez_2024_table_1:row10:col2 = '0.035 ± 0.008 *'
- unparsed cell Domínguez_2024_table_1:row10:col4 = '0.61 ± 0.102 *'
- unparsed cell Domínguez_2024_table_1:row11:col2 = '0.067 ± 0.010 *'
- unparsed cell Domínguez_2024_table_1:row11:col4 = '0.081 ± 0.026 *'
- unparsed cell Domínguez_2024_table_1:row12:col4 = '3.80 ± 0.749 *'
- companion parameter table 1 transcribed (32 record(s))
- unparsed cell Domínguez_2024_table_2:row2:col2 = '3.90 ± 0.224 **'
- unparsed cell Domínguez_2024_table_2:row3:col2 = '21.44 ± 5.282 *'
- unparsed cell Domínguez_2024_table_2:row4:col2 = '0.91 ± 0.113 *'
- unparsed cell Domínguez_2024_table_2:row7:col2 = '1.12 ± 0.144 *'
- unparsed cell Domínguez_2024_table_2:row8:col2 = '0.083 ± 0.011 *'
- companion parameter table 2 transcribed (14 record(s))
- unparsed cell Domínguez_2024_table_4:row2:col4 = '−1.81–−0.71'
- unparsed cell Domínguez_2024_table_4:row8:col4 = '−2.65–−1.72'
- companion parameter table 4 transcribed (88 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (2/22 fields) | 20 |
| `gpt-oss:120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>37 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf/dose]` | 0.093 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf/dose]` | not captured | 0.093 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 9278.77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | not captured | 9278.77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 11.98 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 11.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/dose]` | 0.0064 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/dose]` | not captured | 0.0064 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 640.88 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 640.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 21.70 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | not captured | 21.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 0.35 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 0.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 226.60 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | not captured | 226.60 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` | 0.054 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` | not captured | 0.054 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rutin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rutin | unknown | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[auc0-inf/dose]` | 0.093 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-inf]` | 9278.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 11.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax/dose]` | 0.0064 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 640.88 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f 1]` | not captured | 0.24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | not captured | 4.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | not captured | 9.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k]` | not captured | 1.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1]` | not captured | 0.26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | 21.70 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag2]` | not captured | 0.58 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 0.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 0.32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vz/f]` | 226.60 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[λz]` | 0.054 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2024_table_2:row0:col1'] |
| C5_dimension_Q189 | fail | [time] / [length] ** 3 | h/L/kg | not captured | not captured | ['Domínguez_2024_table_2:row7:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Domínguez_2024_table_2:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2024_table_2:row1:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Domínguez_2024_table_2:row5:col1'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Domínguez_2024_table_2:row6:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Domínguez_2024_table_2:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2024_table_2:row3:col1'] |
| C5_unit_missing_Q174 | fail | [mass] / [length] ** 3 | L−1/kg | not captured | not captured | ['Domínguez_2024_table_2:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 839 L/h | not captured | not captured | ['Domínguez_2024_table_2:row4:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.59e+04 L | not captured | not captured | ['Domínguez_2024_table_2:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_rutoside/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Domínguez_2024` / `Domínguez_2024::pure_rutin_100_mg_kg`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:20 UTC</sub>
