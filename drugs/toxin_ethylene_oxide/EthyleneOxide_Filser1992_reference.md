<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Ethylene Oxide&quot;,&quot;href&quot;:&quot;drugs/toxin_ethylene_oxide/&quot;},{&quot;label&quot;:&quot;Filser_1992 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EthyleneOxide_Li2011_reference&quot;,&quot;label&quot;:&quot;Li_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethylene_oxide/EthyleneOxide_Li2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethylene Oxide — `EthyleneOxide_Filser1992_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; cLint and Ae  have no unit.

<div class="pk-model-meta" hidden drug="Ethylene Oxide" model-id="EthyleneOxide_Filser1992_reference" status="needs_review" stale="false" population="man (70 kg)" measured-compound="Ethylene" parameterization="mechanistic" topology="1C"></div>

## Citation
Filser JG, Denk B, Törnqvist M, Kessler W, Ehrenberg L. Pharmacokinetics of ethylene in man; body burden with ethylene oxide and hydroxyethylation of hemoglobin due to endogenous and environmental ethylene. Archives of toxicology 66(3):157–163 (1992).
  ·  DOI: [10.1007/BF01974008](https://doi.org/10.1007/BF01974008)

## Population and dosing

**Population:** man (70 kg) · condition exposure to atmospheric concentrations below 50 ppm · age group adult.

**Dosed compound ≠ measured compound:** dosed Ethylene oxide, measured Ethylene.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Bioaccumulation factor "body/air" at steady state (Kst) | Kp | 0.33 | 70 kg |
| Clearance of exhalation (related to atmosph. concn.) | CL | 16 | L/h |
| Clearance of metabolism (related to concn. in organism) | CLint | 27 | related to concn. in organism |
| Half-life | t1/2z | 0.65 | h |
| % metabolized (Amount taken up = 100%) | fm | 36 | 70 kg |
| % exhaled (Amount taken up = 100%) | Ae | 64 | 70 kg |
| Body burden of ethylene due to endogenous production | body_burden | 0.44 | mg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cLint and Ae  have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Kp, CLint, fm and Ae ), so that value has no SI equivalent. Extracted — Ethylene: Kp 0.33 70 kg, CL 16 L/h, CLint 27 related to concn. in organism, t1/2z 0.65 h, Ae 64 70 kg, body_burden 0.44 mg; ethylene oxide: fm 36 70 kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bioaccumulation factor "body/air" at steady state (Kst) | `Q410` · Kp | 0.33 | 70 kg |  |  | 70kg | llm (0.6) | Filser_1992_table_p1_1:row1:col1, Filser_1992_table_p1_1:row1:col2 |
| Clearance of exhalation (related to atmosph. concn.) | `Q22` · CL | 16 | L/h | 4.444e-06 | m3/s | L/h | exact (1) | Filser_1992_table_p1_1:row2:col2 |
| Clearance of metabolism (related to concn. in organism) | `Q3` · CLint | 27 | related to concn. in organism |  |  | concn·in·organism·related·to | llm_corrected (0.6) | Filser_1992_table_p1_1:row4:col2 |
| Half-life | `Q57` · t1/2z | 0.65 | h | 2340 | s | h | half_life_rule (0.95) | Filser_1992_table_p1_1:row5:col1, Filser_1992_table_p1_1:row5:col2 |
| % metabolized (Amount taken up = 100%) | `Q45` · fm | 36 | 70 kg |  |  | 70kg | llm (0.6) | Filser_1992_table_p1_1:row6:col1, Filser_1992_table_p1_1:row6:col2 |
| % exhaled (Amount taken up = 100%) | `Q91` · Ae | 64 | 70 kg |  |  | 70kg | llm (0.6) | Filser_1992_table_p1_1:row7:col1, Filser_1992_table_p1_1:row7:col2 |
| Body burden of ethylene due to endogenous production | `Q414` · body_burden | 0.44 | mg |  |  | mg | llm_confirmed (0.6) | Filser_1992_table_p1_1:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'expression' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Thermodynamic equilibrium coefficient "body/air" (Keq)' — extend the ontology if this is a real PK parameter (source ['Filser_1992_table_p1_1:row0:col1'])
- unit_dimension_unknown: '70 kg' (Kp)
- linked 'Clearance of exhalation (related to atmosph. concn.)' as 'CL' → Q22 (CL) for Ethylene — compound marker removed
- unit_dimension_unknown: 'related to atmosph. concn.' (CL)
- linked 'Clearance of metabolism (related to atmosph. concn.)' as 'CL' → Q22 (CL) for Ethylene — compound marker removed
- dropped duplicate Q22 ('Clearance of metabolism (related to atmosph. concn.)', value '9.3') — already have one for this compound
- unit_dimension_unknown: 'related to concn. in organism' (CLint)
- unit_dimension_unknown: '70 kg' (fm)
- unit_dimension_unknown: '70 kg' (Ae )
- dropped unlinked row (NIL): 'Alveolar retention' — extend the ontology if this is a real PK parameter (source ['Filser_1992_table_p1_1:row8:col1'])
- unit_dimension_unknown: '70 kg' (body_burden)
- implicit units: 'Clearance of exhalation (related to atmosph. concn.)' → L/h (from the popPK convention: 'Clearance is a rate constant (volume/time). The value 16 is consistent with L/h (16 L/h is approx 0.23 L/min, a reasonab')
- implicit units: 'Clearance of metabolism (related to concn. in organism)' — the LLM proposed 'L/h', whose dimension does not fit Q3; left unset
- implicit units: 'Half-life' → h (from the popPK convention: 'Half-life is a time constant. The value 0.65 is consistent with hours (0.65 h is a plausible half-life for a small volat')
- implicit units: 'Body burden of ethylene due to endogenous production' → mg (from the popPK convention: 'Body burden typically represents the total amount of substance in the body (mass). Ethylene is a gas; however, in toxico')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ethylene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 3 linked by role; re-tagged parent→Ethylene ×12
- molar mass: none found for 'Ethylene' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Ethylene', not ethylene_oxide — the review values are the parent's

**Extraction notes:**
- table Filser_1992_table_p1_1: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Filser_1992_table_p1_1:row2:col2'] |
| C5_dimension_Q414 | pass | [mass] |  | ['Filser_1992_table_p1_1:row9:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Filser_1992_table_p1_1:row5:col1', 'Filser_1992_table_p1_1:row5:col2'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | related to concn. in organism | ['Filser_1992_table_p1_1:row4:col2'] |
| C5_unit_missing_Q91 | fail | [mass] | 70 kg | ['Filser_1992_table_p1_1:row7:col1', 'Filser_1992_table_p1_1:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16 | ['Filser_1992_table_p1_1:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16 L/h | ['Filser_1992_table_p1_1:row2:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethylene_oxide%5D%20EthyleneOxide_Filser1992_reference&body=Drug%3A%20ethylene_oxide%0ARecord%3A%20EthyleneOxide_Filser1992_reference%0APaper%3A%20Filser_1992%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethylene_oxide/EthyleneOxide_Filser1992_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:08 UTC</sub>
