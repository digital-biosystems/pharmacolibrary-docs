<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Benzo[a]pyrene&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/&quot;},{&quot;label&quot;:&quot;Smith_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzoapyrene_Cardoso2024_reference&quot;,&quot;label&quot;:&quot;Cardoso_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Cardoso2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2023_reference&quot;,&quot;label&quot;:&quot;Vermillion_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Weyand1986_reference&quot;,&quot;label&quot;:&quot;Weyand_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Weyand1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzoapyrene_Vermillion2022_reference&quot;,&quot;label&quot;:&quot;Vermillion_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzoapyrene/Benzoapyrene_Vermillion2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Benzo[a]pyrene — `BenzoAPyrene_Smith2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span>

> Vmax and Km for benzo[a]pyrene were recorded with the unit 'a' (time), causing dimensional mismatches with mass-time and concentration definitions, leaving them without SI values.

<div class="pk-model-meta" hidden drug="Benzo[a]pyrene" model-id="BenzoAPyrene_Smith2022_reference" status="rejected" stale="false" population="reference human (73 kg)" measured-compound="Benzo[a]pyrene; Dibenzo[def,p]chrysene" parameterization="mechanistic" topology="1C"></div>

## Citation
Smith JN, Gaither KA, Pande P. Competitive Metabolism of Polycyclic Aromatic Hydrocarbons (PAHs): An Assessment Using In Vitro Metabolism and Physiologically Based Pharmacokinetic (PBPK) Modeling. International journal of environmental research and public health 19(14) (2022).
  ·  DOI: [10.3390/ijerph19148266](https://doi.org/10.3390/ijerph19148266)

## Population and dosing

**Population:** reference human (73 kg) · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Benzo[a]pyrene; Dibenzo[def,p]chrysene; Supermix-10, measured Benzo[a]pyrene; Dibenzo[def,p]chrysene.

> **Species: in vitro.** This record comes from an in-vitro study (cells, tissue or microsomes), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vmax1 nmol/min/mg Micro | Vmax | 0.0063 | a |
| Km1 µM | Km | 0.088 | a |
| Clint1 mL/min | CLint | 0.072 | mL/min |
| intrinsic clearance of BaP | CL | 5 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vmax and Km for benzo[a]pyrene were recorded with the unit 'a' (time), causing dimensional mismatches with mass-time and concentration definitions, leaving them without SI values.**

The Vmax and Km parameters for benzo[a]pyrene were assigned the unit 'a', which represents time. This conflicts with the physical dimensions required for maximum metabolic rate (mass/time) and substrate affinity (concentration). Because 'a' could not be converted to standard SI units, these parameters remained undefined in the final model. Extracted — benzoapyrene: Vmax 0.0063 a, Km 0.088 a, CLint 0.072 mL/min; Benzo[a]pyrene; Dibenzo[def,p]chrysene: CL 5 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vmax1 nmol/min/mg Micro | `Q66` · Vmax | 0.0063 | a |  |  | a | llm (0.6) | Smith_2022_table_3:row0:col1, Smith_2022_table_3:row1:col1 |
| Km1 µM | `Q1` · Km | 0.088 | a |  |  | a | llm (0.6) | Smith_2022_table_3:row0:col3, Smith_2022_table_3:row1:col3 |
| Clint1 mL/min | `Q3` · CLint | 0.072 | mL/min |  |  | ml/min | llm_confirmed (0.6) | Smith_2022_table_3:row0:col5, Smith_2022_table_3:row1:col5 |
| intrinsic clearance of BaP | `Q22` · CL | 5 | L/h | 1.389e-06 | m3/s | L/h | boundary (0.8) | Smith_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vmax1 nmol/min/mg Micro' → Q66 (unit '[time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Km1 µM' → Q1 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Clint1 mL/min' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_mismatch: 'Clint2 mL/min' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('Clint2 mL/min', value '0.0012') — already have one for this compound
- salvaged Q22 ('intrinsic clearance of BaP'=5) from results prose — parameter table was unreadable
- implicit units: 'intrinsic clearance of BaP' → L/h (from the popPK convention: "The text describes 'intrinsic clearance' derived from in vitro Vmax/Km and scaled to human liver volume for a PBPK model")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Benzo[a]pyrene; Dibenzo[def,p]chrysene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Benzo[a]pyrene; Dibenzo[def,p]chrysene' ('Benzo[a]pyrene; Dibenzo[def,p]chrysene') — left in mass units
- molar mass: none found for 'Benzo[a]pyrene; Dibenzo[def,p]chrysene' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Smith_2022_table_3: unbound_uncertainty
- table Smith_2022_table_3: unparsed_numeric_cell
- transposed table Smith_2022_table_3: logical view retains original source coordinates
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | a ([time]) | ['Smith_2022_table_3:row0:col3', 'Smith_2022_table_3:row1:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Smith_2022:other_prose'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | mL/min ([length] ** 3 / [time]) | ['Smith_2022_table_3:row0:col5', 'Smith_2022_table_3:row1:col5'] |
| C5_dimension_Q66 | fail | [mass] / [time] | a ([time]) | ['Smith_2022_table_3:row0:col1', 'Smith_2022_table_3:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5 | ['Smith_2022:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5 L/h | ['Smith_2022:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoapyrene%5D%20BenzoAPyrene_Smith2022_reference&body=Drug%3A%20benzoapyrene%0ARecord%3A%20BenzoAPyrene_Smith2022_reference%0APaper%3A%20Smith_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzoapyrene/BenzoAPyrene_Smith2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:34 UTC</sub>
