<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Benzo[a]pyrene&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/&quot;},{&quot;label&quot;:&quot;Campbell_2016 \u00b7 rat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzoapyrene_Cardoso2024_reference&quot;,&quot;label&quot;:&quot;Cardoso_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Cardoso2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2023_reference&quot;,&quot;label&quot;:&quot;Vermillion_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Weyand1986_reference&quot;,&quot;label&quot;:&quot;Weyand_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Weyand1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2022_reference&quot;,&quot;label&quot;:&quot;Vermillion_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Benzo[a]pyrene — `BenzoAPyrene_Campbell2016_rat`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">rat</span>

> Km uses molar units instead of mass concentration, and molecular weight is listed as mg/g instead of mass per mole, causing dimensional mismatches.

<div class="pk-model-meta" hidden drug="Benzo[a]pyrene" model-id="BenzoAPyrene_Campbell2016_rat" status="rejected" stale="false" population="rats and humans" measured-compound="Benzo[a]pyrene" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Campbell J, Franzen A, Van Landingham C, Lumpkin M, Crowell S, Meredith C et al. Predicting lung dosimetry of inhaled particleborne benzo[a]pyrene using physiologically based pharmacokinetic modeling. Inhalation toxicology 28(11):520–535 (2016).
  ·  DOI: [10.1080/08958378.2016.1214768](https://doi.org/10.1080/08958378.2016.1214768)

## Population and dosing

**Population:** rats and humans · condition inhalation exposure · age group adult.

**Dosing:** 0.0055, 0.027, 0.6 mg/m3, inhaled, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.95).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| QFATC | equation variable | 0.07 | – |
| KAS | kel | 0.0005 | min−1 |
| PLIV3 | V2 | 12.24 | L |
| PPOOR3 | equation variable | 6.43 | – |
| VMAXLIVPA | Vmax | 1.08 | mg/h |
| FRAC3 | fm | 0.185 | – |
| CLURN3C | CL | 0.0133 | L/h |
| KMLINGPA | Km | 17.97 | nmol/mL |
| MPPLNG | MW | 3.67 | mg/g |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Km uses molar units instead of mass concentration, and molecular weight is listed as mg/g instead of mass per mole, causing dimensional mismatches.**

The enzyme affinity parameter Km is recorded in nmol/mL, conflicting with the expected mass/volume dimension. The molecular weight parameter is incorrectly assigned mg/g, which is dimensionally invalid for converting molar amounts. Furthermore, the model structure includes features that cannot be represented in the standard simulation framework. Extracted — benzoapyrene: kel 0.0005 min−1, Vmax 1.08 mg/h, Km 18 nmol/mL, MW 3.67 mg/g; 3-hydroxy benzo[a]pyrene: V2 12.2 L, fm 0.185 –, CL 0.0133 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| QFATC | `Q900` · equation variable | 0.07 | – | 0.07 |  | - | llm (0.6) | t0001:row10:col3 |
| KAS | `Q47` · kel | 0.0005 | min−1 | 8.333e-06 | 1/s | 1/min | llm (0.6) | t0001:row22:col3 |
| PLIV3 | `Q64` · V2 | 12.24 | L | 0.01224 | m3 | L | llm (0.6) | t0001:row37:col3, Campbell_2016_table_2:row2:col3 |
| PPOOR3 | `Q900` · equation variable | 6.43 | – | 6.43 |  | - | llm (0.6) | t0001:row38:col3, Campbell_2016_table_2:row3:col3 |
| VMAXLIVPA | `Q66` · Vmax | 1.08 | mg/h |  |  | mg/h | llm (0.6) | t0001:row42:col3, Campbell_2016_table_2:row7:col3 |
| FRAC3 | `Q45` · fm | 0.185 | – | 0.185 |  | - | exact (1) | t0001:row48:col3, Campbell_2016_table_2:row13:col3 |
| CLURN3C | `Q22` · CL | 0.0133 | L/h | 3.694e-09 | m3/s | L/h | exact (1) | t0001:row49:col3, Campbell_2016_table_2:row14:col3 |
| KMLINGPA | `Q1` · Km | 17.97 | nmol/mL |  |  | nM/ml | llm (0.6) | Campbell_2016_table_2:row10:col3 |
| MPPLNG | `Q374` · MW | 3.67 | mg/g |  |  | mg/g | llm (0.6) | Campbell_2016_table_2:row12:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| QC | Q30 | llm |
| Tissue/blood partition coefficients (metabolite 1) | Q410 | llm |

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'BW'; source reconciliation required
- table representations disagree for 'QC'; source reconciliation required
- table representations disagree for 'QFATC'; source reconciliation required
- table representations disagree for 'QLIVC'; source reconciliation required
- table representations disagree for 'QRICHC'; source reconciliation required
- table representations disagree for 'VARTC'; source reconciliation required
- table representations disagree for 'VVENC'; source reconciliation required
- table representations disagree for 'VFATC'; source reconciliation required
- table representations disagree for 'VLIVC'; source reconciliation required
- table representations disagree for 'VLNGC'; source reconciliation required
- table representations disagree for 'VPOORC'; source reconciliation required
- table representations disagree for 'Kmac'; source reconciliation required
- table representations disagree for 'KAS'; source reconciliation required
- table representations disagree for 'KAI'; source reconciliation required
- table representations disagree for 'KSI'; source reconciliation required
- table representations disagree for 'KIF'; source reconciliation required
- table representations disagree for 'PAFATPC'; source reconciliation required
- table representations disagree for 'PAFAT3C'; source reconciliation required
- table representations disagree for 'PFATP'; source reconciliation required
- table representations disagree for 'PLIVP'; source reconciliation required
- table representations disagree for 'PPOORP'; source reconciliation required
- table representations disagree for 'PRICHP'; source reconciliation required
- table representations disagree for 'PLNGP'; source reconciliation required
- table representations disagree for 'FB'; source reconciliation required
- table representations disagree for 'Tissue/blood partition coefficients (metabolite 1)'; source reconciliation required
- table representations disagree for 'PFAT3'; source reconciliation required
- table representations disagree for 'PLIV3'; source reconciliation required
- table representations disagree for 'PPOOR3'; source reconciliation required
- table representations disagree for 'PRICH3'; source reconciliation required
- table representations disagree for 'PLNG3'; source reconciliation required
- table representations disagree for 'FB3'; source reconciliation required
- table representations disagree for 'VMAXLIVPA'; source reconciliation required
- table representations disagree for 'VMAXLNGPA'; source reconciliation required
- table representations disagree for 'KMLIVPA'; source reconciliation required
- table representations disagree for 'KMLNGPA'; source reconciliation required
- table representations disagree for 'MMPPGL'; source reconciliation required
- table representations disagree for 'MPPGLNG'; source reconciliation required
- table representations disagree for 'FRAC3'; source reconciliation required
- table representations disagree for 'CLURN3C'; source reconciliation required
- table representations disagree for 'CLOTH3C'; source reconciliation required
- dropped unlinked row (NIL): 'BW' — extend the ontology if this is a real PK parameter (source ['t0001:row1:col3'])
- unit_dimension_unknown: '–' (equation variable)
- unit_dimension_unknown: '–' (Q)
- dropped duplicate Q30 ('QLIVC', value '0.183') — already have one for this compound
- dropped unlinked row (NIL): 'QRICHC' — extend the ontology if this is a real PK parameter (source ['t0001:row12:col3'])
- dropped unlinked row (NIL): 'VARTC' — extend the ontology if this is a real PK parameter (source ['t0001:row14:col3'])
- dropped unlinked row (NIL): 'VVENC' — extend the ontology if this is a real PK parameter (source ['t0001:row15:col3'])
- dropped duplicate Q900 ('VFATC', value '0.065') — already have one for this compound
- dropped duplicate Q30 ('VLIVC', value '0.037') — already have one for this compound
- dropped unlinked row (NIL): 'VLNGC' — extend the ontology if this is a real PK parameter (source ['t0001:row19:col3'])
- dropped unlinked row (NIL): 'VPOORC' — extend the ontology if this is a real PK parameter (source ['t0001:row20:col3'])
- dropped duplicate Q900 ('Kmac', value '0.000025') — already have one for this compound
- dropped duplicate Q47 ('KAI', value '0.0006') — already have one for this compound
- dropped unlinked row (NIL): 'KSI' — extend the ontology if this is a real PK parameter (source ['t0001:row24:col3'])
- dropped unlinked row (NIL): 'KIF' — extend the ontology if this is a real PK parameter (source ['t0001:row25:col3'])
- dropped duplicate Q900 ('PAFATPC', value '0.25') — already have one for this compound
- dropped unlinked row (NIL): 'PAFAT3C' — extend the ontology if this is a real PK parameter (source ['t0001:row27:col3'])
- dropped unlinked row (NIL): 'PFATP' — extend the ontology if this is a real PK parameter (source ['t0001:row29:col3'])
- dropped unlinked row (NIL): 'PLIVP' — extend the ontology if this is a real PK parameter (source ['t0001:row30:col3'])
- dropped unlinked row (NIL): 'PPOORP' — extend the ontology if this is a real PK parameter (source ['t0001:row31:col3'])
- dropped unlinked row (NIL): 'PRICHP' — extend the ontology if this is a real PK parameter (source ['t0001:row32:col3'])
- dropped unlinked row (NIL): 'PLNGP' — extend the ontology if this is a real PK parameter (source ['t0001:row33:col3'])
- dropped unlinked row (NIL): 'FB' — extend the ontology if this is a real PK parameter (source ['t0001:row34:col3'])
- unit_dimension_unknown: 'metabolite 1' (Kp)
- dropped unlinked row (NIL): 'PFAT3' — extend the ontology if this is a real PK parameter (source ['t0001:row36:col3', 'Campbell_2016_table_2:row1:col3'])
- unit_dimension_unknown: '–' (V3)
- dropped unlinked row (NIL): 'PRICH3' — extend the ontology if this is a real PK parameter (source ['t0001:row39:col3', 'Campbell_2016_table_2:row4:col3'])
- dropped unlinked row (NIL): 'PLNG3' — extend the ontology if this is a real PK parameter (source ['t0001:row40:col3', 'Campbell_2016_table_2:row5:col3'])
- dropped unlinked row (NIL): 'FB3' — extend the ontology if this is a real PK parameter (source ['t0001:row41:col3', 'Campbell_2016_table_2:row6:col3'])
- unit_dimension_unknown: 'nmol/min/mg microsomal protein' (Vmax)
- dropped duplicate Q66 ('VMAXLNGPA', value '1.08') — already have one for this compound
- dropped unlinked row (NIL): 'KMLIVPA' — extend the ontology if this is a real PK parameter (source ['t0001:row44:col3', 'Campbell_2016_table_2:row9:col3'])
- dropped unlinked row (NIL): 'KMLNGPA' — extend the ontology if this is a real PK parameter (source ['t0001:row45:col3'])
- dropped unlinked row (NIL): 'MMPPGL' — extend the ontology if this is a real PK parameter (source ['t0001:row46:col3'])
- dropped unlinked row (NIL): 'MPPGLNG' — extend the ontology if this is a real PK parameter (source ['t0001:row47:col3'])
- unit_dimension_unknown: '–' (fm)
- unit_dimension_unknown: 'nmol/min/BW0.75' (CL)
- unit_dimension_unknown: 'ml/min/g Liver' (CL)
- dropped duplicate Q22 ('CLOTH3C', value '0.4') — already have one for this compound
- dropped duplicate Q66 ('VMAXLINGPA', value '1.08') — already have one for this compound
- unit_dimension_mismatch: 'KMLINGPA' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'MPPGL' — extend the ontology if this is a real PK parameter (source ['Campbell_2016_table_2:row11:col3'])
- unit_dimension_mismatch: 'MPPLNG' → Q374 (unit 'dimensionless' vs ontology '[mass] / [substance]') — route to review
- implicit units: 'PLIV3' → L (from the popPK convention: "The parameter PLIV3 is defined as the 'Volume of distribution of the second peripheral compartment'. In population PK an")
- implicit units: 'VMAXLIVPA' → mg/h (from the popPK convention: "The parameter VMAXLIVPA is defined as 'Maximum rate of metabolism'. Vmax represents the maximum velocity of an enzymatic")
- implicit units: 'CLURN3C' → L/h (from the paper text: "The text states: 'Urinary clearance of 3-OH BaP... was set to approximate GFR for rat and human.' GFR (Glomerular Filtra")
- metabolite volume: 'PLIV3' Q77→Q64 for 3-hydroxy benzo[a]pyrene — its only peripheral volume is its first; the 2 numbers the molecule
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Benzo[a]pyrene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'rat' subgroup of Campbell_2016 (paper reports 2 populations: human, rat)
- row roles (LLM): model_class=pbpk; 50/50 row label(s) assigned, 17 linked by role; re-tagged parent→3-hydroxy benzo[a]pyrene ×40

**Extraction notes:**
- table t0001: unbound_uncertainty
- table t0001: unparsed_numeric_cell
- table t0001: representations disagree; selected evidence retained, not merged
- table Campbell_2016_table_2: missing_label
- table Campbell_2016_table_2: missing_unit_binding
- companion parameter table 2 transcribed (30 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- toxin: the located table(s) gave no kinetic value — 6 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | nmol/mL ([substance] / [length] ** 3) | ['Campbell_2016_table_2:row10:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0001:row49:col3', 'Campbell_2016_table_2:row14:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t0001:row8:col3'] |
| C5_dimension_Q374 | fail | [mass] / [substance] | mg/g (dimensionless) | ['Campbell_2016_table_2:row12:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['t0001:row22:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t0001:row37:col3', 'Campbell_2016_table_2:row2:col3'] |
| C5_dimension_Q66 | pass | [mass] / [time] |  | ['t0001:row42:col3', 'Campbell_2016_table_2:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0133 | ['t0001:row49:col3', 'Campbell_2016_table_2:row14:col3'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0133 L/h | ['t0001:row49:col3', 'Campbell_2016_table_2:row14:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.2 L | ['t0001:row37:col3', 'Campbell_2016_table_2:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoapyrene%5D%20BenzoAPyrene_Campbell2016_rat&body=Drug%3A%20benzoapyrene%0ARecord%3A%20BenzoAPyrene_Campbell2016_rat%0APaper%3A%20Campbell_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzoapyrene/BenzoAPyrene_Campbell2016_rat%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:34 UTC</sub>
