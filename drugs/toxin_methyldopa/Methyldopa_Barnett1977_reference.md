<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Methyldopa&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/&quot;},{&quot;label&quot;:&quot;Barnett_1977 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyldopa_AdamiakGiera2021_reference&quot;,&quot;label&quot;:&quot;Adamiak-Giera_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_AdamiakGiera2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_Campbell1992_reference&quot;,&quot;label&quot;:&quot;Campbell_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_Campbell1992_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_Skerjanec1995_reference&quot;,&quot;label&quot;:&quot;Skerjanec_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_van2022_haas_et_al_64&quot;,&quot;label&quot;:&quot;van_2022_haas_et_al_64&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_van2022_haas_et_al_64.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methyldopa — `Methyldopa_Barnett1977_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected due to unit dimension mismatch in volume of distribution, which uses inverse mass units instead of volume units.

<div class="pk-model-meta" hidden drug="Methyldopa" model-id="Methyldopa_Barnett1977_reference" status="rejected" stale="false" population="normotensive and hypertensive subjects" measured-compound="Methyldopa" parameterization="mechanistic" topology="1C"></div>

## Citation
Barnett AJ, Bobik A, Carson V, Korman JS, McLean AJ. Pharmacokinetics of methyldopa. Plasma levels following single intravenous, oral and multiple oral dosage in normotensive and hypertensive subjects. Clinical and experimental pharmacology & physiology 4(4):331–339 (1977).
  ·  DOI: [10.1111/j.1440-1681.1977.tb02670.x](https://doi.org/10.1111/j.1440-1681.1977.tb02670.x)

## Population and dosing

**Population:** normotensive and hypertensive subjects · condition hypertension · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| overall elimination constant Ke1 | kel | 0.56 | h-1 |
| volume of distribution of the central compartment | V | 0.29 | 1 kg-1 |
| Plasma half-times during the beta-phase ... following intravenous ... administration | t1/2β | 2.8 | h |
| ka | kabs | 0.18 | min−1 |
| lag time | tlag | 9.97 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected due to unit dimension mismatch in volume of distribution, which uses inverse mass units instead of volume units.**

The volume of distribution is recorded as 0.29 kg-1, representing inverse mass, which is dimensionally inconsistent with the required cubic length dimension for volume. The record was derived from an abstract only, causing reported summary statistics to substitute for fitted model parameters. Extracted — methyldopa: kel 0.56 h-1, V 0.29 1 kg-1, t1/2β 2.8 h, kabs 0.18 min−1, tlag 9.97 min.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| overall elimination constant Ke1 | `Q47` · kel | 0.56 | h-1 | 0.0001556 | 1/s | 1/h | llm (0.6) | Barnett_1977:abstract |
| volume of distribution of the central compartment | `Q61` · V | 0.29 | 1 kg-1 |  |  | 1/kg | boundary_compartment (0.9) | Barnett_1977:abstract |
| Plasma half-times during the beta-phase ... following intravenous ... administration | `Q60` · t1/2β | 2.8 | h | 1.008e+04 | s | h | llm_corrected (0.6) | Barnett_1977:abstract |
| ka | `Q49` · kabs | 0.18 | min−1 | 0.003 | 1/s | 1/h | review_gapfill (0.7) | Adamiak-Giera_2021:review |
| lag time | `Q83` · tlag | 9.97 | min | 598.2 | s | h | review_gapfill (0.7) | Adamiak-Giera_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'volume of distribution of the central compartment' → Q63 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- relinked 'plasma clearance rate' Q22 → Q47: a rate constant in '1 h-1' (the unit decides, not the label)
- dropped duplicate Q47 ('plasma clearance rate', value 11.2) — already have one for this compound
- dropped duplicate Q60 ('Plasma half-times during the beta-phase ... following ... oral administration', value 2.1) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methyldopa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volume of distribution of the central compartment' is the general volume)
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Adamiak-Giera_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Adamiak-Giera_2021's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Barnett_1977_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Barnett_1977:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adamiak-Giera_2021:review'] |
| C5_dimension_Q60 | pass | [time] |  | ['Barnett_1977:abstract'] |
| C5_dimension_Q61 | fail | [length] ** 3 | 1 kg-1 (dimensionless) | ['Barnett_1977:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Adamiak-Giera_2021:review'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyldopa%5D%20Methyldopa_Barnett1977_reference&body=Drug%3A%20methyldopa%0ARecord%3A%20Methyldopa_Barnett1977_reference%0APaper%3A%20Barnett_1977%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methyldopa/Methyldopa_Barnett1977_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 17:41 UTC</sub>
