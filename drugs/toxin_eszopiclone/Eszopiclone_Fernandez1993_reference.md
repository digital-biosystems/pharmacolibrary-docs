<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Eszopiclone&quot;,&quot;href&quot;:&quot;drugs/toxin_eszopiclone/&quot;},{&quot;label&quot;:&quot;Fernandez_1993 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eszopiclone_Wu2012_reference&quot;,&quot;label&quot;:&quot;Wu_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_eszopiclone/Eszopiclone_Wu2012_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eszopiclone_Fernandez1995_reference&quot;,&quot;label&quot;:&quot;Fernandez_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_eszopiclone/Eszopiclone_Fernandez1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eszopiclone_McCrae2007_reference&quot;,&quot;label&quot;:&quot;McCrae_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_eszopiclone/Eszopiclone_McCrae2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Eszopiclone — `Eszopiclone_Fernandez1993_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Eszopiclone" model-id="Eszopiclone_Fernandez1993_reference" status="rejected" stale="false" population="adult Caucasian young healthy volunteers" measured-compound="(+)-zopiclone (S-zopiclone, eszopiclone) and (-)-zopiclone" parameterization="apparent" topology="general_linear"></div>

## Citation
Fernandez C, Maradeix V, Gimenez F, Thuillier A, Farinotti R. Pharmacokinetics of zopiclone and its enantiomers in Caucasian young healthy volunteers. Drug metabolism and disposition: the biological fate of chemicals 21(6):1125–1128 (1993).

## Population and dosing

**Population:** adult Caucasian young healthy volunteers · condition healthy · age group adult · n = 12.

**Dosed compound ≠ measured compound:** dosed zopiclone (racemic mixture, 15 mg oral), measured (+)-zopiclone (S-zopiclone, eszopiclone) and (-)-zopiclone.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0--&gt;infinity (+)-zopiclone | AUC∞ | 691.3 | ng.ml-1.hr |
| Cmax (+)-zopiclone | Cmax | 87.3 | ng.ml-1 |
| oral CLtot/F (+)-zopiclone | CL/F | 195.5 | ml.min-1 |
| Vd/F (+)-zopiclone | V1/F | 98.6 | liters |
| Vd/F (-)-zopiclone | V/F | 192.8 | liters |
| elimination half-life (+)-zopiclone | t1/2z | 399.2 | min |
| 3.6% of unchanged zopiclone excreted in 48-hr urine | fe | 3.6 |  |
| N-desmethylzopiclone in 48-hr urine | Ae | 14.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.05). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is eszopiclone's own; they describe (+)-zopiclone (S-zopiclone, eszopiclone) and (-)-zopiclone. Extracted — (+)-zopiclone (S-zopiclone, eszopiclone) and (-)-zopiclone: AUC∞ 691 ng.ml-1.hr, Cmax 87.3 ng.ml-1, CL/F 196 ml.min-1, V1/F 98.6 liters, V/F 193 liters, t1/2z 399 min, fe 3.6, Ae 14.2.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has zopiclone (racemic mixture, 15 mg oral), the second reading zopiclone (racemic); it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0--&gt;infinity (+)-zopiclone | `Q17` · AUC∞ | 691.3 | ng.ml-1.hr | 2.489 | kg*s/m3 | ng/(h·ml) | llm (0.6) | Fernandez_1993:abstract |
| Cmax (+)-zopiclone | `Q32` · Cmax | 87.3 | ng.ml-1 | 8.73e-05 | kg/m3 | ng/ml | llm_confirmed (0.6) | Fernandez_1993:abstract |
| oral CLtot/F (+)-zopiclone | `Q27` · CL/F | 195.5 | ml.min-1 | 3.258e-06 | m3/s | ml/min | llm (0.6) | Fernandez_1993:abstract |
| Vd/F (+)-zopiclone | `Q290` · V1/F | 98.6 | liters | 0.0986 | m3 | l | llm_corrected (0.6) | Fernandez_1993:abstract |
| Vd/F (-)-zopiclone | `Q76` · V/F | 192.8 | liters | 0.1928 | m3 | l | llm_confirmed (0.6) | Fernandez_1993:abstract |
| elimination half-life (+)-zopiclone | `Q57` · t1/2z | 399.2 | min | 2.395e+04 | s | min | llm (0.6) | Fernandez_1993:abstract |
| 3.6% of unchanged zopiclone excreted in 48-hr urine | `Q44` · fe | 3.6 |  | 0.036 |  |  | llm (0.6) | Fernandez_1993:abstract |
| N-desmethylzopiclone in 48-hr urine | `Q91` · Ae | 14.2 |  |  |  |  | llm (0.6) | Fernandez_1993:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q17 ('AUC0--&gt;infinity (-)-zopiclone', value 209.5) — already have one for this compound
- dropped duplicate Q32 ('Cmax (-)-zopiclone', value 44.0) — already have one for this compound
- dropped duplicate Q27 ('oral CLtot/F (-)-zopiclone', value 659.8) — already have one for this compound
- dropped duplicate Q57 ('elimination half-life (-)-zopiclone', value 225.6) — already have one for this compound
- '3.6% of unchanged zopiclone excreted in 48-hr urine' → Q44: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q91 ('N-oxidezopiclone in 48-hr urine', value 13.8) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=(+)-zopiclone (S-zopiclone, eszopiclone) and (-)-zopiclone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 0/13 row label(s) assigned, 0 linked by role
- molar mass: none found for 'zopiclone' — its concentrations stay mass-only
- molar mass: none found for 'N-desmethylzopiclone' — its concentrations stay mass-only
- molar mass: none found for 'zopiclone N-oxide (N-oxidezopiclone)' — its concentrations stay mass-only
- molar mass: none found for '(+)-zopiclone (S-zopiclone, eszopiclone) and (-)-zopiclone' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fernandez_1993_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.05 (1/20 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['zopiclone', 'n-desmethylzopiclone', 'metabolite'], ['zopiclone', 'n-oxidezopiclone', 'metabolite'], ['zopiclone', 'zopiclone (unchanged)', 'excretion']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[3.6% of unchanged zopiclone excreted in 48-hr urine]` | 3.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0--&gt;infinity (+)-zopiclone]` | 691.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0--&gt;infinity (+)-zopiclone]` |  | 691.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax (+)-zopiclone]` | 87.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax (+)-zopiclone]` |  | 87.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (+)-zopiclone]` | 399.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (+)-zopiclone]` |  | 399.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life (-)-zopiclone]` |  | 225.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[n-desmethylzopiclone excreted]` |  | 14.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[n-desmethylzopiclone in 48-hr urine]` | 14.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[oral cltot/f (+)-zopiclone]` | 195.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[oral cltot/f (+)-zopiclone]` |  | 195.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[unchanged zopiclone excreted]` |  | 3.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f (+)-zopiclone]` | 98.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f (+)-zopiclone]` |  | 98.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f (-)-zopiclone]` | 192.8 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | zopiclone (racemic mixture, 15 mg oral) | zopiclone (racemic) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | (+)-zopiclone (S-zopiclone, eszopiclone) and (-)-zopiclone | zopiclone enantiomers | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Fernandez_1993:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Fernandez_1993:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Fernandez_1993:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Fernandez_1993:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Fernandez_1993:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Fernandez_1993:abstract'] |
| C5_unit_missing_Q91 | fail | [mass] |  | ['Fernandez_1993:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['3.6% of dose in 48-hr urine'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 11.7 L/h | ['Fernandez_1993:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 98.6 L | ['Fernandez_1993:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 193 L | ['Fernandez_1993:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beszopiclone%5D%20Eszopiclone_Fernandez1993_reference&body=Drug%3A%20eszopiclone%0ARecord%3A%20Eszopiclone_Fernandez1993_reference%0APaper%3A%20Fernandez_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_eszopiclone/Eszopiclone_Fernandez1993_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 06:00 UTC</sub>
