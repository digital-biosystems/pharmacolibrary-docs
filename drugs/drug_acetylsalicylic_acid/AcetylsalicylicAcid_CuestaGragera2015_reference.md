<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;acetylsalicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/&quot;},{&quot;label&quot;:&quot;Cuesta-Gragera_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AcetylsalicylicAcid_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Zapadniuk1987_reference&quot;,&quot;label&quot;:&quot;Zapadniuk_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Cuny1979_reference&quot;,&quot;label&quot;:&quot;Cuny_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Cuny1979_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Koh2025_reference&quot;,&quot;label&quot;:&quot;Koh_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Shi2008_reference&quot;,&quot;label&quot;:&quot;Shi_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Shi2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_CuestaGragera2015_reference&quot;,&quot;label&quot;:&quot;Cuesta-Gragera_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_CuestaGragera2015_reference.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# acetylsalicylic acid — `AcetylsalicylicAcid_CuestaGragera2015_reference`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span>

### Reviewer guidance

**What is wrong:** the model was built but never simulated

**Steps:**
1. No curator action. Re-run the engineer without --no-simulate.

<sub>owner: **engineer** · guidance written by playbook</sub>

## Citation
Cuesta-Gragera A; Navarro-Fontestad C; Mangas-Sanjuan V; González-Álvarez I; García-Arieta A; Trocóniz IF; et al. et al. (2015). European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 74
  ·  DOI: [10.1016/j.ejps.2015.04.002](https://doi.org/10.1016/j.ejps.2015.04.002)

## Model component
<dbs-pgx drug="acetylsalicylic acid" model-id="AcetylsalicylicAcid_CuestaGragera2015_reference" status="not_simulated" stale="false" population="healthy adults" measured-compound="acetylsalicylic_acid" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Real absorption rate constant (k A ) | `Q49` · kabs | —(suppressed) | h À1 | — | 1/h | not captured | boundary (0.8) | Cuesta-Gragera_2015:other_prose | — | not captured |
| ASA hepatic intrinsic clearance at time 0 (CL i 0H ) | `Q22` · CL | —(suppressed) | L/h | — | L/h | not captured | boundary (0.8) | Cuesta-Gragera_2015:other_prose | — | not captured |
| V TFV (L) | `Q61` · V | —(suppressed) | L | — | L | not captured | review_gapfill (0.7) | Thoueille_2023:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'formula' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Inter-individual variability model' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Inter-occasion variability model' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- salvaged Q49 ('Real absorption rate constant (k A )'=7) from results prose — parameter table was unreadable
- salvaged Q22 ('ASA hepatic intrinsic clearance at time 0 (CL i 0H )'=48.3) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (ASA hepatic intrinsic clearance at time 0 (CL i 0H ))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acetylsalicylic_acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Thoueille_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Thoueille_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 48.3 | not captured | not captured | ['Cuesta-Gragera_2015:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 48.3 L/h | not captured | not captured | ['Cuesta-Gragera_2015:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.39e+03 L | not captured | not captured | ['Thoueille_2023:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_shared_parameters | not captured | pass | 2 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_acetylsalicylic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cuesta-Gragera_2015` / `Cuesta-Gragera_2015::reference`)
- model: `../../../knowledgebase/drugs/drug_acetylsalicylic_acid/models/modelica/AcetylsalicylicAcid_CuestaGragera2015_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_acetylsalicylic_acid/models/modelica/AcetylsalicylicAcid_CuestaGragera2015_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_CuestaGragera2015_reference/AcetylsalicylicAcid_CuestaGragera2015_reference_modelica.zip" download>AcetylsalicylicAcid_CuestaGragera2015_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_CuestaGragera2015_reference/AcetylsalicylicAcid_CuestaGragera2015_reference_matlab.zip" download>AcetylsalicylicAcid_CuestaGragera2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_CuestaGragera2015_reference/AcetylsalicylicAcid_CuestaGragera2015_reference_matlab_simbio.zip" download>AcetylsalicylicAcid_CuestaGragera2015_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_CuestaGragera2015_reference/AcetylsalicylicAcid_CuestaGragera2015_reference_sbml.zip" download>AcetylsalicylicAcid_CuestaGragera2015_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_CuestaGragera2015_reference/AcetylsalicylicAcid_CuestaGragera2015_reference_cellml.zip" download>AcetylsalicylicAcid_CuestaGragera2015_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
