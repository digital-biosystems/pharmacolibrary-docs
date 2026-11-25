<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/&quot;},{&quot;label&quot;:&quot;Overgaard_2019 \u00b7 one_compartment_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Semaglutide_Carlsson2018_base&quot;,&quot;label&quot;:&quot;Carlsson_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Carlsson2018_base.md&quot;,&quot;status&quot;:&quot;Curated (human-checked)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Jensen2017_reference&quot;,&quot;label&quot;:&quot;Jensen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Jensen2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Overgaard2021_healthy_subjects&quot;,&quot;label&quot;:&quot;Overgaard_2021_healthy_subjects&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Overgaard2021_healthy_subjects.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Overgaard2021_subjects_with_t2d&quot;,&quot;label&quot;:&quot;Overgaard_2021_subjects_with_t2d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Overgaard2021_subjects_with_t2d.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Semaglutide_Guo2023_reference&quot;,&quot;label&quot;:&quot;Guo_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_semaglutide/Semaglutide_Guo2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# semaglutide — `Semaglutide_Overgaard2019_one_compartment_model`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> No value for semaglutide's clearance and absorption lag time; the covariate scenarios were not simulated (+1 more).

<div class="pk-model-meta" hidden drug="semaglutide" model-id="Semaglutide_Overgaard2019_one_compartment_model" status="model_quarantined" stale="false" population="healthy adults and adults with type 2 diabetes" measured-compound="semaglutide" parameterization="apparent" topology="1C"></div>

## Citation
Overgaard RV, Delff PH, Petri KCC, Anderson TW, Flint A, Ingwersen SH. Population Pharmacokinetics of Semaglutide for Type 2 Diabetes. Diabetes therapy : research, treatment and education of diabetes and related disorders 10(2):649–662 (2019).
  ·  DOI: [10.1007/s13300-019-0581-y](https://doi.org/10.1007/s13300-019-0581-y)

## Population and dosing

**Population:** healthy adults and adults with type 2 diabetes · condition type 2 diabetes and healthy · age group adult.

**Dosing:** 0.25, 0.5, 1, 1.5 mg, sc, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Absorption rate constant ka, h−1 | kabs | 0.0296 | h−1 |
| Total volume/Fb, L | V/F | 9.77 | L |
| theta_q27_body_weight | theta_q27_body_weight | 0.0473 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for semaglutide's clearance and absorption lag time; the covariate scenarios were not simulated (+1 more).**

The model was built, but semaglutide's clearance and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — semaglutide: kabs 0.0296 h−1, V/F 9.77 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Absorption rate constant ka, h−1 | `Q49` · kabs | 0.0296 | h−1 | 8.222e-06 | 1/s | 1/h | llm_confirmed (0.6) | Overgaard_2019_table_5:row0:col2 |
| Total volume/Fb, L | `Q76` · V/F | 9.77 | L | 0.00977 | m3 | l | llm (0.6) | Overgaard_2019_table_5:row3:col2 |
| theta_q27_body_weight | `Q900` · theta_q27_body_weight | 0.0473 |  |  |  |  |  | Overgaard_2019_table_5:row1:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL | Q22 | exact |
| V | Q61 | exact |

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'body weight'/'' on Q27 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=semaglutide
- bound model equation to Q22 (CL): CL = (weight / 85) ^ θ
- bound model equation to Q61 (V): V = (weight / 85) ^ θ
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- Q61 (V) is equation-defined: value moved to equation-variable 'V'; equation kept verbatim
- population split: 'one-compartment model' subgroup of Overgaard_2019 (paper reports 3 populations: estimate, one-compartment model, two-compartment final model)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Overgaard_2019_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (10 record(s))
- LLM selected parameter table(s) 4, 5
- captured model equation CL = (weight / 85) ^ θ
- captured model equation V = (weight / 85) ^ θ

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total volume/fb].parameter_id` | Q76 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[v]` |  |  | only_one_extracted |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Overgaard_2019_table_5:row0:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Overgaard_2019_table_5:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.77 L | ['Overgaard_2019_table_5:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=semaglutide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  | no second reading of this record |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsemaglutide%5D%20Semaglutide_Overgaard2019_one_compartment_model&body=Drug%3A%20semaglutide%0ARecord%3A%20Semaglutide_Overgaard2019_one_compartment_model%0APaper%3A%20Overgaard_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_semaglutide/Semaglutide_Overgaard2019_one_compartment_model%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 10:19 UTC</sub>
