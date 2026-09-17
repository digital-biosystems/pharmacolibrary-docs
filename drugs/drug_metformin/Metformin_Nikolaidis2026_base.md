<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;metformin&quot;,&quot;href&quot;:&quot;drugs/drug_metformin/&quot;},{&quot;label&quot;:&quot;Nikolaidis_2026 \u00b7 base&quot;}]"></div>

# metformin — `Metformin_Nikolaidis2026_base`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got defaulted_parameters: structural deviation not quantified

**Steps:**
1. Read the .deviation.json and confirm each deviation names what changed and why.
2. Anything undocumented needs the engineer, not a curator.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Nikolaidis S; Kosmidis I; Papadopoulos S; Lioupi A; Gandanidou M; Gika H; Dokoumetzidis A; Theodoridis G; Mougios V et al. (2026). British journal of pharmacology 183
  ·  DOI: [10.1111/bph.70208](https://doi.org/10.1111/bph.70208)

## Model component
<dbs-pgx drug="metformin" model-id="Metformin_Nikolaidis2026_base" status="needs_review" stale="false" population="healthy men" measured-compound="metformin" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θka (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | boundary_llm_dim_refused (0.8) | Nikolaidis_2026_table_3:row0:col1 | — | not captured |
| θV/F (L) | `Q76` · V/F | —(suppressed) | L | — | [l] | not captured | llm_confirmed (0.6) | Nikolaidis_2026_table_3:row1:col1 | — | not captured |
| θCL/F (l h−1) | `Q27` · CL/F | —(suppressed) | l h−1 | — | [l] / [h] | not captured | llm_confirmed (0.6) | Nikolaidis_2026_table_3:row4:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Corr ka–V/F' — extend the ontology if this is a real PK parameter (source ['Nikolaidis_2026_table_3:row14:col1'])
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Nikolaidis_2026_table_3:row15:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=metformin
- model-stage split: 'base estimate (rse%) [η-shrinkage%]' is the base model of Nikolaidis_2026 (paper reports 2 stages: base estimate (rse%) [η-shrinkage%], final estimate (rse%) [η-shrinkage%]); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3
- unparsed cell Nikolaidis_2026_table_3:row3:col4 = '−0.40 to −0.33'
- unparsed cell Nikolaidis_2026_table_3:row6:col4 = '−0.29 to −0.28'
- unparsed cell Nikolaidis_2026_table_3:row7:col4 = '−0.19 to −0.17'
- unparsed cell Nikolaidis_2026_table_3:row8:col1 = '0.48 (34.33) [14.6]'
- unparsed cell Nikolaidis_2026_table_3:row8:col2 = '0.48 (30.36) [48.6]'
- unparsed cell Nikolaidis_2026_table_3:row9:col1 = '0.40 (37.77) [29.1]'
- unparsed cell Nikolaidis_2026_table_3:row9:col2 = '0.35 (44.83) [11.7]'
- unparsed cell Nikolaidis_2026_table_3:row10:col1 = '0.17 (32.80) [0.04]'
- unparsed cell Nikolaidis_2026_table_3:row10:col2 = '0.19 (26.99) [3.1]'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nikolaidis_2026_table_3:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Nikolaidis_2026_table_3:row0:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Nikolaidis_2026_table_3:row1:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 71.5 L/h | not captured | not captured | ['Nikolaidis_2026_table_3:row4:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 186 L | not captured | not captured | ['Nikolaidis_2026_table_3:row1:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=metformin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: structural deviation not quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 0.0002114776261619619 | not captured | non-numeric value |
| T1_t_half_terminal | reference | skipped | not captured | 1.9414294680783672 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 2.538134579910103 | not captured | non-numeric value |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nikolaidis_2026` / `Nikolaidis_2026::base`)
- model: `../../../knowledgebase/drugs/drug_metformin/models/modelica/Metformin_Nikolaidis2026_base.mo`
- deviation: `../../../knowledgebase/drugs/drug_metformin/models/modelica/Metformin_Nikolaidis2026_base.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_metformin/models/modelica/Metformin_Nikolaidis2026_base.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_metformin/Metformin_Nikolaidis2026_base/Metformin_Nikolaidis2026_base_modelica.zip" download>Metformin_Nikolaidis2026_base_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_metformin/Metformin_Nikolaidis2026_base/Metformin_Nikolaidis2026_base_matlab.zip" download>Metformin_Nikolaidis2026_base_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_metformin/Metformin_Nikolaidis2026_base/Metformin_Nikolaidis2026_base_matlab_simbio.zip" download>Metformin_Nikolaidis2026_base_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_metformin/Metformin_Nikolaidis2026_base/Metformin_Nikolaidis2026_base_sbml.zip" download>Metformin_Nikolaidis2026_base_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_metformin/Metformin_Nikolaidis2026_base/Metformin_Nikolaidis2026_base_cellml.zip" download>Metformin_Nikolaidis2026_base_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
