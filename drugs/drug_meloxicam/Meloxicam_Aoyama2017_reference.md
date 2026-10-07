<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;meloxicam&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/&quot;},{&quot;label&quot;:&quot;Aoyama_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meloxicam_Aoyama2017_reference&quot;,&quot;label&quot;:&quot;Aoyama_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Meloxicam_Lehr2010_reference&quot;,&quot;label&quot;:&quot;Lehr_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meloxicam/Meloxicam_Lehr2010_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# meloxicam — `Meloxicam_Aoyama2017_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.929). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The meloxicam model record was rejected because the apparent-parameter coherence check found a double correction: the relative bioavailability Frel of 2.00 (labelled 'x 2 F') and the CL/F parameter were both applied, correcting clearance for bioavailability twice.**

The record contains meloxicam parameters CL = 0.390 L/h, V1 = 7.80 L, Q = 1.24 L/h, V2 = 2.72 L, kabs = 2.05 /h, and a relative bioavailability Frel = 2.00 labelled 'x 2 F', alongside a CL/F parameter (total clearance after oral administration adjusted for bioavailability). Applying the bioavailability factor both through Frel and through the CL/F parameter constitutes a double correction, violating apparent-parameter coherence, so the record was refused. The two readers disagreed only on how the 'x 2 F' bioavailability parameter should be classified, not on the rejection cause. Extracted — meloxicam: CL 0.39 L/h, V1 7.8 L, V 1.06, Q 1.24 L/h, V2 2.72 L, kabs 2.05 /h, Frel 2.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[x 2 f].parameter_id`: this record has Q87, the second reading Q80. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:40.871184+00:00) predates the upstream re-run (2026-10-07 14:49:42.817930+00:00). Current validate status: `extracted`.

## Citation
Aoyama T et al., Pharmacokinetics and Pharmacodynamics o…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12259](https://doi.org/10.1002/psp4.12259)

## Model component
<dbs-pgx drug="meloxicam" model-id="Meloxicam_Aoyama2017_reference" status="extracted" stale="true" population="healthy males" measured-compound="meloxicam" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.391 | L/h | 1.0861111111111112e-07 | [l] / [h] | not captured | exact (1.0) | psp412259-tbl-0002:row2:col1, psp412259-tbl-0002:row2:col3 | — | not captured |
| cyp2c9_2_on_cl | `Q900` · cyp2c9_2_on_cl | -0.147 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412259-tbl-0002:row3:col1, psp412259-tbl-0002:row3:col3 | — | not captured |
| Vc (L) | `Q63` · V1 | 7.79 | L | 0.00779 | [l] | not captured | exact (1.0) | psp412259-tbl-0002:row5:col1, psp412259-tbl-0002:row5:col3 | — | not captured |
| Q (L/h) | `Q30` · Q | 1.24 | L/h | 3.4444444444444444e-07 | [l] / [h] | not captured | exact (1.0) | psp412259-tbl-0002:row7:col1, psp412259-tbl-0002:row7:col3 | — | not captured |
| Vp (L) | `Q64` · V2 | 2.73 | L | 0.0027300000000000002 | [l] | not captured | exact (1.0) | psp412259-tbl-0002:row8:col1, psp412259-tbl-0002:row8:col3 | — | not captured |
| Ka (/h) | `Q49` · kabs | 2.00 | /h | 0.0005555555555555556 | [1] / [h] | not captured | exact (1.0) | psp412259-tbl-0002:row9:col1, psp412259-tbl-0002:row9:col3 | — | 0.243 (None% RSE) |
| F | `Q40` · Fab | 0.425 | not captured | not captured | not captured | not captured | exact (1.0) | psp412259-tbl-0002:row11:col1, psp412259-tbl-0002:row11:col3 | — | not captured |
| theta_cl_cyp2c9 | `Q900` · theta_cl_cyp2c9 | -0.400 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412259-tbl-0002:row4:col1, psp412259-tbl-0002:row4:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- covariate level 'CYP2C9 *2 on CL' → Q900:cyp2c9_2_on_cl = -0.147 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'LBM on Vd' — extend the ontology if this is a real PK parameter (source ['psp412259-tbl-0002:row6:col1', 'psp412259-tbl-0002:row6:col3'])
- dropped unlinked row (NIL): 'DT (h)' — extend the ontology if this is a real PK parameter (source ['psp412259-tbl-0002:row10:col1', 'psp412259-tbl-0002:row10:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=meloxicam
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell psp412259-tbl-0002:row2:col2 = '(0.375 to 0.407)'
- unparsed cell psp412259-tbl-0002:row2:col4 = '(0.375 to 0.407)'
- unparsed cell psp412259-tbl-0002:row3:col2 = '(−0.234 to −0.0604)'
- unparsed cell psp412259-tbl-0002:row3:col4 = '(−0.215 to −0.0410)'
- unparsed cell psp412259-tbl-0002:row4:col2 = '(−0.488 to −0.312)'
- unparsed cell psp412259-tbl-0002:row4:col4 = '(−0.483 to −0.301)'
- unparsed cell psp412259-tbl-0002:row5:col2 = '(7.24 to 8.34)'
- unparsed cell psp412259-tbl-0002:row5:col4 = '(7.01 to 8.35)'
- unparsed cell psp412259-tbl-0002:row6:col2 = '(0.695 to 1.40)'
- unparsed cell psp412259-tbl-0002:row6:col4 = '(0.746 to 1.41)'
- unparsed cell psp412259-tbl-0002:row7:col2 = '(0.948 to 1.53)'
- unparsed cell psp412259-tbl-0002:row7:col4 = '(1.00 to 1.68)'
- unparsed cell psp412259-tbl-0002:row8:col2 = '(2.20 to 3.26)'
- unparsed cell psp412259-tbl-0002:row8:col4 = '(2.22 to 3.49)'
- unparsed cell psp412259-tbl-0002:row9:col2 = '(1.38 to 2.62)'
- unparsed cell psp412259-tbl-0002:row9:col4 = '(1.44 to 2.84)'
- unparsed cell psp412259-tbl-0002:row10:col2 = '(1.86 to 1.96)'
- unparsed cell psp412259-tbl-0002:row10:col4 = '(1.83 to 1.94)'
- unparsed cell psp412259-tbl-0002:row11:col2 = '(0.367 to 0.483)'
- unparsed cell psp412259-tbl-0002:row11:col4 = '(0.364 to 0.481)'
- unparsed cell psp412259-tbl-0002:row12:col2 = '(18.4 to 23.9)'
- unparsed cell psp412259-tbl-0002:row12:col4 = '(18.2 to 23.5)'
- unparsed cell psp412259-tbl-0002:row13:col2 = '(13.4 to 20.3)'
- unparsed cell psp412259-tbl-0002:row13:col4 = '(14.0 to 20.0)'
- unparsed cell psp412259-tbl-0002:row14:col2 = '(68.1 to 201)'
- unparsed cell psp412259-tbl-0002:row14:col4 = '(81.5 to 193)'
- unparsed cell psp412259-tbl-0002:row15:col2 = '(1.46 to 2.60)'
- unparsed cell psp412259-tbl-0002:row15:col4 = '(1.45 to 2.62)'
- unparsed cell psp412259-tbl-0002:row16:col2 = '(0.0269 to 0.459)'
- unparsed cell psp412259-tbl-0002:row16:col4 = '(0.0421 to 0.482)'
- unparsed cell psp412259-tbl-0002:row17:col2 = '(11.3 to 13.2)'
- unparsed cell psp412259-tbl-0002:row17:col4 = '(11.4 to 13.2)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.929 (13/14 fields) | 1 |

<details><summary>1 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[x 2 f].parameter_id` | Q87 | Q80 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412259-tbl-0002:row2:col1', 'psp412259-tbl-0002:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412259-tbl-0002:row7:col1', 'psp412259-tbl-0002:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412259-tbl-0002:row9:col1', 'psp412259-tbl-0002:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412259-tbl-0002:row5:col1', 'psp412259-tbl-0002:row5:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412259-tbl-0002:row8:col1', 'psp412259-tbl-0002:row8:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.391 | not captured | not captured | ['psp412259-tbl-0002:row2:col1', 'psp412259-tbl-0002:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.391 L/h | not captured | not captured | ['psp412259-tbl-0002:row2:col1', 'psp412259-tbl-0002:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.79 L | not captured | not captured | ['psp412259-tbl-0002:row5:col1', 'psp412259-tbl-0002:row5:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.73 L | not captured | not captured | ['psp412259-tbl-0002:row8:col1', 'psp412259-tbl-0002:row8:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_meloxicam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Aoyama_2017` / `Aoyama_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_modelica.zip" download>Meloxicam_Aoyama2017_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_fmi.zip" download>Meloxicam_Aoyama2017_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_matlab.zip" download>Meloxicam_Aoyama2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_matlab_simbio.zip" download>Meloxicam_Aoyama2017_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_sbml.zip" download>Meloxicam_Aoyama2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_cellml.zip" download>Meloxicam_Aoyama2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference.svg" alt="Meloxicam_Aoyama2017_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 7.5 mg, single dose, first-order absorption (ka 2 /h, F 0.425). Dose in the paper: 7.5 mg.

<dbs-fmusim paramsurl="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_meloxicam/Meloxicam_Aoyama2017_reference/Meloxicam_Aoyama2017_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Meloxicam_Aoyama2017_reference_params.json` · controls `Meloxicam_Aoyama2017_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:49 UTC</sub>
