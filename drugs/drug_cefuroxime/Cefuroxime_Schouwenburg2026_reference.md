<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefuroxime&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/&quot;},{&quot;label&quot;:&quot;Schouwenburg_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefuroxime_Cao2025_reference&quot;,&quot;label&quot;:&quot;Cao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Cao2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Gertler2018_reference&quot;,&quot;label&quot;:&quot;Gertler_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Gertler2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Hartman2020_reference&quot;,&quot;label&quot;:&quot;Hartman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Hartman2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Viberg2006_reference&quot;,&quot;label&quot;:&quot;Viberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Viberg2006_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefuroxime — `Cefuroxime_Schouwenburg2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Schouwenburg S et al., Low Target Attainment of Intravenous Ce…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-025-01577-2](https://doi.org/10.1007/s40262-025-01577-2)

## Model component
<dbs-pgx drug="cefuroxime" model-id="Cefuroxime_Schouwenburg2026_reference" status="extracted" stale="false" population="critically ill term neonates and children" measured-compound="cefuroxime" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CLcefu | Q22 | not captured | tv_prefix |
| V1cefu | Q63 | not captured | tv_prefix |
| V2cefu | Q64 | not captured | tv_prefix |
| Qcefu | Q30 | not captured | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (mg/L)' routed out of structural estimates ('Residual variability')
- dropped value-less row: 'CLcefu=TVCL×(BW70)0.75×(CRCL81.3)θCRCL×(PNA391)θPNA'
- dropped value-less row: 'TVCL (Lh/70kg)' (captured trailing unit 'Lh/70kg' for child rows)
- dropped value-less row: 'V1cefu=TVV1×(BW70)1.00'
- dropped value-less row: 'TVV1 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'V2cefu=TVV2×(BW70)1.00'
- dropped value-less row: 'TVV2 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'Qcefu=TVQ×(BW70)0.75'
- dropped value-less row: 'TVQ (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'θCLCR'
- dropped value-less row: 'θPNA'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefuroxime
- bound model equation to Q22 (CL): CLcefu = TVCL*(BW/70)^0.75*(CRCL/81.3)^θCRCL*(PNA/391)^θPNA
- bound model equation to Q63 (V1): V1cefu = TVV1*(BW/70)^1.00
- bound model equation to Q64 (V2): V2cefu = TVV2*(BW/70)^1.00
- bound model equation to Q30 (Q): Qcefu = TVQ*(BW/70)^0.75
- Q22 (CL) is equation-defined: value moved to equation-variable 'CLcefu'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'V1cefu'; equation kept verbatim
- Q64 (V2) is equation-defined: value moved to equation-variable 'V2cefu'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Qcefu'; equation kept verbatim
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab3:row3:col2 = '5.30 (4.76–5.92) [6.6]'
- unparsed cell Tab3:row5:col2 = '4.98 (3.42–5.92) [19.7]'
- unparsed cell Tab3:row7:col2 = '12.41 (10.51–14.28) [9.3]'
- unparsed cell Tab3:row9:col2 = '28.23 (18.26–44.06) [29.3]'
- unparsed cell Tab3:row11:col2 = '0.766 (0.49–1.02) [21.6]'
- unparsed cell Tab3:row12:col2 = '0.084 (0.043–0.130) [30.0]'
- unparsed cell Tab3:row16:col2 = '40.6% (35.8%–46.1%) [7.9%]'
- unparsed cell Tab3:row17:col2 = '0.550 (0.385–0.796) [23.3]'
- LLM selected parameter table(s) 3
- captured model equation CLcefu = TVCL*(BW/70)^0.75*(CRCL/81.3)^θCRCL*(PNA/391)^θPNA
- captured model equation V1cefu = TVV1*(BW/70)^1.00
- captured model equation V2cefu = TVV2*(BW/70)^1.00
- captured model equation Qcefu = TVQ*(BW/70)^0.75

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cefuroxime/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schouwenburg_2026` / `Schouwenburg_2026::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:04 UTC</sub>
