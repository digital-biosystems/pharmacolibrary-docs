<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;aminohippuric acid&quot;,&quot;href&quot;:&quot;drugs/drug_aminohippuric_acid/&quot;},{&quot;label&quot;:&quot;Estelberger_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminohippuricAcid_Kinowski1995_reference&quot;,&quot;label&quot;:&quot;Kinowski_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminohippuric_acid/AminohippuricAcid_Kinowski1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aminohippuric acid — `AminohippuricAcid_Estelberger1995_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The aminohippuric acid record was rejected because its parameters (MRT 64, kel 69, tlag 28, Fab 54, equation variable 35) were reported in the unit 'a', which has no defined dimension, so no SI values could be established.

<div class="pk-model-meta" hidden drug="aminohippuric acid" model-id="AminohippuricAcid_Estelberger1995_reference" status="rejected" stale="false" population="renal patients and healthy controls" measured-compound="p-aminohippuric acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Estelberger W, Zitta S, Lang T, Mayer F, Mauric A, Horn S et al. System identification of the low-dose kinetics of p-aminohippuric acid. European journal of clinical chemistry and clinical biochemistry : journal of the Forum of European Clinical Chemistry Societies 33(11):847–853 (1995).
  ·  DOI: [10.1515/cclm.1995.33.11.847](https://doi.org/10.1515/cclm.1995.33.11.847)

## Population and dosing

**Population:** renal patients and healthy controls · condition renal impairment and healthy · age group adult · n = 17.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MH* | MRT | 64 | a |
| PA* | equation variable | 35 | a |
| KK* | kel | 69 | a |
| ZE** | tlag | 28 | a |
| FA** | Fab | 54 | a |
| volume | V | 6.31 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The aminohippuric acid record was rejected because its parameters (MRT 64, kel 69, tlag 28, Fab 54, equation variable 35) were reported in the unit 'a', which has no defined dimension, so no SI values could be established.**

In this 1-compartment p-aminohippuric acid model for renal patients and healthy controls, five parameters were reported with the unit 'a', an undefined unit that cannot be expressed in SI. Only the volume of distribution (V = 6.31 L) carries a usable unit. The resulting dimension mismatch on a structural parameter led to rejection. Extracted — aminohippuric acid: MRT 64 a, kel 69 a, tlag 28 a, Fab 54 a, V 6.31 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has p-aminohippuric acid, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MH* | `Q53` · MRT | 64 | a |  |  | a | llm (0.6) | Estelberger_1995_table_2:row0:col2, Estelberger_1995_table_2:row0:col3, Estelberger_1995_table_2:row0:col4, Estelberger_1995_table_2:row0:col6, Estelberger_1995_table_2:row0:col7, Estelberger_1995_table_2:row0:col8, Estelberger_1995_table_2:row0:col9, Estelberger_1995_table_2:row0:col10 |
| PA* | `Q900` · equation variable | 35 | a |  |  | a | llm (0.6) | Estelberger_1995_table_2:row2:col2, Estelberger_1995_table_2:row2:col3, Estelberger_1995_table_2:row2:col4, Estelberger_1995_table_2:row2:col6, Estelberger_1995_table_2:row2:col7, Estelberger_1995_table_2:row2:col8, Estelberger_1995_table_2:row2:col9, Estelberger_1995_table_2:row2:col10 |
| KK* | `Q47` · kel | 69 | a |  |  | a | llm (0.6) | Estelberger_1995_table_2:row5:col2, Estelberger_1995_table_2:row5:col3, Estelberger_1995_table_2:row5:col4, Estelberger_1995_table_2:row5:col6, Estelberger_1995_table_2:row5:col7, Estelberger_1995_table_2:row5:col8, Estelberger_1995_table_2:row5:col9, Estelberger_1995_table_2:row5:col10 |
| ZE** | `Q83` · tlag | 28 | a |  |  | a | llm (0.6) | Estelberger_1995_table_2:row6:col2, Estelberger_1995_table_2:row6:col3, Estelberger_1995_table_2:row6:col4, Estelberger_1995_table_2:row6:col6, Estelberger_1995_table_2:row6:col7, Estelberger_1995_table_2:row6:col8, Estelberger_1995_table_2:row6:col9, Estelberger_1995_table_2:row6:col10 |
| FA** | `Q40` · Fab | 54 | a |  |  | a | llm (0.6) | Estelberger_1995_table_2:row10:col2, Estelberger_1995_table_2:row10:col3, Estelberger_1995_table_2:row10:col4, Estelberger_1995_table_2:row10:col6, Estelberger_1995_table_2:row10:col7, Estelberger_1995_table_2:row10:col8, Estelberger_1995_table_2:row10:col9, Estelberger_1995_table_2:row10:col10 |
| volume | `Q61` · V | 6.31 | L | 0.00631 | m3 | L | review_gapfill (0.7) | Gibiansky_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'age (a)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'height (cm)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'weight (kg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 't_c (h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'WR*' — extend the ontology if this is a real PK parameter (source ['Estelberger_1995_table_2:row1:col2', 'Estelberger_1995_table_2:row1:col3', 'Estelberger_1995_table_2:row1:col4', 'Estelberger_1995_table_2:row1:col6', 'Estelberger_1995_table_2:row1:col7', 'Estelberger_1995_table_2:row1:col8', 'Estelberger_1995_table_2:row1:col9', 'Estelberger_1995_table_2:row1:col10'])
- dropped unlinked row (NIL): 'LA*' — extend the ontology if this is a real PK parameter (source ['Estelberger_1995_table_2:row3:col2', 'Estelberger_1995_table_2:row3:col3', 'Estelberger_1995_table_2:row3:col4', 'Estelberger_1995_table_2:row3:col6', 'Estelberger_1995_table_2:row3:col7', 'Estelberger_1995_table_2:row3:col8', 'Estelberger_1995_table_2:row3:col9', 'Estelberger_1995_table_2:row3:col10'])
- dropped unlinked row (NIL): 'PK*' — extend the ontology if this is a real PK parameter (source ['Estelberger_1995_table_2:row4:col2', 'Estelberger_1995_table_2:row4:col3', 'Estelberger_1995_table_2:row4:col4', 'Estelberger_1995_table_2:row4:col6', 'Estelberger_1995_table_2:row4:col7', 'Estelberger_1995_table_2:row4:col8', 'Estelberger_1995_table_2:row4:col9', 'Estelberger_1995_table_2:row4:col10'])
- unit_dimension_mismatch: 'KK*' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'TA**' — extend the ontology if this is a real PK parameter (source ['Estelberger_1995_table_2:row7:col2', 'Estelberger_1995_table_2:row7:col3', 'Estelberger_1995_table_2:row7:col4', 'Estelberger_1995_table_2:row7:col6', 'Estelberger_1995_table_2:row7:col7', 'Estelberger_1995_table_2:row7:col8', 'Estelberger_1995_table_2:row7:col9', 'Estelberger_1995_table_2:row7:col10'])
- dropped unlinked row (NIL): 'SK**' — extend the ontology if this is a real PK parameter (source ['Estelberger_1995_table_2:row8:col2', 'Estelberger_1995_table_2:row8:col3', 'Estelberger_1995_table_2:row8:col4', 'Estelberger_1995_table_2:row8:col6', 'Estelberger_1995_table_2:row8:col7', 'Estelberger_1995_table_2:row8:col8', 'Estelberger_1995_table_2:row8:col9', 'Estelberger_1995_table_2:row8:col10'])
- dropped unlinked row (NIL): 'RJ**' — extend the ontology if this is a real PK parameter (source ['Estelberger_1995_table_2:row9:col2', 'Estelberger_1995_table_2:row9:col3', 'Estelberger_1995_table_2:row9:col4', 'Estelberger_1995_table_2:row9:col6', 'Estelberger_1995_table_2:row9:col7', 'Estelberger_1995_table_2:row9:col8', 'Estelberger_1995_table_2:row9:col9', 'Estelberger_1995_table_2:row9:col10'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=p-aminohippuric acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Gibiansky_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fa**]` | 54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kk*]` | 69 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[la*]` |  | 3.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mh*].parameter_id` | Q53 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[mh*].value` | 64 | 4.0 | mismatch |
| `gpt-oss-120b` | `parameters[pa*]` | 35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rj**]` |  | 24.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` | 6.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ze**]` | 28 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | p-aminohippuric acid | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | p-aminohippuric acid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | fail | [time] | a | ['Estelberger_1995_table_2:row5:col2', 'Estelberger_1995_table_2:row5:col3', 'Estelberger_1995_table_2:row5:col4', 'Estelberger_1995_table_2:row5:col6', 'Estelberger_1995_table_2:row5:col7', 'Estelberger_1995_table_2:row5:col8', 'Estelberger_1995_table_2:row5:col9', 'Estelberger_1995_table_2:row5:col10'] |
| C5_dimension_Q53 | pass | [time] |  | ['Estelberger_1995_table_2:row0:col2', 'Estelberger_1995_table_2:row0:col3', 'Estelberger_1995_table_2:row0:col4', 'Estelberger_1995_table_2:row0:col6', 'Estelberger_1995_table_2:row0:col7', 'Estelberger_1995_table_2:row0:col8', 'Estelberger_1995_table_2:row0:col9', 'Estelberger_1995_table_2:row0:col10'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Gibiansky_2020:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Estelberger_1995_table_2:row6:col2', 'Estelberger_1995_table_2:row6:col3', 'Estelberger_1995_table_2:row6:col4', 'Estelberger_1995_table_2:row6:col6', 'Estelberger_1995_table_2:row6:col7', 'Estelberger_1995_table_2:row6:col8', 'Estelberger_1995_table_2:row6:col9', 'Estelberger_1995_table_2:row6:col10'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.31 L | ['Gibiansky_2020:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminohippuric_acid%5D%20AminohippuricAcid_Estelberger1995_reference&body=Drug%3A%20aminohippuric_acid%0ARecord%3A%20AminohippuricAcid_Estelberger1995_reference%0APaper%3A%20Estelberger_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aminohippuric_acid/AminohippuricAcid_Estelberger1995_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:10 UTC</sub>
