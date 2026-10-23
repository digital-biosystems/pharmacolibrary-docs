<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Ekstrand_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Ekstrand2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> Trimethoprim's intercompartmental link to sulfadiazine lacks a rate parameter, leaving the metabolite orphaned, while one reported unit lacks a defined conversion to standard SI units.

<div class="pk-model-meta" hidden drug="trimethoprim" model-id="Trimethoprim_Ekstrand2022_reference" status="rejected" stale="false" population="neonatal foals" measured-compound="trimethoprim" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Ekstrand C, Nostell K, Gehring R, Bondesson U, Bröjer J. The disposition of trimethoprim and sulfadiazine in neonatal foals after intravenous administration. Veterinary medicine and science 8(3):1065–1071 (2022).
  ·  DOI: [10.1002/vms3.763](https://doi.org/10.1002/vms3.763)

## Population and dosing

**Population:** neonatal foals · condition healthy · age group neonate.

**Dosing:** 175, 875 mg, iv, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed trimethoprim and sulfadiazine, measured trimethoprim.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc | V1 | 1.38 | L/kg |
| Vt | V | 0.61 | L/kg |
| Cl | CL | 25.4 | L/kg/h |
| Cld | Q | 3.83 | L/kg/h |
| α | λ1 | 9.13 |  |
| β | kel | 0.16 | 1/h |
| t 1/2 α | t1/2α | 0.08 | h |
| t 1/2 β | t1/2β | 4.2 | h |
| Vss | Vss | 1.99 | L/kg |
| 24 h fAUC | AUCt | 11.5 | μg·h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.688). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Trimethoprim's intercompartmental link to sulfadiazine lacks a rate parameter, leaving the metabolite orphaned, while one reported unit lacks a defined conversion to standard SI units.**

