<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dihydrocodeine&quot;,&quot;href&quot;:&quot;drugs/drug_dihydrocodeine/&quot;},{&quot;label&quot;:&quot;Webb_2001 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dihydrocodeine_Webb2001_reference&quot;,&quot;label&quot;:&quot;Webb_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dihydrocodeine/Dihydrocodeine_Webb2001_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dihydrocodeine — `Dihydrocodeine_Webb2001_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The dihydrocodeine record is incomplete: the parameter V/F (203 L) was not captured, leaving only 6 of 7 expected parameters covered, so the model was held back for review.**

The record, built from the abstract of Webb_2001 alone, covers CL/F 43 L/h, kabs 11 1/h, tlag 0.3 h, kel 0.216 1/h and metabolite parameters, but V/F (203 L) was neither emitted nor defaulted, failing the parameter coverage check (6 of 7). Because only the abstract was read, reported summary statistics stand in for a fitted model. The builder also substituted a default intercompartmental hepatic distribution flow of 90 L/h for the missing source values and assumed F=1 and Fm=1 with no molar correction. Extracted — dihydrocodeine: CL/F 43 L/h, V/F 203 l, kabs 11 1/h, tlag 0.3 h, kel 0.216 1/h, t1/2z 13 min; dihydromorphine: fm 0.015, kel 0.339 1/h, V 200 L.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Webb JA et al., Contribution of dihydrocodeine and dihy…, British journal of clinical… (2001)
  ·  DOI: [10.1046/j.0306-5251.2001.01414.x](https://doi.org/10.1046/j.0306-5251.2001.01414.x)

## Model component
<dbs-pgx drug="dihydrocodeine" model-id="Dihydrocodeine_Webb2001_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="dihydrocodeine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent–metabolite model: parent with 1 compartment(s) plus a liver compartment (first pass); metabolite dihydromorphine: 1 compartment(s); formed in the liver; oral dose — template `PK_3M_3C`.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 43 | L/h | 1.1944444444444446e-05 | L/h | not captured | exact (1.0) | Webb_2001:abstract | — | not captured |
| V/F | `Q76` · V/F | 203 | l | 0.203 | [l] | not captured | exact (1.0) | Webb_2001:abstract | — | not captured |
| ka | `Q49` · kabs | 11 | 1/h | 0.0030555555555555557 | 1/h | not captured | exact (1.0) | Webb_2001:abstract | — | not captured |
| t lag | `Q83` · tlag | 0.3 | h | 1080.0 | [h] | not captured | space_fold (0.95) | Webb_2001:abstract | — | not captured |
| kel | `Q47` · kel | 0.216 | 1/h | 6e-05 | 1/h | not captured | exact (1.0) | Webb_2001:abstract | — | not captured |
| fm(DHM) systemic | `Q45` · fm | 0.015 | not captured | not captured | not captured | not captured | exact (1.0) | Webb_2001:abstract | — | not captured |
| k(DHM) | `Q47` · kel | 0.339 | 1/h | 9.416666666666667e-05 | 1/h | not captured | exact (1.0) | Webb_2001:abstract | — | not captured |
| V(DHM) | `Q61` · V | 200 | L | 0.2 | L | not captured | exact (1.0) | Webb_2001:abstract | — | not captured |
| half-life of elimination from effect compartment | `Q57` · t1/2z | 13 | min | 780.0 | [min] | not captured | llm (0.6) | Webb_2001:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['q12/q21 (hepatic flow, 90 L/h)']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'P' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- dropped unlinked row (NIL): 'Mean pain AUC changes' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- dropped unlinked row (NIL): 'Caucasians' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- dropped unlinked row (NIL): 'Asians' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- dropped unlinked row (NIL): 'aged' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- dropped unlinked row (NIL): 'DHC/DHM ratio' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- unit_dimension_unknown: 'lhx1' (CL/F)
- unit_dimension_unknown: 'hx1' (kabs)
- unit_dimension_unknown: 'hx1' (kel)
- dropped duplicate Q45 ('fm(DHM) 1stpass', value 0.022) — already have one for this compound
- unit_dimension_unknown: 'DHM' (kel)
- unit_dimension_unknown: 'DHM' (V1)
- dropped PD-category row 'ke0' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Webb_2001:abstract', 'Webb_2001:abstract', 'Webb_2001:abstract'])
- implicit units: 'CL/F' → L/h (from the popPK convention: 'CL/F is a clearance parameter. In population PK, clearance is conventionally expressed in L/h. The value 43 is consisten')
- implicit units: 'ka' → 1/h (from the popPK convention: 'ka is a first-order absorption rate constant. Rate constants are conventionally expressed in 1/h. The value 11 is consis')
- implicit units: 'kel' → 1/h (from the popPK convention: 'kel is a first-order elimination rate constant. Rate constants are conventionally expressed in 1/h. The value 0.216 is c')
- implicit units: 'k(DHM)' → 1/h (from the popPK convention: 'k(DHM) is described as an elimination rate constant. Rate constants are conventionally expressed in 1/h. The value 0.339')
- implicit units: 'V(DHM)' → L (from the popPK convention: 'V(DHM) is a volume of distribution parameter. Volumes are conventionally expressed in L. The value 200 is consistent wit')
- metabolite volume: 'V(DHM)' Q63→Q61 for dihydromorphine — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dihydrocodeine
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [1] (site presystemic: 'Intercept constant of DHM while fm(DHM) was proportional could be fixed AT 0 (model 9) or be calculated as part of conve')
- row roles: 3 per-group rows of none other but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 9 linked by role; re-tagged dihydrocodeine→parent ×5, dihydrocodeine→dihydromorphine ×4
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Webb_2001_extracted.txt (19 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 43 L/h | not captured | not captured | ['Webb_2001:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 200 L | not captured | not captured | ['Webb_2001:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 203 L | not captured | not captured | ['Webb_2001:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[dihydromorphine] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.2, 'CL': 1.8833333333333335e-05, 'formation': 1.791666666666667e-07} | not captured | dihydromorphine = compartment M1 with its own numbers |
| T3_metabolite_output[dihydromorphine] | not captured | pass | not captured | 1.2353418243819927e-06 | not captured | C_M1 (dihydromorphine) must rise above 0 when the parent is dosed |
| T3_molar_mass[dihydromorphine] | not captured | pass | not captured | {'MW': 0.30138010000000004, 'MW_m1': 0.287359} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=dihydrocodeine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 7 scholar param(s) emitted or defaulted | 6 covered | not captured | neither emitted nor in defaulted[]: ['V/F'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | parent_metabolite_hepatic → PK_3M_3C* | PK_3M_3C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dihydrocodeine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Webb_2001` / `Webb_2001::reference`)
- model: `../../../knowledgebase/drugs/drug_dihydrocodeine/models/modelica/Dihydrocodeine_Webb2001_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dihydrocodeine/models/modelica/Dihydrocodeine_Webb2001_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_dihydrocodeine/models/modelica/Dihydrocodeine_Webb2001_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dihydrocodeine/Dihydrocodeine_Webb2001_reference/Dihydrocodeine_Webb2001_reference.svg" alt="Dihydrocodeine_Webb2001_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 90 mg, single dose, first-order absorption into a hepatic compartment first (first pass) (ka 11 /h, lag 18 min, F 1). Dose in the paper: 90 mg.

<dbs-fmusim paramsurl="drugs/drug_dihydrocodeine/Dihydrocodeine_Webb2001_reference/Dihydrocodeine_Webb2001_reference_params.json" metaurl="assets/fmu/PK_3M_3C.vr.json" wasmurl="assets/fmu/PK_3M_3C.js" controlsurl="drugs/drug_dihydrocodeine/Dihydrocodeine_Webb2001_reference/Dihydrocodeine_Webb2001_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3M_3C` · parameters `Dihydrocodeine_Webb2001_reference_params.json` · controls `Dihydrocodeine_Webb2001_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-26 20:55 UTC</sub>
