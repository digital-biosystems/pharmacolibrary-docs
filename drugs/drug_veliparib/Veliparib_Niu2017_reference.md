<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;veliparib&quot;,&quot;href&quot;:&quot;drugs/drug_veliparib/&quot;},{&quot;label&quot;:&quot;Niu_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Veliparib_Salem2014_reference&quot;,&quot;label&quot;:&quot;Salem_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_veliparib/Veliparib_Salem2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# veliparib — `Veliparib_Niu2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Veliparib metabolite M8 was rejected because the record lacks a defined metabolic clearance rate linking it to the parent drug.

<div class="pk-model-meta" hidden drug="veliparib" model-id="Veliparib_Niu2017_reference" status="rejected" stale="false" population="patients with BRCA 1/2-mutated cancer or PARP-sensitive tumor types" measured-compound="veliparib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Niu J, Scheuerell C, Mehrotra S, Karan S, Puhalla S, Kiesel BF et al. Parent-Metabolite Pharmacokinetic Modeling and Pharmacodynamics of Veliparib (ABT-888), a PARP Inhibitor, in Patients With BRCA 1/2-Mutated Cancer or PARP-Sensitive Tumor Types. Journal of clinical pharmacology 57(8):977–987 (2017).
  ·  DOI: [10.1002/jcph.892](https://doi.org/10.1002/jcph.892)

## Population and dosing

**Population:** patients with BRCA 1/2-mutated cancer or PARP-sensitive tumor types · condition cancer · age group adult · n = ${71}.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| total clearance (CLR /F + CLNR /F) | CL | 17.3 | L/h |
| central and peripheral volume of distribution | V2 | 98.7 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Veliparib metabolite M8 was rejected because the record lacks a defined metabolic clearance rate linking it to the parent drug.**

The extracted parameters include total clearance and peripheral volume of distribution, but the metabolic link from veliparib to M8 has no assigned clearance value. This orphan metabolite compartment has no pathway from the dose, rendering the structure incomplete. Since the record relied on abstract-only data, these summary statistics stand in for a fitted model with missing structural parameters. Extracted — veliparib: CL 17.3 L/h, V2 98.7 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has veliparib, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| total clearance (CLR /F + CLNR /F) | `Q22` · CL | 17.3 | L/h | 4.806e-06 | m3/s | l/h | exact (1) | Niu_2017:abstract, Niu_2017:abstract |
| central and peripheral volume of distribution | `Q64` · V2 | 98.7 | L | 0.0987 | m3 | l | boundary_compartment (0.9) | Niu_2017:abstract, Niu_2017:abstract, Niu_2017:abstract, Niu_2017:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Lean body mass' — extend the ontology if this is a real PK parameter (source ['Niu_2017:abstract', 'Niu_2017:abstract'])
- dropped unlinked row (NIL): 'Creatinine clearance' — extend the ontology if this is a real PK parameter (source ['Niu_2017:abstract', 'Niu_2017:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=veliparib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=other; 4/4 row label(s) assigned, 6 linked by role; re-tagged veliparib→parent ×6
- molar mass: none of 2 PubChem candidate(s) is 'M8' (LLM) — left in mass units
- molar mass: none found for 'M8' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Niu_2017_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central and peripheral volume of distribution]` | 98.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` |  | 98.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` |  | 48.3 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | veliparib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | veliparib | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Niu_2017:abstract', 'Niu_2017:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Niu_2017:abstract', 'Niu_2017:abstract', 'Niu_2017:abstract', 'Niu_2017:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.3 | ['Niu_2017:abstract', 'Niu_2017:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.3 L/h | ['Niu_2017:abstract', 'Niu_2017:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 98.7 L | ['Niu_2017:abstract', 'Niu_2017:abstract', 'Niu_2017:abstract', 'Niu_2017:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bveliparib%5D%20Veliparib_Niu2017_reference&body=Drug%3A%20veliparib%0ARecord%3A%20Veliparib_Niu2017_reference%0APaper%3A%20Niu_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_veliparib/Veliparib_Niu2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:50 UTC</sub>
