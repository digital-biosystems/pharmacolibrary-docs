<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol&quot;,&quot;href&quot;:&quot;drugs/toxin_4_methylnitrosamino_1_3_pyridyl_1_butanol/&quot;},{&quot;label&quot;:&quot;Hecht_1999 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_4Methylnitrosamino13Pyridyl1Butanol_Adams1985_reference&quot;,&quot;label&quot;:&quot;Adams_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_4_methylnitrosamino_1_3_pyridyl_1_butanol/D_4Methylnitrosamino13Pyridyl1Butanol_Adams1985_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_4Methylnitrosamino13Pyridyl1Butanol_Goniewicz2009_referenc&quot;,&quot;label&quot;:&quot;Goniewicz_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_4_methylnitrosamino_1_3_pyridyl_1_butanol/D_4Methylnitrosamino13Pyridyl1Butanol_Goniewicz2009_referenc.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol — `D_4Methylnitrosamino13Pyridyl1Butanol_Hecht1999_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The glucuronide metabolite is an orphan compartment with no formation path, making the model structurally invalid.

<div class="pk-model-meta" hidden drug="4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol" model-id="D_4Methylnitrosamino13Pyridyl1Butanol_Hecht1999_reference" status="rejected" stale="false" population="people who had stopped smoking" measured-compound="4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol" parameterization="apparent" topology="1C"></div>

## Citation
Hecht SS, Carmella SG, Chen M, Dor Koch JF, Miller AT, Murphy SE et al. Quantitation of urinary metabolites of a tobacco-specific lung carcinogen after smoking cessation. Cancer research 59(3):590–596 (1999).

## Population and dosing

**Population:** people who had stopped smoking · condition smoking cessation · age group adult · n = 27.

**Dosed compound ≠ measured compound:** dosed 4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanone, measured 4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Total body clearance of NNAL | CLm/F | 61.4 | ml/min |
| volume of distribution in the beta-phase | V2 | 3800 | liters |
| half-life | t1/2z | 3.5 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The glucuronide metabolite is an orphan compartment with no formation path, making the model structurally invalid.**

The record lists a glucuronide metabolite with zero formation compartments, rendering it unreachable from the dose. This topological failure caused the rejection. The summary statistics were abstract-derived, further limiting model validity. Extracted — 4 methylnitrosamino 1 3 pyridyl 1 butanol: CLm/F 61.4 ml/min, V2 3.8e+03 liters, t1/2z 3.5 days.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Total body clearance of NNAL | `Q351` · CLm/F | 61.4 | ml/min | 1.023e-06 | m3/s | ml/min | llm_confirmed (0.6) | Hecht_1999:abstract |
| volume of distribution in the beta-phase | `Q64` · V2 | 3800 | liters | 3.8 | m3 | l | llm_corrected (0.6) | Hecht_1999:abstract |
| half-life | `Q57` · t1/2z | 3.5 | days | 3.024e+05 | s | d | half_life_rule (0.95) | Hecht_1999:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate category for t1/2α from footnote/prose kept as documentation only (['Hecht_1999:abstract'])
- dropped duplicate Q57 ('elimination half-life', value '42.5') — already have one for this compound
- metabolite 4-(methylnitrosamino)-1-(3-pyridyl)-1-butanol: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- toxin: half-life printed only as a range — the value is the range's midpoint; route to review
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for '4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol O-glucuronide' ('4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol O-glucuronide') — left in mass units
- molar mass: none found for '4-(Methylnitrosamino)-1-(3-pyridyl)-1-butanol O-glucuronide' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hecht_1999_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review
- 2 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Hecht_1999:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Hecht_1999:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Hecht_1999:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.8e+03 L | ['Hecht_1999:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B4_methylnitrosamino_1_3_pyridyl_1_butanol%5D%20D_4Methylnitrosamino13Pyridyl1Butanol_Hecht1999_reference&body=Drug%3A%204_methylnitrosamino_1_3_pyridyl_1_butanol%0ARecord%3A%20D_4Methylnitrosamino13Pyridyl1Butanol_Hecht1999_reference%0APaper%3A%20Hecht_1999%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_4_methylnitrosamino_1_3_pyridyl_1_butanol/D_4Methylnitrosamino13Pyridyl1Butanol_Hecht1999_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 18:26 UTC</sub>
