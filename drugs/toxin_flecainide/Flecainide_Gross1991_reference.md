<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flecainide&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/&quot;},{&quot;label&quot;:&quot;Gross_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flecainide_Braun1987_reference&quot;,&quot;label&quot;:&quot;Braun_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Braun1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_Hertrampf1991_reference&quot;,&quot;label&quot;:&quot;Hertrampf_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Hertrampf1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_McQuinn1988_reference&quot;,&quot;label&quot;:&quot;McQuinn_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_McQuinn1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_Perry1989_reference&quot;,&quot;label&quot;:&quot;Perry_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Perry1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_Till1989_reference&quot;,&quot;label&quot;:&quot;Till_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Till1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flecainide — `Flecainide_Gross1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the two metabolites have zero compartments, rendering them unreachable from the dose site. This structural failure combined with abstract-only summary statistics invalidated the model.

<div class="pk-model-meta" hidden drug="Flecainide" model-id="Flecainide_Gross1991_reference" status="rejected" stale="false" population="Poor and extensive metabolisers of sparteine/debrisoquine" measured-compound="R-flecainide; S-flecainide" parameterization="apparent" topology="general_linear"></div>

## Citation
Gross AS, Mikus G, Fischer C, Eichelbaum M. Polymorphic flecainide disposition under conditions of uncontrolled urine flow and pH. European journal of clinical pharmacology 40(2):155–162 (1991).
  ·  DOI: [10.1007/BF00280070](https://doi.org/10.1007/BF00280070)

## Population and dosing

**Population:** Poor and extensive metabolisers of sparteine/debrisoquine · condition healthy · age group adult · n = 10.

**Dosed compound ≠ measured compound:** dosed Flecainide, measured R-flecainide; S-flecainide.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The half-lives of R-flecainide in EMs | t1/2z | 8.8 | h |
| The half-lives of S-flecainide in EMs | t1/2z | 9.1 | h |
| The apparent oral clearances of R-flecainide in PMs | CL/F | 313 | ml.min-1 |
| The apparent oral clearances of S-flecainide in PMs | CL/F | 379 | ml.min-1 |
| The nonrenal clearance of R-flecainide in poor metabolisers | CLNR | 123 | ml.min-1 |
| The nonrenal clearance of S-flecainide in poor metabolisers | CLNR | 201 | ml.min-1 |
| The partial clearance to the two major metabolites meta-O-dealkylated flecainide (MODF) and the meta-O-dealkylated lactam of flecainide (MODLF) in extensive metabolisers | CLR | 267 | ml.min-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the two metabolites have zero compartments, rendering them unreachable from the dose site. This structural failure combined with abstract-only summary statistics invalidated the model.**

The extracted metabolites, meta-O-dealkylated flecainide and its lactam, both list zero compartments despite being linked from the central dose site. Pharmacokinetically, this creates orphan metabolites with no volume or elimination path, making simulation impossible. Additionally, the model relies on abstract summary statistics for clearance and half-life rather than fitted parameters. Extracted — R-flecainide: t1/2z 8.8 h, CL/F 313 ml.min-1, CLNR 123 ml.min-1; S-flecainide: t1/2z 9.1 h, CL/F 379 ml.min-1, CLNR 201 ml.min-1; R-flecainide; S-flecainide: CLR 267 ml.min-1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The half-lives of R-flecainide in EMs | `Q57` · t1/2z | 8.8 | h | 3.168e+04 | s | h | llm (0.6) | Gross_1991:abstract |
| The half-lives of S-flecainide in EMs | `Q57` · t1/2z | 9.1 | h | 3.276e+04 | s | h | llm (0.6) | Gross_1991:abstract |
| The apparent oral clearances of R-flecainide in PMs | `Q27` · CL/F | 313 | ml.min-1 | 5.217e-06 | m3/s | ml/min | llm (0.6) | Gross_1991:abstract |
| The apparent oral clearances of S-flecainide in PMs | `Q27` · CL/F | 379 | ml.min-1 | 6.317e-06 | m3/s | ml/min | llm (0.6) | Gross_1991:abstract |
| The nonrenal clearance of R-flecainide in poor metabolisers | `Q79` · CLNR | 123 | ml.min-1 | 2.05e-06 | m3/s | ml/min | llm_confirmed (0.6) | Gross_1991:abstract |
| The nonrenal clearance of S-flecainide in poor metabolisers | `Q79` · CLNR | 201 | ml.min-1 | 3.35e-06 | m3/s | ml/min | llm_confirmed (0.6) | Gross_1991:abstract |
| The partial clearance to the two major metabolites meta-O-dealkylated flecainide (MODF) and the meta-O-dealkylated lactam of flecainide (MODLF) in extensive metabolisers | `Q26` · CLR | 267 | ml.min-1 | 4.45e-06 | m3/s | ml/min | llm_corrected (0.6) | Gross_1991:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('The apparent oral clearances of R-flecainide in EMs', value 783) — already have one for this compound
- dropped duplicate Q27 ('The apparent oral clearances of S-flecainide in EMs', value 828) — already have one for this compound
- dropped duplicate Q79 ('The nonrenal clearance of R-flecainide in extensive metabolisers', value 533) — already have one for this compound
- dropped duplicate Q79 ('The nonrenal clearance of S-flecainide in extensive metabolisers', value 586) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=R-flecainide; S-flecainide
- topology: 2 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles: 4 per-group rows of R-flecainide clearance but 2 reference group(s) — kept as printed
- row roles: 4 per-group rows of S-flecainide clearance but 2 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: The half-lives of R-flecainide in EMs, The half-lives of S-flecainide in EMs, The partial clearance to the two major metabolites meta-O-dealkylated flecainide (MODF) and the meta-O-dealkylated lactam of flecainide (MODLF) in extensive metabolisers
- row roles (LLM): model_class=noncompartmental; 14/14 row label(s) assigned, 9 linked by role; re-tagged R-flecainide; S-flecainide→R-flecainide ×5, R-flecainide; S-flecainide→S-flecainide ×5
- molar mass: no plausible PubChem entry for 'meta-O-dealkylated flecainide (MODF)' ('meta-O-dealkylated flecainide') — left in mass units
- molar mass: no plausible PubChem entry for 'R-flecainide; S-flecainide' ('no full name in the paper') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'meta-O-dealkylated lactam of flecainide (MODLF)' (LLM) — left in mass units
- molar mass: none found for 'meta-O-dealkylated flecainide (MODF)' — its concentrations stay mass-only
- molar mass: none found for 'meta-O-dealkylated lactam of flecainide (MODLF)' — its concentrations stay mass-only
- molar mass: none found for 'R-flecainide; S-flecainide' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Gross_1991_metadata.yaml (14 record(s)); values are summary statistics, not a fitted model
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
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Gross_1991:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Gross_1991:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Gross_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Gross_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Gross_1991:abstract'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Gross_1991:abstract'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Gross_1991:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 18.8 L/h | ['Gross_1991:abstract'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.7 L/h | ['Gross_1991:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflecainide%5D%20Flecainide_Gross1991_reference&body=Drug%3A%20flecainide%0ARecord%3A%20Flecainide_Gross1991_reference%0APaper%3A%20Gross_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flecainide/Flecainide_Gross1991_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 20:20 UTC</sub>
