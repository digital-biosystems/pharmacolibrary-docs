<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;brexpiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/&quot;},{&quot;label&quot;:&quot;Frederiksen_2023_3 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_1_mg_day&quot;,&quot;label&quot;:&quot;Higashi_2025_1_mg_day&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_1_mg_day.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_2_mg_day&quot;,&quot;label&quot;:&quot;Higashi_2025_2_mg_day&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Wong2021_reference&quot;,&quot;label&quot;:&quot;Wong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Wong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wang_2024_PANSS&quot;,&quot;label&quot;:&quot;Wang_2024 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/pd_Wang_2024_PANSS.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brexpiprazole — `Brexpiprazole_Frederiksen2023v3_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kel and kel have no unit.

<div class="pk-model-meta" hidden drug="brexpiprazole" model-id="Brexpiprazole_Frederiksen2023v3_reference" status="needs_review" stale="false" population="healthy subjects and patients" measured-compound="brexpiprazole" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Frederiksen T, Areberg J, Raoufinia A, Schmidt E, Stage TB, Brøsen K. Estimating the In Vivo Function of CYP2D6 Alleles through Population Pharmacokinetic Modeling of Brexpiprazole. Clinical pharmacology and therapeutics 113(2):360–369 (2023).
  ·  DOI: [10.1002/cpt.2791](https://doi.org/10.1002/cpt.2791)

## Population and dosing

**Population:** healthy subjects and patients · condition mixed · age group adult · n = 826.

**Dosing:** 0.15, 12 mg, oral, multiple.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption rate constant fasted | kabs | 1.02 | 1/h |  | 215 (None% RSE) |
| Lag‐time | tlag | 0.411 | h |  |  |
| Volume of distribution, brexpiprazole central compartment (V2) | V1 | 81.2 | L |  | 51.7 (4.3% RSE) |
| Volume of distribution, brexpiprazole peripheral compartment (V3) | V2 | 40.1 | L |  | 75.3 (None% RSE) |
| Inter‐compartmental clearance, brexpiprazole (Q) | Q | 0.714 | L/h |  |  |
| Clearance from brexpiprazole to DM‐3412 (CLM1) | CLfm | 0.0224 | L/h | 22.7 |  |
| Clearance from brexpiprazole to DM‐3411 (CLM2) | CLfm | 1.12 | L/h | 2.7 |  |
| Volume of distribution, DM‐3412 central compartment (V4) | V1 | 0.447 | L | 41.4 |  |
| Volume of distribution, DM‐3412 peripheral compartment (V5) | V2 | 20.4 | L | 22.0 |  |
| Inter‐compartmental clearance, DM‐3412 (QMET) | Q | 2.16 | L/h | 21.9 |  |
| Clearance from DM‐3412 central compartment (CLMET1) | kel | 0.420 | CLMET1 | 21.8 |  |
| Volume of distribution, DM‐3411 central compartment (V6) | V | 2.44 | L | 8.0 |  |
| Clearance from DM‐3411 central compartment (CLMET2) | kel | 3.33 | CLMET2 | 3.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.96). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel and kel have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kel and kel), so that value has no SI equivalent. Extracted — brexpiprazole: kabs 1.02 1/h, tlag 0.411 h, V1 81.2 L, V2 40.1 L, Q 0.714 L/h; DM-3412: CLfm 0.0224 L/h, V1 0.447 L, V2 20.4 L, Q 2.16 L/h, kel 0.42 CLMET1; DM-3411: CLfm 1.12 L/h, V 2.44 L, kel 3.33 CLMET2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has brexpiprazole → dm-3412 (metabolism); brexpiprazole → dm-3411 (metabolism), the second reading brexpiprazole → dm-3411 (metabolism); brexpiprazole → dm-3412 (metabolism). That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant fasted | `Q49` · kabs | 1.02 | 1/h | 0.0002833 | 1/s | 1/h |  | llm_confirmed (0.6) | cpt2791-tbl-0002:row1:col1 | 215 (None% RSE) |
| Lag‐time | `Q83` · tlag | 0.411 | h | 1480 | s | h |  | llm (0.6) | cpt2791-tbl-0002:row3:col1 |  |
| Volume of distribution, brexpiprazole central compartment (V2) | `Q63` · V1 | 81.2 | L | 0.0812 | m3 | L |  | exact (1) | cpt2791-tbl-0002:row4:col1 | 51.7 (4.3% RSE) |
| Volume of distribution, brexpiprazole peripheral compartment (V3) | `Q64` · V2 | 40.1 | L | 0.0401 | m3 | L |  | exact (1) | cpt2791-tbl-0002:row5:col1 | 75.3 (None% RSE) |
| Inter‐compartmental clearance, brexpiprazole (Q) | `Q30` · Q | 0.714 | L/h | 1.983e-07 | m3/s | L/h |  | llm_corrected (0.6) | cpt2791-tbl-0002:row6:col1 |  |
| Clearance from brexpiprazole to DM‐3412 (CLM1) | `Q370` · CLfm | 0.0224 | L/h | 6.222e-09 | m3/s | L/h | 22.7 | exact (1) | cpt2791-tbl-0002:row7:col1 |  |
| Clearance from brexpiprazole to DM‐3411 (CLM2) | `Q370` · CLfm | 1.12 | L/h | 3.111e-07 | m3/s | L/h | 2.7 | exact (1) | cpt2791-tbl-0002:row8:col1 |  |
| Volume of distribution, DM‐3412 central compartment (V4) | `Q63` · V1 | 0.447 | L | 0.000447 | m3 | L | 41.4 | exact (1) | cpt2791-tbl-0002:row9:col1 |  |
| Volume of distribution, DM‐3412 peripheral compartment (V5) | `Q64` · V2 | 20.4 | L | 0.0204 | m3 | L | 22.0 | exact (1) | cpt2791-tbl-0002:row10:col1 |  |
| Inter‐compartmental clearance, DM‐3412 (QMET) | `Q30` · Q | 2.16 | L/h | 6e-07 | m3/s | L/h | 21.9 | exact (1) | cpt2791-tbl-0002:row11:col1 |  |
| Clearance from DM‐3412 central compartment (CLMET1) | `Q47` · kel | 0.420 | CLMET1 |  |  | clmet1 | 21.8 | exact (1) | cpt2791-tbl-0002:row12:col1 |  |
| Volume of distribution, DM‐3411 central compartment (V6) | `Q61` · V | 2.44 | L | 0.00244 | m3 | L | 8.0 | exact (1) | cpt2791-tbl-0002:row13:col1 |  |
| Clearance from DM‐3411 central compartment (CLMET2) | `Q47` · kel | 3.33 | CLMET2 |  |  | clmet2 | 3.5 | exact (1) | cpt2791-tbl-0002:row14:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Absorption rate constant fasted' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Absorption rate constant fed' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, brexpiprazole central compartment (V2)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, brexpiprazole peripheral compartment (V3)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Clearance from brexpiprazole to DM‐3412 (CLM1)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Clearance from brexpiprazole to DM‐3411 (CLM2)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, DM‐3412 central compartment (V4)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Clearance from DM‐3412 central compartment (CLMET1)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, DM‐3411 central compartment (V6)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Clearance from DM‐3411 central compartment (CLMET2)' routed out of structural estimates ('IIV (%RSE)')
- dropped duplicate Q49 ('Absorption rate constant fed', value '0.535') — already have one for this compound
- unit_dimension_unknown: 'V2' (V1)
- unit_dimension_unknown: 'V3' (V2)
- unit_dimension_unknown: 'Q' (Q)
- unit_dimension_unknown: 'CLM1' (CLfm)
- unit_dimension_unknown: 'CLM2' (CLfm)
- unit_dimension_unknown: 'V4' (V1)
- unit_dimension_unknown: 'V5' (V2)
- unit_dimension_unknown: 'QMET' (Q)
- unit_dimension_unknown: 'CLMET1' (kel)
- unit_dimension_unknown: 'V6' (V1)
- unit_dimension_unknown: 'CLMET2' (kel)
- dropped unlinked row (NIL): 'Body mass index on V6' — extend the ontology if this is a real PK parameter (source ['cpt2791-tbl-0002:row15:col1'])
- dropped value-less row: '%RSE'
- dropped value-less row: '95% CI'
- implicit units: 'Absorption rate constant fasted' → 1/h (from the popPK convention: 'Absorption rate constant (ka) is a first-order rate constant; standard unit is 1/h. The paper does not explicitly state ')
- implicit units: 'Lag‐time' → h (from the popPK convention: 'Lag time (ALAG) is a time parameter. The standard unit in population pharmacokinetics is hours (h). The paper does not e')
- implicit units: 'Volume of distribution, brexpiprazole central compartment (V2)' → L (from the popPK convention: 'Volume of distribution (V2) is a volume parameter. The standard unit in population pharmacokinetics is liters (L). The m')
- implicit units: 'Volume of distribution, brexpiprazole peripheral compartment (V3)' → L (from the popPK convention: 'Volume of distribution (V3) is a volume parameter. The standard unit in population pharmacokinetics is liters (L). The m')
- implicit units: 'Inter‐compartmental clearance, brexpiprazole (Q)' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is a clearance parameter. The standard unit in population pharmacokinetics is L/h. The ')
- implicit units: 'Clearance from brexpiprazole to DM‐3412 (CLM1)' → L/h (from the popPK convention: 'Formation clearance (CLM1) is a clearance parameter. The standard unit in population pharmacokinetics is L/h. The magnit')
- implicit units: 'Clearance from brexpiprazole to DM‐3411 (CLM2)' → L/h (from the popPK convention: 'Formation clearance (CLM2) is a clearance parameter. The standard unit in population pharmacokinetics is L/h. The magnit')
- implicit units: 'Volume of distribution, DM‐3412 central compartment (V4)' → L (from the popPK convention: 'Volume of distribution (V4) is a volume parameter. The standard unit in population pharmacokinetics is liters (L). The m')
- implicit units: 'Volume of distribution, DM‐3412 peripheral compartment (V5)' → L (from the popPK convention: 'Volume of distribution (V5) is a volume parameter. The standard unit in population pharmacokinetics is liters (L). The m')
- implicit units: 'Inter‐compartmental clearance, DM‐3412 (QMET)' → L/h (from the popPK convention: 'Intercompartmental clearance (QMET) is a clearance parameter. The standard unit in population pharmacokinetics is L/h. T')
- implicit units: 'Clearance from DM‐3412 central compartment (CLMET1)' — the LLM proposed 'L/h', whose dimension does not fit Q47; left unset
- implicit units: 'Volume of distribution, DM‐3411 central compartment (V6)' → L (from the popPK convention: 'Volume of distribution (V6) is a volume parameter. The standard unit in population pharmacokinetics is liters (L). The m')
- implicit units: 'Clearance from DM‐3411 central compartment (CLMET2)' — the LLM proposed 'L/h', whose dimension does not fit Q47; left unset
- metabolite volume: 'Volume of distribution, DM‐3411 central compartment (V6)' Q63→Q61 for DM-3411 — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Volume of distribution, brexpiprazole central compartment (V2)); Q64 (Volume of distribution, brexpiprazole peripheral compartment (V3)); Q30 (Inter‐compartmental clearance, brexpiprazole (Q)); Q63 (Volume of distribution, DM‐3412 central compartment (V4)); Q64 (Volume of distribution, DM‐3412 peripheral compartment (V5)); Q30 (Inter‐compartmental clearance, DM‐3412 (QMET)); Q61 (Volume of distribution, DM‐3411 central compartment (V6))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brexpiprazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1, 2]
- status held at "Needs review" — not promoted
- row roles: 2 per-group rows of brexpiprazole absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 24 linked by role; re-tagged parent→DM-3412 ×9, parent→DM-3411 ×7
- molar mass: none of 1 PubChem candidate(s) is 'DM-3412' (LLM) — left in mass units
- molar mass: none found for 'DM-3412' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table cpt2791-tbl-0002: units_need_context
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.96 (24/25 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['brexpiprazole', 'dm-3412', 'metabolism'], ['brexpiprazole', 'dm-3411', 'metabolism']] | [['brexpiprazole', 'dm-3411', 'metabolism'], ['brexpiprazole', 'dm-3412', 'metabolism']] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpt2791-tbl-0002:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpt2791-tbl-0002:row11:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['cpt2791-tbl-0002:row7:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['cpt2791-tbl-0002:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt2791-tbl-0002:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cpt2791-tbl-0002:row13:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cpt2791-tbl-0002:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cpt2791-tbl-0002:row9:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpt2791-tbl-0002:row5:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpt2791-tbl-0002:row10:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['cpt2791-tbl-0002:row3:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | CLMET1 | ['cpt2791-tbl-0002:row12:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | CLMET2 | ['cpt2791-tbl-0002:row14:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.44 L | ['cpt2791-tbl-0002:row13:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 81.2 L | ['cpt2791-tbl-0002:row4:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.447 L | ['cpt2791-tbl-0002:row9:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 40.1 L | ['cpt2791-tbl-0002:row5:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 20.4 L | ['cpt2791-tbl-0002:row10:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference/Brexpiprazole_Frederiksen2023v3_reference_modelica.zip" download>Brexpiprazole_Frederiksen2023v3_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference/Brexpiprazole_Frederiksen2023v3_reference_fmi.zip" download>Brexpiprazole_Frederiksen2023v3_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference/Brexpiprazole_Frederiksen2023v3_reference_matlab.zip" download>Brexpiprazole_Frederiksen2023v3_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference/Brexpiprazole_Frederiksen2023v3_reference_sbml.zip" download>Brexpiprazole_Frederiksen2023v3_reference_sbml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference/Brexpiprazole_Frederiksen2023v3_reference_cellml.zip" download>Brexpiprazole_Frederiksen2023v3_reference_cellml.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Frederiksen T, Areberg J, Raoufinia A, Schmidt E, Stage TB, Brøsen K. Estimating the In Vivo Function of CYP2D6 Alleles through Population Pharmacokinetic Modeling of Brexpiprazole. Clinical pharmacology and therapeutics 113(2):360–369 (2023). [doi:10.1002/cpt.2791](https://doi.org/10.1002/cpt.2791)

**This record:** Pharmacolibrary v26.09, model `Brexpiprazole_Frederiksen2023v3_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference>

```bibtex
@misc{pharmacolibrary_BrexpiprazoleFrederiksen2023v3reference,
  title  = {{Pharmacolibrary model Brexpiprazole_Frederiksen2023v3_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference},
  note   = {Parameters from doi:10.1002/cpt.2791},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrexpiprazole%5D%20Brexpiprazole_Frederiksen2023v3_reference&body=Drug%3A%20brexpiprazole%0ARecord%3A%20Brexpiprazole_Frederiksen2023v3_reference%0APaper%3A%20Frederiksen_2023_3%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brexpiprazole/Brexpiprazole_Frederiksen2023v3_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 14:03 UTC</sub>
