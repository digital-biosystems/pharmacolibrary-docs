<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cyproterone acetate&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/&quot;},{&quot;label&quot;:&quot;Schulz_1976 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CyproteroneAcetate_Huber1988_reference&quot;,&quot;label&quot;:&quot;Huber_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Huber1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CyproteroneAcetate_Kuhnz1997_reference&quot;,&quot;label&quot;:&quot;Kuhnz_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CyproteroneAcetate_Speck1976v2_reference&quot;,&quot;label&quot;:&quot;Speck_1976_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Speck1976v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CyproteroneAcetate_Kuhnz1993_reference&quot;,&quot;label&quot;:&quot;Kuhnz_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Kuhnz1993_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cyproterone acetate — `CyproteroneAcetate_Schulz1976_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

> The record contains no fitted kinetic parameters, only abstract-derived summary statistics like tmax and C0 for cyproterone acetate.

<div class="pk-model-meta" hidden drug="Cyproterone acetate" model-id="CyproteroneAcetate_Schulz1976_reference" status="rejected" stale="false" population="female rhesus monkeys" measured-compound="Cyproterone acetate (and/or metabolites, measured as radioactivity)" parameterization="mechanistic" topology="1C"></div>

## Citation
Schulz V. [Distribution, absorption and elimination of radioactivity following oral and intravenous application of 2'-14C-labelled cyproterone acetate to rhesus monkeys (author's transl)]. Arzneimittel-Forschung 26(4):544–546 (1976).

## Population and dosing

**Population:** female rhesus monkeys · n = 13.

**Dosed compound ≠ measured compound:** dosed Cyproterone acetate, measured Cyproterone acetate (and/or metabolites, measured as radioactivity).

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The extrapolated initial concentrations in the equilibrium to distribution | C0 | 0.68 | % of the administered dose in the plasma volume |
| maximum levels in the plasma were reached | tmax | 13 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record contains no fitted kinetic parameters, only abstract-derived summary statistics like tmax and C0 for cyproterone acetate.**

The entry is abstract-only, meaning no differential equation model was fitted to the data. Reported values such as tmax (13 h) and C0 (0.68% of dose) are descriptive statistics rather than estimated PK parameters. The volume of distribution and terminal half-life are missing values, confirming the absence of a quantitative kinetic model. Extracted — Cyproterone acetate (and/or metabolites, measured as radioactivity): C0 0.68 % of the administered dose in the plasma volume, tmax 13 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The extrapolated initial concentrations in the equilibrium to distribution | `Q86` · C0 | 0.68 | % of the administered dose in the plasma volume |  |  | %·administered·dose·in·of·plasma·the^2·volume | llm (0.6) | Schulz_1976:abstract |
| maximum levels in the plasma were reached | `Q56` · tmax | 13 | h | 4.68e+04 | s | h | llm (0.6) | Schulz_1976:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| the theoretical volume of distribution | Q61 | llm_confirmed |
| radioactive half-life | Q57 | llm |

## Departures & gaps

**Interpretation flags:**
- covariate category for tlag from footnote/prose kept as documentation only (['Schulz_1976:abstract'])
- unit_dimension_unknown: '% of the administered dose in the plasma volume' (C0)
- unit_dimension_unknown: 'h after administration' (tmax)
- dropped duplicate Q57 ('half-life', value '1.7') — already have one for this compound
- implicit units: 'The extrapolated initial concentrations in the equilibrium to distribution' — the LLM proposed 'µg/mL', whose dimension does not fit Q86; left unset
- implicit units: 'maximum levels in the plasma were reached' → h (from the popPK convention: 'Parameter is tmax (time to maximum concentration). Unit not stated in text. Time parameters in population PK are convent')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyproterone acetate (and/or metabolites, measured as radioactivity)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none of 4 PubChem candidate(s) is 'Cyproterone acetate (and/or metabolites, measured as radioactivity)' (LLM) — left in mass units
- molar mass: none found for 'Cyproterone acetate (and/or metabolites, measured as radioactivity)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Cyproterone acetate (and/or metabolites, measured as radioactivity)', not cyproterone_acetate — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Schulz_1976_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q56 | pass | [time] |  | ['Schulz_1976:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Schulz_1976:abstract'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 | % of the administered dose in the plasma volume | ['Schulz_1976:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyproterone_acetate%5D%20CyproteroneAcetate_Schulz1976_reference&body=Drug%3A%20cyproterone_acetate%0ARecord%3A%20CyproteroneAcetate_Schulz1976_reference%0APaper%3A%20Schulz_1976%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cyproterone_acetate/CyproteroneAcetate_Schulz1976_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 06:15 UTC</sub>
