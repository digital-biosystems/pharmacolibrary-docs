<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Serine&quot;,&quot;href&quot;:&quot;drugs/toxin_l_serine/&quot;},{&quot;label&quot;:&quot;Bosley_2021 \u00b7 population&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;LSerine_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_l_serine/LSerine_Han2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LSerine_Schouten2021_reference&quot;,&quot;label&quot;:&quot;Schouten_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_l_serine/LSerine_Schouten2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# L-Serine — `LSerine_Bosley2021_population`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="L-Serine" model-id="LSerine_Bosley2021_population" status="needs_review" stale="false" population="healthy humans" measured-compound="L-Serine" parameterization="mechanistic" topology="1C"></div>

## Citation
Bosley JR, Björnson E, Zhang C, Turkez H, Nielsen J, Uhlen M et al. Informing Pharmacokinetic Models With Physiological Data: Oral Population Modeling of L-Serine in Humans. Frontiers in pharmacology 12:643179 (2021).
  ·  DOI: [10.3389/fphar.2021.643179](https://doi.org/10.3389/fphar.2021.643179)

## Population and dosing

**Population:** healthy humans · condition healthy · age group adult · n = 10.

**Dosing:** 20000 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Kabs | kabs | 2.88 | 1/h |
| F | Fab | 0.00452 |  |
| CL | CL | 0.446 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — l serine: kabs 2.88 1/h, Fab 0.00452, CL 0.446 L/h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Kabs | `Q49` · kabs | 2.88 | 1/h | 0.0008 | 1/s | 1/h | exact (1) | Bosley_2021_table_5:row0:col1 |
| F | `Q40` · Fab | 0.00452 |  |  |  |  | exact (1) | Bosley_2021_table_3:row1:col2 |
| CL | `Q22` · CL | 0.446 | L/h | 1.239e-07 | m3/s | L/h | exact (1) | Bosley_2021_table_3:row1:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Volume | Q61 | exact |

## Departures & gaps

**Interpretation flags:**
- transposed table Bosley_2021_table_4: rows are variants (Mean, Std dev, Minimum, Maximum, Units), the parameters are the column headers (Kabs) — read one record per variant
- transposed table Bosley_2021_table_5: rows are variants (Population, Pop—SEM, Pop +SEM, Minimum, Maximum, Units), the parameters are the column headers (Kabs) — read one record per variant
- column 'source' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'Baseline concentration in blood' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row2:col2'])
- dropped unlinked row (NIL): 'Kurt Schreier and Plückthun. (1950)' — extend the ontology if this is a real PK parameter (source ['T1:row3:col1'])
- dropped unlinked row (NIL): 'Frame. (1958)' — extend the ontology if this is a real PK parameter (source ['T1:row4:col1'])
- dropped unlinked row (NIL): 'Neis et al. (2017)' — extend the ontology if this is a real PK parameter (source ['T1:row5:col1', 'T1:row6:col1'])
- dropped unlinked row (NIL): 'Wilcox et al. (1985)' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1'])
- dropped unlinked row (NIL): 'Production' — extend the ontology if this is a real PK parameter (source ['T1:row9:col2'])
- dropped unlinked row (NIL): 'Kalhan and Hanson. (2012)' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1'])
- dropped duplicate Q49 ('Ka', value None) — already have one for this compound
- dropped PD-category row 'Baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Bosley_2021_table_3:row1:col4', 'Bosley_2021_table_3:row2:col4'])
- dropped duplicate Q61 ('V', value '0.936') — already have one for this compound
- implicit units: 'Kabs' → 1/h (from the popPK convention: "The paper identifies kabs as a 'rate constant for absorption'. In population PK, first-order absorption rate constants a")
- implicit units: 'CL' → L/h (from the popPK convention: "The paper identifies CL as 'serine clearance'. In population PK, clearances are conventionally expressed in L/h. The tex")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=L-Serine
- estimate-method split: 'Population' is one of 8 estimates of Bosley_2021's substance matrix (Mean, Std dev, Minimum, Maximum, Units, Population, Pop—SEM, Pop +SEM); same population, different estimation method
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T1: ragged_grid
- table T1: unparsed_numeric_cell
- table Bosley_2021_table_3: units_need_context
- transposed table Bosley_2021_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (7 record(s))
- companion parameter table 4 transcribed (19 record(s))
- companion parameter table 5 transcribed (23 record(s))
- LLM selected parameter table(s) 1, 3, 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bosley_2021_table_3:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bosley_2021_table_5:row0:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.446 | ['Bosley_2021_table_3:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.446 L/h | ['Bosley_2021_table_3:row1:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_serine%5D%20LSerine_Bosley2021_population&body=Drug%3A%20l_serine%0ARecord%3A%20LSerine_Bosley2021_population%0APaper%3A%20Bosley_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_serine/LSerine_Bosley2021_population%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 12:48 UTC</sub>
