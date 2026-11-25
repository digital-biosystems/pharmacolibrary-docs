<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/&quot;},{&quot;label&quot;:&quot;Ouellet_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dabrafenib — `Dabrafenib_Ouellet2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="dabrafenib" model-id="Dabrafenib_Ouellet2014_reference" status="rejected" stale="false" population="adults with BRAF V600E mutation-positive melanoma" measured-compound="dabrafenib" parameterization="apparent" topology="general_linear"></div>

## Citation
Ouellet D, Gibiansky E, Leonowens C, O'Hagan A, Haney P, Switzky J et al. Population pharmacokinetics of dabrafenib, a BRAF inhibitor: effect of dose, time, covariates, and relationship with its metabolites. Journal of clinical pharmacology 54(6):696–706 (2014).
  ·  DOI: [10.1002/jcph.263](https://doi.org/10.1002/jcph.263)

## Population and dosing

**Population:** adults with BRAF V600E mutation-positive melanoma · condition melanoma · age group adult.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Total steady-state clearance (CL/F) at 150 mg BID dose | CL/F | 34.3 | L/h |
| induction half-life | t1/2z | 67 | hours |
| AUC ratio (hypromellose:gelatin capsule) following single dosing | AUC ratio | 1.8 |  |
| Steady-state pre-dose concentration of dabrafenib at 150 mg BID | Css | 46.6 | ng/mL |
| Steady-state pre-dose concentration of hydroxy-dabrafenib at 150 mg BID | Ctrough | 69.3 | ng/mL |
| Steady-state pre-dose concentration of carboxy-dabrafenib at 150 mg BID | Cmin | 3608 | ng/mL |
| Steady-state pre-dose concentration of desmethyl-dabrafenib at 150 mg BID | Ctrough | 291 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.267), qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — dabrafenib: CL/F 34.3 L/h, t1/2z 67 hours, AUC ratio 1.8, Css 46.6 ng/mL; hydroxy-dabrafenib: Ctrough 69.3 ng/mL; carboxy-dabrafenib: Cmin 3.61e+03 ng/mL; desmethyl-dabrafenib: Ctrough 291 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has dabrafenib → hydroxy-dabrafenib (metabolism); dabrafenib → carboxy-dabrafenib (metabolism); dabrafenib → desmethyl-dabrafenib (metabolism), the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Total steady-state clearance (CL/F) at 150 mg BID dose | `Q27` · CL/F | 34.3 | L/h | 9.528e-06 | m3/s | l/h | exact (1) | Ouellet_2014:abstract, Ouellet_2014:abstract |
| induction half-life | `Q57` · t1/2z | 67 | hours | 2.412e+05 | s | h | llm (0.6) | Ouellet_2014:abstract |
| AUC ratio (hypromellose:gelatin capsule) following single dosing | `Q21` · AUC ratio | 1.8 |  | 1.8 |  |  | llm_confirmed (0.6) | Ouellet_2014:abstract |
| Steady-state pre-dose concentration of dabrafenib at 150 mg BID | `Q34` · Css | 46.6 | ng/mL | 4.66e-05 | kg/m3 | ng/ml | llm (0.6) | Ouellet_2014:abstract |
| Steady-state pre-dose concentration of hydroxy-dabrafenib at 150 mg BID | `Q37` · Ctrough | 69.3 | ng/mL | 6.93e-05 | kg/m3 | ng/ml | llm (0.6) | Ouellet_2014:abstract |
| Steady-state pre-dose concentration of carboxy-dabrafenib at 150 mg BID | `Q36` · Cmin | 3608 | ng/mL | 0.003608 | kg/m3 | ng/ml | llm (0.6) | Ouellet_2014:abstract |
| Steady-state pre-dose concentration of desmethyl-dabrafenib at 150 mg BID | `Q37` · Ctrough | 291 | ng/mL | 0.000291 | kg/m3 | ng/ml | llm (0.6) | Ouellet_2014:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Capsule shell' — extend the ontology if this is a real PK parameter (source ['Ouellet_2014:abstract'])
- dropped unlinked row (NIL): 'sex and weight' — extend the ontology if this is a real PK parameter (source ['Ouellet_2014:abstract'])
- dropped duplicate Q21 ('AUC ratio (hypromellose:gelatin capsule) following repeat dosing', value 1.42) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dabrafenib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 2 linked by role; re-tagged dabrafenib→parent ×5, dabrafenib→hydroxy-dabrafenib ×1, dabrafenib→carboxy-dabrafenib ×1, dabrafenib→desmethyl-dabrafenib ×1
- molar mass: no plausible PubChem entry for 'carboxy-dabrafenib' ('carboxy-dabrafenib') — left in mass units
- molar mass: none found for 'carboxy-dabrafenib' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ouellet_2014_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.267 (4/15 fields) | 11 |
| `qwen3.8-27b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dabrafenib', 'hydroxy-dabrafenib', 'metabolism'], ['dabrafenib', 'carboxy-dabrafenib', 'metabolism'], ['dabrafenib', 'desmethyl-dabrafenib', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc ratio (hypromellose:gelatin capsule) - single dosing]` |  | 1.80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc ratio (hypromellose:gelatin capsule) following single dosing]` | 1.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady state achievement time]` |  | 14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state pre-dose concentration of carboxy-dabrafenib at 150 mg bid]` | 3608 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state pre-dose concentration of dabrafenib at 150 mg bid]` | 46.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state pre-dose concentration of dabrafenib]` |  | 46.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state pre-dose concentration of desmethyl-dabrafenib at 150 mg bid]` | 291 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state pre-dose concentration of hydroxy-dabrafenib at 150 mg bid]` | 69.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total steady-state clearance (cl/f) at 150 mg bid dose]` | 34.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total steady-state clearance (cl/f) at 150 mg bid dose]` |  | 34.3 | only_one_extracted |
| `qwen3.8-27b` | `model.links` | [] | [['dabrafenib', 'hydroxy-dabrafenib', 'metabolism'], ['dabrafenib', 'carboxy-dabrafenib', 'metabolism'], ['dabrafenib', 'desmethyl-dabrafenib', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `qwen3.8-27b` | `parameters[auc ratio (hypromellose:gelatin capsule) following single dosing]` | 1.80 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[induction half-life]` | 67 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[steady-state pre-dose concentration of dabrafenib]` | 46.6 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[total steady-state clearance (cl/f) at 150 mg bid dose]` | 34.3 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Ouellet_2014:abstract', 'Ouellet_2014:abstract'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 |  | ['Ouellet_2014:abstract'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Ouellet_2014:abstract'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Ouellet_2014:abstract'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Ouellet_2014:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Ouellet_2014:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 34.3 L/h | ['Ouellet_2014:abstract', 'Ouellet_2014:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdabrafenib%5D%20Dabrafenib_Ouellet2014_reference&body=Drug%3A%20dabrafenib%0ARecord%3A%20Dabrafenib_Ouellet2014_reference%0APaper%3A%20Ouellet_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dabrafenib/Dabrafenib_Ouellet2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 21:16 UTC</sub>
