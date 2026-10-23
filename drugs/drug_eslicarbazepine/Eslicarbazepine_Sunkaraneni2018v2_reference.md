<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;eslicarbazepine&quot;,&quot;href&quot;:&quot;drugs/drug_eslicarbazepine/&quot;},{&quot;label&quot;:&quot;Sunkaraneni_2018_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eslicarbazepine_Sunkaraneni2018v2_reference&quot;,&quot;label&quot;:&quot;Sunkaraneni_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eslicarbazepine — `Eslicarbazepine_Sunkaraneni2018v2_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Needs review), but the paper was screened again on 2026-10-07 07:38 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="eslicarbazepine" model-id="Eslicarbazepine_Sunkaraneni2018v2_reference" status="extracted" stale="true" population="pediatric patients with partial-onset seizures" measured-compound="eslicarbazepine" parameterization="apparent" topology="1C"></div>

## Citation
Sunkaraneni S, Ludwig E, Fiedler-Kelly J, Hopkins S, Galluppi G, Blum D. Modeling and simulations to support dose selection for eslicarbazepine acetate therapy in pediatric patients with partial-onset seizures. Journal of pharmacokinetics and pharmacodynamics 45(4):649–658 (2018).
  ·  DOI: [10.1007/s10928-018-9596-7](https://doi.org/10.1007/s10928-018-9596-7)

## Population and dosing

**Population:** pediatric patients with partial-onset seizures · condition partial-onset seizures · age group mixed · n = ,.

**Dosing:** 5, 15, 30 mg/kg/day, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed eslicarbazepine acetate, measured eslicarbazepine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference.svg" alt="Eslicarbazepine_Sunkaraneni2018v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL: apparent elimination clearance (L/h) | CLm/F | 2.92 | L/h |
| V: apparent volume of distribution (L) | V/F | 4.78 | L |
| F1: relative bioavailability during carbamazepine use (–) | Frel | 6.76 |  |
| theta_q22_category | theta_q22_category | 25.6 |  |
| theta_q49_category | theta_q49_category | 0.895 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The eslicarbazepine pediatric model was held back because the builder invented an absorption rate constant (ka) not reported in the source, a deviation judged not acceptable.**

The paper does not report an absorption rate constant (ka) or lag time, so placeholder values were substituted for them, and this invented absorption was judged not acceptable. The model also assumes F=1 and Fm=1 with no molar correction, so CL (2.92 L/h) and V/F (4.78 L) are apparent parameterizations for extravascular dosing. Additionally, the covariate effects (theta_cl_category 25.6 L/h, theta_q49_category 0.895) were not exercised: only the reference individual was simulated, not the covariate scenarios the record defines. One reported unit could not be converted to SI, so that parameter entered simulation without an SI value. Extracted — eslicarbazepine: CL 2.92 L/h, V/F 4.78 L, Frel 6.76.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL: apparent elimination clearance (L/h) | `Q351` · CLm/F | 2.92 | L/h | 8.111e-07 | m3/s | l/h | exact (1) | Tab3:row2:col1, Tab3:row2:col2 |
| V: apparent volume of distribution (L) | `Q76` · V/F | 4.78 | L | 0.00478 | m3 | l | exact (1) | Tab3:row5:col1, Tab3:row5:col2 |
| F1: relative bioavailability during carbamazepine use (–) | `Q87` · Frel | 6.76 |  |  |  |  | llm_confirmed (0.6) | Tab3:row8:col1, Tab3:row8:col2 |
| theta_q22_category | `Q900` · theta_q22_category | 25.6 |  |  |  |  |  | Tab3:row3:col2 |
| theta_q49_category | `Q900` · theta_q49_category | 0.895 |  |  |  |  |  | Tab3:row6:col1 |

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
- table section iiv: 'CL: apparent elimination clearance (L/h)' routed out of structural estimates ('Interindividual variability/residual variabilitya')
- table section iiv: 'V: apparent volume of distribution (L)' routed out of structural estimates ('Interindividual variability/residual variabilitya')
- dropped unlinked row (NIL): 'RV CCV component' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped unlinked row (NIL): 'RV additive component' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row10:col2'])
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q22 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q49 — ambiguous identity (two shifts cannot share one category)
- metabolite eslicarbazepine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=eslicarbazepine
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'Following oral administration, ESL undergoes rapid first-pass hydrolysis to the primary active metabolite eslicarbazepin')
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V: apparent volume of distribution (L)' is the general volume)
- row roles: 2 per-group rows of eslicarbazepine absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 8 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab3:row2:col3 = '25.0 %CV'
- unparsed cell Tab3:row2:col5 = '1.61, 1.77'
- unparsed cell Tab3:row3:col1 = '− 0.176'
- unparsed cell Tab3:row3:col3 = '− 0.247, − 0.101'
- unparsed cell Tab3:row4:col3 = '0.439, 0.86'
- unparsed cell Tab3:row5:col3 = '13.2 %CV'
- unparsed cell Tab3:row5:col5 = '30.8, 45.8'
- unparsed cell Tab3:row6:col3 = '83.8 %CV'
- unparsed cell Tab3:row8:col5 = '0.61, 0.761'
- unparsed cell Tab3:row9:col3 = '328–23.3 %CVF [100–50,000]'
- unparsed cell Tab3:row9:col5 = '0.0443, 0.0643'
- unparsed cell Tab3:row10:col3 = '32,300, 224,000'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.78 L | ['Tab3:row5:col1', 'Tab3:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=eslicarbazepine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_modelica.zip" download>Eslicarbazepine_Sunkaraneni2018v2_reference_modelica.zip</a> <span class="pk-size">(5.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_fmi.zip" download>Eslicarbazepine_Sunkaraneni2018v2_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_matlab.zip" download>Eslicarbazepine_Sunkaraneni2018v2_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_matlab_simbio.zip" download>Eslicarbazepine_Sunkaraneni2018v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_sbml.zip" download>Eslicarbazepine_Sunkaraneni2018v2_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_cellml.zip" download>Eslicarbazepine_Sunkaraneni2018v2_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2543 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0008 | kg |
| input | model | `Cl` | 8.111e-07 | m3/s |
| input | model | `VdPerKg` | 6.829e-05 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sunkaraneni S, Ludwig E, Fiedler-Kelly J, Hopkins S, Galluppi G, Blum D. Modeling and simulations to support dose selection for eslicarbazepine acetate therapy in pediatric patients with partial-onset seizures. Journal of pharmacokinetics and pharmacodynamics 45(4):649–658 (2018). [doi:10.1007/s10928-018-9596-7](https://doi.org/10.1007/s10928-018-9596-7)

**This record:** Pharmacolibrary v26.09, model `Eslicarbazepine_Sunkaraneni2018v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference>

```bibtex
@misc{pharmacolibrary_EslicarbazepineSunkaraneni2018v2reference,
  title  = {{Pharmacolibrary model Eslicarbazepine_Sunkaraneni2018v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference},
  note   = {Parameters from doi:10.1007/s10928-018-9596-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 800 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 800 mg oral (N03AF04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference/Eslicarbazepine_Sunkaraneni2018v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Eslicarbazepine_Sunkaraneni2018v2_reference_params.json` · controls `Eslicarbazepine_Sunkaraneni2018v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beslicarbazepine%5D%20Eslicarbazepine_Sunkaraneni2018v2_reference&body=Drug%3A%20eslicarbazepine%0ARecord%3A%20Eslicarbazepine_Sunkaraneni2018v2_reference%0APaper%3A%20Sunkaraneni_2018_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:38 UTC</sub>
