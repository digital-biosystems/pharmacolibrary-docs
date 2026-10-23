<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Mielke_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Mielke2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the 0.2 mL volume and 256.0 L/h clearance for 5-fluorouracil are unphysiologically large, indicating scale errors.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Mielke2025_reference" status="rejected" stale="false" population="adult cancer patients" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="1C"></div>

## Citation
Mielke H, Algharably EAE, Gundert-Remy U. 5-Fluorouracil Toxicity: Revisiting the Relevance of Pharmacokinetic Parameters. Pharmaceuticals (Basel, Switzerland) 18(5):653 (2025).
  ·  DOI: [10.3390/ph18050653](https://doi.org/10.3390/ph18050653)

## Population and dosing

**Population:** adults with solid cancer · condition solid cancer · age group adult · n = 459.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cardiac output (Qc) (L/h) [47] | Q | 401.7 | L/h |
| Protein binding (%) [49] | fu | 8 |  |
| Vmax (mg/h) | Vmax | 1221.7 | mg/h |
| Km (mg/L) | Km | 11.7 | mg/L |
| CL5FU (L/h) | CL | 256.0 | L/h |
| volume | V | 0.2 | mL |
| Ka, Absorption rate constant (h−1) | kabs | 0.757 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the 0.2 mL volume and 256.0 L/h clearance for 5-fluorouracil are unphysiologically large, indicating scale errors.**

The volume of distribution is recorded as 0.2 mL and total clearance as 256.0 L/h, values that are implausible for a solid cancer patient. A structural dimension mismatch was also identified on the intercompartmental clearance parameter, which is reported as 401.7 L/h. These magnitudes confirm that the extracted parameter values do not reflect physiological reality. Extracted — fluorouracil: Q 402 L/h, fu 8, Vmax 1.22e+03 mg/h, Km 11.7 mg/L, CL 256 L/h, V 0.2 mL, kabs 0.757 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl5fu: this record has 256.0, the second reading none; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cardiac output (Qc) (L/h) [47] | `Q30` · Q | 401.7 | L/h | 0.0001116 | m3/s | L/h | llm (0.6) | Mielke_2025_table_1:row0:col1 |
| Protein binding (%) [49] | `Q46` · fu | 8 |  |  |  |  | llm_confirmed (0.6) | Mielke_2025_table_1:row15:col1 |
| Vmax (mg/h) | `Q66` · Vmax | 1221.7 | mg/h |  |  | mg/h | special_case (0.95) | Mielke_2025_table_1:row27:col1 |
| Km (mg/L) | `Q1` · Km | 11.7 | mg/L |  |  | mg/l | exact (1) | Mielke_2025_table_1:row28:col1 |
| CL5FU (L/h) | `Q22` · CL | 256.0 | L/h | 7.111e-05 | m3/s | L/h | review_gapfill (0.7) | Arshad_2020:review |
| volume | `Q61` · V | 0.2 | mL | 2e-07 | m3 | L | review_gapfill (0.7) | Hara_2026:review |
| Ka, Absorption rate constant (h−1) | `Q49` · kabs | 0.757 | h−1 | 0.0002103 | 1/s | 1/h | review_gapfill (0.7) | Bae_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (8/16 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl5fu]` | 256.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fat]` |  | 19.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka, absorption rate constant]` | 0.757 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[liver]` |  | 99.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[red marrow]` |  | 11.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[skin]` |  | 20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vessel-rich tissue]` |  | 44.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` | 0.2 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Mielke_2025_table_1:row28:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Arshad_2020:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Mielke_2025_table_1:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hara_2026:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | ['Mielke_2025_table_1:row27:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 256 | ['Arshad_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 256 L/h | ['Arshad_2020:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | ['Hara_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Mielke2025_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Mielke2025_reference%0APaper%3A%20Mielke_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_Mielke2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:59 UTC</sub>
