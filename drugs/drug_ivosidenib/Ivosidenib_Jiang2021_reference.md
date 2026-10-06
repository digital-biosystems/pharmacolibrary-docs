<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ivosidenib&quot;,&quot;href&quot;:&quot;drugs/drug_ivosidenib/&quot;},{&quot;label&quot;:&quot;Jiang_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ivosidenib — `Ivosidenib_Jiang2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Jiang X et al., Population pharmacokinetic and exposure…, Clinical and translational… (2021)
  ·  DOI: [10.1111/cts.12959](https://doi.org/10.1111/cts.12959)

## Model component
<dbs-pgx drug="ivosidenib" model-id="Ivosidenib_Jiang2021_reference" status="needs_review" stale="false" population="patients with IDH1-mutant advanced hematologic malignancies" measured-compound="ivosidenib" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Steady‐state CL/F, L/h | `Q27` · CL/F | 5.39 | L/h | 1.4972222222222222e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | cts12959-tbl-0001:row2:col1, cts12959-tbl-0001:row2:col2, cts12959-tbl-0001:row2:col3, cts12959-tbl-0001:row2:col4 | — | not captured |
| Steady‐state Vc/F, L | `Q290` · V1/F | 234 | L | 0.234 | [l] | not captured | llm_confirmed (0.6) | cts12959-tbl-0001:row3:col1, cts12959-tbl-0001:row3:col2, cts12959-tbl-0001:row3:col3, cts12959-tbl-0001:row3:col4 | — | not captured |
| Steady‐state Q/F, L/h | `Q69` · Q/F | 15.8 | L/h | 4.388888888888889e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | cts12959-tbl-0001:row4:col1, cts12959-tbl-0001:row4:col2 | — | not captured |
| Steady‐state Vp/F, L | `Q82` · V2/F | 151 | L | 0.151 | [l] | not captured | llm_confirmed (0.6) | cts12959-tbl-0001:row5:col1, cts12959-tbl-0001:row5:col2 | — | not captured |
| ka, 1/h | `Q49` · kabs | 1.38 | 1/h | 0.0003833333333333333 | [1] / [h] | not captured | exact (1.0) | cts12959-tbl-0001:row10:col1, cts12959-tbl-0001:row10:col2, cts12959-tbl-0001:row10:col3, cts12959-tbl-0001:row10:col4 | — | not captured |
| Tlag, h | `Q83` · tlag | 0.27 | h | 972.0000000000001 | [h] | not captured | exact (1.0) | cts12959-tbl-0001:row11:col1, cts12959-tbl-0001:row11:col2 | — | not captured |
| Steady‐state fold change in Frel | `Q87` · Frel | 0.50 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cts12959-tbl-0001:row12:col1, cts12959-tbl-0001:row12:col2 | — | not captured |
| Steady‐state fold change in CL | `Q22` · CL | 1.66 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cts12959-tbl-0001:row13:col1, cts12959-tbl-0001:row13:col2 | — | not captured |
| dose_frel_exponent | `Q900` · dose_frel_exponent | -0.49 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12959-tbl-0001:row14:col1, cts12959-tbl-0001:row14:col2 | — | not captured |
| baseline_albumin_cl_f_exponent | `Q900` · baseline_albumin_cl_f_exponent | 0.82 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12959-tbl-0001:row16:col1, cts12959-tbl-0001:row16:col2 | — | not captured |
| baseline_albumin_vc_f_exponent | `Q900` · baseline_albumin_vc_f_exponent | 0.73 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12959-tbl-0001:row18:col1, cts12959-tbl-0001:row18:col2 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.92 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12959-tbl-0001:row15:col1, cts12959-tbl-0001:row15:col2 | — | not captured |
| theta_cl_f_albumin_power | `Q900` · theta_cl_f_albumin_power | 0.99 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12959-tbl-0001:row17:col1, cts12959-tbl-0001:row17:col2 | — | not captured |
| theta_v1_f_albumin_power | `Q900` · theta_v1_f_albumin_power | 1.1 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12959-tbl-0001:row19:col1, cts12959-tbl-0001:row19:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'fixed effect' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'between‐patient variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q27 ('First‐dose CL/F, L/h', value '1.63') — already have one for this compound
- dropped duplicate Q290 ('First‐dose Vc/F, L', value '71') — already have one for this compound
- dropped duplicate Q69 ('First‐dose Q/F, L/h', value '4.8') — already have one for this compound
- dropped duplicate Q82 ('First‐dose Vp/F, L', value '46') — already have one for this compound
- covariate level 'Dose‐Frel exponent' → Q900:dose_frel_exponent = -0.49 (power on Q27)
- covariate level 'Baseline albumin‐CL/F exponent' → Q900:baseline_albumin_cl_f_exponent = 0.82 (power on Q27)
- covariate level 'Baseline albumin‐Vc/F exponent' → Q900:baseline_albumin_vc_f_exponent = 0.73 (power on Q27)
- dropped duplicate Q22 ('Fold change in CL with voriconazole', value '0.64') — already have one for this compound
- dropped unlinked row (NIL): 'Fold change in CL with fluconazole' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row21:col1', 'cts12959-tbl-0001:row21:col2'])
- dropped duplicate Q22 ('Fold change in CL with posaconazole', value '0.65') — already have one for this compound
- dropped unlinked row (NIL): 'Fold change in CL with other moderate/strong CYP3A inhibitors' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row23:col1', 'cts12959-tbl-0001:row23:col2'])
- dropped unlinked row (NIL): 'Fold change in CL with mild CYP3A inhibitors' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row24:col1', 'cts12959-tbl-0001:row24:col2'])
- dropped unlinked row (NIL): 'Log‐additive CV%' — extend the ontology if this is a real PK parameter (source ['cts12959-tbl-0001:row25:col1', 'cts12959-tbl-0001:row25:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ivosidenib

**Extraction notes:**
- LLM selected parameter table(s) 1
- skipped illustrative/example figure caption(s) cts12959-fig-0001 — per-individual fit, not model parameters

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12959-tbl-0001:row2:col1', 'cts12959-tbl-0001:row2:col2', 'cts12959-tbl-0001:row2:col3', 'cts12959-tbl-0001:row2:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts12959-tbl-0001:row3:col1', 'cts12959-tbl-0001:row3:col2', 'cts12959-tbl-0001:row3:col3', 'cts12959-tbl-0001:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts12959-tbl-0001:row10:col1', 'cts12959-tbl-0001:row10:col2', 'cts12959-tbl-0001:row10:col3', 'cts12959-tbl-0001:row10:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12959-tbl-0001:row4:col1', 'cts12959-tbl-0001:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts12959-tbl-0001:row5:col1', 'cts12959-tbl-0001:row5:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cts12959-tbl-0001:row11:col1', 'cts12959-tbl-0001:row11:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12959-tbl-0001:row13:col1', 'cts12959-tbl-0001:row13:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.39 L/h | not captured | not captured | ['cts12959-tbl-0001:row2:col1', 'cts12959-tbl-0001:row2:col2', 'cts12959-tbl-0001:row2:col3', 'cts12959-tbl-0001:row2:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 234 L | not captured | not captured | ['cts12959-tbl-0001:row3:col1', 'cts12959-tbl-0001:row3:col2', 'cts12959-tbl-0001:row3:col3', 'cts12959-tbl-0001:row3:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 151 L | not captured | not captured | ['cts12959-tbl-0001:row5:col1', 'cts12959-tbl-0001:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ivosidenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jiang_2021` / `Jiang_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:47 UTC</sub>
