<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;ifosfamide&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/&quot;},{&quot;label&quot;:&quot;Valentin_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ifosfamide_Attia2023_reference&quot;,&quot;label&quot;:&quot;Attia_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Attia2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ifosfamide_Kerbusch2001v4_reference&quot;,&quot;label&quot;:&quot;Kerbusch_2001_4_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Kerbusch2001v4_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ifosfamide_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ifosfamide — `Ifosfamide_Valentin2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Valentin T et al., Population pharmacokinetic analysis rev…, European journal of pharmac… (2023)
  ·  DOI: [10.1016/j.ejps.2023.106420](https://doi.org/10.1016/j.ejps.2023.106420)

## Model component
<dbs-pgx drug="ifosfamide" model-id="Ifosfamide_Valentin2023_reference" status="extracted" stale="false" population="adults with soft tissue sarcomas" measured-compound="ifosfamide" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 4.0 | L/h | 1.111111111111111e-06 | L/h | 4.5 | exact (1.0) | Valentin_2023_table_p16_1:row0:col2 | — | not captured |
| Vd | `Q61` · V | 57.5 | L | 0.0575 | L | 3.2 | exact (1.0) | Valentin_2023_table_p16_1:row1:col2 | — | not captured |
| Effect of BSA on CL (θBSA_CL) | `Q319` · allometric_exponent | 1.41 | θBSA_CL | not captured | [cl] · [θbsa_] | 21.4 | llm_corrected (0.6) | Valentin_2023_table_p16_1:row5:col2 | — | not captured |
| Fm23 | `Q45` · fm | 0.55 | not captured | not captured | not captured | 5.6 | exact (1.0) | Valentin_2023_table_p16_1:row6:col2 | — | not captured |
| K20 | `Q47` · kel | 0.14 | 1/h | 3.888888888888889e-05 | 1/h | 7.1 | exact (1.0) | Valentin_2023_table_p16_1:row8:col2 | — | not captured |
| K30 | `Q47` · kel | 0.13 | 1/h | 3.611111111111111e-05 | 1/h | 5.8 | exact (1.0) | Valentin_2023_table_p16_1:row9:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV KENZ' routed out of structural estimates ('IIV IC50')
- table section iiv: 'IIV K20' routed out of structural estimates ('IIV K30')
- table section iiv: 'IOV CL' routed out of structural estimates ('IIV K30')
- table section iiv: 'IOV K20' routed out of structural estimates ('IIV K30')
- column 'final model (%rse) [shrinkage]' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped PD-category row 'IC50' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Valentin_2023_table_p16_1:row2:col2'])
- dropped unlinked row (NIL): 'KENZ' — extend the ontology if this is a real PK parameter (source ['Valentin_2023_table_p16_1:row3:col2'])
- unit_dimension_unknown: 'θBSA_vd' (V)
- dropped duplicate Q61 ('Effect of BSA on Vd (θBSA_vd)', value '1.51') — already have one for this compound
- unit_dimension_unknown: 'θBSA_CL' (allometric_exponent)
- dropped duplicate Q45 ('Fm2', value '0.34') — already have one for this compound
- unit_dimension_unknown: 'θAPR_Fm2' (fm)
- dropped duplicate Q45 ('Effect of aripiprant on Fm2 (θAPR_Fm2)', value '1.06') — already have one for this compound
- implicit units: 'CL' → L/h (from the popPK convention: 'Clearance in population PK models is conventionally expressed in L/h (or mL/min); the value 4.0 is consistent with L/h f')
- implicit units: 'Vd' → L (from the popPK convention: 'Volume of distribution is conventionally expressed in L; the value 57.5 is consistent with L.')
- implicit units: 'K20' → 1/h (from the popPK convention: 'First-order elimination rate constants are conventionally expressed in 1/h; the value 0.14 is consistent with 1/h.')
- implicit units: 'K30' → 1/h (from the popPK convention: 'First-order elimination rate constants are conventionally expressed in 1/h; the value 0.13 is consistent with 1/h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ifosfamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 6 linked by role; re-tagged parent→2-dechloroifosfamide ×6, parent→3-dechloroifosfamide ×1
- molar mass: no plausible PubChem entry for '2-dechloroifosfamide' ('2-dechloroifosfamide') — left in mass units
- molar mass: no plausible PubChem entry for '3-dechloroifosfamide' ('3-dechloroifosfamide') — left in mass units
- molar mass: none found for '2-dechloroifosfamide' — its concentrations stay mass-only
- molar mass: none found for '3-dechloroifosfamide' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Valentin_2023_table_p16_1:row0:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Valentin_2023_table_p16_1:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Valentin_2023_table_p16_1:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Valentin_2023_table_p16_1:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.0 | not captured | not captured | ['Valentin_2023_table_p16_1:row0:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4 L/h | not captured | not captured | ['Valentin_2023_table_p16_1:row0:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 57.5 L | not captured | not captured | ['Valentin_2023_table_p16_1:row1:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ifosfamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Valentin_2023` / `Valentin_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_modelica.zip" download>Ifosfamide_Valentin2023_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_matlab.zip" download>Ifosfamide_Valentin2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_matlab_simbio.zip" download>Ifosfamide_Valentin2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_sbml.zip" download>Ifosfamide_Valentin2023_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_cellml.zip" download>Ifosfamide_Valentin2023_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:22 UTC</sub>
