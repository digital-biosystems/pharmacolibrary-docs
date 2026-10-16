<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donepezil&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/&quot;},{&quot;label&quot;:&quot;Kaikousidis_2023 \u00b7 in_mean_data&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Rolan2025_reference&quot;,&quot;label&quot;:&quot;Rolan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Rolan2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Khwarg2024_final_model&quot;,&quot;label&quot;:&quot;Khwarg_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Khwarg2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_ir&quot;,&quot;label&quot;:&quot;Lee_2022_ir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_ir.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Lee2022_sr_1&quot;,&quot;label&quot;:&quot;Lee_2022_sr_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Lee2022_sr_1.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# donepezil — `Donepezil_Kaikousidis2023_in_mean_data`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The donepezil mouse model was rejected because its structure leaves a compartment unreachable from the dose and its central volume of distribution, V1 = 0.021 L, is outside the physiological window, indicating a unit or scale extraction error.**

The record lists a two-compartment structure for donepezil but mixes absorption descriptions — a lag time of 4.06 min, a zero-order input duration of 11.3 min, a transit constant ktr of 0.171 1/min with MTT 56 min, and a first-order absorption constant kabs of 0.173 1/min — leaving one compartment without a path from the dose. The central volume V1 of 0.021 L and peripheral volume V2 of 0.005 L fall outside plausible physiological magnitudes for mice, consistent with a unit or scale error. Additionally, a reported unit could not be converted to SI, so that parameter reached the model without an SI value; the elimination constant ki0 (0.046 1/min) is defined as elimination out of a non-central compartment, which is atypical for this structure. Extracted — donepezil: tlag 4.06 min, D1 11.3 min, MTT 56 min, ktr 0.171 1/min, V1 0.021 L, V2 0.005 L, k12 0.543 1/min, kabs 0.173 1/min, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b2: this record has 0.043, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Kaikousidis C et al., Donepezil Brain and Blood Pharmacokinet…, Pharmaceutics (2023)
  ·  DOI: [10.3390/pharmaceutics15051409](https://doi.org/10.3390/pharmaceutics15051409)

<div class="pk-model-meta" hidden drug="donepezil" model-id="Donepezil_Kaikousidis2023_in_mean_data" status="rejected" stale="false" population="mice (brain and blood PK)" measured-compound="donepezil" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag (min) | `Q83` · tlag | 4.06 | min | 243.59999999999997 | [min] | not captured | exact (1.0) | Kaikousidis_2023_table_3:row1:col1, Kaikousidis_2023_table_3:row1:col2, Kaikousidis_2023_table_3:row13:col1, Kaikousidis_2023_table_3:row13:col2 | — | not captured |
| Tk0 (min) | `Q310` · D1 | 11.3 | min | 678.0 | [min] | not captured | llm (0.6) | Kaikousidis_2023_table_3:row2:col1, Kaikousidis_2023_table_3:row2:col2, Kaikousidis_2023_table_3:row14:col1, Kaikousidis_2023_table_3:row14:col2 | — | not captured |
| Mtt (min) | `Q81` · MTT | 56 | min | not captured | [min] | not captured | exact (1.0) | Kaikousidis_2023_table_3:row3:col1, Kaikousidis_2023_table_3:row3:col2, Kaikousidis_2023_table_3:row15:col1, Kaikousidis_2023_table_3:row15:col2 | — | not captured |
| ktr (1/min) | `Q306` · ktr | 0.171 | 1/min | 0.00285 | 1/h | not captured | exact (1.0) | Kaikousidis_2023_table_3:row4:col1, Kaikousidis_2023_table_3:row4:col2, Kaikousidis_2023_table_3:row16:col1, Kaikousidis_2023_table_3:row16:col2 | — | not captured |
| V1 | `Q63` · V1 | 0.021 | L | 2.1000000000000002e-05 | L | not captured | exact (1.0) | Kaikousidis_2023_table_3:row5:col1, Kaikousidis_2023_table_3:row5:col2, Kaikousidis_2023_table_3:row17:col1, Kaikousidis_2023_table_3:row17:col2 | — | not captured |
| V2 | `Q64` · V2 | 0.005 | L | 5e-06 | L | not captured | exact (1.0) | Kaikousidis_2023_table_3:row6:col1, Kaikousidis_2023_table_3:row6:col2, Kaikousidis_2023_table_3:row18:col1, Kaikousidis_2023_table_3:row18:col2 | — | not captured |
| P1 | `Q301` · k12 | 0.543 | 1/min | 0.00905 | 1/h | not captured | llm (0.6) | Kaikousidis_2023_table_3:row7:col1, Kaikousidis_2023_table_3:row7:col2, Kaikousidis_2023_table_3:row19:col1, Kaikousidis_2023_table_3:row19:col2 | — | not captured |
| ka (1/min) | `Q49` · kabs | 0.173 | 1/min | 0.0028833333333333332 | 1/h | not captured | exact (1.0) | Kaikousidis_2023_table_3:row9:col1, Kaikousidis_2023_table_3:row9:col2, Kaikousidis_2023_table_3:row21:col1, Kaikousidis_2023_table_3:row21:col2 | — | not captured |
| k20 (1/min) | `Q373` · ki0 | 0.046 | 1/min | 0.0007666666666666667 | 1/h | not captured | exact (1.0) | Kaikousidis_2023_table_3:row10:col1, Kaikousidis_2023_table_3:row10:col2, Kaikousidis_2023_table_3:row22:col1, Kaikousidis_2023_table_3:row22:col2 | — | not captured |
| b2 | `Q302` · k21 | 0.043 | 1/min | 0.0007166666666666666 | 1/h | not captured | llm (0.6) | Kaikousidis_2023_table_3:row26:col1, Kaikousidis_2023_table_3:row26:col2, Kaikousidis_2023_table_3:row30:col1, Kaikousidis_2023_table_3:row30:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'in—mean data' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'P2' — extend the ontology if this is a real PK parameter (source ['Kaikousidis_2023_table_3:row8:col1', 'Kaikousidis_2023_table_3:row8:col2', 'Kaikousidis_2023_table_3:row20:col1', 'Kaikousidis_2023_table_3:row20:col2'])
- dropped duplicate Q301 ('a1', value '0.016') — already have one for this compound
- implicit units: 'ktr (1/min)' → 1/min (from the paper text: 'Parameter list states ktr (1/min) = 0.171; text also reports ka estimated equal to 0.17 and 0.57 min−1 for the transit a')
- implicit units: 'V1' → L (from the popPK convention: 'No unit stated for V1; volumes of distribution in population PK are conventionally in L, and the small magnitude (0.021)')
- implicit units: 'V2' → L (from the popPK convention: 'No unit stated for V2; peripheral volume of distribution conventionally in L, consistent with the small mouse-scale valu')
- implicit units: 'P1' → 1/min (from the popPK convention: 'P1 is described as k12, a first-order transfer rate constant; first-order rate constants conventionally in 1/h, but this')
- implicit units: 'ka (1/min)' → 1/min (from the paper text: 'Parameter list states ka (1/min) = 0.173; text reports ka of 0.17 and 0.57 min−1.')
- implicit units: 'k20 (1/min)' → 1/min (from the paper text: "Parameter list states k20 (1/min) = 0.046; first-order elimination rate constant in the model's minute time scale.")
- implicit units: 'b2' → 1/min (from the popPK convention: 'b2 is described as k21, a first-order transfer rate constant from peripheral to central compartment; rate constants in t')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V1); Q64 (V2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=donepezil
- population split: 'in—mean data' subgroup of Kaikousidis_2023 (paper reports 4 populations: in—mean data, per os blood data, per os—mean data, total fit—per os and in raw data)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b2]` | 0.043 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k20].value` | 0.046 | 0.021 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.173 | 0.128 | mismatch |
| `gpt-oss-120b` | `parameters[ktr].value` | 0.171 | 0.025 | mismatch |
| `gpt-oss-120b` | `parameters[mtt].value` | 56 | 2.4 | mismatch |
| `gpt-oss-120b` | `parameters[p1]` | 0.543 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0]` | 11.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag].value` | 4.06 | 0.371 | mismatch |
| `gpt-oss-120b` | `parameters[v1].value` | 0.021 | 0.015 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 0.005 | 0.001 | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row7:col1', 'Kaikousidis_2023_table_3:row7:col2', 'Kaikousidis_2023_table_3:row19:col1', 'Kaikousidis_2023_table_3:row19:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row26:col1', 'Kaikousidis_2023_table_3:row26:col2', 'Kaikousidis_2023_table_3:row30:col1', 'Kaikousidis_2023_table_3:row30:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row4:col1', 'Kaikousidis_2023_table_3:row4:col2', 'Kaikousidis_2023_table_3:row16:col1', 'Kaikousidis_2023_table_3:row16:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row2:col1', 'Kaikousidis_2023_table_3:row2:col2', 'Kaikousidis_2023_table_3:row14:col1', 'Kaikousidis_2023_table_3:row14:col2'] |
| C5_dimension_Q373 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row10:col1', 'Kaikousidis_2023_table_3:row10:col2', 'Kaikousidis_2023_table_3:row22:col1', 'Kaikousidis_2023_table_3:row22:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row9:col1', 'Kaikousidis_2023_table_3:row9:col2', 'Kaikousidis_2023_table_3:row21:col1', 'Kaikousidis_2023_table_3:row21:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row5:col1', 'Kaikousidis_2023_table_3:row5:col2', 'Kaikousidis_2023_table_3:row17:col1', 'Kaikousidis_2023_table_3:row17:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row6:col1', 'Kaikousidis_2023_table_3:row6:col2', 'Kaikousidis_2023_table_3:row18:col1', 'Kaikousidis_2023_table_3:row18:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kaikousidis_2023_table_3:row1:col1', 'Kaikousidis_2023_table_3:row1:col2', 'Kaikousidis_2023_table_3:row13:col1', 'Kaikousidis_2023_table_3:row13:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.021 L | not captured | not captured | ['Kaikousidis_2023_table_3:row5:col1', 'Kaikousidis_2023_table_3:row5:col2', 'Kaikousidis_2023_table_3:row17:col1', 'Kaikousidis_2023_table_3:row17:col2'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.005 L | not captured | not captured | ['Kaikousidis_2023_table_3:row6:col1', 'Kaikousidis_2023_table_3:row6:col2', 'Kaikousidis_2023_table_3:row18:col1', 'Kaikousidis_2023_table_3:row18:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_donepezil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kaikousidis_2023` / `Kaikousidis_2023::in_mean_data`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:30 UTC</sub>
