<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Zinc sulfate&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/&quot;},{&quot;label&quot;:&quot;Kaji_1998 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ZincSulfate_Kanan2023_reference&quot;,&quot;label&quot;:&quot;Kanan_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Kanan2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincSulfate_Mehra1987_reference&quot;,&quot;label&quot;:&quot;Mehra_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Mehra1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincSulfate_Zhang2014_znso4&quot;,&quot;label&quot;:&quot;Zhang_2014_znso4&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_znso4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ZincSulfate_Zhang2014_zny&quot;,&quot;label&quot;:&quot;Zhang_2014_zny&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zinc_sulfate/ZincSulfate_Zhang2014_zny.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zinc sulfate — `ZincSulfate_Kaji1998_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Zinc sulfate" model-id="ZincSulfate_Kaji1998_reference" status="rejected" stale="false" population="Japanese children with short stature" measured-compound="Zinc (serum zinc)" parameterization="mechanistic" topology="1C"></div>

## Citation
Kaji M, Gotoh M, Takagi Y, Masuda H, Kimura Y, Uenoyama Y. Studies to determine the usefulness of the zinc clearance test to diagnose marginal zinc deficiency and the effects of oral zinc supplementation for short children. Journal of the American College of Nutrition 17(4):388–391 (1998).
  ·  DOI: [10.1080/07315724.1998.10718781](https://doi.org/10.1080/07315724.1998.10718781)

## Population and dosing

**Population:** Japanese children with short stature · condition marginal zinc deficiency / short stature · age group child · n = 30.

**Dosed compound ≠ measured compound:** dosed Zinc sulfate heptahydrate (ZnSO4·7H2O), measured Zinc (serum zinc).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| zinc clearance values | CLnorm | 19.1 | ml/kg/hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is zinc sulfate's own; they describe Zinc (serum zinc). Extracted — Zinc (serum zinc): CLnorm 19.1 ml/kg/hour.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Zinc sulfate heptahydrate (ZnSO4·7H2O), the second reading Zinc sulfate; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| zinc clearance values | `Q354` · CLnorm | 19.1 | ml/kg/hour | 3.714e-07 | m3/s | ml/(h·kg) | llm_corrected (0.6) | Kaji_1998:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Basal serum zinc concentrations' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- dropped unlinked row (NIL): 'mean height velocity for males before zinc supplementation' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- covariate height for equation variable from footnote/prose kept as documentation only (['Kaji_1998:abstract'])
- dropped unlinked row (NIL): 'mean SD score for height for age (males, before)' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- dropped unlinked row (NIL): 'mean SD score for height for age (males, after)' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- dropped unlinked row (NIL): 'mean height velocity for females before zinc supplementation' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- dropped unlinked row (NIL): 'mean height velocity for females after the therapy' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- dropped unlinked row (NIL): 'mean SD score for height for age (females, before)' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- dropped unlinked row (NIL): 'mean SD score for height for age (females, after)' — extend the ontology if this is a real PK parameter (source ['Kaji_1998:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Zinc (serum zinc)
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- molar mass: none found for 'Zinc (serum zinc)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Zinc (serum zinc)', not zinc_sulfate — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kaji_1998_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.286 (2/7 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[basal serum zinc concentrations]` |  | 75.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[zinc clearance values]` |  | 19.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[zinc clearance values]` | 19.1 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Zinc sulfate heptahydrate (ZnSO4·7H2O) | Zinc sulfate | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Zinc (serum zinc) | Zinc | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Kaji_1998:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzinc_sulfate%5D%20ZincSulfate_Kaji1998_reference&body=Drug%3A%20zinc_sulfate%0ARecord%3A%20ZincSulfate_Kaji1998_reference%0APaper%3A%20Kaji_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zinc_sulfate/ZincSulfate_Kaji1998_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 01:43 UTC</sub>
