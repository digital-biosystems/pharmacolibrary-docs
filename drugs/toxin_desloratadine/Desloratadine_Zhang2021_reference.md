<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Desloratadine&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/&quot;},{&quot;label&quot;:&quot;Zhang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desloratadine_Wang2015_reference&quot;,&quot;label&quot;:&quot;Wang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Wang2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_beagles_dl_tablet_10_mg_39&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_beagles_ltd_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_beagles_ltd_tablet_10_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_ltd_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_humans_dl_tablet_10_mg_4&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_humans_dl_tablet_10_mg_41&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_humans_dl_tablet_10_mg_4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_humans_ltd_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_humans_ltd_tablet_10_mg_40&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_humans_ltd_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Desloratadine — `Desloratadine_Zhang2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> Desloratadine clearance, volume, absorption rate, and lag time were missing, forcing placeholder values and quarantining the 1-compartment dog model.

<div class="pk-model-meta" hidden drug="Desloratadine" model-id="Desloratadine_Zhang2021_reference" status="model_quarantined" stale="false" population="nine male beagle dogs" measured-compound="Desloratadine" parameterization="apparent" topology="1C"></div>

## Citation
Zhang Y, Zhang J, Xu Q, Wang Y, Wu W, Wang W et al. Simultaneous Determination of Loratadine and Its Metabolite Desloratadine in Beagle Plasma by LC-MS/MS and Application for Pharmacokinetics Study of Loratadine Tablets and Omeprazole‑Induced Drug-Drug Interaction. Drug design, development and therapy 15:5109–5122 (2021).
  ·  DOI: [10.2147/DDDT.S328106](https://doi.org/10.2147/DDDT.S328106)

## Population and dosing

**Population:** nine male beagle dogs · condition fasting state; omeprazole-induced drug-drug interaction study · age group adult · n = 9.

**Dosing:** 10 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Loratadine, measured Desloratadine.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-t (ng. h/mL) | AUCt | 6539.3 | ng. h/mL |
| AUC0-∞ (ng. h/mL) | AUC∞ | 9468.6 | ng. h/mL |
| Tmax (h) | tmax | 2.812 | h |
| t1/2 (h) | t1/2z | 16.4 | h |
| Cmax (ng/mL) | Cmax | 358.1 | ng/mL |
| CL/F (L/h) | CLm/F | 1.712 | L/h |
| Vd/F (L) | Vm/F | 31.426 | L |
| MRT0-t (h) | MRT | 13.115 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Desloratadine clearance, volume, absorption rate, and lag time were missing, forcing placeholder values and quarantining the 1-compartment dog model.**

The record lists summary statistics like AUC and Cmax for desloratadine but lacks fitted pharmacokinetic parameters. Consequently, the model builder substituted library placeholders for desloratadine's clearance, volume of distribution, absorption rate constant, and absorption lag time because these values were not reported. Additionally, an absorption rate constant was invented for the first-order depot input, which is not acceptable for publication. Extracted — desloratadine: AUCt 6.54e+03 ng. h/mL, AUC∞ 9.47e+03 ng. h/mL, tmax 2.81 h, t1/2z 16.4 h, Cmax 358 ng/mL, CLm/F 1.71 L/h, Vm/F 31.4 L, MRT 13.1 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-t (ng. h/mL) | `Q19` · AUCt | 6539.3 | ng. h/mL | 23.54 | kg*s/m3 | (h·ng)/ml | exact (1) | t0005:row3:col1, t0005:row3:col2, t0005:row3:col3, t0005:row3:col4, t0005:row8:col1, t0005:row8:col2, t0005:row8:col3, t0005:row8:col4, Zhang_2021_table_7:row2:col1, Zhang_2021_table_7:row2:col2, Zhang_2021_table_7:row2:col3, Zhang_2021_table_7:row2:col4 |
| AUC0-∞ (ng. h/mL) | `Q17` · AUC∞ | 9468.6 | ng. h/mL | 34.09 | kg*s/m3 | (h·ng)/ml | exact (1) | t0005:row4:col1, t0005:row4:col2, t0005:row4:col3, t0005:row4:col4, t0005:row9:col1, t0005:row9:col2, t0005:row9:col3, t0005:row9:col4, Zhang_2021_table_7:row3:col1, Zhang_2021_table_7:row3:col2, Zhang_2021_table_7:row3:col3, Zhang_2021_table_7:row3:col4 |
| Tmax (h) | `Q56` · tmax | 2.812 | h | 1.012e+04 | s | h | exact (1) | t0005:row5:col1, t0005:row5:col2, t0005:row5:col3, t0005:row5:col4, t0005:row10:col1, t0005:row10:col2, t0005:row10:col3, t0005:row10:col4, Zhang_2021_table_7:row4:col1, Zhang_2021_table_7:row4:col2, Zhang_2021_table_7:row4:col3, Zhang_2021_table_7:row4:col4 |
| t1/2 (h) | `Q57` · t1/2z | 16.4 | h | 5.904e+04 | s | h | half_life_rule (0.95) | t0005:row6:col1, t0005:row6:col2, t0005:row6:col3, t0005:row11:col1, t0005:row11:col2, t0005:row11:col3, Zhang_2021_table_7:row5:col1, Zhang_2021_table_7:row5:col2, Zhang_2021_table_7:row5:col3, Zhang_2021_table_7:row5:col4 |
| Cmax (ng/mL) | `Q32` · Cmax | 358.1 | ng/mL | 0.0003581 | kg/m3 | ng/ml | exact (1) | Zhang_2021_table_7:row1:col1, Zhang_2021_table_7:row1:col2, Zhang_2021_table_7:row1:col3, Zhang_2021_table_7:row1:col4 |
| CL/F (L/h) | `Q351` · CLm/F | 1.712 | L/h | 4.756e-07 | m3/s | l/h | exact (1) | Zhang_2021_table_7:row6:col1, Zhang_2021_table_7:row6:col2, Zhang_2021_table_7:row6:col3, Zhang_2021_table_7:row6:col4 |
| Vd/F (L) | `Q367` · Vm/F | 31.426 | L | 0.03143 | m3 | l | exact (1) | Zhang_2021_table_7:row7:col1, Zhang_2021_table_7:row7:col2, Zhang_2021_table_7:row7:col3, Zhang_2021_table_7:row7:col4 |
| MRT0-t (h) | `Q53` · MRT | 13.115 | h | 4.721e+04 | s | h | exact (1) | Zhang_2021_table_7:row8:col1, Zhang_2021_table_7:row8:col2, Zhang_2021_table_7:row8:col3, Zhang_2021_table_7:row8:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'LTD'; source reconciliation required
- column 'key pharmacokinetic parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'AUC0-t (ng. h/mL)'; source reconciliation required
- table representations disagree for 'AUC0-∞ (ng. h/mL)'; source reconciliation required
- table representations disagree for 'Tmax (h)'; source reconciliation required
- table representations disagree for 't1/2 (h)'; source reconciliation required
- table representations disagree for 'DL'; source reconciliation required
- table representations disagree for 'Total'; source reconciliation required
- dropped unlinked row (NIL): 'LTD' — extend the ontology if this is a real PK parameter (source ['t0005:row2:col2', 't0005:row2:col3', 't0005:row2:col4', 't0005:row2:col5', 't0005:row2:col7'])
- dropped unlinked row (NIL): 'DL' — extend the ontology if this is a real PK parameter (source ['t0005:row7:col2', 't0005:row7:col3', 't0005:row7:col4', 't0005:row7:col5', 't0005:row7:col7'])
- dropped unlinked row (NIL): 'Total' — extend the ontology if this is a real PK parameter (source ['t0005:row14:col1', 't0005:row14:col2', 't0005:row14:col3', 't0005:row14:col4', 't0005:row14:col5', 't0005:row14:col7'])
- dropped duplicate Q53 ('MRT0-∞ (h)', value '24.825') — already have one for this compound
- metabolite desloratadine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite desloratadine: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Desloratadine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Zhang_2021:other_prose, Zhang_2021_table_7, t0005); populations mean con. in beagles / dl tablet (10 mg)39, mean con. in beagles / ltd tablet (10 mg), mean con. in humans / dl tablet (10 mg)41, mean con. in humans / ltd tablet (10 mg)40 kept as separate records
- row roles (LLM): model_class=noncompartmental; 13/13 row label(s) assigned, 0 linked by role; re-tagged parent→Desloratadine ×5
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table t0005: unbound_uncertainty
- table t0005: missing_label
- table t0005: ragged_grid
- table t0005: unparsed_numeric_cell
- table t0005: representations disagree; selected evidence retained, not merged
- table Zhang_2021_table_6: ragged_grid
- companion parameter table 6 transcribed (32 record(s))
- companion parameter table 7 transcribed (36 record(s))
- LLM selected parameter table(s) 5, 6, 7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['t0005:row4:col1', 't0005:row4:col2', 't0005:row4:col3', 't0005:row4:col4', 't0005:row9:col1', 't0005:row9:col2', 't0005:row9:col3', 't0005:row9:col4', 'Zhang_2021_table_7:row3:col1', 'Zhang_2021_table_7:row3:col2', 'Zhang_2021_table_7:row3:col3', 'Zhang_2021_table_7:row3:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['t0005:row3:col1', 't0005:row3:col2', 't0005:row3:col3', 't0005:row3:col4', 't0005:row8:col1', 't0005:row8:col2', 't0005:row8:col3', 't0005:row8:col4', 'Zhang_2021_table_7:row2:col1', 'Zhang_2021_table_7:row2:col2', 'Zhang_2021_table_7:row2:col3', 'Zhang_2021_table_7:row2:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zhang_2021_table_7:row1:col1', 'Zhang_2021_table_7:row1:col2', 'Zhang_2021_table_7:row1:col3', 'Zhang_2021_table_7:row1:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Zhang_2021_table_7:row6:col1', 'Zhang_2021_table_7:row6:col2', 'Zhang_2021_table_7:row6:col3', 'Zhang_2021_table_7:row6:col4'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Zhang_2021_table_7:row7:col1', 'Zhang_2021_table_7:row7:col2', 'Zhang_2021_table_7:row7:col3', 'Zhang_2021_table_7:row7:col4'] |
| C5_dimension_Q53 | pass | [time] |  | ['Zhang_2021_table_7:row8:col1', 'Zhang_2021_table_7:row8:col2', 'Zhang_2021_table_7:row8:col3', 'Zhang_2021_table_7:row8:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['t0005:row5:col1', 't0005:row5:col2', 't0005:row5:col3', 't0005:row5:col4', 't0005:row10:col1', 't0005:row10:col2', 't0005:row10:col3', 't0005:row10:col4', 'Zhang_2021_table_7:row4:col1', 'Zhang_2021_table_7:row4:col2', 'Zhang_2021_table_7:row4:col3', 'Zhang_2021_table_7:row4:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['t0005:row6:col1', 't0005:row6:col2', 't0005:row6:col3', 't0005:row11:col1', 't0005:row11:col2', 't0005:row11:col3', 'Zhang_2021_table_7:row5:col1', 'Zhang_2021_table_7:row5:col2', 'Zhang_2021_table_7:row5:col3', 'Zhang_2021_table_7:row5:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 472 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.717 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.717 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.914 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.777 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 472 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 446.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 496.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 40 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 24 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 10.54 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 7.554 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 54 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.389 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.795 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.225 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2.812 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesloratadine%5D%20Desloratadine_Zhang2021_reference&body=Drug%3A%20desloratadine%0ARecord%3A%20Desloratadine_Zhang2021_reference%0APaper%3A%20Zhang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_desloratadine/Desloratadine_Zhang2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:19 UTC</sub>
