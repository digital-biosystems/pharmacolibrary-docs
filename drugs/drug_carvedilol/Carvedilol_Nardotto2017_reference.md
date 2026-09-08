# carvedilol — `Carvedilol_Nardotto2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `carvedilol`, measured `carvedilol enantiomers and their metabolites`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Nardotto GHB; Lanchote VL; Coelho EB; Della Pasqua O et al. (2017). European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 109S
  ·  DOI: [10.1016/j.ejps.2017.05.033](https://doi.org/10.1016/j.ejps.2017.05.033)

## Model component
<dbs-pgx drug="carvedilol" model-id="Carvedilol_Nardotto2017_reference" status="rejected" stale="false" population="type-2 diabetes and healthy subjects" measured-compound="carvedilol enantiomers and their metabolites" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KaR (h -1 ) | `Q95` · t1/2ka | —(suppressed) | h -1 | — | [1] / [h] | not captured | llm (0.5) | tab_1:row6:col3, tab_1:row6:col4, tab_1:row6:col5, tab_1:row6:col7, tab_1:row6:col9 | — | not captured |
| FR (%) | `Q43` · FR | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row8:col3, tab_1:row8:col4, tab_1:row8:col5, tab_1:row8:col7, tab_1:row8:col9 | — | not captured |
| VcR (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | llm (0.5) | tab_1:row9:col3, tab_1:row9:col4, tab_1:row9:col6, tab_1:row9:col8 | — | not captured |
| QR (L/h) | `Q308` · Q3 | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.5) | tab_1:row10:col3, tab_1:row10:col4, tab_1:row10:col5, tab_1:row10:col7, tab_1:row10:col9 | — | not captured |
| CLR_CYP2D6 (L/h) | `Q26` · CLR | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.5) | tab_1:row15:col3, tab_1:row15:col4, tab_1:row15:col5, tab_1:row15:col7, tab_1:row15:col9 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'KaR (h -1 )' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q61 ('VpR (L)', value '18.17') — already have one for this compound
- dropped duplicate Q26 ('CLR_CYP2C9', value '11.31') — already have one for this compound
- dropped unlinked row (NIL): '(L/h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col4', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7', 'tab_1:row22:col9'])
- dropped duplicate Q26 ('Total CLR (L/h)', value '16.25') — already have one for this compound
- dropped duplicate Q26 ('OHC_CLR (L/h)', value '15.66') — already have one for this compound
- dropped duplicate Q61 ('OHC_VcR (L)', value '15.45') — already have one for this compound
- dropped duplicate Q26 ('DMC_CLR (L/h)', value '17.25') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=carvedilol enantiomers and their metabolites
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_1:row6:col2 = '0.86 (0.54-1.46)'
- unparsed cell tab_1:row6:col6 = '0.85 (0.75-1.02)'
- unparsed cell tab_1:row6:col8 = '0.12 0.16) (0.08-'
- unparsed cell tab_1:row7:col2 = '4.81 (3.47 -7.19)'
- unparsed cell tab_1:row7:col6 = '4.19 (3.87-5.20)'
- unparsed cell tab_1:row7:col8 = '0.110 0.16) (0.08-'
- unparsed cell tab_1:row8:col2 = '25.40 (16.89 -51.54)'
- unparsed cell tab_1:row8:col6 = '23.13 (18.49-30.20)'
- unparsed cell tab_1:row8:col8 = '0.16 0.25) (0.11-'
- unparsed cell tab_1:row9:col2 = '21.42 (7.84 -68.06) 16.88'
- unparsed cell tab_1:row9:col5 = '19.63 (16.30-26.02)'
- unparsed cell tab_1:row9:col7 = '0.66 (0.42-1.1)'
- unparsed cell tab_1:row10:col2 = '28.52 (7.52-34.13)'
- unparsed cell tab_1:row10:col6 = '28.49 (21.83-35.84)'
- unparsed cell tab_1:row10:col8 = '0.18 (0.13-0.26)'
- unparsed cell tab_1:row15:col1 = 'EM T2DM EM CYP2D6'
- unparsed cell tab_1:row15:col2 = '13.70 (7.45-27.56)'
- unparsed cell tab_1:row15:col6 = '6.07 (5.42-8.04)'
- unparsed cell tab_1:row15:col8 = '0.11 (0.08-0.15)'
- unparsed cell tab_1:row21:col1 = 'T2DM'
- unparsed cell tab_1:row21:col8 = '(0.16-'
- unparsed cell tab_1:row22:col1 = 'CYP2D6'
- unparsed cell tab_1:row22:col8 = '0.35)'
- unparsed cell tab_1:row28:col1 = 'T2DM CYP2D6 EM'
- unparsed cell tab_1:row28:col2 = '29.01 (19.34-44.04)'
- unparsed cell tab_1:row28:col6 = '21.69 (17.74-26.34)'
- unparsed cell tab_1:row32:col2 = '31.10 --'
- unparsed cell tab_1:row32:col6 = '42.87 (34.39-53.43)'
- unparsed cell tab_1:row33:col2 = '10.05 --'
- unparsed cell tab_1:row33:col6 = '9.98 (8.72-11.42)'
- unparsed cell tab_1:row34:col2 = '131.54 --'
- unparsed cell tab_1:row34:col6 = '142.44 (102.62-'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row15:col3', 'tab_1:row15:col4', 'tab_1:row15:col5', 'tab_1:row15:col7', 'tab_1:row15:col9'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5', 'tab_1:row10:col7', 'tab_1:row10:col9'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col6', 'tab_1:row9:col8'] |
| C5_dimension_Q95 | fail | 1 / [time] | h -1 | not captured | not captured | ['tab_1:row6:col3', 'tab_1:row6:col4', 'tab_1:row6:col5', 'tab_1:row6:col7', 'tab_1:row6:col9'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nardotto_2017` / `Nardotto_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
