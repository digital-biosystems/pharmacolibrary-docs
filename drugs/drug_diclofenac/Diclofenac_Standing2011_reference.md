<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Standing_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_RodriguezCruz2021_reference&quot;,&quot;label&quot;:&quot;Rodriguez-Cruz_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_RodriguezCruz2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Standing2008_reference&quot;,&quot;label&quot;:&quot;Standing_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Standing2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Perez_1995_relaxation&quot;,&quot;label&quot;:&quot;Perez_1995 \u00b7 relaxation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Perez_1995_relaxation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Standing2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The absorption rate constant for diclofenac is recorded in hours instead of inverse hours, causing a structural dimension mismatch.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Standing2011_reference" status="rejected" stale="false" population="children aged 1-12 years" measured-compound="diclofenac" parameterization="mechanistic" topology="2C"></div>

## Citation
Standing JF, Tibboel D, Korpela R, Olkkola KT. Diclofenac pharmacokinetic meta-analysis and dose recommendations for surgical pain in children aged 1-12 years. Paediatric anaesthesia 21(3):316–324 (2011).
  ·  DOI: [10.1111/j.1460-9592.2010.03509.x](https://doi.org/10.1111/j.1460-9592.2010.03509.x)

## Population and dosing

**Population:** children aged 1-12 years · condition surgical pain · age group child · n = &lt;integer&gt;.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (lAEh )1 AE70 kg )1 ) | CL | 16.9 | L/h/70kg |
| V1 (lAE70 kg )1 ) | V1 | 20.1 | L/70kg |
| Q2 (lAEh )1 AE70 kg )1 ) | Q2 | 37.5 | L/h/70kg |
| V2 (lAE70 kg )1 ) | V2 | 32.7 | L/70kg |
| Q3 (lAEh )1 .70 kg )1 ) | Q3 | 53.1 | L/h/70kg |
| V3 (lAE70 kg )1 ) | V3 | 35.4 | L/70kg |
| ALAG 1(susp) (h) | tlag | 15.0 | h |
| Ka 1(susp) (h )1 ) | kabs | 57.4 | h |
| F 1FR(susp) | FR | 0.17 | susp |
| F (susp) | Fab | 0.02 | susp |
| flow rate | Q | 1.0 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant for diclofenac is recorded in hours instead of inverse hours, causing a structural dimension mismatch.**

