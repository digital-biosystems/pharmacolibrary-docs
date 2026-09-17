<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/&quot;},{&quot;label&quot;:&quot;Savic_2017 \u00b7 reference&quot;}]"></div>

# cladribine — `Cladribine_Savic2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Savic RM; Novakovic AM; Ekblom M; Munafo A; Karlsson MO et al. (2017). Clinical pharmacokinetics 56
  ·  DOI: [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6)

## Model component
<dbs-pgx drug="cladribine" model-id="Cladribine_Savic2017_reference" status="rejected" stale="false" population="patients with multiple sclerosis" measured-compound="cladribine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLR coefficientb (typical patient with CLCR = 6.31), L/hc | `Q26` · CLR | —(suppressed) | not captured | — | not captured | 9.26 | llm_confirmed (0.6) | Tab4:row2:col1, Tab4:row2:col2 | — | not captured |
| CLNR, L/h | `Q79` · CLNR | —(suppressed) | not captured | — | not captured | 9.58 | llm_confirmed (0.6) | Tab4:row3:col1, Tab4:row3:col2 | — | 0.00574 (64.41% RSE) |
| Central volume, L | `Q63` · V1 | —(suppressed) | not captured | — | not captured | 22.77 | llm_confirmed (0.6) | Tab4:row4:col1, Tab4:row4:col2 | — | not captured |
| Intercompartmental Q3, L/h | `Q308` · Q3 | —(suppressed) | not captured | — | not captured | 7.73 | llm_confirmed (0.6) | Tab4:row5:col1, Tab4:row5:col2 | — | not captured |
| Intercompartmental Q4, L/h | `Q30` · Q | —(suppressed) | not captured | — | not captured | 19.06 | llm (0.6) | Tab4:row6:col1, Tab4:row6:col2 | — | not captured |
| Peripheral volume V3, L | `Q77` · V3 | —(suppressed) | not captured | — | not captured | 6.07 | llm_corrected (0.6) | Tab4:row7:col1, Tab4:row7:col2 | — | 0.0365 (28.47% RSE) |
| Absorption rate constant, h−1 | `Q49` · kabs | —(suppressed) | not captured | — | not captured | 21.14 | llm_confirmed (0.6) | Tab4:row9:col1, Tab4:row9:col2 | — | 0.102 (62.53% RSE) |
| Bioavailability | `Q40` · Fab | —(suppressed) | not captured | — | not captured | 7.03 | exact (1.0) | Tab4:row11:col1, Tab4:row11:col2 | — | not captured |
| Mean transit time (fed state), h | `Q81` · MTT | —(suppressed) | not captured | — | not captured | 11.03 | llm_confirmed (0.6) | Tab4:row14:col1, Tab4:row14:col2 | — | not captured |
| Number of transit compartments | `Q311` · n_transit | —(suppressed) | not captured | — | not captured | 27.15 | exact (1.0) | Tab4:row15:col1, Tab4:row15:col2 | — | not captured |
| CLR e (Vmax), μg/h | `Q66` · Vmax | —(suppressed) | not captured | — | not captured | 25.53 | llm_confirmed (0.6) | Tab4:row29:col1, Tab4:row29:col2 | — | not captured |
| CLR e (Km), ng/L | `Q1` · Km | —(suppressed) | not captured | — | not captured | 58.14 | llm_corrected (0.6) | Tab4:row30:col1, Tab4:row30:col2 | — | not captured |
| Apparent hepatic CL, L/hf | `Q25` · CLH | —(suppressed) | not captured | — | not captured | 10.64 | llm_corrected (0.6) | Tab4:row31:col1, Tab4:row31:col2 | — | not captured |
| Apparent central volume V, Lf | `Q290` · V1/F | —(suppressed) | not captured | — | not captured | 13.27 | llm_confirmed (0.6) | Tab4:row32:col1, Tab4:row32:col2 | — | not captured |
| theta_q83_category | `Q900` · theta_q83_category | —(suppressed) | not captured | — | not captured | 12.41 | not captured (not captured) | Tab4:row13:col1, Tab4:row13:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q77 ('Peripheral volume V4, L', value '89.5') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant (unknown/fed state), h−1', value '1.03') — already have one for this compound
- dropped duplicate Q79 ('Fold increase in CLNR in the presence of IFNβ-1a', value '1.21') — already have one for this compound
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cladribine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.456 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cladribine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2017` / `Savic_2017::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
