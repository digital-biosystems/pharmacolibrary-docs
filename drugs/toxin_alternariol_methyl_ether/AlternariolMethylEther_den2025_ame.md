<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Alternariol methyl ether&quot;,&quot;href&quot;:&quot;drugs/toxin_alternariol_methyl_ether/&quot;},{&quot;label&quot;:&quot;den_2025 \u00b7 ame&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlternariolMethylEther_den2025_reference&quot;,&quot;label&quot;:&quot;den_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_den2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alternariol methyl ether — `AlternariolMethylEther_den2025_ame`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q354 unit h*kg ([time] * [mass]) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="Alternariol methyl ether" model-id="AlternariolMethylEther_den2025_ame" status="rejected" stale="false" population="piglets (weaned, ~4–8 weeks of age, ~6–20 kg b.w.)" measured-compound="Alternariol methyl ether (AME)" parameterization="mechanistic" topology="1C"></div>

## Citation
den Hollander D, De Baere S, Holvoet C, Devreese M, Antonissen G, Martens A et al. Absolute oral bioavailability, quantitative toxicokinetics and metabolite profiling of alternariol and alternariol monomethyl ether in pigs. Archives of toxicology 99(7):2801–2817 (2025).
  ·  DOI: [10.1007/s00204-025-04050-y](https://doi.org/10.1007/s00204-025-04050-y)

## Population and dosing

**Population:** piglets (weaned, ~4–8 weeks of age, ~6–20 kg b.w.) · condition healthy · n = 6.

**Dosing:** 2 mg/kg b.w., ['oral', 'iv'], single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-∞ (ng*h/mL) | AUC∞ | 132.8 | ng*h/mL |
| F (%) | Fab | 9 | % |
| C0 (ng/mL) | C0 | 487.8 | ng/mL |
| Cmax (ng/mL) | Cmax | 2.83 | ng/mL |
| tmax (h) | tmax | 1.1 | h |
| t1/2el (h) | t1/2z | 0.21 | h |
| ke (h−1) | kel | 3.61 | h−1 |
| CL (L/(h*kg)) | CLnorm | 16.8 | h*kg |
| Vd (L/kg) | V | 5.15 | L/kg |
| fe (%) | fe | 9.74 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.765). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q354 unit h*kg ([time] * [mass]) vs [length] ** 3 / [time].**

A reported unit could not be converted (Fab, C0 and CLnorm), so that value has no SI equivalent. Extracted — alternariol methyl ether: AUC∞ 133 ng*h/mL, Fab 9 %, C0 488 ng/mL, Cmax 2.83 ng/mL, tmax 1.1 h, t1/2z 0.21 h, kel 3.61 h−1, CLnorm 16.8 h*kg, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Alternariol methyl ether (AME), the second reading alternariol monomethyl ether (AME); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-∞ (ng*h/mL) | `Q17` · AUC∞ | 132.8 | ng*h/mL | 0.4781 | kg*s/m3 | (h·ng)/ml | exact (1) | Tab2:row2:col3, Tab2:row2:col4 |
| F (%) | `Q40` · Fab | 9 | % |  |  |  | exact (1) | Tab2:row3:col4 |
| C0 (ng/mL) | `Q86` · C0 | 487.8 | ng/mL |  |  | ng/ml | exact (1) | Tab2:row4:col3 |
| Cmax (ng/mL) | `Q32` · Cmax | 2.83 | ng/mL | 2.83e-06 | kg/m3 | ng/ml | exact (1) | Tab2:row5:col4 |
| tmax (h) | `Q56` · tmax | 1.1 | h | 3960 | s | h | exact (1) | Tab2:row6:col4 |
| t1/2el (h) | `Q57` · t1/2z | 0.21 | h | 756 | s | h | half_life_rule (0.95) | Tab2:row7:col3 |
| ke (h−1) | `Q47` · kel | 3.61 | h−1 | 0.001003 | 1/s | 1/h | exact (1) | Tab2:row8:col3 |
| CL (L/(h*kg)) | `Q354` · CLnorm | 16.8 | h*kg |  |  | h·kg | llm_corrected (0.6) | Tab2:row9:col3 |
| Vd (L/kg) | `Q61` · V | 5.15 | L/kg | 0.3605 | m3 | l/kg | exact (1) | Tab2:row10:col3 |
| fe (%) | `Q44` · fe | 9.74 | % | 0.0974 |  | % | exact (1) | Tab2:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'ame' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'AUC0-∞ (ng*h/mL)'; source reconciliation required
- table representations disagree for 'F (%)'; source reconciliation required
- table representations disagree for 'C0 (ng/mL)'; source reconciliation required
- table representations disagree for 'Cmax (ng/mL)'; source reconciliation required
- table representations disagree for 'tmax (h)'; source reconciliation required
- table representations disagree for 't1/2el (h)'; source reconciliation required
- table representations disagree for 'ke (h−1)'; source reconciliation required
- table representations disagree for 'CL (L/(h*kg))'; source reconciliation required
- table representations disagree for 'Vd (L/kg)'; source reconciliation required
- table representations disagree for 'fe (%)'; source reconciliation required
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'CL (L/(h*kg))' → Q354 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped value-less row: 'AUC0-∞'
- dropped value-less row: 'C0'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'Tmax'
- dropped value-less row: 't1/2el'
- dropped value-less row: 'ke'
- dropped value-less row: 'CL'
- dropped value-less row: 'Vd'
- dropped value-less row: 'fe'
- unit inherited for Fab (Q40): '%' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Alternariol methyl ether (AME)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 9 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'ame' subgroup of den_2025 (paper reports 1 populations: ame)
- molar mass: none found for 'Alternariol methyl ether (AME)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.765 (13/17 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl (l/(h*kg))].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Alternariol methyl ether (AME) | alternariol monomethyl ether (AME) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Alternariol methyl ether (AME) | alternariol monomethyl ether (AME) | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab2:row2:col3', 'Tab2:row2:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab2:row5:col4'] |
| C5_dimension_Q354 | fail | [length] ** 3 / [time] | h*kg ([time] * [mass]) | ['Tab2:row9:col3'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['Tab2:row11:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab2:row8:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab2:row6:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row7:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row10:col3'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) | ['Tab2:row4:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 360 L | ['Tab2:row10:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balternariol_methyl_ether%5D%20AlternariolMethylEther_den2025_ame&body=Drug%3A%20alternariol_methyl_ether%0ARecord%3A%20AlternariolMethylEther_den2025_ame%0APaper%3A%20den_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_den2025_ame%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 14:37 UTC</sub>
