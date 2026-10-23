<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;salicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_salicylic_acid/&quot;},{&quot;label&quot;:&quot;Koh_2025 \u00b7 PD thromboxane B2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SalicylicAcid_Mathurkar2018_reference&quot;,&quot;label&quot;:&quot;Mathurkar_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salicylic_acid/SalicylicAcid_Mathurkar2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# thromboxane B2 — PD  <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Acetylsalicylic acid (concentrations from this paper's PK model) drives thromboxane B2 (in μg/L): indirect response — drug inhibits the production of thromboxane B2.

**Model:** Model available in **Models**; browser simulation unavailable.

> Acetylsalicylic acid (ASA) plasma concentrations inhibit the production of serum thromboxane B2 (TXB2) via an indirect response model with an Emax function, where the baseline TXB2 (R0) is 26.4 μg/L and the elimination rate constant (kout) is 0.023 h−1. The maximum inhibition (Imax) is 1, with the half-maximal inhibitory concentration (IC50) fixed at 0.0036 mol/L and the Hill coefficient (gamma) fixed at 1.
>
> <sub>Source-based summary by qwen3.8:27b-mtp-q8_0 from the paper's text; not human-verified</sub>

- **paper:** `Koh_2025`
- **model family:** `indirect_response_i`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Koh J et al., Population Pharmacokinetic and Pharmaco…, Drug design, development an… (2025)
  ·  DOI: [10.2147/DDDT.S533428](https://doi.org/10.2147/DDDT.S533428)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | R0 | `Q324` ·  | 26.4 | μg/L | llm | Koh_2025:pdv3 |
| PD (effect) | kout | `Q328` ·  | 0.023 | h−1 | llm | Koh_2025:pdv3 |
| PD (effect) | Imax | `Q323` ·  | 1 |  | llm | Koh_2025:pdv3 |
| PD (effect) | IC50 | `Q322` ·  | 0.0036 | mol/L | llm | Koh_2025:pdv3 |
| PD (effect) | Gamma | `Q325` ·  | 1 |  | llm | Koh_2025:pdv3 |
| variability | Additive error (TXB2) | `Q315` ·  | 2.58 |  | llm | Koh_2025:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`SalicylicAcid_Koh2025_PD_txb2` — turnover (indirect response type I), `response = E0*(1 - Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 26.4 μg/L | 2.64e-05 kg/m3 |
| Emax | 1 | — |
| EC50 | 0.0036 mol/L | 3.6 mol/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 2.64e-05, `at_EC50` = 1.32e-05, `at_inf` = 0

## Review

Verdict <span class="pk-badge pk-badge--green">Reproduces paper</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | the response falls, as IDR-I predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `ollama:qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `einfracz:gpt-oss-120b` | secondary_empty | 0.0 (0/9 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `einfracz:gpt-oss-120b` | `driver_compound` | acetylsalicylic acid |  | mismatch |
| `einfracz:gpt-oss-120b` | `effect_direction` | inhibition |  | mismatch |
| `einfracz:gpt-oss-120b` | `effect_form` | proportional |  | mismatch |
| `einfracz:gpt-oss-120b` | `model_family` | indirect_response_i |  | mismatch |
| `einfracz:gpt-oss-120b` | `parameters[Q322]` | 0.0036 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q323]` | 1 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q324]` | 26.4 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q325]` | 1 |  | only_one_extracted |
| `einfracz:gpt-oss-120b` | `parameters[Q328]` | 0.023 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salicylic_acid/SalicylicAcid_Koh2025_PD_txb2/SalicylicAcid_Koh2025_PD_txb2_modelica.zip" download>SalicylicAcid_Koh2025_PD_txb2_modelica.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salicylic_acid/SalicylicAcid_Koh2025_PD_txb2/SalicylicAcid_Koh2025_PD_txb2_matlab.zip" download>SalicylicAcid_Koh2025_PD_txb2_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salicylic_acid/SalicylicAcid_Koh2025_PD_txb2/SalicylicAcid_Koh2025_PD_txb2_sbml.zip" download>SalicylicAcid_Koh2025_PD_txb2_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salicylic_acid/SalicylicAcid_Koh2025_PD_txb2/SalicylicAcid_Koh2025_PD_txb2_cellml.zip" download>SalicylicAcid_Koh2025_PD_txb2_cellml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary v26.09, model `SalicylicAcid_Koh2025_PD_txb2`. <https://pharmacolibrary.github.io/#/drugs/drug_salicylic_acid/SalicylicAcid_Koh2025_PD_txb2>

```bibtex
@misc{pharmacolibrary_SalicylicAcidKoh2025PDtxb2,
  title  = {{Pharmacolibrary model SalicylicAcid_Koh2025_PD_txb2}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_salicylic_acid/SalicylicAcid_Koh2025_PD_txb2},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalicylic_acid%5D%20pd_Koh_2025_TXB2&body=Drug%3A%20salicylic_acid%0ARecord%3A%20pd_Koh_2025_TXB2%0APaper%3A%20Koh_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salicylic_acid/pd_Koh_2025_TXB2%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>← back to [salicylic acid](drugs/drug_salicylic_acid/)</sub>
