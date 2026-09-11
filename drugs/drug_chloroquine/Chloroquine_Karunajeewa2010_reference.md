# chloroquine — `Chloroquine_Karunajeewa2010_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — engineer.** parent/metabolite records are not currently produced as models — the composite builds but does not survive simulation<br><sub>evidence: `topology_template=parent_metabolite`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** no model exists yet, so there is nothing to judge.

**Steps:**
1. Not a curation fix — engineer limitation.
2. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Karunajeewa HA; Salman S; Mueller I; Baiwog F; Gomorrai S; Law I; et al. et al. (2010). Antimicrobial agents and chemotherapy 54
  ·  DOI: [10.1128/AAC.01269-09](https://doi.org/10.1128/AAC.01269-09)

## Model component
<dbs-pgx drug="chloroquine" model-id="Chloroquine_Karunajeewa2010_reference" status="not_modelled" stale="false" population="pregnant and nonpregnant Papua New Guinean women" measured-compound="chloroquine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| OFV | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | llm (0.5) | tab_0:row2:col1, tab_0:row2:col2 | — | not captured |
| CQ metabolic clearance to DECQ (CL M ) accounts for | `Q22` · CL | —(suppressed) | % | — | % | not captured | boundary (0.8) | Karunajeewa_2010:results_prose | — | not captured |
| median steady-state volume of distribution (V SS /F) | `Q61` · V | —(suppressed) | liters | — | liters | not captured | boundary (0.8) | Karunajeewa_2010:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('CQ metabolic clearance to DECQ (CL M ) accounts for'=15.2) from results prose — parameter table was unreadable
- salvaged Q61 ('median steady-state volume of distribution (V SS /F)'=6707) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=chloroquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_0:row1:col3 = 'Bootstrap replicates (n ϭ 1,000) (median ͓95% empirical CI e ͔)'
- unparsed cell tab_0:row2:col3 = '13,442 ͓12,915-13,840͔'
- unparsed cell tab_0:row4:col1 = '1.4 ͓17͔'
- unparsed cell tab_0:row4:col2 = '1.4 ͓18͔'
- unparsed cell tab_0:row4:col3 = '1.4 ͓1.0-2.0͔'
- unparsed cell tab_0:row5:col1 = '34.1 ͓7͔'
- unparsed cell tab_0:row5:col2 = '29.3 ͓6͔'
- unparsed cell tab_0:row5:col3 = '29.4 ͓25.9-32.7͔'
- unparsed cell tab_0:row6:col2 = '8.7 ͓23͔'
- unparsed cell tab_0:row6:col3 = '8.7 ͓4.7-13.2͔'
- unparsed cell tab_0:row7:col1 = '4,160 ͓7͔'
- unparsed cell tab_0:row7:col2 = '4,220 ͓6͔'
- unparsed cell tab_0:row7:col3 = '4,220 ͓3,727-4,713͔'
- unparsed cell tab_0:row8:col2 = '221 ͓32͔'
- unparsed cell tab_0:row8:col3 = '221 ͓77-347͔'
- unparsed cell tab_0:row9:col1 = '20 ͓14͔'
- unparsed cell tab_0:row9:col2 = '20 ͓13͔'
- unparsed cell tab_0:row9:col3 = '20.1 ͓16.1-26.2͔'
- unparsed cell tab_0:row10:col1 = '5,200 ͓10͔'
- unparsed cell tab_0:row10:col2 = '5,190 ͓10͔'
- unparsed cell tab_0:row10:col3 = '5,240 ͓4,380-6,460͔'
- unparsed cell tab_0:row11:col1 = '9.2 ͓9͔'
- unparsed cell tab_0:row11:col2 = '7.0 ͓7͔'
- unparsed cell tab_0:row11:col3 = '7.0 ͓6.1-8.0͔'
- unparsed cell tab_0:row12:col2 = '4.0 ͓16͔'
- unparsed cell tab_0:row12:col3 = '4.0 ͓2.6-5.5͔'
- unparsed cell tab_0:row13:col1 = '39.9 ͓10͔'
- unparsed cell tab_0:row13:col2 = '40.0 ͓10͔'
- unparsed cell tab_0:row13:col3 = '40.2 ͓33.0-47.7͔'
- unparsed cell tab_0:row14:col1 = '3.6 ͓11͔'
- unparsed cell tab_0:row14:col2 = '3.6 ͓10͔'
- unparsed cell tab_0:row14:col3 = '3.6 ͓3.03-4.4͔'
- unparsed cell tab_0:row15:col1 = '812 ͓17͔'
- unparsed cell tab_0:row15:col2 = '840 ͓17͔'
- unparsed cell tab_0:row15:col3 = '838 ͓610-1,130͔'
- unparsed cell tab_0:row16:col1 = '33.5 ͓24͔'
- unparsed cell tab_0:row16:col2 = '28.5 ͓24͔'
- unparsed cell tab_0:row16:col3 = '27.8 ͓21.1-34.4͔'
- unparsed cell tab_0:row17:col1 = '44.7 ͓20͔'
- unparsed cell tab_0:row17:col2 = '40.1 ͓22͔'
- unparsed cell tab_0:row17:col3 = '39.2 ͓30.6-48.3͔'
- unparsed cell tab_0:row18:col1 = '48.6 ͓19͔'
- unparsed cell tab_0:row18:col2 = '38.7 ͓20͔'
- unparsed cell tab_0:row18:col3 = '38.1 ͓30.5-45.6͔'
- unparsed cell tab_0:row19:col1 = '86.7 ͓25͔'
- unparsed cell tab_0:row19:col2 = '87.9 ͓26͔'
- unparsed cell tab_0:row19:col3 = '86.3 ͓64.4-108.6͔'
- unparsed cell tab_0:row20:col1 = '62.4 ͓22͔'
- unparsed cell tab_0:row20:col2 = '61.9 ͓22͔'
- unparsed cell tab_0:row20:col3 = '61.8 ͓49.4-77.1͔'
- unparsed cell tab_0:row22:col1 = '0.69 ͓24͔'
- unparsed cell tab_0:row22:col2 = '0.63 ͓27͔'
- unparsed cell tab_0:row22:col3 = '0.64 ͓0.44-0.79͔'
- unparsed cell tab_0:row23:col1 = '0.86 ͓24͔'
- unparsed cell tab_0:row23:col2 = '0.81 ͓26͔'
- unparsed cell tab_0:row23:col3 = '0.82 ͓0.61-0.93͔'
- unparsed cell tab_0:row24:col1 = '0.86 ͓20͔'
- unparsed cell tab_0:row24:col2 = '0.88 ͓20͔'
- unparsed cell tab_0:row24:col3 = '0.90 ͓0.80-0.98͔'
- unparsed cell tab_0:row25:col1 = '40.6 ͓8͔'
- unparsed cell tab_0:row25:col2 = '40.6 ͓8͔'
- unparsed cell tab_0:row25:col3 = '40.5 ͓37.4-43.5͔'
- unparsed cell tab_0:row26:col1 = '39.7 ͓7͔'
- unparsed cell tab_0:row26:col2 = '39.7 ͓7͔'
- unparsed cell tab_0:row26:col3 = '39.6 ͓37.1-42.2͔'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 15.2 | not captured | not captured | ['Karunajeewa_2010:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 79 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 75 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 12.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 9.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 15 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_chloroquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Karunajeewa_2010` / `Karunajeewa_2010::pregnant and nonpregnant Papua New Guinean women`)


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
