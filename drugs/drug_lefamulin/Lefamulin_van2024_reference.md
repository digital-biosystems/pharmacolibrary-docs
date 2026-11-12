<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;lefamulin&quot;,&quot;href&quot;:&quot;drugs/drug_lefamulin/&quot;},{&quot;label&quot;:&quot;van_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lefamulin_Hu2023_reference&quot;,&quot;label&quot;:&quot;Hu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lefamulin/Lefamulin_Hu2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lefamulin — `Lefamulin_van2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-11-07 15:18 UTC (Rejected), but the paper was screened again on 2026-10-13 12:03 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. PBmax (12.7 mg/L) has a unit that cannot be converted to SI, causing a dimension mismatch in the three-compartment structure.

<div class="pk-model-meta" hidden drug="lefamulin" model-id="Lefamulin_van2024_reference" status="rejected" stale="true" population="healthy volunteers" measured-compound="lefamulin" parameterization="mechanistic" topology="3C"></div>

## Citation
van Os W, Pham AD, Eberl S, Minichmayr IK, van Hasselt JGC, Zeitlinger M. Integrative model-based comparison of target site-specific antimicrobial effects: A case study with ceftaroline and lefamulin. International journal of antimicrobial agents 63(5):107148 (2024).
  ·  DOI: [10.1016/j.ijantimicag.2024.107148](https://doi.org/10.1016/j.ijantimicag.2024.107148)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = &gt;12.

**Dosing:** 150 mg, iv, single.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h) | CL | 137 | L/h | 6.2 | 21.5 (20.9% RSE) |
| V1 (L) | V1 | 75.7 | L | 5.2 |  |
| Q2 (L/h) | Q | 42.9 | L/h | 23.3 | 64.8 (23.6% RSE) |
| V2 (L) | V2 | 391 | L | 12.4 | 32.8 (31.5% RSE) |
| Q3 (L/h) | Q3 | 218 | L/h | 6.4 | 15.7 (31.9% RSE) |
| V3 (L) | V3 | 400 | L | 7.0 |  |
| PBmax (mg/L) | equation variable | 12.7 | mg/L |  |  |
| Kp (mg/L) | Kp | 2.07 | mg/L |  |  |
| Vsub (L) | V | 2.29 | L |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.95). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**PBmax (12.7 mg/L) has a unit that cannot be converted to SI, causing a dimension mismatch in the three-compartment structure.**

The parameter PBmax is recorded with a unit that the review could not convert to standard SI units, preventing a valid dimensional check against the structural parameters. Because the value remained unconverted, it conflicted with the required clearance dimensions for the three-compartment model. A second reader also disagreed on how this parameter was identified, suggesting uncertainty in its classification within the record. Extracted — lefamulin: CL 137 L/h, V1 75.7 L, Q 42.9 L/h, V2 391 L, Q3 218 L/h, V3 400 L, Kp 2.07 mg/L, V 2.29 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[pbmax].parameter_id`: this record has Q900, the second reading Q332. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 137 | L/h | 3.806e-05 | m3/s | l/h | 6.2 | exact (1) | van_2024_table_p5_1:row0:col2 | 21.5 (20.9% RSE) |
| V1 (L) | `Q63` · V1 | 75.7 | L | 0.0757 | m3 | l | 5.2 | exact (1) | van_2024_table_p5_1:row1:col2 |  |
| Q2 (L/h) | `Q30` · Q | 42.9 | L/h | 1.192e-05 | m3/s | l/h | 23.3 | special_case (0.95) | van_2024_table_p5_1:row2:col2 | 64.8 (23.6% RSE) |
| V2 (L) | `Q64` · V2 | 391 | L | 0.391 | m3 | l | 12.4 | exact (1) | van_2024_table_p5_1:row3:col2 | 32.8 (31.5% RSE) |
| Q3 (L/h) | `Q308` · Q3 | 218 | L/h | 6.056e-05 | m3/s | l/h | 6.4 | exact (1) | van_2024_table_p5_1:row4:col2 | 15.7 (31.9% RSE) |
| V3 (L) | `Q77` · V3 | 400 | L | 0.4 | m3 | l | 7.0 | exact (1) | van_2024_table_p5_1:row5:col2 |  |
| PBmax (mg/L) | `Q900` · equation variable | 12.7 | mg/L |  |  | mg/l |  | llm (0.6) | van_2024_table_p5_1:row6:col2 |  |
| Kp (mg/L) | `Q410` · Kp | 2.07 | mg/L |  |  | mg/l |  | exact (1) | van_2024_table_p5_1:row7:col2 |  |
| Vsub (L) | `Q61` · V | 2.29 | L | 0.00229 | m3 | l |  | llm (0.6) | van_2024_table_p5_1:row9:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (L/h)' routed out of structural estimates ('IIV in CV% (%RSE)')
- table section iiv: 'Q2 (L/h)' routed out of structural estimates ('IIV in CV% (%RSE)')
- table section iiv: 'V2 (L)' routed out of structural estimates ('IIV in CV% (%RSE)')
- table section iiv: 'Q3 (L/h)' routed out of structural estimates ('IIV in CV% (%RSE)')
- table section iiv: 'Qsub,s (L/h)' routed out of structural estimates ('IIV in CV% (%RSE)')
- table section iiv: 'Qmus,p (L/h)' routed out of structural estimates ('IIV in CV% (%RSE)')
- table section iiv: 'RRsub (%)' routed out of structural estimates ('IIV in CV% (%RSE)')
- table section iiv: 'RRmus (%)' routed out of structural estimates ('IIV in CV% (%RSE)')
- unit_dimension_mismatch: 'Kp (mg/L)' → Q410 (unit '[mass] / [length] ** 3' vs ontology 'dimensionless') — route to review
- dropped duplicate Q30 ('Qsub (L/h)', value '2.16') — already have one for this compound
- dropped duplicate Q30 ('Qmus (L/h)', value '2.04') — already have one for this compound
- dropped duplicate Q61 ('Vmus (L)', value '3.91') — already have one for this compound
- dropped duplicate Q30 ('Qsub,s (L/h)', value '0.623') — already have one for this compound
- dropped duplicate Q63 ('Vsub,p (L)', value '2.79') — already have one for this compound
- dropped duplicate Q30 ('Qmus,p (L/h)', value '0.52') — already have one for this compound
- dropped unlinked row (NIL): 'Vmus,p (L)' — extend the ontology if this is a real PK parameter (source ['van_2024_table_p5_1:row15:col2'])
- routed 'RRsub (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'RRmus (%)' — extend the ontology if this is a real PK parameter (source ['van_2024_table_p5_1:row17:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lefamulin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for van_2024

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.95 (19/20 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[pbmax].parameter_id` | Q900 | Q332 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['van_2024_table_p5_1:row0:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['van_2024_table_p5_1:row2:col2'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['van_2024_table_p5_1:row4:col2'] |
| C5_dimension_Q410 | fail | dimensionless | mg/L ([mass] / [length] ** 3) | ['van_2024_table_p5_1:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['van_2024_table_p5_1:row9:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['van_2024_table_p5_1:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['van_2024_table_p5_1:row3:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['van_2024_table_p5_1:row5:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 137 | ['van_2024_table_p5_1:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 137 L/h | ['van_2024_table_p5_1:row0:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.29 L | ['van_2024_table_p5_1:row9:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 75.7 L | ['van_2024_table_p5_1:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 391 L | ['van_2024_table_p5_1:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blefamulin%5D%20Lefamulin_van2024_reference&body=Drug%3A%20lefamulin%0ARecord%3A%20Lefamulin_van2024_reference%0APaper%3A%20van_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lefamulin/Lefamulin_van2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 12:03 UTC</sub>
