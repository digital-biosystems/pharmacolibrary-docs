<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;podophyllotoxin&quot;}]"></div>

# podophyllotoxin

- **generic name:** podophyllotoxin
- **ATC codes:** `D06BB04`
- **DrugBank:** [DB01179](https://go.drugbank.com/drugs/DB01179) · **PubChem:** [CID 10607](https://pubchem.ncbi.nlm.nih.gov/compound/10607)
- **molar mass:** 414.4053 g/mol (C22H22O8) — DrugBank
- **groups:** approved

## About

Podophyllotoxin (podofilox) is a topical treatment for common warts. It is an approved dermatological medicine, applied topically to the skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421193](https://www.wikidata.org/wiki/Q421193) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:57 | 9:26 | 0/0/0 | 1/1/0 | 0/0/0 | 225,732/4,204 | einfracz / qwen3.8-27b | 15 | 3/4 | 13/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zefirov_2019_MTT](drugs/drug_podophyllotoxin/pd_Zefirov_2019_MTT.md) | cytotoxicity (MTT test) biomarker turnover ← podophyllotoxin analogue 2 | — | Zefirov NA et al., [Podophyllotoxin analogue with bicyclo[…, Biomeditsinskaia khimiia (2019) | [10.18097/PBMC20196502086](https://doi.org/10.18097/PBMC20196502086) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hour_2000_EC50](drugs/drug_podophyllotoxin/pd_Hour_2000_EC50.md) | cytotoxicity ← podophyllotoxin · inhibition effect | — | Hour MJ et al., 6-Alkylamino- and 2,3-dihydro-3'-methox…, Journal of medicinal chemis… (2000) | [10.1021/jm000151c](https://doi.org/10.1021/jm000151c) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=podophyllotoxin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (modulator), TUBA4A (inhibitor), TUBB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 211 matched, 72 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jia_1995.pdf` | Jia ZP et al., [HPLC determination of 4-[4"-(2",2",6",…, Yao xue xue bao = Acta phar… (1995) | popPK | 9 | not captured | [8701732](https://pubmed.ncbi.nlm.nih.gov/8701732) | Study reports pharmacokinetic parameters for a podophyllotoxin derivative (GP-7) in rats, but only T1/2 beta is explicitly provided in the text without volume or clearance. |
| `Rassmann_1999.pdf` | Rassmann I et al., Phase I clinical and pharmacokinetic tr…, Investigational new drugs (1999) | popPK | 5 | [10.1023/a:1006293830585](https://doi.org/10.1023/a:1006293830585) | [10426664](https://pubmed.ncbi.nlm.nih.gov/10426664) | Reports PK parameters (CL, V, t1/2) for NK611, a podophyllotoxin derivative, rather than podophyllotoxin itself. |

<sub>queue written 2026-10-07T21:55:42.922147+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bai_2012 | irrelevant | 0 | 0 | The paper reports in-vitro biotransformation and anti-tumor activity (EC50) of derivatives, with no pharmacokinetic data for podophyllotoxin. |
| PGx | Barnaba_2016 | not_relevant | 0 | 0 | The study reports on mechanism-based inhibition of CYP3A4 by podophyllotoxin and in vivo drug-drug interaction potential, but it does not report any pharmacogenomic effects (gene variants or genotypes) on podophyllotoxin PK or PD parameters. |
| popPK | Chen_2007 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro anti-HIV-1 activity of podophyllotoxin derivatives, not on pharmacokinetic parameters. |
| popPK | Danielak_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of etoposide, not podophyllotoxin itself. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The study investigates the anticancer effects of neomenthol, using podophyllotoxin only as a standard comparator in in vitro assays; no pharmacokinetic data for podophyllotoxin are reported. |
| popPK | Habtemariam_2003 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay comparing erlangerins to podophyllotoxin as a reference standard, containing no pharmacokinetic data. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is a computational biology study on drug repositioning for COVID-19 and other diseases, containing no pharmacokinetic data for podophyllotoxin. |
| popPK | Hour_2000 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study synthesizing quinazolinones and comparing their activity to podophyllotoxin, but it does not study the pharmacokinetics of podophyllotoxin. |
| popPK | Jia_1995 | relevant | 9 | 4 | Study reports pharmacokinetic parameters for a podophyllotoxin derivative (GP-7) in rats, but only T1/2 beta is explicitly provided in the text without volume or clearance. |
| PGx | Julsing_2008 | not_relevant | 0 | 0 | The paper reports kinetic parameters for a wild-type enzyme but does not investigate the impact of a specific genetic variant or genotype on the pharmacokinetics or pharmacodynamics of podophyllotoxin. |
| PGx | Karadeniz_2015 | not_relevant | 0 | 0 | The paper describes in vitro cytotoxicity of plant extracts and does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of podophyllotoxin. |
| popPK | Manda_2016 | irrelevant | 0 | 0 | The study focuses on the mechanism (P-gp induction) and structure-activity relationship of fascaplysin, using podophyllotoxin only as a comparator/reference compound in an in vitro screening, not for PK parameter characterization. |
| popPK | Mross_1996 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of the podophyllotoxin derivative NK 611, not podophyllotoxin itself. |
| PGx | Owczarek_2021 | not_relevant | 0 | 0 | The study examines HPV genotype profiles (pathogen) and their correlation with ALA-PDT efficacy; it does not report host pharmacogenomic variants affecting the PK/PD of podophyllotoxin. |
| PGx | Qi_2015 | not_relevant | 0 | 0 | The paper reports UGT inhibition by podophyllotoxin (drug interaction) but does not report pharmacogenomic effects (gene variants/genotypes) on PK/PD. |
| popPK | Rassmann_1996 | irrelevant | 2 | 0 | The study reports pharmacokinetics for NK611 (a podophyllotoxin derivative), not for podophyllotoxin itself, and specific CL/Vd values are not provided in the text. |
| PGx | Song_2011 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (CYP inhibition) and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Sudo_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacology investigation of antiviral activity and does not report pharmacokinetic parameters. |
| PGx | Sun_2021 | not_relevant | 0 | 0 | The paper maps the metabolism of podophyllotoxin and identifies involved CYP enzymes but does not report pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Tang_2011 | irrelevant | 0 | 0 | The paper describes an in-vitro biosynthesis and cytotoxicity study, containing no pharmacokinetic data. |
| popPK | Toffoli_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for etoposide, which is a derivative of podophyllotoxin, but does not report parameters for podophyllotoxin itself. |
| PGx | Vasilev_2006 | not_relevant | 0 | 0 | The paper describes in vitro biotransformation of a precursor into a drug using recombinant enzymes, not the impact of a specific genetic variant on the PK or PD of podophyllotoxin in a biological context. |
| popPK | Zefirov_2019 | irrelevant | 0 | 0 | The paper is a synthetic and molecular modeling study of podophyllotoxin analogs, reporting only in vitro cytotoxicity (IC50/EC50) and docking scores, with no pharmacokinetic parameters. |
| popPK | Zefirov_2021 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper focusing on the synthesis and in vitro biological activity (cytotoxicity/microtubule depolymerization) of a podophyllotoxin conjugate, reporting no pharmacokinetic parameters. |
| popPK | Zefirova_2017 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro biological evaluation of antimitotic agents, containing no pharmacokinetic data for podophyllotoxin. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper focuses on the mechanism of etoposide-induced leukemia rather than the pharmacogenomics of podophyllotoxin, and does not report quantitative genotype-to-PK/PD effect sizes. |
| popPK | Zhu_2004 | irrelevant | 0 | 0 | The paper reports anti-HIV activity (EC50, TI) of podophyllotoxin derivatives in vitro, with no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
