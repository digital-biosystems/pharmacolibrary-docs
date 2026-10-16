<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir disoproxil&quot;,&quot;href&quot;:&quot;drugs/drug_tenofovir_disoproxil/&quot;},{&quot;label&quot;:&quot;Burns_2015 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tenofovir disoproxil — `TenofovirDisoproxil_Burns2015_base`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.211). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Tenofovir diphosphate is an orphan metabolite, and the intercompartmental clearance parameter uses a rate constant unit.**

The record defines tenofovir diphosphate as a metabolite, but the link from the parent tenofovir has an unknown relation type, making it an unreachable compartment. Additionally, the intercompartmental clearance parameter (Q) has a dimension mismatch, where a rate constant unit was applied to a clearance parameter. A unit for a reported parameter could not be converted to SI units. Extracted — tenofovir disoproxil: kabs 9.81 h−1, V1/F 404 L, Q 0.604 h−1, kel 0.13 h−1, tlag 0.5 h; tenofovir_diphosphate: kfm 0.017 h−1, kel 0.013 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tenofovir disoproxil fumarate, the second reading tenofovir_disoproxil; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-07 14:42:56.802805+00:00) predates the upstream re-run (2026-10-07 16:32:05.847711+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `tenofovir disoproxil fumarate`, measured `tenofovir`.

## Citation
Burns RN et al., Population pharmacokinetics of tenofovi…, Journal of clinical pharmac… (2015)
  ·  DOI: [10.1002/jcph.461](https://doi.org/10.1002/jcph.461)

<div class="pk-model-meta" hidden drug="tenofovir disoproxil" model-id="TenofovirDisoproxil_Burns2015_base" status="rejected" stale="true" population="healthy women" measured-compound="tenofovir" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (h−1) | `Q49` · kabs | 9.81 | h−1 | 0.002725 | [1] / [h] | not captured | exact (1.0) | jcph461-tbl-0001:row5:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 404.19 | L | 0.40419 | [l] | not captured | exact (1.0) | jcph461-tbl-0001:row6:col1 | — | not captured |
| K23 (h−1) | `Q30` · Q | 0.604 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | jcph461-tbl-0001:row8:col1 | — | not captured |
| K20 (h−1) | `Q47` · kel | 0.13 | h−1 | 3.611111111111111e-05 | [1] / [h] | not captured | exact (1.0) | jcph461-tbl-0001:row10:col1 | — | not captured |
| K24 (h−1) | `Q305` · kfm | 0.017 | h−1 | 4.722222222222222e-06 | [1] / [h] | not captured | exact (1.0) | jcph461-tbl-0001:row11:col1 | — | not captured |
| K40 (h−1) | `Q47` · kel | 0.013 | h−1 | 3.611111111111111e-06 | [1] / [h] | not captured | exact (1.0) | jcph461-tbl-0001:row12:col1 | — | not captured |
| Absorption lag (h) | `Q83` · tlag | 0.5 | h | 1800.0 | [h] | not captured | exact (1.0) | jcph461-tbl-0001:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Parameter | Q900 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('Obj Func', value '2586') — already have one for this compound
- dropped unlinked row (NIL): 'Condition #' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row3:col1'])
- unit_dimension_mismatch: 'K23 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K32 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('K32 (h−1)', value '0.37') — already have one for this compound
- dropped unlinked row (NIL): 'Proportional, TFV (%CV)' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row18:col1'])
- dropped unlinked row (NIL): 'Proportional, TFV‐DP (PBMC) (%CV)' — extend the ontology if this is a real PK parameter (source ['jcph461-tbl-0001:row19:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tenofovir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Burns_2015 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 16 linked by role; re-tagged parent→tenofovir ×21, parent→tenofovir-diphosphate ×8
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph461-tbl-0001:row5:col2 = '10.15 (1.08–45.4)'
- unparsed cell jcph461-tbl-0001:row5:col4 = '10.21 (1.04–45.29)'
- unparsed cell jcph461-tbl-0001:row6:col2 = '395.71 (26.02–495.50)'
- unparsed cell jcph461-tbl-0001:row6:col4 = '376.11 (28.5–475)'
- unparsed cell jcph461-tbl-0001:row7:col4 = '−1.78 (−3.37 to −0.16)'
- unparsed cell jcph461-tbl-0001:row8:col2 = '0.635 (0.392–13.3)'
- unparsed cell jcph461-tbl-0001:row8:col4 = '0.680 (0.411–12.92)'
- unparsed cell jcph461-tbl-0001:row9:col2 = '0.38 (0.229–0.923)'
- unparsed cell jcph461-tbl-0001:row9:col4 = '0.398 (0.238–0.848)'
- unparsed cell jcph461-tbl-0001:row10:col2 = '0.14 (0.098–1.85)'
- unparsed cell jcph461-tbl-0001:row10:col4 = '0.14 (0.10–1.51)'
- unparsed cell jcph461-tbl-0001:row11:col2 = '0.018 (0.009–0.569)'
- unparsed cell jcph461-tbl-0001:row11:col4 = '0.019 (0.009–0.537)'
- unparsed cell jcph461-tbl-0001:row12:col2 = '0.014 (0.009–0.052)'
- unparsed cell jcph461-tbl-0001:row12:col4 = '0.014 (0.009–0.052)'
- unparsed cell jcph461-tbl-0001:row13:col2 = '0.5 (0.005–0.685)'
- unparsed cell jcph461-tbl-0001:row13:col4 = '0.5 (0.005–0.665)'
- unparsed cell jcph461-tbl-0001:row14:col2 = '165.80 (1.64–269.79)'
- unparsed cell jcph461-tbl-0001:row14:col4 = '164.97 (1.60–271.83)'
- unparsed cell jcph461-tbl-0001:row15:col2 = '22.77 (2.45–32.18)'
- unparsed cell jcph461-tbl-0001:row15:col4 = '18.84 (0.19–29.11)'
- unparsed cell jcph461-tbl-0001:row16:col2 = '31.71 (6.43–51.84)'
- unparsed cell jcph461-tbl-0001:row16:col4 = '33.25 (12.09–51.68)'
- unparsed cell jcph461-tbl-0001:row17:col2 = '168.93 (57.51–616.05)'
- unparsed cell jcph461-tbl-0001:row17:col4 = '168.93 (57.51–616.05)'
- unparsed cell jcph461-tbl-0001:row18:col2 = '27.48 (22.70–31.62)'
- unparsed cell jcph461-tbl-0001:row18:col4 = '27.36 (22.95–31.71)'
- unparsed cell jcph461-tbl-0001:row19:col2 = '30.71 (27.12–35.16)'
- unparsed cell jcph461-tbl-0001:row19:col4 = '30.89 (27.08–35.11)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.211 (4/19 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag]` | not captured | 0.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag]` | 0.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k20]` | not captured | 0.13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k20]` | 0.13 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` | not captured | 0.604 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` | 0.604 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` | not captured | 0.017 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` | 0.017 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k40].parameter_id` | Q47 | Q305 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 9.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 9.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[parameter]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 404.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 404.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tenofovir disoproxil fumarate | tenofovir_disoproxil | mismatch |

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
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph461-tbl-0001:row6:col1'] |
| C5_dimension_Q30 | fail | 1 / [time] | h−1 | not captured | not captured | ['jcph461-tbl-0001:row8:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph461-tbl-0001:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph461-tbl-0001:row10:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph461-tbl-0001:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph461-tbl-0001:row5:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph461-tbl-0001:row13:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 404 L | not captured | not captured | ['jcph461-tbl-0001:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tenofovir_disoproxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Burns_2015` / `Burns_2015::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:32 UTC</sub>
