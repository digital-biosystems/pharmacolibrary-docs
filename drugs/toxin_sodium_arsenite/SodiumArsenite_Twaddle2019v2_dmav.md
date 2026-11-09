<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium arsenite&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/&quot;},{&quot;label&quot;:&quot;Twaddle_2019_2 \u00b7 dmav&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumArsenite_Hershberger2026_reference&quot;,&quot;label&quot;:&quot;Hershberger_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/SodiumArsenite_Hershberger2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumArsenite_Leffler1984_reference&quot;,&quot;label&quot;:&quot;Leffler_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenite/SodiumArsenite_Leffler1984_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium arsenite — `SodiumArsenite_Twaddle2019v2_dmav`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit nM x h ([length] * [time]) vs [mass] * [time] / [length] ** 3; Q32 unit nM ([length]) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Sodium arsenite" model-id="SodiumArsenite_Twaddle2019v2_dmav" status="rejected" stale="false" population="neonatal CD-1 mice" measured-compound="arsenic species (As(III), As(V), MMA, DMA)" parameterization="mechanistic" topology="retention"></div>

## Citation
Twaddle NC, Vanlandingham M, Beland FA, Fisher JW, Doerge DR. Metabolism and disposition of arsenic species from oral dosing with sodium arsenite in neonatal CD-1 mice. IV. Toxicokinetics following gavage administration and lactational transfer. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 123:28–41 (2019).
  ·  DOI: [10.1016/j.fct.2018.10.046](https://doi.org/10.1016/j.fct.2018.10.046)

## Population and dosing

**Population:** neonatal CD-1 mice · condition healthy · age group neonate · n = 36.

**Dosed compound ≠ measured compound:** dosed sodium arsenite, measured arsenic species (As(III), As(V), MMA, DMA).

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2Elim (h) | t1/2z | 1.6 | h |
| AUC0-∞ (nM x h) | AUC∞ | 529 | nM x h |
| Cmax (nM) | Cmax | 135 | nM |
| Tmax (h) | tmax | 1 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit nM x h ([length] * [time]) vs [mass] * [time] / [length] ** 3; Q32 unit nM ([length]) vs [mass] / [length] ** 3.**

A reported unit could not be converted (AUC∞ and Cmax), so that value has no SI equivalent. Extracted — sodium arsenite: t1/2z 1.6 h, AUC∞ 529 nM x h, Cmax 135 nM, tmax 1 h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2Elim (h) | `Q57` · t1/2z | 1.6 | h | 5760 | s | h | half_life_rule (0.95) | Twaddle_2019_2_table_2:row0:col1, Twaddle_2019_2_table_3:row0:col1, Twaddle_2019_2_table_4:row0:col1 |
| AUC0-∞ (nM x h) | `Q17` · AUC∞ | 529 | nM x h |  |  | h·nM | exact (1) | Twaddle_2019_2_table_2:row0:col2, Twaddle_2019_2_table_3:row0:col2, Twaddle_2019_2_table_4:row0:col2 |
| Cmax (nM) | `Q32` · Cmax | 135 | nM |  |  | nM | exact (1) | Twaddle_2019_2_table_2:row0:col3, Twaddle_2019_2_table_3:row0:col3, Twaddle_2019_2_table_4:row0:col3 |
| Tmax (h) | `Q56` · tmax | 1 | h | 3600 | s | h | exact (1) | Twaddle_2019_2_table_2:row0:col4, Twaddle_2019_2_table_3:row0:col4, Twaddle_2019_2_table_4:row0:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC0-∞ (nM x h)' → Q17 (unit '[length] * [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Cmax (nM)' → Q32 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=arsenic species (As(III), As(V), MMA, DMA)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 4 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'dmav' subgroup of Twaddle_2019_2 (paper reports 13 populations: adult, asi-bound, asiii, asv, dmaiii, dmatri, dmav, mmaiii, mmatri, mmav, pnd 10, pnd 21, pnd 3)
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'As(III)' ('As(III)') — left in mass units
- molar mass: no plausible PubChem entry for 'MMA(V)' ('MMA(V)') — left in mass units
- molar mass: no plausible PubChem entry for 'arsenic species (As(III), As(V), MMA, DMA)' ('arsenic species (As(III), As(V), MMA, DMA)') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'As(V)' (LLM) — left in mass units
- molar mass: none found for 'As(III)' — its concentrations stay mass-only
- molar mass: none found for 'As(V)' — its concentrations stay mass-only
- molar mass: none found for 'MMA(V)' — its concentrations stay mass-only
- molar mass: none found for 'arsenic species (As(III), As(V), MMA, DMA)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'arsenic species (As(III), As(V), MMA, DMA)', not sodium_arsenite — the review values are the parent's

**Extraction notes:**
- transposed table Twaddle_2019_2_table_2: logical view retains original source coordinates
- transposed table Twaddle_2019_2_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (70 record(s))
- transposed table Twaddle_2019_2_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (28 record(s))
- transposed table Twaddle_2019_2_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (24 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | nM x h ([length] * [time]) | ['Twaddle_2019_2_table_2:row0:col2', 'Twaddle_2019_2_table_3:row0:col2', 'Twaddle_2019_2_table_4:row0:col2'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | nM ([length]) | ['Twaddle_2019_2_table_2:row0:col3', 'Twaddle_2019_2_table_3:row0:col3', 'Twaddle_2019_2_table_4:row0:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Twaddle_2019_2_table_2:row0:col4', 'Twaddle_2019_2_table_3:row0:col4', 'Twaddle_2019_2_table_4:row0:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Twaddle_2019_2_table_2:row0:col1', 'Twaddle_2019_2_table_3:row0:col1', 'Twaddle_2019_2_table_4:row0:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_arsenite%5D%20SodiumArsenite_Twaddle2019v2_dmav&body=Drug%3A%20sodium_arsenite%0ARecord%3A%20SodiumArsenite_Twaddle2019v2_dmav%0APaper%3A%20Twaddle_2019_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_arsenite/SodiumArsenite_Twaddle2019v2_dmav%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 23:38 UTC</sub>
