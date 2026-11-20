<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Hydrogen cyanide&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/&quot;},{&quot;label&quot;:&quot;Bhandari_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;HydrogenCyanide_Bhandari2014_reference&quot;,&quot;label&quot;:&quot;Bhandari_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;HydrogenCyanide_Bonanno2021_reference&quot;,&quot;label&quot;:&quot;Bonanno_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bonanno2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Breen2019_value&quot;,&quot;label&quot;:&quot;Breen_2019_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Breen2019_value.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Michaelis1991_reference&quot;,&quot;label&quot;:&quot;Michaelis_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Michaelis1991_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Sousa2003_reference&quot;,&quot;label&quot;:&quot;Sousa_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Sousa2003_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Hall1987_reference&quot;,&quot;label&quot;:&quot;Hall_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Hall1987_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hydrogen cyanide — `HydrogenCyanide_Bhandari2014_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Hydrogen cyanide" model-id="HydrogenCyanide_Bhandari2014_reference" status="extracted" stale="false" population="rats, rabbits, and swine" measured-compound="Hydrogen cyanide" parameterization="mechanistic" topology="retention"></div>

## Citation
Bhandari RK, Oda RP, Petrikovics I, Thompson DE, Brenner M, Mahon SB et al. Cyanide toxicokinetics: the behavior of cyanide, thiocyanate and 2-amino-2-thiazoline-4-carboxylic acid in multiple animal models. Journal of analytical toxicology 38(4):218–225 (2014).
  ·  DOI: [10.1093/jat/bku020](https://doi.org/10.1093/jat/bku020)

## Population and dosing

**Population:** rats, rabbits, and swine · condition healthy · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| apparent half-life (t1/2) | t1/2z | 1.51 | min |
| SCN(-) t1/2 | t1/2z | 3.01 | min |
| t1/2 of ATCA | t1/2z | 40.7 | min |
| Cosm, ml/min (NaCN C) | CL | 33.5 | ml/min |
| Volume of distribution | V | 12.0 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| apparent half-life (t1/2) | `Q57` · t1/2z | 1.51 | min | 90.6 | s | min | half_life_rule (0.95) | Bhandari_2014:abstract |
| SCN(-) t1/2 | `Q57` · t1/2z | 3.01 | min | 180.6 | s | min | llm_confirmed (0.6) | Bhandari_2014:abstract |
| t1/2 of ATCA | `Q57` · t1/2z | 40.7 | min | 2442 | s | min | llm_confirmed (0.6) | Bhandari_2014:abstract, Bhandari_2014:abstract |
| Cosm, ml/min (NaCN C) | `Q22` · CL | 33.5 | ml/min | 5.583e-07 | m3/s | L/h | review_gapfill (0.7) | Weinstein_1969:review |
| Volume of distribution | `Q61` · V | 12.0 | L/kg | 0.84 | m3 | L | review_gapfill (0.7) | Fijałkowska_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / apparent half-life (t1/2) (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'rats' — extend the ontology if this is a real PK parameter (source ['Bhandari_2014:abstract', 'Bhandari_2014:abstract'])
- dropped unlinked row (NIL): 'rabbits' — extend the ontology if this is a real PK parameter (source ['Bhandari_2014:abstract', 'Bhandari_2014:abstract'])
- dropped unlinked row (NIL): 'swine' — extend the ontology if this is a real PK parameter (source ['Bhandari_2014:abstract', 'Bhandari_2014:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Hydrogen cyanide
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles: 3 per-group rows of none other but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: apparent half-life (t1/2)
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 0 linked by role; re-tagged Hydrogen cyanide→parent ×1, Hydrogen cyanide→Thiocyanate ×1, Hydrogen cyanide→2-amino-2-thiazoline-4-carboxylic acid ×2
- molar mass: none of 1 PubChem candidate(s) is '2-amino-2-thiazoline-4-carboxylic acid' (LLM) — left in mass units
- molar mass: none found for '2-amino-2-thiazoline-4-carboxylic acid' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Weinstein_1969's review values (primary lacked it)
- gap-filled Q61 (V) from Fijałkowska_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bhandari_2014_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Weinstein_1969:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bhandari_2014:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bhandari_2014:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bhandari_2014:abstract', 'Bhandari_2014:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Fijałkowska_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 33.5 | ['Weinstein_1969:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.01 L/h | ['Weinstein_1969:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 840 L | ['Fijałkowska_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference/HydrogenCyanide_Bhandari2014_reference_modelica.zip" download>HydrogenCyanide_Bhandari2014_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference/HydrogenCyanide_Bhandari2014_reference_fmi.zip" download>HydrogenCyanide_Bhandari2014_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference/HydrogenCyanide_Bhandari2014_reference_matlab.zip" download>HydrogenCyanide_Bhandari2014_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference/HydrogenCyanide_Bhandari2014_reference_sbml.zip" download>HydrogenCyanide_Bhandari2014_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference/HydrogenCyanide_Bhandari2014_reference_cellml.zip" download>HydrogenCyanide_Bhandari2014_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.02703 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 90.6 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Bhandari RK, Oda RP, Petrikovics I, Thompson DE, Brenner M, Mahon SB et al. Cyanide toxicokinetics: the behavior of cyanide, thiocyanate and 2-amino-2-thiazoline-4-carboxylic acid in multiple animal models. Journal of analytical toxicology 38(4):218–225 (2014). [doi:10.1093/jat/bku020](https://doi.org/10.1093/jat/bku020)

**This record:** Pharmacolibrary, model `HydrogenCyanide_Bhandari2014_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference>

```bibtex
@misc{pharmacolibrary_HydrogenCyanideBhandari2014reference,
  title  = {{Pharmacolibrary model HydrogenCyanide_Bhandari2014_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference},
  note   = {Parameters from doi:10.1093/jat/bku020},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference/HydrogenCyanide_Bhandari2014_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference/HydrogenCyanide_Bhandari2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `HydrogenCyanide_Bhandari2014_reference_params.json` · controls `HydrogenCyanide_Bhandari2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydrogen_cyanide%5D%20HydrogenCyanide_Bhandari2014_reference&body=Drug%3A%20hydrogen_cyanide%0ARecord%3A%20HydrogenCyanide_Bhandari2014_reference%0APaper%3A%20Bhandari_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 12:10 UTC</sub>
