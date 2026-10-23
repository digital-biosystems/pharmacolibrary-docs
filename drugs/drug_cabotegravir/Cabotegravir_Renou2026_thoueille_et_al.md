<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cabotegravir&quot;,&quot;href&quot;:&quot;drugs/drug_cabotegravir/&quot;},{&quot;label&quot;:&quot;Renou_2026 \u00b7 thoueille_et_al&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cabotegravir_Renou2026_han_et_al&quot;,&quot;label&quot;:&quot;Renou_2026_han_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabotegravir/Cabotegravir_Renou2026_han_et_al.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabotegravir_Renou2026_thoueille_et_al&quot;,&quot;label&quot;:&quot;Renou_2026_thoueille_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cabotegravir — `Cabotegravir_Renou2026_thoueille_et_al`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="cabotegravir" model-id="Cabotegravir_Renou2026_thoueille_et_al" status="accepted_with_caveats" stale="false" population="HIV-infected adults (CARLAPOP)" measured-compound="cabotegravir" parameterization="apparent" topology="1C"></div>

## Citation
Renou Q, Néant N, Destere A, Lagoutte-Renosi J, Grégoire M, Parant F et al. External Evaluation of Population Pharmacokinetic Models of Cabotegravir, During Its Oral and Intramuscular Administration in HIV-Infected Patients. CPT: pharmacometrics & systems pharmacology 15(6):e70180 (2026).
  ·  DOI: [10.1002/psp4.70180](https://doi.org/10.1002/psp4.70180)

## Population and dosing

**Population:** HIV-infected adults (CARLAPOP) · condition HIV-1 infection · age group adult · n = 736.

**Dosing:** 600 mg, im, multiple, every 1344 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al.svg" alt="Cabotegravir_Renou2026_thoueille_et_al diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ka oral (h−1) | kabs | 1.12 | h−1 | 37.7 (None% RSE) |
| CL/F (L/h) | CL/F | 0.201 | L/h | 25.6 (None% RSE) |
| Vc/F (L) | V/F | 7.44 | L | 107.2 (None% RSE) |
| im | im | 194 |  |  |
| theta_kabs_im | theta_kabs_im | 0.00102 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cabotegravir, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ka oral (h−1) | `Q49` · kabs | 1.12 | h−1 | 0.0003111 | 1/s | 1/h | llm_confirmed (0.6) | psp470180-tbl-0002:row2:col2 | 37.7 (None% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 0.201 | L/h | 5.583e-08 | m3/s | l/h | exact (1) | psp470180-tbl-0002:row5:col2 | 25.6 (None% RSE) |
| Vc/F (L) | `Q76` · V/F | 7.44 | L | 0.00744 | m3 | l | exact (1) | psp470180-tbl-0002:row7:col2 | 107.2 (None% RSE) |
| im | `Q900` · im | 194 |  |  |  |  |  | psp470180-tbl-0002:row21:col2, psp470180-tbl-0002:row24:col2 |  |
| theta_kabs_im | `Q900` · theta_kabs_im | 0.00102 |  |  |  |  |  | psp470180-tbl-0002:row3:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ka IM' routed out of structural estimates ('IIV (%)')
- table section iiv: 'CL/F' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Vc/F' routed out of structural estimates ('IIV (%)')
- table section iov: 'CL/F' routed out of structural estimates ('IOV (%)')
- covariate level 'IM' → Q900:im = 194 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Oral' — extend the ontology if this is a real PK parameter (source ['psp470180-tbl-0002:row23:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cabotegravir
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- population split: 'thoueille et al.' subgroup of Renou_2026 (paper reports 2 populations: han et al., thoueille et al.)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | cabotegravir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cabotegravir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp470180-tbl-0002:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp470180-tbl-0002:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['psp470180-tbl-0002:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.201 L/h | ['psp470180-tbl-0002:row5:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.44 L | ['psp470180-tbl-0002:row7:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=cabotegravir) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_modelica.zip" download>Cabotegravir_Renou2026_thoueille_et_al_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_fmi.zip" download>Cabotegravir_Renou2026_thoueille_et_al_fmi.zip</a> <span class="pk-size">(4.7 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_matlab.zip" download>Cabotegravir_Renou2026_thoueille_et_al_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_matlab_simbio.zip" download>Cabotegravir_Renou2026_thoueille_et_al_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_sbml.zip" download>Cabotegravir_Renou2026_thoueille_et_al_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_cellml.zip" download>Cabotegravir_Renou2026_thoueille_et_al_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4054 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 5.583e-08 | m3/s |
| input | model | `VdPerKg` | 0.0001063 | m3/kg |
| input | model | `ka` | 0.0003111 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Renou Q, Néant N, Destere A, Lagoutte-Renosi J, Grégoire M, Parant F et al. External Evaluation of Population Pharmacokinetic Models of Cabotegravir, During Its Oral and Intramuscular Administration in HIV-Infected Patients. CPT: pharmacometrics & systems pharmacology 15(6):e70180 (2026). [doi:10.1002/psp4.70180](https://doi.org/10.1002/psp4.70180)

**This record:** Pharmacolibrary v26.09, model `Cabotegravir_Renou2026_thoueille_et_al`. <https://pharmacolibrary.github.io/#/drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al>

```bibtex
@misc{pharmacolibrary_CabotegravirRenou2026thoueilleetal,
  title  = {{Pharmacolibrary model Cabotegravir_Renou2026_thoueille_et_al}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al},
  note   = {Parameters from doi:10.1002/psp4.70180},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 1.12 /h, F 1). Dose in the paper: 600 mg.

<dbs-fmusim paramsurl="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al/Cabotegravir_Renou2026_thoueille_et_al_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cabotegravir_Renou2026_thoueille_et_al_params.json` · controls `Cabotegravir_Renou2026_thoueille_et_al_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcabotegravir%5D%20Cabotegravir_Renou2026_thoueille_et_al&body=Drug%3A%20cabotegravir%0ARecord%3A%20Cabotegravir_Renou2026_thoueille_et_al%0APaper%3A%20Renou_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cabotegravir/Cabotegravir_Renou2026_thoueille_et_al%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:57 UTC</sub>
