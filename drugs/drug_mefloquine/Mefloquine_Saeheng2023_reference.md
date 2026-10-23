<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;mefloquine&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/&quot;},{&quot;label&quot;:&quot;Saeheng_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mefloquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rattanapunya2015_reference&quot;,&quot;label&quot;:&quot;Rattanapunya_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rufener2018_reference&quot;,&quot;label&quot;:&quot;Rufener_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mefloquine — `Mefloquine_Saeheng2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The mefloquine volume of distribution (162500 L) and relative bioavailability (10600000) are physiologically implausible, indicating a unit or scale extraction error, so the record was rejected.

<div class="pk-model-meta" hidden drug="mefloquine" model-id="Mefloquine_Saeheng2023_reference" status="rejected" stale="false" population="adults with uncomplicated P. falciparum malaria" measured-compound="mefloquine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Saeheng T, Na-Bangchang K. Prediction of improved antimalarial chemotherapy of artesunate-mefloquine in combination with mefloquine sensitive and resistant Plasmodium falciparum malaria. PloS one 18(2):e0282099 (2023).
  ·  DOI: [10.1371/journal.pone.0282099](https://doi.org/10.1371/journal.pone.0282099)

## Population and dosing

**Population:** adults with uncomplicated P. falciparum malaria · condition uncomplicated falciparum malaria · age group adult · n = 124.

**Dosing:** 500, 750 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Tk_pop | ktr | 9.83 | 1/h | 18.8 |
| V_pop | V | 162500 | L | 12.9 |
| K_pop | kel | 0.0029 | 1/h | 17.8 |
| Ro_pop | Frel | 10600000 |  | 19.4 |
| A | equation variable | 161 |  | 45.4 |
| absorption rate constant | kabs | 0.28 | h⁻¹ |  |
| T lag,1 | tlag | 0.147 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The mefloquine volume of distribution (162500 L) and relative bioavailability (10600000) are physiologically implausible, indicating a unit or scale extraction error, so the record was rejected.**

The population volume of distribution for mefloquine is recorded as 162500 L, far outside any physiological range for this drug, and the relative bioavailability parameter Frel is 10600000, whereas a relative fraction should be near unity. The elimination rate constant (0.0029 1/h), transit rate constant (9.83 1/h), absorption rate constant (0.28 h⁻¹) and lag time (0.147 h) are of plausible magnitude. The implausible magnitudes point to a unit or scale error in extracting these two parameters. Extracted — mefloquine: ktr 9.83 1/h, V 1.62e+05 L, kel 0.0029 1/h, Frel 1.06e+07, kabs 0.28 h⁻¹, tlag 0.147 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of aparasite: this record has none, the second reading 192000; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Tk_pop | `Q306` · ktr | 9.83 | 1/h | 0.002731 | 1/s | 1/h | 18.8 | llm (0.6) | Saeheng_2023_table_p6_1:row1:col1, Saeheng_2023_table_p6_1:row1:col2, Saeheng_2023_table_p6_1:row1:col3, Saeheng_2023_table_p6_1:row1:col4, Saeheng_2023_table_p6_1:row1:col5, Saeheng_2023_table_p6_1:row1:col6 |
| V_pop | `Q61` · V | 162500 | L | 162.5 | m3 | L | 12.9 | llm (0.6) | Saeheng_2023_table_p6_1:row2:col1, Saeheng_2023_table_p6_1:row2:col2, Saeheng_2023_table_p6_1:row2:col3, Saeheng_2023_table_p6_1:row2:col4, Saeheng_2023_table_p6_1:row2:col5, Saeheng_2023_table_p6_1:row2:col6 |
| K_pop | `Q47` · kel | 0.0029 | 1/h | 8.056e-07 | 1/s | 1/h | 17.8 | llm (0.6) | Saeheng_2023_table_p6_1:row3:col1, Saeheng_2023_table_p6_1:row3:col2, Saeheng_2023_table_p6_1:row3:col3, Saeheng_2023_table_p6_1:row3:col4, Saeheng_2023_table_p6_1:row3:col5, Saeheng_2023_table_p6_1:row3:col6 |
| Ro_pop | `Q87` · Frel | 10600000 |  |  |  |  | 19.4 | llm (0.6) | Saeheng_2023_table_p6_1:row4:col1, Saeheng_2023_table_p6_1:row4:col2, Saeheng_2023_table_p6_1:row4:col3, Saeheng_2023_table_p6_1:row4:col4, Saeheng_2023_table_p6_1:row4:col5, Saeheng_2023_table_p6_1:row4:col6 |
| A | `Q900` · equation variable | 161 |  |  |  |  | 45.4 | llm (0.6) | Saeheng_2023_table_p6_1:row8:col1, Saeheng_2023_table_p6_1:row8:col2, Saeheng_2023_table_p6_1:row8:col3, Saeheng_2023_table_p6_1:row8:col4, Saeheng_2023_table_p6_1:row8:col5, Saeheng_2023_table_p6_1:row8:col6 |
| absorption rate constant | `Q49` · kabs | 0.28 | h⁻¹ | 7.778e-05 | 1/s | 1/h |  | review_gapfill (0.7) | Mim_2026:review |
| T lag,1 | `Q83` · tlag | 0.147 | h | 529.2 | s | h |  | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Kout_pop' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Saeheng_2023_table_p6_1:row5:col1', 'Saeheng_2023_table_p6_1:row5:col2', 'Saeheng_2023_table_p6_1:row5:col3', 'Saeheng_2023_table_p6_1:row5:col4', 'Saeheng_2023_table_p6_1:row5:col5', 'Saeheng_2023_table_p6_1:row5:col6'])
- dropped PD-category row 'IC50_pop' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Saeheng_2023_table_p6_1:row6:col1', 'Saeheng_2023_table_p6_1:row6:col2', 'Saeheng_2023_table_p6_1:row6:col3', 'Saeheng_2023_table_p6_1:row6:col4', 'Saeheng_2023_table_p6_1:row6:col5', 'Saeheng_2023_table_p6_1:row6:col6'])
- dropped duplicate Q900 ('B', value '0.162') — already have one for this compound
- dropped PD-category row 'aParasite' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Saeheng_2023_table_p6_1:row10:col1', 'Saeheng_2023_table_p6_1:row10:col2', 'Saeheng_2023_table_p6_1:row10:col3', 'Saeheng_2023_table_p6_1:row10:col4', 'Saeheng_2023_table_p6_1:row10:col5', 'Saeheng_2023_table_p6_1:row10:col6'])
- dropped duplicate Q900 ('bParasite', value '0.295') — already have one for this compound
- implicit units: 'Tk_pop' → 1/h (from the popPK convention: 'No unit stated in text or table footnotes; Tk is a first-order transit rate constant, conventionally in 1/h; value 9.83 ')
- implicit units: 'V_pop' → L (from the popPK convention: "No unit stated; V is volume of distribution, conventionally in L; value 162500 L consistent with mefloquine's large appa")
- implicit units: 'K_pop' → 1/h (from the popPK convention: "No unit stated; K is an elimination rate constant, conventionally in 1/h; value 0.0029 1/h consistent with mefloquine's ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mefloquine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — turnover model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=turnover; 10/10 row label(s) assigned, 18 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Mim_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aparasite]` |  | 192000 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ro_pop]` | 10600000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag,1]` | 0.147 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk_pop]` | 9.83 |  | only_one_extracted |

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
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Saeheng_2023_table_p6_1:row1:col1', 'Saeheng_2023_table_p6_1:row1:col2', 'Saeheng_2023_table_p6_1:row1:col3', 'Saeheng_2023_table_p6_1:row1:col4', 'Saeheng_2023_table_p6_1:row1:col5', 'Saeheng_2023_table_p6_1:row1:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Saeheng_2023_table_p6_1:row3:col1', 'Saeheng_2023_table_p6_1:row3:col2', 'Saeheng_2023_table_p6_1:row3:col3', 'Saeheng_2023_table_p6_1:row3:col4', 'Saeheng_2023_table_p6_1:row3:col5', 'Saeheng_2023_table_p6_1:row3:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Mim_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Saeheng_2023_table_p6_1:row2:col1', 'Saeheng_2023_table_p6_1:row2:col2', 'Saeheng_2023_table_p6_1:row2:col3', 'Saeheng_2023_table_p6_1:row2:col4', 'Saeheng_2023_table_p6_1:row2:col5', 'Saeheng_2023_table_p6_1:row2:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 1.62e+05 L | ['Saeheng_2023_table_p6_1:row2:col1', 'Saeheng_2023_table_p6_1:row2:col2', 'Saeheng_2023_table_p6_1:row2:col3', 'Saeheng_2023_table_p6_1:row2:col4', 'Saeheng_2023_table_p6_1:row2:col5', 'Saeheng_2023_table_p6_1:row2:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmefloquine%5D%20Mefloquine_Saeheng2023_reference&body=Drug%3A%20mefloquine%0ARecord%3A%20Mefloquine_Saeheng2023_reference%0APaper%3A%20Saeheng_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mefloquine/Mefloquine_Saeheng2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:25 UTC</sub>
