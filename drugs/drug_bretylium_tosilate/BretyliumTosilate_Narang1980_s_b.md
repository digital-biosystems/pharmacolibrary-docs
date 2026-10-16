<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;bretylium tosilate&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium_tosilate/&quot;},{&quot;label&quot;:&quot;Narang_1980 \u00b7 s_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BretyliumTosilate_Kamath1981_reference&quot;,&quot;label&quot;:&quot;Kamath_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium_tosilate/BretyliumTosilate_Kamath1981_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bretylium tosilate — `BretyliumTosilate_Narang1980_s_b`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (λ1), so that value has no SI equivalent. Extracted — bretylium tosilate: λ1 1.52 hr⁻¹, t1/2α 27.3 min, kel 0.086 hr⁻¹, t1/2β 8.05 hr, k12 0.87 hr⁻¹, k21 0.296 hr⁻¹, kfm 0.112 hr⁻¹, V1 1.74 liters/kg, … (+4).

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `bretylium_tosilate`, measured `bretylium`.

## Citation
Narang PK et al., Pharmacokinetics of bretylium in man af…, Journal of pharmacokinetics… (1980)
  ·  DOI: [10.1007/BF01059384](https://doi.org/10.1007/BF01059384)

<div class="pk-model-meta" hidden drug="bretylium tosilate" model-id="BretyliumTosilate_Narang1980_s_b" status="rejected" stale="false" population="normal male volunteers" measured-compound="bretylium" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| α (hr⁻¹) | `Q67` · λ1 | 1.52 | hr⁻¹ | not captured | [1] / [h] | not captured | exact (1.0) | Narang_1980_table_2:row0:col2 | — | not captured |
| t₁/₂,α (min) | `Q59` · t1/2α | 27.3 | min | 1638.0 | [min] | not captured | llm_corrected (0.6) | Narang_1980_table_2:row1:col2 | — | not captured |
| β (hr⁻¹) | `Q47` · kel | 0.086 | hr⁻¹ | 2.3888888888888885e-05 | [1] / [h] | not captured | exact (1.0) | Narang_1980_table_2:row2:col2 | — | not captured |
| t₁/₂,β (hr) | `Q60` · t1/2β | 8.05 | hr | 28980.000000000004 | [h] | not captured | llm_corrected (0.6) | Narang_1980_table_2:row3:col2 | — | not captured |
| k₁₂ (hr⁻¹) | `Q301` · k12 | 0.870 | hr⁻¹ | 0.00024166666666666667 | [1] / [h] | not captured | exact (1.0) | Narang_1980_table_2:row4:col2 | — | not captured |
| k₂₁ (hr⁻¹) | `Q302` · k21 | 0.296 | hr⁻¹ | 8.222222222222222e-05 | [1] / [h] | not captured | exact (1.0) | Narang_1980_table_2:row5:col2 | — | not captured |
| k₍ₙ₎f (hr⁻¹) | `Q305` · kfm | 0.112 | hr⁻¹ | 3.111111111111111e-05 | [1] / [h] | not captured | space_fold (0.95) | Narang_1980_table_2:row7:col2 | — | not captured |
| Vc (liters/kg) | `Q63` · V1 | 1.74 | liters/kg | 0.1218 | [l] / [kg] | not captured | exact (1.0) | Narang_1980_table_2:row9:col2 | — | not captured |
| Vd,β (liters/kg) | `Q64` · V2 | 8.93 | liters/kg | 0.6251 | [l] / [kg] | not captured | llm_corrected (0.6) | Narang_1980_table_2:row10:col2 | — | not captured |
| Vdss (liters/kg) | `Q65` · Vss | 6.85 | liters/kg | 0.47950000000000004 | [l] / [kg] | not captured | llm (0.6) | Narang_1980_table_2:row11:col2 | — | not captured |
| RC (liters/hr·kg) | `Q26` · CLR | 0.573 | liters/hr·kg | 1.1141666666666665e-05 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Narang_1980_table_2:row12:col2 | — | not captured |
| TBC (liters/hr·kg) | `Q54` · Qb | 0.768 | liters/hr·kg | 1.4933333333333333e-05 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Narang_1980_table_2:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 's. b.' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'α (hr⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q47 ('kᵣ (hr⁻¹)', value '0.330') — already have one for this compound
- dropped duplicate Q305 ('k₍ₐ₎f (hr⁻¹)', value '0.442') — already have one for this compound
- dropped unlinked row (NIL): 'after 24 hr' — extend the ontology if this is a real PK parameter (source ['Narang_1980_table_2:row15:col2'])
- dropped unlinked row (NIL): 'after 72 hr' — extend the ontology if this is a real PK parameter (source ['Narang_1980_table_2:row16:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bretylium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 's. b.' subgroup of Narang_1980 (paper reports 4 populations: b. b., j. j., p. k., s. b.)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row12:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row4:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row5:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row7:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row2:col2'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row13:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row1:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Narang_1980_table_2:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Narang_1980_table_2:row9:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Narang_1980_table_2:row10:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Narang_1980_table_2:row11:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr⁻¹ | not captured | not captured | ['Narang_1980_table_2:row0:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 122 L | not captured | not captured | ['Narang_1980_table_2:row9:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 625 L | not captured | not captured | ['Narang_1980_table_2:row10:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 480 L | not captured | not captured | ['Narang_1980_table_2:row11:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_bretylium_tosilate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Narang_1980` / `Narang_1980::s_b`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:02 UTC</sub>
