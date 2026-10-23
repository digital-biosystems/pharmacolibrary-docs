<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;delapril&quot;,&quot;href&quot;:&quot;drugs/drug_delapril/&quot;},{&quot;label&quot;:&quot;Onoyama_1988 \u00b7 metabolite_1_m_1&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# delapril — `Delapril_Onoyama1988_metabolite_1_m_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:26 UTC (Rejected), but the paper was screened again on 2026-10-07 05:38 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The delapril record was rejected because it reports only non-compartmental exposure metrics for metabolite M-1 (Cmax 1215 ng/ml, tmax 1.41 hr, t1/2 1.22 hr, AUC 3150 ng·hr/ml) with no distribution volume and no clearance, and its three metabolites are unlinked to the dose.

<div class="pk-model-meta" hidden drug="delapril" model-id="Delapril_Onoyama1988_metabolite_1_m_1" status="rejected" stale="true" population="adults with normal and deteriorated kidney function" measured-compound="M-1 (CV-3317-COOH)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Onoyama K, Nanishi F, Okuda S, Oh Y, Fujishima M, Tateno M et al. Pharmacokinetics of a new angiotensin I converting enzyme inhibitor (delapril) in patients with deteriorated kidney function and in normal control subjects. Clinical pharmacology and therapeutics 43(3):242–249 (1988).
  ·  DOI: [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27)

## Population and dosing

**Population:** adults with normal renal function or chronic renal failure (slight or marked deterioration) · condition chronic renal failure / renal impairment · age group adult · n = 22.

**Dosing:** 60 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed delapril, measured M-1 (CV-3317-COOH).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/ml) | Cmax | 1215 | ng/ml |
| tmax (hr) | tmax | 1.41 | hr |
| t1/2 (hr) | t1/2z | 1.22 | hr |
| AUC (0-24) (ng · hr/ml) | AUC | 3150 | ng · hr/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The delapril record was rejected because it reports only non-compartmental exposure metrics for metabolite M-1 (Cmax 1215 ng/ml, tmax 1.41 hr, t1/2 1.22 hr, AUC 3150 ng·hr/ml) with no distribution volume and no clearance, and its three metabolites are unlinked to the dose.**

No volume or clearance — not a compartmental population PK model. The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. The three metabolites formed from delapril (M-1 CV-3317-COOH, M-2 DKP-COOH, M-3 CV-3317-(5-OH)-COOH) are formed in the central compartment but carry no formation-rate parameters, so they are unlinked metabolites with no quantified path from the dose. Additionally, a reported unit (ng·hr/ml for the AUC of 3150) could not be converted to SI, so that parameter reached the model build without an SI value. Extracted — M-1 (CV-3317-COOH): Cmax 1.22e+03 ng/ml, tmax 1.41 hr, t1/2z 1.22 hr, AUC 3.15e+03 ng · hr/ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has delapril (cv-3317) → m-1 (cv-3317-cooh) (metabolism); delapril (cv-3317) → m-2 (dkp-cooh) (metabolism); delapril (cv-3317) → m-3 (cv-3317-(5-oh)-cooh) (metabolism), the second reading delapril → m-1 (metabolism); delapril → m-2 (metabolism); delapril → m-3 (metabolism); it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/ml) | `Q32` · Cmax | 1215 | ng/ml |  |  | ng/ml | exact (1) | Onoyama_1988_table_3:row1:col1, Onoyama_1988_table_3:row1:col2, Onoyama_1988_table_3:row1:col3 |
| tmax (hr) | `Q56` · tmax | 1.41 | hr | 5076 | s | h | exact (1) | Onoyama_1988_table_3:row2:col1, Onoyama_1988_table_3:row2:col2, Onoyama_1988_table_3:row2:col3 |
| t1/2 (hr) | `Q57` · t1/2z | 1.22 | hr | 4392 | s | h | exact (1) | Onoyama_1988_table_3:row3:col1, Onoyama_1988_table_3:row3:col2 |
| AUC (0-24) (ng · hr/ml) | `Q88` · AUC | 3150 | ng · hr/ml |  |  | (h·ng)/ml | space_fold (0.95) | Onoyama_1988_table_3:row4:col1, Onoyama_1988_table_3:row4:col2, Onoyama_1988_table_3:row4:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=M-1 (CV-3317-COOH)
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'metabolite 1 (m-1)' subgroup of Onoyama_1988 (paper reports 4 populations: metabolite 1 (m-1), metabolite 2 (m-2) nrf, metabolite 2 (m-2) srf, metabolite 3 (m-3))
- row roles: 4 per-group rows of M-1 (CV-3317-COOH) summary_statistic but 4 reference group(s) — kept as printed
- row roles: 4 per-group rows of M-2 (DKP-COOH) summary_statistic but 4 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged parent→M-1 (CV-3317-COOH) ×16, parent→M-2 (DKP-COOH) ×20
- molar mass: no plausible PubChem entry for 'M-2 (DKP-COOH)' ('delaprilat diketopiperazine') — left in mass units
- molar mass: no plausible PubChem entry for 'M-3 (CV-3317-(5-OH)-COOH)' ('5-hydroxy delaprilat') — left in mass units
- molar mass: none found for 'M-2 (DKP-COOH)' — its concentrations stay mass-only
- molar mass: none found for 'M-3 (CV-3317-(5-OH)-COOH)' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 5
- unparsed cell Onoyama_1988_table_3:row1:col5 = '929 ± 145*'
- unparsed cell Onoyama_1988_table_3:row1:col6 = '780 ± 118*'
- unparsed cell Onoyama_1988_table_3:row2:col6 = '2.30 ± 0.17*'
- unparsed cell Onoyama_1988_table_3:row3:col3 = '2.33 ± 0.35*'
- unparsed cell Onoyama_1988_table_3:row3:col5 = '1.90 ± 0.29*'
- unparsed cell Onoyama_1988_table_3:row3:col6 = '3.44 ± 0.81*'
- unparsed cell Onoyama_1988_table_3:row4:col5 = '4225 ± 938*'
- unparsed cell Onoyama_1988_table_3:row4:col6 = '5983 ± 1523*'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['delapril (cv-3317)', 'm-1 (cv-3317-cooh)', 'metabolism'], ['delapril (cv-3317)', 'm-2 (dkp-cooh)', 'metabolism'], ['delapril (cv-3317)', 'm-3 (cv-3317-(5-oh)-cooh)', 'metabolism']] | [['delapril', 'm-1', 'metabolism'], ['delapril', 'm-2', 'metabolism'], ['delapril', 'm-3', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[auc (0-24)]` | 3150 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 1215 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 1.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 1.41 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Onoyama_1988_table_3:row1:col1', 'Onoyama_1988_table_3:row1:col2', 'Onoyama_1988_table_3:row1:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Onoyama_1988_table_3:row2:col1', 'Onoyama_1988_table_3:row2:col2', 'Onoyama_1988_table_3:row2:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Onoyama_1988_table_3:row3:col1', 'Onoyama_1988_table_3:row3:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Onoyama_1988_table_3:row4:col1', 'Onoyama_1988_table_3:row4:col2', 'Onoyama_1988_table_3:row4:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdelapril%5D%20Delapril_Onoyama1988_metabolite_1_m_1&body=Drug%3A%20delapril%0ARecord%3A%20Delapril_Onoyama1988_metabolite_1_m_1%0APaper%3A%20Onoyama_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_delapril/Delapril_Onoyama1988_metabolite_1_m_1%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:38 UTC</sub>
