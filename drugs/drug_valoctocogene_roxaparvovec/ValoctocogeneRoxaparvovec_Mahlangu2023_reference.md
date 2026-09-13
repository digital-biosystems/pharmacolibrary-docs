<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;valoctocogene roxaparvovec&quot;,&quot;href&quot;:&quot;drugs/drug_valoctocogene_roxaparvovec/&quot;},{&quot;label&quot;:&quot;Mahlangu_2023 \u00b7 men with severe hemophilia A&quot;}]"></div>

# valoctocogene roxaparvovec — `ValoctocogeneRoxaparvovec_Mahlangu2023_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `valoctocogene roxaparvovec`, measured `factor VIII`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mahlangu J; Kaczmarek R; von Drygalski A; Shapiro S; Chou SC; Ozelo MC; et al. et al. (2023). The New England journal of medicine 388
  ·  DOI: [10.1056/NEJMoa2211075](https://doi.org/10.1056/NEJMoa2211075)

## Model component
<dbs-pgx drug="valoctocogene roxaparvovec" model-id="ValoctocogeneRoxaparvovec_Mahlangu2023_reference" status="not_modelled" stale="false" population="men with severe hemophilia A" measured-compound="factor VIII" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=factor VIII
- gap-filled Q22 (CL) from Cao_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Cao_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- removed gap-filled parent disposition (Q22, Q61): this record measures 'factor VIII', not valoctocogene_roxaparvovec, and reports no metabolite CL/V — the imported values describe a compartment this record did not measure

**Extraction notes:**
- no GROBID TEI available, and no PDF or abstract text to fall back on

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Cao_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Cao_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.011 | not captured | not captured | ['Cao_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.77 L/h | not captured | not captured | ['Cao_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.55 L | not captured | not captured | ['Cao_2025:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=factor VIII) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_valoctocogene_roxaparvovec/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mahlangu_2023` / `Mahlangu_2023::men with severe hemophilia A`)
- sim: `../../../knowledgebase/drugs/drug_valoctocogene_roxaparvovec/models/modelica/ValoctocogeneRoxaparvovec_Mahlangu2023_men_with_severe_hemop.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference/ValoctocogeneRoxaparvovec_Mahlangu2023_reference.svg" alt="ValoctocogeneRoxaparvovec_Mahlangu2023_reference diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference/ValoctocogeneRoxaparvovec_Mahlangu2023_reference_modelica.zip" download>ValoctocogeneRoxaparvovec_Mahlangu2023_reference_modelica.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference/ValoctocogeneRoxaparvovec_Mahlangu2023_reference_fmi.zip" download>ValoctocogeneRoxaparvovec_Mahlangu2023_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference/ValoctocogeneRoxaparvovec_Mahlangu2023_reference_matlab.zip" download>ValoctocogeneRoxaparvovec_Mahlangu2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference/ValoctocogeneRoxaparvovec_Mahlangu2023_reference_matlab_simbio.zip" download>ValoctocogeneRoxaparvovec_Mahlangu2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference/ValoctocogeneRoxaparvovec_Mahlangu2023_reference_sbml.zip" download>ValoctocogeneRoxaparvovec_Mahlangu2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference/ValoctocogeneRoxaparvovec_Mahlangu2023_reference_cellml.zip" download>ValoctocogeneRoxaparvovec_Mahlangu2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
