<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07B&quot;,&quot;href&quot;:&quot;atc/C07B.md&quot;},{&quot;label&quot;:&quot;metipranolol&quot;,&quot;href&quot;:&quot;drugs/drug_metipranolol/&quot;},{&quot;label&quot;:&quot;Abshagen_1982 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metipranolol — `Metipranolol_Abshagen1982_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12), gpt-oss:120b (not confirmed, agreement 0.474). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**Only clearance was extracted — no volume; the clearance plausibility check could not be computed.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — metipranolol: tlag 7.3 min, tmax 50 min, t1/2z 6.3 min, fe 4 % of the dose, CL 1.24e+03 ml/min, CLR 149 ml/min, CLNR 1.07e+03 ml/min, fu 70 %, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has metipranolol, the second reading metipranolol; deacetyl metipranolol; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:27:49.617835+00:00) predates the upstream re-run (2026-10-07 01:42:21.721631+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `metipranolol`, measured `deacetyl metipranolol`.

## Citation
Abshagen U et al., Pharmacokinetics of metipranolol in nor…, European journal of clinica… (1982)
  ·  DOI: [10.1007/BF00637616](https://doi.org/10.1007/BF00637616)

<div class="pk-model-meta" hidden drug="metipranolol" model-id="Metipranolol_Abshagen1982_reference" status="extracted" stale="true" population="normal volunteers" measured-compound="deacetyl metipranolol" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| lag-time | `Q83` · tlag | 7.3 | min | 438.0 | [min] | not captured | llm (0.6) | Abshagen_1982:abstract | — | not captured |
| tmax | `Q56` · tmax | 50 | min | 3000.0 | [min] | not captured | exact (1.0) | Abshagen_1982:abstract | — | not captured |
| invasion half-life | `Q57` · t1/2z | 6.3 | min | 378.0 | [min] | not captured | llm (0.6) | Abshagen_1982:abstract | — | not captured |
| urinary excretion of unchanged drug | `Q44` · fe | 4 | % of the dose | not captured | [%] · [ofthedose] | not captured | llm_confirmed (0.6) | Abshagen_1982:abstract | — | not captured |
| total ... clearances | `Q351` · CLm/F | 1237 | ml/min | 2.061666666666667e-05 | [ml] / [min] | not captured | llm (0.6) | Abshagen_1982:abstract | — | not captured |
| renal ... clearances | `Q26` · CLR | 149 | ml/min | 2.483333333333333e-06 | [ml] / [min] | not captured | llm (0.6) | Abshagen_1982:abstract | — | not captured |
| extra-renal ... clearances | `Q79` · CLNR | 1068 | ml/min | 1.78e-05 | [ml] / [min] | not captured | llm (0.6) | Abshagen_1982:abstract | — | not captured |
| distribution coefficient | `Q61` · V | 3.5 | l/kg | 0.245 | [l] / [kg] | not captured | exact (1.0) | Abshagen_1982:abstract | — | not captured |
| protein binding | `Q46` · fu | 70 | % | not captured | [%] | not captured | exact (1.0) | Abshagen_1982:abstract | — | not captured |
| Absolute bioavailability | `Q40` · Fab | 50 | % | not captured | not captured | not captured | exact (1.0) | Abshagen_1982:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('elimination half-life', value 3) — already have one for this compound
- unit_dimension_unknown: '% of the dose' (fe)
- linked 'distribution coefficient' as 'Vc' → Q63 (V1) for  — compound marker removed
- metabolite deacetyl metipranolol: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=deacetyl metipranolol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'distribution coefficient' is the general volume)
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 11/11 row label(s) assigned, 6 linked by role; re-tagged deacetyl metipranolol→parent ×11
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Abshagen_1982_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |
| `gpt-oss:120b` | not confirmed | 0.474 (9/19 fields) | 10 |

<details><summary>32 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[absolute bioavailability]` | 50 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute bioavailability]` | not captured | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution coefficient]` | 3.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution coefficient]` | not captured | 3.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[extra-renal ... clearances]` | 1068 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[extra-renal clearance]` | not captured | 1068 | only_one_extracted |
| `gpt-oss-120b` | `parameters[invasion half-life]` | 6.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[invasion half-life]` | not captured | 6.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag-time]` | 7.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag-time]` | not captured | 7.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[protein binding]` | 70 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[protein binding]` | not captured | 70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal ... clearances]` | 149 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | not captured | 149 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 50 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total ... clearances]` | 1237 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` | not captured | 1237 | only_one_extracted |
| `gpt-oss-120b` | `parameters[urinary excretion of unchanged drug]` | 4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[urinary excretion of unchanged drug]` | not captured | 4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | metipranolol | metipranolol; deacetyl metipranolol | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[distribution coefficient].parameter_id` | Q61 | Q410 | mismatch |
| `gpt-oss:120b` | `parameters[extra-renal ... clearances]` | 1068 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[extra-renal clearance]` | not captured | 1068 | only_one_extracted |
| `gpt-oss:120b` | `parameters[renal ... clearances]` | 149 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[renal clearance]` | not captured | 149 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total ... clearances]` | 1237 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total clearance]` | not captured | 1237 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | metipranolol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | deacetyl metipranolol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Abshagen_1982:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Abshagen_1982:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Abshagen_1982:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Abshagen_1982:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Abshagen_1982:abstract'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Abshagen_1982:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Abshagen_1982:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 245 L | not captured | not captured | ['Abshagen_1982:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_metipranolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abshagen_1982` / `Abshagen_1982::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:42 UTC</sub>
