<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;chlortetracycline&quot;,&quot;href&quot;:&quot;drugs/drug_chlortetracycline/&quot;},{&quot;label&quot;:&quot;Reinbold_2010 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chlortetracycline — `Chlortetracycline_Reinbold2010_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.118). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The chlortetracycline record was held back because the absorption rate constant ka was not reported in the paper and a default value was invented, alongside other unreported assumptions (Tlag, F=1).**

The record was built from the abstract only, so reported summary statistics (V/F 40.9 L/kg, kel 0.0478 h⁻¹, CL/F 1.8 L/kg/h, t1/2z 16.2 h, Cmax/dose 4.5 ng/mL, tmax 23.3 h, AUC/dose 0.29 h·µg/L) stood in for a fitted model. The source never reports ka or Tlag, so library defaults were substituted, and the invented absorption constant was judged not acceptable. Because the parameters are apparent (/F) values, bioavailability was assumed to be 1 with no molar correction, and a first-order depot input was assumed for the extravascular dosing. Extracted — chlortetracycline: V/F 40.9 L/kg, kel 0.0478 h(-1), AUC/dose 0.29 h x microg/L, CL/F 1.8 L/kg/h, t1/2z 16.2 h, Cmax/dose 4.5 ng/mL, tmax 23.3 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has chlortetracycline, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:36:55.377867+00:00) predates the upstream re-run (2026-10-04 00:02:09.713015+00:00). Current validate status: `needs_review`.

## Citation
Reinbold JB et al., Plasma pharmacokinetics of oral chlorte…, Journal of veterinary pharm… (2010)
  ·  DOI: [10.1111/j.1365-2885.2009.1116.x](https://doi.org/10.1111/j.1365-2885.2009.1116.x)

## Model component
<dbs-pgx drug="chlortetracycline" model-id="Chlortetracycline_Reinbold2010_reference" status="needs_review" stale="true" population="group fed, ruminating, Holstein steers" measured-compound="chlortetracycline" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of distribution (V/F | `Q76` · V/F | 40.9 | L/kg) | 2.863 | [l] / [kg] | not captured | llm_corrected (0.6) | Reinbold_2010:abstract | — | not captured |
| rate constant (k | `Q47` · kel | 0.0478 | 1/h | 1.3277777777777779e-05 | 1/h | not captured | llm (0.6) | Reinbold_2010:abstract | — | not captured |
| dose-normalized area under the curve (AUC/D | `Q189` · AUC/dose | 0.29 | h x microg/L) | not captured | [[h] · [µg]] / [l] | not captured | llm_corrected (0.6) | Reinbold_2010:abstract | — | not captured |
| clearance (Cl/F | `Q27` · CL/F | 1.8 | L/kg/h) | 3.5000000000000004e-05 | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Reinbold_2010:abstract | — | not captured |
| elimination half-life (t(1/2) | `Q57` · t1/2z | 16.2 | h) | 58320.0 | [h] | not captured | llm (0.6) | Reinbold_2010:abstract | — | not captured |
| C(max/Dose) | `Q174` · Cmax/dose | 4.5 | ng/mL) | not captured | [ng] / [ml] | not captured | llm (0.6) | Reinbold_2010:abstract | — | not captured |
| time of C(max) (T(max) | `Q56` · tmax | 23.3 | h) | 83880.0 | [h] | not captured | llm (0.6) | Reinbold_2010:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/kg)' (V/F)
- unit_dimension_unknown: 'h(-1))' (kel)
- unit_dimension_unknown: 'h x microg/L)' (AUC/dose)
- unit_dimension_unknown: 'L/kg/h)' (CL/F)
- unit_dimension_unknown: 'h)' (t1/2z)
- unit_dimension_unknown: 'ng/mL)' (Cmax/dose)
- unit_dimension_unknown: 'h)' (tmax)
- implicit units: 'rate constant (k' → 1/h (from the popPK convention: 'Elimination rate constants are first-order rate constants, conventionally expressed in reciprocal time units (1/h) in po')
- implicit units: 'dose-normalized area under the curve (AUC/D' — the LLM proposed 'L/h', whose dimension does not fit Q189; left unset
- implicit units: 'C(max/Dose)' — the LLM proposed 'L', whose dimension does not fit Q174; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=chlortetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Reinbold_2010_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc/d]` | not captured | 0.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c]` | 4.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c]` | not captured | 4.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 1.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance (cl/f]` | 1.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose-normalized area under the curve (auc/d]` | 0.29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` | 16.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k]` | not captured | 0.0478 | only_one_extracted |
| `gpt-oss:120b` | `parameters[rate constant (k]` | 0.0478 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t]` | not captured | 16.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[time of c(max)]` | 23.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | not captured | 40.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution (v/f]` | 40.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | chlortetracycline | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | chlortetracycline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Reinbold_2010:abstract'] |
| C5_unit_missing_Q174 | fail | [mass] / [length] ** 3 | ng/mL) | not captured | not captured | ['Reinbold_2010:abstract'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | h x microg/L) | not captured | not captured | ['Reinbold_2010:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 126 L/h | not captured | not captured | ['Reinbold_2010:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.86e+03 L | not captured | not captured | ['Reinbold_2010:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=chlortetracycline) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_chlortetracycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Reinbold_2010` / `Reinbold_2010::reference`)
- model: `../../../knowledgebase/drugs/drug_chlortetracycline/models/modelica/Chlortetracycline_Reinbold2010_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_chlortetracycline/models/modelica/Chlortetracycline_Reinbold2010_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_chlortetracycline/models/modelica/Chlortetracycline_Reinbold2010_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_modelica.zip" download>Chlortetracycline_Reinbold2010_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_fmi.zip" download>Chlortetracycline_Reinbold2010_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_matlab.zip" download>Chlortetracycline_Reinbold2010_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_matlab_simbio.zip" download>Chlortetracycline_Reinbold2010_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_sbml.zip" download>Chlortetracycline_Reinbold2010_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference/Chlortetracycline_Reinbold2010_reference_cellml.zip" download>Chlortetracycline_Reinbold2010_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 00:02 UTC</sub>
