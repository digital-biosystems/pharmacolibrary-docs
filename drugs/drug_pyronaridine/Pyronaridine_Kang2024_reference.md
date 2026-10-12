<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Pyronaridine&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/&quot;},{&quot;label&quot;:&quot;Kang_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyronaridine_Tan2009_reference&quot;,&quot;label&quot;:&quot;Tan_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pyronaridine — `Pyronaridine_Kang2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.44). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the dihydroartemisinin absorption rate constant (kabs, labelled ε) is reported as 194.67 with the unit given as 'dihydroartemisinin', an unconvertible unit that left the parameter without an SI value and made its magnitude implausible.**

For pyronaridine the parameters (kabs 1.54 1/h, V/F 33.03 L/kg, CL/F 13.33 L/h/kg) are plausible, but the dihydroartemisinin kabs entry carries the value 194.67 with 'dihydroartemisinin' in place of a rate unit, so it could not be converted to SI and the clearance/volume plausibility check failed on implausible magnitude attributed to a unit/scale extraction error. The other dihydroartemisinin parameters (V 0.16 L/kg, CL 237.25 L/h/kg, kel 1.04 1/h) and the artesunate parameters (V2/F 481.05 L/kg, Q/F 82.69 L/h/kg) are recorded with proper units. The failure is confined to this one parameter's unit and scale. Extracted — pyronaridine: kabs 1.54 1/h, V/F 33 L/kg, CL/F 13.3 L/h/kg, ktr 0.2, kel 1.04 1/h; artesunate: V2/F 481 L/kg, Q/F 82.7 L/h/kg; dihydroartemisinin: V 0.16 L/kg, CL 237 L/h/kg, kabs 195 dihydroartemisinin.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pyronaridine tetraphosphate/artesunate, the second reading pyronaridine; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `pyronaridine tetraphosphate/artesunate`, measured `pyronaridine`.

## Citation
Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024)
  ·  DOI: [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998)

<div class="pk-model-meta" hidden drug="Pyronaridine" model-id="Pyronaridine_Kang2024_reference" status="rejected" stale="false" population="hamsters, rats, and dogs (preclinical PK for allometric scaling to humans)" measured-compound="pyronaridine" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, Q/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 1.54 | 1/h | 0.0004277777777777778 | 1/h | 24.85 | exact (1.0) | ijms-25-06998-t001:row3:col1, ijms-25-06998-t001:row3:col2, ijms-25-06998-t001:row3:col3, ijms-25-06998-t001:row8:col1, ijms-25-06998-t001:row8:col2, ijms-25-06998-t001:row8:col3, ijms-25-06998-t001:row13:col1, ijms-25-06998-t001:row13:col2, ijms-25-06998-t001:row13:col3, ijms-25-06998-t001:row21:col1, ijms-25-06998-t001:row21:col2, ijms-25-06998-t001:row21:col3, ijms-25-06998-t001:row32:col1, ijms-25-06998-t001:row32:col2, ijms-25-06998-t001:row32:col3 | — | 0.02 (13.44% RSE) |
| V/F | `Q76` · V/F | 33.03 | L/kg | 2.3121 | L | 14.81 | exact (1.0) | ijms-25-06998-t001:row4:col2, ijms-25-06998-t001:row4:col3, ijms-25-06998-t001:row9:col2, ijms-25-06998-t001:row9:col3, ijms-25-06998-t001:row14:col2, ijms-25-06998-t001:row14:col3, ijms-25-06998-t001:row22:col2, ijms-25-06998-t001:row22:col3, ijms-25-06998-t001:row33:col2, ijms-25-06998-t001:row33:col3 | — | 1.69 (16.25% RSE) |
| CL/F | `Q27` · CL/F | 13.33 | L/h/kg | 0.00025919444444444444 | L/h | 14.61 | exact (1.0) | ijms-25-06998-t001:row5:col2, ijms-25-06998-t001:row5:col3, ijms-25-06998-t001:row10:col2, ijms-25-06998-t001:row10:col3, ijms-25-06998-t001:row16:col2, ijms-25-06998-t001:row16:col3, ijms-25-06998-t001:row23:col2, ijms-25-06998-t001:row23:col3, ijms-25-06998-t001:row35:col2, ijms-25-06998-t001:row35:col3 | — | 0.04 (28.17% RSE) |
| ε | `Q306` · ktr | 0.20 | not captured | not captured | not captured | 10.15 | llm (0.6) | ijms-25-06998-t001:row6:col2, ijms-25-06998-t001:row6:col3, ijms-25-06998-t001:row11:col2, ijms-25-06998-t001:row11:col3, ijms-25-06998-t001:row18:col2, ijms-25-06998-t001:row18:col3 | — | not captured |
| V2/F | `Q82` · V2/F | 481.05 | L/kg | 33.673500000000004 | L | 21.47 | exact (1.0) | ijms-25-06998-t001:row15:col2, ijms-25-06998-t001:row15:col3, ijms-25-06998-t001:row34:col2, ijms-25-06998-t001:row34:col3 | — | not captured |
| CL2/F | `Q69` · Q/F | 82.69 | L/h/kg | 0.001607861111111111 | L/h | 13.45 | exact (1.0) | ijms-25-06998-t001:row17:col2, ijms-25-06998-t001:row17:col3, ijms-25-06998-t001:row36:col2, ijms-25-06998-t001:row36:col3 | — | 0.18 (0.06% RSE) |
| Vm/(F∙Fm) | `Q61` · V | 0.16 | L/kg | 0.011200000000000002 | L | 25.23 | exact (1.0) | ijms-25-06998-t001:row24:col2, ijms-25-06998-t001:row24:col3, ijms-25-06998-t001:row37:col2, ijms-25-06998-t001:row37:col3 | — | not captured |
| CLm/(F∙Fm) | `Q22` · CL | 237.25 | L/h/kg | 0.004613194444444444 | L/h | 34.09 | exact (1.0) | ijms-25-06998-t001:row25:col2, ijms-25-06998-t001:row25:col3, ijms-25-06998-t001:row38:col2, ijms-25-06998-t001:row38:col3 | — | not captured |
| kenz | `Q47` · kel | 1.04 | 1/h | 0.0002888888888888889 | 1/h | 28.48 | llm (0.6) | ijms-25-06998-t001:row26:col1, ijms-25-06998-t001:row26:col2, ijms-25-06998-t001:row26:col3, ijms-25-06998-t001:row39:col1, ijms-25-06998-t001:row39:col2, ijms-25-06998-t001:row39:col3 | — | not captured |
| ε (dihydroartemisinin) | `Q49` · kabs | 194.67 | dihydroartemisinin | not captured | [d] · [ihydroartemisinin] | 25.47 | llm (0.6) | ijms-25-06998-t001:row30:col2, ijms-25-06998-t001:row30:col3, ijms-25-06998-t001:row43:col2, ijms-25-06998-t001:row43:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'V/F' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'CL/F' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'CL2/F' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'CLm/(F∙Fm)' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'kenz' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'inter-individual variability (ω)' routed out of structural estimates ('* inter-individual variability (ω); IIVs in hamsters could not be estimated since the naïve-pooled method was used for PK modeling.')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'F∙Fm' (V1)
- unit_dimension_unknown: 'F∙Fm' (CL)
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['ijms-25-06998-t001:row27:col2', 'ijms-25-06998-t001:row27:col3', 'ijms-25-06998-t001:row40:col2', 'ijms-25-06998-t001:row40:col3'])
- dropped PD-category row 'EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['ijms-25-06998-t001:row28:col2', 'ijms-25-06998-t001:row28:col3', 'ijms-25-06998-t001:row41:col2', 'ijms-25-06998-t001:row41:col3'])
- routed 'ε (artesunate)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- unit_dimension_unknown: 'dihydroartemisinin' (kabs)
- unit inherited for kabs (Q49): 'dihydroartemisinin' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'ka' → 1/h (from the paper text: "Text: 'The ka for artesunate was estimated to be 2.08−1 in hamsters and 1.54 h−1 in rats' — ka is a first-order rate con")
- implicit units: 'V/F' → L/kg (from the paper text: "Text reports volumes per kg for artesunate: 'the Vss/F of artesunate was calculated to be 1571.71 and 514.08 L/kg in ham")
- implicit units: 'CL/F' → L/h/kg (from the paper text: "Text: 'the CL/F of artesunate was estimated to be 3555.94 and 13.33 L/kg in hamsters and rats' — the value 13.33 matches")
- implicit units: 'V2/F' → L/kg (from the paper text: 'Volumes of distribution are reported per kg in the text (e.g., Vss/F of artesunate in L/kg); V2/F is a peripheral volume')
- implicit units: 'CL2/F' → L/h/kg (from the popPK convention: 'Q/F is an intercompartmental clearance; the paper reports clearances per kg (pyronaridine CL/F in L/h/kg), so L/h/kg by ')
- implicit units: 'Vm/(F∙Fm)' → L/kg (from the paper text: "Text: 'the Vm/(F∙Fm) of dihydroartemisinin was estimated to be 0.02 and 0.16 L/kg in hamsters and rats, respectively' — ")
- implicit units: 'CLm/(F∙Fm)' → L/h/kg (from the popPK convention: 'CLm/(F·Fm) is a metabolite clearance; text reports scaled values in L/h and per-kg clearances in L/h/kg (e.g., pyronarid')
- implicit units: 'kenz' → 1/h (from the popPK convention: "kenz is an elimination rate constant; first-order rate constants are in reciprocal time (text: 'first-order rate constan")
- metabolite volume: 'Vm/(F∙Fm)' Q63→Q61 for dihydroartemisinin — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pyronaridine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 59 linked by role; re-tagged parent→pyronaridine ×41, parent→artesunate ×13, parent→dihydroartemisinin ×13
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.44 (11/25 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 13.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 13.33 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2/f]` | not captured | 82.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2/f]` | 82.69 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1.54 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.54 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 33.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 33.03 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | 481.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 481.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ε]` | 0.20 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ε]` | not captured | 35.19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ε].parameter_id` | Q49 | Q45 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | pyronaridine tetraphosphate/artesunate | pyronaridine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row25:col2', 'ijms-25-06998-t001:row25:col3', 'ijms-25-06998-t001:row38:col2', 'ijms-25-06998-t001:row38:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row5:col2', 'ijms-25-06998-t001:row5:col3', 'ijms-25-06998-t001:row10:col2', 'ijms-25-06998-t001:row10:col3', 'ijms-25-06998-t001:row16:col2', 'ijms-25-06998-t001:row16:col3', 'ijms-25-06998-t001:row23:col2', 'ijms-25-06998-t001:row23:col3', 'ijms-25-06998-t001:row35:col2', 'ijms-25-06998-t001:row35:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row26:col1', 'ijms-25-06998-t001:row26:col2', 'ijms-25-06998-t001:row26:col3', 'ijms-25-06998-t001:row39:col1', 'ijms-25-06998-t001:row39:col2', 'ijms-25-06998-t001:row39:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row3:col1', 'ijms-25-06998-t001:row3:col2', 'ijms-25-06998-t001:row3:col3', 'ijms-25-06998-t001:row8:col1', 'ijms-25-06998-t001:row8:col2', 'ijms-25-06998-t001:row8:col3', 'ijms-25-06998-t001:row13:col1', 'ijms-25-06998-t001:row13:col2', 'ijms-25-06998-t001:row13:col3', 'ijms-25-06998-t001:row21:col1', 'ijms-25-06998-t001:row21:col2', 'ijms-25-06998-t001:row21:col3', 'ijms-25-06998-t001:row32:col1', 'ijms-25-06998-t001:row32:col2', 'ijms-25-06998-t001:row32:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['ijms-25-06998-t001:row24:col2', 'ijms-25-06998-t001:row24:col3', 'ijms-25-06998-t001:row37:col2', 'ijms-25-06998-t001:row37:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row17:col2', 'ijms-25-06998-t001:row17:col3', 'ijms-25-06998-t001:row36:col2', 'ijms-25-06998-t001:row36:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['ijms-25-06998-t001:row4:col2', 'ijms-25-06998-t001:row4:col3', 'ijms-25-06998-t001:row9:col2', 'ijms-25-06998-t001:row9:col3', 'ijms-25-06998-t001:row14:col2', 'ijms-25-06998-t001:row14:col3', 'ijms-25-06998-t001:row22:col2', 'ijms-25-06998-t001:row22:col3', 'ijms-25-06998-t001:row33:col2', 'ijms-25-06998-t001:row33:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['ijms-25-06998-t001:row15:col2', 'ijms-25-06998-t001:row15:col3', 'ijms-25-06998-t001:row34:col2', 'ijms-25-06998-t001:row34:col3'] |
| C5_unit_missing_Q306 | fail | 1 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row6:col2', 'ijms-25-06998-t001:row6:col3', 'ijms-25-06998-t001:row11:col2', 'ijms-25-06998-t001:row11:col3', 'ijms-25-06998-t001:row18:col2', 'ijms-25-06998-t001:row18:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | dihydroartemisinin | not captured | not captured | ['ijms-25-06998-t001:row30:col2', 'ijms-25-06998-t001:row30:col3', 'ijms-25-06998-t001:row43:col2', 'ijms-25-06998-t001:row43:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | fail | clearance within physiological range | 1.66e+04 L/h | not captured | not captured | ['ijms-25-06998-t001:row25:col2', 'ijms-25-06998-t001:row25:col3', 'ijms-25-06998-t001:row38:col2', 'ijms-25-06998-t001:row38:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 933 L/h | not captured | not captured | ['ijms-25-06998-t001:row5:col2', 'ijms-25-06998-t001:row5:col3', 'ijms-25-06998-t001:row10:col2', 'ijms-25-06998-t001:row10:col3', 'ijms-25-06998-t001:row16:col2', 'ijms-25-06998-t001:row16:col3', 'ijms-25-06998-t001:row23:col2', 'ijms-25-06998-t001:row23:col3', 'ijms-25-06998-t001:row35:col2', 'ijms-25-06998-t001:row35:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.2 L | not captured | not captured | ['ijms-25-06998-t001:row24:col2', 'ijms-25-06998-t001:row24:col3', 'ijms-25-06998-t001:row37:col2', 'ijms-25-06998-t001:row37:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.31e+03 L | not captured | not captured | ['ijms-25-06998-t001:row4:col2', 'ijms-25-06998-t001:row4:col3', 'ijms-25-06998-t001:row9:col2', 'ijms-25-06998-t001:row9:col3', 'ijms-25-06998-t001:row14:col2', 'ijms-25-06998-t001:row14:col3', 'ijms-25-06998-t001:row22:col2', 'ijms-25-06998-t001:row22:col3', 'ijms-25-06998-t001:row33:col2', 'ijms-25-06998-t001:row33:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 3.37e+04 L | not captured | not captured | ['ijms-25-06998-t001:row15:col2', 'ijms-25-06998-t001:row15:col3', 'ijms-25-06998-t001:row34:col2', 'ijms-25-06998-t001:row34:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pyronaridine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kang_2024` / `Kang_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:25 UTC</sub>
