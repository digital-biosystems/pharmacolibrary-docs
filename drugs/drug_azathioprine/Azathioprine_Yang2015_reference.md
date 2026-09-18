<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;azathioprine&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/&quot;},{&quot;label&quot;:&quot;Yang_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azathioprine_elYazigi1993_reference&quot;,&quot;label&quot;:&quot;el-Yazigi_1993_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Yang2015_reference&quot;,&quot;label&quot;:&quot;Yang_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Yang2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Azathioprine_Ding1979_reference&quot;,&quot;label&quot;:&quot;Ding_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Ding1979_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Lin2021_reference&quot;,&quot;label&quot;:&quot;Lin_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Lin2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Rosario2017_reference&quot;,&quot;label&quot;:&quot;Rosario_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Rosario2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azathioprine — `Azathioprine_Yang2015_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `V/F`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** every check the reviewer could run passed.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Yang X; Sherwin CM; Yu T; Yellepeddi VK; Brunner HI; Vinks AA et al. (2015). Expert review of clinical pharmacology 8
  ·  DOI: [10.1586/17512433.2015.1059751](https://doi.org/10.1586/17512433.2015.1059751)

## Model component
<dbs-pgx drug="azathioprine" model-id="Azathioprine_Yang2015_reference" status="needs_review" stale="false" population="systemic lupus erythematosus patients" measured-compound="azathioprine" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| initial volume of distribution | `Q61` · V | —(suppressed) | l/kg | — | L | not captured | boundary (0.8) | Yang_2015:other_prose | — | not captured |
| apparent volume of distribution following oral administration (Vd/F) | `Q76` · V/F | —(suppressed) | 1/kg | — | 1/kg | not captured | boundary (0.8) | Yang_2015:other_prose | — | not captured |
| absorption lag time | `Q83` · tlag | —(suppressed) | h | — | h | not captured | exact (1.0) | Yang_2015:other_prose | — | not captured |
| absorption rate constant (Ka) | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | exact (1.0) | Yang_2015:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'dose' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'no. of patients' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'model variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'covariates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Filler et al. (2003)' — extend the ontology if this is a real PK parameter (source ['T1:row1:col3', 'T1:row1:col6'])
- dropped unlinked row (NIL): 'Jiao et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1', 'T1:row2:col3', 'T1:row2:col6', 'T1:row2:col7', 'T1:row2:col8'])
- dropped unlinked row (NIL): 'Neumann et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row3:col1', 'T1:row3:col3', 'T1:row3:col6'])
- dropped unlinked row (NIL): 'Mino et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row4:col1', 'T1:row4:col3', 'T1:row4:col6'])
- dropped unlinked row (NIL): 'Zahr et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row5:col1', 'T1:row5:col3', 'T1:row5:col6'])
- dropped unlinked row (NIL): 'de Winter et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row6:col1', 'T1:row6:col3', 'T1:row6:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1', 'T1:row7:col3', 'T1:row7:col6', 'T1:row7:col8'])
- dropped unlinked row (NIL): 'Lertdumrongluk et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1', 'T1:row8:col3', 'T1:row8:col6'])
- dropped unlinked row (NIL): 'Djabarouti et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col3', 'T1:row9:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row10:col3', 'T1:row10:col6', 'T1:row10:col8'])
- dropped unlinked row (NIL): 'Mino et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row11:col1'])
- dropped unlinked row (NIL): 'Fukuda et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row12:col3', 'T1:row12:col6'])
- dropped unlinked row (NIL): 'Sagcal-Gironella et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row13:col3', 'T1:row13:col6'])
- dropped unlinked row (NIL): 'Sherwin et al. (2012)' — extend the ontology if this is a real PK parameter (source ['T1:row14:col3', 'T1:row14:col6'])
- dropped unlinked row (NIL): 'Woillard et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row15:col6'])
- dropped unlinked row (NIL): 'Streicher et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row16:col1', 'T1:row16:col3', 'T1:row16:col6'])
- dropped unlinked row (NIL): 'Kittanamongkolchai et al. (2015)' — extend the ontology if this is a real PK parameter (source ['T1:row17:col1', 'T1:row17:col3', 'T1:row17:col6'])
- table mostly unlinked (17/17 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('initial volume of distribution'=0.18) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution following oral administration (Vd/F)'=0.78) from results prose — parameter table was unreadable
- salvaged Q83 ('absorption lag time'=0.349) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate constant (Ka)'=0.869) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=azathioprine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell T1:row1:col1 = '15 children (12 ± 3 years)'
- unparsed cell T1:row1:col2 = 'Autoimmune including 10 SLE patients'
- unparsed cell T1:row1:col11 = '[51]'
- unparsed cell T1:row2:col11 = '[47]'
- unparsed cell T1:row3:col2 = 'Autoimmune including 12 SLE patients'
- unparsed cell T1:row3:col7 = 'BSV: Tmax (%) 46.8; Cmax (%) 53.8; AUC0–12 h (%) 33.3; AUC0–24 h (%) 35.6; C12 h (%) 74.2; C24 h (%) 85.8'
- unparsed cell T1:row3:col11 = '[52]'
- unparsed cell T1:row4:col2 = '6 Lupus nephritis versus 24 kidney transplantations'
- unparsed cell T1:row4:col11 = '[53]'
- unparsed cell T1:row5:col11 = '[49]'
- unparsed cell T1:row6:col2 = 'Autoimmune with 12 SLE patients'
- unparsed cell T1:row6:col7 = 'BSV: Tlag, short (%) 32; Ka (%) 182 [40]; CL (%) 34 [41]; Vc (%) 53 [48]; TGB1 (%) 200; EHCP (%) 35; RUV (%) 0.414 [6]'
- unparsed cell T1:row6:col8 = 'CrCL on CL 0.42 [26]'
- unparsed cell T1:row6:col11 = '[46]'
- unparsed cell T1:row7:col11 = '[54]'
- unparsed cell T1:row8:col11 = '[55]'
- unparsed cell T1:row9:col7 = 'BSV: mean MPA AUC0–12 h (%) 44; mean MPAG AUC0–12 h (%) 43'
- unparsed cell T1:row9:col11 = '[56]'
- unparsed cell T1:row10:col11 = '[57]'
- unparsed cell T1:row11:col3 = '1.5 (1.0–2.0) g'
- unparsed cell T1:row11:col7 = 'BSV: MPA free fraction (%) 70; MPAG free faction (%) 59.8'
- unparsed cell T1:row11:col8 = 'Metal medication and CrCL on MPA C0; CrCL on MPAG C0; serum albumin on MPA free fraction; serum albumin, metal medication and CrCL on MPAG free faction'
- unparsed cell T1:row11:col11 = '[58]'
- unparsed cell T1:row12:col1 = '19 children'
- unparsed cell T1:row12:col11 = '[59]'
- unparsed cell T1:row13:col1 = '19 children (16.9 ± 4 years)'
- unparsed cell T1:row13:col11 = '[60]'
- unparsed cell T1:row14:col1 = '19 (10–28 years; mean 16.5 years)'
- unparsed cell T1:row14:col7 = 'BSV (%): CL1MPA 48.6; V3MPA 59.2; CL2-MPA 42.9; V4-MPA 60.0; CLMMPAG 55.9 RUV: MPA (%) 41.2; MPAG (%) 45.4'
- unparsed cell T1:row14:col11 = '[48]'
- unparsed cell T1:row15:col1 = '36 children (4.7–16.7)'
- unparsed cell T1:row15:col3 = '728 ± 255 (300–1250) mg; 544 ± 175 (217–998)'
- unparsed cell T1:row15:col11 = '[50]'
- unparsed cell T1:row16:col2 = 'Autoimmune with 23 SLE and 21 vasculitis'
- unparsed cell T1:row16:col11 = '[61]'
- unparsed cell T1:row17:col11 = '[62]'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.6 L | not captured | not captured | ['Yang_2015:other_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_azathioprine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2015` / `Yang_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
