<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;2,2,4-Trimethylpentane&quot;,&quot;href&quot;:&quot;drugs/toxin_224_trimethylpentane/&quot;},{&quot;label&quot;:&quot;El-Masri_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 2,2,4-Trimethylpentane — `D_224Trimethylpentane_ElMasri2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Parameter VH was rejected because its reported dimensionless unit conflicts with the required volume dimension for the liver compartment.

<div class="pk-model-meta" hidden drug="2,2,4-Trimethylpentane" model-id="D_224Trimethylpentane_ElMasri2009_reference" status="rejected" stale="false" population="male Long-Evans rats" measured-compound="2,2,4-Trimethylpentane" parameterization="mechanistic" topology="1C"></div>

## Citation
El-Masri HA, Dowd S, Pegram RA, Harrison R, Yavanhxay SJ, Simmons JE et al. Development of an inhalation physiologically based pharmacokinetic (PBPK) model for 2,2, 4-trimethylpentane (TMP) in male Long-Evans rats using gas uptake experiments. Inhalation toxicology 21(14):1176–1185 (2009).
  ·  DOI: [10.3109/08958370903005751](https://doi.org/10.3109/08958370903005751)

## Population and dosing

**Population:** male Long-Evans rats · condition healthy · age group adult · n = 6.

**Dosing:** 3500 mg, ip, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fraction blood to brain | E | 0.023 |  |
| Fraction volume of liver a | V | 0.04 |  |
| Liver | VH | 4.51 | dimensionless |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Parameter VH was rejected because its reported dimensionless unit conflicts with the required volume dimension for the liver compartment.**

The parameter VH, representing the volume of the hepatic compartment, is listed with the value 4.51 and the unit 'dimensionless'. The review identified a dimension mismatch because a volume parameter must have dimensions of length cubed, not be dimensionless. This unit conflict prevented the conversion to SI units, leading to the rejection of the model record. Extracted — 2,2,4-Trimethylpentane: E 0.023, V 0.04, VH 4.51 dimensionless.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| Fraction blood to brain | `Q38` · E | 0.023 |  | 0.023 |  | llm (0.6) | El-Masri_2009_table_p5_1:row5:col1 |
| Fraction volume of liver a | `Q61` · V | 0.04 |  |  |  | llm_confirmed (0.6) | El-Masri_2009_table_p5_1:row10:col1 |
| Liver | `Q368` · VH | 4.51 | dimensionless |  | d·imensionless | llm_confirmed (0.6) | El-Masri_2009_table_2:row1:col1, El-Masri_2009_table_2:row1:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Cardiac output | Q54 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Ventilation rate' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row2:col1'])
- dropped unlinked row (NIL): 'Fraction blood to liver' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row3:col1'])
- dropped unlinked row (NIL): 'Fraction blood to fat' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row4:col1'])
- dropped unlinked row (NIL): 'Fraction blood to kidney' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row6:col1'])
- dropped unlinked row (NIL): 'Fraction blood to rapidly perfused' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row7:col1'])
- dropped unlinked row (NIL): 'Fraction volume of fat a' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row11:col1'])
- dropped unlinked row (NIL): 'Fraction volume of brain a' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row12:col1'])
- dropped unlinked row (NIL): 'Fraction volume of kidney' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_p5_1:row13:col1'])
- dropped duplicate Q61 ('Fraction volume of rapidly perfused', value '0.05') — already have one for this compound
- dropped unlinked row (NIL): 'Blood' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_2:row0:col1'])
- unit_dimension_mismatch: 'Liver' → Q368 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_2:row2:col1', 'El-Masri_2009_table_2:row2:col2'])
- dropped unlinked row (NIL): 'Fat' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_2:row3:col1', 'El-Masri_2009_table_2:row3:col2'])
- dropped unlinked row (NIL): 'Brain' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_2:row4:col1', 'El-Masri_2009_table_2:row4:col2'])
- dropped unlinked row (NIL): 'Rapidly perfused tissues c' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_2:row5:col1', 'El-Masri_2009_table_2:row5:col2'])
- dropped unlinked row (NIL): 'Slowly perfused tissues d' — extend the ontology if this is a real PK parameter (source ['El-Masri_2009_table_2:row6:col1', 'El-Masri_2009_table_2:row6:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=2,2,4-Trimethylpentane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: none of 1 PubChem candidate(s) is '2,2,4-Trimethylpentane' (LLM) — left in mass units
- molar mass: none found for '2,2,4-Trimethylpentane' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table El-Masri_2009_table_p5_1: units_need_context
- table El-Masri_2009_table_p5_1: unparsed_numeric_cell
- table El-Masri_2009_table_2: ragged_grid
- companion parameter table 2 transcribed (13 record(s))
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 14 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q368 | fail | [length] ** 3 | dimensionless (dimensionless) | ['El-Masri_2009_table_2:row1:col1', 'El-Masri_2009_table_2:row1:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['El-Masri_2009_table_p5_1:row10:col1'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B224_trimethylpentane%5D%20D_224Trimethylpentane_ElMasri2009_reference&body=Drug%3A%20224_trimethylpentane%0ARecord%3A%20D_224Trimethylpentane_ElMasri2009_reference%0APaper%3A%20El-Masri_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_224_trimethylpentane/D_224Trimethylpentane_ElMasri2009_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 00:29 UTC</sub>
