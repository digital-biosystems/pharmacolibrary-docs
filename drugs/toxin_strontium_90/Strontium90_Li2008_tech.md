<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Strontium-90&quot;,&quot;href&quot;:&quot;drugs/toxin_strontium_90/&quot;},{&quot;label&quot;:&quot;Li_2008 \u00b7 tech&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Strontium90_Tolstykh2011_reference&quot;,&quot;label&quot;:&quot;Tolstykh_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_strontium_90/Strontium90_Tolstykh2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Strontium-90 — `Strontium90_Li2008_tech`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V has no unit.

<div class="pk-model-meta" hidden drug="Strontium-90" model-id="Strontium90_Li2008_tech" status="needs_review" stale="false" population="13 healthy German adult subjects" measured-compound="strontium" parameterization="mechanistic" topology="1C"></div>

## Citation
Li WB, Höllriegl V, Roth P, Oeh U. Influence of human biokinetics of strontium on internal ingestion dose of 90Sr and absorbed dose of 89Sr to organs and metastases. Radiation and environmental biophysics 47(2):225–239 (2008).
  ·  DOI: [10.1007/s00411-007-0154-8](https://doi.org/10.1007/s00411-007-0154-8)

## Population and dosing

**Population:** 13 healthy German adult subjects · condition healthy · age group adult · n = 13.

**Dosed compound ≠ measured compound:** dosed strontium-90 (modeled), strontium-84/strontium-86 (measured tracers), strontium-89 (dosed in patient context), measured strontium.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Remainder | equation variable | 5.8E-10 | Sv Bq–1 |
| strontium clearance half-life | t1/2z | 0.25 | h |
| Trabecular volume Nonexch Exch | V | 1406 | d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (equation variable and V), so that value has no SI equivalent. None of the extracted parameters is strontium 90's own; they describe strontium. Extracted — strontium: t1/2z 0.25 h, V 1.41e+03 d.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Remainder | `Q900` · equation variable | 5.8E-10 | Sv Bq–1 |  |  | (s·v)/bq | llm (0.6) | Li_2008_table_2:row22:col3 |
| strontium clearance half-life | `Q57` · t1/2z | 0.25 | h | 900 | s | h | toxin_unit_relink (0.85) | Li_2008:other_prose |
| Trabecular volume Nonexch Exch | `Q61` · V | 1406 | d |  |  | d | boundary (0.8) | Li_2008:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'tech' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Adrenals' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row0:col3'])
- dropped unlinked row (NIL): 'Bladder wall' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row1:col3'])
- dropped unlinked row (NIL): 'Bone surfaces' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row2:col3'])
- dropped unlinked row (NIL): 'Brain' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row3:col3'])
- dropped unlinked row (NIL): 'Breasts' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row4:col3'])
- dropped unlinked row (NIL): 'St wall' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row5:col3'])
- dropped unlinked row (NIL): 'SI wall' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row6:col3'])
- dropped unlinked row (NIL): 'ULI wall' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row7:col3'])
- dropped unlinked row (NIL): 'LLI wall' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row8:col3'])
- dropped unlinked row (NIL): 'Kidneys' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row9:col3'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row10:col3'])
- dropped unlinked row (NIL): 'Lungs' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row11:col3'])
- dropped unlinked row (NIL): 'Muscle' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row12:col3'])
- dropped unlinked row (NIL): 'Ovaries' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row13:col3'])
- dropped unlinked row (NIL): 'Pancreas' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row14:col3'])
- dropped unlinked row (NIL): 'Red marrow' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row15:col3'])
- dropped unlinked row (NIL): 'Skin' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row16:col3'])
- dropped unlinked row (NIL): 'Spleen' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row17:col3'])
- dropped unlinked row (NIL): 'Testes' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row18:col3'])
- dropped unlinked row (NIL): 'Thymus' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row19:col3'])
- dropped unlinked row (NIL): 'Thyroid' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row20:col3'])
- dropped unlinked row (NIL): 'Uterus' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row21:col3'])
- unit_dimension_unknown: 'Sv Bq–1' (equation variable)
- dropped unlinked row (NIL): 'Effective dose' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_2:row23:col3'])
- table mostly unlinked (23/24 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('strontium clearance half-life'=0.25) from results prose — parameter table was unreadable
- salvaged Q61 ('Trabecular volume Nonexch Exch'=1406) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=strontium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- population split: 'tech' subgroup of Li_2008 (paper reports 4 populations: gsf, icrp, senes, tech)
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures 'strontium', not strontium_90 — the review values are the parent's

**Extraction notes:**
- table Li_2008_table_1: missing_label
- table Li_2008_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (4 record(s))
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q61 | fail | [length] ** 3 | d | ['Li_2008:other_prose'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstrontium_90%5D%20Strontium90_Li2008_tech&body=Drug%3A%20strontium_90%0ARecord%3A%20Strontium90_Li2008_tech%0APaper%3A%20Li_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_strontium_90/Strontium90_Li2008_tech%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 01:57 UTC</sub>
