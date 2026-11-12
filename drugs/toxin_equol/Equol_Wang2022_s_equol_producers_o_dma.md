<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Equol&quot;,&quot;href&quot;:&quot;drugs/toxin_equol/&quot;},{&quot;label&quot;:&quot;Wang_2022 \u00b7 s_equol_producers_o_dma&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Equol_Setchell2009_reference&quot;,&quot;label&quot;:&quot;Setchell_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_equol/Equol_Setchell2009_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Equol_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_equol/Equol_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Equol — `Equol_Wang2022_s_equol_producers_o_dma`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.40).">human + animal</span>

> The model was rejected because the maximum reaction rate unit (μmol/(h g) feces) and the Michaelis constant unit (μM) could not be converted to standard concentration or mass/time dimensions.

<div class="pk-model-meta" hidden drug="Equol" model-id="Equol_Wang2022_s_equol_producers_o_dma" status="rejected" stale="false" population="Humans (S-equol producers and nonproducers)" measured-compound="Daidzein" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Wang Q, Spenkelink B, Boonpawa R, Rietjens IMCM. Use of Physiologically Based Pharmacokinetic Modeling to Predict Human Gut Microbial Conversion of Daidzein to S-Equol. Journal of agricultural and food chemistry 70(1):343–352 (2022).
  ·  DOI: [10.1021/acs.jafc.1c03950](https://doi.org/10.1021/acs.jafc.1c03950)

## Population and dosing

**Population:** Humans (S-equol producers and nonproducers) · condition dietary exposure · age group adult · n = 25.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.40).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vmaxa (μmol/(h g) feces) | Vmax | 0.001 | h g |
| Kma (μM) | Km | 18.07 | μM |
| rate constant | kel | 4.56 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.40).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the maximum reaction rate unit (μmol/(h g) feces) and the Michaelis constant unit (μM) could not be converted to standard concentration or mass/time dimensions.**

The extraction assigned the unit 'h g' to the maximum rate of metabolism by an enzymatically mediated reaction, which conflicts with the required mass per time dimension. Similarly, the enzyme affinity parameter was recorded in micromolar concentration, conflicting with the required mass per volume dimension. These dimensional inconsistencies prevent the structural parameters from being validated, and the complex metabolic network exceeds the buildable model structures. Extracted — equol: Vmax 0.001 h g, Km 18.1 μM; Daidzein: kel 4.56 /h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vmaxa (μmol/(h g) feces) | `Q66` · Vmax | 0.001 | h g |  |  | h·g | llm (0.6) | Wang_2022_table_2:row1:col3 |
| Kma (μM) | `Q1` · Km | 18.07 | μM |  |  | µM | llm (0.6) | Wang_2022_table_2:row2:col3 |
| rate constant | `Q47` · kel | 4.56 | /h | 0.001267 | 1/s | 1/h | toxin_unit_relink (0.85) | Wang_2022:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vmaxa (μmol/(h g) feces)' → Q66 (unit '[time] * [mass]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Kma (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'catalytic efficiencyb (mL/(h g) feces)' — extend the ontology if this is a real PK parameter (source ['Wang_2022_table_2:row3:col3'])
- salvaged Q47 ('rate constant'=4.56) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Daidzein
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 's-equol producers / o-dma' subgroup of Wang_2022 (paper reports 11 populations: dhd, o-dma, s-equol, s-equol glucuronide-1, s-equol glucuronide-2, s-equol nonproducers / dhd, s-equol nonproducers / o-dma, s-equol producers / dhd, s-equol producers / o-dma, s-equol producers / s-equol, s-equol sulfate)
- row roles (LLM): model_class=pbpk; 7/7 row label(s) assigned, 0 linked by role; re-tagged Daidzein→S-equol ×48
- review gap-fill skipped: this record measures 'Daidzein', not equol — the review values are the parent's

**Extraction notes:**
- companion parameter table 2 transcribed (15 record(s))
- table Wang_2022_table_5: unknown_column_role
- companion parameter table 5 transcribed (24 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)
- toxin: the located table(s) gave no kinetic value — 6 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | μM ([length]) | ['Wang_2022_table_2:row2:col3'] |
| C5_dimension_Q66 | fail | [mass] / [time] | h g ([time] * [mass]) | ['Wang_2022_table_2:row1:col3'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bequol%5D%20Equol_Wang2022_s_equol_producers_o_dma&body=Drug%3A%20equol%0ARecord%3A%20Equol_Wang2022_s_equol_producers_o_dma%0APaper%3A%20Wang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_equol/Equol_Wang2022_s_equol_producers_o_dma%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 05:08 UTC</sub>
