<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenobarbital&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/&quot;},{&quot;label&quot;:&quot;Saleh_2023 \u00b7 ribociclib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenobarbital_Schoemaker2017_reference&quot;,&quot;label&quot;:&quot;Schoemaker_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Schoemaker2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Moffett2018_reference&quot;,&quot;label&quot;:&quot;Moffett_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Moffett2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Pokorn2022_reference&quot;,&quot;label&quot;:&quot;Pokorn\u00e1_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Pokorn2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Thibault2021_reference&quot;,&quot;label&quot;:&quot;Thibault_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Thibault2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Thompson2007_reference&quot;,&quot;label&quot;:&quot;Thompson_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Thompson2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Vller2017_reference&quot;,&quot;label&quot;:&quot;V\u00f6ller_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Phenobarbital — `Phenobarbital_Saleh2023_ribociclib`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The phenobarbital central volume of 18.53 ml is physiologically implausible for mice, indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="Phenobarbital" model-id="Phenobarbital_Saleh2023_ribociclib" status="rejected" stale="false" population="mice" measured-compound="Phenobarbital" parameterization="mechanistic" topology="2C"></div>

## Citation
Saleh MAA, Gülave B, Campagne O, Stewart CF, Elassaiss-Schaap J, de Lange ECM. Using the LeiCNS-PK3.0 Physiologically-Based Pharmacokinetic Model to Predict Brain Extracellular Fluid Pharmacokinetics in Mice. Pharmaceutical research 40(11):2555–2566 (2023).
  ·  DOI: [10.1007/s11095-023-03554-5](https://doi.org/10.1007/s11095-023-03554-5)

## Population and dosing

**Population:** mice · condition healthy.

**Dosing:** 70, 105, 420, 700, 2100, 2800, 3500, 7000, 30520, 70000 mg, mixed, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Kp,uu,BBB | Kp | 0.0693 |  |  |
| 67 | equation variable | 67 |  |  |
| Cerebral blood flow | Qb | 0.46134 | ml/min |  |
| cyclophosphamide | MW | 261 | g/mol |  |
| fu, plasma | fu | 0.26 |  |  |
| Central clearance (ml/min) | CL | 2.09 | ml/min | 0.012 (None% RSE) |
| Intercompartmental clearance (ml/min) | Q | 0.086 | ml/min | 0 (None% RSE) |
| Central compartment volume (ml) | V1 | 18.53 | ml | 0 (None% RSE) |
| Peripheral compartment volume (ml) | V2 | 1.77 | ml | 0 (None% RSE) |
| absorption rate constant (ka) | kabs | 0.61 | h−1 |  |
| Lag time (h) | tlag | 1.96 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The phenobarbital central volume of 18.53 ml is physiologically implausible for mice, indicating a unit or scale extraction error.**

The central compartment volume is reported as 18.53 ml and peripheral volume as 1.77 ml. These values are orders of magnitude larger than expected physiological volumes for a mouse model. Consequently, the clearance-to-volume ratio fell outside the plausible physiological window. Extracted — phenobarbital: Kp 0.0693, Qb 0.461 ml/min, MW 261 g/mol, fu 0.26, CL 2.09 ml/min, Q 0.086 ml/min, V1 18.5 ml, V2 1.77 ml, … (+2).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Kp,uu,BBB | `Q410` · Kp | 0.0693 |  |  |  |  | llm_confirmed (0.6) | Tab5:row6:col1 |  |
| 67 | `Q900` · equation variable | 67 |  | 67 |  |  | llm (0.6) | Saleh_2023_table_3:row7:col2 |  |
| Cerebral blood flow | `Q54` · Qb | 0.46134 | ml/min | 7.689e-09 | m3/s | L/h | llm_confirmed (0.6) | Saleh_2023_table_3:row24:col2, Saleh_2023_table_3:row24:col3 |  |
| cyclophosphamide | `Q374` · MW | 261 | g/mol | 0.261 |  | g/(m·ol) | llm (0.6) | Saleh_2023_table_1:row0:col1, Saleh_2023_table_1:row0:col2, Saleh_2023_table_1:row0:col3, Saleh_2023_table_1:row0:col5, Saleh_2023_table_1:row0:col6, Saleh_2023_table_1:row0:col7 |  |
| fu, plasma | `Q46` · fu | 0.26 |  | 0.26 |  |  | llm_confirmed (0.6) | Saleh_2023_table_4:row3:col1, Saleh_2023_table_4:row3:col2, Saleh_2023_table_4:row3:col3, Saleh_2023_table_4:row3:col4, Saleh_2023_table_4:row3:col5, Saleh_2023_table_4:row3:col6, Saleh_2023_table_4:row3:col7, Saleh_2023_table_4:row3:col8, Saleh_2023_table_4:row3:col9, Saleh_2023_table_4:row3:col10 |  |
| Central clearance (ml/min) | `Q22` · CL | 2.09 | ml/min | 3.483e-08 | m3/s | ml/min | llm_confirmed (0.6) | Saleh_2023_table_4:row4:col1, Saleh_2023_table_4:row4:col2, Saleh_2023_table_4:row4:col3, Saleh_2023_table_4:row4:col4, Saleh_2023_table_4:row4:col5, Saleh_2023_table_4:row4:col6, Saleh_2023_table_4:row4:col7, Saleh_2023_table_4:row4:col8, Saleh_2023_table_4:row4:col9, Saleh_2023_table_4:row4:col10 | 0.012 (None% RSE) |
| Intercompartmental clearance (ml/min) | `Q30` · Q | 0.086 | ml/min | 1.433e-09 | m3/s | ml/min | exact (1) | Saleh_2023_table_4:row5:col1, Saleh_2023_table_4:row5:col2, Saleh_2023_table_4:row5:col3, Saleh_2023_table_4:row5:col4, Saleh_2023_table_4:row5:col5, Saleh_2023_table_4:row5:col6, Saleh_2023_table_4:row5:col7, Saleh_2023_table_4:row5:col8, Saleh_2023_table_4:row5:col9, Saleh_2023_table_4:row5:col10 | 0 (None% RSE) |
| Central compartment volume (ml) | `Q63` · V1 | 18.53 | ml | 1.853e-05 | m3 | ml | exact (1) | Saleh_2023_table_4:row6:col1, Saleh_2023_table_4:row6:col2, Saleh_2023_table_4:row6:col3, Saleh_2023_table_4:row6:col4, Saleh_2023_table_4:row6:col5, Saleh_2023_table_4:row6:col6, Saleh_2023_table_4:row6:col7, Saleh_2023_table_4:row6:col8, Saleh_2023_table_4:row6:col9, Saleh_2023_table_4:row6:col10 | 0 (None% RSE) |
| Peripheral compartment volume (ml) | `Q64` · V2 | 1.77 | ml | 1.77e-06 | m3 | ml | exact (1) | Saleh_2023_table_4:row7:col1, Saleh_2023_table_4:row7:col2, Saleh_2023_table_4:row7:col3, Saleh_2023_table_4:row7:col4, Saleh_2023_table_4:row7:col5, Saleh_2023_table_4:row7:col6, Saleh_2023_table_4:row7:col7, Saleh_2023_table_4:row7:col8, Saleh_2023_table_4:row7:col9, Saleh_2023_table_4:row7:col10 | 0 (None% RSE) |
| absorption rate constant (ka) | `Q49` · kabs | 0.61 | h−1 | 0.0001694 | 1/s | 1/h | review_gapfill (0.7) | Alvariza_2025:review |  |
| Lag time (h) | `Q83` · tlag | 1.96 | h | 7056 | s | h | review_gapfill (0.7) | Birbeck_2019:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table Tab5: rows are variants (quinidine, colchicine, ribociclib, topotecan, prexasertib), the parameters are the column headers (Kp,uu,BBB) — read one record per variant
- table section iiv: 'Central clearance' routed out of structural estimates ('Interindividual variability (as variance)')
- table section iiv: 'Intercompartmental clearance' routed out of structural estimates ('Interindividual variability (as variance)')
- table section iiv: 'Central compartment volume' routed out of structural estimates ('Interindividual variability (as variance)')
- table section iiv: 'Peripheral compartment volume' routed out of structural estimates ('Interindividual variability (as variance)')
- table section iiv: '1st order absorption' routed out of structural estimates ('Interindividual variability (as variance)')
- column 'aspect (units)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mwt (g/mol)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'logp' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'pka' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'psa (å2)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'pkb' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Total brain' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row0:col2', 'Saleh_2023_table_3:row0:col3'])
- dropped unlinked row (NIL): '[28]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row1:col0'])
- dropped unlinked row (NIL): '[29]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row2:col0'])
- dropped PD-category row '[30]' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Saleh_2023_table_3:row3:col0', 'Saleh_2023_table_3:row14:col0'])
- dropped unlinked row (NIL): '[31]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row4:col0', 'Saleh_2023_table_3:row13:col0'])
- dropped unlinked row (NIL): '[32]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row5:col0', 'Saleh_2023_table_3:row25:col0'])
- dropped unlinked row (NIL): '[33]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row6:col0'])
- dropped duplicate Q900 ('4', value '1.0275') — already have one for this compound
- dropped unlinked row (NIL): '[37]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row15:col0', 'Saleh_2023_table_3:row16:col0', 'Saleh_2023_table_3:row17:col0', 'Saleh_2023_table_3:row18:col0', 'Saleh_2023_table_3:row19:col0'])
- dropped unlinked row (NIL): '[38]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row27:col0'])
- dropped unlinked row (NIL): '0.000325' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row28:col2'])
- dropped unlinked row (NIL): 'BBB' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row30:col2', 'Saleh_2023_table_3:row30:col3', 'Saleh_2023_table_3:row39:col2'])
- dropped unlinked row (NIL): '[35, 42]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row31:col0'])
- dropped unlinked row (NIL): 'Brain phospholipids' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row41:col2'])
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row42:col2'])
- dropped unlinked row (NIL): '4.8j' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row45:col2'])
- dropped unlinked row (NIL): '[51]' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row48:col0'])
- dropped unlinked row (NIL): 'Brain cell number' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_3:row51:col2'])
- dropped unlinked row (NIL): 'quinidine' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_1:row1:col1', 'Saleh_2023_table_1:row1:col2', 'Saleh_2023_table_1:row1:col3', 'Saleh_2023_table_1:row1:col4', 'Saleh_2023_table_1:row1:col5', 'Saleh_2023_table_1:row1:col6', 'Saleh_2023_table_1:row1:col7'])
- dropped duplicate Q374 ('erlotinib', value '393') — already have one for this compound
- dropped unlinked row (NIL): 'phenobarbital' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_1:row3:col1', 'Saleh_2023_table_1:row3:col2', 'Saleh_2023_table_1:row3:col3', 'Saleh_2023_table_1:row3:col5', 'Saleh_2023_table_1:row3:col6', 'Saleh_2023_table_1:row3:col7'])
- dropped unlinked row (NIL): 'colchicine' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_1:row4:col1', 'Saleh_2023_table_1:row4:col2', 'Saleh_2023_table_1:row4:col3', 'Saleh_2023_table_1:row4:col4', 'Saleh_2023_table_1:row4:col5', 'Saleh_2023_table_1:row4:col6', 'Saleh_2023_table_1:row4:col7'])
- dropped duplicate Q374 ('ribociclib', value '435') — already have one for this compound
- dropped unlinked row (NIL): 'topotecan' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_1:row6:col1', 'Saleh_2023_table_1:row6:col2', 'Saleh_2023_table_1:row6:col3', 'Saleh_2023_table_1:row6:col4', 'Saleh_2023_table_1:row6:col5', 'Saleh_2023_table_1:row6:col6', 'Saleh_2023_table_1:row6:col7'])
- dropped duplicate Q374 ('cefadroxil', value '363') — already have one for this compound
- dropped unlinked row (NIL): 'prexasertib' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_1:row8:col1', 'Saleh_2023_table_1:row8:col2', 'Saleh_2023_table_1:row8:col3', 'Saleh_2023_table_1:row8:col4', 'Saleh_2023_table_1:row8:col5', 'Saleh_2023_table_1:row8:col6', 'Saleh_2023_table_1:row8:col7'])
- dropped duplicate Q374 ('methotrexate', value '454') — already have one for this compound
- dropped unlinked row (NIL): 'Dose (mg/kg)' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_4:row0:col1', 'Saleh_2023_table_4:row0:col2', 'Saleh_2023_table_4:row0:col3', 'Saleh_2023_table_4:row0:col4', 'Saleh_2023_table_4:row0:col5', 'Saleh_2023_table_4:row0:col6', 'Saleh_2023_table_4:row0:col7', 'Saleh_2023_table_4:row0:col8', 'Saleh_2023_table_4:row0:col9', 'Saleh_2023_table_4:row0:col10'])
- dropped '1st order absorption (1/min)' → Q49 = 0: a rate of 0 is not a parameter value (source ['Saleh_2023_table_4:row8:col1', 'Saleh_2023_table_4:row8:col2', 'Saleh_2023_table_4:row8:col3', 'Saleh_2023_table_4:row8:col4', 'Saleh_2023_table_4:row8:col5', 'Saleh_2023_table_4:row8:col6', 'Saleh_2023_table_4:row8:col7', 'Saleh_2023_table_4:row8:col8', 'Saleh_2023_table_4:row8:col9', 'Saleh_2023_table_4:row8:col10'])
- dropped unlinked row (NIL): 'Duration (min)' — extend the ontology if this is a real PK parameter (source ['Saleh_2023_table_4:row9:col1', 'Saleh_2023_table_4:row9:col2', 'Saleh_2023_table_4:row9:col3', 'Saleh_2023_table_4:row9:col4', 'Saleh_2023_table_4:row9:col5', 'Saleh_2023_table_4:row9:col6', 'Saleh_2023_table_4:row9:col7', 'Saleh_2023_table_4:row9:col8', 'Saleh_2023_table_4:row9:col9', 'Saleh_2023_table_4:row9:col10'])
- implicit units: 'Cerebral blood flow' → ml/min (from the paper text: "In Table III, the section for 'Cerebral blood flow' falls under the header 'Flow (ml/min)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Phenobarbital
- estimate-method split: 'ribociclib' is one of 5 estimates of Saleh_2023's substance matrix (quinidine, colchicine, ribociclib, topotecan, prexasertib); same population, different estimation method
- gap-filled Q49 (kabs) from Alvariza_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Birbeck_2019's review values (primary lacked it)

**Extraction notes:**
- table Tab5: units_need_context
- table Tab5: unparsed_numeric_cell
- table Saleh_2023_table_3: missing_label
- table Saleh_2023_table_3: unbound_uncertainty
- table Saleh_2023_table_3: ragged_grid
- table Saleh_2023_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (32 record(s))
- companion parameter table 1 transcribed (68 record(s))
- companion parameter table 4 transcribed (150 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Saleh_2023_table_4:row4:col1', 'Saleh_2023_table_4:row4:col2', 'Saleh_2023_table_4:row4:col3', 'Saleh_2023_table_4:row4:col4', 'Saleh_2023_table_4:row4:col5', 'Saleh_2023_table_4:row4:col6', 'Saleh_2023_table_4:row4:col7', 'Saleh_2023_table_4:row4:col8', 'Saleh_2023_table_4:row4:col9', 'Saleh_2023_table_4:row4:col10'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Saleh_2023_table_4:row5:col1', 'Saleh_2023_table_4:row5:col2', 'Saleh_2023_table_4:row5:col3', 'Saleh_2023_table_4:row5:col4', 'Saleh_2023_table_4:row5:col5', 'Saleh_2023_table_4:row5:col6', 'Saleh_2023_table_4:row5:col7', 'Saleh_2023_table_4:row5:col8', 'Saleh_2023_table_4:row5:col9', 'Saleh_2023_table_4:row5:col10'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Saleh_2023_table_1:row0:col1', 'Saleh_2023_table_1:row0:col2', 'Saleh_2023_table_1:row0:col3', 'Saleh_2023_table_1:row0:col5', 'Saleh_2023_table_1:row0:col6', 'Saleh_2023_table_1:row0:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alvariza_2025:review'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['Saleh_2023_table_3:row24:col2', 'Saleh_2023_table_3:row24:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Saleh_2023_table_4:row6:col1', 'Saleh_2023_table_4:row6:col2', 'Saleh_2023_table_4:row6:col3', 'Saleh_2023_table_4:row6:col4', 'Saleh_2023_table_4:row6:col5', 'Saleh_2023_table_4:row6:col6', 'Saleh_2023_table_4:row6:col7', 'Saleh_2023_table_4:row6:col8', 'Saleh_2023_table_4:row6:col9', 'Saleh_2023_table_4:row6:col10'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Saleh_2023_table_4:row7:col1', 'Saleh_2023_table_4:row7:col2', 'Saleh_2023_table_4:row7:col3', 'Saleh_2023_table_4:row7:col4', 'Saleh_2023_table_4:row7:col5', 'Saleh_2023_table_4:row7:col6', 'Saleh_2023_table_4:row7:col7', 'Saleh_2023_table_4:row7:col8', 'Saleh_2023_table_4:row7:col9', 'Saleh_2023_table_4:row7:col10'] |
| C5_dimension_Q83 | pass | [time] |  | ['Birbeck_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.09 | ['Saleh_2023_table_4:row4:col1', 'Saleh_2023_table_4:row4:col2', 'Saleh_2023_table_4:row4:col3', 'Saleh_2023_table_4:row4:col4', 'Saleh_2023_table_4:row4:col5', 'Saleh_2023_table_4:row4:col6', 'Saleh_2023_table_4:row4:col7', 'Saleh_2023_table_4:row4:col8', 'Saleh_2023_table_4:row4:col9', 'Saleh_2023_table_4:row4:col10'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.125 L/h | ['Saleh_2023_table_4:row4:col1', 'Saleh_2023_table_4:row4:col2', 'Saleh_2023_table_4:row4:col3', 'Saleh_2023_table_4:row4:col4', 'Saleh_2023_table_4:row4:col5', 'Saleh_2023_table_4:row4:col6', 'Saleh_2023_table_4:row4:col7', 'Saleh_2023_table_4:row4:col8', 'Saleh_2023_table_4:row4:col9', 'Saleh_2023_table_4:row4:col10'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0185 L | ['Saleh_2023_table_4:row6:col1', 'Saleh_2023_table_4:row6:col2', 'Saleh_2023_table_4:row6:col3', 'Saleh_2023_table_4:row6:col4', 'Saleh_2023_table_4:row6:col5', 'Saleh_2023_table_4:row6:col6', 'Saleh_2023_table_4:row6:col7', 'Saleh_2023_table_4:row6:col8', 'Saleh_2023_table_4:row6:col9', 'Saleh_2023_table_4:row6:col10'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.00177 L | ['Saleh_2023_table_4:row7:col1', 'Saleh_2023_table_4:row7:col2', 'Saleh_2023_table_4:row7:col3', 'Saleh_2023_table_4:row7:col4', 'Saleh_2023_table_4:row7:col5', 'Saleh_2023_table_4:row7:col6', 'Saleh_2023_table_4:row7:col7', 'Saleh_2023_table_4:row7:col8', 'Saleh_2023_table_4:row7:col9', 'Saleh_2023_table_4:row7:col10'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenobarbital%5D%20Phenobarbital_Saleh2023_ribociclib&body=Drug%3A%20phenobarbital%0ARecord%3A%20Phenobarbital_Saleh2023_ribociclib%0APaper%3A%20Saleh_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenobarbital/Phenobarbital_Saleh2023_ribociclib%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 17:06 UTC</sub>
