<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Benzo[a]pyrene&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/&quot;},{&quot;label&quot;:&quot;Campbell_2016 \u00b7 human&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzoapyrene_Cardoso2024_reference&quot;,&quot;label&quot;:&quot;Cardoso_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Cardoso2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2023_reference&quot;,&quot;label&quot;:&quot;Vermillion_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Weyand1986_reference&quot;,&quot;label&quot;:&quot;Weyand_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Weyand1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2022_reference&quot;,&quot;label&quot;:&quot;Vermillion_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Benzo[a]pyrene — `BenzoAPyrene_Campbell2016_human`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">rat</span>

> Dimensional errors on CLm/F and Km, and a metabolite without an extraction pathway, led to rejection.

<div class="pk-model-meta" hidden drug="Benzo[a]pyrene" model-id="BenzoAPyrene_Campbell2016_human" status="rejected" stale="false" population="rats and humans" measured-compound="Benzo[a]pyrene" parameterization="apparent" topology="manual_model_class"></div>

## Citation
Campbell J, Franzen A, Van Landingham C, Lumpkin M, Crowell S, Meredith C et al. Predicting lung dosimetry of inhaled particleborne benzo[a]pyrene using physiologically based pharmacokinetic modeling. Inhalation toxicology 28(11):520–535 (2016).
  ·  DOI: [10.1080/08958378.2016.1214768](https://doi.org/10.1080/08958378.2016.1214768)

## Population and dosing

**Population:** rats and humans · condition inhalation exposure · age group adult.

**Dosing:** 0.0055, 0.027, 0.6 mg/m3, inhaled, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.95).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KDISS1 | Kp | 0.005 | min−1 |
| KTRANS | ktr | 0.0035 | min−1 |
| QPC | CLint | 0.42 | ml/min/gram |
| QFATC | equation variable | 0.07 | – |
| VLIVC | V | 0.026 | L/kg |
| KAS | kuptake | 0.0005 | min−1 |
| FB | Fab | 0.9 | – |
| VMAXLIVPA | Vmax | 0.025 | nmol/min/mg microsomal protein |
| KMLNGPA | CLm/F | 0.725 | nmol/mL |
| FRAC3 | fm | 0.185 | – |
| CLURN3C | CL | 0.029 | L/h/kg |
| KMLINGPA | Km | 0.725 | nmol/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Dimensional errors on CLm/F and Km, and a metabolite without an extraction pathway, led to rejection.**

The metabolite 3-hydroxy benzo[a]pyrene has a formation pathway but no elimination or distribution parameters with valid units, specifically showing CLm/F and Km both as 0.725 nmol/mL, which conflicts with clearance dimensions. The intercompartmental clearance Q lacks a numerical value, and the tissue-to-plasma partition coefficient for the metabolite has an undefined unit. Additionally, the model's non-standard topology falls outside the supported structural templates. Extracted — benzoapyrene: Kp 0.005 min−1, ktr 0.0035 min−1, CLint 0.42 ml/min/gram, V 0.026 L/kg, kuptake 0.0005 min−1, Fab 0.9 –, Vmax 0.025 nmol/min/mg microsomal protein, CLm/F 0.725 nmol/mL, … (+1); 3-hydroxy benzo[a]pyrene: fm 0.185 –, CL 0.029 L/h/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KDISS1 | `Q410` · Kp | 0.005 | min−1 |  |  | 1/min | llm (0.6) | t0001:row5:col4 |
| KTRANS | `Q306` · ktr | 0.0035 | min−1 | 5.833e-05 | 1/s | 1/min | pd_twin_relink (1) | t0001:row6:col4 |
| QPC | `Q3` · CLint | 0.42 | ml/min/gram | 7e-06 | m3/s | ml/(min·g) | llm (0.6) | t0001:row7:col4 |
| QFATC | `Q900` · equation variable | 0.07 | – | 0.07 |  | - | llm (0.6) | t0001:row10:col4 |
| VLIVC | `Q61` · V | 0.026 | L/kg | 0.00182 | m3 | L | llm (0.6) | t0001:row17:col4 |
| KAS | `Q349` · kuptake | 0.0005 | min−1 | 8.333e-06 | 1/s | 1/min | llm (0.6) | t0001:row22:col4 |
| FB | `Q40` · Fab | 0.9 | – | 0.9 |  | - | llm (0.6) | t0001:row34:col4 |
| VMAXLIVPA | `Q66` · Vmax | 0.025 | nmol/min/mg microsomal protein |  |  | nM/(min·mg·m·icrosomal·protein) | llm (0.6) | t0001:row42:col4, Campbell_2016_table_2:row7:col4 |
| KMLNGPA | `Q351` · CLm/F | 0.725 | nmol/mL |  |  | nM/ml | llm (0.6) | t0001:row45:col4 |
| FRAC3 | `Q45` · fm | 0.185 | – | 0.185 |  | - | exact (1) | t0001:row48:col4, Campbell_2016_table_2:row13:col4 |
| CLURN3C | `Q22` · CL | 0.029 | L/h/kg | 5.639e-07 | m3/s | L/h | exact (1) | t0001:row49:col4, Campbell_2016_table_2:row14:col4 |
| KMLINGPA | `Q1` · Km | 0.725 | nmol/mL |  |  | nM/ml | llm (0.6) | Campbell_2016_table_2:row10:col4 |

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
- table representations disagree for 'DEPFRACUPPER'; source reconciliation required
- table representations disagree for 'VAPFRAC'; source reconciliation required
- table representations disagree for 'KDISS1'; source reconciliation required
- table representations disagree for 'KTRANS'; source reconciliation required
- table representations disagree for 'QPC'; source reconciliation required
- table representations disagree for 'QC'; source reconciliation required
- table representations disagree for 'QFATC'; source reconciliation required
- table representations disagree for 'QLIVC'; source reconciliation required
- table representations disagree for 'QRICHC'; source reconciliation required
- table representations disagree for 'VARTC'; source reconciliation required
- table representations disagree for 'VVENC'; source reconciliation required
- table representations disagree for 'VFATC'; source reconciliation required
- table representations disagree for 'VLIVC'; source reconciliation required
- table representations disagree for 'VFATBLDC'; source reconciliation required
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
- dropped unlinked row (NIL): 'DEPFRACUPPER' — extend the ontology if this is a real PK parameter (source ['t0001:row3:col4'])
- dropped unlinked row (NIL): 'VAPFRAC' — extend the ontology if this is a real PK parameter (source ['t0001:row4:col4'])
- unit_dimension_mismatch: 'KDISS1' → Q410 (unit '1 / [time]' vs ontology 'dimensionless') — route to review
- relinked 'KTRANS' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- unit_dimension_unknown: '–' (equation variable)
- unit_dimension_unknown: '–' (Q)
- dropped duplicate Q30 ('QLIVC', value '0.23') — already have one for this compound
- dropped unlinked row (NIL): 'QRICHC' — extend the ontology if this is a real PK parameter (source ['t0001:row12:col4'])
- dropped unlinked row (NIL): 'VARTC' — extend the ontology if this is a real PK parameter (source ['t0001:row14:col4'])
- dropped unlinked row (NIL): 'VVENC' — extend the ontology if this is a real PK parameter (source ['t0001:row15:col4'])
- dropped unlinked row (NIL): 'VFATC' — extend the ontology if this is a real PK parameter (source ['t0001:row16:col4'])
- unit_dimension_unknown: '–' (V)
- dropped unlinked row (NIL): 'VFATBLDC' — extend the ontology if this is a real PK parameter (source ['t0001:row18:col4'])
- dropped duplicate Q61 ('VLNGC', value '0.008') — already have one for this compound
- dropped unlinked row (NIL): 'VPOORC' — extend the ontology if this is a real PK parameter (source ['t0001:row20:col4'])
- dropped duplicate Q900 ('Kmac', value '0.000025') — already have one for this compound
- dropped unlinked row (NIL): 'KAI' — extend the ontology if this is a real PK parameter (source ['t0001:row23:col4'])
- dropped unlinked row (NIL): 'KSI' — extend the ontology if this is a real PK parameter (source ['t0001:row24:col4'])
- dropped duplicate Q900 ('KIF', value '0.0015') — already have one for this compound
- dropped unlinked row (NIL): 'PAFATPC' — extend the ontology if this is a real PK parameter (source ['t0001:row26:col4'])
- dropped duplicate Q900 ('PAFAT3C', value '0.25') — already have one for this compound
- dropped unlinked row (NIL): 'PFATP' — extend the ontology if this is a real PK parameter (source ['t0001:row29:col4'])
- dropped duplicate Q900 ('PLIVP', value '13.31') — already have one for this compound
- dropped unlinked row (NIL): 'PPOORP' — extend the ontology if this is a real PK parameter (source ['t0001:row31:col4'])
- dropped unlinked row (NIL): 'PRICHP' — extend the ontology if this is a real PK parameter (source ['t0001:row32:col4'])
- dropped unlinked row (NIL): 'PLNGP' — extend the ontology if this is a real PK parameter (source ['t0001:row33:col4'])
- unit_dimension_unknown: '–' (Fab)
- unit_dimension_unknown: 'metabolite 1' (Kp)
- dropped unlinked row (NIL): 'PFAT3' — extend the ontology if this is a real PK parameter (source ['t0001:row36:col4', 'Campbell_2016_table_2:row1:col4'])
- dropped unlinked row (NIL): 'PLIV3' — extend the ontology if this is a real PK parameter (source ['t0001:row37:col4', 'Campbell_2016_table_2:row2:col4'])
- dropped unlinked row (NIL): 'PPOOR3' — extend the ontology if this is a real PK parameter (source ['t0001:row38:col4', 'Campbell_2016_table_2:row3:col4'])
- dropped unlinked row (NIL): 'PRICH3' — extend the ontology if this is a real PK parameter (source ['t0001:row39:col4', 'Campbell_2016_table_2:row4:col4'])
- dropped unlinked row (NIL): 'PLNG3' — extend the ontology if this is a real PK parameter (source ['t0001:row40:col4', 'Campbell_2016_table_2:row5:col4'])
- dropped unlinked row (NIL): 'FB3' — extend the ontology if this is a real PK parameter (source ['t0001:row41:col4', 'Campbell_2016_table_2:row6:col4'])
- unit_dimension_unknown: 'nmol/min/mg microsomal protein' (Vmax)
- dropped duplicate Q66 ('VMAXLNGPA', value '0.025') — already have one for this compound
- dropped unlinked row (NIL): 'KMLIVPA' — extend the ontology if this is a real PK parameter (source ['t0001:row44:col4', 'Campbell_2016_table_2:row9:col4'])
- unit_dimension_mismatch: 'KMLNGPA' → Q351 (unit '[substance] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'MMPPGL' — extend the ontology if this is a real PK parameter (source ['t0001:row46:col4'])
- dropped unlinked row (NIL): 'MPPGLNG' — extend the ontology if this is a real PK parameter (source ['t0001:row47:col4'])
- unit_dimension_unknown: '–' (fm)
- unit_dimension_unknown: 'nmol/min/BW0.75' (CL)
- unit_dimension_unknown: 'ml/min/g Liver' (CL)
- dropped duplicate Q22 ('CLOTH3C', value '1.92') — already have one for this compound
- dropped duplicate Q66 ('VMAXLINGPA', value '0.025') — already have one for this compound
- unit_dimension_mismatch: 'KMLINGPA' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'MPPGL' — extend the ontology if this is a real PK parameter (source ['Campbell_2016_table_2:row11:col4'])
- dropped unlinked row (NIL): 'MPPLNG' — extend the ontology if this is a real PK parameter (source ['Campbell_2016_table_2:row12:col4'])
- implicit units: 'VLIVC' → L/kg (from the popPK convention: 'Parameter VLIVC represents the volume of the liver compartment in a PBPK model scaled by body weight (BW). The value 0.0')
- implicit units: 'CLURN3C' → L/h/kg (from the popPK convention: 'Parameter CLURN3C represents the renal clearance of 3-OH-BaP. The text states that urinary clearance was set to approxim')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Benzo[a]pyrene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'human' subgroup of Campbell_2016 (paper reports 2 populations: human, rat)
- row roles (LLM): model_class=pbpk; 50/50 row label(s) assigned, 17 linked by role; re-tagged parent→3-hydroxy benzo[a]pyrene ×40
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)

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
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | nmol/mL ([substance] / [length] ** 3) | ['Campbell_2016_table_2:row10:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0001:row49:col4', 'Campbell_2016_table_2:row14:col4'] |
| C5_dimension_Q3 | pass | [length] ** 3 / [time] / [mass] |  | ['t0001:row7:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t0001:row8:col4'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['t0001:row6:col4'] |
| C5_dimension_Q349 | pass | 1 / [time] |  | ['t0001:row22:col4'] |
| C5_dimension_Q351 | fail | [length] ** 3 / [time] | nmol/mL ([substance] / [length] ** 3) | ['t0001:row45:col4'] |
| C5_dimension_Q410 | fail | dimensionless | min−1 (1 / [time]) | ['t0001:row5:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['t0001:row17:col4'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] | nmol/min/mg microsomal protein | ['t0001:row42:col4', 'Campbell_2016_table_2:row7:col4'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.185 present with apparent parameterization |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.03 L/h | ['t0001:row49:col4', 'Campbell_2016_table_2:row14:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.82 L | ['t0001:row17:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoapyrene%5D%20BenzoAPyrene_Campbell2016_human&body=Drug%3A%20benzoapyrene%0ARecord%3A%20BenzoAPyrene_Campbell2016_human%0APaper%3A%20Campbell_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzoapyrene/BenzoAPyrene_Campbell2016_human%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:34 UTC</sub>
