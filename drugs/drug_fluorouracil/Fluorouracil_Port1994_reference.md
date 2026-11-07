<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Port_1994 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Port1994_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The 5-fluorouracil model was rejected because the Vmax parameter has a dimension that cannot be reconciled with standard pharmacokinetic units.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Port1994_reference" status="rejected" stale="false" population="cancer patients with advanced colorectal adenocarcinomas" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Port RE, Schlemmer HP, Bachert P. Pharmacokinetic analysis of sparse in vivo NMR spectroscopy data using relative parameters and the population approach. European journal of clinical pharmacology 47(2):187–193 (1994).
  ·  DOI: [10.1007/BF00194971](https://doi.org/10.1007/BF00194971)

## Population and dosing

**Population:** cancer patients with advanced colorectal adenocarcinomas · condition advanced colorectal adenocarcinomas · age group adult · n = — 16 patients were examined at 21 occasions.

**Dosing:** 650 mg/m2, iv, multiple, every 24 h.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| γ* | equation variable | 2620 | γ |
| vmax | Vmax | 121 | γ |
| kM · VFU | Km | 2590 | γ |
| Vcat/VFU | V2 | 0.0648 | γ |
| CLcat/Vcat | CL | 0.0555 |  |
| θ* | allometric_exponent | 0.0129 | γ |
| total volume of distribution was consistently high, the minimum value being | V | 160.9 | L |
| Ka, Absorption rate constant (h−1) | kabs | 0.757 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The 5-fluorouracil model was rejected because the Vmax parameter has a dimension that cannot be reconciled with standard pharmacokinetic units.**

The Vmax parameter for 5-fluorouracil metabolism to FUPA and FBAL is listed with a value of 121 and a unit of 'γ'. This unit has no standard pharmacokinetic interpretation, creating a dimension mismatch for the structural parameter. The second reader also could not validate the extracted values for Km, Vmax, and the allometric exponent, finding them null in their verification. Extracted — fluorouracil: Vmax 121 γ, Km 2.59e+03 γ, allometric_exponent 0.0129 γ, V 161 L, kabs 0.757 h−1; FUPA: V2 0.0648 γ, CL 0.0555.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has 5-fluorouracil → fupa (metabolism); 5-fluorouracil → fbal (metabolism), the second reading 5-fluorouracil → fupa + fbal (metabolism); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| γ* | `Q900` · equation variable | 2620 | γ |  |  | γ | llm (0.6) | Port_1994_table_p4_1:row0:col1 |
| vmax | `Q66` · Vmax | 121 | γ |  |  | γ | special_case (0.95) | Port_1994_table_p4_1:row1:col1 |
| kM · VFU | `Q1` · Km | 2590 | γ |  |  | γ | llm_confirmed (0.6) | Port_1994_table_p4_1:row2:col1 |
| Vcat/VFU | `Q64` · V2 | 0.0648 | γ |  |  | γ | exact (1) | Port_1994_table_p4_1:row3:col1 |
| CLcat/Vcat | `Q22` · CL | 0.0555 |  |  |  |  | exact (1) | Port_1994_table_p4_1:row4:col1 |
| θ* | `Q319` · allometric_exponent | 0.0129 | γ |  |  | γ | llm (0.6) | Port_1994_table_p4_1:row5:col1 |
| total volume of distribution was consistently high, the minimum value being | `Q61` · V | 160.9 | L | 0.1609 | m3 | L | review_gapfill (0.7) | Deyme_2019:review |
| Ka, Absorption rate constant (h−1) | `Q49` · kabs | 0.757 | h−1 | 0.0002103 | 1/s | 1/h | review_gapfill (0.7) | Bae_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'vmax' → Q66 (unit '[mass] / [time] ** 2 / [current]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'kM · VFU' → Q1 (unit '[mass] / [time] ** 2 / [current]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vcat/VFU' → Q64 (unit '[mass] / [time] ** 2 / [current]' vs ontology '[length] ** 3') — route to review
- implicit units: 'CLcat/Vcat' — the LLM proposed '1/h', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 2 linked by role; re-tagged parent→FUPA ×2
- gap-filled Q61 (V) from Deyme_2019's review values (primary lacked it)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.214 (3/14 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['5-fluorouracil', 'fupa', 'metabolism'], ['5-fluorouracil', 'fbal', 'metabolism']] | [['5-fluorouracil', 'fupa + fbal', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[clcat/vcat]` | 0.0555 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clcat/vcat]` |  | 0.0555 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km vfu]` | 2590 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[km vfu]` |  | 2590 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcat/vfu]` | 0.0648 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcat/vfu]` |  | 0.0648 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` | 121 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` |  | 121 | only_one_extracted |
| `gpt-oss-120b` | `parameters[γ*]` | 2620 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ*]` | 0.0129 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [time] ** 2 / [current] | γ | ['Port_1994_table_p4_1:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Deyme_2019:review'] |
| C5_dimension_Q64 | fail | [mass] / [time] ** 2 / [current] | γ | ['Port_1994_table_p4_1:row3:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] ** 2 / [current] | γ | ['Port_1994_table_p4_1:row1:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Port_1994_table_p4_1:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0555 | ['Port_1994_table_p4_1:row4:col1'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 161 L | ['Deyme_2019:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Port1994_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Port1994_reference%0APaper%3A%20Port_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_Port1994_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 21:29 UTC</sub>
