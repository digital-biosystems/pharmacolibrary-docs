<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Kaikousidis_2023 \u00b7 per_os_blood_data&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Kaikousidis2023_per_os_blood_data`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The donepezil blood volume of distribution Vblood of 0.279 L in mice is physiologically implausible, indicating a unit or scale extraction error, so the record was rejected.**

The model for donepezil in mice (brain and blood PK, one-compartment structure) reports Vblood as 0.279 L, which is orders of magnitude larger than any mouse blood or plasma volume and falls outside the physiological window for clearance/volume parameters. The remaining parameters (k12 0.064 1/min, k23 0.032 1/min, k20 0.024 1/min, kabs 2.73 /hour, tlag 0.54 hours) are not flagged, but the implausible volume magnitude points to a unit or scale error in the extracted value. Extracted — donepezil: k12 0.064 1/min, kcomp 0.032 1/min, ki0 0.024 1/min, V 0.279 L, kabs 2.73 /hour, tlag 0.54 hours.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption rate constant: this record has 2.73, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Kaikousidis C et al., Donepezil Brain and Blood Pharmacokinet…, Pharmaceutics (2023)
  ·  DOI: [10.3390/pharmaceutics15051409](https://doi.org/10.3390/pharmaceutics15051409)

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Kaikousidis2023_per_os_blood_data" status="rejected" stale="false" population="mice (brain and blood PK)" measured-compound="donepezil" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k12 (1/min) | `Q301` · k12 | 0.064 | 1/min | 0.0010666666666666667 | 1/h | not captured | exact (1.0) | Kaikousidis_2023_table_1:row1:col1, Kaikousidis_2023_table_1:row1:col2 | — | not captured |
| k23 (1/min) | `Q48` · kcomp | 0.032 | 1/min | 0.0005333333333333334 | 1/h | not captured | exact (1.0) | Kaikousidis_2023_table_1:row2:col1, Kaikousidis_2023_table_1:row2:col2 | — | not captured |
| k20 (1/min) | `Q373` · ki0 | 0.024 | 1/min | 0.0004 | 1/h | not captured | exact (1.0) | Kaikousidis_2023_table_1:row4:col1, Kaikousidis_2023_table_1:row4:col2 | — | not captured |
| Vblood (L) | `Q61` · V | 0.279 | L | 0.000279 | [l] | not captured | llm (0.6) | Kaikousidis_2023_table_1:row5:col1, Kaikousidis_2023_table_1:row5:col2 | — | not captured |
| Absorption rate constant, /hour | `Q49` · kabs | 2.73 | /hour | 0.0007583333333333333 | 1/h | not captured | review_gapfill (0.7) | Bakker_2021:review | — | not captured |
| Lag time, hours | `Q83` · tlag | 0.54 | hours | 1944.0000000000002 | h | not captured | review_gapfill (0.7) | Bakker_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q48 ('K32 (1/min)', value '0.012') — already have one for this compound
- implicit units: 'k12 (1/min)' → 1/min (from the paper text: "Text states rate constants in 1/min: 'k30: 0.325 and 0.369 1/min ... k23: 0.014 and 0.008 1/min ... k42: 0.011 and 0.010")
- implicit units: 'k23 (1/min)' → 1/min (from the paper text: "Text reports k23 in 1/min: 'k23: 0.014 and 0.008 1/min, for Per Os mean data and raw data model, respectively'.")
- implicit units: 'k20 (1/min)' → 1/min (from the paper text: "Text reports elimination constants in 1/min: 'k30: 0.325 and 0.369 1/min'; k20 is an analogous first-order elimination r")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donepezil
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vblood (L)' is the general volume)
- population split: 'per os blood data' subgroup of Kaikousidis_2023 (paper reports 4 populations: in—mean data, per os blood data, per os—mean data, total fit—per os and in raw data)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Bakker_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Bakker_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pharmaceutics-15-01409-t004:row2:col3 = '19.79%'
- unparsed cell pharmaceutics-15-01409-t004:row3:col3 = '23.66%'
- unparsed cell pharmaceutics-15-01409-t004:row4:col3 = '70.55%'
- unparsed cell pharmaceutics-15-01409-t004:row5:col3 = '119.67%'
- unparsed cell pharmaceutics-15-01409-t004:row6:col3 = '59.03%'
- unparsed cell pharmaceutics-15-01409-t004:row7:col3 = '33.80%'
- unparsed cell pharmaceutics-15-01409-t004:row8:col3 = '51.43%'
- unparsed cell pharmaceutics-15-01409-t004:row9:col3 = '0.11%'
- unparsed cell pharmaceutics-15-01409-t004:row10:col3 = '0.06%'
- unparsed cell pharmaceutics-15-01409-t004:row11:col3 = '15.82%'
- unparsed cell pharmaceutics-15-01409-t004:row12:col3 = '43.12%'
- unparsed cell pharmaceutics-15-01409-t004:row13:col3 = '12.46%'
- unparsed cell pharmaceutics-15-01409-t004:row14:col3 = '22.85%'
- unparsed cell pharmaceutics-15-01409-t004:row15:col3 = '9.95%'
- unparsed cell pharmaceutics-15-01409-t004:row16:col3 = '18.59%'
- unparsed cell pharmaceutics-15-01409-t004:row17:col3 = '103.15%'
- unparsed cell pharmaceutics-15-01409-t004:row20:col3 = '28.32%'
- unparsed cell pharmaceutics-15-01409-t004:row21:col3 = '30.50%'
- unparsed cell pharmaceutics-15-01409-t004:row22:col3 = '25.66%'
- unparsed cell pharmaceutics-15-01409-t004:row23:col3 = '24.24%'
- unparsed cell Kaikousidis_2023_table_1:row1:col3 = '6.43%'
- unparsed cell Kaikousidis_2023_table_1:row2:col3 = '9.78%'
- unparsed cell Kaikousidis_2023_table_1:row3:col3 = '23.64%'
- unparsed cell Kaikousidis_2023_table_1:row4:col3 = '5.61%'
- unparsed cell Kaikousidis_2023_table_1:row5:col3 = '5.16%'
- companion parameter table 1 transcribed (10 record(s))
- unparsed cell Kaikousidis_2023_table_2:row1:col3 = '3.33%'
- unparsed cell Kaikousidis_2023_table_2:row2:col3 = '6.88%'
- unparsed cell Kaikousidis_2023_table_2:row3:col3 = '5.99%'
- unparsed cell Kaikousidis_2023_table_2:row4:col3 = '13.24%'
- unparsed cell Kaikousidis_2023_table_2:row5:col3 = '20.93%'
- unparsed cell Kaikousidis_2023_table_2:row6:col3 = '21.02%'
- unparsed cell Kaikousidis_2023_table_2:row7:col3 = '16.57%'
- unparsed cell Kaikousidis_2023_table_2:row10:col3 = '20.37%'
- unparsed cell Kaikousidis_2023_table_2:row11:col3 = '22.64%'
- unparsed cell Kaikousidis_2023_table_2:row12:col3 = '19.24%'
- unparsed cell Kaikousidis_2023_table_2:row13:col3 = '28.30%'
- unparsed cell Kaikousidis_2023_table_2:row14:col3 = '61.73%'
- unparsed cell Kaikousidis_2023_table_2:row15:col3 = '59.35%'
- unparsed cell Kaikousidis_2023_table_2:row16:col3 = '45.94%'
- unparsed cell Kaikousidis_2023_table_2:row19:col3 = '32.02%'
- unparsed cell Kaikousidis_2023_table_2:row20:col3 = '62.93%'
- unparsed cell Kaikousidis_2023_table_2:row23:col3 = '28.48%'
- unparsed cell Kaikousidis_2023_table_2:row24:col3 = '31.09%'
- companion parameter table 2 transcribed (36 record(s))
- unparsed cell Kaikousidis_2023_table_3:row1:col3 = '11.45%'
- unparsed cell Kaikousidis_2023_table_3:row2:col3 = '31.33%'
- unparsed cell Kaikousidis_2023_table_3:row3:col3 = '1.80%'
- unparsed cell Kaikousidis_2023_table_3:row4:col3 = '10.29%'
- unparsed cell Kaikousidis_2023_table_3:row5:col3 = '56.40%'
- unparsed cell Kaikousidis_2023_table_3:row6:col3 = '16.33%'
- unparsed cell Kaikousidis_2023_table_3:row7:col3 = '24.13%'
- unparsed cell Kaikousidis_2023_table_3:row8:col3 = '38.33%'
- unparsed cell Kaikousidis_2023_table_3:row9:col3 = '8.44%'
- unparsed cell Kaikousidis_2023_table_3:row10:col3 = '49.78%'
- unparsed cell Kaikousidis_2023_table_3:row13:col3 = '9.97%'
- unparsed cell Kaikousidis_2023_table_3:row14:col3 = '38.53%'
- unparsed cell Kaikousidis_2023_table_3:row15:col3 = '3.94%'
- unparsed cell Kaikousidis_2023_table_3:row16:col3 = '13.50%'
- unparsed cell Kaikousidis_2023_table_3:row17:col3 = '55.15%'
- unparsed cell Kaikousidis_2023_table_3:row18:col3 = '19.28%'
- unparsed cell Kaikousidis_2023_table_3:row19:col3 = '10.85%'
- unparsed cell Kaikousidis_2023_table_3:row20:col3 = '39.13%'
- unparsed cell Kaikousidis_2023_table_3:row21:col3 = '22.61%'
- unparsed cell Kaikousidis_2023_table_3:row22:col3 = '42.69%'
- unparsed cell Kaikousidis_2023_table_3:row25:col3 = '39.81%'
- unparsed cell Kaikousidis_2023_table_3:row26:col3 = '80.47%'
- unparsed cell Kaikousidis_2023_table_3:row29:col3 = '26.09%'
- unparsed cell Kaikousidis_2023_table_3:row30:col3 = '24.41%'
- companion parameter table 3 transcribed (48 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 2.73 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.54 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_1:row1:col1', 'Kaikousidis_2023_table_1:row1:col2'] |
| C5_dimension_Q373 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_1:row4:col1', 'Kaikousidis_2023_table_1:row4:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_1:row2:col1', 'Kaikousidis_2023_table_1:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bakker_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kaikousidis_2023_table_1:row5:col1', 'Kaikousidis_2023_table_1:row5:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Bakker_2021:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.279 L | not captured | not captured | ['Kaikousidis_2023_table_1:row5:col1', 'Kaikousidis_2023_table_1:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_donepezil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kaikousidis_2023` / `Kaikousidis_2023::per_os_blood_data`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:30 UTC</sub>
