<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Mandelonitrile&quot;,&quot;href&quot;:&quot;drugs/toxin_mandelonitrile/&quot;},{&quot;label&quot;:&quot;Dirikolu_2003 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mandelonitrile — `Mandelonitrile_Dirikolu2003_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<div class="pk-model-meta" hidden drug="Mandelonitrile" model-id="Mandelonitrile_Dirikolu2003_reference" status="not_simulated" stale="false" population="four horses" measured-compound="Cyanide" parameterization="apparent" topology="general_linear"></div>

## Citation
Dirikolu L, Hughes C, Harkins D, Boyles J, Bosken J, Lehner F et al. The toxicokinetics of cyanide and mandelonitrile in the horse and their relevance to the mare reproductive loss syndrome. Toxicology mechanisms and methods 13(3):199–211 (2003).
  ·  DOI: [10.1080/15376510309832](https://doi.org/10.1080/15376510309832)

## Population and dosing

**Population:** four horses · condition healthy · age group adult · n = 4.

**Dosed compound ≠ measured compound:** dosed Mandelonitrile, measured Cyanide.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CLm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| distribution (alpha) phase half-life | t1/2α | 0.74 | h |
| terminal (beta phase) half-life | t1/2β | 16.16 | h |
| mean residence time | MRT | 12.4 | h |
| steady-state volume of distribution | Vss | 2.21 | L/kg |
| mean systemic clearance | CLm,norm/F | 0.182 | L/h/kg |
| mean oral bioavailability of cyanide from mandelonitrile | Frel | 57 |  |
| apparent terminal half-life | t1/2z | 13 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is mandelonitrile's own; they describe Cyanide.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| distribution (alpha) phase half-life | `Q59` · t1/2α | 0.74 | h | 2664 | s | h | half_life_rule (0.95) | Dirikolu_2003:abstract |
| terminal (beta phase) half-life | `Q60` · t1/2β | 16.16 | h | 5.818e+04 | s | h | half_life_rule (0.95) | Dirikolu_2003:abstract |
| mean residence time | `Q53` · MRT | 12.4 | h | 4.464e+04 | s | h | exact (1) | Dirikolu_2003:abstract |
| steady-state volume of distribution | `Q65` · Vss | 2.21 | L/kg | 0.1547 | m3 | l/kg | llm_corrected (0.6) | Dirikolu_2003:abstract |
| mean systemic clearance | `Q375` · CLm,norm/F | 0.182 | L/h/kg | 3.539e-06 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Dirikolu_2003:abstract |
| mean oral bioavailability of cyanide from mandelonitrile | `Q87` · Frel | 57 |  |  |  |  | llm_corrected (0.6) | Dirikolu_2003:abstract |
| apparent terminal half-life | `Q57` · t1/2z | 13 | h | 4.68e+04 | s | h | half_life_rule (0.95) | Dirikolu_2003:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- dropped duplicate Q57 ('terminal half-lives', value '14') — already have one for this compound
- metabolite cyanide: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Cyanide
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'Cyanide' ('no full name in the paper') — left in mass units
- molar mass: none found for 'Cyanide' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Cyanide', not mandelonitrile — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Dirikolu_2003_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] |  | ['Dirikolu_2003:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Dirikolu_2003:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Dirikolu_2003:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Dirikolu_2003:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Dirikolu_2003:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Dirikolu_2003:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 155 L | ['Dirikolu_2003:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | skipped |  |  | no structural disposition parameters in record |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_mandelonitrile/Mandelonitrile_Dirikolu2003_reference/Mandelonitrile_Dirikolu2003_reference_modelica.zip" download>Mandelonitrile_Dirikolu2003_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Dirikolu L, Hughes C, Harkins D, Boyles J, Bosken J, Lehner F et al. The toxicokinetics of cyanide and mandelonitrile in the horse and their relevance to the mare reproductive loss syndrome. Toxicology mechanisms and methods 13(3):199–211 (2003). [doi:10.1080/15376510309832](https://doi.org/10.1080/15376510309832)

**This record:** Pharmacolibrary, model `Mandelonitrile_Dirikolu2003_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_mandelonitrile/Mandelonitrile_Dirikolu2003_reference>

```bibtex
@misc{pharmacolibrary_MandelonitrileDirikolu2003reference,
  title  = {{Pharmacolibrary model Mandelonitrile_Dirikolu2003_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_mandelonitrile/Mandelonitrile_Dirikolu2003_reference},
  note   = {Parameters from doi:10.1080/15376510309832},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmandelonitrile%5D%20Mandelonitrile_Dirikolu2003_reference&body=Drug%3A%20mandelonitrile%0ARecord%3A%20Mandelonitrile_Dirikolu2003_reference%0APaper%3A%20Dirikolu_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mandelonitrile/Mandelonitrile_Dirikolu2003_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 08:31 UTC</sub>
