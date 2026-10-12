<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naloxone&quot;,&quot;href&quot;:&quot;drugs/drug_naloxone/&quot;},{&quot;label&quot;:&quot;Gu_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# naloxone — `Naloxone_Gu2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Extracted — naloxone: ? -0.3.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has buprenorphine and naloxone, the second reading buprenorphine/naloxone sublingual tablet. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `buprenorphine and naloxone`, measured `naloxone`.

## Citation
Gu M et al., Population pharmacokinetics of buprenor…, Frontiers in pharmacology (2023)
  ·  DOI: [10.3389/fphar.2023.1089862](https://doi.org/10.3389/fphar.2023.1089862)

<div class="pk-model-meta" hidden drug="naloxone" model-id="Naloxone_Gu2023_reference" status="rejected" stale="false" population="Chinese healthy volunteers and patients with opioid use disorder" measured-compound="naloxone" parameterization="apparent_wrt_Fm" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** apparent_wrt_Fm.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | -0.3 | not captured |

## Departures & gaps

**Interpretation flags:**
- $THETA(1) has no $PK binding — index may be misassigned
- $THETA(2) has no $PK binding — index may be misassigned
- $THETA(3) has no $PK binding — index may be misassigned
- $THETA(4) has no $PK binding — index may be misassigned
- $THETA(5) has no $PK binding — index may be misassigned
- $THETA(6) has no $PK binding — index may be misassigned
- $THETA(7) has no $PK binding — index may be misassigned
- $THETA(8) has no $PK binding — index may be misassigned
- $THETA(9) has no $PK binding — index may be misassigned
- $THETA(10) has no $PK binding — index may be misassigned
- $THETA(11) has no $PK binding — index may be misassigned
- $THETA(12) has no $PK binding — index may be misassigned
- $THETA(13) has no $PK binding — index may be misassigned
- $THETA(14) has no $PK binding — index may be misassigned
- $THETA(15) has no $PK binding — index may be misassigned
- $THETA(16) has no $PK binding — index may be misassigned
- $THETA(17) has no $PK binding — index may be misassigned
- control_stream: nonlinear kinetics (MM/product $DES or general ODE ADVAN) — manual_model_class, route_to_review
- apparent-ness: parameterization=apparent_wrt_Fm (metabolite model)
- theta_crosscheck: table present but its labels did not align to bound THETAs (skipped)
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 0 linked by role
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'buprenorphine' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'norbuprenorphine' (LLM) — left in mass units
- molar mass: none found for 'buprenorphine' — its concentrations stay mass-only
- molar mass: none found for 'norbuprenorphine' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (3/4 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | buprenorphine and naloxone | buprenorphine/naloxone sublingual tablet | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_naloxone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gu_2023` / `Gu_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 17:02 UTC</sub>
