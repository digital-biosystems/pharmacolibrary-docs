<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;butorphanol&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/&quot;},{&quot;label&quot;:&quot;Saeed_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# butorphanol — `Butorphanol_Saeed2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has butorphanol, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:22.832818+00:00) predates the upstream re-run (2026-10-07 04:53:41.353128+00:00). Current validate status: `rejected`.

## Citation
Saeed AM et al., Butorphanol Pharmacokinetics Across Spe…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70293](https://doi.org/10.1002/psp4.70293)

<div class="pk-model-meta" hidden drug="butorphanol" model-id="Butorphanol_Saeed2026_reference" status="rejected" stale="true" population="13 species" measured-compound="butorphanol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| f t1 | `Q900` · equation variable | 0.708 | units | not captured | [units] | 4.1 | llm (0.6) | tab_1:row2:col2, tab_1:row2:col3 | — | not captured |
| K p | `Q410` · Kp | 3.55 | units | not captured | [units] | 5.3 | space_fold (0.95) | tab_1:row7:col2, tab_1:row7:col3 | — | not captured |
| f d1, horse | `Q310` · D1 | 0.0191 | units | not captured | [units] | 18.5 | llm_confirmed (0.6) | tab_1:row8:col2, tab_1:row8:col3 | — | not captured |
| k a, SC (h -1 ) | `Q49` · kabs | 1.96 | h -1 | 0.0005444444444444444 | [1] / [h] | not captured | llm (0.6) | tab_1:row12:col3 | — | not captured |
| theta_kabs_im | `Q900` · theta_kabs_im | 3.48 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row10:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate (cv%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'f t2' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col2', 'tab_1:row3:col3'])
- dropped unlinked row (NIL): 'f d1' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col2', 'tab_1:row4:col3'])
- dropped duplicate Q900 ('f d2', value '0.628') — already have one for this compound
- dropped unlinked row (NIL): 'f dtotal' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col2', 'tab_1:row6:col3'])
- unit_dimension_mismatch: 'K p' → Q410 (unit '[luminosity] / [length] ** 2' vs ontology 'dimensionless') — route to review
- unit_dimension_mismatch: 'f d1, horse' → Q310 (unit '[luminosity] / [length] ** 2' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'K p,horse' → Q410 (unit '[luminosity] / [length] ** 2' vs ontology 'dimensionless') — route to review
- dropped duplicate Q410 ('K p,horse', value '1.10') — already have one for this compound
- dropped unlinked row (NIL): 'F IM' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col3'])
- dropped unlinked row (NIL): 'F SC' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col3'])
- dropped duplicate Q49 ('k a,IN (h -1 )', value '0.868') — already have one for this compound
- dropped unlinked row (NIL): 'F IN' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=butorphanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row2:col1 = 'Fraction of total tissue volume for tissue 1'
- unparsed cell tab_1:row3:col1 = 'Fraction of total tissue volume for tissue 2'
- unparsed cell tab_1:row4:col1 = 'Fraction of Q co for tissue 1'
- unparsed cell tab_1:row5:col1 = 'Fraction of Q co for tissue 2'
- unparsed cell tab_1:row6:col1 = 'Total sum of fractional distribution parameters (f d1 + f d2 + f d3 )'
- unparsed cell tab_1:row8:col1 = 'Fraction of Q co for tissue 1 for horse'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f d1, horse]` | 0.0191 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f d1, horse]` | not captured | 0.0191 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f sc]` | not captured | 0.898 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f t1]` | 0.708 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a, sc]` | 1.96 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a, sc]` | not captured | 1.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k p]` | 3.55 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k p]` | not captured | 3.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_im]` | not captured | 0.915 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_im]` | 3.48 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_im]` | not captured | 3.48 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q54_im]` | not captured | 159.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | butorphanol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | butorphanol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q310 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tab_1:row8:col2', 'tab_1:row8:col3'] |
| C5_dimension_Q410 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tab_1:row7:col2', 'tab_1:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row12:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_butorphanol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Saeed_2026` / `Saeed_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:53 UTC</sub>
