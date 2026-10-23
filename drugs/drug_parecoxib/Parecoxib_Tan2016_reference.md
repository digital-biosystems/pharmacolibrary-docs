<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;parecoxib&quot;,&quot;href&quot;:&quot;drugs/drug_parecoxib/&quot;},{&quot;label&quot;:&quot;Tan_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# parecoxib — `Parecoxib_Tan2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Parecoxib's clearance lacked a specific value, and the metabolite valdecoxib was incorrectly assigned to a one-compartment structure.

<div class="pk-model-meta" hidden drug="parecoxib" model-id="Parecoxib_Tan2016_reference" status="model_quarantined" stale="false" population="children undergoing tonsillectomy and adenoidectomy" measured-compound="parecoxib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Tan L, Taylor E, Hannam JA, Salkeld L, Salman S, Anderson BJ. Pharmacokinetics and analgesic effectiveness of intravenous parecoxib for tonsillectomy ± adenoidectomy. Paediatric anaesthesia 26(12):1126–1135 (2016).
  ·  DOI: [10.1111/pan.13009](https://doi.org/10.1111/pan.13009)

## Population and dosing

**Population:** children undergoing tonsillectomy and adenoidectomy · condition tonsillectomy and adenoidectomy · age group child · n = 112.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLPARECOXIB | CLnorm | 19.1 | L·h-1 ·70 kg-1 |
| V1PARECOXIB | V1 | 4.2 | L·70 kg-1 |
| Q2PARECOXIB | Q | 6.29 | L·h-1 ·70 kg-1 |
| V2PARECOXIB | V2 | 130 | L·70 kg-1 |
| Q3PARECOXIB | Q2 | 6.02 | L·h-1 ·70 kg-1 |
| V3PARECOXIB | V3 | 2.03 | L·70 kg-1 |
| CLVALDECOXIB | CL | 9.53 | L·h-1 ·70 kg-1 |
| VVALDECOXIB | V | 51 | L·70 kg-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Parecoxib's clearance lacked a specific value, and the metabolite valdecoxib was incorrectly assigned to a one-compartment structure.**

The record lists a total clearance of 19.1 L·h-1 ·70 kg-1 for parecoxib, yet no explicit estimate was extracted for the model. The model structure is one-compartment, contradicting the three-compartment parameters provided for parecoxib and the metabolite valdecoxib. Because the record was built from the abstract alone, these summary statistics stood in for a fitted model. Extracted — parecoxib: CLnorm 19.1 L·h-1 ·70 kg-1, V1 4.2 L·70 kg-1, Q 6.29 L·h-1 ·70 kg-1, V2 130 L·70 kg-1, Q2 6.02 L·h-1 ·70 kg-1, V3 2.03 L·70 kg-1; valdecoxib: CL 9.53 L·h-1 ·70 kg-1, V 51 L·70 kg-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has parecoxib, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLPARECOXIB | `Q354` · CLnorm | 19.1 | L·h-1 ·70 kg-1 | 0.0003714 | m3/s | l/(h·kg) | llm (0.6) | Tan_2016:abstract |
| V1PARECOXIB | `Q63` · V1 | 4.2 | L·70 kg-1 | 0.294 | m3 | l/kg | exact (1) | Tan_2016:abstract |
| Q2PARECOXIB | `Q30` · Q | 6.29 | L·h-1 ·70 kg-1 | 0.0001223 | m3/s | l/(h·kg) | exact (1) | Tan_2016:abstract |
| V2PARECOXIB | `Q64` · V2 | 130 | L·70 kg-1 | 9.1 | m3 | l/kg | exact (1) | Tan_2016:abstract |
| Q3PARECOXIB | `Q99` · Q2 | 6.02 | L·h-1 ·70 kg-1 | 0.0001171 | m3/s | l/(h·kg) | exact (1) | Tan_2016:abstract |
| V3PARECOXIB | `Q77` · V3 | 2.03 | L·70 kg-1 | 0.1421 | m3 | l/kg | exact (1) | Tan_2016:abstract |
| CLVALDECOXIB | `Q22` · CL | 9.53 | L·h-1 ·70 kg-1 | 0.0001853 | m3/s | l/(h·kg) | exact (1) | Tan_2016:abstract |
| VVALDECOXIB | `Q61` · V | 51 | L·70 kg-1 | 3.57 | m3 | l/kg | exact (1) | Tan_2016:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- metabolite volume: 'VVALDECOXIB' Q63→Q61 for valdecoxib — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=parecoxib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [1]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 8 linked by role; re-tagged parecoxib→parent ×6, parecoxib→valdecoxib ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Tan_2016_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clparecoxib]` | 19.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clparecoxib]` |  | 19.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2parecoxib]` | 6.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2parecoxib]` |  | 6.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3parecoxib]` | 6.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3parecoxib]` |  | 6.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1parecoxib]` | 4.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1parecoxib]` |  | 4.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2parecoxib]` | 130 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2parecoxib]` |  | 130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3parecoxib]` | 2.03 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3parecoxib]` |  | 2.03 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | parecoxib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | parecoxib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tan_2016:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tan_2016:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tan_2016:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tan_2016:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tan_2016:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tan_2016:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tan_2016:abstract'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Tan_2016:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.53 | ['Tan_2016:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 667 L/h | ['Tan_2016:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.57e+03 L | ['Tan_2016:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 294 L | ['Tan_2016:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.1e+03 L | ['Tan_2016:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_matlab.zip" download>Parecoxib_Tan2016_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_matlab_simbio.zip" download>Parecoxib_Tan2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_sbml.zip" download>Parecoxib_Tan2016_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_parecoxib/Parecoxib_Tan2016_reference/Parecoxib_Tan2016_reference_cellml.zip" download>Parecoxib_Tan2016_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Tan L, Taylor E, Hannam JA, Salkeld L, Salman S, Anderson BJ. Pharmacokinetics and analgesic effectiveness of intravenous parecoxib for tonsillectomy ± adenoidectomy. Paediatric anaesthesia 26(12):1126–1135 (2016). [doi:10.1111/pan.13009](https://doi.org/10.1111/pan.13009)

**This record:** Pharmacolibrary v26.09, model `Parecoxib_Tan2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_parecoxib/Parecoxib_Tan2016_reference>

```bibtex
@misc{pharmacolibrary_ParecoxibTan2016reference,
  title  = {{Pharmacolibrary model Parecoxib_Tan2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_parecoxib/Parecoxib_Tan2016_reference},
  note   = {Parameters from doi:10.1111/pan.13009},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bparecoxib%5D%20Parecoxib_Tan2016_reference&body=Drug%3A%20parecoxib%0ARecord%3A%20Parecoxib_Tan2016_reference%0APaper%3A%20Tan_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_parecoxib/Parecoxib_Tan2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 01:45 UTC</sub>
