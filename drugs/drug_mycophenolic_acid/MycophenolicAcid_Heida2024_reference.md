<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mycophenolic acid&quot;,&quot;href&quot;:&quot;drugs/drug_mycophenolic_acid/&quot;},{&quot;label&quot;:&quot;Heida_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MycophenolicAcid_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mycophenolic acid — `MycophenolicAcid_Heida2024_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Mycophenolic acid clearance, absorption rate constant, and lag time were missing, leaving them at library defaults and quarantining the model.

<div class="pk-model-meta" hidden drug="mycophenolic acid" model-id="MycophenolicAcid_Heida2024_reference" status="model_quarantined" stale="false" population="pediatric kidney transplant patients" measured-compound="mycophenolic acid" parameterization="apparent" topology="2C"></div>

## Citation
Heida A, Jager NGL, Aarnoutse RE, de Winter BCM, de Jong H, Keizer RJ et al. Model-informed dose optimization of mycophenolic acid in pediatric kidney transplant patients. European journal of clinical pharmacology 80(11):1761–1771 (2024).
  ·  DOI: [10.1007/s00228-024-03743-0](https://doi.org/10.1007/s00228-024-03743-0)

## Population and dosing

**Population:** pediatric kidney transplant patients · condition kidney transplant · age group mixed · n = 30.

**Dosing:** 600, 1200 mg m−2, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed mycophenolate mofetil, measured mycophenolic acid.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc/F | V1/F | 24.9 | L |
| Vp/F | V2/F | 1590 | L |
| Q/F | Q/F | 36.2 | L h−1 |
| Cl/F = θ1 * (body weight/70)0.75 *(Albumin/34) θ2 θ1 | Cl/F = θ1 * (body weight/70)0.75 *(Albumin/34) θ2 θ1 | 16.0 | L h−1 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Mycophenolic acid clearance, absorption rate constant, and lag time were missing, leaving them at library defaults and quarantining the model.**

The record lacks explicit values for mycophenolic acid clearance, absorption rate constant, and lag time, requiring library placeholders. Consequently, covariate scenarios for body weight and albumin were not exercised during simulation. Extracted — mycophenolic acid: V1/F 24.9 L, V2/F 1.59e+03 L, Q/F 36.2 L h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mycophenolate mofetil, the second reading mycophenolate mofetil (MMF) / Cellcept; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/F | `Q290` · V1/F | 24.9 | L | 0.0249 | m3 | L | exact (1) | Heida_2024:results_prose |
| Vp/F | `Q82` · V2/F | 1590 | L | 1.59 | m3 | L | exact (1) | Heida_2024:results_prose |
| Q/F | `Q69` · Q/F | 36.2 | L h−1 | 1.006e-05 | m3/s | L/h | exact (1) | Heida_2024:results_prose |
| Cl/F = θ1 * (body weight/70)0.75 *(Albumin/34) θ2 θ1 | `Q900` · Cl/F = θ1 * (body weight/70)0.75 *(Albumin/34) θ2 θ1 | 16.0 | L h−1 | 4.444e-06 | m3/s |  |  | Heida_2024:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| theta_q27_body_weight_power | Q900 |  |
| Cl/F = θ1 * (body weight/70)0.75 *(Albumin/34) θ2 θ1 | Q27 | boundary |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'θ1'
- dropped value-less row: 'Vc/F'
- dropped value-less row: 'Vp/F'
- dropped value-less row: 'Q/F'
- dropped value-less row: 'ktr'
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- salvaged Q27 ('Cl/F = θ1 * (body weight/70)0.75 *(Albumin/34) θ2 θ1'=16.0) from results prose — parameter table was unreadable
- salvaged Q290 ('Vc/F'=24.9) from results prose — parameter table was unreadable
- salvaged Q82 ('Vp/F'=1590) from results prose — parameter table was unreadable
- salvaged Q69 ('Q/F'=36.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mycophenolic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q27 (CL/F): Cl/F = θ1 * (body weight/70)^0.75 *(Albumin/34)^θ2
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'Cl/F = θ1 * (body weight/70)0.75 *(Albumin/34) θ2 θ1'; equation kept verbatim
- status held at "Needs review" — not promoted

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = '16.0 L h−1'
- unparsed cell Tab2:row4:col1 = '24.9 L'
- unparsed cell Tab2:row5:col1 = '1590 L'
- unparsed cell Tab2:row6:col1 = '36.2 L h−1'
- unparsed cell Tab2:row7:col1 = '1.48 h−1'
- LLM selected parameter table(s) 2
- captured model equation Cl/F = θ1 * (body weight/70)^0.75 *(Albumin/34)^θ2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f = θ1 * (body weight/70)0.75 *(albumin/34) θ2 θ1]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 36.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 36.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_body_weight_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_body_weight_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 24.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 24.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 1590 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` |  | 1590 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mycophenolate mofetil | mycophenolate mofetil (MMF) / Cellcept | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | mycophenolic acid | mycophenolic acid (MPA) | mismatch |

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
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 24.9 L | ['Heida_2024:results_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.59e+03 L | ['Heida_2024:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmycophenolic_acid%5D%20MycophenolicAcid_Heida2024_reference&body=Drug%3A%20mycophenolic_acid%0ARecord%3A%20MycophenolicAcid_Heida2024_reference%0APaper%3A%20Heida_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mycophenolic_acid/MycophenolicAcid_Heida2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:36 UTC</sub>
