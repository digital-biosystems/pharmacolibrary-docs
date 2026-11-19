<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nitrazepam&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrazepam/&quot;},{&quot;label&quot;:&quot;Abernethy_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nitrazepam_Jochemsen1983_reference&quot;,&quot;label&quot;:&quot;Jochemsen_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrazepam/Nitrazepam_Jochemsen1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nitrazepam_Kangas1979v2_reference&quot;,&quot;label&quot;:&quot;Kangas_1979_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrazepam/Nitrazepam_Kangas1979v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nitrazepam_Abernethy1986_reference&quot;,&quot;label&quot;:&quot;Abernethy_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Nitrazepam_Jochemsen1982v2_reference&quot;,&quot;label&quot;:&quot;Jochemsen_1982_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrazepam/Nitrazepam_Jochemsen1982v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nitrazepam_Ochs1983_reference&quot;,&quot;label&quot;:&quot;Ochs_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrazepam/Nitrazepam_Ochs1983_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nitrazepam_van1998_reference&quot;,&quot;label&quot;:&quot;van_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrazepam/Nitrazepam_van1998_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nitrazepam — `Nitrazepam_Abernethy1986_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Ka, k12, k21 use library defaults, not estimates from this paper; the covariate scenarios were not simulated (+1 more).

<div class="pk-model-meta" hidden drug="Nitrazepam" model-id="Nitrazepam_Abernethy1986_reference" status="needs_review" stale="false" population="obese and normal body weight adult subjects" measured-compound="nitrazepam" parameterization="apparent" topology="2C"></div>

## Citation
Abernethy DR, Greenblatt DJ, Locniskar A, Ochs HR, Harmatz JS, Shader RI. Obesity effects on nitrazepam disposition. British journal of clinical pharmacology 22(5):551–557 (1986).
  ·  DOI: [10.1111/j.1365-2125.1986.tb02934.x](https://doi.org/10.1111/j.1365-2125.1986.tb02934.x)

## Population and dosing

**Population:** obese and normal body weight adult subjects · condition healthy (obese vs normal weight, fasted) · age group adult · n = 28.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference.svg" alt="Nitrazepam_Abernethy1986_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Elimination half-life (obese) | t1/2z | 33.5 | h |
| apparent volume of distribution (Vd) (obese) | V | 290 | l |
| apparent volume of distribution (Vd) (control) | V/F | 137 | l |
| Oral clearance (obese) | CL/F | 101 | ml min-1 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ka, k12, k21 use library defaults, not estimates from this paper; the covariate scenarios were not simulated (+1 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. The base model was simulated, not the covariate effects the record defines. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — nitrazepam: t1/2z 33.5 h, V 290 l, V/F 137 l, CL/F 101 ml min-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of apparent volume of distribution: this record has none, the second reading 290; it also differs on 7 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Elimination half-life (obese) | `Q57` · t1/2z | 33.5 | h | 1.206e+05 | s | h | half_life_rule (0.95) | Abernethy_1986:abstract |
| apparent volume of distribution (Vd) (obese) | `Q61` · V | 290 | l | 0.29 | m3 | l | llm_corrected (0.6) | Abernethy_1986:abstract |
| apparent volume of distribution (Vd) (control) | `Q76` · V/F | 137 | l | 0.137 | m3 | l | llm_confirmed (0.6) | Abernethy_1986:abstract |
| Oral clearance (obese) | `Q27` · CL/F | 101 | ml min-1 | 1.683e-06 | m3/s | ml/min | exact (1) | Abernethy_1986:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag', 'k12', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q57 ('Elimination half-life (control)', value 23.9) — already have one for this compound
- dropped duplicate Q27 ('Oral clearance (control)', value 66.8) — already have one for this compound
- covariate body weight for V from footnote/prose kept as documentation only (['Abernethy_1986:abstract'])
- covariate body weight for Vnorm from footnote/prose kept as documentation only (['Abernethy_1986:abstract'])
- covariate body weight for CLnorm from footnote/prose kept as documentation only (['Abernethy_1986:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nitrazepam
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Abernethy_1986_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[apparent volume of distribution (vd)]` | 290 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` |  | 290 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` |  | 0.93 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` |  | 33.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` | 33.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[oral clearance]` |  | 101 | only_one_extracted |
| `gpt-oss:120b` | `parameters[oral clearance]` | 101 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` |  | 2.62 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Abernethy_1986:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Abernethy_1986:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Abernethy_1986:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Abernethy_1986:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.06 L/h | ['Abernethy_1986:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 290 L | ['Abernethy_1986:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 137 L | ['Abernethy_1986:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=nitrazepam) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_modelica.zip" download>Nitrazepam_Abernethy1986_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_fmi.zip" download>Nitrazepam_Abernethy1986_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_matlab.zip" download>Nitrazepam_Abernethy1986_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_matlab_simbio.zip" download>Nitrazepam_Abernethy1986_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_sbml.zip" download>Nitrazepam_Abernethy1986_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_cellml.zip" download>Nitrazepam_Abernethy1986_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2813 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 1.683e-06 | m3/s |
| input | model | `VdPerKg` | 0.004143 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Abernethy DR, Greenblatt DJ, Locniskar A, Ochs HR, Harmatz JS, Shader RI. Obesity effects on nitrazepam disposition. British journal of clinical pharmacology 22(5):551–557 (1986). [doi:10.1111/j.1365-2125.1986.tb02934.x](https://doi.org/10.1111/j.1365-2125.1986.tb02934.x)

**This record:** Pharmacolibrary, model `Nitrazepam_Abernethy1986_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference>

```bibtex
@misc{pharmacolibrary_NitrazepamAbernethy1986reference,
  title  = {{Pharmacolibrary model Nitrazepam_Abernethy1986_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference},
  note   = {Parameters from doi:10.1111/j.1365-2125.1986.tb02934.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 5 mg oral (N05CD02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference/Nitrazepam_Abernethy1986_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Nitrazepam_Abernethy1986_reference_params.json` · controls `Nitrazepam_Abernethy1986_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnitrazepam%5D%20Nitrazepam_Abernethy1986_reference&body=Drug%3A%20nitrazepam%0ARecord%3A%20Nitrazepam_Abernethy1986_reference%0APaper%3A%20Abernethy_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nitrazepam/Nitrazepam_Abernethy1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 08:08 UTC</sub>
