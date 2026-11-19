<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluorouracil&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/&quot;},{&quot;label&quot;:&quot;Ma_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Janssen2021_reference&quot;,&quot;label&quot;:&quot;Janssen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Janssen2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daher2014_final_model&quot;,&quot;label&quot;:&quot;Daher_2014_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daher2014_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daryani2016_estimate_se&quot;,&quot;label&quot;:&quot;Daryani_2016_estimate_se&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daryani2016_estimate_se.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Schmulenson2023_estimate&quot;,&quot;label&quot;:&quot;Schmulenson_2023_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Schmulenson2023_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fluorouracil — `Fluorouracil_Ma2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Fluorouracil" model-id="Fluorouracil_Ma2022_reference" status="rejected" stale="false" population="colon xenograft tumor-bearing animal models with single 100 mg/kg 5-FU dose" measured-compound="5-Fluorouracil" parameterization="mechanistic" topology="2C"></div>

## Citation
Ma C, Almasan A, Gurkan-Cavusoglu E. Computational analysis of 5-fluorouracil anti-tumor activity in colon cancer using a mechanistic pharmacokinetic/pharmacodynamic model. PLoS computational biology 18(11):e1010685 (2022).
  ·  DOI: [10.1371/journal.pcbi.1010685](https://doi.org/10.1371/journal.pcbi.1010685)

## Population and dosing

**Population:** colon xenograft tumor-bearing animal models with single 100 mg/kg 5-FU dose · condition colon cancer xenograft, chemotherapy.

**Dosing:** 7000 mg, iv, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.60).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Q21 | AUC ratio | 0.038 |  |
| V1 | V1 | 16823.472 |  |
| V2 | V2 | 2999.821 |  |
| Km | Km | 17334.977 |  |
| 5-FU in interstitial fluid and its anabolism | kic | 17.430 | min-1 |
| Q31 | CL_ratio | 0.981 |  |
| Vmax,influx | Vmax | 2.021 |  |
| k03 | equation variable | 2 |  |
| k65 | kcomp | 0.089 |  |
| CL5FUH2 | CL | 126.0 | L/h |
| 5-FU K a | kabs | 0.551 | (1/h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — fluorouracil: AUC ratio 0.038, V1 1.68e+04, V2 3e+03, Km 1.73e+04, kic 17.4 min-1, CL_ratio 0.981, Vmax 2.02, kcomp 0.089, … (+2).

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Q21 | `Q21` · AUC ratio | 0.038 |  | 0.038 |  |  | llm (0.6) | Ma_2022_table_p16_1:row2:col5 |
| V1 | `Q63` · V1 | 16823.472 |  |  |  |  | exact (1) | Ma_2022_table_p16_1:row3:col2, Ma_2022_table_p16_1:row3:col5 |
| V2 | `Q64` · V2 | 2999.821 |  |  |  |  | exact (1) | Ma_2022_table_p16_1:row4:col2, Ma_2022_table_p16_1:row4:col5 |
| Km | `Q1` · Km | 17334.977 |  |  |  |  | exact (1) | Ma_2022_table_p16_1:row5:col2, Ma_2022_table_p16_1:row5:col5 |
| 5-FU in interstitial fluid and its anabolism | `Q350` · kic | 17.430 | min-1 | 0.2905 | 1/s | 1/min | llm_corrected (0.6) | Ma_2022_table_p16_1:row7:col5 |
| Q31 | `Q31` · CL_ratio | 0.981 |  | 0.981 |  |  | llm (0.6) | Ma_2022_table_p16_1:row8:col2, Ma_2022_table_p16_1:row8:col5 |
| Vmax,influx | `Q66` · Vmax | 2.021 |  |  |  |  | llm_confirmed (0.6) | Ma_2022_table_p16_1:row9:col5 |
| k03 | `Q900` · equation variable | 2 |  | 2 |  |  | llm (0.6) | Ma_2022_table_p16_1:row13:col5 |
| k65 | `Q48` · kcomp | 0.089 |  |  |  |  | exact (1) | Ma_2022_table_p16_1:row17:col2, Ma_2022_table_p16_1:row17:col5 |
| CL5FUH2 | `Q22` · CL | 126.0 | L/h | 3.5e-05 | m3/s | L/h | review_gapfill (0.7) | Arshad_2020:review |
| 5-FU K a | `Q49` · kabs | 0.551 | (1/h) | 0.0001531 | 1/s | 1/h | review_gapfill (0.7) | Booka_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'posterior mean(q0.25,q0.75)' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- table representations disagree for 'Q21'; source reconciliation required
- conflicting source units for 'Q21': [{'unit': 'mL·mg-1·min-1', 'source': 'Ma_2022_table_p16_1:row2:col1', 'scope': 'unit_column'}, {'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row2:col4', 'scope': 'unit_column'}]
- table representations disagree for 'V1'; source reconciliation required
- conflicting source units for 'V1': [{'unit': 'mL·(mg tissue)-1', 'source': 'Ma_2022_table_p16_1:row3:col1', 'scope': 'unit_column'}, {'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row3:col4', 'scope': 'unit_column'}]
- table representations disagree for 'V2'; source reconciliation required
- conflicting source units for 'V2': [{'unit': 'mL·(mg tissue)-1', 'source': 'Ma_2022_table_p16_1:row4:col1', 'scope': 'unit_column'}, {'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row4:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Km'; source reconciliation required
- conflicting source units for 'Km': [{'unit': 'μg·mL-1', 'source': 'Ma_2022_table_p16_1:row5:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row5:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Cellular model'; source reconciliation required
- table representations disagree for '5-FU in interstitial fluid and its anabolism'; source reconciliation required
- table representations disagree for 'Q31'; source reconciliation required
- conflicting source units for 'Q31': [{'unit': 'mL·mg-1·min-1', 'source': 'Ma_2022_table_p16_1:row8:col1', 'scope': 'unit_column'}, {'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row8:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Vmax,influx'; source reconciliation required
- conflicting source units for 'Vmax,influx': [{'unit': 'pmol·mg-1·min-1', 'source': 'Ma_2022_table_p16_1:row9:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row9:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Km,influx'; source reconciliation required
- conflicting source units for 'Km,influx': [{'unit': 'mL·(mg tissue)-1', 'source': 'Ma_2022_table_p16_1:row10:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row10:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Vmax,efflux'; source reconciliation required
- conflicting source units for 'Vmax,efflux': [{'unit': 'pmol·mg-1·min-1', 'source': 'Ma_2022_table_p16_1:row11:col1', 'scope': 'unit_column'}, {'unit': 'pmol·mg-1', 'source': 'Ma_2022_table_p16_1:row11:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Km,efflux'; source reconciliation required
- conflicting source units for 'Km,efflux': [{'unit': 'pmol·mg-1', 'source': 'Ma_2022_table_p16_1:row12:col1', 'scope': 'unit_column'}, {'unit': 'b', 'source': 'Ma_2022_table_p16_1:row12:col4', 'scope': 'unit_column'}]
- table representations disagree for 'k03'; source reconciliation required
- conflicting source units for 'k03': [{'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row13:col1', 'scope': 'unit_column'}, {'unit': 'b', 'source': 'Ma_2022_table_p16_1:row13:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Vmax,54'; source reconciliation required
- conflicting source units for 'Vmax,54': [{'unit': 'pmol·mg-1·min-1', 'source': 'Ma_2022_table_p16_1:row14:col1', 'scope': 'unit_column'}, {'unit': '54', 'source': 'Ma_2022_table_p16_1:row14:col0', 'scope': 'label'}]
- table representations disagree for 'Km,54'; source reconciliation required
- conflicting source units for 'Km,54': [{'unit': 'pmol·mg-1', 'source': 'Ma_2022_table_p16_1:row15:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row15:col4', 'scope': 'unit_column'}, {'unit': '54', 'source': 'Ma_2022_table_p16_1:row15:col0', 'scope': 'label'}]
- table representations disagree for '5-FU incorporation into DNA and RNA'; source reconciliation required
- table representations disagree for 'k65'; source reconciliation required
- conflicting source units for 'k65': [{'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row17:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row17:col4', 'scope': 'unit_column'}]
- table representations disagree for 'k56'; source reconciliation required
- conflicting source units for 'k56': [{'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row18:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row18:col4', 'scope': 'unit_column'}]
- table representations disagree for 'k06'; source reconciliation required
- conflicting source units for 'k06': [{'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row19:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row19:col4', 'scope': 'unit_column'}]
- table representations disagree for 'γlag,RNA'; source reconciliation required
- table representations disagree for 'Vmax,75'; source reconciliation required
- conflicting source units for 'Vmax,75': [{'unit': 'pmol·mg-1·min-1', 'source': 'Ma_2022_table_p16_1:row21:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row21:col4', 'scope': 'unit_column'}, {'unit': '75', 'source': 'Ma_2022_table_p16_1:row21:col0', 'scope': 'label'}]
- table representations disagree for 'Km,75'; source reconciliation required
- conflicting source units for 'Km,75': [{'unit': 'pmol·mg-1', 'source': 'Ma_2022_table_p16_1:row22:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row22:col4', 'scope': 'unit_column'}, {'unit': '75', 'source': 'Ma_2022_table_p16_1:row22:col0', 'scope': 'label'}]
- table representations disagree for 'Vmax,57'; source reconciliation required
- conflicting source units for 'Vmax,57': [{'unit': 'pmol·mg-1·min-1', 'source': 'Ma_2022_table_p16_1:row23:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row23:col4', 'scope': 'unit_column'}, {'unit': '57', 'source': 'Ma_2022_table_p16_1:row23:col0', 'scope': 'label'}]
- table representations disagree for 'Km,57'; source reconciliation required
- conflicting source units for 'Km,57': [{'unit': 'pmol·mg-1', 'source': 'Ma_2022_table_p16_1:row24:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row24:col4', 'scope': 'unit_column'}, {'unit': '57', 'source': 'Ma_2022_table_p16_1:row24:col0', 'scope': 'label'}]
- table representations disagree for 'k07'; source reconciliation required
- conflicting source units for 'k07': [{'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row25:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row25:col4', 'scope': 'unit_column'}]
- table representations disagree for 'γlag,DNA'; source reconciliation required
- table representations disagree for 'Td,RNA'; source reconciliation required
- conflicting source units for 'Td,RNA': [{'unit': 'day', 'source': 'Ma_2022_table_p16_1:row27:col1', 'scope': 'unit_column'}, {'unit': 'a', 'source': 'Ma_2022_table_p16_1:row27:col4', 'scope': 'unit_column'}]
- table representations disagree for 'Td,DNA'; source reconciliation required
- conflicting source units for 'Td,DNA': [{'unit': 'day', 'source': 'Ma_2022_table_p16_1:row28:col1', 'scope': 'unit_column'}, {'unit': 'b', 'source': 'Ma_2022_table_p16_1:row28:col4', 'scope': 'unit_column'}]
- table representations disagree for 'σFNUC2'; source reconciliation required
- conflicting source units for 'σFNUC2': [{'unit': 'b', 'source': 'Ma_2022_table_p16_1:row30:col1', 'scope': 'unit_column'}, {'unit': 'min-1', 'source': 'Ma_2022_table_p16_1:row30:col4', 'scope': 'unit_column'}]
- table representations disagree for 'σDNA2'; source reconciliation required
- conflicting source units for 'σDNA2': [{'unit': 'b', 'source': 'Ma_2022_table_p16_1:row31:col1', 'scope': 'unit_column'}, {'unit': 'Thousands count/min', 'source': 'Ma_2022_table_p16_1:row31:col4', 'scope': 'unit_column'}]
- dropped unlinked row (NIL): 'Cellular model' — extend the ontology if this is a real PK parameter (source ['Ma_2022_table_p16_1:row6:col5'])
- dropped duplicate Q1 ('Km,influx', value '1.034') — already have one for this compound
- dropped duplicate Q66 ('Vmax,efflux', value '1.860e-2') — already have one for this compound
- dropped duplicate Q1 ('Km,efflux', value '6.704') — already have one for this compound
- dropped duplicate Q66 ('Vmax,54', value '27.138') — already have one for this compound
- dropped duplicate Q1 ('Km,54', value '2325.154') — already have one for this compound
- dropped unlinked row (NIL): '5-FU incorporation into DNA and RNA' — extend the ontology if this is a real PK parameter (source ['Ma_2022_table_p16_1:row16:col5'])
- dropped duplicate Q48 ('k56', value '0.521') — already have one for this compound
- dropped duplicate Q900 ('k06', value '0.114') — already have one for this compound
- dropped duplicate Q66 ('Vmax,75', value '0.0199') — already have one for this compound
- dropped duplicate Q1 ('Km,75', value '0.8398') — already have one for this compound
- dropped duplicate Q66 ('Vmax,57', value '5.534') — already have one for this compound
- dropped duplicate Q1 ('Km,57', value '0.95908') — already have one for this compound
- routed 'k07' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Td,RNA' — extend the ontology if this is a real PK parameter (source ['Ma_2022_table_p16_1:row27:col2', 'Ma_2022_table_p16_1:row27:col5'])
- dropped duplicate Q900 ('Td,DNA', value '4.360') — already have one for this compound
- dropped value-less row: 'a'
- dropped value-less row: 'b'
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 221 (char 220)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-Fluorouracil
- toxin: 4 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Arshad_2020's review values (primary lacked it)
- gap-filled Q49 (kabs) from Booka_2016's review values (primary lacked it)
- skipped review gap-fill of TLAG from Hill_2020: its label names a different analyte ('tmax') — 'time shift of tmax of the free Pt'

**Extraction notes:**
- table Ma_2022_table_p16_1: conflicting_units
- table Ma_2022_table_p16_1: missing_label
- table pcbi.1010685.t001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Arshad_2020:review'] |
| C5_dimension_Q350 | pass | 1 / [time] |  | ['Ma_2022_table_p16_1:row7:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Booka_2016:review'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['Ma_2022_table_p16_1:row5:col2', 'Ma_2022_table_p16_1:row5:col5'] |
| C5_unit_missing_Q48 | fail | 1 / [time] |  | ['Ma_2022_table_p16_1:row17:col2', 'Ma_2022_table_p16_1:row17:col5'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['Ma_2022_table_p16_1:row3:col2', 'Ma_2022_table_p16_1:row3:col5'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Ma_2022_table_p16_1:row4:col2', 'Ma_2022_table_p16_1:row4:col5'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] |  | ['Ma_2022_table_p16_1:row9:col5'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 126 | ['Arshad_2020:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 126 L/h | ['Arshad_2020:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Ma2022_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Ma2022_reference%0APaper%3A%20Ma_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluorouracil/Fluorouracil_Ma2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:05 UTC</sub>
