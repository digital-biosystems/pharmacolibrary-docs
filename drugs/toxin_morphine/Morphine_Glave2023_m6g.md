<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Morphine&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/&quot;},{&quot;label&quot;:&quot;G\u00fclave_2023 \u00b7 m6g&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Garrett1979v2_reference&quot;,&quot;label&quot;:&quot;Garrett_1979_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Garrett1979v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Glave2023_m3g&quot;,&quot;label&quot;:&quot;G\u00fclave_2023_m3g&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Glave2023_m3g.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Got1994_reference&quot;,&quot;label&quot;:&quot;Got_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Got1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_iv_morphine_2_mg_2_h&quot;,&quot;label&quot;:&quot;Morse_2022_iv_morphine_2_mg_2_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_iv_morphine_2_mg_2_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_po_morphine_10_mg_4_h&quot;,&quot;label&quot;:&quot;Morse_2022_po_morphine_10_mg_4_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Verscheijden2021_morphine&quot;,&quot;label&quot;:&quot;Verscheijden_2021_morphine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Verscheijden2021_morphine.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Yalcin2022_mulla_et_al_37_uk&quot;,&quot;label&quot;:&quot;Yalcin_2022_mulla_et_al_37_uk&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Yalcin2022_mulla_et_al_37_uk.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Morphine — `Morphine_Glave2023_m6g`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cL has no unit.

<div class="pk-model-meta" hidden drug="Morphine" model-id="Morphine_Glave2023_m6g" status="needs_review" stale="false" population="virtual human PBPK simulation population" measured-compound="morphine" parameterization="mechanistic" topology="1C"></div>

## Citation
Gülave B, Budda D, Saleh MAA, van Hasselt JGC, de Lange ECM. Does nonlinear blood-brain barrier transport matter for (lower) morphine dosing strategies?. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 187:106482 (2023).
  ·  DOI: [10.1016/j.ejps.2023.106482](https://doi.org/10.1016/j.ejps.2023.106482)

## Population and dosing

**Population:** virtual human PBPK simulation population · age group adult.

**Dosing:** 0.25, 150 mg, iv, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| plasma PK (Oosten et al., 2017) | CL | 78.5 | Oosten et al., 2017 |
| Vd threshold | V | 5.0 | L/kg |
| Ka (hour−1) | kabs | 0.889 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cL has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Hernández-Gago_2026, Tang_2025) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — morphine: CL 78.5 Oosten et al., 2017, V 5 L/kg, kabs 0.889 hour−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of drug properties: this record has none, the second reading 461.46; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| plasma PK (Oosten et al., 2017) | `Q22` · CL | 78.5 | Oosten et al., 2017 |  |  | al·et·oosten | llm (0.6) | Gülave_2023_table_1:row0:col4, Gülave_2023_table_1:row1:col4, Gülave_2023_table_1:row4:col4, Gülave_2023_table_1:row5:col4, Gülave_2023_table_1:row6:col4, Gülave_2023_table_1:row7:col4 |
| Vd threshold | `Q61` · V | 5.0 | L/kg | 0.35 | m3 | L | review_gapfill (0.7) | Hernández-Gago_2026:review |
| Ka (hour−1) | `Q49` · kabs | 0.889 | hour−1 | 0.0002469 | 1/s | 1/h | review_gapfill (0.7) | Tang_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Oosten et al., 2017' (CL)
- dropped unlinked row (NIL): 'drug properties (Wishart et al., 2017)' — extend the ontology if this is a real PK parameter (source ['Gülave_2023_table_1:row8:col4', 'Gülave_2023_table_1:row9:col4', 'Gülave_2023_table_1:row10:col4', 'Gülave_2023_table_1:row11:col4', 'Gülave_2023_table_1:row13:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site presystemic: 'Fraction unbound plasma 0.65 --fAFBBB 0.21815 1 1 Kp,uu,BBB 5.4902*Css,u,plasma -0.552 0.1 c 0.25 d a fraction of metabo')
- status held at "Needs review" — not promoted
- population split: 'm6g' subgroup of Gülave_2023 (paper reports 3 populations: m3g, m6g, morphine)
- row roles (LLM): model_class=pbpk; 0/2 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'morphine-3-glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'morphine-6-glucuronide' — its concentrations stay mass-only
- gap-filled Q61 (V) from Hernández-Gago_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Tang_2025's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- table Gülave_2023_table_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[drug properties]` |  | 461.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma pk]` | 78.5 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tang_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hernández-Gago_2026:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | Oosten et al., 2017 | ['Gülave_2023_table_1:row0:col4', 'Gülave_2023_table_1:row1:col4', 'Gülave_2023_table_1:row4:col4', 'Gülave_2023_table_1:row5:col4', 'Gülave_2023_table_1:row6:col4', 'Gülave_2023_table_1:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 78.5 | ['Gülave_2023_table_1:row0:col4', 'Gülave_2023_table_1:row1:col4', 'Gülave_2023_table_1:row4:col4', 'Gülave_2023_table_1:row5:col4', 'Gülave_2023_table_1:row6:col4', 'Gülave_2023_table_1:row7:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 350 L | ['Hernández-Gago_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Glave2023_m6g&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Glave2023_m6g%0APaper%3A%20G%C3%BClave_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_morphine/Morphine_Glave2023_m6g%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:59 UTC</sub>
