<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;topotecan&quot;,&quot;href&quot;:&quot;drugs/drug_topotecan/&quot;},{&quot;label&quot;:&quot;L\u00e9ger_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topotecan_Lger2004_reference&quot;,&quot;label&quot;:&quot;L\u00e9ger_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_topotecan/Topotecan_Lger2004_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# topotecan — `Topotecan_Lger2004_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">built, not shipped</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Léger F; Loos WJ; Fourcade J; Bugat R; Goffinet M; Mathijssen RH; et al. et al. (2004). British journal of cancer 90
  ·  DOI: [10.1038/sj.bjc.6601469](https://doi.org/10.1038/sj.bjc.6601469)

## Model component
<dbs-pgx drug="topotecan" model-id="Topotecan_Lger2004_reference" status="model_quarantined" stale="false" population="cancer patients" measured-compound="topotecan" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL=θ1 | `Q22` · CL | +62 | 1−θ3 × PS | not captured | [1-θ3] · [ps] | 39 | llm_confirmed (0.6) | tbl3:row18:col2, tbl3:row18:col4 | — | not captured |
| V1=θ4 | `Q61` · V | +27 | 1−θ3 × PS | not captured | [1-θ3] · [ps] | 33 | llm_confirmed (0.6) | tbl3:row21:col2, tbl3:row21:col4 | — | not captured |
| theta_cl_crcl_cl_1_2 | `Q900` · theta_cl_crcl_cl_1_2 | +20 | not captured | not captured | not captured | 20 | not captured (not captured) | tbl3:row19:col2, tbl3:row19:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Bioavailability: F(%)=θ7 | Q40 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- column 'δobjd' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'CL(l h−1)=(θ1+θ2 × CrCl) × (1−θ3 × PS)' (captured trailing unit '1−θ3 × PS' for child rows)
- dropped value-less row: 'Interday variability of CL'
- dropped value-less row: 'Central volume: V1 (l)=θ4 × body weight'
- dropped value-less row: 'Interday variability of V1'
- dropped value-less row: 'Peripheral volume: V2 (l)=θ5'
- dropped value-less row: 'Intercompartmental clearance: Q(l h−1)=θ6'
- dropped value-less row: 'Interday variability of F'
- dropped value-less row: 'Constant rate of absorption: Ka(h−1)=θ9'
- dropped value-less row: 'Lag time (h)=θ10'
- unit '1−θ3 × PS' inherited from a section-header row for CL (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: '1−θ3 × PS' (CL)
- dropped duplicate Q22 ('CL=θ1 × (1−θ3 × PS)', value '+47') — already have one for this compound
- unit '1−θ3 × PS' inherited from a section-header row for V1 (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: '1−θ3 × PS' (V1)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=topotecan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1=θ4' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl3:row2:col1 = 'θ1=12.8 (4.8); θ2=2.1 (1.0); θ3=0.12 (0.09)'
- unparsed cell tbl3:row5:col1 = 'θ4=0.58 (0.13)'
- unparsed cell tbl3:row8:col1 = 'θ5=45.5 (7.0)'
- unparsed cell tbl3:row9:col1 = 'θ6=49.2 (16.9)'
- unparsed cell tbl3:row10:col1 = 'θ7=32.4 (3.9)'
- unparsed cell tbl3:row13:col1 = 'θ9=1.7 (0.6)'
- unparsed cell tbl3:row14:col1 = 'θ10=0.17 (0.03)'
- unparsed cell tbl3:row18:col1 = 'θ1=20.1 (2.3)'
- unparsed cell tbl3:row18:col3 = '&lt;0.001'
- unparsed cell tbl3:row19:col1 = 'θ1=11.8 (4.5); θ2=1.90 (1.16)'
- unparsed cell tbl3:row19:col3 = '&lt;0.001'
- unparsed cell tbl3:row20:col1 = 'θ1=21.8 (3.1); θ2=0.11 (0.10)'
- unparsed cell tbl3:row20:col3 = '&lt;0.001'
- unparsed cell tbl3:row21:col1 = 'θ4=35.2 (10.1)'
- unparsed cell tbl3:row21:col3 = '&lt;0.001'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 62.0 | not captured | not captured | ['tbl3:row18:col2', 'tbl3:row18:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_topotecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Léger_2004` / `Léger_2004::reference`)
- model: `../../../knowledgebase/drugs/drug_topotecan/models/modelica/_needs_review/Topotecan_Lger2004_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_topotecan/models/modelica/_needs_review/Topotecan_Lger2004_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 20:03 UTC</sub>
