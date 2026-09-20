<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;marstacimab&quot;,&quot;href&quot;:&quot;drugs/drug_marstacimab/&quot;},{&quot;label&quot;:&quot;Nayak_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Marstacimab_Nayak2026_reference&quot;,&quot;label&quot;:&quot;Nayak_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_marstacimab/Marstacimab_Nayak2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# marstacimab — `Marstacimab_Nayak2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

**What is wrong:** the model was built differently from what the record describes. Evidence: T3_param_coverage — expected 6 scholar param(s) emitted or defaulted — got 5 covered

**Steps:**
1. Open the emitted .mo and compare its base class and parameters with the record.
2. Check the .deviation.json beside it for what the engineer defaulted or assumed.
3. A wrong base class or a defaulted core parameter means rebuilding, not curating.

<sub>owner: **engineer** · guidance written by playbook</sub>

## Citation
Nayak S; Suzuki A; Ravva P; Raje S et al. (2026). Clinical pharmacokinetics
  ·  DOI: [10.1007/s40262-026-01695-5](https://doi.org/10.1007/s40262-026-01695-5)

## Model component
<dbs-pgx drug="marstacimab" model-id="Marstacimab_Nayak2026_reference" status="needs_review" stale="false" population="adolescent and adult participants with hemophilia and healthy volunteers" measured-compound="marstacimab" parameterization="mechanistic" topology="3C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Maximum peak TGA, P MAX (nM) 91.4 | `Q32` · Cmax | 12.2 | not captured | not captured | not captured | 13.3 | llm_confirmed (0.6) | tab_6:row5:col1, tab_6:row5:col2, tab_6:row5:col3, tab_6:row5:col4 | — | not captured |
| V c (L) | `Q63` · V1 | 3.61 | L | 0.00361 | L | not captured | space_fold (0.95) | Nayak_2026:other_prose | — | not captured |
| -CL (L/h) | `Q22` · CL | 0.0188 | L/h | 5.222222222222222e-09 | L/h | not captured | boundary (0.8) | Nayak_2026:other_prose | — | not captured |
| -Lag time (h) | `Q83` · tlag | 2 | h | 7200.0 | h | not captured | boundary (0.8) | Nayak_2026:other_prose | — | not captured |
| V p | `Q64` · V2 | 4.99 | L | 0.0049900000000000005 | L | not captured | space_fold (0.95) | Nayak_2026:results_prose | — | not captured |
| total volume of distribution | `Q61` · V | 8.6 | L | 0.0086 | L | not captured | boundary (0.8) | Nayak_2026:results_prose | — | not captured |
| -Q (L/h) | `Q30` · Q | 0.00489 | L/h | 1.3583333333333335e-09 | L/h | not captured | review_gapfill (0.7) | Nayak_2026:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k13', 'k31']

**Interpretation flags:**
- dropped value-less row: 'Parameter'
- dropped PD-category row 'Baseline peak TGA, P BASE (nM) 37.8' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_6:row3:col1', 'tab_6:row3:col2', 'tab_6:row3:col3', 'tab_6:row3:col4'])
- dropped PD-category row 'EC 50 (nM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_6:row4:col1', 'tab_6:row4:col3', 'tab_6:row4:col4'])
- dropped PD-category row 'Hill coefficient (fixed)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_6:row6:col1', 'tab_6:row6:col2', 'tab_6:row6:col3', 'tab_6:row6:col4', 'tab_6:row6:col5'])
- salvaged Q63 ('V c (L)'=3.61) from results prose — parameter table was unreadable
- salvaged Q22 ('-CL (L/h)'=0.0188) from results prose — parameter table was unreadable
- salvaged Q83 ('-Lag time (h)'=2) from results prose — parameter table was unreadable
- salvaged Q64 ('V p'=4.99) from results prose — parameter table was unreadable
- salvaged Q61 ('total volume of distribution'=8.6) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V c (L)); Q22 (-CL (L/h)); Q64 (V p); Q61 (total volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=marstacimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q30 (Q) from Nayak_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_6:row4:col2 = '0.359 12.3'
- unparsed cell tab_6:row8:col2 = '0.0863 32.2'
- unparsed cell tab_6:row9:col2 = '0.0351 16.8'
- unparsed cell tab_6:row10:col2 = '0.0473 33.3'
- companion parameter table 2 transcribed (0 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nayak_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0188 | not captured | not captured | ['Nayak_2026:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0188 L/h | not captured | not captured | ['Nayak_2026:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.6 L | not captured | not captured | ['Nayak_2026:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.61 L | not captured | not captured | ['Nayak_2026:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.99 L | not captured | not captured | ['Nayak_2026:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=marstacimab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 6 scholar param(s) emitted or defaulted | 5 covered | not captured | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | not captured | pass | 3C → PK_3C* | PK_3C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | not captured | 31807.951399360274 | not captured | non-numeric value |
| T1_t_half_terminal | reference | skipped | not captured | 31807.951399360274 | not captured | non-numeric value |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_marstacimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nayak_2026` / `Nayak_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_marstacimab/models/modelica/Marstacimab_Nayak2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_marstacimab/models/modelica/Marstacimab_Nayak2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_marstacimab/models/modelica/Marstacimab_Nayak2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_modelica.zip" download>Marstacimab_Nayak2026_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_matlab.zip" download>Marstacimab_Nayak2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_matlab_simbio.zip" download>Marstacimab_Nayak2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_sbml.zip" download>Marstacimab_Nayak2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_cellml.zip" download>Marstacimab_Nayak2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
