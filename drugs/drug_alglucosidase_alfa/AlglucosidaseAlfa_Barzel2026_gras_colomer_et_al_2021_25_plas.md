<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;alglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Barzel_2026 \u00b7 gras_colomer_et_al_2021_25_plasma_leukocyte&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlglucosidaseAlfa_Tiraboschi2023_reference&quot;,&quot;label&quot;:&quot;Tiraboschi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Tiraboschi2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alglucosidase alfa — `AlglucosidaseAlfa_Barzel2026_gras_colomer_et_al_2021_25_plas`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:35 UTC (Rejected), but the paper was screened again on 2026-10-05 10:36 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Rejected because the alglucosidase alfa record has a dimension mismatch on a structural parameter: the intercompartmental clearance Q is given as 0.0206 L/h, numerically identical to the rate constant k21 (0.0206 d−1), and CL carries no value.

<div class="pk-model-meta" hidden drug="alglucosidase alfa" model-id="AlglucosidaseAlfa_Barzel2026_gras_colomer_et_al_2021_25_plas" status="rejected" stale="true" population="patients with lysosomal storage diseases" measured-compound="alglucosidase_alfa" parameterization="mechanistic" topology="2C"></div>

## Citation
Barzel I, van der Ploeg AT, Pijnappel WWMP, van der Kuy PHM, van den Hout JMP, Preijers T. Population Pharmacokinetic/Pharmacodynamic Modeling of Therapeutic Enzymes in Lysosomal Storage Diseases. Clinical pharmacokinetics 65(5):647-664 (2026).
  ·  DOI: [10.1007/s40262-026-01636-2](https://doi.org/10.1007/s40262-026-01636-2)

## Population and dosing

**Population:** patients with lysosomal storage diseases · condition lysosomal storage diseases · age group mixed.

**Dosing:** 770, 4753, 16380, 358400 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc/V1 (L) | V1 | 3.35 | L |
| Q/Q2 (L/h) | Q2 | 0.254 | L/h |
| Vp/V2 (L) | V2 | 296 | L |
| k21 (d−1) | k21 | 0.0206 | d−1 |
| Vm (mg/h) | Vmax | 9.82 | mg/h |
| Km (µg/mL) | Km | 0.451 | µg/mL |
| Q3 (L/h) | Q3 | 1.87 | L/h |
| V3 (L) | V3 | 1.31 | L |
| Qpc (L/h) | Q | 0.0206 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the alglucosidase alfa record has a dimension mismatch on a structural parameter: the intercompartmental clearance Q is given as 0.0206 L/h, numerically identical to the rate constant k21 (0.0206 d−1), and CL carries no value.**

In the two-compartment structure, Q (0.0206 L/h) equals k21 (0.0206 d−1) in value but not in dimension, and the unit d−1 could not be converted to SI, so the parameter arrived without an SI value. The total clearance CL is listed without any value. A second reader also disputed the dose compound and primary analyte assignments and read the intercompartmental clearance between central and first peripheral compartment as having no value. Extracted — alglucosidase alfa: V1 3.35 L, Q2 0.254 L/h, V2 296 L, k21 0.0206 d−1, Vmax 9.82 mg/h, Km 0.451 µg/mL, Q3 1.87 L/h, V3 1.31 L, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alglucosidase_alfa, the second reading alglucosidase alfa; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/V1 (L) | `Q63` · V1 | 3.35 | L | 0.00335 | m3 | l | llm (0.6) | Barzel_2026_table_3:row1:col4 |
| Q/Q2 (L/h) | `Q99` · Q2 | 0.254 | L/h | 7.056e-08 | m3/s | l/h | llm (0.6) | Barzel_2026_table_3:row2:col4 |
| Vp/V2 (L) | `Q64` · V2 | 296 | L | 0.296 | m3 | l | llm (0.6) | Barzel_2026_table_3:row3:col4 |
| k21 (d−1) | `Q302` · k21 | 0.0206 | d−1 | 2.384e-07 | 1/s | 1/d | exact (1) | Barzel_2026_table_3:row8:col4 |
| Vm (mg/h) | `Q66` · Vmax | 9.82 | mg/h |  |  | mg/h | special_case (0.95) | Barzel_2026_table_3:row9:col4 |
| Km (µg/mL) | `Q1` · Km | 0.451 | µg/mL |  |  | µg/ml | exact (1) | Barzel_2026_table_3:row10:col4 |
| Q3 (L/h) | `Q308` · Q3 | 1.87 | L/h | 5.194e-07 | m3/s | l/h | exact (1) | Barzel_2026_table_3:row11:col4 |
| V3 (L) | `Q77` · V3 | 1.31 | L | 0.00131 | m3 | l | exact (1) | Barzel_2026_table_3:row12:col4 |
| Qpc (L/h) | `Q30` · Q | 0.0206 | L/h | 5.722e-09 | m3/s | l/h | llm (0.6) | Barzel_2026_table_3:row13:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vm (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Inter-individual variability (CV%)' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row23:col4'])
- dropped duplicate Q63 ('VcV1', value '12.7') — already have one for this compound
- dropped duplicate Q66 ('Vm', value '36.6') — already have one for this compound
- dropped duplicate Q1 ('Km', value '43.1') — already have one for this compound
- dropped unlinked row (NIL): 'Qpc' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row34:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alglucosidase_alfa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- bound model equation to Q22 (CL): CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- status held at "Needs review" — not promoted
- population split: 'gras-colomer et al., 2021 [25]plasma/leukocyteθ' subgroup of Barzel_2026 (paper reports 5 populations: gras-colomer et al., 2021 [25]plasma/leukocyteθ, qi et al., 2018 [23]plasma, tiraboschi et al., 2023 [22]plasma, troy et al., 2020 [26]serum/csf*, tuffal et al., 2023 [21]plasma)
- molar mass: none found for 'alglucosidase_alfa' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row2:col4 = '2-compartment'
- unparsed cell Tab2:row2:col8 = 'TBW on CL and Q (0.587, [0.444; 0.730]), Vc and Vp (0.483, [0315; 0.651])'
- unparsed cell Tab2:row5:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row5:col4 = '3-compartment'
- unparsed cell Tab2:row6:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row6:col4 = '3-compartment'
- unparsed cell Tab2:row6:col7 = 'Forward inclusion (alpha risk: 5%) and backward elimination (alpha risk: 0.1%)'
- unparsed cell Tab2:row6:col8 = 'Time-varying TBW on CL (0.896, [0.754; 1.04]), V1 (0.661, [0.578; 0.7444]) and Vm (0.463, [0.352;0.574])'
- unparsed cell Tab2:row7:col3 = 'NONMEM v7.3'
- unparsed cell Tab2:row7:col4 = 'CNS: 2-compartmentSerum: 1-compartment'
- unparsed cell Barzel_2026_table_3:row0:col4 = '3.85 × 10−2'
- unparsed cell Barzel_2026_table_3:row1:col3 = '1.10 × 10−2'
- unparsed cell Barzel_2026_table_3:row41:col3 = 'Plasma: 29Leukocyte: 11'
- unparsed cell Barzel_2026_table_3:row41:col6 = 'CSF: 98.1Serum: 67.5'
- companion parameter table 3 transcribed (62 record(s))
- LLM selected parameter table(s) 3
- captured model equation CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.588 (10/17 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/q2].parameter_id` | Q99 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[qpc]` |  | 0.0206 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qpc].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[qpc].value` | 0.0206 |  | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | alglucosidase_alfa | alglucosidase alfa | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alglucosidase_alfa | alglucosidase alfa | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Barzel_2026_table_3:row10:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Barzel_2026_table_3:row13:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Barzel_2026_table_3:row8:col4'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Barzel_2026_table_3:row11:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Barzel_2026_table_3:row1:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Barzel_2026_table_3:row3:col4'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | ['Barzel_2026_table_3:row9:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Barzel_2026_table_3:row12:col4'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Barzel_2026_table_3:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.35 L | ['Barzel_2026_table_3:row1:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 296 L | ['Barzel_2026_table_3:row3:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balglucosidase_alfa%5D%20AlglucosidaseAlfa_Barzel2026_gras_colomer_et_al_2021_25_plas&body=Drug%3A%20alglucosidase_alfa%0ARecord%3A%20AlglucosidaseAlfa_Barzel2026_gras_colomer_et_al_2021_25_plas%0APaper%3A%20Barzel_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Barzel2026_gras_colomer_et_al_2021_25_plas%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 10:36 UTC</sub>
