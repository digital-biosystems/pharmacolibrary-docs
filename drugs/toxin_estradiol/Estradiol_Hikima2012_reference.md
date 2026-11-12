<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Estradiol&quot;,&quot;href&quot;:&quot;drugs/toxin_estradiol/&quot;},{&quot;label&quot;:&quot;Hikima_2012 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Estradiol — `Estradiol_Hikima2012_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.40).">human + animal</span>

> The estradiol record was rejected because tissue partition coefficient and metabolite formation parameters were recorded with μg/mL instead of dimensionless or 1/time units.

<div class="pk-model-meta" hidden drug="Estradiol" model-id="Estradiol_Hikima2012_reference" status="rejected" stale="false" population="human" measured-compound="β-estradiol" parameterization="mechanistic" topology="1C"></div>

## Citation
Hikima T, Kaneda N, Matsuo K, Tojo K. Prediction of percutaneous absorption in human using three-dimensional human cultured epidermis LabCyte EPI-MODEL. Biological & pharmaceutical bulletin 35(3):362–368 (2012).
  ·  DOI: [10.1248/bpb.35.362](https://doi.org/10.1248/bpb.35.362)

## Population and dosing

**Population:** human · condition in vitro simulation · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.40).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KP | Kp | 1342 | μg/mL |
| KF | kfm | 500 | μg/mL |
| ClE2 | CL | 22.0 | ml/hr/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.40).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The estradiol record was rejected because tissue partition coefficient and metabolite formation parameters were recorded with μg/mL instead of dimensionless or 1/time units.**

The tissue-to-plasma partition coefficient is listed with a unit of μg/mL, which conflicts with its required dimensionless nature. Similarly, the first-order rate constant for metabolite formation is assigned μg/mL instead of a 1/time unit. These unit errors prevented the parameters from being converted to SI units, causing the model to be held back. Extracted — estradiol: Kp 1.34e+03 μg/mL, kfm 500 μg/mL, CL 22 ml/hr/kg.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KP | `Q410` · Kp | 1342 | μg/mL |  |  | µg/ml | exact (1) | Hikima_2012_table_1:row3:col1, Hikima_2012_table_1:row3:col4 |
| KF | `Q305` · kfm | 500 | μg/mL |  |  | µg/ml | exact (1) | Hikima_2012_table_1:row18:col1, Hikima_2012_table_1:row18:col2, Hikima_2012_table_1:row18:col4 |
| ClE2 | `Q22` · CL | 22.0 | ml/hr/kg | 4.278e-07 | m3/s | L/h | review_gapfill (0.7) | Gillies_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'NP' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row0:col1', 'Hikima_2012_table_1:row0:col4'])
- dropped unlinked row (NIL): 'NC' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row1:col1', 'Hikima_2012_table_1:row1:col4'])
- dropped unlinked row (NIL): 'CF' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row2:col1', 'Hikima_2012_table_1:row2:col4'])
- unit_dimension_mismatch: 'KP' → Q410 (unit '[mass] / [length] ** 3' vs ontology 'dimensionless') — route to review
- unit_dimension_mismatch: 'KP (PB)' → Q410 (unit '[length] ** 2' vs ontology 'dimensionless') — route to review
- dropped duplicate Q410 ('KP (PB)', value '1000') — already have one for this compound
- dropped unlinked row (NIL): 'EST' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row5:col1', 'Hikima_2012_table_1:row5:col2', 'Hikima_2012_table_1:row5:col4'])
- dropped unlinked row (NIL): 'MS' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row6:col1', 'Hikima_2012_table_1:row6:col2', 'Hikima_2012_table_1:row6:col4'])
- dropped unlinked row (NIL): 'TES' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row7:col1', 'Hikima_2012_table_1:row7:col4'])
- dropped unlinked row (NIL): 'ETE' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row8:col1', 'Hikima_2012_table_1:row8:col2', 'Hikima_2012_table_1:row8:col4'])
- dropped unlinked row (NIL): 'NET' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row9:col1', 'Hikima_2012_table_1:row9:col2', 'Hikima_2012_table_1:row9:col4'])
- dropped unlinked row (NIL): 'PS' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row10:col1', 'Hikima_2012_table_1:row10:col2', 'Hikima_2012_table_1:row10:col4'])
- dropped unlinked row (NIL): 'IM' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row11:col1', 'Hikima_2012_table_1:row11:col4'])
- dropped unlinked row (NIL): 'IM (PB)' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row12:col1', 'Hikima_2012_table_1:row12:col4'])
- dropped unlinked row (NIL): 'PN' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row13:col1', 'Hikima_2012_table_1:row13:col2', 'Hikima_2012_table_1:row13:col4'])
- dropped unlinked row (NIL): 'HC' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row14:col1', 'Hikima_2012_table_1:row14:col4'])
- dropped unlinked row (NIL): 'PP' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row15:col1', 'Hikima_2012_table_1:row15:col4'])
- dropped unlinked row (NIL): 'LFX' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row16:col1', 'Hikima_2012_table_1:row16:col4'])
- dropped unlinked row (NIL): 'PPH' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row17:col1', 'Hikima_2012_table_1:row17:col4'])
- unit_dimension_mismatch: 'KF' → Q305 (unit '[mass] / [length] ** 3' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'TM' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row19:col1', 'Hikima_2012_table_1:row19:col4'])
- dropped unlinked row (NIL): 'VB' — extend the ontology if this is a real PK parameter (source ['Hikima_2012_table_1:row20:col1', 'Hikima_2012_table_1:row20:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=β-estradiol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none of 3 PubChem candidate(s) is 'β-estradiol' (LLM) — left in mass units
- molar mass: none found for 'β-estradiol' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Gillies_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Hikima_2012_table_1: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 8 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gillies_2016:review'] |
| C5_dimension_Q305 | fail | 1 / [time] | μg/mL ([mass] / [length] ** 3) | ['Hikima_2012_table_1:row18:col1', 'Hikima_2012_table_1:row18:col2', 'Hikima_2012_table_1:row18:col4'] |
| C5_dimension_Q410 | fail | dimensionless | μg/mL ([mass] / [length] ** 3) | ['Hikima_2012_table_1:row3:col1', 'Hikima_2012_table_1:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 22 | ['Gillies_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.54 L/h | ['Gillies_2016:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bestradiol%5D%20Estradiol_Hikima2012_reference&body=Drug%3A%20estradiol%0ARecord%3A%20Estradiol_Hikima2012_reference%0APaper%3A%20Hikima_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_estradiol/Estradiol_Hikima2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 07:37 UTC</sub>
