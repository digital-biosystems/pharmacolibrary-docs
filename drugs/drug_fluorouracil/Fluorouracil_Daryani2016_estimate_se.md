# fluorouracil — `Fluorouracil_Daryani2016_estimate_se`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Daryani VM; Patel YT; Tagen M; Turner DC; Carcaboso AM; Atkinson JM; et al. et al. (2016). CPT: pharmacometrics & systems pharmacology 5
  ·  DOI: [10.1002/psp4.12075](https://doi.org/10.1002/psp4.12075)

## Model component
<dbs-pgx drug="fluorouracil" model-id="Fluorouracil_Daryani2016_estimate_se" status="rejected" stale="false" population="children with ependymoma" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Maximum plasma 5‐FU elimination rate (Vmax,plasma,m) | `Q66` · Vmax | —(suppressed) | Vmax,plasma,m | — | [vmax] | not captured | llm_corrected (0.6) | psp412075-tbl-0001:row2:col2 | — | not captured |
| Volume of central compartment (V1,m) | `Q63` · V1 | —(suppressed) | V1,m | — | [v1] | not captured | llm_corrected (0.6) | psp412075-tbl-0001:row4:col2 | — | not captured |
| Intercompartmental clearance (Qm) | `Q30` · Q | —(suppressed) | Qm | — | [qm] | not captured | exact (1.0) | psp412075-tbl-0001:row5:col2 | — | not captured |
| Volume of peripheral compartment (V2,m) | `Q64` · V2 | —(suppressed) | V2,m | — | [v2] | not captured | llm_corrected (0.6) | psp412075-tbl-0001:row6:col2 | — | not captured |
| 5‐FU fraction unbound in mouse plasma (fu,m) | `Q46` · fu | —(suppressed) | fu,m | — | [fu] | not captured | llm_confirmed (0.6) | psp412075-tbl-0001:row11:col2 | — | not captured |
| Volume of tECF compartment (V3,m) | `Q77` · V3 | —(suppressed) | V3,m | — | [v3] | not captured | llm_corrected (0.6) | psp412075-tbl-0001:row12:col2 | — | not captured |
| Systemic clearance (CLp) | `Q22` · CL | —(suppressed) | CLp | — | [clp] | not captured | llm_confirmed (0.6) | Daryani_2016_table_2:row0:col2 | — | not captured |
| theta_q1_category | `Q900` · theta_q1_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp412075-tbl-0001:row3:col2 | — | not captured |
| theta_q303_category | `Q900` · theta_q303_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp412075-tbl-0001:row9:col2 | — | not captured |
| theta_q304_category | `Q900` · theta_q304_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp412075-tbl-0001:row10:col2 | — | not captured |
| Ka, Absorption rate constant (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Bae_2026:review | — | not captured |
| TLAG | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Blesch_2003:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Vmax,plasma,m' (Vmax)
- unit_dimension_unknown: 'V1,m' (V1)
- unit_dimension_mismatch: 'Intercompartmental clearance (Qm)' → Q30 (unit '[length]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'V2,m' (V2)
- unit_dimension_unknown: 'fu,m' (fu)
- unit_dimension_unknown: 'V3,m' (V3)
- dropped unlinked row (NIL): 'Rate parameter for intratumoral 5‐FU disposition (K34,m)' — extend the ontology if this is a real PK parameter (source ['psp412075-tbl-0001:row13:col2'])
- dropped unlinked row (NIL): 'Rate parameter for intratumoral 5‐FU disposition (K43,m)' — extend the ontology if this is a real PK parameter (source ['psp412075-tbl-0001:row14:col2'])
- unit_dimension_unknown: 'Vmax,tumor,m' (Vmax)
- dropped duplicate Q66 ('Maximum tumor 5‐FU elimination rate (Vmax,tumor,m)', value '0.0063') — already have one for this compound
- unit_dimension_unknown: 'CLp' (CL)
- unit_dimension_unknown: 'V1,p' (V1)
- dropped duplicate Q63 ('Volume of central compartment (V1,p)', value '4.2') — already have one for this compound
- unit_dimension_unknown: 'Qp' (Q)
- dropped duplicate Q30 ('Intercompartmental clearance (Qp)', value '1.6') — already have one for this compound
- unit_dimension_unknown: 'V2,p' (V2)
- dropped duplicate Q64 ('Volume of peripheral compartment (V2,p)', value '20.1') — already have one for this compound
- routed 'Proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additive' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q303 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q304 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q1 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate ± se' subgroup of Daryani_2016 (paper reports 2 populations: estimate ± se, unit)
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Blesch_2003's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp412075-tbl-0001:row20:col2 = '0.158 (0.079–0.337)a'
- unparsed cell psp412075-tbl-0001:row21:col2 = '0.102 (0.031–0.287)a'
- unparsed cell psp412075-tbl-0001:row22:col2 = '214,000 (66,700–1,480,000)a'
- unparsed cell psp412075-tbl-0001:row24:col2 = '0.658 (0.316–1.134)a'
- unparsed cell psp412075-tbl-0001:row25:col2 = '2.12 (0.28–5.84)a'
- unparsed cell psp412075-tbl-0001:row27:col2 = '0.946 (0.124–1.950)a'
- companion parameter table 2 transcribed (15 record(s), model stage 'final')
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | fail | [length] | Qm | not captured | not captured | ['psp412075-tbl-0001:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bae_2026:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Blesch_2003:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.6 | not captured | not captured | ['Daryani_2016_table_2:row0:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluorouracil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Daryani_2016` / `Daryani_2016::estimate_se`)


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
