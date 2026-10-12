<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;levamisole&quot;,&quot;href&quot;:&quot;drugs/drug_levamisole/&quot;},{&quot;label&quot;:&quot;Cheng_2026 \u00b7 sheep_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levamisole_KreeftmeijerVegter2015_reference&quot;,&quot;label&quot;:&quot;Kreeftmeijer-Vegter_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamisole/Levamisole_KreeftmeijerVegter2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levamisole — `Levamisole_Cheng2026_sheep_2`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.70).

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — levamisole: CLnorm 1.16 L/h/kg, CL 1.13 L/h/kg, CLb 1 L/h/kg, Q 0.994 L/h/kg, kabs 0.8 h À1.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Cheng C et al., Meta-analysis of levamisole absorption…, Journal of pharmaceutical i… (2026)
  ·  DOI: [10.1007/s40005-025-00770-6](https://doi.org/10.1007/s40005-025-00770-6)

## Model component
<dbs-pgx drug="levamisole" model-id="Levamisole_Cheng2026_sheep_2" status="needs_review" stale="false" population="multiple animal species (2 bird and 6 mammalian species) with joint interspecies PK modeling" measured-compound="levamisole" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Reported CL | `Q354` · CLnorm | 1.16 | L/h/kg | 2.2555555555555556e-05 | L/h | not captured | llm_corrected (0.6) | Cheng_2026_table_1:row0:col6 | — | not captured |
| NCAa CL | `Q22` · CL | 1.13 | L/h/kg | 2.197222222222222e-05 | L/h | not captured | llm_confirmed (0.6) | Cheng_2026_table_1:row1:col6 | — | not captured |
| mPBPK individual CLb | `Q23` · CLb | 1.00 | L/h/kg | 1.9444444444444442e-05 | L/h | not captured | llm_confirmed (0.6) | Cheng_2026_table_1:row5:col6 | — | not captured |
| Joint mPBPK CLd | `Q30` · Q | 0.994 | L/h/kg | 1.932777777777778e-05 | L/h | not captured | llm_confirmed (0.6) | Cheng_2026_table_1:row7:col6 | — | not captured |
| K a | `Q49` · kabs | 0.8 | h À1 | 0.00022222222222222223 | 1/h | not captured | review_gapfill (0.7) | Veltkamp_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('2CMb CL', value '1.12') — already have one for this compound
- dropped duplicate Q22 ('2CMc CL', value '1.09') — already have one for this compound
- dropped duplicate Q22 ('Joint2CMd CL', value '0.99') — already have one for this compound
- dropped duplicate Q22 ('mPBPK individual CLc', value '0.98') — already have one for this compound
- implicit units: 'Reported CL' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'")
- implicit units: 'NCAa CL' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'; NCA CL values lis")
- implicit units: 'mPBPK individual CLb' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'; mPBPK individual ")
- implicit units: 'Joint mPBPK CLd' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'; Q is an intercomp")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=levamisole
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'sheep(26)' subgroup of Cheng_2026 (paper reports 15 populations: chicken, chicken(4.5), dog, dog(20.7), duck, duck(2.5), goat, goat(18), human(70), pig, pig(39.2), rabbit, rabbit(3), sheep, sheep(26))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Veltkamp_2024's review values (primary lacked it)

**Extraction notes:**
- transposed table Cheng_2026_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (62 record(s))
- companion parameter table 2 transcribed (0 record(s))
- companion parameter table S9 transcribed (32 record(s))
- LLM selected parameter table(s) 1, 2, 3, S9

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Cheng_2026_table_1:row1:col6'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Cheng_2026_table_1:row5:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Cheng_2026_table_1:row7:col6'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Cheng_2026_table_1:row0:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Veltkamp_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.0 | not captured | not captured | ['Cheng_2026_table_1:row5:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 79.1 L/h | not captured | not captured | ['Cheng_2026_table_1:row1:col6'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 70 L/h | not captured | not captured | ['Cheng_2026_table_1:row5:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_levamisole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cheng_2026` / `Cheng_2026::sheep_2`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:28 UTC</sub>
