<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;midostaurin&quot;,&quot;href&quot;:&quot;drugs/drug_midostaurin/&quot;},{&quot;label&quot;:&quot;Joisten_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# midostaurin — `Midostaurin_Joisten2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `midostaurin and posaconazole`, measured `midostaurin`.

## Citation
Joisten CS et al., Clinical impact of potential drug-drug…, Antimicrobial agents and ch… (2026)
  ·  DOI: [10.1128/aac.01951-25](https://doi.org/10.1128/aac.01951-25)

## Model component
<dbs-pgx drug="midostaurin" model-id="Midostaurin_Joisten2026_reference" status="needs_review" stale="false" population="patients with FLT3-mutated AML receiving concomitant midostaurin and posaconazole" measured-compound="midostaurin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| clearance (Cl) | `Q22` · CL | 0.52 | L/h | 1.4444444444444445e-07 | L/h | not captured | exact (1.0) | Joisten_2026:results_prose | — | not captured |
| Ka | `Q49` · kabs | 0.0304 | 1/h | 8.444444444444444e-06 | 1/h | not captured | exact (1.0) | Joisten_2026:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Any' — extend the ontology if this is a real PK parameter (source ['T3:row1:col1', 'T3:row1:col2'])
- dropped unlinked row (NIL): 'Hematological AEs' — extend the ontology if this is a real PK parameter (source ['T3:row2:col1', 'T3:row2:col2'])
- dropped unlinked row (NIL): 'Leukocytopenia' — extend the ontology if this is a real PK parameter (source ['T3:row3:col1', 'T3:row3:col2'])
- dropped unlinked row (NIL): 'Thrombocytopenia' — extend the ontology if this is a real PK parameter (source ['T3:row4:col1', 'T3:row4:col2'])
- dropped unlinked row (NIL): 'Anemia' — extend the ontology if this is a real PK parameter (source ['T3:row5:col1', 'T3:row5:col2'])
- dropped unlinked row (NIL): 'Febrile neutropenia' — extend the ontology if this is a real PK parameter (source ['T3:row6:col1', 'T3:row6:col2'])
- dropped unlinked row (NIL): 'Gastrointestinal AEs' — extend the ontology if this is a real PK parameter (source ['T3:row7:col1', 'T3:row7:col2'])
- dropped unlinked row (NIL): 'Diarrhea' — extend the ontology if this is a real PK parameter (source ['T3:row8:col1', 'T3:row8:col2'])
- dropped unlinked row (NIL): 'Constipation' — extend the ontology if this is a real PK parameter (source ['T3:row9:col1', 'T3:row9:col2'])
- dropped unlinked row (NIL): 'Nausea' — extend the ontology if this is a real PK parameter (source ['T3:row10:col1', 'T3:row10:col2'])
- dropped unlinked row (NIL): 'Mucositis/neutropenic enterocolitis' — extend the ontology if this is a real PK parameter (source ['T3:row11:col1', 'T3:row11:col2'])
- dropped unlinked row (NIL): 'Ileitis terminalis' — extend the ontology if this is a real PK parameter (source ['T3:row12:col1', 'T3:row12:col2'])
- dropped unlinked row (NIL): 'Infectionsc' — extend the ontology if this is a real PK parameter (source ['T3:row13:col1', 'T3:row13:col2'])
- dropped unlinked row (NIL): 'Device-related infection' — extend the ontology if this is a real PK parameter (source ['T3:row14:col1', 'T3:row14:col2'])
- dropped unlinked row (NIL): 'Upper respiratory tract infection' — extend the ontology if this is a real PK parameter (source ['T3:row15:col1', 'T3:row15:col2'])
- dropped unlinked row (NIL): 'Pneumonia' — extend the ontology if this is a real PK parameter (source ['T3:row16:col1', 'T3:row16:col2'])
- dropped unlinked row (NIL): 'Fungal infectiond' — extend the ontology if this is a real PK parameter (source ['T3:row17:col1', 'T3:row17:col2'])
- dropped unlinked row (NIL): 'Bacteremia' — extend the ontology if this is a real PK parameter (source ['T3:row18:col1', 'T3:row18:col2'])
- dropped unlinked row (NIL): 'Viremia' — extend the ontology if this is a real PK parameter (source ['T3:row19:col1', 'T3:row19:col2'])
- dropped unlinked row (NIL): 'Herpes simplex infection' — extend the ontology if this is a real PK parameter (source ['T3:row20:col1', 'T3:row20:col2'])
- dropped unlinked row (NIL): 'Clostridioides difficile infection' — extend the ontology if this is a real PK parameter (source ['T3:row21:col1', 'T3:row21:col2'])
- dropped unlinked row (NIL): 'Wound infection' — extend the ontology if this is a real PK parameter (source ['T3:row22:col1', 'T3:row22:col2'])
- dropped unlinked row (NIL): 'Neutropenic sepsis' — extend the ontology if this is a real PK parameter (source ['T3:row23:col1', 'T3:row23:col2'])
- dropped unlinked row (NIL): 'Septic shock' — extend the ontology if this is a real PK parameter (source ['T3:row24:col1', 'T3:row24:col2'])
- dropped unlinked row (NIL): 'Pulmonary AEs' — extend the ontology if this is a real PK parameter (source ['T3:row25:col1', 'T3:row25:col2'])
- dropped unlinked row (NIL): 'Pulmonary edema' — extend the ontology if this is a real PK parameter (source ['T3:row26:col1', 'T3:row26:col2'])
- dropped unlinked row (NIL): 'Pleural effusion' — extend the ontology if this is a real PK parameter (source ['T3:row27:col1', 'T3:row27:col2'])
- dropped unlinked row (NIL): 'Atelectasis' — extend the ontology if this is a real PK parameter (source ['T3:row28:col1', 'T3:row28:col2'])
- dropped unlinked row (NIL): 'Cardiac AEs' — extend the ontology if this is a real PK parameter (source ['T3:row29:col1', 'T3:row29:col2'])
- dropped unlinked row (NIL): 'QTc prolongatione' — extend the ontology if this is a real PK parameter (source ['T3:row30:col1', 'T3:row30:col2'])
- dropped unlinked row (NIL): 'Bradycardia' — extend the ontology if this is a real PK parameter (source ['T3:row31:col1', 'T3:row31:col2'])
- dropped unlinked row (NIL): 'Hypertension' — extend the ontology if this is a real PK parameter (source ['T3:row32:col1', 'T3:row32:col2'])
- dropped unlinked row (NIL): 'Troponinemia' — extend the ontology if this is a real PK parameter (source ['T3:row33:col1', 'T3:row33:col2'])
- dropped unlinked row (NIL): 'Pericardial effusion' — extend the ontology if this is a real PK parameter (source ['T3:row34:col1', 'T3:row34:col2'])
- dropped unlinked row (NIL): 'Hydropic decompensation' — extend the ontology if this is a real PK parameter (source ['T3:row35:col1', 'T3:row35:col2'])
- dropped unlinked row (NIL): 'Chest pain' — extend the ontology if this is a real PK parameter (source ['T3:row36:col1', 'T3:row36:col2'])
- dropped unlinked row (NIL): 'Perimyocarditis' — extend the ontology if this is a real PK parameter (source ['T3:row37:col1', 'T3:row37:col2'])
- dropped unlinked row (NIL): 'Sudden cardiac death' — extend the ontology if this is a real PK parameter (source ['T3:row38:col1', 'T3:row38:col2'])
- dropped unlinked row (NIL): 'Laboratory abnormalitiesf' — extend the ontology if this is a real PK parameter (source ['T3:row39:col1', 'T3:row39:col2'])
- dropped unlinked row (NIL): 'Acute liver failure' — extend the ontology if this is a real PK parameter (source ['T3:row40:col1', 'T3:row40:col2'])
- dropped unlinked row (NIL): 'Acute kidney failure' — extend the ontology if this is a real PK parameter (source ['T3:row41:col1', 'T3:row41:col2'])
- dropped unlinked row (NIL): 'Urinary tract obstruction' — extend the ontology if this is a real PK parameter (source ['T3:row42:col1', 'T3:row42:col2'])
- dropped unlinked row (NIL): 'Neurological AEs' — extend the ontology if this is a real PK parameter (source ['T3:row43:col1', 'T3:row43:col2'])
- dropped unlinked row (NIL): 'Vascular AEs' — extend the ontology if this is a real PK parameter (source ['T3:row44:col1', 'T3:row44:col2'])
- dropped unlinked row (NIL): 'Bleeding AEs' — extend the ontology if this is a real PK parameter (source ['T3:row45:col1', 'T3:row45:col2'])
- dropped unlinked row (NIL): 'Skin and subcutaneous tissue AEs' — extend the ontology if this is a real PK parameter (source ['T3:row46:col1', 'T3:row46:col2'])
- dropped unlinked row (NIL): 'Ophthalmological AEs' — extend the ontology if this is a real PK parameter (source ['T3:row47:col1', 'T3:row47:col2'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 12.9 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 5.7 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 66 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 29 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 18 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 11 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 7 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 420 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 435 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 5 (source ['T3:footnote']); the table cell was unparseable — needs review
- table mostly unlinked (47/47 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('clearance (Cl)'=0.52) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka'=0.0304) from results prose — parameter table was unreadable
- implicit units: 'Ka' → 1/h (from the paper text: 'The paper states that the absorption constant Ka has units of “(1/h).”')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (clearance (Cl))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=midostaurin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Joisten_2026:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.52 | not captured | not captured | ['Joisten_2026:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.52 L/h | not captured | not captured | ['Joisten_2026:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_midostaurin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Joisten_2026` / `Joisten_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:52 UTC</sub>
