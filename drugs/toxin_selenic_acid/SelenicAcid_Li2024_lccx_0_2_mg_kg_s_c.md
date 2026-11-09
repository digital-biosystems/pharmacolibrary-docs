<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Selenic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/&quot;},{&quot;label&quot;:&quot;Li_2024 \u00b7 lccx_0_2_mg_kg_s_c&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SelenicAcid_Lanctt2017_sevi&quot;,&quot;label&quot;:&quot;Lanct\u00f4t_2017_sevi&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/SelenicAcid_Lanctt2017_sevi.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SelenicAcid_Jger20162_reference&quot;,&quot;label&quot;:&quot;J\u00e4ger_2016_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/SelenicAcid_Jger20162_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SelenicAcid_Lanctt2017_seiv&quot;,&quot;label&quot;:&quot;Lanct\u00f4t_2017_seiv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/SelenicAcid_Lanctt2017_seiv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Selenic acid — `SelenicAcid_Li2024_lccx_0_2_mg_kg_s_c`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Selenic acid" model-id="SelenicAcid_Li2024_lccx_0_2_mg_kg_s_c" status="rejected" stale="false" population="naïve rats" measured-compound="Selenium" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Li C, Casillas-Espinosa PM, Saletti PG, Chi T, Yamakawa G, Silva J et al. Pharmacokinetics and brain uptake of sodium selenate and selenium in naïve rats and a lateral fluid percussion injury rat model. Pharmacology research & perspectives 12(6):e1256 (2024).
  ·  DOI: [10.1002/prp2.1256](https://doi.org/10.1002/prp2.1256)

## Population and dosing

**Population:** naïve rats · condition healthy · age group adult.

**Dosing:** 2.8, 14, 70 mg, s.c., i.p., single.

**Dosed compound ≠ measured compound:** dosed Sodium selenate, measured Selenium.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUCbrain (h × μg/mL) | AUC | 590.1 | h × μg/mL |
| AUCbrain/AUCplasma | AUC ratio | 0.9502 |  |
| AUCbrain (h × ng/mL) | AUCt | 1160 | h × ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

Extracted — selenic acid: AUC 590 h × μg/mL; Sodium selenate: AUC ratio 0.95; Selenium: AUCt 1.16e+03 h × ng/mL.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUCbrain (h × μg/mL) | `Q88` · AUC | 590.1 | h × μg/mL | 2124 | kg*s/m3 | (h·µg)/ml | llm (0.6) | Li_2024_table_3:row0:col3 |
| AUCbrain/AUCplasma | `Q21` · AUC ratio | 0.9502 |  | 0.9502 |  |  | llm (0.6) | Li_2024_table_3:row2:col3, Li_2024_table_4:row2:col3 |
| AUCbrain (h × ng/mL) | `Q19` · AUCt | 1160 | h × ng/mL | 4.176 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Li_2024_table_4:row0:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'SE (h × μg/mL)' — extend the ontology if this is a real PK parameter (source ['Li_2024_table_3:row1:col3'])
- dropped unlinked row (NIL): 'SE (h × ng/mL)' — extend the ontology if this is a real PK parameter (source ['Li_2024_table_4:row1:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Selenium
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'lccx 0.2 mg/kg s.c.' subgroup of Li_2024 (paper reports 6 populations: lccx 0.04 mg/kg s.c., lccx 0.2 mg/kg s.c., lccx 1 mg/kg i.p., rccx 0.04 mg/kg s.c., rccx 0.2 mg/kg s.c., rccx 1 mg/kg i.p.)
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged Sodium selenate→parent ×12, Sodium selenate→Selenium ×12
- review gap-fill skipped: this record measures 'Selenium', not selenic_acid — the review values are the parent's

**Extraction notes:**
- final table prp21256-tbl-0001: no supported point estimates; targeted recovery unresolved
- companion parameter table 2 transcribed (11 record(s))
- companion parameter table 3 transcribed (18 record(s))
- companion parameter table 4 transcribed (18 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Li_2024_table_4:row0:col3'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  | ['Li_2024_table_3:row0:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselenic_acid%5D%20SelenicAcid_Li2024_lccx_0_2_mg_kg_s_c&body=Drug%3A%20selenic_acid%0ARecord%3A%20SelenicAcid_Li2024_lccx_0_2_mg_kg_s_c%0APaper%3A%20Li_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_selenic_acid/SelenicAcid_Li2024_lccx_0_2_mg_kg_s_c%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 22:45 UTC</sub>
