<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;paliperidone&quot;,&quot;href&quot;:&quot;drugs/drug_paliperidone/&quot;},{&quot;label&quot;:&quot;Kozielska_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paliperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paliperidone — `Paliperidone_Kozielska2012_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The paliperidone (9-hydroxyrisperidone) parent–metabolite rat model from Kozielska_2012 was held back because the hepatic blood-flow values used for the liver compartment's intercompartmental clearances (90 L/h) were left at library defaults instead of being estimated or reported in the paper.

<div class="pk-model-meta" hidden drug="paliperidone" model-id="Paliperidone_Kozielska2012_reference" status="needs_review" stale="false" population="rats" measured-compound="risperidone" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kozielska M, Johnson M, Pilla Reddy V, Vermeulen A, Li C, Grimwood S et al. Pharmacokinetic-pharmacodynamic modeling of the D₂ and 5-HT (2A) receptor occupancy of risperidone and paliperidone in rats. Pharmaceutical research 29(7):1932–1948 (2012).
  ·  DOI: [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8)

## Population and dosing

**Population:** rats · condition healthy · age group adult.

**Dosing:** 0.7, 2800 mg, iv, ip, sc, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent–metabolite model: parent with 2 compartment(s) plus a liver compartment (first pass); metabolite paliperidone: 2 compartment(s); formed in the liver; oral dose — template `PK_3M_3C`.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference.svg" alt="Paliperidone_Kozielska2012_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| FIP-RIS | Fab | 0.413 |  | 12 |
| FrFPM | Frel | 0.271 |  | 12 |
| KaSC-RIS (1/h) | kabs | 2.90 | 1/h | 20 |
| KaSC-PALI (1/h) | kabs | 1.31 | 1/h | 22 |
| DRSC-RIS (h) | tlag | 0.170 | h | 55 |
| DRSC-PALI (h) | tlag | 0.167 | h | 54 |
| Vc-RIS (L/kg) | V1 | 1.28 | L/kg | 6 |
| CLRIS (L/h/kg) | CLnorm | 1.62 | L/h/kg | 9 |
| CLmet (L/h/kg) | CLfm | 0.757 | L/h/kg | 11 |
| Vp-RIS (L/kg) | V2 | 0.168 | L/kg | 16 |
| QRIS (L/h/kg) | Q | 0.0891 | L/h/kg | 25 |
| Vc-PALI (L/kg) | V1 | 1.21 | L/kg | 15 |
| CLPALI (L/h/kg) | CL | 1.04 | L/h/kg | 10 |
| Vp-PALI (L/kg) | V2 | 0.281 | L/kg | 54 |
| QPALI (L/h/kg) | Q | 0.245 | L/h/kg | 128 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.485). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paliperidone (9-hydroxyrisperidone) parent–metabolite rat model from Kozielska_2012 was held back because the hepatic blood-flow values used for the liver compartment's intercompartmental clearances (90 L/h) were left at library defaults instead of being estimated or reported in the paper.**

All reported parameters were extracted (Fab 0.413, Frel 0.271, kabs 2.90 and 1.31 1/h, tlag 0.170 and 0.167 h, V1 1.28 and 1.21 L/kg, CL 1.62 and 1.04 L/h/kg, CLmet 0.757 L/h/kg, V2 0.168 and 0.281 L/kg, Q 0.0891 and 0.245 L/h/kg), but the hepatic blood flow of 90 L/h used as the intercompartmental clearance to and from the liver compartment is a library default, not an estimate from this paper. These values affect the simulated profile but are not supported by the paper; they need to be extracted or explicitly justified as conventions. The deviations check failed on this defaulted-parameters issue. Extracted — paliperidone: Fab 0.413, Frel 0.271, kabs 2.9 1/h, kabs 1.31 1/h, tlag 0.17 h, tlag 0.167 h, V1 1.28 L/kg, CLnorm 1.62 L/h/kg, … (+7).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has risperidone, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| FIP-RIS | `Q40` · Fab | 0.413 |  |  |  |  | 12 | llm (0.6) | Tab2:row1:col1, Tab2:row1:col2, Tab2:row1:col3, Tab2:row1:col4 |
| FrFPM | `Q87` · Frel | 0.271 |  |  |  |  | 12 | llm (0.6) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4 |
| KaSC-RIS (1/h) | `Q49` · kabs | 2.90 | 1/h | 0.0008056 | 1/s | 1/h | 20 | exact (1) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4 |
| KaSC-PALI (1/h) | `Q49` · kabs | 1.31 | 1/h | 0.0003639 | 1/s | 1/h | 22 | exact (1) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 |
| DRSC-RIS (h) | `Q83` · tlag | 0.170 | h | 612 | s | h | 55 | exact (1) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4 |
| DRSC-PALI (h) | `Q83` · tlag | 0.167 | h | 601.2 | s | h | 54 | exact (1) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4 |
| Vc-RIS (L/kg) | `Q63` · V1 | 1.28 | L/kg | 0.0896 | m3 | l/kg | 6 | llm_confirmed (0.6) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4 |
| CLRIS (L/h/kg) | `Q354` · CLnorm | 1.62 | L/h/kg | 3.15e-05 | m3/s | l/(h·kg) | 9 | llm (0.6) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 |
| CLmet (L/h/kg) | `Q370` · CLfm | 0.757 | L/h/kg | 1.472e-05 | m3/s | l/(h·kg) | 11 | exact (1) | Tab2:row10:col1, Tab2:row10:col2, Tab2:row10:col3, Tab2:row10:col4 |
| Vp-RIS (L/kg) | `Q64` · V2 | 0.168 | L/kg | 0.01176 | m3 | l/kg | 16 | llm_confirmed (0.6) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col4 |
| QRIS (L/h/kg) | `Q30` · Q | 0.0891 | L/h/kg | 1.732e-06 | m3/s | l/(h·kg) | 25 | llm (0.6) | Tab2:row12:col1, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col4 |
| Vc-PALI (L/kg) | `Q63` · V1 | 1.21 | L/kg | 0.0847 | m3 | l/kg | 15 | exact (1) | Tab2:row13:col1, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col4 |
| CLPALI (L/h/kg) | `Q22` · CL | 1.04 | L/h/kg | 2.022e-05 | m3/s | l/(h·kg) | 10 | exact (1) | Tab2:row14:col1, Tab2:row14:col2, Tab2:row14:col3, Tab2:row14:col4 |
| Vp-PALI (L/kg) | `Q64` · V2 | 0.281 | L/kg | 0.01967 | m3 | l/kg | 54 | exact (1) | Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col4 |
| QPALI (L/h/kg) | `Q30` · Q | 0.245 | L/h/kg | 4.764e-06 | m3/s | l/(h·kg) | 128 | exact (1) | Tab2:row16:col1, Tab2:row16:col2, Tab2:row16:col3, Tab2:row16:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['q12/q21 (hepatic flow, 90 L/h)']

**Interpretation flags:**
- table section iiv: 'IIV-FIP (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-KaSC-RIS (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-KaSC-PALI (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-DRSC-RIS (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-CLRIS (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV-CLPALI (%CV)' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'Risperidone' routed out of structural estimates ('Proportional residual error')
- table section residual_error: 'Paliperidone' routed out of structural estimates ('Proportional residual error')
- table section iiv: '% RSE' routed out of structural estimates ('% RSE - Relative Standard Error as calculated by NONMEM covariance stepInter-individual variability is expressed as percent coefficient of variation')
- table section iiv: 'Inter-individual variability' routed out of structural estimates ('% RSE - Relative Standard Error as calculated by NONMEM covariance stepInter-individual variability is expressed as percent coefficient of variation')
- dropped duplicate Q40 ('FSC', value '0.810') — already have one for this compound
- linked 'DRSC-RIS (h)' as 'Tlag' → Q83 (tlag) for  — compound marker removed
- implicit units: 'KaSC-RIS (1/h)' → 1/h (from the paper text: "Table II lists 'KaSC-RIS (1/h)2.84' — the unit is printed in the table itself.")
- implicit units: 'KaSC-PALI (1/h)' → 1/h (from the paper text: "Table II lists 'KaSC-PALI (1/h)1.31' — the unit is printed in the table itself.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=risperidone
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [2] (site presystemic: 'A fraction of the absorbed dose for IP RIS route of administration goes directly to the RIS central compartment and a fr')
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 52 linked by role; re-tagged parent→paliperidone ×40
- review gap-fill skipped: this record measures 'risperidone', not paliperidone — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.485 (16/33 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clris]` | 1.62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clris]` |  | 1.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[drsc-pali].parameter_id` | Q83 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[drsc-ris]` | 0.170 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fip-ris]` | 0.413 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[frfpm]` | 0.271 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[frfpm]` |  | 0.271 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fsc]` |  | 0.810 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kasc-ris]` | 2.90 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kasc-ris]` |  | 2.90 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qris]` | 0.0891 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc-ris]` | 1.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc-ris]` |  | 1.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp-ris]` | 0.168 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp-ris]` |  | 0.168 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | risperidone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | risperidone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row12:col1', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 72.8 L/h | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 89.6 L | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 84.7 L | ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 11.8 L | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 19.7 L | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_metabolite_built[paliperidone] | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.0847, 'CL': 2.0222222222222222e-05, 'formation': 1.4719444444444444e-05} | paliperidone = compartment M1 with its own numbers |
| T3_metabolite_output[paliperidone] | pass |  | 1.529e-06 | C_M1 (paliperidone) must rise above 0 when the parent is dosed |
| T3_molar_mass[paliperidone] | pass |  | {'MW': 0.4264839, 'MW_m1': 0.4264839} | formation is molecule-for-molecule |
| T3_output_variable | pass | C_central (measured=risperidone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 11 scholar param(s) emitted or defaulted | 11 covered | all structural parameters accounted for |
| T3_topology_template | pass | parent_metabolite_hepatic → PK_3M_3C* | PK_3M_3C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference_modelica.zip" download>Paliperidone_Kozielska2012_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference_fmi.zip" download>Paliperidone_Kozielska2012_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_3M_3C.fmu" download>PK_3M_3C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference_matlab.zip" download>Paliperidone_Kozielska2012_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference_sbml.zip" download>Paliperidone_Kozielska2012_reference_sbml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference_cellml.zip" download>Paliperidone_Kozielska2012_reference_cellml.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_3C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 612 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-07 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 2.022e-05 | m3/s |
| input | model | `MW` | 0.4265 |  |
| input | model | `MW_m1` | 0.4265 |  |
| input | model | `Vd1` | 0.0896 |  |
| input | model | `Vd1m1` | 0.0847 | m3 |
| input | model | `Vd2` | 0.0896 |  |
| input | model | `Vd2m1` | 0.01967 |  |
| input | model | `Vd3` | 0.01176 |  |
| input | model | `ka` | 0.0008056 | 1/s |
| input | model | `q12` | 2.5e-05 |  |
| input | model | `q1_m11` | 1.472e-05 | m3/s |
| input | model | `q21` | 2.5e-05 |  |
| input | model | `q23` | 1.732e-06 |  |
| input | model | `q32` | 1.732e-06 |  |
| input | model | `qm11_m12` | 4.764e-06 |  |
| input | model | `qm12_m11` | 4.764e-06 |  |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_3C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Kozielska M, Johnson M, Pilla Reddy V, Vermeulen A, Li C, Grimwood S et al. Pharmacokinetic-pharmacodynamic modeling of the D₂ and 5-HT (2A) receptor occupancy of risperidone and paliperidone in rats. Pharmaceutical research 29(7):1932–1948 (2012). [doi:10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8)

**This record:** Pharmacolibrary v26.09, model `Paliperidone_Kozielska2012_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference>

```bibtex
@misc{pharmacolibrary_PaliperidoneKozielska2012reference,
  title  = {{Pharmacolibrary model Paliperidone_Kozielska2012_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference},
  note   = {Parameters from doi:10.1007/s11095-012-0722-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.7 mg, single dose, first-order absorption into a hepatic compartment first (first pass) (ka 2.9 /h, lag 10.2 min, F 1). Doses in the paper: 0.7–2800 mg.

<dbs-fmusim paramsurl="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference_params.json" metaurl="assets/fmu/PK_3M_3C.vr.json" wasmurl="assets/fmu/PK_3M_3C.js" controlsurl="drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference/Paliperidone_Kozielska2012_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_3C` · parameters `Paliperidone_Kozielska2012_reference_params.json` · controls `Paliperidone_Kozielska2012_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpaliperidone%5D%20Paliperidone_Kozielska2012_reference&body=Drug%3A%20paliperidone%0ARecord%3A%20Paliperidone_Kozielska2012_reference%0APaper%3A%20Kozielska_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 16:17 UTC</sub>
