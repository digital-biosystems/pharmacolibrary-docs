<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenobarbital&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/&quot;},{&quot;label&quot;:&quot;Teixeira-da-Silva_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenobarbital_Schoemaker2017_reference&quot;,&quot;label&quot;:&quot;Schoemaker_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Schoemaker2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Moffett2018_reference&quot;,&quot;label&quot;:&quot;Moffett_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Moffett2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Pokorn2022_reference&quot;,&quot;label&quot;:&quot;Pokorn\u00e1_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Pokorn2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Thibault2021_reference&quot;,&quot;label&quot;:&quot;Thibault_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Thibault2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Thompson2007_reference&quot;,&quot;label&quot;:&quot;Thompson_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Thompson2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Vller2017_reference&quot;,&quot;label&quot;:&quot;V\u00f6ller_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Phenobarbital — `Phenobarbital_TeixeiradaSilva2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="Phenobarbital" model-id="Phenobarbital_TeixeiradaSilva2020_reference" status="needs_review" stale="false" population="Caucasian patients over 15 years of age with epilepsy" measured-compound="Phenobarbital" parameterization="apparent" topology="general_linear"></div>

## Citation
Teixeira-da-Silva P, Santos-Buelga D, Otero MJ, García MJ. Population pharmacokinetics of phenobarbital in Caucasian patients with epilepsy. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 153:105484 (2020).
  ·  DOI: [10.1016/j.ejps.2020.105484](https://doi.org/10.1016/j.ejps.2020.105484)

## Population and dosing

**Population:** Caucasian patients over 15 years of age with epilepsy · condition epilepsy · age group adult · n = .Unknown: The study describes a total of 395 patients in the primary analysis and 107 patients in external validation, but the final model parameters describe the combined or specific dataset structure is not fully explicit in the abstract regarding the final 'n' for the reported equation, though 395 is the main cohort..

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1.7 | kout_peripheral | 1.7 | 1/h |
| apparent volume of distribution (Vd/F) | V/F | 20.0 | L |
| absorption rate constant (ka) | kabs | 0.61 | h−1 |
| Lag time (h) | tlag | 1.96 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Alvariza_2025, Birbeck_2019) cannot stand in for this paper's evidence. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — phenobarbital: kout_peripheral 1.7 1/h, V/F 20 L, kabs 0.61 h−1, tlag 1.96 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 1.7 | `Q346` · kout_peripheral | 1.7 | 1/h | 0.0004722 | 1/s | 1/h | llm (0.6) | Teixeira-da-Silva_2020:abstract |
| apparent volume of distribution (Vd/F) | `Q76` · V/F | 20.0 | L | 0.02 | m3 | L | review_gapfill (0.7) | Alvariza_2025:review |
| absorption rate constant (ka) | `Q49` · kabs | 0.61 | h−1 | 0.0001694 | 1/s | 1/h | review_gapfill (0.7) | Alvariza_2025:review |
| Lag time (h) | `Q83` · tlag | 1.96 | h | 7056 | s | h | review_gapfill (0.7) | Birbeck_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F | Q27 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '0.236' — extend the ontology if this is a real PK parameter (source ['Teixeira-da-Silva_2020:abstract'])
- dropped unlinked row (NIL): '0.115' — extend the ontology if this is a real PK parameter (source ['Teixeira-da-Silva_2020:abstract'])
- dropped unlinked row (NIL): '0.822' — extend the ontology if this is a real PK parameter (source ['Teixeira-da-Silva_2020:abstract'])
- dropped unlinked row (NIL): '0.711' — extend the ontology if this is a real PK parameter (source ['Teixeira-da-Silva_2020:abstract'])
- dropped value-less row: 'estimation errors in the parameters of fixed'
- dropped value-less row: 'random effects'
- dropped value-less row: 'shrinkage values'
- implicit units: '1.7' → 1/h (from the popPK convention: 'First-order rate constants in population pharmacokinetics are dimensionless quantities normalized by time. Consistent wi')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Phenobarbital
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- amount-only peripheral compartment: a peripheral output rate (kout_peripheral) is present with no reported volume — model its AMOUNT; concentration is not identifiable without an assumed volume
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q76 (V/F) from Alvariza_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Alvariza_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Birbeck_2019's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Teixeira-da-Silva_2020_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Teixeira-da-Silva_2020:abstract'] |
| C5_dimension_Q346 | pass | 1 / [time] |  | ['Teixeira-da-Silva_2020:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alvariza_2025:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Alvariza_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Birbeck_2019:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 20 L | ['Alvariza_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenobarbital%5D%20Phenobarbital_TeixeiradaSilva2020_reference&body=Drug%3A%20phenobarbital%0ARecord%3A%20Phenobarbital_TeixeiradaSilva2020_reference%0APaper%3A%20Teixeira-da-Silva_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenobarbital/Phenobarbital_TeixeiradaSilva2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 17:06 UTC</sub>
