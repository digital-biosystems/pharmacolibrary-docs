<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium selenite&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/&quot;},{&quot;label&quot;:&quot;Guo_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumSelenite_Brodin2015_reference&quot;,&quot;label&quot;:&quot;Brodin_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Brodin2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Jayachandran2021_reference&quot;,&quot;label&quot;:&quot;Jayachandran_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Jayachandran2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Patterson1992_reference&quot;,&quot;label&quot;:&quot;Patterson_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Patterson1992_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Zhang2020_reference&quot;,&quot;label&quot;:&quot;Zhang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Zhang2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Jger2016_reference&quot;,&quot;label&quot;:&quot;J\u00e4ger_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Jger2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Xing2019_reference&quot;,&quot;label&quot;:&quot;Xing_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Xing2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium selenite — `SodiumSelenite_Guo1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q20 unit h ([time]) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Sodium selenite" model-id="SodiumSelenite_Guo1991_reference" status="rejected" stale="false" population="healthy adults from endemic and non-endemic areas" measured-compound="selenium" parameterization="mechanistic" topology="1C"></div>

## Citation
Guo JA, Wang XY, Dai LM. [Pharmacokinetics of sodium selenite in human body at different levels of selenium]. Zhongguo yao li xue bao = Acta pharmacologica Sinica 12(3):226–228 (1991).

## Population and dosing

**Population:** healthy adults from endemic and non-endemic areas · condition healthy · age group adult · n = 24.

**Dosed compound ≠ measured compound:** dosed sodium selenite, measured selenium.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| low-Se group were T1/2g | t1/2γ | 1.8 | h |
| T1/2ka | t1/2ka | 3.2 | h |
| CL | CL | 32 | ml.kg-1.h-1 |
| Vc | V | 1.45 | L.kg-1 |
| Cp | Ct | 36 | ng.ml-1 |
| AUMC (S1) | AUMC | 130 | h |
| MRT | MRT | 55 | h |
| of normal-Se group were T1/2 | t1/2z | 3.4 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q20 unit h ([time]) vs [mass] * [time] / [length] ** 3.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is sodium selenite's own; they describe selenium. Extracted — selenium: t1/2γ 1.8 h, t1/2ka 3.2 h, CL 32 ml.kg-1.h-1, V 1.45 L.kg-1, Ct 36 ng.ml-1, AUMC 130 h, MRT 55 h, t1/2z 3.4 h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| low-Se group were T1/2g | `Q89` · t1/2γ | 1.8 | h | 6480 | s | h | llm (0.6) | Guo_1991:abstract |
| T1/2ka | `Q95` · t1/2ka | 3.2 | h | 1.152e+04 | s | h | exact (1) | Guo_1991:abstract |
| CL | `Q22` · CL | 32 | ml.kg-1.h-1 | 6.222e-07 | m3/s | ml/(h·kg) | exact (1) | Guo_1991:abstract |
| Vc | `Q61` · V | 1.45 | L.kg-1 | 0.1015 | m3 | l/kg | exact (1) | Guo_1991:abstract |
| Cp | `Q75` · Ct | 36 | ng.ml-1 | 3.6e-05 | kg/m3 | ng/ml | llm (0.6) | Guo_1991:abstract |
| AUMC (S1) | `Q20` · AUMC | 130 | h |  |  | h | exact (1) | Guo_1991:abstract |
| MRT | `Q53` · MRT | 55 | h | 1.98e+05 | s | h | exact (1) | Guo_1991:abstract |
| of normal-Se group were T1/2 | `Q57` · t1/2z | 3.4 | h | 1.224e+04 | s | h | llm_confirmed (0.6) | Guo_1991:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q89 ('T1/2g', value 72) — already have one for this compound
- dropped value-less row: 'AUC'
- dropped unlinked row (NIL): 'Tp' — extend the ontology if this is a real PK parameter (source ['Guo_1991:abstract'])
- unit_dimension_mismatch: 'AUMC (S1)' → Q20 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'VRT' — extend the ontology if this is a real PK parameter (source ['Guo_1991:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=selenium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc' is the general volume)
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'selenium', not sodium_selenite — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Guo_1991_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q20 | fail | [mass] * [time] / [length] ** 3 | h ([time]) | ['Guo_1991:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Guo_1991:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Guo_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Guo_1991:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Guo_1991:abstract'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Guo_1991:abstract'] |
| C5_dimension_Q89 | pass | [time] |  | ['Guo_1991:abstract'] |
| C5_dimension_Q95 | pass | [time] |  | ['Guo_1991:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32 | ['Guo_1991:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.24 L/h | ['Guo_1991:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 102 L | ['Guo_1991:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_selenite%5D%20SodiumSelenite_Guo1991_reference&body=Drug%3A%20sodium_selenite%0ARecord%3A%20SodiumSelenite_Guo1991_reference%0APaper%3A%20Guo_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_selenite/SodiumSelenite_Guo1991_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 01:13 UTC</sub>
