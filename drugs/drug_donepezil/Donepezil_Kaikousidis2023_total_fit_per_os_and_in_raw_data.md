<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Kaikousidis_2023 \u00b7 total_fit_per_os_and_in_raw_data&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The donepezil mouse model was rejected because the peripheral volume of distribution V2 is 562 L, a physiologically implausible magnitude for mice that indicates a unit or scale extraction error, and the structure leaves a compartment unreachable from the dose.

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data" status="rejected" stale="false" population="mice (brain and blood PK)" measured-compound="donepezil" parameterization="mechanistic" topology="2C"></div>

## Citation
Kaikousidis C, Papakyriakopoulou P, Dokoumetzidis A, Valsami G. Donepezil Brain and Blood Pharmacokinetic Modeling after Nasal Film and Oral Solution Administration in Mice. Pharmaceutics 15(5) (2023).
  ·  DOI: [10.3390/pharmaceutics15051409](https://doi.org/10.3390/pharmaceutics15051409)

## Population and dosing

**Population:** mice (brain and blood PK) · condition healthy.

**Dosing:** 280, 700 mg, oral; intranasal, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k12 (1/min) | k12 | 0.065 | 1/min |
| k20 (1/min) | ki0 | 0.039 | 1/min |
| k23 (1/min) | kcomp | 0.011 | 1/min |
| Vbrain_PO (L) | V | 0.015 | L |
| Tlag (min) | tlag | 3.59 | min |
| Tk0 (min) | D1 | 11.4 | min |
| Mtt (min) | MTT | 53.8 | min |
| ktr (1/min) | ktr | 0.205 | 1/min |
| Vblood_IN (L) | V1 | 0.024 | L |
| ka (1/min) | kabs | 0.127 | 1/min |
| Vp (L) | V2 | 562.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The donepezil mouse model was rejected because the peripheral volume of distribution V2 is 562 L, a physiologically implausible magnitude for mice that indicates a unit or scale extraction error, and the structure leaves a compartment unreachable from the dose.**

The record lists V2 (Vp) as 562.0 L for donepezil, alongside V1 (Vblood_IN) of 0.024 L and Vbrain_PO of 0.015 L, so the peripheral volume is out of any physiological window for mice and was flagged as an implausible magnitude from a unit/scale extraction error. The reported unit for this parameter could not be converted to SI, so the value reached the model without an SI magnitude. The structure check also found an unreachable or orphan compartment: the model is declared two-compartment, yet it carries a k23 micro-rate (0.011 1/min) and an elimination constant ki0 (0.039 1/min) defined as leaving a non-central compartment, leaving part of the structure without a path from the dose. Extracted — donepezil: k12 0.065 1/min, ki0 0.039 1/min, kcomp 0.011 1/min, V 0.015 L, tlag 3.59 min, D1 11.4 min, MTT 53.8 min, ktr 0.205 1/min, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of a2: this record has none, the second reading 0.004; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k12 (1/min) | `Q301` · k12 | 0.065 | 1/min | 0.001083 | 1/s | 1/h | exact (1) | pharmaceutics-15-01409-t004:row2:col1, pharmaceutics-15-01409-t004:row2:col2 |
| k20 (1/min) | `Q373` · ki0 | 0.039 | 1/min | 0.00065 | 1/s | 1/h | exact (1) | pharmaceutics-15-01409-t004:row3:col1, pharmaceutics-15-01409-t004:row3:col2 |
| k23 (1/min) | `Q48` · kcomp | 0.011 | 1/min | 0.0001833 | 1/s | 1/h | exact (1) | pharmaceutics-15-01409-t004:row4:col1, pharmaceutics-15-01409-t004:row4:col2 |
| Vbrain_PO (L) | `Q61` · V | 0.015 | L | 1.5e-05 | m3 | l | llm (0.6) | pharmaceutics-15-01409-t004:row8:col1, pharmaceutics-15-01409-t004:row8:col2 |
| Tlag (min) | `Q83` · tlag | 3.59 | min | 215.4 | s | min | exact (1) | pharmaceutics-15-01409-t004:row9:col1, pharmaceutics-15-01409-t004:row9:col2 |
| Tk0 (min) | `Q310` · D1 | 11.4 | min | 684 | s | min | llm (0.6) | pharmaceutics-15-01409-t004:row10:col1, pharmaceutics-15-01409-t004:row10:col2 |
| Mtt (min) | `Q81` · MTT | 53.8 | min |  |  | min | exact (1) | pharmaceutics-15-01409-t004:row11:col1, pharmaceutics-15-01409-t004:row11:col2 |
| ktr (1/min) | `Q306` · ktr | 0.205 | 1/min | 0.003417 | 1/s | 1/h | exact (1) | pharmaceutics-15-01409-t004:row12:col1, pharmaceutics-15-01409-t004:row12:col2 |
| Vblood_IN (L) | `Q63` · V1 | 0.024 | L | 2.4e-05 | m3 | l | llm (0.6) | pharmaceutics-15-01409-t004:row13:col1, pharmaceutics-15-01409-t004:row13:col2 |
| ka (1/min) | `Q49` · kabs | 0.127 | 1/min | 0.002117 | 1/s | 1/h | exact (1) | pharmaceutics-15-01409-t004:row17:col1, pharmaceutics-15-01409-t004:row17:col2 |
| Vp (L) | `Q64` · V2 | 562.0 | L | 0.562 | m3 | L | review_gapfill (0.7) | Jung_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'total fit—per os and in raw data' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q48 ('k24 (1/min)', value '0.018') — already have one for this compound
- dropped duplicate Q48 ('k42 (1/min)', value '0.031') — already have one for this compound
- dropped duplicate Q373 ('k30 (1/min)', value '0.276') — already have one for this compound
- dropped duplicate Q61 ('Vbrain_IN (L)', value '0.005') — already have one for this compound
- dropped duplicate Q301 ('P1', value '0.557') — already have one for this compound
- dropped unlinked row (NIL): 'P2' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-01409-t004:row16:col1', 'pharmaceutics-15-01409-t004:row16:col2'])
- dropped duplicate Q301 ('a1', value '0.017') — already have one for this compound
- dropped duplicate Q301 ('a2', value '0.004') — already have one for this compound
- dropped unlinked row (NIL): 'a3' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-01409-t004:row22:col1', 'pharmaceutics-15-01409-t004:row22:col2'])
- dropped duplicate Q49 ('b1', value '0.236') — already have one for this compound
- implicit units: 'k12 (1/min)' → 1/min (from the paper text: "Paper states rate constants in 1/min: 'k30: 0.325 and 0.369 1/min ... k23: 0.014 and 0.008 1/min ... k42: 0.011 and 0.01")
- implicit units: 'k20 (1/min)' → 1/min (from the paper text: 'Same quote: elimination constants k20, k30 given in 1/min (k30: 0.325 and 0.369 1/min).')
- implicit units: 'k23 (1/min)' → 1/min (from the paper text: 'Same quote: transfer rate constants k23, k42 given in 1/min (k23: 0.014 and 0.008 1/min).')
- implicit units: 'ktr (1/min)' → 1/min (from the paper text: "Transit model: Mtt around 55-60 min and ka in min−1 ('0.17 and 0.57 min−1'), so ktr is in 1/min.")
- implicit units: 'ka (1/min)' → 1/min (from the paper text: "Paper states 'ka estimated equal to 0.17 and 0.57 min−1 for mean and raw data models'.")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (Vbrain_PO (L)); Q63 (Vblood_IN (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donepezil
- population split: 'total fit—per os and in raw data' subgroup of Kaikousidis_2023 (paper reports 4 populations: in—mean data, per os blood data, per os—mean data, total fit—per os and in raw data)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q64 (V2) from Jung_2022's review values (primary lacked it)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

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
| `gpt-oss-120b` | partly confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a2]` |  | 0.004 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0]` | 11.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vblood_in]` | 0.024 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 562.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row2:col1', 'pharmaceutics-15-01409-t004:row2:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row12:col1', 'pharmaceutics-15-01409-t004:row12:col2'] |
| C5_dimension_Q310 | pass | [time] |  | ['pharmaceutics-15-01409-t004:row10:col1', 'pharmaceutics-15-01409-t004:row10:col2'] |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row3:col1', 'pharmaceutics-15-01409-t004:row3:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row4:col1', 'pharmaceutics-15-01409-t004:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-15-01409-t004:row17:col1', 'pharmaceutics-15-01409-t004:row17:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-15-01409-t004:row8:col1', 'pharmaceutics-15-01409-t004:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-15-01409-t004:row13:col1', 'pharmaceutics-15-01409-t004:row13:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Jung_2022:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-15-01409-t004:row9:col1', 'pharmaceutics-15-01409-t004:row9:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.015 L | ['pharmaceutics-15-01409-t004:row8:col1', 'pharmaceutics-15-01409-t004:row8:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.024 L | ['pharmaceutics-15-01409-t004:row13:col1', 'pharmaceutics-15-01409-t004:row13:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 562 L | ['Jung_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data%0APaper%3A%20Kaikousidis_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_donepezil/Donepezil_Kaikousidis2023_total_fit_per_os_and_in_raw_data%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 01:30 UTC</sub>
