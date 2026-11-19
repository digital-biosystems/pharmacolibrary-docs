<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Pentabromodiphenyl ethers&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/&quot;},{&quot;label&quot;:&quot;Sonne_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PentabromodiphenylEthers_Cary2013_reference&quot;,&quot;label&quot;:&quot;Cary_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Cary2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PentabromodiphenylEthers_Liu2011_reference&quot;,&quot;label&quot;:&quot;Liu_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PentabromodiphenylEthers_Drouillard2007_reference&quot;,&quot;label&quot;:&quot;Drouillard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Drouillard2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pentabromodiphenyl ethers — `PentabromodiphenylEthers_Sonne2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Pentabromodiphenyl ethers" model-id="PentabromodiphenylEthers_Sonne2015_reference" status="rejected" stale="false" population="adult captive Greenland sledge dog bitches" measured-compound="BDE-47, BDE-99 (pentabromodiphenyl ether congeners) with other POPs" parameterization="mechanistic" topology="1C"></div>

## Citation
Sonne C, Gustavson K, Letcher RJ, Dietz R. Physiologically-based pharmacokinetic modelling of distribution, bioaccumulation and excretion of POPs in Greenland sledge dogs (Canis familiaris). Environmental research 142:380–386 (2015).
  ·  DOI: [10.1016/j.envres.2015.06.034](https://doi.org/10.1016/j.envres.2015.06.034)

## Population and dosing

**Population:** adult captive Greenland sledge dog bitches · condition chronic dietary exposure · age group adult · n = 4.

**Dosed compound ≠ measured compound:** dosed minke whale blubber contaminated with POPs (incl. BDE-47, BDE-99), measured BDE-47, BDE-99 (pentabromodiphenyl ether congeners) with other POPs.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| p,p'-DDE | fe | 1 | % of total intake |
| HCB | AUC∞ | 16 | % of total intake |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is pentabromodiphenyl ethers's own; they describe BDE-47, BDE-99 (pentabromodiphenyl ether congeners) with other POPs. Extracted — BDE-47, BDE-99 (pentabromodiphenyl ether congeners) with other POPs: fe 1 % of total intake, AUC∞ 16 % of total intake.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has minke whale blubber contaminated with POPs (incl. BDE-47, BDE-99), the second reading BDE-99, BDE-47, CB-99, CB-153, HCB, oxychlordane, p,p'-DDE; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| p,p'-DDE | `Q44` · fe | 1 | % of total intake | 0.01 | %·intake·of·total | llm (0.6) | Sonne_2015:abstract |
| HCB | `Q17` · AUC∞ | 16 | % of total intake |  | %·intake·of·total | llm (0.6) | Sonne_2015:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '% of total intake' (fe)
- dropped unlinked row (NIL): 'BDE-47' — extend the ontology if this is a real PK parameter (source ['Sonne_2015:abstract'])
- dropped unlinked row (NIL): 'CB-99' — extend the ontology if this is a real PK parameter (source ['Sonne_2015:abstract'])
- unit_dimension_unknown: '% of total intake' (AUC∞)
- dropped unlinked row (NIL): 'CB-153' — extend the ontology if this is a real PK parameter (source ['Sonne_2015:abstract'])
- dropped unlinked row (NIL): 'BDE-99' — extend the ontology if this is a real PK parameter (source ['Sonne_2015:abstract'])
- dropped duplicate Q44 ('oxychlordane', value 34) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=BDE-47, BDE-99 (pentabromodiphenyl ether congeners) with other POPs
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 0/7 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'chlordane' — its concentrations stay mass-only
- molar mass: none found for 'oxychlordane' — its concentrations stay mass-only
- molar mass: none found for "p,p'-DDE" — its concentrations stay mass-only
- molar mass: none found for 'BDE-47, BDE-99 (pentabromodiphenyl ether congeners) with other POPs' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Sonne_2015_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[hcb]` | 16 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[p,p'-dde]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | minke whale blubber contaminated with POPs (incl. BDE-47, BDE-99) | BDE-99, BDE-47, CB-99, CB-153, HCB, oxychlordane, p,p'-DDE | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | BDE-47, BDE-99 (pentabromodiphenyl ether congeners) with other POPs | BDE-99, BDE-47 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | % of total intake | ['Sonne_2015:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentabromodiphenyl_ethers%5D%20PentabromodiphenylEthers_Sonne2015_reference&body=Drug%3A%20pentabromodiphenyl_ethers%0ARecord%3A%20PentabromodiphenylEthers_Sonne2015_reference%0APaper%3A%20Sonne_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Sonne2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:20 UTC</sub>
