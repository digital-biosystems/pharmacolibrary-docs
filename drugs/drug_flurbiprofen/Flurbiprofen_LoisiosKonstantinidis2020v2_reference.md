<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/&quot;},{&quot;label&quot;:&quot;Loisios-Konstantinidis_2020_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Aarons1991_reference&quot;,&quot;label&quot;:&quot;Aarons_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flurbiprofen — `Flurbiprofen_LoisiosKonstantinidis2020v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Loisios-Konstantinidis I et al., Physiologically Based Pharmacokinetic/P…, Pharmaceutics (2020)
  ·  DOI: [10.3390/pharmaceutics12111049](https://doi.org/10.3390/pharmaceutics12111049)

## Model component
<dbs-pgx drug="flurbiprofen" model-id="Flurbiprofen_LoisiosKonstantinidis2020v2_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="flurbiprofen" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 15 covariate effects.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MW (g/mol) | `Q374` · MW | 244.3 | g/mol | not captured | [g] / [[m] · [ol]] | not captured | exact (1.0) | pharmaceutics-12-01049-t003:row3:col1 | — | not captured |
| Fraction unbound in plasma | `Q46` · fu | 0.01 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-12-01049-t003:row7:col1 | — | not captured |
| logKm:w neutral | `Q1` · Km | 5.37 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-12-01049-t003:row16:col1 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | 0.074 | L/kg | 0.00518 | [l] / [kg] | not captured | exact (1.0) | pharmaceutics-12-01049-t003:row21:col1 | — | not captured |
| Kp scalar | `Q410` · Kp | 0.7 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-12-01049-t003:row22:col1 | — | not captured |
| cyp2c9_isef | `Q900` · cyp2c9_isef | 0.3 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row36:col1 | — | not captured |
| Additional HLM liver CLint (μL/min/mg proein) | `Q3` · CLint | 7.88 | μL/min/mg proein | not captured | [µl] / [[min] · [mg] · [proein]] | not captured | llm_confirmed (0.6) | pharmaceutics-12-01049-t003:row41:col1, pharmaceutics-12-01049-t003:row41:col2 | — | not captured |
| Clrenal (L/h) | `Q26` · CLR | 0.066 | L/h | 1.8333333333333335e-08 | [l] / [h] | not captured | llm (0.6) | pharmaceutics-12-01049-t003:row42:col1 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 15.79 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row26:col1, pharmaceutics-12-01049-t003:row26:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 8.756 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row27:col1, pharmaceutics-12-01049-t003:row27:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 11.53 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row28:col1, pharmaceutics-12-01049-t003:row28:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 8.756 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row29:col1, pharmaceutics-12-01049-t003:row29:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 9.55 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row30:col1, pharmaceutics-12-01049-t003:row30:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 8.756 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row31:col1, pharmaceutics-12-01049-t003:row31:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 10.04 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row32:col1, pharmaceutics-12-01049-t003:row32:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 10.39 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row33:col1, pharmaceutics-12-01049-t003:row33:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 8.901 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row34:col1, pharmaceutics-12-01049-t003:row34:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 23.25 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row35:col1, pharmaceutics-12-01049-t003:row35:col2 | — | not captured |
| theta_q66_ugt2b7 | `Q900` · theta_q66_ugt2b7 | 119.7 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row37:col1 | — | not captured |
| theta_km_ugt2b7 | `Q900` · theta_km_ugt2b7 | 50.21 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row38:col1 | — | not captured |
| theta_q66_ugt1a9 | `Q900` · theta_q66_ugt1a9 | 3.286 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row39:col1 | — | not captured |
| theta_km_ugt1a9 | `Q900` · theta_km_ugt1a9 | 182.2 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row40:col1 | — | not captured |
| predictions of CL/F | `Q27` · CL/F | 74 | % | not captured | % | not captured | boundary (0.8) | Loisios-Konstantinidis_2020_2:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'reference/comments' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'logPo:w' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row4:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row5:col1'])
- dropped unlinked row (NIL): 'Blood/plasma ratio' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row6:col1'])
- dropped unlinked row (NIL): 'Papp, Caco-2 (×10−6 cm/s)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row10:col1'])
- dropped unlinked row (NIL): 'Papp, Caco-2, ref (×10−6 cm/s)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row11:col1', 'pharmaceutics-12-01049-t003:row12:col1'])
- dropped unlinked row (NIL): 'Peff, human (×10−4 cm/s)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row13:col1'])
- dropped unlinked row (NIL): 'S0 (mg/mL)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row15:col1'])
- dropped duplicate Q1 ('logKm:w ion', value '2.46') — already have one for this compound
- dropped unlinked row (NIL): 'Fox' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row24:col1'])
- covariate level 'CYP2C9-ISEF' → Q900:cyp2c9_isef = 0.3 (linear_fractional on the model)
- unit_dimension_unknown: 'μL/min/mg proein' (CLint)
- dropped unlinked row (NIL): 'keo (h−1) (%CV)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row45:col1', 'pharmaceutics-12-01049-t003:row47:col1'])
- dropped PD-category row 'IC50 (mg/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-12-01049-t003:row46:col1', 'pharmaceutics-12-01049-t003:row48:col1'])
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- salvaged Q27 ('predictions of CL/F'=74) from results prose — parameter table was unreadable
- implicit units: 'logKm:w neutral' — the LLM proposed 'L', whose dimension does not fit Q1; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=flurbiprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-12-01049-t003:row4:col2 = '[54,55]'
- unparsed cell pharmaceutics-12-01049-t003:row5:col2 = 'Updated from in vitro solubility data (see Table 4 and Section 3.2)'
- unparsed cell pharmaceutics-12-01049-t003:row6:col2 = '[56]'
- unparsed cell pharmaceutics-12-01049-t003:row7:col2 = '[5,56,57,58,59]'
- unparsed cell pharmaceutics-12-01049-t003:row10:col2 = 'Measured value [60]'
- unparsed cell pharmaceutics-12-01049-t003:row11:col2 = 'Negative calibrator (Atenolol) value [60]'
- unparsed cell pharmaceutics-12-01049-t003:row12:col2 = 'Positive calibrator (Verapamil) value [60]'
- unparsed cell pharmaceutics-12-01049-t003:row15:col2 = 'In vitro data (see Table 4 and Section 3.1)'
- unparsed cell pharmaceutics-12-01049-t003:row16:col2 = 'Estimated from in vitro data (see Table 5 and Section 2.6 and Section 3.2)'
- unparsed cell pharmaceutics-12-01049-t003:row17:col2 = 'Estimated from in vitro data (see Table 5 and Section 2.6 and Section 3.2)'
- unparsed cell pharmaceutics-12-01049-t003:row21:col2 = 'Predicted by Method 2'
- unparsed cell pharmaceutics-12-01049-t003:row24:col2 = '[4]'
- unparsed cell pharmaceutics-12-01049-t003:row37:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row38:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row39:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row40:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row42:col2 = '[4]'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row42:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row3:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row21:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row16:col1'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | % | not captured | not captured | ['Loisios-Konstantinidis_2020_2:results_prose'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | μL/min/mg proein | not captured | not captured | ['pharmaceutics-12-01049-t003:row41:col1', 'pharmaceutics-12-01049-t003:row41:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q65 | pass | volume within physiological range | 5.18 L | not captured | not captured | ['pharmaceutics-12-01049-t003:row21:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flurbiprofen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Loisios-Konstantinidis_2020_2` / `Loisios-Konstantinidis_2020_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:37 UTC</sub>
