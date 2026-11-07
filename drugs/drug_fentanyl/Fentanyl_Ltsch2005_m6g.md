<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;L\u00f6tsch_2005 \u00b7 m6g&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Ltsch2005_m6g`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; t1/2z and t1/2γ have no unit.

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Ltsch2005_m6g" status="needs_review" stale="false" population="unknown" measured-compound="fentanyl" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Lötsch J. Pharmacokinetic-pharmacodynamic modeling of opioids. Journal of pain and symptom management 29(5 Suppl):S90–S103 (2005).
  ·  DOI: [10.1016/j.jpainsymman.2005.01.012](https://doi.org/10.1016/j.jpainsymman.2005.01.012)

## Population and dosing

**Population:** m6g.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t₁/₂,ke0 | t1/2z | 2.8 |  |
| γ | t1/2γ | 2.6 |  |
| the total body clearance was | CL | 83.7 | ml/min/kg |
| V" (litre) | V | 269.7 | litre |
| clearance, volumes and absorption rate | kabs | 1.0 | h−1 |
| t1pp ranged from | tlag | 15.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; t1/2z and t1/2γ have no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Andersen_1986, Bower_1982, Eleveld_2026) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — morphine: t1/2z 2.8, t1/2γ 2.6; fentanyl: CL 83.7 ml/min/kg, V 270 litre, kabs 1 h−1, tlag 15 min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t₁/₂,ke0 | `Q57` · t1/2z | 2.8 |  |  |  |  | llm_confirmed (0.6) | Lötsch_2005_table_1:row26:col1, Lötsch_2005_table_1:row27:col1, Lötsch_2005_table_1:row28:col1, Lötsch_2005_table_1:row29:col1, Lötsch_2005_table_1:row30:col1 |
| γ | `Q89` · t1/2γ | 2.6 |  |  |  |  | llm (0.6) | Lötsch_2005_table_1:row27:col3, Lötsch_2005_table_1:row28:col3 |
| the total body clearance was | `Q22` · CL | 83.7 | ml/min/kg | 9.765e-05 | m3/s | L/h | review_gapfill (0.7) | Andersen_1986:review |
| V" (litre) | `Q61` · V | 269.7 | litre | 0.2697 | m3 | L | review_gapfill (0.7) | Bower_1982:review |
| clearance, volumes and absorption rate | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Eleveld_2026:review |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900 | s | h | review_gapfill (0.7) | Andersen_1986:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'm6g' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Ref.' — extend the ontology if this is a real PK parameter (source ['Lötsch_2005_table_1:row26:col5', 'Lötsch_2005_table_1:row27:col5', 'Lötsch_2005_table_1:row28:col5', 'Lötsch_2005_table_1:row29:col5', 'Lötsch_2005_table_1:row30:col5'])
- dropped PD-category row 'EC₅₀ [nmol/l]' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Lötsch_2005_table_1:row27:col2', 'Lötsch_2005_table_1:row28:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'm6g' subgroup of Lötsch_2005 (paper reports 5 populations: alfentanil, fentanyl, m6g, remifentanil, sufentanil)
- row roles: 12 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=other; 4/4 row label(s) assigned, 0 linked by role; re-tagged fentanyl→parent ×8, alfentanil→parent ×10, sufentanil→parent ×4, remifentanil→parent ×7, morphine→parent ×10, parent→morphine ×11
- gap-filled Q22 (CL) from Andersen_1986's review values (primary lacked it)
- gap-filled Q61 (V) from Bower_1982's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Eleveld_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Lötsch_2005_table_1: unparsed_numeric_cell
- transposed table Lötsch_2005_table_1: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Andersen_1986:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eleveld_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bower_1982:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Andersen_1986:review'] |
| C5_unit_missing_Q57 | fail | [time] |  | ['Lötsch_2005_table_1:row26:col1', 'Lötsch_2005_table_1:row27:col1', 'Lötsch_2005_table_1:row28:col1', 'Lötsch_2005_table_1:row29:col1', 'Lötsch_2005_table_1:row30:col1'] |
| C5_unit_missing_Q89 | fail | [time] |  | ['Lötsch_2005_table_1:row27:col3', 'Lötsch_2005_table_1:row28:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 83.7 | ['Andersen_1986:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 352 L/h | ['Andersen_1986:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 270 L | ['Bower_1982:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Ltsch2005_m6g&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Ltsch2005_m6g%0APaper%3A%20L%C3%B6tsch_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Ltsch2005_m6g%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 18:28 UTC</sub>
