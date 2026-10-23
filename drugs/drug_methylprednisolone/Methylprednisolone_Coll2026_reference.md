<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;methylprednisolone&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/&quot;},{&quot;label&quot;:&quot;Coll_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methylprednisolone_Bai2024_reference&quot;,&quot;label&quot;:&quot;Bai_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/Methylprednisolone_Bai2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methylprednisolone_Dvokov2026_reference&quot;,&quot;label&quot;:&quot;Dvo\u0159\u00e1\u010dkov\u00e1_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/Methylprednisolone_Dvokov2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methylprednisolone_Rantanen2026_reference&quot;,&quot;label&quot;:&quot;Rantanen_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/Methylprednisolone_Rantanen2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methylprednisolone_Xie2025_reference&quot;,&quot;label&quot;:&quot;Xie_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/Methylprednisolone_Xie2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methylprednisolone_Zhang2026_reference&quot;,&quot;label&quot;:&quot;Zhang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/Methylprednisolone_Zhang2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methylprednisolone_Coll2026_reference&quot;,&quot;label&quot;:&quot;Coll_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Methylprednisolone_Yates2001_reference&quot;,&quot;label&quot;:&quot;Yates_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylprednisolone/Methylprednisolone_Yates2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methylprednisolone — `Methylprednisolone_Coll2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 9.08e-05, model 0.000414); the model does not reproduce the paper's time of the peak (tmax) (paper 1.6, model 1.31) (+1 more).

<div class="pk-model-meta" hidden drug="methylprednisolone" model-id="Methylprednisolone_Coll2026_reference" status="needs_review" stale="false" population="healthy male adults" measured-compound="methylprednisolone" parameterization="apparent" topology="1C"></div>

## Citation
Coll S, Bressan C, Monfort N, Aldea-Perona A, Carbó ML, Ventura R. Revisited Pharmacokinetic Profiles of Methylprednisolone in Plasma and Urine After Single and Multiple Oral Administrations: Relevance in Sports Drug Testing. Clinical pharmacokinetics (2026).
  ·  DOI: [10.1007/s40262-026-01665-x](https://doi.org/10.1007/s40262-026-01665-x)

## Population and dosing

**Population:** healthy male adults · condition healthy · age group adult · n = &gt;=16.

**Dosing:** 12 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference.svg" alt="Methylprednisolone_Coll2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0–last | AUClast | 244.7 | ng·h/mL |
| AUC0–∞ | AUC∞ | 245.1 | ng·h/mL |
| Cmaxobs | Cmax | 20.7 | ng/mL |
| Tmaxobs | tmax | 1.0 | h |
| ka | kabs | 0.75 | 1/h |
| Ke | kel | 0.24 | 1/h |
| t1/2 | t1/2z | 0.35 | h |
| Clp | CL | 8.6 | L/h |
| Clr | CLR | 2.1 | L/h |
| Clm | CLm/F | 8.8 | L/h |
| V | V | 9.6 | L |
| Fel | Fab | 5.4 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 9.08e-05, model 0.000414); the model does not reproduce the paper's time of the peak (tmax) (paper 1.6, model 1.31) (+1 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUClast, AUC∞ and Cmax), so that value has no SI equivalent. Extracted — methylprednisolone: AUClast 245 ng·h/mL, AUC∞ 245 ng·h/mL, Cmax 20.7 ng/mL, tmax 1 h, kabs 0.75 1/h, kel 0.24 1/h, t1/2z 0.35 h, CL 8.6 L/h, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[fel].parameter_id`: this record has Q40, the second reading Q44. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–last | `Q74` · AUClast | 244.7 | ng·h/mL |  |  | ng·h/mL | exact (1) | Tab2:row2:col3, Tab2:row2:col4, Tab2:row2:col5, Tab2:row2:col6, Tab2:row15:col3, Tab2:row15:col4, Tab2:row15:col5, Tab2:row15:col6 |
| AUC0–∞ | `Q17` · AUC∞ | 245.1 | ng·h/mL |  |  | ng·h/mL | exact (1) | Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5, Tab2:row3:col6, Tab2:row16:col3, Tab2:row16:col4, Tab2:row16:col5, Tab2:row16:col6 |
| Cmaxobs | `Q32` · Cmax | 20.7 | ng/mL |  |  | ng/mL | llm (0.6) | Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5, Tab2:row4:col6, Tab2:row17:col3, Tab2:row17:col4, Tab2:row17:col5, Tab2:row17:col6 |
| Tmaxobs | `Q56` · tmax | 1.0 | h | 3600 | s | h | llm (0.6) | Tab2:row5:col3, Tab2:row5:col4, Tab2:row5:col5, Tab2:row5:col6, Tab2:row18:col3, Tab2:row18:col4, Tab2:row18:col5, Tab2:row18:col6 |
| ka | `Q49` · kabs | 0.75 | 1/h | 0.0002083 | 1/s | 1/h | exact (1) | Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5, Tab2:row6:col6, Tab2:row19:col3, Tab2:row19:col4, Tab2:row19:col5, Tab2:row19:col6 |
| Ke | `Q47` · kel | 0.24 | 1/h | 6.667e-05 | 1/s | 1/h | exact (1) | Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5, Tab2:row7:col6, Tab2:row20:col3, Tab2:row20:col4, Tab2:row20:col5, Tab2:row20:col6 |
| t1/2 | `Q57` · t1/2z | 0.35 | h | 1260 | s | h | exact (1) | Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5, Tab2:row8:col6, Tab2:row21:col1, Tab2:row21:col3, Tab2:row21:col4, Tab2:row21:col5, Tab2:row21:col6 |
| Clp | `Q22` · CL | 8.6 | L/h | 2.389e-06 | m3/s | L/h | exact (1) | Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5, Tab2:row9:col6, Tab2:row22:col3, Tab2:row22:col4, Tab2:row22:col5, Tab2:row22:col6 |
| Clr | `Q26` · CLR | 2.1 | L/h | 5.833e-07 | m3/s | L/h | exact (1) | Tab2:row10:col3, Tab2:row10:col4, Tab2:row10:col5, Tab2:row10:col6, Tab2:row23:col3, Tab2:row23:col4, Tab2:row23:col5, Tab2:row23:col6 |
| Clm | `Q351` · CLm/F | 8.8 | L/h | 2.444e-06 | m3/s | L/h | exact (1) | Tab2:row11:col3, Tab2:row11:col4, Tab2:row11:col5, Tab2:row11:col6, Tab2:row24:col3, Tab2:row24:col4, Tab2:row24:col5, Tab2:row24:col6 |
| V | `Q61` · V | 9.6 | L | 0.0096 | m3 | L | exact (1) | Tab2:row12:col3, Tab2:row12:col4, Tab2:row12:col5, Tab2:row12:col6, Tab2:row25:col3, Tab2:row25:col4, Tab2:row25:col5, Tab2:row25:col6 |
| Fel | `Q40` · Fab | 5.4 |  |  |  |  | llm (0.6) | Tab2:row13:col3, Tab2:row13:col4, Tab2:row13:col5, Tab2:row13:col6, Tab2:row26:col3, Tab2:row26:col4, Tab2:row26:col5, Tab2:row26:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'AUC0–last' → ng·h/mL (from the paper text: "The text states: 'The calculated mean AUC0–∞ (477.6 ng·h/mL) and AUC0–last (460.1 ng·h/mL) after the single dose (Table ")
- implicit units: 'AUC0–∞' → ng·h/mL (from the paper text: "The text states: 'The calculated mean AUC0–∞ (477.6 ng·h/mL) and AUC0–last (460.1 ng·h/mL) after the single dose (Table ")
- implicit units: 'Cmaxobs' → ng/mL (from the paper text: "The text states: 'In the multiple-dose study (Table 2B), Cmaxobs after the last dose was 82.7 ng/mL (IC95% 65.4–100.0 ng")
- implicit units: 'Tmaxobs' → h (from the paper text: "The text states: 'Tmaxobs 2.25 hours (IC95% 1.4–3.1 h) was also similar with a slightly wider IC95%.'")
- implicit units: 'ka' → 1/h (from the popPK convention: "The text defines ka as an 'absorption first order rate constant'. First-order rate constants are conventionally expresse")
- implicit units: 'Ke' → 1/h (from the paper text: "The text states: 'The calculated elimination constant Ke was similar in the single dose study (0.86 h−1) and the multipl")
- implicit units: 't1/2' → h (from the paper text: "The text states: 'as well as the t1/2 (0.83 and 1.07 h, respectively) (Table 2).' and 'Earlier studies reported a t1/2 t")
- implicit units: 'Clp' → L/h (from the paper text: "The text states: 'Plasma clearance Clp showed similar mean values in the multiple dosing assay (31.7 L/h) and after inta")
- implicit units: 'Clr' → L/h (from the popPK convention: 'Clr is the renal clearance, a component of total clearance (Clp). The text provides Clp in L/h. Clearance parameters are')
- implicit units: 'Clm' → L/h (from the paper text: "The text states: 'systemic elimination can be mainly attributed to the CLm (39.5 L/h, in the single-dose study; 30.2 L/h")
- implicit units: 'V' → L (from the popPK convention: "V is the volume of distribution. The text states 'V is the volume of distribution'. Volumes of distribution are conventi")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=methylprednisolone
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row6:col1 = 'h-1'
- unparsed cell Tab2:row6:col2 = 'h-1'
- unparsed cell Tab2:row7:col1 = 'h-1'
- unparsed cell Tab2:row7:col2 = 'h-1'
- unparsed cell Tab2:row15:col1 = 'AUC0–last'
- unparsed cell Tab2:row16:col1 = 'AUC0–∞'
- unparsed cell Tab2:row19:col2 = 'h-1'
- unparsed cell Tab2:row20:col2 = 'h-1'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fel].parameter_id` | Q40 | Q44 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 0.83 | 0.774 | 0.9325 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6', 'Tab2:row16:col3', 'Tab2:row16:col4', 'Tab2:row16:col5', 'Tab2:row16:col6'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5', 'Tab2:row9:col6', 'Tab2:row22:col3', 'Tab2:row22:col4', 'Tab2:row22:col5', 'Tab2:row22:col6'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row10:col3', 'Tab2:row10:col4', 'Tab2:row10:col5', 'Tab2:row10:col6', 'Tab2:row23:col3', 'Tab2:row23:col4', 'Tab2:row23:col5', 'Tab2:row23:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6', 'Tab2:row17:col3', 'Tab2:row17:col4', 'Tab2:row17:col5', 'Tab2:row17:col6'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row11:col3', 'Tab2:row11:col4', 'Tab2:row11:col5', 'Tab2:row11:col6', 'Tab2:row24:col3', 'Tab2:row24:col4', 'Tab2:row24:col5', 'Tab2:row24:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5', 'Tab2:row7:col6', 'Tab2:row20:col3', 'Tab2:row20:col4', 'Tab2:row20:col5', 'Tab2:row20:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5', 'Tab2:row6:col6', 'Tab2:row19:col3', 'Tab2:row19:col4', 'Tab2:row19:col5', 'Tab2:row19:col6'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5', 'Tab2:row5:col6', 'Tab2:row18:col3', 'Tab2:row18:col4', 'Tab2:row18:col5', 'Tab2:row18:col6'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col5', 'Tab2:row8:col6', 'Tab2:row21:col1', 'Tab2:row21:col3', 'Tab2:row21:col4', 'Tab2:row21:col5', 'Tab2:row21:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Tab2:row12:col3', 'Tab2:row12:col4', 'Tab2:row12:col5', 'Tab2:row12:col6', 'Tab2:row25:col3', 'Tab2:row25:col4', 'Tab2:row25:col5', 'Tab2:row25:col6'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5', 'Tab2:row2:col6', 'Tab2:row15:col3', 'Tab2:row15:col4', 'Tab2:row15:col5', 'Tab2:row15:col6'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.6 L/h |  |  | ['Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5', 'Tab2:row9:col6', 'Tab2:row22:col3', 'Tab2:row22:col4', 'Tab2:row22:col5', 'Tab2:row22:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 9.6 L |  |  | ['Tab2:row12:col3', 'Tab2:row12:col4', 'Tab2:row12:col5', 'Tab2:row12:col6', 'Tab2:row25:col3', 'Tab2:row25:col4', 'Tab2:row25:col5', 'Tab2:row25:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=methylprednisolone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 9.08e-05 | 0.0004142 | 4.562 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 8.27e-05 | 0.0004142 | 5.009 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | pass | 0.83 | 0.9484 | 1.143 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.07 | 0.9484 | 0.8864 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.5 | 0.9484 | 0.6323 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.3 | 0.9484 | 0.7296 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.5 | 0.9484 | 0.6323 | h→SI vs simulated h |
| T1_tmax | reference | pass | 1.6 | 1.307 | 0.817 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 2.25 | 1.307 | 0.581 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_modelica.zip" download>Methylprednisolone_Coll2026_reference_modelica.zip</a> <span class="pk-size">(5.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_fmi.zip" download>Methylprednisolone_Coll2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_matlab.zip" download>Methylprednisolone_Coll2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_matlab_simbio.zip" download>Methylprednisolone_Coll2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_sbml.zip" download>Methylprednisolone_Coll2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_cellml.zip" download>Methylprednisolone_Coll2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3745 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.2e-05 | kg |
| input | model | `Cl` | 2.444e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001371 | m3/kg |
| input | model | `ka` | 0.0002083 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Coll S, Bressan C, Monfort N, Aldea-Perona A, Carbó ML, Ventura R. Revisited Pharmacokinetic Profiles of Methylprednisolone in Plasma and Urine After Single and Multiple Oral Administrations: Relevance in Sports Drug Testing. Clinical pharmacokinetics (2026). [doi:10.1007/s40262-026-01665-x](https://doi.org/10.1007/s40262-026-01665-x)

**This record:** Pharmacolibrary v26.09, model `Methylprednisolone_Coll2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference>

```bibtex
@misc{pharmacolibrary_MethylprednisoloneColl2026reference,
  title  = {{Pharmacolibrary model Methylprednisolone_Coll2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference},
  note   = {Parameters from doi:10.1007/s40262-026-01665-x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 12 mg, single dose, first-order absorption (ka 0.75 /h, F 1). Dose in the paper: 12 mg.

<dbs-fmusim paramsurl="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference/Methylprednisolone_Coll2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Methylprednisolone_Coll2026_reference_params.json` · controls `Methylprednisolone_Coll2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylprednisolone%5D%20Methylprednisolone_Coll2026_reference&body=Drug%3A%20methylprednisolone%0ARecord%3A%20Methylprednisolone_Coll2026_reference%0APaper%3A%20Coll_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methylprednisolone/Methylprednisolone_Coll2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 23:53 UTC</sub>
