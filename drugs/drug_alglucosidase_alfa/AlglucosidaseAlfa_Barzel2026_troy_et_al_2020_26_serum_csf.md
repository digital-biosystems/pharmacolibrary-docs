<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;alglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Barzel_2026 \u00b7 troy_et_al_2020_26_serum_csf&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlglucosidaseAlfa_Tiraboschi2023_reference&quot;,&quot;label&quot;:&quot;Tiraboschi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alglucosidase_alfa/AlglucosidaseAlfa_Tiraboschi2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alglucosidase alfa — `AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.15). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has none, the second reading none → none (none); it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:35:53.838011+00:00) predates the upstream re-run (2026-10-05 10:36:33.622019+00:00). Current validate status: `needs_review`.

## Citation
Barzel I et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-026-01636-2](https://doi.org/10.1007/s40262-026-01636-2)

## Model component
<dbs-pgx drug="alglucosidase alfa" model-id="AlglucosidaseAlfa_Barzel2026_troy_et_al_2020_26_serum_csf" status="needs_review" stale="true" population="patients with lysosomal storage diseases" measured-compound="alglucosidase_alfa" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL | Q22 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fixed effect parameters' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row0:col7'])
- dropped unlinked row (NIL): 'Inter-individual variability (CV%)' — extend the ontology if this is a real PK parameter (source ['Barzel_2026_table_3:row23:col7'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alglucosidase_alfa
- bound model equation to Q22 (CL): CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- population split: 'troy et al., 2020 [26]serum/csf*' subgroup of Barzel_2026 (paper reports 5 populations: gras-colomer et al., 2021 [25]plasma/leukocyteθ, qi et al., 2018 [23]plasma, tiraboschi et al., 2023 [22]plasma, troy et al., 2020 [26]serum/csf*, tuffal et al., 2023 [21]plasma)
- molar mass: none found for 'alglucosidase_alfa' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab2:row2:col4 = '2-compartment'
- unparsed cell Tab2:row2:col8 = 'TBW on CL and Q (0.587, [0.444; 0.730]), Vc and Vp (0.483, [0315; 0.651])'
- unparsed cell Tab2:row5:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row5:col4 = '3-compartment'
- unparsed cell Tab2:row6:col3 = 'NONMEM v7.4.1'
- unparsed cell Tab2:row6:col4 = '3-compartment'
- unparsed cell Tab2:row6:col7 = 'Forward inclusion (alpha risk: 5%) and backward elimination (alpha risk: 0.1%)'
- unparsed cell Tab2:row6:col8 = 'Time-varying TBW on CL (0.896, [0.754; 1.04]), V1 (0.661, [0.578; 0.7444]) and Vm (0.463, [0.352;0.574])'
- unparsed cell Tab2:row7:col3 = 'NONMEM v7.3'
- unparsed cell Tab2:row7:col4 = 'CNS: 2-compartmentSerum: 1-compartment'
- unparsed cell Barzel_2026_table_3:row0:col4 = '3.85 × 10−2'
- unparsed cell Barzel_2026_table_3:row1:col3 = '1.10 × 10−2'
- unparsed cell Barzel_2026_table_3:row41:col3 = 'Plasma: 29Leukocyte: 11'
- unparsed cell Barzel_2026_table_3:row41:col6 = 'CSF: 98.1Serum: 67.5'
- companion parameter table 3 transcribed (62 record(s))
- LLM selected parameter table(s) 3
- captured model equation CL = 1.97 * (TBW/20)^0.587Q = 0.931 * (TBW/20)^0.587Vc =1.52 * (TBW/20)^0.483Vp = 3.11 * (TBW/20)^0.483

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>17 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[cendo]` | not captured | 0.93 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | not captured | 0.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | not captured | 0.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k]` | not captured | 0.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[km]` | not captured | 0.451 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ktrans]` | not captured | 0.581 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/q2]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/q2]` | not captured | 0.931 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q3]` | not captured | 1.87 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 86.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3]` | not captured | 1.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 4.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/v1]` | not captured | 1.52 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vm]` | not captured | 9.82 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/v2]` | not captured | 3.11 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_alglucosidase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Barzel_2026` / `Barzel_2026::troy_et_al_2020_26_serum_csf`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 10:36 UTC</sub>
