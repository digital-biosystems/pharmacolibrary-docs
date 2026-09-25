<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05B&quot;,&quot;href&quot;:&quot;atc/B05B.md&quot;},{&quot;label&quot;:&quot;amino acids&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/&quot;},{&quot;label&quot;:&quot;Kleist_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminoAcids_Krieger2025_reference&quot;,&quot;label&quot;:&quot;Krieger_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Krieger2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Kleist2022_reference&quot;,&quot;label&quot;:&quot;Kleist_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Kleist2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;AminoAcids_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Min2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Thorsted2026_reference&quot;,&quot;label&quot;:&quot;Thorsted_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Thorsted2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Sudarsono2026_reference&quot;,&quot;label&quot;:&quot;Sudarsono_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Sudarsono2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Sudarsono2026v2_reference&quot;,&quot;label&quot;:&quot;Sudarsono_2026_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Sudarsono2026v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amino acids — `AminoAcids_Kleist2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.562). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C2_reference failed (ratio None).
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[clearance, cl = θ1 × (ibw/75)^θ7 [l/h]].covariate_forms` ([] vs ['linear_fractional']) and 6 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (reviewer_tooling: the check reported a failure without computing a comparison, so this is an inconclusive check rather than a demonstrated fault).
<sub>owner: **curator**</sub>

## Citation
Kleist CJ; Choe CU; Atzler D; Schönhoff M; Böger R; Schwedhelm E; et al. et al. (2022). Amino acids 54
  ·  DOI: [10.1007/s00726-022-03169-x](https://doi.org/10.1007/s00726-022-03169-x)

## Model component
<dbs-pgx drug="amino acids" model-id="AminoAcids_Kleist2022_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="homoarginine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ2 | `Q900` · equation variable | 69.5 | not captured | not captured | not captured | 11.1 | llm (0.6) | Tab2:row5:col1, Tab2:row5:col3 | — | not captured |
| VD (ml g−1) | `Q61` · V | 0.092 | ml g−1 | 0.0064399999999999995 | L | not captured | review_gapfill (0.7) | Krieger_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Clearance, CL = θ1 × (IBW/75)^θ7 [L/h] | Q22 | not captured | llm_confirmed |
| Peripheral volume of distribution, V3 = θ3 × (IBW/75)^θ9 [L] | Q77 | not captured | llm_corrected |
| First-order absorption rate constant, ka = θ4 [h−1] | Q49 | not captured | llm_confirmed |
| Distribution clearance, Q = θ5 [L/h] | Q30 | not captured | llm_confirmed |
| theta_q64_age_power | Q900 | not captured | not captured |
| theta_v3_body_weight | Q900 | not captured | not captured |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col3'])
- dropped value-less row: 'ω12'
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1', 'Tab2:row8:col3'])
- dropped duplicate Q900 ('θ4', value '0.924') — already have one for this compound
- dropped duplicate Q900 ('θ5', value '28.2') — already have one for this compound
- dropped PD-category row 'Baseline, BSL = θ6 [µmol/L]' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3'])
- dropped unlinked row (NIL): 'θ6' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1', 'Tab2:row14:col3'])
- dropped value-less row: 'ω32'
- dropped unlinked row (NIL): 'Covariate ideal body weight (IBW) on CL = θ7' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3'])
- dropped unlinked row (NIL): 'θ7' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col1', 'Tab2:row17:col3'])
- dropped unlinked row (NIL): 'Covariate age on V2 = θ8' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col1', 'Tab2:row18:col2', 'Tab2:row18:col3'])
- dropped value-less row: 'θ8'
- dropped unlinked row (NIL): 'θ9' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col1', 'Tab2:row21:col3'])
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance, CL = θ1 × (IBW/75)^θ7 [L/h]); Q30 (Distribution clearance, Q = θ5 [L/h])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=homoarginine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- Q22 (CL) is equation-defined: value moved to equation-variable 'Clearance, CL = θ1 × (IBW/75)^θ7 [L/h]'; equation kept verbatim
- Q77 (V3) is equation-defined: value moved to equation-variable 'Peripheral volume of distribution, V3 = θ3 × (IBW/75)^θ9 [L]'; equation kept verbatim
- gap-filled Q61 (V) from Krieger_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '3.25, 4.26'
- unparsed cell Tab2:row3:col1 = '0.0225 (ω1: 15.1% CV)'
- unparsed cell Tab2:row3:col2 = '0.00322, 0.0419'
- unparsed cell Tab2:row5:col2 = '54.5, 84.8'
- unparsed cell Tab2:row6:col1 = '0.21 (ω2: 48.3% CV)'
- unparsed cell Tab2:row6:col2 = '0.0342, 0.338'
- unparsed cell Tab2:row8:col2 = '177, 312'
- unparsed cell Tab2:row10:col2 = '0.722, 1.14'
- unparsed cell Tab2:row12:col2 = '24.7, 33.2'
- unparsed cell Tab2:row14:col2 = '2.44, 3.15'
- unparsed cell Tab2:row15:col1 = '0.0799 (ω3: 28.8% CV)'
- unparsed cell Tab2:row15:col2 = '0.0361, 0.123'
- unparsed cell Tab2:row17:col2 = '0.897, 1.99'
- unparsed cell Tab2:row19:col1 = '− 1.86'
- unparsed cell Tab2:row19:col2 = '− 2.54, − 1.20'
- unparsed cell Tab2:row21:col2 = '0.225, 2.43'
- unparsed cell Tab2:row23:col1 = '15.5% CV'
- unparsed cell Tab2:row23:col2 = '0.124, 0.188'
- unparsed cell Tab2:row25:col1 = '25.6% CV'
- unparsed cell Tab2:row25:col2 = '0.237, 0.274'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.562 (9/16 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance, cl = θ1 × (ibw/75)^θ7 [l/h]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution, v3 = θ3 × (ibw/75)^θ9 [l]].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_body_weight]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q64_age]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v3_body_weight]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | 0.092 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ2]` | 69.5 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 / [mass] | not captured | not captured | not captured | ['Krieger_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.44 L | not captured | not captured | ['Krieger_2025:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amino_acids/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kleist_2022` / `Kleist_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-19 02:40 UTC</sub>
