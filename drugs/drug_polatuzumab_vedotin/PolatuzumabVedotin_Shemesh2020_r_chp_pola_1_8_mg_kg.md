<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_polatuzumab_vedotin/&quot;},{&quot;label&quot;:&quot;Shemesh_2020 \u00b7 r_chp_pola_1_8_mg_kg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polatuzumab vedotin — `PolatuzumabVedotin_Shemesh2020_r_chp_pola_1_8_mg_kg`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `polatuzumab vedotin`, measured `acMMAE`.

## Citation
Shemesh CS et al., Pharmacokinetics of polatuzumab vedotin…, Cancer chemotherapy and pha… (2020)
  ·  DOI: [10.1007/s00280-020-04054-8](https://doi.org/10.1007/s00280-020-04054-8)

## Model component
<dbs-pgx drug="polatuzumab vedotin" model-id="PolatuzumabVedotin_Shemesh2020_r_chp_pola_1_8_mg_kg" status="needs_review" stale="false" population="patients with B-cell non-Hodgkin lymphoma" measured-compound="acMMAE" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 2580 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Shemesh_2020_table_1:row2:col4 | — | not captured |
| AUCinf (ng day/mL) | `Q17` · AUC∞ | 4.75 | ng day/mL | not captured | [[d] · [ng]] / [ml] | not captured | exact (1.0) | Shemesh_2020_table_1:row3:col4 | — | not captured |
| t1/2 (day) | `Q57` · t1/2z | 57.3 | day | 4950720.0 | [d] | not captured | exact (1.0) | Shemesh_2020_table_1:row4:col4 | — | not captured |
| Vss (mL/kg) | `Q65` · Vss | 12.7 | mL/kg | 0.0008889999999999999 | [ml] / [kg] | not captured | exact (1.0) | Shemesh_2020_table_1:row5:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Cohort' — extend the ontology if this is a real PK parameter (source ['Shemesh_2020_table_1:row0:col4'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Shemesh_2020_table_1:row1:col4'])
- unit_dimension_unknown: 'ng day/mL' (AUC∞)
- implicit units: 'AUCinf (ng day/mL)' — the LLM proposed 'ng day/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acMMAE
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'r-chp + pola 1.8 mg/kg' subgroup of Shemesh_2020 (paper reports 9 populations: dose escalation/b-nhl, expansion/dlbcl, g-chp + pola 1.4 mg/kg, g-chp + pola 1.8 mg/kg, geometric mean (% cv), go27834 (pola + r) fl, go29044 (pola + r-chp) dlbcl, r-chp + pola 1.4 mg/kg, r-chp + pola 1.8 mg/kg)
- molar mass: no plausible PubChem entry for 'acMMAE' ('antibody-conjugated monomethyl auristatin E') — left in mass units
- molar mass: none found for 'polatuzumab_vedotin' — its concentrations stay mass-only
- molar mass: none found for 'acMMAE' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'acMMAE', not polatuzumab_vedotin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab3:row2:col4 = '0.92 (0.89–0.96)'
- unparsed cell Tab3:row3:col3 = '0.85 (0.82–0.88)'
- unparsed cell Tab3:row4:col4 = '0.74 (0.68–0.80)'
- unparsed cell Tab3:row5:col3 = '0.74 (0.68–0.80)'
- transposed table Shemesh_2020_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Shemesh_2020_table_1:row2:col3 = '1490 (24.0)a'
- unparsed cell Shemesh_2020_table_1:row2:col8 = '1890 (23.7)c'
- unparsed cell Shemesh_2020_table_1:row3:col2 = '1300 (1.70)a'
- unparsed cell Shemesh_2020_table_1:row3:col3 = '4.82 (15.0)a'
- unparsed cell Shemesh_2020_table_1:row3:col7 = '1800 (28.5)b'
- unparsed cell Shemesh_2020_table_1:row3:col8 = '5.45 (14.2)c'
- unparsed cell Shemesh_2020_table_1:row4:col2 = '4.99 (18.2)a'
- unparsed cell Shemesh_2020_table_1:row4:col3 = '80.0 (12.5)a'
- unparsed cell Shemesh_2020_table_1:row4:col7 = '4.99 (13.2)b'
- unparsed cell Shemesh_2020_table_1:row4:col8 = '95.6 (29.8)c'
- unparsed cell Shemesh_2020_table_1:row5:col2 = '57.7 (17.3)a'
- unparsed cell Shemesh_2020_table_1:row5:col3 = '17.0 (24.7)a'
- unparsed cell Shemesh_2020_table_1:row5:col7 = '91.6 (33.1)b'
- unparsed cell Shemesh_2020_table_1:row5:col8 = '17.3 (23.4)c'
- companion parameter table 1 transcribed (28 record(s))
- unparsed cell Shemesh_2020_table_2:row0:col6 = '0.646 (0.576–0.724)'
- unparsed cell Shemesh_2020_table_2:row1:col5 = '0.711 (0.616–0.820)'
- unparsed cell Shemesh_2020_table_2:row2:col6 = '1.39 (1.11–1.73)'
- unparsed cell Shemesh_2020_table_2:row3:col5 = '1.43 (1.15–1.78)'
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Shemesh_2020_table_1:row2:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Shemesh_2020_table_1:row4:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Shemesh_2020_table_1:row5:col4'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ng day/mL | not captured | not captured | ['Shemesh_2020_table_1:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q65 | pass | volume within physiological range | 0.889 L | not captured | not captured | ['Shemesh_2020_table_1:row5:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_polatuzumab_vedotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Shemesh_2020` / `Shemesh_2020::r_chp_pola_1_8_mg_kg`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:11 UTC</sub>
