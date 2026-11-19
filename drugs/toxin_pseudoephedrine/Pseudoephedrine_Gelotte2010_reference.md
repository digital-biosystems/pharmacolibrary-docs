<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Pseudoephedrine&quot;,&quot;href&quot;:&quot;drugs/toxin_pseudoephedrine/&quot;},{&quot;label&quot;:&quot;Gelotte_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pseudoephedrine_Kanfer1993_reference&quot;,&quot;label&quot;:&quot;Kanfer_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pseudoephedrine/Pseudoephedrine_Kanfer1993_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pseudoephedrine — `Pseudoephedrine_Gelotte2010_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="Pseudoephedrine" model-id="Pseudoephedrine_Gelotte2010_reference" status="not_simulated" stale="false" population="healthy children aged 4-11 years" measured-compound="Pseudoephedrine" parameterization="apparent" topology="general_linear"></div>

## Citation
Gelotte CK, Prior MJ, Pendley C, Zimmerman B, Lavins BJ. Multiple-dose pharmacokinetics and safety of an ibuprofen-pseudoephedrine cold suspension in children. Clinical pediatrics 49(7):678–685 (2010).
  ·  DOI: [10.1177/0009922810363153](https://doi.org/10.1177/0009922810363153)

## Population and dosing

**Population:** healthy children aged 4-11 years · condition healthy · age group child · n = 24.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| oral clearance (Cl/F) | CL/F | 77.5 | mL/kg/h |
| volume of distribution (Vd/F) | V | 0.147 | L/kg |
| Vd/F | V/F | 2.52 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| oral clearance (Cl/F) | `Q27` · CL/F | 77.5 | mL/kg/h | 1.507e-06 | m3/s | ml/(h·kg) | exact (1) | Gelotte_2010:abstract |
| volume of distribution (Vd/F) | `Q61` · V | 0.147 | L/kg | 0.01029 | m3 | l/kg | exact (1) | Gelotte_2010:abstract |
| Vd/F | `Q76` · V/F | 2.52 | L/kg | 0.1764 | m3 | l/kg | exact (1) | Gelotte_2010:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q27 ('Cl/F', value 12.3) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Pseudoephedrine
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Gelotte_2010_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Gelotte_2010:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Gelotte_2010:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Gelotte_2010:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.43 L/h | ['Gelotte_2010:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.3 L | ['Gelotte_2010:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 176 L | ['Gelotte_2010:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference/Pseudoephedrine_Gelotte2010_reference_modelica.zip" download>Pseudoephedrine_Gelotte2010_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference/Pseudoephedrine_Gelotte2010_reference_matlab.zip" download>Pseudoephedrine_Gelotte2010_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference/Pseudoephedrine_Gelotte2010_reference_matlab_simbio.zip" download>Pseudoephedrine_Gelotte2010_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference/Pseudoephedrine_Gelotte2010_reference_sbml.zip" download>Pseudoephedrine_Gelotte2010_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference/Pseudoephedrine_Gelotte2010_reference_cellml.zip" download>Pseudoephedrine_Gelotte2010_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Gelotte CK, Prior MJ, Pendley C, Zimmerman B, Lavins BJ. Multiple-dose pharmacokinetics and safety of an ibuprofen-pseudoephedrine cold suspension in children. Clinical pediatrics 49(7):678–685 (2010). [doi:10.1177/0009922810363153](https://doi.org/10.1177/0009922810363153)

**This record:** Pharmacolibrary, model `Pseudoephedrine_Gelotte2010_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference>

```bibtex
@misc{pharmacolibrary_PseudoephedrineGelotte2010reference,
  title  = {{Pharmacolibrary model Pseudoephedrine_Gelotte2010_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference},
  note   = {Parameters from doi:10.1177/0009922810363153},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpseudoephedrine%5D%20Pseudoephedrine_Gelotte2010_reference&body=Drug%3A%20pseudoephedrine%0ARecord%3A%20Pseudoephedrine_Gelotte2010_reference%0APaper%3A%20Gelotte_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pseudoephedrine/Pseudoephedrine_Gelotte2010_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 21:29 UTC</sub>
