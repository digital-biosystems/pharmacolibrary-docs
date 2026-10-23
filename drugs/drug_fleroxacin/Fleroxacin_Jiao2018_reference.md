<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;fleroxacin&quot;,&quot;href&quot;:&quot;drugs/drug_fleroxacin/&quot;},{&quot;label&quot;:&quot;Jiao_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fleroxacin — `Fleroxacin_Jiao2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Fleroxacin lacks distribution volume and elimination clearance, while metabolites have zero compartments, preventing a valid compartmental population PK model.

<div class="pk-model-meta" hidden drug="fleroxacin" model-id="Fleroxacin_Jiao2018_reference" status="rejected" stale="false" population="adults with cystic fibrosis and healthy adults" measured-compound="fleroxacin" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Jiao Y, Kim TH, Tao X, Kinzig M, Landersdorfer CB, Drescher SK et al. First population pharmacokinetic analysis showing increased quinolone metabolite formation and clearance in patients with cystic fibrosis compared to healthy volunteers. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 123:416–428 (2018).
  ·  DOI: [10.1016/j.ejps.2018.07.054](https://doi.org/10.1016/j.ejps.2018.07.054)

## Population and dosing

**Population:** adults with cystic fibrosis and healthy adults · condition cystic fibrosis · age group adult · n = $23$ (11 CF + 12 HV).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| formation clearances of N‑oxide fleroxacin in healthy volunteers | CLfm | 0.378 | L/h |
| formation clearances of N‑demethylfleroxacin in healthy volunteers | CLfm | 0.353 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Fleroxacin lacks distribution volume and elimination clearance, while metabolites have zero compartments, preventing a valid compartmental population PK model.**

The record is abstract-only, so no distribution volume or clearance/elimination values exist to define the parent drug's compartmental kinetics. The metabolites N-oxide fleroxacin and N-demethylfleroxacin have n_cmt set to 0, making them unreachable or orphan structures despite having formation clearances of 0.378 L/h and 0.353 L/h. Extracted — N-oxide fleroxacin: CLfm 0.378 L/h; N-demethylfleroxacin: CLfm 0.353 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fleroxacin, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| formation clearances of N‑oxide fleroxacin in healthy volunteers | `Q370` · CLfm | 0.378 | L/h | 1.05e-07 | m3/s | l/h | exact (1) | Jiao_2018:abstract |
| formation clearances of N‑demethylfleroxacin in healthy volunteers | `Q370` · CLfm | 0.353 | L/h | 9.806e-08 | m3/s | l/h | exact (1) | Jiao_2018:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate renal for CL_ratio from footnote/prose kept as documentation only (['Jiao_2018:abstract'])
- covariate category for CL from footnote/prose kept as documentation only (['Jiao_2018:abstract'])
- covariate category for CL_ratio from footnote/prose kept as documentation only (['Jiao_2018:abstract'])
- covariate category for Cmax_ratio from footnote/prose kept as documentation only (['Jiao_2018:abstract'])
- covariate renal for CL from footnote/prose kept as documentation only (['Jiao_2018:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fleroxacin
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles: per-genotype parameters — typical value from the reference group: formation clearances of N‑oxide fleroxacin in healthy volunteers, formation clearances of N‑demethylfleroxacin in healthy volunteers
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 8 linked by role; re-tagged fleroxacin→parent ×4, fleroxacin→N-oxide fleroxacin ×2, fleroxacin→N-demethylfleroxacin ×2
- molar mass: no plausible PubChem entry for 'N-oxide fleroxacin' ('floxacin N-oxide') — left in mass units
- molar mass: none found for 'N-oxide fleroxacin' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jiao_2018_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['fleroxacin', 'n-oxide fleroxacin', 'metabolism'], ['fleroxacin', 'n-demethylfleroxacin', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[formation clearance of n‐oxide fleroxacin]` |  | 0.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearances of n‐demethylfleroxacin in healthy volunteers]` | 0.353 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearances of n‐oxide fleroxacin in healthy volunteers]` | 0.378 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[linear nonrenal clearance]` |  | 1.01 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` |  | 1.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[saturable exsorption clearance into intestine]` |  | 0.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 0.81 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fleroxacin | unknown | mismatch |

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
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Jiao_2018:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Jiao_2018:abstract'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfleroxacin%5D%20Fleroxacin_Jiao2018_reference&body=Drug%3A%20fleroxacin%0ARecord%3A%20Fleroxacin_Jiao2018_reference%0APaper%3A%20Jiao_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fleroxacin/Fleroxacin_Jiao2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:53 UTC</sub>
