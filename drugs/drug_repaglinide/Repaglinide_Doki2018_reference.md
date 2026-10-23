<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;repaglinide&quot;,&quot;href&quot;:&quot;drugs/drug_repaglinide/&quot;},{&quot;label&quot;:&quot;Doki_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# repaglinide — `Repaglinide_Doki2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="repaglinide" model-id="Repaglinide_Doki2018_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="repaglinide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Doki K, Darwich AS, Achour B, Tornio A, Backman JT, Rostami-Hodjegan A. Implications of intercorrelation between hepatic CYP3A4-CYP2C8 enzymes for the evaluation of drug-drug interactions: a case study with repaglinide. British journal of clinical pharmacology 84(5):972–986 (2018).
  ·  DOI: [10.1111/bcp.13533](https://doi.org/10.1111/bcp.13533)

## Population and dosing

**Population:** healthy volunteers · age group adult.

**Dosing:** 0.25 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 7 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 452.6 | g/mol |
| Fraction unbound in plasma | fu | 0.023 |  |
| Fraction absorbed | Fab | 0.98 |  |
| Absorption rate constant | kabs | 1.6 | 1/h |
| Vss (L/kg) | Vss | 0.24 | L/kg |
| Kp scalar | Kp | 3.3 |  |
| cyp3a5_em_frequency | cyp3a5_em_frequency | 0.17 |  |
| cyp2c8_cv | cyp2c8_cv | 81 |  |
| cyp3a4_cv | cyp3a4_cv | 60 |  |
| cyp3a5_cv | cyp3a5_cv | 60 |  |
| theta_q1_cyp2c8 | theta_q1_cyp2c8 | 2.3 |  |
| theta_q66_cyp2c8 | theta_q66_cyp2c8 | 300.8 |  |
| theta_q1_cyp3a4 | theta_q1_cyp3a4 | 13.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (MW), so that value has no SI equivalent. Extracted — repaglinide: MW 453 g/mol, fu 0.023, Fab 0.98, kabs 1.6 1/h, Vss 0.24 L/kg, Kp 3.3.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 452.6 | g/mol |  |  | g/(m·ol) | exact (1) | tab_0:row1:col1, tab_0:row1:col2 |
| Fraction unbound in plasma | `Q46` · fu | 0.023 |  |  |  |  | llm_confirmed (0.6) | tab_0:row6:col1, tab_0:row6:col2 |
| Fraction absorbed | `Q40` · Fab | 0.98 |  |  |  |  | exact (1) | tab_0:row9:col1, tab_0:row9:col2 |
| Absorption rate constant | `Q49` · kabs | 1.6 | 1/h | 0.0004444 | 1/s | 1/h | exact (1) | tab_0:row10:col1, tab_0:row10:col2 |
| Vss (L/kg) | `Q65` · Vss | 0.24 | L/kg | 0.0168 | m3 | l/kg | exact (1) | tab_0:row20:col1, tab_0:row20:col2 |
| Kp scalar | `Q410` · Kp | 3.3 |  |  |  |  | llm_confirmed (0.6) | tab_0:row21:col1, tab_0:row21:col2 |
| cyp3a5_em_frequency | `Q900` · cyp3a5_em_frequency | 0.17 |  |  |  |  |  | Doki_2018_table_2:row2:col1, Doki_2018_table_2:row2:col2 |
| cyp2c8_cv | `Q900` · cyp2c8_cv | 81 |  |  |  |  |  | Doki_2018_table_2:row6:col1, Doki_2018_table_2:row6:col2 |
| cyp3a4_cv | `Q900` · cyp3a4_cv | 60 |  |  |  |  |  | Doki_2018_table_2:row8:col1, Doki_2018_table_2:row8:col2, Doki_2018_table_2:row18:col1, Doki_2018_table_2:row18:col2 |
| cyp3a5_cv | `Q900` · cyp3a5_cv | 60 |  |  |  |  |  | Doki_2018_table_2:row20:col1, Doki_2018_table_2:row20:col2 |
| theta_q1_cyp2c8 | `Q900` · theta_q1_cyp2c8 | 2.3 |  |  |  |  |  | tab_0:row23:col1 |
| theta_q66_cyp2c8 | `Q900` · theta_q66_cyp2c8 | 300.8 |  |  |  |  |  | tab_0:row25:col1 |
| theta_q1_cyp3a4 | `Q900` · theta_q1_cyp3a4 | 13.2 |  |  |  |  |  | tab_0:row27:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'cyp3a4-cyp2c8 correlation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col1', 'tab_0:row2:col2'])
- dropped unlinked row (NIL): 'Blood/plasma ratio' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1', 'tab_0:row5:col2'])
- dropped duplicate Q46 ('Fraction of drug unbound in', value '1') — already have one for this compound
- dropped unlinked row (NIL): 'Caco-2 permeability' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col1', 'tab_0:row14:col2'])
- dropped unlinked row (NIL): 'Predicted Peff,man' — extend the ontology if this is a real PK parameter (source ['tab_0:row16:col1', 'tab_0:row16:col2'])
- covariate level 'CYP3A5 EM frequency' → Q900:cyp3a5_em_frequency = 0.17 (linear_fractional on the model)
- dropped unlinked row (NIL): 'CYP2C8 mean (pmol/mg)' — extend the ontology if this is a real PK parameter (source ['Doki_2018_table_2:row5:col1', 'Doki_2018_table_2:row5:col2'])
- covariate level 'CYP2C8 CV (%)' → Q900:cyp2c8_cv = 81 (linear_fractional on the model)
- dropped unlinked row (NIL): 'CYP3A4 mean (pmol/mg)' — extend the ontology if this is a real PK parameter (source ['Doki_2018_table_2:row7:col1', 'Doki_2018_table_2:row7:col2', 'Doki_2018_table_2:row17:col1', 'Doki_2018_table_2:row17:col2'])
- covariate level 'CYP3A4 CV (%)' → Q900:cyp3a4_cv = 60 (linear_fractional on the model)
- dropped PD-category row 'Baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Doki_2018_table_2:row12:col1', 'Doki_2018_table_2:row12:col2'])
- dropped PD-category row 'Slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Doki_2018_table_2:row13:col1', 'Doki_2018_table_2:row13:col2'])
- routed 'CV (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'CYP3A5 mean (pmol/mg)' — extend the ontology if this is a real PK parameter (source ['Doki_2018_table_2:row19:col1', 'Doki_2018_table_2:row19:col2'])
- covariate level 'CYP3A5 CV (%)' → Q900:cyp3a5_cv = 60 (linear_fractional on the model)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (kabs). In population pharmacokinetics, first-order rate constants are conv')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=repaglinide
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 24/24 row label(s) assigned, 2 linked by role; re-tagged repaglinide→parent ×25
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Doki_2018_table_2:row2:col3 = 'CYP2C8 EM frequency'
- unparsed cell Doki_2018_table_2:row12:col3 = 'Substituted by CYP3A4-'
- unparsed cell Doki_2018_table_2:row13:col3 = 'CYP2C8 correlation'
- unparsed cell Doki_2018_table_2:row19:col3 = 'Substituted by CYP2C8'
- unparsed cell Doki_2018_table_2:row20:col3 = 'Substituted by CYP2C8'
- companion parameter table 2 transcribed (24 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['tab_0:row1:col1', 'tab_0:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_0:row10:col1', 'tab_0:row10:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_0:row20:col1', 'tab_0:row20:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 16.8 L | ['tab_0:row20:col1', 'tab_0:row20:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brepaglinide%5D%20Repaglinide_Doki2018_reference&body=Drug%3A%20repaglinide%0ARecord%3A%20Repaglinide_Doki2018_reference%0APaper%3A%20Doki_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_repaglinide/Repaglinide_Doki2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-30 11:44 UTC</sub>
