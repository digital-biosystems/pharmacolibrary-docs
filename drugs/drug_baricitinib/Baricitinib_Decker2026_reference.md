<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;,&quot;href&quot;:&quot;drugs/drug_baricitinib/&quot;},{&quot;label&quot;:&quot;Decker_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baricitinib — `Baricitinib_Decker2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Decker RL et al., A Population Pharmacokinetic and Exposu…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-025-01563-8](https://doi.org/10.1007/s40262-025-01563-8)

## Model component
<dbs-pgx drug="baricitinib" model-id="Baricitinib_Decker2026_reference" status="rejected" stale="false" population="pediatric patients with atopic dermatitis" measured-compound="baricitinib" parameterization="apparent" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 1 covariate effect.

**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 (h) | `Q310` · D1 | 0.263 | h | 946.8000000000001 | [h] | 164 | exact (1.0) | Tab1:row1:col1, Tab1:row1:col3 | — | not captured |
| CLnr/F(L/h)b | `Q79` · CLNR | 2.76 | L/h | 7.666666666666666e-07 | L/h | 58.4 | llm (0.6) | Tab1:row3:col1, Tab1:row3:col3 | — | not captured |
| CLr/F (L/h)b | `Q26` · CLR | 7.9 | L/h | 2.1944444444444445e-06 | L/h | 62.3 | llm (0.6) | Tab1:row4:col1, Tab1:row4:col3 | — | not captured |
| V1/F (L)c | `Q290` · V1/F | 119 | L | 0.11900000000000001 | L | 12.7 | llm_confirmed (0.6) | Tab1:row5:col1, Tab1:row5:col3 | — | not captured |
| Q (L/h)d | `Q364` · Qd | 2.4 | L/h | 6.666666666666666e-07 | L/h | 15.1 | space_fold (0.95) | Tab1:row6:col1, Tab1:row6:col3 | — | not captured |
| V2/F (L)e | `Q82` · V2/F | 46.8 | L | 0.0468 | L | 117 | llm_confirmed (0.6) | Tab1:row7:col1, Tab1:row7:col3 | — | not captured |
| LAG (h) | `Q83` · tlag | 0.144 | h | 518.4 | [h] | not captured | llm (0.6) | Tab1:row8:col1 | — | not captured |
| Allometric scaling CLb | `Q19` · AUCt | 0.75 | %SEE | not captured | [s] · [%] · [ee] | not captured | llm_corrected (0.6) | Tab1:row9:col1 | — | not captured |
| Allometric scaling Vc,e | `Q63` · V1 | 1 | %SEE | not captured | [s] · [%] · [ee] | not captured | llm_confirmed (0.6) | Tab1:row10:col1 | — | not captured |
| theta_d1_category | `Q900` · theta_d1_category | 0.311 | h | not captured | not captured | not captured | not captured (not captured) | Tab1:row2:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '%SEE' (CLNR)
- unit_dimension_unknown: '%SEE' (CLR)
- unit_dimension_unknown: '%SEE' (V1/F)
- unit_dimension_unknown: '%SEE' (Qd)
- unit_dimension_unknown: '%SEE' (V2/F)
- unit_dimension_unknown: '%SEE' (AUCt)
- unit_dimension_unknown: '%SEE' (V1)
- dropped unlinked row (NIL): 'Covariate for change in eGFR on CLr/Ff' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col1'])
- implicit units: 'CLnr/F(L/h)b' → L/h (from the paper text: "Table 1 caption: 'CLnr/F apparent non-renal clearance'")
- implicit units: 'CLr/F (L/h)b' → L/h (from the paper text: "Table 1 caption: 'CLr/F apparent renal clearance'")
- implicit units: 'V1/F (L)c' → L (from the paper text: "Table 1 caption: 'V volume of distribution'")
- implicit units: 'Q (L/h)d' → L/h (from the popPK convention: 'Q is the intercompartmental clearance between central and peripheral compartments; conventionally expressed in L/h, cons')
- implicit units: 'V2/F (L)e' → L (from the paper text: "Table 1 caption: 'V volume of distribution'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baricitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = (CLnr/F+CLr/F)*((WTE/74)^
- model equation 'dQ = 2.4*((WTE/74)^' not bound — neither LHS nor base term 'WTE' linked to an ontology parameter
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab1:row1:col4 = '0.253 (0.232–0.295)'
- unparsed cell Tab1:row2:col4 = '0.395 (0.167–0.481)'
- unparsed cell Tab1:row3:col4 = '2.68 (2.51–3.03)'
- unparsed cell Tab1:row4:col2 = '1.00 E−10'
- unparsed cell Tab1:row4:col4 = '8.02 (7.44–8.38)'
- unparsed cell Tab1:row5:col4 = '119 (116–122)'
- unparsed cell Tab1:row6:col4 = '2.52 (2.19–2.63)'
- unparsed cell Tab1:row7:col4 = '46.5 (34.3–60.5)'
- unparsed cell Tab1:row8:col4 = '0.146 (0.135–0.151)'
- unparsed cell Tab1:row11:col4 = '0.00738 (0.00462–0.0115)'
- unparsed cell Tab1:row12:col4 = '0.295 (0.247–0.359)'
- unparsed cell Tab1:row13:col4 = '−0.0278 (−0.0360 to −0.0182)'
- unparsed cell Tab1:row14:col4 = '0.426 (0.411–0.441)'
- LLM selected parameter table(s) 1
- captured model equation F = (CLnr/F+CLr/F)*((WTE/74)^
- captured model equation dQ = 2.4*((WTE/74)^

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row4:col1', 'Tab1:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row5:col1', 'Tab1:row5:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab1:row1:col1', 'Tab1:row1:col3'] |
| C5_dimension_Q364 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row6:col1', 'Tab1:row6:col3'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row3:col1', 'Tab1:row3:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row7:col1', 'Tab1:row7:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab1:row8:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | %SEE | not captured | not captured | ['Tab1:row9:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | %SEE | not captured | not captured | ['Tab1:row10:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 119 L | not captured | not captured | ['Tab1:row5:col1', 'Tab1:row5:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 46.8 L | not captured | not captured | ['Tab1:row7:col1', 'Tab1:row7:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_baricitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Decker_2026` / `Decker_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:46 UTC</sub>
