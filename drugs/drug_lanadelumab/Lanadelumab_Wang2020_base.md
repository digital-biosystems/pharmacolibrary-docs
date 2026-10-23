<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;lanadelumab&quot;,&quot;href&quot;:&quot;drugs/drug_lanadelumab/&quot;},{&quot;label&quot;:&quot;Wang_2020 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lanadelumab — `Lanadelumab_Wang2020_base`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-06 01:16 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="lanadelumab" model-id="Lanadelumab_Wang2020_base" status="needs_review" stale="true" population="healthy subjects and patients with hereditary angioedema" measured-compound="lanadelumab" parameterization="apparent" topology="1C"></div>

## Citation
Wang Y, Marier JF, Kassir N, Chang C, Martin P. Pharmacokinetics, Pharmacodynamics, and Exposure-Response of Lanadelumab for Hereditary Angioedema. Clinical and translational science 13(6):1208–1216 (2020).
  ·  DOI: [10.1111/cts.12806](https://doi.org/10.1111/cts.12806)

## Population and dosing

**Population:** healthy subjects and patients with hereditary angioedema · condition hereditary angioedema · age group mixed.

**Dosing:** 150, 300, 400 mg, sc, multiple, every 168 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/hour) | CL/F | 0.0337 | L/hour | 24.3 |
| AUCtau,ss (µg × day/mL) | AUCSS | 408 | µg × day/mL | 24.3 |
| Cave,ss (µg/mL) | Cavg | 29.2 | µg/mL | 24.3 |
| Cmax,ss (µg/mL) | Cmax | 35.5 | µg/mL | 33.2 |
| Cmin,ss (µg/mL) | Cmin | 24.6 | µg/mL | 33.3 |
| Tmax (hour) | tmax | 98.6 | hour | 21.1 |
| t 1/2 (hour) | t1/2z | 361 | hour | 13.5 |
| Ka (1/h) | kabs | 0.0179 | 1/h |  |
| V/F/BW(L) | Vnorm/F | 0.182 | L | 20.2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (AUCSS, Cavg, Cmax and Cmin), so that value has no SI equivalent. Extracted — lanadelumab: CL/F 0.0337 L/hour, AUCSS 408 µg × day/mL, Cavg 29.2 µg/mL, Cmax 35.5 µg/mL, Cmin 24.6 µg/mL, tmax 98.6 hour, t1/2z 361 hour, kabs 0.0179, … (+1).

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/hour) | `Q27` · CL/F | 0.0337 | L/hour | 9.361e-09 | m3/s | l/h | 24.3 | exact (1) | cts12806-tbl-0001:row0:col4, cts12806-tbl-0001:row0:col8, cts12806-tbl-0001:row0:col12 |
| AUCtau,ss (µg × day/mL) | `Q18` · AUCSS | 408 | µg × day/mL |  |  | (d·µg)/ml | 24.3 | llm (0.6) | cts12806-tbl-0001:row2:col4, cts12806-tbl-0001:row2:col8, cts12806-tbl-0001:row2:col12 |
| Cave,ss (µg/mL) | `Q71` · Cavg | 29.2 | µg/mL |  |  | µg/ml | 24.3 | llm_confirmed (0.6) | cts12806-tbl-0001:row3:col4, cts12806-tbl-0001:row3:col8, cts12806-tbl-0001:row3:col12 |
| Cmax,ss (µg/mL) | `Q32` · Cmax | 35.5 | µg/mL |  |  | µg/ml | 33.2 | llm_confirmed (0.6) | cts12806-tbl-0001:row4:col4, cts12806-tbl-0001:row4:col8, cts12806-tbl-0001:row4:col12, Wang_2020_table_S14:row8:col2, Wang_2020_table_S14:row8:col3, Wang_2020_table_S14:row8:col4, Wang_2020_table_S14:row8:col5, Wang_2020_table_S14:row8:col6, Wang_2020_table_S14:row8:col7, Wang_2020_table_S14:row8:col8, Wang_2020_table_S14:row8:col9, Wang_2020_table_S14:row8:col10, Wang_2020_table_S14:row8:col11 |
| Cmin,ss (µg/mL) | `Q36` · Cmin | 24.6 | µg/mL |  |  | µg/ml | 33.3 | llm_confirmed (0.6) | cts12806-tbl-0001:row5:col4, cts12806-tbl-0001:row5:col8, cts12806-tbl-0001:row5:col12, Wang_2020_table_S14:row9:col2, Wang_2020_table_S14:row9:col3, Wang_2020_table_S14:row9:col4, Wang_2020_table_S14:row9:col5, Wang_2020_table_S14:row9:col6, Wang_2020_table_S14:row9:col7, Wang_2020_table_S14:row9:col8, Wang_2020_table_S14:row9:col9, Wang_2020_table_S14:row9:col10, Wang_2020_table_S14:row9:col11 |
| Tmax (hour) | `Q56` · tmax | 98.6 | hour | 3.55e+05 | s | h | 21.1 | exact (1) | cts12806-tbl-0001:row6:col4, cts12806-tbl-0001:row6:col8, cts12806-tbl-0001:row6:col12 |
| t 1/2 (hour) | `Q57` · t1/2z | 361 | hour | 1.3e+06 | s | h | 13.5 | space_fold (0.95) | cts12806-tbl-0001:row7:col1, cts12806-tbl-0001:row7:col4, cts12806-tbl-0001:row7:col8, cts12806-tbl-0001:row7:col12 |
| Ka (1/h) | `Q49` · kabs | 0.0179 | 1/h | 4.972e-06 | 1/s | 1/h |  | exact (1) | Wang_2020_table_S7:row0:col1 |
| V/F/BW(L) | `Q353` · Vnorm/F | 0.182 | L | 0.000182 | m3 | l | 20.2 | llm (0.6) | Wang_2020_table_S14:row3:col2, Wang_2020_table_S14:row3:col3, Wang_2020_table_S14:row3:col4, Wang_2020_table_S14:row3:col5, Wang_2020_table_S14:row3:col6, Wang_2020_table_S14:row3:col7, Wang_2020_table_S14:row3:col8, Wang_2020_table_S14:row3:col9, Wang_2020_table_S14:row3:col10, Wang_2020_table_S14:row3:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V/F (L) | Q76 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Additive Error (µg/mL)' routed out of structural estimates ('IIV V/F, ω2 (shrinkage %)')
- table section iiv: 'Proportional Error (%)' routed out of structural estimates ('IIV V/F, ω2 (shrinkage %)')
- unit_dimension_unknown: 'µg × day/mL' (AUCSS)
- dropped duplicate Q27 ('CL/F (L/h)', value None) — already have one for this compound
- dropped duplicate Q27 ('CL/F(L/h)', value '0.0278') — already have one for this compound
- dropped duplicate Q76 ('V/F(L)', value '14.4') — already have one for this compound
- dropped duplicate Q27 ('CL/F/BW(L/h/kg)', value '0.000353') — already have one for this compound
- dropped duplicate Q49 ('Ka(h-1)', value '0.0178') — already have one for this compound
- dropped duplicate Q18 ('AUCtau,ss (µg·h/mL)', value '10800') — already have one for this compound
- dropped duplicate Q18 ('AUCtau,ss (µg·day/mL)', value '452') — already have one for this compound
- dropped duplicate Q71 ('Cav,ss(µg/mL)', value '32.2') — already have one for this compound
- dropped duplicate Q57 ('t1/2(h)', value '345') — already have one for this compound
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'Ka is a first-order absorption rate constant. The paper states the absorption half-life is 37 hours, and the value 0.017')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lanadelumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'base' is the base model of Wang_2020 (paper reports 2 stages: base, final); same population, different model-building step
- molar mass: none found for 'lanadelumab' — its concentrations stay mass-only

