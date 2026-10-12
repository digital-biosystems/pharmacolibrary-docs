<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;opium alkaloids with morphine&quot;,&quot;href&quot;:&quot;drugs/drug_opium_alkaloids_with_morphine/&quot;},{&quot;label&quot;:&quot;Simons_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# opium alkaloids with morphine — `OpiumAlkaloidsWithMorphine_Simons2023_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.056). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Oliceridine's three-compartment parameters were mapped to morphine, leaving morphine's clearance and volume of distribution at placeholder defaults.**

The record defines a parent-metabolite structure for opium alkaloids with morphine, yet all seven extracted pharmacokinetic parameters are explicitly assigned to oliceridine. Consequently, morphine's clearance and volume of distribution lacked specific values, causing the model builder to default these critical parameters. Additionally, the record defines a covariate effect for oliceridine clearance, but the simulation only ran the reference individual without exercising these covariate scenarios. Extracted — oliceridine: V1 1.1 L/70 kg, V2 5.6 L/70 kg, V3 45.3 L/70 kg, CL 33.1 L/h, Q 22.8 L/h, Q2 27.6 L/h, D1 1 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has oliceridine or morphine, the second reading morphine; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `oliceridine or morphine`, measured `oliceridine, morphine, morphine-6-glucuronide`.

## Citation
Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023)
  ·  DOI: [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473)

