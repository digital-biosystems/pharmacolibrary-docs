<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Reeves_2024 \u00b7 sex_cl_fclozapine_parameter_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clozapine_Parker2001_reference&quot;,&quot;label&quot;:&quot;Parker_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Parker2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Shang_2014_PANSS&quot;,&quot;label&quot;:&quot;Shang_2014 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/pd_Shang_2014_PANSS.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Reeves2024_sex_cl_fclozapine_parameter_estimates`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit unit ([luminosity] / [length] ** 2) vs 1 / [time].

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Reeves2024_sex_cl_fclozapine_parameter_estimates" status="rejected" stale="false" population="patients with treatment-resistant schizophrenia" measured-compound="clozapine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Reeves S, Bertrand J, Obee SJ, Hunter S, Howard R, Flanagan RJ. A population pharmacokinetic model to guide clozapine dose selection, based on age, sex, ethnicity, body weight and smoking status. British journal of clinical pharmacology 90(1):135–145 (2024).
  ·  DOI: [10.1111/bcp.15691](https://doi.org/10.1111/bcp.15691)

## Population and dosing

**Population:** patients with treatment-resistant schizophrenia · condition treatment-resistant schizophrenia · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α-slope Norclozapine | λ1 | 0.31 | unit |
| k f , the fraction of V/F clozapine converted to V/F norclozapine , was fixed to a value of | V/F | 0.66 |  |
| k a | kabs | 0.69 | h À1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.385). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit unit ([luminosity] / [length] ** 2) vs 1 / [time].**

A reported unit could not be converted (λ1), so that value has no SI equivalent. Extracted — norclozapine: λ1 0.31 unit; clozapine: V/F 0.66, kabs 0.69 h À1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl/f clozapine: this record has none, the second reading 23.2; it also differs on 7 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α-slope Norclozapine | `Q67` · λ1 | 0.31 | unit |  |  | unit | llm_corrected (0.6) | Reeves_2024_table_3:row2:col6 |
| k f , the fraction of V/F clozapine converted to V/F norclozapine , was fixed to a value of | `Q76` · V/F | 0.66 |  |  |  | L | boundary (0.8) | Reeves_2024:results_prose |
| k a | `Q49` · kabs | 0.69 | h À1 | 0.0001917 | 1/s | 1/h | space_fold (0.95) | Reeves_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| clozapinei | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'α-intercept Norclozapine (mg L−1)' — extend the ontology if this is a real PK parameter (source ['Reeves_2024_table_3:row1:col6'])
- unit_dimension_mismatch: 'α-slope Norclozapine' → Q67 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- salvaged Q76 ('k f , the fraction of V/F clozapine converted to V/F norclozapine , was fixed to a value of'=0.66) from results prose — parameter table was unreadable
- salvaged Q49 ('k a'=0.69) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clozapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- bound model equation to Q22 (CL): clozapinei = μCL/F clozapine * (weight/70)^0.75 * (age i -40)^
- Q22 (CL) is equation-defined: value moved to equation-variable 'clozapinei'; equation kept verbatim
- status held at "Needs review" — not promoted
- population split: 'sex cl/fclozapine parameter estimates' subgroup of Reeves_2024 (paper reports 9 populations: age exp cl/f clozapine parameter estimates, age exp cl/fclozapine parameter estimates, base model parameter estimates, ethnic cl/f clozapine parameter estimates, ethnic cl/fclozapine parameter estimates, sex cl/f clozapine parameter estimates, sex cl/fclozapine parameter estimates, smoke cl/f clozapine parameter estimates, smoke cl/fclozapine parameter estimates)
- row roles: 3 per-group rows of clozapine covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 25 linked by role; re-tagged clozapine→parent ×47, parent→norclozapine ×8, clozapine→norclozapine ×32

**Extraction notes:**
- LLM selected parameter table(s) 2, 3
- table Reeves_2024_table_2: unbound_uncertainty
- table Reeves_2024_table_3: unbound_uncertainty
- table Reeves_2024_table_3: unparsed_numeric_cell
- captured model equation clozapinei = μCL/F clozapine * (weight/70)^0.75 * (age i -40)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f clozapine]` |  | 23.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.69 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k f , the fraction of v/f clozapine converted to v/f norclozapine , was fixed to a value of]` | 0.66 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f_clozapine]` |  | 1430 | only_one_extracted |
| `gpt-oss-120b` | `parameters[α-slope norclozapine]` | 0.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β weight_v/ f_clozapine]` |  | 1.0 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q67 | fail | 1 / [time] | unit ([luminosity] / [length] ** 2) | ['Reeves_2024_table_3:row2:col6'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 |  | ['Reeves_2024:results_prose'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclozapine%5D%20Clozapine_Reeves2024_sex_cl_fclozapine_parameter_estimates&body=Drug%3A%20clozapine%0ARecord%3A%20Clozapine_Reeves2024_sex_cl_fclozapine_parameter_estimates%0APaper%3A%20Reeves_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clozapine/Clozapine_Reeves2024_sex_cl_fclozapine_parameter_estimates%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:20 UTC</sub>