The model builder assigned an absorption rate constant of 57.4 hours, where the unit should be inverse hours. This dimension mismatch prevented the structural parameter from being converted to SI units. Consequently, the model was rejected due to the invalid unit for the diclofenac absorption process. Extracted — diclofenac: CL 16.9 L/h/70kg, V1 20.1 L/70kg, Q2 37.5 L/h/70kg, V2 32.7 L/70kg, Q3 53.1 L/h/70kg, V3 35.4 L/70kg, tlag 15 h, kabs 57.4 h, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has 0.02, the second reading 0.36; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (lAEh )1 AE70 kg )1 ) | `Q22` · CL | 16.9 | L/h/70kg | 4.694e-06 | m3/s | L/h | llm_confirmed (0.6) | tab_1:row5:col1, tab_1:row5:col2 |
| V1 (lAE70 kg )1 ) | `Q63` · V1 | 20.1 | L/70kg | 0.0201 | m3 | L | llm_confirmed (0.6) | tab_1:row6:col1, tab_1:row6:col2 |
| Q2 (lAEh )1 AE70 kg )1 ) | `Q99` · Q2 | 37.5 | L/h/70kg | 1.042e-05 | m3/s | L/h | llm_confirmed (0.6) | tab_1:row7:col1, tab_1:row7:col2 |
| V2 (lAE70 kg )1 ) | `Q64` · V2 | 32.7 | L/70kg | 0.0327 | m3 | L | llm_confirmed (0.6) | tab_1:row8:col1, tab_1:row8:col2 |
| Q3 (lAEh )1 .70 kg )1 ) | `Q308` · Q3 | 53.1 | L/h/70kg | 1.475e-05 | m3/s | L/h | llm_confirmed (0.6) | tab_1:row9:col1, tab_1:row9:col2 |
| V3 (lAE70 kg )1 ) | `Q77` · V3 | 35.4 | L/70kg | 0.0354 | m3 | L | llm_confirmed (0.6) | tab_1:row10:col1, tab_1:row10:col2 |
| ALAG 1(susp) (h) | `Q83` · tlag | 15.0 | h | 5.4e+04 | s | h | llm_confirmed (0.6) | tab_1:row12:col1, tab_1:row12:col2 |
| Ka 1(susp) (h )1 ) | `Q49` · kabs | 57.4 | h |  |  | h | llm_confirmed (0.6) | tab_1:row14:col1, tab_1:row14:col2 |
| F 1FR(susp) | `Q43` · FR | 0.17 | susp |  |  | s·usp | llm (0.6) | tab_1:row16:col1, tab_1:row16:col2 |
| F (susp) | `Q40` · Fab | 0.02 | susp |  |  |  | exact (1) | tab_1:row17:col1, tab_1:row17:col2 |
| flow rate | `Q30` · Q | 1.0 | mL/min | 1.667e-08 | m3/s | L/h | review_gapfill (0.7) | Matharoo_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q83 ('ALAG 2(susp) (h)', value '67.5') — already have one for this compound
- unit_dimension_mismatch: 'Ka 1(susp) (h )1 )' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Ka 2(susp) (h )1 )' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Ka 2(susp) (h )1 )', value '75.5') — already have one for this compound
- unit_dimension_unknown: 'susp' (FR)
- dropped duplicate Q83 ('ALAG 1(supp) (h)', value '15.0') — already have one for this compound
- unit_dimension_mismatch: 'Ka 1(supp) (h )1 )' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Ka 1(supp) (h )1 )', value '22.0') — already have one for this compound
- dropped duplicate Q83 ('ALAG 1(disptab) (h)', value '15.0') — already have one for this compound
- dropped duplicate Q83 ('ALAG 2(disptab) (h)', value '43.4') — already have one for this compound
- unit_dimension_mismatch: 'Ka 1(disptab) (h )1 )' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Ka 1(disptab) (h )1 )', value '43.5') — already have one for this compound
- unit_dimension_mismatch: 'Ka 2(disptab) (h )1 )' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Ka 2(disptab) (h )1 )', value '27.5') — already have one for this compound
- unit_dimension_unknown: 'disptab' (FR)
- dropped duplicate Q43 ('F 1FR(disptab)', value '0.0019') — already have one for this compound
- dropped unlinked row (NIL): 'Intravenous (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row30:col1'])
- dropped unlinked row (NIL): 'Suspension (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row31:col1'])
- dropped unlinked row (NIL): 'Suppository (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row32:col1'])
- dropped unlinked row (NIL): 'Dispersible tablet (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row33:col1'])
- implicit units: 'CL (lAEh )1 AE70 kg )1 )' → L/h/70kg (from the paper text: "Table 2 header text (in the provided prompt context) states: 'clearance (CL) (lAEh )1 AE70 kg )1 )', where lAEh )1 AE70 ")
- implicit units: 'V1 (lAE70 kg )1 )' → L/70kg (from the paper text: "Table 2 header text states: 'central volume (V1) (lAE70 kg )1 )', where lAE70 kg )1 represents L/70kg.")
- implicit units: 'Q2 (lAEh )1 AE70 kg )1 )' → L/h/70kg (from the paper text: "Table 2 header text states: 'inter-compartmental CLs (Q2 and Q3) ... (lAEh )1 AE70 kg )1 )', where lAEh )1 AE70 kg )1 re")
- implicit units: 'V2 (lAE70 kg )1 )' → L/70kg (from the paper text: "Table 2 header text states: 'peripheral compartment volumes (V2 and V3) ... (lAE70 kg )1 )', where lAE70 kg )1 represent")
- implicit units: 'Q3 (lAEh )1 .70 kg )1 )' → L/h/70kg (from the paper text: "Table 2 header text states: 'inter-compartmental CLs (Q2 and Q3) ... (lAEh )1 AE70 kg )1 )', where lAEh )1 AE70 kg )1 re")
- implicit units: 'V3 (lAE70 kg )1 )' → L/70kg (from the paper text: "Table 2 header text states: 'peripheral compartment volumes (V2 and V3) ... (lAE70 kg )1 )', where lAE70 kg )1 represent")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q30 (Q) from Matharoo_2025's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 0.02 | 0.36 | mismatch |
| `gpt-oss-120b` | `parameters[alag 1(susp)].value` | 15.0 | 0.12 | mismatch |
| `gpt-oss-120b` | `parameters[cl (laeh )1 ae70 kg )1 )].value` | 16.9 | 16.5 | mismatch |
| `gpt-oss-120b` | `parameters[f 1fr].value` | 0.17 | 0.31 | mismatch |
| `gpt-oss-120b` | `parameters[f].value` | 0.02 | 0.36 | mismatch |
| `gpt-oss-120b` | `parameters[intravenous]` |  | 8.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka 1(susp) (h )1 )].value` | 57.4 | 1.65 | mismatch |
| `gpt-oss-120b` | `parameters[q2 (laeh )1 ae70 kg )1 )].value` | 37.5 | 1.75 | mismatch |
| `gpt-oss-120b` | `parameters[q3 (laeh )1 .70 kg )1 )].value` | 53.1 | 7.21 | mismatch |
| `gpt-oss-120b` | `parameters[v1 (lae70 kg )1 )].value` | 20.1 | 3.68 | mismatch |
| `gpt-oss-120b` | `parameters[v2 (lae70 kg )1 )].value` | 32.7 | 7.48 | mismatch |
| `gpt-oss-120b` | `parameters[v3 (lae70 kg )1 )].value` | 35.4 | 3.79 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Matharoo_2025:review'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_1:row9:col1', 'tab_1:row9:col2'] |
| C5_dimension_Q49 | fail | [time] | h | ['tab_1:row14:col1', 'tab_1:row14:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row6:col1', 'tab_1:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_1:row8:col1', 'tab_1:row8:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['tab_1:row10:col1', 'tab_1:row10:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_1:row12:col1', 'tab_1:row12:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['tab_1:row7:col1', 'tab_1:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.9 | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.9 L/h | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.1 L | ['tab_1:row6:col1', 'tab_1:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 32.7 L | ['tab_1:row8:col1', 'tab_1:row8:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Standing2011_reference&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Standing2011_reference%0APaper%3A%20Standing_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Standing2011_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 22:55 UTC</sub>
