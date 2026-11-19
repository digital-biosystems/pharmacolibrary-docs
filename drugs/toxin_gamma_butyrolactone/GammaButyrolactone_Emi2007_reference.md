<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Gamma-Butyrolactone&quot;,&quot;href&quot;:&quot;drugs/toxin_gamma_butyrolactone/&quot;},{&quot;label&quot;:&quot;Emi_2007 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Gamma-Butyrolactone — `GammaButyrolactone_Emi2007_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q75 unit μ g/ ml ([mass] ** 2 / [length] ** 3) vs [mass] / [length] ** 3; Q71 unit μ g/ ml ([mass] ** 2 / [length] ** 3) vs [mass] / [length] ** 3; c8 unreachable/orphan compartment or unlinked metabolite (+1 more).

<div class="pk-model-meta" hidden drug="Gamma-Butyrolactone" model-id="GammaButyrolactone_Emi2007_reference" status="rejected" stale="false" population="patients with gastric cancer receiving UFT" measured-compound="gamma-butyrolactone (GBL)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Emi Y, Sumiyoshi Y, Oki E, Kakeji Y, Fukui Y, Maehara Y. Pharmacokinetics of gamma-hydroxybutylic acid (GHB) and gamma-butyrolactone (GBL), the anti-angiogenic metabolites of oral fluoropyrimidine UFT, in patients with gastric cancer. Fukuoka igaku zasshi = Hukuoka acta medica 98(12):418–424 (2007).

## Population and dosing

**Population:** patients with gastric cancer receiving UFT · condition gastric cancer (anticancer therapy) · age group adult.

**Dosed compound ≠ measured compound:** dosed UFT (tegafur + uracil), measured gamma-butyrolactone (GBL).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | equation variable | 1.0 | μ g/ ml |
| 2 | equation variable | 251.9 | μ g/ ml |
| 2 | Ct | 1.0 | μ g/ ml |
| 3 | A3 | 1.0 | μ g/ ml |
| 8 | Ct | 274.5 | μ g/ ml |
| 9 | R1 | 242.0 |  |
| Mean | Cavg | 258.2 | μ g/ ml |
| Mean | Cavg | 1.0 | μ g/ ml |
| Cl (intravenous) | CL | 272.11 | L/h/kg |
| V | V | 100.0 | μL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q75 unit μ g/ ml ([mass] ** 2 / [length] ** 3) vs [mass] / [length] ** 3; Q71 unit μ g/ ml ([mass] ** 2 / [length] ** 3) vs [mass] / [length] ** 3; c8 unreachable/orphan compartment or unlinked metabolite (+1 more).**

A reported unit could not be converted (equation variable, Ct, A3 and Ct), so that value has no SI equivalent. Extracted — Tegafur: Ct 1 μ g/ ml, A3 1 μ g/ ml, Cavg 1 μ g/ ml; gamma butyrolactone: Ct 274 μ g/ ml, R1 242, Cavg 258 μ g/ ml; gamma-butyrolactone (GBL): CL 272 L/h/kg, V 100 μL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has UFT (tegafur + uracil), the second reading UFT; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 1.0 | μ g/ ml |  |  | (g·u)/ml | llm (0.6) | Emi_2007_table_1:row1:col2, Emi_2007_table_1:row1:col3 |
| 2 | `Q900` · equation variable | 251.9 | μ g/ ml | 251.9 | m3 | (g·u)/ml | llm (0.6) | Emi_2007_table_1:row2:col1 |
| 2 | `Q75` · Ct | 1.0 | μ g/ ml |  |  | (g·u)/ml | llm (0.6) | Emi_2007_table_1:row2:col2, Emi_2007_table_1:row2:col3 |
| 3 | `Q417` · A3 | 1.0 | μ g/ ml |  |  | (g·u)/ml | llm (0.6) | Emi_2007_table_1:row3:col2, Emi_2007_table_1:row3:col3 |
| 8 | `Q75` · Ct | 274.5 | μ g/ ml |  |  | (g·u)/ml | llm (0.6) | Emi_2007_table_1:row8:col1 |
| 9 | `Q307` · R1 | 242.0 |  |  |  |  | llm (0.6) | Emi_2007_table_1:row9:col1 |
| Mean | `Q71` · Cavg | 258.2 | μ g/ ml |  |  | (g·u)/ml | llm (0.6) | Emi_2007_table_1:row11:col1 |
| Mean | `Q71` · Cavg | 1.0 | μ g/ ml |  |  | (g·u)/ml | llm (0.6) | Emi_2007_table_1:row11:col2, Emi_2007_table_1:row11:col3 |
| Cl (intravenous) | `Q22` · CL | 272.11 | L/h/kg | 0.005291 | m3/s | L/h | review_gapfill (0.7) | Wu_2021:review |
| V | `Q61` · V | 100.0 | μL | 1e-07 | m3 | L | review_gapfill (0.7) | Ainslie_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Emi_2007_table_1:row1:col1'])
- unit_dimension_mismatch: '2' → Q75 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Emi_2007_table_1:row3:col1'])
- dropped duplicate Q900 ('4', value '232.5') — already have one for this compound
- dropped duplicate Q900 ('4', value '1.0') — already have one for this compound
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['Emi_2007_table_1:row5:col1'])
- unit_dimension_mismatch: '5' → Q75 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ('5', value '2.0') — already have one for this compound
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['Emi_2007_table_1:row6:col1'])
- unit_dimension_mismatch: '6' → Q75 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ('6', value '0.5') — already have one for this compound
- dropped duplicate Q900 ('7', value '285.8') — already have one for this compound
- unit_dimension_mismatch: '7' → Q75 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ('7', value '2.0') — already have one for this compound
- unit_dimension_mismatch: '8' → Q75 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ('8', value '0.5') — already have one for this compound
- unit_dimension_mismatch: '9' → Q75 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ('9', value '0.5') — already have one for this compound
- dropped duplicate Q900 ('10', value '257.8') — already have one for this compound
- unit_dimension_mismatch: '10' → Q75 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ('10', value '0.5') — already have one for this compound
- unit_dimension_mismatch: 'Mean' → Q71 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['Emi_2007_table_1:row12:col1'])
- routed 'SD' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- unit inherited for equation variable (Q900): 'μ g/ ml' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for Ct (Q75): 'μ g/ ml' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for Cavg (Q71): 'μ g/ ml' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gamma-butyrolactone (GBL)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 0/12 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Gamma-Butyrolactone (GBL)' — its concentrations stay mass-only
- molar mass: none found for '5-Fluorouracil (5-FU)' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Wu_2021's review values (primary lacked it)
- gap-filled Q61 (V) from Ainslie_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table Emi_2007_table_1: unknown_column_role
- table Emi_2007_table_1: ragged_grid

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['uft (tegafur+uracil)', '5-fu', 'metabolite'], ['5-fu', 'gamma-butyrolactone (gbl)', 'metabolite precursor context'], ['gamma-butyrolactone (gbl)', 'gamma-hydroxybutyric acid (ghb)', 'interconversion']] | [['uft', 'gbl', 'metabolite'], ['uft', 'ghb', 'metabolite'], ['uft', 'tegafur', 'metabolite'], ['uft', 'uracil', 'metabolite'], ['uft', '5-fu', 'metabolite'], ['gbl', 'ghb', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[1].parameter_id` | Q900 | Q75 | mismatch |
| `gpt-oss:120b` | `parameters[2]` | 251.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[2]` | 1.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[3]` | 1.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[8]` | 274.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[9].parameter_id` | Q307 | Q75 | mismatch |
| `gpt-oss:120b` | `parameters[mean]` | 258.2 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | UFT (tegafur + uracil) | UFT | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | gamma-butyrolactone (GBL) | GBL | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wu_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ainslie_2016:review'] |
| C5_dimension_Q71 | fail | [mass] / [length] ** 3 | μ g/ ml ([mass] ** 2 / [length] ** 3) | ['Emi_2007_table_1:row11:col2', 'Emi_2007_table_1:row11:col3'] |
| C5_dimension_Q75 | fail | [mass] / [length] ** 3 | μ g/ ml ([mass] ** 2 / [length] ** 3) | ['Emi_2007_table_1:row2:col2', 'Emi_2007_table_1:row2:col3'] |
| C5_unit_missing_Q307 | fail | [mass] / [time] |  | ['Emi_2007_table_1:row9:col1'] |
| C5_unit_missing_Q71 | fail | [mass] / [length] ** 3 | μ g/ ml | ['Emi_2007_table_1:row11:col1'] |
| C5_unit_missing_Q75 | fail | [mass] / [length] ** 3 | μ g/ ml | ['Emi_2007_table_1:row8:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 272.1 | ['Wu_2021:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown', 'unknown'] |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 1.9e+04 L/h | ['Wu_2021:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0001 L | ['Ainslie_2016:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgamma_butyrolactone%5D%20GammaButyrolactone_Emi2007_reference&body=Drug%3A%20gamma_butyrolactone%0ARecord%3A%20GammaButyrolactone_Emi2007_reference%0APaper%3A%20Emi_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_gamma_butyrolactone/GammaButyrolactone_Emi2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 12:29 UTC</sub>
