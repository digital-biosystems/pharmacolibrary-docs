<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Reserpine&quot;,&quot;href&quot;:&quot;drugs/toxin_reserpine/&quot;},{&quot;label&quot;:&quot;Alfosea-Cuadrado_2024 \u00b7 population_pkpd_model_estimates_inter_animal_variability_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Reserpine_Gilbertie2019_reference&quot;,&quot;label&quot;:&quot;Gilbertie_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_reserpine/Reserpine_Gilbertie2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Reserpine_Zhang2018_reference&quot;,&quot;label&quot;:&quot;Zhang_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_reserpine/Reserpine_Zhang2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Reserpine — `Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Reserpine" model-id="Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate" status="rejected" stale="false" population="rats" measured-compound="Reserpine" parameterization="mechanistic" topology="1C"></div>

## Citation
Alfosea-Cuadrado GM, Zarzoso-Foj J, Adell A, Valverde-Navarro AA, González-Soler EM, Mangas-Sanjuán V et al. Population Pharmacokinetic-Pharmacodynamic Analysis of a Reserpine-Induced Myalgia Model in Rats. Pharmaceutics 16(8) (2024).
  ·  DOI: [10.3390/pharmaceutics16081101](https://doi.org/10.3390/pharmaceutics16081101)

## Population and dosing

**Population:** rats · condition fibromyalgia model · age group adult · n = 120.

**Dosing:** 7, 35, 70 mg, other, multiple, every 24 h.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka1 (h−1/kg) | kabs | 28 | h−1/kg |
| F1 | Fab | 22 |  |
| V (mL/kg) | V | 30 | mL/kg |
| CL (mL/h/kg) | CL | 25 | mL/h/kg |
| kp (h−1) | Kp | 37 | h−1 |
| SLP1 (h) | equation variable | 11 | h |
| k0 (h−1) | R1 | 67 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka1 (h−1/kg) | `Q49` · kabs | 28 | h−1/kg |  |  | 1/(h·kg) | llm_confirmed (0.6) | pharmaceutics-16-01101-t002:row3:col4 |
| F1 | `Q40` · Fab | 22 |  | 0.22 |  |  | exact (1) | pharmaceutics-16-01101-t002:row5:col4, pharmaceutics-16-01101-t002:footnote |
| V (mL/kg) | `Q61` · V | 30 | mL/kg | 0.0021 | m3 | ml/kg | exact (1) | pharmaceutics-16-01101-t002:row6:col4 |
| CL (mL/h/kg) | `Q22` · CL | 25 | mL/h/kg | 4.861e-07 | m3/s | ml/(h·kg) | exact (1) | pharmaceutics-16-01101-t002:row7:col4 |
| kp (h−1) | `Q410` · Kp | 37 | h−1 |  |  | 1/h | exact (1) | pharmaceutics-16-01101-t002:row11:col4 |
| SLP1 (h) | `Q900` · equation variable | 11 | h |  |  | h | llm (0.6) | pharmaceutics-16-01101-t002:row13:col4 |
| k0 (h−1) | `Q307` · R1 | 67 | h−1 |  |  | 1/h | exact (1) | pharmaceutics-16-01101-t002:row14:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'population pkpd model estimates / inter-animal variability / rse (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'h−1/kg' (kabs)
- 'F1' → Q40: printed without a unit and above 1 — read as a percentage
- dropped PD-category row 'kin (mg/h) AMY' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-16-01101-t002:row8:col4'])
- unit_dimension_mismatch: 'kp (h−1)' → Q410 (unit '1 / [time]' vs ontology 'dimensionless') — route to review
- dropped PD-category row 'kout (h−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-16-01101-t002:row12:col4'])
- unit_dimension_mismatch: 'k0 (h−1)' → Q307 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'SLP2 (h)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-16-01101-t002:row15:col4'])
- dropped value-less row: 'RSE (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'ka1'
- dropped value-less row: 'ka2'
- dropped value-less row: 'V'
- dropped value-less row: 'CL'
- dropped value-less row: 'kin'
- dropped value-less row: 'kp'
- dropped value-less row: 'kout'
- dropped value-less row: 'SLP1'
- dropped value-less row: 'k0'
- dropped value-less row: 'SLP2'
- dropped value-less row: 'PK'
- dropped value-less row: 'PD'
- implicit units: 'ka1 (h−1/kg)' — the LLM proposed 'h-1/kg', whose dimension does not fit Q49; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Reserpine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'population pkpd model estimates / inter-animal variability / rse (%)' subgroup of Alfosea-Cuadrado_2024 (paper reports 3 populations: population pkpd model estimates / fixed effects / value, population pkpd model estimates / inter-animal variability / rse (%), population pkpd model estimates / inter-animal variability / value)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pharmaceutics-16-01101-t002: unbound_uncertainty
- table pharmaceutics-16-01101-t002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 2.25 | 0.832 | 0.3698 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['pharmaceutics-16-01101-t002:row7:col4'] |
| C5_dimension_Q307 | fail | [mass] / [time] | h−1 (1 / [time]) |  |  | ['pharmaceutics-16-01101-t002:row14:col4'] |
| C5_dimension_Q410 | fail | dimensionless | h−1 (1 / [time]) |  |  | ['pharmaceutics-16-01101-t002:row11:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['pharmaceutics-16-01101-t002:row6:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | h−1/kg |  |  | ['pharmaceutics-16-01101-t002:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25 |  |  | ['pharmaceutics-16-01101-t002:row7:col4'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.75 L/h |  |  | ['pharmaceutics-16-01101-t002:row7:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.1 L |  |  | ['pharmaceutics-16-01101-t002:row6:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Breserpine%5D%20Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate&body=Drug%3A%20reserpine%0ARecord%3A%20Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate%0APaper%3A%20Alfosea-Cuadrado_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_reserpine/Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:59 UTC</sub>
