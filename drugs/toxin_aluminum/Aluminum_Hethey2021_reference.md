<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Aluminum&quot;,&quot;href&quot;:&quot;drugs/toxin_aluminum/&quot;},{&quot;label&quot;:&quot;Hethey_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aluminum_Jones1986_reference&quot;,&quot;label&quot;:&quot;Jones_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aluminum/Aluminum_Jones1986_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aluminum — `Aluminum_Hethey2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> Record rejected because it lacks kinetic parameters like clearance or volume, and contains a non-SI unit 'N' for partition and bioavailability terms.

<div class="pk-model-meta" hidden drug="Aluminum" model-id="Aluminum_Hethey2021_reference" status="rejected" stale="false" population="Male and female humans (reference individuals), young and old rats" measured-compound="Aluminum (26Al)" parameterization="mechanistic" topology="1C"></div>

## Citation
Hethey C, Hartung N, Wangorsch G, Weisser K, Huisinga W. Physiology-based toxicokinetic modelling of aluminium in rat and man. Archives of toxicology 95(9):2977–3000 (2021).
  ·  DOI: [10.1007/s00204-021-03107-y](https://doi.org/10.1007/s00204-021-03107-y)

## Population and dosing

**Population:** Male and female humans (reference individuals), young and old rats · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Aluminum citrate, Aluminum chloride, measured Aluminum (26Al).

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k_gut2blo | FG | 1.34 | N |
| F | Fab | 1.03 |  |
| I_bon | equation variable | 0.763 | N |
| K_bra | blood_air_partition | 0 | N |
| fu_Cit | fu | 0 | N |
| GFR_rat,old | CLR | 0.127 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because it lacks kinetic parameters like clearance or volume, and contains a non-SI unit 'N' for partition and bioavailability terms.**

The record provides a gut-wall bioavailability (FG) of 1.34 and a blood-air partition coefficient of 0, both with the unconvertible unit 'N'. It also reports an absolute bioavailability (Fab) of 1.03 and a renal clearance (CLR) of 0.127 L/h for old rats, but these represent static exposure metrics rather than the kinetic rate constants or distribution volumes required for PK modeling. Extracted — aluminum: FG 1.34 N, Fab 1.03, blood_air_partition 0 N, fu 0 N, CLR 0.127 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k_gut2blo | `Q41` · FG | 1.34 | N |  |  | n | llm (0.6) | Hethey_2021_table_4:row1:col1, Hethey_2021_table_4:row1:col3 |
| F | `Q40` · Fab | 1.03 |  |  |  |  | exact (1) | Hethey_2021_table_4:row3:col1, Hethey_2021_table_4:row3:col3 |
| I_bon | `Q900` · equation variable | 0.763 | N |  |  | n | llm (0.6) | Hethey_2021_table_4:row7:col1, Hethey_2021_table_4:row7:col3 |
| K_bra | `Q411` · blood_air_partition | 0 | N |  |  | n | llm (0.6) | Hethey_2021_table_4:row14:col3 |
| fu_Cit | `Q46` · fu | 0 | N |  |  | n | llm (0.6) | Hethey_2021_table_4:row19:col1, Hethey_2021_table_4:row19:col3 |
| GFR_rat,old | `Q26` · CLR | 0.127 | L/h | 3.528e-08 | m3/s | L/h | llm (0.6) | Hethey_2021_table_4:row23:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| bioavailability | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'dose in mol/kg' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'duration in days' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'N' (FG)
- dropped unlinked row (NIL): 'I_lsk' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row5:col1', 'Hethey_2021_table_4:row5:col3'])
- dropped unlinked row (NIL): 'I_mus' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row6:col1', 'Hethey_2021_table_4:row6:col3'])
- unit_dimension_unknown: 'N' (equation variable)
- dropped duplicate Q900 ('I_bra', value '0') — already have one for this compound
- dropped unlinked row (NIL): 'I_rob' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row9:col1', 'Hethey_2021_table_4:row9:col3'])
- dropped unlinked row (NIL): 'K_lsk' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row11:col3'])
- dropped unlinked row (NIL): 'K_mus' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row12:col1', 'Hethey_2021_table_4:row12:col3'])
- dropped unlinked row (NIL): 'K_bon' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row13:col3'])
- unit_dimension_unknown: 'N' (blood_air_partition)
- dropped 'K_rob' → Q306 = 0: a rate of 0 is not a parameter value (source ['Hethey_2021_table_4:row15:col1', 'Hethey_2021_table_4:row15:col3'])
- dropped unlinked row (NIL): 'k_Cit2Mix' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row17:col1', 'Hethey_2021_table_4:row17:col3'])
- unit_dimension_unknown: 'N' (fu)
- dropped duplicate Q46 ('fu_Mix', value '0') — already have one for this compound
- dropped unlinked row (NIL): 'GFR_rat,young' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row22:col1', 'Hethey_2021_table_4:row22:col3'])
- unit_dimension_unknown: 'N' (CLR)
- dropped unlinked row (NIL): 'GFR_human,male' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row24:col1', 'Hethey_2021_table_4:row24:col3'])
- dropped unlinked row (NIL): 'GFR_human,female' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row25:col1'])
- dropped unlinked row (NIL): 'BP' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_4:row27:col3'])
- dropped unlinked row (NIL): 'Yokei2001b-AlCit-po-rat-softwater-280g*' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_3:row0:col1', 'Hethey_2021_table_3:row0:col10', 'Hethey_2021_table_3:row0:col11'])
- dropped unlinked row (NIL): 'Zafar1997-AlCit-po-rat-170g*' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_3:row1:col2', 'Hethey_2021_table_3:row1:col3', 'Hethey_2021_table_3:row1:col4', 'Hethey_2021_table_3:row1:col6', 'Hethey_2021_table_3:row1:col8', 'Hethey_2021_table_3:row1:col10', 'Hethey_2021_table_3:row1:col11'])
- dropped unlinked row (NIL): 'Zhou2008-AlCit-po-rat-270g' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_3:row2:col1', 'Hethey_2021_table_3:row2:col10', 'Hethey_2021_table_3:row2:col11'])
- dropped unlinked row (NIL): 'Sums of samples and dose ranges' — extend the ontology if this is a real PK parameter (source ['Hethey_2021_table_3:row3:col1', 'Hethey_2021_table_3:row3:col2', 'Hethey_2021_table_3:row3:col3', 'Hethey_2021_table_3:row3:col4', 'Hethey_2021_table_3:row3:col5', 'Hethey_2021_table_3:row3:col6', 'Hethey_2021_table_3:row3:col7', 'Hethey_2021_table_3:row3:col8', 'Hethey_2021_table_3:row3:col9', 'Hethey_2021_table_3:row3:col10'])
- implicit units: 'GFR_rat,old' → L/h (from the paper text: "The text states: 'GFR for rats was allometrically scaled according to GFR=SFunit×GFRref×(BW/BWref)3/4 ... the scaling fa")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Aluminum (26Al)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Aluminum (26Al)' ('Aluminum (26Al)') — left in mass units
- molar mass: none found for 'Aluminum (26Al)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Hethey_2021_table_4: unbound_uncertainty
- table Hethey_2021_table_4: unparsed_numeric_cell
- table Hethey_2021_table_3: units_need_context
- companion parameter table 3 transcribed (23 record(s))
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Hethey_2021_table_4:row23:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baluminum%5D%20Aluminum_Hethey2021_reference&body=Drug%3A%20aluminum%0ARecord%3A%20Aluminum_Hethey2021_reference%0APaper%3A%20Hethey_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aluminum/Aluminum_Hethey2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 09:14 UTC</sub>
