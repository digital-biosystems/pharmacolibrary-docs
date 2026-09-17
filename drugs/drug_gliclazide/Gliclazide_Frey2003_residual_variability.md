<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gliclazide&quot;,&quot;href&quot;:&quot;drugs/drug_gliclazide/&quot;},{&quot;label&quot;:&quot;Frey_2003 \u00b7 residual_variability&quot;}]"></div>

# gliclazide — `Gliclazide_Frey2003_residual_variability`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `AUCt`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** every check the reviewer could run passed.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **scholar** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Frey N; Laveille C; Paraire M; Francillard M; Holford NH; Jochemsen R et al. (2003). British journal of clinical pharmacology 55
  ·  DOI: [10.1046/j.1365-2125.2003.01751.x](https://doi.org/10.1046/j.1365-2125.2003.01751.x)

## Model component
<dbs-pgx drug="gliclazide" model-id="Gliclazide_Frey2003_residual_variability" status="curated_candidate" stale="false" population="Type 2 diabetic patients" measured-compound="gliclazide" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Gliclazide AUC 50 (mg.h ml -1 ) | `Q19` · AUCt | 47 | mg.h ml -1 | not captured | [[h] · [mg]] / [ml] | not captured | llm_corrected (0.6) | tab_1:row9:col2, tab_1:row9:col4 | — | not captured |
| apparent clearance | `Q27` · CL/F | 15 | ml min -1 | 2.5e-07 | L/h | not captured | exact (1.0) | Frey_2003:results_prose | — | not captured |
| apparent volume of distribution | `Q76` · V/F | 19 | l | 0.019 | L | not captured | exact (1.0) | Frey_2003:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Baseline FPG (mmol l -1 )' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col4'])
- dropped unlinked row (NIL): 'Diet alone' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col2', 'tab_1:row15:col2'])
- dropped unlinked row (NIL): '1 OHA class' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col2', 'tab_1:row16:col2'])
- dropped unlinked row (NIL): '2 OHA classes' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col2', 'tab_1:row17:col2'])
- dropped PD-category row 'E max (% of baseline FPG)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row8:col2', 'tab_1:row8:col4'])
- dropped PD-category row 'Rate constant of equilibration k eq (day -1 )' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row10:col2', 'tab_1:row10:col4'])
- dropped PD-category row 'Constant rate of disease progression in' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_1:row12:col2', 'tab_1:row12:col4'])
- dropped unlinked row (NIL): 'Responders' — extend the ontology if this is a real PK parameter (source ['tab_1:row19:col5', 'tab_1:row19:col6'])
- dropped unlinked row (NIL): 'Nonresponders' — extend the ontology if this is a real PK parameter (source ['tab_1:row20:col5', 'tab_1:row20:col6'])
- salvaged Q27 ('apparent clearance'=15) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution'=19) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=gliclazide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'residual variability' subgroup of Frey_2003 (paper reports 3 populations: intersubject variability, parameters, residual variability)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_1:row4:col3 = '1 7'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col2', 'tab_1:row9:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.9 L/h | not captured | not captured | ['Frey_2003:results_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 19 L | not captured | not captured | ['Frey_2003:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=gliclazide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 16.0 | 14.63325368165313 | 0.9146 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gliclazide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frey_2003` / `Frey_2003::residual_variability`)
- model: `../../../knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_residual_variability.mo`
- deviation: `../../../knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_residual_variability.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_gliclazide/models/modelica/Gliclazide_Frey2003_residual_variability.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_gliclazide/Gliclazide_Frey2003_residual_variability/Gliclazide_Frey2003_residual_variability_modelica.zip" download>Gliclazide_Frey2003_residual_variability_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_gliclazide/Gliclazide_Frey2003_residual_variability/Gliclazide_Frey2003_residual_variability_matlab.zip" download>Gliclazide_Frey2003_residual_variability_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_gliclazide/Gliclazide_Frey2003_residual_variability/Gliclazide_Frey2003_residual_variability_matlab_simbio.zip" download>Gliclazide_Frey2003_residual_variability_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_gliclazide/Gliclazide_Frey2003_residual_variability/Gliclazide_Frey2003_residual_variability_sbml.zip" download>Gliclazide_Frey2003_residual_variability_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_gliclazide/Gliclazide_Frey2003_residual_variability/Gliclazide_Frey2003_residual_variability_cellml.zip" download>Gliclazide_Frey2003_residual_variability_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
