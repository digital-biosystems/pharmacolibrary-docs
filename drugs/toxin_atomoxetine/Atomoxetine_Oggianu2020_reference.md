<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Atomoxetine&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/&quot;},{&quot;label&quot;:&quot;Oggianu_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Farid1985_reference&quot;,&quot;label&quot;:&quot;Farid_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Farid1985_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Kim2018_cyp2d6_10_10&quot;,&quot;label&quot;:&quot;Kim_2018_cyp2d6_10_10&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_10_10.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Kim2018_cyp2d6_wt_wt&quot;,&quot;label&quot;:&quot;Kim_2018_cyp2d6_wt_wt&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Morais2025_reference&quot;,&quot;label&quot;:&quot;Morais_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Morais2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Sauer2005_reference&quot;,&quot;label&quot;:&quot;Sauer_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Sauer2005_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Atomoxetine — `Atomoxetine_Oggianu2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Atomoxetine" model-id="Atomoxetine_Oggianu2020_reference" status="needs_review" stale="false" population="healthy adult volunteers (CYP2D6 extensive and poor metabolizers) for atomoxetine model; pediatric children 2-17 years for trazodone" measured-compound="trazodone (atomoxetine as a co-modeled perpetrator; no metabolite of atomoxetine measured)" parameterization="mechanistic" topology="1C"></div>

## Citation
Oggianu L, Ke AB, Chetty M, Picollo R, Petrucci V, Calisti F et al. Estimation of an Appropriate Dose of Trazodone for Pediatric Insomnia and the Potential for a Trazodone-Atomoxetine Interaction. CPT: pharmacometrics & systems pharmacology 9(2):77–86 (2020).
  ·  DOI: [10.1002/psp4.12480](https://doi.org/10.1002/psp4.12480)

## Population and dosing

**Population:** healthy adult volunteers (CYP2D6 extensive and poor metabolizers) for atomoxetine model; pediatric children 2-17 years for trazodone · condition healthy · age group mixed.

**Dosed compound ≠ measured compound:** dosed trazodone (also atomoxetine in DDI simulations), measured trazodone (atomoxetine as a co-modeled perpetrator; no metabolite of atomoxetine measured).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW (g/mol) | MW | 408.32 | g/mol |
| B/P | equation variable | 0.68 |  |
| fup | fu | 0.0354 |  |
| V ss (L/kg) | Vss | 1.0 | L/kg |
| F a | Fab | 0.98 |  |
| K a (hour−1) | kabs | 0.926 | hour−1 |
| Additional HLM CLint (µL/min/mg) | CLint | 25.7 | µL/min/mg |
| theta_clint_cyp3a4 | theta_clint_cyp3a4 | 0.438 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW (g/mol) | `Q374` · MW | 408.32 | g/mol | 0.4083 |  | g/(m·ol) | exact (1) | psp412480-tbl-0002:row2:col1, psp412480-tbl-0002:row2:col2, Oggianu_2020_table_1:row1:col1, Oggianu_2020_table_1:row1:col2 |
| B/P | `Q900` · equation variable | 0.68 |  | 0.68 |  |  | llm (0.6) | psp412480-tbl-0002:row6:col1, Oggianu_2020_table_1:row5:col1 |
| fup | `Q46` · fu | 0.0354 |  | 0.0354 |  |  | llm_confirmed (0.6) | psp412480-tbl-0002:row7:col1, psp412480-tbl-0002:row7:col2, Oggianu_2020_table_1:row6:col1 |
| V ss (L/kg) | `Q65` · Vss | 1.0 | L/kg | 0.07 | m3 | l/kg | space_fold (0.95) | psp412480-tbl-0002:row9:col1, psp412480-tbl-0002:row9:col2, Oggianu_2020_table_1:row8:col1 |
| F a | `Q40` · Fab | 0.98 |  | 0.98 |  |  | llm_confirmed (0.6) | psp412480-tbl-0002:row11:col1, Oggianu_2020_table_1:row10:col1, Oggianu_2020_table_1:row10:col2 |
| K a (hour−1) | `Q49` · kabs | 0.926 | hour−1 | 0.0002572 | 1/s | 1/h | space_fold (0.95) | psp412480-tbl-0002:row12:col1 |
| Additional HLM CLint (µL/min/mg) | `Q3` · CLint | 25.7 | µL/min/mg | 0.0004283 | m3/s | µl/(min·mg) | llm_confirmed (0.6) | Oggianu_2020_table_1:row15:col1 |
| theta_clint_cyp3a4 | `Q900` · theta_clint_cyp3a4 | 0.438 |  |  |  |  |  | Oggianu_2020_table_1:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'method/source' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Log P' — extend the ontology if this is a real PK parameter (source ['psp412480-tbl-0002:row3:col1', 'Oggianu_2020_table_1:row2:col1', 'Oggianu_2020_table_1:row2:col2'])
- dropped unlinked row (NIL): 'pK a' — extend the ontology if this is a real PK parameter (source ['psp412480-tbl-0002:row5:col1', 'Oggianu_2020_table_1:row4:col1'])
- dropped duplicate Q46 ('fugut', value '1.0') — already have one for this compound
- dropped PD-category row 'K i (µM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412480-tbl-0002:row17:col1'])
- dropped unlinked row (NIL): 'Compound type' — extend the ontology if this is a real PK parameter (source ['Oggianu_2020_table_1:row3:col2'])
- dropped duplicate Q49 ('k a (hour−1)', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trazodone (atomoxetine as a co-modeled perpetrator; no metabolite of atomoxetine measured)
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- pharmacogenetic covariate 'theta_clint_cyp3a4' (cyp3a4) — PGx domain
- review gap-fill skipped: this record measures 'trazodone (atomoxetine as a co-modeled perpetrator; no metabolite of atomoxetine measured)', not atomoxetine — the review values are the parent's

**Extraction notes:**
- companion parameter table 1 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q3 | pass | [length] ** 3 / [time] / [mass] |  | ['Oggianu_2020_table_1:row15:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['psp412480-tbl-0002:row2:col1', 'psp412480-tbl-0002:row2:col2', 'Oggianu_2020_table_1:row1:col1', 'Oggianu_2020_table_1:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412480-tbl-0002:row12:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['psp412480-tbl-0002:row9:col1', 'psp412480-tbl-0002:row9:col2', 'Oggianu_2020_table_1:row8:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 70 L | ['psp412480-tbl-0002:row9:col1', 'psp412480-tbl-0002:row9:col2', 'Oggianu_2020_table_1:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batomoxetine%5D%20Atomoxetine_Oggianu2020_reference&body=Drug%3A%20atomoxetine%0ARecord%3A%20Atomoxetine_Oggianu2020_reference%0APaper%3A%20Oggianu_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_atomoxetine/Atomoxetine_Oggianu2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 23:23 UTC</sub>
