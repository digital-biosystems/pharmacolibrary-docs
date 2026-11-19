<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Desflurane&quot;,&quot;href&quot;:&quot;drugs/toxin_desflurane/&quot;},{&quot;label&quot;:&quot;Lu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desflurane_Ngamprasertwong2016_reference&quot;,&quot;label&quot;:&quot;Ngamprasertwong_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desflurane/Desflurane_Ngamprasertwong2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desflurane_Weber2021_reference&quot;,&quot;label&quot;:&quot;Weber_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desflurane/Desflurane_Weber2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Desflurane — `Desflurane_Lu2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> Desflurane clearance of 0.07 l/min with a central volume of 0.10 l yields a half-life inconsistent with the reported beta phase, indicating a scale error.

<div class="pk-model-meta" hidden drug="Desflurane" model-id="Desflurane_Lu2024_reference" status="rejected" stale="false" population="piglets" measured-compound="Desflurane" parameterization="mechanistic" topology="1C"></div>

## Citation
Lu CC, Ho ST, Hu OY, Hsiong CH, Cheng YC, Hsu CH et al. Pharmacokinetics of desflurane uptake and disposition in piglets. Frontiers in pharmacology 15:1339690 (2024).
  ·  DOI: [10.3389/fphar.2024.1339690](https://doi.org/10.3389/fphar.2024.1339690)

## Population and dosing

**Population:** piglets · condition healthy · n = 7.

**Dosing:** 6 %, inhaled, single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| B (%) | equation variable | 3.45 | % |
| Alpha half-life, min | t1/2α | 0.75 | min |
| Beta half-life, min | t1/2β | 61.90 | min |
| Distribution volume of central compartment, l | V | 0.10 | l |
| Distribution volume of steady state, l | Vss | 1.29 | l |
| Clearance, l.min-1 | CL | 0.07 | l.min-1 |
| Mean residence time, min | MRT | 15.51 | min |
| Maximal concentration, % | Cmax | 5.68 |  |
| Area under the curve, % × min | AUC | 695.88 | % × min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Desflurane clearance of 0.07 l/min with a central volume of 0.10 l yields a half-life inconsistent with the reported beta phase, indicating a scale error.**

The recorded clearance of 0.07 l/min combined with the central volume of 0.10 l implies a terminal half-life far shorter than the reported 61.90 minutes. This discrepancy violates physiological plausibility windows for desflurane in piglets. Additionally, the unit '% × min' for AUC was not recognized for conversion, leaving the exposure metric without an SI value. Extracted — desflurane: t1/2α 0.75 min, t1/2β 61.9 min, V 0.1 l, Vss 1.29 l, CL 0.07 l.min-1, MRT 15.5 min, Cmax 5.68, AUC 696 % × min.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| B (%) | `Q900` · equation variable | 3.45 | % | 0.0345 |  | % | llm (0.6) | T3:row2:col1, T3:row2:col2, T3:row2:col3 |
| Alpha half-life, min | `Q59` · t1/2α | 0.75 | min | 45 | s | min | half_life_rule (0.95) | T3:row3:col1, T3:row3:col3 |
| Beta half-life, min | `Q60` · t1/2β | 61.90 | min | 3714 | s | min | half_life_rule (0.95) | T3:row4:col1, T3:row4:col3 |
| Distribution volume of central compartment, l | `Q61` · V | 0.10 | l | 0.0001 | m3 | l | boundary_compartment (0.9) | T3:row5:col1, T3:row5:col3 |
| Distribution volume of steady state, l | `Q65` · Vss | 1.29 | l | 0.00129 | m3 | l | llm_corrected (0.6) | T3:row6:col1, T3:row6:col3 |
| Clearance, l.min-1 | `Q22` · CL | 0.07 | l.min-1 | 1.167e-06 | m3/s | l/min | exact (1) | T3:row7:col1, T3:row7:col3 |
| Mean residence time, min | `Q53` · MRT | 15.51 | min | 930.6 | s | min | exact (1) | T3:row8:col1, T3:row8:col3 |
| Maximal concentration, % | `Q32` · Cmax | 5.68 |  |  |  |  | llm (0.6) | T3:row9:col1, T3:row9:col3 |
| Area under the curve, % × min | `Q88` · AUC | 695.88 | % × min |  |  | min·% | llm_confirmed (0.6) | T3:row10:col1, T3:row10:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'end-tidal concentration' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'pulmonary artery blood concentration' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'arterial blood concentration' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'A (%)' — extend the ontology if this is a real PK parameter (source ['T3:row1:col1', 'T3:row1:col3'])
- unit_dimension_unknown: '% × min' (AUC)
- implicit units: 'Maximal concentration, %' — the LLM proposed '%', whose dimension does not fit Q32; left unset
- implicit units: 'Area under the curve, % × min' — the LLM proposed '% min', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Desflurane
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Distribution volume of central compartment, l' is the general volume)
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table T3: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row7:col1', 'T3:row7:col3'] |
| C5_dimension_Q53 | pass | [time] |  | ['T3:row8:col1', 'T3:row8:col3'] |
| C5_dimension_Q59 | pass | [time] |  | ['T3:row3:col1', 'T3:row3:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['T3:row4:col1', 'T3:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T3:row5:col1', 'T3:row5:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['T3:row6:col1', 'T3:row6:col3'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['T3:row9:col1', 'T3:row9:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | % × min | ['T3:row10:col1', 'T3:row10:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.07 | ['T3:row7:col1', 'T3:row7:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.2 L/h | ['T3:row7:col1', 'T3:row7:col3'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.1 L | ['T3:row5:col1', 'T3:row5:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 1.29 L | ['T3:row6:col1', 'T3:row6:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesflurane%5D%20Desflurane_Lu2024_reference&body=Drug%3A%20desflurane%0ARecord%3A%20Desflurane_Lu2024_reference%0APaper%3A%20Lu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_desflurane/Desflurane_Lu2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 09:20 UTC</sub>
