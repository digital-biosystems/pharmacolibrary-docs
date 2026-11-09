<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Mercury(II) sulfide&quot;,&quot;href&quot;:&quot;drugs/toxin_mercuryii_sulfide/&quot;},{&quot;label&quot;:&quot;Wu_2022 \u00b7 mercury&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mercury(II) sulfide — `MercuryIiSulfide_Wu2022_mercury`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record for mercuryii sulfide was rejected because it contains no kinetic parameters such as clearance, volume, or half-life.

<div class="pk-model-meta" hidden drug="Mercury(II) sulfide" model-id="MercuryIiSulfide_Wu2022_mercury" status="rejected" stale="false" population="rats" measured-compound="Mercury" parameterization="mechanistic" topology="1C"></div>

## Citation
Wu X, Zhong Z, Lin K, Liu X, Wu Z, Liu Z et al. Comparative pharmacokinetics and urinary excretion of arsenic and mercury after oral administration of realgar, cinnabar and AnGongNiuHuang Pill to rats. Frontiers in pharmacology 13:967608 (2022).
  ·  DOI: [10.3389/fphar.2022.967608](https://doi.org/10.3389/fphar.2022.967608)

## Population and dosing

**Population:** rats · condition oral administration · age group adult.

**Dosing:** 21595, 107975 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Cinnabar (Mercury(II) sulfide) and AnGongNiuHuang Pill, measured Mercury.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Delay period (s) | tlag | 6 | s |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for mercuryii sulfide was rejected because it contains no kinetic parameters such as clearance, volume, or half-life.**

The model structure defines only a single absorption delay period of 6 seconds for Mercury in rats. No rate constants, volumes of distribution, or clearances were extracted from the source material. This lack of kinetic data prevents the model from describing drug disposition or exposure. Extracted — Mercury: tlag 6 s.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Delay period (s) | `Q83` · tlag | 6 | s | 6 | s | s | llm (0.6) | T1:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Detection wavelength (nm)' — extend the ontology if this is a real PK parameter (source ['T1:row1:col2'])
- dropped unlinked row (NIL): 'Lamp current (mA)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col2'])
- 'Negative high-voltage (V)': unit 'V' is a parameter symbol — dropped
- dropped unlinked row (NIL): 'Negative high-voltage (V)' — extend the ontology if this is a real PK parameter (source ['T1:row3:col2'])
- dropped unlinked row (NIL): 'Atomizer height (mm)' — extend the ontology if this is a real PK parameter (source ['T1:row4:col2'])
- dropped unlinked row (NIL): 'Analysis period (s)' — extend the ontology if this is a real PK parameter (source ['T1:row7:col2'])
- dropped unlinked row (NIL): 'Carrier solution' — extend the ontology if this is a real PK parameter (source ['T1:row10:col2'])
- dropped unlinked row (NIL): 'Reducing agent' — extend the ontology if this is a real PK parameter (source ['T1:row11:col2'])
- table mostly unlinked (7/8 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Mercury
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'mercury' subgroup of Wu_2022 (paper reports 7 populations: agnhp (1542.5 mg/kg), agnhp (308.5 mg/kg), cinnabar (10.4 mg/kg), cinnabar (52.1 mg/kg), mercury, realgar (18.0 mg/kg), realgar (90.0 mg/kg))
- molar mass: none of 1 PubChem candidate(s) is 'Mercury' (LLM) — left in mass units
- molar mass: none found for 'Mercury' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Mercury', not mercuryii_sulfide — the review values are the parent's

**Extraction notes:**
- companion parameter table 2 transcribed (16 record(s))
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q83 | pass | [time] |  | ['T1:row8:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmercuryii_sulfide%5D%20MercuryIiSulfide_Wu2022_mercury&body=Drug%3A%20mercuryii_sulfide%0ARecord%3A%20MercuryIiSulfide_Wu2022_mercury%0APaper%3A%20Wu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mercuryii_sulfide/MercuryIiSulfide_Wu2022_mercury%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 13:19 UTC</sub>
