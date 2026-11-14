<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenytoin&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/&quot;},{&quot;label&quot;:&quot;Rodriguez-Vera_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenytoin_Dickinson1989_reference&quot;,&quot;label&quot;:&quot;Dickinson_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Dickinson1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Guk2019_reference&quot;,&quot;label&quot;:&quot;Guk_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Guk2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Ku2016_reference&quot;,&quot;label&quot;:&quot;Ku_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Ku2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Li2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenytoin_Tanaka2013_reference&quot;,&quot;label&quot;:&quot;Tanaka_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenytoin/Phenytoin_Tanaka2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Phenytoin — `Phenytoin_RodriguezVera2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the blood-to-plasma ratio (1.33) was incorrectly assigned units of length, creating a dimensional conflict for a dimensionless parameter.

<div class="pk-model-meta" hidden drug="Phenytoin" model-id="Phenytoin_RodriguezVera2023_reference" status="rejected" stale="false" population="healthy subjects" measured-compound="Phenytoin" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Rodriguez-Vera L, Yin X, Almoslem M, Romahn K, Cicali B, Lukacova V et al. Comprehensive Physiologically Based Pharmacokinetic Model to Assess Drug-Drug Interactions of Phenytoin. Pharmaceutics 15(10) (2023).
  ·  DOI: [10.3390/pharmaceutics15102486](https://doi.org/10.3390/pharmaceutics15102486)

## Population and dosing

**Population:** healthy subjects · condition healthy · age group adult.

**Dosing:** 200, 300, 400, 600, 900 mg, oral, multiple.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Blood: plasma concentration ratio (Rbp) | Kp | 1.33 | Rbp |
| Plasma protein binding (fup), % | fu | 9.7 |  |
| Renal Clearance (CLfilt), L/h | CLR | 0.015 | L/h |
| CYP 2C19 Km, mg/L | Km | 5.474 | mg/L |
| CYP 2C19 Vmax, ×10−4 mg/s/mg-enzyme | Vmax | 2.0042 |  |
| theta_q320_cyp3a4 | theta_q320_cyp3a4 | 12.6 |  |
| theta_q321_cyp3a4 | theta_q321_cyp3a4 | 3.7 |  |
| theta_q320_cyp2c9 | theta_q320_cyp2c9 | 0.9 |  |
| theta_q321_cyp2c9 | theta_q321_cyp2c9 | 15.3 |  |
| clearance | CL | 0.9 | L/h |
| V (L)* | V | 78.6 | (L) |
| Ka1 (1/h), fosphenytoin | kabs | 1.99 | (1/h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the blood-to-plasma ratio (1.33) was incorrectly assigned units of length, creating a dimensional conflict for a dimensionless parameter.**

The blood-to-plasma partition coefficient (Kp) is a ratio of concentrations and must be dimensionless, yet it was recorded with the unit 'Rbp' interpreted as having a length dimension. This mismatch violates basic physical constraints for partition coefficients. Additionally, the model structure was not included because its topology falls outside the supported set of compartment configurations. Extracted — phenytoin: Kp 1.33 Rbp, fu 9.7, CLR 0.015 L/h, Km 5.47 mg/L, Vmax 2, CL 0.9 L/h, V 78.6 (L), kabs 1.99 (1/h).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Blood: plasma concentration ratio (Rbp) | `Q410` · Kp | 1.33 | Rbp |  |  | rbp | llm (0.6) | pharmaceutics-15-02486-t001:row14:col1 |
| Plasma protein binding (fup), % | `Q46` · fu | 9.7 |  | 0.097 |  |  | llm_confirmed (0.6) | pharmaceutics-15-02486-t001:row15:col1 |
| Renal Clearance (CLfilt), L/h | `Q26` · CLR | 0.015 | L/h | 4.167e-09 | m3/s | l/h | llm_confirmed (0.6) | pharmaceutics-15-02486-t001:row16:col1 |
| CYP 2C19 Km, mg/L | `Q1` · Km | 5.474 | mg/L | 0.005474 | kg/m3 | mg/l | llm_confirmed (0.6) | pharmaceutics-15-02486-t001:row18:col1 |
| CYP 2C19 Vmax, ×10−4 mg/s/mg-enzyme | `Q66` · Vmax | 2.0042 |  |  |  |  | llm_confirmed (0.6) | pharmaceutics-15-02486-t001:row19:col1 |
| theta_q320_cyp3a4 | `Q900` · theta_q320_cyp3a4 | 12.6 |  |  |  |  |  | pharmaceutics-15-02486-t001:row23:col1 |
| theta_q321_cyp3a4 | `Q900` · theta_q321_cyp3a4 | 3.7 |  |  |  |  |  | pharmaceutics-15-02486-t001:row24:col1 |
| theta_q320_cyp2c9 | `Q900` · theta_q320_cyp2c9 | 0.9 |  |  |  |  |  | pharmaceutics-15-02486-t001:row25:col1 |
| theta_q321_cyp2c9 | `Q900` · theta_q321_cyp2c9 | 15.3 |  |  |  |  |  | pharmaceutics-15-02486-t001:row26:col1 |
| clearance | `Q22` · CL | 0.9 | L/h | 2.5e-07 | m3/s | L/h | exact (1) | Rodriguez-Vera_2023:discussion_prose |
| V (L)* | `Q61` · V | 78.6 | (L) | 0.0786 | m3 | L | review_gapfill (0.7) | Ku_2016:review |
| Ka1 (1/h), fosphenytoin | `Q49` · kabs | 1.99 | (1/h) | 0.0005528 | 1/s | 1/h | review_gapfill (0.7) | Ku_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'pKa': [{'unit': '46', 'source': 'pharmaceutics-15-02486-t001:note', 'scope': 'note'}, {'unit': '45,46', 'source': 'pharmaceutics-15-02486-t001:note', 'scope': 'note'}]
- column 'reference' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02486-t001:row3:col1'])
- dropped unlinked row (NIL): 'Reference solubility (mg/mL) at pH 3.29' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02486-t001:row4:col1'])
- dropped unlinked row (NIL): 'Particle radius (μm)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02486-t001:row5:col1'])
- dropped unlinked row (NIL): 'Drug particle density (g/mL)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02486-t001:row6:col1'])
- dropped unlinked row (NIL): 'Mean precipitation time (s)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02486-t001:row7:col1'])
- dropped unlinked row (NIL): 'fut calculation method' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-15-02486-t001:row12:col2'])
- unit_dimension_mismatch: 'Blood: plasma concentration ratio (Rbp)' → Q410 (unit '[length]' vs ontology 'dimensionless') — route to review
- 'Plasma protein binding (fup), %' → Q46: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q1 ('CYP 2C9 Km, mg/L', value '3.316') — already have one for this compound
- dropped duplicate Q66 ('CYP 2C9 Vmax, ×10−5 mg/s/mg-enzyme', value '6.4531') — already have one for this compound
- 'fuinvitro, %' → Q46: printed without a unit and above 1 — read as a percentage
- dropped duplicate Q46 ('fuinvitro, %', value '89.9') — already have one for this compound
- covariate effect for Q320 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q321 has no base parameter row (kept as unattached equation-variable)
- salvaged Q22 ('clearance'=0.9) from results prose — parameter table was unreadable
- implicit units: 'CYP 2C19 Vmax, ×10−4 mg/s/mg-enzyme' — the LLM proposed 'mg/s/mg-enzyme', whose dimension does not fit Q66; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Phenytoin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- pharmacogenetic covariate 'theta_q320_cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'theta_q321_cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'theta_q320_cyp2c9' (cyp2c9) — PGx domain
- pharmacogenetic covariate 'theta_q321_cyp2c9' (cyp2c9) — PGx domain
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 18/18 row label(s) assigned, 1 linked by role
- gap-filled Q61 (V) from Ku_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ku_2016's review values (primary lacked it)

**Extraction notes:**
- table pharmaceutics-15-02486-t001: conflicting_units
- table pharmaceutics-15-02486-t001: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['pharmaceutics-15-02486-t001:row18:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-15-02486-t001:row16:col1'] |
| C5_dimension_Q410 | fail | dimensionless | Rbp ([length]) | ['pharmaceutics-15-02486-t001:row14:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ku_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ku_2016:review'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] |  | ['pharmaceutics-15-02486-t001:row19:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.9 | ['Rodriguez-Vera_2023:discussion_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.9 L/h | ['Rodriguez-Vera_2023:discussion_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 78.6 L | ['Ku_2016:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenytoin%5D%20Phenytoin_RodriguezVera2023_reference&body=Drug%3A%20phenytoin%0ARecord%3A%20Phenytoin_RodriguezVera2023_reference%0APaper%3A%20Rodriguez-Vera_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenytoin/Phenytoin_RodriguezVera2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:28 UTC</sub>