<div class="pk-model-meta" hidden drug="opium alkaloids with morphine" model-id="OpiumAlkaloidsWithMorphine_Simons2023_reference" status="model_quarantined" stale="false" population="older volunteers" measured-compound="oliceridine, morphine, morphine-6-glucuronide" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V 1 , l/70 kg | `Q63` · V1 | 1.1 | L/70 kg | 0.0011 | L | not captured | exact (1.0) | tab_0:row3:col1, tab_0:row13:col1 | — | not captured |
| V 2 , l/70 kg | `Q64` · V2 | 5.6 | L/70 kg | 0.0056 | L | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row14:col1 | — | not captured |
| V 3 , l/70 kg | `Q77` · V3 | 45.3 | L/70 kg | 0.0453 | L | not captured | exact (1.0) | tab_0:row5:col1, tab_0:row15:col1 | — | not captured |
| CL 1 , l/h at 70 kg | `Q22` · CL | 33.1 | L/h | 9.194444444444445e-06 | L/h | not captured | exact (1.0) | tab_0:row6:col1, tab_0:row16:col1 | — | 0.02 (0.01% RSE) |
| CL 2 , l/h at 70 kg | `Q30` · Q | 22.8 | L/h | 6.333333333333333e-06 | L/h | not captured | exact (1.0) | tab_0:row7:col1, tab_0:row17:col1 | — | not captured |
| CL 3 , l/h at 70 kg | `Q99` · Q2 | 27.6 | L/h | 7.666666666666667e-06 | L/h | not captured | exact (1.0) | tab_0:row8:col1, tab_0:row18:col1 | — | not captured |
| D 1 , min | `Q310` · D1 | 1 | min | 60.0 | [min] | not captured | space_fold (0.95) | tab_0:row9:col1, tab_0:row19:col1 | — | 1.1 (0.5% RSE) |
| theta_cl_pm | `Q900` · theta_cl_pm | 17.8 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iov: 'V 1 , l/70 kg' routed out of structural estimates ('interoccasion variability')
- table section iov: 'V 3 , l/70 kg' routed out of structural estimates ('interoccasion variability')
- table section iiv: 'CL 1 , l/h at 70 kg' routed out of structural estimates ('Between-Subject variability')
- table section iov: 'CL 1 , l/h at 70 kg' routed out of structural estimates ('interoccasion variability')
- table section iiv: 'CL 2 , l/h at 70 kg' routed out of structural estimates ('Between-Subject variability')
- table section iov: 'CL 2 , l/h at 70 kg' routed out of structural estimates ('interoccasion variability')
- table section iiv: 'CL 3 , l/h at 70 kg' routed out of structural estimates ('Between-Subject variability')
- table section iov: 'D 1 , min' routed out of structural estimates ('interoccasion variability')
- table section iiv: 'V 1 , l/70 kg' routed out of structural estimates ('Between-Subject variability')
- table section iiv: 'V 3 , l/70 kg' routed out of structural estimates ('Between-Subject variability')
- table section iiv: 'D 1 , min' routed out of structural estimates ('Between-Subject variability')
- implicit units: 'V 1 , l/70 kg' → L/70 kg (from the paper text: "Table entry displays 'V 1 , l/70 kg = 1.1'")
- implicit units: 'V 2 , l/70 kg' → L/70 kg (from the paper text: "Table entry displays 'V 2 , l/70 kg = 5.6'")
- implicit units: 'V 3 , l/70 kg' → L/70 kg (from the paper text: "Table entry displays 'V 3 , l/70 kg = 45.3'")
- implicit units: 'CL 1 , l/h at 70 kg' → L/h (from the paper text: "Table entry displays 'CL 1 , l/h at 70 kg = 33.1'")
- implicit units: 'CL 2 , l/h at 70 kg' → L/h (from the paper text: "Table entry displays 'CL 2 , l/h at 70 kg = 22.8'")
- implicit units: 'CL 3 , l/h at 70 kg' → L/h (from the paper text: "Table entry displays 'CL 3 , l/h at 70 kg = 27.6'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oliceridine, morphine, morphine-6-glucuronide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 23 linked by role; re-tagged parent→oliceridine ×27
- molar mass: no plausible PubChem entry for 'oliceridine, morphine, morphine-6-glucuronide' ('oliceridine, morphine, morphine-6-glucuronide') — left in mass units
- molar mass: none of 2 PubChem candidate(s) is 'morphine' (LLM) — left in mass units
- molar mass: none found for 'morphine' — its concentrations stay mass-only
- molar mass: none found for 'oliceridine, morphine, morphine-6-glucuronide' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'oliceridine, morphine, morphine-6-glucuronide', not opium_alkaloids_with_morphine — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.056 (1/18 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['morphine', 'morphine-6-glucuronide', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl 1 , l/h at 70 kg]` | not captured | 33.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl 1 , l/h at 70 kg]` | 33.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl 2 , l/h at 70 kg]` | 22.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl 3 , l/h at 70 kg]` | 27.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[d 1]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d 1]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_pm]` | not captured | 17.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_pm]` | 17.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1 , l/70 kg]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1 , l/70 kg]` | 1.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2 , l/70 kg]` | not captured | 5.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2 , l/70 kg]` | 5.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 3 , l/70 kg]` | not captured | 45.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 3 , l/70 kg]` | 45.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | oliceridine or morphine | morphine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | oliceridine, morphine, morphine-6-glucuronide | morphine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row16:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row7:col1', 'tab_0:row17:col1'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['tab_0:row9:col1', 'tab_0:row19:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row13:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row14:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row15:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row8:col1', 'tab_0:row18:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 33.1 | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row16:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 33.1 L/h | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row16:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.1 L | not captured | not captured | ['tab_0:row3:col1', 'tab_0:row13:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.6 L | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row14:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['Q2'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 44 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 214 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_opium_alkaloids_with_morphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Simons_2023` / `Simons_2023::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_opium_alkaloids_with_morphine/models/modelica/_needs_review/OpiumAlkaloidsWithMorphine_Simons2023_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_opium_alkaloids_with_morphine/models/modelica/_needs_review/OpiumAlkaloidsWithMorphine_Simons2023_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Simons2023_reference/OpiumAlkaloidsWithMorphine_Simons2023_reference_matlab.zip" download>OpiumAlkaloidsWithMorphine_Simons2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Simons2023_reference/OpiumAlkaloidsWithMorphine_Simons2023_reference_matlab_simbio.zip" download>OpiumAlkaloidsWithMorphine_Simons2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Simons2023_reference/OpiumAlkaloidsWithMorphine_Simons2023_reference_sbml.zip" download>OpiumAlkaloidsWithMorphine_Simons2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_opium_alkaloids_with_morphine/OpiumAlkaloidsWithMorphine_Simons2023_reference/OpiumAlkaloidsWithMorphine_Simons2023_reference_cellml.zip" download>OpiumAlkaloidsWithMorphine_Simons2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:00 UTC</sub>
