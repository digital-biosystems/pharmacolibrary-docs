<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Nicotinic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_nicotinic_acid/&quot;},{&quot;label&quot;:&quot;Ahlstr\u00f6m_2011 \u00b7 PD non-esterified fatty acids&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NicotinicAcid_Stack2014_reference&quot;,&quot;label&quot;:&quot;Stack_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nicotinic_acid/NicotinicAcid_Stack2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NicotinicAcid_Garrett1985_reference&quot;,&quot;label&quot;:&quot;Garrett_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nicotinic_acid/NicotinicAcid_Garrett1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# non-esterified fatty acids — PD  <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Record summary

**As extracted:** Nicotinic acid (concentrations from this paper's PK model) drives non-esterified fatty acids (in mmol L−1): delayed effect through transit (transduction) compartments.

**Model:** Model available in **Models**; browser simulation unavailable.

> Plasma nicotinic acid concentrations inhibit the formation of non-esterified fatty acids (NEFA) via a feedback model with transit compartments, where an IC50 of 0.0446 μmol L−1 and sigmoidicity of 1.48 characterize the inhibitory potency. Key turnover parameters include a fractional turnover rate of 0.411 L mmol−1 min−1, a moderator turnover rate of 0.0267 min−1, and an NEFA turnover rate of 0.0650 mmol2 L−2 min−1.
>
> <sub>Source-based summary by qwen3.8-flash-next from the paper's text; not human-verified</sub>

- **paper:** `Ahlström_2011`
- **model family:** `transduction`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Ahlström C et al., Feedback modeling of non-esterified fat…, Journal of pharmacokinetics… (2011)
  ·  DOI: [10.1007/s10928-010-9172-2](https://doi.org/10.1007/s10928-010-9172-2)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Baseline NEFA concentration | `Q324` ·  | 0.606 | mmol L−1 | llm | Ahlström_2011:pdv3 |
| PD (effect) | Fractional turnover rate | `Q328` ·  | 0.411 | L mmol−1 min−1 | llm | Ahlström_2011:pdv3 |
| PD (effect) | Turnover rate of moderator | `Q337` ·  | 0.0267 | min−1 | llm | Ahlström_2011:pdv3 |
| PD (effect) | Sigmoidicity factor | `Q325` ·  | 1.48 |  | llm | Ahlström_2011:pdv3 |
| PD (effect) | Potency | `Q322` ·  | 0.0446 | μmol L−1 | llm | Ahlström_2011:pdv3 |
| — | Amplification factor | `Q100` ·  | 1.21 |  | nil | Ahlström_2011:pdv3 |
| — | Formation of NEFA in capillaries | `Q100` ·  | 0.0318 | mmol L−1 min−1 | nil | Ahlström_2011:pdv3 |
| PD (effect) | Turnover rate of NEFA | `Q327` ·  | 0.0650 | mmol2 L−2 min−1 | llm | Ahlström_2011:pdv3 |
| PD (effect) | Efficacy | `Q323` ·  | 1 |  | llm | Ahlström_2011:pdv3 |
| variability | IIV on k out | `Q312` ·  | 48.2 | % | llm | Ahlström_2011:pdv3 |
| variability | IIV on IC 50 | `Q312` ·  | 101 | % | llm | Ahlström_2011:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`NicotinicAcid_Ahlstrm2011_PD_nefa` — turnover (indirect response type I), `response = E0*(1 - Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0.606 mmol L−1 | 0.606 mol/m3 |
| Emax | 1 | — |
| EC50 | 0.0446 μmol L−1 | 4.46e-05 mol/m3 |
| gamma | 1.48 | — |

Closed-form check points (response, SI): `at_0` = 0.606, `at_EC50` = 0.303, `at_inf` = 0

Deviations:

- `pd_binding_family_inferred` — the record's model family is transduction; read from the parameters: kin, kout and Imax 1.0 (≤ 1, an inhibition fraction) — indirect response I

## Review

Verdict <span class="pk-badge pk-badge--blue">Simulated</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as IDR-I predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_nicotinic_acid/NicotinicAcid_Ahlstrm2011_PD_nefa/NicotinicAcid_Ahlstrm2011_PD_nefa_modelica.zip" download>NicotinicAcid_Ahlstrm2011_PD_nefa_modelica.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_nicotinic_acid/NicotinicAcid_Ahlstrm2011_PD_nefa/NicotinicAcid_Ahlstrm2011_PD_nefa_matlab.zip" download>NicotinicAcid_Ahlstrm2011_PD_nefa_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_nicotinic_acid/NicotinicAcid_Ahlstrm2011_PD_nefa/NicotinicAcid_Ahlstrm2011_PD_nefa_sbml.zip" download>NicotinicAcid_Ahlstrm2011_PD_nefa_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_nicotinic_acid/NicotinicAcid_Ahlstrm2011_PD_nefa/NicotinicAcid_Ahlstrm2011_PD_nefa_cellml.zip" download>NicotinicAcid_Ahlstrm2011_PD_nefa_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary, model `NicotinicAcid_Ahlstrm2011_PD_nefa`. <https://pharmacolibrary.github.io/#/drugs/toxin_nicotinic_acid/pd_Ahlstr_m_2011_NEFA>

```bibtex
@misc{pharmacolibrary_NicotinicAcidAhlstrm2011PDnefa,
  title  = {{Pharmacolibrary model NicotinicAcid_Ahlstrm2011_PD_nefa}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_nicotinic_acid/pd_Ahlstr_m_2011_NEFA},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: this PD model family has no browser template yet. The **Models** tab provides the model in Modelica, SBML, CellML and MATLAB._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnicotinic_acid%5D%20pd_Ahlstr_m_2011_NEFA&body=Drug%3A%20nicotinic_acid%0ARecord%3A%20pd_Ahlstr_m_2011_NEFA%0APaper%3A%20Ahlstr%C3%B6m_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nicotinic_acid/pd_Ahlstr_m_2011_NEFA%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [Nicotinic acid](drugs/toxin_nicotinic_acid/)</sub>
