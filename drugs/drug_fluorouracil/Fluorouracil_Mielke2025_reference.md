<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Mielke_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Mielke2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The fluorouracil record was rejected because the parameter Q (401.7 L/h) is labelled 'Cardiac output' but its pharmacokinetic meaning is the apparent intercompartmental clearance between the central and peripheral compartments, a dimension mismatch on a structural parameter.**

In the 5-fluorouracil one-compartment model, Q carries the verbatim label 'Cardiac output (Qc) (L/h)' with value 401.7 L/h, but its meaning is the apparent intercompartmental clearance between the central and peripheral compartments, so the label and the pharmacokinetic meaning disagree in dimension. Additionally, one reported unit could not be converted to SI, so a parameter was left without an SI value. A second reader also recorded tissue-composition parameters (brain 1.45, fat 18.2, liver 1.8, skin 10.04) that are absent from this record, and disagreed on the dose compound and primary analyte fields, both read as 5-fluorouracil here. Extracted — fluorouracil: Q 402 L/h, fu 8, Vmax 1.22e+03 mg/h, Km 11.7 mg/L, CL 256 L/h, V 161 L, kabs 0.757 h−1, tlag 0.000552 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has 5-fluorouracil, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:28:39.672939+00:00) predates the upstream re-run (2026-10-07 16:59:45.327238+00:00). Current validate status: `rejected`.

## Citation
Mielke H et al., 5-Fluorouracil Toxicity: Revisiting the…, Pharmaceuticals (Basel, Swi… (2025)
  ·  DOI: [10.3390/ph18050653](https://doi.org/10.3390/ph18050653)

## Model component
<dbs-pgx drug="fluorouracil" model-id="Fluorouracil_Mielke2025_reference" status="rejected" stale="true" population="adult cancer patients" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cardiac output (Qc) (L/h) [47] | `Q30` · Q | 401.7 | L/h | 0.00011158333333333334 | L/h | not captured | llm (0.6) | Mielke_2025_table_1:row0:col1 | — | not captured |
| Protein binding (%) [49] | `Q46` · fu | 8 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Mielke_2025_table_1:row15:col1 | — | not captured |
| Vmax (mg/h) | `Q66` · Vmax | 1221.7 | mg/h | not captured | [mg] / [h] | not captured | special_case (0.95) | Mielke_2025_table_1:row27:col1 | — | not captured |
| Km (mg/L) | `Q1` · Km | 11.7 | mg/L | not captured | [mg] / [l] | not captured | exact (1.0) | Mielke_2025_table_1:row28:col1 | — | not captured |
| CL5FU (L/h) | `Q22` · CL | 256.0 | L/h | 7.11111111111111e-05 | L/h | not captured | review_gapfill (0.7) | Arshad_2020:review | — | not captured |
| volume | `Q61` · V | 0.2 | mL | 2e-07 | L | not captured | review_gapfill (0.7) | Hara_2026:review | — | not captured |
| Ka, Absorption rate constant | `Q49` · kabs | 0.757 | h-1 | 0.0002102777777777778 | 1/h | not captured | review_gapfill (0.7) | Bae_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'physiological data' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Body weight (bw) (kg)' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row1:col1'])
- dropped unlinked row (NIL): 'Fat' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row3:col1', 'Mielke_2025_table_1:row3:col2'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row4:col1', 'Mielke_2025_table_1:row4:col2'])
- dropped unlinked row (NIL): 'Brain' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row5:col1', 'Mielke_2025_table_1:row5:col2'])
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row6:col1', 'Mielke_2025_table_1:row6:col2'])
- dropped unlinked row (NIL): 'Muscle' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row7:col1', 'Mielke_2025_table_1:row21:col1'])
- dropped unlinked row (NIL): 'Skin' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row8:col1', 'Mielke_2025_table_1:row22:col1'])
- dropped unlinked row (NIL): 'Vessel-rich tissue (excluding red marrow)' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row9:col1', 'Mielke_2025_table_1:row9:col2', 'Mielke_2025_table_1:row23:col1'])
- dropped unlinked row (NIL): 'Skeleton' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row10:col1', 'Mielke_2025_table_1:row10:col2', 'Mielke_2025_table_1:row24:col1'])
- dropped unlinked row (NIL): 'Red marrow' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row11:col1', 'Mielke_2025_table_1:row11:col2', 'Mielke_2025_table_1:row25:col1'])
- dropped unlinked row (NIL): 'Log Ko/w [49]' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row13:col1'])
- dropped unlinked row (NIL): 'pKa [49]' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row14:col1'])
- dropped unlinked row (NIL): 'Fat/blood' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row17:col1'])
- dropped unlinked row (NIL): 'Liver/blood' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row18:col1'])
- dropped unlinked row (NIL): 'Brain/blood' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row19:col1'])
- dropped unlinked row (NIL): 'Kidney/blood' — extend the ontology if this is a real PK parameter (source ['Mielke_2025_table_1:row20:col1'])
- unit_dimension_mismatch: 'Vmax (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- implicit units: 'Cardiac output (Qc) (L/h) [47]' → L/h (from the paper text: "The parameter list explicitly states 'Cardiac output (Qc) (L/h) [47] = 401.7'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q22 (CL) from Arshad_2020's review values (primary lacked it)
- gap-filled Q61 (V) from Hara_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1
- unparsed cell Mielke_2025_table_1:row7:col2 = '0.40 × bw'
- unparsed cell Mielke_2025_table_1:row8:col2 = '0.0371 × bw'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (8/16 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.5 (6/12 fields) | 6 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl5fu]` | 256.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fat]` | not captured | 19.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka, absorption rate constant]` | 0.757 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[liver]` | not captured | 99.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[red marrow]` | not captured | 11.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[skin]` | not captured | 20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vessel-rich tissue]` | not captured | 44.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` | 0.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[brain]` | not captured | 1.45 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fat]` | not captured | 18.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver]` | not captured | 1.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[skin]` | not captured | 10.04 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | 5-fluorouracil | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 5-fluorouracil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Mielke_2025_table_1:row28:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Arshad_2020:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mielke_2025_table_1:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bae_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hara_2026:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['Mielke_2025_table_1:row27:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 256.0 | not captured | not captured | ['Arshad_2020:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 256 L/h | not captured | not captured | ['Arshad_2020:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | not captured | not captured | ['Hara_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluorouracil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mielke_2025` / `Mielke_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:59 UTC</sub>
