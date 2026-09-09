# tranexamic acid — `TranexamicAcid_Liu2025_covariate_effect`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Liu Y; Zhou C; Lv H; Tian L; Jiang J; Shi J et al. (2025). Drug design, development and therapy 19
  ·  DOI: [10.2147/DDDT.S493485](https://doi.org/10.2147/DDDT.S493485)

## Model component
<dbs-pgx drug="tranexamic acid" model-id="TranexamicAcid_Liu2025_covariate_effect" status="rejected" stale="false" population="Chinese adults undergoing cardiac surgery with cardiopulmonary bypass" measured-compound="tranexamic acid" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL1 (L/h) | Q22 | not captured | llm |
| CL2 (L/h) | Q30 | not captured | special_case |
| V1 (L) | Q63 | not captured | exact |
| V2 (L) | Q64 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'covariate effect' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'covariate effect' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'covariate effect' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'covariate effect' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tranexamic acid
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q30 (Q): CL2 = CL2 typical * (1+0.75*Sex)CL1=CL1 typical * (Age/55)^0 75
- model equation 'CL1 = CL1 typical * (BW/70)^0.75CL2=CL2 typical * (BW/70)^0.75V1= V1 typical * (BW/70)^1V2= V2 typical * (BW/70)^1' not bound — neither LHS nor base term 'CL1' linked to an ontology parameter
- Q30 (Q) is equation-defined: value moved to equation-variable 'CL2 (L/h)'; equation kept verbatim
- population split: 'covariate effect' subgroup of Liu_2025 (paper reports 3 populations: covariate effect, estimate (% rse), the final model)

**Extraction notes:**
- unparsed cell Liu_2025_table_4:row0:col3 = '0.28 (37) (0.03)'
- unparsed cell Liu_2025_table_4:row1:col3 = '0.44 (44) (0.21)'
- unparsed cell Liu_2025_table_4:row2:col3 = '0.30 (48) (0.16)'
- unparsed cell Liu_2025_table_4:row3:col3 = '0.22 (45) (0.12)'
- companion parameter table 4 transcribed (8 record(s), model stage 'final')
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 5 from the LLM selection — perturbations of a model, not a model
- captured model equation CL2 = CL2 typical * (1+0.75*Sex)CL1=CL1 typical * (Age/55)^0 75
- captured model equation CL1 = CL1 typical * (BW/70)^0.75CL2=CL2 typical * (BW/70)^0.75V1= V1 typical * (BW/70)^1V2= V2 typical * (BW/70)^1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Liu_2025_table_4:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Liu_2025_table_4:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Liu_2025_table_4:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Liu_2025_table_4:row3:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tranexamic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liu_2025` / `Liu_2025::covariate_effect`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
