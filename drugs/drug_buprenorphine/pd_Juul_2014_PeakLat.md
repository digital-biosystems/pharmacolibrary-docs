<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;buprenorphine&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/&quot;},{&quot;label&quot;:&quot;Juul_2014 \u00b7 PD PeakLat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Kraft2018_reference&quot;,&quot;label&quot;:&quot;Kraft_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Kraft2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_i_v&quot;,&quot;label&quot;:&quot;Robertson_2005_i_v&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_i_v.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_otm&quot;,&quot;label&quot;:&quot;Robertson_2005_otm&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# PeakLat — PD  <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.51). Primary extraction retained.">cross-check: disputed</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Record summary

**As extracted:** Buprenorphine (concentrations from the PK model of Castro-Cuellar_2023) drives PeakLat (in ms): direct log-linear effect.

**Model:** Model available in **Models**; browser simulation unavailable.

> Buprenorphine concentration inhibits the N2 peak latency (PeakLat) through a direct transformed log-linear model with a baseline of 138 ms and a drug slope of 0.266. The paper states that an indirect log-linear model did not converge and Emax models were not selected due to instability, leaving no reported potency or rate values (e.g., EC50, ke0).
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Juul_2014`
- **model family:** `log_linear`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** inhibition/additive

## Citation
Juul RV et al., Pharmacodynamic modelling of placebo an…, Basic & clinical pharmacolo… (2014)
  ·  DOI: [10.1111/bcpt.12217](https://doi.org/10.1111/bcpt.12217)

## Parameters
| role | label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|---|
| PD (effect) | Drug slope | `Q335` ·  | 0.266 | -2 | llm | Juul_2014:pdv3 |
| PD (effect) | Baseline | `Q324` ·  | 138 | ms | llm | Juul_2014:pdv3 |
| variability | x BSV (Drug slope) | `Q312` ·  | 1.136 |  | llm | Juul_2014:pdv3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


## Exposure-response model

`Buprenorphine_Juul2014_PD_peaklat` — log_linear, `response = E0 + slope*log(exposure)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 138 ms | 0.138 s |
| slope | 0.266 -2 | — |

Closed-form check points (response, SI): `at_1` = 0.138, `per_e_fold` = 0.266

## Review

Verdict <span class="pk-badge pk-badge--green">Reproduces paper</span>

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | a line has no plateau to compare |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | pass | nothing defaulted |


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.6:27b-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.51 (25/49 fields) | 24 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | log_linear | indirect_response_i | mismatch |
| `gpt-oss:120b` | `parameters[Q317]` |  | 1.80 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` |  | 0.855 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` |  | 3.54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` |  | 0.00488 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` |  | 49.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` |  | 36.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | 98.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | 66.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | 55.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` |  | 8.82 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` |  | 98.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` |  | 66.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` |  | 9.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` |  | 55.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` |  | 3.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q56]` |  | 3.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` |  | 36.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` |  | 51.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` |  | 22.0 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Juul2014_PD_peaklat/Buprenorphine_Juul2014_PD_peaklat_modelica.zip" download>Buprenorphine_Juul2014_PD_peaklat_modelica.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Juul2014_PD_peaklat/Buprenorphine_Juul2014_PD_peaklat_matlab.zip" download>Buprenorphine_Juul2014_PD_peaklat_matlab.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Juul2014_PD_peaklat/Buprenorphine_Juul2014_PD_peaklat_sbml.zip" download>Buprenorphine_Juul2014_PD_peaklat_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Juul2014_PD_peaklat/Buprenorphine_Juul2014_PD_peaklat_cellml.zip" download>Buprenorphine_Juul2014_PD_peaklat_cellml.zip</a> <span class="pk-size">(2.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**This record:** Pharmacolibrary v26.09, model `Buprenorphine_Juul2014_PD_peaklat`. <https://pharmacolibrary.github.io/#/drugs/drug_buprenorphine/Buprenorphine_Juul2014_PD_peaklat>

```bibtex
@misc{pharmacolibrary_BuprenorphineJuul2014PDpeaklat,
  title  = {{Pharmacolibrary model Buprenorphine_Juul2014_PD_peaklat}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_buprenorphine/Buprenorphine_Juul2014_PD_peaklat},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [buprenorphine](drugs/drug_buprenorphine/)</sub>
