<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Vinblastine&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/&quot;},{&quot;label&quot;:&quot;Witta_2023 \u00b7 bone_marrow&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Malik2016_reference&quot;,&quot;label&quot;:&quot;Malik_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Malik2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Malik2016_vinblastine&quot;,&quot;label&quot;:&quot;Malik_2016_vinblastine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Malik2016_vinblastine.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_van1996_reference&quot;,&quot;label&quot;:&quot;van_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_van1996_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Owellen1975_reference&quot;,&quot;label&quot;:&quot;Owellen_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Owellen1975_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Sethi1984_reference&quot;,&quot;label&quot;:&quot;Sethi_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Sethi1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vinblastine — `Vinblastine_Witta2023_bone_marrow`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Vinblastine" model-id="Vinblastine_Witta2023_bone_marrow" status="rejected" stale="false" population="Mdr1a/b(−/−) knockout and wild‐type mice; pet dogs; humans (virtual and clinical data)" measured-compound="Vinblastine" parameterization="mechanistic" topology="retention"></div>

## Citation
Witta S, Collins KP, Ramirez DA, Mannheimer JD, Wittenburg LA, Gustafson DL. Vinblastine pharmacokinetics in mouse, dog, and human in the context of a physiologically based model incorporating tissue-specific drug binding, transport, and metabolism. Pharmacology research & perspectives 11(1):e01052 (2023).
  ·  DOI: [10.1002/prp2.1052](https://doi.org/10.1002/prp2.1052)

## Population and dosing

**Population:** Mdr1a/b(−/−) knockout and wild‐type mice; pet dogs; humans (virtual and clinical data) · condition healthy · age group adult.

**Dosing:** 5.81, 14, 16.1, 70, 420 mg, iv, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.70).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0‐6h (nM × h) a / Obs | AUCt | 2983 | nM × h |
| AUC0‐6h (nM × h) a / Sim | AUC | 3194 | nM × h |
| t1/2 (h) b / Sim | t1/2z | 2.77 | h |
| Vd | V | 13.41 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0‐6h (nM × h) a / Obs | `Q19` · AUCt | 2983 | nM × h |  |  | h·nM | llm (0.6) | Witta_2023_table_4:row7:col1, Witta_2023_table_4:row14:col1 |
| AUC0‐6h (nM × h) a / Sim | `Q88` · AUC | 3194 | nM × h |  |  | h·nM | llm (0.6) | Witta_2023_table_4:row7:col2, Witta_2023_table_4:row14:col2 |
| t1/2 (h) b / Sim | `Q57` · t1/2z | 2.77 | h | 9972 | s | h | llm_confirmed (0.6) | Witta_2023_table_4:row7:col5, Witta_2023_table_4:row14:col5 |
| Vd | `Q61` · V | 13.41 | L/kg | 0.9387 | m3 | L | review_gapfill (0.7) | Chagas_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC0‐6h (nM × h) a / Obs' → Q19 (unit '[time] * [length]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0‐6h (nM × h) a / Sim' → Q88 (unit '[time] * [length]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC0‐6h (nM × h) a / Ratio c' → Q88 (unit '[time] * [length]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('AUC0‐6h (nM × h) a / Ratio c', value '1.07') — already have one for this compound
- dropped duplicate Q57 ('t1/2 (h) b / Obs', value '5.83') — already have one for this compound
- dropped duplicate Q57 ('t1/2 (h) b / Ratio c', value '0.49') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Vinblastine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'bone marrow' subgroup of Witta_2023 (paper reports 9 populations: bone marrow, brain, dog, human, gut, kidney, liver, mdr1a/b (−/−) mice, mouse, serum)
- skipped review gap-fill of CL from Kawai_2025: its label names a different analyte ('creatinine') — 'Clearance of creatinine (ml/min) median (IQR):'
- gap-filled Q61 (V) from Chagas_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table prp21052-tbl-0005: logical view retains original source coordinates
- companion parameter table 3 transcribed (22 record(s))
- table Witta_2023_table_4: unparsed_numeric_cell
- transposed table Witta_2023_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (69 record(s))
- LLM selected parameter table(s) 3, 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | nM × h ([time] * [length]) | ['Witta_2023_table_4:row7:col1', 'Witta_2023_table_4:row14:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Witta_2023_table_4:row7:col5', 'Witta_2023_table_4:row14:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Chagas_2019:review'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | nM × h ([time] * [length]) | ['Witta_2023_table_4:row7:col2', 'Witta_2023_table_4:row14:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 939 L | ['Chagas_2019:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Witta2023_bone_marrow&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Witta2023_bone_marrow%0APaper%3A%20Witta_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_vinblastine/Vinblastine_Witta2023_bone_marrow%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 14:03 UTC</sub>
