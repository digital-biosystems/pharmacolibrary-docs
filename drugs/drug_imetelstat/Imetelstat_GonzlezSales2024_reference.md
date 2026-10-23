<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;imetelstat&quot;,&quot;href&quot;:&quot;drugs/drug_imetelstat/&quot;},{&quot;label&quot;:&quot;Gonz\u00e1lez-Sales_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# imetelstat — `Imetelstat_GonzlezSales2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The effect of MM malignancy on central volume, -0.233, is misclassified as a maximum metabolic rate (Vmax), causing an implausible negative clearance/volume.

<div class="pk-model-meta" hidden drug="imetelstat" model-id="Imetelstat_GonzlezSales2024_reference" status="rejected" stale="false" population="adults with solid tumors or hematologic malignancies" measured-compound="imetelstat" parameterization="mechanistic" topology="1C"></div>

## Citation
González-Sales M, Lennox AL, Huang F, Pamulapati C, Wan Y, Sun L et al. Population pharmacokinetics of imetelstat, a first-in-class oligonucleotide telomerase inhibitor. CPT: pharmacometrics & systems pharmacology 13(7):1264–1277 (2024).
  ·  DOI: [10.1002/psp4.13160](https://doi.org/10.1002/psp4.13160)

## Population and dosing

**Population:** adults with solid tumors or hematologic malignancies · condition cancer · age group adult.

**Dosing:** 28, 819 mg, intravenous, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL, clearance from central compartment | CL | 1.00 | L/h | 3.50 | 43.7 (4.36% RSE) |
| V c, central volume of distribution | V | 4.08 | L | 2.55 |  |
| K back, transfer rate from peripheral to central compartment | k21 | 0.0253 | 1/h | 7.58 |  |
| B max, total concentration of target | Bmax | 15.0 |  | 7.08 |  |
| K int, internalization rate constant | kint | 0.103 | 1/h | 9.08 |  |
| K on, binding rate constant | kon | 0.159 |  | 8.52 |  |
| K off, dissociation rate constant | koff | 0.609 | 1/h | 10.7 |  |
| Effect of MM malignancy on V c | Vmax | -0.233 |  | 28.3 |  |
| effect_of_sex_on_cl | effect_of_sex_on_cl | -0.299 |  | 17.1 |  |
| theta_q61_sex | theta_q61_sex | -0.122 |  | 27.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.76). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The effect of MM malignancy on central volume, -0.233, is misclassified as a maximum metabolic rate (Vmax), causing an implausible negative clearance/volume.**

The parameter labeled 'Effect of MM malignancy on V c' holds the value -0.233 but is defined as 'Maximum rate of metabolism by an enzymatically mediated reaction.' The review rejected the model because this negative value triggered a check for negative clearance or volume in a covariate scenario. The record indicates a mismatch between the pharmacokinetic definition of maximum metabolism and the actual covariate effect on volume. Extracted — imetelstat: CL 1 L/h, V 4.08 L, k21 0.0253 1/h, Bmax 15, kint 0.103 1/h, kon 0.159, koff 0.609 1/h, Vmax -0.233.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of effect of mm malignancy on v c: this record has -0.233, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, clearance from central compartment | `Q22` · CL | 1.00 | L/h | 2.778e-07 | m3/s | L/h | 3.50 | llm_confirmed (0.6) | psp413160-tbl-0002:row1:col1, psp413160-tbl-0002:row1:col2, psp413160-tbl-0002:row1:col3 | 43.7 (4.36% RSE) |
| V c, central volume of distribution | `Q61` · V | 4.08 | L | 0.00408 | m3 | L | 2.55 | boundary_compartment (0.9) | psp413160-tbl-0002:row2:col1, psp413160-tbl-0002:row2:col2, psp413160-tbl-0002:row2:col3 |  |
| K back, transfer rate from peripheral to central compartment | `Q302` · k21 | 0.0253 | 1/h | 7.028e-06 | 1/s | 1/h | 7.58 | llm (0.6) | psp413160-tbl-0002:row3:col1, psp413160-tbl-0002:row3:col2, psp413160-tbl-0002:row3:col3 |  |
| B max, total concentration of target | `Q332` · Bmax | 15.0 |  |  |  |  | 7.08 | llm (0.6) | psp413160-tbl-0002:row4:col2, psp413160-tbl-0002:row4:col3 |  |
| K int, internalization rate constant | `Q334` · kint | 0.103 | 1/h | 2.861e-05 | 1/s | 1/h | 9.08 | llm (0.6) | psp413160-tbl-0002:row5:col1, psp413160-tbl-0002:row5:col2, psp413160-tbl-0002:row5:col3 |  |
| K on, binding rate constant | `Q329` · kon | 0.159 |  |  |  |  | 8.52 | llm (0.6) | psp413160-tbl-0002:row6:col1, psp413160-tbl-0002:row6:col2, psp413160-tbl-0002:row6:col3 |  |
| K off, dissociation rate constant | `Q330` · koff | 0.609 | 1/h | 0.0001692 | 1/s | 1/h | 10.7 | llm_confirmed (0.6) | psp413160-tbl-0002:row7:col2, psp413160-tbl-0002:row7:col3 |  |
| Effect of MM malignancy on V c | `Q66` · Vmax | -0.233 |  |  |  |  | 28.3 | llm (0.6) | psp413160-tbl-0002:row10:col2, psp413160-tbl-0002:row10:col3 |  |
| effect_of_sex_on_cl | `Q900` · effect_of_sex_on_cl | -0.299 |  |  |  |  | 17.1 |  | psp413160-tbl-0002:row13:col2, psp413160-tbl-0002:row13:col3 |  |
| theta_q61_sex | `Q900` · theta_q61_sex | -0.122 |  |  |  |  | 27.3 |  | psp413160-tbl-0002:row15:col2, psp413160-tbl-0002:row15:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q332 ('Effect of spleen volume on B max', value '0.772') — already have one for this compound
- dropped duplicate Q332 ('Effect of MF malignancy on B max', value '1.44') — already have one for this compound
- dropped duplicate Q22 ('Effect of dose on CL', value '-0.401') — already have one for this compound
- dropped duplicate Q22 ('Effect of MF on CL', value '0.511') — already have one for this compound
- covariate level 'Effect of sex on CL' → Q900:effect_of_sex_on_cl = -0.299 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Effect of time on CL' — extend the ontology if this is a real PK parameter (source ['psp413160-tbl-0002:row14:col2', 'psp413160-tbl-0002:row14:col3'])
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL, clearance from central compartment' → L/h (from the paper text: "The paper states: 'For the typical patient weighing 70 kg, CL... were estimated to be 0.969 L/h'")
- implicit units: 'V c, central volume of distribution' → L (from the paper text: "The paper states: 'For the typical patient weighing 70 kg, ... V c ... were estimated to be ... 3.91 L'")
- implicit units: 'K back, transfer rate from peripheral to central compartment' → 1/h (from the popPK convention: 'First-order rate constants are conventionally expressed in 1/h. The value 0.0253 is consistent with this scale for an in')
- implicit units: 'K int, internalization rate constant' → 1/h (from the popPK convention: 'First-order internalization rate constants are conventionally expressed in 1/h.')
- implicit units: 'K on, binding rate constant' — the LLM proposed 'L/h', whose dimension does not fit Q329; left unset
- implicit units: 'K off, dissociation rate constant' → 1/h (from the popPK convention: 'First-order dissociation rate constants are conventionally expressed in 1/h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=imetelstat
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V c, central volume of distribution' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413160-tbl-0002:row16:col4 = '11.4%'
- unparsed cell psp413160-tbl-0002:row18:col4 = '20.4%'
- unparsed cell psp413160-tbl-0002:row19:col4 = '44.5%'
- unparsed cell psp413160-tbl-0002:row20:col4 = '16.1%'
- unparsed cell psp413160-tbl-0002:row21:col4 = '12.9%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.76 (19/25 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect of mm malignancy on v c]` | -0.233 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_sex_on_cl]` | -0.299 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` |  | -0.299 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_sex]` | -0.122 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` |  | -0.122 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c, central volume of distribution].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 4.9 | 2.828 | 0.5771 | 0.25 | reported t½β |
| C2_base_sign_Q66 | fail |  | -0.233 |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['psp413160-tbl-0002:row1:col1', 'psp413160-tbl-0002:row1:col2', 'psp413160-tbl-0002:row1:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  |  |  | ['psp413160-tbl-0002:row3:col1', 'psp413160-tbl-0002:row3:col2', 'psp413160-tbl-0002:row3:col3'] |
| C5_dimension_Q330 | pass | 1 / [time] |  |  |  | ['psp413160-tbl-0002:row7:col2', 'psp413160-tbl-0002:row7:col3'] |
| C5_dimension_Q334 | pass | 1 / [time] |  |  |  | ['psp413160-tbl-0002:row5:col1', 'psp413160-tbl-0002:row5:col2', 'psp413160-tbl-0002:row5:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['psp413160-tbl-0002:row2:col1', 'psp413160-tbl-0002:row2:col2', 'psp413160-tbl-0002:row2:col3'] |
| C5_unit_missing_Q329 | fail | [length] ** 3 / [mass] / [time] |  |  |  | ['psp413160-tbl-0002:row6:col1', 'psp413160-tbl-0002:row6:col2', 'psp413160-tbl-0002:row6:col3'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 |  |  |  | ['psp413160-tbl-0002:row10:col2', 'psp413160-tbl-0002:row10:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1 |  |  | ['psp413160-tbl-0002:row1:col1', 'psp413160-tbl-0002:row1:col2', 'psp413160-tbl-0002:row1:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1 L/h |  |  | ['psp413160-tbl-0002:row1:col1', 'psp413160-tbl-0002:row1:col2', 'psp413160-tbl-0002:row1:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.08 L |  |  | ['psp413160-tbl-0002:row2:col1', 'psp413160-tbl-0002:row2:col2', 'psp413160-tbl-0002:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bimetelstat%5D%20Imetelstat_GonzlezSales2024_reference&body=Drug%3A%20imetelstat%0ARecord%3A%20Imetelstat_GonzlezSales2024_reference%0APaper%3A%20Gonz%C3%A1lez-Sales_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_imetelstat/Imetelstat_GonzlezSales2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 20:46 UTC</sub>
