<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Diphenhydramine&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/&quot;},{&quot;label&quot;:&quot;Blyden_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diphenhydramine_Gyawali2019_reference&quot;,&quot;label&quot;:&quot;Gyawali_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Gyawali2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Wasfi2003_reference&quot;,&quot;label&quot;:&quot;Wasfi_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Wasfi2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Yoo1990_reference&quot;,&quot;label&quot;:&quot;Yoo_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Yoo1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_control&quot;,&quot;label&quot;:&quot;Kawase_2021_control&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_control.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_lps&quot;,&quot;label&quot;:&quot;Kawase_2021_lps&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_lps.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Simons1990_reference&quot;,&quot;label&quot;:&quot;Simons_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Simons1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Xie2016_reference&quot;,&quot;label&quot;:&quot;Xie_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Diphenhydramine — `Diphenhydramine_Blyden1986_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="Diphenhydramine" model-id="Diphenhydramine_Blyden1986_reference" status="not_simulated" stale="false" population="healthy volunteers" measured-compound="Diphenhydramine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Blyden GT, Greenblatt DJ, Scavone JM, Shader RI. Pharmacokinetics of diphenhydramine and a demethylated metabolite following intravenous and oral administration. Journal of clinical pharmacology 26(7):529–533 (1986).
  ·  DOI: [10.1002/j.1552-4604.1986.tb02946.x](https://doi.org/10.1002/j.1552-4604.1986.tb02946.x)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 10.

**Dosed compound ≠ measured compound:** dosed Diphenhydramine hydrochloride, measured Diphenhydramine.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution | V | 4.5 | L/kg |
| elimination half-life | t1/2z | 8.4 | hours |
| clearance | CL | 6.2 | mL/min/kg |
| Systemic availability | Fab | 72 |  |
| r | equation variable | 0.79 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Diphenhydramine hydrochloride, the second reading diphenhydramine; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution | `Q61` · V | 4.5 | L/kg | 0.315 | m3 | l/kg | exact (1) | Blyden_1986:abstract |
| elimination half-life | `Q57` · t1/2z | 8.4 | hours | 3.024e+04 | s | h | half_life_rule (0.95) | Blyden_1986:abstract |
| clearance | `Q22` · CL | 6.2 | mL/min/kg | 7.233e-06 | m3/s | ml/(min·kg) | exact (1) | Blyden_1986:abstract |
| Systemic availability | `Q40` · Fab | 72 |  |  |  |  | exact (1) | Blyden_1986:abstract |
| r | `Q900` · equation variable | 0.79 |  | 0.79 |  |  | llm (0.6) | Blyden_1986:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- 'predicted estimate (Systemic availability)' → Q40: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q40 ('predicted estimate (Systemic availability)', value 71) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Diphenhydramine
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 0/6 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Desmethyldiphenhydramine (DMDP)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Blyden_1986_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['diphenhydramine', 'desmethyldiphenhydramine (dmdp)', 'demethylation']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[clearance]` | 6.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` |  | 6.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` | 8.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` |  | 8.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[predicted estimate]` |  | 71 | only_one_extracted |
| `gpt-oss:120b` | `parameters[r]` | 0.79 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic availability]` | 72 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic availability]` |  | 72 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | 4.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` |  | 4.5 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Diphenhydramine hydrochloride | diphenhydramine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Blyden_1986:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Blyden_1986:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Blyden_1986:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.2 | ['Blyden_1986:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 26 L/h | ['Blyden_1986:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 315 L | ['Blyden_1986:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference/Diphenhydramine_Blyden1986_reference_modelica.zip" download>Diphenhydramine_Blyden1986_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference/Diphenhydramine_Blyden1986_reference_matlab.zip" download>Diphenhydramine_Blyden1986_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference/Diphenhydramine_Blyden1986_reference_matlab_simbio.zip" download>Diphenhydramine_Blyden1986_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference/Diphenhydramine_Blyden1986_reference_sbml.zip" download>Diphenhydramine_Blyden1986_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference/Diphenhydramine_Blyden1986_reference_cellml.zip" download>Diphenhydramine_Blyden1986_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Blyden GT, Greenblatt DJ, Scavone JM, Shader RI. Pharmacokinetics of diphenhydramine and a demethylated metabolite following intravenous and oral administration. Journal of clinical pharmacology 26(7):529–533 (1986). [doi:10.1002/j.1552-4604.1986.tb02946.x](https://doi.org/10.1002/j.1552-4604.1986.tb02946.x)

**This record:** Pharmacolibrary, model `Diphenhydramine_Blyden1986_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference>

```bibtex
@misc{pharmacolibrary_DiphenhydramineBlyden1986reference,
  title  = {{Pharmacolibrary model Diphenhydramine_Blyden1986_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference},
  note   = {Parameters from doi:10.1002/j.1552-4604.1986.tb02946.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiphenhydramine%5D%20Diphenhydramine_Blyden1986_reference&body=Drug%3A%20diphenhydramine%0ARecord%3A%20Diphenhydramine_Blyden1986_reference%0APaper%3A%20Blyden_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_diphenhydramine/Diphenhydramine_Blyden1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 02:54 UTC</sub>
