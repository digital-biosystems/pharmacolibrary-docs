<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;levamisole&quot;,&quot;href&quot;:&quot;drugs/drug_levamisole/&quot;},{&quot;label&quot;:&quot;Cheng_2026 \u00b7 human&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levamisole_KreeftmeijerVegter2015_reference&quot;,&quot;label&quot;:&quot;Kreeftmeijer-Vegter_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamisole/Levamisole_KreeftmeijerVegter2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levamisole — `Levamisole_Cheng2026_human`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="levamisole" model-id="Levamisole_Cheng2026_human" status="needs_review" stale="false" population="multiple animal species (2 bird and 6 mammalian species) with joint interspecies PK modeling" measured-compound="levamisole" parameterization="mechanistic" topology="1C"></div>

## Citation
Cheng C, Jeong YS, Jusko WJ. Meta-analysis of levamisole absorption and disposition across diverse species using a minimal physiologically-based pharmacokinetic model. Journal of pharmaceutical investigation 56(1):171–183 (2026).
  ·  DOI: [10.1007/s40005-025-00770-6](https://doi.org/10.1007/s40005-025-00770-6)

## Population and dosing

**Population:** multiple animal species (2 bird and 6 mammalian species) with joint interspecies PK modeling · condition healthy · age group mixed.

**Dosing:** 350, 2100 mg.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.70).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Reported CL | CLnorm | 0.37 | L/h/kg |
| NCAa CL | CL | 0.50 | L/h/kg |
| mPBPK individual CLb | CLb | 0.228 | L/h/kg |
| Joint mPBPK CLd | Q | 0.249 | L/h/kg |
| K a | kabs | 0.8 | h À1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — levamisole: CLnorm 0.37 L/h/kg, CL 0.5 L/h/kg, CLb 0.228 L/h/kg, Q 0.249 L/h/kg, kabs 0.8 h À1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of joint mpbpk cld: this record has 0.249, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Reported CL | `Q354` · CLnorm | 0.37 | L/h/kg | 7.194e-06 | m3/s | L/h | llm_corrected (0.6) | Cheng_2026_table_1:row0:col8 |
| NCAa CL | `Q22` · CL | 0.50 | L/h/kg | 9.722e-06 | m3/s | L/h | llm_confirmed (0.6) | Cheng_2026_table_1:row1:col8 |
| mPBPK individual CLb | `Q23` · CLb | 0.228 | L/h/kg | 4.433e-06 | m3/s | L/h | llm_confirmed (0.6) | Cheng_2026_table_1:row5:col8 |
| Joint mPBPK CLd | `Q30` · Q | 0.249 | L/h/kg | 4.842e-06 | m3/s | L/h | llm_confirmed (0.6) | Cheng_2026_table_1:row7:col8 |
| K a | `Q49` · kabs | 0.8 | h À1 | 0.0002222 | 1/s | 1/h | review_gapfill (0.7) | Veltkamp_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('2CMb CL', value '0.24') — already have one for this compound
- dropped duplicate Q22 ('Joint2CMd CL', value '0.25') — already have one for this compound
- implicit units: 'Reported CL' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'")
- implicit units: 'NCAa CL' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'; NCA CL values lis")
- implicit units: 'mPBPK individual CLb' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'; mPBPK individual ")
- implicit units: 'Joint mPBPK CLd' → L/h/kg (from the paper text: "Table 1 caption: 'Comparison of clearance (, L/h/kg) values for LVM from various sources and methods'; joint mPBPK CL li")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=levamisole
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'human(70)' subgroup of Cheng_2026 (paper reports 15 populations: chicken, chicken(4.5), dog, dog(20.7), duck, duck(2.5), goat, goat(18), human(70), pig, pig(39.2), rabbit, rabbit(3), sheep, sheep(26))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Veltkamp_2024's review values (primary lacked it)

**Extraction notes:**
- transposed table Cheng_2026_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (62 record(s))
- companion parameter table 2 transcribed (0 record(s))
- companion parameter table S9 transcribed (32 record(s))
- LLM selected parameter table(s) 1, 2, 3, S9

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[joint mpbpk cld]` | 0.249 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ncaa cl]` | 0.50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[reported cl].parameter_id` | Q354 | Q22 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Cheng_2026_table_1:row1:col8'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Cheng_2026_table_1:row5:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Cheng_2026_table_1:row7:col8'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Cheng_2026_table_1:row0:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Veltkamp_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.228 | ['Cheng_2026_table_1:row5:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35 L/h | ['Cheng_2026_table_1:row1:col8'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 16 L/h | ['Cheng_2026_table_1:row5:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevamisole%5D%20Levamisole_Cheng2026_human&body=Drug%3A%20levamisole%0ARecord%3A%20Levamisole_Cheng2026_human%0APaper%3A%20Cheng_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levamisole/Levamisole_Cheng2026_human%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:28 UTC</sub>
