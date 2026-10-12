<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;repaglinide&quot;,&quot;href&quot;:&quot;drugs/drug_repaglinide/&quot;},{&quot;label&quot;:&quot;Doki_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# repaglinide — `Repaglinide_Doki2018_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (MW), so that value has no SI equivalent. Extracted — repaglinide: MW 453 g/mol, fu 0.023, Fab 0.98, kabs 1.6 1/h, Vss 0.24 L/kg, Kp 3.3.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Doki K et al., Implications of intercorrelation betwee…, British journal of clinical… (2018)
  ·  DOI: [10.1111/bcp.13533](https://doi.org/10.1111/bcp.13533)

<div class="pk-model-meta" hidden drug="repaglinide" model-id="Repaglinide_Doki2018_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="repaglinide" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 6 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 452.6 | g/mol | not captured | [g] / [[m] · [ol]] | not captured | exact (1.0) | tab_0:row1:col1, tab_0:row1:col2 | — | not captured |
| Fraction unbound in plasma | `Q46` · fu | 0.023 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | tab_0:row6:col1, tab_0:row6:col2 | — | not captured |
| Fraction absorbed | `Q40` · Fab | 0.98 | not captured | not captured | not captured | not captured | exact (1.0) | tab_0:row9:col1, tab_0:row9:col2 | — | not captured |
| Absorption rate constant | `Q49` · kabs | 1.6 | 1/h | 0.00044444444444444447 | 1/h | not captured | exact (1.0) | tab_0:row10:col1, tab_0:row10:col2 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | 0.24 | L/kg | 0.0168 | [l] / [kg] | not captured | exact (1.0) | tab_0:row20:col1, tab_0:row20:col2 | — | not captured |
| Kp scalar | `Q410` · Kp | 3.3 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | tab_0:row21:col1, tab_0:row21:col2 | — | not captured |
| cyp3a5_em_frequency | `Q900` · cyp3a5_em_frequency | 0.17 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row2:col1, Doki_2018_table_2:row2:col2 | — | not captured |
| cyp2c8_cv | `Q900` · cyp2c8_cv | 81 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row6:col1, Doki_2018_table_2:row6:col2 | — | not captured |
| cyp3a4_cv | `Q900` · cyp3a4_cv | 60 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row8:col1, Doki_2018_table_2:row8:col2, Doki_2018_table_2:row18:col1, Doki_2018_table_2:row18:col2 | — | not captured |
| cyp3a5_cv | `Q900` · cyp3a5_cv | 60 | not captured | not captured | not captured | not captured | not captured (not captured) | Doki_2018_table_2:row20:col1, Doki_2018_table_2:row20:col2 | — | not captured |
| theta_q1_cyp2c8 | `Q900` · theta_q1_cyp2c8 | 2.3 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row23:col1 | — | not captured |
| theta_q66_cyp2c8 | `Q900` · theta_q66_cyp2c8 | 300.8 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row25:col1 | — | not captured |
| theta_q1_cyp3a4 | `Q900` · theta_q1_cyp3a4 | 13.2 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_0:row27:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q374 | pass | [mass] / [substance] | not captured | not captured | not captured | ['tab_0:row1:col1', 'tab_0:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row10:col1', 'tab_0:row10:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row20:col1', 'tab_0:row20:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q65 | pass | volume within physiological range | 16.8 L | not captured | not captured | ['tab_0:row20:col1', 'tab_0:row20:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_repaglinide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Doki_2018` / `Doki_2018::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 11:44 UTC</sub>
