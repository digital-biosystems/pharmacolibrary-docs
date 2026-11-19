<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Etidronic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_etidronic_acid/&quot;},{&quot;label&quot;:&quot;Molloi_1989 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EtidronicAcid_Lin1997_reference&quot;,&quot;label&quot;:&quot;Lin_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_etidronic_acid/EtidronicAcid_Lin1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Etidronic acid — `EtidronicAcid_Molloi1989_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Etidronic acid" model-id="EtidronicAcid_Molloi1989_reference" status="rejected" stale="false" population="normal young males" measured-compound="Tc-99m-HEDP" parameterization="mechanistic" topology="retention"></div>

## Citation
Molloi S, Mazess R, Bendsen H, Wilson M. Whole body and regional retention of Tc-99m-labeled diphosphonates with a whole-body counter: a study with normal males. Calcified tissue international 44(5):322–329 (1989).
  ·  DOI: [10.1007/BF02556311](https://doi.org/10.1007/BF02556311)

## Population and dosing

**Population:** normal young males · condition healthy · age group adult · n = 20.

**Dosed compound ≠ measured compound:** dosed Tc-99m-labeled etidronic acid (HEDP), measured Tc-99m-HEDP.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 24 hour WBR, HEDP, young males | equation variable | 17.7 |  |
| initial rapid clearance phase half-time | t1/2α | 1 | hour |
| slower second phase clearance half-time, HEDP | t1/2β | 22 | hours |
| volume | V | 50.0 | µL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is etidronic acid's own; they describe Tc-99m-HEDP. Extracted — Tc-99m-HEDP: t1/2α 1 hour, t1/2β 22 hours, V 50 µL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Tc-99m-labeled etidronic acid (HEDP), the second reading Tc-99m-HEDP (etidronic acid), Tc-99m-MDP; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 24 hour WBR, HEDP, young males | `Q900` · equation variable | 17.7 |  | 17.7 |  |  | llm (0.6) | Molloi_1989:abstract |
| initial rapid clearance phase half-time | `Q59` · t1/2α | 1 | hour | 3600 | s | h | llm_corrected (0.6) | Molloi_1989:abstract |
| slower second phase clearance half-time, HEDP | `Q60` · t1/2β | 22 | hours | 7.92e+04 | s | h | llm_corrected (0.6) | Molloi_1989:abstract |
| volume | `Q61` · V | 50.0 | µL | 5e-08 | m3 | L | review_gapfill (0.7) | Li_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '24 hour WBR, MDP, young males' — extend the ontology if this is a real PK parameter (source ['Molloi_1989:abstract'])
- dropped duplicate Q60 ('slower second phase clearance half-time, MDP', value 44) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Tc-99m-HEDP
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- molar mass: none found for 'Tc-99m-HEDP' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Li_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Molloi_1989_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
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
| `gpt-oss:120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[24 hour wbr, hedp, young males]` | 17.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[average 24 hour wbr values in young males]` |  | 31.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[initial rapid clearance phase half-time]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[initial rapid clearance phase half-time]` |  | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[intravenous injection of tc-99m-diphosphonates]` |  | 50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[slower second phase clearance half-time, hedp]` | 22 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[slower second phase clearance half-time]` |  | 22 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Tc-99m-labeled etidronic acid (HEDP) | Tc-99m-HEDP (etidronic acid), Tc-99m-MDP | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Tc-99m-HEDP | Tc-99m-HEDP radioactivity, Tc-99m-MDP radioactivity | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q59 | pass | [time] |  | ['Molloi_1989:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Molloi_1989:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Li_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 5e-05 L | ['Li_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Betidronic_acid%5D%20EtidronicAcid_Molloi1989_reference&body=Drug%3A%20etidronic_acid%0ARecord%3A%20EtidronicAcid_Molloi1989_reference%0APaper%3A%20Molloi_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_etidronic_acid/EtidronicAcid_Molloi1989_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:52 UTC</sub>
