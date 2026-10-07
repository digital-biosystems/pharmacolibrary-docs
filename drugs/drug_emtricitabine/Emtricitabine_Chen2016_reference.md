<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;emtricitabine&quot;,&quot;href&quot;:&quot;drugs/drug_emtricitabine/&quot;},{&quot;label&quot;:&quot;Chen_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emtricitabine_Valade2014_reference&quot;,&quot;label&quot;:&quot;Valade_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emtricitabine/Emtricitabine_Valade2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# emtricitabine — `Emtricitabine_Chen2016_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `TDF/FTC`, measured `emtricitabine`.

## Citation
Chen X et al., Model Linking Plasma and Intracellular…, PloS one (2016)
  ·  DOI: [10.1371/journal.pone.0165505](https://doi.org/10.1371/journal.pone.0165505)

## Model component
<dbs-pgx drug="emtricitabine" model-id="Emtricitabine_Chen2016_reference" status="needs_review" stale="false" population="HIV-positive and HIV-negative subjects" measured-compound="emtricitabine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 8 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (day-1) | `Q49` · kabs | 13.8 | day-1 | 0.00015972222222222223 | [1] / [d] | not captured | exact (1.0) | pone.0165505.t001:row4:col1, pone.0165505.t001:row4:col2, pone.0165505.t001:row27:col1, pone.0165505.t001:row27:col2 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 5.91 | L | 0.00591 | [l] | not captured | exact (1.0) | pone.0165505.t001:row5:col1, pone.0165505.t001:row5:col2, pone.0165505.t001:row28:col1, pone.0165505.t001:row28:col2 | — | 0.288 (None% RSE) |
| CL/F (L/day) | `Q27` · CL/F | 3.98 | L/day | 4.6064814814814814e-08 | [l] / [d] | not captured | exact (1.0) | pone.0165505.t001:row6:col1, pone.0165505.t001:row6:col2, pone.0165505.t001:row29:col1, pone.0165505.t001:row29:col2 | — | 0.117 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 13.5 | L | 0.0135 | [l] | not captured | exact (1.0) | pone.0165505.t001:row7:col1, pone.0165505.t001:row7:col2, pone.0165505.t001:row30:col1, pone.0165505.t001:row30:col2 | — | 0.0335 (None% RSE) |
| Q/F (L/day) | `Q69` · Q/F | 8.94 | L/day | 1.0347222222222222e-07 | [l] / [d] | not captured | exact (1.0) | pone.0165505.t001:row8:col1, pone.0165505.t001:row8:col2, pone.0165505.t001:row31:col1, pone.0165505.t001:row31:col2 | — | 0.0693 (None% RSE) |
| Kf (day-1) | `Q305` · kfm | 9.52 | day-1 | 0.00011018518518518517 | [1] / [d] | not captured | exact (1.0) | pone.0165505.t001:row11:col1, pone.0165505.t001:row11:col2, pone.0165505.t001:row35:col1, pone.0165505.t001:row35:col2 | — | 0.238 (None% RSE) |
| Kel (day-1) | `Q47` · kel | 4.89 | day-1 | 5.659722222222222e-05 | [1] / [d] | not captured | exact (1.0) | pone.0165505.t001:row13:col1, pone.0165505.t001:row13:col2, pone.0165505.t001:row37:col1, pone.0165505.t001:row37:col2 | — | 0.316 (None% RSE) |
| HIV on Kf (Linear) | `Q305` · kfm | 26.9 | Linear | not captured | [l] · [inear] | not captured | llm_confirmed (0.6) | pone.0165505.t001:row39:col1, pone.0165505.t001:row39:col2 | — | not captured |
| theta_v1_f_sex | `Q900` · theta_v1_f_sex | 35.9 | not captured | not captured | not captured | not captured | not captured (not captured) | pone.0165505.t001:row32:col1, pone.0165505.t001:row32:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Vc/F (L)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'CL/F (L/day)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Q/F (L/day)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'σ (exponential)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Kf (day-1)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Kel (day-1)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'σ (proportional)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'R0 (fmol/106cells)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'EC50,TFV-DP (fmol/106cells)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'EC50_FTC-TP (fmol/106cells)' routed out of structural estimates ('Interindividual Variability')
- dropped unlinked row (NIL): 'SC50_TFV' — extend the ontology if this is a real PK parameter (source ['pone.0165505.t001:row12:col1', 'pone.0165505.t001:row12:col2'])
- dropped PD-category row 'R (%)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row14:col1', 'pone.0165505.t001:row14:col2', 'pone.0165505.t001:row38:col1', 'pone.0165505.t001:row38:col2'])
- dropped PD-category row 'R0 (fmol/106cells)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row17:col1', 'pone.0165505.t001:row17:col2', 'pone.0165505.t001:row21:col1', 'pone.0165505.t001:row21:col2', 'pone.0165505.t001:row42:col1', 'pone.0165505.t001:row42:col2', 'pone.0165505.t001:row46:col1', 'pone.0165505.t001:row46:col2'])
- dropped PD-category row 'EC50,TFV-DP (fmol/106cells)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row18:col1', 'pone.0165505.t001:row18:col2', 'pone.0165505.t001:row22:col1', 'pone.0165505.t001:row22:col2'])
- dropped PD-category row 'gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row23:col1', 'pone.0165505.t001:row23:col2'])
- dropped unlinked row (NIL): 'SC50_FTC' — extend the ontology if this is a real PK parameter (source ['pone.0165505.t001:row36:col1', 'pone.0165505.t001:row36:col2'])
- unit_dimension_unknown: 'Linear' (kfm)
- dropped PD-category row 'EC50_FTC-TP (fmol/106cells)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row43:col1', 'pone.0165505.t001:row43:col2', 'pone.0165505.t001:row47:col1', 'pone.0165505.t001:row47:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=emtricitabine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 8 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 48 linked by role; re-tagged parent→TFV-diphosphate ×7, parent→FTC-triphosphate ×12
- molar mass: LLM call failed (RateLimitError) — metabolites left in mass units
- molar mass: none found for 'FTC-triphosphate' — its concentrations stay mass-only
- molar mass: none found for 'TFV-diphosphate' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pone.0165505.t001:row4:col3 = '58.9, 101'
- unparsed cell pone.0165505.t001:row4:col4 = '56.9, 124'
- unparsed cell pone.0165505.t001:row5:col3 = '313, 467'
- unparsed cell pone.0165505.t001:row5:col4 = '295, 465'
- unparsed cell pone.0165505.t001:row5:col8 = '0.171, 0.405'
- unparsed cell pone.0165505.t001:row5:col9 = '1.17E-9, 0.435'
- unparsed cell pone.0165505.t001:row6:col3 = '1270, 1550'
- unparsed cell pone.0165505.t001:row6:col4 = '1290, 1540'
- unparsed cell pone.0165505.t001:row6:col8 = '0.0498, 0.184'
- unparsed cell pone.0165505.t001:row6:col9 = '0.0588, 0.184'
- unparsed cell pone.0165505.t001:row7:col3 = '769, 985'
- unparsed cell pone.0165505.t001:row7:col4 = '785, 1060'
- unparsed cell pone.0165505.t001:row8:col3 = '4760, 6020'
- unparsed cell pone.0165505.t001:row8:col4 = '4580, 6310'
- unparsed cell pone.0165505.t001:row8:col8 = '0.0246, 0.136'
- unparsed cell pone.0165505.t001:row8:col9 = '0.00375, 0.221'
- unparsed cell pone.0165505.t001:row9:col8 = '0.0451, 0.104'
- unparsed cell pone.0165505.t001:row9:col9 = '0.0498, 0.107'
- unparsed cell pone.0165505.t001:row11:col3 = '0.877, 1.92'
- unparsed cell pone.0165505.t001:row11:col4 = '0.872, 2.39'
- unparsed cell pone.0165505.t001:row11:col8 = '0.0444, 0.432'
- unparsed cell pone.0165505.t001:row11:col9 = '0.0994, 0.444'
- unparsed cell pone.0165505.t001:row12:col3 = '5.06, 8.04'
- unparsed cell pone.0165505.t001:row12:col4 = '5.08, 9.94'
- unparsed cell pone.0165505.t001:row13:col3 = '0.175, 0.281'
- unparsed cell pone.0165505.t001:row13:col4 = '0.181, 0.311'
- unparsed cell pone.0165505.t001:row13:col8 = '0.0867, 0.545'
- unparsed cell pone.0165505.t001:row13:col9 = '0.0984, 0.587'
- unparsed cell pone.0165505.t001:row14:col3 = '4.47, 7.17'
- unparsed cell pone.0165505.t001:row14:col4 = '4.63, 8.86'
- unparsed cell pone.0165505.t001:row15:col8 = '0.0942, 0.136'
- unparsed cell pone.0165505.t001:row15:col9 = '0.0936, 0.136'
- unparsed cell pone.0165505.t001:row17:col3 = '143, 167'
- unparsed cell pone.0165505.t001:row17:col4 = '142, 167'
- unparsed cell pone.0165505.t001:row17:col8 = '0.173, 0.267'
- unparsed cell pone.0165505.t001:row17:col9 = '0.173, 0.27'
- unparsed cell pone.0165505.t001:row18:col3 = '361, 2890'
- unparsed cell pone.0165505.t001:row18:col4 = '464, 14700'
- unparsed cell pone.0165505.t001:row18:col8 = '0.336, 3.06'
- unparsed cell pone.0165505.t001:row18:col9 = '0.465, 33.4'
- unparsed cell pone.0165505.t001:row19:col8 = '0.233, 0.283'
- unparsed cell pone.0165505.t001:row19:col9 = '0.232, 0.279'
- unparsed cell pone.0165505.t001:row21:col3 = '222, 268'
- unparsed cell pone.0165505.t001:row21:col4 = '241, 273'
- unparsed cell pone.0165505.t001:row21:col8 = '0.146, 0.26'
- unparsed cell pone.0165505.t001:row21:col9 = '0.128, 0.209'
- unparsed cell pone.0165505.t001:row22:col3 = '12.4, 240'
- unparsed cell pone.0165505.t001:row22:col4 = '14.3, 268'
- unparsed cell pone.0165505.t001:row23:col3 = '0.448, 1.41'
- unparsed cell pone.0165505.t001:row23:col4 = '0.46, 1.8'
- unparsed cell pone.0165505.t001:row24:col8 = '0.242, 0.292'
- unparsed cell pone.0165505.t001:row24:col9 = '0.234, 0.284'
- unparsed cell pone.0165505.t001:row27:col3 = '40.6, 70.8'
- unparsed cell pone.0165505.t001:row27:col4 = '41.9, 2.70E+9'
- unparsed cell pone.0165505.t001:row28:col3 = '87.9, 111'
- unparsed cell pone.0165505.t001:row28:col4 = '87.2, 112'
- unparsed cell pone.0165505.t001:row28:col8 = '0.0138, 0.05'
- unparsed cell pone.0165505.t001:row28:col9 = '0.0112, 0.0481'
- unparsed cell pone.0165505.t001:row29:col3 = '444, 520'
- unparsed cell pone.0165505.t001:row29:col4 = '440, 514'
- unparsed cell pone.0165505.t001:row29:col8 = '0.0111, 0.177'
- unparsed cell pone.0165505.t001:row29:col9 = '0.0214, 0.186'
- unparsed cell pone.0165505.t001:row30:col3 = '122, 210'
- unparsed cell pone.0165505.t001:row30:col4 = '107, 239'
- unparsed cell pone.0165505.t001:row30:col8 = '0.00488, 0.0621'
- unparsed cell pone.0165505.t001:row30:col9 = '2.13E-50, 1.25'
- unparsed cell pone.0165505.t001:row31:col3 = '116, 166'
- unparsed cell pone.0165505.t001:row31:col4 = '110, 191'
- unparsed cell pone.0165505.t001:row32:col3 = '7.21, 41.4'
- unparsed cell pone.0165505.t001:row32:col4 = '6.21, 41.6'
- unparsed cell pone.0165505.t001:row33:col8 = '0.073, 0.171'
- unparsed cell pone.0165505.t001:row33:col9 = '0.0781, 0.175'
- unparsed cell pone.0165505.t001:row35:col3 = '33.8, 49.4'
- unparsed cell pone.0165505.t001:row35:col4 = '35.6, 52.2'
- unparsed cell pone.0165505.t001:row35:col8 = '0.0062, 0.0654'
- unparsed cell pone.0165505.t001:row35:col9 = '0.0101, 0.0677'
- unparsed cell pone.0165505.t001:row36:col3 = '2530, 4110'
- unparsed cell pone.0165505.t001:row36:col4 = '2590, 4120'
- unparsed cell pone.0165505.t001:row37:col3 = '1.45, 1.75'
- unparsed cell pone.0165505.t001:row37:col4 = '1.43, 1.74'
- unparsed cell pone.0165505.t001:row37:col8 = '0.0167, 0.0955'
- unparsed cell pone.0165505.t001:row37:col9 = '0.0207, 0.101'
- unparsed cell pone.0165505.t001:row38:col3 = '12.4, 19.6'
- unparsed cell pone.0165505.t001:row38:col4 = '13.0, 21.1'
- unparsed cell pone.0165505.t001:row39:col3 = '14.8, 47.8'
- unparsed cell pone.0165505.t001:row39:col4 = '15.4, 50.3'
- unparsed cell pone.0165505.t001:row40:col8 = '0.0747, 0.114'
- unparsed cell pone.0165505.t001:row40:col9 = '0.0751, 0.116'
- unparsed cell pone.0165505.t001:row42:col3 = '711, 831'
- unparsed cell pone.0165505.t001:row42:col4 = '716, 825'
- unparsed cell pone.0165505.t001:row42:col8 = '0.154, 0.236'
- unparsed cell pone.0165505.t001:row42:col9 = '0.153, 0.239'
- unparsed cell pone.0165505.t001:row43:col3 = '24300, 80800'
- unparsed cell pone.0165505.t001:row43:col4 = '26900, 98700'
- unparsed cell pone.0165505.t001:row43:col8 = '0.118, 1.24'
- unparsed cell pone.0165505.t001:row43:col9 = '3.81E-8, 1.43'
- unparsed cell pone.0165505.t001:row44:col8 = '0.206, 0.252'
- unparsed cell pone.0165505.t001:row44:col9 = '0.205, 0.253'
- unparsed cell pone.0165505.t001:row46:col3 = '271, 399'
- unparsed cell pone.0165505.t001:row46:col4 = '271, 396'
- unparsed cell pone.0165505.t001:row46:col8 = '0.302, 0.464'
- unparsed cell pone.0165505.t001:row46:col9 = '0.293, 0.468'
- unparsed cell pone.0165505.t001:row47:col3 = '11200, 32900'
- unparsed cell pone.0165505.t001:row47:col4 = '11800, 32900'
- unparsed cell pone.0165505.t001:row47:col8 = '0.24, 1.80'
- unparsed cell pone.0165505.t001:row47:col9 = '0.325. 2.1'
- unparsed cell pone.0165505.t001:row48:col8 = '0.328, 0.384'
- unparsed cell pone.0165505.t001:row48:col9 = '0.327, 0.385'
- LLM selected parameter table(s) 1
- LLM region Chen_2016:results_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 13:29:32 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}
- LLM region Chen_2016:results_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 13:29:36 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 55.6 | 1.029 | 0.0185 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pone.0165505.t001:row6:col1', 'pone.0165505.t001:row6:col2', 'pone.0165505.t001:row29:col1', 'pone.0165505.t001:row29:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pone.0165505.t001:row5:col1', 'pone.0165505.t001:row5:col2', 'pone.0165505.t001:row28:col1', 'pone.0165505.t001:row28:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['pone.0165505.t001:row11:col1', 'pone.0165505.t001:row11:col2', 'pone.0165505.t001:row35:col1', 'pone.0165505.t001:row35:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['pone.0165505.t001:row13:col1', 'pone.0165505.t001:row13:col2', 'pone.0165505.t001:row37:col1', 'pone.0165505.t001:row37:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pone.0165505.t001:row4:col1', 'pone.0165505.t001:row4:col2', 'pone.0165505.t001:row27:col1', 'pone.0165505.t001:row27:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pone.0165505.t001:row8:col1', 'pone.0165505.t001:row8:col2', 'pone.0165505.t001:row31:col1', 'pone.0165505.t001:row31:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pone.0165505.t001:row7:col1', 'pone.0165505.t001:row7:col2', 'pone.0165505.t001:row30:col1', 'pone.0165505.t001:row30:col2'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | Linear | not captured | not captured | ['pone.0165505.t001:row39:col1', 'pone.0165505.t001:row39:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.166 L/h | not captured | not captured | ['pone.0165505.t001:row6:col1', 'pone.0165505.t001:row6:col2', 'pone.0165505.t001:row29:col1', 'pone.0165505.t001:row29:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 5.91 L | not captured | not captured | ['pone.0165505.t001:row5:col1', 'pone.0165505.t001:row5:col2', 'pone.0165505.t001:row28:col1', 'pone.0165505.t001:row28:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 13.5 L | not captured | not captured | ['pone.0165505.t001:row7:col1', 'pone.0165505.t001:row7:col2', 'pone.0165505.t001:row30:col1', 'pone.0165505.t001:row30:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_emtricitabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2016` / `Chen_2016::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:59 UTC</sub>
