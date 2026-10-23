<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;praziquantel&quot;,&quot;href&quot;:&quot;drugs/drug_praziquantel/&quot;},{&quot;label&quot;:&quot;Bustinduy_2020 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Praziquantel_Bustinduy2016_mean&quot;,&quot;label&quot;:&quot;Bustinduy_2016_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_praziquantel/Praziquantel_Bustinduy2016_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Praziquantel_Bustinduy2016_median&quot;,&quot;label&quot;:&quot;Bustinduy_2016_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_praziquantel/Praziquantel_Bustinduy2016_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# praziquantel — `Praziquantel_Bustinduy2020_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The praziquantel two-compartment model was rejected because its structure leaves a compartment unreachable from the dose.

<div class="pk-model-meta" hidden drug="praziquantel" model-id="Praziquantel_Bustinduy2020_mean" status="rejected" stale="false" population="pregnant and lactating Filipino women infected with Schistosoma japonicum" measured-compound="praziquantel" parameterization="apparent" topology="2C"></div>

## Citation
Bustinduy AL, Kolamunnage-Dona R, Mirochnick MH, Capparelli EV, Tallo V, Acosta LP et al. Population Pharmacokinetics of Praziquantel in Pregnant and Lactating Filipino Women Infected with Schistosoma japonicum. Antimicrobial agents and chemotherapy 64(9) (2020).
  ·  DOI: [10.1128/AAC.00566-20](https://doi.org/10.1128/AAC.00566-20)

## Population and dosing

**Population:** pregnant and lactating Filipino women infected with Schistosoma japonicum · condition schistosomiasis (Schistosoma japonicum infection); pregnancy/lactation · age group adult · n = 45.

**Dosing:** 2100 mg, oral, multiple, every 3 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (h–1) | kabs | 2.012 | h–1 |
| SCL/F (liter/h) | CL/F | 324.075 | liter/h |
| Vc/F (liter) | V1/F | 183.006 | liter |
| Kcp (h–1) | k12 | 19.313 | h–1 |
| Kpc (h–1) | k21 | 15.816 | h–1 |
| Vb/F (liter) | V2/F | 612.130 | liter |
| Lag (h) | tlag | 0.772 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The praziquantel two-compartment model was rejected because its structure leaves a compartment unreachable from the dose.**

The record describes a two-compartment praziquantel model for pregnant and lactating Filipino women, with parameters including kabs 2.012 h–1, CL/F 324.075 liter/h, V1/F 183.006 liter, V2/F 612.130 liter, k12 19.313 h–1, k21 15.816 h–1 and tlag 0.772 h. The refusal is based on the model structure: a compartment has no path from the administered dose, so the topology is not a valid connected two-compartment system. Extracted — praziquantel: kabs 2.01 h–1, CL/F 324 liter/h, V1/F 183 liter, k12 19.3 h–1, k21 15.8 h–1, V2/F 612 liter, tlag 0.772 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has praziquantel, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (h–1) | `Q49` · kabs | 2.012 | h–1 | 0.0005589 | 1/s | 1/h | exact (1) | T2:row1:col1 |
| SCL/F (liter/h) | `Q27` · CL/F | 324.075 | liter/h | 9.002e-05 | m3/s | l/h | llm (0.6) | T2:row2:col1 |
| Vc/F (liter) | `Q290` · V1/F | 183.006 | liter | 0.183 | m3 | l | exact (1) | T2:row3:col1 |
| Kcp (h–1) | `Q301` · k12 | 19.313 | h–1 | 0.005365 | 1/s | 1/h | exact (1) | T2:row4:col1 |
| Kpc (h–1) | `Q302` · k21 | 15.816 | h–1 | 0.004393 | 1/s | 1/h | exact (1) | T2:row5:col1 |
| Vb/F (liter) | `Q82` · V2/F | 612.130 | liter | 0.6121 | m3 | l | llm (0.6) | T2:row8:col1 |
| Lag (h) | `Q83` · tlag | 0.772 | h | 2779 | s | h | llm (0.6) | T2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q302 ('Kcb (h–1)', value '18.750') — already have one for this compound
- dropped duplicate Q301 ('Kbc (h–1)', value '17.816') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=praziquantel
- population split: 'mean' subgroup of Bustinduy_2020 (paper reports 2 populations: mean, median)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[kcb]` |  | 18.750 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vb/f].parameter_id` | Q82 | Q76 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | praziquantel | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | praziquantel | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row3:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['T2:row4:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['T2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row1:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T2:row8:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['T2:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 324 L/h | ['T2:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 183 L | ['T2:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 612 L | ['T2:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpraziquantel%5D%20Praziquantel_Bustinduy2020_mean&body=Drug%3A%20praziquantel%0ARecord%3A%20Praziquantel_Bustinduy2020_mean%0APaper%3A%20Bustinduy_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_praziquantel/Praziquantel_Bustinduy2020_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:24 UTC</sub>
