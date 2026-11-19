<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Fexofenadine&quot;,&quot;href&quot;:&quot;drugs/toxin_fexofenadine/&quot;},{&quot;label&quot;:&quot;Batool_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexofenadine_Mahajan2024_reference&quot;,&quot;label&quot;:&quot;Mahajan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fexofenadine/Fexofenadine_Mahajan2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Sjgren2014_reference&quot;,&quot;label&quot;:&quot;Sj\u00f6gren_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fexofenadine/Fexofenadine_Sjgren2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Kaur2020_reference&quot;,&quot;label&quot;:&quot;Kaur_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fexofenadine/Fexofenadine_Kaur2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Molimard2004_reference&quot;,&quot;label&quot;:&quot;Molimard_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fexofenadine/Fexofenadine_Molimard2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Gaspar2025_reference&quot;,&quot;label&quot;:&quot;Gaspar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fexofenadine/Fexofenadine_Gaspar2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fexofenadine — `Fexofenadine_Batool2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Fexofenadine" model-id="Fexofenadine_Batool2025_reference" status="needs_review" stale="false" population="unknown" measured-compound="Fexofenadine" parameterization="apparent" topology="1C"></div>

## Citation
Batool M, Zamir A, Alqhtani H, Saeed H, Rasool MF. A Mechanistic Physiologically Based Pharmacokinetic (PBPK) modeling approach for fexofenadine: predictive pharmacokinetic insights in humans. Saudi pharmaceutical journal : SPJ : the official publication of the Saudi Pharmaceutical Society 33(4):24 (2025).
  ·  DOI: [10.1007/s44446-025-00024-4](https://doi.org/10.1007/s44446-025-00024-4)

## Population and dosing

**Population:** unknown · condition healthy, severe chronic kidney disease (CKD), and pediatric populations.

**Dosing:** 120 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) / OV | Cmax | 0.61 | ng/mL |
| Cmax (ng/mL) / R Ratio | Cmax_ratio | 0.91 | ng/mL |
| AUC0-∞ (ng.h/mL) / OV | AUC∞ | 3.81 | ng.h/mL |
| AUC0-∞ (ng.h/mL) / R Ratio | AUC ratio | 0.56 | ng.h/mL |
| CL/F (L/h) / OV | CL/F | 26.28 | L/h |
| CL/F (L/h) / R Ratio | CL_ratio | 1.76 | L/h |
| ka2 | kabs | 0.282 | h⁻1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax_ratio, AUC ratio and CL_ratio), so that value has no SI equivalent. Extracted — fexofenadine: Cmax 0.61 ng/mL, Cmax_ratio 0.91 ng/mL, AUC∞ 3.81 ng.h/mL, AUC ratio 0.56 ng.h/mL, CL/F 26.3 L/h, CL_ratio 1.76 L/h, kabs 0.282 h⁻1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of auc0-inf (ng.h/ml) / r ratio: this record has 0.56, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) / OV | `Q32` · Cmax | 0.61 | ng/mL | 6.1e-07 | kg/m3 | ng/ml | llm_confirmed (0.6) | Tab3:row3:col2, Tab3:row4:col2, Tab3:row5:col2, Tab3:row6:col2, Tab3:row7:col2, Tab3:row8:col2, Tab3:row9:col2, Tab3:row10:col2, Tab3:row11:col2, Tab3:row12:col2, Tab3:row13:col2, Tab3:row14:col2, Tab3:row15:col2, Tab3:row16:col2, Tab3:row17:col2, Tab3:row18:col2, Tab3:row19:col2, Tab3:row20:col2, Tab3:row21:col2, Tab3:row22:col2, Tab3:row23:col2, Tab3:row24:col2, Tab3:row25:col2, Tab3:row26:col2, Tab3:row27:col2, Tab3:row28:col2, Tab3:row29:col2, Tab3:row30:col2, Tab3:row32:col2, Tab3:row34:col2, Tab3:row35:col2 |
| Cmax (ng/mL) / R Ratio | `Q33` · Cmax_ratio | 0.91 | ng/mL |  |  | ng/ml | llm_corrected (0.6) | Tab3:row3:col4, Tab3:row4:col4, Tab3:row5:col4, Tab3:row6:col4, Tab3:row7:col4, Tab3:row8:col4, Tab3:row9:col4, Tab3:row10:col4, Tab3:row11:col4, Tab3:row12:col4, Tab3:row13:col4, Tab3:row14:col4, Tab3:row15:col4, Tab3:row16:col4, Tab3:row17:col4, Tab3:row18:col4, Tab3:row19:col4, Tab3:row20:col4, Tab3:row21:col4, Tab3:row22:col4, Tab3:row23:col4, Tab3:row24:col4, Tab3:row25:col4, Tab3:row26:col4, Tab3:row27:col4, Tab3:row28:col4, Tab3:row29:col4, Tab3:row30:col4, Tab3:row32:col4, Tab3:row34:col4, Tab3:row35:col4 |
| AUC0-∞ (ng.h/mL) / OV | `Q17` · AUC∞ | 3.81 | ng.h/mL | 0.01372 | kg*s/m3 | (h·ng)/ml | llm_confirmed (0.6) | Tab3:row3:col5, Tab3:row4:col5, Tab3:row5:col5, Tab3:row6:col5, Tab3:row7:col5, Tab3:row8:col5, Tab3:row9:col5, Tab3:row10:col5, Tab3:row11:col5, Tab3:row12:col5, Tab3:row13:col5, Tab3:row14:col5, Tab3:row15:col5, Tab3:row16:col5, Tab3:row17:col5, Tab3:row18:col5, Tab3:row19:col5, Tab3:row20:col5, Tab3:row21:col5, Tab3:row22:col5, Tab3:row23:col5, Tab3:row24:col5, Tab3:row25:col5, Tab3:row26:col5, Tab3:row27:col5, Tab3:row28:col5, Tab3:row29:col5, Tab3:row30:col5, Tab3:row32:col5, Tab3:row34:col5, Tab3:row35:col5 |
| AUC0-∞ (ng.h/mL) / R Ratio | `Q21` · AUC ratio | 0.56 | ng.h/mL |  |  | (h·ng)/ml | llm_corrected (0.6) | Tab3:row3:col7, Tab3:row4:col7, Tab3:row5:col7, Tab3:row6:col7, Tab3:row7:col7, Tab3:row8:col7, Tab3:row9:col7, Tab3:row10:col7, Tab3:row11:col7, Tab3:row12:col7, Tab3:row13:col7, Tab3:row14:col7, Tab3:row15:col7, Tab3:row16:col7, Tab3:row17:col7, Tab3:row18:col7, Tab3:row19:col7, Tab3:row20:col7, Tab3:row21:col7, Tab3:row22:col7, Tab3:row23:col7, Tab3:row24:col7, Tab3:row25:col7, Tab3:row26:col7, Tab3:row27:col7, Tab3:row28:col7, Tab3:row29:col7, Tab3:row30:col7, Tab3:row32:col7, Tab3:row34:col7, Tab3:row35:col7 |
| CL/F (L/h) / OV | `Q27` · CL/F | 26.28 | L/h | 7.3e-06 | m3/s | l/h | llm_confirmed (0.6) | Tab3:row3:col8, Tab3:row4:col8, Tab3:row5:col8, Tab3:row6:col8, Tab3:row7:col8, Tab3:row8:col8, Tab3:row9:col8, Tab3:row10:col8, Tab3:row11:col8, Tab3:row12:col8, Tab3:row13:col8, Tab3:row14:col8, Tab3:row15:col8, Tab3:row16:col8, Tab3:row17:col8, Tab3:row18:col8, Tab3:row19:col8, Tab3:row20:col8, Tab3:row21:col8, Tab3:row22:col8, Tab3:row23:col8, Tab3:row24:col8, Tab3:row25:col8, Tab3:row26:col8, Tab3:row27:col8, Tab3:row28:col8, Tab3:row29:col8, Tab3:row30:col8, Tab3:row32:col8, Tab3:row34:col8, Tab3:row35:col8 |
| CL/F (L/h) / R Ratio | `Q31` · CL_ratio | 1.76 | L/h |  |  | l/h | llm_corrected (0.6) | Tab3:row3:col10, Tab3:row4:col10, Tab3:row5:col10, Tab3:row6:col10, Tab3:row7:col10, Tab3:row8:col10, Tab3:row9:col10, Tab3:row10:col10, Tab3:row11:col10, Tab3:row12:col10, Tab3:row13:col10, Tab3:row14:col10, Tab3:row15:col10, Tab3:row16:col10, Tab3:row17:col10, Tab3:row18:col10, Tab3:row19:col10, Tab3:row20:col10, Tab3:row21:col10, Tab3:row22:col10, Tab3:row23:col10, Tab3:row24:col10, Tab3:row25:col10, Tab3:row26:col10, Tab3:row27:col10, Tab3:row28:col10, Tab3:row29:col10, Tab3:row30:col10, Tab3:row32:col10, Tab3:row34:col10, Tab3:row35:col10 |
| ka2 | `Q49` · kabs | 0.282 | h⁻1 | 7.833e-05 | 1/s | 1/h | review_gapfill (0.7) | Gaspar_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '9' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '11' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '12' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '13' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '14' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '15' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '16' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '17' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '18' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '20' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '21' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '22' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '23' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '24' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '25' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '26' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '27' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '28' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '29' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '30' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '31' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q32 ('Cmax (ng/mL) / PV', value '0.65') — already have one for this compound
- dropped duplicate Q17 ('AUC0-∞ (ng.h/mL) / PV', value '6.72') — already have one for this compound
- dropped duplicate Q27 ('CL/F (L/h) / PV', value '14.89') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Fexofenadine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gaspar_2025's review values (primary lacked it)

**Extraction notes:**
- transposed table Tab3: logical view retains original source coordinates
- LLM selected parameter table(s) 3
- toxin: the located table(s) gave no kinetic value — 2 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc0-inf (ng.h/ml) / r ratio]` | 0.56 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f (l/h) / r ratio]` | 1.76 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab3:row3:col5', 'Tab3:row4:col5', 'Tab3:row5:col5', 'Tab3:row6:col5', 'Tab3:row7:col5', 'Tab3:row8:col5', 'Tab3:row9:col5', 'Tab3:row10:col5', 'Tab3:row11:col5', 'Tab3:row12:col5', 'Tab3:row13:col5', 'Tab3:row14:col5', 'Tab3:row15:col5', 'Tab3:row16:col5', 'Tab3:row17:col5', 'Tab3:row18:col5', 'Tab3:row19:col5', 'Tab3:row20:col5', 'Tab3:row21:col5', 'Tab3:row22:col5', 'Tab3:row23:col5', 'Tab3:row24:col5', 'Tab3:row25:col5', 'Tab3:row26:col5', 'Tab3:row27:col5', 'Tab3:row28:col5', 'Tab3:row29:col5', 'Tab3:row30:col5', 'Tab3:row32:col5', 'Tab3:row34:col5', 'Tab3:row35:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row3:col8', 'Tab3:row4:col8', 'Tab3:row5:col8', 'Tab3:row6:col8', 'Tab3:row7:col8', 'Tab3:row8:col8', 'Tab3:row9:col8', 'Tab3:row10:col8', 'Tab3:row11:col8', 'Tab3:row12:col8', 'Tab3:row13:col8', 'Tab3:row14:col8', 'Tab3:row15:col8', 'Tab3:row16:col8', 'Tab3:row17:col8', 'Tab3:row18:col8', 'Tab3:row19:col8', 'Tab3:row20:col8', 'Tab3:row21:col8', 'Tab3:row22:col8', 'Tab3:row23:col8', 'Tab3:row24:col8', 'Tab3:row25:col8', 'Tab3:row26:col8', 'Tab3:row27:col8', 'Tab3:row28:col8', 'Tab3:row29:col8', 'Tab3:row30:col8', 'Tab3:row32:col8', 'Tab3:row34:col8', 'Tab3:row35:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab3:row3:col2', 'Tab3:row4:col2', 'Tab3:row5:col2', 'Tab3:row6:col2', 'Tab3:row7:col2', 'Tab3:row8:col2', 'Tab3:row9:col2', 'Tab3:row10:col2', 'Tab3:row11:col2', 'Tab3:row12:col2', 'Tab3:row13:col2', 'Tab3:row14:col2', 'Tab3:row15:col2', 'Tab3:row16:col2', 'Tab3:row17:col2', 'Tab3:row18:col2', 'Tab3:row19:col2', 'Tab3:row20:col2', 'Tab3:row21:col2', 'Tab3:row22:col2', 'Tab3:row23:col2', 'Tab3:row24:col2', 'Tab3:row25:col2', 'Tab3:row26:col2', 'Tab3:row27:col2', 'Tab3:row28:col2', 'Tab3:row29:col2', 'Tab3:row30:col2', 'Tab3:row32:col2', 'Tab3:row34:col2', 'Tab3:row35:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gaspar_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 26.3 L/h | ['Tab3:row3:col8', 'Tab3:row4:col8', 'Tab3:row5:col8', 'Tab3:row6:col8', 'Tab3:row7:col8', 'Tab3:row8:col8', 'Tab3:row9:col8', 'Tab3:row10:col8', 'Tab3:row11:col8', 'Tab3:row12:col8', 'Tab3:row13:col8', 'Tab3:row14:col8', 'Tab3:row15:col8', 'Tab3:row16:col8', 'Tab3:row17:col8', 'Tab3:row18:col8', 'Tab3:row19:col8', 'Tab3:row20:col8', 'Tab3:row21:col8', 'Tab3:row22:col8', 'Tab3:row23:col8', 'Tab3:row24:col8', 'Tab3:row25:col8', 'Tab3:row26:col8', 'Tab3:row27:col8', 'Tab3:row28:col8', 'Tab3:row29:col8', 'Tab3:row30:col8', 'Tab3:row32:col8', 'Tab3:row34:col8', 'Tab3:row35:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfexofenadine%5D%20Fexofenadine_Batool2025_reference&body=Drug%3A%20fexofenadine%0ARecord%3A%20Fexofenadine_Batool2025_reference%0APaper%3A%20Batool_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fexofenadine/Fexofenadine_Batool2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 09:16 UTC</sub>
