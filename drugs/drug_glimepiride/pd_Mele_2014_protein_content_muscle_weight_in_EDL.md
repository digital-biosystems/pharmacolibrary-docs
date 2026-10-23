<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glimepiride&quot;,&quot;href&quot;:&quot;drugs/drug_glimepiride/&quot;},{&quot;label&quot;:&quot;Mele_2014 \u00b7 PD protein content/muscle weight in EDL&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glimepiride_Yoo2020v2_reference&quot;,&quot;label&quot;:&quot;Yoo_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# protein content/muscle weight in EDL — PD  <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Record summary

**As extracted:** Glimepiride (concentrations from the PK model of Yoo_2020_2) drives protein content/muscle weight in EDL (in %): direct sigmoid Emax (Hill) effect.

**Model:** Model available in **Models**; browser simulation unavailable.

- **paper:** `Mele_2014`
- **model family:** `sigmoid_emax`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014)
  ·  DOI: [10.1002/prp2.28](https://doi.org/10.1002/prp2.28)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Emax (%) | `Q323` ·  | -28.47 | % | llm | Mele_2014:pdv3 |
| PD (effect) | Emin (%) | `Q324` ·  | -1.44 | % | llm | Mele_2014:pdv3 |
| PD (effect) | EC50 (10−6 mol/L) | `Q322` ·  | 202.1 | 10−6 mol/L | llm | Mele_2014:pdv3 |
| PD (effect) | Slope factor n | `Q325` ·  | 0.45 |  | llm | Mele_2014:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | -1.44 % | -0.0144 1 |
| Emax | -28.47 % | -0.2847 1 |
| EC50 | 202.1 10−6 mol/L | — |
| gamma | 0.45 | — |

Closed-form check points (response, SI): `at_0` = -0.0144, `at_EC50` = -0.1568, `at_inf` = -0.2991

Deviations:

- `pd_binding_imax_as_negative_emax` — Imax (Q323) enters SigmoidEmaxSweep as −Emax
- `pd_binding_exposure_unit_unresolved` — '10−6 mol/L' — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--orange">Needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |

Advisory:

- exposure unit not resolved to SI — the x axis is in the paper's unit


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_glimepiride/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_modelica.zip" download>Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_modelica.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_glimepiride/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_matlab.zip" download>Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_glimepiride/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_sbml.zip" download>Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_glimepiride/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_cellml.zip" download>Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl_cellml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary v26.09, model `Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl`. <https://pharmacolibrary.github.io/#/drugs/drug_glimepiride/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl>

```bibtex
@misc{pharmacolibrary_GlimepirideMele2014PDproteincontentmuscleweightinedl,
  title  = {{Pharmacolibrary model Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_glimepiride/Glimepiride_Mele2014_PD_protein_content_muscle_weight_in_edl},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglimepiride%5D%20pd_Mele_2014_protein_content_muscle_weight_in_EDL&body=Drug%3A%20glimepiride%0ARecord%3A%20pd_Mele_2014_protein_content_muscle_weight_in_EDL%0APaper%3A%20Mele_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glimepiride/pd_Mele_2014_protein_content_muscle_weight_in_EDL%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [glimepiride](drugs/drug_glimepiride/)</sub>
