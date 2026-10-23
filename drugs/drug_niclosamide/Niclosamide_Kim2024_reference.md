<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;niclosamide&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/&quot;},{&quot;label&quot;:&quot;Kim_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niclosamide_Zhang2019_reference&quot;,&quot;label&quot;:&quot;Zhang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niclosamide — `Niclosamide_Kim2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> The niclosamide absorption rate constant kabs is recorded with the wrong unit (L/h instead of 1/h), a dimension mismatch, and the clearance/volume values fall outside a physiological window, so the record was rejected.

<div class="pk-model-meta" hidden drug="niclosamide" model-id="Niclosamide_Kim2024_reference" status="rejected" stale="false" population="male hamsters" measured-compound="niclosamide" parameterization="mechanistic" topology="2C"></div>

## Citation
Kim T, Jung W, Cho S, Kim G, Yun HY, Chae JW. Predicting lung exposure of intramuscular niclosamide as an antiviral agent: Power-law based pharmacokinetic modeling. Clinical and translational science 17(5):e13833 (2024).
  ·  DOI: [10.1111/cts.13833](https://doi.org/10.1111/cts.13833)

## Population and dosing

**Population:** male hamsters · condition healthy · age group adult · n = 20.

**Dosing:** 3850, 6720, 8960, 16800 mg, im, single.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V c (L) | V1 | 0.371 | L |
| V p (L) | V2 | 1.647 | L |
| CL (L/h) | CL | 0.485 | L/h |
| Q inter (L/h) | Q | 0.365 | L/h |
| K A1 (1/h) | kabs | 0.042 | L/h |
| F | Fab | 0.430 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The niclosamide absorption rate constant kabs is recorded with the wrong unit (L/h instead of 1/h), a dimension mismatch, and the clearance/volume values fall outside a physiological window, so the record was rejected.**

For niclosamide in male hamsters (2-compartment structure), kabs is labeled K A1 (1/h) with value 0.042, but its reported unit is L/h, which is dimensionally inconsistent for a first-order absorption rate constant. The clearance and volume parameters (CL 0.485 L/h, V1 0.371 L, V2 1.647 L, Q 0.365 L/h) were flagged as implausible in magnitude, consistent with a unit or scale extraction error. One reported unit could not be converted to SI, so that parameter arrived without a usable numeric value in standard units. Extracted — niclosamide: V1 0.371 L, V2 1.65 L, CL 0.485 L/h, Q 0.365 L/h, kabs 0.042 L/h, Fab 0.43.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V c (L) | `Q63` · V1 | 0.371 | L | 0.000371 | m3 | l | space_fold (0.95) | cts13833-tbl-0002:row3:col1 |
| V p (L) | `Q64` · V2 | 1.647 | L | 0.001647 | m3 | l | space_fold (0.95) | cts13833-tbl-0002:row4:col1 |
| CL (L/h) | `Q22` · CL | 0.485 | L/h | 1.347e-07 | m3/s | l/h | exact (1) | cts13833-tbl-0002:row6:col1 |
| Q inter (L/h) | `Q30` · Q | 0.365 | L/h | 1.014e-07 | m3/s | l/h | llm (0.6) | cts13833-tbl-0002:row7:col1 |
| K A1 (1/h) | `Q49` · kabs | 0.042 | L/h |  |  | l/h | llm (0.6) | cts13833-tbl-0002:row9:col1 |
| F | `Q40` · Fab | 0.430 |  |  |  |  | exact (1) | cts13833-tbl-0002:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'power' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'linear' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'K A1 (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'K A2 (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('K A2 (1/h)', value '0.002') — already have one for this compound
- dropped PD-category row 'Lambda (h)' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13833-tbl-0002:row11:col1'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts13833-tbl-0002:row12:col1'])
- dropped duplicate Q22 ('X cl', value '0.753') — already have one for this compound
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['cts13833-tbl-0002:row20:col1'])
- dropped unlinked row (NIL): 'Lung' — extend the ontology if this is a real PK parameter (source ['cts13833-tbl-0002:row21:col1'])
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['cts13833-tbl-0002:row22:col1', 'Kim_2024_table_S3:row18:col1'])
- dropped unlinked row (NIL): 'Population parameter' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_S3:row1:col2'])
- routed 'Inter-individual variability' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=niclosamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts13833-tbl-0002:row3:col2 = '0.374 (0.250, 0.491)'
- unparsed cell cts13833-tbl-0002:row4:col2 = '1.744 (0.770, 2.940)'
- unparsed cell cts13833-tbl-0002:row6:col2 = '0.481 (0.432, 0.522)'
- unparsed cell cts13833-tbl-0002:row7:col2 = '0.368 (0.189, 0.666)'
- unparsed cell cts13833-tbl-0002:row9:col2 = '0.042 (0.038, 0.049)'
- unparsed cell cts13833-tbl-0002:row10:col2 = '0.002 (0.001, 0.002)'
- unparsed cell cts13833-tbl-0002:row11:col2 = '157.53 (146.04, 164.40)'
- unparsed cell cts13833-tbl-0002:row12:col2 = '7.996 (4.68, 21.79)'
- unparsed cell cts13833-tbl-0002:row13:col2 = '0.426 (0.370, 0.473)'
- unparsed cell cts13833-tbl-0002:row14:col2 = '0.752 (0.741, 0.763)'
- unparsed cell cts13833-tbl-0002:row20:col2 = '0.354 (0.326, 0.410)'
- unparsed cell cts13833-tbl-0002:row21:col2 = '0.368 (0.314, 0.394)'
- unparsed cell cts13833-tbl-0002:row22:col2 = '−268.13 (−324.31, −215.42)'
- unparsed cell Kim_2024_table_S3:row1:col3 = '0.3535 (0.264, 0.463)'
- unparsed cell Kim_2024_table_S3:row13:col3 = '0.023 (0.01, 0.039)'
- unparsed cell Kim_2024_table_S3:row16:col3 = '0.4965 (0.424, 0.567)'
- unparsed cell Kim_2024_table_S3:row18:col2 = '-215.72 (-262.15, -170.88)'
- companion parameter table S3 transcribed (4 record(s))
- LLM selected parameter table(s) 2, S3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13833-tbl-0002:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts13833-tbl-0002:row7:col1'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['cts13833-tbl-0002:row9:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts13833-tbl-0002:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts13833-tbl-0002:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.485 | ['cts13833-tbl-0002:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.485 L/h | ['cts13833-tbl-0002:row6:col1'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.371 L | ['cts13833-tbl-0002:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.65 L | ['cts13833-tbl-0002:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bniclosamide%5D%20Niclosamide_Kim2024_reference&body=Drug%3A%20niclosamide%0ARecord%3A%20Niclosamide_Kim2024_reference%0APaper%3A%20Kim_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_niclosamide/Niclosamide_Kim2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:52 UTC</sub>
