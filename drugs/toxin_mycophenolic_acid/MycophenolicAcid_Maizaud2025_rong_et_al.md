<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mycophenolic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/&quot;},{&quot;label&quot;:&quot;Maizaud_2025 \u00b7 rong_et_al&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MycophenolicAcid_Nanga2022_reference&quot;,&quot;label&quot;:&quot;Nanga_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Nanga2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Elmowafy2026_reference&quot;,&quot;label&quot;:&quot;Elmowafy_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Elmowafy2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Maizaud2025_rong_et_al_27&quot;,&quot;label&quot;:&quot;Maizaud_2025_rong_et_al_27&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Maizaud2025_rong_et_al_27.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Quintairos2021_mpa_value_rse&quot;,&quot;label&quot;:&quot;Quintairos_2021_mpa_value_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Quintairos2021_mpa_value_rse.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_RomanoAguilar2020_reference&quot;,&quot;label&quot;:&quot;Romano-Aguilar_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_RomanoAguilar2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Rong2023_reference&quot;,&quot;label&quot;:&quot;Rong_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Rong2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mycophenolic acid — `MycophenolicAcid_Maizaud2025_rong_et_al`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; v/F has no unit.

<div class="pk-model-meta" hidden drug="Mycophenolic acid" model-id="MycophenolicAcid_Maizaud2025_rong_et_al" status="needs_review" stale="false" population="adult renal transplant recipients treated with MMF" measured-compound="mycophenolic acid" parameterization="apparent" topology="1C"></div>

## Citation
Maizaud F, Arraki-Zava S, Sayadi H, Fromage Y, Marquet P, Woillard JB et al. Population pharmacokinetic modeling of missed mycophenolate mofetil doses: Impact on exposure and exploration of mitigation strategies. PloS one 20(8):e0330854 (2025).
  ·  DOI: [10.1371/journal.pone.0330854](https://doi.org/10.1371/journal.pone.0330854)

## Population and dosing

**Population:** adult renal transplant recipients treated with MMF · condition stable renal transplant recipients (simulated virtual cohorts; tacrolimus or ciclosporin co-treatment) · age group adult · n = 167.

**Dosing:** 500, 750, 1000, 1250 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed mycophenolate mofetil, measured mycophenolic acid.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 750 + 250 | equation variable | 48.6 |  |
| 1000 | V/F | 68.7 |  |
| CL/F | CL/F | 4.99 | L/h |
| ka (h -1 ) | kabs | 1.21 | h -1 |
| t lag (h) | tlag | 0.25 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; v/F has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Fromage_2025, Kauv_2025) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — mycophenolic acid: V/F 68.7, CL/F 4.99 L/h, kabs 1.21 h -1, tlag 0.25 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 750 + 250 | `Q900` · equation variable | 48.6 |  | 48.6 |  |  | llm (0.6) | Maizaud_2025_table_3:row4:col1, Maizaud_2025_table_3:row4:col2, Maizaud_2025_table_3:row4:col3, Maizaud_2025_table_3:row4:col4, Maizaud_2025_table_3:row4:col6 |
| 1000 | `Q76` · V/F | 68.7 |  |  |  |  | llm (0.6) | Maizaud_2025_table_3:row6:col2, Maizaud_2025_table_3:row6:col3, Maizaud_2025_table_3:row6:col4, Maizaud_2025_table_3:row6:col5, Maizaud_2025_table_3:row13:col2, Maizaud_2025_table_3:row13:col3, Maizaud_2025_table_3:row13:col4, Maizaud_2025_table_3:row13:col5 |
| CL/F | `Q27` · CL/F | 4.99 | L/h | 1.386e-06 | m3/s | L/h | review_gapfill (0.7) | Fromage_2025:review |
| ka (h -1 ) | `Q49` · kabs | 1.21 | h -1 | 0.0003361 | 1/s | 1/h | review_gapfill (0.7) | Kauv_2025:review |
| t lag (h) | `Q83` · tlag | 0.25 | h | 900 | s | h | review_gapfill (0.7) | Kauv_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dosage(mg BID)' — extend the ontology if this is a real PK parameter (source ['Maizaud_2025_table_3:row0:col2'])
- dropped unlinked row (NIL): 'Fully missed dose compensated by the administration of a supplementary half dose at the next scheduled intake (administration of a 150% dose)' — extend the ontology if this is a real PK parameter (source ['Maizaud_2025_table_3:row1:col1', 'Maizaud_2025_table_3:row1:col2', 'Maizaud_2025_table_3:row1:col3', 'Maizaud_2025_table_3:row1:col4', 'Maizaud_2025_table_3:row1:col5', 'Maizaud_2025_table_3:row1:col6'])
- dropped unlinked row (NIL): '500' — extend the ontology if this is a real PK parameter (source ['Maizaud_2025_table_3:row2:col2', 'Maizaud_2025_table_3:row2:col3', 'Maizaud_2025_table_3:row2:col4', 'Maizaud_2025_table_3:row2:col5', 'Maizaud_2025_table_3:row11:col2', 'Maizaud_2025_table_3:row11:col3', 'Maizaud_2025_table_3:row11:col4', 'Maizaud_2025_table_3:row11:col5'])
- dropped unlinked row (NIL): '750' — extend the ontology if this is a real PK parameter (source ['Maizaud_2025_table_3:row3:col1', 'Maizaud_2025_table_3:row12:col2', 'Maizaud_2025_table_3:row12:col3', 'Maizaud_2025_table_3:row12:col4', 'Maizaud_2025_table_3:row12:col5'])
- dropped duplicate Q900 ('750 + 500', value '54.2') — already have one for this compound
- routed '1250' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): '1250 + 500' — extend the ontology if this is a real PK parameter (source ['Maizaud_2025_table_3:row8:col6'])
- dropped duplicate Q900 ('1250 + 750', value '68.4') — already have one for this compound
- dropped unlinked row (NIL): 'Fully missed dose followed by the administration of a supplementary full dose at the next scheduled intake (administration of a 200% dose)' — extend the ontology if this is a real PK parameter (source ['Maizaud_2025_table_3:row10:col1', 'Maizaud_2025_table_3:row10:col2', 'Maizaud_2025_table_3:row10:col3', 'Maizaud_2025_table_3:row10:col4', 'Maizaud_2025_table_3:row10:col5', 'Maizaud_2025_table_3:row10:col6'])
- dropped value-less row: 'ClCr'
- dropped value-less row: 'Alb'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mycophenolic acid
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; '1000' is the general volume)
- population split: 'rong et al. (27)' subgroup of Maizaud_2025 (paper reports 4 populations: rong et al. (27), rong et al. [27], van hest et al. (28), van hest et al. [28])
- row roles: LLM call failed (JSONDecodeError) — deterministic compound tags kept
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'mycophenolate mofetil' — its concentrations stay mass-only
- molar mass: none found for 'mycophenolic acid' — its concentrations stay mass-only
- gap-filled Q27 (CL/F) from Fromage_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kauv_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kauv_2025's review values (primary lacked it)

