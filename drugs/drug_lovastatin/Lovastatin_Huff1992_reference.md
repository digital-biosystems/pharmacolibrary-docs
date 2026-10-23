<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;lovastatin&quot;,&quot;href&quot;:&quot;drugs/drug_lovastatin/&quot;},{&quot;label&quot;:&quot;Huff_1992 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lovastatin — `Lovastatin_Huff1992_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-07 11:32 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The lovastatin model in miniature pigs was quarantined because elimination clearance and intercompartmental clearance had no extracted values and library placeholder values were substituted, and parameter V2 (0.08) was not covered by the parameter check.

<div class="pk-model-meta" hidden drug="lovastatin" model-id="Lovastatin_Huff1992_reference" status="needs_review" stale="true" population="miniature pigs" measured-compound="apo B in VLDL and LDL" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Huff MW, Telford DE, Barrett PH. Dietary fish oil plus lovastatin decreases both VLDL and LDL apo B production in miniature pigs. Arteriosclerosis and thrombosis : a journal of vascular biology 12(8):902–910 (1992).
  ·  DOI: [10.1161/01.atv.12.8.902](https://doi.org/10.1161/01.atv.12.8.902)

## Population and dosing

**Population:** miniature pigs · condition healthy · n = 6.

**Dosing:** 30 mg/day, oral, multiple.

**Dosed compound ≠ measured compound:** dosed fish oil (Maxepa) and lovastatin, measured apo B in VLDL and LDL.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| M(2) | V2 | 0.08 |  |
| M(3) | V3 | 0.010 |  |
| L(0,5)† | C0 | 8.56 |  |
| L(0,2) | λ1 | 0.654 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lovastatin model in miniature pigs was quarantined because elimination clearance and intercompartmental clearance had no extracted values and library placeholder values were substituted, and parameter V2 (0.08) was not covered by the parameter check.**

No value was available for lovastatin's elimination clearance and intercompartmental clearance, so library placeholder values stood in for these missing source values and the model was held back rather than published with invented numbers. The parameter coverage check expected 1 parameter emitted or defaulted but obtained 0 covered, with V2 (0.08, volume of distribution of the peripheral compartment) neither emitted nor defaulted. A second reader also disagreed on several fields, including the dose compound (fish oil (Maxepa) and lovastatin versus VLDL apo B), the primary analyte, the order of the VLDL/IDL/LDL apo B interconversion links, and the values of parameters λ1 (0.654) and V2 (0.08), which the second reader read as null. Extracted — lovastatin: V2 0.08, V3 0.01, C0 8.56, λ1 0.654.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fish oil (Maxepa) and lovastatin, the second reading lovastatin; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| M(2) | `Q64` · V2 | 0.08 |  | llm (0.5) | Huff_1992_table_4:row1:col1, Huff_1992_table_4:row1:col2 |
| M(3) | `Q77` · V3 | 0.010 |  | llm (0.5) | Huff_1992_table_4:row4:col1, Huff_1992_table_4:row4:col2 |
| L(0,5)† | `Q86` · C0 | 8.56 |  | llm (0.5) | Huff_1992_table_4:row8:col1, Huff_1992_table_4:row8:col2 |
| L(0,2) | `Q67` · λ1 | 0.654 |  | llm (0.5) | Huff_1992_table_4:row12:col1, Huff_1992_table_4:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'M(5)*' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row0:col1', 'Huff_1992_table_4:row0:col2'])
- dropped unlinked row (NIL): 'M(1)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row2:col1', 'Huff_1992_table_4:row2:col2'])
- dropped unlinked row (NIL): 'M(4)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row3:col1', 'Huff_1992_table_4:row3:col2'])
- dropped unlinked row (NIL): 'M(10)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row5:col1', 'Huff_1992_table_4:row5:col2'])
- dropped unlinked row (NIL): 'M(11)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row6:col1', 'Huff_1992_table_4:row6:col2'])
- dropped unlinked row (NIL): 'M(10)/M(11)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row7:col1', 'Huff_1992_table_4:row7:col2'])
- dropped unlinked row (NIL): 'L(2,5)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row9:col1', 'Huff_1992_table_4:row9:col2'])
- dropped unlinked row (NIL): 'L(4,5)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row10:col1', 'Huff_1992_table_4:row10:col2'])
- dropped unlinked row (NIL): 'L(10,5)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row11:col1', 'Huff_1992_table_4:row11:col2'])
- dropped unlinked row (NIL): 'L(1,2)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row13:col1', 'Huff_1992_table_4:row13:col2'])
- dropped unlinked row (NIL): 'L(10,2)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row14:col1', 'Huff_1992_table_4:row14:col2'])
- dropped unlinked row (NIL): 'L(0,4)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row15:col1'])
- dropped unlinked row (NIL): 'L(3,4)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row16:col1', 'Huff_1992_table_4:row16:col2'])
- dropped unlinked row (NIL): 'L(10,4)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row17:col1', 'Huff_1992_table_4:row17:col2'])
- dropped unlinked row (NIL): 'L(0,10)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row18:col1', 'Huff_1992_table_4:row18:col2'])
- dropped unlinked row (NIL): 'L(11,10)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row19:col1', 'Huff_1992_table_4:row19:col2'])
- dropped unlinked row (NIL): 'L(10,11)' — extend the ontology if this is a real PK parameter (source ['Huff_1992_table_4:row20:col1', 'Huff_1992_table_4:row20:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=apo B in VLDL and LDL
- topology: 2 first-order transfer(s) across 3 compounds → general_linear

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Huff_1992_table_4:row15:col2 = '0.830±0.275||'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (1/7 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['vldl apo b', 'idl apo b', 'interconversion'], ['vldl apo b', 'ldl apo b', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[l(0,5)]` | 8.56 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[l]` | 0.654 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[m]` | 0.08 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fish oil (Maxepa) and lovastatin | lovastatin | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | apo B in VLDL and LDL | apo B | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Huff_1992_table_4:row1:col1', 'Huff_1992_table_4:row1:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['Huff_1992_table_4:row12:col1', 'Huff_1992_table_4:row12:col2'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 |  | ['Huff_1992_table_4:row4:col1', 'Huff_1992_table_4:row4:col2'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 |  | ['Huff_1992_table_4:row8:col1', 'Huff_1992_table_4:row8:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | fail | 1 scholar param(s) emitted or defaulted | 0 covered | neither emitted nor in defaulted[]: ['V2'] |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blovastatin%5D%20Lovastatin_Huff1992_reference&body=Drug%3A%20lovastatin%0ARecord%3A%20Lovastatin_Huff1992_reference%0APaper%3A%20Huff_1992%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lovastatin/Lovastatin_Huff1992_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:32 UTC</sub>
