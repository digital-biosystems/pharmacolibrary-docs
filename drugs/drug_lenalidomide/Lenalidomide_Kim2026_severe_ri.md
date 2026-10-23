<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;lenalidomide&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/&quot;},{&quot;label&quot;:&quot;Kim_2026 \u00b7 severe_ri&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lenalidomide_Gupta2019_reference&quot;,&quot;label&quot;:&quot;Gupta_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Gupta2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Papathanasiou2025_reference&quot;,&quot;label&quot;:&quot;Papathanasiou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Papathanasiou2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lenalidomide_Hughes2019_reference&quot;,&quot;label&quot;:&quot;Hughes_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lenalidomide/Lenalidomide_Hughes2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenalidomide — `Lenalidomide_Kim2026_severe_ri`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Lenalidomide parameters CL/F, V1/F, and CL are zero, and V1/F and V2/F are negative, rendering the model implausible.

<div class="pk-model-meta" hidden drug="lenalidomide" model-id="Lenalidomide_Kim2026_severe_ri" status="rejected" stale="false" population="adults with multiple myeloma and renal impairment" measured-compound="lenalidomide" parameterization="apparent" topology="3C"></div>

## Citation
Kim H, Park SS, Choi S, Han S, Han S, Lee Y et al. Population Pharmacokinetics and Model-Informed Precision Dosing of Lenalidomide Incorporating Total and Unbound Plasma Concentrations in Renally Impaired Patients with Multiple Myeloma. Drug design, development and therapy 20:605741 (2026).
  ·  DOI: [10.2147/DDDT.S605741](https://doi.org/10.2147/DDDT.S605741)

## Population and dosing

**Population:** adults with multiple myeloma and renal impairment · condition multiple myeloma · age group adult · n = This is a population PK study. The text explicitly states: 'Thirty MM patients... were prospectively enrolled'. 'MM' stands for Multiple Myeloma. Therefore, the population is 'multiple myeloma patients with renal impairment'. Since these are patients with a hematological malignancy requiring oral dosing, they are adults. 'n_subjects' is 30..

**Dosing:** 25 mg, oral, multiple, every 24 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| θ CL/F (L/h) | CL/F | 0 | L/h | -9 (None% RSE) |
| θ V1/F (L) | V1/F | -0.8 | L | -4.5 (None% RSE) |
| θ Q/F (L/h) | Q/F | 0.1 | L/h |  |
| θ V2/F (L) | V2/F | -0.5 | L |  |
| θ Fu (%) | fu | 0.2 |  |  |
| θ CLBSA | CL | 0 | L/h |  |
| θ V1BSA | V | 0.9 | L |  |
| Cmax (ng/mL) | Cmax | 227.0 | ng/mL |  |
| Tmax (h) | tmax | 1.71 | h |  |
| AUC24 (ng·h/mL) | AUCt | 2469.5 | ng·h/mL |  |
| T1/2 (h) | t1/2z | 9.80 | h |  |
| Vz/F (L) | V/F | 47.56 | L |  |
| θ CLeGFR | θ CLeGFR | 0.8 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lenalidomide parameters CL/F, V1/F, and CL are zero, and V1/F and V2/F are negative, rendering the model implausible.**

The record lists total clearance and bioavailability-adjusted clearances as zero and central volume as -0.8 L. Peripheral volume is also negative at -0.5 L. The rejection reasons confirm these negative clearance or volume values are implausible, indicating a base value or shift error. Extracted — lenalidomide: CL/F 0 L/h, V1/F -0.8 L, Q/F 0.1 L/h, V2/F -0.5 L, fu 0.2, CL 0 L/h, V 0.9 L, Cmax 227 ng/mL, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θ clegfr: this record has 0.8, the second reading none; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| θ CL/F (L/h) | `Q27` · CL/F | 0 | L/h | 0 | m3/s | l/h | llm_confirmed (0.6) | t0003:row3:col6 | -9 (None% RSE) |
| θ V1/F (L) | `Q290` · V1/F | -0.8 | L | -0.0008 | m3 | l | llm_confirmed (0.6) | t0003:row4:col6 | -4.5 (None% RSE) |
| θ Q/F (L/h) | `Q69` · Q/F | 0.1 | L/h | 2.778e-08 | m3/s | l/h | llm_confirmed (0.6) | t0003:row5:col6 |  |
| θ V2/F (L) | `Q82` · V2/F | -0.5 | L | -0.0005 | m3 | l | llm_confirmed (0.6) | t0003:row6:col6 |  |
| θ Fu (%) | `Q46` · fu | 0.2 |  |  |  |  | llm_confirmed (0.6) | t0003:row8:col6 |  |
| θ CLBSA | `Q22` · CL | 0 | L/h | 0 | m3/s | L/h | llm (0.6) | t0003:row9:col6 |  |
| θ V1BSA | `Q61` · V | 0.9 | L | 0.0009 | m3 | L | llm (0.6) | t0003:row11:col6 |  |
| Cmax (ng/mL) | `Q32` · Cmax | 227.0 | ng/mL |  |  | ng/ml | exact (1) | Kim_2026_table_2:row1:col1, Kim_2026_table_2:row8:col1 |  |
| Tmax (h) | `Q56` · tmax | 1.71 | h | 6156 | s | h | exact (1) | Kim_2026_table_2:row2:col1, Kim_2026_table_2:row9:col1 |  |
| AUC24 (ng·h/mL) | `Q19` · AUCt | 2469.5 | ng·h/mL |  |  | (h·ng)/ml | llm (0.6) | Kim_2026_table_2:row3:col1, Kim_2026_table_2:row10:col1 |  |
| T1/2 (h) | `Q57` · t1/2z | 9.80 | h | 3.528e+04 | s | h | exact (1) | Kim_2026_table_2:row4:col1, Kim_2026_table_2:row11:col1 |  |
| Vz/F (L) | `Q76` · V/F | 47.56 | L | 0.04756 | m3 | l | exact (1) | Kim_2026_table_2:row6:col1, Kim_2026_table_2:row13:col1 |  |
| θ CLeGFR | `Q900` · θ CLeGFR | 0.8 |  |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω V1/F' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ unbound-proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ unbound-addictive' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ total-proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ total-addictive' routed out of structural estimates ('Residual error')
- kept covariate coefficient θ CLeGFR=0.8 (covariate CLeGFR) — not an ontology parameter
- dropped duplicate Q27 ('CL/F (L/h)', value '3.39') — already have one for this compound
- implicit units: 'θ CLBSA' → L/h (from the popPK convention: 'CL represents clearance. In population PK studies, especially when scaled by BSA (BSA) or presented as absolute values w')
- implicit units: 'θ V1BSA' → L (from the popPK convention: 'V1 represents Volume of Distribution. In population PK, volumes of distribution are conventionally expressed in Liters (')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenalidomide
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- population split: 'severe ri (n=11)' subgroup of Kim_2026 (paper reports 5 populations: control (n=8), moderate ri (n=11), nonmem final model, overall (n=30), severe ri (n=11))

**Extraction notes:**
- unparsed cell t0003:row13:col1 = '18.9% (13.3)'
- unparsed cell t0003:row13:col2 = '18.9% (13.3)'
- unparsed cell t0003:row13:col4 = '17.2%'
- unparsed cell t0003:row13:col5 = '12.7–21.2%'
- unparsed cell t0003:row14:col1 = '30.8% (24.7)'
- unparsed cell t0003:row14:col2 = '30.8% (24.7)'
- unparsed cell t0003:row14:col4 = '29.4%'
- unparsed cell t0003:row14:col5 = '18.1–44.3%'
- unparsed cell t0003:row16:col1 = '12.5% (16.8)'
- unparsed cell t0003:row16:col2 = '12.5% (16.8)'
- unparsed cell t0003:row16:col4 = '12.3%'
- unparsed cell t0003:row16:col5 = '7.4–15.4%'
- unparsed cell t0003:row18:col1 = '12.6% (16.3)'
- unparsed cell t0003:row18:col2 = '12.6% (16.3)'
- unparsed cell t0003:row18:col4 = '12.3%'
- unparsed cell t0003:row18:col5 = '8.08–15.4%'
- companion parameter table 2 transcribed (48 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (16/18 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ clegfr]` | 0.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ v1bsa].parameter_id` | Q61 | Q63 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q290 | fail |  | -0.8 |  |
| C2_base_sign_Q82 | fail |  | -0.5 |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Kim_2026_table_2:row3:col1', 'Kim_2026_table_2:row10:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0003:row9:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t0003:row3:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['t0003:row4:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kim_2026_table_2:row1:col1', 'Kim_2026_table_2:row8:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kim_2026_table_2:row2:col1', 'Kim_2026_table_2:row9:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kim_2026_table_2:row4:col1', 'Kim_2026_table_2:row11:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['t0003:row11:col6'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['t0003:row5:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kim_2026_table_2:row6:col1', 'Kim_2026_table_2:row13:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['t0003:row6:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.9 L | ['t0003:row11:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 47.6 L | ['Kim_2026_table_2:row6:col1', 'Kim_2026_table_2:row13:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blenalidomide%5D%20Lenalidomide_Kim2026_severe_ri&body=Drug%3A%20lenalidomide%0ARecord%3A%20Lenalidomide_Kim2026_severe_ri%0APaper%3A%20Kim_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lenalidomide/Lenalidomide_Kim2026_severe_ri%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:03 UTC</sub>
