<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Vet_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Bisaso2026_reference&quot;,&quot;label&quot;:&quot;Bisaso_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Bisaso2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_geometric_mean&quot;,&quot;label&quot;:&quot;Marques_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_reference&quot;,&quot;label&quot;:&quot;Marques_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Walsh2023_reference&quot;,&quot;label&quot;:&quot;Walsh_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Vet2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the R-salbutamol and S-salbutamol metabolites are orphan compartments with no defined formation rate constants from the parent salbutamol.

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Vet2020_reference" status="rejected" stale="false" population="children with refractory status asthmaticus" measured-compound="R-salbutamol, S-salbutamol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Vet NJ, de Winter BCM, Koninckx M, Boeschoten SA, Boehmer ALM, Verhallen JT et al. Population Pharmacokinetics of Intravenous Salbutamol in Children with Refractory Status Asthmaticus. Clinical pharmacokinetics 59(2):257–264 (2020).
  ·  DOI: [10.1007/s40262-019-00811-y](https://doi.org/10.1007/s40262-019-00811-y)

## Population and dosing

**Population:** children with refractory status asthmaticus · condition refractory status asthmaticus · age group child · n = $.

**Dosing:** 0.1 μg/kg/min, iv, multiple.

**Dosed compound ≠ measured compound:** dosed salbutamol, measured R-salbutamol, S-salbutamol.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLR-salbutamol (L/h/70 kg) | CLR | 16.3 | L/h/70 kg |  |
| CLS-salbutamol (L/h/70 kg) | CL | 8.82 | L/h/70 kg |  |
| Vc (L/70 kg) | V1 | 12.9 | L/70 kg |  |
| Q (L/h/70 kg) | Q | 20.4 | L/h/70 kg | 41.5 |
| Vp (L/70 kg) | V2 | 45.5 | L/70 kg | 9.6 |
| ka (h−1) | kabs | 3.71 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the R-salbutamol and S-salbutamol metabolites are orphan compartments with no defined formation rate constants from the parent salbutamol.**

The record defines interconversion links from salbutamol to both enantiomers but leaves the link parameters undefined, making the metabolite compartments unreachable from the dose. The second reader disagrees with the extracted total clearance of 8.82 L/h/70 kg and renal clearance of 16.3 L/h/70 kg, citing values of 37 and 42 respectively. Additionally, the central volume of distribution is recorded as 12.9 L/70 kg, whereas the second reader identified 281. Extracted — salbutamol: CLR 16.3 L/h/70 kg, CL 8.82 L/h/70 kg, V1 12.9 L/70 kg, Q 20.4 L/h/70 kg, V2 45.5 L/70 kg; R-salbutamol, S-salbutamol: kabs 3.71 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has R- and S-salbutamol, the second reading salbutamol; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLR-salbutamol (L/h/70 kg) | `Q26` · CLR | 16.3 | L/h/70 kg | 4.528e-06 | m3/s | l/(h·70kg) |  | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col3 |
| CLS-salbutamol (L/h/70 kg) | `Q22` · CL | 8.82 | L/h/70 kg | 2.45e-06 | m3/s | l/(h·70kg) |  | llm (0.6) | Tab2:row3:col1, Tab2:row3:col3 |
| Vc (L/70 kg) | `Q63` · V1 | 12.9 | L/70 kg | 0.0129 | m3 | l/70kg |  | exact (1) | Tab2:row4:col1, Tab2:row4:col3 |
| Q (L/h/70 kg) | `Q30` · Q | 20.4 | L/h/70 kg | 5.667e-06 | m3/s | l/(h·70kg) | 41.5 | exact (1) | Tab2:row5:col1 |
| Vp (L/70 kg) | `Q64` · V2 | 45.5 | L/70 kg | 0.0455 | m3 | l/70kg | 9.6 | exact (1) | Tab2:row6:col1 |
| ka (h−1) | `Q49` · kabs | 3.71 | h−1 | 0.001031 | 1/s | 1/h |  | review_gapfill (0.7) | Marques_2024_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Baseline dose (μg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1', 'Tab2:row1:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=R-salbutamol, S-salbutamol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- gap-filled Q49 (kabs) from Marques_2024_2's review values (primary lacked it)

**Extraction notes:**
- table Tab2: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.529 (9/17 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['salbutamol', 'r-salbutamol', 'interconversion'], ['salbutamol', 's-salbutamol', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[clr-salbutamol].value` | 16.3 | 42 | mismatch |
| `gpt-oss-120b` | `parameters[cls-salbutamol].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cls-salbutamol].value` | 8.82 | 37 | mismatch |
| `gpt-oss-120b` | `parameters[k a1]` | 31.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time before dose-response]` | 15.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].value` | 12.9 | 281 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | R- and S-salbutamol | salbutamol | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1', 'Tab2:row3:col3'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col1', 'Tab2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Marques_2024_2:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.82 | ['Tab2:row3:col1', 'Tab2:row3:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.82 L/h | ['Tab2:row3:col1', 'Tab2:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.9 L | ['Tab2:row4:col1', 'Tab2:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 45.5 L | ['Tab2:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalbutamol%5D%20Salbutamol_Vet2020_reference&body=Drug%3A%20salbutamol%0ARecord%3A%20Salbutamol_Vet2020_reference%0APaper%3A%20Vet_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salbutamol/Salbutamol_Vet2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 14:34 UTC</sub>
