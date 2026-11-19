<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mepivacaine&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/&quot;},{&quot;label&quot;:&quot;Simon_2002 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mepivacaine_Burm1997_reference&quot;,&quot;label&quot;:&quot;Burm_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Burm1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Copeland2008_reference&quot;,&quot;label&quot;:&quot;Copeland_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Copeland2008_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Duan2017_reference&quot;,&quot;label&quot;:&quot;Duan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Duan2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Mather1991_reference&quot;,&quot;label&quot;:&quot;Mather_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Mather1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mepivacaine_Simon2002_reference&quot;,&quot;label&quot;:&quot;Simon_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mepivacaine — `Mepivacaine_Simon2002_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life; the model does not reproduce the paper's time of the peak (tmax).

<div class="pk-model-meta" hidden drug="Mepivacaine" model-id="Mepivacaine_Simon2002_reference" status="needs_review" stale="false" population="patients undergoing axillary brachial plexus anaesthesia" measured-compound="Mepivacaine" parameterization="mechanistic" topology="retention"></div>

## Citation
Simon MA, Vree TB, Gielen MJ, Booij LH, Lagerwerf AJ. Similar motor block effects and disposition kinetics between lidocaine and (+/-)mepivacaine in patients undergoing axillary brachial plexus block during day case surgery. TheScientificWorldJournal 2:1306–1319 (2002).
  ·  DOI: [10.1100/tsw.2002.180](https://doi.org/10.1100/tsw.2002.180)

## Population and dosing

**Population:** patients undergoing axillary brachial plexus anaesthesia · condition healthy · age group adult · n = &gt;=15.

**Dosing:** 600 mg, other, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUCt | AUCt | 2.22 | mg h L^-1 |
| AUC₀₋₃ₕ | AUC | 0.67 | mg h L^-1 |
| % AUCparent | AUC ratio | 13.0 |  |
| t₁/₂absorption | t1/2ka | 0.70 | h |
| t₁/₂β | t1/2β | 2.36 | h |
| MRT | MRT | 5.32 | h |
| tmax | tmax | 2.31 | h |
| Cmax | Cmax | 0.32 | mg L^-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life; the model does not reproduce the paper's time of the peak (tmax).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUCt, AUC and Cmax), so that value has no SI equivalent. None of the extracted parameters is mepivacaine's own; they describe MEGX and Lidocaine. Extracted — MEGX: AUCt 2.22 mg h L^-1, AUC 0.67 mg h L^-1, AUC ratio 13; Lidocaine: t1/2ka 0.7 h, t1/2β 2.36 h, MRT 5.32 h, tmax 2.31 h, Cmax 0.32 mg L^-1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUCt | `Q19` · AUCt | 2.22 | mg h L^-1 |  |  | mg h L^-1 | exact (1) | Simon_2002_table_4:row6:col2, Simon_2002_table_4:row6:col3, Simon_2002_table_4:row6:col4, Simon_2002_table_4:row6:col5, Simon_2002_table_4:row6:col6, Simon_2002_table_4:row6:col7 |
| AUC₀₋₃ₕ | `Q88` · AUC | 0.67 | mg h L^-1 |  |  | mg h L^-1 | llm (0.6) | Simon_2002_table_4:row7:col2, Simon_2002_table_4:row7:col3, Simon_2002_table_4:row7:col4, Simon_2002_table_4:row7:col5, Simon_2002_table_4:row7:col6, Simon_2002_table_4:row7:col7 |
| % AUCparent | `Q21` · AUC ratio | 13.0 |  | 13 |  |  | llm (0.6) | Simon_2002_table_4:row8:col2, Simon_2002_table_4:row8:col4, Simon_2002_table_4:row8:col6 |
| t₁/₂absorption | `Q95` · t1/2ka | 0.70 | h | 2520 | s | h | half_life_rule (0.95) | Simon_2002_table_4:row9:col2, Simon_2002_table_4:row9:col3, Simon_2002_table_4:row9:col4, Simon_2002_table_4:row9:col5, Simon_2002_table_4:row9:col6, Simon_2002_table_4:row9:col7 |
| t₁/₂β | `Q60` · t1/2β | 2.36 | h | 8496 | s | h | half_life_rule (0.95) | Simon_2002_table_4:row10:col2, Simon_2002_table_4:row10:col3, Simon_2002_table_4:row10:col4, Simon_2002_table_4:row10:col5, Simon_2002_table_4:row10:col6, Simon_2002_table_4:row10:col7 |
| MRT | `Q53` · MRT | 5.32 | h | 1.915e+04 | s | h | exact (1) | Simon_2002_table_4:row11:col2, Simon_2002_table_4:row11:col4, Simon_2002_table_4:row11:col5, Simon_2002_table_4:row11:col6, Simon_2002_table_4:row11:col7 |
| tmax | `Q56` · tmax | 2.31 | h | 8316 | s | h | exact (1) | Simon_2002_table_4:row12:col2, Simon_2002_table_4:row12:col3, Simon_2002_table_4:row12:col4, Simon_2002_table_4:row12:col5, Simon_2002_table_4:row12:col6, Simon_2002_table_4:row12:col7 |
| Cmax | `Q32` · Cmax | 0.32 | mg L^-1 |  |  | mg L^-1 | exact (1) | Simon_2002_table_4:row13:col2, Simon_2002_table_4:row13:col3, Simon_2002_table_4:row13:col4, Simon_2002_table_4:row13:col5, Simon_2002_table_4:row13:col6, Simon_2002_table_4:row13:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t₁/₂β (Q60)
- `ka_from_half_life`: ka = ln2 / t1/2ka = ln2 / 2520 s = 0.0002751/s (absorption half-life 0.70 h reported, ka not)

**Interpretation flags:**
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'p*' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row1:col2'])
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row1:col4'])
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row1:col5'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row2:col2'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row2:col4'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row2:col5'])
- dropped unlinked row (NIL): 'Length' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row3:col2'])
- dropped unlinked row (NIL): 'Length' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row3:col4'])
- dropped unlinked row (NIL): 'Length' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row3:col5'])
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row4:col2'])
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Simon_2002_table_4:row4:col4'])
- implicit units: 'AUCt' → mg h L^-1 (from the paper text: "The text states: 'AUC t , AUC ∞ , the area under the plasma concentration-time curve (mg h l -1 )'")
- implicit units: 'AUC₀₋₃ₕ' → mg h L^-1 (from the paper text: "The text defines AUC generally as 'area under the plasma concentration-time curve (mg h l -1 )'. AUC_0-3h is a specific ")
- implicit units: 't₁/₂absorption' → h (from the paper text: "The text states: 't 1/2absorption , the absorption half-life (h)'")
- implicit units: 't₁/₂β' → h (from the paper text: "The text states: 't 1/2β that of the terminal elimination phase' and explicitly gives examples like 't 1/2β of 2.86 ± 1.")
- implicit units: 'MRT' → h (from the popPK convention: 'The paper does not explicitly state the unit for MRT. However, MRT is a time parameter. Other time parameters in the tex')
- implicit units: 'tmax' → h (from the paper text: "The text states: 't max, the time (h) at which C max occurred' and in the abstract 't max 2.31 ± 0.84 h'.")
- implicit units: 'Cmax' → mg L^-1 (from the paper text: "The text states: 'C max , the maximum plasma concentration (mg l -1 )' and in the abstract 'C max 0.32 ± 0.13 mg l -1'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Mepivacaine
- toxin: 3 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- base model from table(s) without population columns (Simon_2002_table_4); populations mepivacaine kept as separate records
- row roles: 4 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles: 8 per-group rows of Lidocaine summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of Lidocaine clearance but 0 reference group(s) — kept as printed
- row roles: 3 per-group rows of MEGX summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 19/19 row label(s) assigned, 7 linked by role; re-tagged Mepivacaine→Lidocaine ×15, parent→Lidocaine ×29, Lidocaine→MEGX ×3, parent→MEGX ×9, Mepivacaine→MEGX ×3
- molar mass: none of 1 PubChem candidate(s) is 'MEGX' (LLM) — left in mass units
- molar mass: none found for 'MEGX' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 4
- table Simon_2002_table_3: missing_label
- table Simon_2002_table_3: units_need_context
- table Simon_2002_table_3: unparsed_numeric_cell
- table Simon_2002_table_4: missing_label
- table Simon_2002_table_4: units_need_context
- table Simon_2002_table_4: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Simon_2002_table_4:row6:col2', 'Simon_2002_table_4:row6:col3', 'Simon_2002_table_4:row6:col4', 'Simon_2002_table_4:row6:col5', 'Simon_2002_table_4:row6:col6', 'Simon_2002_table_4:row6:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Simon_2002_table_4:row13:col2', 'Simon_2002_table_4:row13:col3', 'Simon_2002_table_4:row13:col4', 'Simon_2002_table_4:row13:col5', 'Simon_2002_table_4:row13:col6', 'Simon_2002_table_4:row13:col7'] |
| C5_dimension_Q53 | pass | [time] |  | ['Simon_2002_table_4:row11:col2', 'Simon_2002_table_4:row11:col4', 'Simon_2002_table_4:row11:col5', 'Simon_2002_table_4:row11:col6', 'Simon_2002_table_4:row11:col7'] |
| C5_dimension_Q56 | pass | [time] |  | ['Simon_2002_table_4:row12:col2', 'Simon_2002_table_4:row12:col3', 'Simon_2002_table_4:row12:col4', 'Simon_2002_table_4:row12:col5', 'Simon_2002_table_4:row12:col6', 'Simon_2002_table_4:row12:col7'] |
| C5_dimension_Q60 | pass | [time] |  | ['Simon_2002_table_4:row10:col2', 'Simon_2002_table_4:row10:col3', 'Simon_2002_table_4:row10:col4', 'Simon_2002_table_4:row10:col5', 'Simon_2002_table_4:row10:col6', 'Simon_2002_table_4:row10:col7'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Simon_2002_table_4:row7:col2', 'Simon_2002_table_4:row7:col3', 'Simon_2002_table_4:row7:col4', 'Simon_2002_table_4:row7:col5', 'Simon_2002_table_4:row7:col6', 'Simon_2002_table_4:row7:col7'] |
| C5_dimension_Q95 | pass | [time] |  | ['Simon_2002_table_4:row9:col2', 'Simon_2002_table_4:row9:col3', 'Simon_2002_table_4:row9:col4', 'Simon_2002_table_4:row9:col5', 'Simon_2002_table_4:row9:col6', 'Simon_2002_table_4:row9:col7'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Mepivacaine) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.9954 |  | non-numeric value |
| T1_cmax | reference | skipped | 2.87 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.32 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.89 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 2.87 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.89 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.32 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.56 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.45 | 0.9954 |  | unresolved concentration unit (exp 'mg l -1', sim 'kg/m3') |
| T1_t_half_alpha | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.098 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 9.95 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 9.95 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 9.95 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 23.9 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.63 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  | 2.361 |  | non-numeric value |
| T1_t_half_beta | reference | skipped |  | 2.361 |  | non-numeric value |
| T1_t_half_beta | reference | fail | 0.06667 | 2.361 | 35.41 | min→SI vs simulated h |
| T1_t_half_beta | reference | pass | 2.86 | 2.361 | 0.8255 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 2.86 | 2.361 | 0.8255 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.78 | 2.361 | 0.4939 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 2.86 | 2.361 | 0.8255 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.78 | 2.361 | 0.4939 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 2.361 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 0.14 | 2.361 | 16.86 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.7 | 2.361 | 3.373 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 4.78 | 2.361 | 0.4939 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.14 | 2.361 | 16.86 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.064 | 2.361 | 36.89 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.7 | 2.361 | 3.373 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.2 | 2.361 | 1.967 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.79 | 2.361 | 2.988 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.36 | 2.361 | 1 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.48 | 2.361 | 1.595 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.48 | 2.361 | 0.3643 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.9 | 2.361 | 0.8141 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 4.8 | 2.361 | 0.4918 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.0481 |  | non-numeric value |
| T1_tmax | reference | fail | 0.43 | 0.0481 | 0.1119 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.31 | 0.0481 | 0.0208 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.41 | 0.0481 | 0.1173 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.43 | 0.0481 | 0.1119 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.41 | 0.0481 | 0.1173 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.31 | 0.0481 | 0.0208 | h→SI vs simulated h |
| T1_tmax | reference | fail | 3.19 | 0.0481 | 0.0151 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.86 | 0.0481 | 0.0259 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.43 | 0.0481 | 0.1119 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.41 | 0.0481 | 0.1173 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference/Mepivacaine_Simon2002_reference_modelica.zip" download>Mepivacaine_Simon2002_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference/Mepivacaine_Simon2002_reference_fmi.zip" download>Mepivacaine_Simon2002_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference/Mepivacaine_Simon2002_reference_matlab.zip" download>Mepivacaine_Simon2002_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference/Mepivacaine_Simon2002_reference_sbml.zip" download>Mepivacaine_Simon2002_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference/Mepivacaine_Simon2002_reference_cellml.zip" download>Mepivacaine_Simon2002_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2464 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 8496 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Simon MA, Vree TB, Gielen MJ, Booij LH, Lagerwerf AJ. Similar motor block effects and disposition kinetics between lidocaine and (+/-)mepivacaine in patients undergoing axillary brachial plexus block during day case surgery. TheScientificWorldJournal 2:1306–1319 (2002). [doi:10.1100/tsw.2002.180](https://doi.org/10.1100/tsw.2002.180)

**This record:** Pharmacolibrary, model `Mepivacaine_Simon2002_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference>

```bibtex
@misc{pharmacolibrary_MepivacaineSimon2002reference,
  title  = {{Pharmacolibrary model Mepivacaine_Simon2002_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference},
  note   = {Parameters from doi:10.1100/tsw.2002.180},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference/Mepivacaine_Simon2002_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference/Mepivacaine_Simon2002_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Mepivacaine_Simon2002_reference_params.json` · controls `Mepivacaine_Simon2002_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmepivacaine%5D%20Mepivacaine_Simon2002_reference&body=Drug%3A%20mepivacaine%0ARecord%3A%20Mepivacaine_Simon2002_reference%0APaper%3A%20Simon_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mepivacaine/Mepivacaine_Simon2002_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 01:54 UTC</sub>
