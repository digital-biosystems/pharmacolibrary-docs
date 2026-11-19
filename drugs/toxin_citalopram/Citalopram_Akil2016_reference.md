<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Citalopram&quot;,&quot;href&quot;:&quot;drugs/toxin_citalopram/&quot;},{&quot;label&quot;:&quot;Akil_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Masullo2006_reference&quot;,&quot;label&quot;:&quot;Masullo_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citalopram/Citalopram_Masullo2006_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_KraghSrensen1981_reference&quot;,&quot;label&quot;:&quot;Kragh-S\u00f8rensen_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_citalopram/Citalopram_KraghSrensen1981_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Citalopram — `Citalopram_Akil2016_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Citalopram's elimination clearance lacked an estimated value, forcing a library placeholder, while covariate effects were extracted but never simulated in the reference individual.

<div class="pk-model-meta" hidden drug="Citalopram" model-id="Citalopram_Akil2016_reference" status="model_quarantined" stale="false" population="Alzheimer’s disease patients with agitation" measured-compound="R- and S-citalopram, R- and S-desmethylcitalopram" parameterization="apparent" topology="general_linear"></div>

## Citation
Akil A, Bies RR, Pollock BG, Avramopoulos D, Devanand DP, Mintzer JE et al. A population pharmacokinetic model for R- and S-citalopram and desmethylcitalopram in Alzheimer's disease patients with agitation. Journal of pharmacokinetics and pharmacodynamics 43(1):99-109 (2016).
  ·  DOI: [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6)

## Population and dosing

**Population:** Alzheimer’s disease patients with agitation · condition Alzheimer’s disease patients with agitation · age group elderly.

**Dosing:** 10, 20, 30 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Citalopram, measured R- and S-citalopram, R- and S-desmethylcitalopram.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 2 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V/F, L | V/F | 1390 | L |
| Ka, h−1 | kabs | 1 | h−1 |
| CLRm/F, L/h | CL/F | 24.4 | L/h |
| CLSm/F, L/h | CL/F | 38.8 | L/h |
| theta_q27_category | theta_q27_category | 9.05 |  |
| theta_q27_em | theta_q27_em | 22.1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Citalopram's elimination clearance lacked an estimated value, forcing a library placeholder, while covariate effects were extracted but never simulated in the reference individual.**

No elimination clearance value was extracted for citalopram itself, so a library placeholder was substituted for the missing parameter. Additionally, the record defines covariate effects for R- and S-citalopram, but the model was simulated only for the reference individual, leaving these covariate scenarios unexercised. Extracted — R- and S-citalopram, R- and S-desmethylcitalopram: V/F 1.39e+03 L, kabs 1 h−1; R-desmethylcitalopram: CL/F 24.4 L/h; S-desmethylcitalopram: CL/F 38.8 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V/F, L | `Q76` · V/F | 1390 | L | 1.39 | m3 | l | exact (1) | Tab3:row4:col1, Tab3:row16:col1 |
| Ka, h−1 | `Q49` · kabs | 1 | h−1 | 0.0002778 | 1/s | 1/h | exact (1) | Tab3:row5:col1, Tab3:row17:col1 |
| CLRm/F, L/h | `Q27` · CL/F | 24.4 | L/h | 6.778e-06 | m3/s | l/h | exact (1) | Tab3:row6:col1 |
| CLSm/F, L/h | `Q27` · CL/F | 38.8 | L/h | 1.078e-05 | m3/s | l/h | exact (1) | Tab3:row18:col1 |
| theta_q27_category | `Q900` · theta_q27_category | 9.05 |  |  |  |  |  | Tab3:row3:col1 |
| theta_q27_em | `Q900` · theta_q27_em | 22.1 |  |  |  |  |  | Tab3:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'CLRp/F for female, L/h'; source reconciliation required
- table representations disagree for 'V/F, L'; source reconciliation required
- table representations disagree for 'Ka, h−1'; source reconciliation required
- table representations disagree for 'CLRm/F, L/h'; source reconciliation required
- table representations disagree for 'ωCLp, %'; source reconciliation required
- table representations disagree for 'ωV, %'; source reconciliation required
- table representations disagree for 'ωCLm, %'; source reconciliation required
- table representations disagree for 'σ, ng/ml (additive)'; source reconciliation required
- table representations disagree for 'σ, % (proportional)'; source reconciliation required
- table representations disagree for 'CLSp/F for EM/RM, L/h'; source reconciliation required
- table representations disagree for 'CLSm/F, L/h'; source reconciliation required
- table representations disagree for 'ωCLp,V, %'; source reconciliation required
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=R- and S-citalopram, R- and S-desmethylcitalopram
- topology: 2 first-order transfer(s) across 6 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- pharmacogenetic covariate 'theta_q27_em' (em) — PGx domain
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CLRp/F for female, L/h, CLSp/F for EM/RM, L/h
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 8 linked by role; re-tagged parent→R-citalopram ×3, parent→R- and S-citalopram, R- and S-desmethylcitalopram ×9, parent→R-desmethylcitalopram ×1, parent→S-citalopram ×1, parent→S-desmethylcitalopram ×1
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab3: ragged_grid
- table Tab3: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row18:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row5:col1', 'Tab3:row17:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab3:row4:col1', 'Tab3:row16:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.4 L/h | ['Tab3:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 38.8 L/h | ['Tab3:row18:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.39e+03 L | ['Tab3:row4:col1', 'Tab3:row16:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['CL/F', 'CL/F'] |
| T3_shared_parameters |  | pass | 6 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Akil2016_reference/Citalopram_Akil2016_reference_matlab.zip" download>Citalopram_Akil2016_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Akil2016_reference/Citalopram_Akil2016_reference_matlab_simbio.zip" download>Citalopram_Akil2016_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Akil2016_reference/Citalopram_Akil2016_reference_sbml.zip" download>Citalopram_Akil2016_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_citalopram/Citalopram_Akil2016_reference/Citalopram_Akil2016_reference_cellml.zip" download>Citalopram_Akil2016_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Akil A, Bies RR, Pollock BG, Avramopoulos D, Devanand DP, Mintzer JE et al. A population pharmacokinetic model for R- and S-citalopram and desmethylcitalopram in Alzheimer's disease patients with agitation. Journal of pharmacokinetics and pharmacodynamics 43(1):99-109 (2016). [doi:10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6)

**This record:** Pharmacolibrary, model `Citalopram_Akil2016_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_citalopram/Citalopram_Akil2016_reference>

```bibtex
@misc{pharmacolibrary_CitalopramAkil2016reference,
  title  = {{Pharmacolibrary model Citalopram_Akil2016_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_citalopram/Citalopram_Akil2016_reference},
  note   = {Parameters from doi:10.1007/s10928-015-9457-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitalopram%5D%20Citalopram_Akil2016_reference&body=Drug%3A%20citalopram%0ARecord%3A%20Citalopram_Akil2016_reference%0APaper%3A%20Akil_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_citalopram/Citalopram_Akil2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 14:48 UTC</sub>
