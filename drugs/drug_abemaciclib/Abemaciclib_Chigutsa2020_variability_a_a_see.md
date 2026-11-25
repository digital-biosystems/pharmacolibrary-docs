<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;abemaciclib&quot;,&quot;href&quot;:&quot;drugs/drug_abemaciclib/&quot;},{&quot;label&quot;:&quot;Chigutsa_2020 \u00b7 variability_a_a_see&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abemaciclib — `Abemaciclib_Chigutsa2020_variability_a_a_see`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q49 unit µmol/h ([substance] / [time]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="abemaciclib" model-id="Abemaciclib_Chigutsa2020_variability_a_a_see" status="rejected" stale="false" population="healthy individuals and patients with cancer" measured-compound="abemaciclib" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Chigutsa E, Kambhampati SRP, Karen Sykes A, Posada MM, van der Walt JS, Turner PK. Development and Application of a Mechanistic Population Modeling Approach to Describe Abemaciclib Pharmacokinetics. CPT: pharmacometrics & systems pharmacology 9(9):523–533 (2020).
  ·  DOI: [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544)

## Population and dosing

**Population:** healthy individuals and patients with cancer · condition cancer and healthy · age group adult · n = 486.

**Dosing:** 50, 275 mg, oral, multiple, every 12 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Maximum rate of absorption, ka,max (µmol/h) | kabs | 77.3 | µmol/h |
| MTT (h) | MTT | 71.9 | h |
| Central volume (L) | V1 | 68.6 | L |
| Intercompartmental clearance (L/h) | Q | 7.08 | L/h |
| Peripheral volume (L) | V2 | 7.08 | L |
| Absorption lag time (h) | tlag | 7.08 | h |
| CLint of M2 in liver (L/h) | CL | 41.9 | L/h |
| CLint of M20 in liver (L/h) | CL | 42.5 | L/h |
| theta_q1_category | theta_q1_category | 7.08 |  |
| theta_q305_category | theta_q305_category | 7.08 |  |
| theta_q305_category | theta_q305_category | 7.08 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4), qwen3.8-27b (not confirmed, agreement 0.176). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q49 unit µmol/h ([substance] / [time]) vs 1 / [time].**

A reported unit could not be converted (kabs), so that value has no SI equivalent. Extracted — abemaciclib: kabs 77.3 µmol/h, MTT 71.9 h, V1 68.6 L, Q 7.08 L/h, V2 7.08 L, tlag 7.08 h; M2: CL 41.9 L/h; M20: CL 42.5 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has abemaciclib → m2 (metabolism); abemaciclib → m20 (metabolism), the second reading none; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Maximum rate of absorption, ka,max (µmol/h) | `Q49` · kabs | 77.3 | µmol/h |  |  | (µM·ol)/h | exact (1) | psp412544-tbl-0002:row3:col2 |
| MTT (h) | `Q81` · MTT | 71.9 | h | 2.588e+05 | s | h | exact (1) | psp412544-tbl-0002:row5:col2 |
| Central volume (L) | `Q63` · V1 | 68.6 | L | 0.0686 | m3 | l | exact (1) | psp412544-tbl-0002:row6:col2 |
| Intercompartmental clearance (L/h) | `Q30` · Q | 7.08 | L/h | 1.967e-06 | m3/s | l/h | exact (1) | psp412544-tbl-0002:row7:col2 |
| Peripheral volume (L) | `Q64` · V2 | 7.08 | L | 0.00708 | m3 | l | exact (1) | psp412544-tbl-0002:row8:col2 |
| Absorption lag time (h) | `Q83` · tlag | 7.08 | h | 2.549e+04 | s | h | exact (1) | psp412544-tbl-0002:row10:col2 |
| CLint of M2 in liver (L/h) | `Q22` · CL | 41.9 | L/h | 1.164e-05 | m3/s | l/h | exact (1) | psp412544-tbl-0002:row15:col2 |
| CLint of M20 in liver (L/h) | `Q22` · CL | 42.5 | L/h | 1.181e-05 | m3/s | l/h | exact (1) | psp412544-tbl-0002:row16:col2 |
| theta_q1_category | `Q900` · theta_q1_category | 7.08 |  |  |  |  |  | psp412544-tbl-0002:row4:col2 |
| theta_q305_category | `Q900` · theta_q305_category | 7.08 |  |  |  |  |  | psp412544-tbl-0002:row11:col2 |
| theta_q305_category | `Q900` · theta_q305_category | 7.08 |  |  |  |  |  | psp412544-tbl-0002:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 2 row(s) → M2, 2 row(s) → M20 (name 4)
- dropped unlinked row (NIL): 'Fraction of F a absorbed via transit compartment' — extend the ontology if this is a real PK parameter (source ['psp412544-tbl-0002:row2:col2'])
- linked 'Maximum rate of absorption, ka,max (µmol/h)' as 'ka' → Q49 (kabs) for  — compound marker removed
- unit_dimension_mismatch: 'Maximum rate of absorption, ka,max (µmol/h)' → Q49 (unit '[substance] / [time]' vs ontology '1 / [time]') — route to review
- linked 'Zero‐order absorption duration (h)' as 'ka' → Q49 (kabs) for  — compound marker removed
- unit_dimension_mismatch: 'Zero‐order absorption duration (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Zero‐order absorption duration (h)', value '638') — already have one for this compound
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q305 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Central volume (L)); Q30 (Intercompartmental clearance (L/h)); Q64 (Peripheral volume (L)); Q22 (CLint of M2 in liver (L/h)); Q22 (CLint of M20 in liver (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abemaciclib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: '% variability a , a (%see)' subgroup of Chigutsa_2020 (paper reports 2 populations: % variability a , a (%see), estimate (%see))
- row roles: 4 per-group rows of abemaciclib covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=pbpk; 23/23 row label(s) assigned, 24 linked by role; re-tagged parent→M2 ×5, parent→M20 ×5
- molar mass: no plausible PubChem entry for 'M20' ('M20') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M2' (LLM) — left in mass units
- molar mass: none found for 'M2' — its concentrations stay mass-only
- molar mass: none found for 'M20' — its concentrations stay mass-only

**Extraction notes:**
- table psp412544-tbl-0002: unparsed_numeric_cell
- table Chigutsa_2020_table_3: ragged_grid
- companion parameter table 3 transcribed (95 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (10/25 fields) | 15 |
| `qwen3.8-27b` | not confirmed | 0.176 (3/17 fields) | 14 |

<details><summary>29 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['abemaciclib', 'm2', 'metabolism'], ['abemaciclib', 'm20', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[absorption lag time].covariate_forms` | [] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clint of m2 in liver]` | 41.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint of m20 in liver]` | 42.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint to form m2 in liver (l/h) c , c]` |  | 280 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of dose entering gut compartment, f a]` |  | 0.868 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of f a absorbed via transit compartment]` |  | 7.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum rate of absorption, ka,max].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_kabs_formulation]` |  | -0.513 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q305_category]` | 7.08 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q305_category]` | 7.08 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q342_category]` |  | 0.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q51_category]` |  | 7.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_tlag_formulation]` |  | 0.846 | only_one_extracted |
| `gpt-oss-120b` | `parameters[zero‐order absorption duration]` |  | 638 | only_one_extracted |
| `qwen3.8-27b` | `model.links` | [['abemaciclib', 'm2 (lsn2839567)', 'metabolism'], ['abemaciclib', 'm20 (lsn3106726)', 'metabolism']] | [['abemaciclib', 'm2', 'metabolism'], ['abemaciclib', 'm20', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[absorption lag time]` | 7.08 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[central volume]` | 68.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint of m2 in liver]` | 41.9 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clint of m20 in liver]` | 42.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[fraction of f a absorbed via transit compartment]` | 7.08 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[intercompartmental clearance]` | 7.08 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[maximum rate of absorption, ka,max]` | 77.3 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[mtt]` | 71.9 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[peripheral volume]` | 7.08 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_category]` | 7.08 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q305_category]` | 7.08 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q305_category]` | 7.08 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[zero‐order absorption duration]` | 638 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412544-tbl-0002:row15:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412544-tbl-0002:row16:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412544-tbl-0002:row7:col2'] |
| C5_dimension_Q49 | fail | 1 / [time] | µmol/h ([substance] / [time]) | ['psp412544-tbl-0002:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412544-tbl-0002:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412544-tbl-0002:row8:col2'] |
| C5_dimension_Q81 | pass | [time] |  | ['psp412544-tbl-0002:row5:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['psp412544-tbl-0002:row10:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 41.9 | ['psp412544-tbl-0002:row15:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 41.9 L/h | ['psp412544-tbl-0002:row15:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 42.5 L/h | ['psp412544-tbl-0002:row16:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 68.6 L | ['psp412544-tbl-0002:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.08 L | ['psp412544-tbl-0002:row8:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babemaciclib%5D%20Abemaciclib_Chigutsa2020_variability_a_a_see&body=Drug%3A%20abemaciclib%0ARecord%3A%20Abemaciclib_Chigutsa2020_variability_a_a_see%0APaper%3A%20Chigutsa_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abemaciclib/Abemaciclib_Chigutsa2020_variability_a_a_see%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:13 UTC</sub>
