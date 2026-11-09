<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Selenic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/&quot;},{&quot;label&quot;:&quot;Robinson_1997 \u00b7 placebo_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SelenicAcid_Lanctt2017_sevi&quot;,&quot;label&quot;:&quot;Lanct\u00f4t_2017_sevi&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/SelenicAcid_Lanctt2017_sevi.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SelenicAcid_Jger20162_reference&quot;,&quot;label&quot;:&quot;J\u00e4ger_2016_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/SelenicAcid_Jger20162_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SelenicAcid_Lanctt2017_seiv&quot;,&quot;label&quot;:&quot;Lanct\u00f4t_2017_seiv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_selenic_acid/SelenicAcid_Lanctt2017_seiv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Selenic acid — `SelenicAcid_Robinson1997_placebo_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Selenic acid" model-id="SelenicAcid_Robinson1997_placebo_mean" status="rejected" stale="false" population="New Zealand women" measured-compound="Total Selenium" parameterization="mechanistic" topology="1C"></div>

## Citation
Robinson MF, Thomson CD, Jenkinson CP, Luzhen G, Whanger PD. Long-term supplementation with selenate and selenomethionine: urinary excretion by New Zealand women. The British journal of nutrition 77(4):551–563 (1997).
  ·  DOI: [10.1079/bjn19970056](https://doi.org/10.1079/bjn19970056)

## Population and dosing

**Population:** New Zealand women · condition chronic dietary exposure · age group adult · n = 31.

**Dosed compound ≠ measured compound:** dosed Selenate, measured Total Selenium.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Renal plasma clearance of Se (ml/min) | CLR | 0.13 | ml/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

Extracted — selenic acid: CLR 0.13 ml/min.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Renal plasma clearance of Se (ml/min) | `Q26` · CLR | 0.13 | ml/min | 2.167e-09 | m3/s | ml/min | llm_corrected (0.6) | Robinson_1997_table_1:row8:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age (years)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row0:col5'])
- dropped unlinked row (NIL): 'Height (m)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row1:col5'])
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row2:col5'])
- dropped unlinked row (NIL): 'BMI (kg/m²)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row3:col5'])
- dropped unlinked row (NIL): 'Plasma Se (ng/ml)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row4:col5'])
- dropped 'Urine Se (µg/d)' → Q91: an excretion rate in 'µg/d' — an observation, not a model parameter
- dropped unlinked row (NIL): 'Creatinine (mmol/d)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row6:col5'])
- dropped unlinked row (NIL): 'Urine Se/creatinine (µg/mmol)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row7:col5'])
- dropped unlinked row (NIL): 'TMSe† (µg Se/d)' — extend the ontology if this is a real PK parameter (source ['Robinson_1997_table_1:row9:col5'])
- table mostly unlinked (8/9 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Total Selenium
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'placebo (n 19) mean' subgroup of Robinson_1997 (paper reports 5 populations: placebo (n 10) tmse/set† (%), placebo (n 19) mean, selenate (n 10) mean, semet (n 12) mean, semet (n 13) tmse/set† (%))
- molar mass: none found for 'Total Selenium' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Total Selenium', not selenic_acid — the review values are the parent's

**Extraction notes:**
- table Robinson_1997_table_2: unbound_uncertainty
- table Robinson_1997_table_2: missing_label
- companion parameter table 2 transcribed (18 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Robinson_1997_table_1:row8:col5'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselenic_acid%5D%20SelenicAcid_Robinson1997_placebo_mean&body=Drug%3A%20selenic_acid%0ARecord%3A%20SelenicAcid_Robinson1997_placebo_mean%0APaper%3A%20Robinson_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_selenic_acid/SelenicAcid_Robinson1997_placebo_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 22:45 UTC</sub>
