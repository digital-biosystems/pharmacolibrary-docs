<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Lovastatin&quot;,&quot;href&quot;:&quot;drugs/toxin_lovastatin/&quot;},{&quot;label&quot;:&quot;Peng_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lovastatin_Guan2015_reference&quot;,&quot;label&quot;:&quot;Guan_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lovastatin/Lovastatin_Guan2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lovastatin_Kivist1998_reference&quot;,&quot;label&quot;:&quot;Kivist\u00f6_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lovastatin/Lovastatin_Kivist1998_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lovastatin — `Lovastatin_Peng2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="Lovastatin" model-id="Lovastatin_Peng2021_reference" status="needs_review" stale="false" population="rats" measured-compound="Lovastatin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Peng WY, Huang AC, Ting CT, Tsai TH. Preclinical Pharmacokinetics and Pharmacodynamics of Coptidis Preparation in Combination with Lovastatin in High-Fat Diet-Induced Hyperlipidemic Rats. ACS omega 6(24):15804–15815 (2021).
  ·  DOI: [10.1021/acsomega.1c01201](https://doi.org/10.1021/acsomega.1c01201)

## Population and dosing

**Population:** rats · condition high-fat diet-induced hyperlipidemia · age group adult.

**Dosing:** 700 mg, oral, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | equation variable | 0.99 | ng/mL |
| 10 | Cmax | 10.40 | ng/mL |
| CL | CL | 7.2 | (L/h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Guan_2015) cannot stand in for this paper's evidence. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — lovastatin: Cmax 10.4 ng/mL, CL 7.2 (L/h).

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 0.99 | ng/mL |  |  | ng/ml | llm (0.6) | Peng_2021_table_S1:row1:col1, Peng_2021_table_S1:row1:col2, Peng_2021_table_S1:row1:col3 |
| 10 | `Q32` · Cmax | 10.40 | ng/mL | 1.04e-05 | kg/m3 | ng/ml | llm (0.6) | Peng_2021_table_S1:row3:col1, Peng_2021_table_S1:row3:col2, Peng_2021_table_S1:row3:col3, Peng_2021_table_S1:row7:col1, Peng_2021_table_S1:row7:col2, Peng_2021_table_S1:row7:col3 |
| CL | `Q22` · CL | 7.2 | (L/h) | 2e-06 | m3/s | L/h | review_gapfill (0.7) | Guan_2015:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'accuracy (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['Peng_2021_table_S1:row2:col1', 'Peng_2021_table_S1:row2:col2', 'Peng_2021_table_S1:row2:col3'])
- dropped duplicate Q32 ('50', value '50.97') — already have one for this compound
- dropped unlinked row (NIL): '100' — extend the ontology if this is a real PK parameter (source ['Peng_2021_table_S1:row5:col1', 'Peng_2021_table_S1:row5:col2', 'Peng_2021_table_S1:row5:col3', 'Peng_2021_table_S1:row9:col1', 'Peng_2021_table_S1:row9:col2', 'Peng_2021_table_S1:row9:col3'])
- dropped duplicate Q32 ('500', value '485.64') — already have one for this compound
- dropped unlinked row (NIL): '1000' — extend the ontology if this is a real PK parameter (source ['Peng_2021_table_S1:row11:col1', 'Peng_2021_table_S1:row11:col2', 'Peng_2021_table_S1:row11:col3'])
- dropped value-less row: '* indicates a significant difference when compared with the lovastatin group (*p &lt; 0.05)' (captured trailing unit '*p &lt; 0.05' for child rows)
- dropped value-less row: 'All data are expressed as the mean ± SD'
- dropped value-less row: 'Area under the concentration curve (AUC)' (captured trailing unit 'AUC' for child rows)
- dropped value-less row: 'maximum concentration (Cmax)' (captured trailing unit 'Cmax' for child rows)
- dropped value-less row: 'elimination half-life (t1/2)' (captured trailing unit 't1/2' for child rows)
- dropped value-less row: 'clearance (CL)' (captured trailing unit 'CL' for child rows)
- dropped value-less row: 'volume of distribution (Vd)' (captured trailing unit 'Vd' for child rows)
- dropped value-less row: 'mean residence time (MRT)' (captured trailing unit 'MRT' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Lovastatin
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 15/15 row label(s) assigned, 0 linked by role
- molar mass: none of 1 PubChem candidate(s) is 'Lovastatin acid' (LLM) — left in mass units
- molar mass: none found for 'Lovastatin acid' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Guan_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 35 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Guan_2015:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Peng_2021_table_S1:row3:col1', 'Peng_2021_table_S1:row3:col2', 'Peng_2021_table_S1:row3:col3', 'Peng_2021_table_S1:row7:col1', 'Peng_2021_table_S1:row7:col2', 'Peng_2021_table_S1:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.2 | ['Guan_2015:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.2 L/h | ['Guan_2015:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blovastatin%5D%20Lovastatin_Peng2021_reference&body=Drug%3A%20lovastatin%0ARecord%3A%20Lovastatin_Peng2021_reference%0APaper%3A%20Peng_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lovastatin/Lovastatin_Peng2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 12:30 UTC</sub>
