<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;budesonide&quot;,&quot;href&quot;:&quot;drugs/drug_budesonide/&quot;},{&quot;label&quot;:&quot;Back_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# budesonide — `Budesonide_Back2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The budesonide two-compartment model was rejected because a compartment has no path from the dose, and the record was built from the abstract alone rather than a fitted model.**

The record reports budesonide parameters V1 = 216 L, CL = 18.4 L·hr−1, absorption rate constant 19.7 hr−1, and V2 = 106 L for a two-compartment structure in adults with moderate asthma. The structural check found an unreachable or orphan compartment, meaning part of the model structure has no connection from the dose. Additionally, only the paper's abstract was read, so the reported summary statistics stand in for a fitted model, which is a limitation of the record's provenance. Extracted — budesonide: V1 216 L, CL 18.4 L·hr−1, kabs 19.7 hr−1, V2 106 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading none → none (none); it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:20.836719+00:00) predates the upstream re-run (2026-10-04 19:23:07.356663+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `budesonide/formoterol`, measured `budesonide`.

## Citation
Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020)
  ·  DOI: [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336)

## Model component
<dbs-pgx drug="budesonide" model-id="Budesonide_Back2020_reference" status="rejected" stale="true" population="adults with moderate asthma" measured-compound="budesonide" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q63` · V1 | 216 | L | 0.216 | [l] | not captured | exact (1.0) | Back_2020:abstract, Back_2020:abstract | — | not captured |
| CL (L·hr−1) | `Q22` · CL | 18.4 | L·hr−1 | 5.111111111111111e-06 | [l] / [h] | not captured | exact (1.0) | Back_2020:abstract, Back_2020:abstract | — | not captured |
| ka,Lung (hr−1) | `Q49` · kabs | 19.7 | hr−1 | 0.005472222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | Back_2020:abstract | — | not captured |
| Vp,BUD (L) | `Q64` · V2 | 106 | L | 0.106 | [l] | not captured | llm_confirmed (0.6) | Back_2020:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('ka,Gut (hr−1)', value 0) — already have one for this compound
- dropped unlinked row (NIL): 'BASE' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped PD-category row 'IC50 (ng·mL−1)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract'])
- dropped PD-category row 'EC50 (pg·mL−1)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract'])
- dropped PD-category row 'kout (hr−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract', 'Back_2020:abstract'])
- dropped value-less row: 'Sex (male/female), n/n (%/%)' (captured trailing unit '%/%' for child rows)
- dropped unlinked row (NIL): 'Age (years), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Weight (kg), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Height (cm), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped value-less row: 'ADRB2 genotype (n), AA/AG/GG'
- dropped unlinked row (NIL): 'Asthma duration (years), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline FEV1 (%), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline sputum eosinophil cationic protein (µg·L−1), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline Asthma control test score, mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc (L)); Q22 (CL (L·hr−1)); Q64 (Vp,BUD (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=budesonide
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Back_2020_extracted.txt (21 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | 18.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka,lung]` | 19.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 216 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp,bud]` | 106 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Back_2020:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Back_2020:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.4 | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.4 L/h | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 216 L | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 106 L | not captured | not captured | ['Back_2020:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_budesonide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Back_2020` / `Back_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 19:23 UTC</sub>
