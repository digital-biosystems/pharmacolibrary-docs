<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;niraparib&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/&quot;},{&quot;label&quot;:&quot;Monk_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niraparib_Gaffney2026_reference&quot;,&quot;label&quot;:&quot;Gaffney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Gaffney2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Niraparib_Quesada2025_reference&quot;,&quot;label&quot;:&quot;Quesada_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Quesada2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niraparib — `Niraparib_Monk2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024)
  ·  DOI: [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001)

## Model component
<dbs-pgx drug="niraparib" model-id="Niraparib_Monk2024_reference" status="rejected" stale="false" population="patients with solid tumors including ovarian cancer" measured-compound="niraparib" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F, L/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vc/F, L' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Q1/F, L/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vp1/F, L' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'K a , 1/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'D1, fasted, h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'T lag , h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'F rel (-)' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Q2/F, L/h' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vp2/F, L' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'CL/F: age exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'CL/F: albumin exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'CL/F: nCrCl exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'Vc/F: BW exponent' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'D1: fed fractional change' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section iiv: 'D1: unknown prandial state fractional change' routed out of structural estimates ('Fixed effects typical values and IIV CV')
- table section residual_error: 'Residual variability: SD PN001, log (ng/mL)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Residual variability: SD NOVA, log (ng/mL)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Residual variability: SD QUADRA, log (ng/mL)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Residual variability: SD PRIMA, log (ng/mL)' routed out of structural estimates ('Residual error')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=niraparib
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell tab_1:row3:col3 = '16.5 (16.0-16.9)'
- unparsed cell tab_1:row3:col6 = '23.1 (19.1-26.9)'
- unparsed cell tab_1:row4:col3 = '418 (379-452)'
- unparsed cell tab_1:row5:col3 = '1.37 (0.979-1.78)'
- unparsed cell tab_1:row6:col3 = '313 (274-359)'
- unparsed cell tab_1:row7:col3 = '1.03 (0.850-1.21)'
- unparsed cell tab_1:row7:col6 = '70.7 (54.1-88.3)'
- unparsed cell tab_1:row8:col3 = '0.219 (0.0930-0.354)'
- unparsed cell tab_1:row8:col6 = '232 (173-349)'
- unparsed cell tab_1:row9:col3 = '0.469 (0.393-0.575)'
- unparsed cell tab_1:row10:col6 = '30.9 (27.7-34.3)'
- unparsed cell tab_1:row11:col3 = '69.4 (60.5-81.5)'
- unparsed cell tab_1:row12:col3 = '582 (509-661)'
- unparsed cell tab_1:row12:col6 = '113 (87.7-146)'
- unparsed cell tab_1:row13:col3 = '-0.183 (-0.369 to -0.0188)'
- unparsed cell tab_1:row14:col3 = '0.488 (0.310-0.663)'
- unparsed cell tab_1:row15:col3 = '0.240 (0.145-0.327)'
- unparsed cell tab_1:row16:col3 = '0.461 (0.270-0.629)'
- unparsed cell tab_1:row17:col3 = '16.7 (7.10-28.3)'
- unparsed cell tab_1:row18:col3 = '1.46 (0.610-3.75)'
- unparsed cell tab_1:row20:col3 = '0.214 (0.196-0.233)'
- unparsed cell tab_1:row21:col3 = '0.330 (0.297-0.361)'
- unparsed cell tab_1:row22:col3 = '0.379 (0.341-0.422)'
- unparsed cell tab_1:row23:col3 = '0.455 (0.423-0.491)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_niraparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Monk_2024` / `Monk_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:09 UTC</sub>
