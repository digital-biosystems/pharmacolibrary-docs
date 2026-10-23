<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Dimethyltryptamine&quot;,&quot;href&quot;:&quot;drugs/drug_dimethyltryptamine/&quot;},{&quot;label&quot;:&quot;Eckern\u00e4s_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dimethyltryptamine_Jiang2016_reference&quot;,&quot;label&quot;:&quot;Jiang_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dimethyltryptamine/Dimethyltryptamine_Jiang2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dimethyltryptamine — `Dimethyltryptamine_Eckerns2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the terminal half-life unit, hours, could not be converted to a standard metric time unit.

<div class="pk-model-meta" hidden drug="Dimethyltryptamine" model-id="Dimethyltryptamine_Eckerns2022_reference" status="rejected" stale="false" population="healthy adults" measured-compound="dimethyltryptamine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Eckernäs E, Timmermann C, Carhart-Harris R, Röshammar D, Ashton M. Population pharmacokinetic/pharmacodynamic modeling of the psychedelic experience induced by N,N-dimethyltryptamine - Implications for dose considerations. Clinical and translational science 15(12):2928–2937 (2022).
  ·  DOI: [10.1111/cts.13410](https://doi.org/10.1111/cts.13410)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = The paper states 13 healthy subjects..

**Dosing:** 7, 14, 18, 20 mg, iv, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL, L/min | CL | 26.0 | L/min | 15.1 |
| Q, L/min | Q | 2.99 | L/min | 36.6 |
| Vc, L | V1 | 221 | L | 12.1 |
| Vp, L | V2 | 59.0 | L | 18.5 |
| CL(m), L/min | CL | 0.093 | m | 10.6 |
| V(m), L | V | 9.55 | m | 9.8 |
| γ | t1/2γ | 2.87 | h | 4.2 |
| k a-M | kabs | 0.0748 | min − 1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the terminal half-life unit, hours, could not be converted to a standard metric time unit.**

The terminal elimination phase half-life for dimethyltryptamine is recorded as 2.87 h. The review found this time unit incompatible with the required standard metric format for this parameter. This prevented the calculation of a valid standard international value for the half-life. Extracted — dimethyltryptamine: CL 26 L/min, Q 2.99 L/min, V1 221 L, V2 59 L, t1/2γ 2.87 h, kabs 0.0748 min − 1; indole 3-acetic acid: CL 0.093 m, V 9.55 m.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL, L/min | `Q22` · CL | 26.0 | L/min | 0.0004333 | m3/s | l/min | 15.1 | exact (1) | cts13410-tbl-0001:row1:col1 |
| Q, L/min | `Q30` · Q | 2.99 | L/min | 4.983e-05 | m3/s | l/min | 36.6 | exact (1) | cts13410-tbl-0001:row2:col1 |
| Vc, L | `Q63` · V1 | 221 | L | 0.221 | m3 | l | 12.1 | exact (1) | cts13410-tbl-0001:row3:col1 |
| Vp, L | `Q64` · V2 | 59.0 | L | 0.059 | m3 | l | 18.5 | exact (1) | cts13410-tbl-0001:row4:col1 |
| CL(m), L/min | `Q22` · CL | 0.093 | m |  |  | m | 10.6 | exact (1) | cts13410-tbl-0001:row5:col1 |
| V(m), L | `Q61` · V | 9.55 | m |  |  | m | 9.8 | exact (1) | cts13410-tbl-0001:row6:col1 |
| γ | `Q89` · t1/2γ | 2.87 | h | 1.033e+04 | s | h | 4.2 | llm (0.6) | cts13410-tbl-0001:row14:col1 |
| k a-M | `Q49` · kabs | 0.0748 | min − 1 | 0.001247 | 1/s | 1/h |  | review_gapfill (0.7) | Jiang_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CL(m), L/min' → Q22 (unit '[length]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V(m), L' → Q63 (unit '[length]' vs ontology '[length] ** 3') — route to review
- dropped PD-category row 'E max' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13410-tbl-0001:row11:col1'])
- dropped PD-category row 'EC50,e, nM' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13410-tbl-0001:row12:col1'])
- dropped PD-category row 'k e0, min−1' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13410-tbl-0001:row13:col1'])
- implicit units: 'γ' → h (from the popPK convention: 'The text states no explicit unit for γ in Table 1. In population pharmacokinetics, first-order elimination rate constant')
- metabolite volume: 'V(m), L' Q63→Q61 for indole 3-acetic acid — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dimethyltryptamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 6 linked by role; re-tagged parent→indole 3-acetic acid ×4
- molar mass: none found for 'indole 3-acetic acid' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Jiang_2016's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13410-tbl-0001:row1:col1'] |
| C5_dimension_Q22 | fail | [length] | m | ['cts13410-tbl-0001:row5:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts13410-tbl-0001:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jiang_2016:review'] |
| C5_dimension_Q61 | fail | [length] | m | ['cts13410-tbl-0001:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts13410-tbl-0001:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts13410-tbl-0001:row4:col1'] |
| C5_dimension_Q89 | pass | [time] |  | ['cts13410-tbl-0001:row14:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26 | ['cts13410-tbl-0001:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.56e+03 L/h | ['cts13410-tbl-0001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 221 L | ['cts13410-tbl-0001:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 59 L | ['cts13410-tbl-0001:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdimethyltryptamine%5D%20Dimethyltryptamine_Eckerns2022_reference&body=Drug%3A%20dimethyltryptamine%0ARecord%3A%20Dimethyltryptamine_Eckerns2022_reference%0APaper%3A%20Eckern%C3%A4s_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dimethyltryptamine/Dimethyltryptamine_Eckerns2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:04 UTC</sub>
