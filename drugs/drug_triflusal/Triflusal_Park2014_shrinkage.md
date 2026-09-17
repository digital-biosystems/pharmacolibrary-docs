<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;triflusal&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/&quot;},{&quot;label&quot;:&quot;Park_2014 \u00b7 shrinkage&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triflusal_Park2014_estimates_from_final_model&quot;,&quot;label&quot;:&quot;Park_2014_estimates_from_final_model&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_estimates_from_final_model.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Triflusal_Park2014_estimates_from_final_model&quot;,&quot;label&quot;:&quot;Park_2014_estimates_from_final_model&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_estimates_from_final_model.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Triflusal_Park2014_description_units&quot;,&quot;label&quot;:&quot;Park_2014_description_units&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_description_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Triflusal_Park2014_description_units&quot;,&quot;label&quot;:&quot;Park_2014_description_units&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_description_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Triflusal_Park2014_shrinkage&quot;,&quot;label&quot;:&quot;Park_2014_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Triflusal_Park2014_shrinkage&quot;,&quot;label&quot;:&quot;Park_2014_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_triflusal/Triflusal_Park2014_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

# triflusal — `Triflusal_Park2014_shrinkage`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `triflusal`, measured `HTB`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Park SM; Lee J; Seong SJ; Park JG; Gwon MR; Lim MS; et al. et al. (2014). BMC pharmacology & toxicology 15
  ·  DOI: [10.1186/2050-6511-15-75](https://doi.org/10.1186/2050-6511-15-75)

## Model component
<dbs-pgx drug="triflusal" model-id="Triflusal_Park2014_shrinkage" status="rejected" stale="false" population="healthy Korean male volunteers" measured-compound="HTB" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F — mechanistic, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'ω 1 2'
- dropped value-less row: 'ω 3 2'
- dropped value-less row: 'ω 4 2'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=HTB
- bound model equation to Q27 (CL/F): CL/F = θ 1 * (weight/71.65)^θ4
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- population split: 'shrinkage (%)' subgroup of Park_2014 (paper reports 3 populations: description (units), estimates from final model, shrinkage (%))

**Extraction notes:**
- unparsed cell Tab2:row5:col4 = '0.1998 (0.1995 – 0.2002)'
- unparsed cell Tab2:row6:col4 = '0.840 (0.830 – 0.850)'
- unparsed cell Tab2:row8:col4 = '8.281 (8.267 – 8.295)'
- unparsed cell Tab2:row9:col1 = 'TV of k f (h-1)'
- unparsed cell Tab2:row9:col4 = '0.345 (0.341 – 0.348)'
- unparsed cell Tab2:row11:col4 = '85.19 (84.98 – 85.40)'
- unparsed cell Tab2:row12:col4 = '20.70 (20.32 – 21.08)'
- unparsed cell Tab2:row15:col4 = '14.4 (14.3 – 14.5)'
- unparsed cell Tab2:row16:col4 = '8.6 (8.4 – 8.8)'
- unparsed cell Tab2:row17:col4 = '73.5 (72.8 – 74.1)'
- unparsed cell Tab2:row19:col1 = 'BSV for EC 50'
- unparsed cell Tab2:row19:col4 = '21.4 (21.2 – 21.5)'
- unparsed cell Tab2:row22:col4 = '0.0977 (0.0973 – 0.0981)'
- LLM selected parameter table(s) 2
- captured model equation CL/F = θ 1 * (weight/71.65)^θ4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_triflusal/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Park_2014` / `Park_2014::shrinkage`)


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