The model structure links trimethoprim to sulfadiazine, but the associated intercompartmental link parameter is recorded as 'none' with an unknown kind, meaning no transfer rate is defined to connect the metabolite to the dose. Furthermore, one parameter has a reported unit for which no standard international unit equivalent is available, preventing the value from being expressed in SI units. Extracted — trimethoprim: V1 1.38 L/kg, V 0.61 L/kg, CL 25.4 L/kg/h, Q 3.83 L/kg/h, λ1 9.13, kel 0.16 1/h, t1/2α 0.08 h, t1/2β 4.2 h, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trimethoprim and sulfadiazine, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc | `Q63` · V1 | 1.38 | L/kg | 0.0966 | m3 | L | exact (1) | vms3763-tbl-0001:row2:col5, vms3763-tbl-0001:row2:col6 |
| Vt | `Q61` · V | 0.61 | L/kg | 0.0427 | m3 | L | llm (0.6) | vms3763-tbl-0001:row3:col5, vms3763-tbl-0001:row3:col6 |
| Cl | `Q22` · CL | 25.4 | L/kg/h | 0.0004939 | m3/s | L/h | exact (1) | vms3763-tbl-0001:row4:col4, vms3763-tbl-0001:row4:col5, vms3763-tbl-0001:row4:col6, vms3763-tbl-0001:row4:col7 |
| Cld | `Q30` · Q | 3.83 | L/kg/h | 7.447e-05 | m3/s | L/h | exact (1) | vms3763-tbl-0001:row5:col5, vms3763-tbl-0001:row5:col6 |
| α | `Q67` · λ1 | 9.13 |  |  |  |  | exact (1) | vms3763-tbl-0001:row7:col5 |
| β | `Q47` · kel | 0.16 | 1/h | 4.444e-05 | 1/s | 1/h | exact (1) | vms3763-tbl-0001:row8:col5 |
| t 1/2 α | `Q59` · t1/2α | 0.08 | h | 288 | s | h | space_fold (0.95) | vms3763-tbl-0001:row10:col5 |
| t 1/2 β | `Q60` · t1/2β | 4.2 | h | 1.512e+04 | s | h | space_fold (0.95) | vms3763-tbl-0001:row11:col5 |
| Vss | `Q65` · Vss | 1.99 | L/kg | 0.1393 | m3 | L | exact (1) | vms3763-tbl-0001:row13:col5 |
| 24 h fAUC | `Q19` · AUCt | 11.5 | μg·h/mL |  |  | μg·h/mL | llm (0.6) | vms3763-tbl-0001:row14:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q47 ('k 10', value '0.24') — already have one for this compound
- dropped duplicate Q63 ('t 1/2 c', value '2.9') — already have one for this compound
- implicit units: 'Vc' → L/kg (from the paper text: "Text states: 'The Vss for TMP in this study (1.99 L/kg) was consistent with 1.77 L/kg previously reported...' and 'The v")
- implicit units: 'Vt' → L/kg (from the paper text: "Text states: 'For SDZ, the Vss was 0.61 L/kg...'. Vt (V2) is a volume parameter consistent with Vss units reported in th")
- implicit units: 'Cl' → L/kg/h (from the paper text: "Text states: 'The value for Cl (0.33 L/kg·h) was, however, lower compared with 0.7 and 1.0 L/kg·h...'. Although the tabl")
- implicit units: 'Cld' → L/kg/h (from the popPK convention: 'Intercompartmental clearance (Cld/Q) is a clearance parameter. In population PK, clearances are typically reported in vo')
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'β' → 1/h (from the popPK convention: 'Terminal elimination rate constant (beta) is a first-order rate constant. Standard unit is 1/h. Value 0.16 1/h correspon')
- implicit units: 't 1/2 α' → h (from the popPK convention: 'Half-life is a time parameter. Standard unit is h. Value 0.08 h is consistent with alpha = 9.13 1/h (ln(2)/9.13 ≈ 0.076 ')
- implicit units: 't 1/2 β' → h (from the popPK convention: 'Half-life is a time parameter. Standard unit is h. Value 4.2 h is consistent with beta = 0.16 1/h (ln(2)/0.16 ≈ 4.33 h).')
- implicit units: 'Vss' → L/kg (from the paper text: "Text explicitly states: 'The Vss for TMP in this study (1.99 L/kg)...'")
- implicit units: '24 h fAUC' → μg·h/mL (from the paper text: "Text states: 'The 24 h fAUC for TMP was 11.5 μg·h/ml (8.2–14.6) (population mean [range]).'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trimethoprim
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trimethoprim', 'sulfadiazine', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[24 h fauc].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss-120b` | `parameters[vt].parameter_id` | Q61 | Q64 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | trimethoprim and sulfadiazine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trimethoprim | unknown | mismatch |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['vms3763-tbl-0001:row14:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['vms3763-tbl-0001:row4:col4', 'vms3763-tbl-0001:row4:col5', 'vms3763-tbl-0001:row4:col6', 'vms3763-tbl-0001:row4:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['vms3763-tbl-0001:row5:col5', 'vms3763-tbl-0001:row5:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['vms3763-tbl-0001:row8:col5'] |
| C5_dimension_Q59 | pass | [time] |  | ['vms3763-tbl-0001:row10:col5'] |
| C5_dimension_Q60 | pass | [time] |  | ['vms3763-tbl-0001:row11:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['vms3763-tbl-0001:row3:col5', 'vms3763-tbl-0001:row3:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['vms3763-tbl-0001:row2:col5', 'vms3763-tbl-0001:row2:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['vms3763-tbl-0001:row13:col5'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['vms3763-tbl-0001:row7:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25.4 | ['vms3763-tbl-0001:row4:col4', 'vms3763-tbl-0001:row4:col5', 'vms3763-tbl-0001:row4:col6', 'vms3763-tbl-0001:row4:col7'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.78e+03 L/h | ['vms3763-tbl-0001:row4:col4', 'vms3763-tbl-0001:row4:col5', 'vms3763-tbl-0001:row4:col6', 'vms3763-tbl-0001:row4:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 42.7 L | ['vms3763-tbl-0001:row3:col5', 'vms3763-tbl-0001:row3:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 96.6 L | ['vms3763-tbl-0001:row2:col5', 'vms3763-tbl-0001:row2:col6'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 139 L | ['vms3763-tbl-0001:row13:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrimethoprim%5D%20Trimethoprim_Ekstrand2022_reference&body=Drug%3A%20trimethoprim%0ARecord%3A%20Trimethoprim_Ekstrand2022_reference%0APaper%3A%20Ekstrand_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trimethoprim/Trimethoprim_Ekstrand2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:15 UTC</sub>
