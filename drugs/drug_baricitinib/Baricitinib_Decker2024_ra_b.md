<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;,&quot;href&quot;:&quot;drugs/drug_baricitinib/&quot;},{&quot;label&quot;:&quot;Decker_2024 \u00b7 ra_b&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baricitinib — `Baricitinib_Decker2024_ra_b`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Baricitinib clearance and central volume parameters were recorded with incorrect units of years, causing dimensional mismatches and preventing model evaluation.

<div class="pk-model-meta" hidden drug="baricitinib" model-id="Baricitinib_Decker2024_ra_b" status="rejected" stale="false" population="pediatric patients with juvenile idiopathic arthritis" measured-compound="baricitinib" parameterization="apparent" topology="3C"></div>

## Citation
Decker RL, Steven Ernest C, Radtke DB, Wang R, Araújo J, Keller SY et al. A population pharmacokinetic model using allometric scaling for baricitinib in patients with juvenile idiopathic arthritis. CPT: pharmacometrics & systems pharmacology 13(6):970–981 (2024).
  ·  DOI: [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131)

## Population and dosing

**Population:** pediatric patients with juvenile idiopathic arthritis · condition juvenile idiopathic arthritis · age group mixed · n = 217.

**Dosing:** 2, 4 mg, oral, multiple, every 24 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) c | CL/F | 9.42 | years |
| CLr (L/h) | CLR | 6.86 | L/h |
| CLnr (L/h) | CLNR | 2.56 | L/h |
| V/F (L) c | V/F | 108 | years |
| V1/F (L) | V1/F | 85.2 | L |
| V2/F (L) | V2/F | 23.1 | L |
| t1/2 (h) | t1/2z | 12.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Baricitinib clearance and central volume parameters were recorded with incorrect units of years, causing dimensional mismatches and preventing model evaluation.**

The apparent total clearance and central volume of distribution for baricitinib were extracted with the unit 'years' instead of the correct L/h and L units. This fundamental dimension mismatch invalidated the structural parameter check for these values. Additionally, the model structure contains an unreachable compartment, preventing the calculation of valid pharmacokinetic outputs. Extracted — baricitinib: CL/F 9.42 years, CLR 6.86 L/h, CLNR 2.56 L/h, V/F 108 years, V1/F 85.2 L, V2/F 23.1 L, t1/2z 12.5 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dose: this record has none, the second reading 4; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) c | `Q27` · CL/F | 9.42 | years |  |  | years | llm_confirmed (0.6) | Decker_2024_table_3:row4:col7 |
| CLr (L/h) | `Q26` · CLR | 6.86 | L/h | 1.906e-06 | m3/s | l/h | exact (1) | Decker_2024_table_3:row5:col7 |
| CLnr (L/h) | `Q79` · CLNR | 2.56 | L/h | 7.111e-07 | m3/s | l/h | exact (1) | Decker_2024_table_3:row6:col7 |
| V/F (L) c | `Q76` · V/F | 108 | years |  |  | years | llm_confirmed (0.6) | Decker_2024_table_3:row7:col7 |
| V1/F (L) | `Q290` · V1/F | 85.2 | L | 0.0852 | m3 | l | exact (1) | Decker_2024_table_3:row8:col7 |
| V2/F (L) | `Q82` · V2/F | 23.1 | L | 0.0231 | m3 | l | exact (1) | Decker_2024_table_3:row9:col7 |
| t1/2 (h) | `Q57` · t1/2z | 12.5 | h | 4.5e+04 | s | h | exact (1) | Decker_2024_table_3:row10:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |
| Q | Q30 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Decker_2024_table_3:row2:col7'])
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['Decker_2024_table_3:row3:col7'])
- unit_dimension_mismatch: 'CL/F (L/h) c' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V/F (L) c' → Q76 (unit '[time]' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baricitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- bound model equation to Q30 (Q): Q = 2.67*((WTE/74)^0.75)
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'ra b' subgroup of Decker_2024 (paper reports 3 populations: jia a, population mean (%see), ra b)

**Extraction notes:**
- unparsed cell psp413131-tbl-0002:row1:col3 = '0.452 (0.373–0.512)'
- unparsed cell psp413131-tbl-0002:row2:col3 = '0.538 (0.323–0.847)'
- unparsed cell psp413131-tbl-0002:row3:col3 = '3.32 (3.20–3.46)'
- unparsed cell psp413131-tbl-0002:row4:col3 = '6.41 (6.23–6.52)'
- unparsed cell psp413131-tbl-0002:row5:col3 = '92.6 (90.1–94.5)'
- unparsed cell psp413131-tbl-0002:row6:col3 = '2.76 (2.62–2.88)'
- unparsed cell psp413131-tbl-0002:row7:col3 = '25.1 (21.2–30.1)'
- unparsed cell psp413131-tbl-0002:row8:col3 = '0.147 (0.144–0.150)'
- unparsed cell psp413131-tbl-0002:row11:col3 = '0.00589 (0.00349–0.00852)'
- unparsed cell psp413131-tbl-0002:row14:col3 = '0.360 (0.346–0.377)'
- unparsed cell Decker_2024_table_3:row11:col2 = '254 (27) d'
- unparsed cell Decker_2024_table_3:row11:col3 = '500 (57) e'
- unparsed cell Decker_2024_table_3:row11:col7 = '483 (40) f'
- unparsed cell Decker_2024_table_3:row12:col2 = '56.8 (22) d'
- unparsed cell Decker_2024_table_3:row12:col3 = '79.0 (33) e'
- unparsed cell Decker_2024_table_3:row12:col7 = '53.3 (22) f'
- companion parameter table 3 transcribed (71 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- captured model equation Q = 2.67*((WTE/74)^0.75)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` |  | 4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  |  | only_one_extracted |

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
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Decker_2024_table_3:row5:col7'] |
| C5_dimension_Q27 | fail | [time] | years | ['Decker_2024_table_3:row4:col7'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Decker_2024_table_3:row8:col7'] |
| C5_dimension_Q57 | pass | [time] |  | ['Decker_2024_table_3:row10:col7'] |
| C5_dimension_Q76 | fail | [time] | years | ['Decker_2024_table_3:row7:col7'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Decker_2024_table_3:row6:col7'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Decker_2024_table_3:row9:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 85.2 L | ['Decker_2024_table_3:row8:col7'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 23.1 L | ['Decker_2024_table_3:row9:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbaricitinib%5D%20Baricitinib_Decker2024_ra_b&body=Drug%3A%20baricitinib%0ARecord%3A%20Baricitinib_Decker2024_ra_b%0APaper%3A%20Decker_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_baricitinib/Baricitinib_Decker2024_ra_b%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:46 UTC</sub>
