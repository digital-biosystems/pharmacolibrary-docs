<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Miralles-Garc\u00eda_1981 \u00b7 a_h_i&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_MirallesGarca1981_a_h_i`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> The triiodothyronine metabolite compartment is unreachable from the dose, causing the model to be rejected.

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_MirallesGarca1981_a_h_i" status="rejected" stale="false" population="ewes with or without acute liver insufficiency" measured-compound="triiodothyronine (T3) or thyroxine (T4)" parameterization="mechanistic" topology="parent_metabolite"></div>

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
| β | kel | 0.031 | 1/h |
| t 1/2 α | t1/2α | 2.93 | h |
| t 1/2 β | t1/2β | 23.9 | h |
| K12 | k12 | 0.03 | 1/h |
| K21 | k21 | 0.037 | 1/h |
| K13 | k13 | 0.19 | 1/h |
| Vc | V1 | 6.40 | L |
| Vp | V2 | 6.4 | L |
| Vdss | Vss | 12.8 | L |
| t | Ct | 0.46 |  |
| α | λ1 | 0 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.043). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The triiodothyronine metabolite compartment is unreachable from the dose, causing the model to be rejected.**

The model defines a metabolic link from thyroxine to triiodothyronine but fails to establish a valid dosing path to the parent compound. Consequently, the metabolite is orphaned within the structural topology. This structural flaw rendered the compartment unreachable despite the presence of specific elimination and distribution rate constants. Extracted — levothyroxine: kel 0.031 1/h, t1/2α 2.93 h, t1/2β 23.9 h, k12 0.03 1/h, k21 0.037 1/h, k13 0.19 1/h, V1 6.4 L, V2 6.4 L, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has triiodothyronine (T3) or thyroxine (T4), the second reading thyroxine (T4); it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| β | `Q47` · kel | 0.031 | 1/h | 8.611e-06 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_3:row3:col2, Miralles-García_1981_table_3:row4:col2, Miralles-García_1981_table_3:row5:col2, Miralles-García_1981_table_3:row6:col2, Miralles-García_1981_table_4:row3:col2, Miralles-García_1981_table_4:row4:col2, Miralles-García_1981_table_4:row5:col2 |
| t 1/2 α | `Q59` · t1/2α | 2.93 | h | 1.055e+04 | s | h | space_fold (0.95) | Miralles-García_1981_table_3:row3:col3, Miralles-García_1981_table_3:row4:col3, Miralles-García_1981_table_3:row5:col3, Miralles-García_1981_table_4:row3:col3, Miralles-García_1981_table_4:row4:col3, Miralles-García_1981_table_4:row5:col3 |
| t 1/2 β | `Q60` · t1/2β | 23.9 | h | 8.604e+04 | s | h | space_fold (0.95) | Miralles-García_1981_table_3:row3:col4, Miralles-García_1981_table_3:row4:col4, Miralles-García_1981_table_3:row5:col4, Miralles-García_1981_table_4:row3:col4, Miralles-García_1981_table_4:row4:col4, Miralles-García_1981_table_4:row5:col4 |
| K12 | `Q301` · k12 | 0.03 | 1/h | 8.333e-06 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_3:row3:col5, Miralles-García_1981_table_3:row4:col5, Miralles-García_1981_table_3:row5:col5, Miralles-García_1981_table_3:row6:col5, Miralles-García_1981_table_4:row3:col5, Miralles-García_1981_table_4:row4:col5, Miralles-García_1981_table_4:row5:col5 |
| K21 | `Q302` · k21 | 0.037 | 1/h | 1.028e-05 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_3:row3:col6, Miralles-García_1981_table_3:row4:col6, Miralles-García_1981_table_3:row5:col6, Miralles-García_1981_table_4:row3:col6, Miralles-García_1981_table_4:row4:col6, Miralles-García_1981_table_4:row5:col6 |
| K13 | `Q303` · k13 | 0.19 | 1/h | 5.278e-05 | 1/s | 1/h | exact (1) | Miralles-García_1981_table_3:row3:col7, Miralles-García_1981_table_3:row4:col7, Miralles-García_1981_table_3:row5:col7, Miralles-García_1981_table_4:row3:col7, Miralles-García_1981_table_4:row4:col7, Miralles-García_1981_table_4:row5:col7 |
| Vc | `Q63` · V1 | 6.40 | L | 0.0064 | m3 | L | exact (1) | Miralles-García_1981_table_3:row3:col8, Miralles-García_1981_table_3:row4:col8, Miralles-García_1981_table_3:row5:col8, Miralles-García_1981_table_4:row3:col8, Miralles-García_1981_table_4:row4:col8, Miralles-García_1981_table_4:row5:col8, Miralles-García_1981_table_4:row6:col8 |
| Vp | `Q64` · V2 | 6.4 | L | 0.0064 | m3 | L | exact (1) | Miralles-García_1981_table_3:row3:col9, Miralles-García_1981_table_3:row4:col9, Miralles-García_1981_table_3:row5:col9, Miralles-García_1981_table_4:row3:col9, Miralles-García_1981_table_4:row4:col9, Miralles-García_1981_table_4:row5:col9 |
| Vdss | `Q65` · Vss | 12.8 | L | 0.0128 | m3 | L | llm (0.6) | Miralles-García_1981_table_3:row3:col10, Miralles-García_1981_table_3:row4:col10, Miralles-García_1981_table_3:row5:col10, Miralles-García_1981_table_4:row3:col10, Miralles-García_1981_table_4:row4:col10, Miralles-García_1981_table_4:row5:col10 |
| t | `Q75` · Ct | 0.46 |  |  |  |  | llm (0.6) | Miralles-García_1981_table_3:row3:col12, Miralles-García_1981_table_3:row4:col12, Miralles-García_1981_table_3:row5:col12, Miralles-García_1981_table_3:row6:col12, Miralles-García_1981_table_4:row3:col12, Miralles-García_1981_table_4:row4:col12, Miralles-García_1981_table_4:row5:col12, Miralles-García_1981_table_4:row6:col12 |
| α | `Q67` · λ1 | 0 |  |  |  |  | exact (1) | Miralles-García_1981_table_3:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'MCR' — extend the ontology if this is a real PK parameter (source ['Miralles-García_1981_table_3:row3:col11', 'Miralles-García_1981_table_3:row4:col11', 'Miralles-García_1981_table_3:row5:col11', 'Miralles-García_1981_table_4:row3:col11', 'Miralles-García_1981_table_4:row4:col11', 'Miralles-García_1981_table_4:row5:col11'])
- implicit units: 'β' → 1/h (from the paper text: 'The text under \'Results\' defines the symbol \\beta (displayed as /? in the excerpt) as: "/? disposition constant in the s')
- implicit units: 't 1/2 α' → h (from the paper text: 'The text under \'Results\' defines the symbol t 1/2 a (displayed as t V 2 a in the excerpt) as: "t V 2 a half-time of the ')
- implicit units: 't 1/2 β' → h (from the paper text: 'The text under \'Results\' defines the symbol t 1/2 |3 (displayed as t V 2 |3 in the excerpt) as: "t V 2 |3 half-time of t')
- implicit units: 'K12' → 1/h (from the paper text: 'The text under \'Results\' defines the symbol K 12 as: "K 12 the first order rate constant for distribution of hormone fro')
- implicit units: 'K21' → 1/h (from the paper text: 'The text under \'Results\' defines the symbol K 21 as: "K 21 the first order rate constant for distribution of hormone fro')
- implicit units: 'K13' → 1/h (from the paper text: 'The text under \'Results\' defines the symbol K 13 as: "K 13 the first order rate constant for elimination of hormone from')
- implicit units: 'Vc' → L (from the paper text: 'The text under \'Results\' defines the symbol Vc as: "Vc the apparent central volume in liters".')
- implicit units: 'Vp' → L (from the paper text: 'The text under \'Results\' defines the symbol Vp as: "Vp the apparent peripheral volume in liters".')
- implicit units: 'Vdss' → L (from the paper text: 'The text under \'Results\' defines the symbol Vdss as: "Vdss the apparent volume of distribution steady state in liters".')
- implicit units: 't' — the LLM proposed 'ng/100 ml', whose dimension does not fit Q75; left unset
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=triiodothyronine (T3) or thyroxine (T4)
- population split: 'a.h.i.' subgroup of Miralles-García_1981 (paper reports 4 populations: a.h.i., controls, i, ii)
- molar mass: no plausible PubChem entry for 'triiodothyronine (T3) or thyroxine (T4)' ('triiodothyronine (T3) or thyroxine (T4)') — left in mass units
- molar mass: none found for 'triiodothyronine (T3) or thyroxine (T4)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
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
| `gpt-oss-120b` | not confirmed | 0.043 (1/23 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['thyroxine (t4)', 'triiodothyronine (t3)', 'metabolism']] | [['thyroxine (t4)', 'triiodothyronine (t3)', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[k12 / k21]` |  | 1.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12].parameter_id` | Q301 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[k12].value` | 0.03 | 0.102 | mismatch |
| `gpt-oss-120b` | `parameters[k13]` | 0.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.037 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mcr]` |  | 0.047 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 α]` | 2.93 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 α]` |  | 3.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 β].value` | 23.9 | 49.55 | mismatch |
| `gpt-oss-120b` | `parameters[t]` | 0.46 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t]` |  | 3.97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 6.40 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 2.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` | 12.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` |  | 4.46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 6.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 2.37 | only_one_extracted |
| `gpt-oss-120b` | `parameters[α].value` | 0 | 0.211 | mismatch |
| `gpt-oss-120b` | `parameters[β].value` | 0.031 | 0.014 | mismatch |
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
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Miralles-García_1981_table_3:row3:col5', 'Miralles-García_1981_table_3:row4:col5', 'Miralles-García_1981_table_3:row5:col5', 'Miralles-García_1981_table_3:row6:col5', 'Miralles-García_1981_table_4:row3:col5', 'Miralles-García_1981_table_4:row4:col5', 'Miralles-García_1981_table_4:row5:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Miralles-García_1981_table_3:row3:col6', 'Miralles-García_1981_table_3:row4:col6', 'Miralles-García_1981_table_3:row5:col6', 'Miralles-García_1981_table_4:row3:col6', 'Miralles-García_1981_table_4:row4:col6', 'Miralles-García_1981_table_4:row5:col6'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Miralles-García_1981_table_3:row3:col7', 'Miralles-García_1981_table_3:row4:col7', 'Miralles-García_1981_table_3:row5:col7', 'Miralles-García_1981_table_4:row3:col7', 'Miralles-García_1981_table_4:row4:col7', 'Miralles-García_1981_table_4:row5:col7'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Miralles-García_1981_table_3:row3:col2', 'Miralles-García_1981_table_3:row4:col2', 'Miralles-García_1981_table_3:row5:col2', 'Miralles-García_1981_table_3:row6:col2', 'Miralles-García_1981_table_4:row3:col2', 'Miralles-García_1981_table_4:row4:col2', 'Miralles-García_1981_table_4:row5:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['Miralles-García_1981_table_3:row3:col3', 'Miralles-García_1981_table_3:row4:col3', 'Miralles-García_1981_table_3:row5:col3', 'Miralles-García_1981_table_4:row3:col3', 'Miralles-García_1981_table_4:row4:col3', 'Miralles-García_1981_table_4:row5:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['Miralles-García_1981_table_3:row3:col4', 'Miralles-García_1981_table_3:row4:col4', 'Miralles-García_1981_table_3:row5:col4', 'Miralles-García_1981_table_4:row3:col4', 'Miralles-García_1981_table_4:row4:col4', 'Miralles-García_1981_table_4:row5:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Miralles-García_1981_table_3:row3:col8', 'Miralles-García_1981_table_3:row4:col8', 'Miralles-García_1981_table_3:row5:col8', 'Miralles-García_1981_table_4:row3:col8', 'Miralles-García_1981_table_4:row4:col8', 'Miralles-García_1981_table_4:row5:col8', 'Miralles-García_1981_table_4:row6:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Miralles-García_1981_table_3:row3:col9', 'Miralles-García_1981_table_3:row4:col9', 'Miralles-García_1981_table_3:row5:col9', 'Miralles-García_1981_table_4:row3:col9', 'Miralles-García_1981_table_4:row4:col9', 'Miralles-García_1981_table_4:row5:col9'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Miralles-García_1981_table_3:row3:col10', 'Miralles-García_1981_table_3:row4:col10', 'Miralles-García_1981_table_3:row5:col10', 'Miralles-García_1981_table_4:row3:col10', 'Miralles-García_1981_table_4:row4:col10', 'Miralles-García_1981_table_4:row5:col10'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['Miralles-García_1981_table_3:row6:col1'] |
| C5_unit_missing_Q75 | fail | [mass] / [length] ** 3 |  | ['Miralles-García_1981_table_3:row3:col12', 'Miralles-García_1981_table_3:row4:col12', 'Miralles-García_1981_table_3:row5:col12', 'Miralles-García_1981_table_3:row6:col12', 'Miralles-García_1981_table_4:row3:col12', 'Miralles-García_1981_table_4:row4:col12', 'Miralles-García_1981_table_4:row5:col12', 'Miralles-García_1981_table_4:row6:col12'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.4 L | ['Miralles-García_1981_table_3:row3:col8', 'Miralles-García_1981_table_3:row4:col8', 'Miralles-García_1981_table_3:row5:col8', 'Miralles-García_1981_table_4:row3:col8', 'Miralles-García_1981_table_4:row4:col8', 'Miralles-García_1981_table_4:row5:col8', 'Miralles-García_1981_table_4:row6:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.4 L | ['Miralles-García_1981_table_3:row3:col9', 'Miralles-García_1981_table_3:row4:col9', 'Miralles-García_1981_table_3:row5:col9', 'Miralles-García_1981_table_4:row3:col9', 'Miralles-García_1981_table_4:row4:col9', 'Miralles-García_1981_table_4:row5:col9'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 12.8 L | ['Miralles-García_1981_table_3:row3:col10', 'Miralles-García_1981_table_3:row4:col10', 'Miralles-García_1981_table_3:row5:col10', 'Miralles-García_1981_table_4:row3:col10', 'Miralles-García_1981_table_4:row4:col10', 'Miralles-García_1981_table_4:row5:col10'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine%5D%20Levothyroxine_MirallesGarca1981_a_h_i&body=Drug%3A%20levothyroxine%0ARecord%3A%20Levothyroxine_MirallesGarca1981_a_h_i%0APaper%3A%20Miralles-Garc%C3%ADa_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine/Levothyroxine_MirallesGarca1981_a_h_i%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 00:27 UTC</sub>
