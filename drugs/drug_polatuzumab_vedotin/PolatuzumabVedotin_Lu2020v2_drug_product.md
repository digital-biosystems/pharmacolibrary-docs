<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_polatuzumab_vedotin/&quot;},{&quot;label&quot;:&quot;Lu_2020_2 \u00b7 drug_product&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polatuzumab vedotin — `PolatuzumabVedotin_Lu2020v2_drug_product`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record lacks distribution volume and clearance parameters, and the unconjugated MMAE metabolite is an orphan compartment with no dose path.

<div class="pk-model-meta" hidden drug="polatuzumab vedotin" model-id="PolatuzumabVedotin_Lu2020v2_drug_product" status="rejected" stale="false" population="patients with non-Hodgkin lymphoma" measured-compound="acMMAE" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Lu D, Lu T, Shi R, Gibiansky L, Agarwal P, Shemesh CS et al. Application of a Two-Analyte Integrated Population Pharmacokinetic Model to Evaluate the Impact of Intrinsic and Extrinsic Factors on the Pharmacokinetics of Polatuzumab Vedotin in Patients with Non-Hodgkin Lymphoma. Pharmaceutical research 37(12):252 (2020).
  ·  DOI: [10.1007/s11095-020-02933-6](https://doi.org/10.1007/s11095-020-02933-6)

## Population and dosing

**Population:** patients with non-Hodgkin lymphoma · condition non-Hodgkin lymphoma · age group adult · n = 460.

**Dosing:** 126 mg, iv, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed polatuzumab_vedotin, measured acMMAE.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC, ng*day/mL | AUC | 3140 | ng*day/mL |
| Cmax, ng/mL | Cmax | 801 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record lacks distribution volume and clearance parameters, and the unconjugated MMAE metabolite is an orphan compartment with no dose path.**

The paper reports only AUC (3140 ng*day/mL) and Cmax (801 ng/mL) for acMMAE, confirming it is an exposure/outcome study rather than a compartmental model. The unconjugated MMAE metabolite is defined with zero compartments and lacks a link from the dose, making it unreachable. Additionally, the unit ng*day/mL could not be converted to SI units, preventing standardization of the exposure metric. Extracted — acMMAE: AUC 3.14e+03 ng*day/mL, Cmax 801 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has polatuzumab_vedotin, the second reading polatuzumab vedotin; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| AUC, ng*day/mL | `Q88` · AUC | 3140 | ng*day/mL | (d·ng)/ml | exact (1) | Lu_2020_2_table_5:row3:col2, Lu_2020_2_table_5:row3:col3, Lu_2020_2_table_5:row3:col4, Lu_2020_2_table_5:row8:col2, Lu_2020_2_table_5:row8:col3, Lu_2020_2_table_5:row8:col4 |
| Cmax, ng/mL | `Q32` · Cmax | 801 | ng/mL | ng/ml | exact (1) | Lu_2020_2_table_5:row5:col2, Lu_2020_2_table_5:row5:col3, Lu_2020_2_table_5:row5:col4, Lu_2020_2_table_5:row10:col2, Lu_2020_2_table_5:row10:col3, Lu_2020_2_table_5:row10:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'drug product' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'DCS4968g' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col5'])
- dropped unlinked row (NIL): 'GO29833' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col5'])
- dropped unlinked row (NIL): 'GO29365(Arm G)' — extend the ontology if this is a real PK parameter (source ['Tab1:row8:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acMMAE
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'drug product' subgroup of Lu_2020_2 (paper reports 7 populations: bendamustine administrationb, dose, mg/kg, drug product, hepatic function, renal function, rituximab administrationa, sex)
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'acMMAE' ('antibody-conjugated MMAE') — left in mass units
- molar mass: no plausible PubChem entry for 'unconjugated MMAE' ('unconjugated MMAE') — left in mass units
- molar mass: none found for 'acMMAE' — its concentrations stay mass-only
- molar mass: none found for 'unconjugated MMAE' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'acMMAE', not polatuzumab_vedotin — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab1:row1:col3 = '0.1 to 2.4'
- unparsed cell Tab1:row5:col3 = '1.4, 1.8'
- companion parameter table 2 transcribed (39 record(s))
- companion parameter table 3 transcribed (24 record(s))
- companion parameter table 4 transcribed (19 record(s))
- companion parameter table 5 transcribed (13 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['polatuzumab_vedotin', 'acmmae', 'interconversion'], ['acmmae', 'unconjugated mmae', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc]` | 3140 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 801 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | polatuzumab_vedotin | polatuzumab vedotin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Lu_2020_2_table_5:row5:col2', 'Lu_2020_2_table_5:row5:col3', 'Lu_2020_2_table_5:row5:col4', 'Lu_2020_2_table_5:row10:col2', 'Lu_2020_2_table_5:row10:col3', 'Lu_2020_2_table_5:row10:col4'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Lu_2020_2_table_5:row3:col2', 'Lu_2020_2_table_5:row3:col3', 'Lu_2020_2_table_5:row3:col4', 'Lu_2020_2_table_5:row8:col2', 'Lu_2020_2_table_5:row8:col3', 'Lu_2020_2_table_5:row8:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolatuzumab_vedotin%5D%20PolatuzumabVedotin_Lu2020v2_drug_product&body=Drug%3A%20polatuzumab_vedotin%0ARecord%3A%20PolatuzumabVedotin_Lu2020v2_drug_product%0APaper%3A%20Lu_2020_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Lu2020v2_drug_product%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:11 UTC</sub>
