<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;fluconazole&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/&quot;},{&quot;label&quot;:&quot;Tanzawa_2022 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluconazole_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluconazole_Matsuno2024_reference&quot;,&quot;label&quot;:&quot;Matsuno_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Matsuno2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluconazole — `Fluconazole_Tanzawa2022_final`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has fosfluconazole, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `fosfluconazole`, measured `fluconazole`.

## Citation
Tanzawa A et al., Fluconazole Population Pharmacokinetics…, Microbiology spectrum (2022)
  ·  DOI: [10.1128/spectrum.01952-21](https://doi.org/10.1128/spectrum.01952-21)

## Model component
<dbs-pgx drug="fluconazole" model-id="Fluconazole_Tanzawa2022_final" status="extracted" stale="false" population="extremely low-birth-weight infants" measured-compound="fluconazole" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θkc | `Q305` · kfm | 0.43 | 1/h | 0.00011944444444444444 | 1/h | not captured | exact (1.0) | tab3:row10:col3 | — | not captured |
| θPMA | `Q900` · θPMA | 1.52 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θSCr | `Q900` · θSCr | -0.17 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θALP | `Q900` · θALP | 0.1 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θCL | `Q900` · θCL | 0.011 | not captured | not captured | not captured | not captured | not captured (not captured) | tab3:row3:col3 | — | not captured |
| θV | `Q900` · θV | 0.95 | L/kg | 0.0665 | not captured | not captured | not captured (not captured) | tab3:row8:col3 | — | not captured |
| CL/F | `Q27` · CL/F | 24.1 | L/h | 6.6944444444444455e-06 | L/h | not captured | review_gapfill (0.7) | Comisar_2025:review | — | not captured |
| ka | `Q49` · kabs | 3.86 | h−1 | 0.0010722222222222222 | 1/h | not captured | review_gapfill (0.7) | Comisar_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| θCL | Q351 | not captured | exact |
| θV | Q61 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variance (CV%)d')
- table section iiv: 'V' routed out of structural estimates ('Interindividual variance (CV%)d')
- kept covariate coefficient θPMA=1.52 (covariate PMA) — not an ontology parameter
- kept covariate coefficient θSCr=-0.17 (covariate SCr) — not an ontology parameter
- kept covariate coefficient θALP=0.10 (covariate ALP) — not an ontology parameter
- dropped unlinked row (NIL): 'Proportional (CV%)' — extend the ontology if this is a real PK parameter (source ['tab3:row17:col3'])
- dropped unlinked row (NIL): 'Additive (μg/mL)' — extend the ontology if this is a real PK parameter (source ['tab3:row18:col3'])
- implicit units: 'θCL' — the LLM proposed 'L/h/kg0.75', whose dimension does not fit Q22; left unset
- implicit units: 'θV' → L/kg (from the paper text: "The paper states in the Abstract: 'The mean population CL and the volume of distribution were 0.011 L/h/kg0.75 and 0.95 ")
- implicit units: 'θkc' → 1/h (from the popPK convention: 'The parameter is identified as a first-order rate constant (kc/kfm). In population pharmacokinetics, first-order rate co')
- metabolite fluconazole: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'θV' Q63→Q61 for fluconazole — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fluconazole
- template fit: none — only the metabolite is modelled — no parent compartment
- bound model equation to Q351 (CLm/F): CL = θCL * (SCr/0.64)^θCL-SCr * (WT)^0.75
- bound model equation to Q61 (V): V = θV * (SCr/0.64)^θV-SCr * (WT)^1.0
- bound model equation to Q351 (CLm/F): aCL = θCL * (PMA/29)^θPMA * (SCr/0.64)^θSCr * (ALP/958)^θALP.bV (L/kg) = θV.ckc (per h) = θkc.dCV, coefficient of variation.eRSE, residual standard error.fCI, confidence interval
- Q351 (CLm/F) is equation-defined: value moved to equation-variable 'θCL'; equation kept verbatim
- Q61 (V) is equation-defined: value moved to equation-variable 'θV'; equation kept verbatim
- model-stage split: 'final model' is the final model of Tanzawa_2022 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 15 linked by role
- gap-filled Q27 (CL/F) from Comisar_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Comisar_2025's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab3:row3:col2 = '(10.59)'
- unparsed cell tab3:row3:col4 = '(10.59)'
- unparsed cell tab3:row3:col6 = '0.0091 to 0.015'
- unparsed cell tab3:row4:col6 = '1.28 to 3.31'
- unparsed cell tab3:row5:col6 = '−0.31 to −0.08'
- unparsed cell tab3:row6:col6 = '0.018 to 0.24'
- unparsed cell tab3:row8:col2 = '(5.40)'
- unparsed cell tab3:row8:col4 = '(5.40)'
- unparsed cell tab3:row8:col6 = '0.86 to 1.04'
- unparsed cell tab3:row10:col4 = '(5.40)'
- unparsed cell tab3:row10:col6 = '0.43 to 0.43'
- unparsed cell tab3:row13:col2 = '(34.8)'
- unparsed cell tab3:row13:col4 = '(34.8)'
- unparsed cell tab3:row13:col6 = '13.4 to 35.2'
- unparsed cell tab3:row14:col2 = '(49.2)'
- unparsed cell tab3:row14:col4 = '(49.2)'
- unparsed cell tab3:row14:col6 = '2.8 to 21.1'
- unparsed cell tab3:row17:col2 = '(12.8)'
- unparsed cell tab3:row17:col4 = '(12.8)'
- unparsed cell tab3:row17:col6 = '10.5 to 17.5'
- unparsed cell tab3:row18:col2 = '(70.7)'
- unparsed cell tab3:row18:col4 = '(70.7)'
- unparsed cell tab3:row18:col6 = '0.0011 to 0.16'
- LLM selected parameter table(s) 3
- captured model equation CL = θCL * (SCr/0.64)^θCL-SCr * (WT)^0.75
- captured model equation V = θV * (SCr/0.64)^θV-SCr * (WT)^1.0
- captured model equation aCL = θCL * (PMA/29)^θPMA * (SCr/0.64)^θSCr * (ALP/958)^θALP.bV (L/kg) = θV.ckc (per h) = θkc.dCV, coefficient of variation.eRSE, residual standard error.fCI, confidence interval

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[θalp]` | 0.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θalp]` | not captured | 0.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θcl].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[θpma]` | 1.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θpma]` | not captured | 1.52 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θscr]` | -0.17 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θscr]` | not captured | -0.17 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | fosfluconazole | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | fluconazole | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Comisar_2025:review'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['tab3:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Comisar_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab3:row8:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.1 L/h | not captured | not captured | ['Comisar_2025:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluconazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tanzawa_2022` / `Tanzawa_2022::final`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:53 UTC</sub>
