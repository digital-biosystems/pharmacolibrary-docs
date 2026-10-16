<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sabatolimab&quot;,&quot;href&quot;:&quot;drugs/drug_sabatolimab/&quot;},{&quot;label&quot;:&quot;Xu_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sabatolimab — `Sabatolimab_Xu2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax, Km and equation variable), so that value has no SI equivalent. Extracted — sabatolimab: CL 0.0103 L/h, V 3.59 L, Q 0.0353 L/h, V2 2.38 L, Vmax 0.0197 μg/mL/h, Km 0.074 μg/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sabatolimab, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Xu S et al., Sabatolimab (MBG453) model-informed dru…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12962](https://doi.org/10.1002/psp4.12962)

<div class="pk-model-meta" hidden drug="sabatolimab" model-id="Sabatolimab_Xu2023_reference" status="rejected" stale="false" population="patients with solid tumors and hematologic malignancies" measured-compound="sabatolimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.0103 | L/h | 2.861111111111111e-09 | [l] / [h] | not captured | exact (1.0) | psp412962-tbl-0001:row1:col3 | — | 0.473 (None% RSE) |
| V | `Q61` · V | 3.59 | L | 0.00359 | [l] | not captured | exact (1.0) | psp412962-tbl-0001:row2:col3 | — | 0.23 (None% RSE) |
| Q | `Q30` · Q | 0.0353 | L/h | 9.805555555555555e-09 | [l] / [h] | not captured | exact (1.0) | psp412962-tbl-0001:row3:col3 | — | not captured |
| V2 | `Q64` · V2 | 2.38 | L | 0.0023799999999999997 | [l] | not captured | exact (1.0) | psp412962-tbl-0001:row4:col3 | — | 0.338 (None% RSE) |
| V m | `Q66` · Vmax | 0.0197 | μg/mL/h | not captured | [µg] / [[h] · [ml]] | not captured | special_case (0.95) | psp412962-tbl-0001:row5:col3 | — | 0.641 (None% RSE) |
| K m | `Q1` · Km | 0.074 | μg/mL | not captured | [µg] / [ml] | not captured | space_fold (0.95) | psp412962-tbl-0001:row6:col3 | — | not captured |
| Corr_V_C L | `Q900` · equation variable | 0.634 | – | not captured | [-] | not captured | llm (0.6) | psp412962-tbl-0001:row11:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V m' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_unknown: '–' (equation variable)
- dropped duplicate Q900 ('a', value '1.41') — already have one for this compound
- dropped duplicate Q900 ('b', value '0.19') — already have one for this compound
- 'β CL,HASPDR' is a β covariate effect on CL,H, not Q22 (llm_confirmed link set aside)
- dropped unlinked row (NIL): 'β CL,HASPDR' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row14:col3'])
- 'β CL,AML' is a β covariate effect on CL, not Q22 (llm_confirmed link set aside)
- dropped unlinked row (NIL): 'β CL,AML' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row15:col3'])
- 'β CL,CMML' is a β covariate effect on CL, not Q22 (llm_confirmed link set aside)
- dropped unlinked row (NIL): 'β CL,CMML' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row16:col3'])
- 'β CL,MDS' is a β covariate effect on CL, not Q22 (llm_confirmed link set aside)
- dropped unlinked row (NIL): 'β CL,MDS' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row17:col3'])
- 'β CL,WT0' is a β covariate effect on CL, not Q22 (llm_confirmed link set aside)
- dropped unlinked row (NIL): 'β CL,WT0' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row18:col3'])
- 'β V,WT0' is a β covariate effect on V, not Q31 (llm link set aside)
- dropped unlinked row (NIL): 'β V,WT0' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row19:col3'])
- 'β V2,WT0' is a β covariate effect on V2, not Q64 (llm_confirmed link set aside)
- dropped unlinked row (NIL): 'β V2,WT0' — extend the ontology if this is a real PK parameter (source ['psp412962-tbl-0001:row20:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sabatolimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'sabatolimab' — its concentrations stay mass-only

**Extraction notes:**
- table psp412962-tbl-0001: unbound_uncertainty
- table psp412962-tbl-0001: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | sabatolimab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sabatolimab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412962-tbl-0001:row6:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412962-tbl-0001:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412962-tbl-0001:row3:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412962-tbl-0001:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412962-tbl-0001:row4:col3'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | μg/mL/h | not captured | not captured | ['psp412962-tbl-0001:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0103 | not captured | not captured | ['psp412962-tbl-0001:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0103 L/h | not captured | not captured | ['psp412962-tbl-0001:row1:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.59 L | not captured | not captured | ['psp412962-tbl-0001:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.38 L | not captured | not captured | ['psp412962-tbl-0001:row4:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sabatolimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Xu_2023` / `Xu_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:11 UTC</sub>
