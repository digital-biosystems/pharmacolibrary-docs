<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;enoxolone&quot;,&quot;href&quot;:&quot;drugs/drug_enoxolone/&quot;},{&quot;label&quot;:&quot;Xu_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enoxolone — `Enoxolone_Xu2014_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.70).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `glycyrrhizin (GL) and glycyrrhetic acid (GA; enoxolone)`, measured `glycyrrhetic acid (GA; enoxolone)`.

## Citation
Xu R et al., A semi-physiologically based pharmacoki…, PloS one (2014)
  ·  DOI: [10.1371/journal.pone.0114049](https://doi.org/10.1371/journal.pone.0114049)

## Model component
<dbs-pgx drug="enoxolone" model-id="Enoxolone_Xu2014_reference" status="rejected" stale="false" population="virtual elderly population" measured-compound="glycyrrhetic acid (GA; enoxolone)" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K12_r | `Q301` · k12 | 20 | 1/h | 0.005555555555555556 | 1/h | not captured | llm (0.6) | Xu_2014_table_3:row0:col1, Xu_2014_table_4:row0:col1 | — | not captured |
| K21_r | `Q302` · k21 | 0.46 | 1/h | 0.0001277777777777778 | 1/h | not captured | llm (0.6) | Xu_2014_table_3:row1:col1, Xu_2014_table_4:row1:col1 | — | not captured |
| fu | `Q46` · fu | 0.006 | not captured | not captured | not captured | not captured | exact (1.0) | Xu_2014_table_3:row2:col1, Xu_2014_table_4:row2:col1 | — | not captured |
| fut | `Q413` · fu_tissue | 0.012 | not captured | not captured | not captured | not captured | llm (0.6) | Xu_2014_table_3:row3:col1, Xu_2014_table_4:row3:col1 | — | not captured |
| Vmax | `Q66` · Vmax | 9.0 | not captured | not captured | not captured | not captured | special_case (0.95) | Xu_2014_table_3:row5:col1 | — | not captured |
| Km | `Q1` · Km | 0.0014 | not captured | not captured | not captured | not captured | exact (1.0) | Xu_2014_table_3:row6:col1 | — | not captured |
| CLmet | `Q370` · CLfm | 737 | L/h | 0.00020472222222222221 | L/h | not captured | exact (1.0) | Xu_2014_table_3:row9:col1, Xu_2014_table_4:row7:col1 | — | not captured |
| Pk | `Q410` · Kp | 0.14 | not captured | not captured | not captured | not captured | llm (0.6) | Xu_2014_table_3:row11:col1, Xu_2014_table_4:row9:col1 | — | not captured |
| Pg | `Q900` · equation variable | 0.015 | not captured | not captured | not captured | not captured | llm (0.6) | Xu_2014_table_3:row12:col1, Xu_2014_table_4:row10:col1 | — | not captured |
| KHce | `Q305` · kfm | 0.29 | 1/h | 8.055555555555556e-05 | 1/h | not captured | exact (1.0) | Xu_2014_table_3:row15:col1 | — | not captured |
| CLup | `Q22` · CL | 431 | L/h | 0.00011972222222222222 | L/h | not captured | exact (1.0) | Xu_2014_table_4:row5:col1 | — | not captured |
| Kabs,si | `Q49` · kabs | 0.13 | 1/h | 3.611111111111111e-05 | 1/h | not captured | exact (1.0) | Xu_2014_table_4:row11:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'gl' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Hematocrit' — extend the ontology if this is a real PK parameter (source ['Xu_2014_table_3:row4:col1', 'Xu_2014_table_4:row4:col1'])
- dropped duplicate Q66 ('VmaxB', value '4.7') — already have one for this compound
- dropped duplicate Q1 ('KmB', value '0.00037') — already have one for this compound
- dropped unlinked row (NIL): 'PSeff' — extend the ontology if this is a real PK parameter (source ['Xu_2014_table_3:row10:col1', 'Xu_2014_table_4:row8:col1'])
- dropped duplicate Q305 ('KHco', value '0.11') — already have one for this compound
- dropped duplicate Q22 ('CLb', value '454.0') — already have one for this compound
- implicit units: 'K12_r' → 1/h (from the popPK convention: 'K12_r is a first-order transfer rate constant; first-order rate constants are conventionally expressed in 1/h.')
- implicit units: 'K21_r' → 1/h (from the popPK convention: 'K21_r is a first-order transfer rate constant; first-order rate constants are conventionally expressed in 1/h.')
- implicit units: 'Vmax' — the LLM proposed 'µmol/h', whose dimension does not fit Q66; left unset
- implicit units: 'Km' — the LLM proposed 'µmol/L', whose dimension does not fit Q1; left unset
- implicit units: 'CLmet' → L/h (from the popPK convention: 'CLmet is a formation clearance; clearances are conventionally expressed in L/h.')
- implicit units: 'KHce' → 1/h (from the popPK convention: 'KHce is identified as a first-order rate constant governing metabolite formation; such rate constants are conventionally')
- implicit units: 'CLup' → L/h (from the paper text: 'The paper refers to “hepatic sinusoidal uptake clearance (20000 l/h)” and states that “CLup is proportional to the Vmax ')
- implicit units: 'Kabs,si' → 1/h (from the popPK convention: 'Kabs,si is an absorption rate constant; first-order absorption rate constants are conventionally expressed in 1/h.')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLup)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glycyrrhetic acid (GA; enoxolone)
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 19/19 row label(s) assigned, 19 linked by role; re-tagged parent→glycyrrhizin (GL) ×16, parent→3MGA ×4, parent→glycyrrhetic acid (GA; enoxolone) ×27
- molar mass: no plausible PubChem entry for 'GAM (phase II metabolites of GA)' ('phase II metabolites of glycyrrhetic acid') — left in mass units
- molar mass: none found for 'GAM (phase II metabolites of GA)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3, 4
- unparsed cell Xu_2014_table_3:row2:col4 = '[19]; [49]'
- unparsed cell Xu_2014_table_3:row4:col4 = '[19]'
- unparsed cell Xu_2014_table_3:row6:col4 = '[22]; fitted'
- unparsed cell Xu_2014_table_3:row10:col4 = '[22]; see text'
- unparsed cell Xu_2014_table_3:row11:col4 = '[18]'
- unparsed cell Xu_2014_table_3:row12:col4 = '[18]; see text'
- unparsed cell Xu_2014_table_3:row13:col4 = '[24]; fitted'
- unparsed cell Xu_2014_table_3:row14:col4 = '[24]'
- unparsed cell Xu_2014_table_3:row15:col4 = '[23]; see text'
- unparsed cell Xu_2014_table_3:row16:col4 = '[23]; see text'
- unparsed cell Xu_2014_table_4:row2:col4 = '[19]; [49]'
- unparsed cell Xu_2014_table_4:row4:col4 = '[19]'
- unparsed cell Xu_2014_table_4:row11:col4 = '[19]; fitted'
- unparsed cell Xu_2014_table_4:row13:col4 = '[32]'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Xu_2014_table_4:row5:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Xu_2014_table_3:row0:col1', 'Xu_2014_table_4:row0:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Xu_2014_table_3:row1:col1', 'Xu_2014_table_4:row1:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Xu_2014_table_3:row15:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Xu_2014_table_3:row9:col1', 'Xu_2014_table_4:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Xu_2014_table_4:row11:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Xu_2014_table_3:row6:col1'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['Xu_2014_table_3:row5:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 431.0 | not captured | not captured | ['Xu_2014_table_4:row5:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLmet'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 431 L/h | not captured | not captured | ['Xu_2014_table_4:row5:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_enoxolone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Xu_2014` / `Xu_2014::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:37 UTC</sub>
