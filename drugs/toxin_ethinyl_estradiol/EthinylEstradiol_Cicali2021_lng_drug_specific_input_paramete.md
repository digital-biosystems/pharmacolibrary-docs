<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethinyl Estradiol&quot;,&quot;href&quot;:&quot;drugs/toxin_ethinyl_estradiol/&quot;},{&quot;label&quot;:&quot;Cicali_2021 \u00b7 lng_drug_specific_input_parameters_value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethinyl Estradiol — `EthinylEstradiol_Cicali2021_lng_drug_specific_input_paramete`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="Ethinyl Estradiol" model-id="EthinylEstradiol_Cicali2021_lng_drug_specific_input_paramete" status="rejected" stale="false" population="healthy women of childbearing age, normal BMI and obese (BMI ≥ 30 kg/m²)" measured-compound="Levonorgestrel" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Cicali B, Lingineni K, Cristofoletti R, Wendl T, Hoechel J, Wiesinger H et al. Quantitative Assessment of Levonorgestrel Binding Partner Interplay and Drug-Drug Interactions Using Physiologically Based Pharmacokinetic Modeling. CPT: pharmacometrics & systems pharmacology 10(1):48–58 (2021).
  ·  DOI: [10.1002/psp4.12572](https://doi.org/10.1002/psp4.12572)

## Population and dosing

**Population:** healthy women of childbearing age, normal BMI and obese (BMI ≥ 30 kg/m²) · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Levonorgestrel coformulated with ethinyl estradiol (oral contraceptive), measured Levonorgestrel.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Levonorgestrel coformulated with ethinyl estradiol (oral contraceptive), the second reading Ethinyl Estradiol; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Protein binding: SHBG | Q331 | llm_corrected |
| Specific organ permeability | Q410 | llm |
| LNG 0.03, 0.09, 0.15, 0.27, 0.75, 1.50 mg Lag time | Q83 | llm_confirmed |
| theta_q374_weight_power | Q900 |  |
| theta_q331_albumin_power | Q900 |  |
| theta_q3_cyp3a4 | Q900 |  |
| theta_q25_hepatic_other_clearance | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- compound tags: 1 row(s) → SHBG (name 1)
- dropped unlinked row (NIL): 'Lipophilicity' — extend the ontology if this is a real PK parameter (source ['Cicali_2021_table_1:row2:col1'])
- dropped unlinked row (NIL): 'Aqueous solubility' — extend the ontology if this is a real PK parameter (source ['Cicali_2021_table_1:row5:col1'])
- dropped unlinked row (NIL): 'FaSSIF solubility' — extend the ontology if this is a real PK parameter (source ['Cicali_2021_table_1:row6:col1'])
- dropped unlinked row (NIL): 'Specific intestinal permeability' — extend the ontology if this is a real PK parameter (source ['Cicali_2021_table_1:row9:col1'])
- covariate effect for Q374 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q331 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q3 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q25 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Levonorgestrel
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- pharmacogenetic covariate 'theta_q3_cyp3a4' (cyp3a4) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'lng drug‐specific input parameters / value' subgroup of Cicali_2021 (paper reports 2 populations: ee drug‐specific input parameters / value, lng drug‐specific input parameters / value)
- row roles (LLM): model_class=pbpk; 0/17 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Levonorgestrel' — its concentrations stay mass-only
- molar mass: none found for 'SHBG' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Levonorgestrel', not ethinyl_estradiol — the review values are the parent's

**Extraction notes:**
- table psp412572-tbl-0002: unparsed_numeric_cell
- table psp412572-tbl-0002: representations disagree; selected evidence retained, not merged
- table Cicali_2021_table_1: units_need_context
- table Cicali_2021_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (16 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.0 (0/15 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['levonorgestrel', 'cyp3a4-mediated metabolism', 'metabolized'], ['ethinyl estradiol', 'shbg induction', 'increases shbg'], ['carbamazepine', 'cyp3a4', 'induces'], ['rifampicin', 'cyp3a4', 'induces'], ['ethinyl estradiol', 'cyp3a4', 'competitive inhibition']] | [] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[auc0-inf]` |  | 0.99 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/ f]` |  | 1.17 | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life]` |  | 1.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lng 0.03, 0.09, 0.15, 0.27, 0.75, 1.50 mg lag time]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding: shbg]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[specific organ permeability]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q25_hepatic_other_clearance]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q331_albumin_power]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q374_weight_power]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q3_cyp3a4]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vss/f]` |  | 0.90 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Levonorgestrel coformulated with ethinyl estradiol (oral contraceptive) | Ethinyl Estradiol | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Levonorgestrel | Ethinyl Estradiol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained |
|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |
| C0b_disposition_core | fail |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['fmCYP3A4', 'Ki 10 pmol/L'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethinyl_estradiol%5D%20EthinylEstradiol_Cicali2021_lng_drug_specific_input_paramete&body=Drug%3A%20ethinyl_estradiol%0ARecord%3A%20EthinylEstradiol_Cicali2021_lng_drug_specific_input_paramete%0APaper%3A%20Cicali_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethinyl_estradiol/EthinylEstradiol_Cicali2021_lng_drug_specific_input_paramete%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:43 UTC</sub>
