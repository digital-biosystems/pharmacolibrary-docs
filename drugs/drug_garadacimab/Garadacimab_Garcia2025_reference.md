<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;garadacimab&quot;,&quot;href&quot;:&quot;drugs/drug_garadacimab/&quot;},{&quot;label&quot;:&quot;Garcia_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# garadacimab — `Garadacimab_Garcia2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

The values on this record come from other papers. Extracted — garadacimab: ? -5.41, ? 6.09, ? 35, ? 1, ? 1, ? 2, ? 60, ? 13, … (+6).

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009)

<div class="pk-model-meta" hidden drug="garadacimab" model-id="Garadacimab_Garcia2025_reference" status="rejected" stale="false" population="healthy volunteers and patients with hereditary angioedema" measured-compound="garadacimab" parameterization="apparent_wrt_Fm" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** apparent_wrt_Fm.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) | `Q49` · kabs | 0.0227 | h−1 | 6.305555555555556e-06 | 1/h | not captured | review_gapfill (0.7) | Pawaskar_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

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
| not captured | not captured | -5.41 | not captured |
| not captured | not captured | 6.09 | not captured |
| not captured | not captured | 35 | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | 01 | not captured |
| not captured | not captured | 01 | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | 2 | not captured |
| not captured | not captured | not captured | not captured |
| not captured | not captured | 60 | not captured |
| not captured | not captured | 13 | not captured |
| not captured | not captured | 01 | not captured |
| not captured | not captured | -1.4 | not captured |
| not captured | not captured | 3 | not captured |
| not captured | not captured | 3 | not captured |
| not captured | not captured | 01 | not captured |
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

## Departures & gaps

**Interpretation flags:**
- $THETA(3) has no $PK binding — index may be misassigned
- $THETA(6) has no $PK binding — index may be misassigned
- $THETA(15) has no $PK binding — index may be misassigned
- $THETA(16) has no $PK binding — index may be misassigned
- $THETA(17) has no $PK binding — index may be misassigned
- $THETA(18) has no $PK binding — index may be misassigned
- $THETA(19) has no $PK binding — index may be misassigned
- $THETA(20) has no $PK binding — index may be misassigned
- $THETA(21) has no $PK binding — index may be misassigned
- $THETA(22) has no $PK binding — index may be misassigned
- $THETA(23) has no $PK binding — index may be misassigned
- $THETA(24) has no $PK binding — index may be misassigned
- $THETA(25) has no $PK binding — index may be misassigned
- $THETA(26) has no $PK binding — index may be misassigned
- $THETA(27) has no $PK binding — index may be misassigned
- $THETA(28) has no $PK binding — index may be misassigned
- $THETA(29) has no $PK binding — index may be misassigned
- $THETA(30) has no $PK binding — index may be misassigned
- $THETA(31) has no $PK binding — index may be misassigned
- $THETA(32) has no $PK binding — index may be misassigned
- $THETA(33) has no $PK binding — index may be misassigned
- $THETA(34) has no $PK binding — index may be misassigned
- $THETA(35) has no $PK binding — index may be misassigned
- $THETA(36) has no $PK binding — index may be misassigned
- $THETA(37) has no $PK binding — index may be misassigned
- apparent-ness: parameterization=apparent_wrt_Fm (metabolite model)
- theta_crosscheck: table present but its labels did not align to bound THETAs (skipped)
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- molar mass: none found for 'garadacimab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Pawaskar_2022's review values (primary lacked it)

**Extraction notes:**
- table psp470009-tbl-0001: ambiguous_numeric_format
- table psp470009-tbl-0001: unparsed_numeric_cell
- table psp470009-tbl-0001: representations disagree; selected evidence retained, not merged

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (4/4 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Pawaskar_2022:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_garadacimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Garcia_2025` / `Garcia_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:55 UTC</sub>
