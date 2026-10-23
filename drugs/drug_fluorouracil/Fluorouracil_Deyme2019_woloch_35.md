<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Deyme_2019 \u00b7 woloch_35&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Deyme2019_woloch_35`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record mixes irinotecan volume parameters with fluorouracil clearance, and links SN38 to APC instead of irinotecan, creating an orphan metabolite.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Deyme2019_woloch_35" status="rejected" stale="false" population="adults with digestive cancers" measured-compound="fluorouracil" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Deyme L, Barbolosi D, Gattacceca F. Population pharmacokinetics of FOLFIRINOX: a review of studies and parameters. Cancer chemotherapy and pharmacology 83(1):27–42 (2019).
  ·  DOI: [10.1007/s00280-018-3722-5](https://doi.org/10.1007/s00280-018-3722-5)

## Population and dosing

**Population:** adults with digestive cancers · condition digestive cancer · age group adult.

**Dosing:** 300, 425, 450, 2400 mg/m2, iv, multiple, every 144 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V2 (L) | V2 | 102 | L |
| V3 (L) | V3 | 267.3 | L |
| Vss (L) | Vss | 494.1 | L |
| CL5FU (L/h) | CL | 256.0 | L/h |
| volume | V | 0.2 | mL |
| Ka, Absorption rate constant (h−1) | kabs | 0.757 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record mixes irinotecan volume parameters with fluorouracil clearance, and links SN38 to APC instead of irinotecan, creating an orphan metabolite.**

Irinotecan has three volume parameters, while the dose compound fluorouracil has a volume of 0.2 mL and clearance of 256.0 L/h, indicating a compound mismatch. The structural link assigns the formation of APC from SN38, leaving no path from the dose for irinotecan to reach APC. The second reader disagreed on the links, suggesting APC should form from irinotecan and noting a potential oxaliplatin link. Extracted — irinotecan: V2 102 L, V3 267 L, Vss 494 L; fluorouracil: CL 256 L/h, V 0.2 mL, kabs 0.757 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has fluorouracil → fluorouracil metabolite 5fuh2 (metabolism); fluorouracil → fluorouracil metabolite 5fdhu (metabolism); irinotecan → sn38 (metabolism) …, the second reading fluorouracil → 5fuh2 (metabolism); fluorouracil → 5fdhu (metabolism); irinotecan → sn38 (metabolism) …; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V2 (L) | `Q64` · V2 | 102 | L | 0.102 | m3 | l | exact (1) | Deyme_2019_table_4:row2:col3 |
| V3 (L) | `Q77` · V3 | 267.3 | L | 0.2673 | m3 | l | exact (1) | Deyme_2019_table_4:row2:col4 |
| Vss (L) | `Q65` · Vss | 494.1 | L | 0.4941 | m3 | l | exact (1) | Deyme_2019_table_4:row2:col5 |
| CL5FU (L/h) | `Q22` · CL | 256.0 | L/h | 7.111e-05 | m3/s | L/h | review_gapfill (0.7) | Arshad_2020:review |
| volume | `Q61` · V | 0.2 | mL | 2e-07 | m3 | L | review_gapfill (0.7) | Hara_2026:review |
| Ka, Absorption rate constant (h−1) | `Q49` · kabs | 0.757 | h−1 | 0.0002103 | 1/s | 1/h | review_gapfill (0.7) | Bae_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'woloch (2012) [35]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fluorouracil
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- population split: 'woloch (2012) [35]' subgroup of Deyme_2019 (paper reports 17 populations: beaty (2010) [31], berg (2015) [37], bressolle (1999) [33], delord (2003) [25], foulladi (2006) [30], khoo (2006) [24], kimura (2010) [29], klein (2003) [38], klein (2005) [38], mueller (2013) [22], nikanjan (2015) [32], porta-oltra (2004) [34], poujol (2007) [27], terret (2000) [23], thompson (2008) [28], van kuilenburg (2012) [36], woloch (2012) [35])
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 52 linked by role; re-tagged parent→irinotecan ×72, parent→SN38 ×13
- molar mass: none of 1 PubChem candidate(s) is 'APC' (LLM) — left in mass units
- molar mass: none found for 'APC' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Arshad_2020's review values (primary lacked it)
- gap-filled Q61 (V) from Hara_2026's review values (primary lacked it)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4, 5, 6, 7
- table Deyme_2019_table_4: ragged_grid
- table Deyme_2019_table_4: unparsed_numeric_cell
- transposed table Deyme_2019_table_4: logical view retains original source coordinates
- table Deyme_2019_table_5: ragged_grid
- table Deyme_2019_table_5: unparsed_numeric_cell
- transposed table Deyme_2019_table_5: logical view retains original source coordinates
- table Deyme_2019_table_6: unparsed_numeric_cell
- transposed table Deyme_2019_table_6: logical view retains original source coordinates
- table Deyme_2019_table_7: unparsed_numeric_cell
- transposed table Deyme_2019_table_7: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['fluorouracil', 'fluorouracil metabolite 5fuh2', 'metabolism'], ['fluorouracil', 'fluorouracil metabolite 5fdhu', 'metabolism'], ['irinotecan', 'sn38', 'metabolism'], ['sn38', 'sn38g', 'metabolism'], ['irinotecan', 'apc', 'metabolism']] | [['fluorouracil', '5fuh2', 'metabolism'], ['fluorouracil', '5fdhu', 'metabolism'], ['irinotecan', 'sn38', 'metabolism'], ['sn38', 'sn38g', 'metabolism'], ['irinotecan', 'apc', 'metabolism'], ['oxaliplatin', 'ultrafiltrated platinum', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[k12]` | 0.270 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.0857 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka, absorption rate constant]` | 0.757 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` | 0.2 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Arshad_2020:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hara_2026:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Deyme_2019_table_4:row2:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Deyme_2019_table_4:row2:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Deyme_2019_table_4:row2:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 256 | ['Arshad_2020:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 256 L/h | ['Arshad_2020:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | ['Hara_2026:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 102 L | ['Deyme_2019_table_4:row2:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 494 L | ['Deyme_2019_table_4:row2:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Deyme2019_woloch_35&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Deyme2019_woloch_35%0APaper%3A%20Deyme_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_Deyme2019_woloch_35%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:02 UTC</sub>
