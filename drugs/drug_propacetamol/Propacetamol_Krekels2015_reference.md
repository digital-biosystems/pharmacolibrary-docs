<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;propacetamol&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/&quot;},{&quot;label&quot;:&quot;Krekels_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propacetamol_Prins2008_reference&quot;,&quot;label&quot;:&quot;Prins_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Prins2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propacetamol_Allegaert2004_reference&quot;,&quot;label&quot;:&quot;Allegaert_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Allegaert2004_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propacetamol_Anderson2005_reference&quot;,&quot;label&quot;:&quot;Anderson_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Anderson2005_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propacetamol_Krekels2015_reference&quot;,&quot;label&quot;:&quot;Krekels_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propacetamol/Propacetamol_Krekels2015_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propacetamol — `Propacetamol_Krekels2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Q`, `equation variable`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
3. Parent/metabolite records commonly miss the formation link.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `propacetamol`, measured `paracetamol`.

## Citation
Krekels EH; van Ham S; Allegaert K; de Hoon J; Tibboel D; Danhof M; et al. et al. (2015). European journal of clinical pharmacology 71
  ·  DOI: [10.1007/s00228-015-1887-y](https://doi.org/10.1007/s00228-015-1887-y)

## Model component
<dbs-pgx drug="propacetamol" model-id="Propacetamol_Krekels2015_reference" status="rejected" stale="false" population="preterm and term neonates and infants" measured-compound="paracetamol" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 (L/kg) | `Q63` · V1 | 1.06 | L/kg | 0.07420000000000002 | [l] / [kg] | 1.05 | exact (1.0) | Tab1:row2:col1, Tab1:row2:col2 | — | not captured |
| CL1 (mL/min/kg) | `Q22` · CL | 0.266 | mL/min/kg | 3.1033333333333337e-07 | [ml] / [[min] · [kg]] | 0.273 | llm (0.6) | Tab1:row4:col1, Tab1:row4:col2 | — | not captured |
| CL2 (mL/min/kgn) | `Q30` · Q | 1.46 | mL/min/kgn | not captured | [ml] / [[min] · [kg] · [n]] | 1.45 | special_case (0.95) | Tab1:row5:col1, Tab1:row5:col2 | — | not captured |
| n | `Q311` · n_transit | 1.40 | not captured | not captured | not captured | 1.41 | llm (0.6) | Tab1:row7:col1, Tab1:row7:col2 | — | not captured |
| P plasma, additive (mg/L) | `Q900` · equation variable | 0.354 | mg/L | not captured | [mg] / [l] | 0.383 | llm (0.6) | Tab1:row16:col1, Tab1:row16:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'model fit (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_unknown: 'mL/min/kgn' (Q)
- dropped duplicate Q22 ('CL4 (mL/min/kg)', value '0.285') — already have one for this compound
- dropped unlinked row (NIL): 'mf' — extend the ontology if this is a real PK parameter (source ['Tab1:row8:col1', 'Tab1:row8:col2'])
- dropped duplicate Q63 ('V1', value '0.0925') — already have one for this compound
- dropped duplicate Q22 ('CL1', value '0.599') — already have one for this compound
- dropped duplicate Q30 ('CL2', value '0.312') — already have one for this compound
- dropped unlinked row (NIL): 'CL4' — extend the ontology if this is a real PK parameter (source ['Tab1:row14:col1', 'Tab1:row14:col2'])
- dropped unlinked row (NIL): 'P plasma, proportional' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col1', 'Tab1:row17:col2'])
- dropped unlinked row (NIL): 'PG urine, additive (mg)' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col1', 'Tab1:row18:col2'])
- dropped unlinked row (NIL): 'P urine , additive (mg)' — extend the ontology if this is a real PK parameter (source ['Tab1:row19:col1', 'Tab1:row19:col2'])
- dropped unlinked row (NIL): 'PS urine, additive (mg)' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col1', 'Tab1:row20:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paracetamol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- review gap-fill skipped: this record measures 'paracetamol', not propacetamol — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row4:col1', 'Tab1:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row2:col1', 'Tab1:row2:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | mL/min/kgn | not captured | not captured | ['Tab1:row5:col1', 'Tab1:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.266 | not captured | not captured | ['Tab1:row4:col1', 'Tab1:row4:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.12 L/h | not captured | not captured | ['Tab1:row4:col1', 'Tab1:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 74.2 L | not captured | not captured | ['Tab1:row2:col1', 'Tab1:row2:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_propacetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Krekels_2015` / `Krekels_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
