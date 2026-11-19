<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Oxytetracycline&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/&quot;},{&quot;label&quot;:&quot;Hekman_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_cow&quot;,&quot;label&quot;:&quot;Tardiveau_2022_cow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_goat&quot;,&quot;label&quot;:&quot;Tardiveau_2022_goat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_hemolymph&quot;,&quot;label&quot;:&quot;Uno_2002_hemolymph&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_hemolymph.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_muscle&quot;,&quot;label&quot;:&quot;Uno_2002_muscle&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_muscle.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxytetracycline — `Oxytetracycline_Hekman2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).

<div class="pk-model-meta" hidden drug="Oxytetracycline" model-id="Oxytetracycline_Hekman2021_reference" status="rejected" stale="false" population="steer calves (100 kg young calves and 400 kg older steers)" measured-compound="oxytetracycline" parameterization="mechanistic" topology="1C"></div>

## Citation
Hekman P, Schefferlie J, Gehring R. Modelling Shows the Negative Impact of Age Dependent Pharmacokinetics on the Efficacy of Oxytetracycline in Young Steers. Frontiers in veterinary science 8:821005 (2021).
  ·  DOI: [10.3389/fvets.2021.821005](https://doi.org/10.3389/fvets.2021.821005)

## Population and dosing

**Population:** steer calves (100 kg young calves and 400 kg older steers) · condition healthy (treatment of BRD modelled) · age group mixed · n = 5000.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| blood | Qb | 1 |  |
| kidney | equation variable | 7 |  |
| Meyer et al. (9) | kabs | 100 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper).**

Extracted — oxytetracycline: Qb 1, kabs 100.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| blood | `Q54` · Qb | 1 |  |  | llm (0.6) | T6:row2:col1, T6:row2:col2, T6:row2:col3, T6:row13:col1, T6:row13:col2, T6:row13:col3 |
| kidney | `Q900` · equation variable | 7 |  | 7 | llm (0.6) | T6:row3:col1, T6:row3:col2, T6:row3:col3, T6:row14:col1, T6:row14:col2, T6:row14:col3 |
| Meyer et al. (9) | `Q49` · kabs | 100 |  |  | llm (0.6) | Hekman_2021_table_5:row4:col2, Hekman_2021_table_5:row4:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Kel1 = 220 x 0.0054 x BW−0.47 L/h.kg (20)* | Q47 | llm |
| Rabs overall = 0.17** (30)* | Q40 | llm |

## Departures & gaps

**Interpretation flags:**
- column 'partition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'fvol' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'fco' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'conc otc in product (mg/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'number injection sites' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'rabs (1/h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['T6:row4:col1', 'T6:row4:col2', 'T6:row4:col3', 'T6:row15:col1', 'T6:row15:col2', 'T6:row15:col3'])
- dropped unlinked row (NIL): 'Fat' — extend the ontology if this is a real PK parameter (source ['T6:row5:col1', 'T6:row5:col2', 'T6:row5:col3', 'T6:row16:col1', 'T6:row16:col2', 'T6:row16:col3'])
- dropped unlinked row (NIL): 'Muscle' — extend the ontology if this is a real PK parameter (source ['T6:row6:col1', 'T6:row6:col2', 'T6:row6:col3', 'T6:row17:col1', 'T6:row17:col2', 'T6:row17:col3'])
- dropped unlinked row (NIL): 'Bone forming tissue' — extend the ontology if this is a real PK parameter (source ['T6:row7:col3', 'T6:row18:col3', 'Hekman_2021_table_4:row1:col1', 'Hekman_2021_table_4:row1:col3', 'Hekman_2021_table_4:row5:col1', 'Hekman_2021_table_4:row5:col2', 'Hekman_2021_table_4:row5:col3'])
- dropped unlinked row (NIL): 'Rest of body' — extend the ontology if this is a real PK parameter (source ['T6:row8:col2', 'T6:row8:col3', 'T6:row19:col2', 'T6:row19:col3', 'Hekman_2021_table_4:row2:col1', 'Hekman_2021_table_4:row6:col1'])
- dropped duplicate Q54 ('Steer Calves &gt;200 kg BW; COtot= 5.45 L/h.kg (27)', value None) — already have one for this compound
- dropped unlinked row (NIL): 'Achenbach (13)' — extend the ontology if this is a real PK parameter (source ['Hekman_2021_table_5:row0:col2', 'Hekman_2021_table_5:row0:col5', 'Hekman_2021_table_5:row0:col6', 'Hekman_2021_table_5:row2:col2', 'Hekman_2021_table_5:row2:col5', 'Hekman_2021_table_5:row2:col6'])
- dropped unlinked row (NIL): 'Terhune and Upson (12)' — extend the ontology if this is a real PK parameter (source ['Hekman_2021_table_5:row1:col2', 'Hekman_2021_table_5:row1:col5', 'Hekman_2021_table_5:row1:col6'])
- dropped unlinked row (NIL): 'Toutain and Raynaud (15)' — extend the ontology if this is a real PK parameter (source ['Hekman_2021_table_5:row3:col2', 'Hekman_2021_table_5:row3:col5', 'Hekman_2021_table_5:row3:col6'])
- dropped unlinked row (NIL): 'Nouws and Vree (10)' — extend the ontology if this is a real PK parameter (source ['Hekman_2021_table_5:row5:col2', 'Hekman_2021_table_5:row5:col5', 'Hekman_2021_table_5:row5:col6'])
- dropped value-less row: 'Table 6. Final sets of parameter values [mean (CV%)] for 100–200 kg BW and &gt;200 kg BW steers from literature or after fitting.'
- dropped value-less row: 'Figures in parenthesis are % coefficient of variation.*Lognormal distribution.**Model fitted parameter; estimated by fitting the PBPK model with the pharmacokinetic data. These parameters were marked as “model fitted” (9, 13).'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxytetracycline
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T6: unparsed_numeric_cell
- table Hekman_2021_table_4: units_need_context
- table Hekman_2021_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (7 record(s), model stage 'final')
- table Hekman_2021_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (17 record(s))
- LLM selected parameter table(s) 4, 5, 6
- toxin: the located table(s) gave no kinetic value — 6 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Hekman_2021_table_5:row4:col2', 'Hekman_2021_table_5:row4:col6'] |
| C5_unit_missing_Q54 | fail | [length] ** 3 / [time] |  | ['T6:row2:col1', 'T6:row2:col2', 'T6:row2:col3', 'T6:row13:col1', 'T6:row13:col2', 'T6:row13:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxytetracycline%5D%20Oxytetracycline_Hekman2021_reference&body=Drug%3A%20oxytetracycline%0ARecord%3A%20Oxytetracycline_Hekman2021_reference%0APaper%3A%20Hekman_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxytetracycline/Oxytetracycline_Hekman2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:52 UTC</sub>
