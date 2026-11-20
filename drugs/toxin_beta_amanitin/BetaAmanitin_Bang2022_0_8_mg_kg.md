<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;beta-Amanitin&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_amanitin/&quot;},{&quot;label&quot;:&quot;Bang_2022 \u00b7 0_8_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BetaAmanitin_Bang2022_10_mg_kg&quot;,&quot;label&quot;:&quot;Bang_2022_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_amanitin/BetaAmanitin_Bang2022_10_mg_kg.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BetaAmanitin_Bang2022_2_mg_kg&quot;,&quot;label&quot;:&quot;Bang_2022_2_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_amanitin/BetaAmanitin_Bang2022_2_mg_kg.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BetaAmanitin_Bang2022_5_mg_kg&quot;,&quot;label&quot;:&quot;Bang_2022_5_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_amanitin/BetaAmanitin_Bang2022_5_mg_kg.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BetaAmanitin_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_amanitin/BetaAmanitin_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# beta-Amanitin — `BetaAmanitin_Bang2022_0_8_mg_kg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="beta-Amanitin" model-id="BetaAmanitin_Bang2022_0_8_mg_kg" status="rejected" stale="false" population="male ICR mice" measured-compound="beta-Amanitin" parameterization="mechanistic" topology="1C"></div>

## Citation
Bang YY, Song IS, Lee MS, Lim CH, Cho YY, Lee JY et al. Toxicokinetics of β-Amanitin in Mice and In Vitro Drug-Drug Interaction Potential. Pharmaceutics 14(4) (2022).
  ·  DOI: [10.3390/pharmaceutics14040774](https://doi.org/10.3390/pharmaceutics14040774)

## Population and dosing

**Population:** male ICR mice · condition healthy · age group adult.

**Dosing:** 14, 28, 56, 140, 350, 700 mg, mixed, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C0 (ng/mL) | C0 | 3249.6 | ng/mL |
| AUClast (ng⋅min/mL) | AUClast | 46135.8 | ng⋅min/mL |
| AUCinf (ng⋅min/mL) | AUC∞ | 46253.2 | ng⋅min/mL |
| CL (mL/min/kg) | CL | 18.8 | mL/min/kg |
| Vss (mL/kg) | Vss | 390.1 | mL/kg |
| t1/2 (min) | t1/2z | 33.6 | min |
| MRT (min) | MRT | 20.7 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C0 (ng/mL) | `Q86` · C0 | 3249.6 | ng/mL |  |  | ng/ml | exact (1) | Bang_2022_table_2:row0:col3 |
| AUClast (ng⋅min/mL) | `Q74` · AUClast | 46135.8 | ng⋅min/mL | 2.768 | kg*s/m3 | (min·ng)/ml | exact (1) | Bang_2022_table_2:row1:col3 |
| AUCinf (ng⋅min/mL) | `Q17` · AUC∞ | 46253.2 | ng⋅min/mL | 2.775 | kg*s/m3 | (min·ng)/ml | exact (1) | Bang_2022_table_2:row2:col3 |
| CL (mL/min/kg) | `Q22` · CL | 18.8 | mL/min/kg | 2.193e-05 | m3/s | ml/(min·kg) | exact (1) | Bang_2022_table_2:row3:col3 |
| Vss (mL/kg) | `Q65` · Vss | 390.1 | mL/kg | 0.02731 | m3 | ml/kg | exact (1) | Bang_2022_table_2:row4:col3 |
| t1/2 (min) | `Q57` · t1/2z | 33.6 | min | 2016 | s | min | half_life_rule (0.95) | Bang_2022_table_2:row5:col3 |
| MRT (min) | `Q53` · MRT | 20.7 | min | 1242 | s | min | exact (1) | Bang_2022_table_2:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=beta-Amanitin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: '0.8 mg/kg (n = 7)' subgroup of Bang_2022 (paper reports 6 populations: 0.2 mg/kg (n = 8), 0.4 mg/kg (n = 6), 0.8 mg/kg (n = 7), 10 mg/kg (n = 7), 2 mg/kg (n = 7), 5 mg/kg (n = 9))

**Extraction notes:**
- companion parameter table 2 transcribed (21 record(s))
- table Bang_2022_table_3: ambiguous_numeric_format
- companion parameter table 3 transcribed (18 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Bang_2022_table_2:row2:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bang_2022_table_2:row3:col3'] |
| C5_dimension_Q53 | pass | [time] |  | ['Bang_2022_table_2:row6:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bang_2022_table_2:row5:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Bang_2022_table_2:row4:col3'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Bang_2022_table_2:row1:col3'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) | ['Bang_2022_table_2:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.8 | ['Bang_2022_table_2:row3:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 79 L/h | ['Bang_2022_table_2:row3:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 27.3 L | ['Bang_2022_table_2:row4:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbeta_amanitin%5D%20BetaAmanitin_Bang2022_0_8_mg_kg&body=Drug%3A%20beta_amanitin%0ARecord%3A%20BetaAmanitin_Bang2022_0_8_mg_kg%0APaper%3A%20Bang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_beta_amanitin/BetaAmanitin_Bang2022_0_8_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 17:22 UTC</sub>
