<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;irinotecan&quot;,&quot;href&quot;:&quot;drugs/drug_irinotecan/&quot;},{&quot;label&quot;:&quot;Zhu_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# irinotecan — `Irinotecan_Zhu2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="irinotecan" model-id="Irinotecan_Zhu2023_reference" status="rejected" stale="false" population="adults with colorectal cancer" measured-compound="SN-38" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Zhu J, Zhang Y, Zhao Y, Zhang J, Hao K, He H. Translational Pharmacokinetic/Pharmacodynamic Modeling and Simulation of Oxaliplatin and Irinotecan in Colorectal Cancer. Pharmaceutics 15(9) (2023).
  ·  DOI: [10.3390/pharmaceutics15092274](https://doi.org/10.3390/pharmaceutics15092274)

## Population and dosing

**Population:** adults with colorectal cancer · condition colorectal cancer · age group adult.

**Dosed compound ≠ measured compound:** dosed irinotecan, measured SN-38.

> **Species: in vitro.** This record comes from an in-vitro study (cells, tissue or microsomes), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has SN-38, the second reading irinotecan; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Definition | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Unit' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02274-t003:row1:col20'])
- dropped unlinked row (NIL): 'Mouse' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02274-t003:row2:col7', 'pharmaceutics-15-02274-t003:row2:col8', 'pharmaceutics-15-02274-t003:row2:col9', 'pharmaceutics-15-02274-t003:row2:col10', 'pharmaceutics-15-02274-t003:row2:col11', 'pharmaceutics-15-02274-t003:row2:col12', 'pharmaceutics-15-02274-t003:row2:col13', 'pharmaceutics-15-02274-t003:row2:col14', 'pharmaceutics-15-02274-t003:row2:col16', 'pharmaceutics-15-02274-t003:row2:col17', 'pharmaceutics-15-02274-t003:row2:col18', 'pharmaceutics-15-02274-t003:row2:col21', 'pharmaceutics-15-02274-t003:row2:col22', 'pharmaceutics-15-02274-t003:row2:col23', 'pharmaceutics-15-02274-t003:row2:col24'])
- dropped unlinked row (NIL): 'Human' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02274-t003:row4:col3', 'pharmaceutics-15-02274-t003:row4:col4', 'pharmaceutics-15-02274-t003:row4:col5', 'pharmaceutics-15-02274-t003:row4:col6', 'pharmaceutics-15-02274-t003:row4:col7', 'pharmaceutics-15-02274-t003:row4:col8', 'pharmaceutics-15-02274-t003:row4:col9', 'pharmaceutics-15-02274-t003:row4:col10', 'pharmaceutics-15-02274-t003:row4:col11', 'pharmaceutics-15-02274-t003:row4:col12', 'pharmaceutics-15-02274-t003:row4:col13', 'pharmaceutics-15-02274-t003:row4:col14', 'pharmaceutics-15-02274-t003:row4:col15', 'pharmaceutics-15-02274-t003:row4:col16', 'pharmaceutics-15-02274-t003:row4:col17', 'pharmaceutics-15-02274-t003:row4:col18', 'pharmaceutics-15-02274-t003:row4:col19', 'pharmaceutics-15-02274-t003:row4:col20', 'pharmaceutics-15-02274-t003:row4:col21', 'pharmaceutics-15-02274-t003:row4:col22', 'pharmaceutics-15-02274-t003:row4:col23', 'pharmaceutics-15-02274-t003:row4:col24'])
- table mostly unlinked (3/4 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=SN-38
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 5/5 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures 'SN-38', not irinotecan — the review values are the parent's

**Extraction notes:**
- transposed table pharmaceutics-15-02274-t003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell pharmaceutics-15-02274-t003:row0:col12 = 'Apparent volumes of distribution in the central compartment of SN-38'
- unparsed cell pharmaceutics-15-02274-t003:row0:col13 = 'Apparent volumes of distribution in the peripheral compartment of SN-38'
- unparsed cell pharmaceutics-15-02274-t003:row0:col15 = 'Metabolic rate from irinotecan to SN-38'
- unparsed cell pharmaceutics-15-02274-t003:row0:col16 = 'Systematic clearance of SN-38'
- unparsed cell pharmaceutics-15-02274-t003:row0:col18 = 'Clearance between central and peripheral compartments of SN-38'
- unparsed cell pharmaceutics-15-02274-t003:row0:col24 = 'Fraction unbound of SN-38 in plasma'
- unparsed cell pharmaceutics-15-02274-t003:row2:col15 = '1.65 × 10−4 (93.8)'
- unparsed cell pharmaceutics-15-02274-t003:row2:col19 = '3.38 × 10−3 (fixed)'
- unparsed cell pharmaceutics-15-02274-t003:row2:col20 = '0.448 (&gt;100)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (2/5 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['irinotecan', 'sn-38', 'metabolism']] | [['irinotecan', 'sn-38', 'metabolism'], ['oxaliplatin', 'ultrafiltration platinum', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[definition]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | SN-38 | irinotecan | mismatch |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Birinotecan%5D%20Irinotecan_Zhu2023_reference&body=Drug%3A%20irinotecan%0ARecord%3A%20Irinotecan_Zhu2023_reference%0APaper%3A%20Zhu_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_irinotecan/Irinotecan_Zhu2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:17 UTC</sub>
