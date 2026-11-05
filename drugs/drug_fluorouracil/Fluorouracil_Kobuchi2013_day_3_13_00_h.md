<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Kobuchi_2013 \u00b7 day_3_13_00_h&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Kobuchi2013_day_3_13_00_h`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Kobuchi2013_day_3_13_00_h" status="rejected" stale="false" population="rats with colorectal cancer" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="2C"></div>

## Citation
Kobuchi S, Ito Y, Okada K, Imoto K, Kuwano S, Takada K. Pharmacokinetic/pharmacodynamic modeling of 5-fluorouracil by using a biomarker to predict tumor growth in a rat model of colorectal cancer. Journal of pharmaceutical sciences 102(6):2056–2067 (2013).
  ·  DOI: [10.1002/jps.23547](https://doi.org/10.1002/jps.23547)

## Population and dosing

**Population:** rats with colorectal cancer · condition colorectal cancer.

**Dosing:** 1400 mg, iv, multiple, every 24 h.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ke (h−1) | kel | 5.68 | h−1 |
| k12 (h−1) | k12 | 2.83 | h−1 |
| k21 (h−1) | k21 | 3.79 | h−1 |
| AUC0–∞ (µg·h·mL−1) | AUC∞ | 1.34 | µg·h·mL−1 |
| CLtot (L·h−1·kg−1) | CL | 0.25 | L·h−1·kg−1 |
| V1 (L·kg−1) | V1 | 0.25 | L·kg−1 |
| V2 (L·kg−1) | V2 | 0.19 | L·kg−1 |
| Ka, Absorption rate constant (h−1) | kabs | 0.757 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.222). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc0-inf: this record has none, the second reading 1.34; it also differs on 13 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ke (h−1) | `Q47` · kel | 5.68 | h−1 | 0.001578 | 1/s | 1/h | exact (1) | Kobuchi_2013_table_1:row2:col5 |
| k12 (h−1) | `Q301` · k12 | 2.83 | h−1 | 0.0007861 | 1/s | 1/h | exact (1) | Kobuchi_2013_table_1:row3:col5 |
| k21 (h−1) | `Q302` · k21 | 3.79 | h−1 | 0.001053 | 1/s | 1/h | exact (1) | Kobuchi_2013_table_1:row4:col5 |
| AUC0–∞ (µg·h·mL−1) | `Q17` · AUC∞ | 1.34 | µg·h·mL−1 |  |  | (h·µg)/ml | exact (1) | Kobuchi_2013_table_1:row5:col5 |
| CLtot (L·h−1·kg−1) | `Q22` · CL | 0.25 | L·h−1·kg−1 | 4.861e-06 | m3/s | l/(h·kg) | exact (1) | Kobuchi_2013_table_1:row6:col5 |
| V1 (L·kg−1) | `Q63` · V1 | 0.25 | L·kg−1 | 0.0175 | m3 | l/kg | exact (1) | Kobuchi_2013_table_1:row7:col5 |
| V2 (L·kg−1) | `Q64` · V2 | 0.19 | L·kg−1 | 0.0133 | m3 | l/kg | exact (1) | Kobuchi_2013_table_1:row8:col5 |
| Ka, Absorption rate constant (h−1) | `Q49` · kabs | 0.757 | h−1 | 0.0002103 | 1/s | 1/h | review_gapfill (0.7) | Bae_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'UH2/Ura' — extend the ontology if this is a real PK parameter (source ['Kobuchi_2013_table_1:row0:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- population split: 'day 3 13:00 h' subgroup of Kobuchi_2013 (paper reports 13 populations: 07:00 h, 13:00 h, 19:00 h, control, day 1 07:00 h, day 1 13:00 h, day 1 19:00 h, day 3 07:00 h, day 3 13:00 h, day 3 19:00 h, day 7 07:00 h, day 7 13:00 h, day 7 19:00 h)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)

**Extraction notes:**
- table Kobuchi_2013_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (70 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 1.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 1.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltot]` |  | 0.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltot]` | 0.25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` |  | 2.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 2.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` |  | 3.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 3.79 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` |  | 5.68 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` | 5.68 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 0.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 0.25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 0.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 0.19 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Kobuchi_2013_table_1:row5:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kobuchi_2013_table_1:row6:col5'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Kobuchi_2013_table_1:row3:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Kobuchi_2013_table_1:row4:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Kobuchi_2013_table_1:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Kobuchi_2013_table_1:row7:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Kobuchi_2013_table_1:row8:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.25 | ['Kobuchi_2013_table_1:row6:col5'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.5 L/h | ['Kobuchi_2013_table_1:row6:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 17.5 L | ['Kobuchi_2013_table_1:row7:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13.3 L | ['Kobuchi_2013_table_1:row8:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Kobuchi2013_day_3_13_00_h&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Kobuchi2013_day_3_13_00_h%0APaper%3A%20Kobuchi_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_Kobuchi2013_day_3_13_00_h%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 21:29 UTC</sub>
