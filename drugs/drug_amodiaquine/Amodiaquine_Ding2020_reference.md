<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/&quot;},{&quot;label&quot;:&quot;Ding_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amodiaquine — `Amodiaquine_Ding2020_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `amodiaquine`, measured `desethylamodiaquine`.

## Citation
Ding J et al., Adherence and Population Pharmacokineti…, Clinical pharmacology and t… (2020)
  ·  DOI: [10.1002/cpt.1707](https://doi.org/10.1002/cpt.1707)

## Model component
<dbs-pgx drug="amodiaquine" model-id="Amodiaquine_Ding2020_reference" status="extracted" stale="false" population="African children under 5 years receiving seasonal malaria chemoprevention" measured-compound="desethylamodiaquine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 12 extracted.

**Parameterization:** CLm/F, Q/F, Q2/F, V1/F, V2/F, V3/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F AQ (%) | `Q87` · Frel | 100 | not captured | not captured | not captured | not captured | llm (0.6) | cpt1707-tbl-0001:row2:col1 | — | not captured |
| k a (1/hour) | `Q49` · kabs | 2.85 | 1/h | 0.0007916666666666666 | 1/h | 42.8 | exact (1.0) | cpt1707-tbl-0001:row3:col1 | — | 173 (26.0% RSE) |
| CL/F AQ (L/hour) | `Q351` · CLm/F | 101 | L/hour | 2.8055555555555557e-05 | [l] / [h] | 12.3 | llm_confirmed (0.6) | cpt1707-tbl-0001:row4:col1 | — | 22.2 (35.2% RSE) |
| V C/F AQ (L) | `Q367` · Vm/F | 314 | L | 0.314 | [l] | 22.1 | llm (0.6) | cpt1707-tbl-0001:row5:col1 | — | not captured |
| Q/F AQ (L/hour) | `Q69` · Q/F | 119 | L/hour | 3.305555555555556e-05 | [l] / [h] | 27.3 | llm_confirmed (0.6) | cpt1707-tbl-0001:row6:col1 | — | not captured |
| V P/F AQ (L) | `Q82` · V2/F | 1820 | L | 1.82 | [l] | 15.8 | llm (0.6) | cpt1707-tbl-0001:row7:col1 | — | not captured |
| CL/F DEAQ (L/hour) | `Q351` · CLm/F | 2.33 | L/hour | 6.472222222222222e-07 | [l] / [h] | 7.8 | exact (1.0) | cpt1707-tbl-0001:row10:col1 | — | not captured |
| V C/F DEAQ (L) | `Q290` · V1/F | 49.1 | L | 0.049100000000000005 | [l] | 17.6 | exact (1.0) | cpt1707-tbl-0001:row11:col1 | — | not captured |
| Q 1/F DEAQ (L/hour) | `Q69` · Q/F | 2.31 | L/hour | 6.416666666666666e-07 | [l] / [h] | 29.9 | exact (1.0) | cpt1707-tbl-0001:row12:col1 | — | not captured |
| V P1/F DEAQ (L) | `Q82` · V2/F | 363 | L | 0.363 | [l] | 16.9 | exact (1.0) | cpt1707-tbl-0001:row13:col1 | — | not captured |
| Q 2/F DEAQ (L/hour) | `Q80` · Q2/F | 4.34 | L/hour | 1.2055555555555555e-06 | [l] / [h] | 47.2 | special_case (0.95) | cpt1707-tbl-0001:row14:col1 | — | not captured |
| V P2/F DEAQ (L) | `Q78` · V3/F | 98.1 | L | 0.09809999999999999 | [l] | 42.9 | exact (1.0) | cpt1707-tbl-0001:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'F AQ (%)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'k a (1/hour)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'CL/F AQ (L/hour)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'V C/F AQ (L)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'CL/F DEAQ (L/hour)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'V P1/F DEAQ (L)' routed out of structural estimates ('CV for IIV (%RSE)')
- unit_dimension_mismatch: 'Age50 on CL/F AQ (months)' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('Age50 on CL/F AQ (months)', value '4.66') — already have one for this compound
- dropped unlinked row (NIL): 'Age50 on CL/F DEAQ (months)' — extend the ontology if this is a real PK parameter (source ['cpt1707-tbl-0001:row19:col1'])
- implicit units: 'k a (1/hour)' → 1/h (from the paper text: 'Table 1 lists the parameter as "k a (1/hour) = 2.85", explicitly stating the unit.')
- metabolite desethylamodiaquine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite desethylamodiaquine: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desethylamodiaquine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [3]
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 21 linked by role; re-tagged parent→desethylamodiaquine ×12
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt1707-tbl-0001:row2:col4 = '37.2 (32.1–42.5)'
- unparsed cell cpt1707-tbl-0001:row3:col2 = '3.09 (1.71–5.70)'
- unparsed cell cpt1707-tbl-0001:row3:col4 = '179 (131–237)'
- unparsed cell cpt1707-tbl-0001:row4:col2 = '100 (85–120)'
- unparsed cell cpt1707-tbl-0001:row4:col4 = '23.1 (7.61–33.0)'
- unparsed cell cpt1707-tbl-0001:row5:col2 = '309 (214–445)'
- unparsed cell cpt1707-tbl-0001:row5:col4 = '80.5 (56.0–104)'
- unparsed cell cpt1707-tbl-0001:row6:col2 = '115 (84.7–161)'
- unparsed cell cpt1707-tbl-0001:row7:col2 = '1,772 (1,460–2,220)'
- unparsed cell cpt1707-tbl-0001:row8:col2 = '0.831 (0.742–0.920)'
- unparsed cell cpt1707-tbl-0001:row10:col2 = '2.32 (2.08–2.57)'
- unparsed cell cpt1707-tbl-0001:row10:col4 = '16.1 (4.05–26.9)'
- unparsed cell cpt1707-tbl-0001:row11:col2 = '49.3 (39.2–61.5)'
- unparsed cell cpt1707-tbl-0001:row12:col2 = '2.23 (1.54–3.42)'
- unparsed cell cpt1707-tbl-0001:row13:col2 = '355 (293–462)'
- unparsed cell cpt1707-tbl-0001:row13:col4 = '69.1 (55.0–84.7)'
- unparsed cell cpt1707-tbl-0001:row14:col2 = '4.45 (2.51–6.86)'
- unparsed cell cpt1707-tbl-0001:row15:col2 = '100 (46.1–153)'
- unparsed cell cpt1707-tbl-0001:row16:col2 = '0.201 (0.181–0.233)'
- unparsed cell cpt1707-tbl-0001:row18:col2 = '4.60 (1.92–8.08)'
- unparsed cell cpt1707-tbl-0001:row19:col2 = '2.45 (0.838–4.47)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row11:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row4:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row10:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row12:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row15:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1707-tbl-0001:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1707-tbl-0001:row13:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 49.1 L | not captured | not captured | ['cpt1707-tbl-0001:row11:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.82e+03 L | not captured | not captured | ['cpt1707-tbl-0001:row7:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 363 L | not captured | not captured | ['cpt1707-tbl-0001:row13:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amodiaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2020` / `Ding_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Ding2020_reference/Amodiaquine_Ding2020_reference_modelica.zip" download>Amodiaquine_Ding2020_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:41 UTC</sub>
