<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05B&quot;,&quot;href&quot;:&quot;atc/B05B.md&quot;},{&quot;label&quot;:&quot;amino acids&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/&quot;},{&quot;label&quot;:&quot;Kleist_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminoAcids_Krieger2025_reference&quot;,&quot;label&quot;:&quot;Krieger_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Krieger2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Kleist2022_reference&quot;,&quot;label&quot;:&quot;Kleist_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Kleist2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;AminoAcids_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Min2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Thorsted2026_reference&quot;,&quot;label&quot;:&quot;Thorsted_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Thorsted2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Sudarsono2026_reference&quot;,&quot;label&quot;:&quot;Sudarsono_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Sudarsono2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Sudarsono2026v2_reference&quot;,&quot;label&quot;:&quot;Sudarsono_2026_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Sudarsono2026v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amino acids — `AminoAcids_Kleist2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — reviewer_tooling.** the check reported a failure without computing a comparison, so this is an inconclusive check rather than a demonstrated fault<br><sub>evidence: `C2_reference failed (ratio None)`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the reference covariate scenario does not reconstruct.

**Steps:**
1. Not a curation fix — reviewer_tooling limitation.
2. Check covariate_definitions and the reference category in _interpretv2.yaml.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Kleist CJ; Choe CU; Atzler D; Schönhoff M; Böger R; Schwedhelm E; et al. et al. (2022). Amino acids 54
  ·  DOI: [10.1007/s00726-022-03169-x](https://doi.org/10.1007/s00726-022-03169-x)

## Model component
<dbs-pgx drug="amino acids" model-id="AminoAcids_Kleist2022_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="homoarginine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ2 | `Q900` · equation variable | —(suppressed) | not captured | — | not captured | 11.1 | llm (0.6) | Tab2:row5:col1, Tab2:row5:col3 | — | not captured |
| VD (ml g−1) | `Q61` · V | —(suppressed) | ml g−1 | — | L | not captured | review_gapfill (0.7) | Krieger_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
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
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amino_acids/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kleist_2022` / `Kleist_2022::reference`)


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
