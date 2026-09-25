<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10B&quot;,&quot;href&quot;:&quot;atc/V10B.md&quot;},{&quot;label&quot;:&quot;samarium (153Sm) lexidronam&quot;}]"></div>

# samarium (153Sm) lexidronam

- **generic name:** samarium (153Sm) lexidronam
- **ATC codes:** `V10BX02`
- **DrugBank:** [DB05273](https://go.drugbank.com/drugs/DB05273)
- **groups:** approved

## About

**Description.** Samarium Sm 153 lexidronam is a radioactive medication used to treat pain caused by cancer that has spread to the bone. It is a radiopharmaceutical. Radiopharmaceuticals are radioactive agents that may be used to diagnose some diseases by studying the function of the body's organs or to treat certain diseases.Samarium Sm 153 lexidronam is used to help relieve the bone pain that may occur with certain kinds of cancer. The radioactive samarium is taken up in the bone cancer area and gives off radiation that helps provide relief of pain.

**Indication.** Investigated for use/treatment in bone metastases, multiple myeloma, prostate cancer, and rheumatoid arthritis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-25 05:23 | 8:15 | 0/0/0 | 0/0/0 | 0/0/0 | 19,267/1,945 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartlett_2002.pdf` | Bartlett ML et al., Dosimetry and toxicity of Quadramet for…, European journal of nuclear… (2002) | popPK | 8 | [10.1007/s00259-002-0934-y](https://doi.org/10.1007/s00259-002-0934-y) | [12397466](https://pubmed.ncbi.nlm.nih.gov/12397466) | The paper reports quantitative pharmacokinetic parameters (median biological half-life of 1.4 h and 24-h retention percentages) for samarium-153 EDTMP (Quadramet) in human patients. |
| `Louw_1996.pdf` | Louw WK et al., Evaluation of samarium-153 and holmium-…, Nuclear medicine and biology (1996) | popPK | 8 | [10.1016/s0969-8051(96)00117-5](https://doi.org/10.1016/s0969-8051(96)00117-5) | [9004281](https://pubmed.ncbi.nlm.nih.gov/9004281) | The paper describes a pharmacokinetic study of samarium-153-EDTMP (lexidronam) in baboons using multicompartmental analysis, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-25T05:22:58.229208+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bartlett_2002 | not_relevant | 3 | 2 | The paper reports radiation dosimetry (absorbed dose per administered activity) and qualitative toxicity outcomes, but does not provide a pharmacodynamic model or numeric concentration-effect parameters (e.g., Emax, EC50) for the drug's biological effect. |
| popPK | Bianchi_2009 | irrelevant | 2 | 0 | The study focuses on dosimetry and bone uptake percentages for 153Sm-EDTMP (a different compound than samarium_153sm_lexidronam) and does not report compartmental PK parameters like clearance or volume. |
| PD | Bianchi_2009 | not_relevant | 0 | 0 | The paper reports a correlation between surrogate dosimetry parameters (Tc-MDP uptake vs Sm-EDTMP uptake) for dose optimization, but does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., pain relief vs. concentration/dose) with numeric PD parameters. |
| popPK | Das_2014 | irrelevant | 0 | 0 | The study focuses on 177Lu-EDTMP, not samarium_153sm_lexidronam, and does not report quantitative PK parameters for the target drug. |
| popPK | Dormehl_1998 | irrelevant | 2 | 0 | The study is a non-human primate biodistribution and scintigraphy study that reports qualitative uptake trends and blocking effects rather than quantitative compartmental PK parameters (CL, V, Q) for samarium-153-lexidronam. |
| popPK | Eary_1993 | irrelevant | 2 | 0 | The study focuses on dosimetry and biodistribution of 153Sm-EDTMP (a different compound than 153Sm-lexidronam) and does not report compartmental PK parameters like clearance or volume of distribution. |
| popPK | Garnuszek_2003 | irrelevant | 1 | 0 | The paper evaluates a formulation kit and compares biodistribution qualitatively without reporting quantitative PK parameters (CL, V, t1/2) for samarium-153. |
| popPK | Goeckeler_1987 | irrelevant | 2 | 0 | The study focuses on biodistribution and scintigraphic imaging of samarium-153 EDTMP in animals, reporting qualitative uptake and lesion ratios rather than quantitative compartmental pharmacokinetic parameters (CL, V, ka) for the specific drug samarium_153sm_lexidronam. |
| popPK | Goeckeler_1993 | irrelevant | 2 | 0 | The study focuses on the chemical integrity of the drug in urine (complexation analysis) rather than reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Hassfjell_1998 | irrelevant | 1 | 0 | The study focuses on the physical characterization of a radioguided surgery probe and simulation of detectability, not on the pharmacokinetic disposition parameters (CL, V, etc.) of samarium-153 lexidronam. |
| popPK | Ketring_1987 | irrelevant | 2 | 0 | The paper is a review summarizing biokinetics without providing specific quantitative PK parameter values (CL, V, t1/2) for samarium-153 EDTMP in the provided text. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper describes a computational framework for drug repurposing against fusion proteins and does not contain any pharmacokinetic data for samarium_153sm_lexidronam. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper describes a computational drug repurposing framework for fusion proteins and does not involve samarium (153Sm) lexidronam or report any pharmacodynamic or exposure-response data. |
| popPK | Lamb_1997 | irrelevant | 2 | 0 | The text describes clinical efficacy and qualitative clearance timing (hours) but lacks quantitative pharmacokinetic parameters (CL, V, ka) or compartmental model values. |
| popPK | Louw_1996 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of samarium-153-EDTMP (lexidronam) in baboons using multicompartmental analysis, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Popwell_2014 | irrelevant | 0 | 0 | The paper focuses on the synthesis of new polymeric phosphonates for radionuclide delivery and does not report pharmacokinetic parameters for samarium-153 lexidronam. |
| popPK | Pusuwan_1996 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Singh_1989 | irrelevant | 0 | 0 | The study investigates samarium-153 EDTMP, which is a different drug from the target samarium-153 lexidronam. |
| popPK | Turner_1989 | irrelevant | 2 | 0 | The paper focuses on clinical dosimetry and biodistribution percentages rather than reporting quantitative compartmental pharmacokinetic parameters (CL, V, Q, ka) for samarium-153 lexidronam. |
| popPK | da_2002 | irrelevant | 0 | 0 | The study focuses on cytogenetic effects (chromosome aberrations) rather than pharmacokinetic disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
