<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;vedolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_vedolizumab/&quot;},{&quot;label&quot;:&quot;Okamoto_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vedolizumab — `Vedolizumab_Okamoto2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Okamoto H et al., Population pharmacokinetics of vedolizu…, Intestinal research (2021)
  ·  DOI: [10.5217/ir.2019.09167](https://doi.org/10.5217/ir.2019.09167)

## Model component
<dbs-pgx drug="vedolizumab" model-id="Vedolizumab_Okamoto2021_reference" status="rejected" stale="false" population="Asian and non-Asian patients with ulcerative colitis and Crohn’s disease" measured-compound="vedolizumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AVA− CLL (L/day) | `Q22` · CL | 0.165 | L/day | 1.9097222222222222e-09 | [l] / [d] | not captured | llm (0.6) | t2-ir-2019-09167:row1:col1 | — | not captured |
| Vc (L) | `Q63` · V1 | 3.16 | L | 0.00316 | [l] | not captured | exact (1.0) | t2-ir-2019-09167:row3:col1 | — | None (None% RSE) |
| Vp (L) | `Q64` · V2 | 1.84 | L | 0.00184 | [l] | not captured | exact (1.0) | t2-ir-2019-09167:row4:col1 | — | None (None% RSE) |
| Vmax (mg/day) | `Q66` · Vmax | 0.238 | mg/day | not captured | [mg] / [d] | not captured | special_case (0.95) | t2-ir-2019-09167:row5:col1 | — | not captured |
| Q (L/day) | `Q30` · Q | 0.161 | L/day | 1.863425925925926e-09 | [l] / [d] | not captured | exact (1.0) | t2-ir-2019-09167:row6:col1 | — | not captured |
| Km (µg/mL) | `Q1` · Km | 0.851 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | t2-ir-2019-09167:row7:col1 | — | not captured |
| cll_wt | `Q900` · cll_wt | 0.472 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row8:col1 | — | not captured |
| cll_albumin | `Q900` · cll_albumin | -1.19 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row9:col1 | — | not captured |
| cll_race_asian | `Q900` · cll_race_asian | 1.10 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row11:col1 | — | not captured |
| q_wt | `Q900` · q_wt | 0.750 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row16:col1 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 0.466 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row12:col1 | — | not captured |
| theta_v2_wt_power | `Q900` · theta_v2_wt_power | 1.00 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row14:col1 | — | not captured |
| theta_vmax_wt_power | `Q900` · theta_vmax_wt_power | 0.750 | not captured | not captured | not captured | not captured | not captured (not captured) | t2-ir-2019-09167:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CORR CLL–Vc' routed out of structural estimates ('IIV CLL (ω2CLL)')
- table section iiv: 'CORR CLL−Vp' routed out of structural estimates ('IIV Vc (ω2Vc)')
- table section iiv: 'CORR Vc−Vp' routed out of structural estimates ('IIV Vc (ω2Vc)')
- table section iov: 'Resprop (σ2prop)' routed out of structural estimates ('IOV CLL (ω2IOV CLL)')
- dropped duplicate Q22 ('AVA+ CLL (L/day)', value '0.246') — already have one for this compound
- unit_dimension_mismatch: 'Vmax (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate level 'CLL~ WT' → Q900:cll_wt = 0.472 (power on Q22)
- covariate level 'CLL~ albumin' → Q900:cll_albumin = -1.19 (power on Q22)
- dropped unlinked row (NIL): 'CLL~ AVA+' — extend the ontology if this is a real PK parameter (source ['t2-ir-2019-09167:row10:col1'])
- covariate level 'CLL~race: Asian' → Q900:cll_race_asian = 1.10 (power on Q22)
- dropped unlinked row (NIL): 'CLL~ diagnosis: CD' — extend the ontology if this is a real PK parameter (source ['t2-ir-2019-09167:row13:col1'])
- covariate level 'Q~WT' → Q900:q_wt = 0.750 (power on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vedolizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'vedolizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell t2-ir-2019-09167:row1:col2 = '(0.160, 0.170)'
- unparsed cell t2-ir-2019-09167:row2:col2 = '(0.222, 0.273)'
- unparsed cell t2-ir-2019-09167:row3:col2 = '(3.11, 3.22)'
- unparsed cell t2-ir-2019-09167:row4:col2 = '(1.71, 1.99)'
- unparsed cell t2-ir-2019-09167:row5:col2 = '(0.191, 0.296)'
- unparsed cell t2-ir-2019-09167:row6:col2 = '(0.150, 0.173)'
- unparsed cell t2-ir-2019-09167:row7:col2 = '(0.641, 1.150)'
- unparsed cell t2-ir-2019-09167:row8:col2 = '(0.400, 0.533)'
- unparsed cell t2-ir-2019-09167:row9:col2 = '(–1.27, –1.11)'
- unparsed cell t2-ir-2019-09167:row10:col2 = '(0.0404, 0.1020)'
- unparsed cell t2-ir-2019-09167:row11:col2 = '(1.06, 1.14)'
- unparsed cell t2-ir-2019-09167:row12:col2 = '(0.424, 0.509)'
- unparsed cell t2-ir-2019-09167:row13:col2 = '(0.960, 1.020)'
- unparsed cell t2-ir-2019-09167:row18:col2 = '(0.532, 0.627)'
- unparsed cell t2-ir-2019-09167:row20:col2 = '(–0.0565, 0.0951)'
- unparsed cell t2-ir-2019-09167:row21:col2 = '(0.284, 0.455)'
- unparsed cell t2-ir-2019-09167:row27:col2 = '(0.0303, 0.0333)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 24.7 | 24.662 | 0.9985 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t2-ir-2019-09167:row7:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t2-ir-2019-09167:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t2-ir-2019-09167:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['t2-ir-2019-09167:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['t2-ir-2019-09167:row4:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | not captured | not captured | ['t2-ir-2019-09167:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.165 | not captured | not captured | ['t2-ir-2019-09167:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00688 L/h | not captured | not captured | ['t2-ir-2019-09167:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.16 L | not captured | not captured | ['t2-ir-2019-09167:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.84 L | not captured | not captured | ['t2-ir-2019-09167:row4:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vedolizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Okamoto_2021` / `Okamoto_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:05 UTC</sub>
