<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;quinine&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/&quot;},{&quot;label&quot;:&quot;Michels_2019 \u00b7 two_compartmental_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinine_Hendriksen2013_reference&quot;,&quot;label&quot;:&quot;Hendriksen_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Hendriksen2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Kloprogge2014_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Kloprogge2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Phillips1986_reference&quot;,&quot;label&quot;:&quot;Phillips_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Phillips1986_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinine — `Quinine_Michels2019_two_compartmental_model`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The quinine steady-state volume of distribution, 0.183 mL/kg, is physiologically implausible, indicating a unit/scale extraction error, so the record was rejected.**

For quinine in P. berghei-infected Wistar rats, the reported Vdss of 0.183 mL/kg falls far outside any plausible physiological range for a volume of distribution, while the other parameters (AUC∞ 32.13 µg·h/mL, CL 0.09 L/h, t½ 1.76 h, kel 0.39 h−1) were extracted. The reported unit mL/kg could not be converted to SI, so the volume parameter reached the model build without an SI value, and the implausible magnitude points to a unit or scale extraction error. Extracted — quinine: AUC∞ 32.1 µg.h/mL, CL 0.09 L/h, t1/2z 1.76 h, kel 0.39 h−1, Vss 0.183 mL/kg.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Michels LR et al., Effects of Surface Characteristics of P…, International journal of na… (2019)
  ·  DOI: [10.2147/IJN.S227914](https://doi.org/10.2147/IJN.S227914)

<div class="pk-model-meta" hidden drug="quinine" model-id="Quinine_Michels2019_two_compartmental_model" status="rejected" stale="false" population="P. berghei-infected Wistar rats" measured-compound="quinine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0–∞(µg.h/mL) | `Q17` · AUC∞ | 32.13 | µg.h/mL | not captured | [[h] · [µg]] / [ml] | not captured | exact (1.0) | Michels_2019_table_3:row2:col4, Michels_2019_table_3:row2:col5, Michels_2019_table_3:row2:col6 | — | not captured |
| CLTot (L/h) | `Q22` · CL | 0.09 | L/h | 2.5e-08 | [l] / [h] | not captured | exact (1.0) | Michels_2019_table_3:row4:col4, Michels_2019_table_3:row4:col5, Michels_2019_table_3:row4:col6 | — | not captured |
| t½ (h) | `Q57` · t1/2z | 1.76 | h | 6336.0 | [h] | not captured | llm (0.6) | Michels_2019_table_3:row5:col4, Michels_2019_table_3:row5:col5, Michels_2019_table_3:row5:col6 | — | not captured |
| Ke (h−1) or β (h−1) | `Q47` · kel | 0.39 | h−1 | 0.00010833333333333334 | [1] / [h] | not captured | llm_confirmed (0.6) | Michels_2019_table_3:row6:col4, Michels_2019_table_3:row6:col5, Michels_2019_table_3:row6:col6 | — | not captured |
| Vdss (mL/kg) | `Q65` · Vss | 0.183 | mL/kg | 1.281e-05 | [ml] / [kg] | not captured | llm (0.6) | Michels_2019_table_3:row8:col4, Michels_2019_table_3:row8:col5, Michels_2019_table_3:row8:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Table 4. Parameter Estimates of the Final Quinine Population Pharmacokinetic Model'
- dropped value-less row: 'Abbreviations: NA, not applicable; RSE, relative standard error (standard error of estimate/estimate × 100); V1, central volume compartment; V2, peripheral compartment volume; Q, intercompartmental clearance.'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinine
- population split: 'two-compartmental model' subgroup of Michels_2019 (paper reports 3 populations: estimate, non-compartmental, two-compartmental model)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Michels_2019_table_3:row3:col2 = '156.4 ± 65.7a'
- unparsed cell Michels_2019_table_3:row5:col2 = '16.14 ± 13.21a'
- unparsed cell Michels_2019_table_3:row5:col3 = '7.11 ± 3.90a'
- unparsed cell Michels_2019_table_3:row6:col2 = '0.07 ± 0.04a,b'
- unparsed cell Michels_2019_table_3:row6:col3 = '0.14 ± 0.10a,b'
- unparsed cell Michels_2019_table_3:row7:col2 = '6.20 ± 2.46a,b'
- unparsed cell Michels_2019_table_3:row7:col3 = '1.48 ± 0.62b'
- unparsed cell Michels_2019_table_3:row8:col2 = '0.570 ± 0.418a,b'
- unparsed cell Michels_2019_table_3:row8:col3 = '0.077 ± 0.011a,b'
- companion parameter table 3 transcribed (30 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Michels_2019_table_3:row2:col4', 'Michels_2019_table_3:row2:col5', 'Michels_2019_table_3:row2:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Michels_2019_table_3:row4:col4', 'Michels_2019_table_3:row4:col5', 'Michels_2019_table_3:row4:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Michels_2019_table_3:row6:col4', 'Michels_2019_table_3:row6:col5', 'Michels_2019_table_3:row6:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Michels_2019_table_3:row5:col4', 'Michels_2019_table_3:row5:col5', 'Michels_2019_table_3:row5:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Michels_2019_table_3:row8:col4', 'Michels_2019_table_3:row8:col5', 'Michels_2019_table_3:row8:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.09 | not captured | not captured | ['Michels_2019_table_3:row4:col4', 'Michels_2019_table_3:row4:col5', 'Michels_2019_table_3:row4:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.09 L/h | not captured | not captured | ['Michels_2019_table_3:row4:col4', 'Michels_2019_table_3:row4:col5', 'Michels_2019_table_3:row4:col6'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.0128 L | not captured | not captured | ['Michels_2019_table_3:row8:col4', 'Michels_2019_table_3:row8:col5', 'Michels_2019_table_3:row8:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_quinine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Michels_2019` / `Michels_2019::two_compartmental_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:37 UTC</sub>
