<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;cariprazine&quot;,&quot;href&quot;:&quot;drugs/drug_cariprazine/&quot;},{&quot;label&quot;:&quot;Periclou_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cariprazine — `Cariprazine_Periclou2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Periclou A et al., Population Pharmacokinetics of Caripraz…, European journal of drug me… (2021)
  ·  DOI: [10.1007/s13318-020-00650-4](https://doi.org/10.1007/s13318-020-00650-4)

## Model component
<dbs-pgx drug="cariprazine" model-id="Cariprazine_Periclou2021_reference" status="extracted" stale="false" population="adults with schizophrenia or bipolar mania" measured-compound="cariprazine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 6 extracted.

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka First-order absorption rate constant | `Q49` · kabs | 0.352 | h−1 | 9.777777777777777e-05 | 1/h | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| CL/F Apparent elimination clearance | `Q22` · CL | 21.5 | l/h | 5.972222222222223e-06 | L/h | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| VC/F Apparent central volume | `Q290` · V1/F | 266 | l | 0.266 | L | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| Q3/F Apparent first distribution clearance | `Q30` · Q | 0.431 | l/h | 1.1972222222222222e-07 | L/h | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| VP1/F Apparent first peripheral volume | `Q64` · V2 | 149 | l | 0.149 | L | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |
| DVC/F Apparent DCAR central volume | `Q63` · V1 | 128 | l | 0.128 | L | not captured | boundary (0.8) | Periclou_2021:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'DUR'
- dropped value-less row: 'Ka'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'Power of WTKG'
- dropped value-less row: 'Proportional shift for race = black'
- dropped value-less row: 'Proportional shift for race = Asiand'
- dropped value-less row: 'Proportional shift for race = Japanesed'
- dropped value-less row: 'VC/F'
- dropped unlinked row (NIL): 'Proportional shift for first dose' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row13:col1', 'Tab2:row26:col1', 'Tab2:row30:col1'])
- dropped value-less row: 'Q3/F'
- dropped value-less row: 'VP1/F'
- dropped value-less row: 'Q4/F'
- dropped value-less row: 'VP2/F'
- dropped value-less row: 'DCL/F'
- dropped value-less row: 'Proportional shift for sex = female'
- dropped value-less row: 'DVC/F'
- dropped value-less row: 'DQ/F'
- dropped value-less row: 'DVP/F'
- dropped value-less row: 'DDCL/F'
- dropped value-less row: 'DDVC/F'
- dropped value-less row: 'DDQ/F'
- dropped value-less row: 'DDVP/F'
- dropped value-less row: 'DDKtr'
- salvaged Q49 ('Ka First-order absorption rate constant'=0.352) from results prose — parameter table was unreadable
- salvaged Q22 ('CL/F Apparent elimination clearance'=21.5) from results prose — parameter table was unreadable
- salvaged Q290 ('VC/F Apparent central volume'=266) from results prose — parameter table was unreadable
- salvaged Q30 ('Q3/F Apparent first distribution clearance'=0.431) from results prose — parameter table was unreadable
- salvaged Q64 ('VP1/F Apparent first peripheral volume'=149) from results prose — parameter table was unreadable
- salvaged Q63 ('DVC/F Apparent DCAR central volume'=128) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cariprazine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 16 linked by role; re-tagged parent→desmethyl-cariprazine (DCAR) ×5, parent→didesmethyl-cariprazine (DDCAR) ×5
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '2.57 (2.35, 2.79)'
- unparsed cell Tab2:row3:col1 = 'First-order absorption rate constant (h−1)'
- unparsed cell Tab2:row3:col2 = '0.352 (0.32, 0.39)'
- unparsed cell Tab2:row3:col4 = '118% CVb (99.5, 138)'
- unparsed cell Tab2:row4:col2 = '21.5 (21.1, 21.8)'
- unparsed cell Tab2:row4:col4 = '32.4% CV (30.7, 33.9)'
- unparsed cell Tab2:row5:col1 = '0.0946 (0.0341, 0.161)'
- unparsed cell Tab2:row6:col1 = '− 0.0907 (− 0.114, − 0.0639)'
- unparsed cell Tab2:row7:col1 = '− 0.178 (− 0.211, − 0.142)'
- unparsed cell Tab2:row8:col1 = '− 0.111 (− 0.178, − 0.0401)'
- unparsed cell Tab2:row9:col2 = '266 (241, 288)'
- unparsed cell Tab2:row9:col4 = '109% CVb (90.2, 125)'
- unparsed cell Tab2:row11:col1 = '1.66 (1.40, 1.96)'
- unparsed cell Tab2:row19:col2 = '77.3 (75.3, 79.4)'
- unparsed cell Tab2:row19:col4 = '42.4% CV (40.7, 44.1)'
- unparsed cell Tab2:row20:col1 = '0.578 (0.488, 0.648)'
- unparsed cell Tab2:row21:col1 = '0.249 (0.203, 0.292)'
- unparsed cell Tab2:row22:col1 = '− 0.0861 (− 0.135, − 0.0432)'
- unparsed cell Tab2:row23:col1 = '− 0.145 (− 0.218, − 0.0574)'
- unparsed cell Tab2:row24:col1 = '− 0.160 (− 0.190, − 0.130)'
- unparsed cell Tab2:row25:col2 = '128 (106, 150)'
- unparsed cell Tab2:row25:col4 = '115% CVb (103, 130)'
- unparsed cell Tab2:row27:col1 = '1.18 (0.604, 1.74)'
- unparsed cell Tab2:row28:col2 = '78.5 (60.9, 105)'
- unparsed cell Tab2:row29:col2 = '347 (292, 411)'
- unparsed cell Tab2:row32:col2 = '9.24 (8.93, 9.57)'
- unparsed cell Tab2:row32:col4 = '57.4% CV (54.3, 60.3)'
- unparsed cell Tab2:row37:col2 = '1310 (1260, 1360)'
- unparsed cell Tab2:row37:col4 = '77.8% CV (73.0, 82.7)'
- unparsed cell Tab2:row44:col1 = 'Rate constant delaying DDCAR formation (h−1)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.5 L/h | not captured | not captured | ['Periclou_2021:results_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 266 L | not captured | not captured | ['Periclou_2021:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 128 L | not captured | not captured | ['Periclou_2021:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 149 L | not captured | not captured | ['Periclou_2021:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cariprazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Periclou_2021` / `Periclou_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_modelica.zip" download>Cariprazine_Periclou2021_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_matlab.zip" download>Cariprazine_Periclou2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_matlab_simbio.zip" download>Cariprazine_Periclou2021_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_sbml.zip" download>Cariprazine_Periclou2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cariprazine/Cariprazine_Periclou2021_reference/Cariprazine_Periclou2021_reference_cellml.zip" download>Cariprazine_Periclou2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 15:24 UTC</sub>
