<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;c1-inhibitor, plasma derived&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/&quot;},{&quot;label&quot;:&quot;Farrell_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;C1InhibitorPlasmaDerived_Pawaskar2018_reference&quot;,&quot;label&quot;:&quot;Pawaskar_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# c1-inhibitor, plasma derived — `C1InhibitorPlasmaDerived_Farrell2013_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax and Km), so that value has no SI equivalent. None of the extracted parameters is c1 inhibitor plasma derived's own; they describe recombinant human C1 inhibitor. Extracted — recombinant human C1 inhibitor: V 2.86 l, Vmax 1.63 U ml⁻¹ h⁻¹, Km 1.6 U ml⁻¹.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `recombinant human C1 inhibitor`, measured `C1INH`.

## Citation
Farrell C et al., Population pharmacokinetics of recombin…, British journal of clinical… (2013)
  ·  DOI: [10.1111/bcp.12132](https://doi.org/10.1111/bcp.12132)

<div class="pk-model-meta" hidden drug="c1-inhibitor, plasma derived" model-id="C1InhibitorPlasmaDerived_Farrell2013_reference" status="rejected" stale="false" population="healthy volunteers and hereditary angioedema patients" measured-compound="C1INH" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Volume of distribution (l) | `Q61` · V | 2.86 | l | 0.00286 | [l] | not captured | exact (1.0) | Farrell_2013_table_p5_1:row2:col1 | — | not captured |
| theta_v_category | `Q900` · theta_v_category | 0.681 | not captured | not captured | not captured | not captured | not captured (not captured) | Farrell_2013_table_p5_1:row3:col1 | — | not captured |
| Vmax (U ml⁻¹ h⁻¹) in healthy volunteers and symptomatic HAE patients | `Q66` · Vmax | 1.63 | U ml⁻¹ h⁻¹ | not captured | [u] / [[h] · [ml]] | not captured | llm_confirmed (0.6) | Farrell_2013_table_p5_1:row5:col1 | — | not captured |
| Km (U ml⁻¹) | `Q1` · Km | 1.60 | U ml⁻¹ | not captured | [u] / [ml] | not captured | exact (1.0) | Farrell_2013_table_p5_1:row7:col1 | — | not captured |
| theta_q319_bodyweight | `Q900` · theta_q319_bodyweight | 0.612 | not captured | not captured | not captured | not captured | not captured (not captured) | Farrell_2013_table_p5_1:row4:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Baseline levels in HAE patients (U ml⁻¹)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Farrell_2013_table_p5_1:row0:col1'])
- dropped PD-category row 'Baseline levels in healthy volunteers (U ml⁻¹)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Farrell_2013_table_p5_1:row1:col1'])
- covariate level 'Fractional change in volume for studies C1 1202-01 and C1 1203-01' → Q900:theta_v_category = 0.681 (additive_shift on Q61)
- unit_dimension_mismatch: 'Vmax (U ml⁻¹ h⁻¹) in healthy volunteers and symptomatic HAE patients' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Fractional change in Vmax (U ml⁻¹ h⁻¹) for asymptomatic HAE patients' — extend the ontology if this is a real PK parameter (source ['Farrell_2013_table_p5_1:row6:col1'])
- routed 'Interindividual variability in HAE patient baseline levels (%CV)†' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability in healthy volunteer baseline levels (%CV)†' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability in volume (%CV)*' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interoccasion variability in volume (%CV)*' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- routed 'Interindividual variability in Vmax (%CV)*' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=C1INH
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'C1INH' ('recombinant human C1 esterase inhibitor') — left in mass units
- molar mass: none found for 'c1_inhibitor_plasma_derived' — its concentrations stay mass-only
- molar mass: none found for 'C1INH' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'C1INH', not c1_inhibitor_plasma_derived — the review values are the parent's

**Extraction notes:**
- table Farrell_2013_table_p5_1: unbound_uncertainty

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Farrell_2013_table_p5_1:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Farrell_2013_table_p5_1:row2:col1'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | U ml⁻¹ h⁻¹ | not captured | not captured | ['Farrell_2013_table_p5_1:row5:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.86 L | not captured | not captured | ['Farrell_2013_table_p5_1:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_c1_inhibitor_plasma_derived/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Farrell_2013` / `Farrell_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:35 UTC</sub>
