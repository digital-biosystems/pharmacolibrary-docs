<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Erythromycin&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/&quot;},{&quot;label&quot;:&quot;Gaohua_2015 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erythromycin_Gaohua2015_elf_g_ml&quot;,&quot;label&quot;:&quot;Gaohua_2015_elf_g_ml&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythromycin_Gaohua2015_macrophage_tissue_g_ml&quot;,&quot;label&quot;:&quot;Gaohua_2015_macrophage_tissue_g_ml&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Gaohua2015_macrophage_tissue_g_ml.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythromycin_Gaohua2015_plasma_g_ml&quot;,&quot;label&quot;:&quot;Gaohua_2015_plasma_g_ml&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Gaohua2015_plasma_g_ml.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythromycin_Hong2021_reference&quot;,&quot;label&quot;:&quot;Hong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Hong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Erythromycin — `Erythromycin_Gaohua2015_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Several erythromycin parameters have dimensionless values instead of required units for absorption rate, clearance, and volume, preventing SI conversion.

<div class="pk-model-meta" hidden drug="Erythromycin" model-id="Erythromycin_Gaohua2015_value" status="rejected" stale="false" population="virtual population" measured-compound="Erythromycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Gaohua L, Wedagedera J, Small BG, Almond L, Romero K, Hermann D et al. Development of a Multicompartment Permeability-Limited Lung PBPK Model and Its Application in Predicting Pulmonary Pharmacokinetics of Antituberculosis Drugs. CPT: pharmacometrics & systems pharmacology 4(10):605–613 (2015).
  ·  DOI: [10.1002/psp4.12034](https://doi.org/10.1002/psp4.12034)

## Population and dosing

**Population:** virtual population · condition healthy · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Mol Wt | MW | 137.1 | g/mol |
| B/P | Kp | 0.825 | 1.3 |
| fup | fu | 0.95 | 0.75 |
| fa | Fab | 1 | 0.57 |
| ka | kabs | 3.55 | 0.25 |
| Qgut | Q | 2.39 | 2.79 |
| Vss | Vss | 0.5 | 1.23 |
| CLuint user cytosol | CLint | 3.125 | mL/min/mg |
| CLR | CLR | 2.76 | 25.55 |
| Lung fu mass | fu_tissue | 0.984 | 0.451 |
| V d cariprazine | V | 7.9 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Several erythromycin parameters have dimensionless values instead of required units for absorption rate, clearance, and volume, preventing SI conversion.**

The absorption rate constant, intercompartmental clearance, and steady-state volume were recorded with unitless values (0.25, 2.79, and 1.23) that conflict with their required physical dimensions. Because these units could not be converted to SI, the model was rejected. Additionally, the volume of distribution label incorrectly references cariprazine, suggesting a potential label or data entry error. Extracted — erythromycin: MW 137 g/mol, Kp 0.825 1.3, fu 0.95 0.75, Fab 1 0.57, kabs 3.55 0.25, Q 2.39 2.79, Vss 0.5 1.23, CLint 3.12 mL/min/mg, … (+3).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Mol Wt | `Q374` · MW | 137.1 | g/mol |  |  | g/mol | llm (0.6) | Gaohua_2015_table_S3:row1:col1 |
| B/P | `Q410` · Kp | 0.825 | 1.3 |  |  | 1.3 | llm (0.6) | Gaohua_2015_table_S3:row5:col1 |
| fup | `Q46` · fu | 0.95 | 0.75 |  |  | 0.75 | llm (0.6) | Gaohua_2015_table_S3:row6:col1 |
| fa | `Q40` · Fab | 1 | 0.57 |  |  | 0.57 | llm (0.6) | Gaohua_2015_table_S3:row8:col1 |
| ka | `Q49` · kabs | 3.55 | 0.25 |  |  | 0.25 | exact (1) | Gaohua_2015_table_S3:row9:col1 |
| Qgut | `Q30` · Q | 2.39 | 2.79 |  |  | 2.79 | llm (0.6) | Gaohua_2015_table_S3:row11:col1 |
| Vss | `Q65` · Vss | 0.5 | 1.23 |  |  | 1.23 | exact (1) | Gaohua_2015_table_S3:row13:col1 |
| CLuint user cytosol | `Q3` · CLint | 3.125 | mL/min/mg |  |  | mL/min/mg | llm (0.6) | Gaohua_2015_table_S3:row14:col1 |
| CLR | `Q26` · CLR | 2.76 | 25.55 |  |  | 25.55 | exact (1) | Gaohua_2015_table_S3:row15:col1 |
| Lung fu mass | `Q413` · fu_tissue | 0.984 | 0.451 |  |  | 0.451 | llm_corrected (0.6) | Gaohua_2015_table_S3:row18:col1 |
| V d cariprazine | `Q61` · V | 7.9 | L/kg | 0.553 | m3 | L | review_gapfill (0.7) | Riad_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Log P' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S3:row2:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S3:row4:col1'])
- unit_dimension_mismatch: 'ka' → Q49 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'fugut' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S3:row10:col1'])
- unit_dimension_mismatch: 'Qgut' → Q30 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Peff,man' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S3:row12:col1'])
- unit_dimension_mismatch: 'Vss' → Q65 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'CLR' → Q26 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Lung effective permeability' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S3:row17:col1'])
- dropped unlinked row (NIL): 'fufluid' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S3:row19:col1'])
- implicit units: 'Mol Wt' → g/mol (from the popPK convention: 'Molecular weight is standardly expressed in g/mol (or Daltons) in PBPK modeling to facilitate mass-molar conversions. Th')
- implicit units: 'CLuint user cytosol' → mL/min/mg (from the popPK convention: 'Intrinsic clearance (CLint) normalized by protein or cell content in human liver cytosol/microsomes is typically reporte')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Erythromycin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'value' subgroup of Gaohua_2015 (paper reports 4 populations: elf(g/ml), macrophage/tissue(g/ml), plasma(g/ml), value)
- gap-filled Q61 (V) from Riad_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- table Gaohua_2015_table_S2: unbound_uncertainty
- table Gaohua_2015_table_S2: units_need_context
- table Gaohua_2015_table_S2: unparsed_numeric_cell
- table Gaohua_2015_table_S3: unknown_column_role
- table Gaohua_2015_table_S3: missing_unit_binding
- table Gaohua_2015_table_S3: ragged_grid
- toxin: the located table(s) gave no kinetic value — 25 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | fail | [length] ** 3 / [time] | 25.55 (dimensionless) | ['Gaohua_2015_table_S3:row15:col1'] |
| C5_dimension_Q3 | pass | [length] ** 3 / [time] / [mass] |  | ['Gaohua_2015_table_S3:row14:col1'] |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | 2.79 (dimensionless) | ['Gaohua_2015_table_S3:row11:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Gaohua_2015_table_S3:row1:col1'] |
| C5_dimension_Q410 | pass | dimensionless |  | ['Gaohua_2015_table_S3:row5:col1'] |
| C5_dimension_Q413 | pass | dimensionless |  | ['Gaohua_2015_table_S3:row18:col1'] |
| C5_dimension_Q49 | fail | 1 / [time] | 0.25 (dimensionless) | ['Gaohua_2015_table_S3:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Riad_2026:review'] |
| C5_dimension_Q65 | fail | [length] ** 3 | 1.23 (dimensionless) | ['Gaohua_2015_table_S3:row13:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 553 L | ['Riad_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Berythromycin%5D%20Erythromycin_Gaohua2015_value&body=Drug%3A%20erythromycin%0ARecord%3A%20Erythromycin_Gaohua2015_value%0APaper%3A%20Gaohua_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_erythromycin/Erythromycin_Gaohua2015_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 14:15 UTC</sub>
