<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;rifaximin&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifaximin_Francis2019_reference&quot;,&quot;label&quot;:&quot;Francis_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/Rifaximin_Francis2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifaximin — `Rifaximin_Wang2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The rifaximin record was rejected because the terminal half-life is dimensionally inconsistent: t1/2β is 0.11 while t1/2z is 5.98 h for the same two-compartment disposition, a structural-parameter mismatch.**

For rifaximin in mice with S. aureus-induced mastitis, the record carries two terminal half-life values, t1/2β = 0.11 and t1/2z = 5.98 h, which describe the same slowest elimination phase of the two-compartment model and cannot both be right; the dimension check on this structural parameter failed. In addition, the AUCt unit h·μg/g could not be converted to SI, so the parameter reached the model without an SI value. The other parameters (V1 2.15, V2 0.46, CL 0.29, Q 0.89, λ1 2.38, MRT 6.66 h, Cmax 25.82 μg/g) were extracted as reported. Extracted — rifaximin: V1 2.15, V2 0.46, CL 0.29, Q 0.89, λ1 2.38, t1/2β 0.11, t1/2z 5.98 h, MRT 6.66 h, … (+2).

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:32.191739+00:00) predates the upstream re-run (2026-10-04 18:17:20.366894+00:00). Current validate status: `rejected`.

## Citation
Wang H et al., PK/PD Modeling to Assess Rifaximin Clin…, Frontiers in veterinary sci… (2021)
  ·  DOI: [10.3389/fvets.2021.651369](https://doi.org/10.3389/fvets.2021.651369)

<div class="pk-model-meta" hidden drug="rifaximin" model-id="Rifaximin_Wang2021_reference" status="rejected" stale="true" population="mice with S. aureus-induced mastitis" measured-compound="rifaximin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 2.15 | L | 0.00215 | L | 3.22 | exact (1.0) | T4:row1:col1, T4:row1:col3, T4:row1:col4 | — | not captured |
| V2 | `Q64` · V2 | 0.46 | L | 0.00046 | L | 18.84 | exact (1.0) | T4:row2:col1, T4:row2:col3, T4:row2:col4 | — | not captured |
| Cl1 | `Q22` · CL | 0.29 | L/h | 8.055555555555555e-08 | L/h | 1.57 | llm (0.6) | T4:row3:col1, T4:row3:col3, T4:row3:col4 | — | not captured |
| Cl2 | `Q30` · Q | 0.89 | L/h | 2.4722222222222224e-07 | L/h | 37.77 | special_case (0.95) | T4:row4:col1, T4:row4:col3, T4:row4:col4 | — | not captured |
| α | `Q67` · λ1 | 2.38 | not captured | not captured | not captured | 35.39 | exact (1.0) | T4:row5:col1, T4:row5:col2, T4:row5:col3, T4:row5:col4 | — | not captured |
| ß | `Q60` · t1/2β | 0.11 | h | 396.0 | h | 2.77 | llm (0.6) | T4:row6:col1, T4:row6:col2, T4:row6:col3, T4:row6:col4 | — | not captured |
| T1/2 (h) | `Q57` · t1/2z | 5.98 | h | 21528.0 | [h] | not captured | exact (1.0) | Wang_2021_table_3:row2:col1, Wang_2021_table_3:row2:col2, Wang_2021_table_3:row2:col3, Wang_2021_table_3:row2:col4, Wang_2021_table_3:row2:col5 | — | not captured |
| MRT (h) | `Q53` · MRT | 6.66 | h | 23976.0 | [h] | not captured | exact (1.0) | Wang_2021_table_3:row3:col1, Wang_2021_table_3:row3:col2, Wang_2021_table_3:row3:col3, Wang_2021_table_3:row3:col4, Wang_2021_table_3:row3:col5 | — | not captured |
| AUC24 (h·μg/g) | `Q19` · AUCt | 176.83 | h·μg/g | not captured | [[h] · [µg]] / [g] | not captured | llm (0.6) | Wang_2021_table_3:row4:col1, Wang_2021_table_3:row4:col2, Wang_2021_table_3:row4:col3, Wang_2021_table_3:row4:col4 | — | not captured |
| Cmax (μg/g) | `Q32` · Cmax | 25.82 | μg/g | not captured | [µg] / [g] | not captured | exact (1.0) | Wang_2021_table_3:row5:col1, Wang_2021_table_3:row5:col2, Wang_2021_table_3:row5:col3, Wang_2021_table_3:row5:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 6.38 | 6.305 | 0.9882 | 0.25 | reported t½β |
| C5_dimension_Q19 | fail | [time] | h·μg/g | not captured | not captured | ['Wang_2021_table_3:row4:col1', 'Wang_2021_table_3:row4:col2', 'Wang_2021_table_3:row4:col3', 'Wang_2021_table_3:row4:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row4:col1', 'T4:row4:col3', 'T4:row4:col4'] |
| C5_dimension_Q32 | fail | dimensionless | μg/g | not captured | not captured | ['Wang_2021_table_3:row5:col1', 'Wang_2021_table_3:row5:col2', 'Wang_2021_table_3:row5:col3', 'Wang_2021_table_3:row5:col4'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Wang_2021_table_3:row3:col1', 'Wang_2021_table_3:row3:col2', 'Wang_2021_table_3:row3:col3', 'Wang_2021_table_3:row3:col4', 'Wang_2021_table_3:row3:col5'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Wang_2021_table_3:row2:col1', 'Wang_2021_table_3:row2:col2', 'Wang_2021_table_3:row2:col3', 'Wang_2021_table_3:row2:col4', 'Wang_2021_table_3:row2:col5'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['T4:row6:col1', 'T4:row6:col2', 'T4:row6:col3', 'T4:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row1:col1', 'T4:row1:col3', 'T4:row1:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row2:col1', 'T4:row2:col3', 'T4:row2:col4'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['T4:row5:col1', 'T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.29 | not captured | not captured | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.29 L/h | not captured | not captured | ['T4:row3:col1', 'T4:row3:col3', 'T4:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.15 L | not captured | not captured | ['T4:row1:col1', 'T4:row1:col3', 'T4:row1:col4'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.46 L | not captured | not captured | ['T4:row2:col1', 'T4:row2:col3', 'T4:row2:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rifaximin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 18:17 UTC</sub>
