<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;atorvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/&quot;},{&quot;label&quot;:&quot;Patel_2019 \u00b7 met_grt&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atorvastatin_Karvaly2021_reference&quot;,&quot;label&quot;:&quot;Karvaly_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Courlet2020_reference&quot;,&quot;label&quot;:&quot;Courlet_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vargo_2014_LDL_C&quot;,&quot;label&quot;:&quot;Vargo_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/pd_Vargo_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atorvastatin — `Atorvastatin_Patel2019_met_grt`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="atorvastatin" model-id="Atorvastatin_Patel2019_met_grt" status="rejected" stale="false" population="Wistar rats" measured-compound="atorvastatin, metformin" parameterization="apparent" topology="3C"></div>

## Citation
Patel O, Muller CJF, Joubert E, Rosenkranz B, Taylor MJC, Louw J et al. Pharmacokinetic Interaction of Green Rooibos Extract With Atorvastatin and Metformin in Rats. Frontiers in pharmacology 10:1243 (2019).
  ·  DOI: [10.3389/fphar.2019.01243](https://doi.org/10.3389/fphar.2019.01243)

## Population and dosing

**Population:** Wistar rats · condition healthy · age group adult.

**Dosing:** 2800, 10500 mg, oral, multiple, every 24 h.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T max (h) | tmax | 1.00 | h |
| T 1/2 (h) | t1/2z | 2.75 | h |
| MRT0-∞ (h) | MRT | 4.29 | h |
| Vz/F (mg/kg)/(L/kg) | V/F | 0.04 | L/kg |
| CL/F (mg/kg)/(L/kg*hr) | CL/F | 0.01 | L/kg*hr |
| V1 (mg/kg)/(μg/mL) | V1 | 0.03 | (mg/kg)/(μg/mL) |
| V2 (mg/kg)/(μg/mL) | V2 | 0.01 | (mg/kg)/(μg/mL) |
| K12 (1/h) | k12 | 0.45 | 1/h |
| K21 (1/h) | k21 | 0.69 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — atorvastatin: tmax 1 h, t1/2z 2.75 h, MRT 4.29 h, V/F 0.04 L/kg, CL/F 0.01 L/kg*hr, V1 0.03 (mg/kg)/(μg/mL), V2 0.01 (mg/kg)/(μg/mL), k12 0.45 1/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atorvastatin, metformin, the second reading atorvastatin; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T max (h) | `Q56` · tmax | 1.00 | h | 3600 | s | h | space_fold (0.95) | T4:row1:col4 |
| T 1/2 (h) | `Q57` · t1/2z | 2.75 | h | 9900 | s | h | half_life_rule (0.95) | T4:row3:col4 |
| MRT0-∞ (h) | `Q53` · MRT | 4.29 | h | 1.544e+04 | s | h | exact (1) | T4:row6:col4 |
| Vz/F (mg/kg)/(L/kg) | `Q76` · V/F | 0.04 | L/kg | 0.0028 | m3 | l/kg | llm_confirmed (0.6) | T4:row7:col4 |
| CL/F (mg/kg)/(L/kg*hr) | `Q27` · CL/F | 0.01 | L/kg*hr | 1.944e-07 | m3/s | l/(h·kg) | llm_confirmed (0.6) | T4:row8:col4 |
| V1 (mg/kg)/(μg/mL) | `Q63` · V1 | 0.03 | (mg/kg)/(μg/mL) | 0.0021 | m3 | (mg·kg)/(µg·ml) | llm_confirmed (0.6) | T4:row9:col4 |
| V2 (mg/kg)/(μg/mL) | `Q64` · V2 | 0.01 | (mg/kg)/(μg/mL) | 0.0007 | m3 | (mg·kg)/(µg·ml) | llm_confirmed (0.6) | T4:row10:col4 |
| K12 (1/h) | `Q301` · k12 | 0.45 | 1/h | 0.000125 | 1/s | 1/h | exact (1) | T4:row11:col4 |
| K21 (1/h) | `Q302` · k21 | 0.69 | 1/h | 0.0001917 | 1/s | 1/h | exact (1) | T4:row12:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- 'V1 (mg/kg)/(μg/mL)': unit 'μg/mL' is part of the label's '(mg/kg)/(μg/mL)' — the label's unit used
- 'V2 (mg/kg)/(μg/mL)': unit 'μg/mL' is part of the label's '(mg/kg)/(μg/mL)' — the label's unit used
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atorvastatin, metformin
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- population split: 'met + grt' subgroup of Patel_2019 (paper reports 4 populations: ator, ator + grt, met, met + grt)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T4: unparsed_numeric_cell
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 176.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` |  | 48.72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (mg/kg)/].value` | 0.01 | 0.25 | mismatch |
| `gpt-oss-120b` | `parameters[k12].value` | 0.45 | 7.06 | mismatch |
| `gpt-oss-120b` | `parameters[k21].value` | 0.69 | 0.38 | mismatch |
| `gpt-oss-120b` | `parameters[mrt0-inf].value` | 4.29 | 5.48 | mismatch |
| `gpt-oss-120b` | `parameters[t 1/2].value` | 2.75 | 3.12 | mismatch |
| `gpt-oss-120b` | `parameters[t max].value` | 1.00 | 0.67 | mismatch |
| `gpt-oss-120b` | `parameters[v1 (mg/kg)/].value` | 0.03 | 0.37 | mismatch |
| `gpt-oss-120b` | `parameters[v2 (mg/kg)/]` | 0.01 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f (mg/kg)/].value` | 0.04 | 1.14 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | atorvastatin, metformin | atorvastatin | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atorvastatin, metformin | atorvastatin | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T4:row8:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['T4:row11:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['T4:row12:col4'] |
| C5_dimension_Q53 | pass | [time] |  | ['T4:row6:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['T4:row1:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['T4:row3:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T4:row9:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T4:row10:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T4:row7:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.7 L/h | ['T4:row8:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.1 L | ['T4:row9:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.7 L | ['T4:row10:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.8 L | ['T4:row7:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batorvastatin%5D%20Atorvastatin_Patel2019_met_grt&body=Drug%3A%20atorvastatin%0ARecord%3A%20Atorvastatin_Patel2019_met_grt%0APaper%3A%20Patel_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atorvastatin/Atorvastatin_Patel2019_met_grt%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 08:57 UTC</sub>
