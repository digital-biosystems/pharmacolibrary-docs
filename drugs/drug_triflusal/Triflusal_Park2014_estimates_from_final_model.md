<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;triflusal&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/&quot;},{&quot;label&quot;:&quot;Park_2014 \u00b7 estimates_from_final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triflusal_Park2014_estimates_from_final_model&quot;,&quot;label&quot;:&quot;Park_2014_estimates_from_final_model&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_estimates_from_final_model.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Triflusal_Park2014_description_units&quot;,&quot;label&quot;:&quot;Park_2014_description_units&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_description_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Triflusal_Park2014_shrinkage&quot;,&quot;label&quot;:&quot;Park_2014_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triflusal — `Triflusal_Park2014_estimates_from_final_model`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes; the engineer's deviations are not documented and quantified. Evidence: T3_topology_template — expected parent_metabolite → PK_Parent_Metabolite* — got PK_1C_enteral; T6_deviations — got invented_absorption: not acceptable.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

> **Dose compound ≠ measured compound:** dosed `triflusal`, measured `HTB`.

## Citation
Park SM; Lee J; Seong SJ; Park JG; Gwon MR; Lim MS; et al. et al. (2014). BMC pharmacology & toxicology 15
  ·  DOI: [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75)

## Model component
<dbs-pgx drug="triflusal" model-id="Triflusal_Park2014_estimates_from_final_model" status="model_quarantined" stale="false" population="healthy Korean male volunteers" measured-compound="HTB" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F — mechanistic, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ 2 | `Q99` · Q2 | 8.300 | weight/71.65 | not captured | [weight] / [71.65] | not captured | llm (0.6) | Tab2:row8:col2, Tab2:row8:col3 | — | not captured |
| k f = θ 3 | `Q305` · kfm | 0.341 | weight/71.65 | not captured | [weight] / [71.65] | not captured | llm (0.6) | Tab2:row9:col2, Tab2:row9:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θ 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2', 'Tab2:row5:col3'])
- dropped unlinked row (NIL): 'θ 4' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2', 'Tab2:row6:col3'])
- unit_dimension_unknown: 'weight/71.65' (Q2)
- unit_dimension_unknown: 'weight/71.65' (kfm)
- dropped unlinked row (NIL): 'θ 5' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col2', 'Tab2:row11:col3'])
- dropped unlinked row (NIL): 'θ 6' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col2', 'Tab2:row12:col3'])
- routed 'ω 1 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω 3 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω 4 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω 5 2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=HTB
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q27 (CL/F): CL/F = θ 1 * (weight/71.65)^θ4
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'estimates from final model' subgroup of Park_2014 (paper reports 3 populations: description (units), estimates from final model, shrinkage (%))

**Extraction notes:**
- unparsed cell Tab2:row5:col4 = '0.1998 (0.1995 – 0.2002)'
- unparsed cell Tab2:row6:col4 = '0.840 (0.830 – 0.850)'
- unparsed cell Tab2:row8:col4 = '8.281 (8.267 – 8.295)'
- unparsed cell Tab2:row9:col1 = 'TV of k f (h-1)'
- unparsed cell Tab2:row9:col4 = '0.345 (0.341 – 0.348)'
- unparsed cell Tab2:row11:col4 = '85.19 (84.98 – 85.40)'
- unparsed cell Tab2:row12:col4 = '20.70 (20.32 – 21.08)'
- unparsed cell Tab2:row15:col4 = '14.4 (14.3 – 14.5)'
- unparsed cell Tab2:row16:col4 = '8.6 (8.4 – 8.8)'
- unparsed cell Tab2:row17:col4 = '73.5 (72.8 – 74.1)'
- unparsed cell Tab2:row19:col1 = 'BSV for EC 50'
- unparsed cell Tab2:row19:col4 = '21.4 (21.2 – 21.5)'
- unparsed cell Tab2:row22:col4 = '0.0977 (0.0973 – 0.0981)'
- LLM selected parameter table(s) 2
- captured model equation CL/F = θ 1 * (weight/71.65)^θ4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_Parent_Metabolite* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_triflusal/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Park_2014` / `Park_2014::estimates_from_final_model`)
- model: `../../../knowledgebase/drugs/drug_triflusal/models/modelica/_needs_review/Triflusal_Park2014_estimates_from_final_model.mo`
- deviation: `../../../knowledgebase/drugs/drug_triflusal/models/modelica/_needs_review/Triflusal_Park2014_estimates_from_final_model.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-06 01:13 UTC</sub>
