<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;quinine&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/&quot;},{&quot;label&quot;:&quot;Michels_2019 \u00b7 two_compartmental_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinine_Hendriksen2013_reference&quot;,&quot;label&quot;:&quot;Hendriksen_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Hendriksen2013_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Kloprogge2014_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Kloprogge2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Phillips1986_reference&quot;,&quot;label&quot;:&quot;Phillips_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Phillips1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinine — `Quinine_Michels2019_two_compartmental_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The quinine steady-state volume of distribution, 0.183 mL/kg, is physiologically implausible, indicating a unit/scale extraction error, so the record was rejected.

<div class="pk-model-meta" hidden drug="quinine" model-id="Quinine_Michels2019_two_compartmental_model" status="rejected" stale="false" population="P. berghei-infected Wistar rats" measured-compound="quinine" parameterization="mechanistic" topology="1C"></div>

## Citation
Michels LR, Maciel TR, Nakama KA, Teixeira FEG, de Carvalho FB, Gundel A et al. Effects of Surface Characteristics of Polymeric Nanocapsules on the Pharmacokinetics and Efficacy of Antimalarial Quinine. International journal of nanomedicine 14:10165–10178 (2019).
  ·  DOI: [10.2147/IJN.S227914](https://doi.org/10.2147/IJN.S227914)

## Population and dosing

**Population:** P. berghei-infected Wistar rats · condition malaria (P. berghei infection) · age group adult · n = 18.

**Dosing:** 1400 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0–∞(µg.h/mL) | AUC∞ | 32.13 | µg.h/mL |
| CLTot (L/h) | CL | 0.09 | L/h |
| t½ (h) | t1/2z | 1.76 | h |
| Ke (h−1) or β (h−1) | kel | 0.39 | h−1 |
| Vdss (mL/kg) | Vss | 0.183 | mL/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The quinine steady-state volume of distribution, 0.183 mL/kg, is physiologically implausible, indicating a unit/scale extraction error, so the record was rejected.**

For quinine in P. berghei-infected Wistar rats, the reported Vdss of 0.183 mL/kg falls far outside any plausible physiological range for a volume of distribution, while the other parameters (AUC∞ 32.13 µg·h/mL, CL 0.09 L/h, t½ 1.76 h, kel 0.39 h−1) were extracted. The reported unit mL/kg could not be converted to SI, so the volume parameter reached the model build without an SI value, and the implausible magnitude points to a unit or scale extraction error. Extracted — quinine: AUC∞ 32.1 µg.h/mL, CL 0.09 L/h, t1/2z 1.76 h, kel 0.39 h−1, Vss 0.183 mL/kg.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–∞(µg.h/mL) | `Q17` · AUC∞ | 32.13 | µg.h/mL |  |  | (h·µg)/ml | exact (1) | Michels_2019_table_3:row2:col4, Michels_2019_table_3:row2:col5, Michels_2019_table_3:row2:col6 |
| CLTot (L/h) | `Q22` · CL | 0.09 | L/h | 2.5e-08 | m3/s | l/h | exact (1) | Michels_2019_table_3:row4:col4, Michels_2019_table_3:row4:col5, Michels_2019_table_3:row4:col6 |
| t½ (h) | `Q57` · t1/2z | 1.76 | h | 6336 | s | h | llm (0.6) | Michels_2019_table_3:row5:col4, Michels_2019_table_3:row5:col5, Michels_2019_table_3:row5:col6 |
| Ke (h−1) or β (h−1) | `Q47` · kel | 0.39 | h−1 | 0.0001083 | 1/s | 1/h | llm_confirmed (0.6) | Michels_2019_table_3:row6:col4, Michels_2019_table_3:row6:col5, Michels_2019_table_3:row6:col6 |
| Vdss (mL/kg) | `Q65` · Vss | 0.183 | mL/kg | 1.281e-05 | m3 | ml/kg | llm (0.6) | Michels_2019_table_3:row8:col4, Michels_2019_table_3:row8:col5, Michels_2019_table_3:row8:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Michels_2019_table_3:row2:col4', 'Michels_2019_table_3:row2:col5', 'Michels_2019_table_3:row2:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Michels_2019_table_3:row4:col4', 'Michels_2019_table_3:row4:col5', 'Michels_2019_table_3:row4:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Michels_2019_table_3:row6:col4', 'Michels_2019_table_3:row6:col5', 'Michels_2019_table_3:row6:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['Michels_2019_table_3:row5:col4', 'Michels_2019_table_3:row5:col5', 'Michels_2019_table_3:row5:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Michels_2019_table_3:row8:col4', 'Michels_2019_table_3:row8:col5', 'Michels_2019_table_3:row8:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.09 | ['Michels_2019_table_3:row4:col4', 'Michels_2019_table_3:row4:col5', 'Michels_2019_table_3:row4:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.09 L/h | ['Michels_2019_table_3:row4:col4', 'Michels_2019_table_3:row4:col5', 'Michels_2019_table_3:row4:col6'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.0128 L | ['Michels_2019_table_3:row8:col4', 'Michels_2019_table_3:row8:col5', 'Michels_2019_table_3:row8:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinine%5D%20Quinine_Michels2019_two_compartmental_model&body=Drug%3A%20quinine%0ARecord%3A%20Quinine_Michels2019_two_compartmental_model%0APaper%3A%20Michels_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quinine/Quinine_Michels2019_two_compartmental_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:37 UTC</sub>
