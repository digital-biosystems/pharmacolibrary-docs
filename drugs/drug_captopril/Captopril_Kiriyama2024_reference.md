<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;captopril&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/&quot;},{&quot;label&quot;:&quot;Kiriyama_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Captopril_Hu2025_reference&quot;,&quot;label&quot;:&quot;Hu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/Captopril_Hu2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# captopril — `Captopril_Kiriyama2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-09-30 23:59 UTC (Needs review), but the paper was screened again on 2026-10-07 05:16 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. V, kel, k12, k21, AUC, t1/2z, CL, Vss and MRT have no unit.

<div class="pk-model-meta" hidden drug="captopril" model-id="Captopril_Kiriyama2024_reference" status="rejected" stale="true" population="spontaneously hypertensive rats" measured-compound="captopril" parameterization="mechanistic" topology="1C"></div>

## Citation
Kiriyama A, Kimura S, Yamashita S. Exploring the multiple effects of nifedipine and captopril administration in spontaneously hypertensive rats through pharmacokinetic-pharmacodynamic analyses. Pharmacology research & perspectives 12(4):e1249 (2024).
  ·  DOI: [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249)

## Population and dosing

**Population:** spontaneously hypertensive rats · condition hypertension.

**Dosing:** 35, 70, 350, 1050 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1 | V | 54.2 | mL |
| k10 | kel | 0.0521 | 1/min |
| k12 | k12 | 0.153 | 1/min |
| k21 | k21 | 0.0694 | 1/min |
| AUC | AUC | 1730 | ng·min/mL |
| t1/2 | t1/2z | 81.6 | min |
| CLtot | CL | 4.21 | mL/min |
| Vdss | Vss | 395 | mL |
| MRT | MRT | 69.8 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V, kel, k12, k21, AUC, t1/2z, CL, Vss and MRT have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — captopril: V 54.2, kel 0.0521, k12 0.153, k21 0.0694, AUC 1.73e+03, t1/2z 81.6, CL 4.21, Vss 395, … (+1).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 | `Q61` · V | 54.2 | mL | 5.42e-05 | m3 | L | exact (1) | prp21249-tbl-0002:row2:col4, prp21249-tbl-0002:row2:col5 |
| k10 | `Q47` · kel | 0.0521 | 1/min | 0.0008683 | 1/s | 1/h | exact (1) | prp21249-tbl-0002:row3:col4, prp21249-tbl-0002:row3:col5 |
| k12 | `Q301` · k12 | 0.153 | 1/min | 0.00255 | 1/s | 1/h | exact (1) | prp21249-tbl-0002:row4:col4, prp21249-tbl-0002:row4:col5 |
| k21 | `Q302` · k21 | 0.0694 | 1/min | 0.001157 | 1/s | 1/h | exact (1) | prp21249-tbl-0002:row5:col4, prp21249-tbl-0002:row5:col5 |
| AUC | `Q88` · AUC | 1730 | ng·min/mL |  |  | ng·min/mL | exact (1) | Kiriyama_2024_table_1:row3:col8, Kiriyama_2024_table_1:row3:col10, Kiriyama_2024_table_1:row3:col11, Kiriyama_2024_table_1:row3:col13 |
| t1/2 | `Q57` · t1/2z | 81.6 | min | 4896 | s | h | exact (1) | Kiriyama_2024_table_1:row4:col8, Kiriyama_2024_table_1:row4:col10, Kiriyama_2024_table_1:row4:col11, Kiriyama_2024_table_1:row4:col13 |
| CLtot | `Q22` · CL | 4.21 | mL/min | 7.017e-08 | m3/s | L/h | exact (1) | Kiriyama_2024_table_1:row5:col8, Kiriyama_2024_table_1:row5:col10, Kiriyama_2024_table_1:row5:col11, Kiriyama_2024_table_1:row5:col13 |
| Vdss | `Q65` · Vss | 395 | mL | 0.000395 | m3 | L | llm (0.6) | Kiriyama_2024_table_1:row6:col8, Kiriyama_2024_table_1:row6:col10, Kiriyama_2024_table_1:row6:col11, Kiriyama_2024_table_1:row6:col13 |
| MRT | `Q53` · MRT | 69.8 | min | 4188 | s | h | exact (1) | Kiriyama_2024_table_1:row7:col8, Kiriyama_2024_table_1:row7:col10, Kiriyama_2024_table_1:row7:col11, Kiriyama_2024_table_1:row7:col13 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['prp21249-tbl-0002:row6:col4', 'prp21249-tbl-0002:row6:col5'])
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Kiriyama_2024_table_1:row2:col9', 'Kiriyama_2024_table_1:row2:col12'])
- implicit units: 'V1' → mL (from the popPK convention: 'V1 is the volume of the central compartment. In rat PK studies, volumes are typically expressed in mL (or L). Given the ')
- implicit units: 'k10' → 1/min (from the popPK convention: 'k10 is a first-order elimination rate constant. The paper states AUC is in ng·min/mL and MRT is derived from AUMC/AUC. S')
- implicit units: 'k12' → 1/min (from the popPK convention: 'k12 is a first-order transfer rate constant. Consistent with k10 and the time unit of minutes used for AUC and MRT in th')
- implicit units: 'k21' → 1/min (from the popPK convention: 'k21 is a first-order transfer rate constant. Consistent with k10 and the time unit of minutes used for AUC and MRT in th')
- implicit units: 'AUC' → ng·min/mL (from the paper text: "The text explicitly states: 'For nifedipine, the AUC per dose during monotherapy and coadministration was 237 ± 85 and 1")
- implicit units: 't1/2' → min (from the popPK convention: 't1/2 is the terminal elimination half-life. It is calculated as ln2/k10. Since k10 is in 1/min (derived from AUC units o')
- implicit units: 'CLtot' → mL/min (from the popPK convention: 'CLtot is total clearance. It is calculated as Dose/AUC. Dose is in mg/kg (or mg), AUC is in ng·min/mL. Clearance units a')
- implicit units: 'Vdss' → mL (from the popPK convention: 'Vdss is the volume of distribution at steady state. It is calculated as CLtot/ke. Since CLtot is in mL/min and ke is in ')
- implicit units: 'MRT' → min (from the popPK convention: 'MRT is the mean residence time. It is calculated as AUMC/AUC. Since AUC is in ng·min/mL, the time unit is minutes. The v')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=captopril
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp21249-tbl-0002:row3:col1 = '(min−1)'
- unparsed cell prp21249-tbl-0002:row4:col1 = '(min−1)'
- unparsed cell prp21249-tbl-0002:row5:col1 = '(min−1)'
- companion parameter table 1 transcribed (44 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (13/13 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kiriyama_2024_table_1:row5:col8', 'Kiriyama_2024_table_1:row5:col10', 'Kiriyama_2024_table_1:row5:col11', 'Kiriyama_2024_table_1:row5:col13'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['prp21249-tbl-0002:row4:col4', 'prp21249-tbl-0002:row4:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['prp21249-tbl-0002:row5:col4', 'prp21249-tbl-0002:row5:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['prp21249-tbl-0002:row3:col4', 'prp21249-tbl-0002:row3:col5'] |
| C5_dimension_Q53 | pass | [time] |  | ['Kiriyama_2024_table_1:row7:col8', 'Kiriyama_2024_table_1:row7:col10', 'Kiriyama_2024_table_1:row7:col11', 'Kiriyama_2024_table_1:row7:col13'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kiriyama_2024_table_1:row4:col8', 'Kiriyama_2024_table_1:row4:col10', 'Kiriyama_2024_table_1:row4:col11', 'Kiriyama_2024_table_1:row4:col13'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['prp21249-tbl-0002:row2:col4', 'prp21249-tbl-0002:row2:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kiriyama_2024_table_1:row6:col8', 'Kiriyama_2024_table_1:row6:col10', 'Kiriyama_2024_table_1:row6:col11', 'Kiriyama_2024_table_1:row6:col13'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Kiriyama_2024_table_1:row3:col8', 'Kiriyama_2024_table_1:row3:col10', 'Kiriyama_2024_table_1:row3:col11', 'Kiriyama_2024_table_1:row3:col13'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.21 | ['Kiriyama_2024_table_1:row5:col8', 'Kiriyama_2024_table_1:row5:col10', 'Kiriyama_2024_table_1:row5:col11', 'Kiriyama_2024_table_1:row5:col13'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.253 L/h | ['Kiriyama_2024_table_1:row5:col8', 'Kiriyama_2024_table_1:row5:col10', 'Kiriyama_2024_table_1:row5:col11', 'Kiriyama_2024_table_1:row5:col13'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0542 L | ['prp21249-tbl-0002:row2:col4', 'prp21249-tbl-0002:row2:col5'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.395 L | ['Kiriyama_2024_table_1:row6:col8', 'Kiriyama_2024_table_1:row6:col10', 'Kiriyama_2024_table_1:row6:col11', 'Kiriyama_2024_table_1:row6:col13'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcaptopril%5D%20Captopril_Kiriyama2024_reference&body=Drug%3A%20captopril%0ARecord%3A%20Captopril_Kiriyama2024_reference%0APaper%3A%20Kiriyama_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_captopril/Captopril_Kiriyama2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:16 UTC</sub>
