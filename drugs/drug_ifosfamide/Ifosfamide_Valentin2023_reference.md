<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;ifosfamide&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/&quot;},{&quot;label&quot;:&quot;Valentin_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ifosfamide_Attia2023_reference&quot;,&quot;label&quot;:&quot;Attia_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Attia2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ifosfamide_Kerbusch2001v4_reference&quot;,&quot;label&quot;:&quot;Kerbusch_2001_4_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Kerbusch2001v4_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ifosfamide_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ifosfamide — `Ifosfamide_Valentin2023_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="ifosfamide" model-id="Ifosfamide_Valentin2023_reference" status="not_simulated" stale="false" population="adults with soft tissue sarcomas" measured-compound="ifosfamide" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Valentin T, Lambert M, Chaltiel L, Allal B, Mseddi M, Yakoubi M et al. Population pharmacokinetic analysis reveals no impact of aprepitant on the pharmacokinetics of ifosfamide, 2-dechloroifosfamide, and 3-dechloroifosfamide. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 185:106420 (2023).
  ·  DOI: [10.1016/j.ejps.2023.106420](https://doi.org/10.1016/j.ejps.2023.106420)

## Population and dosing

**Population:** adults with soft tissue sarcomas · condition soft tissue sarcomas · age group adult · n = # List each parent-&gt;metabolite (or interconversion) link on its own line under 'links', one per line, as:
#   - from | to | relation | link_parameter
# where relation = metabolism | hydrolysis | interconversion
#       link_parameter = Kfm | Fm | formation clearance | none
# If there are no links, write 'links: none' on a single line.
links:
  -.

**Dosing:** 6000, 9000 mg/m2, iv, multiple, every 24 h.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL | CL | 4.0 | L/h | 4.5 |
| Vd | V | 57.5 | L | 3.2 |
| Effect of BSA on CL (θBSA_CL) | allometric_exponent | 1.41 | θBSA_CL | 21.4 |
| Fm23 | fm | 0.55 |  | 5.6 |
| K20 | kel | 0.14 | 1/h | 7.1 |
| K30 | kel | 0.13 | 1/h | 5.8 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet.**

A reported unit could not be converted (allometric_exponent), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of effect of bsa on cl: this record has 1.41, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 4.0 | L/h | 1.111e-06 | m3/s | L/h | 4.5 | exact (1) | Valentin_2023_table_p16_1:row0:col2 |
| Vd | `Q61` · V | 57.5 | L | 0.0575 | m3 | L | 3.2 | exact (1) | Valentin_2023_table_p16_1:row1:col2 |
| Effect of BSA on CL (θBSA_CL) | `Q319` · allometric_exponent | 1.41 | θBSA_CL |  |  | cl·θbsa_ | 21.4 | llm_corrected (0.6) | Valentin_2023_table_p16_1:row5:col2 |
| Fm23 | `Q45` · fm | 0.55 |  |  |  |  | 5.6 | exact (1) | Valentin_2023_table_p16_1:row6:col2 |
| K20 | `Q47` · kel | 0.14 | 1/h | 3.889e-05 | 1/s | 1/h | 7.1 | exact (1) | Valentin_2023_table_p16_1:row8:col2 |
| K30 | `Q47` · kel | 0.13 | 1/h | 3.611e-05 | 1/s | 1/h | 5.8 | exact (1) | Valentin_2023_table_p16_1:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect of bsa on cl]` | 1.41 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm23]` |  | 0.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm23]` | 0.55 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm2]` |  | 0.34 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Valentin_2023_table_p16_1:row0:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Valentin_2023_table_p16_1:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Valentin_2023_table_p16_1:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Valentin_2023_table_p16_1:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4 | ['Valentin_2023_table_p16_1:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4 L/h | ['Valentin_2023_table_p16_1:row0:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 57.5 L | ['Valentin_2023_table_p16_1:row1:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_shared_parameters | pass | 3 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_modelica.zip" download>Ifosfamide_Valentin2023_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_matlab.zip" download>Ifosfamide_Valentin2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_matlab_simbio.zip" download>Ifosfamide_Valentin2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_sbml.zip" download>Ifosfamide_Valentin2023_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference/Ifosfamide_Valentin2023_reference_cellml.zip" download>Ifosfamide_Valentin2023_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Valentin T, Lambert M, Chaltiel L, Allal B, Mseddi M, Yakoubi M et al. Population pharmacokinetic analysis reveals no impact of aprepitant on the pharmacokinetics of ifosfamide, 2-dechloroifosfamide, and 3-dechloroifosfamide. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 185:106420 (2023). [doi:10.1016/j.ejps.2023.106420](https://doi.org/10.1016/j.ejps.2023.106420)

**This record:** Pharmacolibrary v26.09, model `Ifosfamide_Valentin2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference>

```bibtex
@misc{pharmacolibrary_IfosfamideValentin2023reference,
  title  = {{Pharmacolibrary model Ifosfamide_Valentin2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference},
  note   = {Parameters from doi:10.1016/j.ejps.2023.106420},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bifosfamide%5D%20Ifosfamide_Valentin2023_reference&body=Drug%3A%20ifosfamide%0ARecord%3A%20Ifosfamide_Valentin2023_reference%0APaper%3A%20Valentin_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:22 UTC</sub>
