<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Naphthalene&quot;,&quot;href&quot;:&quot;drugs/toxin_naphthalene/&quot;},{&quot;label&quot;:&quot;Choi_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naphthalene_Lang2024_reference&quot;,&quot;label&quot;:&quot;Lang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_naphthalene/Naphthalene_Lang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Naphthalene_Choi2023_reference&quot;,&quot;label&quot;:&quot;Choi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_naphthalene/Naphthalene_Choi2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Naphthalene — `Naphthalene_Choi2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Naphthalene's terminal half-life of 2 h was imputed as a range midpoint from abstract-only summary statistics instead of fitted data.

<div class="pk-model-meta" hidden drug="Naphthalene" model-id="Naphthalene_Choi2023_reference" status="needs_review" stale="false" population="eight healthy adults" measured-compound="Naphthalene" parameterization="mechanistic" topology="retention"></div>

## Citation
Choi JW, Kim M, Song G, Kho Y, Choi K, Shin MY et al. Toxicokinetic analyses of naphthalene, fluorene, phenanthrene, and pyrene in humans after single oral administration. The Science of the total environment 870:161899 (2023).
  ·  DOI: [10.1016/j.scitotenv.2023.161899](https://doi.org/10.1016/j.scitotenv.2023.161899)

## Population and dosing

**Population:** eight healthy adults · condition healthy · age group adult · n = 8.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| biological half-life | t1/2z | 2 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Naphthalene's terminal half-life of 2 h was imputed as a range midpoint from abstract-only summary statistics instead of fitted data.**

The model was reconstructed solely from abstract-level summary statistics rather than individual patient data or fitted curves. The terminal half-life (2 h) was extracted as the midpoint of a printed range, lacking a point estimate from formal fitting. Additionally, metabolite compartments for hydroxylated derivatives of co-administered PAHs (Fluorene, Phenanthrene, Pyrene) are orphaned, having no formation path from Naphthalene. Extracted — naphthalene: t1/2z 2 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| biological half-life | `Q57` · t1/2z | 2 | h | 7200 | s | h | exact (1) | Choi_2023:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Tmax | Q56 | exact |

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / biological half-life (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'single dose' — extend the ontology if this is a real PK parameter (source ['Choi_2023:abstract'])
- dropped unlinked row (NIL): 'Fue' — extend the ontology if this is a real PK parameter (source ['Choi_2023:abstract'])
- dropped duplicate Q57 ('T1/2', value '7.2') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Naphthalene
- toxin: 4 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- toxin: biological half-life printed only as a range — the value is the range's midpoint; route to review
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'OH-Naphthalene' ('naphthol') — left in mass units
- molar mass: no plausible PubChem entry for 'OH-Fluorene' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'OH-Phenanthrene' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'OH-Pyrene' ('no full name in the paper') — left in mass units
- molar mass: none found for 'OH-Naphthalene' — its concentrations stay mass-only
- molar mass: none found for 'OH-Fluorene' — its concentrations stay mass-only
- molar mass: none found for 'OH-Phenanthrene' — its concentrations stay mass-only
- molar mass: none found for 'OH-Pyrene' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (a value printed only as a range — the record carries its midpoint)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Choi_2023_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q56 | pass | [time] |  | ['Choi_2023:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Choi_2023:abstract'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_naphthalene/Naphthalene_Choi2023_reference/Naphthalene_Choi2023_reference_modelica.zip" download>Naphthalene_Choi2023_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_naphthalene/Naphthalene_Choi2023_reference/Naphthalene_Choi2023_reference_fmi.zip" download>Naphthalene_Choi2023_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_naphthalene/Naphthalene_Choi2023_reference/Naphthalene_Choi2023_reference_matlab.zip" download>Naphthalene_Choi2023_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_naphthalene/Naphthalene_Choi2023_reference/Naphthalene_Choi2023_reference_sbml.zip" download>Naphthalene_Choi2023_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_naphthalene/Naphthalene_Choi2023_reference/Naphthalene_Choi2023_reference_cellml.zip" download>Naphthalene_Choi2023_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1282 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 7200 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Choi JW, Kim M, Song G, Kho Y, Choi K, Shin MY et al. Toxicokinetic analyses of naphthalene, fluorene, phenanthrene, and pyrene in humans after single oral administration. The Science of the total environment 870:161899 (2023). [doi:10.1016/j.scitotenv.2023.161899](https://doi.org/10.1016/j.scitotenv.2023.161899)

**This record:** Pharmacolibrary, model `Naphthalene_Choi2023_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_naphthalene/Naphthalene_Choi2023_reference>

```bibtex
@misc{pharmacolibrary_NaphthaleneChoi2023reference,
  title  = {{Pharmacolibrary model Naphthalene_Choi2023_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_naphthalene/Naphthalene_Choi2023_reference},
  note   = {Parameters from doi:10.1016/j.scitotenv.2023.161899},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_naphthalene/Naphthalene_Choi2023_reference/Naphthalene_Choi2023_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_naphthalene/Naphthalene_Choi2023_reference/Naphthalene_Choi2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Naphthalene_Choi2023_reference_params.json` · controls `Naphthalene_Choi2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaphthalene%5D%20Naphthalene_Choi2023_reference&body=Drug%3A%20naphthalene%0ARecord%3A%20Naphthalene_Choi2023_reference%0APaper%3A%20Choi_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_naphthalene/Naphthalene_Choi2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 21:57 UTC</sub>
