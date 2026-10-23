<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mirikizumab&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/&quot;},{&quot;label&quot;:&quot;Chua_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirikizumab_Chua2023_reference&quot;,&quot;label&quot;:&quot;Chua_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mirikizumab — `Mirikizumab_Chua2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0997, model 0.00124).

<div class="pk-model-meta" hidden drug="mirikizumab" model-id="Mirikizumab_Chua2023_reference" status="needs_review" stale="false" population="patients with moderately to severely active ulcerative colitis" measured-compound="mirikizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Chua L, Friedrich S, Zhang XC. Mirikizumab Pharmacokinetics in Patients with Moderately to Severely Active Ulcerative Colitis: Results from Phase III LUCENT Studies. Clinical pharmacokinetics 62(10):1479–1491 (2023).
  ·  DOI: [10.1007/s40262-023-01281-z](https://doi.org/10.1007/s40262-023-01281-z)

## Population and dosing

**Population:** patients with moderately to severely active ulcerative colitis · condition ulcerative colitis · age group adult · n = — the modelled concentrations are mirikizumab's
  #   metabolite_pk: a metabolite of mirikizumab is what is modelled
  #   biomarker_turnover: the kinetic model describes an ENDOGENOUS substance
  #     (uric acid, glucose, cholesterol, INR, platelets, a hormone …) — its
  #     production, volume and clearance — and mirikizumab only perturbs
  #     it (Rmax, Imax, IC50 on production or loss). Those V and CL are the
  #     biomarker's, NOT the drug's pharmacokinetics.
  #   exposure_response: no kinetic model; effect vs dose or concentration
models_target_drug:  # yes or no - is mirikizumab (under ANY name: synonym, brand, code or
                     #   abbreviation such as BCNU, ACNU, MTX, 5-FU) the dose_compound or the
                     #   primary_analyte? 'no' when it is only a co-medication or comparator.
final_table_hint:    # if is_poppk=yes, the table that reports the FINAL fitted PK parameter
                     #   estimates (e.g. "Table 2" or its caption's first few words), else unknown
software:            # NONMEM, Monolix, nlmixr, etc., or unknown
has_control_stream:  # yes or no - is NONMEM/model code in the supplement?
dose_compound:       # the compound the subject actually receives
primary_analyte:     # the compound whose concentrations the model chiefly describes
                     # NOTE: dose_compound and primary_analyte MAY DIFFER
population:          # short label for the study population the FINAL parameters describe,
                     #   e.g. "healthy adults", "preterm newborns", "paediatric oncology patients"
age_class:           # one of: neonate | infant | child | adolescent | adult | elderly | mixed | unknown
n_subjects:          # number of subjects in the analysis (a plain integer), or unknown
condition:           # health/disease state, e.g. healthy | patent ductus arteriosus | renal impairment
species:             # the species the data were measured in: human | rat | mouse | dog | cat |
                     #   horse | cattle | sheep | goat | pig | rabbit | monkey | bird | fish |
                     #   other animal (name it) | in vitro | unknown

# List each compound on its own line under 'compounds', one per line, as:
#   - name | role | dosed | measured | has_parameters
# where role = parent | metabolite | co-administered | analyte-only | endogenous_biomarker
#       (endogenous_biomarker = a substance the body makes, whose kinetics the model
#        describes; it is never 'dosed')
#       dosed = yes/no (subject receives it)
#       measured = yes/no (its concentrations are modelled)
#       has_parameters = yes/no (paper gives it V/CL or a compartment)
compounds:
  -

# List each parent-&gt;metabolite (or interconversion) link on its own line under
# 'links', one per line, as:
#   - from | to | relation | link_parameter
# where relation = metabolism | hydrolysis | interconversion
#       link_parameter = Kfm | Fm | formation clearance | none
# If there are no links, write 'links: none' on a single line.
links:
  -

RULES:
- dose_compound and primary_analyte may be different. Allopurinol dosed,
  oxypurinol measured is a valid, common case. Do NOT collapse them to one name.
- A model of an endogenous substance's turnover under the drug (uric acid under
  allopurinol, INR under warfarin) is paper_class=biomarker_turnover with the substance
  listed as role=endogenous_biomarker; is_poppk may still be yes for that model, but the
  drug's own V/CL are then NOT reported.
- population describes the group the FINAL model parameters characterise (the whole
  analysis dataset), not a covariate subgroup. Prefer the paper's own wording.
- species is REQUIRED whenever the paper states it (veterinary and preclinical studies
  are common: "in cats", "Sprague-Dawley rats", "Thoroughbred horses"). Write human only when the subjects are people; do not assume it.
- List EVERY compound, including inactive metabolites, with its role.
- A compound measured but with has_parameters=no is mentioned but not modelled;
  still list it.
- Use the pipe character '|' to separate fields on the list lines.
- Output ONLY the YAML. No prose, no code fences.

OUTPUT FORMAT OVERRIDE: ignore any instruction above to answer in YAML. Return ONLY a JSON object matching the supplied schema. Put each value in its OWN named field — never repeat a field name as a value, never pack several values into one string..

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference.svg" alt="Mirikizumab_Chua2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| apparent total body clearance (CL) of mirikizumab from plasma | CL | 0.023 | L/h |
| estimated volume of distribution | V | 5.74 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0997, model 0.00124).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — mirikizumab: CL 0.023 L/h, V 5.74 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of apparent total body clearance: this record has none, the second reading 0.023; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| apparent total body clearance (CL) of mirikizumab from plasma | `Q22` · CL | 0.023 | L/h | 6.389e-09 | m3/s | L/h | boundary (0.8) | Chua_2023:other_prose |
| estimated volume of distribution | `Q61` · V | 5.74 | L | 0.00574 | m3 | L | boundary (0.8) | Chua_2023:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'concentration (μg/mL)' (captured trailing unit 'μg/mL' for child rows)
- dropped unlinked row (NIL): 'mirikizumab bioanalytical assay value' — extend the ontology if this is a real PK parameter (source ['fig_6:caption'])
- salvaged Q22 ('apparent total body clearance (CL) of mirikizumab from plasma'=0.023) from results prose — parameter table was unreadable
- salvaged Q61 ('estimated volume of distribution'=5.74) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mirikizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'mirikizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent total body clearance (cl) of mirikizumab from plasma]` | 0.023 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent total body clearance]` |  | 0.023 | only_one_extracted |
| `gpt-oss-120b` | `parameters[estimated volume of distribution]` | 5.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intravenous (iv) mirikizumab dose]` |  | 300 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.023 | ['Chua_2023:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.023 L/h | ['Chua_2023:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.74 L | ['Chua_2023:discussion_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=mirikizumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 0.0997 | 0.001237 | 0.0124 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0101 | 0.001237 | 0.1224 | μg/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | pass | 228 | 173 | 0.7587 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_modelica.zip" download>Mirikizumab_Chua2023_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_fmi.zip" download>Mirikizumab_Chua2023_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_matlab.zip" download>Mirikizumab_Chua2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_matlab_simbio.zip" download>Mirikizumab_Chua2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_sbml.zip" download>Mirikizumab_Chua2023_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_cellml.zip" download>Mirikizumab_Chua2023_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7.1e-06 | kg |
| input | model | `Cl` | 6.389e-09 | m3/s |
| input | model | `VdPerKg` | 8.2e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chua L, Friedrich S, Zhang XC. Mirikizumab Pharmacokinetics in Patients with Moderately to Severely Active Ulcerative Colitis: Results from Phase III LUCENT Studies. Clinical pharmacokinetics 62(10):1479–1491 (2023). [doi:10.1007/s40262-023-01281-z](https://doi.org/10.1007/s40262-023-01281-z)

**This record:** Pharmacolibrary v26.09, model `Mirikizumab_Chua2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference>

```bibtex
@misc{pharmacolibrary_MirikizumabChua2023reference,
  title  = {{Pharmacolibrary model Mirikizumab_Chua2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference},
  note   = {Parameters from doi:10.1007/s40262-023-01281-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7.1 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 7.1 mg parenteral (L04AC24) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference/Mirikizumab_Chua2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Mirikizumab_Chua2023_reference_params.json` · controls `Mirikizumab_Chua2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirikizumab%5D%20Mirikizumab_Chua2023_reference&body=Drug%3A%20mirikizumab%0ARecord%3A%20Mirikizumab_Chua2023_reference%0APaper%3A%20Chua_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:08 UTC</sub>
