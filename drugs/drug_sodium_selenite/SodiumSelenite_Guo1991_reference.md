<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;sodium selenite&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_selenite/&quot;},{&quot;label&quot;:&quot;Guo_1991 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium selenite — `SodiumSelenite_Guo1991_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.095), gpt-oss:120b (not confirmed, agreement 0.095). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**AUMC has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — sodium selenite: t1/2γ 1.8 h, t1/2ka 3.2 h, AUC 3 ng.h.ml-1, CL 32 ml.kg-1.h-1, V 1.45 L.kg-1, AUMC 130 S1, MRT 55 h, t1/2z 3.4 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sodium selenite, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:40:31.639508+00:00) predates the upstream re-run (2026-10-05 09:49:15.827153+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `sodium selenite`, measured `selenium`.

## Citation
Guo JA et al., [Pharmacokinetics of sodium selenite in…, Zhongguo yao li xue bao = A… (1991)

<div class="pk-model-meta" hidden drug="sodium selenite" model-id="SodiumSelenite_Guo1991_reference" status="needs_review" stale="true" population="healthy adults" measured-compound="selenium" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T1/2g | `Q89` · t1/2γ | 1.8 | h | 6480.0 | [h] | not captured | llm (0.6) | Guo_1991:abstract, Guo_1991:abstract, Guo_1991:abstract | — | not captured |
| T1/2ka | `Q95` · t1/2ka | 3.2 | h | 11520.0 | [h] | not captured | exact (1.0) | Guo_1991:abstract, Guo_1991:abstract | — | not captured |
| AUC | `Q88` · AUC | 3 | ng.h.ml-1 | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Guo_1991:abstract, Guo_1991:abstract | — | not captured |
| CL | `Q22` · CL | 32 | ml.kg-1.h-1 | 6.222222222222221e-07 | [ml] / [[h] · [kg]] | not captured | exact (1.0) | Guo_1991:abstract | — | not captured |
| Vc | `Q61` · V | 1.45 | L.kg-1 | 0.10149999999999999 | [l] / [kg] | not captured | exact (1.0) | Guo_1991:abstract, Guo_1991:abstract | — | not captured |
| Cp | `Q900` · equation variable | 36 | ng.ml-1 | not captured | [ng] / [ml] | not captured | llm (0.6) | Guo_1991:abstract, Guo_1991:abstract | — | not captured |
| AUMC (S1) | `Q20` · AUMC | 130 | S1 | not captured | [s1] | not captured | exact (1.0) | Guo_1991:abstract, Guo_1991:abstract | — | not captured |
| MRT | `Q53` · MRT | 55 | h | 198000.0 | [h] | not captured | exact (1.0) | Guo_1991:abstract, Guo_1991:abstract | — | not captured |
| T1/2 | `Q57` · t1/2z | 3.4 | h | 12240.0 | [h] | not captured | exact (1.0) | Guo_1991:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Tp' — extend the ontology if this is a real PK parameter (source ['Guo_1991:abstract', 'Guo_1991:abstract'])
- unit_dimension_unknown: 'S1' (AUMC)
- dropped unlinked row (NIL): 'VRT' — extend the ontology if this is a real PK parameter (source ['Guo_1991:abstract', 'Guo_1991:abstract'])
- dropped duplicate Q22 ('Cl', value 57) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=selenium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc' is the general volume)
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Guo_1991_metadata.yaml (22 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.095 (2/21 fields) | 19 |
| `gpt-oss:120b` | not confirmed | 0.095 (2/21 fields) | 19 |

<details><summary>38 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc]` | 3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[aumc]` | 130 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[aumc]` | not captured | 130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 32 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | not captured | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cp]` | 36 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cp]` | not captured | 36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` | 55 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 3.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2g]` | 1.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2g]` | not captured | 1.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2ka]` | 3.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2ka]` | not captured | 3.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tp]` | not captured | 6.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 1.45 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 1.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vrt]` | not captured | 174 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sodium selenite | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | selenium | sodium selenite | mismatch |
| `gpt-oss:120b` | `parameters[auc]` | 3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[aumc]` | 130 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[aumc]` | not captured | 130 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cp]` | 36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | 55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | 3.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | not captured | 3.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2g]` | 1.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2g]` | not captured | 1.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2ka]` | 3.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2ka]` | not captured | 3.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tp]` | not captured | 6.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 1.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | not captured | 1.45 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vrt]` | not captured | 174 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | sodium selenite | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | selenium | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Guo_1991:abstract'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Guo_1991:abstract', 'Guo_1991:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Guo_1991:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Guo_1991:abstract', 'Guo_1991:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Guo_1991:abstract', 'Guo_1991:abstract'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['Guo_1991:abstract', 'Guo_1991:abstract', 'Guo_1991:abstract'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Guo_1991:abstract', 'Guo_1991:abstract'] |
| C5_unit_missing_Q20 | fail | [mass] * [time] / [length] ** 3 | S1 | not captured | not captured | ['Guo_1991:abstract', 'Guo_1991:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.0 | not captured | not captured | ['Guo_1991:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.24 L/h | not captured | not captured | ['Guo_1991:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 102 L | not captured | not captured | ['Guo_1991:abstract', 'Guo_1991:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sodium_selenite/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Guo_1991` / `Guo_1991::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 09:49 UTC</sub>
