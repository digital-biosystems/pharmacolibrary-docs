<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/&quot;},{&quot;label&quot;:&quot;Kim_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fimasartan_Kim2014v2_estimate&quot;,&quot;label&quot;:&quot;Kim_2014_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fimasartan — `Fimasartan_Kim2017_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Kim CO et al., Decreased potency of fimasartan in live…, Translational and clinical… (2017)
  ·  DOI: [10.12793/tcp.2017.25.1.43](https://doi.org/10.12793/tcp.2017.25.1.43)

## Model component
<dbs-pgx drug="fimasartan" model-id="Fimasartan_Kim2017_reference" status="needs_review" stale="false" population="healthy adults and adults with hepatic impairment" measured-compound="fimasartan" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 27.0 | L/h | 7.5e-06 | L/h | 13.3 | exact (1.0) | T2:row2:col2, T2:row2:col3 | — | not captured |
| V2 | `Q64` · V2 | 48.7 | L | 0.04870000000000001 | L | 20.4 | exact (1.0) | T2:row3:col2, T2:row3:col3 | — | not captured |
| V3 | `Q77` · V3 | 46.5 | L | 0.0465 | L | 11.1 | exact (1.0) | T2:row4:col2, T2:row4:col3 | — | not captured |
| Ka | `Q49` · kabs | 0.319 | 1/h | 8.861111111111111e-05 | 1/h | 16.3 | exact (1.0) | T2:row5:col2, T2:row5:col3 | — | 63.5 (None% RSE) |
| Q | `Q30` · Q | 3.40 | L/h | 9.444444444444444e-07 | L/h | 12.4 | exact (1.0) | T2:row6:col2, T2:row6:col3 | — | not captured |
| D2 | `Q310` · D1 | 0.583 | h | 2098.7999999999997 | h | 9.8 | llm (0.6) | T2:row7:col2, T2:row7:col3 | — | not captured |
| LAG | `Q83` · tlag | 2.0 | h | 7200.0 | h | 0.1 | llm (0.6) | T2:row8:col2, T2:row8:col3 | — | not captured |
| α | `Q67` · λ1 | 0.642 | not captured | not captured | not captured | 7.4 | exact (1.0) | T2:row13:col2, T2:row13:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωCL/F' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section iiv: 'ωV2/F' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section iiv: 'ωKa' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section iiv: 'ωa' routed out of structural estimates ('Interindividual variability (ω, CV%)')
- table section residual_error: 'σadd' routed out of structural estimates ('Residual error')
- table section residual_error: 'σprop' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'IL1' — extend the ontology if this is a real PK parameter (source ['T2:row10:col2', 'T2:row10:col3'])
- dropped unlinked row (NIL): 'IL2' — extend the ontology if this is a real PK parameter (source ['T2:row11:col2', 'T2:row11:col3'])
- implicit units: 'CL' → L/h (from the popPK convention: 'No unit provided in text or table caption. CL (Total clearance) is conventionally expressed in L/h. The value 27.0 is co')
- implicit units: 'V2' → L (from the popPK convention: 'No unit provided in text or table caption. V2 (Volume of distribution of the peripheral compartment) is conventionally e')
- implicit units: 'V3' → L (from the popPK convention: 'No unit provided in text or table caption. V3 (Volume of distribution of the second peripheral compartment) is conventio')
- implicit units: 'Ka' → 1/h (from the popPK convention: 'No unit provided in text or table caption. Ka (Absorption rate constant) is a first-order rate constant, conventionally ')
- implicit units: 'Q' → L/h (from the popPK convention: 'No unit provided in text or table caption. Q (Intercompartmental clearance) is conventionally expressed in L/h. The valu')
- implicit units: 'D2' → h (from the popPK convention: 'No unit provided in text or table caption. D2 (Duration of zero-order absorption) is a time parameter, conventionally ex')
- implicit units: 'LAG' → h (from the popPK convention: 'No unit provided in text or table caption. LAG (Absorption lag time) is a time parameter, conventionally expressed in h.')
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q64 (V2); Q30 (Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fimasartan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- unparsed cell T2:row2:col4 = '27.1 (21.8–38.7)'
- unparsed cell T2:row3:col4 = '46.8 (28.2–96.0)'
- unparsed cell T2:row4:col4 = '47.4 (30.5–68.7)'
- unparsed cell T2:row5:col1 = 'Absorption rate constant (h–1)'
- unparsed cell T2:row5:col4 = '0.320 (0.220–0.518)'
- unparsed cell T2:row6:col4 = '3.62 (2.28–6.33)'
- unparsed cell T2:row7:col4 = '0.598 (0.500–0.742)'
- unparsed cell T2:row8:col4 = '2.0 (1.4–2.5)'
- unparsed cell T2:row10:col4 = '0.084 (0.001–0.668)'
- unparsed cell T2:row11:col4 = '0.895 (0.607–1.481)'
- unparsed cell T2:row13:col1 = 'Proportionality constant for fraction of zero-order absorption process (F2)'
- unparsed cell T2:row13:col4 = '0.633 (0.455–0.799)'
- unparsed cell T2:row15:col4 = '35.8 (12.2–67.2)'
- unparsed cell T2:row16:col4 = '89.9 (16.1–166.8)'
- unparsed cell T2:row17:col4 = '49.3 (5.0–74.6)'
- unparsed cell T2:row18:col4 = '61.5 (6.0–152.0)'
- unparsed cell T2:row21:col4 = '0.350 (0.122–0.672)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col2', 'T2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row6:col2', 'T2:row6:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['T2:row7:col2', 'T2:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row5:col2', 'T2:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col2', 'T2:row3:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col2', 'T2:row4:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T2:row8:col2', 'T2:row8:col3'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['T2:row13:col2', 'T2:row13:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 27.0 | not captured | not captured | ['T2:row2:col2', 'T2:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 27 L/h | not captured | not captured | ['T2:row2:col2', 'T2:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 48.7 L | not captured | not captured | ['T2:row3:col2', 'T2:row3:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fimasartan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2017` / `Kim_2017::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:28 UTC</sub>
