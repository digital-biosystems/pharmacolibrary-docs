<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Miralles-Garc\u00eda_1981 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_MirallesGarca1981_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> This record was reviewed on 2026-11-05 12:24 UTC (Rejected), but the paper was screened again on 2026-11-04 00:27 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Levothyroxine record rejected because triiodothyronine (T3) is an unlinked metabolite and clearance uses a non-standard unit.

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_MirallesGarca1981_reference" status="rejected" stale="true" population="ewes with or without acute liver insufficiency" measured-compound="triiodothyronine (T3) or thyroxine (T4)" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Miralles-García JM, García-Iglesias C, Garcá-Díez LC, De Pablo-Dávilà F. The kinetics of the thyroid hormones and the peripheral conversion rate of thyroxine to triiodothyronine in acute liver insufficiency under experimental conditions. Hormone and metabolic research = Hormon- und Stoffwechselforschung = Hormones et metabolisme 13(3):158–164 (1981).
  ·  DOI: [10.1055/s-2007-1019205](https://doi.org/10.1055/s-2007-1019205)

## Population and dosing

**Population:** ewes with or without acute liver insufficiency · condition acute liver insufficiency (induced) vs healthy · n = /&gt;.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α (h⁻¹) | λ1 | 0.227 | h⁻¹ |
| β (h⁻¹) | kel | 0.024 | h⁻¹ |
| t 1/2 α (h) | t1/2α | 3.06 | h |
| t 1/2β (h) | t1/2β | 28.18 | h |
| K₁₂ (h⁻¹) | k12 | 0.018 | h⁻¹ |
| K₂₁ (h⁻¹) | k21 | 0.027 | h⁻¹ |
| K₁₃ (h⁻¹) | k13 | 0.206 | h⁻¹ |
| Vc (l) | V1 | 5.11 | l |
| Vp (l) | V2 | 3.40 | l |
| Vdss (l) | Vss | 8.51 | l |
| MCR (l/d/kg) | CL | 0.789 | l/d/kg |
| t (µg/d/kg) | equation variable | 0.434 | µg/d/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Levothyroxine record rejected because triiodothyronine (T3) is an unlinked metabolite and clearance uses a non-standard unit.**

The model links thyroxine (T4) to triiodothyronine (T3) but T3 remains an orphan metabolite with no path from the dose. Total clearance is reported in liters per day per kilogram, a unit that could not be converted to standard SI units, leaving the parameter without a valid SI value. The second reader disputes the link type and notes that k13, k21, and m were extracted but are inconsistent with their reading of the record. Extracted — levothyroxine: λ1 0.211 h-1, kel 0.014 h-1, t1/2α 3.28 h, t1/2β 49.5 h, k12 0.102 h-1, k21 0.09 h-1, k13 0.036 h-1, V1 2.09 l, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has triiodothyronine (T3) or thyroxine (T4), the second reading thyroxine (T4); it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α (h⁻¹) | `Q67` · λ1 | 0.227 | h⁻¹ |  |  | 1/h | exact (1) | Miralles-García_1981_table_1:row5:col3, Miralles-García_1981_table_1:row6:col3, Miralles-García_1981_table_1:row7:col3, Miralles-García_1981_table_1:row8:col3, Miralles-García_1981_table_1:row9:col3 |
| β (h⁻¹) | `Q47` · kel | 0.024 | h⁻¹ | 6.667e-06 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_1:row5:col4, Miralles-García_1981_table_1:row6:col4, Miralles-García_1981_table_1:row7:col4, Miralles-García_1981_table_1:row8:col4, Miralles-García_1981_table_1:row9:col4 |
| t 1/2 α (h) | `Q59` · t1/2α | 3.06 | h | 1.102e+04 | s | h | space_fold (0.95) | Miralles-García_1981_table_1:row5:col5, Miralles-García_1981_table_1:row6:col5, Miralles-García_1981_table_1:row7:col5, Miralles-García_1981_table_1:row8:col5, Miralles-García_1981_table_1:row9:col5 |
| t 1/2β (h) | `Q60` · t1/2β | 28.18 | h | 1.014e+05 | s | h | space_fold (0.95) | Miralles-García_1981_table_1:row5:col6, Miralles-García_1981_table_1:row6:col6, Miralles-García_1981_table_1:row7:col6, Miralles-García_1981_table_1:row8:col6, Miralles-García_1981_table_1:row9:col6 |
| K₁₂ (h⁻¹) | `Q301` · k12 | 0.018 | h⁻¹ | 5e-06 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_1:row5:col7, Miralles-García_1981_table_1:row6:col7, Miralles-García_1981_table_1:row7:col7, Miralles-García_1981_table_1:row8:col7, Miralles-García_1981_table_1:row9:col7 |
| K₂₁ (h⁻¹) | `Q302` · k21 | 0.027 | h⁻¹ | 7.5e-06 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_1:row5:col8, Miralles-García_1981_table_1:row6:col8, Miralles-García_1981_table_1:row7:col8, Miralles-García_1981_table_1:row8:col8, Miralles-García_1981_table_1:row9:col8 |
| K₁₃ (h⁻¹) | `Q303` · k13 | 0.206 | h⁻¹ | 5.722e-05 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_1:row5:col9, Miralles-García_1981_table_1:row6:col9, Miralles-García_1981_table_1:row7:col9, Miralles-García_1981_table_1:row8:col9, Miralles-García_1981_table_1:row9:col9 |
| Vc (l) | `Q63` · V1 | 5.11 | l | 0.00511 | m3 | l | exact (1) | Miralles-García_1981_table_1:row5:col12, Miralles-García_1981_table_1:row6:col12, Miralles-García_1981_table_1:row7:col12, Miralles-García_1981_table_1:row8:col12, Miralles-García_1981_table_1:row9:col12 |
| Vp (l) | `Q64` · V2 | 3.40 | l | 0.0034 | m3 | l | exact (1) | Miralles-García_1981_table_1:row5:col13, Miralles-García_1981_table_1:row6:col13, Miralles-García_1981_table_1:row7:col13, Miralles-García_1981_table_1:row8:col13, Miralles-García_1981_table_1:row9:col13 |
| Vdss (l) | `Q65` · Vss | 8.51 | l | 0.00851 | m3 | l | llm (0.6) | Miralles-García_1981_table_1:row5:col14, Miralles-García_1981_table_1:row6:col14, Miralles-García_1981_table_1:row7:col14, Miralles-García_1981_table_1:row8:col14, Miralles-García_1981_table_1:row9:col14 |
| MCR (l/d/kg) | `Q22` · CL | 0.789 | l/d/kg | 6.392e-07 | m3/s | l/(d·kg) | llm (0.6) | Miralles-García_1981_table_1:row5:col15, Miralles-García_1981_table_1:row6:col15, Miralles-García_1981_table_1:row7:col15, Miralles-García_1981_table_1:row8:col15, Miralles-García_1981_table_1:row9:col15 |
| t (µg/d/kg) | `Q900` · equation variable | 0.434 | µg/d/kg |  |  | µg/(d·kg) | llm (0.6) | Miralles-García_1981_table_1:row5:col17, Miralles-García_1981_table_1:row6:col17, Miralles-García_1981_table_1:row7:col17, Miralles-García_1981_table_1:row8:col17, Miralles-García_1981_table_1:row9:col17 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'No' — extend the ontology if this is a real PK parameter (source ['Miralles-García_1981_table_1:row5:col2', 'Miralles-García_1981_table_1:row6:col2', 'Miralles-García_1981_table_1:row7:col2', 'Miralles-García_1981_table_1:row8:col2', 'Miralles-García_1981_table_1:row9:col2'])
- unit_dimension_mismatch: 'α (h⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'K₁₂/K₂₁' — extend the ontology if this is a real PK parameter (source ['Miralles-García_1981_table_1:row5:col10', 'Miralles-García_1981_table_1:row6:col10', 'Miralles-García_1981_table_1:row7:col10', 'Miralles-García_1981_table_1:row8:col10', 'Miralles-García_1981_table_1:row9:col10'])
- dropped unlinked row (NIL): 'K₁₂/K₁₃' — extend the ontology if this is a real PK parameter (source ['Miralles-García_1981_table_1:row5:col11', 'Miralles-García_1981_table_1:row6:col11', 'Miralles-García_1981_table_1:row7:col11', 'Miralles-García_1981_table_1:row8:col11', 'Miralles-García_1981_table_1:row9:col11'])
- dropped unlinked row (NIL): 'm (ng/100)' — extend the ontology if this is a real PK parameter (source ['Miralles-García_1981_table_1:row5:col16', 'Miralles-García_1981_table_1:row6:col16', 'Miralles-García_1981_table_1:row7:col16', 'Miralles-García_1981_table_1:row8:col16', 'Miralles-García_1981_table_1:row9:col16'])
- dropped duplicate Q67 ('α', value '0') — already have one for this compound
- dropped duplicate Q47 ('β', value '0') — already have one for this compound
- dropped duplicate Q301 ('K12', value '4') — already have one for this compound
- dropped unlinked row (NIL): 't' — extend the ontology if this is a real PK parameter (source ['Miralles-García_1981_table_3:row6:col12', 'Miralles-García_1981_table_4:row6:col12'])
- dropped duplicate Q63 ('Vc', value '3') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=triiodothyronine (T3) or thyroxine (T4)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'ii' subgroup of Miralles-García_1981 (paper reports 4 populations: a.h.i., controls, i, ii)
- molar mass: no plausible PubChem entry for 'triiodothyronine (T3) or thyroxine (T4)' ('triiodothyronine (T3) or thyroxine (T4)') — left in mass units
- molar mass: none found for 'triiodothyronine (T3) or thyroxine (T4)' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2, 3, 4
- transposed table Miralles-García_1981_table_1: logical view retains original source coordinates
- transposed table Miralles-García_1981_table_2: logical view retains original source coordinates
- table Miralles-García_1981_table_3: units_need_context
- table Miralles-García_1981_table_3: unparsed_numeric_cell
- transposed table Miralles-García_1981_table_3: logical view retains original source coordinates
- table Miralles-García_1981_table_4: units_need_context
- table Miralles-García_1981_table_4: unparsed_numeric_cell
- transposed table Miralles-García_1981_table_4: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (5/25 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['thyroxine (t4)', 'triiodothyronine (t3)', 'metabolism']] | [['thyroxine (t4)', 'triiodothyronine (t3)', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[k12 / k21]` |  | 1.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12].parameter_id` | Q301 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[k13]` | 0.036 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.090 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[m]` | 8.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mcr]` | 0.047 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mcr]` |  | 0.047 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 α]` | 3.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 α]` |  | 3.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` | 3.97 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  | 3.97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 2.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 2.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` | 4.46 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` |  | 4.46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 2.37 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 2.37 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | triiodothyronine (T3) or thyroxine (T4) | thyroxine (T4) | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | triiodothyronine (T3) or thyroxine (T4) | thyroxine (T4) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Miralles-García_1981_table_1:row5:col15', 'Miralles-García_1981_table_1:row6:col15', 'Miralles-García_1981_table_1:row7:col15', 'Miralles-García_1981_table_1:row8:col15', 'Miralles-García_1981_table_1:row9:col15'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Miralles-García_1981_table_1:row5:col7', 'Miralles-García_1981_table_1:row6:col7', 'Miralles-García_1981_table_1:row7:col7', 'Miralles-García_1981_table_1:row8:col7', 'Miralles-García_1981_table_1:row9:col7'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Miralles-García_1981_table_1:row5:col8', 'Miralles-García_1981_table_1:row6:col8', 'Miralles-García_1981_table_1:row7:col8', 'Miralles-García_1981_table_1:row8:col8', 'Miralles-García_1981_table_1:row9:col8'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Miralles-García_1981_table_1:row5:col9', 'Miralles-García_1981_table_1:row6:col9', 'Miralles-García_1981_table_1:row7:col9', 'Miralles-García_1981_table_1:row8:col9', 'Miralles-García_1981_table_1:row9:col9'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Miralles-García_1981_table_1:row5:col4', 'Miralles-García_1981_table_1:row6:col4', 'Miralles-García_1981_table_1:row7:col4', 'Miralles-García_1981_table_1:row8:col4', 'Miralles-García_1981_table_1:row9:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['Miralles-García_1981_table_1:row5:col5', 'Miralles-García_1981_table_1:row6:col5', 'Miralles-García_1981_table_1:row7:col5', 'Miralles-García_1981_table_1:row8:col5', 'Miralles-García_1981_table_1:row9:col5'] |
| C5_dimension_Q60 | pass | [time] |  | ['Miralles-García_1981_table_1:row5:col6', 'Miralles-García_1981_table_1:row6:col6', 'Miralles-García_1981_table_1:row7:col6', 'Miralles-García_1981_table_1:row8:col6', 'Miralles-García_1981_table_1:row9:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Miralles-García_1981_table_1:row5:col12', 'Miralles-García_1981_table_1:row6:col12', 'Miralles-García_1981_table_1:row7:col12', 'Miralles-García_1981_table_1:row8:col12', 'Miralles-García_1981_table_1:row9:col12'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Miralles-García_1981_table_1:row5:col13', 'Miralles-García_1981_table_1:row6:col13', 'Miralles-García_1981_table_1:row7:col13', 'Miralles-García_1981_table_1:row8:col13', 'Miralles-García_1981_table_1:row9:col13'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Miralles-García_1981_table_1:row5:col14', 'Miralles-García_1981_table_1:row6:col14', 'Miralles-García_1981_table_1:row7:col14', 'Miralles-García_1981_table_1:row8:col14', 'Miralles-García_1981_table_1:row9:col14'] |
| C5_dimension_Q67 | fail | 1 / [time] | h⁻¹ | ['Miralles-García_1981_table_1:row5:col3', 'Miralles-García_1981_table_1:row6:col3', 'Miralles-García_1981_table_1:row7:col3', 'Miralles-García_1981_table_1:row8:col3', 'Miralles-García_1981_table_1:row9:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.789 | ['Miralles-García_1981_table_1:row5:col15', 'Miralles-García_1981_table_1:row6:col15', 'Miralles-García_1981_table_1:row7:col15', 'Miralles-García_1981_table_1:row8:col15', 'Miralles-García_1981_table_1:row9:col15'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.3 L/h | ['Miralles-García_1981_table_1:row5:col15', 'Miralles-García_1981_table_1:row6:col15', 'Miralles-García_1981_table_1:row7:col15', 'Miralles-García_1981_table_1:row8:col15', 'Miralles-García_1981_table_1:row9:col15'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.11 L | ['Miralles-García_1981_table_1:row5:col12', 'Miralles-García_1981_table_1:row6:col12', 'Miralles-García_1981_table_1:row7:col12', 'Miralles-García_1981_table_1:row8:col12', 'Miralles-García_1981_table_1:row9:col12'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.4 L | ['Miralles-García_1981_table_1:row5:col13', 'Miralles-García_1981_table_1:row6:col13', 'Miralles-García_1981_table_1:row7:col13', 'Miralles-García_1981_table_1:row8:col13', 'Miralles-García_1981_table_1:row9:col13'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 8.51 L | ['Miralles-García_1981_table_1:row5:col14', 'Miralles-García_1981_table_1:row6:col14', 'Miralles-García_1981_table_1:row7:col14', 'Miralles-García_1981_table_1:row8:col14', 'Miralles-García_1981_table_1:row9:col14'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine%5D%20Levothyroxine_MirallesGarca1981_reference&body=Drug%3A%20levothyroxine%0ARecord%3A%20Levothyroxine_MirallesGarca1981_reference%0APaper%3A%20Miralles-Garc%C3%ADa_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine/Levothyroxine_MirallesGarca1981_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 00:27 UTC</sub>
