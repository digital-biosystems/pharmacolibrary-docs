<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07F&quot;,&quot;href&quot;:&quot;atc/A07F.md&quot;},{&quot;label&quot;:&quot;escherichia coli&quot;,&quot;href&quot;:&quot;drugs/drug_escherichia_coli/&quot;},{&quot;label&quot;:&quot;Sethuramalingam_2026 \u00b7 children with newly diagnosed acute lymphoblastic leukemia&quot;}]"></div>

# escherichia coli — `EscherichiaColi_Sethuramalingam2026_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `t1/2ka`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** no model exists yet, so there is nothing to judge.

**Steps:**
1. Not a curation fix — scholar limitation.
2. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sethuramalingam S; Mohapatra S; Agarwal PK; Kumar-M P; Hota D; Gopal J; Kulkarni A; Srinivasan A et al. (2026). BMC cancer 26
  ·  DOI: [10.1186/s12885-026-16362-y](https://doi.org/10.1186/s12885-026-16362-y)

## Model component
<dbs-pgx drug="escherichia coli" model-id="EscherichiaColi_Sethuramalingam2026_reference" status="not_modelled" stale="false" population="children with newly diagnosed acute lymphoblastic leukemia" measured-compound="asparaginase" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka_pop (/h) | `Q95` · t1/2ka | —(suppressed) | /h | — | [1] / [h] | not captured | llm (0.6) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Tab3:row3:col4 | — | not captured |
| V_pop (L) | `Q61` · V | —(suppressed) | L | — | [l] | not captured | llm (0.6) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3, Tab3:row4:col4 | — | not captured |
| Cl_pop (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.6) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3, Tab3:row5:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '/h' (t1/2ka )
- dropped unlinked row (NIL): 'beta_V_logtBSA' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col2', 'Tab3:row7:col4'])
- dropped duplicate Q22 ('beta_Cl_logtBSA', value '0.14') — already have one for this compound
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1', 'Tab3:row14:col2', 'Tab3:row14:col3', 'Tab3:row14:col4'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['Tab3:row15:col1', 'Tab3:row15:col2', 'Tab3:row15:col3', 'Tab3:row15:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=asparaginase
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.32 | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.32 L/h | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3', 'Tab3:row5:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.61 L | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3', 'Tab3:row4:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | skipped | 20.46 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 160.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 160.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 20.46 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_escherichia_coli/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sethuramalingam_2026` / `Sethuramalingam_2026::children with newly diagnosed acute lymphoblastic leukemia`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_escherichia_coli/EscherichiaColi_Sethuramalingam2026_reference/EscherichiaColi_Sethuramalingam2026_reference_matlab.zip" download>EscherichiaColi_Sethuramalingam2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_escherichia_coli/EscherichiaColi_Sethuramalingam2026_reference/EscherichiaColi_Sethuramalingam2026_reference_matlab_simbio.zip" download>EscherichiaColi_Sethuramalingam2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_escherichia_coli/EscherichiaColi_Sethuramalingam2026_reference/EscherichiaColi_Sethuramalingam2026_reference_sbml.zip" download>EscherichiaColi_Sethuramalingam2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_escherichia_coli/EscherichiaColi_Sethuramalingam2026_reference/EscherichiaColi_Sethuramalingam2026_reference_cellml.zip" download>EscherichiaColi_Sethuramalingam2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
