# lusutrombopag — `Lusutrombopag_Katsube2019_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Katsube T; Shimizu R; Fukuhara T; Kano T; Wajima T et al. (2019). Clinical pharmacokinetics 58
  ·  DOI: [10.1007/s40262-019-00770-4](https://doi.org/10.1007/s40262-019-00770-4)

## Model component
<dbs-pgx drug="lusutrombopag" model-id="Lusutrombopag_Katsube2019_reference" status="not_modelled" stale="false" population="healthy subjects and patients with chronic liver disease" measured-compound="lusutrombopag" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical CL/F | `Q27` · CL/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row3:col1 | — | not captured |
| effect_of_wt | `Q900` · effect_of_wt | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row4:col1, Tab2:row10:col1, Tab2:row15:col1 | — | not captured |
| effect_of_sex | `Q900` · effect_of_sex | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row5:col1 | — | not captured |
| effect_of_ethnicity | `Q900` · effect_of_ethnicity | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row6:col1 | — | not captured |
| Q3/F [L/h] | `Q309` · Q3/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row12:col1 | — | not captured |
| Typical V3/F | `Q78` · V3/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row14:col1 | — | not captured |
| Q4/F [L/h] | `Q69` · Q/F | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Tab2:row16:col1 | — | not captured |
| F1 of solution in the fasted state | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row24:col1 | — | not captured |
| KM [/h] | `Q1` · Km | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row40:col1 | — | not captured |
| KL [/h] | `Q47` · kel | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Tab2:row41:col1 | — | not captured |
| Lag time Solution in the fed state | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Katsube_2019:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V2/F [L] | Q82 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- covariate level 'Effect of WT' → Q900:effect_of_wt = 1.00 (linear_fractional on Q27)
- covariate level 'Effect of sex' → Q900:effect_of_sex = 0.874 (linear_fractional on Q27)
- covariate level 'Effect of ethnicity' → Q900:effect_of_ethnicity = 0.868 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Effect of subject population' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1', 'Tab2:row11:col1'])
- dropped duplicate Q82 ('Typical V2/F', value '12.2') — already have one for this compound
- dropped unlinked row (NIL): 'V4/F [L]' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col1'])
- dropped unlinked row (NIL): 'Solution in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col1', 'Tab2:row22:col1', 'Tab2:row26:col1'])
- dropped unlinked row (NIL): 'Others (solution in the fasted state, 2 mg tablet in the fed state, 0.25 mg tablet in the fed state, 2.5 mg [2 × 0.25 mg tablets and 1 × 2 mg tablet] in the fed state, 3.0 mg [4 × 0.25 mg tablets and 1 × 2 mg tablet] in the fed state, 1 mg tablet in the fed state, 3 mg tablet in the fed state)' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col1', 'Tab2:row23:col1'])
- dropped unlinked row (NIL): '2 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col1'])
- dropped unlinked row (NIL): '0.25 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col1'])
- dropped unlinked row (NIL): '2.5 mg (2 × 0.25 mg tablets and 1 × 2 mg tablet) in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row29:col1'])
- dropped unlinked row (NIL): '3.0 mg (4 × 0.25 mg tablets and 1 × 2 mg tablet) in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row30:col1'])
- dropped unlinked row (NIL): '1 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row31:col1'])
- dropped unlinked row (NIL): '3 mg tablet in the fed state' — extend the ontology if this is a real PK parameter (source ['Tab2:row32:col1'])
- dropped unlinked row (NIL): 'Typical SLOP' — extend the ontology if this is a real PK parameter (source ['Tab2:row43:col1'])
- dropped unlinked row (NIL): 'Effect of CPS ≥ 9' — extend the ontology if this is a real PK parameter (source ['Tab2:row44:col1'])
- dropped unlinked row (NIL): 'PLT0 [×104/µL]' — extend the ontology if this is a real PK parameter (source ['Tab2:row45:col1'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V3/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'slope' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lusutrombopag
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- gap-filled Q83 (tlag) from Katsube_2019's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row3:col2 = '0.876 (0.810–0.935)'
- unparsed cell Tab2:row5:col2 = '0.874 (0.816–0.941)'
- unparsed cell Tab2:row6:col2 = '0.866 (0.809–0.940)'
- unparsed cell Tab2:row7:col2 = '0.865 (0.788–0.952)'
- unparsed cell Tab2:row9:col2 = '12.3 (5.75–13.9)'
- unparsed cell Tab2:row11:col2 = '1.45 (1.25–2.17)'
- unparsed cell Tab2:row12:col2 = '0.851 (0.672–0.993)'
- unparsed cell Tab2:row14:col2 = '8.95 (7.71–12.1)'
- unparsed cell Tab2:row16:col2 = '0.0267 (0.0216–0.0341)'
- unparsed cell Tab2:row17:col2 = '3.43 (2.79–5.38)'
- unparsed cell Tab2:row19:col2 = '0.165 (0.0925–0.197)'
- unparsed cell Tab2:row20:col2 = '0.218 (0.117–0.249)'
- unparsed cell Tab2:row22:col2 = '0.568 (0.504–0.677)'
- unparsed cell Tab2:row23:col2 = '0.193 (0.183–0.208)'
- unparsed cell Tab2:row31:col2 = '0.971 (0.860–1.08)'
- unparsed cell Tab2:row32:col2 = '0.837 (0.766–0.915)'
- unparsed cell Tab2:row40:col2 = '0.0318 (0.0288–0.0353)'
- unparsed cell Tab2:row41:col2 = '0.00871 (0.00720–0.0108)'
- unparsed cell Tab2:row43:col2 = '9.09 (8.28–10.0)'
- unparsed cell Tab2:row44:col2 = '1.69 (1.26–2.13)'
- unparsed cell Tab2:row45:col2 = '3.92 (3.80–4.05)'
- unparsed cell Tab2:row53:col2 = '0.246 (0.130–0.332)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Katsube_2019:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lusutrombopag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Katsube_2019` / `Katsube_2019::healthy subjects and patients with chronic liver disease`)


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
