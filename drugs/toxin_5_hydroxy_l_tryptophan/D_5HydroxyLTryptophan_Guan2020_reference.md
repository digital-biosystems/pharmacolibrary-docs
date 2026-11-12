<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;5-Hydroxy-L-tryptophan&quot;,&quot;href&quot;:&quot;drugs/toxin_5_hydroxy_l_tryptophan/&quot;},{&quot;label&quot;:&quot;Guan_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_5HydroxyLTryptophan_Arbona2023_reference&quot;,&quot;label&quot;:&quot;Arbona_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_5_hydroxy_l_tryptophan/D_5HydroxyLTryptophan_Arbona2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_5HydroxyLTryptophan_Smarius2008_reference&quot;,&quot;label&quot;:&quot;Smarius_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_5_hydroxy_l_tryptophan/D_5HydroxyLTryptophan_Smarius2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_5HydroxyLTryptophan_Westenberg1982_reference&quot;,&quot;label&quot;:&quot;Westenberg_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_5_hydroxy_l_tryptophan/D_5HydroxyLTryptophan_Westenberg1982_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 5-Hydroxy-L-tryptophan — `D_5HydroxyLTryptophan_Guan2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model for 5-hydroxy-L-tryptophan was held back because its elimination clearance parameter was left at library defaults instead of an extracted value.

<div class="pk-model-meta" hidden drug="5-Hydroxy-L-tryptophan" model-id="D_5HydroxyLTryptophan_Guan2020_reference" status="model_quarantined" stale="false" population="healthy volunteers" measured-compound="5-Hydroxy-L-tryptophan" parameterization="apparent" topology="general_linear"></div>

## Citation
Guan Z, Jacobs G, van Pelt H, Van Gerven JMA, Burggraaf J, Zhao W. PK/PD modeling of 5-hydroxytryptophan (5-HTP) challenge test with cortisol measurement in serum and saliva. Pharmacology research & perspectives 8(2):e00574 (2020).
  ·  DOI: [10.1002/prp2.574](https://doi.org/10.1002/prp2.574)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult.

**Dosing:** 200 mg, oral, single.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka (h−1) | kabs | 12.10 | h−1 | 0.38 |
| V/F (L) | V/F | 5.32 | L |  |
| Amplitude | A1 | -12.30 |  |  |
| T peak(h) | tmax | 11.50 | h |  |
| β | kel | 36.00 | 1/h | 0.081 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model for 5-hydroxy-L-tryptophan was held back because its elimination clearance parameter was left at library defaults instead of an extracted value.**

The record lists an elimination rate constant (kel) of 36.00 1/h, but the model builder failed to extract or default an explicit elimination clearance for the central compartment. This omission caused the model to rely on a library placeholder for clearance, triggering a quarantine. Additionally, the model assumed bioavailability (F) and metabolite formation (Fm) were both 1. Extracted — 5 hydroxy l tryptophan: kabs 12.1 h−1, V/F 5.32 L, A1 -12.3, tmax 11.5 h, kel 36 1/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) | `Q49` · kabs | 12.10 | h−1 | 0.003361 | 1/s | 1/h | 0.38 | exact (1) | prp2574-tbl-0002:row2:col1, prp2574-tbl-0002:row2:col2 |
| V/F (L) | `Q76` · V/F | 5.32 | L | 0.00532 | m3 | l |  | exact (1) | prp2574-tbl-0002:row3:col1, prp2574-tbl-0002:row3:col2 |
| Amplitude | `Q415` · A1 | -12.30 |  | -12.3 |  |  |  | llm (0.6) | prp2574-tbl-0002:row7:col2 |
| T peak(h) | `Q56` · tmax | 11.50 | h | 4.14e+04 | s | h |  | space_fold (0.95) | prp2574-tbl-0002:row9:col1 |
| β | `Q47` · kel | 36.00 | 1/h | 0.01 | 1/s | 1/h | 0.081 | exact (1) | prp2574-tbl-0002:row12:col1, prp2574-tbl-0002:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for '5‐HTP PK model'; source reconciliation required
- column 'parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'ka (h−1)'; source reconciliation required
- table representations disagree for 'V/F (L)'; source reconciliation required
- table representations disagree for 'σ (ng/mL)'; source reconciliation required
- table representations disagree for 'Baseline(ng/mL)'; source reconciliation required
- table representations disagree for 'Amplitude'; source reconciliation required
- table representations disagree for 'Trend(ng/mL.h)'; source reconciliation required
- table representations disagree for 'T peak(h)'; source reconciliation required
- table representations disagree for 'Saliva cortisol model'; source reconciliation required
- table representations disagree for 'β'; source reconciliation required
- table representations disagree for 'σ (nmol/L)'; source reconciliation required
- dropped unlinked row (NIL): '5‐HTP PK model' — extend the ontology if this is a real PK parameter (source ['prp2574-tbl-0002:row1:col2'])
- dropped PD-category row 'Baseline(ng/mL)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['prp2574-tbl-0002:row6:col1', 'prp2574-tbl-0002:row6:col2'])
- dropped PD-category row 'Trend(ng/mL.h)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['prp2574-tbl-0002:row8:col1', 'prp2574-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Saliva cortisol model' — extend the ontology if this is a real PK parameter (source ['prp2574-tbl-0002:row11:col2'])
- implicit units: 'β' → 1/h (from the popPK convention: 'The parameter is identified as the elimination rate constant (terminal/beta phase). In population pharmacokinetics, firs')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-Hydroxy-L-tryptophan
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table prp2574-tbl-0002: unbound_uncertainty
- table prp2574-tbl-0002: ragged_grid
- table prp2574-tbl-0002: unparsed_numeric_cell
- table prp2574-tbl-0002: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['prp2574-tbl-0002:row12:col1', 'prp2574-tbl-0002:row12:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['prp2574-tbl-0002:row2:col1', 'prp2574-tbl-0002:row2:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['prp2574-tbl-0002:row9:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['prp2574-tbl-0002:row3:col1', 'prp2574-tbl-0002:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 5.32 L | ['prp2574-tbl-0002:row3:col1', 'prp2574-tbl-0002:row3:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | fail | 3 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['kel'] |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B5_hydroxy_l_tryptophan%5D%20D_5HydroxyLTryptophan_Guan2020_reference&body=Drug%3A%205_hydroxy_l_tryptophan%0ARecord%3A%20D_5HydroxyLTryptophan_Guan2020_reference%0APaper%3A%20Guan_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_5_hydroxy_l_tryptophan/D_5HydroxyLTryptophan_Guan2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 17:49 UTC</sub>
