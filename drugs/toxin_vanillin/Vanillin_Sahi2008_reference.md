<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Vanillin&quot;,&quot;href&quot;:&quot;drugs/toxin_vanillin/&quot;},{&quot;label&quot;:&quot;Sahi_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vanillin_Beaudry2010_reference&quot;,&quot;label&quot;:&quot;Beaudry_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vanillin/Vanillin_Beaudry2010_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vanillin — `Vanillin_Sahi2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q305 unit nmol/min/mg ([substance] / [time] / [mass]) vs 1 / [time]; Q47 unit microM ([length]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="Vanillin" model-id="Vanillin_Sahi2008_reference" status="rejected" stale="false" population="human, mouse, rat and monkey liver cytosol and cryopreserved hepatocytes (in vitro)" measured-compound="Vanillic acid" parameterization="mechanistic" topology="retention"></div>

## Citation
Sahi J, Khan KK, Black CB. Aldehyde oxidase activity and inhibition in hepatocytes and cytosolic fractions from mouse, rat, monkey and human. Drug metabolism letters 2(3):176–183 (2008).
  ·  DOI: [10.2174/187231208785425818](https://doi.org/10.2174/187231208785425818)

## Population and dosing

**Population:** human, mouse, rat and monkey liver cytosol and cryopreserved hepatocytes (in vitro) · condition healthy (in vitro liver preparations).

**Dosed compound ≠ measured compound:** dosed Vanillin, measured Vanillic acid.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.60).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| rate of vanillic acid formation (human liver cytosol) | kfm | 2 | nmol/min/mg |
| rate of vanillic acid formation (cryopreserved human hepatocytes) | CLint | 0.79 | nmol/min/million cells |
| K(m,app) (mouse liver cytosol) | kel | 1.44 | microM |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q305 unit nmol/min/mg ([substance] / [time] / [mass]) vs 1 / [time]; Q47 unit microM ([length]) vs 1 / [time].**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is vanillin's own; they describe Vanillic acid. Extracted — Vanillic acid: kfm 2 nmol/min/mg, CLint 0.79 nmol/min/million cells, kel 1.44 microM.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of k(m,app): this record has 1.44, the second reading none; it also differs on 4 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| rate of vanillic acid formation (human liver cytosol) | `Q305` · kfm | 2 | nmol/min/mg | nM/(min·mg) | llm (0.6) | Sahi_2008:abstract |
| rate of vanillic acid formation (cryopreserved human hepatocytes) | `Q3` · CLint | 0.79 | nmol/min/million cells | nM/(min·m·cells·illion) | llm (0.6) | Sahi_2008:abstract |
| K(m,app) (mouse liver cytosol) | `Q47` · kel | 1.44 | microM | m·icrom | space_fold (0.95) | Sahi_2008:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'rate of vanillic acid formation (human liver cytosol)' → Q305 (unit '[substance] / [time] / [mass]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'nmol/min/million cells' (CLint)
- unit_dimension_mismatch: 'K(m,app) (mouse liver cytosol)' → Q47 (unit '[length]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q3 ('intrinsic clearance (mouse liver cytosol)', value 8.97) — already have one for this compound
- unit_dimension_mismatch: 'K(m,app) (rat liver cytosol)' → Q47 (unit '[length]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('K(m,app) (rat liver cytosol)', value 10.9) — already have one for this compound
- dropped duplicate Q3 ('intrinsic clearance (rat liver cytosol)', value 0.47) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Vanillic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 0/6 row label(s) assigned, 0 linked by role
- molar mass: none found for 'Vanillic acid' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Vanillic acid', not vanillin — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Sahi_2008_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[intrinsic clearance]` |  | 8.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k(m,app)]` | 1.44 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k]` |  | 1.44 | only_one_extracted |
| `gpt-oss:120b` | `parameters[rate of vanillic acid formation]` | 2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[rate of vanillic acid formation]` |  | 2 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q305 | fail | 1 / [time] | nmol/min/mg ([substance] / [time] / [mass]) | ['Sahi_2008:abstract'] |
| C5_dimension_Q47 | fail | 1 / [time] | microM ([length]) | ['Sahi_2008:abstract'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | nmol/min/million cells | ['Sahi_2008:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvanillin%5D%20Vanillin_Sahi2008_reference&body=Drug%3A%20vanillin%0ARecord%3A%20Vanillin_Sahi2008_reference%0APaper%3A%20Sahi_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_vanillin/Vanillin_Sahi2008_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 19:56 UTC</sub>
