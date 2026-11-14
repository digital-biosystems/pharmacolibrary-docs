<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Lead&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/&quot;},{&quot;label&quot;:&quot;Kim_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lead_Blackman2026_reference&quot;,&quot;label&quot;:&quot;Blackman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Blackman2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lead_Macente2023_reference&quot;,&quot;label&quot;:&quot;Macente_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Macente2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lead_Nguyen2021_reference&quot;,&quot;label&quot;:&quot;Nguyen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Nguyen2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lead_Janus2025_reference&quot;,&quot;label&quot;:&quot;Janus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Janus2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lead_Podgorek2023_reference&quot;,&quot;label&quot;:&quot;Podgor\u0161ek_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Podgorek2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lead_Ravix2024_reference&quot;,&quot;label&quot;:&quot;Ravix_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Ravix2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lead — `Lead_Kim2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because clearance and volume values, derived solely from abstract summary statistics, fall outside physiological plausibility windows.

<div class="pk-model-meta" hidden drug="Lead" model-id="Lead_Kim2026_reference" status="rejected" stale="false" population="East Asian populations (Korean birth cohorts Ko-CHENS and NOEMOC)" measured-compound="Lead" parameterization="mechanistic" topology="1C"></div>

## Citation
Kim JH, Seo S. Placental and lactational transfer of lead across the perinatal continuum: a proof-of-concept extended PBPK model calibrated with longitudinal data from two independent human birth cohorts. Toxicology and applied pharmacology 518:118110 (2026).
  ·  DOI: [10.1016/j.taap.2026.118110](https://doi.org/10.1016/j.taap.2026.118110)

## Population and dosing

**Population:** East Asian populations (Korean birth cohorts Ko-CHENS and NOEMOC) · condition perinatal exposure · age group mixed · n = 3625.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KD_pl | KD | 0.044 | L·day⁻¹·dm⁻² |
| CL (mL/h/kg) | CL | 0.45 | mL/h/kg |
| V (mL/kg) | V | 1.3 | mL/kg |
| median value of the absorption rate constant | kabs | 1.22 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because clearance and volume values, derived solely from abstract summary statistics, fall outside physiological plausibility windows.**

The model was constructed from abstract-only data, meaning reported summary statistics served as fitted parameters rather than true model estimates. The extracted clearance of 0.45 mL/h/kg and volume of distribution of 1.3 mL/kg are implausible in magnitude, indicating a likely unit or scale extraction error during the abstract parsing process. Extracted — lead: KD 0.044 L·day⁻¹·dm⁻², CL 0.45 mL/h/kg, V 1.3 mL/kg, kabs 1.22 /h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KD_pl | `Q331` · KD | 0.044 | L·day⁻¹·dm⁻² |  |  | l/(d^2·m-2) | llm (0.6) | Kim_2026:abstract |
| CL (mL/h/kg) | `Q22` · CL | 0.45 | mL/h/kg | 8.75e-09 | m3/s | L/h | review_gapfill (0.7) | Alfosea-Cuadrado_2024:review |
| V (mL/kg) | `Q61` · V | 1.3 | mL/kg | 9.1e-05 | m3 | L | review_gapfill (0.7) | Alfosea-Cuadrado_2024:review |
| median value of the absorption rate constant | `Q49` · kabs | 1.22 | /h | 0.0003389 | 1/s | 1/h | review_gapfill (0.7) | Bandín-Vilar_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'STBR' — extend the ontology if this is a real PK parameter (source ['Kim_2026:abstract'])
- dropped unlinked row (NIL): 'CABR' — extend the ontology if this is a real PK parameter (source ['Kim_2026:abstract'])
- unit_dimension_unknown: 'L·day⁻¹·dm⁻²' (KD)
- implicit units: 'KD_pl' — the LLM proposed '1/h', whose dimension does not fit Q331; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Lead
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Alfosea-Cuadrado_2024's review values (primary lacked it)
- gap-filled Q61 (V) from Alfosea-Cuadrado_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bandín-Vilar_2022's review values (primary lacked it)
- skipped review gap-fill of TLAG from Biju_2026: its label names a different analyte ('exposure') — 'Time of exposure'

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kim_2026_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Alfosea-Cuadrado_2024:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bandín-Vilar_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Alfosea-Cuadrado_2024:review'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | L·day⁻¹·dm⁻² | ['Kim_2026:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.45 | ['Alfosea-Cuadrado_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0315 L/h | ['Alfosea-Cuadrado_2024:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.091 L | ['Alfosea-Cuadrado_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blead%5D%20Lead_Kim2026_reference&body=Drug%3A%20lead%0ARecord%3A%20Lead_Kim2026_reference%0APaper%3A%20Kim_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lead/Lead_Kim2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 20:25 UTC</sub>
