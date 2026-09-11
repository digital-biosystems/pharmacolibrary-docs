# paracetamol — `Paracetamol_Wu2025_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wu Y; Völler S; Goulooze SC; Allegaert K; Sherwin CMT; van Rongen A; et al. et al. (2025). Journal of clinical pharmacology 65
  ·  DOI: [10.1002/jcph.70080](https://doi.org/10.1002/jcph.70080)

## Model component
<dbs-pgx drug="paracetamol" model-id="Paracetamol_Wu2025_reference" status="not_modelled" stale="false" population="preterm and term neonates, infants, children, and adults" measured-compound="paracetamol" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θBWc | `Q900` · θBWc | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θGAPNA50 | `Q900` · θGAPNA50 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θBWb | `Q900` · θBWb | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| volume of distribution | `Q61` · V | —(suppressed) | liters | — | L | not captured | review_gapfill (0.7) | Albert_1984:review | — | not captured |
| Tlag | `Q83` · tlag | —(suppressed) | min | — | h | not captured | review_gapfill (0.7) | Gibb_2008:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |
| CLformation,GLU(Lh)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill | Q22 | not captured | llm_corrected |
| CLr,SULF(L/h)=fSULF×GFR+CLsecretion,SULF CLsecretion,SULF=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill | Q26 | not captured | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- kept covariate coefficient θBWc=0.738 (covariate BWc) — not an ontology parameter
- dropped duplicate Q22 ('CLformation,SULF(L/h)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill', value None) — already have one for this compound
- kept covariate coefficient θGAPNA50=0 (covariate GAPNA50) — not an ontology parameter
- dropped duplicate Q22 ('CLformation,OXI(L/h)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill', value None) — already have one for this compound
- dropped unlinked row (NIL): 'TVCLbirth' — extend the ontology if this is a real PK parameter (source ['jcph70080-tbl-0003:row53:col1'])
- kept covariate coefficient θBWb=0 (covariate BWb) — not an ontology parameter
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph70080-tbl-0003:row59:col1'])
- dropped value-less row: 'Correction factor for urine volume'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paracetamol
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- gap-filled Q61 (V) from Albert_1984's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Gibb_2008's review values (primary lacked it)

**Extraction notes:**
- unparsed cell jcph70080-tbl-0003:row7:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row13:col1 = '0.96 FIXED a'
- unparsed cell jcph70080-tbl-0003:row13:col3 = '0.96 (0.96‐0.96)'
- unparsed cell jcph70080-tbl-0003:row20:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row29:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row31:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row38:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row40:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row53:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row54:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row56:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row59:col3 = '1 (1‐1)'
- unparsed cell jcph70080-tbl-0003:row69:col1 = '3.068 (8%)'
- unparsed cell jcph70080-tbl-0003:row69:col3 = '2.99 (2.32‐4.2)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Albert_1984:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Gibb_2008:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.35 L | not captured | not captured | ['Albert_1984:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wu_2025` / `Wu_2025::preterm and term neonates, infants, children, and adults`)


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
