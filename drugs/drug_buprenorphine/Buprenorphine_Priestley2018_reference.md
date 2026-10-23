<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;buprenorphine&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/&quot;},{&quot;label&quot;:&quot;Priestley_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Kraft2018_reference&quot;,&quot;label&quot;:&quot;Kraft_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Kraft2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_i_v&quot;,&quot;label&quot;:&quot;Robertson_2005_i_v&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_i_v.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_otm&quot;,&quot;label&quot;:&quot;Robertson_2005_otm&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# buprenorphine — `Buprenorphine_Priestley2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-07 04:48 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No model parameters were extracted from this paper.

<div class="pk-model-meta" hidden drug="buprenorphine" model-id="Buprenorphine_Priestley2018_reference" status="needs_review" stale="true" population="healthy adults" measured-compound="buprenorphine" parameterization="mechanistic" topology="2C"></div>

## Citation
Priestley T, Chappa AK, Mould DR, Upton RN, Shusterman N, Passik S et al. Converting from Transdermal to Buccal Formulations of Buprenorphine: A Pharmacokinetic Meta-Model Simulation in Healthy Volunteers. Pain medicine (Malden, Mass.) 19(10):1988–1996 (2018).
  ·  DOI: [10.1093/pm/pnx235](https://doi.org/10.1093/pm/pnx235)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 30.5 |  |
| V1 | V1 | 1.06 |  |
| Q2 | Q | 943 |  |
| V2 | V2 | 98.2 |  |
| Q3 | Q3 | 38.6 |  |
| V3 | V3 | 1260 |  |
| KBASE | equation variable | 0 |  |
| FB | Fab | 0.426 |  |
| KAB | kabs | 0.159 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of alagb: this record has none, the second reading 0.466; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| CL | `Q22` · CL | 30.5 |  | exact (1) | Priestley_2018_table_2:row0:col3 |
| V1 | `Q63` · V1 | 1.06 |  | exact (1) | Priestley_2018_table_2:row1:col3 |
| Q2 | `Q30` · Q | 943 |  | special_case (0.95) | Priestley_2018_table_2:row2:col3 |
| V2 | `Q64` · V2 | 98.2 |  | exact (1) | Priestley_2018_table_2:row3:col3 |
| Q3 | `Q308` · Q3 | 38.6 |  | exact (1) | Priestley_2018_table_2:row4:col3 |
| V3 | `Q77` · V3 | 1260 |  | exact (1) | Priestley_2018_table_2:row5:col3 |
| KBASE | `Q900` · equation variable | 0 |  | llm (0.6) | Priestley_2018_table_2:row9:col3 |
| FB | `Q40` · Fab | 0.426 |  | llm (0.6) | Priestley_2018_table_2:row11:col3 |
| KAB | `Q49` · kabs | 0.159 |  | exact (1) | Priestley_2018_table_2:row12:col2, Priestley_2018_table_2:row12:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'KTD0' — extend the ontology if this is a real PK parameter (source ['Priestley_2018_table_2:row6:col1', 'Priestley_2018_table_2:row6:col3'])
- dropped unlinked row (NIL): 'T50' — extend the ontology if this is a real PK parameter (source ['Priestley_2018_table_2:row7:col3'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Priestley_2018_table_2:row8:col3'])
- dropped unlinked row (NIL): 'KTDSCALE1' — extend the ontology if this is a real PK parameter (source ['Priestley_2018_table_2:row10:col3'])
- dropped unlinked row (NIL): 'ALAGB' — extend the ontology if this is a real PK parameter (source ['Priestley_2018_table_2:row13:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=buprenorphine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_1: grid unusable → re-running vision table extraction for Priestley_2018
- unparsed cell Priestley_2018_table_2:row2:col1 = 'Intercompartmental clearance 2'
- unparsed cell Priestley_2018_table_2:row3:col1 = 'Peripheral volume 1'
- unparsed cell Priestley_2018_table_2:row4:col1 = 'Intercompartmental clearance 3'
- unparsed cell Priestley_2018_table_2:row5:col1 = 'Peripheral volume 2'
- unparsed cell Priestley_2018_table_2:row10:col1 = 'TD KTD0 scale factor for patch type'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.706 (12/17 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alagb]` |  | 0.466 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fb].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss-120b` | `parameters[kab]` | 0.159 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kbase].parameter_id` | Q900 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[ktd0]` |  | 3520 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Priestley_2018_table_2:row0:col3'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Priestley_2018_table_2:row2:col3'] |
| C5_unit_missing_Q308 | fail | [length] ** 3 / [time] |  | ['Priestley_2018_table_2:row4:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Priestley_2018_table_2:row12:col2', 'Priestley_2018_table_2:row12:col3'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['Priestley_2018_table_2:row1:col3'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Priestley_2018_table_2:row3:col3'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 |  | ['Priestley_2018_table_2:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 30.5 | ['Priestley_2018_table_2:row0:col3'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Priestley2018_reference&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Priestley2018_reference%0APaper%3A%20Priestley_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_buprenorphine/Buprenorphine_Priestley2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 04:48 UTC</sub>
