<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;1,1,2-Trichloroethane&quot;,&quot;href&quot;:&quot;drugs/toxin_112_trichloroethane/&quot;},{&quot;label&quot;:&quot;Peyret_2012 \u00b7 trichloroethylene&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 1,1,2-Trichloroethane — `D_112Trichloroethane_Peyret2012_trichloroethylene`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The record lacks a kinetic quantity and has a missing unit conversion for 1,1,2-trichloroethane.

<div class="pk-model-meta" hidden drug="1,1,2-Trichloroethane" model-id="D_112Trichloroethane_Peyret2012_trichloroethylene" status="rejected" stale="false" population="human (PBPK simulation)" measured-compound="1,1,2-Trichloroethane" parameterization="mechanistic" topology="1C"></div>

## Citation
Peyret T, Krishnan K. Quantitative Property-Property Relationship for Screening-Level Prediction of Intrinsic Clearance of Volatile Organic Chemicals in Rats and Its Integration within PBPK Models to Predict Inhalation Pharmacokinetics in Humans. Journal of toxicology 2012:286079 (2012).
  ·  DOI: [10.1155/2012/286079](https://doi.org/10.1155/2012/286079)

## Population and dosing

**Population:** human (PBPK simulation) · condition healthy · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Log Cl intPL a (LPL/h/kg) | CLint | 0.916 | LPL/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record lacks a kinetic quantity and has a missing unit conversion for 1,1,2-trichloroethane.**

No half-life, rate constant, volume, or clearance is provided for the compound. The reported parameter value of 0.916 lacks an SI conversion due to a missing unit. The record was rejected because these omissions prevent valid model evaluation. Extracted — 112 trichloroethane: CLint 0.916 LPL/h/kg.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Log Cl intPL a (LPL/h/kg) | `Q3` · CLint | 0.916 | LPL/h/kg | (l·pl)/(h·kg) | llm_corrected (0.6) | tab2:row25:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table tab2: rows are variants (Benzene, Bromochloromethane, Bromodichloromethane, Carbon tetrachloride, Chloroethane, Chloroform), the parameters are the column headers (Log Cl intPL a (LPL/h/kg)) — read one record per variant
- transposed table Peyret_2012_table_5: rows are variants (Bromoform, Dibromochloromethane, Dichloroethylene (trans-1,2-), Ethylene, Furan, Halothane), the parameters are the column headers (Log Cl intPL a (LPL/h/kg)) — read one record per variant
- unit_dimension_unknown: 'LPL/h/kg' (CLint)
- implicit units: 'Log Cl intPL a (LPL/h/kg)' — the LLM proposed 'L PL/h/kg', whose dimension does not fit Q3; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=1,1,2-Trichloroethane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- estimate-method split: 'Trichloroethylene' is one of 37 estimates of Peyret_2012's substance matrix (Benzene, Bromochloromethane, Bromodichloromethane, Carbon tetrachloride, Chloroethane, Chloroform, Dibromomethane, Dichloroethane (1,1-), Dichloroethane (1,2-), Dichloroethylene (1,1-), Dichloroethylene (cis-1,2), Dichloromethane, Ethylbenzene, Hexachloroethane, Hexane (n-), Isoprene, Methyl chloride, Pentachloroethane, Styrene, Tetrachloroethane (1,1,1,2-), Tetrachloroethane (1,1,2,2-), Toluene, Trichloroethane (1,1,2-), Trichloroethylene, Vinyl chloride, Xylene (m-), Bromoform, Dibromochloromethane, Dichloroethylene (trans-1,2-), Ethylene, Furan, Halothane, Propylene, Tetrachloroethylene, Trichloroethane (1,1,1-), Trimethylbenzene (1,2,4-), Xylene (o-)); same population, different estimation method
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 5 transcribed (44 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | LPL/h/kg | ['tab2:row25:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B112_trichloroethane%5D%20D_112Trichloroethane_Peyret2012_trichloroethylene&body=Drug%3A%20112_trichloroethane%0ARecord%3A%20D_112Trichloroethane_Peyret2012_trichloroethylene%0APaper%3A%20Peyret_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_112_trichloroethane/D_112Trichloroethane_Peyret2012_trichloroethylene%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 22:49 UTC</sub>
