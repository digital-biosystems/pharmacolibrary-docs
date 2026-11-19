<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;Jang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Chen2021v2_reference&quot;,&quot;label&quot;:&quot;Chen_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Chen2021v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Rodrigues2017_reference&quot;,&quot;label&quot;:&quot;Rodrigues_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_final_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_final_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_initial_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_initial_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_initial_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxcarbazepine — `Oxcarbazepine_Jang2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for oxcarbazepine's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations.

<div class="pk-model-meta" hidden drug="Oxcarbazepine" model-id="Oxcarbazepine_Jang2021_reference" status="model_quarantined" stale="false" population="adult patients with epilepsy" measured-compound="MHD (monohydroxy derivative of oxcarbazepine)" parameterization="apparent" topology="1C"></div>

## Citation
Jang Y, Yoon S, Kim TJ, Lee S, Yu KS, Jang IJ et al. Population pharmacokinetic model development and its relationship with adverse events of oxcarbazepine in adult patients with epilepsy. Scientific reports 11(1):6370 (2021).
  ·  DOI: [10.1038/s41598-021-85920-0](https://doi.org/10.1038/s41598-021-85920-0)

## Population and dosing

**Population:** adult patients with epilepsy · condition epilepsy, chronic therapeutic oral dosing · age group adult · n = 487 (748 data points; 618 enrolled).

**Dosed compound ≠ measured compound:** dosed Oxcarbazepine, measured MHD (monohydroxy derivative of oxcarbazepine).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 0 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for oxcarbazepine's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations.**

The model was built, but oxcarbazepine's clearance, volume of distribution, absorption rate constant and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. No parameter values were extracted.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
| CL/F | Q27 | exact |
| Vd/F | Q76 | exact |

## Departures & gaps

**Interpretation flags:**
- $THETA(6) has no $PK binding — index may be misassigned
- $THETA(7) has no $PK binding — index may be misassigned
- control_stream ADVAN2 TRANS2: topology=1C, parameterization=apparent (clearance)
- theta_crosscheck: table present but its labels did not align to bound THETAs (skipped)
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — only the metabolite is modelled — no parent compartment
- bound model equation to Q27 (CL/F): CL/F = θ1 * (WT/66)^θ2 ; apparent clearance (L h-1)
- bound model equation to Q76 (V/F): Vd/F = θ3 * (WT/66)^θ4; apparent volume of distribution (L)
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- Q76 (V/F) is equation-defined: value moved to equation-variable 'Vd/F'; equation kept verbatim
- row roles (LLM): model_class=compartmental; 0/18 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'MHD (monohydroxy derivative)' — its concentrations stay mass-only
- molar mass: none found for 'MHD (monohydroxy derivative of oxcarbazepine)' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- LLM region Jang_2021:other_prose: no JSON records returned
- captured model equation CL/F = θ1 * (WT/66)^θ2 ; apparent clearance (L h-1)
- captured model equation Vd/F = θ3 * (WT/66)^θ4; apparent volume of distribution (L)

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 2 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | pass |  |
| C7_apparent_coherence | pass |  |
| C8_topology | pass |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmin_ss | reference | skipped | 12.27 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.643 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 19.15 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.855 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.056 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.013 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 1.079 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 1.051 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.056 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 1.079 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.013 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxcarbazepine%5D%20Oxcarbazepine_Jang2021_reference&body=Drug%3A%20oxcarbazepine%0ARecord%3A%20Oxcarbazepine_Jang2021_reference%0APaper%3A%20Jang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxcarbazepine/Oxcarbazepine_Jang2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:12 UTC</sub>
