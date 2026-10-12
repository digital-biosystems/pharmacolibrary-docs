<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/&quot;},{&quot;label&quot;:&quot;Kozielska_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risperidone — `Risperidone_Kozielska2012_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.788). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The risperidone–paliperidone parent–metabolite rat model was held back because the hepatic blood flow between the liver compartments (90 L/h) was left at a library default instead of being estimated or justified from Kozielska_2012.**

The record's own parameters (e.g., Fab 0.413, Frel 0.271, CLmet 0.757 L/h/kg, CLRIS 1.62 L/h/kg) are extracted, but the hepatic blood flow entering the model structure has no value from the paper; the model builder substituted the library default of 90 L/h. These defaulted values affect the simulated parent and metabolite profiles yet are not supported by Kozielska_2012, so the deviation check failed and the record needs review. Extracted — risperidone: Fab 0.413, Frel 0.271, kabs 2.9 1/h, tlag 0.17 h, V1 1.28 L/kg, CLnorm 1.62 L/h/kg, V2 0.168 L/kg, Q 0.0891 L/h/kg; paliperidone: kabs 1.31 1/h, tlag 0.167 h, CLfm 0.757 L/h/kg, V1 1.21 L/kg, CL 1.04 L/h/kg, V2 0.281 L/kg, Q 0.245 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clris].parameter_id`: this record has Q354, the second reading Q22; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012)
  ·  DOI: [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8)

