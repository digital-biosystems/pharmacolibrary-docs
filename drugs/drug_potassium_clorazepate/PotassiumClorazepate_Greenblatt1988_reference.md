<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;potassium clorazepate&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_clorazepate/&quot;},{&quot;label&quot;:&quot;Greenblatt_1988 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumClorazepate_Diack2024_reference&quot;,&quot;label&quot;:&quot;Diack_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_clorazepate/PotassiumClorazepate_Diack2024_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumClorazepate_Kirschbrown2019_reference&quot;,&quot;label&quot;:&quot;Kirschbrown_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_clorazepate/PotassiumClorazepate_Kirschbrown2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumClorazepate_Kratochwil2021_reference&quot;,&quot;label&quot;:&quot;Kratochwil_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_clorazepate/PotassiumClorazepate_Kratochwil2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumClorazepate_Pressler2024_reference&quot;,&quot;label&quot;:&quot;Pressler_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_clorazepate/PotassiumClorazepate_Pressler2024_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# potassium clorazepate — `PotassiumClorazepate_Greenblatt1988_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for potassium clorazepate's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations (+1 more).

<div class="pk-model-meta" hidden drug="potassium clorazepate" model-id="PotassiumClorazepate_Greenblatt1988_reference" status="model_quarantined" stale="false" population="healthy adults" measured-compound="desmethyldiazepam" parameterization="apparent" topology="1C"></div>

## Citation
Greenblatt DJ, Divoll MK, Soong MH, Boxenbaum HG, Harmatz JS, Shader RI. Desmethyldiazepam pharmacokinetics: studies following intravenous and oral desmethyldiazepam, oral clorazepate, and intravenous diazepam. Journal of clinical pharmacology 28(9):853–859 (1988).
  ·  DOI: [10.1002/j.1552-4604.1988.tb03228.x](https://doi.org/10.1002/j.1552-4604.1988.tb03228.x)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed clorazepate, measured desmethyldiazepam.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution (Vd) | Vm/F | 90 | liters |
| elimination half-life (t1/2) | t1/2z | 93 | hours |
| clearance | CLm/F | 12.3 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for potassium clorazepate's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations (+1 more).**

The model was built, but potassium clorazepate's clearance, volume of distribution, absorption rate constant and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — potassium clorazepate: Vm/F 90 liters, t1/2z 93 hours, CLm/F 12.3 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clorazepate, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution (Vd) | `Q367` · Vm/F | 90 | liters | 0.09 | m3 | l | exact (1) | Greenblatt_1988:abstract |
| elimination half-life (t1/2) | `Q57` · t1/2z | 93 | hours | 3.348e+05 | s | h | half_life_rule (0.95) | Greenblatt_1988:abstract |
| clearance | `Q351` · CLm/F | 12.3 | mL/min | 2.05e-07 | m3/s | ml/min | exact (1) | Greenblatt_1988:abstract, Greenblatt_1988:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('Vd', value 180) — already have one for this compound
- dropped duplicate Q57 ('t1/2', value 83) — already have one for this compound
- dropped value-less row: 'Clearances of DZ and DMDZ'
- metabolite desmethyldiazepam: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite desmethyldiazepam: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desmethyldiazepam
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 2 linked by role; re-tagged desmethyldiazepam→parent ×8
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Greenblatt_1988_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['diazepam', 'desmethyldiazepam', 'metabolism'], ['clorazepate dipotassium', 'desmethyldiazepam', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[clearance].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[volume of distribution].parameter_id` | Q367 | Q61 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | clorazepate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | desmethyldiazepam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Greenblatt_1988:abstract', 'Greenblatt_1988:abstract'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Greenblatt_1988:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Greenblatt_1988:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage | skipped |  |  |  | no structural disposition parameters in record |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.333 (3 of 9 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.333 | cross-check contradicted by a second reader: verdict disputed; agreement 0.333 (3 of 9 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_clorazepate%5D%20PotassiumClorazepate_Greenblatt1988_reference&body=Drug%3A%20potassium_clorazepate%0ARecord%3A%20PotassiumClorazepate_Greenblatt1988_reference%0APaper%3A%20Greenblatt_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_potassium_clorazepate/PotassiumClorazepate_Greenblatt1988_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-24 02:52 UTC</sub>
