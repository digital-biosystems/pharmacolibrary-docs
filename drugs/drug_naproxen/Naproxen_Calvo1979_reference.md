<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;naproxen&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/&quot;},{&quot;label&quot;:&quot;Calvo_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Naproxen_Schlachter2026_reference&quot;,&quot;label&quot;:&quot;Schlachter_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/Naproxen_Schlachter2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Naproxen_Vlitalo2012_reference&quot;,&quot;label&quot;:&quot;V\u00e4litalo_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/Naproxen_Vlitalo2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Naproxen_Oliveira2022v2_reference&quot;,&quot;label&quot;:&quot;Oliveira_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_naproxen/Naproxen_Oliveira2022v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# naproxen — `Naproxen_Calvo1979_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.095). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record failed a dimension check on a structural parameter because it was derived from abstract-only summary statistics rather than a fitted model.**

The model includes a second peripheral compartment with transfer rate constants k13 and k21, but the underlying data is limited to abstract summary statistics like Cmax 52.63 micrograms/ml. This abstract-only derivation stands in for a fitted model, which caused the structural parameter to fail the dimension mismatch check. Extracted — naproxen: tmax 2 hr, Cmax 52.6 micrograms/ml, kabs 1.89 hr-1, λ1 0.393 hr-1, kel 0.049 hr-1, k12 0.147 hr-1, k21 0.198 hr-1, k13 0.097 hr-1, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has naproxen, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Calvo MV et al., Pharmacokinetics of naproxen in healthy…, International journal of cl… (1979)

<div class="pk-model-meta" hidden drug="naproxen" model-id="Naproxen_Calvo1979_reference" status="rejected" stale="false" population="healthy volunteers and patients with diabetic microangiopathy" measured-compound="naproxen" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tmax | `Q56` · tmax | 2 | hr | 7200.0 | [h] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| Cmax | `Q32` · Cmax | 52.63 | micrograms/ml | not captured | [µg] / [ml] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| Ka | `Q49` · kabs | 1.893 | hr-1 | 0.0005258333333333333 | [1] / [h] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| alpha | `Q67` · λ1 | 0.393 | hr-1 | not captured | [1] / [h] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| beta | `Q47` · kel | 0.049 | hr-1 | 1.3611111111111111e-05 | [1] / [h] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| K12 | `Q301` · k12 | 0.147 | hr-1 | 4.0833333333333334e-05 | [1] / [h] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| K21 | `Q302` · k21 | 0.198 | hr-1 | 5.5e-05 | [1] / [h] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| K13 | `Q303` · k13 | 0.097 | hr-1 | 2.6944444444444445e-05 | [1] / [h] | not captured | exact (1.0) | Calvo_1979:abstract | — | not captured |
| unbound volume of distribution | `Q61` · V | 4290.0 | l | 4.29 | L | not captured | review_gapfill (0.7) | Björnsson_2011:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'alpha' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=naproxen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Björnsson_2011's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Calvo_1979_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.095 (2/21 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alpha]` | 0.393 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[alpha]` | not captured | 0.393 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` | 0.049 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` | not captured | 0.049 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 52.63 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 52.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 0.147 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | not captured | 0.147 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | 0.097 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | not captured | 0.097 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.198 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | not captured | 0.198 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.893 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1.893 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[unbound volume of distribution]` | 4290.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | naproxen | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | naproxen | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Calvo_1979:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Calvo_1979:abstract'] |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['Calvo_1979:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Calvo_1979:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Calvo_1979:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Calvo_1979:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Calvo_1979:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Björnsson_2011:review'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | not captured | not captured | ['Calvo_1979:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.29e+03 L | not captured | not captured | ['Björnsson_2011:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_naproxen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Calvo_1979` / `Calvo_1979::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:21 UTC</sub>
