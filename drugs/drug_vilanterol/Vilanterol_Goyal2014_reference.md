<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;Vilanterol&quot;,&quot;href&quot;:&quot;drugs/drug_vilanterol/&quot;},{&quot;label&quot;:&quot;Goyal_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vilanterol — `Vilanterol_Goyal2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The vilanterol record was rejected because its one-compartment structure leaves a compartment unreachable from the dose, and the parameters (CL/F 218 L/h, V2/F 1160 L) come from an abstract-only reading of Goyal_2014.

<div class="pk-model-meta" hidden drug="Vilanterol" model-id="Vilanterol_Goyal2014_reference" status="rejected" stale="false" population="patients with COPD" measured-compound="vilanterol" parameterization="apparent" topology="1C"></div>

## Citation
Goyal N, Beerahee M, Kalberg C, Church A, Kilbride S, Mehta R. Population pharmacokinetics of inhaled umeclidinium and vilanterol in patients with chronic obstructive pulmonary disease. Clinical pharmacokinetics 53(7):637–648 (2014).
  ·  DOI: [10.1007/s40262-014-0143-4](https://doi.org/10.1007/s40262-014-0143-4)

## Population and dosing

**Population:** patients with COPD · condition COPD · age group adult · n = 1637.

**Dosed compound ≠ measured compound:** dosed umeclidinium and vilanterol, measured vilanterol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (umeclidinium) | CL/F | 218 | L/h |
| V 2/F (umeclidinium) | V2/F | 1160 | L |
| 10 % decrease in CLCR effect on CL/F (umeclidinium) | equation variable | 3 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The vilanterol record was rejected because its one-compartment structure leaves a compartment unreachable from the dose, and the parameters (CL/F 218 L/h, V2/F 1160 L) come from an abstract-only reading of Goyal_2014.**

The record attributes a peripheral volume V2/F of 1160 L to vilanterol, but the structure is a single compartment (1C), so the peripheral compartment has no path from the dose — an orphan compartment. The clearance CL/F of 218 L/h is labelled umeclidinium in the source, yet is recorded for vilanterol. Because only the paper's abstract was read, the reported summary statistics stood in for a fitted model, so the values may not reflect the actual fit. Extracted — vilanterol: CL/F 218 L/h, V2/F 1.16e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has umeclidinium and vilanterol, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (umeclidinium) | `Q27` · CL/F | 218 | L/h | 6.056e-05 | m3/s | l/h | exact (1) | Goyal_2014:abstract |
| V 2/F (umeclidinium) | `Q82` · V2/F | 1160 | L | 1.16 | m3 | l | space_fold (0.95) | Goyal_2014:abstract |
| 10 % decrease in CLCR effect on CL/F (umeclidinium) | `Q900` · equation variable | 3 | % |  |  | % | llm_corrected (0.6) | Goyal_2014:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('CL/F (vilanterol)', value 40.9) — already have one for this compound
- dropped duplicate Q82 ('V 2/F (vilanterol)', value 268) — already have one for this compound
- covariate bodyweight for CL/F from footnote/prose kept as documentation only (['Goyal_2014:abstract'])
- covariate bodyweight for V2/F from footnote/prose kept as documentation only (['Goyal_2014:abstract'])
- covariate age for CL/F from footnote/prose kept as documentation only (['Goyal_2014:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vilanterol
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Goyal_2014_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[10 % decrease in clcr effect on cl/f]` | 3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 218 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 218 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2/f]` |  | 1160 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2/f]` | 1160 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | umeclidinium and vilanterol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | vilanterol | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Goyal_2014:abstract'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Goyal_2014:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 218 L/h | ['Goyal_2014:abstract'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.16e+03 L | ['Goyal_2014:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvilanterol%5D%20Vilanterol_Goyal2014_reference&body=Drug%3A%20vilanterol%0ARecord%3A%20Vilanterol_Goyal2014_reference%0APaper%3A%20Goyal_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vilanterol/Vilanterol_Goyal2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:32 UTC</sub>
