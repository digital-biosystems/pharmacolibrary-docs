<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;tamoxifen&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/&quot;},{&quot;label&quot;:&quot;Mc_2024 \u00b7 reference&quot;}]"></div>

# tamoxifen — `Tamoxifen_Mc2024_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Read the .deviation.json and confirm each deviation names what changed and why.
4. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `tamoxifen`, measured `Z-endoxifen`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mc Laughlin AM; Helland T; Klima F; Koolen SLW; van Schaik RHN; Mathijssen RHJ; et al. et al. (2024). Clinical pharmacology and therapeutics 116
  ·  DOI: [10.1002/cpt.3238](https://doi.org/10.1002/cpt.3238)

## Model component
<dbs-pgx drug="tamoxifen" model-id="Tamoxifen_Mc2024_reference" status="model_quarantined" stale="false" population="tamoxifen-treated patients" measured-compound="Z-endoxifen" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- column 'parameter [unit]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Fixed effects' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col1', 'tab_2:row1:col3'])
- dropped unlinked row (NIL): 'Random effects' — extend the ontology if this is a real PK parameter (source ['tab_2:row26:col1', 'tab_2:row26:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Z-endoxifen
- gap-filled Q22 (CL) from Bosch_2023's review values (primary lacked it)
- gap-filled Q61 (V) from Dilli_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- removed gap-filled parent disposition (Q22, Q61): this record measures 'Z-endoxifen', not tamoxifen, and reports no metabolite CL/V — the imported values describe a compartment this record did not measure

**Extraction notes:**
- unparsed cell tab_2:row26:col3 = '43.7% CV'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bosch_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dilli_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 50.0 | not captured | not captured | ['Bosch_2023:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3 L/h | not captured | not captured | ['Bosch_2023:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 724 L | not captured | not captured | ['Dilli_2022:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no structural disposition parameters in record |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tamoxifen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mc_2024` / `Mc_2024::reference`)
- model: `../../../knowledgebase/drugs/drug_tamoxifen/models/modelica/_needs_review/Tamoxifen_Mc2024_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_tamoxifen/models/modelica/_needs_review/Tamoxifen_Mc2024_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tamoxifen/Tamoxifen_Mc2024_reference/Tamoxifen_Mc2024_reference_matlab.zip" download>Tamoxifen_Mc2024_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tamoxifen/Tamoxifen_Mc2024_reference/Tamoxifen_Mc2024_reference_matlab_simbio.zip" download>Tamoxifen_Mc2024_reference_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tamoxifen/Tamoxifen_Mc2024_reference/Tamoxifen_Mc2024_reference_sbml.zip" download>Tamoxifen_Mc2024_reference_sbml.zip</a> <span class="pk-size">(2.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tamoxifen/Tamoxifen_Mc2024_reference/Tamoxifen_Mc2024_reference_cellml.zip" download>Tamoxifen_Mc2024_reference_cellml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
