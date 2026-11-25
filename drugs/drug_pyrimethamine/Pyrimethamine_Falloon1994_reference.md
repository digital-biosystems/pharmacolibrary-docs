<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/drug_pyrimethamine/&quot;},{&quot;label&quot;:&quot;Falloon_1994 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pyrimethamine — `Pyrimethamine_Falloon1994_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="pyrimethamine" model-id="Pyrimethamine_Falloon1994_reference" status="rejected" stale="false" population="adults infected with HIV" measured-compound="pyrimethamine and dapsone" parameterization="mechanistic" topology="1C"></div>

## Citation
Falloon J, Lavelle J, Ogata-Arakaki D, Byrne A, Graziani A, Morgan A et al. Pharmacokinetics and safety of weekly dapsone and dapsone plus pyrimethamine for prevention of pneumocystis pneumonia. Antimicrobial agents and chemotherapy 38(7):1580–1587 (1994).
  ·  DOI: [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580)

## Population and dosing

**Population:** adults infected with HIV · condition HIV infection · age group adult.

**Dosing:** 100, 200, 300 mg, oral, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed dapsone and pyrimethamine, measured pyrimethamine and dapsone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Mean | MRT | 0.579 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dapsone and pyrimethamine, the second reading pyrimethamine; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Mean | `Q53` · MRT | 0.579 | h | 2084 | s | h | llm (0.6) | tab_4:row3:col1, tab_4:row3:col2, tab_4:row3:col3, tab_4:row3:col4, tab_4:row3:col5, tab_4:row3:col6, tab_4:row3:col7, tab_4:row7:col1, tab_4:row7:col2, tab_4:row7:col3, tab_4:row7:col4, tab_4:row7:col5, tab_4:row7:col6, tab_4:row7:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'tiag (h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Median'; source reconciliation required
- column "k, (h-')" classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'vj/f (liters/kg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'vpi/ (liters/kg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'cld/f (liters/h/kg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'cl/hf (liters/h/kg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 't1n (h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Mean'; source reconciliation required
- table representations disagree for 'CV (%)'; source reconciliation required
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['tab_4:row2:col1', 'tab_4:row2:col2', 'tab_4:row2:col3', 'tab_4:row2:col4', 'tab_4:row2:col5', 'tab_4:row2:col6', 'tab_4:row2:col7', 'tab_4:row6:col1', 'tab_4:row6:col2', 'tab_4:row6:col3', 'tab_4:row6:col4', 'tab_4:row6:col5', 'tab_4:row6:col6', 'tab_4:row6:col7'])
- dropped unlinked row (NIL): 'CV (%)' — extend the ontology if this is a real PK parameter (source ['tab_4:row4:col1', 'tab_4:row4:col2', 'tab_4:row4:col3', 'tab_4:row4:col4', 'tab_4:row4:col5', 'tab_4:row4:col6', 'tab_4:row4:col7', 'tab_4:row8:col1', 'tab_4:row8:col2', 'tab_4:row8:col3', 'tab_4:row8:col4', 'tab_4:row8:col5', 'tab_4:row8:col6', 'tab_4:row8:col7'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pyrimethamine and dapsone
- status held at "Needs review" — not promoted
- molar mass: none found for 'pyrimethamine and dapsone' — its concentrations stay mass-only

**Extraction notes:**
- table tab_4: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[mean].value` | 0.579 | 131 | mismatch |
| `gpt-oss-120b` | `parameters[median]` |  | 111 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | dapsone and pyrimethamine | pyrimethamine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pyrimethamine and dapsone | pyrimethamine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q53 | pass | [time] |  | ['tab_4:row3:col1', 'tab_4:row3:col2', 'tab_4:row3:col3', 'tab_4:row3:col4', 'tab_4:row3:col5', 'tab_4:row3:col6', 'tab_4:row3:col7', 'tab_4:row7:col1', 'tab_4:row7:col2', 'tab_4:row7:col3', 'tab_4:row7:col4', 'tab_4:row7:col5', 'tab_4:row7:col6', 'tab_4:row7:col7'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrimethamine%5D%20Pyrimethamine_Falloon1994_reference&body=Drug%3A%20pyrimethamine%0ARecord%3A%20Pyrimethamine_Falloon1994_reference%0APaper%3A%20Falloon_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrimethamine/Pyrimethamine_Falloon1994_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:37 UTC</sub>
