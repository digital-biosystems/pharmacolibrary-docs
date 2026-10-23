<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/&quot;},{&quot;label&quot;:&quot;Kim_2017 \u00b7 PD SBP&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fimasartan_Kim2014v2_estimate&quot;,&quot;label&quot;:&quot;Kim_2014_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# SBP — PD  <span class="pk-badge pk-badge--green">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 1.0). Primary extraction retained.">cross-check: partial</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Fimasartan drives the response (the model form was not identified).

**Model:** Model available in **Models**; browser simulation unavailable.

> The model describes the inhibitory effect of fimasartan plasma concentrations on systolic blood pressure using an indirect response turnover model with a direct sigmoidal inhibitory function on the production term, rather than an effect compartment or transduction model. Key parameters include a maximum inhibition of 21.3%, an EC50 of 9.19 ng/mL for the combined population (with 2.28 ng/mL for healthy subjects), a zero-order input rate (Kin) of 90.3 mmHg/h, and a first-order loss rate (Kout) of 0.69 h–1.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Kim_2017`
- **model family:** ``
- **driver:** `not captured`
- **effect:** /

## Citation
Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017)
  ·  DOI: [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43)

## Parameters
_No resolved parameters._


## Exposure-response model

`Fimasartan_Kim2017_PD_sbp` — turnover (indirect response type IV), `response = E0/(1 + Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 131 mmHg | — |
| Emax | 21.3 | — |
| EC50 | 2.28 ng/mL | 2.28e-06 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 131, `at_EC50` = 11.24, `at_inf` = 5.874

Deviations:

- `defaulted_parameters` — gamma
- `pd_binding_emax_not_a_fraction` — type I needs Imax ≤ 1 but the record has 21.3; bound as the reciprocal stimulation form (IV) the paper fitted

## Review

Verdict <span class="pk-badge pk-badge--green">Reproduces with caveats</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as IDR-IV predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | advisory | only convention defaults (gamma = 1) |

Advisory:

- defaulted: gamma (convention)


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | secondary_empty | 1.0 (4/4 fields) | none |

_All readers agree on the compared fields of this PD record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2017_PD_sbp/Fimasartan_Kim2017_PD_sbp_modelica.zip" download>Fimasartan_Kim2017_PD_sbp_modelica.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2017_PD_sbp/Fimasartan_Kim2017_PD_sbp_matlab.zip" download>Fimasartan_Kim2017_PD_sbp_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2017_PD_sbp/Fimasartan_Kim2017_PD_sbp_sbml.zip" download>Fimasartan_Kim2017_PD_sbp_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2017_PD_sbp/Fimasartan_Kim2017_PD_sbp_cellml.zip" download>Fimasartan_Kim2017_PD_sbp_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary v26.09, model `Fimasartan_Kim2017_PD_sbp`. <https://pharmacolibrary.github.io/#/drugs/drug_fimasartan/Fimasartan_Kim2017_PD_sbp>

```bibtex
@misc{pharmacolibrary_FimasartanKim2017PDsbp,
  title  = {{Pharmacolibrary model Fimasartan_Kim2017_PD_sbp}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fimasartan/Fimasartan_Kim2017_PD_sbp},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfimasartan%5D%20pd_Kim_2017_SBP&body=Drug%3A%20fimasartan%0ARecord%3A%20pd_Kim_2017_SBP%0APaper%3A%20Kim_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fimasartan/pd_Kim_2017_SBP%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [fimasartan](drugs/drug_fimasartan/)</sub>
