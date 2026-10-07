<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tralokinumab&quot;,&quot;href&quot;:&quot;drugs/drug_tralokinumab/&quot;},{&quot;label&quot;:&quot;Soehoel_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tralokinumab — `Tralokinumab_Soehoel2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Soehoel A et al., Population Pharmacokinetics of Tralokin…, Clinical pharmacology in dr… (2022)
  ·  DOI: [10.1002/cpdd.1113](https://doi.org/10.1002/cpdd.1113)

## Model component
<dbs-pgx drug="tralokinumab" model-id="Tralokinumab_Soehoel2022_reference" status="extracted" stale="false" population="adults with atopic dermatitis, asthma, and healthy subjects" measured-compound="tralokinumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (absorption rate constant) | `Q49` · kabs | 0.184 | 1/day | 2.1296296296296294e-06 | 1/h | 4 | exact (1.0) | cpdd1113-tbl-0002:row2:col2, cpdd1113-tbl-0002:row2:col3 | — | not captured |
| V2 (central volume of distribution) | `Q64` · V2 | 2.71 | L | 0.00271 | L | 7 | exact (1.0) | cpdd1113-tbl-0002:row3:col2, cpdd1113-tbl-0002:row3:col3 | — | not captured |
| CL (clearance) | `Q22` · CL | 0.149 | L/day | 1.724537037037037e-09 | L/h | 5 | exact (1.0) | cpdd1113-tbl-0002:row4:col2, cpdd1113-tbl-0002:row4:col3 | — | not captured |
| V3 (peripheral volume of distribution) | `Q77` · V3 | 1.44 | L | 0.0014399999999999999 | L | 6 | exact (1.0) | cpdd1113-tbl-0002:row5:col2, cpdd1113-tbl-0002:row5:col3 | — | not captured |
| Q (intercompartmental clearance) | `Q30` · Q | 0.159 | L/day | 1.840277777777778e-09 | L/h | 8 | exact (1.0) | cpdd1113-tbl-0002:row6:col2, cpdd1113-tbl-0002:row6:col3 | — | not captured |
| F (bioavailability) | `Q40` · Fab | 0.761 | bioavailability | not captured | not captured | 5 | exact (1.0) | cpdd1113-tbl-0002:row7:col2, cpdd1113-tbl-0002:row7:col3 | — | not captured |
| ka ∼ dilution f | `Q900` · equation variable | -0.519 | not captured | not captured | not captured | 9 | llm_corrected (0.6) | cpdd1113-tbl-0002:row20:col2, cpdd1113-tbl-0002:row20:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on V2' routed out of structural estimates ('IIV d')
- table section iiv: 'IIV on CL' routed out of structural estimates ('IIV d')
- table section iiv: 'IIV on V2:CL' routed out of structural estimates ('IIV d')
- column 'estimate a' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'absorption rate constant' (kabs)
- unit_dimension_unknown: 'central volume of distribution' (V2)
- unit_dimension_unknown: 'clearance' (CL)
- unit_dimension_unknown: 'peripheral volume of distribution' (V3)
- unit_dimension_unknown: 'intercompartmental clearance' (Q)
- dropped unlinked row (NIL): 'V2 and V3 ∼ weight' — extend the ontology if this is a real PK parameter (source ['cpdd1113-tbl-0002:row15:col2', 'cpdd1113-tbl-0002:row15:col3'])
- dropped unlinked row (NIL): 'CL and Q ∼ weight' — extend the ontology if this is a real PK parameter (source ['cpdd1113-tbl-0002:row16:col2', 'cpdd1113-tbl-0002:row16:col3'])
- dropped duplicate Q22 ('CL ∼ non‐ECZTRA trials', value '0.344') — already have one for this compound
- dropped duplicate Q64 ('V2 ∼ non‐ECZTRA trials', value '0.258') — already have one for this compound
- dropped unlinked row (NIL): 'F ∼ dilution f' — extend the ontology if this is a real PK parameter (source ['cpdd1113-tbl-0002:row19:col2', 'cpdd1113-tbl-0002:row19:col3'])
- implicit units: 'ka (absorption rate constant)' → 1/day (from the paper text: "The text states: 'The estimated CL (0.149 L/day), SC bioavailability (76.1%), absorption rate constant (0.184 day) and t")
- implicit units: 'V2 (central volume of distribution)' → L (from the paper text: "The text states: 'The volume of distribution at steady state, calculated based on the final population PK model, was est")
- implicit units: 'CL (clearance)' → L/day (from the paper text: "The text explicitly states: 'The estimated CL (0.149 L/day)...'.")
- implicit units: 'V3 (peripheral volume of distribution)' → L (from the paper text: "The text states: 'The volume of distribution at steady state, calculated based on the final population PK model, was est")
- implicit units: 'Q (intercompartmental clearance)' → L/day (from the popPK convention: 'Q is an intercompartmental clearance. Clearance parameters in this model are scaled by body weight with an allometric ex')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tralokinumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'tralokinumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell cpdd1113-tbl-0002:row2:col4 = '0.164 to 0.202'
- unparsed cell cpdd1113-tbl-0002:row3:col4 = '2.33 to 3.00'
- unparsed cell cpdd1113-tbl-0002:row4:col4 = '0.136 to 0.164'
- unparsed cell cpdd1113-tbl-0002:row5:col4 = '1.21 to 1.71'
- unparsed cell cpdd1113-tbl-0002:row6:col4 = '0.125 to 0.199'
- unparsed cell cpdd1113-tbl-0002:row7:col4 = '0.697 to 0.831'
- unparsed cell cpdd1113-tbl-0002:row8:col4 = '0.123 to 0.366'
- unparsed cell cpdd1113-tbl-0002:row9:col4 = '0.207 to 0.224'
- unparsed cell cpdd1113-tbl-0002:row11:col4 = '34.4 to 48.5'
- unparsed cell cpdd1113-tbl-0002:row12:col4 = '29.6 to 33.0'
- unparsed cell cpdd1113-tbl-0002:row15:col4 = '0.727 to 0.842'
- unparsed cell cpdd1113-tbl-0002:row16:col4 = '0.816 to 0.930'
- unparsed cell cpdd1113-tbl-0002:row17:col4 = '0.308 to 0.387'
- unparsed cell cpdd1113-tbl-0002:row18:col4 = '0.198 to 0.327'
- unparsed cell cpdd1113-tbl-0002:row19:col4 = '0.220 to 0.499'
- unparsed cell cpdd1113-tbl-0002:row20:col4 = '–0.605 to 0.394'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpdd1113-tbl-0002:row4:col2', 'cpdd1113-tbl-0002:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpdd1113-tbl-0002:row6:col2', 'cpdd1113-tbl-0002:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpdd1113-tbl-0002:row2:col2', 'cpdd1113-tbl-0002:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpdd1113-tbl-0002:row3:col2', 'cpdd1113-tbl-0002:row3:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpdd1113-tbl-0002:row5:col2', 'cpdd1113-tbl-0002:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.149 | not captured | not captured | ['cpdd1113-tbl-0002:row4:col2', 'cpdd1113-tbl-0002:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00621 L/h | not captured | not captured | ['cpdd1113-tbl-0002:row4:col2', 'cpdd1113-tbl-0002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.71 L | not captured | not captured | ['cpdd1113-tbl-0002:row3:col2', 'cpdd1113-tbl-0002:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tralokinumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Soehoel_2022` / `Soehoel_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:03 UTC</sub>
