<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2024 \u00b7 oral_administration_p_o&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2024_oral_administration_p_o`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:31 UTC) predates the latest extraction (2026-10-06 22:20 UTC); the status shown comes from the current checks. The rutoside record was rejected because the bioavailability-adjusted parameters are double-corrected — Fab = 0.006 p.o. is applied alongside already-apparent values such as CL/F = 13.59 L/h/kg and V/F = 59.08 L/kg — and a structural parameter has a dimension mismatch, with the fm unit (p.o.) not convertible to SI.

<div class="pk-model-meta" hidden drug="rutoside" model-id="Rutoside_Domnguez2024_oral_administration_p_o" status="rejected" stale="true" population="New Zealand rabbits" measured-compound="rutin" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Domínguez Moré GP, Rey DP, Valderrama IH, Ospina LF, Aragón DM. Rutin and Physalis peruviana Extract: Population Pharmacokinetics in New Zealand Rabbits. Pharmaceutics 16(10) (2024).
  ·  DOI: [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241)

## Population and dosing

**Population:** New Zealand rabbits · condition healthy · age group adult · n = 5.

**Dosing:** 25.9, 7000, 35000 mg, iv and oral, single.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0–∞ (ng·h/mL) | AUC∞ | 7792.96 | ng·h/mL |
| Cp0 or Cmax (ng/mL) | Cmax | 1166.2 | ng/mL |
| Tmax (h) | tmax | 0.75 | h |
| Vz or Vz/F (L/kg) | V/F | 59.08 | L/kg |
| Cl or Cl/F (L/h/kg) | CL/F | 13.59 | L/h/kg |
| λz (h−1) | kel | 0.234 | h−1 |
| MRT (h) | MRT | 11.76 | h |
| AUC0–∞/dose (h/L/kg) | AUC/dose | 0.078 | h/L/kg |
| Cp0 or Cmax/dose (L−1/kg) | C0 | 0.012 | L−1/kg |
| Fmet | fm | 2.38 | p.o. |
| F | Fab | 0.006 | p.o. |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The rutoside record was rejected because the bioavailability-adjusted parameters are double-corrected — Fab = 0.006 p.o. is applied alongside already-apparent values such as CL/F = 13.59 L/h/kg and V/F = 59.08 L/kg — and a structural parameter has a dimension mismatch, with the fm unit (p.o.) not convertible to SI.**

The record reports apparent parameters for rutin in New Zealand rabbits (CL/F 13.59 L/h/kg, V/F 59.08 L/kg, AUC∞ 7792.96 ng·h/mL) that are already adjusted for bioavailability, so applying the reported Fab of 0.006 again double-corrects them, violating apparent-parameter coherence. The metabolite fraction fm for quercetin is reported as 2.38 with unit 'p.o.', a unit that could not be converted to SI, so it reached the model without an SI value; a value of 2.38 for a fraction is also incoherent. A second reader disagreed on the parameterization (mechanistic rather than apparent) and could not confirm several reported values, including Fab 0.006, AUC∞ 7792.96, CL/F 13.59, Cmax 1166.2 and C0 0.012, leaving those findings inconclusive. Extracted — rutoside: AUC∞ 7.79e+03 ng·h/mL, Cmax 1.17e+03 ng/mL, tmax 0.75 h, V/F 59.1 L/kg, CL/F 13.6 L/h/kg, kel 0.234 h−1, MRT 11.8 h, AUC/dose 0.078 h/L/kg, … (+2); quercetin: fm 2.38 p.o..

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rutin, the second reading unknown; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–∞ (ng·h/mL) | `Q17` · AUC∞ | 7792.96 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Domínguez_2024_table_1:row1:col3, Domínguez_2024_table_1:row1:col4 |
| Cp0 or Cmax (ng/mL) | `Q32` · Cmax | 1166.2 | ng/mL |  |  | ng/ml | boundary_llm_dim_refused (0.8) | Domínguez_2024_table_1:row2:col3, Domínguez_2024_table_1:row2:col4 |
| Tmax (h) | `Q56` · tmax | 0.75 | h | 2700 | s | h | exact (1) | Domínguez_2024_table_1:row3:col3, Domínguez_2024_table_1:row3:col4 |
| Vz or Vz/F (L/kg) | `Q76` · V/F | 59.08 | L/kg | 4.136 | m3 | l/kg | llm_confirmed (0.6) | Domínguez_2024_table_1:row5:col3 |
| Cl or Cl/F (L/h/kg) | `Q27` · CL/F | 13.59 | L/h/kg | 0.0002642 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Domínguez_2024_table_1:row6:col3 |
| λz (h−1) | `Q47` · kel | 0.234 | h−1 | 6.5e-05 | 1/s | 1/h | exact (1) | Domínguez_2024_table_1:row7:col3 |
| MRT (h) | `Q53` · MRT | 11.76 | h | 4.234e+04 | s | h | exact (1) | Domínguez_2024_table_1:row9:col3 |
| AUC0–∞/dose (h/L/kg) | `Q189` · AUC/dose | 0.078 | h/L/kg |  |  | h/(kg·l) | llm_confirmed (0.6) | Domínguez_2024_table_1:row10:col3 |
| Cp0 or Cmax/dose (L−1/kg) | `Q86` · C0 | 0.012 | L−1/kg |  |  | 1/(kg·l) | llm_corrected (0.6) | Domínguez_2024_table_1:row11:col3 |
| Fmet | `Q45` · fm | 2.38 | p.o. |  |  | o·p | exact (1) | Domínguez_2024_table_1:row12:col3 |
| F | `Q40` · Fab | 0.006 | p.o. |  |  |  | exact (1) | Domínguez_2024_table_1:row13:col3, Domínguez_2024_table_1:row13:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pure Rutin(0.37 mg/kg)' — extend the ontology if this is a real PK parameter (source ['Domínguez_2024_table_1:row0:col3'])
- unit_dimension_mismatch: 'AUC0–∞/dose (h/L/kg)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'L−1/kg' (C0)
- unit_dimension_unknown: 'p.o.' (fm)
- dropped value-less row: 'β'
- dropped value-less row: 'Ω'
- dropped value-less row: 'b'
- dropped value-less row: 'R.S.E.'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 177 (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- implicit units: 'Cp0 or Cmax/dose (L−1/kg)' — the LLM proposed 'L/kg', whose dimension does not fit Q86; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'oral administration (p.o.)' subgroup of Domínguez_2024 (paper reports 4 populations: extract(equivalent to 7.4 mg/kg of rutin), intravenous administration (i.v.), oral administration (p.o.), pure rutin(100 mg/kg))
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (4/26 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf/dose]` | 0.078 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf/dose]` |  | 0.078 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 7792.96 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 7792.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl or cl/f]` | 13.59 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl or cl/f]` |  | 13.59 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cp0 or cmax/dose]` | 0.012 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cp0 or cmax/dose]` |  | 0.012 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cp0 or cmax]` | 1166.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cp0 or cmax]` |  | 1166.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 0.006 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 11.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` |  | 11.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz or vz/f]` | 59.08 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz or vz/f]` |  | 59.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` | 0.234 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` |  | 0.234 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rutin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rutin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Domínguez_2024_table_1:row1:col3', 'Domínguez_2024_table_1:row1:col4'] |
| C5_dimension_Q189 | fail | [time] / [length] ** 3 | h/L/kg | ['Domínguez_2024_table_1:row10:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Domínguez_2024_table_1:row6:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Domínguez_2024_table_1:row2:col3', 'Domínguez_2024_table_1:row2:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Domínguez_2024_table_1:row7:col3'] |
| C5_dimension_Q53 | pass | [time] |  | ['Domínguez_2024_table_1:row9:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Domínguez_2024_table_1:row3:col3', 'Domínguez_2024_table_1:row3:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Domínguez_2024_table_1:row5:col3'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 | L−1/kg | ['Domínguez_2024_table_1:row11:col3'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.006 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 951 L/h | ['Domínguez_2024_table_1:row6:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.14e+03 L | ['Domínguez_2024_table_1:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brutoside%5D%20Rutoside_Domnguez2024_oral_administration_p_o&body=Drug%3A%20rutoside%0ARecord%3A%20Rutoside_Domnguez2024_oral_administration_p_o%0APaper%3A%20Dom%C3%ADnguez_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rutoside/Rutoside_Domnguez2024_oral_administration_p_o%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:20 UTC</sub>
