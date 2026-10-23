<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;tetracaine&quot;,&quot;href&quot;:&quot;drugs/drug_tetracaine/&quot;},{&quot;label&quot;:&quot;Cacek_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tetracaine_Sam2009_reference&quot;,&quot;label&quot;:&quot;Sam_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tetracaine/Tetracaine_Sam2009_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tetracaine_Gapiska2025_reference&quot;,&quot;label&quot;:&quot;Gapi\u0144ska_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tetracaine/Tetracaine_Gapiska2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tetracaine — `Tetracaine_Cacek2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Rejected), but the paper was screened again on 2026-10-06 23:18 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The tetracaine parent–metabolite record was rejected: the peripheral volume V2 (418 L) was never given a value, the simulated output was the parent's central compartment instead of the measured metabolite para-butylaminobenzoic acid, the structure was a one-compartment enteral model rather than the required parent–metabolite three-compartment structure, and bioavailability F and lag time Tlag were left at library defaults.

<div class="pk-model-meta" hidden drug="tetracaine" model-id="Tetracaine_Cacek2017_reference" status="rejected" stale="true" population="healthy volunteers" measured-compound="para-butylaminobenzoic acid" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Cacek AT, Gobburu JV, Gopalakrishnan M. Population Pharmacokinetics of an Intranasally Administered Combination of Oxymetazoline and Tetracaine in Healthy Volunteers. Journal of clinical pharmacology 57(2):247–254 (2017).
  ·  DOI: [10.1002/jcph.799](https://doi.org/10.1002/jcph.799)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 36.

**Dosed compound ≠ measured compound:** dosed tetracaine, measured para-butylaminobenzoic acid.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tetracaine parent–metabolite record was rejected: the peripheral volume V2 (418 L) was never given a value, the simulated output was the parent's central compartment instead of the measured metabolite para-butylaminobenzoic acid, the structure was a one-compartment enteral model rather than the required parent–metabolite three-compartment structure, and bioavailability F and lag time Tlag were left at library defaults.**

The record describes tetracaine with its metabolite para-butylaminobenzoic acid, but the model structure was a one-compartment enteral model instead of the required parent–metabolite three-compartment structure, and the simulated output was the parent's central compartment rather than the measured analyte. Of the five expected parameters, only four were covered: V2 (418 L) was neither emitted nor defaulted. Bioavailability F and lag time Tlag were filled with library defaults instead of estimates from the paper, which is not acceptable. The record was built from the abstract alone, so summary statistics stood in for a fitted model, and a second reader disagreed on the dose compound and analyte naming. Extracted — tetracaine: kabs 4.41 h-1, V2 418 L, CL 66.4 L/h, V1 6.97 L, Q 419 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tetracaine, the second reading oxymetazoline/tetracaine; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka' routed out of structural estimates ('An allometric model for body weight was included on volumes and clearances to describe unexplained between-subject variability.')
- table section iiv: 'peripheral volume' routed out of structural estimates ('An allometric model for body weight was included on volumes and clearances to describe unexplained between-subject variability.')
- table section iiv: 'clearance' routed out of structural estimates ('An allometric model for body weight was included on volumes and clearances to describe unexplained between-subject variability.')
- table section iiv: 'central volume' routed out of structural estimates ('An allometric model for body weight was included on volumes and clearances to describe unexplained between-subject variability.')
- table section iiv: 'intercompartmental clearance' routed out of structural estimates ('An allometric model for body weight was included on volumes and clearances to describe unexplained between-subject variability.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=para-butylaminobenzoic acid
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 5/5 row label(s) assigned, 10 linked by role; re-tagged para-butylaminobenzoic acid→parent ×10
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'para-butylaminobenzoic acid', not tetracaine — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Cacek_2017_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (1/4 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tetracaine', 'para-butylaminobenzoic acid', 'metabolism']] | [['tetracaine', 'para-butylaminobenzoic acid (pbba)', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | tetracaine | oxymetazoline/tetracaine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | para-butylaminobenzoic acid | para-butylaminobenzoic acid (PBBA) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=para-butylaminobenzoic acid) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btetracaine%5D%20Tetracaine_Cacek2017_reference&body=Drug%3A%20tetracaine%0ARecord%3A%20Tetracaine_Cacek2017_reference%0APaper%3A%20Cacek_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tetracaine/Tetracaine_Cacek2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:18 UTC</sub>
