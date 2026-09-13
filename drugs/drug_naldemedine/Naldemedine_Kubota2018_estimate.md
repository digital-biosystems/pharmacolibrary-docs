<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naldemedine&quot;,&quot;href&quot;:&quot;drugs/drug_naldemedine/&quot;},{&quot;label&quot;:&quot;Kubota_2018 \u00b7 estimate&quot;}]"></div>

# naldemedine — `Naldemedine_Kubota2018_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kubota R; Fukumura K; Wajima T et al. (2018). Pharmaceutical research 35
  ·  DOI: [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7)

## Model component
<dbs-pgx drug="naldemedine" model-id="Naldemedine_Kubota2018_estimate" status="extracted" stale="false" population="healthy subjects, patients with chronic non-cancer pain and OIC, and cancer patients with OIC" measured-compound="naldemedine" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| THETA (2) | `Q900` · equation variable | -0.195 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row4:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 83.6 | L | 0.0836 | [l] | not captured | exact (1.0) | Tab3:row8:col1, Kubota_2018_table_S2:row2:col1, Kubota_2018_table_S2:row2:col5 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 4.77 | L/h | 1.325e-06 | [l] / [h] | not captured | exact (1.0) | Tab3:row16:col1 | — | not captured |
| Vp/F | `Q82` · V2/F | 37.7 | not captured | not captured | not captured | not captured | exact (1.0) | Tab3:row17:col1, Tab3:row24:col1, Kubota_2018_table_S2:row12:col1, Kubota_2018_table_S2:row12:col5 | — | not captured |
| ALAG (hr) | `Q83` · tlag | 0.195 | hr | 702.0 | [h] | not captured | exact (1.0) | Tab3:row18:col1, Kubota_2018_table_S2:row6:col1, Kubota_2018_table_S2:row6:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F (L/h) | Q27 | not captured | exact |
| Ka (hr−1) | Q49 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'THETA (1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col1'])
- dropped unlinked row (NIL): 'THETA (3)' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1'])
- dropped unlinked row (NIL): 'THETA (4)' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col1'])
- dropped unlinked row (NIL): 'THETA (5)' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1'])
- dropped unlinked row (NIL): 'THETA (6)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1'])
- dropped unlinked row (NIL): 'THETA (7)' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1'])
- dropped unlinked row (NIL): 'THETA (8)' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1'])
- dropped unlinked row (NIL): 'THETA (9)' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1'])
- dropped unlinked row (NIL): 'THETA (10)' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1'])
- dropped unlinked row (NIL): 'THETA (11)' — extend the ontology if this is a real PK parameter (source ['Tab3:row15:col1'])
- dropped duplicate Q27 ('CL/F', value '40.5') — already have one for this compound
- dropped duplicate Q290 ('Vc/F', value '38.5') — already have one for this compound
- dropped duplicate Q49 ('Ka', value '168.2') — already have one for this compound
- dropped duplicate Q69 ('Q/F', value '50.5') — already have one for this compound
- routed 'proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q27 ('CL/F (L/hr)', value '8.20') — already have one for this compound
- dropped duplicate Q49 ('Ka (hr-1)', value '3.81') — already have one for this compound
- dropped duplicate Q69 ('Q/F (L/hr)', value '5.02') — already have one for this compound
- dropped duplicate Q82 ('Vp/F (L)', value '43.2') — already have one for this compound
- dropped unlinked row (NIL): 'Dose(mg)' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row0:col3', 'Kubota_2018_table_S3:row0:col6'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row1:col3', 'Kubota_2018_table_S3:row1:col6'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row2:col3', 'Kubota_2018_table_S3:row2:col6'])
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row3:col3', 'Kubota_2018_table_S3:row3:col6'])
- dropped unlinked row (NIL): 'CV%' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row4:col3', 'Kubota_2018_table_S3:row4:col6'])
- dropped unlinked row (NIL): 'Max' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row5:col3', 'Kubota_2018_table_S3:row5:col6'])
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row6:col3', 'Kubota_2018_table_S3:row6:col6'])
- dropped unlinked row (NIL): 'Min' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row7:col3', 'Kubota_2018_table_S3:row7:col6'])
- dropped unlinked row (NIL): 'Geometric Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row8:col3', 'Kubota_2018_table_S3:row8:col6'])
- dropped unlinked row (NIL): 'CV% Geometric Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row9:col3', 'Kubota_2018_table_S3:row9:col6'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row2:col5', 'Kubota_2018_table_S4:row2:col6', 'Kubota_2018_table_S4:row2:col8', 'Kubota_2018_table_S4:row2:col9', 'Kubota_2018_table_S4:row2:col10'])
- dropped unlinked row (NIL): 'Gender' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row6:col5', 'Kubota_2018_table_S4:row6:col6', 'Kubota_2018_table_S4:row6:col8', 'Kubota_2018_table_S4:row6:col9', 'Kubota_2018_table_S4:row6:col10'])
- dropped unlinked row (NIL): 'Race' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row8:col5', 'Kubota_2018_table_S4:row8:col6', 'Kubota_2018_table_S4:row8:col8'])
- dropped unlinked row (NIL): 'Health status' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row13:col5', 'Kubota_2018_table_S4:row13:col6', 'Kubota_2018_table_S4:row13:col8'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=naldemedine
- bound model equation to Q27 (CL/F): CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- bound model equation to Q49 (kabs): Ka = THETA (10) * (Age/52) ** THETA (11)
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F (L/h)'; equation kept verbatim
- Q49 (kabs) is equation-defined: value moved to equation-variable 'Ka (hr−1)'; equation kept verbatim
- population split: 'estimate' subgroup of Kubota_2018 (paper reports 5 populations: 1107v9221(phase 2b), 1314v9231_1315v9232(phase 3), cl/f (l/hr), estimate, shrinkage)

**Extraction notes:**
- companion parameter table S2 transcribed (42 record(s), model stage 'base')
- companion parameter table S3 transcribed (40 record(s))
- unparsed cell Kubota_2018_table_S4:row2:col1 = '&lt; 65'
- companion parameter table S4 transcribed (20 record(s))
- LLM selected parameter table(s) 3, S2, S3, S4
- captured model equation CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- captured model equation Ka = THETA (10) * (Age/52) ** THETA (11)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1', 'Kubota_2018_table_S2:row2:col1', 'Kubota_2018_table_S2:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row13:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row16:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row18:col1', 'Kubota_2018_table_S2:row6:col1', 'Kubota_2018_table_S2:row6:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 83.6 L | not captured | not captured | ['Tab3:row8:col1', 'Kubota_2018_table_S2:row2:col1', 'Kubota_2018_table_S2:row2:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_naldemedine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kubota_2018` / `Kubota_2018::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
