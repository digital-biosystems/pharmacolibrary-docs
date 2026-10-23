<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;Tezacaftor&quot;,&quot;href&quot;:&quot;drugs/drug_tezacaftor/&quot;},{&quot;label&quot;:&quot;Truong_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tezacaftor_Jiang2025_reference&quot;,&quot;label&quot;:&quot;Jiang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tezacaftor/Tezacaftor_Jiang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tezacaftor — `Tezacaftor_Truong2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the dose link parameters are empty, leaving the absorption compartment unreachable from the dose.

<div class="pk-model-meta" hidden drug="Tezacaftor" model-id="Tezacaftor_Truong2025_reference" status="rejected" stale="false" population="pediatric patients with cystic fibrosis" measured-compound="tezacaftor" parameterization="apparent" topology="general_linear"></div>

## Citation
Truong NH, Benaboud S, Bouazza N, Barboura M, Bardin E, Miralles M et al. Elexacaftor/Tezacaftor/Ivacaftor Population Pharmacokinetics in Pediatric Patients With Cystic Fibrosis. Clinical and translational science 18(5):e70245 (2025).
  ·  DOI: [10.1111/cts.70245](https://doi.org/10.1111/cts.70245)

## Population and dosing

**Population:** pediatric patients with cystic fibrosis · condition cystic fibrosis · age group child · n = 96.

**Dosing:** 25, 37.5, 40, 50, 59.5, 60, 75, 80, 100, 112.5, 119, 150, 200, 231.5 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed elexacaftor/tezacaftor/ivacaftor, measured tezacaftor.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| T lag (h) | tlag | 0.70 | h |  |
| K a (h−1) | kabs | 0.42 | h−1 |  |
| CL/F (L/h/70 kg) | CL/F | 13.4 | L/h/70 kg | 3.9 |
| V/F (L/70 kg) | V/F | 183 | L/70 kg | 9.9 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the dose link parameters are empty, leaving the absorption compartment unreachable from the dose.**

The link parameter for the dose connection is explicitly set to 'none' with an unknown kind, rather than specifying a drug entry mechanism. This configuration fails to establish a path from the administration site to the central compartment containing tezacaftor. Consequently, the drug molecule is orphaned within the model structure and cannot receive the administered dose. Extracted — tezacaftor: tlag 0.7 h, kabs 0.42 h−1, CL/F 13.4 L/h/70 kg, V/F 183 L/70 kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has not captured → not captured (none), the second reading none. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| T lag (h) | `Q83` · tlag | 0.70 | h | 2520 | s | h |  | space_fold (0.95) | cts70245-tbl-0002:row3:col1, cts70245-tbl-0002:row3:col3 |
| K a (h−1) | `Q49` · kabs | 0.42 | h−1 | 0.0001167 | 1/s | 1/h |  | space_fold (0.95) | cts70245-tbl-0002:row4:col1, cts70245-tbl-0002:row4:col2, cts70245-tbl-0002:row4:col3 |
| CL/F (L/h/70 kg) | `Q27` · CL/F | 13.4 | L/h/70 kg | 3.722e-06 | m3/s | l/(h·70kg) | 3.9 | exact (1) | cts70245-tbl-0002:row5:col1, cts70245-tbl-0002:row5:col2, cts70245-tbl-0002:row5:col3 |
| V/F (L/70 kg) | `Q76` · V/F | 183 | L/70 kg | 0.183 | m3 | l/70kg | 9.9 | exact (1) | cts70245-tbl-0002:row6:col1, cts70245-tbl-0002:row6:col2, cts70245-tbl-0002:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ additive (mg/L)' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ proportional' routed out of structural estimates ('Residual error')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tezacaftor
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['', '', 'none']] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts70245-tbl-0002:row5:col1', 'cts70245-tbl-0002:row5:col2', 'cts70245-tbl-0002:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70245-tbl-0002:row4:col1', 'cts70245-tbl-0002:row4:col2', 'cts70245-tbl-0002:row4:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['cts70245-tbl-0002:row6:col1', 'cts70245-tbl-0002:row6:col2', 'cts70245-tbl-0002:row6:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts70245-tbl-0002:row3:col1', 'cts70245-tbl-0002:row3:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13.4 L/h | ['cts70245-tbl-0002:row5:col1', 'cts70245-tbl-0002:row5:col2', 'cts70245-tbl-0002:row5:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 183 L | ['cts70245-tbl-0002:row6:col1', 'cts70245-tbl-0002:row6:col2', 'cts70245-tbl-0002:row6:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btezacaftor%5D%20Tezacaftor_Truong2025_reference&body=Drug%3A%20tezacaftor%0ARecord%3A%20Tezacaftor_Truong2025_reference%0APaper%3A%20Truong_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tezacaftor/Tezacaftor_Truong2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:22 UTC</sub>
