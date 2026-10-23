<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;famciclovir&quot;,&quot;href&quot;:&quot;drugs/drug_famciclovir/&quot;},{&quot;label&quot;:&quot;Schenkel_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# famciclovir — `Famciclovir_Schenkel2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="famciclovir" model-id="Famciclovir_Schenkel2013_reference" status="rejected" stale="false" population="patients undergoing cataract surgery" measured-compound="penciclovir" parameterization="mechanistic" topology="1C"></div>

## Citation
Schenkel F, Csajka C, Baglivo E, Kondo-Oestreicher M, Dayer P, Gex-Fabry M et al. Intraocular penetration of penciclovir after oral administration of famciclovir: a population pharmacokinetic model. The Journal of antimicrobial chemotherapy 68(7):1635–1641 (2013).
  ·  DOI: [10.1093/jac/dkt064](https://doi.org/10.1093/jac/dkt064)

## Population and dosing

**Population:** patients undergoing cataract surgery · condition cataract surgery · age group adult · n = 53.

**Dosing:** 500 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed famciclovir, measured penciclovir.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of p ratio: this record has none, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| t 1/2P (h) | Q57 | llm |
| t 1/2AH (h) | Q95 | llm |
| P ratio | Q88 | llm |

## Departures & gaps

**Interpretation flags:**
- column 'formula' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'CL P (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'AUC p (mg . h/mL)' (captured trailing unit 'mg . h/mL' for child rows)
- dropped value-less row: 'AUC AH (mg . h/mL)' (captured trailing unit 'mg . h/mL' for child rows)
- unit 'mg . h/mL' inherited from a section-header row for AUC (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'AUC' from footnote/prose loose number None (source ['tab_2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=penciclovir
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 2 linked by role
- review gap-fill skipped: this record measures 'penciclovir', not famciclovir — the review values are the parent's

**Extraction notes:**
- transposed table Schenkel_2013_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Schenkel_2013_table_3:row0:col1 = '2.9+0.8'
- unparsed cell Schenkel_2013_table_3:row0:col2 = '28%'
- unparsed cell Schenkel_2013_table_3:row1:col1 = '22.8+9.1'
- unparsed cell Schenkel_2013_table_3:row1:col2 = '40%'
- unparsed cell Schenkel_2013_table_3:row2:col1 = '25.4+10.2'
- unparsed cell Schenkel_2013_table_3:row2:col2 = '40%'
- unparsed cell Schenkel_2013_table_3:row5:col1 = '6.6+1.8'
- unparsed cell Schenkel_2013_table_3:row5:col2 = '28%'
- unparsed cell Schenkel_2013_table_3:row6:col1 = '0.28+0.06'
- unparsed cell Schenkel_2013_table_3:row6:col2 = '22%'
- companion parameter table 1 transcribed (3 record(s))
- transposed table Schenkel_2013_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Schenkel_2013_table_3:row0:col1 = '2.9+0.8'
- unparsed cell Schenkel_2013_table_3:row0:col2 = '28%'
- unparsed cell Schenkel_2013_table_3:row1:col1 = '22.8+9.1'
- unparsed cell Schenkel_2013_table_3:row1:col2 = '40%'
- unparsed cell Schenkel_2013_table_3:row2:col1 = '25.4+10.2'
- unparsed cell Schenkel_2013_table_3:row2:col2 = '40%'
- unparsed cell Schenkel_2013_table_3:row5:col1 = '6.6+1.8'
- unparsed cell Schenkel_2013_table_3:row5:col2 = '28%'
- unparsed cell Schenkel_2013_table_3:row6:col1 = '0.28+0.06'
- unparsed cell Schenkel_2013_table_3:row6:col2 = '22%'
- companion parameter table 3 transcribed (6 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[p ratio]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2ah]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2p]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Schenkel_2013_table_3:row0:col3', 'Schenkel_2013_table_1:row0:col2', 'Schenkel_2013_table_3:row0:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Schenkel_2013_table_3:row6:col3', 'Schenkel_2013_table_1:row8:col2', 'Schenkel_2013_table_3:row6:col3'] |
| C5_dimension_Q95 | pass | [time] |  | ['Schenkel_2013_table_3:row3:col1', 'Schenkel_2013_table_1:row3:col2', 'Schenkel_2013_table_3:row3:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfamciclovir%5D%20Famciclovir_Schenkel2013_reference&body=Drug%3A%20famciclovir%0ARecord%3A%20Famciclovir_Schenkel2013_reference%0APaper%3A%20Schenkel_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:53 UTC</sub>
