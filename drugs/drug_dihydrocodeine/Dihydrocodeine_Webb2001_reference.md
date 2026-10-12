<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dihydrocodeine&quot;,&quot;href&quot;:&quot;drugs/drug_dihydrocodeine/&quot;},{&quot;label&quot;:&quot;Webb_2001 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dihydrocodeine — `Dihydrocodeine_Webb2001_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The dihydrocodeine parent–metabolite model was held back because the hepatic blood flows between the liver compartment and central circulation (90 L/h) were left at library defaults instead of being estimated or justified, alongside assumed F=1, Fm=1 and no molar correction.**

The record, built from the abstract of Webb_2001 alone, reports CL/F 43 L/h, V/F 203 L, ka 11 1/h, tlag 0.3 h and kel 0.216 1/h for dihydrocodeine, with dihydromorphine fm 0.015, kel 0.339 1/h and V 200 L. The hepatic blood flow parameters (90 L/h) were not extracted from the paper but defaulted, so they shape the simulated profile without support from this source. The builder also assumed F=1, Fm=1 and no molar correction, making the parameterization apparent; the deviations check could not accept these defaults or assumptions, so the record needs review. Extracted — dihydrocodeine: CL/F 43 L/h, V/F 203 l, kabs 11 1/h, tlag 0.3 h, kel 0.216 1/h, t1/2z 13 min; dihydromorphine: fm 0.015, kel 0.339 1/h, V 200 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dihydrocodeine, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:26:23.200361+00:00) predates the upstream re-run (2026-10-07 04:55:18.876520+00:00). Current validate status: `rejected`.

## Citation
Webb JA et al., Contribution of dihydrocodeine and dihy…, British journal of clinical… (2001)
  ·  DOI: [10.1046/j.0306-5251.2001.01414.x](https://doi.org/10.1046/j.0306-5251.2001.01414.x)

<div class="pk-model-meta" hidden drug="dihydrocodeine" model-id="Dihydrocodeine_Webb2001_reference" status="rejected" stale="true" population="healthy volunteers" measured-compound="dihydrocodeine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CPT time point ( | `Q900` · equation variable | 0.25 | h | not captured | [h] | not captured | llm (0.6) | Webb_2001:abstract, Webb_2001:abstract, Webb_2001:abstract, Webb_2001:abstract, Webb_2001:abstract | — | not captured |
| half-life of elimination from effect compartment= | `Q57` · t1/2z | 13 | min | 780.0 | [min] | not captured | llm (0.6) | Webb_2001:abstract | — | not captured |
| first‐order absorption rate constant | `Q49` · kabs | 2.6 | h−1 | 0.0007222222222222223 | 1/h | not captured | review_gapfill (0.7) | Rezaee_2025:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'P=' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- dropped unlinked row (NIL): 'aged' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract', 'Webb_2001:abstract'])
- dropped unlinked row (NIL): 'DHC/DHM ratio=' — extend the ontology if this is a real PK parameter (source ['Webb_2001:abstract'])
- dropped PD-category row 'ke0,' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Webb_2001:abstract'])
- dropped PD-category row 'ke0' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Webb_2001:abstract', 'Webb_2001:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dihydrocodeine
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'Intercept constant of DHM while fm(DHM) was proportional could be fixed AT 0 (model 9) or be calculated as part of conve')
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 0 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Rezaee_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Webb_2001_extracted.txt (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.0 (0/14 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dihydrocodeine', 'dihydromorphine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cpt time point (]` | 0.25 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[first‐order absorption rate constant]` | 2.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm(dhm)]` | not captured | 0.015 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life of elimination from effect compartment=]` | 13 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kel]` | not captured | 0.216 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t_lag]` | not captured | 0.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v(dhm)]` | not captured | 200 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 203 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | dihydrocodeine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | dihydrocodeine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Rezaee_2025:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Webb_2001:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[dihydromorphine] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.2, 'CL': 1.8833333333333335e-05, 'formation': 1.791666666666667e-07} | not captured | dihydromorphine = compartment M1 with its own numbers |
| T3_metabolite_output[dihydromorphine] | not captured | pass | not captured | 1.2353418243819927e-06 | not captured | C_M1 (dihydromorphine) must rise above 0 when the parent is dosed |
| T3_molar_mass[dihydromorphine] | not captured | pass | not captured | {'MW': 0.30138010000000004, 'MW_m1': 0.287359} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=dihydrocodeine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 7 scholar param(s) emitted or defaulted | 7 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | parent_metabolite_hepatic → PK_3M_3C* | PK_3M_3C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dihydrocodeine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Webb_2001` / `Webb_2001::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dihydrocodeine/models/modelica/Dihydrocodeine_Webb2001_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dihydrocodeine/models/modelica/Dihydrocodeine_Webb2001_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dihydrocodeine/models/modelica/Dihydrocodeine_Webb2001_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:55 UTC</sub>
