<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;adefovir dipivoxil&quot;,&quot;href&quot;:&quot;drugs/drug_adefovir_dipivoxil/&quot;},{&quot;label&quot;:&quot;Dong_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# adefovir dipivoxil — `AdefovirDipivoxil_Dong2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The maximum metabolic rate for adefovir uses micromoles per hour, a unit not recognized by the review process.**

The Vmax parameter for adefovir is reported as 2.40 µmol/h. This specific unit could not be resolved to standard SI units during the review. As a result, the structural parameter check failed due to a dimension mismatch. Extracted — adefovir dipivoxil: tlag 0.122 h, FR 0.59, kabs 5.18 h−1; adefovir: V 235 L, CLm/F 11.8 L/h, Km 170 nmol/L, Vmax 2.4 µmol/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-07 14:32:43.430124+00:00) predates the upstream re-run (2026-10-07 15:04:54.761012+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `adefovir dipivoxil`, measured `adefovir`.

## Citation
Dong Q et al., Understanding adefovir pharmacokinetics…, European journal of clinica… (2024)
  ·  DOI: [10.1007/s00228-024-03673-x](https://doi.org/10.1007/s00228-024-03673-x)

## Model component
<dbs-pgx drug="adefovir dipivoxil" model-id="AdefovirDipivoxil_Dong2024_reference" status="rejected" stale="true" population="healthy adults" measured-compound="adefovir" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ALAG (h) | `Q83` · tlag | 0.122 | h | 439.2 | [h] | 17.2 | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2 | — | not captured |
| V (L) | `Q61` · V | 235 | L | 0.23500000000000001 | [l] | 14.1 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| CLNR (L/h) | `Q351` · CLm/F | 11.8 | L/h | 3.277777777777778e-06 | [l] / [h] | 25.7 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| Km (nmol/L) | `Q1` · Km | 170 | nmol/L | not captured | [nM] / [l] | 26.3 | exact (1.0) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| Vmax (µmol/h) | `Q66` · Vmax | 2.40 | µmol/h | not captured | [[µM] · [ol]] / [h] | 23.5 | special_case (0.95) | Tab3:row6:col1, Tab3:row6:col2 | — | 19.1 (None% RSE) |
| FR | `Q43` · FR | 0.590 | not captured | not captured | not captured | not captured | exact (1.0) | Tab3:row8:col1 | — | not captured |
| KaR (h−1) | `Q49` · kabs | 5.18 | h−1 | 0.0014388888888888889 | [1] / [h] | 20.5 | exact (1.0) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'V' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vmax' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iov: 'F' routed out of structural estimates ('Inter-occasion variability (CV%)')
- table section iov: 'Ka' routed out of structural estimates ('Inter-occasion variability (CV%)')
- table section iov: 'ALAG' routed out of structural estimates ('Inter-occasion variability (CV%)')
- table section iov: 'V' routed out of structural estimates ('Inter-occasion variability (CV%)')
- unit_dimension_mismatch: 'Km (nmol/L)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vmax (µmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- metabolite adefovir: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V (L)' Q63→Q61 for adefovir — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=adefovir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of adefovir other but 2 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: FR, KaR (h−1)
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 8 linked by role
- review gap-fill skipped: this record measures 'adefovir', not adefovir_dipivoxil — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab3:row2:col3 = '0.123 (0.0819–0.162)'
- unparsed cell Tab3:row3:col3 = '233 (196–321)'
- unparsed cell Tab3:row4:col3 = '11.6 (8.52–20.2)'
- unparsed cell Tab3:row5:col3 = '170 (122–295)'
- unparsed cell Tab3:row6:col3 = '2.42 (1.80–3.88)'
- unparsed cell Tab3:row9:col3 = '0.731 (0.629–0.999)'
- unparsed cell Tab3:row10:col3 = '5.14 (3.54–7.74)'
- unparsed cell Tab3:row11:col3 = '2.30 (1.66–3.30)'
- unparsed cell Tab3:row13:col3 = '16.3 (10.5–21.8)'
- unparsed cell Tab3:row14:col3 = '18.4 (6.32–29.6)'
- unparsed cell Tab3:row16:col3 = '28.0 (11.6–48.1)'
- unparsed cell Tab3:row17:col3 = '101 (69.1–150)'
- unparsed cell Tab3:row18:col3 = '75.4 (43.0–129)'
- unparsed cell Tab3:row19:col3 = '8.29 (4.90–11.2)'
- unparsed cell Tab3:row21:col3 = '9.45 (8.23–10.9)'
- unparsed cell Tab3:row22:col3 = '27.7 (17.9–39.5)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (16/18 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[clnr].parameter_id` | Q351 | Q79 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q61 | fail | 235.0 | 12.4 | 0.0528 | 0.05 | footnote reference category |
| C5_dimension_Q1 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row10:col1', 'Tab3:row10:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q66 | fail | [substance] / [time] | µmol/h | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 235 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_adefovir_dipivoxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dong_2024` / `Dong_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:04 UTC</sub>
