<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;ibritumomab tiuxetan (90Y)&quot;,&quot;href&quot;:&quot;drugs/drug_ibritumomab_tiuxetan_90y/&quot;},{&quot;label&quot;:&quot;Morschhauser_2018 \u00b7 f2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibritumomab tiuxetan (90Y) — `IbritumomabTiuxetan90y_Morschhauser2018_f2`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.688), gpt-oss:120b (not confirmed, agreement 0.647). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Cmax, AUC and AUCt), so that value has no SI equivalent. Extracted — ibritumomab tiuxetan 90y: Cmax 0.308 µg.mL−1, t1/2z 83.6 h, MRT 114 h, CL 1.03 ml.min, AUC 1.71e+03 µg.min.mL−1, k12 0.033 min−1, k21 0.516 min−1, AUCt 262 µg.min.mL−1, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ibritumomab_tiuxetan_90y, the second reading ibritumomab tiuxetan; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `ibritumomab tiuxetan`, measured `ibritumomab_tiuxetan_90y`.

## Citation
Morschhauser F et al., A new pharmacokinetic model for 90Y-ibr…, Scientific reports (2018)
  ·  DOI: [10.1038/s41598-018-33160-0](https://doi.org/10.1038/s41598-018-33160-0)

<div class="pk-model-meta" hidden drug="ibritumomab tiuxetan (90Y)" model-id="IbritumomabTiuxetan90y_Morschhauser2018_f2" status="rejected" stale="false" population="patients with follicular lymphoma" measured-compound="ibritumomab_tiuxetan_90y" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax* (µg.mL−1) | `Q32` · Cmax | 0.308 | µg.mL−1 | not captured | [µg] / [ml] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row1:col1, Morschhauser_2018_table_3:row1:col3, Morschhauser_2018_table_3:row7:col1, Morschhauser_2018_table_3:row7:col3, Morschhauser_2018_table_3:row14:col1, Morschhauser_2018_table_3:row14:col3, Morschhauser_2018_table_3:row21:col1, Morschhauser_2018_table_3:row21:col3 | — | not captured |
| T1/2* (h) | `Q57` · t1/2z | 83.6 | h | 300960.0 | [h] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row2:col1, Morschhauser_2018_table_3:row2:col3 | — | not captured |
| MRT* (h) | `Q53` · MRT | 114.1 | h | 410760.0 | [h] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row3:col1, Morschhauser_2018_table_3:row3:col3, Morschhauser_2018_table_3:row10:col1, Morschhauser_2018_table_3:row10:col3, Morschhauser_2018_table_3:row17:col1, Morschhauser_2018_table_3:row17:col3, Morschhauser_2018_table_3:row24:col1, Morschhauser_2018_table_3:row24:col3 | — | not captured |
| Clearance* (ml.min) | `Q22` · CL | 1.03 | ml.min | 1.7166666666666665e-08 | [min] · [ml] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row4:col1, Morschhauser_2018_table_3:row4:col3 | — | not captured |
| AUC Total* (µg.min.mL−1) | `Q88` · AUC | 1708.1 | µg.min.mL−1 | not captured | [[min] · [µg]] / [ml] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row5:col1, Morschhauser_2018_table_3:row5:col3 | — | not captured |
| k12* (min−1) | `Q301` · k12 | 0.033 | min−1 | 0.00055 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row8:col3 | — | not captured |
| k21* (min−1) | `Q302` · k21 | 0.516 | min−1 | 0.0086 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row9:col3 | — | not captured |
| AUCcum 4d* (µg.min.mL−1) | `Q19` · AUCt | 261.98 | µg.min.mL−1 | not captured | [[min] · [µg]] / [ml] | not captured | llm (0.6) | Morschhauser_2018_table_3:row11:col1, Morschhauser_2018_table_3:row11:col3, Morschhauser_2018_table_3:row18:col1, Morschhauser_2018_table_3:row18:col3, Morschhauser_2018_table_3:row25:col1, Morschhauser_2018_table_3:row25:col3 | — | not captured |
| k13* (min−1) | `Q303` · k13 | 0.738 | min−1 | 0.0123 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row15:col3, Morschhauser_2018_table_3:row22:col3 | — | not captured |
| k31* (min−1) | `Q304` · k31 | 0.167 | min−1 | 0.0027833333333333334 | [1] / [min] | not captured | llm_confirmed (0.6) | Morschhauser_2018_table_3:row16:col3, Morschhauser_2018_table_3:row23:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Blood' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row0:col3'])
- unit_dimension_mismatch: 'Clearance* (ml.min)' → Q22 (unit '[length] ** 3 * [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Vertebrae L2-L4' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row6:col3'])
- dropped duplicate Q19 ('AUCcum 7d* (µg.min.mL−1)', value '558.03') — already have one for this compound
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row13:col3'])
- dropped unlinked row (NIL): 'Spleen' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row20:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ibritumomab_tiuxetan_90y
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'f2' subgroup of Morschhauser_2018 (paper reports 5 populations: f1, f2, liver, lumbar vertebrae l2-l4, spleen)
- molar mass: none found for 'ibritumomab_tiuxetan_90y' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Morschhauser_2018_table_3:row8:col1 = '1.11 E-4 (1.31 E-4)'
- unparsed cell Morschhauser_2018_table_3:row8:col2 = '0.60 E-4 (0.55 E-4)'
- unparsed cell Morschhauser_2018_table_3:row9:col1 = '1.05 E-4 (0.55 E-4)'
- unparsed cell Morschhauser_2018_table_3:row9:col2 = '0.96 E-4 (0.57 E-4)'
- unparsed cell Morschhauser_2018_table_3:row15:col1 = '1.80 E-4 (0.60 E-4)'
- unparsed cell Morschhauser_2018_table_3:row15:col2 = '2.05 E-4 (1.70 E-4)'
- unparsed cell Morschhauser_2018_table_3:row16:col1 = '2.32 E-4 (1.07 E-4)'
- unparsed cell Morschhauser_2018_table_3:row16:col2 = '1.77 E-4 (0.25 E-4)'
- unparsed cell Morschhauser_2018_table_3:row22:col1 = '2.11 E-4 (1.39 E-4)'
- unparsed cell Morschhauser_2018_table_3:row22:col2 = '1.17 E-4 (0.52 E-4)'
- unparsed cell Morschhauser_2018_table_3:row23:col1 = '1.26 E-4 (0.50 E-4)'
- unparsed cell Morschhauser_2018_table_3:row23:col2 = '1.64 E-4 (0.40 E-4)'
- companion parameter table 3 transcribed (69 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.688 (11/16 fields) | 5 |
| `gpt-oss:120b` | not confirmed | 0.647 (11/17 fields) | 6 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auccum 4d*]` | 261.98 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[blood in corresponding volume*]` | not captured | 81.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[liver]` | not captured | 489.61 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ibritumomab_tiuxetan_90y | ibritumomab tiuxetan | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ibritumomab_tiuxetan_90y | 111In-ibritumomab tiuxetan | mismatch |
| `gpt-oss:120b` | `parameters[auccum 4d*]` | 261.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auccum 7d*]` | not captured | 558.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[blood]` | not captured | 4064.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver]` | not captured | 459.72 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ibritumomab_tiuxetan_90y | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ibritumomab_tiuxetan_90y | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row11:col1', 'Morschhauser_2018_table_3:row11:col3', 'Morschhauser_2018_table_3:row18:col1', 'Morschhauser_2018_table_3:row18:col3', 'Morschhauser_2018_table_3:row25:col1', 'Morschhauser_2018_table_3:row25:col3'] |
| C5_dimension_Q22 | fail | [length] ** 3 * [time] | ml.min | not captured | not captured | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row8:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row9:col3'] |
| C5_dimension_Q303 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row15:col3', 'Morschhauser_2018_table_3:row22:col3'] |
| C5_dimension_Q304 | pass | 1 / [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row16:col3', 'Morschhauser_2018_table_3:row23:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row1:col1', 'Morschhauser_2018_table_3:row1:col3', 'Morschhauser_2018_table_3:row7:col1', 'Morschhauser_2018_table_3:row7:col3', 'Morschhauser_2018_table_3:row14:col1', 'Morschhauser_2018_table_3:row14:col3', 'Morschhauser_2018_table_3:row21:col1', 'Morschhauser_2018_table_3:row21:col3'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row3:col1', 'Morschhauser_2018_table_3:row3:col3', 'Morschhauser_2018_table_3:row10:col1', 'Morschhauser_2018_table_3:row10:col3', 'Morschhauser_2018_table_3:row17:col1', 'Morschhauser_2018_table_3:row17:col3', 'Morschhauser_2018_table_3:row24:col1', 'Morschhauser_2018_table_3:row24:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row2:col1', 'Morschhauser_2018_table_3:row2:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Morschhauser_2018_table_3:row5:col1', 'Morschhauser_2018_table_3:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.03 | not captured | not captured | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0618 L/h | not captured | not captured | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ibritumomab_tiuxetan_90y/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Morschhauser_2018` / `Morschhauser_2018::f2`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 19:51 UTC</sub>
