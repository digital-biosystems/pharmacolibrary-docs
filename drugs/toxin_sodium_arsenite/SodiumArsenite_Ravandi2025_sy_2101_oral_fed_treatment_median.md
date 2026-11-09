<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium arsenite&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/&quot;},{&quot;label&quot;:&quot;Ravandi_2025 \u00b7 sy_2101_oral_fed_treatment_median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumArsenite_Hershberger2026_reference&quot;,&quot;label&quot;:&quot;Hershberger_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/SodiumArsenite_Hershberger2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumArsenite_Leffler1984_reference&quot;,&quot;label&quot;:&quot;Leffler_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/SodiumArsenite_Leffler1984_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium arsenite — `SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for sodium arsenite's clearance and volume of distribution — all 7 extracted parameters describe Arsenic trioxide, not sodium arsenite; t6_deviations.

<div class="pk-model-meta" hidden drug="Sodium arsenite" model-id="SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median" status="model_quarantined" stale="false" population="patients with acute promyelocytic leukemia" measured-compound="As(III)" parameterization="mechanistic" topology="1C"></div>

## Citation
Ravandi F, Rangaraju S, Kantarjian H, Garcia-Manero G, Yilmaz M, Baker K et al. A pharmacokinetic and safety study of oral arsenic trioxide in patients with acute promyelocytic leukemia. Blood advances 9(9):2136–2143 (2025).
  ·  DOI: [10.1182/bloodadvances.2024015453](https://doi.org/10.1182/bloodadvances.2024015453)

## Population and dosing

**Population:** patients with acute promyelocytic leukemia · condition acute promyelocytic leukemia · age group adult.

**Dosed compound ≠ measured compound:** dosed Arsenic trioxide, measured As(III).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL, L/h | CL | 38.31 | L/h |
| Vd, L | V | 1231.41 | L |
| T1/2, h | t1/2z | 22.41 | h |
| Cmax, ng/mL | Cmax | 21.60 | ng/mL |
| Tmax, h | tmax | 4.98 | h |
| AUC0-last, ng/mL•h | AUClast | 356.46 | ng/mL·h |
| AUC0-inf, ng/mL•h | AUC∞ | 391.51 | ng/mL·h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for sodium arsenite's clearance and volume of distribution — all 7 extracted parameters describe Arsenic trioxide, not sodium arsenite; t6_deviations.**

The model was built, but sodium arsenite's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (AUClast and AUC∞), so that value has no SI equivalent. Extracted — Arsenic trioxide: CL 38.3 L/h, V 1.23e+03 L, t1/2z 22.4 h, Cmax 21.6 ng/mL, tmax 4.98 h, AUClast 356 ng/mL·h, AUC∞ 392 ng/mL·h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 38.31 | L/h | 1.064e-05 | m3/s | l/h | exact (1) | tbl2:row2:col11 |
| Vd, L | `Q61` · V | 1231.41 | L | 1.231 | m3 | l | exact (1) | tbl2:row3:col11 |
| T1/2, h | `Q57` · t1/2z | 22.41 | h | 8.068e+04 | s | h | half_life_rule (0.95) | tbl2:row4:col11 |
| Cmax, ng/mL | `Q32` · Cmax | 21.60 | ng/mL | 2.16e-05 | kg/m3 | ng/ml | exact (1) | tbl2:row5:col11 |
| Tmax, h | `Q56` · tmax | 4.98 | h | 1.793e+04 | s | h | exact (1) | tbl2:row6:col11 |
| AUC0-last, ng/mL•h | `Q74` · AUClast | 356.46 | ng/mL·h |  |  | ng/mL·h | llm_confirmed (0.6) | tbl2:row9:col11 |
| AUC0-inf, ng/mL•h | `Q17` · AUC∞ | 391.51 | ng/mL·h |  |  | ng/mL·h | llm_confirmed (0.6) | tbl2:row10:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Clast, ng/mL' — extend the ontology if this is a real PK parameter (source ['tbl2:row7:col11'])
- dropped duplicate Q56 ('Tlast, h', value '85.30') — already have one for this compound
- implicit units: 'AUC0-last, ng/mL•h' → ng/mL·h (from the paper text: "The parameter value string provided in the input explicitly includes the unit: 'AUC0-last, ng/mL•h = 356.46'. Additional")
- implicit units: 'AUC0-inf, ng/mL•h' → ng/mL·h (from the paper text: "The parameter value string provided in the input explicitly includes the unit: 'AUC0-inf, ng/mL•h = 391.51'. Additionall")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=As(III)
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'sy-2101 oral fed treatment / median' subgroup of Ravandi_2025 (paper reports 6 populations: ato iv treatment / median, ato iv treatment / n, sy-2101 oral fasted treatment / median, sy-2101 oral fasted treatment / n, sy-2101 oral fed treatment / median, sy-2101 oral fed treatment / n)
- review gap-fill skipped: this record measures 'As(III)', not sodium_arsenite — the review values are the parent's

**Extraction notes:**
- table tbl2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl2:row10:col11'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl2:row2:col11'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tbl2:row5:col11'] |
| C5_dimension_Q56 | pass | [time] |  | ['tbl2:row6:col11'] |
| C5_dimension_Q57 | pass | [time] |  | ['tbl2:row4:col11'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl2:row3:col11'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl2:row9:col11'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 38.31 | ['tbl2:row2:col11'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 38.3 L/h | ['tbl2:row2:col11'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.23e+03 L | ['tbl2:row3:col11'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.92 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.61 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.97 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.26 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.27 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.72 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.34 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.76 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.85 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_sodium_arsenite/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_matlab.zip" download>SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_sodium_arsenite/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_matlab_simbio.zip" download>SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_sodium_arsenite/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_sbml.zip" download>SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_sodium_arsenite/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_cellml.zip" download>SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Ravandi F, Rangaraju S, Kantarjian H, Garcia-Manero G, Yilmaz M, Baker K et al. A pharmacokinetic and safety study of oral arsenic trioxide in patients with acute promyelocytic leukemia. Blood advances 9(9):2136–2143 (2025). [doi:10.1182/bloodadvances.2024015453](https://doi.org/10.1182/bloodadvances.2024015453)

**This record:** Pharmacolibrary, model `SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median`. <https://pharmacolibrary.github.io/#/drugs/toxin_sodium_arsenite/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median>

```bibtex
@misc{pharmacolibrary_SodiumArseniteRavandi2025sy2101oralfedtreatmentmedian,
  title  = {{Pharmacolibrary model SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_sodium_arsenite/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median},
  note   = {Parameters from doi:10.1182/bloodadvances.2024015453},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_arsenite%5D%20SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median&body=Drug%3A%20sodium_arsenite%0ARecord%3A%20SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median%0APaper%3A%20Ravandi_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_arsenite/SodiumArsenite_Ravandi2025_sy_2101_oral_fed_treatment_median%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 23:37 UTC</sub>
