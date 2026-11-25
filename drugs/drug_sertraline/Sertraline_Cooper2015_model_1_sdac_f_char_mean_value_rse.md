<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;sertraline&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/&quot;},{&quot;label&quot;:&quot;Cooper_2015 \u00b7 model_1_sdac_f_char_mean_value_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sertraline_Poweleit2023_reference&quot;,&quot;label&quot;:&quot;Poweleit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/Sertraline_Poweleit2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sertraline_Xia2025_reference&quot;,&quot;label&quot;:&quot;Xia_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/Sertraline_Xia2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sertraline_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/Sertraline_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kreilgaard_2008_5_HTP_score&quot;,&quot;label&quot;:&quot;Kreilgaard_2008 \u00b7 5-HTP score&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/pd_Kreilgaard_2008_5_HTP_score.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kreilgaard_2008_SERT_occ&quot;,&quot;label&quot;:&quot;Kreilgaard_2008 \u00b7 SERT occ&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/pd_Kreilgaard_2008_SERT_occ.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sertraline — `Sertraline_Cooper2015_model_1_sdac_f_char_mean_value_rse`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="sertraline" model-id="Sertraline_Cooper2015_model_1_sdac_f_char_mean_value_rse" status="needs_review" stale="false" population="adults with sertraline overdose" measured-compound="sertraline" parameterization="mechanistic" topology="1C"></div>

## Citation
Cooper JM, Duffull SB, Saiao AS, Isbister GK. The pharmacokinetics of sertraline in overdose and the effect of activated charcoal. British journal of clinical pharmacology 79(2):307–315 (2015).
  ·  DOI: [10.1111/bcp.12500](https://doi.org/10.1111/bcp.12500)

## Population and dosing

**Population:** adults with sertraline overdose · condition sertraline overdose · age group adult · n = 28.

**Dosing:** 250, 1550, 5000 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| t_s,lag (h) | tlag | 1 | h |  |  |
| K_a (h^-1) | kabs | 1.02 | h^-1 | 95 | 1.63 (104% RSE) |
| V (l) | V | 4730 | l | 14 | 0.146 (80% RSE) |
| CL (l h^-1) | CL | 144 | l h^-1 | 19 | 0.109 (134% RSE) |
| θ_F | θ_F | 1.0 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.846). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — sertraline: tlag 1 h, kabs 1.02 h^-1, V 4.73e+03 l, CL 144 l h^-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f_char: this record has none, the second reading 0.731; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t_s,lag (h) | `Q83` · tlag | 1 | h | 3600 | s | h |  | llm (0.6) | Cooper_2015_table_2:row1:col2 |  |
| K_a (h^-1) | `Q49` · kabs | 1.02 | h^-1 | 0.0002833 | 1/s | 1/h | 95 | exact (1) | Cooper_2015_table_2:row2:col2 | 1.63 (104% RSE) |
| V (l) | `Q61` · V | 4730 | l | 4.73 | m3 | l | 14 | exact (1) | Cooper_2015_table_2:row4:col2 | 0.146 (80% RSE) |
| CL (l h^-1) | `Q22` · CL | 144 | l h^-1 | 4e-05 | m3/s | l/h | 19 | exact (1) | Cooper_2015_table_2:row5:col2 | 0.109 (134% RSE) |
| θ_F | `Q900` · θ_F | 1.0 |  |  |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 't_s,lag' routed out of structural estimates ('Between subject variance (ω)')
- table section iiv: 'K_a' routed out of structural estimates ('Between subject variance (ω)')
- table section iiv: 'F' routed out of structural estimates ('Between subject variance (ω)')
- table section iiv: 'V' routed out of structural estimates ('Between subject variance (ω)')
- table section iiv: 'CL' routed out of structural estimates ('Between subject variance (ω)')
- table section iiv: 'Coefficient of variation for proportional residual error (CV%)' routed out of structural estimates ('Between subject variance (ω)')
- table section iiv: 'Objective function (-2 log-likelihood value)' routed out of structural estimates ('Between subject variance (ω)')
- column 'model 1 – sdac f_char mean value (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'f_char' — extend the ontology if this is a real PK parameter (source ['Cooper_2015_table_2:row6:col2'])
- kept covariate coefficient θ_F=1 (covariate F) — not an ontology parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V (l)); Q22 (CL (l h^-1))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sertraline
- population split: 'model 1 – sdac f_char mean value (rse%)' subgroup of Cooper_2015 (paper reports 3 populations: base model mean value (rse%), model 1 – sdac f_char mean value (rse%), model 2 – final sdac f_cl-char mean value (rse%))

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f_char]` |  | 0.731 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ_f]` | 1.0 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Cooper_2015_table_2:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Cooper_2015_table_2:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cooper_2015_table_2:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cooper_2015_table_2:row1:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 144 | ['Cooper_2015_table_2:row5:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 144 L/h | ['Cooper_2015_table_2:row5:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.73e+03 L | ['Cooper_2015_table_2:row4:col2'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsertraline%5D%20Sertraline_Cooper2015_model_1_sdac_f_char_mean_value_rse&body=Drug%3A%20sertraline%0ARecord%3A%20Sertraline_Cooper2015_model_1_sdac_f_char_mean_value_rse%0APaper%3A%20Cooper_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sertraline/Sertraline_Cooper2015_model_1_sdac_f_char_mean_value_rse%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:25 UTC</sub>
