<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/&quot;},{&quot;label&quot;:&quot;Hu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Hu2024_reference&quot;,&quot;label&quot;:&quot;Hu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ipilimumab_Leven2019_reference&quot;,&quot;label&quot;:&quot;Leven_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ipilimumab — `Ipilimumab_Hu2024_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Ka, k21 use library defaults, not estimates from this paper; the covariate scenarios were not simulated (+2 more).

<div class="pk-model-meta" hidden drug="ipilimumab" model-id="Ipilimumab_Hu2024_reference" status="needs_review" stale="false" population="pediatric and adult oncology patients" measured-compound="ipilimumab" parameterization="apparent" topology="2C"></div>

## Citation
Hu Z, Liu S, Zhao Y, Du S, Hamuro L, Shen J et al. Nivolumab and ipilimumab population pharmacokinetics in support of pediatric dose recommendations-Going beyond the body-size effect. CPT: pharmacometrics & systems pharmacology 13(3):476–493 (2024).
  ·  DOI: [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098)

## Population and dosing

**Population:** pediatric and adult oncology patients · condition oncology · age group mixed.

**Dosing:** 0.1, 1, 3, 10, 240, 480 mg; mg/kg, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** Q/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference.svg" alt="Ipilimumab_Hu2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL REF (mL/h) | CL | 13.5 | mL/h |  | 0.108 (0.329% RSE) |
| VC REF (L) | V1 | 4.01 | L | 0.0434 | 0.0751 (0.274% RSE) |
| Q REF (mL/h) | Q/F | 35.9 | mL/h | 1.61 |  |
| VP REF (L) | V | 2.77 | L | 0.0701 |  |
| cl_sex | cl_sex | -0.0998 |  | 0.0184 |  |
| vc_sex | vc_sex | 0.0195 |  | 0.0186 |  |
| T50 (h) | t1/2z | 2670 | h | 442 |  |
| theta_cl_egfr_power | theta_cl_egfr_power | 0.0982 |  | 0.0357 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ka, k21 use library defaults, not estimates from this paper; the covariate scenarios were not simulated (+2 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. The base model was simulated, not the covariate effects the record defines. Extracted — ipilimumab: CL 13.5 mL/h, V1 4.01 L, Q/F 35.9 mL/h, V 2.77 L, t1/2z 2.67e+03 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL REF (mL/h) | `Q22` · CL | 13.5 | mL/h | 3.75e-09 | m3/s | ml/h |  | llm_confirmed (0.6) | psp413098-tbl-0005:row2:col2 | 0.108 (0.329% RSE) |
| VC REF (L) | `Q63` · V1 | 4.01 | L | 0.00401 | m3 | l | 0.0434 | llm_confirmed (0.6) | psp413098-tbl-0005:row3:col2, Hu_2024_table_4:row2:col2 | 0.0751 (0.274% RSE) |
| Q REF (mL/h) | `Q69` · Q/F | 35.9 | mL/h | 9.972e-09 | m3/s | ml/h | 1.61 | llm (0.6) | psp413098-tbl-0005:row4:col2, Hu_2024_table_4:row3:col2 |  |
| VP REF (L) | `Q61` · V | 2.77 | L | 0.00277 | m3 | l | 0.0701 | llm_corrected (0.6) | psp413098-tbl-0005:row5:col2, Hu_2024_table_4:row4:col2 |  |
| cl_sex | `Q900` · cl_sex | -0.0998 |  |  |  |  | 0.0184 |  | Hu_2024_table_4:row7:col2 |  |
| vc_sex | `Q900` · vc_sex | 0.0195 |  |  |  |  | 0.0186 |  | Hu_2024_table_4:row12:col2 |  |
| T50 (h) | `Q57` · t1/2z | 2670 | h | 9.612e+06 | s | h | 442 | llm (0.6) | Hu_2024_table_4:row14:col2 |  |
| theta_cl_egfr_power | `Q900` · theta_cl_egfr_power | 0.0982 |  |  |  |  | 0.0357 |  | Hu_2024_table_4:row6:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag', 'k21']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Residual error')
- column 'parameter note' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- conflicting source units for 'CL WTB': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL eGFR': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL SEX': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PS': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL RAAA': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL RAAS': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL HL': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL GBM': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL OTH': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDST': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDHL': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDCNST': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL I1Q3': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL I3Q3': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL BVCO': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL ADOST': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- dropped duplicate Q22 ('CL LBM', value '0.789') — already have one for this compound
- dropped unlinked row (NIL): 'VC LBM' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row7:col2', 'Hu_2024_table_4:row11:col2'])
- dropped 'CL CNST' → Q22 = -0.661: a clearance of -0.661 is not a parameter value (source ['psp413098-tbl-0005:row8:col2'])
- dropped duplicate Q22 ('CL OTH', value '0.00699') — already have one for this compound
- dropped 'CL PEDOTH' → Q358 = -0.462: a clearance of -0.462 is not a parameter value (source ['psp413098-tbl-0005:row10:col2'])
- dropped 'CL PEDCNST' → Q358 = -0.801: a clearance of -0.801 is not a parameter value (source ['psp413098-tbl-0005:row11:col2', 'Hu_2024_table_4:row21:col2'])
- dropped unlinked row (NIL): 'CL PEDMEL' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row12:col2'])
- dropped duplicate Q22 ('CL N1Q3', value '0.0417') — already have one for this compound
- dropped duplicate Q22 ('CL N3Q3', value '0.316') — already have one for this compound
- dropped unlinked row (NIL): 'VC PED' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row15:col2', 'Hu_2024_table_4:row31:col2'])
- dropped 'VC ADO' → Q63 = -0.273: a volume of -0.273 is not a parameter value (source ['psp413098-tbl-0005:row16:col2', 'Hu_2024_table_4:row32:col2'])
- dropped duplicate Q22 ('CL0 REF (mL/h)', value '9.66') — already have one for this compound
- dropped duplicate Q22 ('CL WTB', value '0.630') — already have one for this compound
- covariate level 'CL SEX' → Q900:cl_sex = -0.0998 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'CL PS' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row8:col2'])
- dropped duplicate Q22 ('CL RAAA', value '0.0693') — already have one for this compound
- dropped duplicate Q22 ('CL RAAS', value '0.00333') — already have one for this compound
- covariate level 'VC SEX' → Q900:vc_sex = 0.0195 (linear_fractional on Q22)
- dropped PD-category row 'EMAX REF' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row13:col2'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row15:col2'])
- dropped 'CL HL' → Q25 = -0.382: a clearance of -0.382 is not a parameter value (source ['Hu_2024_table_4:row16:col2'])
- dropped 'CL GBM' → Q22 = -0.578: a clearance of -0.578 is not a parameter value (source ['Hu_2024_table_4:row17:col2'])
- dropped 'CL PEDST' → Q358 = -0.580: a clearance of -0.580 is not a parameter value (source ['Hu_2024_table_4:row19:col2'])
- dropped 'CL PEDHL' → Q358 = -0.411: a clearance of -0.411 is not a parameter value (source ['Hu_2024_table_4:row20:col2'])
- dropped duplicate Q22 ('CL I1Q3', value '0.0973') — already have one for this compound
- dropped duplicate Q22 ('CL I3Q3', value '0.349') — already have one for this compound
- dropped unlinked row (NIL): 'CL BVCO' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row24:col2'])
- dropped PD-category row 'EMAX PS' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row25:col2'])
- dropped unlinked row (NIL): 'EMAX IPICO' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row26:col2'])
- dropped PD-category row 'EMAX HL' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row27:col2'])
- dropped unlinked row (NIL): 'EMAX OTH' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row28:col2'])
- dropped PD-category row 'EMAX PEDCNST' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row29:col2'])
- dropped 'CL ADOST' → Q22 = -0.223: a clearance of -0.223 is not a parameter value (source ['Hu_2024_table_4:row30:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ipilimumab
- status held at "Needs review" — not promoted
- molar mass: none found for 'ipilimumab' — its concentrations stay mass-only

**Extraction notes:**
- table psp413098-tbl-0005: unbound_uncertainty
- table Hu_2024_table_4: unbound_uncertainty
- table Hu_2024_table_4: conflicting_units
- companion parameter table 4 transcribed (113 record(s), model stage 'full')
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.636 (14/22 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl ref].covariate_forms` | ['linear_fractional', 'linear_fractional', 'power'] | ['linear_fractional', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[q ref].parameter_id` | Q69 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[t50]` | 2670 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex_vc]` |  | 0.0195 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc ref].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[vc_sex]` | 0.0195 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp ref].parameter_id` | Q61 | Q64 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413098-tbl-0005:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Hu_2024_table_4:row14:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp413098-tbl-0005:row5:col2', 'Hu_2024_table_4:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp413098-tbl-0005:row3:col2', 'Hu_2024_table_4:row2:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp413098-tbl-0005:row4:col2', 'Hu_2024_table_4:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0135 L/h | ['psp413098-tbl-0005:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.77 L | ['psp413098-tbl-0005:row5:col2', 'Hu_2024_table_4:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.01 L | ['psp413098-tbl-0005:row3:col2', 'Hu_2024_table_4:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=ipilimumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.636 (14 of 22 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.636 | cross-check contradicted by a second reader: verdict disputed; agreement 0.636 (14 of 22 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_modelica.zip" download>Ipilimumab_Hu2024_reference_modelica.zip</a> <span class="pk-size">(5.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_fmi.zip" download>Ipilimumab_Hu2024_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_matlab.zip" download>Ipilimumab_Hu2024_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_matlab_simbio.zip" download>Ipilimumab_Hu2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_sbml.zip" download>Ipilimumab_Hu2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_cellml.zip" download>Ipilimumab_Hu2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 3.75e-09 | m3/s |
| input | model | `VdPerKg` | 5.729e-05 | m3/kg |
| input | model | `k12` | 2.487e-06 | 1/s |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hu Z, Liu S, Zhao Y, Du S, Hamuro L, Shen J et al. Nivolumab and ipilimumab population pharmacokinetics in support of pediatric dose recommendations-Going beyond the body-size effect. CPT: pharmacometrics & systems pharmacology 13(3):476–493 (2024). [doi:10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098)

**This record:** Pharmacolibrary, model `Ipilimumab_Hu2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference>

```bibtex
@misc{pharmacolibrary_IpilimumabHu2024reference,
  title  = {{Pharmacolibrary model Ipilimumab_Hu2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference},
  note   = {Parameters from doi:10.1002/psp4.13098},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ipilimumab_Hu2024_reference_params.json` · controls `Ipilimumab_Hu2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bipilimumab%5D%20Ipilimumab_Hu2024_reference&body=Drug%3A%20ipilimumab%0ARecord%3A%20Ipilimumab_Hu2024_reference%0APaper%3A%20Hu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:15 UTC</sub>
