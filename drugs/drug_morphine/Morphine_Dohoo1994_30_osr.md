<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Dohoo_1994 \u00b7 30_osr&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_reference&quot;,&quot;label&quot;:&quot;Andersen_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Romberg2004_reference&quot;,&quot;label&quot;:&quot;Romberg_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Romberg2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Venkatasubramanian2014_reference&quot;,&quot;label&quot;:&quot;Venkatasubramanian_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Dohoo1994_30_osr`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Dohoo1994_30_osr" status="needs_review" stale="false" population="dogs" measured-compound="morphine" parameterization="mechanistic" topology="1C"></div>

## Citation
Dohoo S, Tasker RA, Donald A. Pharmacokinetics of parenteral and oral sustained-release morphine sulphate in dogs. Journal of veterinary pharmacology and therapeutics 17(6):426–433 (1994).
  ·  DOI: [10.1111/j.1365-2885.1994.tb00273.x](https://doi.org/10.1111/j.1365-2885.1994.tb00273.x)

## Population and dosing

**Population:** dogs · age group adult.

**Dosing:** 0.5, 0.8, 15, 30 mg/kg, mg, iv, im, oral, single.

**Dosed compound ≠ measured compound:** dosed morphine sulphate, measured morphine.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC | AUC | 9290 | ng min/ml |
| Cmax | Cmax | 51.2 | ng/ml |
| tmax | tmax | 58.99 | min |
| t1/2 | t1/2z | 622.0 | min |
| F | Fab | 19.8 |  |
| propofol clearance capacity in a 38 postmenstrual weeks newborn at birth | CL | 0.029 | l.min−1 |
| distribution volume | V | 0.6 | l.kg-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Allegaert_2014_2) cannot stand in for this paper's evidence. Extracted — morphine: AUC 9.29e+03 ng min/ml, Cmax 51.2 ng/ml, tmax 59 min, t1/2z 622 min, Fab 19.8, CL 0.029 l.min−1, V 0.6 l.kg-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has none, the second reading 452. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 9290 | ng min/ml | 0.5574 | kg*s/m3 | (min·ng)/ml | exact (1) | Dohoo_1994_table_2:row0:col6 |
| Cmax | `Q32` · Cmax | 51.2 | ng/ml | 5.12e-05 | kg/m3 | ng/ml | exact (1) | Dohoo_1994_table_2:row1:col6 |
| tmax | `Q56` · tmax | 58.99 | min | 3539 | s | min | exact (1) | Dohoo_1994_table_2:row2:col6 |
| t1/2 | `Q57` · t1/2z | 622.0 | min | 3.732e+04 | s | h | half_life_rule (0.95) | Dohoo_1994_table_2:row4:col6 |
| F | `Q40` · Fab | 19.8 |  |  |  |  | exact (1) | Dohoo_1994_table_2:row6:col6 |
| propofol clearance capacity in a 38 postmenstrual weeks newborn at birth | `Q22` · CL | 0.029 | l.min−1 | 4.833e-07 | m3/s | L/h | review_gapfill (0.7) | Allegaert_2014_2:review |
| distribution volume | `Q61` · V | 0.6 | l.kg-1 | 0.042 | m3 | L | review_gapfill (0.7) | Allegaert_2014_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 't1/2' → min (from the paper text: "Table 2 footnote states: 't1/2, half-life of elimination (min)'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: '30 osr' subgroup of Dohoo_1994 (paper reports 6 populations: 0.5 i.m., 0.5 i.v., 0.8 i.m., 0.8 i.v., 15 osr, 30 osr)
- gap-filled Q22 (CL) from Allegaert_2014_2's review values (primary lacked it)
- gap-filled Q61 (V) from Allegaert_2014_2's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Dohoo_1994_table_2: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` |  | 452 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Allegaert_2014_2:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Dohoo_1994_table_2:row1:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['Dohoo_1994_table_2:row2:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['Dohoo_1994_table_2:row4:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Allegaert_2014_2:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Dohoo_1994_table_2:row0:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.029 | ['Allegaert_2014_2:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.74 L/h | ['Allegaert_2014_2:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 42 L | ['Allegaert_2014_2:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Dohoo1994_30_osr&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Dohoo1994_30_osr%0APaper%3A%20Dohoo_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Dohoo1994_30_osr%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 07:12 UTC</sub>