**Extraction notes:**
- table pone.0330854.t001: ragged_grid
- table Maizaud_2025_table_2: missing_label
- table Maizaud_2025_table_2: ragged_grid
- companion parameter table 2 transcribed (348 record(s))
- table Maizaud_2025_table_3: ragged_grid
- table Maizaud_2025_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (88 record(s))
- LLM selected parameter table(s) 1, 2, 3
- toxin: the located table(s) gave no kinetic value — 1 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Fromage_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kauv_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kauv_2025:review'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 |  | ['Maizaud_2025_table_3:row6:col2', 'Maizaud_2025_table_3:row6:col3', 'Maizaud_2025_table_3:row6:col4', 'Maizaud_2025_table_3:row6:col5', 'Maizaud_2025_table_3:row13:col2', 'Maizaud_2025_table_3:row13:col3', 'Maizaud_2025_table_3:row13:col4', 'Maizaud_2025_table_3:row13:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.99 L/h | ['Fromage_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmycophenolic_acid%5D%20MycophenolicAcid_Maizaud2025_rong_et_al&body=Drug%3A%20mycophenolic_acid%0ARecord%3A%20MycophenolicAcid_Maizaud2025_rong_et_al%0APaper%3A%20Maizaud_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mycophenolic_acid/MycophenolicAcid_Maizaud2025_rong_et_al%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 04:51 UTC</sub>
