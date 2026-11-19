<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Zinc oxide&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/&quot;},{&quot;label&quot;:&quot;Chen_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ZincOxide_Creutzenberg2022_reference&quot;,&quot;label&quot;:&quot;Creutzenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Creutzenberg2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Watson2015_reference&quot;,&quot;label&quot;:&quot;Watson_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Watson2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Yu2021_b_zno&quot;,&quot;label&quot;:&quot;Yu_2021_b_zno&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Yu2021_b_zno.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Yu2021_n_zno&quot;,&quot;label&quot;:&quot;Yu_2021_n_zno&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Yu2021_n_zno.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincOxide_Yu2021_zn_ions&quot;,&quot;label&quot;:&quot;Yu_2021_zn_ions&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_oxide/ZincOxide_Yu2021_zn_ions.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zinc oxide — `ZincOxide_Chen2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Only clearance was extracted — no volume; kabs and kuptake have no unit.

<div class="pk-model-meta" hidden drug="Zinc oxide" model-id="ZincOxide_Chen2015_reference" status="needs_review" stale="false" population="mice (NHRI, Zhunan, Taiwan, IACUC-approved protocols)" measured-compound="65Zn (radiolabeled zinc) in ZnO NPs and zinc nitrate" parameterization="mechanistic" topology="1C"></div>

## Citation
Chen WY, Cheng YH, Hsieh NH, Wu BC, Chou WC, Ho CC et al. Physiologically based pharmacokinetic modeling of zinc oxide nanoparticles and zinc nitrate in mice. International journal of nanomedicine 10:6277–6292 (2015).
  ·  DOI: [10.2147/IJN.S86785](https://doi.org/10.2147/IJN.S86785)

## Population and dosing

**Population:** mice (NHRI, Zhunan, Taiwan, IACUC-approved protocols) · condition healthy, single intravenous injection · age group adult.

**Dosed compound ≠ measured compound:** dosed 65ZnO nanoparticles (10 nm and 71 nm) and 65Zn(NO3)2, measured 65Zn (radiolabeled zinc) in ZnO NPs and zinc nitrate.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Excretion and elimination rates (h−1) / 10 nm 65ZnO NP | kexcr | 0.0438 | h−1 |
| pLi | Kp | 6.28 |  |
| pGI | FG | 4.4 |  |
| kGI | kabs | 0.017 |  |
| kLi | equation variable | 0.019 |  |
| kKi | kuptake | 0.010 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; kabs and kuptake have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — zinc oxide: kexcr 0.0438 h−1, Kp 6.28, FG 4.4, kabs 0.017, kuptake 0.01.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has 65ZnO nanoparticles (10 nm and 71 nm) and 65Zn(NO3)2, the second reading Zinc oxide nanoparticles (65ZnO NPs); it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Excretion and elimination rates (h−1) / 10 nm 65ZnO NP | `Q50` · kexcr | 0.0438 | h−1 | 1.217e-05 | 1/s | 1/h | llm_corrected (0.6) | ts4-ijn-10-6277:row4:col1, ts4-ijn-10-6277:row5:col1, ts4-ijn-10-6277:row6:col1, ts4-ijn-10-6277:row7:col1, ts4-ijn-10-6277:row8:col1, ts4-ijn-10-6277:row9:col1, ts4-ijn-10-6277:row10:col1, ts4-ijn-10-6277:row12:col1, ts4-ijn-10-6277:row13:col1, ts4-ijn-10-6277:row15:col1, ts4-ijn-10-6277:row16:col1, ts4-ijn-10-6277:row17:col1, ts4-ijn-10-6277:row18:col1, ts4-ijn-10-6277:row19:col1, ts4-ijn-10-6277:row23:col1, ts4-ijn-10-6277:row24:col1, ts4-ijn-10-6277:row25:col1, ts4-ijn-10-6277:row26:col1, ts4-ijn-10-6277:row27:col1, ts4-ijn-10-6277:row28:col1, Chen_2015_table_4:row3:col1, Chen_2015_table_4:row4:col1, Chen_2015_table_4:row5:col1, Chen_2015_table_4:row6:col1, Chen_2015_table_4:row7:col1, Chen_2015_table_4:row8:col1, Chen_2015_table_4:row9:col1, Chen_2015_table_4:row11:col1, Chen_2015_table_4:row12:col1, Chen_2015_table_4:row14:col1, Chen_2015_table_4:row15:col1, Chen_2015_table_4:row16:col1, Chen_2015_table_4:row17:col1, Chen_2015_table_4:row18:col1, Chen_2015_table_4:row22:col1, Chen_2015_table_4:row23:col1, Chen_2015_table_4:row24:col1, Chen_2015_table_4:row25:col1, Chen_2015_table_4:row26:col1, Chen_2015_table_4:row27:col1 |
| pLi | `Q410` · Kp | 6.28 |  |  |  |  | llm (0.6) | Chen_2015_table_7:row2:col6, Chen_2015_table_7:row2:col11 |
| pGI | `Q41` · FG | 4.4 |  | 0.044 |  |  | llm (0.6) | Chen_2015_table_7:row7:col1, Chen_2015_table_7:row7:col6, Chen_2015_table_7:row7:col11 |
| kGI | `Q49` · kabs | 0.017 |  |  |  |  | llm (0.6) | Chen_2015_table_7:row11:col1, Chen_2015_table_7:row11:col2, Chen_2015_table_7:row11:col3, Chen_2015_table_7:row11:col4, Chen_2015_table_7:row11:col5, Chen_2015_table_7:row11:col6, Chen_2015_table_7:row11:col11 |
| kLi | `Q900` · equation variable | 0.019 |  | 0.019 |  |  | llm (0.6) | Chen_2015_table_7:row12:col1, Chen_2015_table_7:row12:col2, Chen_2015_table_7:row12:col3, Chen_2015_table_7:row12:col4, Chen_2015_table_7:row12:col5, Chen_2015_table_7:row12:col6, Chen_2015_table_7:row12:col11 |
| kKi | `Q349` · kuptake | 0.010 |  |  |  |  | llm (0.6) | Chen_2015_table_7:row13:col1, Chen_2015_table_7:row13:col2, Chen_2015_table_7:row13:col3, Chen_2015_table_7:row13:col4, Chen_2015_table_7:row13:col5, Chen_2015_table_7:row13:col6, Chen_2015_table_7:row13:col11, Chen_2015_table_7:row13:col12, Chen_2015_table_7:row13:col13, Chen_2015_table_7:row13:col14, Chen_2015_table_7:row13:col15 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Excretion/elimination rate (h−1) | Q47 | llm |

## Departures & gaps

**Interpretation flags:**
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '24' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '48' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '72' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '168' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '672' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '71 nm 65zno npsa / xini' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '65zn(no3)2 / xini' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10 nm 65zno npsa / xini' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '65zn(no3)2 / xmax' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '65zn(no3)2 / tx50' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '65zn(no3)2 / xn' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '65zn(no3)2 / r2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10 nm 65zno npsa / xmax' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10 nm 65zno npsa / tx50' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10 nm 65zno npsa / xn' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10 nm 65zno npsa / r2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '71 nm 65zno npsa / xmax' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '71 nm 65zno npsa / tx50' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '71 nm 65zno npsa / xn' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '71 nm 65zno npsa / r2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q50 ('Excretion and elimination rates (h−1) / 71 nm 65ZnO NP', value '0.0385') — already have one for this compound
- dropped duplicate Q50 ('Excretion and elimination rates (h−1) / 65Zn(NO3)0', value '0.0325') — already have one for this compound
- dropped unlinked row (NIL): 'pKi' — extend the ontology if this is a real PK parameter (source ['Chen_2015_table_7:row3:col1', 'Chen_2015_table_7:row3:col6', 'Chen_2015_table_7:row3:col11'])
- dropped duplicate Q410 ('pSp', value '6') — already have one for this compound
- dropped duplicate Q410 ('pLu', value '3.78') — already have one for this compound
- dropped duplicate Q410 ('pHe', value '2.55') — already have one for this compound
- 'pGI' → Q41: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q410 ('pBr', value '0.33') — already have one for this compound
- dropped duplicate Q410 ('pCa', value '0.77') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=65Zn (radiolabeled zinc) in ZnO NPs and zinc nitrate
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- base model from table(s) without population columns (Chen_2015_table_4, Chen_2015_table_7, ts4-ijn-10-6277); populations 10 nm 65zno nps, 71 nm 65zno nps, value kept as separate records
- molar mass: none found for '65Zn (radiolabeled zinc) in ZnO NPs and zinc nitrate' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '65Zn (radiolabeled zinc) in ZnO NPs and zinc nitrate', not zinc_oxide — the review values are the parent's

**Extraction notes:**
- transposed table ts4-ijn-10-6277: logical view retains original source coordinates
- transposed table Chen_2015_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (58 record(s))
- companion parameter table 6 transcribed (19 record(s))
- table Chen_2015_table_7: units_need_context
- table Chen_2015_table_7: unparsed_numeric_cell
- companion parameter table 7 transcribed (89 record(s))
- table Chen_2015_table_8: units_need_context
- companion parameter table 8 transcribed (24 record(s))
- no LLM table selection; kept 4 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[excretion and elimination rates (h-1) / 71 nm 65zno np]` |  | 0.0385 | only_one_extracted |
| `gpt-oss:120b` | `parameters[excretion/elimination rate]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kgi]` | 0.017 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kki]` | 0.010 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kli]` | 0.019 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[pgi]` | 4.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[pli].value` | 6.28 | 2.1 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | 65ZnO nanoparticles (10 nm and 71 nm) and 65Zn(NO3)2 | Zinc oxide nanoparticles (65ZnO NPs) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 65Zn (radiolabeled zinc) in ZnO NPs and zinc nitrate | 65Zn (zinc) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Chen_2015_table_7:row10:col1', 'Chen_2015_table_7:row10:col2', 'Chen_2015_table_7:row10:col3', 'Chen_2015_table_7:row10:col4', 'Chen_2015_table_7:row10:col5', 'Chen_2015_table_7:row10:col6', 'Chen_2015_table_7:row10:col7', 'Chen_2015_table_7:row10:col8', 'Chen_2015_table_7:row10:col9', 'Chen_2015_table_7:row10:col10', 'Chen_2015_table_7:row10:col11', 'Chen_2015_table_7:row10:col12', 'Chen_2015_table_7:row10:col13', 'Chen_2015_table_7:row10:col14', 'Chen_2015_table_7:row10:col15'] |
| C5_dimension_Q50 | pass | 1 / [time] |  | ['ts4-ijn-10-6277:row4:col1', 'ts4-ijn-10-6277:row5:col1', 'ts4-ijn-10-6277:row6:col1', 'ts4-ijn-10-6277:row7:col1', 'ts4-ijn-10-6277:row8:col1', 'ts4-ijn-10-6277:row9:col1', 'ts4-ijn-10-6277:row10:col1', 'ts4-ijn-10-6277:row12:col1', 'ts4-ijn-10-6277:row13:col1', 'ts4-ijn-10-6277:row15:col1', 'ts4-ijn-10-6277:row16:col1', 'ts4-ijn-10-6277:row17:col1', 'ts4-ijn-10-6277:row18:col1', 'ts4-ijn-10-6277:row19:col1', 'ts4-ijn-10-6277:row23:col1', 'ts4-ijn-10-6277:row24:col1', 'ts4-ijn-10-6277:row25:col1', 'ts4-ijn-10-6277:row26:col1', 'ts4-ijn-10-6277:row27:col1', 'ts4-ijn-10-6277:row28:col1', 'Chen_2015_table_4:row3:col1', 'Chen_2015_table_4:row4:col1', 'Chen_2015_table_4:row5:col1', 'Chen_2015_table_4:row6:col1', 'Chen_2015_table_4:row7:col1', 'Chen_2015_table_4:row8:col1', 'Chen_2015_table_4:row9:col1', 'Chen_2015_table_4:row11:col1', 'Chen_2015_table_4:row12:col1', 'Chen_2015_table_4:row14:col1', 'Chen_2015_table_4:row15:col1', 'Chen_2015_table_4:row16:col1', 'Chen_2015_table_4:row17:col1', 'Chen_2015_table_4:row18:col1', 'Chen_2015_table_4:row22:col1', 'Chen_2015_table_4:row23:col1', 'Chen_2015_table_4:row24:col1', 'Chen_2015_table_4:row25:col1', 'Chen_2015_table_4:row26:col1', 'Chen_2015_table_4:row27:col1'] |
| C5_unit_missing_Q349 | fail | 1 / [time] |  | ['Chen_2015_table_7:row13:col1', 'Chen_2015_table_7:row13:col2', 'Chen_2015_table_7:row13:col3', 'Chen_2015_table_7:row13:col4', 'Chen_2015_table_7:row13:col5', 'Chen_2015_table_7:row13:col6', 'Chen_2015_table_7:row13:col11', 'Chen_2015_table_7:row13:col12', 'Chen_2015_table_7:row13:col13', 'Chen_2015_table_7:row13:col14', 'Chen_2015_table_7:row13:col15'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Chen_2015_table_7:row11:col1', 'Chen_2015_table_7:row11:col2', 'Chen_2015_table_7:row11:col3', 'Chen_2015_table_7:row11:col4', 'Chen_2015_table_7:row11:col5', 'Chen_2015_table_7:row11:col6', 'Chen_2015_table_7:row11:col11'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzinc_oxide%5D%20ZincOxide_Chen2015_reference&body=Drug%3A%20zinc_oxide%0ARecord%3A%20ZincOxide_Chen2015_reference%0APaper%3A%20Chen_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zinc_oxide/ZincOxide_Chen2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 00:55 UTC</sub>
