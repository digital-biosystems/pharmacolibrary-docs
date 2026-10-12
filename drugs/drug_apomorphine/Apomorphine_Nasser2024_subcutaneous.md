<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;apomorphine&quot;,&quot;href&quot;:&quot;drugs/drug_apomorphine/&quot;},{&quot;label&quot;:&quot;Nasser_2024 \u00b7 subcutaneous&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apomorphine — `Apomorphine_Nasser2024_subcutaneous`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model was rejected because the molecular weight parameter for apomorphine has a dimension mismatch due to its reported unit of mg.**

The molecular weight parameter for apomorphine is listed with a value of 7.34 and a unit of mg. This unit could not be converted to standard SI units. Consequently, the structural parameter failed the dimension check, leading to the rejection. Extracted — apomorphine: MW 7.34 mg, AUCt 1 mg, tmax 1 min, CL/F 191 L/h, V/F 153 L, kabs 14.9 h−1, Fab 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has apomorphine, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Nasser A et al., Model-based comparison of subcutaneous…, Journal of pharmacokinetics… (2024)
  ·  DOI: [10.1007/s10928-024-09914-x](https://doi.org/10.1007/s10928-024-09914-x)

<div class="pk-model-meta" hidden drug="apomorphine" model-id="Apomorphine_Nasser2024_subcutaneous" status="rejected" stale="false" population="hypothetical subjects" measured-compound="apomorphine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 4 | `Q374` · MW | 7.34 | mg | not captured | [mg] | not captured | llm (0.6) | Tab4:row5:col1, Tab4:row5:col2, Tab4:row9:col1, Tab4:row9:col2, Tab4:row13:col1, Tab4:row13:col2, Tab4:row17:col2, Tab4:row21:col1, Tab4:row21:col2 | — | not captured |
| AUEC0-90 | `Q19` · AUCt | 1 | mg | not captured | [mg] | not captured | llm (0.6) | Tab4:row10:col1, Tab4:row10:col2 | — | not captured |
| Time to maximal response, min | `Q56` · tmax | 1 | min | 60.0 | [min] | not captured | llm_corrected (0.6) | Tab4:row18:col1, Tab4:row18:col2 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 191 | L/h | 5.305555555555556e-05 | [l] / [h] | not captured | exact (1.0) | Nasser_2024_table_1:row0:col1 | — | not captured |
| V/F (L) | `Q76` · V/F | 153 | L | 0.153 | [l] | not captured | exact (1.0) | Nasser_2024_table_1:row1:col1 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 14.9 | h−1 | 0.004138888888888889 | [1] / [h] | not captured | exact (1.0) | Nasser_2024_table_1:row2:col1 | — | not captured |
| F (%) | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Nasser_2024_table_1:row5:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Time to response, min' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col1', 'Tab4:row2:col2'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row7:col1', 'Tab4:row7:col2', 'Tab4:row11:col1', 'Tab4:row11:col2', 'Tab4:row15:col2', 'Tab4:row19:col1', 'Tab4:row19:col2'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col1', 'Tab4:row4:col2', 'Tab4:row8:col1', 'Tab4:row8:col2', 'Tab4:row12:col1', 'Tab4:row12:col2', 'Tab4:row16:col2', 'Tab4:row20:col1', 'Tab4:row20:col2'])
- unit_dimension_mismatch: '4' → Q374 (unit '[mass]' vs ontology '[mass] / [substance]') — route to review
- dropped unlinked row (NIL): 'Duration of response, min' — extend the ontology if this is a real PK parameter (source ['Tab4:row6:col1', 'Tab4:row6:col2'])
- unit_dimension_mismatch: 'AUEC0-90' → Q19 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'Maximal response' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row14:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apomorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'subcutaneous' subgroup of Nasser_2024 (paper reports 2 populations: subcutaneous, sublingual)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row14:col2 = '− 6.05 ± 3.13'
- unparsed cell Tab4:row14:col4 = '− 7.07 ± 3.47'
- unparsed cell Tab4:row15:col1 = '− 9.12 ± 4.64'
- unparsed cell Tab4:row15:col3 = '− 9.28 ± 4.85'
- unparsed cell Tab4:row16:col1 = '− 14.46 ± 4.97'
- unparsed cell Tab4:row16:col3 = '− 12.50 ± 5.31'
- unparsed cell Tab4:row17:col1 = '− 17.48 ± 4.71'
- unparsed cell Tab4:row17:col3 = '− 14.83 ± 5.46'
- companion parameter table 1 transcribed (10 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[4]` | 7.34 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[4]` | not captured | 7.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-90]` | not captured | 224.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auec0-90]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 191 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 191 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 5.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 14.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 14.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to maximal response]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to response]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 153 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 153 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | apomorphine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | apomorphine | unknown | mismatch |

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
| C5_dimension_Q19 | fail | [mass] | mg | not captured | not captured | ['Tab4:row10:col1', 'Tab4:row10:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nasser_2024_table_1:row0:col1'] |
| C5_dimension_Q374 | fail | [mass] | mg | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row9:col1', 'Tab4:row9:col2', 'Tab4:row13:col1', 'Tab4:row13:col2', 'Tab4:row17:col2', 'Tab4:row21:col1', 'Tab4:row21:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Nasser_2024_table_1:row2:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab4:row18:col1', 'Tab4:row18:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Nasser_2024_table_1:row1:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 191 L/h | not captured | not captured | ['Nasser_2024_table_1:row0:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 153 L | not captured | not captured | ['Nasser_2024_table_1:row1:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_apomorphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nasser_2024` / `Nasser_2024::subcutaneous`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:09 UTC</sub>
