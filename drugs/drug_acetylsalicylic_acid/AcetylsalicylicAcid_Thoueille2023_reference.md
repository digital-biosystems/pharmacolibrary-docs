<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;acetylsalicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/&quot;},{&quot;label&quot;:&quot;Thoueille_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AcetylsalicylicAcid_Koh2025_reference&quot;,&quot;label&quot;:&quot;Koh_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Shi2008_reference&quot;,&quot;label&quot;:&quot;Shi_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Shi2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Bayoumy2025_reference&quot;,&quot;label&quot;:&quot;Bayoumy_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Bayoumy2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# acetylsalicylic acid — `AcetylsalicylicAcid_Thoueille2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The acetylsalicylic acid record was held back because the total clearance of 39.9 L/h conflicted with a 30 L/h value cited by a second reader.

<div class="pk-model-meta" hidden drug="acetylsalicylic acid" model-id="AcetylsalicylicAcid_Thoueille2023_reference" status="rejected" stale="false" population="adults living with HIV" measured-compound="acetylsalicylic_acid" parameterization="apparent" topology="1C"></div>

## Citation
Thoueille P, Alves Saldanha S, Desfontaine V, Kusejko K, Courlet P, Andre P et al. Population pharmacokinetic modelling to characterize the effect of chronic kidney disease on tenofovir exposure after tenofovir alafenamide administration. The Journal of antimicrobial chemotherapy 78(6):1433-1443 (2023).
  ·  DOI: [10.1093/jac/dkad103](https://doi.org/10.1093/jac/dkad103)

## Population and dosing

**Population:** review reference.

**Dosed compound ≠ measured compound:** dosed tenofovir alafenamide, measured acetylsalicylic_acid.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference/AcetylsalicylicAcid_Thoueille2023_reference.svg" alt="AcetylsalicylicAcid_Thoueille2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLTFV | CL/F | 39.9 | L/h |
| VTFV | V | 2660.0 | L |
| ka | kabs | 2.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The acetylsalicylic acid record was held back because the total clearance of 39.9 L/h conflicted with a 30 L/h value cited by a second reader.**

The model builder used a lag time default rather than an explicit estimate, creating a deviation from the source data. The record assumes an apparent parameterization with bioavailability set to one. A second reader disagreed on the clearance value, reporting 39.9 L/h where this record had 30 L/h, and on the parameterization type. Extracted — acetylsalicylic acid: CL/F 39.9 L/h, V 2.66e+03 L, kabs 2 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q22: this record has 30, the second reading 39.9; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLTFV | `Q27` · CL/F | 39.9 | L/h | 1.108e-05 | m3/s | L/h | review (0.7) | Thoueille_2023:review |
| VTFV | `Q61` · V | 2660.0 | L | 2.66 | m3 | L | review (0.7) | Thoueille_2023:review |
| ka | `Q49` · kabs | 2.0 | h−1 | 0.0005556 | 1/s | 1/h | review (0.7) | Thoueille_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- built from REVIEW reference values (Thoueille_2023) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `values[Q22]` | 30 | 39.9 | mismatch |
| `gpt-oss-120b` | `values[Q27]` | 39.9 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q301]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q312]` | 34 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q40]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q49]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `values[Q57]` | 0.5 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Thoueille_2023:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thoueille_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Thoueille_2023:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 39.9 L/h | ['Thoueille_2023:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.66e+03 L | ['Thoueille_2023:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | fail | acetylsalicylic_acid (or metabolite) | paper about another drug | paper subject is not acetylsalicylic_acid: neither the title nor the abstract names this drug and the relevance screen rejected the paper |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=acetylsalicylic_acid) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | dev-1: not acceptable; dev-2: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3000 mg, single dose, first-order absorption (ka 2 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 3000 mg oral (N02BA01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference/AcetylsalicylicAcid_Thoueille2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference/AcetylsalicylicAcid_Thoueille2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `AcetylsalicylicAcid_Thoueille2023_reference_params.json` · controls `AcetylsalicylicAcid_Thoueille2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacetylsalicylic_acid%5D%20AcetylsalicylicAcid_Thoueille2023_reference&body=Drug%3A%20acetylsalicylic_acid%0ARecord%3A%20AcetylsalicylicAcid_Thoueille2023_reference%0APaper%3A%20Thoueille_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-22 12:52 UTC</sub>
