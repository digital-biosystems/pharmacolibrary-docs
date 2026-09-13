<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;Metamizole&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole/&quot;},{&quot;label&quot;:&quot;Ziesenitz_2019 \u00b7 infants and children&quot;}]"></div>

# Metamizole — `Metamizole_Ziesenitz2019_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `metamizole`, measured `4-methylaminoantipyrine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ziesenitz VC; Rodieux F; Atkinson A; Borter C; Bielicki JA; Haschke M; et al. et al. (2019). European journal of clinical pharmacology 75
  ·  DOI: [10.1007/s00228-019-02720-2](https://doi.org/10.1007/s00228-019-02720-2)

## Model component
<dbs-pgx drug="Metamizole" model-id="Metamizole_Ziesenitz2019_reference" status="not_modelled" stale="false" population="infants and children" measured-compound="4-methylaminoantipyrine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=4-methylaminoantipyrine
- topology: 4 first-order transfer(s) across 4 compounds → general_linear
- gap-filled Q22 (CL) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Ekobena_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Ekobena_2025's review values (primary lacked it)
- removed gap-filled parent disposition (Q22, Q61, Q49, Q83): this record measures '4-methylaminoantipyrine', not metamizole, and reports no metabolite CL/V — the imported values describe a compartment this record did not measure

**Extraction notes:**
- no GROBID TEI available, and no PDF or abstract text to fall back on

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.46 | not captured | not captured | ['Ekobena_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.46 L/h | not captured | not captured | ['Ekobena_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.6 L | not captured | not captured | ['Ekobena_2025:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metamizole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ziesenitz_2019` / `Ziesenitz_2019::infants and children`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference/Metamizole_Ziesenitz2019_reference_modelica.zip" download>Metamizole_Ziesenitz2019_reference_modelica.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference/Metamizole_Ziesenitz2019_reference_fmi.zip" download>Metamizole_Ziesenitz2019_reference_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference/Metamizole_Ziesenitz2019_reference_matlab.zip" download>Metamizole_Ziesenitz2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference/Metamizole_Ziesenitz2019_reference_matlab_simbio.zip" download>Metamizole_Ziesenitz2019_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference/Metamizole_Ziesenitz2019_reference_sbml.zip" download>Metamizole_Ziesenitz2019_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_metamizole/Metamizole_Ziesenitz2019_reference/Metamizole_Ziesenitz2019_reference_cellml.zip" download>Metamizole_Ziesenitz2019_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
