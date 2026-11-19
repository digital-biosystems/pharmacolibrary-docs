<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Memantine&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/&quot;},{&quot;label&quot;:&quot;Choi_2018 \u00b7 iv_memantine_3_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Memantine_Lee2016_reference&quot;,&quot;label&quot;:&quot;Lee_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Lee2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Memantine_Maekawa2019_dry_syrup&quot;,&quot;label&quot;:&quot;Maekawa_2019_dry_syrup&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Maekawa2019_dry_syrup.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Memantine_Maekawa2019_tablet&quot;,&quot;label&quot;:&quot;Maekawa_2019_tablet&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Maekawa2019_tablet.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Memantine_Saleh2022_reference&quot;,&quot;label&quot;:&quot;Saleh_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Saleh2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Memantine_Wang2026v2_reference&quot;,&quot;label&quot;:&quot;Wang_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_memantine/Memantine_Wang2026v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Memantine — `Memantine_Choi2018_iv_memantine_3_mg_kg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Memantine clearance, renal clearance, and volume parameters are reported in mass dose units rather than volumetric flow or volume units, preventing model conversion.

<div class="pk-model-meta" hidden drug="Memantine" model-id="Memantine_Choi2018_iv_memantine_3_mg_kg" status="rejected" stale="false" population="rats" measured-compound="Memantine" parameterization="mechanistic" topology="1C"></div>

## Citation
Choi YA, Song IS, Choi MK. Pharmacokinetic Drug-Drug Interaction and Responsible Mechanism between Memantine and Cimetidine. Pharmaceutics 10(3) (2018).
  ·  DOI: [10.3390/pharmaceutics10030119](https://doi.org/10.3390/pharmaceutics10030119)

## Population and dosing

**Population:** rats · condition healthy · n = 4 per group (implied from Figure 2 caption: means ± SD of four rats).

**Dosing:** 210, 350 mg, iv, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax | Cmax | 686.84 | mg/kg |
| AUC24h | AUCt | 1089.58 | mg/kg |
| AUC∞ | AUC∞ | 1121.98 | mg/kg |
| t1/2 | t1/2z | 5.06 | mg/kg |
| Vd,ss | Vss | 19.70 | mg/kg |
| CL | CL | 44.87 | mg/kg |
| CLrenal | CLR | 12.88 | mg/kg |
| Galantamine Plasma PK model parameters Population Alzheimer’s (36) Vcen | V | 157000.0 | mL |
| Donepezil Plasma PK model parameters Population Elderly (35) Ka | kabs | 0.022 | min−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Memantine clearance, renal clearance, and volume parameters are reported in mass dose units rather than volumetric flow or volume units, preventing model conversion.**

The record lists total clearance, renal clearance, volume of distribution at steady state, half-life, Cmax, and AUC for memantine using mg/kg units, which conflict with the dimensional requirements for clearance and volume. Additionally, the volume of central compartment for memantine is attributed to a galantamine model parameter, and an absorption rate constant is taken from a donepezil model, indicating significant cross-contamination from unrelated drugs. Extracted — memantine: Cmax 687 mg/kg, AUCt 1.09e+03 mg/kg, AUC∞ 1.12e+03 mg/kg, t1/2z 5.06 mg/kg, Vss 19.7 mg/kg, CL 44.9 mg/kg, CLR 12.9 mg/kg, V 1.57e+05 mL, … (+1).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax | `Q32` · Cmax | 686.84 | mg/kg |  |  | mg/kg | exact (1) | pharmaceutics-10-00119-t004:row2:col2 |
| AUC24h | `Q19` · AUCt | 1089.58 | mg/kg |  |  | mg/kg | llm_corrected (0.6) | pharmaceutics-10-00119-t004:row4:col2 |
| AUC∞ | `Q17` · AUC∞ | 1121.98 | mg/kg |  |  | mg/kg | exact (1) | pharmaceutics-10-00119-t004:row5:col2 |
| t1/2 | `Q57` · t1/2z | 5.06 | mg/kg |  |  | mg/kg | half_life_rule (0.95) | pharmaceutics-10-00119-t004:row6:col2 |
| Vd,ss | `Q65` · Vss | 19.70 | mg/kg |  |  | mg/kg | llm_corrected (0.6) | pharmaceutics-10-00119-t004:row7:col2 |
| CL | `Q22` · CL | 44.87 | mg/kg |  |  | mg/kg | exact (1) | pharmaceutics-10-00119-t004:row8:col2 |
| CLrenal | `Q26` · CLR | 12.88 | mg/kg |  |  | mg/kg | llm (0.6) | pharmaceutics-10-00119-t004:row10:col2 |
| Galantamine Plasma PK model parameters Population Alzheimer’s (36) Vcen | `Q61` · V | 157000.0 | mL | 0.157 | m3 | L | review_gapfill (0.7) | Saleh_2022:review |
| Donepezil Plasma PK model parameters Population Elderly (35) Ka | `Q49` · kabs | 0.022 | min−1 | 0.0003667 | 1/s | 1/h | review_gapfill (0.7) | Saleh_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cmax' → Q32 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC24h' → Q19 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC∞' → Q17 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 't1/2' → Q57 (unit '[mass]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'Vd,ss' → Q65 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'CL' → Q22 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLrenal' → Q26 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Memantine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'iv / memantine (3 mg/kg)' subgroup of Choi_2018 (paper reports 4 populations: iv / memantine (3 mg/kg), iv / memantine (3 mg/kg) + cimetidine (10 mg/kg), po / memantine (5 mg/kg), po / memantine (5 mg/kg) + cimetidine (50 mg/kg))
- gap-filled Q61 (V) from Saleh_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Saleh_2022's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | mg/kg ([mass]) | ['pharmaceutics-10-00119-t004:row5:col2'] |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | mg/kg ([mass]) | ['pharmaceutics-10-00119-t004:row4:col2'] |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | mg/kg ([mass]) | ['pharmaceutics-10-00119-t004:row8:col2'] |
| C5_dimension_Q26 | fail | [length] ** 3 / [time] | mg/kg ([mass]) | ['pharmaceutics-10-00119-t004:row10:col2'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | mg/kg ([mass]) | ['pharmaceutics-10-00119-t004:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Saleh_2022:review'] |
| C5_dimension_Q57 | fail | [time] | mg/kg ([mass]) | ['pharmaceutics-10-00119-t004:row6:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Saleh_2022:review'] |
| C5_dimension_Q65 | fail | [length] ** 3 | mg/kg ([mass]) | ['pharmaceutics-10-00119-t004:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 44.87 | ['pharmaceutics-10-00119-t004:row8:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 157 L | ['Saleh_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmemantine%5D%20Memantine_Choi2018_iv_memantine_3_mg_kg&body=Drug%3A%20memantine%0ARecord%3A%20Memantine_Choi2018_iv_memantine_3_mg_kg%0APaper%3A%20Choi_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_memantine/Memantine_Choi2018_iv_memantine_3_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 01:09 UTC</sub>
