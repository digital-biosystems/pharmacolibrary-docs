<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07F&quot;,&quot;href&quot;:&quot;atc/C07F.md&quot;},{&quot;label&quot;:&quot;nifedipine&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/&quot;},{&quot;label&quot;:&quot;Kiriyama_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nifedipine_Fu2022_reference&quot;,&quot;label&quot;:&quot;Fu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/Nifedipine_Fu2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nifedipine — `Nifedipine_Kiriyama2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Nifedipine clearance of 1.35 mL/min and volume of 54.9 L were rejected as physiologically implausible for spontaneously hypertensive rats.

<div class="pk-model-meta" hidden drug="nifedipine" model-id="Nifedipine_Kiriyama2024_reference" status="rejected" stale="false" population="spontaneously hypertensive rats" measured-compound="nifedipine" parameterization="mechanistic" topology="1C"></div>

## Citation
Kiriyama A, Kimura S, Yamashita S. Exploring the multiple effects of nifedipine and captopril administration in spontaneously hypertensive rats through pharmacokinetic-pharmacodynamic analyses. Pharmacology research & perspectives 12(4):e1249 (2024).
  ·  DOI: [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249)

## Population and dosing

**Population:** spontaneously hypertensive rats · condition hypertension.

**Dosing:** 35, 70, 350, 1050 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1 | V | 54.9 | L |
| k10 | kel | 0.0218 | 1/min |
| k12 | k12 | 0.0121 | 1/min |
| k21 | k21 | 0.0165 | 1/min |
| AUC | AUC | 237 | ng*min/mL |
| t1/2 | t1/2z | 69.0 | min |
| CLtot | CL | 1.35 | mL/min |
| Vdss | Vss | 162 | mL |
| MRT | MRT | 82.8 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Nifedipine clearance of 1.35 mL/min and volume of 54.9 L were rejected as physiologically implausible for spontaneously hypertensive rats.**

The record lists a total clearance of 1.35 mL/min and a volume of distribution of 54.9 L, values that fall outside the expected physiological range for the rat population. A reported unit could not be converted to SI, so the parameter reached the review without a standardized value. A second reader disagreed with the extraction of the dose compound and primary analyte, marking them as unknown. Extracted — nifedipine: V 54.9 L, kel 0.0218 1/min, k12 0.0121 1/min, k21 0.0165 1/min, AUC 237 ng*min/mL, t1/2z 69 min, CL 1.35 mL/min, Vss 162 mL, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nifedipine, the second reading nifedipine and captopril; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 | `Q61` · V | 54.9 | L | 0.0549 | m3 | L | exact (1) | prp21249-tbl-0002:row2:col2, prp21249-tbl-0002:row2:col3 |
| k10 | `Q47` · kel | 0.0218 | 1/min | 0.0003633 | 1/s | 1/h | exact (1) | prp21249-tbl-0002:row3:col2, prp21249-tbl-0002:row3:col3 |
| k12 | `Q301` · k12 | 0.0121 | 1/min | 0.0002017 | 1/s | 1/h | exact (1) | prp21249-tbl-0002:row4:col2, prp21249-tbl-0002:row4:col3 |
| k21 | `Q302` · k21 | 0.0165 | 1/min | 0.000275 | 1/s | 1/h | exact (1) | prp21249-tbl-0002:row5:col2, prp21249-tbl-0002:row5:col3 |
| AUC | `Q88` · AUC | 237 | ng*min/mL |  |  | ng*min/mL | exact (1) | Kiriyama_2024_table_1:row3:col2, Kiriyama_2024_table_1:row3:col4, Kiriyama_2024_table_1:row3:col5, Kiriyama_2024_table_1:row3:col7 |
| t1/2 | `Q57` · t1/2z | 69.0 | min | 4140 | s | h | exact (1) | Kiriyama_2024_table_1:row4:col2, Kiriyama_2024_table_1:row4:col4, Kiriyama_2024_table_1:row4:col5, Kiriyama_2024_table_1:row4:col7 |
| CLtot | `Q22` · CL | 1.35 | mL/min | 2.25e-08 | m3/s | L/h | exact (1) | Kiriyama_2024_table_1:row5:col2, Kiriyama_2024_table_1:row5:col4, Kiriyama_2024_table_1:row5:col5, Kiriyama_2024_table_1:row5:col7 |
| Vdss | `Q65` · Vss | 162 | mL | 0.000162 | m3 | L | llm (0.6) | Kiriyama_2024_table_1:row6:col2, Kiriyama_2024_table_1:row6:col4, Kiriyama_2024_table_1:row6:col5, Kiriyama_2024_table_1:row6:col7 |
| MRT | `Q53` · MRT | 82.8 | min | 4968 | s | h | exact (1) | Kiriyama_2024_table_1:row7:col2, Kiriyama_2024_table_1:row7:col4, Kiriyama_2024_table_1:row7:col5, Kiriyama_2024_table_1:row7:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['prp21249-tbl-0002:row6:col2', 'prp21249-tbl-0002:row6:col3'])
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Kiriyama_2024_table_1:row2:col3', 'Kiriyama_2024_table_1:row2:col6'])
- implicit units: 'V1' → L (from the popPK convention: 'V1 is the volume of the central compartment. In population PK, volumes are conventionally expressed in liters (L). The v')
- implicit units: 'k10' → 1/min (from the paper text: "The text states that AUC is calculated in 'ng⋅min/mL' and the infusion period is 30 min. The relationship Vdss = CLtot/k")
- implicit units: 'k12' → 1/min (from the paper text: "Derived from the AUC unit 'ng⋅min/mL' stated in the text, which establishes minutes as the time unit for the PK analysis")
- implicit units: 'k21' → 1/min (from the paper text: "Derived from the AUC unit 'ng⋅min/mL' stated in the text, which establishes minutes as the time unit for the PK analysis")
- implicit units: 'AUC' → ng*min/mL (from the paper text: "The text explicitly states: 'For nifedipine, the AUC per dose during monotherapy and coadministration was 237 ± 85 and 1")
- implicit units: 't1/2' → min (from the paper text: "The AUC unit 'ng⋅min/mL' in the text indicates the time unit is minutes. The value 69.0 is consistent with a half-life i")
- implicit units: 'CLtot' → mL/min (from the paper text: "Consistent with the AUC unit 'ng⋅min/mL' and dose in mg. CL = Dose/AUC. If Dose is mg and AUC is ng*min/mL, CL is mL/min")
- implicit units: 'Vdss' → mL (from the paper text: 'Consistent with CL in mL/min and ke in 1/min. Vdss = CL/ke. 1.35 mL/min / 0.01 1/min = 135 mL. The value 162 is consiste')
- implicit units: 'MRT' → min (from the paper text: "MRT is a time parameter. Given the AUC unit 'ng⋅min/mL' and the consistency of other time parameters (t1/2) in minutes, ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nifedipine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp21249-tbl-0002:row3:col1 = '(min−1)'
- unparsed cell prp21249-tbl-0002:row4:col1 = '(min−1)'
- unparsed cell prp21249-tbl-0002:row5:col1 = '(min−1)'
- companion parameter table 1 transcribed (44 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.857 (12/14 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` |  | 1.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nifedipine | nifedipine and captopril | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kiriyama_2024_table_1:row5:col2', 'Kiriyama_2024_table_1:row5:col4', 'Kiriyama_2024_table_1:row5:col5', 'Kiriyama_2024_table_1:row5:col7'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['prp21249-tbl-0002:row4:col2', 'prp21249-tbl-0002:row4:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['prp21249-tbl-0002:row5:col2', 'prp21249-tbl-0002:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['prp21249-tbl-0002:row3:col2', 'prp21249-tbl-0002:row3:col3'] |
| C5_dimension_Q53 | pass | [time] |  | ['Kiriyama_2024_table_1:row7:col2', 'Kiriyama_2024_table_1:row7:col4', 'Kiriyama_2024_table_1:row7:col5', 'Kiriyama_2024_table_1:row7:col7'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kiriyama_2024_table_1:row4:col2', 'Kiriyama_2024_table_1:row4:col4', 'Kiriyama_2024_table_1:row4:col5', 'Kiriyama_2024_table_1:row4:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['prp21249-tbl-0002:row2:col2', 'prp21249-tbl-0002:row2:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kiriyama_2024_table_1:row6:col2', 'Kiriyama_2024_table_1:row6:col4', 'Kiriyama_2024_table_1:row6:col5', 'Kiriyama_2024_table_1:row6:col7'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Kiriyama_2024_table_1:row3:col2', 'Kiriyama_2024_table_1:row3:col4', 'Kiriyama_2024_table_1:row3:col5', 'Kiriyama_2024_table_1:row3:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.35 | ['Kiriyama_2024_table_1:row5:col2', 'Kiriyama_2024_table_1:row5:col4', 'Kiriyama_2024_table_1:row5:col5', 'Kiriyama_2024_table_1:row5:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.081 L/h | ['Kiriyama_2024_table_1:row5:col2', 'Kiriyama_2024_table_1:row5:col4', 'Kiriyama_2024_table_1:row5:col5', 'Kiriyama_2024_table_1:row5:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 54.9 L | ['prp21249-tbl-0002:row2:col2', 'prp21249-tbl-0002:row2:col3'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.162 L | ['Kiriyama_2024_table_1:row6:col2', 'Kiriyama_2024_table_1:row6:col4', 'Kiriyama_2024_table_1:row6:col5', 'Kiriyama_2024_table_1:row6:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnifedipine%5D%20Nifedipine_Kiriyama2024_reference&body=Drug%3A%20nifedipine%0ARecord%3A%20Nifedipine_Kiriyama2024_reference%0APaper%3A%20Kiriyama_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nifedipine/Nifedipine_Kiriyama2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:43 UTC</sub>
