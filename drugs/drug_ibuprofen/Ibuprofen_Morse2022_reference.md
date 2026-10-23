<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ibuprofen&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/&quot;},{&quot;label&quot;:&quot;Morse_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibuprofen_Clissold1987_reference&quot;,&quot;label&quot;:&quot;Clissold_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Clissold1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Knihinicki1990_reference&quot;,&quot;label&quot;:&quot;Knihinicki_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Knihinicki1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Todd1986_reference&quot;,&quot;label&quot;:&quot;Todd_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Todd1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_DeGraves1993v2_reference&quot;,&quot;label&quot;:&quot;DeGraves_1993_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_DeGraves1993v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Trocniz2000_reference&quot;,&quot;label&quot;:&quot;Troc\u00f3niz_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibuprofen — `Ibuprofen_Morse2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because the volume of distribution is 22.37 ml, an implausible magnitude indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="ibuprofen" model-id="Ibuprofen_Morse2022_reference" status="rejected" stale="false" population="healthy adults" measured-compound="acetaminophen, ibuprofen" parameterization="mechanistic" topology="1C"></div>

## Citation
JamesDMorse 0000-0001-7500-0062 Department of Pharmacology and Clinical Pharmacology University of Auckland Park Road 1023 Auckland New Zealand Department of Pharmacology and Clinical Pharmacology University of Auckland Park Road 1023 Auckland New Zealand, IoanaStanescu AFT Pharmaceuticals Limited Auckland New Zealand AFT Pharmaceuticals Limited Auckland New Zealand, HartleyCAtkinson AFT Pharmaceuticals Limited Auckland New Zealand AFT Pharmaceuticals Limited Auckland New Zealand, BrianJAnderson briana@adhb.govt.nz 0000-0002-2826-3019 Department of Anaesthesiology University of Auckland Park Road 1023 Auckland New Zealand Department of Anaesthesia Auckland Children's Hospital Park Road Private Bag 92024 Auckland New Zealand Department of Anaesthesiology University of Auckland Park Road 1023 Auckland New Zealand Department of Anaesthesia Auckland Children's Hospital Park Road Private Bag 92024 Auckland New Zealand. Population Pharmacokinetic Modelling of Acetaminophen and Ibuprofen: the Influence of Body Composition, Formulation and Feeding in Healthy Adult Volunteers (2022).
  ·  DOI: [10.1007/s13318-022-00766-9](https://doi.org/10.1007/s13318-022-00766-9)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 116.

**Dosing:** 325, 500, 1000 mg, iv, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| factor for fat (FFAT) on CL | CL | 0.816 |  |
| lag time on the tablet formulation increased ... under fed conditions | tlag | 4.6 | fold |
| V,, ml | V | 22.37 | ml |
| first-order absorption rate constant (k a) | kabs | 1.1 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222), gpt-5.6-luna (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because the volume of distribution is 22.37 ml, an implausible magnitude indicating a unit or scale extraction error.**

The volume of distribution parameter is assigned the value 22.37 with the unit 'ml', which is physically impossible for a systemic volume metric in healthy adults. The record indicates that a reported unit could not be converted to standard SI units, preventing the establishment of the correct scale. The second reader identified that the parameter fields were null, confirming that no valid numerical values were extracted for the pharmacokinetic parameters. Extracted — acetaminophen, ibuprofen: CL 0.816, tlag 4.6 fold, V 22.4 ml, kabs 1.1 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has acetaminophen, ibuprofen, the second reading acetaminophen and ibuprofen; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| factor for fat (FFAT) on CL | `Q22` · CL | 0.816 |  |  |  | L/h | boundary (0.8) | Morse_2022:results_prose |
| lag time on the tablet formulation increased ... under fed conditions | `Q83` · tlag | 4.6 | fold |  |  | fold | boundary (0.8) | Morse_2022:results_prose |
| V,, ml | `Q61` · V | 22.37 | ml | 2.237e-05 | m3 | L | review_gapfill (0.7) | Askholt_1985:review |
| first-order absorption rate constant (k a) | `Q49` · kabs | 1.1 | h -1 | 0.0003056 | 1/s | 1/h | review_gapfill (0.7) | Hong_2008:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('factor for fat (FFAT) on CL'=0.816) from results prose — parameter table was unreadable
- salvaged Q83 ('lag time on the tablet formulation increased ... under fed conditions'=4.6) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acetaminophen, ibuprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Askholt_1985's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Hong_2008's review values (primary lacked it)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |
| `gpt-5.6-luna` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `parameters[factor for fat (ffat) on cl]` | 0.816 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[first-order absorption rate constant]` | 1.1 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[lag time on the tablet formulation increased ... under fed conditions]` | 4.6 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[v,,]` | 22.37 |  | only_one_extracted |
| `gpt-5.6-luna` | `screen.dose_compound` | acetaminophen, ibuprofen | acetaminophen and ibuprofen | mismatch |
| `gpt-5.6-luna` | `screen.primary_analyte` | acetaminophen, ibuprofen | acetaminophen and ibuprofen | mismatch |
| `gpt-oss-120b` | `parameters[factor for fat (ffat) on cl]` | 0.816 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order absorption rate constant]` | 1.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time on the tablet formulation increased ... under fed conditions]` | 4.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time on the tablet formulation]` |  | 4.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 0.13 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | acetaminophen, ibuprofen | acetaminophen and ibuprofen | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | acetaminophen, ibuprofen | acetaminophen and ibuprofen | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hong_2008:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Askholt_1985:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Morse_2022:results_prose'] |
| C5_unit_missing_Q83 | fail | [time] | fold | ['Morse_2022:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.816 | ['Morse_2022:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0224 L | ['Askholt_1985:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibuprofen%5D%20Ibuprofen_Morse2022_reference&body=Drug%3A%20ibuprofen%0ARecord%3A%20Ibuprofen_Morse2022_reference%0APaper%3A%20Morse_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibuprofen/Ibuprofen_Morse2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-07-15 06:33 UTC</sub>
