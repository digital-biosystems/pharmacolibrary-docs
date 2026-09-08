# avatrombopag — `Avatrombopag_Liu2025v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Liu X; Chen L; Ju G; Li C; Liu B; Fei Y; et al. et al. (2025). Pharmaceuticals (Basel, Switzerland) 18
  ·  DOI: [10.3390/ph18060903](https://doi.org/10.3390/ph18060903)

## Model component
<dbs-pgx drug="avatrombopag" model-id="Avatrombopag_Liu2025v2_reference" status="needs_review" stale="false" population="healthy Chinese adults" measured-compound="avatrombopag" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row2:col1 | — | not captured |
| Vd/F (L) | `Q76` · V/F | —(suppressed) | L | — | [l] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row3:col1 | — | not captured |
| ka (/h) | `Q49` · kabs | —(suppressed) | /h | — | [1] / [h] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row4:col1 | — | not captured |
| MTT (h) | `Q81` · MTT | —(suppressed) | h | — | [h] | not captured | exact (1.0) | pharmaceuticals-18-00903-t003:row5:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '/h' (kabs)
- dropped unlinked row (NIL): 'COV1 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row6:col1'])
- dropped unlinked row (NIL): 'COV2 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row7:col1'])
- dropped unlinked row (NIL): 'COV3 *' — extend the ontology if this is a real PK parameter (source ['pharmaceuticals-18-00903-t003:row8:col1'])
- dropped duplicate Q27 ('CL/F', value '0.182') — already have one for this compound
- dropped duplicate Q76 ('Vd/F', value '0.159') — already have one for this compound
- dropped duplicate Q49 ('KA', value '0.504') — already have one for this compound
- dropped duplicate Q81 ('MTT', value '0.131') — already have one for this compound
- dropped duplicate Q49 ('OCC [KA]', value '0.913') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=avatrombopag
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceuticals-18-00903-t003:row2:col2 = '14%'
- unparsed cell pharmaceuticals-18-00903-t003:row2:col3 = '7.81 [5.92–10.62]'
- unparsed cell pharmaceuticals-18-00903-t003:row3:col2 = '13%'
- unparsed cell pharmaceuticals-18-00903-t003:row3:col3 = '198.01 [149.77–267.64]'
- unparsed cell pharmaceuticals-18-00903-t003:row4:col2 = '13%'
- unparsed cell pharmaceuticals-18-00903-t003:row4:col3 = '0.581 [0.4723–0.785]'
- unparsed cell pharmaceuticals-18-00903-t003:row5:col2 = '5%'
- unparsed cell pharmaceuticals-18-00903-t003:row5:col3 = '1.33 [1.22–1.45]'
- unparsed cell pharmaceuticals-18-00903-t003:row6:col2 = '111%'
- unparsed cell pharmaceuticals-18-00903-t003:row6:col3 = '−0.0702 [−0.3069–0.2698]'
- unparsed cell pharmaceuticals-18-00903-t003:row7:col2 = '15%'
- unparsed cell pharmaceuticals-18-00903-t003:row7:col3 = '−0.28 [−0.47–0.01]'
- unparsed cell pharmaceuticals-18-00903-t003:row8:col2 = '56%'
- unparsed cell pharmaceuticals-18-00903-t003:row8:col3 = '0.186 [−0.216–0.431]'
- unparsed cell pharmaceuticals-18-00903-t003:row10:col2 = '35%'
- unparsed cell pharmaceuticals-18-00903-t003:row10:col3 = '0.174 [0.126–0.235]'
- unparsed cell pharmaceuticals-18-00903-t003:row11:col2 = '32%'
- unparsed cell pharmaceuticals-18-00903-t003:row11:col3 = '0.153 [0.106–0.204]'
- unparsed cell pharmaceuticals-18-00903-t003:row12:col2 = '35%'
- unparsed cell pharmaceuticals-18-00903-t003:row12:col3 = '0.48 [0.29–0.78]'
- unparsed cell pharmaceuticals-18-00903-t003:row13:col2 = '23%'
- unparsed cell pharmaceuticals-18-00903-t003:row13:col3 = '0.128 [0.093–0.169]'
- unparsed cell pharmaceuticals-18-00903-t003:row14:col2 = '12%'
- unparsed cell pharmaceuticals-18-00903-t003:row14:col3 = '0.922 [0.681–1.346]'
- unparsed cell pharmaceuticals-18-00903-t003:row17:col2 = '3.00%'
- unparsed cell pharmaceuticals-18-00903-t003:row17:col3 = '1.17 [0.86–1.48]'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 25.68 | 17.572 | 0.6843 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceuticals-18-00903-t003:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceuticals-18-00903-t003:row3:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.85 L/h | not captured | not captured | ['pharmaceuticals-18-00903-t003:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 199 L | not captured | not captured | ['pharmaceuticals-18-00903-t003:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avatrombopag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liu_2025_2` / `Liu_2025_2::reference`)


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
