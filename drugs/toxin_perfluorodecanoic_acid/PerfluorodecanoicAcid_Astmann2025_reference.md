<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Perfluorodecanoic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_perfluorodecanoic_acid/&quot;},{&quot;label&quot;:&quot;Astmann_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PerfluorodecanoicAcid_Ohmori2003_reference&quot;,&quot;label&quot;:&quot;Ohmori_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_perfluorodecanoic_acid/PerfluorodecanoicAcid_Ohmori2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PerfluorodecanoicAcid_Vanden1991_reference&quot;,&quot;label&quot;:&quot;Vanden_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_perfluorodecanoic_acid/PerfluorodecanoicAcid_Vanden1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Perfluorodecanoic acid — `PerfluorodecanoicAcid_Astmann2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> Kel has no unit.

<div class="pk-model-meta" hidden drug="Perfluorodecanoic acid" model-id="PerfluorodecanoicAcid_Astmann2025_reference" status="needs_review" stale="false" population="beef cattle at a Maine farm with biosolids-contaminated soils" measured-compound="Perfluorodecanoic acid (serum and muscle concentrations in cattle)" parameterization="mechanistic" topology="1C"></div>

## Citation
Astmann BA, Mikkonen AT, Simones TL, Flanagan M, Pfaehler D, Lenov I et al. Application of a Dynamic Exposure Population Toxicokinetic Model for Perfluorooctane Sulfonic Acid (PFOS) and Extension to Perfluorodecanoic Acid (PFDA) at a North American Beef Cattle Farm with a History of Biosolids Land Application. Toxics 13(7) (2025).
  ·  DOI: [10.3390/toxics13070541](https://doi.org/10.3390/toxics13070541)

## Population and dosing

**Population:** beef cattle at a Maine farm with biosolids-contaminated soils · condition chronic dietary exposure (biosolids-contaminated feed, pasture, water) · age group mixed.

**Dosed compound ≠ measured compound:** dosed Perfluorodecanoic acid (with PFOS) via contaminated feed, water, soil, and milk, measured Perfluorodecanoic acid (serum and muscle concentrations in cattle).

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| DT50 | t1/2z | 60.4 | days |
| Pmilk | kel | 0.015 | unitless |
| Vd | V | 0.085 | L/kg |
| theta_q410_pm | theta_q410_pm | 0.08 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kel), so that value has no SI equivalent. Extracted — perfluorodecanoic acid: t1/2z 60.4 days, kel 0.015 unitless, V 0.085 L/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Perfluorodecanoic acid (with PFOS) via contaminated feed, water, soil, and milk, the second reading Perfluorodecanoic acid (PFDA); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| DT50 | `Q57` · t1/2z | 60.4 | days | 5.219e+06 | s | d | llm (0.6) | Astmann_2025_table_3:row0:col3, Astmann_2025_table_3:row4:col3 |
| Pmilk | `Q47` · kel | 0.015 | unitless |  |  | unitless | toxin_unit_relink (0.85) | Astmann_2025_table_3:row2:col3, Astmann_2025_table_3:row6:col3 |
| Vd | `Q61` · V | 0.085 | L/kg | 0.00595 | m3 | l/kg | exact (1) | Astmann_2025_table_3:row3:col3, Astmann_2025_table_3:row7:col3 |
| theta_q410_pm | `Q900` · theta_q410_pm | 0.08 |  |  |  |  |  | Astmann_2025_table_3:row1:col3, Astmann_2025_table_3:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '% error c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '2021' — extend the ontology if this is a real PK parameter (source ['Astmann_2025_table_5:row0:col4', 'Astmann_2025_table_5:row0:col6', 'Astmann_2025_table_5:row0:col8', 'Astmann_2025_table_5:row1:col4', 'Astmann_2025_table_5:row1:col6', 'Astmann_2025_table_5:row1:col8'])
- dropped unlinked row (NIL): '2022' — extend the ontology if this is a real PK parameter (source ['Astmann_2025_table_5:row2:col4', 'Astmann_2025_table_5:row2:col6', 'Astmann_2025_table_5:row2:col8', 'Astmann_2025_table_5:row3:col4', 'Astmann_2025_table_5:row3:col6', 'Astmann_2025_table_5:row3:col8', 'Astmann_2025_table_5:row4:col4', 'Astmann_2025_table_5:row4:col6', 'Astmann_2025_table_5:row4:col8', 'Astmann_2025_table_5:row5:col4', 'Astmann_2025_table_5:row5:col6', 'Astmann_2025_table_5:row5:col8'])
- dropped unlinked row (NIL): '2023' — extend the ontology if this is a real PK parameter (source ['Astmann_2025_table_5:row6:col4', 'Astmann_2025_table_5:row6:col6', 'Astmann_2025_table_5:row6:col8', 'Astmann_2025_table_5:row7:col4', 'Astmann_2025_table_5:row7:col6', 'Astmann_2025_table_5:row7:col8'])
- dropped unlinked row (NIL): '2024' — extend the ontology if this is a real PK parameter (source ['Astmann_2025_table_5:row8:col4', 'Astmann_2025_table_5:row8:col6', 'Astmann_2025_table_5:row8:col8', 'Astmann_2025_table_5:row9:col4', 'Astmann_2025_table_5:row9:col6', 'Astmann_2025_table_5:row9:col8'])
- relinked 'Pmilk' Q50 → Q47: a pool's clearance rate constant, not excretion into urine or faeces (the unit decides, not the label)
- unit_dimension_unknown: 'unitless' (kel)
- covariate effect for Q410 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Perfluorodecanoic acid (serum and muscle concentrations in cattle)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- pharmacogenetic covariate 'theta_q410_pm' (pm) — PGx domain
- status held at "Needs review" — not promoted
- molar mass: none found for 'Perfluorodecanoic acid (serum and muscle concentrations in cattle)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Astmann_2025_table_5: unbound_uncertainty
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[pmilk]` | 0.015 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q410_pm]` | 0.08 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Perfluorodecanoic acid (with PFOS) via contaminated feed, water, soil, and milk | Perfluorodecanoic acid (PFDA) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Perfluorodecanoic acid (serum and muscle concentrations in cattle) | Perfluorodecanoic acid (PFDA) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Astmann_2025_table_3:row0:col3', 'Astmann_2025_table_3:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Astmann_2025_table_3:row3:col3', 'Astmann_2025_table_3:row7:col3'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | unitless | ['Astmann_2025_table_3:row2:col3', 'Astmann_2025_table_3:row6:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.95 L | ['Astmann_2025_table_3:row3:col3', 'Astmann_2025_table_3:row7:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperfluorodecanoic_acid%5D%20PerfluorodecanoicAcid_Astmann2025_reference&body=Drug%3A%20perfluorodecanoic_acid%0ARecord%3A%20PerfluorodecanoicAcid_Astmann2025_reference%0APaper%3A%20Astmann_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_perfluorodecanoic_acid/PerfluorodecanoicAcid_Astmann2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:48 UTC</sub>
