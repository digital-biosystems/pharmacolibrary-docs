<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;oxytetracycline&quot;,&quot;href&quot;:&quot;drugs/drug_oxytetracycline/&quot;},{&quot;label&quot;:&quot;Winter_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxytetracycline_Winter2024_reference&quot;,&quot;label&quot;:&quot;Winter_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_oxytetracycline/Oxytetracycline_Winter2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxytetracycline — `Oxytetracycline_Winter2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `V1`, `V2`, `V3`, `CL`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
3. Parent/metabolite records commonly miss the formation link.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Winter EA; Pelligand L; Toutain PL; Lees P; Milanova A; Gehring R et al. (2024). Frontiers in microbiology 15
  ·  DOI: [10.3389/fmicb.2024.1498219](https://doi.org/10.3389/fmicb.2024.1498219)

## Model component
<dbs-pgx drug="oxytetracycline" model-id="Oxytetracycline_Winter2024_reference" status="rejected" stale="false" population="calves and adult cattle" measured-compound="oxytetracycline" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvV1 (adult) | `Q63` · V1 | 143 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row3:col1, tab1:row3:col3, tab1:row3:col4, tab1:row3:col5, tab1:row3:col6 | — | not captured |
| tvV2 (adult) | `Q64` · V2 | 973 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row4:col1, tab1:row4:col3, tab1:row4:col4, tab1:row4:col5, tab1:row4:col6 | — | not captured |
| tvV3 (adult) | `Q77` · V3 | 2458 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row5:col1, tab1:row5:col3, tab1:row5:col4, tab1:row5:col5, tab1:row5:col6 | — | not captured |
| tvCl (adult) | `Q22` · CL | 68.35 | adult | not captured | [adult] | not captured | tv_prefix (0.95) | tab1:row6:col1, tab1:row6:col3, tab1:row6:col4, tab1:row6:col5, tab1:row6:col6 | — | not captured |
| tvKa1 | `Q49` · kabs | 0.235 | not captured | not captured | not captured | not captured | llm (0.6) | tab1:row9:col1, tab1:row9:col2, tab1:row9:col3, tab1:row9:col4, tab1:row9:col5, tab1:row9:col6 | — | not captured |
| tvF1 | `Q40` · Fab | 1.422 | not captured | not captured | not captured | not captured | tv_prefix (0.95) | tab1:row13:col1, tab1:row13:col3, tab1:row13:col4, tab1:row13:col5, tab1:row13:col6, tab1:row13:col7 | — | not captured |
| dadult_calfCla | `Q900` · equation variable | 0.570 | not captured | not captured | not captured | not captured | llm (0.6) | tab1:row14:col1, tab1:row14:col3, tab1:row14:col4, tab1:row14:col5, tab1:row14:col6 | — | not captured |
| nTlag | `Q83` · tlag | 1 | not captured | not captured | not captured | not captured | llm (0.6) | Winter_2024_table_2:row4:col1, Winter_2024_table_2:row4:col2, Winter_2024_table_2:row4:col3, Winter_2024_table_2:row4:col4, Winter_2024_table_2:row17:col1, Winter_2024_table_2:row17:col2, Winter_2024_table_2:row17:col3, Winter_2024_table_2:row17:col4 | — | not captured |
| theta_tlag_category | `Q900` · theta_tlag_category | 15.74 | not captured | not captured | not captured | not captured | not captured (not captured) | tab1:row11:col1, tab1:row11:col3, tab1:row11:col4, tab1:row11:col5, tab1:row11:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'adult' (V1)
- unit_dimension_unknown: 'adult' (V2)
- unit_dimension_unknown: 'adult' (V3)
- unit_dimension_unknown: 'adult' (CL)
- dropped duplicate Q22 ('tvCld2 (adult)', value '549') — already have one for this compound
- dropped duplicate Q22 ('tvCld3 (adult)', value '23.20') — already have one for this compound
- dropped duplicate Q49 ('tvKa2', value '0.0491') — already have one for this compound
- dropped duplicate Q63 ('tvFrapid', value '0.783') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfCld2b', value '0.201') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfCld3c', value '0.228') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV1d', value '0.353') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV2e', value '0.154') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV3f', value '0.535') — already have one for this compound
- routed 'tvCMultStdev' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'nKa1' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row1:col1', 'Winter_2024_table_2:row14:col1'])
- dropped unlinked row (NIL): 'nKa2' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row2:col1', 'Winter_2024_table_2:row2:col2', 'Winter_2024_table_2:row15:col1', 'Winter_2024_table_2:row15:col2'])
- dropped unlinked row (NIL): 'nF1' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row3:col1', 'Winter_2024_table_2:row3:col2', 'Winter_2024_table_2:row3:col3', 'Winter_2024_table_2:row16:col1', 'Winter_2024_table_2:row16:col2', 'Winter_2024_table_2:row16:col3'])
- dropped unlinked row (NIL): 'nFrapid' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row5:col1', 'Winter_2024_table_2:row5:col2', 'Winter_2024_table_2:row5:col3', 'Winter_2024_table_2:row5:col4', 'Winter_2024_table_2:row5:col5', 'Winter_2024_table_2:row18:col1', 'Winter_2024_table_2:row18:col2', 'Winter_2024_table_2:row18:col3', 'Winter_2024_table_2:row18:col4', 'Winter_2024_table_2:row18:col5'])
- dropped duplicate Q63 ('nV1', value '1') — already have one for this compound
- dropped duplicate Q64 ('nV2', value '1') — already have one for this compound
- dropped duplicate Q77 ('nV3', value '1') — already have one for this compound
- dropped unlinked row (NIL): 'nCl' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row9:col6', 'Winter_2024_table_2:row9:col7', 'Winter_2024_table_2:row9:col8', 'Winter_2024_table_2:row9:col9', 'Winter_2024_table_2:row22:col6', 'Winter_2024_table_2:row22:col7', 'Winter_2024_table_2:row22:col8', 'Winter_2024_table_2:row22:col9'])
- dropped unlinked row (NIL): 'nCl2' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row10:col6', 'Winter_2024_table_2:row10:col7', 'Winter_2024_table_2:row10:col8', 'Winter_2024_table_2:row10:col9', 'Winter_2024_table_2:row10:col10', 'Winter_2024_table_2:row23:col6', 'Winter_2024_table_2:row23:col7', 'Winter_2024_table_2:row23:col8', 'Winter_2024_table_2:row23:col9', 'Winter_2024_table_2:row23:col10'])
- dropped unlinked row (NIL): 'nCl3' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row11:col6', 'Winter_2024_table_2:row11:col7', 'Winter_2024_table_2:row11:col8', 'Winter_2024_table_2:row11:col9', 'Winter_2024_table_2:row11:col10', 'Winter_2024_table_2:row11:col11', 'Winter_2024_table_2:row24:col6', 'Winter_2024_table_2:row24:col7', 'Winter_2024_table_2:row24:col8', 'Winter_2024_table_2:row24:col9', 'Winter_2024_table_2:row24:col10', 'Winter_2024_table_2:row24:col11'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote'])
- covariate category for V1 from footnote/prose kept as documentation only (['tab1:footnote'])
- covariate category for V2 from footnote/prose kept as documentation only (['tab1:footnote'])
- covariate category for V3 from footnote/prose kept as documentation only (['tab1:footnote'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxytetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab1:row7:col7 = 'Clearance of distribution to V2 (adult)'
- unparsed cell tab1:row8:col7 = 'Clearance of distribution to V3 (adult)'
- unparsed cell tab1:row9:col7 = 'first rate constant of absorption corresponding to a Mean Absorption Time of 4.57 h'
- unparsed cell tab1:row10:col7 = 'second rate of absorption corresponding to a Mean Absorption Time of 22.1 h'
- unparsed cell tab1:row11:col7 = 'Lag-time between Ka1 and Ka2'
- unparsed cell tab1:row15:col7 = 'Categorical covariate on Cld2'
- unparsed cell tab1:row16:col7 = 'Categorical covariate on Cld3'
- unparsed cell tab1:row17:col7 = 'Categorical covariate on V1'
- unparsed cell tab1:row18:col7 = 'Categorical covariate on V2'
- unparsed cell tab1:row19:col7 = 'Categorical covariate on V3'
- companion parameter table 2 transcribed (83 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 68.35 | not captured | not captured | ['tab1:row6:col1', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5', 'tab1:row6:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxytetracycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Winter_2024` / `Winter_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
