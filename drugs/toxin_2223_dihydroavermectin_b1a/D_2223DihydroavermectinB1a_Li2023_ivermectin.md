<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;22,23-dihydroavermectin b1a&quot;,&quot;href&quot;:&quot;drugs/toxin_2223_dihydroavermectin_b1a/&quot;},{&quot;label&quot;:&quot;Li_2023 \u00b7 ivermectin&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 22,23-dihydroavermectin b1a — `D_2223DihydroavermectinB1a_Li2023_ivermectin`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="22,23-dihydroavermectin b1a" model-id="D_2223DihydroavermectinB1a_Li2023_ivermectin" status="extracted" stale="false" population="swine (pigs), single subcutaneous dose, n=6 per group" measured-compound="tenvermectin and ivermectin (22,23-dihydroavermectin B1a)" parameterization="apparent" topology="1C"></div>

## Citation
Li G, Cao X, Liao J, Wei Y. Pharmacokinetics of tenvermectin in swine, a novel antiparasitic drug candidate-comparison with ivermectin. Veterinary medicine and science 9(3):1211–1216 (2023).
  ·  DOI: [10.1002/vms3.1085](https://doi.org/10.1002/vms3.1085)

## Population and dosing

**Population:** swine (pigs), single subcutaneous dose, n=6 per group · condition healthy · n = 12.

**Dosing:** 21 mg, sc, single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| λz (1/h) | kel | 0.0048 | 1/h |
| T 1/2λz (h) | t1/2z | 146.59 | h |
| T max (h) | tmax | 57.33 | h |
| C max (ng/ml) | Cmax | 10.14 | ng/ml |
| AUC0‐last (h·ng/ml) | AUClast | 1728.98 | h·ng/ml |
| AUC0‐∞ (h·ng/ml) | AUC∞ | 1997.29 | h·ng/ml |
| Vd/F (ml/kg) | V/F | 31842.55 | ml/kg |
| Cl/F (ml/h/kg) | CL/F | 150.84 | ml/h/kg |
| MRTlast (h) | MRT | 161.37 | h |
| Ka | kabs | 0.7082 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has tenvermectin and ivermectin (22,23-dihydroavermectin B1a), the second reading tenvermectin; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| λz (1/h) | `Q47` · kel | 0.0048 | 1/h | 1.333e-06 | 1/s | 1/h | exact (1) | vms31085-tbl-0001:row1:col2 |
| T 1/2λz (h) | `Q57` · t1/2z | 146.59 | h | 5.277e+05 | s | h | half_life_rule (0.95) | vms31085-tbl-0001:row2:col2 |
| T max (h) | `Q56` · tmax | 57.33 | h | 2.064e+05 | s | h | space_fold (0.95) | vms31085-tbl-0001:row3:col2 |
| C max (ng/ml) | `Q32` · Cmax | 10.14 | ng/ml | 1.014e-05 | kg/m3 | ng/ml | space_fold (0.95) | vms31085-tbl-0001:row4:col2 |
| AUC0‐last (h·ng/ml) | `Q74` · AUClast | 1728.98 | h·ng/ml | 6.224 | kg*s/m3 | (h·ng)/ml | llm (0.6) | vms31085-tbl-0001:row5:col2 |
| AUC0‐∞ (h·ng/ml) | `Q17` · AUC∞ | 1997.29 | h·ng/ml | 7.19 | kg*s/m3 | (h·ng)/ml | llm (0.6) | vms31085-tbl-0001:row6:col2 |
| Vd/F (ml/kg) | `Q76` · V/F | 31842.55 | ml/kg | 2.229 | m3 | ml/kg | exact (1) | vms31085-tbl-0001:row7:col2 |
| Cl/F (ml/h/kg) | `Q27` · CL/F | 150.84 | ml/h/kg | 2.933e-06 | m3/s | ml/(h·kg) | exact (1) | vms31085-tbl-0001:row8:col2 |
| MRTlast (h) | `Q53` · MRT | 161.37 | h | 5.809e+05 | s | h | exact (1) | vms31085-tbl-0001:row9:col2 |
| Ka | `Q49` · kabs | 0.7082 | /h | 0.0001967 | 1/s | 1/h | review_gapfill (0.7) | Fimbo_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'λz'
- dropped value-less row: 'T 1/2λz'
- dropped value-less row: 'T max'
- dropped value-less row: 'C max'
- dropped value-less row: 'AUC0‐last'
- dropped value-less row: 'AUC0‐∞'
- dropped value-less row: 'Vd/F'
- dropped value-less row: 'Cl/F'
- dropped value-less row: 'MRTlast'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tenvermectin and ivermectin (22,23-dihydroavermectin B1a)
- population split: 'ivermectin' subgroup of Li_2023 (paper reports 2 populations: ivermectin, tenvermectin)
- molar mass: none found for 'tenvermectin and ivermectin (22,23-dihydroavermectin B1a)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Fimbo_2023's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.091 (2/22 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc0‐inf]` |  | 1997.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0‐inf]` | 1997.29 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0‐last]` |  | 1728.98 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0‐last]` | 1728.98 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[c max]` |  | 10.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c max]` | 10.14 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` |  | 150.84 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 150.84 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrtlast]` |  | 161.37 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrtlast]` | 161.37 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2λz]` |  | 146.59 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2λz]` | 146.59 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t max]` |  | 57.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t max]` | 57.33 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f]` |  | 31842.55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f]` | 31842.55 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[λz]` |  | 0.0048 | only_one_extracted |
| `gpt-oss:120b` | `parameters[λz]` | 0.0048 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | tenvermectin and ivermectin (22,23-dihydroavermectin B1a) | tenvermectin | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tenvermectin and ivermectin (22,23-dihydroavermectin B1a) | tenvermectin | mismatch |

</details>

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
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['vms31085-tbl-0001:row6:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['vms31085-tbl-0001:row8:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['vms31085-tbl-0001:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['vms31085-tbl-0001:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fimbo_2023:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['vms31085-tbl-0001:row9:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['vms31085-tbl-0001:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['vms31085-tbl-0001:row2:col2'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 |  | ['vms31085-tbl-0001:row5:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['vms31085-tbl-0001:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.6 L/h | ['vms31085-tbl-0001:row8:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.23e+03 L | ['vms31085-tbl-0001:row7:col2'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2223_dihydroavermectin_b1a%5D%20D_2223DihydroavermectinB1a_Li2023_ivermectin&body=Drug%3A%202223_dihydroavermectin_b1a%0ARecord%3A%20D_2223DihydroavermectinB1a_Li2023_ivermectin%0APaper%3A%20Li_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2223_dihydroavermectin_b1a/D_2223DihydroavermectinB1a_Li2023_ivermectin%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:21 UTC</sub>
