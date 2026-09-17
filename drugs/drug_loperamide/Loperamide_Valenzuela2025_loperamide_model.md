<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/&quot;},{&quot;label&quot;:&quot;Valenzuela_2025 \u00b7 loperamide_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_loperamide_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_loperamide_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_loperamide_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Loperamide_Valenzuela2025_m1_model&quot;,&quot;label&quot;:&quot;Valenzuela_2025_m1_model&quot;,&quot;href&quot;:&quot;drugs/drug_loperamide/Loperamide_Valenzuela2025_m1_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# loperamide — `Loperamide_Valenzuela2025_loperamide_model`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Valenzuela B; Gisleskog PO; Cirillo I; Coenen E; Ariyawansa J; Ali SR; et al. et al. (2025). Clinical and translational science 18
  ·  DOI: [10.1111/cts.70114](https://doi.org/10.1111/cts.70114)

## Model component
<dbs-pgx drug="loperamide" model-id="Loperamide_Valenzuela2025_loperamide_model" status="rejected" stale="false" population="healthy adults" measured-compound="loperamide" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Intercept (msec)' — extend the ontology if this is a real PK parameter (source ['cts70114-tbl-0002:row3:col2'])
- dropped PD-category row 'Slope (msec/ng·mL)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70114-tbl-0002:row4:col2'])
- dropped PD-category row 'k e0 a (h‐1)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70114-tbl-0002:row5:col2'])
- dropped PD-category row 'Effectcentered·baseline (msec)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70114-tbl-0002:row6:col2'])
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['cts70114-tbl-0002:row13:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=loperamide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'loperamide model' subgroup of Valenzuela_2025 (paper reports 4 populations: loperamide, loperamide model, m1, m1 model)

**Extraction notes:**
- unparsed cell cts70114-tbl-0002:row9:col2 = '0.00001 (−)'
- unparsed cell Valenzuela_2025_table_1:row1:col2 = '(5.3)'
- unparsed cell Valenzuela_2025_table_1:row1:col6 = '(5.12)'
- unparsed cell Valenzuela_2025_table_1:row2:col2 = '(6.8)'
- unparsed cell Valenzuela_2025_table_1:row2:col3 = '19.6%'
- unparsed cell Valenzuela_2025_table_1:row2:col4 = '(16.2)'
- unparsed cell Valenzuela_2025_table_1:row2:col6 = '(5.98)'
- unparsed cell Valenzuela_2025_table_1:row2:col7 = '32.3%'
- unparsed cell Valenzuela_2025_table_1:row2:col8 = '(13.3)'
- unparsed cell Valenzuela_2025_table_1:row3:col2 = '(6.2)'
- unparsed cell Valenzuela_2025_table_1:row3:col6 = '(11.2)'
- unparsed cell Valenzuela_2025_table_1:row4:col2 = '(10.9)'
- unparsed cell Valenzuela_2025_table_1:row4:col6 = '(14.7)'
- unparsed cell Valenzuela_2025_table_1:row5:col3 = '43.5%'
- unparsed cell Valenzuela_2025_table_1:row5:col4 = '(7.51)'
- unparsed cell Valenzuela_2025_table_1:row5:col7 = '20.8%'
- unparsed cell Valenzuela_2025_table_1:row5:col8 = '(11.8)'
- unparsed cell Valenzuela_2025_table_1:row6:col2 = '(3.26)'
- unparsed cell Valenzuela_2025_table_1:row6:col6 = '(3.13)'
- unparsed cell Valenzuela_2025_table_1:row7:col2 = '(10.2)'
- unparsed cell Valenzuela_2025_table_1:row7:col3 = '98.6%'
- unparsed cell Valenzuela_2025_table_1:row7:col4 = '(10.9)'
- unparsed cell Valenzuela_2025_table_1:row7:col6 = '(7.98)'
- unparsed cell Valenzuela_2025_table_1:row7:col7 = '40.6%'
- unparsed cell Valenzuela_2025_table_1:row7:col8 = '(11.7)'
- unparsed cell Valenzuela_2025_table_1:row8:col2 = '(12.1)'
- unparsed cell Valenzuela_2025_table_1:row8:col6 = '(12.9)'
- unparsed cell Valenzuela_2025_table_1:row9:col2 = '(14.7)'
- unparsed cell Valenzuela_2025_table_1:row9:col3 = '76.2% a'
- unparsed cell Valenzuela_2025_table_1:row9:col4 = '(9.91)'
- unparsed cell Valenzuela_2025_table_1:row9:col6 = '(12.0)'
- unparsed cell Valenzuela_2025_table_1:row9:col7 = '59.3% a'
- unparsed cell Valenzuela_2025_table_1:row9:col8 = '(9.10)'
- unparsed cell Valenzuela_2025_table_1:row10:col2 = '(10.2)'
- unparsed cell Valenzuela_2025_table_1:row10:col6 = '(6.86)'
- unparsed cell Valenzuela_2025_table_1:row11:col2 = '(4.34)'
- unparsed cell Valenzuela_2025_table_1:row11:col3 = '72.9% a'
- unparsed cell Valenzuela_2025_table_1:row11:col4 = '(9.51)'
- unparsed cell Valenzuela_2025_table_1:row11:col6 = '(10.7)'
- unparsed cell Valenzuela_2025_table_1:row11:col7 = '97.1% a'
- unparsed cell Valenzuela_2025_table_1:row11:col8 = '(9.33)'
- unparsed cell Valenzuela_2025_table_1:row12:col2 = '(5.8)'
- unparsed cell Valenzuela_2025_table_1:row12:col6 = '(4.29)'
- companion parameter table 1 transcribed (24 record(s))
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_loperamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Valenzuela_2025` / `Valenzuela_2025::loperamide_model`)


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
