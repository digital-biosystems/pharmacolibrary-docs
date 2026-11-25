<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Kang_2020 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Kang2020_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_Kang2020_final" status="rejected" stale="false" population="healthy volunteers and patients with relapsed/refractory acute myeloid leukemia" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kang D, Ludwig E, Jaworowicz D, Huang H, Fiedler-Kelly J, Cortes J et al. Population Pharmacokinetic Analysis of Quizartinib in Healthy Volunteers and Patients With Relapsed/Refractory Acute Myeloid Leukemia. Journal of clinical pharmacology 60(12):1629–1641 (2020).
  ·  DOI: [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680)

## Population and dosing

**Population:** healthy volunteers and patients with relapsed/refractory acute myeloid leukemia · condition relapsed/refractory acute myeloid leukemia · age group adult.

**Dosing:** 20, 30, 60, 90 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 22 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Q1 (intercompartmental clearance 1), L/h | Q | 27.9 | L/h | 3.14 |
| Q2 (intercompartmental clearance 2), L/h | Q2 | 0.567 | L/h | 4.87 |
| D1 (duration of zero‐order input to depot compartment), h | D1 | 0.708 | h | 3.86 |
| ALAG1 (absorption lag time), h | tlag | 0.205 | h | 4.09 |
| FMET (fraction of quizartinib converted to AC886) | fm | 0.500 | fraction of quizartinib converted to AC886 |  |
| theta_q22_category | theta_q22_category | 2.77 |  | 2.04 |
| theta_q63_category | theta_q63_category | 194 |  | 1.89 |
| theta_q63_weight_power | theta_q63_weight_power | -0.725 |  | 12.6 |
| theta_q63_weight_power | theta_q63_weight_power | 1.46 |  | 7.16 |
| theta_q_weight_power | theta_q_weight_power | 0.970 |  | 23.3 |
| theta_q82_category | theta_q82_category | 170 |  | 2.53 |
| theta_q64_weight_power | theta_q64_weight_power | 1.50 |  | 10.9 |
| theta_q64_age_power | theta_q64_age_power | 0.453 |  | 10.7 |
| theta_q78_category | theta_q78_category | 39.3 |  | 1.86 |
| theta_q49_category | theta_q49_category | 0.874 |  | 3.00 |
| theta_q49_fed | theta_q49_fed | -0.512 |  | 8.75 |
| theta_q40_category | theta_q40_category | 0.599 |  | 3.26 |
| theta_q40_fasted | theta_q40_fasted | 0.913 |  | 1.86 |
| theta_q40_fed | theta_q40_fed | 0.0509 |  | 52.0 |
| theta_q27_category | theta_q27_category | 4.09 |  | 3.07 |
| theta_q351_weight_power | theta_q351_weight_power | 1.60 |  | 12.5 |
| theta_q351_race | theta_q351_race | 0.586 |  | 14.1 |
| theta_q351_category | theta_q351_category | 0.106 |  | 27.7 |
| theta_q290_category | theta_q290_category | 4.95 |  | 8.27 |
| theta_q61_category | theta_q61_category | 1.92 |  | 19.3 |
| theta_q82_category | theta_q82_category | 70.6 |  | 1.06 |
| theta_q30_category | theta_q30_category | 3.29 |  | 1.28 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.964). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (fm), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[theta_q40_category].value`: this record has 0.599, the second reading 0.136; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Q1 (intercompartmental clearance 1), L/h | `Q30` · Q | 27.9 | L/h | 7.75e-06 | m3/s | l/h | 3.14 | exact (1) | jcph1680-tbl-0003:row8:col1 |
| Q2 (intercompartmental clearance 2), L/h | `Q99` · Q2 | 0.567 | L/h | 1.575e-07 | m3/s | l/h | 4.87 | exact (1) | jcph1680-tbl-0003:row13:col1 |
| D1 (duration of zero‐order input to depot compartment), h | `Q310` · D1 | 0.708 | h | 2549 | s | h | 3.86 | space_fold (0.95) | jcph1680-tbl-0003:row18:col1 |
| ALAG1 (absorption lag time), h | `Q83` · tlag | 0.205 | h | 738 | s | h | 4.09 | exact (1) | jcph1680-tbl-0003:row23:col1 |
| FMET (fraction of quizartinib converted to AC886) | `Q45` · fm | 0.500 | fraction of quizartinib converted to AC886 |  |  | ac886·converted·fraction·of·quizartinib·to |  | exact (1) | Kang_2020_table_4:row5:col1 |
| theta_q22_category | `Q900` · theta_q22_category | 2.77 |  |  |  |  | 2.04 |  | jcph1680-tbl-0003:row2:col1 |
| theta_q63_category | `Q900` · theta_q63_category | 194 |  |  |  |  | 1.89 |  | jcph1680-tbl-0003:row5:col1 |
| theta_q63_weight_power | `Q900` · theta_q63_weight_power | -0.725 |  |  |  |  | 12.6 |  | jcph1680-tbl-0003:row6:col1 |
| theta_q63_weight_power | `Q900` · theta_q63_weight_power | 1.46 |  |  |  |  | 7.16 |  | jcph1680-tbl-0003:row7:col1 |
| theta_q_weight_power | `Q900` · theta_q_weight_power | 0.970 |  |  |  |  | 23.3 |  | jcph1680-tbl-0003:row9:col1 |
| theta_q82_category | `Q900` · theta_q82_category | 170 |  |  |  |  | 2.53 |  | jcph1680-tbl-0003:row10:col1 |
| theta_q64_weight_power | `Q900` · theta_q64_weight_power | 1.50 |  |  |  |  | 10.9 |  | jcph1680-tbl-0003:row11:col1 |
| theta_q64_age_power | `Q900` · theta_q64_age_power | 0.453 |  |  |  |  | 10.7 |  | jcph1680-tbl-0003:row12:col1 |
| theta_q78_category | `Q900` · theta_q78_category | 39.3 |  |  |  |  | 1.86 |  | jcph1680-tbl-0003:row14:col1 |
| theta_q49_category | `Q900` · theta_q49_category | 0.874 |  |  |  |  | 3.00 |  | jcph1680-tbl-0003:row15:col1 |
| theta_q49_fed | `Q900` · theta_q49_fed | -0.512 |  |  |  |  | 8.75 |  | jcph1680-tbl-0003:row17:col1 |
| theta_q40_category | `Q900` · theta_q40_category | 0.599 |  |  |  |  | 3.26 |  | jcph1680-tbl-0003:row19:col1 |
| theta_q40_fasted | `Q900` · theta_q40_fasted | 0.913 |  |  |  |  | 1.86 |  | jcph1680-tbl-0003:row21:col1 |
| theta_q40_fed | `Q900` · theta_q40_fed | 0.0509 |  |  |  |  | 52.0 |  | jcph1680-tbl-0003:row22:col1 |
| theta_q27_category | `Q900` · theta_q27_category | 4.09 |  |  |  |  | 3.07 |  | Kang_2020_table_4:row1:col1 |
| theta_q351_weight_power | `Q900` · theta_q351_weight_power | 1.60 |  |  |  |  | 12.5 |  | Kang_2020_table_4:row2:col1 |
| theta_q351_race | `Q900` · theta_q351_race | 0.586 |  |  |  |  | 14.1 |  | Kang_2020_table_4:row3:col1 |
| theta_q351_category | `Q900` · theta_q351_category | 0.106 |  |  |  |  | 27.7 |  | Kang_2020_table_4:row4:col1 |
| theta_q290_category | `Q900` · theta_q290_category | 4.95 |  |  |  |  | 8.27 |  | Kang_2020_table_4:row6:col1 |
| theta_q61_category | `Q900` · theta_q61_category | 1.92 |  |  |  |  | 19.3 |  | Kang_2020_table_4:row7:col1 |
| theta_q82_category | `Q900` · theta_q82_category | 70.6 |  |  |  |  | 1.06 |  | Kang_2020_table_4:row8:col1 |
| theta_q30_category | `Q900` · theta_q30_category | 3.29 |  |  |  |  | 1.28 |  | Kang_2020_table_4:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iov: 'RV (healthy volunteer CCV component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (patient CCV component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (healthy volunteer additive component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (patient additive component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'Minimum value of the objective function = 72 031.19' routed out of structural estimates ('IOV in Vc on occasion 4')
- unit_dimension_unknown: 'fraction of quizartinib converted to AC886' (fm)
- dropped unlinked row (NIL): 'Minimum value of the objective function = −10 302.217' — extend the ontology if this is a real PK parameter (source ['Kang_2020_table_4:row14:col1'])
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q22 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q82 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q78 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q49 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q40 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q290 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q30 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Q1 (intercompartmental clearance 1), L/h); Q99 (Q2 (intercompartmental clearance 2), L/h)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- model-stage split: 'final parameter estimate / population mean' is the final model of Kang_2020 (paper reports 2 stages: final parameter estimate / population mean, magnitude of interindividual variability / final estimate); same population, different model-building step
- row roles: 2 per-group rows of quizartinib absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of quizartinib bioavailability but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of quizartinib residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of AC886 variability but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of AC886 residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 41/41 row label(s) assigned, 21 linked by role; re-tagged quizartinib→parent ×34, quizartinib→AC886 ×14
- molar mass: none of 1 PubChem candidate(s) is 'AC886' (LLM) — left in mass units
- molar mass: none found for 'AC886' — its concentrations stay mass-only

**Extraction notes:**
- table jcph1680-tbl-0003: unbound_uncertainty
- table jcph1680-tbl-0003: missing_label
- table jcph1680-tbl-0003: ragged_grid
- table jcph1680-tbl-0003: unparsed_numeric_cell
- table Kang_2020_table_4: unbound_uncertainty
- table Kang_2020_table_4: ragged_grid
- table Kang_2020_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.964 (54/56 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q40_category].rse_percent` | 3.26 | 14.6 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q40_category].value` | 0.599 | 0.136 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph1680-tbl-0003:row8:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['jcph1680-tbl-0003:row18:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph1680-tbl-0003:row23:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['jcph1680-tbl-0003:row13:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquizartinib%5D%20Quizartinib_Kang2020_final&body=Drug%3A%20quizartinib%0ARecord%3A%20Quizartinib_Kang2020_final%0APaper%3A%20Kang_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quizartinib/Quizartinib_Kang2020_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:05 UTC</sub>
