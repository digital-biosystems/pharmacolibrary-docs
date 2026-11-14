<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Buprenorphine&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/&quot;},{&quot;label&quot;:&quot;Kharidia_2021 \u00b7 value_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Bjrnsson2023_reference&quot;,&quot;label&quot;:&quot;Bj\u00f6rnsson_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Bjrnsson2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jensen2007v2_reference&quot;,&quot;label&quot;:&quot;Jensen_2007_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jensen2007v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Jones2021_reference&quot;,&quot;label&quot;:&quot;Jones_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Jones2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Olofsen2022_reference&quot;,&quot;label&quot;:&quot;Olofsen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_buprenorphine/Buprenorphine_Olofsen2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Buprenorphine — `Buprenorphine_Kharidia2021_value_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Buprenorphine" model-id="Buprenorphine_Kharidia2021_value_a" status="rejected" stale="false" population="healthy volunteers; opioid-dependent adults" measured-compound="Buprenorphine" parameterization="mechanistic" topology="1C"></div>

## Citation
Kharidia J, Howgate EM, Laffont CM, Liu Y, Young MA. Evaluation of Drug-Drug Interaction Liability for Buprenorphine Extended-Release Monthly Injection Administered by Subcutaneous Route. Clinical pharmacology in drug development 10(9):1064–1074 (2021).
  ·  DOI: [10.1002/cpdd.934](https://doi.org/10.1002/cpdd.934)

## Population and dosing

**Population:** healthy volunteers; opioid-dependent adults · condition healthy; opioid use disorder · age group adult.

**Dosing:** 0.6, 0.8, 8, 12, 16 mg, other, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 13 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight | MW | 467.64 | g/mol |
| fu | fu | 0.04 |  |
| B:P ratio | Kp | 1 |  |
| fa1 | Fab | 1 |  |
| ka1 (h−1) | kabs | 1 | h−1 |
| Tlag (h) | tlag | 0.25 | h |
| Vss (L/kg) | Vss | 13.32 | L/kg |
| CLiv (L/h) | CL | 54 | L/h |
| CLint,u (μL/min/mg protein) | CLint | 889 | μL/min/mg protein |
| CLbile (μL/min/106 cells) | CLb | 51 | μL/min/106 cells |
| Cmax (ng/mL) | Cmax | 11.66 | ng/mL |
| AUC (ng/mL.h) | AUC | 15.84 | ng/mL.h |
| theta_clint_cyp3a4 | theta_clint_cyp3a4 | 472 |  |
| theta_clint_ugt1a1 | theta_clint_ugt1a1 | 341 |  |
| plasma volume | V | 1.0 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight | `Q374` · MW | 467.64 | g/mol |  |  | g/mol | exact (1) | Kharidia_2021_table_p4_1:row1:col1 |
| fu | `Q46` · fu | 0.04 |  | 0.04 |  |  | exact (1) | Kharidia_2021_table_p4_1:row6:col1 |
| B:P ratio | `Q410` · Kp | 1 |  |  |  |  | llm (0.6) | Kharidia_2021_table_p4_1:row7:col1 |
| fa1 | `Q40` · Fab | 1 |  | 1 |  |  | llm_confirmed (0.6) | Kharidia_2021_table_p4_1:row10:col1 |
| ka1 (h−1) | `Q49` · kabs | 1 | h−1 | 0.0002778 | 1/s | 1/h | llm_corrected (0.6) | Kharidia_2021_table_p4_1:row12:col1 |
| Tlag (h) | `Q83` · tlag | 0.25 | h | 900 | s | h | exact (1) | Kharidia_2021_table_p4_1:row14:col1 |
| Vss (L/kg) | `Q65` · Vss | 13.32 | L/kg | 0.9324 | m3 | l/kg | exact (1) | Kharidia_2021_table_p4_1:row18:col1 |
| CLiv (L/h) | `Q22` · CL | 54 | L/h | 1.5e-05 | m3/s | l/h | route_fold (0.9) | Kharidia_2021_table_p4_1:row20:col1 |
| CLint,u (μL/min/mg protein) | `Q3` · CLint | 889 | μL/min/mg protein |  |  | µl/(min·mg·protein) | exact (1) | Kharidia_2021_table_p4_1:row21:col1 |
| CLbile (μL/min/106 cells) | `Q23` · CLb | 51 | μL/min/106 cells |  |  | µl/(min·106cells) | llm (0.6) | Kharidia_2021_table_p4_1:row24:col1 |
| Cmax (ng/mL) | `Q32` · Cmax | 11.66 | ng/mL | 1.166e-05 | kg/m3 | ng/ml | exact (1) | Kharidia_2021_table_S3:row4:col3, Kharidia_2021_table_S3:row7:col3 |
| AUC (ng/mL.h) | `Q88` · AUC | 15.84 | ng/mL.h | 0.05702 | kg*s/m3 | ng/(h·ml) | exact (1) | Kharidia_2021_table_S3:row4:col4, Kharidia_2021_table_S3:row7:col4 |
| theta_clint_cyp3a4 | `Q900` · theta_clint_cyp3a4 | 472 |  |  |  |  |  | Kharidia_2021_table_p4_1:row22:col1 |
| theta_clint_ugt1a1 | `Q900` · theta_clint_ugt1a1 | 341 |  |  |  |  |  | Kharidia_2021_table_p4_1:row23:col1 |
| plasma volume | `Q61` · V | 1.0 | mL | 1e-06 | m3 | L | review_gapfill (0.7) | Rivera-Espinosa_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['Kharidia_2021_table_p4_1:row2:col1'])
- dropped unlinked row (NIL): 'pKa1 (acidic)' — extend the ontology if this is a real PK parameter (source ['Kharidia_2021_table_p4_1:row3:col1'])
- dropped unlinked row (NIL): 'pKa2 (basic)' — extend the ontology if this is a real PK parameter (source ['Kharidia_2021_table_p4_1:row4:col1'])
- dropped unlinked row (NIL): 'Papp A-B (10–6 cm/s)' — extend the ontology if this is a real PK parameter (source ['Kharidia_2021_table_p4_1:row9:col1'])
- dropped duplicate Q40 ('fa2', value '1') — already have one for this compound
- dropped duplicate Q49 ('ka2 (h−1)', value '0.5') — already have one for this compound
- unit_dimension_unknown: 'μL/min/mg protein' (CLint)
- unit_dimension_unknown: 'μL/min/106 cells' (CLb)
- dropped duplicate Q22 ('CL(L/h)', value '58.80') — already have one for this compound
- implicit units: 'Molecular weight' → g/mol (from the popPK convention: 'Molecular weight in PBPK and PK modeling is standardly reported in g/mol (or Da) to facilitate mass-molar conversions. T')
- implicit units: 'CLint,u (μL/min/mg protein)' — the LLM proposed 'μL/min/mg protein', whose dimension does not fit Q3; left unset
- implicit units: 'CLbile (μL/min/106 cells)' — the LLM proposed 'μL/min/106 cells', whose dimension does not fit Q23; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Buprenorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- pharmacogenetic covariate 'theta_clint_cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'theta_clint_ugt1a1' (ugt1a1) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'value a' subgroup of Kharidia_2021 (paper reports 3 populations: 1 mg, 2 mg, value a)
- gap-filled Q61 (V) from Rivera-Espinosa_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Kharidia_2021_table_p4_1: unbound_uncertainty
- table Kharidia_2021_table_S3: unbound_uncertainty
- table Kharidia_2021_table_S3: ragged_grid
- transposed table Kharidia_2021_table_S3: logical view retains original source coordinates
- companion parameter table S3 transcribed (15 record(s))
- table Kharidia_2021_table_S2: unbound_uncertainty
- table Kharidia_2021_table_S2: units_need_context
- transposed table Kharidia_2021_table_S2: logical view retains original source coordinates
- companion parameter table S2 transcribed (6 record(s))
- no LLM table selection; kept 4 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kharidia_2021_table_p4_1:row20:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kharidia_2021_table_S3:row4:col3', 'Kharidia_2021_table_S3:row7:col3'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Kharidia_2021_table_p4_1:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kharidia_2021_table_p4_1:row12:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Rivera-Espinosa_2024:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kharidia_2021_table_p4_1:row18:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kharidia_2021_table_p4_1:row14:col1'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  | ['Kharidia_2021_table_S3:row4:col4', 'Kharidia_2021_table_S3:row7:col4'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] | μL/min/106 cells | ['Kharidia_2021_table_p4_1:row24:col1'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | μL/min/mg protein | ['Kharidia_2021_table_p4_1:row21:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 51 | ['Kharidia_2021_table_p4_1:row24:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 54 L/h | ['Kharidia_2021_table_p4_1:row20:col1'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.001 L | ['Rivera-Espinosa_2024:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 932 L | ['Kharidia_2021_table_p4_1:row18:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Kharidia2021_value_a&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Kharidia2021_value_a%0APaper%3A%20Kharidia_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_buprenorphine/Buprenorphine_Kharidia2021_value_a%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 13:30 UTC</sub>
