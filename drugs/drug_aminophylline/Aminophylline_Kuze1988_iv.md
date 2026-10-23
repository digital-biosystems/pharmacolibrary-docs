<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;aminophylline&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/&quot;},{&quot;label&quot;:&quot;Kuze_1988 \u00b7 iv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aminophylline_Amponsah2017_reference&quot;,&quot;label&quot;:&quot;Amponsah_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Amponsah2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Jameson1990_reference&quot;,&quot;label&quot;:&quot;Jameson_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Jameson1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Frymoyer2020_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Goetz1989_reference&quot;,&quot;label&quot;:&quot;Goetz_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Goetz1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Shi2013_reference&quot;,&quot;label&quot;:&quot;Shi_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Shi2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aminophylline — `Aminophylline_Kuze1988_iv`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The aminophylline/theophylline three-compartment model for anesthetized beagle-mix dogs was rejected because the fast-phase rate constant λ1 (α) was reported with 'n=10' instead of a unit, leaving it without an SI value, and a compartment was unreachable from the dose.

<div class="pk-model-meta" hidden drug="aminophylline" model-id="Aminophylline_Kuze1988_iv" status="rejected" stale="false" population="anesthetized beagle-mix dogs" measured-compound="theophylline" parameterization="mechanistic" topology="3C"></div>

## Citation
Kuze T, Miyazaki H, Taneike T. [Theophylline: pharmacokinetics, metabolism and urinary excretion in dogs]. Nihon yakurigaku zasshi. Folia pharmacologica Japonica 91(5):325–334 (1988).
  ·  DOI: [10.1254/fpj.91.325](https://doi.org/10.1254/fpj.91.325)

## Population and dosing

**Population:** anesthetized beagle-mix dogs · condition healthy · age group adult · n = 13.

**Dosing:** 574 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed aminophylline, measured theophylline.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α | λ1 | 10.609 | n=10 |
| β | kel | 0.149 | 1/h |
| K₁₂ | k12 | 6.013 | 1/h |
| K₂₁ | k21 | 4.380 | 1/h |
| V₁ | V1 | 0.300 | L/kg |
| V₂ | V2 | 0.415 | L/kg |
| Vd | V | 0.731 | L/kg |
| CLtot | CL | 0.106 | L/h/kg |
| AUC | AUC | 90.756 | mg·h/L |
| T₁/₂α | t1/2α | 0.079 | h |
| T₁/₂β | t1/2β | 5.629 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.867). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The aminophylline/theophylline three-compartment model for anesthetized beagle-mix dogs was rejected because the fast-phase rate constant λ1 (α) was reported with 'n=10' instead of a unit, leaving it without an SI value, and a compartment was unreachable from the dose.**

The parameter λ1 (labelled α, value 10.609) carries the verbatim unit 'n=10', which is a sample size, not a unit, so it could not be converted to SI and the model was held back. The structure check also flagged an unreachable/orphan compartment in the three-compartment topology, meaning a compartment has no path from the dose. Other parameters (kel 0.149 1/h, k12 6.013 1/h, k21 4.380 1/h, V1 0.300 L/kg, V2 0.415 L/kg, CL 0.106 L/h/kg) were reported with usable units. Extracted — theophylline: λ1 10.6 n=10, kel 0.149 1/h, k12 6.01 1/h, k21 4.38 1/h, V1 0.3 L/kg, V2 0.415 L/kg, V 0.731 L/kg, CL 0.106 L/h/kg, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has aminophylline, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α | `Q67` · λ1 | 10.609 | n=10 |  |  | n=10 | exact (1) | Kuze_1988_table_1:row1:col2 |
| β | `Q47` · kel | 0.149 | 1/h | 4.139e-05 | 1/s | 1/h | exact (1) | Kuze_1988_table_1:row3:col2 |
| K₁₂ | `Q301` · k12 | 6.013 | 1/h | 0.00167 | 1/s | 1/h | exact (1) | Kuze_1988_table_1:row4:col2 |
| K₂₁ | `Q302` · k21 | 4.380 | 1/h | 0.001217 | 1/s | 1/h | exact (1) | Kuze_1988_table_1:row5:col2 |
| V₁ | `Q63` · V1 | 0.300 | L/kg | 0.021 | m3 | L | exact (1) | Kuze_1988_table_1:row7:col2 |
| V₂ | `Q64` · V2 | 0.415 | L/kg | 0.02905 | m3 | L | exact (1) | Kuze_1988_table_1:row8:col2 |
| Vd | `Q61` · V | 0.731 | L/kg | 0.05117 | m3 | L | exact (1) | Kuze_1988_table_1:row9:col2 |
| CLtot | `Q22` · CL | 0.106 | L/h/kg | 2.061e-06 | m3/s | L/h | exact (1) | Kuze_1988_table_1:row10:col2 |
| AUC | `Q88` · AUC | 90.756 | mg·h/L |  |  | mg·h/L | exact (1) | Kuze_1988_table_1:row11:col2 |
| T₁/₂α | `Q59` · t1/2α | 0.079 | h | 284.4 | s | h | exact (1) | Kuze_1988_table_1:row12:col2 |
| T₁/₂β | `Q60` · t1/2β | 5.629 | h | 2.026e+04 | s | h | exact (1) | Kuze_1988_table_1:row13:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['Kuze_1988_table_1:row0:col2'])
- unit_dimension_unknown: 'n=10' (λ1)
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['Kuze_1988_table_1:row2:col2'])
- unit_dimension_unknown: 'n=10' (kel)
- unit_dimension_unknown: 'n=10' (k12)
- unit_dimension_unknown: 'n=10' (k21)
- dropped duplicate Q47 ('Kel', value '0.365') — already have one for this compound
- unit_dimension_unknown: 'n=10' (V1)
- unit_dimension_unknown: 'n=10' (V2)
- unit_dimension_unknown: 'n=10' (V)
- unit_dimension_unknown: 'n=10' (CL)
- unit_dimension_unknown: 'n=10' (AUC)
- unit_dimension_unknown: 'n=10' (t1/2α)
- unit_dimension_unknown: 'n=10' (t1/2β)
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'β' → 1/h (from the paper text: "Abstract: 'The elimination rate constant was 0.37±0.05 hr-1'; β is the terminal elimination rate constant, unit hr^-1 = ")
- implicit units: 'K₁₂' → 1/h (from the popPK convention: 'No unit stated for K12; first-order intercompartmental transfer rate constants are conventionally in 1/h, consistent wit')
- implicit units: 'K₂₁' → 1/h (from the popPK convention: 'No unit stated for K21; first-order transfer rate constant conventionally in 1/h, consistent with hr^-1 rate constants i')
- implicit units: 'V₁' → L/kg (from the paper text: "Abstract: 'the volume of distribution (Vd) was 0.73±0.04 l/kg' (Japanese: 見かけの分布容積(Vd)は0.73±0.04 l/kg); V1 is a volume o")
- implicit units: 'V₂' → L/kg (from the paper text: 'Abstract reports Vd in l/kg (0.73±0.04 l/kg); V2 is a volume of distribution of the same kind, per kg body weight.')
- implicit units: 'Vd' → L/kg (from the paper text: "Abstract: 'the volume of distribution (Vd) was 0.73±0.04 l/kg' — matches Vd = 0.731.")
- implicit units: 'CLtot' → L/h/kg (from the popPK convention: 'No unit stated for CLtot; value 0.106 ≈ Vd×β = 0.73×0.149 L/h/kg, so L/h/kg (body-weight normalized clearance) is consis')
- implicit units: 'AUC' → mg·h/L (from the popPK convention: 'No unit stated; AUC = dose/CLtot = 8.2 mg/kg ÷ 0.106 L/h/kg ≈ 77 mg·h/L, consistent with 90.756 mg·h/L.')
- implicit units: 'T₁/₂α' → h (from the paper text: "Abstract gives half-life in hours ('T1/2β ... 5.63±0.83 hr', Japanese: 5.63±0.83時間); T1/2α is a half-life, unit h.")
- implicit units: 'T₁/₂β' → h (from the paper text: "Abstract: 'The half-time (T1/2β) of theophylline was 5.63±0.83 hr' — matches T1/2β = 5.629, unit h.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=theophylline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'iv (n=10)' subgroup of Kuze_1988 (paper reports 3 populations: im (n=5), iv (n=10), po (n=5))
- review gap-fill skipped: this record measures 'theophylline', not aminophylline — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | aminophylline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | theophylline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 5.63 | 4.78 | 0.849 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Kuze_1988_table_1:row10:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  |  |  | ['Kuze_1988_table_1:row4:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  |  |  | ['Kuze_1988_table_1:row5:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Kuze_1988_table_1:row3:col2'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Kuze_1988_table_1:row12:col2'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Kuze_1988_table_1:row13:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row9:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row8:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row11:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | n=10 |  |  | ['Kuze_1988_table_1:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.106 |  |  | ['Kuze_1988_table_1:row10:col2'] |
| C8_topology | fail |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.42 L/h |  |  | ['Kuze_1988_table_1:row10:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 51.2 L |  |  | ['Kuze_1988_table_1:row9:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 21 L |  |  | ['Kuze_1988_table_1:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 29.1 L |  |  | ['Kuze_1988_table_1:row8:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminophylline%5D%20Aminophylline_Kuze1988_iv&body=Drug%3A%20aminophylline%0ARecord%3A%20Aminophylline_Kuze1988_iv%0APaper%3A%20Kuze_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aminophylline/Aminophylline_Kuze1988_iv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 23:44 UTC</sub>
