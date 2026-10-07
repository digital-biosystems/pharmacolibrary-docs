<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10B&quot;,&quot;href&quot;:&quot;atc/V10B.md&quot;},{&quot;label&quot;:&quot;samarium (153Sm) lexidronam&quot;}]"></div>

# samarium (153Sm) lexidronam

- **generic name:** samarium (153Sm) lexidronam
- **ATC codes:** `V10BX02`
- **DrugBank:** [DB05273](https://go.drugbank.com/drugs/DB05273) · **PubChem:** not captured
- **groups:** approved

## About

Samarium (153Sm) lexidronam is a radiopharmaceutical used to relieve pain from cancer that has spread to the bones. It is an approved medicine, with one product authorised in the European Union, and is used for bone pain palliation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817238](https://www.wikidata.org/wiki/Q20817238) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:43 | 1:00 | 0/0/0 | 0/0/0 | 0/0/0 | 22,434/1,360 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartlett_2002.pdf` | Bartlett ML et al., Dosimetry and toxicity of Quadramet for…, European journal of nuclear… (2002) | popPK | 8 | [10.1007/s00259-002-0934-y](https://doi.org/10.1007/s00259-002-0934-y) | [12397466](https://pubmed.ncbi.nlm.nih.gov/12397466) | The study reports quantitative pharmacokinetic parameters (median biological half-life of 1.4 h and 24-h retention percentages) for samarium-153 EDTMP (Quadramet) in humans. |
| `Dormehl_1998.pdf` | Dormehl IC et al., Uptake of ethylenediamine tetramethylen…, Arzneimittel-Forschung (1998) | popPK | 8 | not captured | [9608885](https://pubmed.ncbi.nlm.nih.gov/9608885) | The study reports pharmacokinetic and biodistribution data for samarium-153-EDTMP in baboons, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Louw_1996.pdf` | Louw WK et al., Evaluation of samarium-153 and holmium-…, Nuclear medicine and biology (1996) | popPK | 8 | [10.1016/s0969-8051(96)00117-5](https://doi.org/10.1016/s0969-8051(96)00117-5) | [9004281](https://pubmed.ncbi.nlm.nih.gov/9004281) | The study reports multicompartmental pharmacokinetic analysis for samarium-153-EDTMP (lexidronam) in baboons, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T16:43:24.888146+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bartlett_2002 | not_relevant | 3 | 2 | The paper reports radiation dosimetry (absorbed dose per administered activity) and qualitative toxicity outcomes, but does not provide a pharmacodynamic model or numeric concentration-effect parameters (e.g., Emax, EC50) for the drug's biological effect. |
| popPK | Bianchi_2009 | irrelevant | 2 | 0 | The study focuses on dosimetry and bone uptake percentages for 153Sm-EDTMP (a different compound than samarium_153sm_lexidronam) and does not report compartmental PK parameters like clearance or volume. |
| PD | Bianchi_2009 | not_relevant | 0 | 0 | The paper reports a correlation between surrogate dosimetry parameters (Tc-MDP uptake vs Sm-EDTMP uptake) for dose optimization, but does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., pain relief vs. concentration/dose) with numeric PD parameters. |
| popPK | Das_2014 | irrelevant | 0 | 0 | The study focuses on 177Lu-EDTMP, not samarium-153 lexidronam, and does not report PK parameters for the target drug. |
| popPK | Dormehl_1998 | relevant | 8 | 2 | The study reports pharmacokinetic and biodistribution data for samarium-153-EDTMP in baboons, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| popPK | Eary_1993 | irrelevant | 2 | 0 | The study reports biodistribution and dosimetry for Samarium-153-EDTMP (a different chelate than lexidronam) and does not provide quantitative compartmental PK parameters (CL, V, Q) for the target drug. |
| popPK | Garnuszek_2003 | irrelevant | 0 | 0 | The study evaluates a formulation kit for EDTMP-based radiopharmaceuticals and compares biodistribution of 177Lu-EDTMP and 99mTc-EDTMP to 153Sm-EDTMP, but does not report quantitative PK parameters (CL, V, etc.) for samarium_153sm_lexidronam (which is a different compound, SM-401, not 153Sm-EDTMP). |
| popPK | Goeckeler_1987 | irrelevant | 2 | 0 | The study focuses on biodistribution and imaging characteristics (uptake, lesion ratios) rather than quantitative compartmental pharmacokinetic parameters (CL, V, t1/2) for samarium-153 lexidronam specifically. |
| popPK | Goeckeler_1993 | irrelevant | 2 | 0 | The study analyzes the chemical integrity of the drug in urine (complexation analysis) rather than reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Hassfjell_1998 | irrelevant | 0 | 0 | The study focuses on the physical characterization of a radioguided surgery probe and simulation of detectability, not on the pharmacokinetic parameters (CL, V, etc.) of samarium-153 lexidronam. |
| popPK | Ketring_1987 | irrelevant | 2 | 0 | The paper is a review summarizing biokinetics without providing specific quantitative PK parameter values (CL, V, t1/2) in the text. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper describes a computational framework for drug repurposing against fusion proteins and does not contain any pharmacokinetic data for samarium_153sm_lexidronam. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper describes a computational drug repurposing framework for fusion proteins and does not involve samarium (153Sm) lexidronam or report any pharmacodynamic or exposure-response data. |
| popPK | Lamb_1997 | irrelevant | 2 | 0 | The text describes qualitative clearance kinetics (time to complete clearance) and efficacy/toxicity data but lacks quantitative compartmental PK parameters (CL, V, t1/2) or a population PK model. |
| popPK | Louw_1996 | relevant | 8 | 0 | The study reports multicompartmental pharmacokinetic analysis for samarium-153-EDTMP (lexidronam) in baboons, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Popwell_2014 | irrelevant | 0 | 0 | The paper describes the synthesis and biodistribution of novel polymeric phosphonates for radionuclide delivery, not the pharmacokinetics of the specific drug samarium_153_sm_lexidronam. |
| popPK | Pusuwan_1996 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Singh_1989 | irrelevant | 0 | 0 | The study investigates samarium-153 EDTMP, which is a different chemical entity from the target drug samarium-153 lexidronam (EDTMP vs. lexidronam/SM-153). |
| popPK | Turner_1989 | irrelevant | 2 | 1 | The study focuses on dosimetry and therapeutic efficacy of 153Sm-EDTMP (a different compound than samarium_153sm_lexidronam/EDTMP) and does not report quantitative PK parameters (CL, V, t1/2) for the subject drug. |
| popPK | da_2002 | irrelevant | 0 | 0 | The study focuses on cytogenetic effects (chromosome aberrations) rather than pharmacokinetic disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
