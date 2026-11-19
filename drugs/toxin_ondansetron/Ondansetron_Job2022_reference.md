<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ondansetron&quot;,&quot;href&quot;:&quot;drugs/toxin_ondansetron/&quot;},{&quot;label&quot;:&quot;Job_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Cai2025_reference&quot;,&quot;label&quot;:&quot;Cai_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ondansetron/Ondansetron_Cai2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Job2022_reference&quot;,&quot;label&quot;:&quot;Job_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ondansetron/Ondansetron_Job2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ondansetron — `Ondansetron_Job2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Ae  has no unit.

<div class="pk-model-meta" hidden drug="Ondansetron" model-id="Ondansetron_Job2022_reference" status="needs_review" stale="false" population="postpartum women" measured-compound="Ondansetron" parameterization="mechanistic" topology="retention"></div>

## Citation
Job KM, Dallmann A, Parry S, Saade G, Haas DM, Hughes B et al. Development of a Generic Physiologically-Based Pharmacokinetic Model for Lactation and Prediction of Maternal and Infant Exposure to Ondansetron via Breast Milk. Clinical pharmacology and therapeutics 111(5):1111–1120 (2022).
  ·  DOI: [10.1002/cpt.2530](https://doi.org/10.1002/cpt.2530)

## Population and dosing

**Population:** postpartum women · condition healthy · age group adult · n = 78.

**Dosing:** 4, 8 mg, iv, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight [g/mol] | MW | 293.4 | g/mol |
| Fraction unbound | fu | 0.33 |  |
| Specific intrinsic clearance [min−1] | kel | 1.22 | min−1 |
| cyp3a4 | cyp3a4 | 0.32 |  |
| cyp1a2 | cyp1a2 | 0.32 |  |
| cyp2d6 | cyp2d6 | 0.32 |  |
| Excreted in urine | Ae | 0.04 |  |
| Organ-plasma partition coefficients | Kp | 48 |  |
| model_for_estimating_milk_to_plasma_ratio | model_for_estimating_milk_to_plasma_ratio | 0.95 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ae  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — ondansetron: MW 293 g/mol, fu 0.33, kel 1.22 min−1, Ae 0.04, Kp 48.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight [g/mol] | `Q374` · MW | 293.4 | g/mol | 0.2934 |  | g/(m·ol) | llm_confirmed (0.6) | T1:row1:col1 |
| Fraction unbound | `Q46` · fu | 0.33 |  | 0.33 |  |  | exact (1) | T1:row5:col1, T1:row5:col2 |
| Specific intrinsic clearance [min−1] | `Q47` · kel | 1.22 | min−1 | 0.02033 | 1/s | 1/min | toxin_unit_relink (0.85) | T1:row9:col1, T1:row9:col2 |
| cyp3a4 | `Q900` · cyp3a4 | 0.32 |  |  |  |  |  | T1:row12:col1, T1:row12:col2 |
| cyp1a2 | `Q900` · cyp1a2 | 0.32 |  |  |  |  |  | T1:row13:col1, T1:row13:col2 |
| cyp2d6 | `Q900` · cyp2d6 | 0.32 |  |  |  |  |  | T1:row14:col1, T1:row14:col2 |
| Excreted in urine | `Q91` · Ae | 0.04 |  |  |  |  | llm (0.6) | T1:row15:col1, T1:row15:col2 |
| Organ-plasma partition coefficients | `Q410` · Kp | 48 |  |  |  |  | llm (0.6) | T1:row16:col2 |
| model_for_estimating_milk_to_plasma_ratio | `Q900` · model_for_estimating_milk_to_plasma_ratio | 0.95 |  |  |  |  |  | T1:row17:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from Specific intrinsic clearance [min−1] (Q47)

**Interpretation flags:**
- column 'reference' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Lipophilicity [log units]' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1', 'T1:row2:col2'])
- dropped unlinked row (NIL): 'pKa (acid)' — extend the ontology if this is a real PK parameter (source ['T1:row3:col1', 'T1:row3:col2'])
- dropped unlinked row (NIL): 'pKa (basic)' — extend the ontology if this is a real PK parameter (source ['T1:row4:col1', 'T1:row4:col2'])
- dropped unlinked row (NIL): 'Major binding protein' — extend the ontology if this is a real PK parameter (source ['T1:row6:col2'])
- dropped unlinked row (NIL): 'Protein binding scaling factor' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1', 'T1:row7:col2'])
- dropped unlinked row (NIL): 'Solubility in water [μg/mL]' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1'])
- relinked 'Specific intrinsic clearance [min−1]' Q3 → Q47: a rate constant in 'min−1' (the unit decides, not the label)
- dropped unlinked row (NIL): 'GFR Fraction' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row10:col2'])
- covariate level 'CYP3A4' → Q900:cyp3a4 = 0.32 (linear_fractional on the model)
- covariate level 'CYP1A2' → Q900:cyp1a2 = 0.32 (linear_fractional on the model)
- covariate level 'CYP2D6' → Q900:cyp2d6 = 0.32 (linear_fractional on the model)
- covariate level 'Model for estimating milk-to-plasma ratio' → Q900:model_for_estimating_milk_to_plasma_ratio = 0.95 (additive_shift on Q91)
- dropped value-less row: '*These values were assumed to be in the first week postpartum'
- dropped value-less row: '**These values are not model input parameters, but the resulting model output for a typical woman'
- implicit units: 'Excreted in urine' — the LLM proposed 'fraction', whose dimension does not fit Q91; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ondansetron
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- pharmacogenetic covariate 'cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'cyp1a2' (cyp1a2) — PGx domain
- pharmacogenetic covariate 'cyp2d6' (cyp2d6) — PGx domain
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q91 — no SI value to build from)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['T1:row1:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T1:row9:col1', 'T1:row9:col2'] |
| C5_unit_missing_Q91 | fail | [mass] |  | ['T1:row15:col1', 'T1:row15:col2'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ondansetron/Ondansetron_Job2022_reference/Ondansetron_Job2022_reference_modelica.zip" download>Ondansetron_Job2022_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_ondansetron/Ondansetron_Job2022_reference/Ondansetron_Job2022_reference_fmi.zip" download>Ondansetron_Job2022_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ondansetron/Ondansetron_Job2022_reference/Ondansetron_Job2022_reference_matlab.zip" download>Ondansetron_Job2022_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ondansetron/Ondansetron_Job2022_reference/Ondansetron_Job2022_reference_sbml.zip" download>Ondansetron_Job2022_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ondansetron/Ondansetron_Job2022_reference/Ondansetron_Job2022_reference_cellml.zip" download>Ondansetron_Job2022_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2934 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 4e-06 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 34.09 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Job KM, Dallmann A, Parry S, Saade G, Haas DM, Hughes B et al. Development of a Generic Physiologically-Based Pharmacokinetic Model for Lactation and Prediction of Maternal and Infant Exposure to Ondansetron via Breast Milk. Clinical pharmacology and therapeutics 111(5):1111–1120 (2022). [doi:10.1002/cpt.2530](https://doi.org/10.1002/cpt.2530)

**This record:** Pharmacolibrary, model `Ondansetron_Job2022_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_ondansetron/Ondansetron_Job2022_reference>

```bibtex
@misc{pharmacolibrary_OndansetronJob2022reference,
  title  = {{Pharmacolibrary model Ondansetron_Job2022_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ondansetron/Ondansetron_Job2022_reference},
  note   = {Parameters from doi:10.1002/cpt.2530},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_ondansetron/Ondansetron_Job2022_reference/Ondansetron_Job2022_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_ondansetron/Ondansetron_Job2022_reference/Ondansetron_Job2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Ondansetron_Job2022_reference_params.json` · controls `Ondansetron_Job2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bondansetron%5D%20Ondansetron_Job2022_reference&body=Drug%3A%20ondansetron%0ARecord%3A%20Ondansetron_Job2022_reference%0APaper%3A%20Job_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ondansetron/Ondansetron_Job2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 04:46 UTC</sub>
