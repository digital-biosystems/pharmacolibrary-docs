<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadiazine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/&quot;},{&quot;label&quot;:&quot;Ekstrand_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadiazine_Boulanger2024_reference&quot;,&quot;label&quot;:&quot;Boulanger_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Boulanger2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Tajima2023v2_sdz&quot;,&quot;label&quot;:&quot;Tajima_2023_2_sdz&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfadiazine — `Sulfadiazine_Ekstrand2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> Sulfadiazine clearance of 0.09 L/kg/h was rejected because the unit could not be converted to SI, and an unlinked compartment exists.

<div class="pk-model-meta" hidden drug="sulfadiazine" model-id="Sulfadiazine_Ekstrand2022_reference" status="rejected" stale="false" population="neonatal foals" measured-compound="sulfadiazine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Ekstrand C, Nostell K, Gehring R, Bondesson U, Bröjer J. The disposition of trimethoprim and sulfadiazine in neonatal foals after intravenous administration. Veterinary medicine and science 8(3):1065–1071 (2022).
  ·  DOI: [10.1002/vms3.763](https://doi.org/10.1002/vms3.763)

## Population and dosing

**Population:** neonatal foals · condition septicaemia · age group neonate · n = eight.

**Dosed compound ≠ measured compound:** dosed trimethoprim and sulfadiazine, measured sulfadiazine.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc | V1 | 0.47 | L/kg |
| Cl | CL | 0.09 | L/kg/h |
| Cld | Q | 0.41 | L/kg/h |
| α | λ1 | 3.84 |  |
| β | kel | 0.13 | 1/h |
| t 1/2 α | t1/2α | 0.18 | h |
| t 1/2 β | t1/2β | 5.3 | h |
| Vss | Vss | 0.61 | L/kg |
| 24 h fAUC | AUCt | 246.8 | μg·h/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sulfadiazine clearance of 0.09 L/kg/h was rejected because the unit could not be converted to SI, and an unlinked compartment exists.**

The record lists total clearance for sulfadiazine as 0.09 L/kg/h, but this unit could not be converted to standard SI units. Additionally, the model structure includes trimethoprim linked to sulfadiazine only via co-administration, leaving a compartment without a clear pharmacokinetic path from the dose. Extracted — sulfadiazine: V1 0.47 L/kg, CL 0.09 L/kg/h, Q 0.41 L/kg/h, λ1 3.84, kel 0.13 1/h, t1/2α 0.18 h, t1/2β 5.3 h, Vss 0.61 L/kg, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trimethoprim and sulfadiazine, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc | `Q63` · V1 | 0.47 | L/kg | 0.0329 | m3 | L | exact (1) | vms3763-tbl-0001:row2:col2, vms3763-tbl-0001:row2:col3 |
| Cl | `Q22` · CL | 0.09 | L/kg/h | 1.75e-06 | m3/s | L/h | exact (1) | vms3763-tbl-0001:row4:col2, vms3763-tbl-0001:row4:col3 |
| Cld | `Q30` · Q | 0.41 | L/kg/h | 7.972e-06 | m3/s | L/h | exact (1) | vms3763-tbl-0001:row5:col2, vms3763-tbl-0001:row5:col3 |
| α | `Q67` · λ1 | 3.84 |  |  |  |  | exact (1) | vms3763-tbl-0001:row7:col1, vms3763-tbl-0001:row7:col2 |
| β | `Q47` · kel | 0.13 | 1/h | 3.611e-05 | 1/s | 1/h | exact (1) | vms3763-tbl-0001:row8:col1, vms3763-tbl-0001:row8:col2 |
| t 1/2 α | `Q59` · t1/2α | 0.18 | h | 648 | s | h | space_fold (0.95) | vms3763-tbl-0001:row10:col2 |
| t 1/2 β | `Q60` · t1/2β | 5.3 | h | 1.908e+04 | s | h | space_fold (0.95) | vms3763-tbl-0001:row11:col2 |
| Vss | `Q65` · Vss | 0.61 | L/kg | 0.0427 | m3 | L | exact (1) | vms3763-tbl-0001:row13:col2 |
| 24 h fAUC | `Q19` · AUCt | 246.8 | μg·h/ml |  |  | μg·h/ml | llm (0.6) | vms3763-tbl-0001:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Vt' — extend the ontology if this is a real PK parameter (source ['vms3763-tbl-0001:row3:col2', 'vms3763-tbl-0001:row3:col3'])
- dropped duplicate Q47 ('k 10', value '0.17') — already have one for this compound
- dropped unlinked row (NIL): 't 1/2 c' — extend the ontology if this is a real PK parameter (source ['vms3763-tbl-0001:row12:col2'])
- implicit units: 'Vc' → L/kg (from the paper text: "The text explicitly states: 'The Vss for TMP in this study (1.99 L/kg) was consistent with 1.77 L/kg previously reported")
- implicit units: 'Cl' → L/kg/h (from the paper text: "The text states: 'For SDZ, the Vss was 0.61 L/kg and clearance was 0.09 L/kg·h.' Parameter 2 is Cl with value 0.09, whic")
- implicit units: 'Cld' → L/kg/h (from the paper text: "The table caption defines Cld as the 'inter‐compartmental distribution clearance'. In the text, clearance parameters are")
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'β' → 1/h (from the paper text: "Parameter 5 is β, described in the caption as the 'terminal rate constant'. Rate constants have units of 1/time. The ass")
- implicit units: 't 1/2 α' → h (from the paper text: "The text describes 'half-lives' implicitly via the time scale of the study (doses every 12 h). Standard pharmacokinetic ")
- implicit units: 't 1/2 β' → h (from the paper text: "Parameter 7 is t1/2 β, the terminal half-life. In the context of the 12-hour dosing interval mentioned in the text ('adm")
- implicit units: 'Vss' → L/kg (from the paper text: "The text explicitly states: 'For SDZ, the Vss was 0.61 L/kg'. Parameter 8 is Vss with value 0.61, matching the text's va")
- implicit units: '24 h fAUC' → μg·h/ml (from the paper text: "The text explicitly states: 'The 24 h fAUC was for SDZ 246.8 μg·h/ml'. Parameter 9 is '24 h fAUC' with value 246.8, matc")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfadiazine
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
| `gpt-oss-120b` | not confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trimethoprim', 'sulfadiazine', 'co-administration']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[24 h fauc].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss-120b` | `parameters[vt]` |  | 0.14 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trimethoprim and sulfadiazine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulfadiazine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['vms3763-tbl-0001:row14:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['vms3763-tbl-0001:row4:col2', 'vms3763-tbl-0001:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['vms3763-tbl-0001:row5:col2', 'vms3763-tbl-0001:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['vms3763-tbl-0001:row8:col1', 'vms3763-tbl-0001:row8:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['vms3763-tbl-0001:row10:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['vms3763-tbl-0001:row11:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['vms3763-tbl-0001:row2:col2', 'vms3763-tbl-0001:row2:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['vms3763-tbl-0001:row13:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['vms3763-tbl-0001:row7:col1', 'vms3763-tbl-0001:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.09 | ['vms3763-tbl-0001:row4:col2', 'vms3763-tbl-0001:row4:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.3 L/h | ['vms3763-tbl-0001:row4:col2', 'vms3763-tbl-0001:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 32.9 L | ['vms3763-tbl-0001:row2:col2', 'vms3763-tbl-0001:row2:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 42.7 L | ['vms3763-tbl-0001:row13:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfadiazine%5D%20Sulfadiazine_Ekstrand2022_reference&body=Drug%3A%20sulfadiazine%0ARecord%3A%20Sulfadiazine_Ekstrand2022_reference%0APaper%3A%20Ekstrand_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:38 UTC</sub>
