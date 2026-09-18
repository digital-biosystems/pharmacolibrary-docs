<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;brexpiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/&quot;},{&quot;label&quot;:&quot;Frederiksen_2023_3 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brexpiprazole_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_reference&quot;,&quot;label&quot;:&quot;Higashi_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Frederiksen2023v3_reference&quot;,&quot;label&quot;:&quot;Frederiksen_2023_3_reference&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brexpiprazole — `Brexpiprazole_Frederiksen2023v3_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
not matched (stem Frederiksen_2023_3)

## Model component
<dbs-pgx drug="brexpiprazole" model-id="Brexpiprazole_Frederiksen2023v3_reference" status="rejected" stale="false" population="healthy subjects and patients" measured-compound="brexpiprazole" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Absorption rate constant fed'
- dropped value-less row: 'Volume of distribution, brexpiprazole central compartment (V2)'
- dropped value-less row: 'Clearance from brexpiprazole to DM-3412 (CLM1)'
- dropped value-less row: 'Clearance from brexpiprazole to DM-3411 (CLM2)'
- dropped value-less row: 'Volume of distribution, DM-3412 central compartment (V4)'
- dropped value-less row: 'Volume of distribution, DM-3412 peripheral compartment (V5)'
- dropped value-less row: 'Inter-compartmental clearance, DM-3412 (QMET)'
- dropped value-less row: 'Clearance from DM-3412 central compartment (CLMET1)'
- dropped value-less row: 'Volume of distribution, DM-3411 central compartment (V6)'
- dropped value-less row: 'Clearance from DM-3411 central compartment (CLMET2)'
- dropped value-less row: 'Body mass index on V6'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brexpiprazole
- topology: 2 first-order transfer(s) across 3 compounds → general_linear

**Extraction notes:**
- unparsed cell tab_1:row0:col3 = '95% CI'
- unparsed cell tab_1:row1:col1 = '1.02 (fixed)'
- unparsed cell tab_1:row1:col2 = '215 (fixed)'
- unparsed cell tab_1:row2:col2 = '215 (fixed)'
- unparsed cell tab_1:row2:col3 = '[0.420; 0.752]'
- unparsed cell tab_1:row3:col1 = '0.411 (fixed)'
- unparsed cell tab_1:row4:col1 = '81.2 (fixed)'
- unparsed cell tab_1:row5:col1 = '40.1 (fixed)'
- unparsed cell tab_1:row5:col2 = '75.3 (fixed)'
- unparsed cell tab_1:row6:col1 = '0.714 (fixed)'
- unparsed cell tab_1:row7:col3 = '[0.0357; 0.0458]'
- unparsed cell tab_1:row8:col3 = '[1.07; 1.15]'
- unparsed cell tab_1:row9:col3 = '[0.420; 2.93]'
- unparsed cell tab_1:row10:col3 = '[30.5; 40.6]'
- unparsed cell tab_1:row11:col3 = '[3.16; 4.43]'
- unparsed cell tab_1:row12:col3 = '[0.672; 0.855]'
- unparsed cell tab_1:row13:col3 = '[2.11; 2.81]'
- unparsed cell tab_1:row14:col3 = '[3.16; 3.40]'
- unparsed cell tab_1:row15:col3 = '[-0.0174; -0.0000303]'
- unparsed cell tab_1:row16:col3 = '[0.0754; 0.116]'
- unparsed cell tab_1:row17:col3 = '[0.0332; 0.0552]'
- unparsed cell tab_1:row18:col3 = '[0.0729; 0.104]'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_brexpiprazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frederiksen_2023_3` / `Frederiksen_2023_3::reference`)


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
