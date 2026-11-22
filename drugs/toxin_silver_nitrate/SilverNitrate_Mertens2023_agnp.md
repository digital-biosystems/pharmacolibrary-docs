<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Silver nitrate&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/&quot;},{&quot;label&quot;:&quot;Mertens_2023 \u00b7 agnp&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SilverNitrate_Khodaparast2023_reference&quot;,&quot;label&quot;:&quot;Khodaparast_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/SilverNitrate_Khodaparast2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SilverNitrate_Santos2023_reference&quot;,&quot;label&quot;:&quot;Santos_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/SilverNitrate_Santos2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SilverNitrate_Straub2001_reference&quot;,&quot;label&quot;:&quot;Straub_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/SilverNitrate_Straub2001_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SilverNitrate_Andriamasinoro2023_reference&quot;,&quot;label&quot;:&quot;Andriamasinoro_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/SilverNitrate_Andriamasinoro2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SilverNitrate_Mertens2023_agac&quot;,&quot;label&quot;:&quot;Mertens_2023_agac&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agac.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SilverNitrate_Mertens2023_agno3&quot;,&quot;label&quot;:&quot;Mertens_2023_agno3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agno3.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SilverNitrate_Mertens2023_agnp&quot;,&quot;label&quot;:&quot;Mertens_2023_agnp&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Silver nitrate — `SilverNitrate_Mertens2023_agnp`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 2.5, model 0.183); the model does not reproduce the paper's terminal half-life.

<div class="pk-model-meta" hidden drug="Silver nitrate" model-id="SilverNitrate_Mertens2023_agnp" status="needs_review" stale="false" population="male and female Sprague-Dawley rats" measured-compound="Silver (total Ag)" parameterization="mechanistic" topology="retention"></div>

