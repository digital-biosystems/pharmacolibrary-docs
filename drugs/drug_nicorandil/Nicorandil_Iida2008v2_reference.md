<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;nicorandil&quot;,&quot;href&quot;:&quot;drugs/drug_nicorandil/&quot;},{&quot;label&quot;:&quot;Iida_2008_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicorandil — `Nicorandil_Iida2008v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-06 10:59 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="nicorandil" model-id="Nicorandil_Iida2008v2_reference" status="needs_review" stale="true" population="healthy subjects and acute heart failure patients" measured-compound="nicorandil" parameterization="apparent" topology="1C"></div>

## Citation
Iida S, Kinoshita H, Holford NH. Population pharmacokinetic and pharmacodynamic modelling of the effects of nicorandil in the treatment of acute heart failure. British journal of clinical pharmacology 66(3):352–365 (2008).
  ·  DOI: [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x)

## Population and dosing

**Population:** healthy subjects and acute heart failure patients · condition acute heart failure · age group adult.

**Dosing:** 4, 6, 8, 12, 18, 24, 200 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| R78 | V3/F | 0.257 | L |
| R89 | t1/2γ | 0.957 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — nicorandil: V3/F 0.257, t1/2γ 0.957.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 14: this record has none, the second reading 6.6; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| R78 | `Q78` · V3/F | 0.257 | L | 0.000257 | m3 | L | llm (0.6) | tab_2:row11:col7, tab_2:row11:col8, tab_2:row11:col10, tab_2:row11:col11 |
| R89 | `Q89` · t1/2γ | 0.957 | h | 3445 | s | h | llm (0.6) | tab_2:row12:col7, tab_2:row12:col8, tab_2:row12:col10, tab_2:row12:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'sig' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'PPV_S0' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col5', 'tab_2:row2:col6', 'tab_2:row2:col8', 'tab_2:row2:col9'])
- dropped unlinked row (NIL): 'PPV_Sss' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col5', 'tab_2:row3:col6', 'tab_2:row3:col8', 'tab_2:row3:col9'])
- dropped PD-category row 'PPV_EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row4:col5', 'tab_2:row4:col6', 'tab_2:row4:col8', 'tab_2:row4:col9'])
- dropped unlinked row (NIL): 'R12' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col7', 'tab_2:row9:col8', 'tab_2:row9:col10', 'tab_2:row9:col11'])
- dropped unlinked row (NIL): 'R23' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col7', 'tab_2:row10:col8', 'tab_2:row10:col10', 'tab_2:row10:col11'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row0:col5', 'Iida_2008_2_table_2:row0:col6'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row1:col5', 'Iida_2008_2_table_2:row1:col6'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row2:col5', 'Iida_2008_2_table_2:row2:col6'])
- dropped unlinked row (NIL): '13' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row3:col5', 'Iida_2008_2_table_2:row3:col6'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row4:col5', 'Iida_2008_2_table_2:row4:col6'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row5:col5', 'Iida_2008_2_table_2:row5:col6'])
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row6:col5', 'Iida_2008_2_table_2:row6:col6'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['Iida_2008_2_table_2:row7:col5'])
- implicit units: 'R78' → L (from the popPK convention: 'The parameter is V3/F (volume of distribution of the second peripheral compartment). In population PK, volumes of distri')
- implicit units: 'R89' → h (from the popPK convention: 'The parameter is t1/2γ (half-life of the terminal elimination phase). In population PK, half-lives are conventionally ex')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nicorandil
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = 'Population parameter variability in S0'
- unparsed cell tab_2:row4:col1 = 'Population parameter variability in EC50'
- unparsed cell tab_2:row6:col1 = 'Between subject variability in V1'
- unparsed cell tab_2:row9:col2 = 'Correlation of S0 and Sss'
- unparsed cell tab_2:row10:col2 = 'Correlation of Sss and EC50'
- unparsed cell tab_2:row11:col2 = 'Correlation of CL and V1'
- unparsed cell tab_2:row12:col2 = 'Correlation of V1 and Q'
- unparsed cell Iida_2008_2_table_2:row0:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_2_table_2:row1:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_2_table_2:row2:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_2_table_2:row4:col3 = 'Covariance of S0, alpha, Emax, EC50'
- unparsed cell Iida_2008_2_table_2:row5:col3 = 'Covariance of S0, alpha, Emax, EC50'
- unparsed cell Iida_2008_2_table_2:row7:col3 = 'Covariance of S0, Emax, EC50'
- companion parameter table 2 transcribed (15 record(s))

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[14]` |  | 6.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ppv_sss]` |  | 0.320 | only_one_extracted |
| `gpt-oss-120b` | `parameters[r12]` |  | 0.864 | only_one_extracted |
| `gpt-oss-120b` | `parameters[r23]` |  | 0.054 | only_one_extracted |
| `gpt-oss-120b` | `parameters[r89]` | 0.957 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['tab_2:row11:col7', 'tab_2:row11:col8', 'tab_2:row11:col10', 'tab_2:row11:col11'] |
| C5_dimension_Q89 | pass | [time] |  | ['tab_2:row12:col7', 'tab_2:row12:col8', 'tab_2:row12:col10', 'tab_2:row12:col11'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnicorandil%5D%20Nicorandil_Iida2008v2_reference&body=Drug%3A%20nicorandil%0ARecord%3A%20Nicorandil_Iida2008v2_reference%0APaper%3A%20Iida_2008_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nicorandil/Nicorandil_Iida2008v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 10:59 UTC</sub>
