<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Tobin_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Li2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pgx_Tobin_2026_CYP2D6_Q27&quot;,&quot;label&quot;:&quot;Tobin_2026 \u00b7 CYP2D6&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/pgx_Tobin_2026_CYP2D6_Q27.md&quot;,&quot;status&quot;:&quot;quantitative&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Tobin2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 2: this record has none, the second reading 15.52; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:23:27.128767+00:00) predates the upstream re-run (2026-10-07 00:13:19.844860+00:00). Current validate status: `extracted`.

## Citation
Tobin KV et al., Understanding Atomoxetine Exposure Vari…, Journal of clinical pharmac… (2026)
  ·  DOI: [10.1002/jcph.70168](https://doi.org/10.1002/jcph.70168)

## Model component
<dbs-pgx drug="atomoxetine" model-id="Atomoxetine_Tobin2026_reference" status="extracted" stale="true" population="children and adolescents with ADHD" measured-compound="atomoxetine" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 27.35 | 1/h | 0.007597222222222222 | 1/h | 10.1 | exact (1.0) | jcph70168-tbl-0003:row2:col2, jcph70168-tbl-0003:row2:col4 | — | 182.7 (None% RSE) |
| Vc/F | `Q76` · V/F | 175.94 | L | 0.17594 | L | 9.46 | exact (1.0) | jcph70168-tbl-0003:row3:col2, jcph70168-tbl-0003:row3:col4 | — | 64.52 (None% RSE) |
| CL/F | `Q27` · CL/F | 39.03 | L/h | 1.0841666666666666e-05 | L/h | 8.14 | exact (1.0) | jcph70168-tbl-0003:row4:col2, jcph70168-tbl-0003:row4:col4 | — | 75.48 (None% RSE) |
| ecyp2d6_pm | `Q900` · ecyp2d6_pm | -0.81 | not captured | not captured | not captured | 1.95 | not captured (not captured) | jcph70168-tbl-0003:row5:col2, jcph70168-tbl-0003:row5:col4 | — | not captured |
| theta_q87_pm | `Q900` · theta_q87_pm | 3.02 | not captured | not captured | not captured | 11.67 | not captured (not captured) | jcph70168-tbl-0003:row6:col2, jcph70168-tbl-0003:row6:col4 | — | not captured |
| theta_q87_im | `Q900` · theta_q87_im | 1.33 | not captured | not captured | not captured | 20.97 | not captured (not captured) | jcph70168-tbl-0003:row7:col2, jcph70168-tbl-0003:row7:col4 | — | not captured |
| theta_q87_pm | `Q900` · theta_q87_pm | 2.32 | not captured | not captured | not captured | 18.27 | not captured (not captured) | jcph70168-tbl-0003:row8:col2, jcph70168-tbl-0003:row8:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Ω2 dur' routed out of structural estimates ('Between‐Subject Variability (BSV)')
- table section iiv: 'Ω2 ka' routed out of structural estimates ('Between‐Subject Variability (BSV)')
- table section iiv: 'Ω2 Vc/F' routed out of structural estimates ('Between‐Subject Variability (BSV)')
- table section iiv: 'Ω2 CL/F' routed out of structural estimates ('Between‐Subject Variability (BSV)')
- table section residual_error: 'σ2 add' routed out of structural estimates ('Residual Unexplained Variability (RUV)')
- table section residual_error: 'σ2 prop' routed out of structural estimates ('Residual Unexplained Variability (RUV)')
- table section residual_error: 'Covariate Equations Vc/Fi=Vc/Ftv·(wti70)1.0·(1FrelCYP2D6)·(1FrelCYP2C19)·eηVc/F,i CL/Fi=CL/Ftv·(wti10)0.75·(1FrelCYP2D6)·(1FrelCYP2C19)·(1+ECYP2D6,PM)·eηCL/F,i' routed out of structural estimates ('Residual Unexplained Variability (RUV)')
- dropped unlinked row (NIL): 'Dur' — extend the ontology if this is a real PK parameter (source ['jcph70168-tbl-0003:row1:col2', 'jcph70168-tbl-0003:row1:col4'])
- covariate level 'ECYP2D6,PM' → Q900:ecyp2d6_pm = -0.81 (linear_fractional on Q27)
- dropped value-less row: 'Table 3. Covariate Model Parameter and Uncertainty Estimates. CI: Confidence Interval; RSE: Relative Standard Error. Covariates were Applied on Apparent Central Volume and Apparent Central Clearance using the Equations'
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka' → 1/h (from the paper text: 'The first-order rate constant of atomoxetine entering the systemic circulation was estimated to be 27/h.')
- implicit units: 'Vc/F' → L (from the paper text: 'The estimated typical values for Vc/F (98.96 L) and CL/F (23.45 L/h) are both similar to the previously reported distrib')
- implicit units: 'CL/F' → L/h (from the paper text: 'The estimated typical values for Vc/F (98.96 L) and CL/F (23.45 L/h) are both similar to the previously reported distrib')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atomoxetine
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph70168-tbl-0003:row1:col3 = '[0.64,0.88]'
- unparsed cell jcph70168-tbl-0003:row2:col1 = 'First−order Absorption Rate Constant (hr−1)'
- unparsed cell jcph70168-tbl-0003:row2:col3 = '[22.44,32.77]'
- unparsed cell jcph70168-tbl-0003:row3:col3 = '[148.48,217.50]'
- unparsed cell jcph70168-tbl-0003:row4:col3 = '[33.90,46.33]'
- unparsed cell jcph70168-tbl-0003:row5:col1 = 'Effect of CYP2D6 PM on Clearance'
- unparsed cell jcph70168-tbl-0003:row5:col3 = '[−0.84,−0.78]'
- unparsed cell jcph70168-tbl-0003:row6:col1 = 'Relative Bioavailability of CYP2D6 PMs'
- unparsed cell jcph70168-tbl-0003:row6:col3 = '[2.38,3.77]'
- unparsed cell jcph70168-tbl-0003:row7:col1 = 'Relative Bioavailability of CYP2D6 IMs'
- unparsed cell jcph70168-tbl-0003:row7:col3 = '[0.95,2.01]'
- unparsed cell jcph70168-tbl-0003:row8:col1 = 'Relative Bioavailability of CYP2C19 PMs'
- unparsed cell jcph70168-tbl-0003:row8:col3 = '[1.65,3.24]'
- unparsed cell jcph70168-tbl-0003:row10:col3 = '[100.64,150.30]'
- unparsed cell jcph70168-tbl-0003:row11:col3 = '[146.09,244.82]'
- unparsed cell jcph70168-tbl-0003:row12:col3 = '[45.08,76.48]'
- unparsed cell jcph70168-tbl-0003:row13:col3 = '[45.82,93.55]'
- unparsed cell jcph70168-tbl-0003:row15:col3 = '[0.38,1.21]'
- unparsed cell jcph70168-tbl-0003:row16:col3 = '[19.36,23.63]'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.8 (12/15 fields) | 3 |

<details><summary>3 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[2]` | not captured | 15.52 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f].value` | not captured | 39.03 | mismatch |
| `gpt-oss:120b` | `parameters[vc/f].value` | not captured | 175.94 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70168-tbl-0003:row4:col2', 'jcph70168-tbl-0003:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph70168-tbl-0003:row2:col2', 'jcph70168-tbl-0003:row2:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70168-tbl-0003:row3:col2', 'jcph70168-tbl-0003:row3:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 39 L/h | not captured | not captured | ['jcph70168-tbl-0003:row4:col2', 'jcph70168-tbl-0003:row4:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 176 L | not captured | not captured | ['jcph70168-tbl-0003:row3:col2', 'jcph70168-tbl-0003:row3:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atomoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tobin_2026` / `Tobin_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_modelica.zip" download>Atomoxetine_Tobin2026_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_fmi.zip" download>Atomoxetine_Tobin2026_reference_fmi.zip</a> <span class="pk-size">(4.6 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_matlab.zip" download>Atomoxetine_Tobin2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_matlab_simbio.zip" download>Atomoxetine_Tobin2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_sbml.zip" download>Atomoxetine_Tobin2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_cellml.zip" download>Atomoxetine_Tobin2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference.svg" alt="Atomoxetine_Tobin2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 35 mg, single dose, first-order absorption (ka 27.4 /h, F 1). Dose in the paper: 35 mg.

<dbs-fmusim paramsurl="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference/Atomoxetine_Tobin2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Atomoxetine_Tobin2026_reference_params.json` · controls `Atomoxetine_Tobin2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:13 UTC</sub>
