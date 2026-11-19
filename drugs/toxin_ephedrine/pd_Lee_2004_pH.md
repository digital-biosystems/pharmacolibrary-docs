<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ephedrine&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/&quot;},{&quot;label&quot;:&quot;Lee_2004 \u00b7 PD umbilical arterial pH&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ephedrine_Dings2026_reference&quot;,&quot;label&quot;:&quot;Dings_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Dings2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ephedrine_Jeong2021_reference&quot;,&quot;label&quot;:&quot;Jeong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ephedrine_Tran2020_reference&quot;,&quot;label&quot;:&quot;Tran_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Tran2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# umbilical arterial pH — PD  <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Ephedrine (the dose) drives umbilical arterial pH (in pH): direct linear effect.

**Model:** Model available in **Models**; browser simulation unavailable.

> The paper does not explicitly describe the pharmacodynamic mechanism, though the record notes that ephedrine doses exhibit a linear inhibitory effect on umbilical arterial pH. No specific potency or rate parameters (such as IC50 or kout) are provided in the excerpts, with only a reported slope of -0.03 per mg.
>
> <sub>Source-based summary by qwen3.8-flash-next from the paper's text; not human-verified</sub>

- **paper:** `Lee_2004`
- **model family:** `linear`
- **driver:** `dose_only`
- **tier:** descriptive
- **effect:** inhibition/additive

## Citation
Lee A et al., A dose-response meta-analysis of prophy…, Anesthesia and analgesia (2004)
  ·  DOI: [10.1213/01.ANE.0000096183.49619.FC](https://doi.org/10.1213/01.ANE.0000096183.49619.FC)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | slope | `Q335` ·  | -0.03 |  | llm | Lee_2004:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Ephedrine_Lee2004_PD_ph` — linear, `response = E0 + slope*exposure`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| slope | -0.03 | -3e+04 (1)/(kg) |

Closed-form check points (response, SI): `at_0` = 0, `per_exposure_unit` = -3e+04

Deviations:

- `defaulted_parameters` — E0
- `pd_binding_slope_unit_assumed` — slope unit '(none)' read as response per mg

## Review

Verdict <span class="pk-badge pk-badge--orange">Needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | a line has no plateau to compare |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Lee2004_PD_ph/Ephedrine_Lee2004_PD_ph_modelica.zip" download>Ephedrine_Lee2004_PD_ph_modelica.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Lee2004_PD_ph/Ephedrine_Lee2004_PD_ph_matlab.zip" download>Ephedrine_Lee2004_PD_ph_matlab.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Lee2004_PD_ph/Ephedrine_Lee2004_PD_ph_sbml.zip" download>Ephedrine_Lee2004_PD_ph_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Lee2004_PD_ph/Ephedrine_Lee2004_PD_ph_cellml.zip" download>Ephedrine_Lee2004_PD_ph_cellml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary, model `Ephedrine_Lee2004_PD_ph`. <https://pharmacolibrary.github.io/#/drugs/toxin_ephedrine/pd_Lee_2004_pH>

```bibtex
@misc{pharmacolibrary_EphedrineLee2004PDph,
  title  = {{Pharmacolibrary model Ephedrine_Lee2004_PD_ph}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ephedrine/pd_Lee_2004_pH},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: this PD model family has no browser template yet. The **Models** tab provides the model in Modelica, SBML, CellML and MATLAB._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bephedrine%5D%20pd_Lee_2004_pH&body=Drug%3A%20ephedrine%0ARecord%3A%20pd_Lee_2004_pH%0APaper%3A%20Lee_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ephedrine/pd_Lee_2004_pH%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [Ephedrine](drugs/toxin_ephedrine/)</sub>
