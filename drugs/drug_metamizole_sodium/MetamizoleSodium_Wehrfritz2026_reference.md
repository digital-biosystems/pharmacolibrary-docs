<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;metamizole sodium&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/&quot;},{&quot;label&quot;:&quot;Wehrfritz_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MetamizoleSodium_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MetamizoleSodium_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metamizole sodium — `MetamizoleSodium_Wehrfritz2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="metamizole sodium" model-id="MetamizoleSodium_Wehrfritz2026_reference" status="rejected" stale="false" population="adult patient" measured-compound="4-methylaminoantipyrine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Wehrfritz A, Schmidt S, Ihmsen H, Fiedler S, Volleth F, Francis RCE et al. A clinical case and pharmacokinetic analysis of an inadvertent overdose of dipyrone (metamizole) without clinical toxicity: A case report. SAGE open medical case reports 14:2050313X261439208 (2026).
  ·  DOI: [10.1177/2050313X261439208](https://doi.org/10.1177/2050313X261439208)

## Population and dosing

**Population:** adult patient · condition healthy · age group adult · n = 1.

**Dosed compound ≠ measured compound:** dosed dipyrone, measured 4-methylaminoantipyrine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dipyrone, the second reading metamizole; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- column '−1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'leucocytes' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'neutrophilic granulocytes' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'alt' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'creatinine' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'urea' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'protein' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'albumin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'lipase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bilirubin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'γ-gt' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ast' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Unit' — extend the ontology if this is a real PK parameter (source ['Wehrfritz_2026_table_1:row0:col1'])
- dropped unlinked row (NIL): 'Reference range' — extend the ontology if this is a real PK parameter (source ['Wehrfritz_2026_table_1:row1:col1', 'Wehrfritz_2026_table_1:row1:col2', 'Wehrfritz_2026_table_1:row1:col3', 'Wehrfritz_2026_table_1:row1:col7', 'Wehrfritz_2026_table_1:row1:col8', 'Wehrfritz_2026_table_1:row1:col9', 'Wehrfritz_2026_table_1:row1:col10', 'Wehrfritz_2026_table_1:row1:col11', 'Wehrfritz_2026_table_1:row1:col12'])
- dropped unlinked row (NIL): 'Day of exposure' — extend the ontology if this is a real PK parameter (source ['Wehrfritz_2026_table_1:row2:col1', 'Wehrfritz_2026_table_1:row2:col2', 'Wehrfritz_2026_table_1:row2:col3', 'Wehrfritz_2026_table_1:row2:col8', 'Wehrfritz_2026_table_1:row3:col1', 'Wehrfritz_2026_table_1:row3:col2', 'Wehrfritz_2026_table_1:row3:col3', 'Wehrfritz_2026_table_1:row3:col4', 'Wehrfritz_2026_table_1:row3:col5', 'Wehrfritz_2026_table_1:row3:col6', 'Wehrfritz_2026_table_1:row3:col8', 'Wehrfritz_2026_table_1:row3:col9', 'Wehrfritz_2026_table_1:row3:col10', 'Wehrfritz_2026_table_1:row3:col11', 'Wehrfritz_2026_table_1:row3:col12', 'Wehrfritz_2026_table_1:row4:col1', 'Wehrfritz_2026_table_1:row4:col2', 'Wehrfritz_2026_table_1:row4:col3', 'Wehrfritz_2026_table_1:row4:col4', 'Wehrfritz_2026_table_1:row4:col5', 'Wehrfritz_2026_table_1:row4:col6', 'Wehrfritz_2026_table_1:row4:col8', 'Wehrfritz_2026_table_1:row4:col9', 'Wehrfritz_2026_table_1:row4:col10', 'Wehrfritz_2026_table_1:row4:col11', 'Wehrfritz_2026_table_1:row4:col12', 'Wehrfritz_2026_table_1:row5:col1', 'Wehrfritz_2026_table_1:row5:col2', 'Wehrfritz_2026_table_1:row5:col3', 'Wehrfritz_2026_table_1:row5:col4', 'Wehrfritz_2026_table_1:row5:col5', 'Wehrfritz_2026_table_1:row5:col6', 'Wehrfritz_2026_table_1:row5:col8', 'Wehrfritz_2026_table_1:row5:col9', 'Wehrfritz_2026_table_1:row5:col10', 'Wehrfritz_2026_table_1:row5:col11', 'Wehrfritz_2026_table_1:row5:col12', 'Wehrfritz_2026_table_1:row6:col1', 'Wehrfritz_2026_table_1:row6:col2', 'Wehrfritz_2026_table_1:row6:col3', 'Wehrfritz_2026_table_1:row6:col4', 'Wehrfritz_2026_table_1:row6:col5', 'Wehrfritz_2026_table_1:row6:col6', 'Wehrfritz_2026_table_1:row6:col7', 'Wehrfritz_2026_table_1:row6:col8', 'Wehrfritz_2026_table_1:row6:col9', 'Wehrfritz_2026_table_1:row6:col10', 'Wehrfritz_2026_table_1:row6:col11', 'Wehrfritz_2026_table_1:row7:col1', 'Wehrfritz_2026_table_1:row7:col2', 'Wehrfritz_2026_table_1:row7:col3', 'Wehrfritz_2026_table_1:row7:col4', 'Wehrfritz_2026_table_1:row7:col5', 'Wehrfritz_2026_table_1:row7:col6', 'Wehrfritz_2026_table_1:row7:col7', 'Wehrfritz_2026_table_1:row7:col8', 'Wehrfritz_2026_table_1:row7:col9', 'Wehrfritz_2026_table_1:row7:col10', 'Wehrfritz_2026_table_1:row7:col11', 'Wehrfritz_2026_table_1:row8:col2', 'Wehrfritz_2026_table_1:row8:col3', 'Wehrfritz_2026_table_1:row8:col4', 'Wehrfritz_2026_table_1:row8:col5', 'Wehrfritz_2026_table_1:row8:col6', 'Wehrfritz_2026_table_1:row8:col7', 'Wehrfritz_2026_table_1:row8:col8', 'Wehrfritz_2026_table_1:row8:col10', 'Wehrfritz_2026_table_1:row8:col11', 'Wehrfritz_2026_table_1:row9:col2', 'Wehrfritz_2026_table_1:row9:col3', 'Wehrfritz_2026_table_1:row10:col2', 'Wehrfritz_2026_table_1:row10:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=4-methylaminoantipyrine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- review gap-fill skipped: this record measures '4-methylaminoantipyrine', not metamizole_sodium — the review values are the parent's

**Extraction notes:**
- transposed table Wehrfritz_2026_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Wehrfritz_2026_table_1:row1:col4 = '&lt;21'
- unparsed cell Wehrfritz_2026_table_1:row1:col5 = '&lt;833'
- unparsed cell Wehrfritz_2026_table_1:row1:col6 = '&lt;833'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dipyrone', '4-methylaminoantipyrine', 'hydrolysis'], ['4-methylaminoantipyrine', '4-aminoantipyrine', 'metabolism']] | [['metamizole', '4-methylaminoantipyrine', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | dipyrone | metamizole | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained |
|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |
| C0b_disposition_core | fail |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetamizole_sodium%5D%20MetamizoleSodium_Wehrfritz2026_reference&body=Drug%3A%20metamizole_sodium%0ARecord%3A%20MetamizoleSodium_Wehrfritz2026_reference%0APaper%3A%20Wehrfritz_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metamizole_sodium/MetamizoleSodium_Wehrfritz2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:56 UTC</sub>
