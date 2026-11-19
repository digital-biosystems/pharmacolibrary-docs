<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methylphenidate&quot;,&quot;href&quot;:&quot;drugs/toxin_methylphenidate/&quot;},{&quot;label&quot;:&quot;Incledon_2022 \u00b7 formulation_proximal_colon_dr_er_mph&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methylphenidate_Lyauk2016_reference&quot;,&quot;label&quot;:&quot;Lyauk_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methylphenidate/Methylphenidate_Lyauk2016_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methylphenidate — `Methylphenidate_Incledon2022_formulation_proximal_colon_dr_e`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The methylphenidate record was rejected because Cmax, AUClast, and AUC∞ values were incorrectly recorded with a percentage unit, creating a dimensional conflict.

<div class="pk-model-meta" hidden drug="Methylphenidate" model-id="Methylphenidate_Incledon2022_formulation_proximal_colon_dr_e" status="rejected" stale="false" population="healthy adults" measured-compound="Methylphenidate" parameterization="mechanistic" topology="1C"></div>

## Citation
Incledon B, Incledon C, Gomeni R, Uchida CL, Morris A, Perry K et al. Effect of Colonic Absorption on the Pharmacokinetic Properties of Delayed-Release and Extended-Release Methylphenidate: In Vivo, In Vitro, and Modeling Evaluations. Clinical pharmacology in drug development 11(8):966-975 (2022).
  ·  DOI: [10.1002/cpdd.1089](https://doi.org/10.1002/cpdd.1089)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 100 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cₘₐₓ, ng/mL, mean ± CV (%) | Cmax | 15.6 | % |
| AUC₀-t, ng · h/mL, mean ± CV (%) | AUClast | 176 | % |
| AUC₀-∞, ng · h/mL, mean ± CV (%) | AUC∞ | 177 | % |
| AUC₀-t, ng · h/mL | AUCt | 169 | ng · h/mL |
| volume of distribution for RA | V | 0.6 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The methylphenidate record was rejected because Cmax, AUClast, and AUC∞ values were incorrectly recorded with a percentage unit, creating a dimensional conflict.**

The parameters Cmax, AUClast, and AUC∞ have values of 15.6, 176, and 177 respectively, but their unit is listed as '%'. This unit is dimensionless and conflicts with the required dimensions for concentration and exposure metrics. Consequently, the values could not be converted to SI units for structural modeling, leading to rejection. Extracted — methylphenidate: Cmax 15.6 %, AUClast 176 %, AUC∞ 177 %, AUCt 169 ng · h/mL, V 0.6 L/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cₘₐₓ, ng/mL, mean ± CV (%) | `Q32` · Cmax | 15.6 | % |  |  | % | llm_confirmed (0.6) | Incledon_2022_table_2:row0:col2 |
| AUC₀-t, ng · h/mL, mean ± CV (%) | `Q74` · AUClast | 176 | % |  |  | % | llm_corrected (0.6) | Incledon_2022_table_2:row2:col2 |
| AUC₀-∞, ng · h/mL, mean ± CV (%) | `Q17` · AUC∞ | 177 | % |  |  | % | llm_confirmed (0.6) | Incledon_2022_table_2:row3:col2 |
| AUC₀-t, ng · h/mL | `Q19` · AUCt | 169 | ng · h/mL | 0.6084 | kg*s/m3 | (h·ng)/ml | exact (1) | Incledon_2022_table_2:row6:col2, Incledon_2022_table_2:row8:col2 |
| volume of distribution for RA | `Q61` · V | 0.6 | L/kg | 0.042 | m3 | L | review_gapfill (0.7) | Yang_2014:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cₘₐₓ, ng/mL, mean ± CV (%)' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'tₘₐₓ, h, median (range)' — extend the ontology if this is a real PK parameter (source ['Incledon_2022_table_2:row1:col2'])
- unit_dimension_mismatch: 'AUC₀-t, ng · h/mL, mean ± CV (%)' → Q74 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC₀-∞, ng · h/mL, mean ± CV (%)' → Q17 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 't₁/₂, h, mean (SD)' — extend the ontology if this is a real PK parameter (source ['Incledon_2022_table_2:row4:col2'])
- dropped duplicate Q32 ('Cₘₐₓ, ng/mL', value '15.0') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methylphenidate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'formulation: proximal colon (dr/er-mph) (n = 18)' subgroup of Incledon_2022 (paper reports 6 populations: formulation: distal colon (n = 18), formulation: proximal colon (dr/er-mph) (n = 18), formulation: small intestine (n = 18), modeled oros mph (54 mg), modeled small intestine formulation (100 mg), modeled small intestine formulation (54 mg))
- gap-filled Q61 (V) from Yang_2014's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 4 transcribed (9 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | % (dimensionless) | ['Incledon_2022_table_2:row3:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Incledon_2022_table_2:row6:col2', 'Incledon_2022_table_2:row8:col2'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | % (dimensionless) | ['Incledon_2022_table_2:row0:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Yang_2014:review'] |
| C5_dimension_Q74 | fail | [mass] * [time] / [length] ** 3 | % (dimensionless) | ['Incledon_2022_table_2:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 42 L | ['Yang_2014:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylphenidate%5D%20Methylphenidate_Incledon2022_formulation_proximal_colon_dr_e&body=Drug%3A%20methylphenidate%0ARecord%3A%20Methylphenidate_Incledon2022_formulation_proximal_colon_dr_e%0APaper%3A%20Incledon_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methylphenidate/Methylphenidate_Incledon2022_formulation_proximal_colon_dr_e%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:58 UTC</sub>
