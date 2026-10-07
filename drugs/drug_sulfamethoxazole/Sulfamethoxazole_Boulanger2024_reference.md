<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamethoxazole&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/&quot;},{&quot;label&quot;:&quot;Boulanger_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfamethoxazole_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfamethoxazole_Hess1993_reference&quot;,&quot;label&quot;:&quot;Hess_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Hess1993_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfamethoxazole — `Sulfamethoxazole_Boulanger2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Boulanger M et al., Pharmacokinetic modeling of sulfamethox…, Poultry science (2024)
  ·  DOI: [10.1016/j.psj.2024.104200](https://doi.org/10.1016/j.psj.2024.104200)

## Model component
<dbs-pgx drug="sulfamethoxazole" model-id="Sulfamethoxazole_Boulanger2024_reference" status="needs_review" stale="false" population="broilers" measured-compound="sulfamethoxazole" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F_SDZ | `Q40` · Fab | 99 | not captured | not captured | not captured | not captured | llm (0.6) | tbl0001:row2:col2 | — | not captured |
| ka_SMX | `Q49` · kabs | 16.40 | 1/h | 0.004555555555555555 | 1/h | not captured | llm (0.6) | tbl0001:row6:col2, tbl0001:row6:col3 | — | not captured |
| Vd_SMX | `Q63` · V1 | 10.10 | L/kg | 0.707 | L | not captured | llm (0.6) | tbl0001:row9:col2, tbl0001:row9:col3 | — | not captured |
| Vd_TMP | `Q61` · V | 5.42 | L/kg | 0.3794 | L | not captured | llm (0.6) | tbl0001:row10:col2, tbl0001:row10:col3 | — | not captured |
| CL_SDZ | `Q22` · CL | 6.00 | L/h/kg | 0.00011666666666666667 | L/h | not captured | llm (0.6) | tbl0001:row11:col2, tbl0001:row11:col3 | — | not captured |
| CL_TMP | `Q371` · CLmp | 4.77 | L/h/kg | 9.275e-05 | L/h | not captured | llm_confirmed (0.6) | tbl0001:row13:col2, tbl0001:row13:col3 | — | not captured |
| β_Vd_SDZ_BW | `Q65` · Vss | 40.70 | not captured | not captured | not captured | not captured | llm (0.6) | tbl0001:row14:col2, tbl0001:row14:col3 | — | not captured |
| T1/2β SDZ (h) | `Q60` · t1/2β | 2.00 | h | 7200.0 | [h] | not captured | boundary (0.8) | Boulanger_2024_table_2:row2:col1, Boulanger_2024_table_2:row2:col2, Boulanger_2024_table_2:row2:col3, Boulanger_2024_table_2:row2:col4 | — | not captured |
| AUC∞ SDZ (h × µg/mL) | `Q17` · AUC∞ | 187.00 | h × µg/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm_confirmed (0.6) | Boulanger_2024_table_2:row5:col1, Boulanger_2024_table_2:row5:col2, Boulanger_2024_table_2:row5:col3, Boulanger_2024_table_2:row5:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'F_SMX' — extend the ontology if this is a real PK parameter (source ['tbl0001:row3:col2'])
- dropped unlinked row (NIL): 'F_TMP' — extend the ontology if this is a real PK parameter (source ['tbl0001:row4:col2'])
- dropped unlinked row (NIL): 'ka_SDZ' — extend the ontology if this is a real PK parameter (source ['tbl0001:row5:col2', 'tbl0001:row5:col3'])
- dropped duplicate Q49 ('ka_TMP', value '11.30') — already have one for this compound
- dropped unlinked row (NIL): 'Vd_SDZ' — extend the ontology if this is a real PK parameter (source ['tbl0001:row8:col2', 'tbl0001:row8:col3'])
- dropped duplicate Q22 ('CL_SMX', value '8.72') — already have one for this compound
- dropped duplicate Q63 ('β_Vd_SMX_BW', value '46.40') — already have one for this compound
- dropped duplicate Q22 ('β_CL_SDZ_BW', value '41.40') — already have one for this compound
- dropped duplicate Q22 ('β_CL_TMP_BW', value '23.10') — already have one for this compound
- dropped duplicate Q60 ('T1/2β SMX (h)', value '2.80') — already have one for this compound
- dropped duplicate Q60 ('T1/2β TMP (h)', value '1.50') — already have one for this compound
- unit_dimension_unknown: 'h × µg/mL' (AUC∞)
- dropped duplicate Q17 ('AUC∞ SMX (h × µg/mL)', value '204.00') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ TMP (h × µg/mL)', value '4.00') — already have one for this compound
- implicit units: 'ka_SMX' → 1/h (from the popPK convention: 'First-order absorption rate constants in population PK are standardly expressed in 1/h. The text discusses the oral admi')
- implicit units: 'Vd_SMX' → L/kg (from the paper text: "The paper text states: 'The volume of distribution of TMP was found to be 3.14 L/kg and about 6 times higher in comparis")
- implicit units: 'Vd_TMP' → L/kg (from the paper text: "The paper text states: 'Trimethoprim was found to have a Vd about 5 to 6 times higher than both sulfonamides (3.14 L/kg)")
- implicit units: 'CL_SDZ' → L/h/kg (from the paper text: "The paper text states: 'The population clearance of SDZ ... (0.15 L/h/kg for both sulfonamides)'. While the table value ")
- implicit units: 'CL_TMP' → L/h/kg (from the paper text: "The paper text states: 'The population clearance of TMP (1.53 L/h/kg)'. The unit for clearance is explicitly L/h/kg. The")
- implicit units: 'AUC∞ SDZ (h × µg/mL)' — the LLM proposed 'h × µg/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfamethoxazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tbl0001:row2:col3 = '&lt;0.1'
- unparsed cell tbl0001:row3:col3 = '&lt;0.1'
- unparsed cell tbl0001:row4:col3 = '&lt;0.1'
- unparsed cell tbl0001:row5:col1 = 'h−1'
- unparsed cell tbl0001:row6:col1 = 'h−1'
- unparsed cell tbl0001:row7:col1 = 'h−1'
- companion parameter table 2 transcribed (24 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C5_dimension_Q371 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl0001:row13:col2', 'tbl0001:row13:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl0001:row6:col2', 'tbl0001:row6:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Boulanger_2024_table_2:row2:col1', 'Boulanger_2024_table_2:row2:col2', 'Boulanger_2024_table_2:row2:col3', 'Boulanger_2024_table_2:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl0001:row10:col2', 'tbl0001:row10:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl0001:row9:col2', 'tbl0001:row9:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | h × µg/mL | not captured | not captured | ['Boulanger_2024_table_2:row5:col1', 'Boulanger_2024_table_2:row5:col2', 'Boulanger_2024_table_2:row5:col3', 'Boulanger_2024_table_2:row5:col4'] |
| C5_unit_missing_Q65 | fail | [length] ** 3 | not captured | not captured | not captured | ['tbl0001:row14:col2', 'tbl0001:row14:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.0 | not captured | not captured | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 420 L/h | not captured | not captured | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 379 L | not captured | not captured | ['tbl0001:row10:col2', 'tbl0001:row10:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 707 L | not captured | not captured | ['tbl0001:row9:col2', 'tbl0001:row9:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sulfamethoxazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Boulanger_2024` / `Boulanger_2024::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:57 UTC</sub>
