<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Reed_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Reed2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> Record rejected because a reported unit was not recognized, preventing conversion to SI, causing dimensional mismatch and an unreachable compartment.

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Reed2024_reference" status="rejected" stale="false" population="healthy adult horses" measured-compound="fentanyl" parameterization="mechanistic" topology="2C"></div>

## Citation
Reed RA, Berghaus LJ, Reynolds RM, Holmes BT, Krikorian AM, Sakai DM et al. The pharmacokinetics and pharmacodynamics of fentanyl administered via transdermal patch in horses. Frontiers in pain research (Lausanne, Switzerland) 5:1373759 (2024).
  ·  DOI: [10.3389/fpain.2024.1373759](https://doi.org/10.3389/fpain.2024.1373759)

## Population and dosing

**Population:** healthy adult horses · condition healthy · age group adult · n = # List each compound on its own line under 'compounds', one per line, as:.

**Dosing:** 100, 200, 300 mcg/h, transdermal, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| tvAlpha (1/h) | λ1 | 17.8 | 1/h |  |
| tvBeta (1/h) | kel | 2.12 | 1/h | 0.004 (None% RSE) |
| t1/2α (h) | t1/2α | 0.039 | h |  |
| t1/2β (h) | t1/2β | 0.327 | h |  |
| t1/2γ (h) | t1/2γ | 1.85 | h |  |
| AUClast (h*pg/ml) | AUClast | 5243.4 | h*pg/ml |  |
| Cl (ml/h/kg) | CL | 722.4 | ml/h/kg |  |
| V1 (L/kg) | V1 | 0.191 | L/kg |  |
| V2 (L/kg) | V2 | 0.185 | L/kg |  |
| V3 (L/kg) | V3 | 0.351 | L/kg |  |
| t1pp ranged from | tlag | 15.0 | min |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.852). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because a reported unit was not recognized, preventing conversion to SI, causing dimensional mismatch and an unreachable compartment.**

The absorption lag time of 15.0 minutes lacked a standard equivalent, blocking unit conversion. This error contributed to structural inconsistencies, specifically an orphan compartment that had no path from the dose. Extracted — fentanyl: λ1 17.8 1/h, kel 2.12 1/h, t1/2α 0.039 h, t1/2β 0.327 h, t1/2γ 1.85 h, AUClast 5.24e+03 h*pg/ml, CL 722 ml/h/kg, V1 0.191 L/kg, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fentanyl, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| tvAlpha (1/h) | `Q67` · λ1 | 17.8 | 1/h |  |  | 1/h | tv_prefix (0.95) | T2:row4:col1 |  |
| tvBeta (1/h) | `Q47` · kel | 2.12 | 1/h | 0.0005889 | 1/s | 1/h | tv_prefix (0.95) | T2:row5:col1 | 0.004 (None% RSE) |
| t1/2α (h) | `Q59` · t1/2α | 0.039 | h | 140.4 | s | h | exact (1) | T2:row7:col1 |  |
| t1/2β (h) | `Q60` · t1/2β | 0.327 | h | 1177 | s | h | exact (1) | T2:row8:col1 |  |
| t1/2γ (h) | `Q89` · t1/2γ | 1.85 | h | 6660 | s | h | exact (1) | T2:row9:col1 |  |
| AUClast (h*pg/ml) | `Q74` · AUClast | 5243.4 | h*pg/ml |  |  | (h·pg)/ml | exact (1) | T2:row10:col1 |  |
| Cl (ml/h/kg) | `Q22` · CL | 722.4 | ml/h/kg | 1.405e-05 | m3/s | ml/(h·kg) | exact (1) | T2:row11:col1 |  |
| V1 (L/kg) | `Q63` · V1 | 0.191 | L/kg | 0.01337 | m3 | l/kg | exact (1) | T2:row12:col1 |  |
| V2 (L/kg) | `Q64` · V2 | 0.185 | L/kg | 0.01295 | m3 | l/kg | exact (1) | T2:row13:col1 |  |
| V3 (L/kg) | `Q77` · V3 | 0.351 | L/kg | 0.02457 | m3 | l/kg | exact (1) | T2:row14:col1 |  |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900 | s | h | review_gapfill (0.7) | Andersen_1986:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'A' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'B' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'C' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Beta' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Gamma' routed out of structural estimates ('Between subject variability (%CV)')
- column 'target dose(mg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'tvA (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row1:col1'])
- dropped unlinked row (NIL): 'tvB (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1'])
- dropped unlinked row (NIL): 'tvC (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row3:col1'])
- unit_dimension_mismatch: 'tvAlpha (1/h)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped PD-category row 'tvGamma (1/h)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1'])
- dropped unlinked row (NIL): 'stdev0' — extend the ontology if this is a real PK parameter (source ['T2:row15:col1'])
- dropped unlinked row (NIL): 'LDF' — extend the ontology if this is a real PK parameter (source ['Reed_2024_table_3:row0:col1', 'Reed_2024_table_3:row0:col2', 'Reed_2024_table_3:row0:col3'])
- dropped unlinked row (NIL): 'MDF' — extend the ontology if this is a real PK parameter (source ['Reed_2024_table_3:row1:col1', 'Reed_2024_table_3:row1:col2', 'Reed_2024_table_3:row1:col3'])
- dropped unlinked row (NIL): 'HDF' — extend the ontology if this is a real PK parameter (source ['Reed_2024_table_3:row2:col1', 'Reed_2024_table_3:row2:col2', 'Reed_2024_table_3:row2:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

**Extraction notes:**
- table T2: unbound_uncertainty
- table T2: unparsed_numeric_cell
- table Reed_2024_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (21 record(s))
- companion parameter table 3 transcribed (9 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.852 (23/27 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1pp ranged from]` | 15.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tva]` |  | 12661.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvc]` |  | 528.6 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fentanyl | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T2:row5:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['T2:row7:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['T2:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row12:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row13:col1'] |
| C5_dimension_Q67 | fail | 1 / [time] | 1/h | ['T2:row4:col1'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 |  | ['T2:row10:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T2:row14:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Andersen_1986:review'] |
| C5_dimension_Q89 | pass | [time] |  | ['T2:row9:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 722.4 | ['T2:row11:col1'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 50.6 L/h | ['T2:row11:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.4 L | ['T2:row12:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.9 L | ['T2:row13:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Reed2024_reference&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Reed2024_reference%0APaper%3A%20Reed_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Reed2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 13:12 UTC</sub>
