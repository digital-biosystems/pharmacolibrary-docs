<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cyproterone acetate&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/&quot;},{&quot;label&quot;:&quot;Kuhnz_1993 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CyproteroneAcetate_Huber1988_reference&quot;,&quot;label&quot;:&quot;Huber_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Huber1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CyproteroneAcetate_Kuhnz1997_reference&quot;,&quot;label&quot;:&quot;Kuhnz_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CyproteroneAcetate_Speck1976v2_reference&quot;,&quot;label&quot;:&quot;Speck_1976_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Speck1976v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CyproteroneAcetate_Kuhnz1993_reference&quot;,&quot;label&quot;:&quot;Kuhnz_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cyproterone acetate — `CyproteroneAcetate_Kuhnz1993_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Absorption rate constants were defaulted rather than extracted because the model was built from abstract-only summary statistics lacking fitted parameters.

<div class="pk-model-meta" hidden drug="Cyproterone acetate" model-id="CyproteroneAcetate_Kuhnz1993_reference" status="needs_review" stale="false" population="15 healthy women (age 19 to 34 years)" measured-compound="Cyproterone acetate" parameterization="apparent" topology="1C"></div>

## Citation
Kuhnz W, Staks T, Jütting G. Pharmacokinetics of cyproterone acetate and ethinylestradiol in 15 women who received a combination oral contraceptive during three treatment cycles. Contraception 48(6):557–575 (1993).
  ·  DOI: [10.1016/0010-7824(93)90118-q](https://doi.org/10.1016/0010-7824(93)90118-q)

## Population and dosing

**Population:** 15 healthy women (age 19 to 34 years) · condition healthy · age group adult · n = 15.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference.svg" alt="CyproteroneAcetate_Kuhnz1993_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-lives | t1/2z | 0.8 | h |
| apparent clearance | CL/F | 3.6 | L/h |
| volume of distribution (Vz) | V | 986 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absorption rate constants were defaulted rather than extracted because the model was built from abstract-only summary statistics lacking fitted parameters.**

The record relies on library defaults for the absorption rate and lag time, as the source provided only summary statistics instead of a fitted model. Apparent clearance and volume are reported, but the invented absorption inputs affect simulated profiles without paper support. The record is held back because these substituted absorption parameters are not justified by the available data. Extracted — cyproterone acetate: t1/2z 0.8 h, CL/F 3.6 L/h, V 986 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-lives | `Q57` · t1/2z | 0.8 | h | 2880 | s | h | llm (0.6) | Kuhnz_1993:abstract, Kuhnz_1993:abstract |
| apparent clearance | `Q27` · CL/F | 3.6 | L/h | 1e-06 | m3/s | L/h | exact (1) | Kuhnz_1993:abstract, Kuhnz_1993:abstract |
| volume of distribution (Vz) | `Q61` · V | 986 | L | 0.986 | m3 | L | exact (1) | Kuhnz_1993:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- unit_dimension_unknown: 'ml x min-1 x kg-1' (CL/F)
- dropped duplicate Q57 ('terminal half-life of CPA', value '78.6') — already have one for this compound
- dropped duplicate Q61 ('volume of distribution', value '1304') — already have one for this compound
- implicit units: 'apparent clearance' → L/h (from the popPK convention: 'The parameter is apparent clearance (CL/F). Population PK convention for clearance is L/h. The value 3.6 is consistent w')
- implicit units: 'volume of distribution (Vz)' → L (from the popPK convention: 'The parameter is volume of distribution (Vz or Vd). Population PK convention for volume is L. The value 986 is consisten')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Cyproterone acetate
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kuhnz_1993_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kuhnz_1993:abstract', 'Kuhnz_1993:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kuhnz_1993:abstract', 'Kuhnz_1993:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kuhnz_1993:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.6 L/h | ['Kuhnz_1993:abstract', 'Kuhnz_1993:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 986 L | ['Kuhnz_1993:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=Cyproterone acetate) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_modelica.zip" download>CyproteroneAcetate_Kuhnz1993_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_fmi.zip" download>CyproteroneAcetate_Kuhnz1993_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_matlab.zip" download>CyproteroneAcetate_Kuhnz1993_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_matlab_simbio.zip" download>CyproteroneAcetate_Kuhnz1993_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_sbml.zip" download>CyproteroneAcetate_Kuhnz1993_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_cellml.zip" download>CyproteroneAcetate_Kuhnz1993_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4169 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1e-06 | m3/s |
| input | model | `VdPerKg` | 0.01409 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kuhnz W, Staks T, Jütting G. Pharmacokinetics of cyproterone acetate and ethinylestradiol in 15 women who received a combination oral contraceptive during three treatment cycles. Contraception 48(6):557–575 (1993). [doi:10.1016/0010-7824(93)90118-q](https://doi.org/10.1016/0010-7824(93)90118-q)

**This record:** Pharmacolibrary, model `CyproteroneAcetate_Kuhnz1993_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference>

```bibtex
@misc{pharmacolibrary_CyproteroneAcetateKuhnz1993reference,
  title  = {{Pharmacolibrary model CyproteroneAcetate_Kuhnz1993_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference},
  note   = {Parameters from doi:10.1016/0010-7824(93)90118-q},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 100 mg oral (G03HA01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference/CyproteroneAcetate_Kuhnz1993_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `CyproteroneAcetate_Kuhnz1993_reference_params.json` · controls `CyproteroneAcetate_Kuhnz1993_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyproterone_acetate%5D%20CyproteroneAcetate_Kuhnz1993_reference&body=Drug%3A%20cyproterone_acetate%0ARecord%3A%20CyproteroneAcetate_Kuhnz1993_reference%0APaper%3A%20Kuhnz_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 06:15 UTC</sub>
