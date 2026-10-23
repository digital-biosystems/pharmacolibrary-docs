<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;alemtuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/&quot;},{&quot;label&quot;:&quot;Admiraal_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alemtuzumab_Dong2022_reference&quot;,&quot;label&quot;:&quot;Dong_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alemtuzumab — `Alemtuzumab_Admiraal2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the maximum metabolic rate for alemtuzumab is reported in arbitrary units, preventing conversion to standard SI units.

<div class="pk-model-meta" hidden drug="alemtuzumab" model-id="Alemtuzumab_Admiraal2019_reference" status="rejected" stale="false" population="pediatric hematopoietic cell transplantation patients" measured-compound="alemtuzumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Admiraal R, Jol-van der Zijde CM, Furtado Silva JM, Knibbe CAJ, Lankester AC, Boelens JJ et al. Population Pharmacokinetics of Alemtuzumab (Campath) in Pediatric Hematopoietic Cell Transplantation: Towards Individualized Dosing to Improve Outcome. Clinical pharmacokinetics 58(12):1609–1620 (2019).
  ·  DOI: [10.1007/s40262-019-00782-0](https://doi.org/10.1007/s40262-019-00782-0)

## Population and dosing

**Population:** pediatric hematopoietic cell transplantation patients · condition hematopoietic cell transplantation · age group mixed.

**Dosing:** 14, 105 mg, iv, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLpop (L/day) | CL | 0.24 | L/day | 0.25 |
| V2,pop (factor of V1) | V2 | 0.74 | factor of V1 | 0.7 |
| Q (L/day) | Q | 0.2 | L/day | 0.18 |
| d | D1 | 0.75 | h | 0.74 |
| Vmax,pop (AU/day) | Vmax | 0.4 | AU/day | 0.42 |
| Km,pop (AU/L) | Km | 1.48 | AU/L | 1.38 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the maximum metabolic rate for alemtuzumab is reported in arbitrary units, preventing conversion to standard SI units.**

The maximum rate of metabolism by an enzymatically mediated reaction is reported as 0.4 AU/day. This unit could not be converted to SI, so the parameter lacked a standard value. Consequently, a dimension mismatch check failed on this structural parameter. Extracted — alemtuzumab: CL 0.24 L/day, V2 0.74 factor of V1, Q 0.2 L/day, D1 0.75 h, Vmax 0.4 AU/day, Km 1.48 AU/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alemtuzumab, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLpop (L/day) | `Q22` · CL | 0.24 | L/day | 2.778e-09 | m3/s | l/d | 0.25 | llm (0.6) | Tab2:row4:col1, Tab2:row4:col3, Tab2:row4:col4 |
| V2,pop (factor of V1) | `Q64` · V2 | 0.74 | factor of V1 |  |  | factorofv1 | 0.7 | llm_confirmed (0.6) | Tab2:row10:col1, Tab2:row10:col3, Tab2:row10:col4 |
| Q (L/day) | `Q30` · Q | 0.2 | L/day | 2.315e-09 | m3/s | l/d | 0.18 | exact (1) | Tab2:row12:col1, Tab2:row12:col3, Tab2:row12:col4 |
| d | `Q310` · D1 | 0.75 | h | 2700 | s | h | 0.74 | exact (1) | Tab2:row13:col1, Tab2:row13:col3, Tab2:row13:col4 |
| Vmax,pop (AU/day) | `Q66` · Vmax | 0.4 | AU/day |  |  | au/d | 0.42 | llm_confirmed (0.6) | Tab2:row14:col1, Tab2:row14:col3, Tab2:row14:col4 |
| Km,pop (AU/L) | `Q1` · Km | 1.48 | AU/L |  |  | au/l | 1.38 | llm_confirmed (0.6) | Tab2:row15:col1, Tab2:row15:col3, Tab2:row15:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V1,i=V1,pop×WTWTmedc | Q63 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- column '1000 bootstrap replicates (96.1% successful)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1', 'Tab2:row5:col3', 'Tab2:row5:col4'])
- dropped duplicate Q63 ('V1,pop (L)', value '2') — already have one for this compound
- dropped unlinked row (NIL): 'c' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col1', 'Tab2:row9:col3', 'Tab2:row9:col4'])
- unit_dimension_unknown: 'factor of V1' (V2)
- unit_dimension_mismatch: 'Vmax,pop (AU/day)' → Q66 (unit '[length] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km,pop (AU/L)' → Q1 (unit '1 / [length] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- routed 'Interindividual variability on CL (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability on V1 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability on Km (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- implicit units: 'd' → h (from the popPK convention: "The parameter 'd' represents the duration of a zero-order input (infusion). In population pharmacokinetic modeling, time")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alemtuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'alemtuzumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clpop]` | 0.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpop]` |  | 0.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km,pop]` | 1.48 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[km,pop]` |  | 1.48 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 0.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 0.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1,i=v1,pop×wtwtmedc]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1,i=v1,pop×wtwtmedc]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2,pop]` | 0.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2,pop]` |  | 0.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax,pop]` | 0.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax,pop]` |  | 0.4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alemtuzumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alemtuzumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | 1 / [length] ** 2 | AU/L | ['Tab2:row15:col1', 'Tab2:row15:col3', 'Tab2:row15:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col1', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row12:col1', 'Tab2:row12:col3', 'Tab2:row12:col4'] |
| C5_dimension_Q310 | pass | [time] |  | ['Tab2:row13:col1', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C5_dimension_Q66 | fail | [length] / [time] | AU/day | ['Tab2:row14:col1', 'Tab2:row14:col3', 'Tab2:row14:col4'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | factor of V1 | ['Tab2:row10:col1', 'Tab2:row10:col3', 'Tab2:row10:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.24 | ['Tab2:row4:col1', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.01 L/h | ['Tab2:row4:col1', 'Tab2:row4:col3', 'Tab2:row4:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balemtuzumab%5D%20Alemtuzumab_Admiraal2019_reference&body=Drug%3A%20alemtuzumab%0ARecord%3A%20Alemtuzumab_Admiraal2019_reference%0APaper%3A%20Admiraal_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alemtuzumab/Alemtuzumab_Admiraal2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:00 UTC</sub>
