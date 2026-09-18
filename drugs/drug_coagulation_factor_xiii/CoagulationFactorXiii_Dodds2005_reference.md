<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor XIII&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_xiii/&quot;},{&quot;label&quot;:&quot;Dodds_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CoagulationFactorXiii_Dodds2005_reference&quot;,&quot;label&quot;:&quot;Dodds_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_xiii/CoagulationFactorXiii_Dodds2005_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# coagulation factor XIII — `CoagulationFactorXiii_Dodds2005_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes. Evidence: T3_param_coverage — expected 3 scholar param(s) emitted or defaulted — got 1 covered

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Open the emitted .mo and compare its base class and parameters with the record.
4. Check the .deviation.json beside it for what the engineer defaulted or assumed.
5. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `recombinant Factor XIII dimer`, measured `Factor XIII dimer`.

## Citation
Dodds MG; Visich JE; Vicini P et al. (2005). The AAPS journal 7
  ·  DOI: [10.1208/aapsj070370](https://doi.org/10.1208/aapsj070370)

## Model component
<dbs-pgx drug="coagulation factor XIII" model-id="CoagulationFactorXiii_Dodds2005_reference" status="model_quarantined" stale="false" population="cynomolgus monkeys" measured-compound="Factor XIII dimer" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| VtA 2 | `Q63` · V1 | 0.0407 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row4:col1 | — | not captured |
| keA 2 | `Q47` · kel | 0.208 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row7:col1 | — | not captured |
| Ka | `Q49` · kabs | 6.59 | not captured | not captured | not captured | not captured | exact (1.0) | tab_0:row10:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'InfB' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col1'])
- dropped unlinked row (NIL): 'InfA 2' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1'])
- dropped unlinked row (NIL): 'VA 2 B 2' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1'])
- dropped unlinked row (NIL): 'VB' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1'])
- dropped duplicate Q47 ('keA 2 B 2', value '0.0102') — already have one for this compound
- dropped duplicate Q47 ('keB', value '0.176') — already have one for this compound
- routed 'Var[keA 2 ]' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Var[keA 2 B 2 ]' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col1'])
- routed 'Var[keB]' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Var[total A 2 assay]' — extend the ontology if this is a real PK parameter (source ['tab_0:row16:col1'])
- dropped unlinked row (NIL): 'Var[A 2 B 2 assay]' — extend the ontology if this is a real PK parameter (source ['tab_0:row17:col1'])
- dropped unlinked row (NIL): 'Var[free B assay]' — extend the ontology if this is a real PK parameter (source ['tab_0:row18:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (VtA 2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Factor XIII dimer
- topology: 2 first-order transfer(s) across 4 compounds → general_linear
- review gap-fill skipped: this record measures 'Factor XIII dimer', not coagulation_factor_xiii — the review values are the parent's

**Extraction notes:**
- unparsed cell tab_0:row2:col2 = '8.76%'
- unparsed cell tab_0:row2:col3 = 'mg kg -1 hr -1'
- unparsed cell tab_0:row3:col2 = '17.00%'
- unparsed cell tab_0:row3:col3 = 'mg kg -1 hr -1'
- unparsed cell tab_0:row4:col2 = '3.93%'
- unparsed cell tab_0:row4:col3 = 'L kg -1'
- unparsed cell tab_0:row5:col2 = '3.62%'
- unparsed cell tab_0:row5:col3 = 'L kg -1'
- unparsed cell tab_0:row6:col2 = '12.30%'
- unparsed cell tab_0:row6:col3 = 'L kg -1'
- unparsed cell tab_0:row7:col2 = '9.09%'
- unparsed cell tab_0:row7:col3 = 'hr -1'
- unparsed cell tab_0:row8:col2 = '10.50%'
- unparsed cell tab_0:row8:col3 = 'hr -1'
- unparsed cell tab_0:row9:col2 = '15.90%'
- unparsed cell tab_0:row9:col3 = 'hr -1'
- unparsed cell tab_0:row10:col2 = '19.70%'
- unparsed cell tab_0:row10:col3 = 'mg -1 kg hr -1'
- unparsed cell tab_0:row12:col2 = '137%'
- unparsed cell tab_0:row12:col3 = '% 2'
- unparsed cell tab_0:row12:col4 = '25.10%'
- unparsed cell tab_0:row13:col2 = '38.10%'
- unparsed cell tab_0:row13:col3 = '% 2'
- unparsed cell tab_0:row13:col4 = '16.40%'
- unparsed cell tab_0:row14:col2 = '44.50%'
- unparsed cell tab_0:row14:col3 = '% 2'
- unparsed cell tab_0:row14:col4 = '38.90%'
- unparsed cell tab_0:row16:col2 = '16.40%'
- unparsed cell tab_0:row16:col3 = '% 2'
- unparsed cell tab_0:row16:col4 = '27.00%'
- unparsed cell tab_0:row17:col2 = '15.70%'
- unparsed cell tab_0:row17:col3 = '% 2'
- unparsed cell tab_0:row17:col4 = '27.40%'
- unparsed cell tab_0:row18:col2 = '19.50%'
- unparsed cell tab_0:row18:col3 = 'mg 2 L -2'
- unparsed cell tab_0:row18:col4 = '0.293 mg L -1'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 3 scholar param(s) emitted or defaulted | 1 covered | not captured | neither emitted nor in defaulted[]: ['V1', 'kabs'] |
| T3_rate_constant_conversion | not captured | pass | Ka (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_coagulation_factor_xiii/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dodds_2005` / `Dodds_2005::reference`)
- model: `../../../knowledgebase/drugs/drug_coagulation_factor_xiii/models/modelica/_needs_review/CoagulationFactorXiii_Dodds2005_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_coagulation_factor_xiii/models/modelica/_needs_review/CoagulationFactorXiii_Dodds2005_reference.deviation.json`


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