**Extraction notes:**
- transposed table cts12806-tbl-0001: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell cts12806-tbl-0001:row0:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row0:col5 = '0.0278 (0.0173–0.0458)'
- unparsed cell cts12806-tbl-0001:row0:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row0:col9 = '0.0292 (0.0168–0.0583)'
- unparsed cell cts12806-tbl-0001:row0:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row0:col13 = '0.0295 (0.0188–0.0822)'
- unparsed cell cts12806-tbl-0001:row1:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row1:col5 = '14.8 (9.03–19.3)'
- unparsed cell cts12806-tbl-0001:row1:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row1:col9 = '14.9 (8.39–27.7)'
- unparsed cell cts12806-tbl-0001:row1:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row1:col13 = '15.2 (10.2–31.3)'
- unparsed cell cts12806-tbl-0001:row2:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row2:col5 = '218 (132–346)'
- unparsed cell cts12806-tbl-0001:row2:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row2:col9 = '425 (217–740)'
- unparsed cell cts12806-tbl-0001:row2:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row2:col13 = '422 (140–625)'
- unparsed cell cts12806-tbl-0001:row3:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row3:col5 = '7.77 (4.73–12.3)'
- unparsed cell cts12806-tbl-0001:row3:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row3:col9 = '15.2 (7.74–26.4)'
- unparsed cell cts12806-tbl-0001:row3:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row3:col13 = '30.1 (10.0–44.6)'
- unparsed cell cts12806-tbl-0001:row4:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row4:col5 = '11.4 (7.22–17.6)'
- unparsed cell cts12806-tbl-0001:row4:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row4:col9 = '22.3 (11.1–40.4)'
- unparsed cell cts12806-tbl-0001:row4:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row4:col13 = '35.5 (12.1–53.7)'
- unparsed cell cts12806-tbl-0001:row5:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row5:col5 = '4.47 (2.42–7.75)'
- unparsed cell cts12806-tbl-0001:row5:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row5:col9 = '8.66 (2.97–14.7)'
- unparsed cell cts12806-tbl-0001:row5:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row5:col13 = '24.0 (8.56–42.4)'
- unparsed cell cts12806-tbl-0001:row6:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row6:col5 = '120 (96.0–217)'
- unparsed cell cts12806-tbl-0001:row6:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row6:col9 = '121 (73.0–191)'
- unparsed cell cts12806-tbl-0001:row6:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row6:col13 = '97.4 (74.3–121)'
- unparsed cell cts12806-tbl-0001:row7:col2 = '150 mg Q4W'
- unparsed cell cts12806-tbl-0001:row7:col5 = '351 (291–443)'
- unparsed cell cts12806-tbl-0001:row7:col6 = '300 mg Q4W'
- unparsed cell cts12806-tbl-0001:row7:col9 = '340 (234–416)'
- unparsed cell cts12806-tbl-0001:row7:col10 = '300 mg Q2W'
- unparsed cell cts12806-tbl-0001:row7:col13 = '352 (258–507)'
- companion parameter table S7 transcribed (5 record(s), model stage 'base')
- unparsed cell Wang_2020_table_S13:row1:col3 = '45.1%'
- unparsed cell Wang_2020_table_S13:row2:col3 = '9.5%'
- unparsed cell Wang_2020_table_S13:row5:col3 = '23.6%'
- companion parameter table S13 transcribed (35 record(s), model stage 'final')
- transposed table Wang_2020_table_S14: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table S14 transcribed (121 record(s))
- LLM selected parameter table(s) 1, S7, S13, S14

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts12806-tbl-0001:row0:col4', 'cts12806-tbl-0001:row0:col8', 'cts12806-tbl-0001:row0:col12'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['cts12806-tbl-0001:row4:col4', 'cts12806-tbl-0001:row4:col8', 'cts12806-tbl-0001:row4:col12', 'Wang_2020_table_S14:row8:col2', 'Wang_2020_table_S14:row8:col3', 'Wang_2020_table_S14:row8:col4', 'Wang_2020_table_S14:row8:col5', 'Wang_2020_table_S14:row8:col6', 'Wang_2020_table_S14:row8:col7', 'Wang_2020_table_S14:row8:col8', 'Wang_2020_table_S14:row8:col9', 'Wang_2020_table_S14:row8:col10', 'Wang_2020_table_S14:row8:col11'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['Wang_2020_table_S14:row3:col2', 'Wang_2020_table_S14:row3:col3', 'Wang_2020_table_S14:row3:col4', 'Wang_2020_table_S14:row3:col5', 'Wang_2020_table_S14:row3:col6', 'Wang_2020_table_S14:row3:col7', 'Wang_2020_table_S14:row3:col8', 'Wang_2020_table_S14:row3:col9', 'Wang_2020_table_S14:row3:col10', 'Wang_2020_table_S14:row3:col11'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['cts12806-tbl-0001:row5:col4', 'cts12806-tbl-0001:row5:col8', 'cts12806-tbl-0001:row5:col12', 'Wang_2020_table_S14:row9:col2', 'Wang_2020_table_S14:row9:col3', 'Wang_2020_table_S14:row9:col4', 'Wang_2020_table_S14:row9:col5', 'Wang_2020_table_S14:row9:col6', 'Wang_2020_table_S14:row9:col7', 'Wang_2020_table_S14:row9:col8', 'Wang_2020_table_S14:row9:col9', 'Wang_2020_table_S14:row9:col10', 'Wang_2020_table_S14:row9:col11'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Wang_2020_table_S7:row0:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['cts12806-tbl-0001:row6:col4', 'cts12806-tbl-0001:row6:col8', 'cts12806-tbl-0001:row6:col12'] |
| C5_dimension_Q57 | pass | [time] |  | ['cts12806-tbl-0001:row7:col1', 'cts12806-tbl-0001:row7:col4', 'cts12806-tbl-0001:row7:col8', 'cts12806-tbl-0001:row7:col12'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['cts12806-tbl-0001:row3:col4', 'cts12806-tbl-0001:row3:col8', 'cts12806-tbl-0001:row3:col12'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['cts12806-tbl-0001:row1:col4', 'cts12806-tbl-0001:row1:col8', 'cts12806-tbl-0001:row1:col12', 'Wang_2020_table_S7:row2:col1'] |
| C5_unit_missing_Q18 | fail | [mass] * [time] / [length] ** 3 | µg × day/mL | ['cts12806-tbl-0001:row2:col4', 'cts12806-tbl-0001:row2:col8', 'cts12806-tbl-0001:row2:col12'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0337 L/h | ['cts12806-tbl-0001:row0:col4', 'cts12806-tbl-0001:row0:col8', 'cts12806-tbl-0001:row0:col12'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blanadelumab%5D%20Lanadelumab_Wang2020_base&body=Drug%3A%20lanadelumab%0ARecord%3A%20Lanadelumab_Wang2020_base%0APaper%3A%20Wang_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lanadelumab/Lanadelumab_Wang2020_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 01:16 UTC</sub>
