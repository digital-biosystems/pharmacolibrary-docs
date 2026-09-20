<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fitusiran&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/&quot;},{&quot;label&quot;:&quot;Fan_2026 \u00b7 micea&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fitusiran_Sten2023_reference&quot;,&quot;label&quot;:&quot;Sten_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Sten2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_humansa&quot;,&quot;label&quot;:&quot;Fan_2026_humansa&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_humansa.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_humansa&quot;,&quot;label&quot;:&quot;Fan_2026_humansa&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_humansa.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_micea&quot;,&quot;label&quot;:&quot;Fan_2026_micea&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_micea.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fitusiran_Fan2026_micea&quot;,&quot;label&quot;:&quot;Fan_2026_micea&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_micea.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fitusiran_Fan2026_monkeysc&quot;,&quot;label&quot;:&quot;Fan_2026_monkeysc&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_monkeysc.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_monkeysc&quot;,&quot;label&quot;:&quot;Fan_2026_monkeysc&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_monkeysc.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_ratsb&quot;,&quot;label&quot;:&quot;Fan_2026_ratsb&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_ratsb.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_ratsb&quot;,&quot;label&quot;:&quot;Fan_2026_ratsb&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_ratsb.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fitusiran — `Fitusiran_Fan2026_micea`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `kabs`, `fu`, `Rtot`, `Vmax`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Fan X; Xiao Y; Cao K; Zhang R; Yan X et al. (2026). Molecular therapy. Nucleic acids 37
  ·  DOI: [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936)

## Model component
<dbs-pgx drug="fitusiran" model-id="Fitusiran_Fan2026_micea" status="rejected" stale="false" population="mice, rats, monkeys, and humans" measured-compound="fitusiran" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (1/h) | `Q49` · kabs | 1.48 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row3:col2 | — | not captured |
| Fu (1/h) | `Q46` · fu | 0.0066 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row4:col2 | — | not captured |
| RTOT0 (nM) | `Q333` · Rtot | 33.1 | nM | not captured | [nM] | not captured | llm (0.6) | tbl1:row9:col2 | — | not captured |
| Vm (nmol/h) | `Q66` · Vmax | 0.98 | nmol/h | not captured | [nM] / [h] | not captured | special_case (0.95) | tbl1:row10:col2 | — | not captured |
| Km (∗105 nM) | `Q1` · Km | 27.44 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row11:col2 | — | not captured |
| koff (1/h) | `Q330` · koff | 0.021 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row12:col2 | — | not captured |
| kint (1/h) | `Q334` · kint | 7.84 | nM−1·h−1 | not captured | [1] / [[h] · [nM]] | not captured | exact (1.0) | tbl1:row15:col2 | — | not captured |
| Kdis (∗10−3 h−1) | `Q331` · KD | 0.14 | nM | not captured | [nM] | not captured | llm (0.6) | tbl1:row21:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'ka (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'PSLiver (L/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row5:col2'])
- dropped unlinked row (NIL): 'KPLiver' — extend the ontology if this is a real PK parameter (source ['tbl1:row6:col2'])
- dropped unlinked row (NIL): 'KPRem' — extend the ontology if this is a real PK parameter (source ['tbl1:row7:col2'])
- dropped unlinked row (NIL): 'KDEGD (1/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row8:col2'])
- unit_dimension_mismatch: 'RTOT0 (nM)' → Q333 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vm (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (∗105 nM)' → Q1 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'koff (1/h)' → Q330 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'fesc' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col2'])
- unit_dimension_unknown: 'nM−1·h−1' (kint)
- dropped PD-category row 'Ksyn (nM/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row19:col2'])
- dropped unlinked row (NIL): 'Kass (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row20:col2'])
- unit_dimension_mismatch: 'Kdis (∗10−3 h−1)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'KDEGE (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row22:col2'])
- dropped PD-category row 'kdeg, m (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row26:col2'])
- dropped PD-category row 'kdeg, p (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row27:col2'])
- dropped unlinked row (NIL): 'Smax' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col2'])
- dropped PD-category row 'SC50 (nM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row29:col2'])
- dropped unlinked row (NIL): 'γ1' — extend the ontology if this is a real PK parameter (source ['tbl1:row30:col2'])
- dropped unlinked row (NIL): 'γ2' — extend the ontology if this is a real PK parameter (source ['tbl1:row31:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fitusiran
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'micea' subgroup of Fan_2026 (paper reports 4 populations: humansa, micea, monkeysc, ratsb)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S3 transcribed (42 record(s))
- LLM selected parameter table(s) 1, S3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tbl1:row11:col2'] |
| C5_dimension_Q330 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tbl1:row12:col2'] |
| C5_dimension_Q331 | fail | [length] | nM | not captured | not captured | ['tbl1:row21:col2'] |
| C5_dimension_Q333 | fail | [length] | nM | not captured | not captured | ['tbl1:row9:col2'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tbl1:row3:col2'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | not captured | not captured | ['tbl1:row10:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fitusiran/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fan_2026` / `Fan_2026::micea`)


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
