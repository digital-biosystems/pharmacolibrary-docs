<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Thiamine&quot;,&quot;href&quot;:&quot;drugs/toxin_thiamine/&quot;},{&quot;label&quot;:&quot;Sheng_2021 \u00b7 sad_600_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiamine_Smithline2012_thiamine_dose_100_mg&quot;,&quot;label&quot;:&quot;Smithline_2012_thiamine_dose_100_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiamine/Thiamine_Smithline2012_thiamine_dose_100_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Thiamine — `Thiamine_Sheng2021_sad_600_mg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record lacks thiamine-specific clearance, volume, and absorption parameters; all extracted values describe thiamine monophosphate, causing model quarantine.

<div class="pk-model-meta" hidden drug="Thiamine" model-id="Thiamine_Sheng2021_sad_600_mg" status="model_quarantined" stale="false" population="healthy subjects" measured-compound="thiamine" parameterization="apparent" topology="1C"></div>

## Citation
Sheng L, Cao W, Lin P, Chen W, Xu H, Zhong C et al. Safety, Tolerability and Pharmacokinetics of Single and Multiple Ascending Doses of Benfotiamine in Healthy Subjects. Drug design, development and therapy 15:1101–1110 (2021).
  ·  DOI: [10.2147/DDDT.S296197](https://doi.org/10.2147/DDDT.S296197)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult.

**Dosing:** 150, 300, 600 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed benfotiamine, measured thiamine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| TM | equation variable | 14399.1 |  |
| Cmax, ng/mL | Cmax | 2607 | ng/mL |
| Tmax, h | tmax | 1.5 | h |
| t1/2, h | t1/2z | 6.3 | h |
| CL/F, L/h | CL/F | 35.4 | L/h |
| Vd/F, L | V/F | 324 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record lacks thiamine-specific clearance, volume, and absorption parameters; all extracted values describe thiamine monophosphate, causing model quarantine.**

Although the model targets thiamine, the reported pharmacokinetic parameters (clearance 35.4 L/h, volume 324 L, Cmax 2607 ng/mL) explicitly correspond to thiamine monophosphate. Consequently, the thiamine-specific absorption rate constant, lag time, clearance, and volume of distribution were not estimated and remained at library defaults. The model was quarantined to prevent publication with placeholder values instead of patient-specific estimates for the target analyte. Extracted — thiamine monophosphate: Cmax 2.61e+03 ng/mL, tmax 1.5 h, t1/2z 6.3 h, CL/F 35.4 L/h, V/F 324 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| TM | `Q900` · equation variable | 14399.1 |  | 1.44e+04 |  |  | llm (0.6) | t0003:row2:col4 |
| Cmax, ng/mL | `Q32` · Cmax | 2607 | ng/mL | 0.002607 | kg/m3 | ng/ml | exact (1) | t0003:row3:col4, t0003:row9:col4, t0003:row15:col4 |
| Tmax, h | `Q56` · tmax | 1.5 | h | 5400 | s | h | exact (1) | t0003:row4:col4, t0003:row10:col4, t0003:row16:col4 |
| t1/2, h | `Q57` · t1/2z | 6.3 | h | 2.268e+04 | s | h | half_life_rule (0.95) | t0003:row5:col4, t0003:row11:col4, t0003:row17:col4 |
| CL/F, L/h | `Q27` · CL/F | 35.4 | L/h | 9.833e-06 | m3/s | l/h | exact (1) | t0003:row6:col4, t0003:row12:col4, t0003:row18:col4 |
| Vd/F, L | `Q76` · V/F | 324 | L | 0.324 | m3 | l | exact (1) | t0003:row7:col4, t0003:row19:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'TM'; source reconciliation required
- table representations disagree for 'Cmax, ng/mL'; source reconciliation required
- table representations disagree for 'Tmax, h'; source reconciliation required
- table representations disagree for 't1/2, h'; source reconciliation required
- table representations disagree for 'CL/F, L/h'; source reconciliation required
- table representations disagree for 'Vd/F, L'; source reconciliation required
- table representations disagree for 'TMP'; source reconciliation required
- table representations disagree for 'TDP'; source reconciliation required
- dropped unlinked row (NIL): 'TMP' — extend the ontology if this is a real PK parameter (source ['t0003:row8:col4'])
- dropped unlinked row (NIL): 'TDP' — extend the ontology if this is a real PK parameter (source ['t0003:row14:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=thiamine
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'sad / 600 mg (n=10)' subgroup of Sheng_2021 (paper reports 11 populations: mad / 150 mg (n=12) / day 1, mad / 150 mg (n=12) / day 10, mad / 300 mg (n=12) / day 1, mad / 300 mg (n=12) / day 10, mad / 600 mg (n=12) / day 1, mad / 600 mg (n=12) / day 10, sad / 1200 mg (n=10), sad / 150 mg (n=10), sad / 300 mg (n=10), sad / 600 mg (n=10), sad / 900 mg (n=10))
- row roles (LLM): model_class=noncompartmental; 13/13 row label(s) assigned, 0 linked by role; re-tagged thiamine→thiamine monophosphate ×130, thiamine→thiamine diphosphate ×36
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table t0003: ambiguous_numeric_format
- table t0003: ragged_grid
- table t0003: representations disagree; selected evidence retained, not merged
- table Sheng_2021_table_4: ragged_grid
- companion parameter table 4 transcribed (110 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t0003:row6:col4', 't0003:row12:col4', 't0003:row18:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['t0003:row3:col4', 't0003:row9:col4', 't0003:row15:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['t0003:row4:col4', 't0003:row10:col4', 't0003:row16:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['t0003:row5:col4', 't0003:row11:col4', 't0003:row17:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['t0003:row7:col4', 't0003:row19:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 35.4 L/h | ['t0003:row6:col4', 't0003:row12:col4', 't0003:row18:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 324 L | ['t0003:row7:col4', 't0003:row19:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.163 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.6 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.88 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.221 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.336 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_thiamine/Thiamine_Sheng2021_sad_600_mg/Thiamine_Sheng2021_sad_600_mg_matlab.zip" download>Thiamine_Sheng2021_sad_600_mg_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_thiamine/Thiamine_Sheng2021_sad_600_mg/Thiamine_Sheng2021_sad_600_mg_matlab_simbio.zip" download>Thiamine_Sheng2021_sad_600_mg_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_thiamine/Thiamine_Sheng2021_sad_600_mg/Thiamine_Sheng2021_sad_600_mg_sbml.zip" download>Thiamine_Sheng2021_sad_600_mg_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_thiamine/Thiamine_Sheng2021_sad_600_mg/Thiamine_Sheng2021_sad_600_mg_cellml.zip" download>Thiamine_Sheng2021_sad_600_mg_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Sheng L, Cao W, Lin P, Chen W, Xu H, Zhong C et al. Safety, Tolerability and Pharmacokinetics of Single and Multiple Ascending Doses of Benfotiamine in Healthy Subjects. Drug design, development and therapy 15:1101–1110 (2021). [doi:10.2147/DDDT.S296197](https://doi.org/10.2147/DDDT.S296197)

**This record:** Pharmacolibrary, model `Thiamine_Sheng2021_sad_600_mg`. <https://pharmacolibrary.github.io/#/drugs/toxin_thiamine/Thiamine_Sheng2021_sad_600_mg>

```bibtex
@misc{pharmacolibrary_ThiamineSheng2021sad600mg,
  title  = {{Pharmacolibrary model Thiamine_Sheng2021_sad_600_mg}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_thiamine/Thiamine_Sheng2021_sad_600_mg},
  note   = {Parameters from doi:10.2147/DDDT.S296197},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiamine%5D%20Thiamine_Sheng2021_sad_600_mg&body=Drug%3A%20thiamine%0ARecord%3A%20Thiamine_Sheng2021_sad_600_mg%0APaper%3A%20Sheng_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thiamine/Thiamine_Sheng2021_sad_600_mg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 08:32 UTC</sub>
