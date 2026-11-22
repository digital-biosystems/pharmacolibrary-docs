<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Cordes_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Cordes2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Vmax and Km for isoniazid use amount-based units that mismatch required mass dimensions and could not be converted to standard pharmacometric units.

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Cordes2016_reference" status="rejected" stale="false" population="healthy volunteers and tuberculosis patients (virtual populations representing slow, intermediate, and fast acetylators)" measured-compound="Isoniazid" parameterization="mechanistic" topology="1C"></div>

## Citation
Cordes H, Thiel C, Aschmann HE, Baier V, Blank LM, Kuepfer L. A Physiologically Based Pharmacokinetic Model of Isoniazid and Its Application in Individualizing Tuberculosis Chemotherapy. Antimicrobial agents and chemotherapy 60(10):6134–6145 (2016).
  ·  DOI: [10.1128/AAC.00508-16](https://doi.org/10.1128/AAC.00508-16)

## Population and dosing

**Population:** healthy volunteers and tuberculosis patients (virtual populations representing slow, intermediate, and fast acetylators) · condition healthy and tuberculosis patients · age group adult · n = 1000.

**Dosing:** 9, 150, 300, 600, 900, 1200 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vmax (μmol · liter−1 · min−1) / Fast acetylators | Vmax | 400 | μmol · liter−1 · min−1 |
| Km (μmol · liter−1) | Km | 320 | μmol · liter−1 |
| h | equation variable | 0.56 |  |
| typical CL | CL | 8.82 | L/h |
| typical V | V | 56.8 | L |
| Ka reported among pediatric TB patients | kabs | 4.23 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vmax and Km for isoniazid use amount-based units that mismatch required mass dimensions and could not be converted to standard pharmacometric units.**

The maximum metabolic rate (Vmax) and affinity constant (Km) for isoniazid are reported in amount-based concentration units rather than the expected mass-based units. Additionally, these specific units could not be translated into standard pharmacometric units, leaving the parameters without valid values for model integration. Extracted — isoniazid: Vmax 400 μmol · liter−1 · min−1, Km 320 μmol · liter−1, CL 8.82 L/h, V 56.8 L, kabs 4.23 h−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vmax (μmol · liter−1 · min−1) / Fast acetylators | `Q66` · Vmax | 400 | μmol · liter−1 · min−1 |  |  | (µM·ol)/(min·l) | llm_confirmed (0.6) | T2:row2:col4, T2:row3:col4, T2:row4:col4 |
| Km (μmol · liter−1) | `Q1` · Km | 320 | μmol · liter−1 |  |  | (µM·ol)/l | exact (1) | T2:row3:col5, T2:row4:col5, T2:row6:col5, T2:row7:col5, T2:row8:col5, T2:row9:col5 |
| h | `Q900` · equation variable | 0.56 |  | 0.56 |  |  | llm (0.6) | Cordes_2016_table_5:row5:col1 |
| typical CL | `Q22` · CL | 8.82 | L/h | 2.45e-06 | m3/s | L/h | review_gapfill (0.7) | Abdelgawad_2022:review |
| typical V | `Q61` · V | 56.8 | L | 0.0568 | m3 | L | review_gapfill (0.7) | Abdelgawad_2022:review |
| Ka reported among pediatric TB patients | `Q49` · kabs | 4.23 | h−1 | 0.001175 | 1/s | 1/h | review_gapfill (0.7) | Thomas_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 1 row(s) → Isonicotinic acid, 1 row(s) → Isonicotinylglycine, 1 row(s) → Acetylhydrazine (name 3)
- column 'reference(s) or source' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Vmax (μmol · liter−1 · min−1) / Fast acetylators' → Q66 (unit '[substance] / [length] ** 3 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Km (μmol · liter−1)' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Isoniazid' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_1:row0:col1', 'Cordes_2016_table_1:row0:col2', 'Cordes_2016_table_1:row0:col5'])
- dropped unlinked row (NIL): 'Acetylisoniazid' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_1:row1:col1', 'Cordes_2016_table_1:row1:col2', 'Cordes_2016_table_1:row1:col5'])
- dropped unlinked row (NIL): 'Isonicotinic acid' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_1:row2:col1', 'Cordes_2016_table_1:row2:col2'])
- dropped unlinked row (NIL): 'Isonicotinylglycine' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_1:row3:col1', 'Cordes_2016_table_1:row3:col2'])
- dropped unlinked row (NIL): 'Hydrazine' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_1:row4:col1', 'Cordes_2016_table_1:row4:col2', 'Cordes_2016_table_1:row4:col5'])
- dropped unlinked row (NIL): 'Acetylhydrazine' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_1:row5:col1', 'Cordes_2016_table_1:row5:col2'])
- dropped unlinked row (NIL): 'Diacetylhydrazine' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_1:row6:col1', 'Cordes_2016_table_1:row6:col2', 'Cordes_2016_table_1:row6:col5'])
- dropped unlinked row (NIL): 'MIC' — extend the ontology if this is a real PK parameter (source ['Cordes_2016_table_5:row6:col2'])
- dropped value-less row: 'TABLE 2.'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Isoniazid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 8 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: Vmax (μmol · liter−1 · min−1) / Fast acetylators
- row roles (LLM): model_class=pbpk; 14/14 row label(s) assigned, 0 linked by role; re-tagged parent→Acetylisoniazid ×3, parent→Isonicotinic acid ×2, parent→Isonicotinylglycine ×2, parent→Hydrazine ×3, parent→Acetylhydrazine ×2, parent→Diacetylhydrazine ×3
- gap-filled Q22 (CL) from Abdelgawad_2022's review values (primary lacked it)
- gap-filled Q61 (V) from Abdelgawad_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Thomas_2022's review values (primary lacked it)

**Extraction notes:**
- table T2: ambiguous_numeric_format
- transposed table T2: logical view retains original source coordinates
- table Cordes_2016_table_1: ambiguous_numeric_format
- table Cordes_2016_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (21 record(s))
- table Cordes_2016_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (2 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | μmol · liter−1 ([substance] / [length] ** 3) | ['T2:row3:col5', 'T2:row4:col5', 'T2:row6:col5', 'T2:row7:col5', 'T2:row8:col5', 'T2:row9:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Abdelgawad_2022:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Thomas_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Abdelgawad_2022:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μmol · liter−1 · min−1 ([substance] / [length] ** 3 / [time]) | ['T2:row2:col4', 'T2:row3:col4', 'T2:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.82 | ['Abdelgawad_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.82 L/h | ['Abdelgawad_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 56.8 L | ['Abdelgawad_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Cordes2016_reference&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Cordes2016_reference%0APaper%3A%20Cordes_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Cordes2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:03 UTC</sub>
