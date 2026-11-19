<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Tetrabromodiphenyl ethers&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/&quot;},{&quot;label&quot;:&quot;Gayrard_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Bloch2024_reference&quot;,&quot;label&quot;:&quot;Bloch_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Bloch2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Muirhead2006_reference&quot;,&quot;label&quot;:&quot;Muirhead_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Muirhead2006_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Drouillard2007_reference&quot;,&quot;label&quot;:&quot;Drouillard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Drouillard2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TetrabromodiphenylEthers_Staskal2005_reference&quot;,&quot;label&quot;:&quot;Staskal_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Staskal2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tetrabromodiphenyl ethers — `TetrabromodiphenylEthers_Gayrard2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> The record was rejected because the intercompartmental clearance for BDE-47 was extracted as a rate constant in 1/h instead of a clearance in L/h.

<div class="pk-model-meta" hidden drug="Tetrabromodiphenyl ethers" model-id="TetrabromodiphenylEthers_Gayrard2021_reference" status="rejected" stale="false" population="rabbits" measured-compound="2,2′4,4′-tetrabromodiphenyl ether (BDE-47)" parameterization="mechanistic" topology="1C"></div>

## Citation
Gayrard V, Moreau J, Picard-Hagen N, Helies V, Marchand P, Antignac JP et al. Use of Mixture Dosing and Nonlinear Mixed Effect Modeling of Eight Environmental Contaminants in Rabbits to Improve Extrapolation Value of Toxicokinetic Data. Environmental health perspectives 129(11):117006 (2021).
  ·  DOI: [10.1289/EHP8957](https://doi.org/10.1289/EHP8957)

## Population and dosing

**Population:** rabbits · condition healthy · age group adult.

**Dosing:** 0.09, 0.1, 0.13, 0.5, 0.82, 0.94, 1, 1.1, 1.9, 2.5, 2.8, 2.9, 4.4, 4.9, 5.6, 7, 10, 12, 14, 26, 38.5, 44, 46, 48, 96, 122, 258, 287, 770 mg/mL, oral, multiple, every 24 h.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| tvVc (L/kg) | V | 2.820971 | L/kg |
| tvK10 (1/h) | kel | 0.047802 | 1/h |
| tvK12 (1/h) | Q | 0.083525 | 1/h |
| tvKabs (1/h) | kabs | 0.019943 | 1/h |
| tvf | Fab | 0.948991 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the intercompartmental clearance for BDE-47 was extracted as a rate constant in 1/h instead of a clearance in L/h.**

The intercompartmental clearance is reported with the unit 1/h, which is dimensionally inconsistent with the required [length]**3/[time] (L/h) and could not be converted to SI. This unit error prevents the correct calculation of drug transfer between the central and peripheral compartments. Extracted — tetrabromodiphenyl ethers: V 2.82 L/kg, kel 0.0478 1/h, Q 0.0835 1/h, kabs 0.0199 1/h, Fab 0.949.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| tvVc (L/kg) | `Q61` · V | 2.820971 | L/kg | 0.1975 | m3 | l/kg | tv_prefix (0.95) | Gayrard_2021_table_S4:row0:col1, Gayrard_2021_table_S5:row0:col1, Gayrard_2021_table_S6:row0:col1 |
| tvK10 (1/h) | `Q47` · kel | 0.047802 | 1/h | 1.328e-05 | 1/s | 1/h | exact (1) | Gayrard_2021_table_S4:row1:col1, Gayrard_2021_table_S5:row1:col1, Gayrard_2021_table_S6:row1:col1 |
| tvK12 (1/h) | `Q30` · Q | 0.083525 | 1/h |  |  | 1/h | exact (1) | Gayrard_2021_table_S4:row2:col1, Gayrard_2021_table_S5:row2:col1, Gayrard_2021_table_S6:row2:col1 |
| tvKabs (1/h) | `Q49` · kabs | 0.019943 | 1/h | 5.54e-06 | 1/s | 1/h | exact (1) | Gayrard_2021_table_S4:row4:col1, Gayrard_2021_table_S5:row4:col1, Gayrard_2021_table_S6:row4:col1 |
| tvf | `Q40` · Fab | 0.948991 |  | 0.949 |  |  | tv_prefix (0.95) | Gayrard_2021_table_S4:row5:col1, Gayrard_2021_table_S5:row5:col1, Gayrard_2021_table_S6:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'tvK12 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'tvK21 (1/h)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('tvK21 (1/h)', value '0.00729') — already have one for this compound
- dropped unlinked row (NIL): 'tvCMultStdev' — extend the ontology if this is a real PK parameter (source ['Gayrard_2021_table_S4:row6:col1', 'Gayrard_2021_table_S5:row6:col1', 'Gayrard_2021_table_S6:row6:col1'])
- dropped unlinked row (NIL): 'Stdev0' — extend the ontology if this is a real PK parameter (source ['Gayrard_2021_table_S4:row7:col1', 'Gayrard_2021_table_S5:row7:col1', 'Gayrard_2021_table_S6:row7:col1'])
- routed 'Stdev1' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: 'V1'
- dropped value-less row: 'V2'
- dropped value-less row: 'Kabs'
- dropped value-less row: 'K12'
- dropped value-less row: 'K21'
- dropped value-less row: 'K10'
- dropped value-less row: 'F%'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=2,2′4,4′-tetrabromodiphenyl ether (BDE-47)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'tvVc (L/kg)' is the general volume)
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 21 linked by role
- molar mass: no plausible PubChem entry for 'di(2ethylhexyl)phthalate (DEHP)' ('di(2ethylhexyl)phthalate') — left in mass units
- molar mass: no plausible PubChem entry for 'mono-2-ethylhexyl phthalate (MEHP)' ('no full name in the paper') — left in mass units
- molar mass: none found for 'di(2ethylhexyl)phthalate (DEHP)' — its concentrations stay mass-only
- molar mass: none found for 'mono-2-ethylhexyl phthalate (MEHP)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S5 transcribed (24 record(s))
- companion parameter table S6 transcribed (27 record(s))
- LLM selected parameter table(s) 4, S4, S5, S6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | 1/h (1 / [time]) | ['Gayrard_2021_table_S4:row2:col1', 'Gayrard_2021_table_S5:row2:col1', 'Gayrard_2021_table_S6:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Gayrard_2021_table_S4:row1:col1', 'Gayrard_2021_table_S5:row1:col1', 'Gayrard_2021_table_S6:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gayrard_2021_table_S4:row4:col1', 'Gayrard_2021_table_S5:row4:col1', 'Gayrard_2021_table_S6:row4:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Gayrard_2021_table_S4:row0:col1', 'Gayrard_2021_table_S5:row0:col1', 'Gayrard_2021_table_S6:row0:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 197 L | ['Gayrard_2021_table_S4:row0:col1', 'Gayrard_2021_table_S5:row0:col1', 'Gayrard_2021_table_S6:row0:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btetrabromodiphenyl_ethers%5D%20TetrabromodiphenylEthers_Gayrard2021_reference&body=Drug%3A%20tetrabromodiphenyl_ethers%0ARecord%3A%20TetrabromodiphenylEthers_Gayrard2021_reference%0APaper%3A%20Gayrard_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tetrabromodiphenyl_ethers/TetrabromodiphenylEthers_Gayrard2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 06:27 UTC</sub>
