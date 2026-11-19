<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fosphenytoin&quot;,&quot;href&quot;:&quot;drugs/toxin_fosphenytoin/&quot;},{&quot;label&quot;:&quot;Tanaka_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fosphenytoin — `Fosphenytoin_Tanaka2013_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> No value for fosphenytoin's volume of distribution — all 5 extracted parameters describe Phenytoin, not fosphenytoin; the covariate scenarios were not simulated (+2 more).

<div class="pk-model-meta" hidden drug="Fosphenytoin" model-id="Fosphenytoin_Tanaka2013_reference" status="model_quarantined" stale="false" population="pediatric patients, adult patients, and healthy volunteers" measured-compound="Phenytoin" parameterization="mechanistic" topology="1C"></div>

## Citation
Tanaka J, Kasai H, Shimizu K, Shimasaki S, Kumagai Y. Population pharmacokinetics of phenytoin after intravenous administration of fosphenytoin sodium in pediatric patients, adult patients, and healthy volunteers. European journal of clinical pharmacology 69(3):489-497 (2013).
  ·  DOI: [10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8)

## Population and dosing

**Population:** pediatric patients, adult patients, and healthy volunteers · condition healthy and epileptic/neurosurgical patients · age group mixed.

**Dosed compound ≠ measured compound:** dosed Fosphenytoin, measured Phenytoin.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h)a | CL | 1.61 | L/h | 0.194 (None% RSE) |
| V2 (L)a | V2 | 20.8 | L | 0.161 (None% RSE) |
| Q (L/h) | Q | 53.0 | L/h |  |
| V3 (L)a | V3 | 26.0 | L | 0.0430 (None% RSE) |
| K12 (1/h) | k12 | 5.02 | 1/h | 0.106 (None% RSE) |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for fosphenytoin's volume of distribution — all 5 extracted parameters describe Phenytoin, not fosphenytoin; the covariate scenarios were not simulated (+2 more).**

The model was built, but fosphenytoin's volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — Phenytoin: CL 1.61 L/h, V2 20.8 L, Q 53 L/h, V3 26 L, k12 5.02 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Fosphenytoin, the second reading fosphenytoin sodium; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q22` · CL | 1.61 | L/h | 4.472e-07 | m3/s | l/h | llm_confirmed (0.6) | Tab3:row2:col2 | 0.194 (None% RSE) |
| V2 (L)a | `Q64` · V2 | 20.8 | L | 0.0208 | m3 | l | llm_confirmed (0.6) | Tab3:row4:col2 | 0.161 (None% RSE) |
| Q (L/h) | `Q30` · Q | 53.0 | L/h | 1.472e-05 | m3/s | l/h | exact (1) | Tab3:row5:col2 |  |
| V3 (L)a | `Q77` · V3 | 26.0 | L | 0.026 | m3 | l | llm_confirmed (0.6) | Tab3:row6:col2 | 0.0430 (None% RSE) |
| K12 (1/h) | `Q301` · k12 | 5.02 | 1/h | 0.001394 | 1/s | 1/h | exact (1) | Tab3:row8:col2 | 0.106 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'ΘWT (CL)' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('ΘWT (CL)', value '0.569') — already have one for this compound
- dropped duplicate Q77 ('ΘWT (V3)', value '0.584') — already have one for this compound
- covariate category for V2 from footnote/prose kept as documentation only (['Tab3:footnote'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Phenytoin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- molar mass: none found for 'Phenytoin' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Phenytoin', not fosphenytoin — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 3
- toxin: the located table(s) gave no kinetic value — 14 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[cl (l/h)a]` | 1.61 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl (l/h)a]` |  | 1.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | 5.02 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` |  | 5.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 53.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` |  | 53.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2 (l)a]` | 20.8 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2 (l)a]` |  | 20.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3 (l)a]` | 26.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3 (l)a]` |  | 26.0 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Fosphenytoin | fosphenytoin sodium | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row5:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Tab3:row8:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row4:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab3:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.61 | ['Tab3:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.61 L/h | ['Tab3:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 20.8 L | ['Tab3:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['k12'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfosphenytoin%5D%20Fosphenytoin_Tanaka2013_reference&body=Drug%3A%20fosphenytoin%0ARecord%3A%20Fosphenytoin_Tanaka2013_reference%0APaper%3A%20Tanaka_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fosphenytoin/Fosphenytoin_Tanaka2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 13:45 UTC</sub>
