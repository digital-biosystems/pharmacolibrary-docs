# paracetamol — `Paracetamol_Hannam2018_clacet_l_h_70_kg_1`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hannam JA; Anderson BJ; Potts A et al. (2018). Paediatric anaesthesia 28
  ·  DOI: [10.1111/pan.13464](https://doi.org/10.1111/pan.13464)

## Model component
<dbs-pgx drug="paracetamol" model-id="Paracetamol_Hannam2018_clacet_l_h_70_kg_1" status="extracted" stale="false" population="children undergoing adenotonsillectomy" measured-compound="acetaminophen, ibuprofen, tramadol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL ACET (L/h.70 kg -1 ) | `Q22` · CL | 13.2 | L/h.70 kg -1 | 0.00025666666666666665 | L/h | not captured | boundary (0.8) | Hannam_2018:other_prose | — | not captured |
| volume of distribution | `Q61` · V | 6.35 | liters | 0.00635 | L | not captured | review_gapfill (0.7) | Albert_1984:review | — | not captured |
| Tlag | `Q83` · tlag | 4.2 | min | 252.0 | h | not captured | review_gapfill (0.7) | Gibb_2008:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Estimate' — extend the ontology if this is a real PK parameter (source ['Hannam_2018_table_p4_1:row0:col1'])
- routed 'PPV' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped diagnostic row 'Shrinkage%' → Q318 (shrinkage) — reported statistic, not a parameter
- salvaged Q22 ('CL ACET (L/h.70 kg -1 )'=13.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acetaminophen, ibuprofen, tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'clacet (l/h.70 kg-1)' subgroup of Hannam_2018 (paper reports 4 populations: clacet (l/h.70 kg-1), erradd.acet (mg/l), tabsacet (h), vacet (l.70 kg-1))
- gap-filled Q61 (V) from Albert_1984's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Gibb_2008's review values (primary lacked it)

**Extraction notes:**
- transposed table Hannam_2018_table_p4_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 0.34 | 0.333 | 0.9794 | 0.25 | reported t½β |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Albert_1984:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Gibb_2008:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.2 | not captured | not captured | ['Hannam_2018:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 924 L/h | not captured | not captured | ['Hannam_2018:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.35 L | not captured | not captured | ['Albert_1984:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hannam_2018` / `Hannam_2018::clacet_l_h_70_kg_1`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_paracetamol/Paracetamol_Hannam2018_clacet_l_h_70_kg_1/Paracetamol_Hannam2018_clacet_l_h_70_kg_1_modelica.zip" download>Paracetamol_Hannam2018_clacet_l_h_70_kg_1_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_paracetamol/Paracetamol_Hannam2018_clacet_l_h_70_kg_1/Paracetamol_Hannam2018_clacet_l_h_70_kg_1_fmi.zip" download>Paracetamol_Hannam2018_clacet_l_h_70_kg_1_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Hannam2018_clacet_l_h_70_kg_1/Paracetamol_Hannam2018_clacet_l_h_70_kg_1_matlab.zip" download>Paracetamol_Hannam2018_clacet_l_h_70_kg_1_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Hannam2018_clacet_l_h_70_kg_1/Paracetamol_Hannam2018_clacet_l_h_70_kg_1_matlab_simbio.zip" download>Paracetamol_Hannam2018_clacet_l_h_70_kg_1_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Hannam2018_clacet_l_h_70_kg_1/Paracetamol_Hannam2018_clacet_l_h_70_kg_1_sbml.zip" download>Paracetamol_Hannam2018_clacet_l_h_70_kg_1_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paracetamol/Paracetamol_Hannam2018_clacet_l_h_70_kg_1/Paracetamol_Hannam2018_clacet_l_h_70_kg_1_cellml.zip" download>Paracetamol_Hannam2018_clacet_l_h_70_kg_1_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
