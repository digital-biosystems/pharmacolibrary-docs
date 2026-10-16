<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pembrolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_pembrolizumab/&quot;},{&quot;label&quot;:&quot;Shang_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pembrolizumab — `Pembrolizumab_Shang2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — pembrolizumab: Q 0.795 L/Day, V2 4.06 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pembrolizumab, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022)
  ·  DOI: [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372)

<div class="pk-model-meta" hidden drug="pembrolizumab" model-id="Pembrolizumab_Shang2022_reference" status="rejected" stale="false" population="patients with multiple tumor types" measured-compound="pembrolizumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Q (L/Day) | `Q30` · Q | 0.795 | L/Day | 9.201388888888889e-09 | [l] / [d] | not captured | exact (1.0) | Shang_2022_table_3:row8:col5, Shang_2022_table_3:row9:col5, Shang_2022_table_3:row10:col5 | — | not captured |
| VP(L) | `Q64` · V2 | 4.06 | L | 0.004059999999999999 | [l] | not captured | exact (1.0) | Shang_2022_table_3:row8:col7, Shang_2022_table_3:row9:col7, Shang_2022_table_3:row10:col7 | — | not captured |
| VC | `Q900` · VC | 3.48 | L | 0.00348 | not captured | not captured | not captured (not captured) | Shang_2022_table_3:row8:col6, Shang_2022_table_3:row9:col6, Shang_2022_table_3:row10:col6, Shang_2022_table_3:row11:col6 | — | not captured |
| CL | `Q900` · CL | 0.22 | L/Day | 2.5462962962962966e-09 | not captured | not captured | not captured (not captured) | Shang_2022_table_3:row8:col4, Shang_2022_table_3:row9:col4, Shang_2022_table_3:row10:col4, Shang_2022_table_3:row11:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL(L/Day) | Q22 | not captured | exact |
| VC(L) | Q63 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pharmacokinetic parameters and covariates relationships' — extend the ontology if this is a real PK parameter (source ['Shang_2022_table_3:row8:col8', 'Shang_2022_table_3:row8:col9', 'Shang_2022_table_3:row9:col8', 'Shang_2022_table_3:row9:col9', 'Shang_2022_table_3:row10:col8', 'Shang_2022_table_3:row10:col9', 'Shang_2022_table_3:row11:col8', 'Shang_2022_table_3:row11:col9'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pembrolizumab
- bound model equation to Q63 (V1): VC = 3.63 * (BBWT/80)^0.597 * (e/0.152)SEX
- bound model equation to Q22 (CL): CL = 0.22 *(BBWT/76.8)^0.578* (ALB/39.6)-0.907 * (BSLD/89.6)^00872* (eGFR/88.47)^0.135* [ (1 – 0.152) if female ]* [ (1+ 0.145) if NSCLC ]* [ (1+0.0739) if baseline ECOG numeric=1 ]* [ (1+0.140) if IPI=prior treatment ]
- Q63 (V1) is equation-defined: value moved to equation-variable 'VC(L)'; equation kept verbatim
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL(L/Day)'; equation kept verbatim
- molar mass: none found for 'pembrolizumab' — its concentrations stay mass-only

**Extraction notes:**
- table T4: no_numeric_grid
- table T4: ragged_grid
- final table T4: no supported point estimates; targeted recovery unresolved
- transposed table Shang_2022_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (85 record(s))
- LLM selected parameter table(s) 3
- captured model equation VC = 3.63 * (BBWT/80)^0.597 * (e/0.152)SEX
- captured model equation CL = 0.22 *(BBWT/76.8)^0.578* (ALB/39.6)-0.907 * (BSLD/89.6)^00872* (eGFR/88.47)^0.135* [ (1 – 0.152) if female ]* [ (1+ 0.145) if NSCLC ]* [ (1+0.0739) if baseline ECOG numeric=1 ]* [ (1+0.140) if IPI=prior treatment ]

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` | not captured | 0.703 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.795 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 6.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 4.06 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 2.78 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pembrolizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pembrolizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Shang_2022_table_3:row8:col4', 'Shang_2022_table_3:row9:col4', 'Shang_2022_table_3:row10:col4', 'Shang_2022_table_3:row11:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Shang_2022_table_3:row8:col5', 'Shang_2022_table_3:row9:col5', 'Shang_2022_table_3:row10:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Shang_2022_table_3:row8:col6', 'Shang_2022_table_3:row9:col6', 'Shang_2022_table_3:row10:col6', 'Shang_2022_table_3:row11:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Shang_2022_table_3:row8:col7', 'Shang_2022_table_3:row9:col7', 'Shang_2022_table_3:row10:col7'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.06 L | not captured | not captured | ['Shang_2022_table_3:row8:col7', 'Shang_2022_table_3:row9:col7', 'Shang_2022_table_3:row10:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_pembrolizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Shang_2022` / `Shang_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:55 UTC</sub>
