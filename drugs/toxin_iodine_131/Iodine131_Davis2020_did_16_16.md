<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Iodine-131&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/&quot;},{&quot;label&quot;:&quot;Davis_2020 \u00b7 did_16_16&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iodine131_Kelly2017_reference&quot;,&quot;label&quot;:&quot;Kelly_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Kelly2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ly2023_reference&quot;,&quot;label&quot;:&quot;Ly_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ly2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2014_0_and_24_h&quot;,&quot;label&quot;:&quot;Ravichandran_2014_0_and_24_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2014_0_and_24_h.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2014_0_and_48_h&quot;,&quot;label&quot;:&quot;Ravichandran_2014_0_and_48_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2014_0_and_48_h.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2014_0_and_72_h&quot;,&quot;label&quot;:&quot;Ravichandran_2014_0_and_72_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2014_0_and_72_h.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2010_reference&quot;,&quot;label&quot;:&quot;Ravichandran_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Iodine-131 — `Iodine131_Davis2020_did_16_16`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Only clearance was extracted — no volume; cmax and AUCt have no unit.

<div class="pk-model-meta" hidden drug="Iodine-131" model-id="Iodine131_Davis2020_did_16_16" status="needs_review" stale="false" population="nude mice" measured-compound="125I-DiI (22,3)-SapC-DOPS" parameterization="apparent" topology="1C"></div>

## Citation
Davis HW, Vallabhapurapu SD, Chu Z, Wyder MA, Greis KD, Fannin V et al. Biotherapy of Brain Tumors with Phosphatidylserine-Targeted Radioiodinated SapC-DOPS Nanovesicles. Cells 9(9) (2020).
  ·  DOI: [10.3390/cells9091960](https://doi.org/10.3390/cells9091960)

## Population and dosing

**Population:** nude mice · condition glioblastoma multiforme · age group adult.

**Dosing:** 140, 280 mg, iv, multiple, every 48 h.

**Dosed compound ≠ measured compound:** dosed 131I-DiD (16,16)-SapC-DOPS, measured 125I-DiI (22,3)-SapC-DOPS.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Time to Peak (Tmax) (h) | tmax | 4 | h |
| Cpmax (Peak conc) (cpm/mL) | Cmax | 30.1 | cpm/mL |
| Elimination HalfLife (h) | t1/2z | 7.27 | h |
| AUC0-24 (cpm.hr/mL) | AUCt | 446 | cpm.hr/mL |
| Systemic Clearance/F (mL/h) | CL/F | 5033 | mL/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cmax and AUCt have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax and AUCt), so that value has no SI equivalent. Extracted — iodine 131: tmax 4 h, Cmax 30.1 cpm/mL, t1/2z 7.27 h, AUCt 446 cpm.hr/mL, CL/F 5.03e+03 mL/h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Time to Peak (Tmax) (h) | `Q56` · tmax | 4 | h | 1.44e+04 | s | h | llm_confirmed (0.6) | cells-09-01960-t002:row2:col7, cells-09-01960-t002:row2:col8, cells-09-01960-t002:row2:col9, cells-09-01960-t002:row2:col11 |
| Cpmax (Peak conc) (cpm/mL) | `Q32` · Cmax | 30.1 | cpm/mL |  |  | cpm/ml | llm_confirmed (0.6) | cells-09-01960-t002:row3:col7, cells-09-01960-t002:row3:col8, cells-09-01960-t002:row3:col9, cells-09-01960-t002:row3:col10, cells-09-01960-t002:row3:col11 |
| Elimination HalfLife (h) | `Q57` · t1/2z | 7.27 | h | 2.617e+04 | s | h | half_life_rule (0.95) | cells-09-01960-t002:row4:col7, cells-09-01960-t002:row4:col8, cells-09-01960-t002:row4:col9, cells-09-01960-t002:row4:col10, cells-09-01960-t002:row4:col11 |
| AUC0-24 (cpm.hr/mL) | `Q19` · AUCt | 446 | cpm.hr/mL |  |  | (h·cpm)/ml | llm (0.6) | cells-09-01960-t002:row5:col6, cells-09-01960-t002:row5:col7, cells-09-01960-t002:row5:col8, cells-09-01960-t002:row5:col9, cells-09-01960-t002:row5:col10, cells-09-01960-t002:row5:col11 |
| Systemic Clearance/F (mL/h) | `Q27` · CL/F | 5033 | mL/h | 1.398e-06 | m3/s | ml/h | llm (0.6) | cells-09-01960-t002:row8:col7, cells-09-01960-t002:row8:col8, cells-09-01960-t002:row8:col9, cells-09-01960-t002:row8:col10, cells-09-01960-t002:row8:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pharmacokinetic Parameters' — extend the ontology if this is a real PK parameter (source ['cells-09-01960-t002:row1:col7', 'cells-09-01960-t002:row1:col8', 'cells-09-01960-t002:row1:col9'])
- unit_dimension_unknown: 'cpm/mL' (Cmax)
- unit_dimension_unknown: 'cpm.hr/mL' (AUCt)
- dropped duplicate Q19 ('AUC0-t (cpm.hr/mL)', value '494') — already have one for this compound
- implicit units: 'Cpmax (Peak conc) (cpm/mL)' — the LLM proposed 'cpm/mL', whose dimension does not fit Q32; left unset
- implicit units: 'AUC0-24 (cpm.hr/mL)' — the LLM proposed 'cpm.hr/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=125I-DiI (22,3)-SapC-DOPS
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'did (16,16)' subgroup of Davis_2020 (paper reports 2 populations: did (16,16), dii (22,3))
- molar mass: none found for '125I-DiI (22,3)-SapC-DOPS' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '125I-DiI (22,3)-SapC-DOPS', not iodine_131 — the review values are the parent's

**Extraction notes:**
- table cells-09-01960-t002: ambiguous_numeric_format
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cells-09-01960-t002:row8:col7', 'cells-09-01960-t002:row8:col8', 'cells-09-01960-t002:row8:col9', 'cells-09-01960-t002:row8:col10', 'cells-09-01960-t002:row8:col11'] |
| C5_dimension_Q56 | pass | [time] |  | ['cells-09-01960-t002:row2:col7', 'cells-09-01960-t002:row2:col8', 'cells-09-01960-t002:row2:col9', 'cells-09-01960-t002:row2:col11'] |
| C5_dimension_Q57 | pass | [time] |  | ['cells-09-01960-t002:row4:col7', 'cells-09-01960-t002:row4:col8', 'cells-09-01960-t002:row4:col9', 'cells-09-01960-t002:row4:col10', 'cells-09-01960-t002:row4:col11'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | cpm.hr/mL | ['cells-09-01960-t002:row5:col6', 'cells-09-01960-t002:row5:col7', 'cells-09-01960-t002:row5:col8', 'cells-09-01960-t002:row5:col9', 'cells-09-01960-t002:row5:col10', 'cells-09-01960-t002:row5:col11'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | cpm/mL | ['cells-09-01960-t002:row3:col7', 'cells-09-01960-t002:row3:col8', 'cells-09-01960-t002:row3:col9', 'cells-09-01960-t002:row3:col10', 'cells-09-01960-t002:row3:col11'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.03 L/h | ['cells-09-01960-t002:row8:col7', 'cells-09-01960-t002:row8:col8', 'cells-09-01960-t002:row8:col9', 'cells-09-01960-t002:row8:col10', 'cells-09-01960-t002:row8:col11'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biodine_131%5D%20Iodine131_Davis2020_did_16_16&body=Drug%3A%20iodine_131%0ARecord%3A%20Iodine131_Davis2020_did_16_16%0APaper%3A%20Davis_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_iodine_131/Iodine131_Davis2020_did_16_16%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 14:47 UTC</sub>
