<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artenimol&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/&quot;},{&quot;label&quot;:&quot;Kang_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artenimol_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/Artenimol_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artenimol — `Artenimol_Kang2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `artesunate`, measured `dihydroartemisinin`.

## Citation
Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024)
  ·  DOI: [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998)

## Model component
<dbs-pgx drug="artenimol" model-id="Artenimol_Kang2024_reference" status="needs_review" stale="false" population="hamsters, rats, and dogs (preclinical allometric scaling to humans)" measured-compound="dihydroartemisinin" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, CLm,norm/F, Q/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 1.54 | 1/h | 0.0004277777777777778 | 1/h | 24.85 | exact (1.0) | ijms-25-06998-t001:row3:col1, ijms-25-06998-t001:row3:col2, ijms-25-06998-t001:row3:col3, ijms-25-06998-t001:row8:col1, ijms-25-06998-t001:row8:col2, ijms-25-06998-t001:row8:col3, ijms-25-06998-t001:row13:col1, ijms-25-06998-t001:row13:col2, ijms-25-06998-t001:row13:col3, ijms-25-06998-t001:row21:col1, ijms-25-06998-t001:row21:col2, ijms-25-06998-t001:row21:col3, ijms-25-06998-t001:row32:col1, ijms-25-06998-t001:row32:col2, ijms-25-06998-t001:row32:col3 | — | 0.02 (13.44% RSE) |
| V/F | `Q76` · V/F | 33.03 | L/kg | 2.3121 | L | 14.81 | exact (1.0) | ijms-25-06998-t001:row4:col2, ijms-25-06998-t001:row4:col3, ijms-25-06998-t001:row9:col2, ijms-25-06998-t001:row9:col3, ijms-25-06998-t001:row14:col2, ijms-25-06998-t001:row14:col3, ijms-25-06998-t001:row22:col2, ijms-25-06998-t001:row22:col3, ijms-25-06998-t001:row33:col2, ijms-25-06998-t001:row33:col3 | — | 1.69 (16.25% RSE) |
| CL/F | `Q27` · CL/F | 13.33 | L/h/kg | 0.00025919444444444444 | L/h | 14.61 | exact (1.0) | ijms-25-06998-t001:row5:col2, ijms-25-06998-t001:row5:col3, ijms-25-06998-t001:row10:col2, ijms-25-06998-t001:row10:col3, ijms-25-06998-t001:row16:col2, ijms-25-06998-t001:row16:col3, ijms-25-06998-t001:row23:col2, ijms-25-06998-t001:row23:col3, ijms-25-06998-t001:row35:col2, ijms-25-06998-t001:row35:col3 | — | 0.04 (28.17% RSE) |
| V2/F | `Q82` · V2/F | 481.05 | L/kg | 33.673500000000004 | L | 21.47 | exact (1.0) | ijms-25-06998-t001:row15:col2, ijms-25-06998-t001:row15:col3, ijms-25-06998-t001:row34:col2, ijms-25-06998-t001:row34:col3 | — | not captured |
| CL2/F | `Q69` · Q/F | 82.69 | L/h/kg | 0.001607861111111111 | L/h | 13.45 | exact (1.0) | ijms-25-06998-t001:row17:col2, ijms-25-06998-t001:row17:col3, ijms-25-06998-t001:row36:col2, ijms-25-06998-t001:row36:col3 | — | 0.18 (0.06% RSE) |
| Vm/(F∙Fm) | `Q61` · V | 0.16 | L/kg | 0.011200000000000002 | L | 25.23 | exact (1.0) | ijms-25-06998-t001:row24:col2, ijms-25-06998-t001:row24:col3, ijms-25-06998-t001:row37:col2, ijms-25-06998-t001:row37:col3 | — | not captured |
| CLm/(F∙Fm) | `Q375` · CLm,norm/F | 237.25 | L/h/kg | 0.004613194444444444 | L/h | 34.09 | exact (1.0) | ijms-25-06998-t001:row25:col2, ijms-25-06998-t001:row25:col3, ijms-25-06998-t001:row38:col2, ijms-25-06998-t001:row38:col3 | — | not captured |
| kenz | `Q305` · kfm | 1.04 | 1/h | 0.0002888888888888889 | 1/h | 28.48 | exact (1.0) | ijms-25-06998-t001:row26:col1, ijms-25-06998-t001:row26:col2, ijms-25-06998-t001:row26:col3, ijms-25-06998-t001:row39:col1, ijms-25-06998-t001:row39:col2, ijms-25-06998-t001:row39:col3 | — | not captured |
| ε (artesunate) | `Q49` · kabs | 35.19 | artesunate | not captured | [artesunate] | 18.81 | llm (0.6) | ijms-25-06998-t001:row29:col2, ijms-25-06998-t001:row29:col3, ijms-25-06998-t001:row42:col2, ijms-25-06998-t001:row42:col3 | — | not captured |
| ε (dihydroartemisinin) | `Q40` · Fab | 194.67 | dihydroartemisinin | not captured | [d] · [ihydroartemisinin] | 25.47 | llm (0.6) | ijms-25-06998-t001:row30:col2, ijms-25-06998-t001:row30:col3, ijms-25-06998-t001:row43:col2, ijms-25-06998-t001:row43:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'V/F' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'CL/F' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'CL2/F' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'CLm/(F∙Fm)' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: 'kenz' routed out of structural estimates ('IIV * (%RSE)')
- table section iiv: '* inter-individual variability (ω)' routed out of structural estimates ('* inter-individual variability (ω); IIVs in hamsters could not be estimated since the naïve-pooled method was used for PK modeling.')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'ε' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- unit_dimension_unknown: 'F∙Fm' (V1)
- unit_dimension_unknown: 'F∙Fm' (CL)
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['ijms-25-06998-t001:row27:col2', 'ijms-25-06998-t001:row27:col3', 'ijms-25-06998-t001:row40:col2', 'ijms-25-06998-t001:row40:col3'])
- dropped PD-category row 'EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['ijms-25-06998-t001:row28:col2', 'ijms-25-06998-t001:row28:col3', 'ijms-25-06998-t001:row41:col2', 'ijms-25-06998-t001:row41:col3'])
- unit_dimension_unknown: 'artesunate' (kabs)
- unit_dimension_unknown: 'dihydroartemisinin' (Fab)
- unit inherited for kabs (Q49): 'artesunate' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'ka' → 1/h (from the paper text: "Text: 'The ka for artesunate was estimated to be 2.08−1 in hamsters and 1.54 h−1 in rats'")
- implicit units: 'V/F' → L/kg (from the paper text: 'Text reports Vss/F of artesunate as 514.08 L/kg in rats; V/F is a volume parameter in the same per-kg model')
- implicit units: 'CL/F' → L/h/kg (from the paper text: "Text: 'the CL/F of artesunate was estimated to be 3555.94 and 13.33 L/kg in hamsters and rats' (clearance per kg, i.e., ")
- implicit units: 'V2/F' → L/kg (from the paper text: 'Volume of peripheral compartment in the same per-kg parameterization as Vss/F (514.08 L/kg)')
- implicit units: 'CL2/F' → L/h/kg (from the popPK convention: 'Intercompartmental clearance in the same per-kg clearance parameterization as CL/F (13.33 L/h/kg)')
- implicit units: 'Vm/(F∙Fm)' → L/kg (from the paper text: "Text: 'the Vm/(F∙Fm) of dihydroartemisinin was estimated to be 0.02 and 0.16 L/kg in hamsters and rats'")
- implicit units: 'CLm/(F∙Fm)' → L/h/kg (from the paper text: 'Metabolite clearance in the same per-kg parameterization; scaled value 48.68 L/h in rats corresponds to 237.25 in hamste')
- implicit units: 'kenz' → 1/h (from the popPK convention: "First-order rate constant governing metabolite formation; rate constants are in reciprocal time (h−1) per text: 'first-o")
- metabolite dihydroartemisinin: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- metabolite volume: 'Vm/(F∙Fm)' Q63→Q61 for dihydroartemisinin — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dihydroartemisinin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 66 linked by role; re-tagged parent→pyronaridine ×50, parent→dihydroartemisinin ×28
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row5:col2', 'ijms-25-06998-t001:row5:col3', 'ijms-25-06998-t001:row10:col2', 'ijms-25-06998-t001:row10:col3', 'ijms-25-06998-t001:row16:col2', 'ijms-25-06998-t001:row16:col3', 'ijms-25-06998-t001:row23:col2', 'ijms-25-06998-t001:row23:col3', 'ijms-25-06998-t001:row35:col2', 'ijms-25-06998-t001:row35:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row26:col1', 'ijms-25-06998-t001:row26:col2', 'ijms-25-06998-t001:row26:col3', 'ijms-25-06998-t001:row39:col1', 'ijms-25-06998-t001:row39:col2', 'ijms-25-06998-t001:row39:col3'] |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row25:col2', 'ijms-25-06998-t001:row25:col3', 'ijms-25-06998-t001:row38:col2', 'ijms-25-06998-t001:row38:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row3:col1', 'ijms-25-06998-t001:row3:col2', 'ijms-25-06998-t001:row3:col3', 'ijms-25-06998-t001:row8:col1', 'ijms-25-06998-t001:row8:col2', 'ijms-25-06998-t001:row8:col3', 'ijms-25-06998-t001:row13:col1', 'ijms-25-06998-t001:row13:col2', 'ijms-25-06998-t001:row13:col3', 'ijms-25-06998-t001:row21:col1', 'ijms-25-06998-t001:row21:col2', 'ijms-25-06998-t001:row21:col3', 'ijms-25-06998-t001:row32:col1', 'ijms-25-06998-t001:row32:col2', 'ijms-25-06998-t001:row32:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['ijms-25-06998-t001:row24:col2', 'ijms-25-06998-t001:row24:col3', 'ijms-25-06998-t001:row37:col2', 'ijms-25-06998-t001:row37:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ijms-25-06998-t001:row17:col2', 'ijms-25-06998-t001:row17:col3', 'ijms-25-06998-t001:row36:col2', 'ijms-25-06998-t001:row36:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['ijms-25-06998-t001:row4:col2', 'ijms-25-06998-t001:row4:col3', 'ijms-25-06998-t001:row9:col2', 'ijms-25-06998-t001:row9:col3', 'ijms-25-06998-t001:row14:col2', 'ijms-25-06998-t001:row14:col3', 'ijms-25-06998-t001:row22:col2', 'ijms-25-06998-t001:row22:col3', 'ijms-25-06998-t001:row33:col2', 'ijms-25-06998-t001:row33:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['ijms-25-06998-t001:row15:col2', 'ijms-25-06998-t001:row15:col3', 'ijms-25-06998-t001:row34:col2', 'ijms-25-06998-t001:row34:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | artesunate | not captured | not captured | ['ijms-25-06998-t001:row29:col2', 'ijms-25-06998-t001:row29:col3', 'ijms-25-06998-t001:row42:col2', 'ijms-25-06998-t001:row42:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 933 L/h | not captured | not captured | ['ijms-25-06998-t001:row5:col2', 'ijms-25-06998-t001:row5:col3', 'ijms-25-06998-t001:row10:col2', 'ijms-25-06998-t001:row10:col3', 'ijms-25-06998-t001:row16:col2', 'ijms-25-06998-t001:row16:col3', 'ijms-25-06998-t001:row23:col2', 'ijms-25-06998-t001:row23:col3', 'ijms-25-06998-t001:row35:col2', 'ijms-25-06998-t001:row35:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.2 L | not captured | not captured | ['ijms-25-06998-t001:row24:col2', 'ijms-25-06998-t001:row24:col3', 'ijms-25-06998-t001:row37:col2', 'ijms-25-06998-t001:row37:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.31e+03 L | not captured | not captured | ['ijms-25-06998-t001:row4:col2', 'ijms-25-06998-t001:row4:col3', 'ijms-25-06998-t001:row9:col2', 'ijms-25-06998-t001:row9:col3', 'ijms-25-06998-t001:row14:col2', 'ijms-25-06998-t001:row14:col3', 'ijms-25-06998-t001:row22:col2', 'ijms-25-06998-t001:row22:col3', 'ijms-25-06998-t001:row33:col2', 'ijms-25-06998-t001:row33:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 3.37e+04 L | not captured | not captured | ['ijms-25-06998-t001:row15:col2', 'ijms-25-06998-t001:row15:col3', 'ijms-25-06998-t001:row34:col2', 'ijms-25-06998-t001:row34:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_artenimol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kang_2024` / `Kang_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:35 UTC</sub>
