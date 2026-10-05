<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;repaglinide&quot;,&quot;href&quot;:&quot;drugs/drug_repaglinide/&quot;},{&quot;label&quot;:&quot;Doki_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# repaglinide — `Repaglinide_Doki2018_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.44). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (MW), so that value has no SI equivalent. Extracted — repaglinide: MW 453 g/mol, fu 0.023, Fab 0.98, kabs 1.6 1/h, Vss 0.24 L/kg, Kp 3.3.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has gemfibrozil → gemfibrozil 1-o-β glucuronide (metabolism), the second reading gemfibrozil → gem-glu (metabolism); it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Doki K et al., Implications of intercorrelation betwee…, British journal of clinical… (2018)
  ·  DOI: [10.1111/bcp.13533](https://doi.org/10.1111/bcp.13533)

## Model component
<dbs-pgx drug="repaglinide" model-id="Repaglinide_Doki2018_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="repaglinide" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 6 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 452.6 | g/mol | not captured | [g] / [[m] · [ol]] | not captured | exact (1.0) | tab_0:row1:col1, tab_0:row1:col2 | — | not captured |
| Fraction unbound in plasma | `Q46` · fu | 0.023 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | tab_0:row6:col1, tab_0:row6:col2 | — | not captured |
| Fraction absorbed | `Q40` · Fab | 0.98 | not captured | not captured | not captured | not captured | exact (1.0) | tab_0:row9:col1, tab_0:row9:col2 | — | not captured |
| Absorption rate constant | `Q49` · kabs | 1.6 | 1/h | 0.00044444444444444447 | 1/h | not captured | exact (1.0) | tab_0:row10:col1, tab_0:row10:col2 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | 0.24 | L/kg | 0.0168 | [l] / [kg] | not captured | exact (1.0) | tab_0:row20:col1, tab_0:row20:col2 | — | not captured |
| Kp scalar | `Q410` · Kp | 3.3 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | tab_0:row21:col1, tab_0:row21:col2 | — | not captured |
| cyp3a5_em_frequency | `Q900` · cyp3a5_em_frequency | 0.17 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row2:col1, Doki_2018_table_2:row2:col2 | — | not captured |
| cyp2c8_cv | `Q900` · cyp2c8_cv | 81 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row6:col1, Doki_2018_table_2:row6:col2 | — | not captured |
| cyp3a4_cv | `Q900` · cyp3a4_cv | 60 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row8:col1, Doki_2018_table_2:row8:col2, Doki_2018_table_2:row18:col1, Doki_2018_table_2:row18:col2 | — | not captured |
| cyp3a5_cv | `Q900` · cyp3a5_cv | 60 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row20:col1, Doki_2018_table_2:row20:col2 | — | not captured |
| theta_q1_cyp2c8 | `Q900` · theta_q1_cyp2c8 | 2.3 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row23:col1 | — | not captured |
| theta_q66_cyp2c8 | `Q900` · theta_q66_cyp2c8 | 300.8 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row25:col1 | — | not captured |
| theta_q1_cyp3a4 | `Q900` · theta_q1_cyp3a4 | 13.2 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row27:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'cyp3a4-cyp2c8 correlation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col1', 'tab_0:row2:col2'])
- dropped unlinked row (NIL): 'Blood/plasma ratio' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1', 'tab_0:row5:col2'])
- dropped duplicate Q46 ('Fraction of drug unbound in', value '1') — already have one for this compound
- dropped unlinked row (NIL): 'Caco-2 permeability' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col1', 'tab_0:row14:col2'])
- dropped unlinked row (NIL): 'Predicted Peff,man' — extend the ontology if this is a real PK parameter (source ['tab_0:row16:col1', 'tab_0:row16:col2'])
- covariate level 'CYP3A5 EM frequency' → Q900:cyp3a5_em_frequency = 0.17 (linear_fractional on the model)
- dropped unlinked row (NIL): 'CYP2C8 mean (pmol/mg)' — extend the ontology if this is a real PK parameter (source ['Doki_2018_table_2:row5:col1', 'Doki_2018_table_2:row5:col2'])
- covariate level 'CYP2C8 CV (%)' → Q900:cyp2c8_cv = 81 (linear_fractional on the model)
- dropped unlinked row (NIL): 'CYP3A4 mean (pmol/mg)' — extend the ontology if this is a real PK parameter (source ['Doki_2018_table_2:row7:col1', 'Doki_2018_table_2:row7:col2', 'Doki_2018_table_2:row17:col1', 'Doki_2018_table_2:row17:col2'])
- covariate level 'CYP3A4 CV (%)' → Q900:cyp3a4_cv = 60 (linear_fractional on the model)
- dropped PD-category row 'Baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Doki_2018_table_2:row12:col1', 'Doki_2018_table_2:row12:col2'])
- dropped PD-category row 'Slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Doki_2018_table_2:row13:col1', 'Doki_2018_table_2:row13:col2'])
- routed 'CV (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'CYP3A5 mean (pmol/mg)' — extend the ontology if this is a real PK parameter (source ['Doki_2018_table_2:row19:col1', 'Doki_2018_table_2:row19:col2'])
- covariate level 'CYP3A5 CV (%)' → Q900:cyp3a5_cv = 60 (linear_fractional on the model)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (kabs). In population pharmacokinetics, first-order rate constants are conv')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=repaglinide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 24/24 row label(s) assigned, 2 linked by role; re-tagged repaglinide→parent ×25
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Doki_2018_table_2:row2:col3 = 'CYP2C8 EM frequency'
- unparsed cell Doki_2018_table_2:row12:col3 = 'Substituted by CYP3A4-'
- unparsed cell Doki_2018_table_2:row13:col3 = 'CYP2C8 correlation'
- unparsed cell Doki_2018_table_2:row19:col3 = 'Substituted by CYP2C8'
- unparsed cell Doki_2018_table_2:row20:col3 = 'Substituted by CYP2C8'
- companion parameter table 2 transcribed (24 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.44 (11/25 fields) | 14 |

<details><summary>14 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['gemfibrozil', 'gemfibrozil 1-o-β glucuronide', 'metabolism']] | [['gemfibrozil', 'gem-glu', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[blood/plasma ratio]` | not captured | 0.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cyp2c8_cv]` | 81 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cyp3a4_cv]` | not captured | 60 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cyp3a4_cv]` | 60 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cyp3a5_cv]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cyp3a5_cv]` | 60 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cyp3a5_em_frequency]` | not captured | 1.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cyp3a5_em_frequency]` | 0.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kp scalar]` | 3.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q312_cyp2c8]` | not captured | 81 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q332_cyp2c8]` | not captured | 24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q332_cyp3a4]` | not captured | 66.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q38_cyp3a5]` | not captured | 0 | only_one_extracted |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q374 | pass | [mass] / [substance] | not captured | not captured | not captured | ['tab_0:row1:col1', 'tab_0:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row10:col1', 'tab_0:row10:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row20:col1', 'tab_0:row20:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q65 | pass | volume within physiological range | 16.8 L | not captured | not captured | ['tab_0:row20:col1', 'tab_0:row20:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_repaglinide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Doki_2018` / `Doki_2018::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 11:44 UTC</sub>
