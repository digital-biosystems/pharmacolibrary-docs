<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;tamoxifen&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/&quot;},{&quot;label&quot;:&quot;Mc_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tamoxifen_Xu2026_reference&quot;,&quot;label&quot;:&quot;Xu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Xu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tamoxifen — `Tamoxifen_Mc2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="tamoxifen" model-id="Tamoxifen_Mc2024_reference" status="rejected" stale="false" population="patients with breast cancer" measured-compound="Z-endoxifen" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Mc Laughlin AM, Helland T, Klima F, Koolen SLW, van Schaik RHN, Mathijssen RHJ et al. Nonlinear Mixed-Effects Model of Z-Endoxifen Concentrations in Tamoxifen-Treated Patients from the CEPAM Cohort. Clinical pharmacology and therapeutics 116(3):690–702 (2024).
  ·  DOI: [10.1002/cpt.3238](https://doi.org/10.1002/cpt.3238)

## Population and dosing

**Population:** patients with breast cancer · condition breast cancer · age group adult.

**Dosed compound ≠ measured compound:** dosed tamoxifen, measured Z-endoxifen.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f: this record has none, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- column 'parameter [unit]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Fixed effects'; source reconciliation required
- table representations disagree for 'Random effects'; source reconciliation required
- dropped unlinked row (NIL): 'Fixed effects' — extend the ontology if this is a real PK parameter (source ['Mc_2024_table_p7_1:row0:col1', 'Mc_2024_table_p7_1:row0:col3', 'Mc_2024_table_p7_1:row1:col3', 'Mc_2024_table_p7_1:row2:col3', 'Mc_2024_table_p7_1:row3:col1', 'Mc_2024_table_p7_1:row3:col3', 'Mc_2024_table_p7_1:row4:col3', 'Mc_2024_table_p7_1:row5:col1', 'Mc_2024_table_p7_1:row5:col3', 'Mc_2024_table_p7_1:row6:col1', 'Mc_2024_table_p7_1:row6:col3', 'Mc_2024_table_p7_1:row7:col1', 'Mc_2024_table_p7_1:row7:col3', 'Mc_2024_table_p7_1:row8:col1', 'Mc_2024_table_p7_1:row8:col3', 'Mc_2024_table_p7_1:row9:col1', 'Mc_2024_table_p7_1:row9:col3', 'Mc_2024_table_p7_1:row10:col1', 'Mc_2024_table_p7_1:row10:col3', 'Mc_2024_table_p7_1:row11:col1', 'Mc_2024_table_p7_1:row11:col3', 'Mc_2024_table_p7_1:row12:col1', 'Mc_2024_table_p7_1:row12:col3', 'Mc_2024_table_p7_1:row13:col1', 'Mc_2024_table_p7_1:row13:col3', 'Mc_2024_table_p7_1:row14:col3', 'Mc_2024_table_p7_1:row15:col3', 'Mc_2024_table_p7_1:row16:col3'])
- dropped unlinked row (NIL): 'Random effects' — extend the ontology if this is a real PK parameter (source ['Mc_2024_table_p7_1:row17:col1', 'Mc_2024_table_p7_1:row18:col1', 'Mc_2024_table_p7_1:row20:col3', 'Mc_2024_table_p7_1:row21:col3', 'Mc_2024_table_p7_1:row22:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Z-endoxifen
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 2/2 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures 'Z-endoxifen', not tamoxifen — the review values are the parent's

**Extraction notes:**
- table Mc_2024_table_p7_1: unbound_uncertainty
- table Mc_2024_table_p7_1: units_need_context
- table Mc_2024_table_p7_1: unparsed_numeric_cell
- table tab_2: representations disagree; selected evidence retained, not merged
- final table tab_2: no supported point estimates; targeted recovery unresolved
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intermediate_metabolizer]` |  | 446 | only_one_extracted |
| `gpt-oss-120b` | `parameters[normal_metabolizer]` |  | 1100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[poor_metabolizer]` |  | 28 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btamoxifen%5D%20Tamoxifen_Mc2024_reference&body=Drug%3A%20tamoxifen%0ARecord%3A%20Tamoxifen_Mc2024_reference%0APaper%3A%20Mc_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tamoxifen/Tamoxifen_Mc2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 10:11 UTC</sub>
