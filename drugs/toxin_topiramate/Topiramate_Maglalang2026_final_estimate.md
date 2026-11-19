<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Topiramate&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/&quot;},{&quot;label&quot;:&quot;Maglalang_2026 \u00b7 final_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Donovan2016_reference&quot;,&quot;label&quot;:&quot;Donovan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Donovan2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_present_case_report&quot;,&quot;label&quot;:&quot;Hoebregts_2021_present_case_report&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Lynch2010_reference&quot;,&quot;label&quot;:&quot;Lynch_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Lynch2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Wei2023_reference&quot;,&quot;label&quot;:&quot;Wei_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Wei2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Elewa2023_reference&quot;,&quot;label&quot;:&quot;Elewa_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Elewa2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_general_population&quot;,&quot;label&quot;:&quot;Hoebregts_2021_general_population&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_general_population.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Topiramate — `Topiramate_Maglalang2026_final_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Intrinsic clearance (5 mL/min) has conflicting unit dimensions, missing a mass term required for a valid conversion.

<div class="pk-model-meta" hidden drug="Topiramate" model-id="Topiramate_Maglalang2026_final_estimate" status="rejected" stale="false" population="children with and without obesity" measured-compound="Topiramate" parameterization="mechanistic" topology="1C"></div>

## Citation
Maglalang PD, Gonzalez D, Muller WJ, Hornik CD, Goldstein SL, Rathore M et al. Physiologically Based Pharmacokinetic Modeling to Characterize the Disposition of Topiramate in Children with and without Obesity. Journal of clinical pharmacology 66(10):e70264 (2026).
  ·  DOI: [10.1002/jcph.70264](https://doi.org/10.1002/jcph.70264)

## Population and dosing

**Population:** children with and without obesity · condition epilepsy/seizures (standard of care) · age group mixed · n = 43 (evaluation); 1000 (simulation).

**Dosing:** 150, 200 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 339.36 | g/mol |
| LogP | Kp | 0.6 |  |
| fu,p | fu | 0.80 |  |
| fGFR | fe | 0.2 |  |
| Generic CLint (mL/min) | CLint | 5 | mL/min |
| CL (L/h) | CL | 1.31 | L/h |
| Vd (L/kg) | V | 0.8 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Intrinsic clearance (5 mL/min) has conflicting unit dimensions, missing a mass term required for a valid conversion.**

The intrinsic clearance for topiramate is listed as 5 mL/min, a volumetric flow rate. This unit conflicts with the required dimension of volume per mass per time. The mismatch prevented conversion to SI, causing the model's rejection. Extracted — topiramate: MW 339 g/mol, Kp 0.6, fu 0.8, fe 0.2, CLint 5 mL/min, CL 1.31 L/h, V 0.8 L/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 339.36 | g/mol | 0.3394 |  | g/(m·ol) | exact (1) | jcph70264-tbl-0001:row2:col2 |
| LogP | `Q410` · Kp | 0.6 |  |  |  |  | llm_confirmed (0.6) | jcph70264-tbl-0001:row5:col2 |
| fu,p | `Q46` · fu | 0.80 |  | 0.8 |  |  | llm_confirmed (0.6) | jcph70264-tbl-0001:row6:col2 |
| fGFR | `Q44` · fe | 0.2 |  | 0.2 |  |  | llm (0.6) | jcph70264-tbl-0001:row7:col2 |
| Generic CLint (mL/min) | `Q3` · CLint | 5 | mL/min |  |  | ml/min | llm_confirmed (0.6) | jcph70264-tbl-0001:row10:col2 |
| CL (L/h) | `Q22` · CL | 1.31 | L/h | 3.639e-07 | m3/s | L/h | review_gapfill (0.7) | Bamgboye_2026:review |
| Vd (L/kg) | `Q61` · V | 0.8 | L/kg | 0.056 | m3 | L | review_gapfill (0.7) | Donovan_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['jcph70264-tbl-0001:row3:col2'])
- dropped unlinked row (NIL): 'B:P ratio at 1 µM a' — extend the ontology if this is a real PK parameter (source ['jcph70264-tbl-0001:row8:col2'])
- dropped PD-category row 'Generic enzyme, reference concentration (µM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph70264-tbl-0001:row9:col2'])
- unit_dimension_mismatch: 'Generic CLint (mL/min)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Solubility (mg/mL)' — extend the ontology if this is a real PK parameter (source ['jcph70264-tbl-0001:row12:col2'])
- dropped unlinked row (NIL): 'T50% (min)' — extend the ontology if this is a real PK parameter (source ['jcph70264-tbl-0001:row13:col2'])
- dropped unlinked row (NIL): 'Dissolution shape' — extend the ontology if this is a real PK parameter (source ['jcph70264-tbl-0001:row14:col2'])
- NIL: refused to back-fill base 'Kp' from footnote/prose loose number None (source ['jcph70264-tbl-0001:footnote', 'jcph70264-tbl-0001:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Topiramate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'final estimate' subgroup of Maglalang_2026 (paper reports 2 populations: final estimate, initial estimate)
- gap-filled Q22 (CL) from Bamgboye_2026's review values (primary lacked it)
- gap-filled Q61 (V) from Donovan_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table jcph70264-tbl-0001: unparsed_numeric_cell
- LLM selected parameter table(s) 1
- LLM region Maglalang_2026:other_prose: Gateway Timeout
- LLM region Maglalang_2026:other_prose: Gateway Timeout
- LLM region Maglalang_2026:discussion_prose: Gateway Timeout

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bamgboye_2026:review'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | mL/min ([length] ** 3 / [time]) | ['jcph70264-tbl-0001:row10:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['jcph70264-tbl-0001:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Donovan_2016:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.31 | ['Bamgboye_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.31 L/h | ['Bamgboye_2026:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 56 L | ['Donovan_2016:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btopiramate%5D%20Topiramate_Maglalang2026_final_estimate&body=Drug%3A%20topiramate%0ARecord%3A%20Topiramate_Maglalang2026_final_estimate%0APaper%3A%20Maglalang_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_topiramate/Topiramate_Maglalang2026_final_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 13:59 UTC</sub>
