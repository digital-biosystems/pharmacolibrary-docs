<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium/&quot;},{&quot;label&quot;:&quot;Pene_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Umeclidinium_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium/Umeclidinium_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# umeclidinium — `Umeclidinium_Pene2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The umeclidinium absorption rate constant kabs (0.0934) was reported with the unit 'units', which could not be converted to SI, causing a dimension mismatch on a structural parameter and rejection of the record.

<div class="pk-model-meta" hidden drug="umeclidinium" model-id="Umeclidinium_Pene2016_reference" status="rejected" stale="false" population="healthy males" measured-compound="umeclidinium" parameterization="mechanistic" topology="2C"></div>

## Citation
Pene Dumitrescu T, Santos LL, Hughes SC, Pereira AI, Young GC, Hussey E et al. A Novel Method for Studying the Pharmacokinetics of [(14) C]Umeclidinium After Application to the Axilla or Palm of Healthy Male Subjects. Clinical and translational science 9(4):183–191 (2016).
  ·  DOI: [10.1111/cts.12406](https://doi.org/10.1111/cts.12406)

## Population and dosing

**Population:** healthy males · condition healthy · age group adult.

**Dosing:** 3.06 mg, other, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1 (L) | V1 | 7.56 | L |
| CL (L/h) | CL | 55.0 | L/h |
| V2 (L) | V2 | 194.7 | L |
| CL2 (L/h) | Q | 40.9 | L/h |
| Ka (1/h) | kabs | 0.0934 | units |
| F1 | Fab | 0.312 |  |
| Tlag (h) | tlag | 10.6 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The umeclidinium absorption rate constant kabs (0.0934) was reported with the unit 'units', which could not be converted to SI, causing a dimension mismatch on a structural parameter and rejection of the record.**

All other umeclidinium parameters in this two-compartment model carry proper units (V1 7.56 L, CL 55.0 L/h, V2 194.7 L, Q 40.9 L/h, tlag 10.6 h, Fab 0.312), but kabs was recorded with the unit 'units', which is not a valid rate unit (1/h), so the parameter reached the model builder without an SI value. The dimension check on this structural parameter therefore failed, and the record was rejected. Extracted — umeclidinium: V1 7.56 L, CL 55 L/h, V2 195 L, Q 40.9 L/h, kabs 0.0934 units, Fab 0.312, tlag 10.6 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | 7.56 | L | 0.00756 | m3 | l | exact (1) | cts12406-tbl-0003:row1:col2 |
| CL (L/h) | `Q22` · CL | 55.0 | L/h | 1.528e-05 | m3/s | l/h | exact (1) | cts12406-tbl-0003:row2:col2 |
| V2 (L) | `Q64` · V2 | 194.7 | L | 0.1947 | m3 | l | exact (1) | cts12406-tbl-0003:row3:col2 |
| CL2 (L/h) | `Q30` · Q | 40.9 | L/h | 1.136e-05 | m3/s | l/h | special_case (0.95) | cts12406-tbl-0003:row4:col2 |
| Ka (1/h) | `Q49` · kabs | 0.0934 | units |  |  | units | exact (1) | cts12406-tbl-0003:row5:col2 |
| F1 | `Q40` · Fab | 0.312 |  |  |  |  | exact (1) | cts12406-tbl-0003:row6:col2 |
| Tlag (h) | `Q83` · tlag | 10.6 | h | 3.816e+04 | s | h | exact (1) | cts12406-tbl-0003:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=umeclidinium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell cts12406-tbl-0003:row1:col3 = '7.61 (15.4%)'
- unparsed cell cts12406-tbl-0003:row1:col4 = '50.2 (85.3%)'
- unparsed cell cts12406-tbl-0003:row2:col3 = '47.5 (23.0%)'
- unparsed cell cts12406-tbl-0003:row2:col4 = '98.6 (51.4%)'
- unparsed cell cts12406-tbl-0003:row3:col3 = '255.1 (57.7%)'
- unparsed cell cts12406-tbl-0003:row4:col3 = '41.6 (30.8%)'
- unparsed cell cts12406-tbl-0003:row4:col4 = '104 (48.8%)'
- unparsed cell cts12406-tbl-0003:row5:col3 = '0.0910 (45.4%)'
- unparsed cell cts12406-tbl-0003:row5:col4 = '139 (74.8%)'
- unparsed cell cts12406-tbl-0003:row6:col3 = '0.171 (76.6%)'
- unparsed cell cts12406-tbl-0003:row7:col3 = '0.00217 (53.4%)'
- unparsed cell cts12406-tbl-0003:row8:col3 = '4.71 (49.1%)'
- unparsed cell cts12406-tbl-0003:row8:col4 = '141 (73.3%)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (12/12 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts12406-tbl-0003:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts12406-tbl-0003:row4:col2'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | ['cts12406-tbl-0003:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts12406-tbl-0003:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts12406-tbl-0003:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts12406-tbl-0003:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 55 | ['cts12406-tbl-0003:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 55 L/h | ['cts12406-tbl-0003:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.56 L | ['cts12406-tbl-0003:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 195 L | ['cts12406-tbl-0003:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bumeclidinium%5D%20Umeclidinium_Pene2016_reference&body=Drug%3A%20umeclidinium%0ARecord%3A%20Umeclidinium_Pene2016_reference%0APaper%3A%20Pene_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_umeclidinium/Umeclidinium_Pene2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:13 UTC</sub>
