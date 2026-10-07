<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;abemaciclib&quot;,&quot;href&quot;:&quot;drugs/drug_abemaciclib/&quot;},{&quot;label&quot;:&quot;Chigutsa_2020 \u00b7 estimate_see&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abemaciclib — `Abemaciclib_Chigutsa2020_estimate_see`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Chigutsa E et al., Development and Application of a Mechan…, CPT: pharmacometrics & syst… (2020)
  ·  DOI: [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544)

## Model component
<dbs-pgx drug="abemaciclib" model-id="Abemaciclib_Chigutsa2020_estimate_see" status="rejected" stale="false" population="healthy subjects and patients with cancer" measured-compound="abemaciclib" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Fraction of dose entering gut compartment, F a | `Q40` · Fab | 0.868 | %SEE | not captured | [s] · [%] · [ee] | not captured | llm (0.6) | psp412544-tbl-0002:row1:col1 | — | not captured |
| Maximum rate of absorption, ka,max (µmol/h) | `Q307` · R1 | 91.1 | µmol/h | not captured | [[µM] · [ol]] / [h] | not captured | llm_corrected (0.6) | psp412544-tbl-0002:row3:col1 | — | not captured |
| MTT (h) | `Q81` · MTT | 1.44 | h | not captured | [h] | not captured | exact (1.0) | psp412544-tbl-0002:row5:col1 | — | not captured |
| Central volume (L) | `Q63` · V1 | 588 | L | 0.588 | [l] | not captured | exact (1.0) | psp412544-tbl-0002:row6:col1 | — | not captured |
| Intercompartmental clearance (L/h) | `Q30` · Q | 4.57 | L/h | 1.2694444444444445e-06 | [l] / [h] | not captured | exact (1.0) | psp412544-tbl-0002:row7:col1 | — | not captured |
| Peripheral volume (L) | `Q64` · V2 | 159 | L | 0.159 | [l] | not captured | exact (1.0) | psp412544-tbl-0002:row8:col1 | — | not captured |
| Zero‐order absorption duration (h) | `Q310` · D1 | 3.18 | h | 11448.0 | [h] | not captured | llm_corrected (0.6) | psp412544-tbl-0002:row9:col1 | — | not captured |
| Absorption lag time (h) | `Q83` · tlag | 1.74 | h | 6264.0 | [h] | not captured | exact (1.0) | psp412544-tbl-0002:row10:col1 | — | not captured |
| CLint to form M2 in liver (L/h) c , c | `Q370` · CLfm | 280 | L/h | 7.777777777777778e-05 | L/h | not captured | exact (1.0) | psp412544-tbl-0002:row13:col1 | — | not captured |
| CLint to form M20 in liver (L/h) c , c | `Q370` · CLfm | 705 | L/h | 0.00019583333333333331 | L/h | not captured | exact (1.0) | psp412544-tbl-0002:row14:col1 | — | not captured |
| CLint of M2 in liver (L/h) | `Q22` · CL | 254 | L/h | 7.055555555555556e-05 | [l] / [h] | not captured | exact (1.0) | psp412544-tbl-0002:row15:col1 | — | not captured |
| CLint of M20 in liver (L/h) | `Q22` · CL | 431 | L/h | 0.00011972222222222222 | [l] / [h] | not captured | exact (1.0) | psp412544-tbl-0002:row16:col1 | — | not captured |
| theta_q1_category | `Q900` · theta_q1_category | 52.7 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row4:col1 | — | not captured |
| theta_q305_category | `Q900` · theta_q305_category | 0.361 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row11:col1 | — | not captured |
| theta_q305_category | `Q900` · theta_q305_category | 0.284 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row12:col1 | — | not captured |
| theta_tlag_formulation | `Q900` · theta_tlag_formulation | 0.846 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row19:col1 | — | not captured |
| theta_tlag_formulation | `Q900` · theta_tlag_formulation | 0.968 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row20:col1 | — | not captured |
| theta_q49_formulation | `Q900` · theta_q49_formulation | -0.513 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412544-tbl-0002:row21:col1 | — | not captured |
| ka | `Q49` · kabs | 0.31 | 1/h) | 8.61111111111111e-05 | 1/h | not captured | review_gapfill (0.7) | Fleisher_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (%see)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_unknown: '%SEE' (Fab)
- dropped duplicate Q40 ('Fraction of F a absorbed via transit compartment', value '0.458') — already have one for this compound
- unit_dimension_mismatch: 'Maximum rate of absorption, ka,max (µmol/h)' → Q307 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_unknown: '%SEE' (CLfm)
- dropped unlinked row (NIL): 'Box‐cox shape for zero‐order duration ETAs' — extend the ontology if this is a real PK parameter (source ['psp412544-tbl-0002:row17:col1'])
- dropped duplicate Q40 ('Diarrhea effect on Fa d', value '-0.417') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.846' (source ['psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number '0.968' (source ['psp412544-tbl-0002:footnote', 'psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '6' (source ['psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q305 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLint to form M2 in liver (L/h) c , c' → L/h (from the paper text: 'The parameter is listed as “CLint to form M2 in liver (L/h).”')
- implicit units: 'CLint to form M20 in liver (L/h) c , c' → L/h (from the paper text: 'The parameter is listed as “CLint to form M20 in liver (L/h).”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abemaciclib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at route_to_review — not promoted
- population split: 'estimate (%see)' subgroup of Chigutsa_2020 (paper reports 5 populations: % variability a , a (%see), estimate (%see), external validation with phase iii data, nca(200 mg), semimechanistic model development)
- row roles (LLM): model_class=compartmental; 35/35 row label(s) assigned, 44 linked by role; re-tagged parent→M2 (LSN2839567) ×39, parent→M20 (LSN3106726) ×6, abemaciclib→parent ×4
- molar mass: no plausible PubChem entry for 'M2 (LSN2839567)' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'M20 (LSN3106726)' ('no full name in the paper') — left in mass units
- molar mass: none found for 'M2 (LSN2839567)' — its concentrations stay mass-only
- molar mass: none found for 'M20 (LSN3106726)' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Fleisher_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp412544-tbl-0002:row1:col2 = '7.08 (fixed) b , b'
- unparsed cell psp412544-tbl-0002:row1:col3 = '0.882 (0.874–0.890)'
- unparsed cell psp412544-tbl-0002:row1:col4 = '7.08 (fixed) b , b'
- unparsed cell psp412544-tbl-0002:row2:col3 = '0.479 (0.453–0.507)'
- unparsed cell psp412544-tbl-0002:row3:col3 = '97.6 (85.0–111)'
- unparsed cell psp412544-tbl-0002:row3:col4 = '71.5 (60.6–83.7)'
- unparsed cell psp412544-tbl-0002:row4:col3 = '51.8 (47.8–56.2)'
- unparsed cell psp412544-tbl-0002:row5:col3 = '1.52 (1.43–1.62)'
- unparsed cell psp412544-tbl-0002:row5:col4 = '70.1 (64.2–77.9)'
- unparsed cell psp412544-tbl-0002:row6:col3 = '604 (563–635)'
- unparsed cell psp412544-tbl-0002:row6:col4 = '65.7 (59.9–72.8)'
- unparsed cell psp412544-tbl-0002:row7:col3 = '3.66 (3.10–4.29)'
- unparsed cell psp412544-tbl-0002:row8:col3 = '152 (132–184)'
- unparsed cell psp412544-tbl-0002:row9:col3 = '3.04 (2.52–3.84)'
- unparsed cell psp412544-tbl-0002:row9:col4 = '810 (533–1278)'
- unparsed cell psp412544-tbl-0002:row10:col3 = '1.76 (1.69–1.80)'
- unparsed cell psp412544-tbl-0002:row11:col3 = '0.401 (0.366–0.432)'
- unparsed cell psp412544-tbl-0002:row12:col3 = '0.306 (0.276–0.339)'
- unparsed cell psp412544-tbl-0002:row13:col2 = 'BSV of 44.9 (27.1) for healthy and 57.9 (39.5) for patients. WSV of 68.1 (5.12) for patients'
- unparsed cell psp412544-tbl-0002:row13:col3 = '235 (199–284)'
- unparsed cell psp412544-tbl-0002:row13:col4 = 'BSV of 44.3 (36.1–54.5) for healthy and 56.7 (44.8–71.2) for patients. WSV of 68.7 (59.6–80.7) for patients'
- unparsed cell psp412544-tbl-0002:row14:col2 = 'BSV of 44.9 (27.1) for healthy and 57.9 (39.5) for patients. WSV of 68.1 (5.12) for patients'
- unparsed cell psp412544-tbl-0002:row14:col3 = '700 (627–775)'
- unparsed cell psp412544-tbl-0002:row14:col4 = 'BSV of 44.3 (36.1–54.5) for healthy and 56.7 (44.8–71.2) for patients. WSV of 68.7 (59.6–80.7) for patients'
- unparsed cell psp412544-tbl-0002:row15:col3 = '241 (218–271)'
- unparsed cell psp412544-tbl-0002:row15:col4 = '42.2 (32.9–50.4)'
- unparsed cell psp412544-tbl-0002:row16:col3 = '454 (417–489)'
- unparsed cell psp412544-tbl-0002:row16:col4 = '42.1 (32.6–51.4)'
- unparsed cell psp412544-tbl-0002:row17:col3 = '0.145 (0.116–0.184)'
- unparsed cell psp412544-tbl-0002:row18:col3 = '−0.0079 (−1.29, 2.65 × 10−7)'
- unparsed cell psp412544-tbl-0002:row19:col3 = '0.872 (0.618–1.06)'
- unparsed cell psp412544-tbl-0002:row20:col3 = '0.982 (0.770–1.12)'
- unparsed cell psp412544-tbl-0002:row21:col3 = '−0.487 (−0.587 to −0.376)'
- unparsed cell psp412544-tbl-0002:row23:col4 = '0.908 (0.869–0.927)'
- companion parameter table 3 transcribed (95 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row15:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row16:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row7:col1'] |
| C5_dimension_Q307 | fail | [substance] / [time] | µmol/h | not captured | not captured | ['psp412544-tbl-0002:row3:col1'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row9:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row13:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row14:col1'] |
| C5_dimension_Q49 | pass | not captured | not captured | not captured | not captured | ['Fleisher_2021:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412544-tbl-0002:row6:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412544-tbl-0002:row8:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp412544-tbl-0002:row10:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 254.0 | not captured | not captured | ['psp412544-tbl-0002:row15:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 254 L/h | not captured | not captured | ['psp412544-tbl-0002:row15:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 431 L/h | not captured | not captured | ['psp412544-tbl-0002:row16:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 588 L | not captured | not captured | ['psp412544-tbl-0002:row6:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 159 L | not captured | not captured | ['psp412544-tbl-0002:row8:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_abemaciclib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chigutsa_2020` / `Chigutsa_2020::estimate_see`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:15 UTC</sub>
