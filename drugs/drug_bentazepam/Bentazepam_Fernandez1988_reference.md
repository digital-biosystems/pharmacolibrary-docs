<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;bentazepam&quot;,&quot;href&quot;:&quot;drugs/drug_bentazepam/&quot;},{&quot;label&quot;:&quot;Fernandez_1988 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bentazepam — `Bentazepam_Fernandez1988_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The bentazepam record was quarantined because bioavailability, clearance, absorption lag time, and the intercompartmental rate constants k12 and k21 had no extracted values and library placeholders stood in for them.

<div class="pk-model-meta" hidden drug="bentazepam" model-id="Bentazepam_Fernandez1988_reference" status="model_quarantined" stale="false" population="patients receiving multiple oral doses of bentazepam" measured-compound="bentazepam" parameterization="mechanistic" topology="2C"></div>

## Citation
Fernandez Lastra C, Gonzalez Lopez F, Dominguez-Gil A, Mariño EL. Discrimination of kinetic models in heteroscedastic parametric estimation of bentazepam following multiple dosing. International journal of clinical pharmacology, therapy, and toxicology 26(7):335–338 (1988).

## Population and dosing

**Population:** patients receiving multiple oral doses of bentazepam · age group adult · n = 9.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 2.024 | h-1 |
| Vd | V | 2.198 | l/kg |
| Ke | kel | 0.13 | h-1 |
| Vc | V1 | 2.049 | l/kg |
| K12 | k12 | 0.042 | h-1 |
| K21 | k21 | 0.103 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The bentazepam record was quarantined because bioavailability, clearance, absorption lag time, and the intercompartmental rate constants k12 and k21 had no extracted values and library placeholders stood in for them.**

Although the abstract of Fernandez_1988 reports bentazepam values for absorption rate constant (2.024 h-1), volumes of distribution (2.198 and 2.049 l/kg), elimination rate constant (0.13 h-1) and the transfer rate constants k12 (0.042 h-1) and k21 (0.103 h-1), the record's bioavailability, clearance, absorption lag time, k12 and k21 had no value, so placeholders stood in instead of explicit estimates. The record was built from the paper's abstract alone, meaning summary statistics stood in for a fitted model. The failed deviations check returned 'defaulted_parameters: not acceptable', and the model was held back rather than published with invented numbers. Extracted — bentazepam: kabs 2.02 h-1, V 2.2 l/kg, kel 0.13 h-1, V1 2.05 l/kg, k12 0.042 h-1, k21 0.103 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bentazepam, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 2.024 | h-1 | 0.0005622 | 1/s | 1/h | exact (1) | Fernandez_1988:abstract, Fernandez_1988:abstract |
| Vd | `Q61` · V | 2.198 | l/kg | 0.1539 | m3 | l/kg | exact (1) | Fernandez_1988:abstract |
| Ke | `Q47` · kel | 0.13 | h-1 | 3.611e-05 | 1/s | 1/h | exact (1) | Fernandez_1988:abstract |
| Vc | `Q63` · V1 | 2.049 | l/kg | 0.1434 | m3 | l/kg | exact (1) | Fernandez_1988:abstract |
| K12 | `Q301` · k12 | 0.042 | h-1 | 1.167e-05 | 1/s | 1/h | exact (1) | Fernandez_1988:abstract |
| K21 | `Q302` · k21 | 0.103 | h-1 | 2.861e-05 | 1/s | 1/h | exact (1) | Fernandez_1988:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q47 ('K10', value 0.154) — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (Vd); Q63 (Vc)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bentazepam
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fernandez_1988_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k12]` | 0.042 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 0.042 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.103 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` |  | 0.103 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 2.024 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 2.024 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` | 0.13 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` |  | 0.130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 2.049 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 2.049 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 2.198 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  | 2.198 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | bentazepam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bentazepam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Fernandez_1988:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Fernandez_1988:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Fernandez_1988:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fernandez_1988:abstract', 'Fernandez_1988:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Fernandez_1988:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Fernandez_1988:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 154 L | ['Fernandez_1988:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 143 L | ['Fernandez_1988:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbentazepam%5D%20Bentazepam_Fernandez1988_reference&body=Drug%3A%20bentazepam%0ARecord%3A%20Bentazepam_Fernandez1988_reference%0APaper%3A%20Fernandez_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bentazepam/Bentazepam_Fernandez1988_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 18:18 UTC</sub>
