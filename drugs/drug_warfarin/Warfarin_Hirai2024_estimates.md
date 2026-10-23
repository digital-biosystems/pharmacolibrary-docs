<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Hirai_2024 \u00b7 estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Aoyama_2022_INR&quot;,&quot;label&quot;:&quot;Aoyama_2022 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Aoyama_2022_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hirai_2024_PT_INR&quot;,&quot;label&quot;:&quot;Hirai_2024 \u00b7 PT-INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Hirai_2024_PT_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Hirai2024_estimates`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Warfarin record was rejected because its model structure lacks a valid dosing path for the dose.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Hirai2024_estimates" status="rejected" stale="false" population="adult patients with renal impairment" measured-compound="warfarin" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Hirai T, Aoyama T, Tsuji Y, Itoh T, Matsumoto Y, Iwamoto T. Kinetic-pharmacodynamic model of warfarin for prothrombin time-international normalized ratio in Japanese patients. British journal of clinical pharmacology 90(3):828–836 (2024).
  ·  DOI: [10.1111/bcp.15967](https://doi.org/10.1111/bcp.15967)

## Population and dosing

**Population:** adult patients with renal impairment · condition renal impairment · age group adult.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ke / h | kel | 0.0284 | 1/h | 0.850 (None% RSE) |
| ka / h | kabs | 2.0 | 1/h |  |
| MTT2 – MTT1, h | MTT | 88.7 | h |  |
| egfr_on_edr50 | egfr_on_edr50 | 0.118 |  |  |
| Vd | V | 14.3 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Warfarin record was rejected because its model structure lacks a valid dosing path for the dose.**

The model structure contains a compartment with no path from the dose administration. Although specific pharmacokinetic parameters like elimination rate constant (0.0284 1/h) and volume of distribution (14.3 L) are reported, the structural defect prevents valid model evaluation. Extracted — warfarin: kel 0.0284 1/h, kabs 2 1/h, MTT 88.7 h, V 14.3 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has warfarin, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ke / h | `Q47` · kel | 0.0284 | 1/h | 7.889e-06 | 1/s | 1/h | llm_confirmed (0.6) | Hirai_2024_table_2:row1:col1 | 0.850 (None% RSE) |
| ka / h | `Q49` · kabs | 2.0 | 1/h | 0.0005556 | 1/s | 1/h | llm_confirmed (0.6) | Hirai_2024_table_2:row2:col1 |  |
| MTT2 – MTT1, h | `Q81` · MTT | 88.7 | h |  |  | h | llm (0.6) | Hirai_2024_table_2:row10:col1 |  |
| egfr_on_edr50 | `Q900` · egfr_on_edr50 | 0.118 |  |  |  |  |  | Hirai_2024_table_2:row14:col1 |  |
| Vd | `Q61` · V | 14.3 | L | 0.0143 | m3 | L | review_gapfill (0.7) | Aoyama_2022:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωke' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωEDR50' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ' routed out of structural estimates ('Residual error')
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hirai_2024_table_2:row6:col1'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['Hirai_2024_table_2:row7:col1'])
- dropped unlinked row (NIL): 'EDR50, mg/h' — extend the ontology if this is a real PK parameter (source ['Hirai_2024_table_2:row8:col1'])
- dropped unlinked row (NIL): 'MTT1, h' — extend the ontology if this is a real PK parameter (source ['Hirai_2024_table_2:row9:col1'])
- dropped duplicate Q81 ('MTT2, h', value '116.9') — already have one for this compound
- dropped unlinked row (NIL): 'BSA on EDR50' — extend the ontology if this is a real PK parameter (source ['Hirai_2024_table_2:row12:col1'])
- dropped PD-category row 'Alb on EDR50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hirai_2024_table_2:row13:col1'])
- covariate level 'eGFR on EDR50' → Q900:egfr_on_edr50 = 0.118 (linear_fractional on the model)
- implicit units: 'ke / h' → 1/h (from the popPK convention: "The parameter 'ke' is identified as the elimination rate constant in the model equations (dA2/dt = ka*A1 - ke*A2). First")
- implicit units: 'ka / h' → 1/h (from the popPK convention: "The parameter 'ka' is identified as the absorption rate constant. The model equation dA1/dt = -ka*A1 describes first-ord")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=warfarin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- population split: 'estimates' subgroup of Hirai_2024 (paper reports 2 populations: estimates, prior values)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Aoyama_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Hirai_2024_table_2: ambiguous_uncertainty_binding

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[egfr_on_edr50]` | 0.118 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 2.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` | 0.0284 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt1]` | 28.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 14.3 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | warfarin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | PT-INR | unknown | mismatch |

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
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Hirai_2024_table_2:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hirai_2024_table_2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Aoyama_2022:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['EDR50'] |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.3 L | ['Aoyama_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Hirai2024_estimates&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Hirai2024_estimates%0APaper%3A%20Hirai_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Hirai2024_estimates%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:01 UTC</sub>
