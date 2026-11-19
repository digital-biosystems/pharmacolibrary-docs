<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Donepezil&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/&quot;},{&quot;label&quot;:&quot;Bae_2021 \u00b7 dnpwmpfrom_28_mice&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Karalis2023_drug_donepezil&quot;,&quot;label&quot;:&quot;Karalis_2023_drug_donepezil&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Karalis2023_drug_donepezil.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Pyka2024_reference&quot;,&quot;label&quot;:&quot;Pyka_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Pyka2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Donepezil — `Donepezil_Bae2021_dnpwmpfrom_28_mice`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Donepezil" model-id="Donepezil_Bae2021_dnpwmpfrom_28_mice" status="rejected" stale="false" population="ICR mice" measured-compound="Donepezil" parameterization="apparent" topology="2C"></div>

## Citation
Bae M, Han SY, Kim ES, You BH, Kim YM, Cho J et al. Effect of Water Extract of Mangosteen Pericarp on Donepezil Pharmacokinetics in Mice. Molecules (Basel, Switzerland) 26(17) (2021).
  ·  DOI: [10.3390/molecules26175246](https://doi.org/10.3390/molecules26175246)

## Population and dosing

**Population:** ICR mice · condition healthy · age group adult · n = 30.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC360 min (μg min/mL) | AUCt | 12.22 | μg min/mL |
| AUC0-∞ (μg min/mL) | AUC∞ | 12.60 | μg min/mL |
| Terminal half-life (min) | t1/2z | 65.11 | min |
| Cmax (μg/mL) | Cmax | 0.16 | μg/mL |
| Tmax (min)a | tmax | 15 | min |
| Vc/F (mL/kg) | V1/F | 20631.21 | mL/kg |
| Vp/F (mL/kg) | V2/F | 3886.46 | mL/kg |
| ka (1/min) | kabs | 0.056 | 1/min |
| k12 (1/min) | k12 | 0.012 | 1/min |
| k21 (1/min) | k21 | 0.010 | 1/min |
| ke (1/min) | kel | 0.023 | 1/min |
| Ae0–24 h (% of dose) | Ae | 0.73 | % of dose |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (Ae ), so that value has no SI equivalent. Extracted — donepezil: AUCt 12.2 μg min/mL, AUC∞ 12.6 μg min/mL, t1/2z 65.1 min, Cmax 0.16 μg/mL, tmax 15 min, V1/F 2.06e+04 mL/kg, V2/F 3.89e+03 mL/kg, kabs 0.056 1/min, … (+4).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of gi24 h: this record has none, the second reading 0.08. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC360 min (μg min/mL) | `Q19` · AUCt | 12.22 | μg min/mL | 0.7332 | kg*s/m3 | (min·µg)/ml | llm (0.6) | Bae_2021_table_1:row1:col2 |
| AUC0-∞ (μg min/mL) | `Q17` · AUC∞ | 12.60 | μg min/mL | 0.756 | kg*s/m3 | (min·µg)/ml | exact (1) | Bae_2021_table_1:row2:col2 |
| Terminal half-life (min) | `Q57` · t1/2z | 65.11 | min | 3907 | s | min | half_life_rule (0.95) | Bae_2021_table_1:row3:col2 |
| Cmax (μg/mL) | `Q32` · Cmax | 0.16 | μg/mL | 0.00016 | kg/m3 | µg/ml | exact (1) | Bae_2021_table_1:row4:col2 |
| Tmax (min)a | `Q56` · tmax | 15 | min | 900 | s | min | llm_confirmed (0.6) | Bae_2021_table_1:row5:col2 |
| Vc/F (mL/kg) | `Q290` · V1/F | 20631.21 | mL/kg | 1.444 | m3 | ml/kg | exact (1) | Bae_2021_table_1:row6:col2 |
| Vp/F (mL/kg) | `Q82` · V2/F | 3886.46 | mL/kg | 0.2721 | m3 | ml/kg | exact (1) | Bae_2021_table_1:row7:col2 |
| ka (1/min) | `Q49` · kabs | 0.056 | 1/min | 0.0009333 | 1/s | 1/min | exact (1) | Bae_2021_table_1:row8:col2 |
| k12 (1/min) | `Q301` · k12 | 0.012 | 1/min | 0.0002 | 1/s | 1/min | exact (1) | Bae_2021_table_1:row9:col2 |
| k21 (1/min) | `Q302` · k21 | 0.010 | 1/min | 0.0001667 | 1/s | 1/min | exact (1) | Bae_2021_table_1:row10:col2 |
| ke (1/min) | `Q47` · kel | 0.023 | 1/min | 0.0003833 | 1/s | 1/min | exact (1) | Bae_2021_table_1:row11:col2 |
| Ae0–24 h (% of dose) | `Q91` · Ae | 0.73 | % of dose |  |  | %·dose·of | llm (0.6) | Bae_2021_table_1:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Body weight (g)' — extend the ontology if this is a real PK parameter (source ['Bae_2021_table_1:row0:col2'])
- unit_dimension_unknown: '% of dose' (Ae )
- dropped unlinked row (NIL): 'GI24 h (% of dose)' — extend the ontology if this is a real PK parameter (source ['Bae_2021_table_1:row13:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Donepezil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'dnpwmp (n = 10 from 28 mice )' subgroup of Bae_2021 (paper reports 2 populations: dnp (n = 10 from 30 mice), dnpwmp (n = 10 from 28 mice ))
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[gi24 h]` |  | 0.08 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Bae_2021_table_1:row2:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Bae_2021_table_1:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Bae_2021_table_1:row6:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Bae_2021_table_1:row9:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Bae_2021_table_1:row10:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Bae_2021_table_1:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Bae_2021_table_1:row11:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2021_table_1:row8:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Bae_2021_table_1:row5:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bae_2021_table_1:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Bae_2021_table_1:row7:col2'] |
| C5_unit_missing_Q91 | fail | [mass] | % of dose | ['Bae_2021_table_1:row12:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.44e+03 L | ['Bae_2021_table_1:row6:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 272 L | ['Bae_2021_table_1:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Bae2021_dnpwmpfrom_28_mice&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Bae2021_dnpwmpfrom_28_mice%0APaper%3A%20Bae_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_donepezil/Donepezil_Bae2021_dnpwmpfrom_28_mice%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:40 UTC</sub>
