<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Yoon_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Yoon2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The donepezil absorption rate constant kabs is recorded as 4456 with unit 'h', a dimension mismatch for a rate constant (expected 1/h), so the record was rejected.**

The parameter kabs for donepezil carries the verbatim unit 'h' (hours), which is dimensionally wrong for an absorption rate constant and could not be converted to SI, so the value 4456 reached the model without a valid unit. The other parameters (tlag 0.497 h, V1 456.473 L, V2 516.912 L, Q 12.021 L/h, Vmax 376.164 mg/h, Km 107.083 ng/mL, CL/F 5.167 L/h, Frel 0.13) carry consistent units. The rejection rests on this single dimension mismatch on a structural parameter. Extracted — donepezil: kabs 4.46e+03 h, tlag 0.497 h, V1 456 L, V2 517 L, Q 12 L/h, Vmax 376 mg/h, Km 107 ng/mL, CL/F 5.17 L/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has donepezil, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Yoon SK et al., Pharmacokinetic Evaluation by Modeling…, Drug design, development an… (2020)
  ·  DOI: [10.2147/DDDT.S244957](https://doi.org/10.2147/DDDT.S244957)

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Yoon2020_reference" status="rejected" stale="false" population="healthy Korean male subjects" measured-compound="donepezil" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka, h | `Q49` · kabs | 4456 | h | not captured | [h] | not captured | exact (1.0) | T0002:row2:col1, T0002:row2:col2, T0002:row2:col3 | — | 0.05 (None% RSE) |
| ALAG1, h | `Q83` · tlag | 0.497 | h | 1789.2 | [h] | not captured | llm (0.6) | T0002:row4:col1, T0002:row4:col2, T0002:row4:col3 | — | not captured |
| Vc, L | `Q63` · V1 | 456.473 | L | 0.456473 | [l] | not captured | exact (1.0) | T0002:row5:col1, T0002:row5:col2, T0002:row5:col3, T0002:row17:col1, T0002:row17:col2, T0002:row17:col3 | — | 0 (None% RSE) |
| Vp, L | `Q64` · V2 | 516.912 | L | 0.516912 | [l] | not captured | exact (1.0) | T0002:row7:col1, T0002:row7:col2, T0002:row7:col3, T0002:row19:col1, T0002:row19:col2, T0002:row19:col3 | — | 0 (None% RSE) |
| Q, L/h | `Q30` · Q | 12.021 | L/h | 3.3391666666666667e-06 | [l] / [h] | not captured | exact (1.0) | T0002:row9:col1, T0002:row9:col2, T0002:row9:col3, T0002:row21:col1, T0002:row21:col2, T0002:row21:col3 | — | not captured |
| Vmax, mg/h | `Q66` · Vmax | 376.164 | mg/h | not captured | [mg] / [h] | not captured | special_case (0.95) | T0002:row10:col1, T0002:row10:col2, T0002:row10:col3, T0002:row24:col1, T0002:row24:col2, T0002:row24:col3 | — | not captured |
| Km, ng/mL | `Q1` · Km | 107.083 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | T0002:row11:col1, T0002:row11:col2, T0002:row11:col3, T0002:row22:col1, T0002:row22:col2, T0002:row22:col3 | — | 0.07 (None% RSE) |
| CLFO, L/h | `Q27` · CL/F | 5.167 | L/h | 1.4352777777777776e-06 | [l] / [h] | not captured | llm (0.6) | T0002:row13:col1, T0002:row13:col2, T0002:row13:col3, T0002:row25:col1, T0002:row25:col2, T0002:row25:col3 | — | not captured |
| F2studyI | `Q87` · Frel | 0.13 | A | not captured | [a] | not captured | llm (0.6) | T0002:row30:col1, T0002:row30:col2, T0002:row30:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '(a)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Ka, h' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Vmax, mg/h' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- routed 'ϵ, ng/mL' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'D2, h' — extend the ontology if this is a real PK parameter (source ['T0002:row26:col1', 'T0002:row26:col2', 'T0002:row26:col3'])
- dropped duplicate Q83 ('ALAG2, h', value '3.96') — already have one for this compound
- dropped duplicate Q87 ('F2studyII', value '0.18') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=donepezil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell T0002:row3:col1 = '1.21 (11.11%)'
- unparsed cell T0002:row3:col2 = '0.99 (9.95%)'
- unparsed cell T0002:row6:col1 = '0.002 (6.07%)'
- unparsed cell T0002:row6:col2 = '0 (6.07%)'
- unparsed cell T0002:row8:col1 = '0.001 (6.07%)'
- unparsed cell T0002:row8:col2 = '0.01 (6.1%)'
- unparsed cell T0002:row12:col1 = '0.348 (7.22%)'
- unparsed cell T0002:row12:col2 = '0.86 (9.32%)'
- unparsed cell T0002:row18:col1 = '0.06 (138.05%)'
- unparsed cell T0002:row18:col2 = '0.87 (9.37%)'
- unparsed cell T0002:row20:col1 = '0.19 (170.3%)'
- unparsed cell T0002:row20:col2 = '0.16 (6.57%)'
- unparsed cell T0002:row23:col1 = '0.82 (585.57%)'
- unparsed cell T0002:row23:col2 = '1.52 (12.97%)'
- unparsed cell T0002:row27:col1 = '0.09 (144.4%)'
- unparsed cell T0002:row27:col2 = '0.13 (6.47%)'
- unparsed cell T0002:row29:col1 = '0.13 (154.1%)'
- unparsed cell T0002:row29:col2 = '0.19 (6.67%)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | donepezil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | donepezil | unknown | mismatch |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['T0002:row11:col1', 'T0002:row11:col2', 'T0002:row11:col3', 'T0002:row22:col1', 'T0002:row22:col2', 'T0002:row22:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T0002:row13:col1', 'T0002:row13:col2', 'T0002:row13:col3', 'T0002:row25:col1', 'T0002:row25:col2', 'T0002:row25:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T0002:row9:col1', 'T0002:row9:col2', 'T0002:row9:col3', 'T0002:row21:col1', 'T0002:row21:col2', 'T0002:row21:col3'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['T0002:row2:col1', 'T0002:row2:col2', 'T0002:row2:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T0002:row5:col1', 'T0002:row5:col2', 'T0002:row5:col3', 'T0002:row17:col1', 'T0002:row17:col2', 'T0002:row17:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T0002:row7:col1', 'T0002:row7:col2', 'T0002:row7:col3', 'T0002:row19:col1', 'T0002:row19:col2', 'T0002:row19:col3'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['T0002:row10:col1', 'T0002:row10:col2', 'T0002:row10:col3', 'T0002:row24:col1', 'T0002:row24:col2', 'T0002:row24:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T0002:row4:col1', 'T0002:row4:col2', 'T0002:row4:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.17 L/h | not captured | not captured | ['T0002:row13:col1', 'T0002:row13:col2', 'T0002:row13:col3', 'T0002:row25:col1', 'T0002:row25:col2', 'T0002:row25:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 456 L | not captured | not captured | ['T0002:row5:col1', 'T0002:row5:col2', 'T0002:row5:col3', 'T0002:row17:col1', 'T0002:row17:col2', 'T0002:row17:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 517 L | not captured | not captured | ['T0002:row7:col1', 'T0002:row7:col2', 'T0002:row7:col3', 'T0002:row19:col1', 'T0002:row19:col2', 'T0002:row19:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_donepezil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yoon_2020` / `Yoon_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:30 UTC</sub>
