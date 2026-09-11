# lidocaine — `Lidocaine_He2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked

**Steps:**
1. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
2. Parent/metabolite records commonly miss the formation link.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
He C; Qi X; Liu Y; Jin Y; Zhang M; Zhang Y; et al. et al. (2025). Drug design, development and therapy 19
  ·  DOI: [10.2147/DDDT.S485389](https://doi.org/10.2147/DDDT.S485389)

## Model component
<dbs-pgx drug="lidocaine" model-id="Lidocaine_He2025_reference" status="rejected" stale="false" population="partial hepatectomy patients" measured-compound="lidocaine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| lidocaine clearance estimated by the final model | `Q22` · CL | —(suppressed) | L/h | — | L/h | not captured | boundary (0.8) | He_2025:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V1 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'CLFM'
- dropped value-less row: 'V2 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'CLD (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'CLEFM'
- dropped value-less row: 'CLE (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'CLG (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'The effect of SIZE on CL'
- dropped value-less row: 'The effect of DOSE on CLFM'
- dropped value-less row: 'The effect of TBW on CLFM'
- dropped value-less row: 'The effect of DOSE on V2'
- dropped value-less row: 'The effect of DOSE on CLG'
- dropped value-less row: 'CL'
- dropped value-less row: 'V1'
- dropped value-less row: 'V2'
- dropped value-less row: 'CLD'
- dropped value-less row: 'CLG'
- salvaged Q22 ('lidocaine clearance estimated by the final model'=26.1) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell t0002:row1:col1 = '26.1 (17.59, 34.61)'
- unparsed cell t0002:row1:col3 = '26.2 (23.48, 29.17)'
- unparsed cell t0002:row2:col1 = '8.73 (5.34, 12.12)'
- unparsed cell t0002:row2:col3 = '8.38 (1.03, 12.68)'
- unparsed cell t0002:row3:col3 = '0.017 (0.002, 0.027)'
- unparsed cell t0002:row4:col1 = '63.6 (43.22, 83.94)'
- unparsed cell t0002:row4:col3 = '65.3 (56.28, 74.94)'
- unparsed cell t0002:row5:col1 = '41.0 (17.87, 64.13)'
- unparsed cell t0002:row5:col3 = '42.8 (32.52, 56.55)'
- unparsed cell t0002:row6:col1 = '0.897 (0.794, 1)'
- unparsed cell t0002:row6:col3 = '0.907 (0.727, 1.125)'
- unparsed cell t0002:row7:col1 = '1.41 (0.795, 2.025)'
- unparsed cell t0002:row7:col3 = '1.37 (0.16, 2.18)'
- unparsed cell t0002:row8:col1 = '4.77 (1.54, 8)'
- unparsed cell t0002:row8:col3 = '4.66 (0.55, 7.34)'
- unparsed cell t0002:row9:col1 = '–0.382 (–0.717, –0.047)'
- unparsed cell t0002:row9:col3 = '–0.377 (–0.618, –0.142)'
- unparsed cell t0002:row10:col1 = '0.669 (0.161, 1.177)'
- unparsed cell t0002:row10:col3 = '0.691 (0.277, 1.03)'
- unparsed cell t0002:row11:col1 = '–1.09 (–2.66, 0.48)'
- unparsed cell t0002:row11:col3 = '–1.13 (–1.64, –0.62)'
- unparsed cell t0002:row12:col1 = '1.27 (0.315, 2.225)'
- unparsed cell t0002:row12:col3 = '1.25 (0.708, 1.82)'
- unparsed cell t0002:row13:col1 = '1 (–0.196, 2.196)'
- unparsed cell t0002:row13:col3 = '0.99 (0.703, 1.35)'
- unparsed cell t0002:row15:col3 = '8.42 (4.25, 12.66)'
- unparsed cell t0002:row16:col3 = '4.2 (2, 7)'
- unparsed cell t0002:row17:col3 = '8.17 (2.9, 13.9)'
- unparsed cell t0002:row18:col3 = '17.6 (6.4, 31)'
- unparsed cell t0002:row19:col3 = '48.3 (12.4, 95.9)'
- unparsed cell t0002:row22:col3 = '15 (9.8, 20.8)'
- unparsed cell t0002:row24:col3 = '5.5 (4.1, 6.9)'
- unparsed cell t0002:row25:col3 = '3.5 (2.1, 5.1)'
- unparsed cell t0002:row26:col3 = '11 (9, 13)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26.1 | not captured | not captured | ['He_2025:discussion_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLFM', 'CLEFM'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 26.1 L/h | not captured | not captured | ['He_2025:discussion_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `He_2025` / `He_2025::partial hepatectomy patients`)


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