## Citation
Mertens J, Alami A, Arijs K. Comparative in vivo toxicokinetics of silver powder, nanosilver and soluble silver compounds after oral administration to rats. Archives of toxicology 97(7):1859–1872 (2023).
  ·  DOI: [10.1007/s00204-023-03511-6](https://doi.org/10.1007/s00204-023-03511-6)

## Population and dosing

**Population:** male and female Sprague-Dawley rats · condition healthy.

**Dosing:** 2520, 3850, 8750, 70000 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Silver nitrate, measured Silver (total Ag).

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) M | Cmax | 71.2 | ng/mL |
| Tmax (h) M | tmax | 6 | h |
| t1/2 (h) M | t1/2z | 32.2 | h |
| AUC(0–24) (ng.h/mL) M | AUC | 1130 | ng.h/mL |
| AUC(0–24) (ng.h/mL) F | AUCt | 2000 | ng.h/mL |
| DN AUC (0–24) (ng.h/mL)/ (mg/kg bw/d) M | AUC/dose | 1 | ng.h/mL |
| AUC(0–t) (ng.h/mL) F | AUClast | 4320 | ng.h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 2.5, model 0.183); the model does not reproduce the paper's terminal half-life.**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — silver nitrate: Cmax 71.2 ng/mL, tmax 6 h, t1/2z 32.2 h, AUC 1.13e+03 ng.h/mL, AUCt 2e+03 ng.h/mL, AUC/dose 1 ng.h/mL, AUClast 4.32e+03 ng.h/mL.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) M | `Q32` · Cmax | 71.2 | ng/mL | 7.12e-05 | kg/m3 | ng/ml | llm_confirmed (0.6) | Mertens_2023_table_3:row1:col2, Mertens_2023_table_3:row2:col2, Mertens_2023_table_3:row3:col2, Mertens_2023_table_3:row5:col2, Mertens_2023_table_3:row7:col2 |
| Tmax (h) M | `Q56` · tmax | 6 | h | 2.16e+04 | s | h | llm_confirmed (0.6) | Mertens_2023_table_3:row1:col4, Mertens_2023_table_3:row2:col4, Mertens_2023_table_3:row3:col4, Mertens_2023_table_3:row5:col4, Mertens_2023_table_3:row7:col4 |
| t1/2 (h) M | `Q57` · t1/2z | 32.2 | h | 1.159e+05 | s | h | llm_confirmed (0.6) | Mertens_2023_table_3:row1:col6, Mertens_2023_table_3:row2:col6, Mertens_2023_table_3:row3:col6, Mertens_2023_table_3:row7:col6 |
| AUC(0–24) (ng.h/mL) M | `Q88` · AUC | 1130 | ng.h/mL | 4.068 | kg*s/m3 | (h·ng)/ml | llm_confirmed (0.6) | Mertens_2023_table_3:row1:col8, Mertens_2023_table_3:row2:col8, Mertens_2023_table_3:row3:col8, Mertens_2023_table_3:row5:col8, Mertens_2023_table_3:row7:col8 |
| AUC(0–24) (ng.h/mL) F | `Q19` · AUCt | 2000 | ng.h/mL | 7.2 | kg*s/m3 | (h·ng)/ml | llm_corrected (0.6) | Mertens_2023_table_3:row1:col9, Mertens_2023_table_3:row2:col9, Mertens_2023_table_3:row3:col9, Mertens_2023_table_3:row5:col9, Mertens_2023_table_3:row7:col9 |
| DN AUC (0–24) (ng.h/mL)/ (mg/kg bw/d) M | `Q189` · AUC/dose | 1 | ng.h/mL | 0.0036 | kg*s/m3 | (h·ng)/ml | llm_corrected (0.6) | Mertens_2023_table_3:row1:col10, Mertens_2023_table_3:row2:col10, Mertens_2023_table_3:row3:col10, Mertens_2023_table_3:row5:col10, Mertens_2023_table_3:row7:col10 |
| AUC(0–t) (ng.h/mL) F | `Q74` · AUClast | 4320 | ng.h/mL | 15.55 | kg*s/m3 | (h·ng)/ml | llm_corrected (0.6) | Mertens_2023_table_3:row1:col13, Mertens_2023_table_3:row2:col13 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 (h) M (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose level (mg/kg bw)' — extend the ontology if this is a real PK parameter (source ['Mertens_2023_table_3:row1:col1', 'Mertens_2023_table_3:row2:col1', 'Mertens_2023_table_3:row3:col1', 'Mertens_2023_table_3:row5:col1', 'Mertens_2023_table_3:row7:col1'])
- dropped duplicate Q32 ('Cmax (ng/mL) F', value '128') — already have one for this compound
- dropped duplicate Q56 ('Tmax (h) F', value '7.5') — already have one for this compound
- dropped duplicate Q57 ('t1/2 (h) F', value '30.2') — already have one for this compound
- dropped duplicate Q189 ('DN AUC (0–24) (ng.h/mL)/ (mg/kg bw/d) F', value '2') — already have one for this compound
- dropped duplicate Q19 ('AUC(0–t) (ng.h/mL) M', value '2320') — already have one for this compound
- dropped duplicate Q189 ('DN AUC (0–t) (ng.h/mL)/ (mg/kg bw/d) M', value '2') — already have one for this compound
- dropped duplicate Q189 ('DN AUC (0–t) (ng.h/mL)/ (mg/kg bw/d) F', value '4') — already have one for this compound
- dropped value-less row: 'Table 3. Selected TK parameters following single oral administration of the Ag test items'
- dropped value-less row: 'Mean values for TK parameters are reported (based on a sub-group size of 4 animals per sex; M = male, F = female).'
- dropped value-less row: 'Dose levels are stated as mg/kg bw with Ag equivalent dose levels added in square parentheses for AgAc and AgNO3a'
- dropped value-less row: 'TK parameters: maximum observed Ag in whole blood concentration (Cmax);'
- dropped value-less row: 'time of Cmax (Tmax);'
- dropped value-less row: 'calculated elimination half-time (t1/2);'
- dropped value-less row: 'Area Under the Curve (AUC) and dose-normalised AUC (DN AUC) from 0–24 h [DN AUC0-24], and from time 0 to the last measurement [DN AUC0-t];'
- dropped value-less row: 'bND Parameter not determinable'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Silver (total Ag)
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'agnp' subgroup of Mertens_2023 (paper reports 3 populations: agac, agno3, agnp)
- molar mass: no plausible PubChem entry for 'Silver (total Ag)' ('Silver (total Ag)') — left in mass units
- molar mass: none found for 'Silver (total Ag)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Silver (total Ag)', not silver_nitrate — the review values are the parent's

**Extraction notes:**
- table Mertens_2023_table_3: ambiguous_numeric_format
- transposed table Mertens_2023_table_3: logical view retains original source coordinates
- table Mertens_2023_table_4: ambiguous_numeric_format
- transposed table Mertens_2023_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (27 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q189 | pass | [mass] * [time] / [length] ** 3 |  | ['Mertens_2023_table_3:row1:col10', 'Mertens_2023_table_3:row2:col10', 'Mertens_2023_table_3:row3:col10', 'Mertens_2023_table_3:row5:col10', 'Mertens_2023_table_3:row7:col10'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Mertens_2023_table_3:row1:col9', 'Mertens_2023_table_3:row2:col9', 'Mertens_2023_table_3:row3:col9', 'Mertens_2023_table_3:row5:col9', 'Mertens_2023_table_3:row7:col9'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Mertens_2023_table_3:row1:col2', 'Mertens_2023_table_3:row2:col2', 'Mertens_2023_table_3:row3:col2', 'Mertens_2023_table_3:row5:col2', 'Mertens_2023_table_3:row7:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Mertens_2023_table_3:row1:col4', 'Mertens_2023_table_3:row2:col4', 'Mertens_2023_table_3:row3:col4', 'Mertens_2023_table_3:row5:col4', 'Mertens_2023_table_3:row7:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Mertens_2023_table_3:row1:col6', 'Mertens_2023_table_3:row2:col6', 'Mertens_2023_table_3:row3:col6', 'Mertens_2023_table_3:row7:col6'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Mertens_2023_table_3:row1:col13', 'Mertens_2023_table_3:row2:col13'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Mertens_2023_table_3:row1:col8', 'Mertens_2023_table_3:row2:col8', 'Mertens_2023_table_3:row3:col8', 'Mertens_2023_table_3:row5:col8', 'Mertens_2023_table_3:row7:col8'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Silver (total Ag)) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  |  | no second reading of this record |
| T1_cmax | reference | skipped | 64–68 | 0.9982 |  | unresolved concentration unit (exp 'ng Ag/mL', sim 'kg/m3') |
| T1_cmax | reference | skipped | 71–128 | 0.9982 |  | unresolved concentration unit (exp 'ng Ag/mL', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped |  | 32.2 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 22 | 32.2 | 1.464 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 18 | 32.2 | 1.789 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.5 | 0.1833 | 0.0733 | h→SI vs simulated h |
| T1_tmax | reference | fail | 15 | 0.1833 | 0.0122 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp/SilverNitrate_Mertens2023_agnp_modelica.zip" download>SilverNitrate_Mertens2023_agnp_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp/SilverNitrate_Mertens2023_agnp_fmi.zip" download>SilverNitrate_Mertens2023_agnp_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp/SilverNitrate_Mertens2023_agnp_matlab.zip" download>SilverNitrate_Mertens2023_agnp_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp/SilverNitrate_Mertens2023_agnp_sbml.zip" download>SilverNitrate_Mertens2023_agnp_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp/SilverNitrate_Mertens2023_agnp_cellml.zip" download>SilverNitrate_Mertens2023_agnp_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00252 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1.159e+05 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Mertens J, Alami A, Arijs K. Comparative in vivo toxicokinetics of silver powder, nanosilver and soluble silver compounds after oral administration to rats. Archives of toxicology 97(7):1859–1872 (2023). [doi:10.1007/s00204-023-03511-6](https://doi.org/10.1007/s00204-023-03511-6)

**This record:** Pharmacolibrary, model `SilverNitrate_Mertens2023_agnp`. <https://pharmacolibrary.github.io/#/drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp>

```bibtex
@misc{pharmacolibrary_SilverNitrateMertens2023agnp,
  title  = {{Pharmacolibrary model SilverNitrate_Mertens2023_agnp}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp},
  note   = {Parameters from doi:10.1007/s00204-023-03511-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp/SilverNitrate_Mertens2023_agnp_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp/SilverNitrate_Mertens2023_agnp_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `SilverNitrate_Mertens2023_agnp_params.json` · controls `SilverNitrate_Mertens2023_agnp_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsilver_nitrate%5D%20SilverNitrate_Mertens2023_agnp&body=Drug%3A%20silver_nitrate%0ARecord%3A%20SilverNitrate_Mertens2023_agnp%0APaper%3A%20Mertens_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_silver_nitrate/SilverNitrate_Mertens2023_agnp%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 13:27 UTC</sub>
