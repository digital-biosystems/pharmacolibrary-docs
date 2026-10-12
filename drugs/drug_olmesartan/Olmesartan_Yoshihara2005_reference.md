<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;Olmesartan&quot;,&quot;href&quot;:&quot;drugs/drug_olmesartan/&quot;},{&quot;label&quot;:&quot;Yoshihara_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olmesartan_Kodati2017_reference&quot;,&quot;label&quot;:&quot;Kodati_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olmesartan/Olmesartan_Kodati2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olmesartan_Ren2022_reference&quot;,&quot;label&quot;:&quot;Ren_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olmesartan/Olmesartan_Ren2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olmesartan_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olmesartan/Olmesartan_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Olmesartan — `Olmesartan_Yoshihara2005_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.267), gpt-oss:120b (partly confirmed, agreement 0.267). Primary extraction retained.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — olmesartan: CL/F 6.66 L/h, kabs 1.46 h-1, kel 0.193 h-1, k12 0.061 h-1, k21 0.079 h-1, tlag 0.427 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption lag-time: this record has none, the second reading 0.427; it also differs on 10 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:28:31.177735+00:00) predates the upstream re-run (2026-10-07 08:04:54.654511+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `olmesartan medoxomil`, measured `olmesartan`.

## Citation
Yoshihara K et al., Population pharmacokinetics of olmesart…, Clinical pharmacokinetics (2005)
  ·  DOI: [10.2165/00003088-200544120-00011](https://doi.org/10.2165/00003088-200544120-00011)

<div class="pk-model-meta" hidden drug="Olmesartan" model-id="Olmesartan_Yoshihara2005_reference" status="needs_review" stale="true" population="healthy volunteers and hypertensive patients" measured-compound="olmesartan" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 6.66 | L/h | 1.85e-06 | [l] / [h] | not captured | exact (1.0) | Yoshihara_2005:abstract | — | not captured |
| absorption rate constant | `Q49` · kabs | 1.46 | h-1 | 0.00040555555555555554 | [1] / [h] | not captured | exact (1.0) | Yoshihara_2005:abstract | — | not captured |
| elimination rate constant | `Q47` · kel | 0.193 | h-1 | 5.3611111111111115e-05 | [1] / [h] | not captured | exact (1.0) | Yoshihara_2005:abstract | — | not captured |
| rate constant from the central to peripheral compartment | `Q302` · k21 | 0.061 | h-1 | 1.6944444444444446e-05 | [1] / [h] | not captured | llm (0.6) | Yoshihara_2005:abstract | — | not captured |
| absorption lag-time | `Q83` · tlag | 0.427 | h | 1537.2 | [h] | not captured | llm_confirmed (0.6) | Yoshihara_2005:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q302 ('rate constant from the peripheral to central compartment', value 0.079) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=olmesartan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Yoshihara_2005_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.267 (4/15 fields) | 11 |
| `gpt-oss:120b` | partly confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag-time]` | not captured | 0.427 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag-time]` | 0.427 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | not captured | 1.46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 1.46 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 6.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 6.66 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination rate constant]` | not captured | 0.193 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination rate constant]` | 0.193 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate constant from the central to peripheral compartment]` | not captured | 0.061 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate constant from the central to peripheral compartment]` | 0.061 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate constant from the peripheral to central compartment]` | not captured | 0.079 | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption lag-time]` | not captured | 0.427 | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption lag-time]` | 0.427 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption rate constant]` | not captured | 1.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption rate constant]` | 1.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 6.66 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 6.66 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination rate constant]` | not captured | 0.193 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination rate constant]` | 0.193 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[rate constant from the central to peripheral compartment]` | not captured | 0.061 | only_one_extracted |
| `gpt-oss:120b` | `parameters[rate constant from the central to peripheral compartment]` | 0.061 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[rate constant from the peripheral to central compartment]` | not captured | 0.079 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yoshihara_2005:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Yoshihara_2005:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Yoshihara_2005:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Yoshihara_2005:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Yoshihara_2005:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.66 L/h | not captured | not captured | ['Yoshihara_2005:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_olmesartan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yoshihara_2005` / `Yoshihara_2005::reference`)


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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:04 UTC</sub>
