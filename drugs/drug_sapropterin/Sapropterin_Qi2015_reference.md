<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sapropterin&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/&quot;},{&quot;label&quot;:&quot;Qi_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sapropterin_Feillet2008_reference&quot;,&quot;label&quot;:&quot;Feillet_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Feillet2008_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sapropterin_Muntau2017_reference&quot;,&quot;label&quot;:&quot;Muntau_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Muntau2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sapropterin_Qi2015_reference&quot;,&quot;label&quot;:&quot;Qi_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Qi2015_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sapropterin — `Sapropterin_Qi2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**The sapropterin (BH4) model was rejected because the absorption rate constant kabs (0.235) was reported without a usable unit (given only as 'units'), so it could not be expressed in reciprocal hours and failed the dimensional check on a structural parameter.**

The record for sapropterin in infants, young children and adults with phenylketonuria lists kabs, the absorption rate constant, with value 0.235 and unit 'units' rather than a reciprocal-time unit such as 1/h. Without a proper unit the value could not be converted to a consistent time base, so the dimensional consistency check on this structural parameter failed. The other parameters carry coherent units (CL/F 2710 L/h, V/F 3010 L, tlag 0.321 h, C0 16.6 μg/L), so the failure is confined to kabs. Extracted — sapropterin (BH4): CL/F 2.71e+03 L/h, V/F 3.01e+03 L, kabs 0.235 units, tlag 0.321 h, C0 16.6 μg/L.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `sapropterin dihydrochloride`, measured `sapropterin (BH4)`.

## Citation
Qi Y; Mould DR; Zhou H; Merilainen M; Musson DG et al. (2015). Clinical pharmacokinetics 54
  ·  DOI: [10.1007/s40262-014-0196-4](https://doi.org/10.1007/s40262-014-0196-4)

## Model component
<dbs-pgx drug="sapropterin" model-id="Sapropterin_Qi2015_reference" status="rejected" stale="false" population="infants and young children with phenylketonuria (pooled with adults)" measured-compound="sapropterin (BH4)" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 2710 | L/h | 0.0007527777777777778 | [l] / [h] | 9.8 | exact (1.0) | Tab3:row1:col2 | — | not captured |
| Vc/F (L) | `Q76` · V/F | 3010 | L | 3.0100000000000002 | [l] | 43.9 | exact (1.0) | Tab3:row3:col2 | — | not captured |
| k a h-1 | `Q49` · kabs | 0.235 | units | not captured | [units] | 23.8 | llm (0.6) | Tab3:row5:col2 | — | not captured |
| t lag (h) | `Q83` · tlag | 0.321 | h | 1155.6000000000001 | [h] | 11.2 | space_fold (0.95) | Tab3:row6:col2 | — | not captured |
| C0 (μg/L) | `Q86` · C0 | 16.6 | μg/L | not captured | [µg] / [l] | 4.1 | exact (1.0) | Tab3:row7:col2 | — | not captured |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.864 | not captured | not captured | not captured | 7.3 | not captured (not captured) | Tab3:row2:col2 | — | not captured |
| theta_v1_f_weight | `Q900` · theta_v1_f_weight | 0.644 | not captured | not captured | not captured | 18.9 | not captured (not captured) | Tab3:row4:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k a h-1' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'C0 (μg/L)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sapropterin (BH4)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab3:row1:col1 = 'θ1'
- unparsed cell Tab3:row1:col3 = '2,708 (2,308–3,162)'
- unparsed cell Tab3:row2:col1 = 'θ6'
- unparsed cell Tab3:row2:col3 = '0.861 (0.751–0.980)'
- unparsed cell Tab3:row3:col1 = 'θ2'
- unparsed cell Tab3:row3:col3 = '3,967 (1,509–8,596)'
- unparsed cell Tab3:row4:col1 = 'θ7'
- unparsed cell Tab3:row4:col3 = '0.658 (0.399–0.827)'
- unparsed cell Tab3:row5:col1 = 'θ3'
- unparsed cell Tab3:row5:col3 = '0.284 (0.158–0.524)'
- unparsed cell Tab3:row6:col1 = 'θ4'
- unparsed cell Tab3:row6:col3 = '0.313 (0.246–0.400)'
- unparsed cell Tab3:row7:col1 = 'θ5'
- unparsed cell Tab3:row7:col3 = '16.39 (15.5–18.22)'
- unparsed cell Tab3:row8:col1 = 'θ8'
- unparsed cell Tab3:row8:col3 = '20.47 (17.95–26.0)'
- unparsed cell Tab3:row9:col1 = 'θ9'
- unparsed cell Tab3:row9:col3 = '30.312 (23.5–37.86)'
- unparsed cell Tab3:row10:col1 = 'η1'
- unparsed cell Tab3:row10:col3 = '45.85 (35.05–56.07)'
- unparsed cell Tab3:row11:col1 = 'η2'
- unparsed cell Tab3:row11:col3 = '54.67 (32.14–78.56)'
- unparsed cell Tab3:row12:col1 = 'η3'
- unparsed cell Tab3:row12:col3 = '36.16 (26.54–48.17)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 0.78 | 0.77 | 0.9872 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row1:col2'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['Tab3:row5:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col2'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | μg/L | not captured | not captured | ['Tab3:row7:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.71e+03 L/h | not captured | not captured | ['Tab3:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.01e+03 L | not captured | not captured | ['Tab3:row3:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sapropterin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Qi_2015` / `Qi_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-27 10:14 UTC</sub>
