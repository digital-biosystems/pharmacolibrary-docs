<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;mefloquine&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/&quot;},{&quot;label&quot;:&quot;Mim_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mefloquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rattanapunya2015_reference&quot;,&quot;label&quot;:&quot;Rattanapunya_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rufener2018_reference&quot;,&quot;label&quot;:&quot;Rufener_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mefloquine — `Mefloquine_Mim2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The mefloquine clearance parameter CL is reported with the meaningless unit 'CL' (value 258.25), a dimension mismatch on a structural parameter, and the record also contains an unlinked artesunate-to-dihydroartemisinin hydrolysis step, so it was rejected.

<div class="pk-model-meta" hidden drug="mefloquine" model-id="Mefloquine_Mim2026_reference" status="rejected" stale="false" population="P. berghei-infected mice" measured-compound="mefloquine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Mim SR, Vieira Santos V, Pereira LC, Pica K, Miranda ALLdS, Quadros HC et al. Pharmacokinetic and pharmacodynamic modeling of anti-plasmodial drugs mefloquine plus artesunate: insights on translational application. Antimicrobial agents and chemotherapy 70(3):e0171725 (2026).
  ·  DOI: [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25)

## Population and dosing

**Population:** P. berghei-infected mice · condition malaria (P. berghei murine model).

**Dosing:** 3850, 7000 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed mefloquine + artesunate (ASMQ, oral), measured mefloquine.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Absorption rate constant, Ka | kabs | 24.4 | 1/h |
| Total clearance, CL | CL | 258.25 | CL |
| Volume of central compartment, V1 ml/kg | V1 | 1921.4 | mL/kg |
| Inter-compartmental clearance, Q | Q | 16954.46 | mL/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The mefloquine clearance parameter CL is reported with the meaningless unit 'CL' (value 258.25), a dimension mismatch on a structural parameter, and the record also contains an unlinked artesunate-to-dihydroartemisinin hydrolysis step, so it was rejected.**

The total clearance of mefloquine is given as 258.25 with unit 'CL', which is not a valid unit and cannot be converted to SI, so the parameter reached the model without an SI value and fails the dimensional check on a structural parameter. Additionally, the model structure includes a hydrolysis link from artesunate to dihydroartemisinin that has no connection to the mefloquine dose, leaving an unlinked metabolite. The remaining parameters (kabs 24.4 1/h, V1 1921.4 mL/kg, Q 16954.46 mL/h/kg) carry valid units. Extracted — mefloquine: kabs 24.4 1/h, CL 258 CL, V1 1.92e+03 mL/kg, Q 1.7e+04 mL/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mefloquine + artesunate (ASMQ, oral), the second reading mefloquine; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, Ka | `Q49` · kabs | 24.4 | 1/h | 0.006778 | 1/s | 1/h | llm_confirmed (0.6) | Mim_2026_table_1:row0:col1, Mim_2026_table_1:row0:col2, Mim_2026_table_1:row0:col3, Mim_2026_table_1:row0:col4, Mim_2026_table_2:row1:col1 |
| Total clearance, CL | `Q22` · CL | 258.25 | CL |  |  | cl | exact (1) | Mim_2026_table_1:row1:col1, Mim_2026_table_1:row1:col2, Mim_2026_table_1:row1:col3, Mim_2026_table_2:row2:col1, Mim_2026_table_2:row2:col2 |
| Volume of central compartment, V1 ml/kg | `Q63` · V1 | 1921.4 | mL/kg | 0.1345 | m3 | L | boundary_compartment (0.9) | Mim_2026_table_1:row2:col2, Mim_2026_table_2:row3:col1, Mim_2026_table_2:row3:col2, Mim_2026_table_2:row3:col3 |
| Inter-compartmental clearance, Q | `Q30` · Q | 16954.46 | mL/h/kg | 0.0003297 | m3/s | L/h | llm_confirmed (0.6) | Mim_2026_table_1:row4:col1, Mim_2026_table_1:row4:col2, Mim_2026_table_2:row6:col1, Mim_2026_table_2:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate relative se (%) bootstrap' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped PD-category row 'Baseline response, R0' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row2:col2'])
- dropped PD-category row 'Degradation rate, Kout' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row3:col1', 'tab_2:row3:col2'])
- dropped PD-category row 'Half-maximal inhibitory' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4', 'tab_2:row7:col2', 'tab_2:row7:col3', 'tab_2:row7:col4'])
- routed 'Constant error model' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'Total clearance, CL' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q63 ('Volume of central compartment, V2 ml/kg', value '11342.3') — already have one for this compound
- implicit units: 'Absorption rate constant, Ka' → 1/h (from the popPK convention: 'No unit stated for AS Ka; first-order absorption rate constants are conventionally in 1/h (paper reports MQ Ka as 0.28 h')
- implicit units: 'Volume of central compartment, V1 ml/kg' → mL/kg (from the paper text: "Parameter name itself states 'V1 ml/kg'; text also reports volumes in mL/kg ('moderate volume of distribution (4,039.63 ")
- implicit units: 'Inter-compartmental clearance, Q' → mL/h/kg (from the popPK convention: "No unit stated; consistent with paper's body-weight-normalized units (clearance 286 mL/h/kg, volumes mL/kg), so intercom")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Total clearance, CL); Q63 (Volume of central compartment, V1 ml/kg); Q30 (Inter-compartmental clearance, Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mefloquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Mim_2026_table_1:row2:col1 = '4039.63 11.2'
- unparsed cell Mim_2026_table_1:row3:col1 = '41817.36 25.7'
- companion parameter table 1 transcribed (14 record(s))
- unparsed cell Mim_2026_table_2:row1:col2 = '0.6 (fixed) NA a'
- companion parameter table 2 transcribed (12 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['artesunate', 'dihydroartemisinin', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance, q].value` | 16954.46 |  | mismatch |
| `gpt-oss-120b` | `parameters[volume of central compartment, v1 ml/kg]` | 1921.4 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mefloquine + artesunate (ASMQ, oral) | mefloquine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 3 | CL | ['Mim_2026_table_1:row1:col1', 'Mim_2026_table_1:row1:col2', 'Mim_2026_table_1:row1:col3', 'Mim_2026_table_2:row2:col1', 'Mim_2026_table_2:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Mim_2026_table_1:row4:col1', 'Mim_2026_table_1:row4:col2', 'Mim_2026_table_2:row6:col1', 'Mim_2026_table_2:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Mim_2026_table_1:row0:col1', 'Mim_2026_table_1:row0:col2', 'Mim_2026_table_1:row0:col3', 'Mim_2026_table_1:row0:col4', 'Mim_2026_table_2:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Mim_2026_table_1:row2:col2', 'Mim_2026_table_2:row3:col1', 'Mim_2026_table_2:row3:col2', 'Mim_2026_table_2:row3:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 258.2 | ['Mim_2026_table_1:row1:col1', 'Mim_2026_table_1:row1:col2', 'Mim_2026_table_1:row1:col3', 'Mim_2026_table_2:row2:col1', 'Mim_2026_table_2:row2:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 134 L | ['Mim_2026_table_1:row2:col2', 'Mim_2026_table_2:row3:col1', 'Mim_2026_table_2:row3:col2', 'Mim_2026_table_2:row3:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmefloquine%5D%20Mefloquine_Mim2026_reference&body=Drug%3A%20mefloquine%0ARecord%3A%20Mefloquine_Mim2026_reference%0APaper%3A%20Mim_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mefloquine/Mefloquine_Mim2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:25 UTC</sub>
