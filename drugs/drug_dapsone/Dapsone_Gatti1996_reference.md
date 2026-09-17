<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;dapsone&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/&quot;},{&quot;label&quot;:&quot;Gatti_1996 \u00b7 reference&quot;}]"></div>

# dapsone — `Dapsone_Gatti1996_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `CL`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Read the .deviation.json and confirm each deviation names what changed and why.
5. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Gatti G; Merighi M; Hossein J; Travaini S; Casazza R; Karlsson M; et al. et al. (1996). Antimicrobial agents and chemotherapy 40
  ·  DOI: [10.1128/AAC.40.12.2743](https://doi.org/10.1128/AAC.40.12.2743)

## Model component
<dbs-pgx drug="dapsone" model-id="Dapsone_Gatti1996_reference" status="model_quarantined" stale="false" population="HIV-infected patients" measured-compound="dapsone" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | —(suppressed) | liters/h | — | L/h | not captured | exact (1.0) | Gatti_1996:other_prose | — | not captured |
| V/F | `Q76` · V/F | —(suppressed) | liters | — | L | not captured | exact (1.0) | Gatti_1996:other_prose | — | not captured |
| decrease of clearance of dapsone by AZT | `Q22` · CL | —(suppressed) | % | — | % | not captured | boundary (0.8) | Gatti_1996:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['tab_1:row0:col1', 'tab_1:row0:col4', 'tab_1:row0:col5'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3', 'tab_1:row1:col4', 'tab_1:row1:col6', 'tab_1:row1:col7'])
- salvaged Q27 ('CL/F'=1.83) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=69.6) from results prose — parameter table was unreadable
- salvaged Q22 ('decrease of clearance of dapsone by AZT'=25) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dapsone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- unit re-normalised: CL/F 'liters/h' now converts (value unchanged)
- unit re-normalised: V/F 'liters' now converts (value unchanged)

**Extraction notes:**
- unparsed cell tab_1:row0:col2 = '2 (liters)'
- unparsed cell tab_1:row0:col3 = '3 (h Ϫ1 )'
- unparsed cell tab_1:row1:col5 = 'Ϫ0.119'
- unparsed cell tab_1:row2:col1 = '1.57, 2.09'
- unparsed cell tab_1:row2:col2 = '57.4, 81.8'
- unparsed cell tab_1:row2:col3 = '0.72, 1.36'
- unparsed cell tab_1:row2:col4 = '0.318, 1.074'
- unparsed cell tab_1:row2:col5 = 'Ϫ0.08, Ϫ0.158'
- unparsed cell tab_1:row2:col6 = '20, 46'
- unparsed cell tab_1:row2:col7 = '45, 111'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C2_base_Q27 | fail | 1.83 | 2.01 | 1.0984 | 0.05 | footnote reference category |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.42 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.52 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.84 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.24 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.14 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.14 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.08 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.075 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 0.033 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 19.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 26.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 26.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dapsone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gatti_1996` / `Gatti_1996::reference`)
- model: `../../../knowledgebase/drugs/drug_dapsone/models/modelica/_needs_review/Dapsone_Gatti1996_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dapsone/models/modelica/_needs_review/Dapsone_Gatti1996_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_matlab.zip" download>Dapsone_Gatti1996_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_matlab_simbio.zip" download>Dapsone_Gatti1996_reference_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_sbml.zip" download>Dapsone_Gatti1996_reference_sbml.zip</a> <span class="pk-size">(2.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dapsone/Dapsone_Gatti1996_reference/Dapsone_Gatti1996_reference_cellml.zip" download>Dapsone_Gatti1996_reference_cellml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
