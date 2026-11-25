<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;chloramphenicol&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/&quot;},{&quot;label&quot;:&quot;Mayers_1991 \u00b7 amikacin_in_serum&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloramphenicol_Perucca1982_reference&quot;,&quot;label&quot;:&quot;Perucca_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Perucca1982_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Anadn1994_30_mg_kg&quot;,&quot;label&quot;:&quot;Anad\u00f3n_1994_30_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Anadn1994_50_mg_kg&quot;,&quot;label&quot;:&quot;Anad\u00f3n_1994_50_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_50_mg_kg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Soback1986_reference&quot;,&quot;label&quot;:&quot;Soback_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Soback1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloramphenicol — `Chloramphenicol_Mayers1991_amikacin_in_serum`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="chloramphenicol" model-id="Chloramphenicol_Mayers1991_amikacin_in_serum" status="rejected" stale="false" population="adult rabbits" measured-compound="chloramphenicol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Mayers M, Rush D, Madu A, Motyl M, Miller MH. Pharmacokinetics of amikacin and chloramphenicol in the aqueous humor of rabbits. Antimicrobial agents and chemotherapy 35(9):1791–1798 (1991).
  ·  DOI: [10.1128/AAC.35.9.1791](https://doi.org/10.1128/AAC.35.9.1791)

## Population and dosing

**Population:** adult rabbits · condition healthy · age group adult · n = 25.

**Dosed compound ≠ measured compound:** dosed chloramphenicol succinate, measured chloramphenicol.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| β (h⁻¹) | kel | 0.5686 | h⁻¹ |
| t₁/₂ β (h) | t1/2β | 1.2190 | h |
| AUC (mg · h/liter) | AUC | 29.8350 | mg · h/liter |
| Cmax (µg/ml) | Cmax | 30.7050 | µg/ml |
| Tmax (h) | tmax | 0 | h |
| t lag (h) | tlag | 0 | h |
| K₁₂ (h⁻¹) | k12 | 0.852 | h⁻¹ |
| K₂₁ (h⁻¹) | k21 | 1.6206 | h⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.05). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

None of the extracted parameters is chloramphenicol's own; they describe amikacin. Extracted — amikacin: kel 0.569 h⁻¹, t1/2β 1.22 h, AUC 29.8 mg · h/liter, Cmax 30.7 µg/ml, tmax 0 h, tlag 0 h, k12 0.852 h⁻¹, k21 1.62 h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has chloramphenicol succinate, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| β (h⁻¹) | `Q47` · kel | 0.5686 | h⁻¹ | 0.0001579 | 1/s | 1/h | exact (1) | Mayers_1991_table_1:row0:col1 |
| t₁/₂ β (h) | `Q60` · t1/2β | 1.2190 | h | 4388 | s | h | half_life_rule (0.95) | Mayers_1991_table_1:row0:col2 |
| AUC (mg · h/liter) | `Q88` · AUC | 29.8350 | mg · h/liter | 107.4 | kg*s/m3 | (h·mg)/l | exact (1) | Mayers_1991_table_1:row0:col4 |
| Cmax (µg/ml) | `Q32` · Cmax | 30.7050 | µg/ml | 0.0307 | kg/m3 | µg/ml | exact (1) | Mayers_1991_table_1:row0:col6 |
| Tmax (h) | `Q56` · tmax | 0 | h | 0 | s | h | exact (1) | Mayers_1991_table_1:row0:col7 |
| t lag (h) | `Q83` · tlag | 0 | h | 0 | s | h | space_fold (0.95) | Mayers_1991_table_1:row0:col8 |
| K₁₂ (h⁻¹) | `Q301` · k12 | 0.852 | h⁻¹ | 0.0002367 | 1/s | 1/h | exact (1) | Mayers_1991_table_1:row0:col9 |
| K₂₁ (h⁻¹) | `Q302` · k21 | 1.6206 | h⁻¹ | 0.0004502 | 1/s | 1/h | exact (1) | Mayers_1991_table_1:row0:col10 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'β (h⁻¹)'; source reconciliation required
- table representations disagree for 't₁/₂ β (h)'; source reconciliation required
- table representations disagree for 'Kₑₗ (h⁻¹)'; source reconciliation required
- table representations disagree for 'AUC (mg · h/liter)'; source reconciliation required
- table representations disagree for 'Cmax (µg/ml)'; source reconciliation required
- table representations disagree for 'Tmax (h)'; source reconciliation required
- table representations disagree for 't lag (h)'; source reconciliation required
- table representations disagree for 'K₁₂ (h⁻¹)'; source reconciliation required
- table representations disagree for 'K₂₁ (h⁻¹)'; source reconciliation required
- dropped duplicate Q47 ('Kₑₗ (h⁻¹)', value '1.0290') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=chloramphenicol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- population split: 'amikacin in: serum' subgroup of Mayers_1991 (paper reports 3 populations: amikacin in: serum, aqueous humor, chloramphenicol in: serum)

**Extraction notes:**
- transposed table Mayers_1991_table_1: logical view retains original source coordinates
- table tab_0: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.05 (1/20 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['chloramphenicol succinate', 'chloramphenicol', 'hydrolysis']] | [['chloramphenicol succinate', 'chloramphenicol', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[auc]` | 29.8350 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 98.0720 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 30.7050 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 109.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 0.852 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 1.6352 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 1.6206 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` |  | 0.9696 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 β]` | 1.2190 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 β]` |  | 1.1575 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.5686 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` |  | 0.6020 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | chloramphenicol succinate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | chloramphenicol | unknown | mismatch |

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
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Mayers_1991_table_1:row0:col9'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Mayers_1991_table_1:row0:col10'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Mayers_1991_table_1:row0:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Mayers_1991_table_1:row0:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Mayers_1991_table_1:row0:col7'] |
| C5_dimension_Q60 | pass | [time] |  | ['Mayers_1991_table_1:row0:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Mayers_1991_table_1:row0:col8'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Mayers_1991_table_1:row0:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloramphenicol%5D%20Chloramphenicol_Mayers1991_amikacin_in_serum&body=Drug%3A%20chloramphenicol%0ARecord%3A%20Chloramphenicol_Mayers1991_amikacin_in_serum%0APaper%3A%20Mayers_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloramphenicol/Chloramphenicol_Mayers1991_amikacin_in_serum%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:59 UTC</sub>
