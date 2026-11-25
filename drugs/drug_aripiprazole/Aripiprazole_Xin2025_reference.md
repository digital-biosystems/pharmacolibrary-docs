<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;aripiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/&quot;},{&quot;label&quot;:&quot;Xin_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aripiprazole_Kim2008_final&quot;,&quot;label&quot;:&quot;Kim_2008_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Kim2008_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Simon2015_reference&quot;,&quot;label&quot;:&quot;Simon_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_base&quot;,&quot;label&quot;:&quot;Hermans_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_final&quot;,&quot;label&quot;:&quot;Hermans_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aripiprazole — `Aripiprazole_Xin2025_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="aripiprazole" model-id="Aripiprazole_Xin2025_reference" status="not_simulated" stale="false" population="pediatric tic disorders" measured-compound="aripiprazole" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Xin Y, Gao L, Li S, Wang J, Chen C, Tuo Y et al. Effect of CYP2D6 and ABCB1 polymorphisms on pharmacokinetics and efficacy of aripiprazole in pediatric tic disorders. BMC pediatrics 25(1):495 (2025).
  ·  DOI: [10.1186/s12887-025-05856-6](https://doi.org/10.1186/s12887-025-05856-6)

## Population and dosing

**Population:** pediatric tic disorders · condition tic disorders · age group child.

**Dosing:** 1.25, 2.5, 5, 20 mg/d, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MRAUC0-t | AUCt | 0.34 | ng*h/mL |
| MRCmin | Cmin | 0.41 | ng/mL |
| VARI (L) | V | 110.10 | L |
| VDARI (L) | V | 220.99 | L |
| CLARI (L·h-1) | CL | 1.77 | L·h-1 |
| CLDARI (L·h-1) | CL | 5.62 | L·h-1 |
| DBIL (mol/L) | equation variable | 3.60 | mol/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; t3_topology_template.**

A reported unit could not be converted (AUCt, Cmin and equation variable), so that value has no SI equivalent. Extracted — dehydroaripiprazole: AUCt 0.34 ng*h/mL, Cmin 0.41 ng/mL, V 221 L, CL 5.62 L·h-1; aripiprazole: V 110 L, CL 1.77 L·h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dbil: this record has 3.60, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MRAUC0-t | `Q19` · AUCt | 0.34 | ng*h/mL |  |  | ng*h/mL | llm (0.6) | Xin_2025_table_2:row6:col2 |
| MRCmin | `Q36` · Cmin | 0.41 | ng/mL |  |  | ng/mL | llm (0.6) | Xin_2025_table_2:row7:col2 |
| VARI (L) | `Q61` · V | 110.10 | L | 0.1101 | m3 | l | llm (0.6) | Xin_2025_table_2:row9:col2 |
| VDARI (L) | `Q61` · V | 220.99 | L | 0.221 | m3 | l | exact (1) | Xin_2025_table_2:row10:col2 |
| CLARI (L·h-1) | `Q22` · CL | 1.77 | L·h-1 | 4.917e-07 | m3/s | l/h | exact (1) | Xin_2025_table_2:row11:col2 |
| CLDARI (L·h-1) | `Q22` · CL | 5.62 | L·h-1 | 1.561e-06 | m3/s | l/h | exact (1) | Xin_2025_table_2:row12:col2 |
| DBIL (mol/L) | `Q900` · equation variable | 3.60 | mol/L |  |  | (m·ol)/l | llm (0.6) | Xin_2025_table_2:row17:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age at baseline' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row2:col2'])
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row3:col2'])
- dropped unlinked row (NIL): 'Hight (cm)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row4:col2'])
- dropped unlinked row (NIL): 'MRCmax' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row8:col2'])
- dropped unlinked row (NIL): 'ALT (U/L)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row14:col2'])
- dropped unlinked row (NIL): 'AST (U/L)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row15:col2'])
- dropped unlinked row (NIL): 'TBIL (μmol/L)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row18:col2'])
- dropped unlinked row (NIL): 'CRE (μmol/L)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row19:col2'])
- dropped unlinked row (NIL): 'BUN (mmol/L)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row20:col2'])
- dropped unlinked row (NIL): 'eGFR (mL/min-1.73m2)' — extend the ontology if this is a real PK parameter (source ['Xin_2025_table_2:row21:col2'])
- implicit units: 'MRAUC0-t' → ng*h/mL (from the popPK convention: "MRAUC0-t is the mean of the AUC0-t (Area Under the Curve) values for aripiprazole. The paper describes these as 'MRs' (m")
- implicit units: 'MRCmin' → ng/mL (from the popPK convention: 'MRCmin is the mean of Cmin (minimum drug concentration). The standard unit for plasma concentration of aripiprazole in p')
- metabolite volume: 'VDARI (L)' Q63→Q61 for dehydroaripiprazole — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=aripiprazole
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 4 linked by role; re-tagged parent→dehydroaripiprazole ×5

**Extraction notes:**
- table Tab4: no_numeric_grid
- final table Tab4: no supported point estimates; targeted recovery unresolved
- table Xin_2025_table_2: missing_label
- table Xin_2025_table_2: unbound_uncertainty
- table Xin_2025_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (18 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dbil]` | 3.60 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrauc0-t]` |  | 0.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrauc0-t]` | 0.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrcmax]` |  | 0.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrcmin]` |  | 0.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrcmin]` | 0.41 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Xin_2025_table_2:row6:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Xin_2025_table_2:row11:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Xin_2025_table_2:row12:col2'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Xin_2025_table_2:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Xin_2025_table_2:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Xin_2025_table_2:row10:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.77 | ['Xin_2025_table_2:row11:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.77 L/h | ['Xin_2025_table_2:row11:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.62 L/h | ['Xin_2025_table_2:row12:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 110 L | ['Xin_2025_table_2:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 221 L | ['Xin_2025_table_2:row10:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_shared_parameters |  | pass | 4 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite_central → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| X1_cross_check |  | skipped |  |  | no second reading of this record |
| T1_t_half_beta | reference | skipped | 75 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 94 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference/Aripiprazole_Xin2025_reference_modelica.zip" download>Aripiprazole_Xin2025_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference/Aripiprazole_Xin2025_reference_matlab.zip" download>Aripiprazole_Xin2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference/Aripiprazole_Xin2025_reference_matlab_simbio.zip" download>Aripiprazole_Xin2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference/Aripiprazole_Xin2025_reference_sbml.zip" download>Aripiprazole_Xin2025_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference/Aripiprazole_Xin2025_reference_cellml.zip" download>Aripiprazole_Xin2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Xin Y, Gao L, Li S, Wang J, Chen C, Tuo Y et al. Effect of CYP2D6 and ABCB1 polymorphisms on pharmacokinetics and efficacy of aripiprazole in pediatric tic disorders. BMC pediatrics 25(1):495 (2025). [doi:10.1186/s12887-025-05856-6](https://doi.org/10.1186/s12887-025-05856-6)

**This record:** Pharmacolibrary, model `Aripiprazole_Xin2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference>

```bibtex
@misc{pharmacolibrary_AripiprazoleXin2025reference,
  title  = {{Pharmacolibrary model Aripiprazole_Xin2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference},
  note   = {Parameters from doi:10.1186/s12887-025-05856-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baripiprazole%5D%20Aripiprazole_Xin2025_reference&body=Drug%3A%20aripiprazole%0ARecord%3A%20Aripiprazole_Xin2025_reference%0APaper%3A%20Xin_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aripiprazole/Aripiprazole_Xin2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:34 UTC</sub>