<div class="pk-model-meta" hidden drug="risperidone" model-id="Risperidone_Kozielska2012_reference" status="needs_review" stale="false" population="rats" measured-compound="risperidone" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent–metabolite model: parent with 2 compartment(s) plus a liver compartment (first pass); metabolite paliperidone: 2 compartment(s); formed in the liver; oral dose — template `PK_3M_3C`.  
**Parameters:** 15 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| FIP-RIS | `Q40` · Fab | 0.413 | not captured | not captured | not captured | 12 | llm (0.6) | Tab2:row1:col1, Tab2:row1:col2, Tab2:row1:col3, Tab2:row1:col4 | — | not captured |
| FrFPM | `Q87` · Frel | 0.271 | not captured | not captured | not captured | 12 | llm (0.6) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4 | — | not captured |
| KaSC-RIS (1/h) | `Q49` · kabs | 2.90 | 1/h | 0.0008055555555555556 | 1/h | 20 | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4 | — | not captured |
| KaSC-PALI (1/h) | `Q49` · kabs | 1.31 | 1/h | 0.0003638888888888889 | 1/h | 22 | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 | — | not captured |
| DRSC-RIS (h) | `Q83` · tlag | 0.170 | h | 612.0 | [h] | 55 | exact (1.0) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4 | — | not captured |
| DRSC-PALI (h) | `Q83` · tlag | 0.167 | h | 601.2 | [h] | 54 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4 | — | not captured |
| Vc-RIS (L/kg) | `Q63` · V1 | 1.28 | L/kg | 0.08960000000000001 | [l] / [kg] | 6 | llm_confirmed (0.6) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4 | — | not captured |
| CLRIS (L/h/kg) | `Q354` · CLnorm | 1.62 | L/h/kg | 3.15e-05 | [l] / [[h] · [kg]] | 9 | llm (0.6) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 | — | not captured |
| CLmet (L/h/kg) | `Q370` · CLfm | 0.757 | L/h/kg | 1.4719444444444444e-05 | [l] / [[h] · [kg]] | 11 | exact (1.0) | Tab2:row10:col1, Tab2:row10:col2, Tab2:row10:col3, Tab2:row10:col4 | — | not captured |
| Vp-RIS (L/kg) | `Q64` · V2 | 0.168 | L/kg | 0.011760000000000001 | [l] / [kg] | 16 | llm_confirmed (0.6) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col4 | — | not captured |
| QRIS (L/h/kg) | `Q30` · Q | 0.0891 | L/h/kg | 1.7325e-06 | [l] / [[h] · [kg]] | 25 | llm (0.6) | Tab2:row12:col1, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col4 | — | not captured |
| Vc-PALI (L/kg) | `Q63` · V1 | 1.21 | L/kg | 0.0847 | [l] / [kg] | 15 | exact (1.0) | Tab2:row13:col1, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col4 | — | not captured |
| CLPALI (L/h/kg) | `Q22` · CL | 1.04 | L/h/kg | 2.0222222222222222e-05 | [l] / [[h] · [kg]] | 10 | exact (1.0) | Tab2:row14:col1, Tab2:row14:col2, Tab2:row14:col3, Tab2:row14:col4 | — | not captured |
| Vp-PALI (L/kg) | `Q64` · V2 | 0.281 | L/kg | 0.019670000000000003 | [l] / [kg] | 54 | exact (1.0) | Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col4 | — | not captured |
| QPALI (L/h/kg) | `Q30` · Q | 0.245 | L/h/kg | 4.763888888888889e-06 | [l] / [[h] · [kg]] | 128 | exact (1.0) | Tab2:row16:col1, Tab2:row16:col2, Tab2:row16:col3, Tab2:row16:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- dropped unlinked row (NIL): 'FSC' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'])
- linked 'DRSC-RIS (h)' as 'Tlag' → Q83 (tlag) for  — compound marker removed
- implicit units: 'KaSC-RIS (1/h)' → 1/h (from the paper text: "Table II lists 'KaSC-RIS (1/h)'.")
- implicit units: 'KaSC-PALI (1/h)' → 1/h (from the paper text: "Table II lists 'KaSC-PALI (1/h)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=risperidone
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [2] (site presystemic: 'A fraction of the absorbed dose for IP RIS route of administration goes directly to the RIS central compartment and a fr')
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 52 linked by role; re-tagged parent→paliperidone ×40

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.788 (26/33 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clris].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[drsc-pali].parameter_id` | Q83 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[drsc-ris]` | 0.170 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fip-ris]` | 0.413 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[frfpm]` | 0.271 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[frfpm]` | not captured | 0.271 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qris]` | 0.0891 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row12:col1', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 72.8 L/h | not captured | not captured | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 89.6 L | not captured | not captured | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 84.7 L | not captured | not captured | ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 11.8 L | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 19.7 L | not captured | not captured | ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_metabolite_built[paliperidone] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.0847, 'CL': 2.0222222222222222e-05, 'formation': 1.4719444444444444e-05} | not captured | paliperidone = compartment M1 with its own numbers |
| T3_metabolite_output[paliperidone] | not captured | pass | not captured | 1.588351410454299e-06 | not captured | C_M1 (paliperidone) must rise above 0 when the parent is dosed |
| T3_molar_mass[paliperidone] | not captured | pass | not captured | {'MW': 0.41048450000000003, 'MW_m1': 0.42649200000000004} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=risperidone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 11 scholar param(s) emitted or defaulted | 11 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | parent_metabolite_hepatic → PK_3M_3C* | PK_3M_3C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risperidone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kozielska_2012` / `Kozielska_2012::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risperidone/models/modelica/Risperidone_Kozielska2012_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risperidone/models/modelica/Risperidone_Kozielska2012_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risperidone/models/modelica/Risperidone_Kozielska2012_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_modelica.zip" download>Risperidone_Kozielska2012_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_fmi.zip" download>Risperidone_Kozielska2012_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_3C.fmu" download>PK_3M_3C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_matlab.zip" download>Risperidone_Kozielska2012_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_sbml.zip" download>Risperidone_Kozielska2012_reference_sbml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_cellml.zip" download>Risperidone_Kozielska2012_reference_cellml.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_3C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference.svg" alt="Risperidone_Kozielska2012_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.7 mg, single dose, first-order absorption into a hepatic compartment first (first pass) (ka 2.9 /h, lag 10.2 min, F 1). Doses in the paper: 0.7–2800 mg.

<dbs-fmusim paramsurl="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_params.json" metaurl="assets/fmu/PK_3M_3C.vr.json" wasmurl="assets/fmu/PK_3M_3C.js" controlsurl="drugs/drug_risperidone/Risperidone_Kozielska2012_reference/Risperidone_Kozielska2012_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_3C` · parameters `Risperidone_Kozielska2012_reference_params.json` · controls `Risperidone_Kozielska2012_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:10 UTC</sub>
