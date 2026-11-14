<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Prednisone&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/&quot;},{&quot;label&quot;:&quot;Bouazza_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prednisone_Bianconi2022_reference&quot;,&quot;label&quot;:&quot;Bianconi_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/Prednisone_Bianconi2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_Bouazza2025_reference&quot;,&quot;label&quot;:&quot;Bouazza_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/Prednisone_Bouazza2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Prednisone_Shemesh2020_reference&quot;,&quot;label&quot;:&quot;Shemesh_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/Prednisone_Shemesh2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_de2023_reference&quot;,&quot;label&quot;:&quot;de_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/Prednisone_de2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_Mangin2020_reference&quot;,&quot;label&quot;:&quot;Mangin_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/Prednisone_Mangin2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_Rocci1982_reference&quot;,&quot;label&quot;:&quot;Rocci_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/Prednisone_Rocci1982_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisone_Stock2017_reference&quot;,&quot;label&quot;:&quot;Stock_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prednisone/Prednisone_Stock2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Prednisone — `Prednisone_Bouazza2025_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="Prednisone" model-id="Prednisone_Bouazza2025_reference" status="accepted_with_caveats" stale="false" population="patients with systemic lupus erythematosus (adults and children)" measured-compound="Prednisolone" parameterization="apparent" topology="1C"></div>

## Citation
Bouazza N, Semeraro M, Lui G, Froelicher-Bournaud L, Choupeaux L, Treluyer JM et al. Population pharmacokinetic modelling of prednisolone in systemic lupus erythematosus patients: Analysis of exposure and disease activity. British journal of clinical pharmacology 91(10):2854-2864 (2025).
  ·  DOI: [10.1002/bcp.70103](https://doi.org/10.1002/bcp.70103)

## Population and dosing

**Population:** patients with systemic lupus erythematosus (adults and children) · condition systemic lupus erythematosus · age group mixed · n = ,.

**Dosed compound ≠ measured compound:** dosed Prednisone, measured Prednisolone.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_prednisone/Prednisone_Bouazza2025_reference/Prednisone_Bouazza2025_reference.svg" alt="Prednisone_Bouazza2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Tlag (h) | tlag | 0.17 | h | 2 |
| ka (h−1) | kabs | 1.19 | h−1 | 1 |
| F | Fab | 1 |  |  |
| theta_fab_dose | theta_fab_dose | -0.28 |  | 2 |
| CLU/F (L.h−1.70 kg−1) | CLm/F | 54.3 | L.h−1.70 kg−1 | 7 |
| VU/F (L.70 kg−1) | V/F | 235 | L.70 kg−1 | 8 |
| Bmax | Bmax | 6.77 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is prednisone's own; they describe Prednisolone.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Tlag (h) | `Q83` · tlag | 0.17 | h | 612 | s | h | 2 | exact (1) | bcp70103-tbl-0002:row1:col2 |
| ka (h−1) | `Q49` · kabs | 1.19 | h−1 | 0.0003306 | 1/s | 1/h | 1 | exact (1) | bcp70103-tbl-0002:row2:col2 |
| F | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | bcp70103-tbl-0002:row3:col1, bcp70103-tbl-0002:row3:col2, bcp70103-tbl-0002:footnote |
| theta_fab_dose | `Q900` · theta_fab_dose | -0.28 |  |  |  |  | 2 |  | bcp70103-tbl-0002:row4:col2, bcp70103-tbl-0002:footnote |
| CLU/F (L.h−1.70 kg−1) | `Q351` · CLm/F | 54.3 | L.h−1.70 kg−1 | 1.508e-05 | m3/s | l/(h·70kg) | 7 | exact (1) | bcp70103-tbl-0002:row5:col1, bcp70103-tbl-0002:row5:col2 |
| VU/F (L.70 kg−1) | `Q76` · V/F | 235 | L.70 kg−1 | 0.235 | m3 | l/70kg | 8 | exact (1) | bcp70103-tbl-0002:row6:col1, bcp70103-tbl-0002:row6:col2 |
| Bmax | `Q332` · Bmax | 6.77 |  | 6.77 |  |  |  | exact (1) | bcp70103-tbl-0002:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- 'βFdose' is a β covariate effect on F, not Q40 (llm_confirmed link set aside)
- covariate level 'βFdose' → Q900:theta_fab_dose = -0.28 (linear_fractional on Q40)
- dropped PD-category row 'K1 (L/nmol)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp70103-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Kns' — extend the ontology if this is a real PK parameter (source ['bcp70103-tbl-0002:row9:col2'])
- dropped value-less row: '% rse'
- dropped value-less row: 'ω'
- dropped value-less row: 'Dose'
- dropped value-less row: 'CLU'
- dropped value-less row: 'VU'
- metabolite prednisolone: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Prednisolone
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'VU/F (L.70 kg−1)' is the general volume)
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 6 linked by role; re-tagged Prednisolone→parent ×1
- review gap-fill skipped: this record measures 'Prednisolone', not prednisone — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['bcp70103-tbl-0002:row5:col1', 'bcp70103-tbl-0002:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcp70103-tbl-0002:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['bcp70103-tbl-0002:row6:col1', 'bcp70103-tbl-0002:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['bcp70103-tbl-0002:row1:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 235 L | ['bcp70103-tbl-0002:row6:col1', 'bcp70103-tbl-0002:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=Prednisolone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_prednisone/Prednisone_Bouazza2025_reference/Prednisone_Bouazza2025_reference_modelica.zip" download>Prednisone_Bouazza2025_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_prednisone/Prednisone_Bouazza2025_reference/Prednisone_Bouazza2025_reference_fmi.zip" download>Prednisone_Bouazza2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3604 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 612 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.508e-05 | m3/s |
| input | model | `VdPerKg` | 0.003357 | m3/kg |
| input | model | `ka` | 0.0003306 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bouazza N, Semeraro M, Lui G, Froelicher-Bournaud L, Choupeaux L, Treluyer JM et al. Population pharmacokinetic modelling of prednisolone in systemic lupus erythematosus patients: Analysis of exposure and disease activity. British journal of clinical pharmacology 91(10):2854-2864 (2025). [doi:10.1002/bcp.70103](https://doi.org/10.1002/bcp.70103)

**This record:** Pharmacolibrary, model `Prednisone_Bouazza2025_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_prednisone/Prednisone_Bouazza2025_reference>

```bibtex
@misc{pharmacolibrary_PrednisoneBouazza2025reference,
  title  = {{Pharmacolibrary model Prednisone_Bouazza2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_prednisone/Prednisone_Bouazza2025_reference},
  note   = {Parameters from doi:10.1002/bcp.70103},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 1.19 /h, lag 10.2 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 10 mg oral (H02AB07) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_prednisone/Prednisone_Bouazza2025_reference/Prednisone_Bouazza2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_prednisone/Prednisone_Bouazza2025_reference/Prednisone_Bouazza2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Prednisone_Bouazza2025_reference_params.json` · controls `Prednisone_Bouazza2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprednisone%5D%20Prednisone_Bouazza2025_reference&body=Drug%3A%20prednisone%0ARecord%3A%20Prednisone_Bouazza2025_reference%0APaper%3A%20Bouazza_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_prednisone/Prednisone_Bouazza2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 00:02 UTC</sub>
