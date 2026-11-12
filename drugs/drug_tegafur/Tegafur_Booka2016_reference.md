<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tegafur&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/&quot;},{&quot;label&quot;:&quot;Booka_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tegafur_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Kim2017_multiple_dose&quot;,&quot;label&quot;:&quot;Kim_2017_multiple_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Kim2017_single_dose&quot;,&quot;label&quot;:&quot;Kim_2017_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_single_dose.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tegafur — `Tegafur_Booka2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because 5-FU is an orphan metabolite lacking a metabolic link from the administered tegafur dose.

<div class="pk-model-meta" hidden drug="tegafur" model-id="Tegafur_Booka2016_reference" status="rejected" stale="false" population="cancer patients with various degrees of renal function" measured-compound="5-FU" parameterization="apparent" topology="general_linear"></div>

## Citation
Booka E, Imamura CK, Takeuchi H, Hamamoto Y, Gomi D, Mizukami T et al. Development of an S-1 dosage formula based on renal function by a prospective pharmacokinetic study. Gastric cancer : official journal of the International Gastric Cancer Association and the Japanese Gastric Cancer Association 19(3):876–886 (2016).
  ·  DOI: [10.1007/s10120-015-0536-6](https://doi.org/10.1007/s10120-015-0536-6)

## Population and dosing

**Population:** cancer patients with various degrees of renal function · condition cancer · age group adult · n = &gt;$16.

**Dosing:** 40 mg/m2, oral, single.

**Dosed compound ≠ measured compound:** dosed S-1, measured 5-FU.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h/m2) | CLm/F | 41.8 | L/h/m2 |
| V/F (L/m2) | Vm/F | 23.6 | L/m2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because 5-FU is an orphan metabolite lacking a metabolic link from the administered tegafur dose.**

Tegafur and 5-chloro-2,4-dihydroxypyridine are linked from an unidentifiable source S-1 rather than the drug itself. No metabolic link exists between tegafur and the measured compound 5-FU. The apparent clearance and volume parameters for 5-FU therefore lack a valid upstream dose connection. Extracted — tegafur: CLm/F 41.8 L/h/m2, Vm/F 23.6 L/m2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has S-1, the second reading tegafur; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| CL/F (L/h/m2) | `Q351` · CLm/F | 41.8 | L/h/m2 | l/(h·m2) | exact (1) | Tab2:row2:col2, Tab2:row6:col2, Tab2:row10:col1, Tab2:row10:col2 |
| V/F (L/m2) | `Q367` · Vm/F | 23.6 | L/m2 | l/m2 | exact (1) | Tab2:row3:col2, Tab2:row7:col2, Tab2:row11:col1, Tab2:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 3 row(s) → 5-FU, 3 row(s) → tegafur (name 6)
- table section iiv: '5-FU' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'CDHP' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Tegafur' routed out of structural estimates ('Interindividual variability (%)')
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '5-FU' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1', 'Tab2:row1:col2'])
- unit_dimension_unknown: 'L/h/m2' (CL/F)
- unit_dimension_unknown: 'L/m2' (V/F)
- dropped unlinked row (NIL): 'CDHP' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1', 'Tab2:row5:col2'])
- dropped unlinked row (NIL): 'Tegafur' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col1', 'Tab2:row9:col2'])
- implicit units: 'CL/F (L/h/m2)' — the LLM proposed 'L/h/m2', whose dimension does not fit Q27; left unset
- implicit units: 'V/F (L/m2)' — the LLM proposed 'L/m2', whose dimension does not fit Q76; left unset
- metabolite 5-fu: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite 5-fu: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-FU
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/6 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'S-1' ('S-1') — left in mass units
- molar mass: none found for 'S-1' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '5-FU', not tegafur — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = '(21.9 + 0.375 × CLcr) × BSA'
- unparsed cell Tab2:row3:col1 = '362 × BSA'
- unparsed cell Tab2:row6:col1 = '(3.77 + 0.403 × CLcr) × BSA'
- unparsed cell Tab2:row7:col1 = '200 × BSA'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['s-1', 'tegafur', 'metabolism'], ['s-1', '5-chloro-2,4-dihydroxypyridine', 'metabolism'], ['tegafur', '5-fu', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[v/f].parameter_id` | Q367 | Q76 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | S-1 | tegafur | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | L/h/m2 | ['Tab2:row2:col2', 'Tab2:row6:col2', 'Tab2:row10:col1', 'Tab2:row10:col2'] |
| C5_unit_missing_Q367 | fail | [length] ** 3 | L/m2 | ['Tab2:row3:col2', 'Tab2:row7:col2', 'Tab2:row11:col1', 'Tab2:row11:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btegafur%5D%20Tegafur_Booka2016_reference&body=Drug%3A%20tegafur%0ARecord%3A%20Tegafur_Booka2016_reference%0APaper%3A%20Booka_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tegafur/Tegafur_Booka2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 17:19 UTC</sub>
