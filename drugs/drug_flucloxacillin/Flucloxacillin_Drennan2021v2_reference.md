<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/&quot;},{&quot;label&quot;:&quot;Drennan_2021_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucloxacillin — `Flucloxacillin_Drennan2021v2_reference`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No value for flucloxacillin's bioavailability, clearance, volume of distribution and absorption lag time.**

The model was built, but flucloxacillin's bioavailability, clearance, volume of distribution and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — flucloxacillin: tlag 0.101 h, kabs 0.111 h−1, V 90.4 L, CL 85.4 L h−1, CLb 0.003, IIV 0.217, Vss 0.163, t1/2γ 0.184, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of a: this record has none, the second reading 0.004; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:38:01.054009+00:00) predates the upstream re-run (2026-10-07 10:02:45.144585+00:00). Current validate status: `not captured`.

## Citation
Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887)

## Model component
<dbs-pgx drug="flucloxacillin" model-id="Flucloxacillin_Drennan2021v2_reference" status="" stale="true" population="adults with staphylococcal infections and healthy adults" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Model structure:** —; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell Drennan_2021_2_table_p5_1:row1:col7 = '0.321 (0.057–0.552)'
- unparsed cell Drennan_2021_2_table_p5_1:row2:col7 = '-0.78 (-3.72 to -0.287)'
- unparsed cell Drennan_2021_2_table_p5_1:row3:col7 = '0.625 (0.448–0.788)'
- unparsed cell Drennan_2021_2_table_p5_1:row4:col7 = '1.18 (0.138–1.62)'
- unparsed cell Drennan_2021_2_table_p5_1:row5:col7 = '535 (291–641)'
- unparsed cell Drennan_2021_2_table_p5_1:row7:col7 = '413 (305–581)'
- unparsed cell Drennan_2021_2_table_p5_1:row8:col7 = '0.013 (0.006–0.019)'
- unparsed cell Drennan_2021_2_table_p5_1:row10:col7 = '-0.668 (-0.987 to -0.396)'
- unparsed cell Drennan_2021_2_table_p5_1:row11:col7 = '1.01 (0.806–1.36)'
- unparsed cell Drennan_2021_2_table_p5_1:row14:col7 = '0.198 (0.073–0.442)'
- unparsed cell Drennan_2021_2_table_p5_1:row15:col7 = '0.163 (0.069–0.304)'
- unparsed cell Drennan_2021_2_table_p5_1:row16:col7 = '0.142 (0.04–0.297)'
- unparsed cell Drennan_2021_2_table_p5_1:row17:col7 = '0.251 (0.1–0.34)'
- unparsed cell Drennan_2021_2_table_p5_1:row19:col7 = '0.489 (0.055–0.686)'
- unparsed cell Drennan_2021_2_table_p5_1:row20:col7 = '0.185 (0.069–0.601)'
- unparsed cell Drennan_2021_2_table_p5_1:row21:col7 = '0.306 (0.19–0.508)'
- unparsed cell Drennan_2021_2_table_p5_1:row22:col7 = '0.27 (0.188–0.324)'
- unparsed cell Drennan_2021_2_table_p5_1:row25:col7 = '0.059 (0.003–0.093)'
- unparsed cell Drennan_2021_2_table_p5_1:row26:col7 = '0.206 (0.17–0.284)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.7 (14/20 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[a]` | not captured | 0.004 | only_one_extracted |
| `gpt-oss:120b` | `parameters[βclprobenecid]` | 0.003 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[γabs]` | 0.184 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[γv]` | 0.082 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ωabs]` | 0.217 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ωv].parameter_id` | Q65 | Q312 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_flucloxacillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Drennan_2021_2` / `Drennan_2021_2::reference`)
- model: `../../../knowledgebase/drugs/drug_flucloxacillin/models/modelica/_needs_review/Flucloxacillin_Drennan2021v2_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_flucloxacillin/models/modelica/_needs_review/Flucloxacillin_Drennan2021v2_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:02 UTC</sub>
