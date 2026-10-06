<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;spironolactone&quot;,&quot;href&quot;:&quot;drugs/drug_spironolactone/&quot;},{&quot;label&quot;:&quot;Tatipalli_2021 \u00b7 2_years_male&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spironolactone_Zhou2010_reference&quot;,&quot;label&quot;:&quot;Zhou_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_spironolactone/Spironolactone_Zhou2010_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# spironolactone — `Spironolactone_Tatipalli2021_2_years_male`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has spironolactone, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849)

## Model component
<dbs-pgx drug="spironolactone" model-id="Spironolactone_Tatipalli2021_2_years_male" status="needs_review" stale="false" population="healthy adults" measured-compound="spironolactone" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 165.27 | L/h | 4.5908333333333336e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row0:col4 | — | not captured |
| V2 | `Q63` · V1 | 87.00 | L | 0.08700000000000001 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row1:col4 | — | not captured |
| Q | `Q30` · Q | 23.62 | L/h | 6.561111111111112e-06 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row2:col4 | — | not captured |
| V3 | `Q64` · V2 | 130.76 | L | 0.13076 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row3:col4 | — | not captured |
| ka | `Q49` · kabs | 5.22 | 1/h | 0.00145 | 1/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row4:col4 | — | not captured |
| V4 | `Q63` · V1 | 31.81 | L | 0.03181 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row5:col4 | — | not captured |
| CLM | `Q22` · CL | 4.47 | L/h | 1.2416666666666667e-06 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row6:col4 | — | not captured |
| Q1 | `Q30` · Q | 15.76 | L/h | 4.377777777777778e-06 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row7:col4 | — | not captured |
| V5 | `Q64` · V2 | 75.39 | L | 0.07539 | L | not captured | exact (1.0) | Tatipalli_2021_table_4:row8:col4 | — | not captured |
| ALAG1 | `Q83` · tlag | 0.160 | h | 576.0 | h | not captured | exact (1.0) | Tatipalli_2021_table_4:row9:col4 | — | not captured |
| Fm | `Q45` · fm | 0.70 | not captured | not captured | not captured | not captured | exact (1.0) | Tatipalli_2021_table_4:row10:col4 | — | not captured |
| CLM1 | `Q370` · CLfm | 57.02 | L/h | 1.583888888888889e-05 | L/h | not captured | exact (1.0) | Tatipalli_2021_table_4:row11:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'CL' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour' but does not explicitly state the unit for CL. However, CL is a clear")
- implicit units: 'V2' → L (from the popPK convention: "The table caption defines 'L, liter'. V2 is a volume of distribution parameter, and the value 87.00 is consistent with L")
- implicit units: 'Q' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. Q is an intercompartmental clearance parameter, and the value 23.62 ")
- implicit units: 'V3' → L (from the popPK convention: "The table caption defines 'L, liter'. V3 is a volume of distribution parameter, and the value 130.76 is consistent with ")
- implicit units: 'ka' → 1/h (from the popPK convention: "The table caption defines 'h, hour'. ka is a first-order absorption rate constant, and the value 5.22 is consistent with")
- implicit units: 'V4' → L (from the popPK convention: "The table caption defines 'L, liter'. V4 is a volume of distribution parameter, and the value 31.81 is consistent with L")
- implicit units: 'CLM' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. CLM is a clearance parameter, and the value 4.47 is consistent with ")
- implicit units: 'Q1' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. Q1 is an intercompartmental clearance parameter, and the value 15.76")
- implicit units: 'V5' → L (from the popPK convention: "The table caption defines 'L, liter'. V5 is a volume of distribution parameter, and the value 75.39 is consistent with L")
- implicit units: 'ALAG1' → h (from the popPK convention: "The table caption defines 'h, hour'. ALAG1 is a lag time parameter, and the value 0.160 is consistent with h.")
- implicit units: 'CLM1' → L/h (from the popPK convention: "The table caption defines 'L, liter' and 'h, hour'. CLM1 is a metabolic clearance parameter, and the value 57.02 is cons")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (V2); Q30 (Q); Q64 (V3); Q63 (V4); Q22 (CLM); Q30 (Q1); Q64 (V5)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=spironolactone
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- population split: '2 years—male' subgroup of Tatipalli_2021 (paper reports 9 populations: 12 years—female, 12 years—male, 17 years—female, 17 years—male, 2 years—female, 2 years—male, 6 years—female, 6 years—male, adults)
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 199 linked by role; re-tagged parent→canrenone ×106

**Extraction notes:**
- transposed table Tatipalli_2021_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tatipalli_2021_table_4:row3:col1 = '(h−1)'
- companion parameter table 4 transcribed (108 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.364 (8/22 fields) | 14 |

<details><summary>14 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[alag1]` | 0.160 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[alag1]` | not captured | 0.160 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 165.27 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 165.27 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 5.22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 5.22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 23.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 23.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | 87.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | not captured | 87.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3]` | 130.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3]` | not captured | 130.76 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | spironolactone | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | spironolactone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row0:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row6:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row7:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row11:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row1:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row8:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tatipalli_2021_table_4:row9:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 165.27 | not captured | not captured | ['Tatipalli_2021_table_4:row0:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 165 L/h | not captured | not captured | ['Tatipalli_2021_table_4:row0:col4'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.47 L/h | not captured | not captured | ['Tatipalli_2021_table_4:row6:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 87 L | not captured | not captured | ['Tatipalli_2021_table_4:row1:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 31.8 L | not captured | not captured | ['Tatipalli_2021_table_4:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 131 L | not captured | not captured | ['Tatipalli_2021_table_4:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 75.4 L | not captured | not captured | ['Tatipalli_2021_table_4:row8:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_spironolactone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tatipalli_2021` / `Tatipalli_2021::2_years_male`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 18:46 UTC</sub>
