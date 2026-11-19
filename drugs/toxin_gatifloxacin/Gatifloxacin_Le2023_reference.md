<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Gatifloxacin&quot;,&quot;href&quot;:&quot;drugs/toxin_gatifloxacin/&quot;},{&quot;label&quot;:&quot;Le_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gatifloxacin_Nagai2010_diabetic_rats&quot;,&quot;label&quot;:&quot;Nagai_2010_diabetic_rats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_gatifloxacin/Gatifloxacin_Nagai2010_diabetic_rats.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gatifloxacin_Nagai2010_naive_rats&quot;,&quot;label&quot;:&quot;Nagai_2010_naive_rats&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_gatifloxacin/Gatifloxacin_Nagai2010_naive_rats.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gatifloxacin_Peloquin2008_reference&quot;,&quot;label&quot;:&quot;Peloquin_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_gatifloxacin/Gatifloxacin_Peloquin2008_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gatifloxacin_Andes2002_reference&quot;,&quot;label&quot;:&quot;Andes_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_gatifloxacin/Gatifloxacin_Andes2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Gatifloxacin — `Gatifloxacin_Le2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Gatifloxacin" model-id="Gatifloxacin_Le2023_reference" status="rejected" stale="false" population="healthy adults (humans) and New Zealand White/Dutch Belted rabbits; model extrapolated rabbit-to-human ocular exposure" measured-compound="gatifloxacin" parameterization="mechanistic" topology="1C"></div>

## Citation
Le Merdy M, AlQaraghuli F, Tan ML, Walenga R, Babiskin A, Zhao L et al. Clinical Ocular Exposure Extrapolation for Ophthalmic Solutions Using PBPK Modeling and Simulation. Pharmaceutical research 40(2):431–447 (2023).
  ·  DOI: [10.1007/s11095-022-03390-z](https://doi.org/10.1007/s11095-022-03390-z)

## Population and dosing

**Population:** healthy adults (humans) and New Zealand White/Dutch Belted rabbits; model extrapolated rabbit-to-human ocular exposure · condition healthy; topical ocular administration (human cataract, keratoplasty, vitrectomy, conjunctival biopsy surgery) · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.60).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MWt | MW | 375.4 | g/mol |
| Fu | fu | 80 |  |
| Renalfraction | fe | 0.12 | - |
| PermCornea_epi | Kp | 3 | × 10–7 cm/s |
| SARChoroid | kout_peripheral | 1.15 | × 10–4 s−1 |
| SARICB | CLint | 0.7 | × 10–3 s−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

A reported unit could not be converted (Kp, kout_peripheral and CLint), so that value has no SI equivalent. Extracted — gatifloxacin: MW 375 g/mol, fu 80, fe 0.12 -, Kp 3 × 10–7 cm/s, kout_peripheral 1.15 × 10–4 s−1, CLint 0.7 × 10–3 s−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of permcornea_epi: this record has 3, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| MWt | `Q374` · MW | 375.4 | g/mol | 0.3754 | g/(m·ol) | llm (0.6) | Tab1:row2:col7, Tab1:row2:col8 |
| Fu | `Q46` · fu | 80 |  | 0.8 |  | exact (1) | Tab1:row4:col7 |
| Renalfraction | `Q44` · fe | 0.12 | - | 0.12 | - | llm (0.6) | Tab1:row12:col7 |
| PermCornea_epi | `Q410` · Kp | 3 | × 10–7 cm/s |  | (10-7·cm)/s | llm (0.6) | Tab1:row15:col7 |
| SARChoroid | `Q346` · kout_peripheral | 1.15 | × 10–4 s−1 |  | 10-4/s | llm (0.6) | Tab1:row24:col7 |
| SARICB | `Q3` · CLint | 0.7 | × 10–3 s−1 |  | 10-3/s | llm (0.6) | Tab1:row27:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'logP(neutral)' — extend the ontology if this is a real PK parameter (source ['Tab1:row3:col7'])
- 'Fu' → Q46: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q46 ('Fu melanin', value '0.4') — already have one for this compound
- dropped duplicate Q46 ('Rbp', value '0.9') — already have one for this compound
- dropped unlinked row (NIL): 'Peff' — extend the ontology if this is a real PK parameter (source ['Tab1:row10:col7'])
- unit_dimension_unknown: '-' (fe)
- unit_dimension_unknown: '× 10–7 cm/s' (Kp)
- dropped unlinked row (NIL): 'PermCornea_str' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col7'])
- dropped unlinked row (NIL): 'PermConjunctiva' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col7'])
- dropped unlinked row (NIL): 'PermAH' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col7'])
- unit_dimension_unknown: '× 10–5 cm/s' (Kp)
- dropped duplicate Q410 ('PermICB', value '8.94') — already have one for this compound
- dropped unlinked row (NIL): 'PermSclera' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col7'])
- dropped unlinked row (NIL): 'PermChoroid' — extend the ontology if this is a real PK parameter (source ['Tab1:row21:col7'])
- dropped unlinked row (NIL): 'PermRetina' — extend the ontology if this is a real PK parameter (source ['Tab1:row22:col7'])
- unit_dimension_unknown: '× 10–6 cm/s' (Kp)
- dropped duplicate Q410 ('PermV.H', value '6.9') — already have one for this compound
- unit_dimension_unknown: '× 10–4 s−1' (kout_peripheral)
- dropped unlinked row (NIL): 'SARRetina' — extend the ontology if this is a real PK parameter (source ['Tab1:row25:col7'])
- dropped unlinked row (NIL): 'SARConjunctiva' — extend the ontology if this is a real PK parameter (source ['Tab1:row26:col7'])
- unit_dimension_unknown: '× 10–3 s−1' (CLint)
- dropped value-less row: '*: AP10 refers to'
- dropped value-less row: 'module version 10'
- dropped value-less row: '**: Parameter values for rabbit and human respectively'
- dropped value-less row: '***: GP refers to GastroPlus® default parameters'
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 339)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gatifloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- amount-only peripheral compartment: a peripheral output rate (kout_peripheral) is present with no reported volume — model its AMOUNT; concentration is not identifiable without an assumed volume
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab1: missing_unit_binding
- table Tab1: unparsed_numeric_cell
- table Le_2023_table_S5: missing_label
- table Le_2023_table_S5: unknown_column_role
- table Le_2023_table_S5: units_need_context
- companion parameter table S5 transcribed (2 record(s))
- table Le_2023_table_S6: missing_label
- companion parameter table S6 transcribed (0 record(s))
- table Le_2023_table_S7: missing_label
- table Le_2023_table_S7: units_need_context
- companion parameter table S7 transcribed (0 record(s))
- no LLM table selection; kept 4 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[permcornea_epi]` | 3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[rbp]` |  | 0.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[sarchoroid].parameter_id` | Q346 | Q48 | mismatch |
| `gpt-oss:120b` | `parameters[saricb]` | 0.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[sarretina]` |  | 1.39 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Tab1:row2:col7', 'Tab1:row2:col8'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | × 10–3 s−1 | ['Tab1:row27:col7'] |
| C5_unit_missing_Q346 | fail | 1 / [time] | × 10–4 s−1 | ['Tab1:row24:col7'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgatifloxacin%5D%20Gatifloxacin_Le2023_reference&body=Drug%3A%20gatifloxacin%0ARecord%3A%20Gatifloxacin_Le2023_reference%0APaper%3A%20Le_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_gatifloxacin/Gatifloxacin_Le2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:43 UTC</sub>
