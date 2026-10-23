<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;butorphanol&quot;,&quot;href&quot;:&quot;drugs/drug_butorphanol/&quot;},{&quot;label&quot;:&quot;Knych_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# butorphanol — `Butorphanol_Knych2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> The third peripheral compartment volume of distribution parameter is unreachable from the dose due to a structural mismatch.

<div class="pk-model-meta" hidden drug="butorphanol" model-id="Butorphanol_Knych2024_reference" status="rejected" stale="false" population="exercised thoroughbred horses" measured-compound="butorphanol" parameterization="apparent" topology="2C"></div>

## Citation
Knych HK, Weiner D, McKemie DS, Traynham M, Blea J. Population pharmacokinetics of butorphanol following intramuscular administration to exercised thoroughbred horses. Journal of veterinary pharmacology and therapeutics 47(5):372–379 (2024).
  ·  DOI: [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450)

## Population and dosing

**Population:** exercised thoroughbred horses · condition healthy · age group adult · n = 12.

**Dosing:** 7 mg, im, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q3/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| tvKa (1/h) | kabs | 6.28 | 1/h | 22.4 | 0.412 (None% RSE) |
| tvV/F (L/kg) | V/F | 0.465 | L/kg | 12.3 |  |
| tvV2/F (L/kg) | V2/F | 0.420 | L/kg | 16.1 |  |
| tvV3/F (L/kg) | V3/F | 0.368 | L/kg | 22.4 |  |
| tvCl/F (mL/min/kg) | CL/F | 9.85 | mL/min/kg | 7.09 |  |
| tvCl2/F (mL/min/kg) | Q3/F | 0.667 | mL/min/kg | 25.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.933). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The third peripheral compartment volume of distribution parameter is unreachable from the dose due to a structural mismatch.**

The record defines a three-compartment model by including the third peripheral compartment volume (0.368 L/kg) and its intercompartmental clearance (0.667 mL/min/kg). However, the model structure is explicitly defined as a two-compartment system. This inconsistency renders the third compartment unreachable, preventing the drug from distributing into that space. Extracted — butorphanol: kabs 6.28 1/h, V/F 0.465 L/kg, V2/F 0.42 L/kg, V3/F 0.368 L/kg, CL/F 9.85 mL/min/kg, Q3/F 0.667 mL/min/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of tvcl2/f: this record has 0.667, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvKa (1/h) | `Q49` · kabs | 6.28 | 1/h | 0.001744 | 1/s | 1/h | 22.4 | tv_prefix (0.95) | Knych_2024_table_p6_1:row0:col1, Knych_2024_table_p6_1:row0:col2 | 0.412 (None% RSE) |
| tvV/F (L/kg) | `Q76` · V/F | 0.465 | L/kg | 0.03255 | m3 | l/kg | 12.3 | tv_prefix (0.95) | Knych_2024_table_p6_1:row1:col1, Knych_2024_table_p6_1:row1:col2 |  |
| tvV2/F (L/kg) | `Q82` · V2/F | 0.420 | L/kg | 0.0294 | m3 | l/kg | 16.1 | tv_prefix (0.95) | Knych_2024_table_p6_1:row2:col1, Knych_2024_table_p6_1:row2:col2 |  |
| tvV3/F (L/kg) | `Q78` · V3/F | 0.368 | L/kg | 0.02576 | m3 | l/kg | 22.4 | tv_prefix (0.95) | Knych_2024_table_p6_1:row3:col1, Knych_2024_table_p6_1:row3:col2 |  |
| tvCl/F (mL/min/kg) | `Q27` · CL/F | 9.85 | mL/min/kg | 1.149e-05 | m3/s | ml/(min·kg) | 7.09 | tv_prefix (0.95) | Knych_2024_table_p6_1:row4:col1, Knych_2024_table_p6_1:row4:col2 |  |
| tvCl2/F (mL/min/kg) | `Q309` · Q3/F | 0.667 | mL/min/kg | 7.782e-07 | m3/s | ml/(min·kg) | 25.3 | llm (0.6) | Knych_2024_table_p6_1:row5:col1, Knych_2024_table_p6_1:row5:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Ka' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'V' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'V2' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'V3' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Cl' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Cl2' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Cl3' routed out of structural estimates ('Between subject variability (%CV)')
- dropped duplicate Q309 ('tvCl3/F (mL/min/kg)', value '2.98') — already have one for this compound
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- implicit units: 'tvKa (1/h)' → 1/h (from the popPK convention: 'While the provided text does not explicitly state the unit for tvKa in the caption, the Discussion section compares the ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=butorphanol
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.933 (14/15 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[tvcl2/f]` | 0.667 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Knych_2024_table_p6_1:row4:col1', 'Knych_2024_table_p6_1:row4:col2'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['Knych_2024_table_p6_1:row5:col1', 'Knych_2024_table_p6_1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Knych_2024_table_p6_1:row0:col1', 'Knych_2024_table_p6_1:row0:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Knych_2024_table_p6_1:row1:col1', 'Knych_2024_table_p6_1:row1:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Knych_2024_table_p6_1:row3:col1', 'Knych_2024_table_p6_1:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Knych_2024_table_p6_1:row2:col1', 'Knych_2024_table_p6_1:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 41.4 L/h | ['Knych_2024_table_p6_1:row4:col1', 'Knych_2024_table_p6_1:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 32.6 L | ['Knych_2024_table_p6_1:row1:col1', 'Knych_2024_table_p6_1:row1:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 29.4 L | ['Knych_2024_table_p6_1:row2:col1', 'Knych_2024_table_p6_1:row2:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbutorphanol%5D%20Butorphanol_Knych2024_reference&body=Drug%3A%20butorphanol%0ARecord%3A%20Butorphanol_Knych2024_reference%0APaper%3A%20Knych_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_butorphanol/Butorphanol_Knych2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:53 UTC</sub>
