<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;oseltamivir&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/&quot;},{&quot;label&quot;:&quot;Chairat_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oseltamivir_Lin2012_reference&quot;,&quot;label&quot;:&quot;Lin_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oseltamivir — `Oseltamivir_Chairat2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The oseltamivir parent–metabolite model was rejected because the first-order rate constants kabs (2.81) and kfm (2.13) are reported with unit 'h' instead of h⁻¹, a dimension mismatch on structural parameters.

<div class="pk-model-meta" hidden drug="oseltamivir" model-id="Oseltamivir_Chairat2016_reference" status="rejected" stale="false" population="obese and non-obese Thai adult volunteers" measured-compound="oseltamivir carboxylate" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Chairat K, Jittamala P, Hanpithakpong W, Day NP, White NJ, Pukrittayakamee S et al. Population pharmacokinetics of oseltamivir and oseltamivir carboxylate in obese and non-obese volunteers. British journal of clinical pharmacology 81(6):1103–1112 (2016).
  ·  DOI: [10.1111/bcp.12892](https://doi.org/10.1111/bcp.12892)

## Population and dosing

**Population:** obese and non-obese Thai adult volunteers · condition healthy (obese and non-obese volunteers) · age group adult · n = 24.

**Dosing:** 75, 150 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed oseltamivir, measured oseltamivir carboxylate.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CLm/F, V1/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F (%) | Fab | 100 |  |  | 17.6 (35.1% RSE) |
| k a ( h – 1 ) | kabs | 2.81 | h | 10.3 | 98.7 (19.7% RSE) |
| CL/F OS (l h −1 ) | CLm/F | 585 | l h −1 | 4.91 | 16.6 (48.8% RSE) |
| V/F OS (l) | Vm/F | 1110 | l | 5.87 | 18.6 (48.2% RSE) |
| k m ( h – 1 ) | kfm | 2.13 | h | 6.93 |  |
| CL/F OC (l h −1 ) | CLm/F | 20.6 | l h −1 | 3.79 |  |
| V/F OC (l) | V1/F | 159 | l | 4.93 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.316). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The oseltamivir parent–metabolite model was rejected because the first-order rate constants kabs (2.81) and kfm (2.13) are reported with unit 'h' instead of h⁻¹, a dimension mismatch on structural parameters.**

The absorption rate constant kabs of oseltamivir and the metabolite formation rate constant kfm for oseltamivir carboxylate carry the verbatim unit 'h', which is dimensionally wrong for first-order rate constants that must be per hour. Because this unit could not be converted to SI, the parameters were recorded without an SI value, triggering the dimension-mismatch refusal. All other reported parameters (Fab 100%, CLm/F 585 and 20.6 l h⁻¹, Vm/F 1110 l, V1/F 159 l) carry consistent units. Extracted — oseltamivir: Fab 100, kabs 2.81 h, CLm/F 585 l h −1, Vm/F 1.11e+03 l; oseltamivir carboxylate: kfm 2.13 h, CLm/F 20.6 l h −1, V1/F 159 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has oseltamivir → oseltamivir carboxylate (metabolism), the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F (%) | `Q40` · Fab | 100 |  |  |  |  |  | exact (1) | bcp12892-tbl-0001:row2:col1, bcp12892-tbl-0001:row2:col4 | 17.6 (35.1% RSE) |
| k a ( h – 1 ) | `Q49` · kabs | 2.81 | h |  |  | h | 10.3 | exact (1) | bcp12892-tbl-0001:row3:col1, bcp12892-tbl-0001:row3:col2, bcp12892-tbl-0001:row3:col4 | 98.7 (19.7% RSE) |
| CL/F OS (l h −1 ) | `Q351` · CLm/F | 585 | l h −1 | 0.0001625 | m3/s | l/h | 4.91 | exact (1) | bcp12892-tbl-0001:row4:col1, bcp12892-tbl-0001:row4:col2, bcp12892-tbl-0001:row4:col4 | 16.6 (48.8% RSE) |
| V/F OS (l) | `Q367` · Vm/F | 1110 | l | 1.11 | m3 | l | 5.87 | llm_confirmed (0.6) | bcp12892-tbl-0001:row5:col1, bcp12892-tbl-0001:row5:col2, bcp12892-tbl-0001:row5:col4 | 18.6 (48.2% RSE) |
| k m ( h – 1 ) | `Q305` · kfm | 2.13 | h |  |  | h | 6.93 | exact (1) | bcp12892-tbl-0001:row6:col1, bcp12892-tbl-0001:row6:col2, bcp12892-tbl-0001:row6:col4 |  |
| CL/F OC (l h −1 ) | `Q351` · CLm/F | 20.6 | l h −1 | 5.722e-06 | m3/s | l/h | 3.79 | exact (1) | bcp12892-tbl-0001:row9:col1, bcp12892-tbl-0001:row9:col2 |  |
| V/F OC (l) | `Q290` · V1/F | 159 | l | 0.159 | m3 | l | 4.93 | exact (1) | bcp12892-tbl-0001:row10:col1, bcp12892-tbl-0001:row10:col2, bcp12892-tbl-0001:row10:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F, relative bioavailability | Q87 | llm_confirmed |
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'F (%)' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'k a ( h – 1 )' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'CL/F OS (l h −1 )' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'V/F OS (l)' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'k m ( h – 1 )' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- table section iiv: 'V/F OC (l)' routed out of structural estimates ('IIV/IOV (%CV) * (%RSE † )')
- unit_dimension_mismatch: 'k a ( h – 1 )' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k m ( h – 1 )' → Q305 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: '% change per 10 units of CL CR' (CL/F)
- dropped duplicate Q27 ('Effect of CL CR on CL/F OC (% change per 10 units of CL CR )', value '3.84') — already have one for this compound
- dropped value-less row: 'CLCR, creatinine clearance'
- dropped value-less row: 'CL/FOS , oseltamivir clearance'
- dropped value-less row: 'CL/FOC, oseltamivir carboxylate clearance'
- dropped value-less row: 'ka, absorption rate constant'
- dropped value-less row: 'km, metabolism rate constant'
- dropped value-less row: 'V/FOS, apparent volume of distribution of oseltamivir'
- dropped value-less row: 'V/FOC, apparent volume of distribution of oseltamivir carboxylate'
- metabolite oseltamivir carboxylate: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite oseltamivir carboxylate: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=oseltamivir carboxylate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 22 linked by role; re-tagged oseltamivir carboxylate→parent ×15
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 2 transcribed (0 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.316 (6/19 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['oseltamivir', 'oseltamivir carboxylate', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f oc]` | 20.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f os]` | 585 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f os]` |  | 585 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f, relative bioavailability]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 100 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f].value` |  | 100 | mismatch |
| `gpt-oss-120b` | `parameters[k a]` | 2.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` |  | 2.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k m].parameter_id` | Q305 | Q1 | mismatch |
| `gpt-oss-120b` | `parameters[v/f oc]` | 159 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f os]` | 1110 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f os]` |  | 1110 | only_one_extracted |

</details>

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
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['bcp12892-tbl-0001:row10:col1', 'bcp12892-tbl-0001:row10:col2', 'bcp12892-tbl-0001:row10:col4'] |
| C5_dimension_Q305 | fail | [time] | h | ['bcp12892-tbl-0001:row6:col1', 'bcp12892-tbl-0001:row6:col2', 'bcp12892-tbl-0001:row6:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['bcp12892-tbl-0001:row4:col1', 'bcp12892-tbl-0001:row4:col2', 'bcp12892-tbl-0001:row4:col4'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['bcp12892-tbl-0001:row9:col1', 'bcp12892-tbl-0001:row9:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['bcp12892-tbl-0001:row5:col1', 'bcp12892-tbl-0001:row5:col2', 'bcp12892-tbl-0001:row5:col4'] |
| C5_dimension_Q49 | fail | [time] | h | ['bcp12892-tbl-0001:row3:col1', 'bcp12892-tbl-0001:row3:col2', 'bcp12892-tbl-0001:row3:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 159 L | ['bcp12892-tbl-0001:row10:col1', 'bcp12892-tbl-0001:row10:col2', 'bcp12892-tbl-0001:row10:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boseltamivir%5D%20Oseltamivir_Chairat2016_reference&body=Drug%3A%20oseltamivir%0ARecord%3A%20Oseltamivir_Chairat2016_reference%0APaper%3A%20Chairat_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oseltamivir/Oseltamivir_Chairat2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:06 UTC</sub>
