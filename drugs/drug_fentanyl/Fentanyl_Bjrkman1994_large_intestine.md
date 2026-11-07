<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Bj\u00f6rkman_1994 \u00b7 large_intestine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Bjrkman1994_large_intestine`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> V2, CL, V3 and V1 have no unit.

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Bjrkman1994_large_intestine" status="needs_review" stale="false" population="rats (scaled to humans)" measured-compound="fentanyl" parameterization="mechanistic" topology="2C"></div>

## Citation
Björkman S, Wada DR, Stanski DR, Ebling WF. Comparative physiological pharmacokinetics of fentanyl and alfentanil in rats and humans based on parametric single-tissue models. Journal of pharmacokinetics and biopharmaceutics 22(5):381–410 (1994).
  ·  DOI: [10.1007/BF02353862](https://doi.org/10.1007/BF02353862)

## Population and dosing

**Population:** rats (scaled to humans) · condition healthy · age group adult.

**Dosing:** 30, 60 µg/kg per min, iv, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fentanyl V₂ ml/g | V2 | 1.4 |  |
| Fentanyl CL₁₂ ml/min per g | CL | 0.28 |  |
| Fentanyl V₃ ml/g | V3 | 1.74 |  |
| Alfentanil V₁ ml/g | V1 | 0.30 |  |
| Alfentanil Q 3 | Q | 1.97 | ml/min |
| clearance, volumes and absorption rate | kabs | 1.0 | h−1 |
| t1pp ranged from | tlag | 15.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V2, CL, V3 and V1 have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — fentanyl: V2 1.4, CL 0.28, V3 1.74, V1 0.3, Q 1.97 ml/min, kabs 1 h−1, tlag 15 min.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Fentanyl V₂ ml/g | `Q64` · V2 | 1.4 |  |  |  |  | llm_confirmed (0.6) | Björkman_1994_table_2:row7:col2 |
| Fentanyl CL₁₂ ml/min per g | `Q22` · CL | 0.28 |  |  |  |  | llm (0.6) | Björkman_1994_table_2:row7:col3 |
| Fentanyl V₃ ml/g | `Q77` · V3 | 1.74 |  |  |  |  | llm_confirmed (0.6) | Björkman_1994_table_2:row7:col4 |
| Alfentanil V₁ ml/g | `Q63` · V1 | 0.30 |  |  |  |  | llm_confirmed (0.6) | Björkman_1994_table_2:row7:col6 |
| Alfentanil Q 3 | `Q30` · Q | 1.97 | ml/min | 3.283e-08 | m3/s | L/h | review_gapfill (0.7) | Groenendaal_2008:review |
| clearance, volumes and absorption rate | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Eleveld_2026:review |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900 | s | h | review_gapfill (0.7) | Andersen_1986:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('Fentanyl CL₂₃ ml/min per g', value '0.041') — already have one for this compound
- dropped duplicate Q64 ('Alfentanil V₂ ml/g', value '0.04') — already have one for this compound
- dropped duplicate Q22 ('Alfentanil CL₁₂ ml/min per g', value '0.08') — already have one for this compound
- dropped duplicate Q22 ('Alfentanil CL₂₃ ml/min per g', value '0.0007') — already have one for this compound
- implicit units: 'Fentanyl V₂ ml/g' — the LLM proposed 'ml/g', whose dimension does not fit Q64; left unset
- implicit units: 'Fentanyl CL₁₂ ml/min per g' — the LLM proposed 'ml/min per g', whose dimension does not fit Q22; left unset
- implicit units: 'Fentanyl V₃ ml/g' — the LLM proposed 'ml/g', whose dimension does not fit Q77; left unset
- implicit units: 'Alfentanil V₁ ml/g' — the LLM proposed 'ml/g', whose dimension does not fit Q63; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'large intestine' subgroup of Björkman_1994 (paper reports 11 populations: fat, kidney, large intestine, liver, muscle, pancreas, skin, small intestine, spleen, stomach, testes)
- gap-filled Q30 (Q) from Groenendaal_2008's review values (primary lacked it)
- gap-filled Q49 (kabs) from Eleveld_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Björkman_1994_table_2: units_need_context
- transposed table Björkman_1994_table_2: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Groenendaal_2008:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eleveld_2026:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Andersen_1986:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Björkman_1994_table_2:row7:col3'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['Björkman_1994_table_2:row7:col6'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Björkman_1994_table_2:row7:col2'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 |  | ['Björkman_1994_table_2:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.28 | ['Björkman_1994_table_2:row7:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Bjrkman1994_large_intestine&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Bjrkman1994_large_intestine%0APaper%3A%20Bj%C3%B6rkman_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Bjrkman1994_large_intestine%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 18:27 UTC</sub>
