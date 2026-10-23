<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;calcium carbonate&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_carbonate/&quot;},{&quot;label&quot;:&quot;Ahn_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CalciumCarbonate_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_carbonate/CalciumCarbonate_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CalciumCarbonate_Kemal2026_reference&quot;,&quot;label&quot;:&quot;Kemal_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_carbonate/CalciumCarbonate_Kemal2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# calcium carbonate — `CalciumCarbonate_Ahn2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:36 UTC) predates the latest extraction (2026-10-04 08:36 UTC); the status shown comes from the current checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="calcium carbonate" model-id="CalciumCarbonate_Ahn2014_reference" status="rejected" stale="true" population="healthy subjects" measured-compound="parathyroid hormone" parameterization="mechanistic" topology="1C"></div>

## Citation
Ahn JE, Jeon S, Lee J, Han S, Yim DS. Modeling of the parathyroid hormone response after calcium intake in healthy subjects. The Korean journal of physiology & pharmacology : official journal of the Korean Physiological Society and the Korean Society of Pharmacology 18(3):217–223 (2014).
  ·  DOI: [10.4196/kjpp.2014.18.3.217](https://doi.org/10.4196/kjpp.2014.18.3.217)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult · n = 24.

**Dosing:** 400 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed calcium_carbonate, measured parathyroid hormone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ka (hr-1) | kabs | 0.871 | hr-1 | 0.390 (None% RSE) |
| Relative F1 | Frel | 2.14 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has calcium_carbonate, the second reading calcium carbonate; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ka (hr-1) | `Q49` · kabs | 0.871 | hr-1 | 0.0002419 | 1/s | 1/h | exact (1) | Ahn_2014_table_p3_1:row4:col1, Ahn_2014_table_p3_1:row4:col3 | 0.390 (None% RSE) |
| Relative F1 | `Q87` · Frel | 2.14 |  |  |  |  | llm_corrected (0.6) | Ahn_2014_table_p3_1:row6:col1, Ahn_2014_table_p3_1:row6:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'kin_ca' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row0:col1', 'Ahn_2014_table_p3_1:row0:col3'])
- dropped PD-category row 'kout_ca' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row1:col1'])
- dropped PD-category row 'kin_pth' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row2:col1', 'Ahn_2014_table_p3_1:row2:col3'])
- dropped PD-category row 'kout_pth' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row3:col1', 'Ahn_2014_table_p3_1:row3:col3'])
- dropped PD-category row 'EC50 (mmol/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ahn_2014_table_p3_1:row5:col1', 'Ahn_2014_table_p3_1:row5:col3'])
- routed 'SD_ca (mmol/L)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'CV_pth (% CV)' — extend the ontology if this is a real PK parameter (source ['Ahn_2014_table_p3_1:row12:col1', 'Ahn_2014_table_p3_1:row12:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=parathyroid hormone
- gap-filled Q22 (CL) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Ekobena_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- removed gap-filled parent disposition (Q22, Q61): this record measures 'parathyroid hormone', not calcium_carbonate, and reports no metabolite CL/V — the imported values describe a compartment this record did not measure

**Extraction notes:**
- final table T2: grid unusable → re-running vision table extraction for Ahn_2014
- unparsed cell Ahn_2014_table_p3_1:row0:col2 = '3.39, 3.43'
- unparsed cell Ahn_2014_table_p3_1:row0:col4 = '3.39, 3.43'
- unparsed cell Ahn_2014_table_p3_1:row2:col2 = '12.4, 30.8'
- unparsed cell Ahn_2014_table_p3_1:row2:col4 = '9.12, 33.0'
- unparsed cell Ahn_2014_table_p3_1:row3:col2 = '0.513, 1.19'
- unparsed cell Ahn_2014_table_p3_1:row3:col4 = '0.375, 1.26'
- unparsed cell Ahn_2014_table_p3_1:row4:col2 = '0.438, 1.15'
- unparsed cell Ahn_2014_table_p3_1:row4:col4 = '0.54, 7.18'
- unparsed cell Ahn_2014_table_p3_1:row5:col2 = '0.0924, 0.224'
- unparsed cell Ahn_2014_table_p3_1:row5:col4 = '0.026, 0.232'
- unparsed cell Ahn_2014_table_p3_1:row6:col2 = '1.06, 2.90'
- unparsed cell Ahn_2014_table_p3_1:row6:col4 = '1.31, 8.58'
- unparsed cell Ahn_2014_table_p3_1:row7:col2 = '0.000814, 0.000377'
- unparsed cell Ahn_2014_table_p3_1:row7:col4 = '0.0001, 0.0004'
- unparsed cell Ahn_2014_table_p3_1:row8:col2 = '0.0260, 0.0646'
- unparsed cell Ahn_2014_table_p3_1:row8:col4 = '0.0213, 0.0616'
- unparsed cell Ahn_2014_table_p3_1:row9:col2 = '0.161, 0.651'
- unparsed cell Ahn_2014_table_p3_1:row9:col4 = '0.164, 1.34'
- unparsed cell Ahn_2014_table_p3_1:row10:col2 = '0.0015, 0.0179'
- unparsed cell Ahn_2014_table_p3_1:row10:col4 = '0.0026, 0.0189'
- unparsed cell Ahn_2014_table_p3_1:row11:col2 = '0.0212, 0.0304'
- unparsed cell Ahn_2014_table_p3_1:row11:col4 = '0.022, 0.0301'
- unparsed cell Ahn_2014_table_p3_1:row12:col2 = '18.8, 23.2'
- unparsed cell Ahn_2014_table_p3_1:row12:col4 = '18.9, 23'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kout_pth]` |  | 0.821 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | calcium_carbonate | calcium carbonate | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ahn_2014_table_p3_1:row4:col1', 'Ahn_2014_table_p3_1:row4:col3'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalcium_carbonate%5D%20CalciumCarbonate_Ahn2014_reference&body=Drug%3A%20calcium_carbonate%0ARecord%3A%20CalciumCarbonate_Ahn2014_reference%0APaper%3A%20Ahn_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_calcium_carbonate/CalciumCarbonate_Ahn2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 08:36 UTC</sub>
