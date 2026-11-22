<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Zeranol&quot;,&quot;href&quot;:&quot;drugs/toxin_zeranol/&quot;},{&quot;label&quot;:&quot;Qu_2024 \u00b7 mass_value_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zeranol_Qu2024_mass_value_mg&quot;,&quot;label&quot;:&quot;Qu_2024_mass_value_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Zeranol_Qu2024_value&quot;,&quot;label&quot;:&quot;Qu_2024_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zeranol/Zeranol_Qu2024_value.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zeranol — `Zeranol_Qu2024_mass_value_mg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 0.48, model 0.183).

<div class="pk-model-meta" hidden drug="Zeranol" model-id="Zeranol_Qu2024_mass_value_mg" status="needs_review" stale="false" population="female Dezhou donkeys" measured-compound="Zearalenone" parameterization="mechanistic" topology="1C"></div>

## Citation
Qu H, Zheng Y, Kang R, Feng Y, Li P, Wang Y et al. Toxicokinetics of Zearalenone following Oral Administration in Female Dezhou Donkeys. Toxins 16(1) (2024).
  ·  DOI: [10.3390/toxins16010051](https://doi.org/10.3390/toxins16010051)

## Population and dosing

**Population:** female Dezhou donkeys · condition acute dietary exposure · age group adult · n = 4.

**Dosing:** 140 mg, oral, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg/Zeranol_Qu2024_mass_value_mg.svg" alt="Zeranol_Qu2024_mass_value_mg diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ZEN excretion via feces | Ae | 1.61 | mg |
| Total ZEN excretion through feces (%) | fe | 2.50 | % |
| elimination of half-life | t1/2z | 1.63 | h |
| volume of distribution | V | 216.17 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 0.48, model 0.183).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. None of the extracted parameters is zeranol's own; they describe Zearalenone. Extracted — Zearalenone: Ae 1.61 mg, fe 2.5 %, t1/2z 1.63 h, V 216 L/kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ZEN excretion via feces | `Q91` · Ae | 1.61 | mg | 1.61e-06 | kg | mg | llm_corrected (0.6) | toxins-16-00051-t004:row2:col1 |
| Total ZEN excretion through feces (%) | `Q44` · fe | 2.50 | % | 0.025 |  | % | llm_confirmed (0.6) | toxins-16-00051-t004:row5:col1 |
| elimination of half-life | `Q57` · t1/2z | 1.63 | h | 5868 | s | h | half_life_rule (0.95) | Qu_2024:other_prose |
| volume of distribution | `Q61` · V | 216.17 | L/kg | 15.13 | m3 | L | exact (1) | Qu_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mass value (mg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'ZEN intake' — extend the ontology if this is a real PK parameter (source ['toxins-16-00051-t004:row1:col1'])
- dropped duplicate Q91 ('α-ZOL excretion via feces', value '2.96') — already have one for this compound
- dropped unlinked row (NIL): 'β-ZOL excretion via feces' — extend the ontology if this is a real PK parameter (source ['toxins-16-00051-t004:row4:col1'])
- dropped 'Absorption rate (%)' → Q49: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a rate — the row is a variability or a ratio, not the estimate
- dropped duplicate Q91 ('ZEN excretion via urine', value '1.31') — already have one for this compound
- dropped duplicate Q91 ('α-ZOL excretion via urine', value '2.11') — already have one for this compound
- dropped duplicate Q91 ('β-ZOL excretion via urine', value '3.06') — already have one for this compound
- unit_dimension_mismatch: 'Total ZEN excretion through urine (%)' → Q91 (unit 'dimensionless' vs ontology '[mass]') — route to review
- dropped duplicate Q91 ('Total ZEN excretion through urine (%)', value '2.11') — already have one for this compound
- salvaged Q57 ('elimination of half-life'=1.63) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution'=216.17) from results prose — parameter table was unreadable
- implicit units: 'volume of distribution' → L/kg (from the paper text: 'The volume of distribution (Vd) was up to 216.17 ± 58.71 L/kg.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Zearalenone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 5 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'mass value (mg)' subgroup of Qu_2024 (paper reports 2 populations: mass value (mg), value)
- review gap-fill skipped: this record measures 'Zearalenone', not zeranol — the review values are the parent's
- derived CL=6434.74 L/h from ln2/t½z × V = CL (Q57 × Q61); not separately reported

**Extraction notes:**
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q44 | pass | dimensionless |  | ['toxins-16-00051-t004:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Qu_2024:other_prose'] |
| C5_dimension_Q91 | pass | [mass] |  | ['toxins-16-00051-t004:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.51e+04 L | ['Qu_2024:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=Zearalenone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped |  | 8.932e-06 |  | non-numeric value |
| T1_t_half_beta | reference | pass | 1.63 | 1.6 | 0.9817 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 1.63 | 1.6 | 0.9817 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 1.63 | 1.6 | 0.9817 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.48 | 0.1833 | 0.3819 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.25 | 0.1833 | 0.7333 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.48 | 0.1833 | 0.3819 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg/Zeranol_Qu2024_mass_value_mg_modelica.zip" download>Zeranol_Qu2024_mass_value_mg_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg/Zeranol_Qu2024_mass_value_mg_fmi.zip" download>Zeranol_Qu2024_mass_value_mg_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3184 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00014 | kg |
| input | model | `Cl` | 0.001787 | m3/s |
| input | model | `VdPerKg` | 0.2162 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Qu H, Zheng Y, Kang R, Feng Y, Li P, Wang Y et al. Toxicokinetics of Zearalenone following Oral Administration in Female Dezhou Donkeys. Toxins 16(1) (2024). [doi:10.3390/toxins16010051](https://doi.org/10.3390/toxins16010051)

**This record:** Pharmacolibrary, model `Zeranol_Qu2024_mass_value_mg`. <https://pharmacolibrary.github.io/#/drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg>

```bibtex
@misc{pharmacolibrary_ZeranolQu2024massvaluemg,
  title  = {{Pharmacolibrary model Zeranol_Qu2024_mass_value_mg}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg},
  note   = {Parameters from doi:10.3390/toxins16010051},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 140 mg infusion over 10 min, single dose. Dose in the paper: 140 mg.

<dbs-fmusim paramsurl="drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg/Zeranol_Qu2024_mass_value_mg_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg/Zeranol_Qu2024_mass_value_mg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Zeranol_Qu2024_mass_value_mg_params.json` · controls `Zeranol_Qu2024_mass_value_mg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzeranol%5D%20Zeranol_Qu2024_mass_value_mg&body=Drug%3A%20zeranol%0ARecord%3A%20Zeranol_Qu2024_mass_value_mg%0APaper%3A%20Qu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zeranol/Zeranol_Qu2024_mass_value_mg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 06:35 UTC</sub>
