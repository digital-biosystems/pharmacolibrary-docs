<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Desflurane&quot;,&quot;href&quot;:&quot;drugs/toxin_desflurane/&quot;},{&quot;label&quot;:&quot;Esper_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desflurane_Ngamprasertwong2016_reference&quot;,&quot;label&quot;:&quot;Ngamprasertwong_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desflurane/Desflurane_Ngamprasertwong2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desflurane_Weber2021_reference&quot;,&quot;label&quot;:&quot;Weber_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desflurane/Desflurane_Weber2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Desflurane — `Desflurane_Esper2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Desflurane's clearance value of 4.17 L/min is physiologically implausible, and the record was built solely from abstract summary statistics rather than a fitted model.

<div class="pk-model-meta" hidden drug="Desflurane" model-id="Desflurane_Esper2015_reference" status="rejected" stale="false" population="adult operative patients (ASA I-III)" measured-compound="Desflurane" parameterization="mechanistic" topology="1C"></div>

## Citation
Esper T, Wehner M, Meinecke CD, Rueffert H. Blood/Gas partition coefficients for isoflurane, sevoflurane, and desflurane in a clinically relevant patient population. Anesthesia and analgesia 120(1):45–50 (2015).
  ·  DOI: [10.1213/ANE.0000000000000516](https://doi.org/10.1213/ANE.0000000000000516)

## Population and dosing

**Population:** adult operative patients (ASA I-III) · condition operative patients (healthy to severe systemic disease) · age group mixed · n = 38.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| blood/gas partition coefficient of isoflurane | blood_air_partition | 1.45 |  |
| P | equation variable | 0.041 |  |
| maternal clearance | CL | 4.17 | L/min |
| volume of distribution (VFetus) in the fetus | V | 0.144 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Desflurane's clearance value of 4.17 L/min is physiologically implausible, and the record was built solely from abstract summary statistics rather than a fitted model.**

The clearance value of 4.17 L/min is explicitly flagged as outside the physiological window, indicating a unit or scale extraction error. Additionally, the model relies entirely on abstract-only data, meaning reported summary statistics substituted for a properly fitted population model. Extracted — desflurane: blood_air_partition 1.45, CL 4.17 L/min, V 0.144 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| blood/gas partition coefficient of isoflurane | `Q411` · blood_air_partition | 1.45 |  |  |  |  | llm_corrected (0.6) | Esper_2015:abstract |
| P | `Q900` · equation variable | 0.041 |  | 0.041 |  |  | llm (0.6) | Esper_2015:abstract, Esper_2015:abstract |
| maternal clearance | `Q22` · CL | 4.17 | L/min | 6.95e-05 | m3/s | L/h | review_gapfill (0.7) | Ngamprasertwong_2016:review |
| volume of distribution (VFetus) in the fetus | `Q61` · V | 0.144 | L | 0.000144 | m3 | L | review_gapfill (0.7) | Ngamprasertwong_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q411 ('blood/gas partition coefficient of sevoflurane', value 0.74) — already have one for this compound
- dropped duplicate Q411 ('blood/gas partition coefficient of desflurane', value 0.57) — already have one for this compound
- dropped unlinked row (NIL): 'Pearson r' — extend the ontology if this is a real PK parameter (source ['Esper_2015:abstract'])
- dropped duplicate Q900 ('r', value 0.37) — already have one for this compound
- dropped duplicate Q411 ('distilled water/gas partition coefficients of isoflurane', value 0.59) — already have one for this compound
- dropped duplicate Q411 ('distilled water/gas partition coefficients of sevoflurane', value 0.37) — already have one for this compound
- dropped unlinked row (NIL): 'distilled water/gas partition coefficients of desflurane' — extend the ontology if this is a real PK parameter (source ['Esper_2015:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Desflurane
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Ngamprasertwong_2016's review values (primary lacked it)
- gap-filled Q61 (V) from Ngamprasertwong_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Esper_2015_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ngamprasertwong_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ngamprasertwong_2016:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.17 | ['Ngamprasertwong_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 250 L/h | ['Ngamprasertwong_2016:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.144 L | ['Ngamprasertwong_2016:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesflurane%5D%20Desflurane_Esper2015_reference&body=Drug%3A%20desflurane%0ARecord%3A%20Desflurane_Esper2015_reference%0APaper%3A%20Esper_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_desflurane/Desflurane_Esper2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 09:20 UTC</sub>
