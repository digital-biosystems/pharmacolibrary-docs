<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;rifaximin&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifaximin_Francis2019_reference&quot;,&quot;label&quot;:&quot;Francis_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Francis2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifaximin — `Rifaximin_Wang2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Rejected), but the paper was screened again on 2026-10-04 18:17 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The rifaximin record was rejected because the terminal half-life is dimensionally inconsistent: t1/2β is 0.11 while t1/2z is 5.98 h for the same two-compartment disposition, a structural-parameter mismatch.

<div class="pk-model-meta" hidden drug="rifaximin" model-id="Rifaximin_Wang2021_reference" status="rejected" stale="true" population="mice with S. aureus-induced mastitis" measured-compound="rifaximin" parameterization="mechanistic" topology="2C"></div>

## Citation
Wang H, Chen C, Chen X, Zhang J, Liu Y, Li X. PK/PD Modeling to Assess Rifaximin Clinical Dosage in a Mouse Model of Staphylococcus aureus-Induced Mastitis. Frontiers in veterinary science 8:651369 (2021).
  ·  DOI: [10.3389/fvets.2021.651369](https://doi.org/10.3389/fvets.2021.651369)

## Population and dosing

**Population:** mice with S. aureus-induced mastitis · condition mastitis.

**Dosing:** 25, 50, 100, 200, 400, 800 μg/gland, intramammary, multiple, every 8 h.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| V1 | V1 | 2.15 | L | 3.22 |
| V2 | V2 | 0.46 | L | 18.84 |
| Cl1 | CL | 0.29 | L/h | 1.57 |
| Cl2 | Q | 0.89 | L/h | 37.77 |
| α | λ1 | 2.38 |  | 35.39 |
| ß | t1/2β | 0.11 | h | 2.77 |
| T1/2 (h) | t1/2z | 5.98 | h |  |
| MRT (h) | MRT | 6.66 | h |  |
| AUC24 (h·μg/g) | AUCt | 176.83 | h·μg/g |  |
| Cmax (μg/g) | Cmax | 25.82 | μg/g |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The rifaximin record was rejected because the terminal half-life is dimensionally inconsistent: t1/2β is 0.11 while t1/2z is 5.98 h for the same two-compartment disposition, a structural-parameter mismatch.**

For rifaximin in mice with S. aureus-induced mastitis, the record carries two terminal half-life values, t1/2β = 0.11 and t1/2z = 5.98 h, which describe the same slowest elimination phase of the two-compartment model and cannot both be right; the dimension check on this structural parameter failed. In addition, the AUCt unit h·μg/g could not be converted to SI, so the parameter reached the model without an SI value. The other parameters (V1 2.15, V2 0.46, CL 0.29, Q 0.89, λ1 2.38, MRT 6.66 h, Cmax 25.82 μg/g) were extracted as reported. Extracted — rifaximin: V1 2.15, V2 0.46, CL 0.29, Q 0.89, λ1 2.38, t1/2β 0.11, t1/2z 5.98 h, MRT 6.66 h, … (+2).

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 2.15 | L | 0.00215 | m3 | L | 3.22 | exact (1) | T4:row1:col1, T4:row1:col3, T4:row1:col4 |
| V2 | `Q64` · V2 | 0.46 | L | 0.00046 | m3 | L | 18.84 | exact (1) | T4:row2:col1, T4:row2:col3, T4:row2:col4 |
| Cl1 | `Q22` · CL | 0.29 | L/h | 8.056e-08 | m3/s | L/h | 1.57 | llm (0.6) | T4:row3:col1, T4:row3:col3, T4:row3:col4 |
| Cl2 | `Q30` · Q | 0.89 | L/h | 2.472e-07 | m3/s | L/h | 37.77 | special_case (0.95) | T4:row4:col1, T4:row4:col3, T4:row4:col4 |
| α | `Q67` · λ1 | 2.38 |  |  |  |  | 35.39 | exact (1) | T4:row5:col1, T4:row5:col2, T4:row5:col3, T4:row5:col4 |
| ß | `Q60` · t1/2β | 0.11 | h | 396 | s | h | 2.77 | llm (0.6) | T4:row6:col1, T4:row6:col2, T4:row6:col3, T4:row6:col4 |
| T1/2 (h) | `Q57` · t1/2z | 5.98 | h | 2.153e+04 | s | h |  | exact (1) | Wang_2021_table_3:row2:col1, Wang_2021_table_3:row2:col2, Wang_2021_table_3:row2:col3, Wang_2021_table_3:row2:col4, Wang_2021_table_3:row2:col5 |
| MRT (h) | `Q53` · MRT | 6.66 | h | 2.398e+04 | s | h |  | exact (1) | Wang_2021_table_3:row3:col1, Wang_2021_table_3:row3:col2, Wang_2021_table_3:row3:col3, Wang_2021_table_3:row3:col4, Wang_2021_table_3:row3:col5 |
| AUC24 (h·μg/g) | `Q19` · AUCt | 176.83 | h·μg/g |  |  | (h·µg)/g |  | llm (0.6) | Wang_2021_table_3:row4:col1, Wang_2021_table_3:row4:col2, Wang_2021_table_3:row4:col3, Wang_2021_table_3:row4:col4 |
| Cmax (μg/g) | `Q32` · Cmax | 25.82 | μg/g |  |  | µg/g |  | exact (1) | Wang_2021_table_3:row5:col1, Wang_2021_table_3:row5:col2, Wang_2021_table_3:row5:col3, Wang_2021_table_3:row5:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'AUC24 (h·μg/g)' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Cmax (μg/g)' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- implicit units: 'V1' → L (from the popPK convention: 'V1 is a volume of distribution. In population PK studies, volumes are conventionally expressed in liters (L). The value ')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is a volume of distribution. In population PK studies, volumes are conventionally expressed in liters (L). The value ')
- implicit units: 'Cl1' → L/h (from the popPK convention: 'Cl1 is a clearance parameter. In population PK studies, clearances are conventionally expressed in liters per hour (L/h)')
- implicit units: 'Cl2' → L/h (from the popPK convention: 'Cl2 is an intercompartmental clearance. In population PK studies, intercompartmental clearances are conventionally expre')
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'ß' → h (from the popPK convention: "ß is described in the prompt as 't1/2β: Terminal half-life'. Half-lives are conventionally expressed in hours (h). The v")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rifaximin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- companion parameter table 3 transcribed (18 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 6.38 | 6.305 | 0.9882 | 0.25 | reported t½β |
| C5_dimension_Q19 | fail | [time] | h·μg/g |  |  | ['Wang_2021_table_3:row4:col1', 'Wang_2021_table_3:row4:col2', 'Wang_2021_table_3:row4:col3', 'Wang_2021_table_3:row4:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['T4:row4:col1', 'T4:row4:col3', 'T4:row4:col4'] |
| C5_dimension_Q32 | fail | dimensionless | μg/g |  |  | ['Wang_2021_table_3:row5:col1', 'Wang_2021_table_3:row5:col2', 'Wang_2021_table_3:row5:col3', 'Wang_2021_table_3:row5:col4'] |
| C5_dimension_Q53 | pass | [time] |  |  |  | ['Wang_2021_table_3:row3:col1', 'Wang_2021_table_3:row3:col2', 'Wang_2021_table_3:row3:col3', 'Wang_2021_table_3:row3:col4', 'Wang_2021_table_3:row3:col5'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Wang_2021_table_3:row2:col1', 'Wang_2021_table_3:row2:col2', 'Wang_2021_table_3:row2:col3', 'Wang_2021_table_3:row2:col4', 'Wang_2021_table_3:row2:col5'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['T4:row6:col1', 'T4:row6:col2', 'T4:row6:col3', 'T4:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['T4:row1:col1', 'T4:row1:col3', 'T4:row1:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['T4:row2:col1', 'T4:row2:col3', 'T4:row2:col4'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  |  |  | ['T4:row5:col1', 'T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.29 |  |  | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.29 L/h |  |  | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.15 L |  |  | ['T4:row1:col1', 'T4:row1:col3', 'T4:row1:col4'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.46 L |  |  | ['T4:row2:col1', 'T4:row2:col3', 'T4:row2:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brifaximin%5D%20Rifaximin_Wang2021_reference&body=Drug%3A%20rifaximin%0ARecord%3A%20Rifaximin_Wang2021_reference%0APaper%3A%20Wang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rifaximin/Rifaximin_Wang2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 18:17 UTC</sub>
