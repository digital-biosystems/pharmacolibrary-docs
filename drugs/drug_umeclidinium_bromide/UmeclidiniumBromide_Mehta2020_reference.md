<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium bromide&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/&quot;},{&quot;label&quot;:&quot;Mehta_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;UmeclidiniumBromide_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# umeclidinium bromide — `UmeclidiniumBromide_Mehta2020_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `umeclidinium bromide (with fluticasone furoate and vilanterol)`, measured `umeclidinium`.

## Citation
Mehta R et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2020)
  ·  DOI: [10.1007/s40262-019-00794-w](https://doi.org/10.1007/s40262-019-00794-w)

## Model component
<dbs-pgx drug="umeclidinium bromide" model-id="UmeclidiniumBromide_Mehta2020_reference" status="needs_review" stale="false" population="patients with COPD" measured-compound="umeclidinium" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Treatment | `Q47` · kel | 106 | h−1 | 0.029444444444444443 | [1] / [h] | not captured | llm (0.6) | Mehta_2020_table_4:row0:col2, Mehta_2020_table_4:row0:col3, Mehta_2020_table_4:row0:col5, Mehta_2020_table_4:row0:col6, Mehta_2020_table_4:row0:col8, Mehta_2020_table_4:row0:col9, Mehta_2020_table_4:row0:col11, Mehta_2020_table_4:row0:col12 | — | not captured |
| FF CL/F | `Q27` · CL/F | 513 | L/h | 0.0001425 | L/h | not captured | boundary (0.8) | Mehta_2020:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'V2/F (L)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'Q/F (L/h)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'V3/F (L)' routed out of structural estimates ('IIV, CV%')
- table section iiv: 'KA (h−1)' routed out of structural estimates ('IIV, CV%')
- dropped value-less row: 'CL/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V2/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Q/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V3/F (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'KA (h−1)' (captured trailing unit 'h−1' for child rows)
- dropped value-less row: 'Body weight on CL/F'
- dropped value-less row: 'Age on CL/F'
- dropped value-less row: 'Smoking effect on CL/F'
- dropped value-less row: 'Body weight on V2/F'
- dropped value-less row: 'Japanese heritage on CL/F'
- dropped value-less row: 'FF/VI on CL/F'
- unit 'h−1' inherited from a section-header row for kel (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Mehta_2020_table_4:row1:col1', 'Mehta_2020_table_4:row1:col4', 'Mehta_2020_table_4:row1:col7', 'Mehta_2020_table_4:row1:col10'])
- dropped value-less row: 'FF/UMEC/VI'
- dropped duplicate Q47 ('Current', value '168') — already have one for this compound
- dropped value-less row: 'FF/VI + UMEC'
- dropped value-less row: 'UMEC/VI'
- salvaged Q27 ('FF CL/F'=513) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=umeclidinium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab6:row1:col1 = '149 [138, 160]'
- unparsed cell Tab6:row2:col1 = '1100 [1030, 1170]'
- unparsed cell Tab6:row5:col1 = '18.6 [16.2, 21.0]'
- unparsed cell Tab6:row6:col1 = '0.580 [0.409, 0.751]'
- unparsed cell Tab6:row7:col1 = '− 0.648 [− 0.979, − 0.317]'
- unparsed cell Tab6:row8:col1 = '1.28 [1.13, 1.45]'
- unparsed cell Tab6:row9:col1 = '0.797 [0.614, 0.980]'
- unparsed cell Mehta_2020_table_3:row0:col1 = '6.24 [6.20, 6.28]'
- unparsed cell Mehta_2020_table_3:row0:col2 = '513 [493, 534]'
- unparsed cell Mehta_2020_table_3:row4:col1 = '− 2.50 [− 2.52, − 2.48]'
- unparsed cell Mehta_2020_table_3:row4:col2 = '0.0821 [0.0805, 0.0837]'
- unparsed cell Mehta_2020_table_3:row5:col1 = '− 0.436 [− 0.466, − 0.406]'
- unparsed cell Mehta_2020_table_3:row5:col2 = '0.647 [0.628, 0.666]'
- unparsed cell Mehta_2020_table_3:row6:col1 = '0.351 [0.321, 0.381]'
- unparsed cell Mehta_2020_table_3:row6:col2 = '1.42 [1.38, 1.46]'
- companion parameter table 3 transcribed (15 record(s), model stage 'final')
- transposed table Mehta_2020_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Mehta_2020_table_4:row1:col2 = '19.5 [17.9, 21.1]'
- unparsed cell Mehta_2020_table_4:row1:col3 = '13.3 [12.6, 14.0]'
- unparsed cell Mehta_2020_table_4:row1:col5 = '18.9 [17.2, 20.6]'
- unparsed cell Mehta_2020_table_4:row1:col6 = '13.2 [12.3, 14.2]'
- unparsed cell Mehta_2020_table_4:row1:col8 = '24.0 [20.5, 28.0]'
- unparsed cell Mehta_2020_table_4:row1:col9 = '19.6 [16.6, 23.1]'
- unparsed cell Mehta_2020_table_4:row1:col11 = '24.0 [20.5, 28.0]'
- unparsed cell Mehta_2020_table_4:row1:col12 = '13.6 [12.5, 14.8]'
- companion parameter table 4 transcribed (12 record(s))
- unparsed cell Mehta_2020_table_7:row0:col3 = '63.2 [59.5, 67.1]'
- unparsed cell Mehta_2020_table_7:row0:col4 = '457 [432, 483]'
- unparsed cell Mehta_2020_table_7:row1:col2 = '54.7 [51.0, 58.8]'
- unparsed cell Mehta_2020_table_7:row1:col3 = '341 [318, 366]'
- unparsed cell Mehta_2020_table_7:row2:col3 = '51.9 [45.6, 59.0]'
- unparsed cell Mehta_2020_table_7:row2:col4 = '403 [351, 462]'
- unparsed cell Mehta_2020_table_7:row3:col2 = '50.9 [44.4, 58.3]'
- unparsed cell Mehta_2020_table_7:row3:col3 = '313 [272, 360]'
- unparsed cell Mehta_2020_table_7:row4:col3 = '71.7 [62.7, 82.0]'
- unparsed cell Mehta_2020_table_7:row4:col4 = '445 [397, 499]'
- unparsed cell Mehta_2020_table_7:row5:col2 = '60.2 [49.0, 74.1]'
- unparsed cell Mehta_2020_table_7:row5:col3 = '344 [282, 420]'
- companion parameter table 7 transcribed (6 record(s))
- LLM selected parameter table(s) 3, 4, 6, 7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Mehta_2020_table_4:row0:col2', 'Mehta_2020_table_4:row0:col3', 'Mehta_2020_table_4:row0:col5', 'Mehta_2020_table_4:row0:col6', 'Mehta_2020_table_4:row0:col8', 'Mehta_2020_table_4:row0:col9', 'Mehta_2020_table_4:row0:col11', 'Mehta_2020_table_4:row0:col12'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 513 L/h | not captured | not captured | ['Mehta_2020:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_umeclidinium_bromide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mehta_2020` / `Mehta_2020::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:20 UTC</sub>
