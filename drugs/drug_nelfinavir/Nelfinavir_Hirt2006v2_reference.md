<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;nelfinavir&quot;,&quot;href&quot;:&quot;drugs/drug_nelfinavir/&quot;},{&quot;label&quot;:&quot;Hirt_2006_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nelfinavir — `Nelfinavir_Hirt2006v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The nelfinavir parent–metabolite record was quarantined because bioavailability, clearance and absorption lag time had no extracted value and library placeholders were used instead, while the structure also mismatched the abstract-only source.

<div class="pk-model-meta" hidden drug="nelfinavir" model-id="Nelfinavir_Hirt2006v2_reference" status="model_quarantined" stale="false" population="children treated with nelfinavir" measured-compound="nelfinavir" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Hirt D, Urien S, Jullien V, Firtion G, Rey E, Pons G et al. Age-related effects on nelfinavir and M8 pharmacokinetics: a population study with 182 children. Antimicrobial agents and chemotherapy 50(3):910–916 (2006).
  ·  DOI: [10.1128/AAC.50.3.910-916.2006](https://doi.org/10.1128/AAC.50.3.910-916.2006)

## Population and dosing

**Population:** children treated with nelfinavir · condition HIV infection · age group mixed · n = 182.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| nelfinavir total clearance | CLnorm | 0.93 | liters/h/kg |
| volume of distribution | V | 6.9 | liters/kg |
| absorption rate | kabs | 0.5 | h(-1) |
| formation clearance fraction to hydroxy-tert-butylamide (M8) | fm | 0.025 | M8 |
| M8 elimination rate | kel | 1.88 | h(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The nelfinavir parent–metabolite record was quarantined because bioavailability, clearance and absorption lag time had no extracted value and library placeholders were used instead, while the structure also mismatched the abstract-only source.**

The paper (Hirt_2006_2, abstract-only) reports nelfinavir CLnorm 0.93 L/h/kg, V 6.9 L/kg, kabs 0.5 h⁻¹, M8 formation fraction fm 0.025 and M8 kel 1.88 h⁻¹, but no values for F, Cl or Tlag, so defaults stood in for these parameters. The topology check expected a parent–metabolite structure but obtained a one-compartment enteral model, and the deviations check returned 'defaulted_parameters: not acceptable'. The metabolite M8 is formed from nelfinavir at the central site with no compartment count given (n_cmt 0). Extracted — nelfinavir: CLnorm 0.93 liters/h/kg, V 6.9 liters/kg, kabs 0.5 h(-1); M8 (hydroxy-tert-butylamide): fm 0.025 M8, kel 1.88 h(-1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nelfinavir, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| nelfinavir total clearance | `Q354` · CLnorm | 0.93 | liters/h/kg | 1.808e-05 | m3/s | l/(h·kg) | llm_corrected (0.6) | Hirt_2006_2:abstract |
| volume of distribution | `Q61` · V | 6.9 | liters/kg | 0.483 | m3 | l/kg | exact (1) | Hirt_2006_2:abstract |
| absorption rate | `Q49` · kabs | 0.5 | h(-1) | 0.0001389 | 1/s | 1/h | exact (1) | Hirt_2006_2:abstract |
| formation clearance fraction to hydroxy-tert-butylamide (M8) | `Q45` · fm | 0.025 | M8 |  |  | m8 | exact (1) | Hirt_2006_2:abstract |
| M8 elimination rate | `Q47` · kel | 1.88 | h(-1) | 0.0005222 | 1/s | 1/h | exact (1) | Hirt_2006_2:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'M8' (fm)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nelfinavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 5/5 row label(s) assigned, 5 linked by role; re-tagged nelfinavir→parent ×3, nelfinavir→M8 (hydroxy-tert-butylamide) ×2
- molar mass: no plausible PubChem entry for 'M8 (hydroxy-tert-butylamide)' ('Nelfinavir hydroxyl-t- butylamide') — left in mass units
- molar mass: none found for 'M8 (hydroxy-tert-butylamide)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hirt_2006_2_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate]` | 0.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate]` |  | 0.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance fraction to hydroxy-tert-butylamide]` |  | 0.025 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance fraction to hydroxy-tert-butylamide]` | 0.025 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[m8 elimination rate]` |  | 1.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[m8 elimination rate]` | 1.88 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[nelfinavir total clearance]` | 0.93 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[nelfinavir total clearance]` |  | 0.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 6.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 6.9 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nelfinavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nelfinavir | unknown | mismatch |

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
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Hirt_2006_2:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Hirt_2006_2:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hirt_2006_2:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hirt_2006_2:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 483 L | ['Hirt_2006_2:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnelfinavir%5D%20Nelfinavir_Hirt2006v2_reference&body=Drug%3A%20nelfinavir%0ARecord%3A%20Nelfinavir_Hirt2006v2_reference%0APaper%3A%20Hirt_2006_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nelfinavir/Nelfinavir_Hirt2006v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:20 UTC</sub>
