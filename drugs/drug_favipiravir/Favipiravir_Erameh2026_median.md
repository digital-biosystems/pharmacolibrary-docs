<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;favipiravir&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/&quot;},{&quot;label&quot;:&quot;Erameh_2026 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Favipiravir_Agyeman2026_reference&quot;,&quot;label&quot;:&quot;Agyeman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Agyeman2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Irie2023_reference&quot;,&quot;label&quot;:&quot;Irie_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Irie2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_arithmetic_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_geometric_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Pertinez2021_reference&quot;,&quot;label&quot;:&quot;Pertinez_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# favipiravir — `Favipiravir_Erameh2026_median`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Favipiravir’s peripheral-compartment volume, V2 = 934.2 L, was recorded in a two-compartment model rejected for an unreachable or orphan compartment.

<div class="pk-model-meta" hidden drug="favipiravir" model-id="Favipiravir_Erameh2026_median" status="rejected" stale="false" population="hospitalized adults with mild-to-moderate RT-PCR-confirmed Lassa fever" measured-compound="favipiravir" parameterization="mechanistic" topology="2C"></div>

## Citation
Erameh C, Okwaraeke K, Kleist C, Edeawe O, Adedosu N, Ekata E et al. Favipiravir for Lassa fever: an open-label, randomized controlled phase 2 trial. Nature medicine (2026).
  ·  DOI: [10.1038/s41591-026-04402-w](https://doi.org/10.1038/s41591-026-04402-w)

## Population and dosing

**Population:** hospitalized adults with mild-to-moderate RT-PCR-confirmed Lassa fever · condition Lassa fever · age group adult · n = 36.

**Dosing:** 1200, 2400 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed favipiravir and ribavirin, measured favipiravir.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance | CL | 2.7 | l h−1 |
| Volume of distribution | V | 41.5 | l |
| Vp1 | V2 | 934.2 | l |
| k a (h À1 ) a | kabs | 1.5 | h À1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Favipiravir’s peripheral-compartment volume, V2 = 934.2 L, was recorded in a two-compartment model rejected for an unreachable or orphan compartment.**

The record gives favipiravir a peripheral-compartment volume of 934.2 L and specifies a two-compartment structure. The finding means a compartment has no path from the dose; it does not identify which compartment is unreachable. Extracted — favipiravir: CL 2.7 l h−1, V 41.5 l, V2 934 l, kabs 1.5 h À1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has favipiravir and ribavirin, the second reading favipiravir; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance | `Q22` · CL | 2.7 | l h−1 | 7.5e-07 | m3/s | L/h | exact (1) | Erameh_2026:other_prose |
| Volume of distribution | `Q61` · V | 41.5 | l | 0.0415 | m3 | L | exact (1) | Erameh_2026:other_prose |
| Vp1 | `Q64` · V2 | 934.2 | l | 0.9342 | m3 | L | exact (1) | Erameh_2026:other_prose |
| k a (h À1 ) a | `Q49` · kabs | 1.5 | h À1 | 0.0004167 | 1/s | 1/h | review_gapfill (0.7) | Agyeman_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Favipiravir' — extend the ontology if this is a real PK parameter (source ['Erameh_2026_table_2:row0:col2'])
- dropped unlinked row (NIL): 'Ribavirin' — extend the ontology if this is a real PK parameter (source ['Erameh_2026_table_2:row9:col2'])
- NIL: refused to back-fill base 'omega_cov' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- salvaged Q22 ('Clearance'=2.7) from results prose — parameter table was unreadable
- salvaged Q61 ('Volume of distribution'=41.5) from results prose — parameter table was unreadable
- salvaged Q64 ('Vp1'=934.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=favipiravir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'median' subgroup of Erameh_2026 (paper reports 3 populations: favipiravir (n = 20 participants), median, ribavirin (n = 21 participants))
- gap-filled Q49 (kabs) from Agyeman_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Erameh_2026_table_2:row0:col1 = 'AUC240 h (mg l−1 h−1)'
- unparsed cell Erameh_2026_table_2:row0:col3 = '7,139.4 to 15,794.8'
- unparsed cell Erameh_2026_table_2:row1:col2 = '1,131.3 to 1,983.6'
- unparsed cell Erameh_2026_table_2:row2:col2 = '69.3 to 110.9'
- unparsed cell Erameh_2026_table_2:row3:col2 = '42.1 to 75.1'
- unparsed cell Erameh_2026_table_2:row4:col2 = '10.3 to 14.8'
- unparsed cell Erameh_2026_table_2:row5:col2 = '74.1 to 149.2'
- unparsed cell Erameh_2026_table_2:row6:col2 = '8.2 to 17.1'
- unparsed cell Erameh_2026_table_2:row7:col2 = '1.7 to 3.5'
- unparsed cell Erameh_2026_table_2:row9:col1 = 'AUC240 h (mg l−1 h−1)'
- unparsed cell Erameh_2026_table_2:row9:col3 = '1,229.3 to 1,593.8'
- unparsed cell Erameh_2026_table_2:row10:col2 = '241.6 to 307.0'
- unparsed cell Erameh_2026_table_2:row11:col2 = '103.8 to 130.2'
- unparsed cell Erameh_2026_table_2:row12:col2 = '0.4 to 0.6'
- unparsed cell Erameh_2026_table_2:row13:col2 = '5.3 to 6.9'
- unparsed cell Erameh_2026_table_2:row14:col2 = '99.3 to 147.6'
- unparsed cell Erameh_2026_table_2:row15:col2 = '7.6 to 11.3'
- unparsed cell Erameh_2026_table_2:row16:col2 = '32.0 to 40.0'
- companion parameter table 2 transcribed (19 record(s))
- LLM selected parameter table(s) 2
- LLM region Erameh_2026:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[k a (h à1 ) a]` | 1.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ribavirin]` |  | 1397.4 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | favipiravir and ribavirin | favipiravir | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Agyeman_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.7 | ['Erameh_2026:other_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.7 L/h | ['Erameh_2026:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 41.5 L | ['Erameh_2026:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 934 L | ['Erameh_2026:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfavipiravir%5D%20Favipiravir_Erameh2026_median&body=Drug%3A%20favipiravir%0ARecord%3A%20Favipiravir_Erameh2026_median%0APaper%3A%20Erameh_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_favipiravir/Favipiravir_Erameh2026_median%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:16 UTC</sub>
