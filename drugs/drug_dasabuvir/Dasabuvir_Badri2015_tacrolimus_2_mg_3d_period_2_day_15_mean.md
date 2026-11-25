<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dasabuvir&quot;,&quot;href&quot;:&quot;drugs/drug_dasabuvir/&quot;},{&quot;label&quot;:&quot;Badri_2015 \u00b7 tacrolimus_2_mg_3d_period_2_day_15_mean_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dasabuvir_Mensing2016_dasabuvir&quot;,&quot;label&quot;:&quot;Mensing_2016_dasabuvir&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dasabuvir/Dasabuvir_Mensing2016_dasabuvir.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dasabuvir — `Dasabuvir_Badri2015_tacrolimus_2_mg_3d_period_2_day_15_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q174 unit ng/mL/mg (1 / [length] ** 3) vs [mass] / [length] ** 3; Q189 unit ng⋅h/mL/mg ([time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q189 unit ng/mL/mg (1 / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="dasabuvir" model-id="Dasabuvir_Badri2015_tacrolimus_2_mg_3d_period_2_day_15_mean" status="rejected" stale="false" population="healthy adults" measured-compound="dasabuvir, dasabuvir M1, cyclosporine, tacrolimus, ABT-450, ritonavir, ombitasvir" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Badri P, Dutta S, Coakley E, Cohen D, Ding B, Podsadecki T et al. Pharmacokinetics and dose recommendations for cyclosporine and tacrolimus when coadministered with ABT-450, ombitasvir, and dasabuvir. American journal of transplantation : official journal of the American Society of Transplantation and the American Society of Transplant Surgeons 15(5):1313–1322 (2015).
  ·  DOI: [10.1111/ajt.13111](https://doi.org/10.1111/ajt.13111)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 30, 100 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed dasabuvir, cyclosporine, tacrolimus, ABT-450, ombitasvir, ritonavir, measured dasabuvir, dasabuvir M1, cyclosporine, tacrolimus, ABT-450, ritonavir, ombitasvir.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax/D (ng/mL/mg) | Cmax/dose | 22 | ng/mL/mg |
| AUC∞/D (ng⋅h/mL/mg) | AUC/dose | 3290 | ng⋅h/mL/mg |
| C12/D (ng/mL/mg) | AUC/dose | 11 | ng/mL/mg |
| Cmax (ng/mL) | Cmax | 43 | ng/mL |
| Tmax (h) | tmax | 5.0 | h |
| AUC∞ (ng⋅h/mL) | AUC∞ | 6590 | ng⋅h/mL |
| t1/2 (h) 1 | t1/2z | 232 | h |
| C24 (ng/mL) | Ct | 17 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.038). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q174 unit ng/mL/mg (1 / [length] ** 3) vs [mass] / [length] ** 3; Q189 unit ng⋅h/mL/mg ([time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q189 unit ng/mL/mg (1 / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (Cmax/dose, AUC/dose and AUC/dose), so that value has no SI equivalent. Extracted — cyclosporine: Cmax/dose 22 ng/mL/mg, AUC/dose 3.29e+03 ng⋅h/mL/mg; dasabuvir: AUC/dose 11 ng/mL/mg, Cmax 43 ng/mL, tmax 5 h, AUC∞ 6.59e+03 ng⋅h/mL, t1/2z 232 h, Ct 17 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dasabuvir, cyclosporine, tacrolimus, ABT-450, ombitasvir, ritonavir, the second reading unknown; it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax/D (ng/mL/mg) | `Q174` · Cmax/dose | 22 | ng/mL/mg |  |  | ng/(mg·ml) | llm (0.6) | Badri_2015_table_2:row0:col2, Badri_2015_table_2:row0:col3 |
| AUC∞/D (ng⋅h/mL/mg) | `Q189` · AUC/dose | 3290 | ng⋅h/mL/mg |  |  | (h·ng)/(mg·ml) | llm (0.6) | Badri_2015_table_2:row1:col2, Badri_2015_table_2:row1:col3 |
| C12/D (ng/mL/mg) | `Q189` · AUC/dose | 11 | ng/mL/mg |  |  | ng/(mg·ml) | llm (0.6) | Badri_2015_table_2:row3:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 43 | ng/mL | 4.3e-05 | kg/m3 | ng/ml | exact (1) | Badri_2015_table_2:row4:col2 |
| Tmax (h) | `Q56` · tmax | 5.0 | h | 1.8e+04 | s | h | exact (1) | Badri_2015_table_2:row5:col2 |
| AUC∞ (ng⋅h/mL) | `Q17` · AUC∞ | 6590 | ng⋅h/mL | 23.72 | kg*s/m3 | (h·ng)/ml | exact (1) | Badri_2015_table_2:row6:col2 |
| t1/2 (h) 1 | `Q57` · t1/2z | 232 | h | 8.352e+05 | s | h | half_life_rule (0.95) | Badri_2015_table_2:row7:col2 |
| C24 (ng/mL) | `Q75` · Ct | 17 | ng/mL | 1.7e-05 | kg/m3 | ng/ml | llm (0.6) | Badri_2015_table_2:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'tacrolimus 2 mg + 3d period 2, day 15 (n = 12) mean (%cv)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- column 'tacrolimus 2 mg + 3d period 2, day 15 (n = 12) geometric mean ratio (90% ci)' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_mismatch: 'Cmax/D (ng/mL/mg)' → Q174 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC∞/D (ng⋅h/mL/mg)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'C24/D (ng/mL/mg)' → Q189 (unit '1 / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q189 ('C24/D (ng/mL/mg)', value '8.5') — already have one for this compound
- unit_dimension_mismatch: 'C12/D (ng/mL/mg)' → Q189 (unit '1 / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q75 ('C12 (ng/mL)', value '23') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dasabuvir, dasabuvir M1, cyclosporine, tacrolimus, ABT-450, ritonavir, ombitasvir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'tacrolimus 2 mg + 3d period 2, day 15 (n = 12) mean (%cv)' subgroup of Badri_2015 (paper reports 2 populations: tacrolimus 2 mg + 3d period 2, day 15 (n = 12) mean (%cv), tacrolimus 2 mg period 1, day 1 (n = 12) mean (%cv))
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 0 linked by role; re-tagged tacrolimus→cyclosporine ×9, tacrolimus→dasabuvir ×14
- molar mass: no plausible PubChem entry for 'dasabuvir M1' ('dasabuvir M1') — left in mass units
- molar mass: no plausible PubChem entry for 'dasabuvir, dasabuvir M1, cyclosporine, tacrolimus, ABT-450, ritonavir, ombitasvir' ('no full name in the paper') — left in mass units
- molar mass: none found for 'dasabuvir M1' — its concentrations stay mass-only
- molar mass: none found for 'dasabuvir, dasabuvir M1, cyclosporine, tacrolimus, ABT-450, ritonavir, ombitasvir' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.038 (1/26 fields) | 25 |

<details><summary>25 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dasabuvir', 'dasabuvir m1', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[aucinf/d]` |  | 21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf/d]` | 3290 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf/d]` |  | 59 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` |  | 2110 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` | 6590 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` |  | 118 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c12/d]` | 11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c24]` |  | 8.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c24]` | 17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c24]` |  | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/d]` |  | 6.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/d]` | 22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/d]` |  | 5.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 635 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 43 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 (h) 1]` | 232 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 (h) 1]` |  | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 (h)1]` |  | 7.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  | 1.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 5.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  | 1.8 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | dasabuvir, cyclosporine, tacrolimus, ABT-450, ombitasvir, ritonavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | dasabuvir, dasabuvir M1, cyclosporine, tacrolimus, ABT-450, ritonavir, ombitasvir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Badri_2015_table_2:row6:col2'] |
| C5_dimension_Q174 | fail | [mass] / [length] ** 3 | ng/mL/mg (1 / [length] ** 3) | ['Badri_2015_table_2:row0:col2', 'Badri_2015_table_2:row0:col3'] |
| C5_dimension_Q189 | fail | [mass] * [time] / [length] ** 3 | ng⋅h/mL/mg ([time] / [length] ** 3) | ['Badri_2015_table_2:row1:col2', 'Badri_2015_table_2:row1:col3'] |
| C5_dimension_Q189 | fail | [mass] * [time] / [length] ** 3 | ng/mL/mg (1 / [length] ** 3) | ['Badri_2015_table_2:row3:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Badri_2015_table_2:row4:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Badri_2015_table_2:row5:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Badri_2015_table_2:row7:col2'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Badri_2015_table_2:row8:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdasabuvir%5D%20Dasabuvir_Badri2015_tacrolimus_2_mg_3d_period_2_day_15_mean&body=Drug%3A%20dasabuvir%0ARecord%3A%20Dasabuvir_Badri2015_tacrolimus_2_mg_3d_period_2_day_15_mean%0APaper%3A%20Badri_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dasabuvir/Dasabuvir_Badri2015_tacrolimus_2_mg_3d_period_2_day_15_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:17 UTC</sub>
