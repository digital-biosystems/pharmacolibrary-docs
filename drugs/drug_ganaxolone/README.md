# ganaxolone

- **generic name:** ganaxolone
- **ATC codes:** `N03AX27`
- **DrugBank:** [DB05087](https://go.drugbank.com/drugs/DB05087)
- **groups:** approved, investigational

## About

**Description.** Ganaxolone is the 3β-methylated synthetic analog of [allopregnanolone],[L41130] a metabolite of [progesterone].[A3197] Ganaxolone belongs to a class of compounds referred to as neurosteroids.[A3197] Endogenous neurosteroids, which comprise certain metabolites of progesterone and deoxycorticosterone, bind potently and specifically to GABA<sub>A</sub> receptors to enhance their inhibitory effects, and are thus known to have anxiolytic, analgesic, anticonvulsant, sedative, hypnotic, and anesthetic properties.[A245995]

Ganaxolone, similar to its endogenous counterparts, is a positive allosteric modulator of GABA<sub>A</sub> receptors.[L41130] It was approved under the brand name ZTALMY by the US FDA in March 2022 for the treatment of seizures associated with CDKL5 deficiency disorder (CDD), becoming the first FDA-approved treatment indicated specifically for CDD.[L41135] In July 2023, ganaxolone was also approved under the same brand name and for the same indication by the EMA.[L47636]

**Indication.** Ganaxolone is indicated for the treatment of seizures associated with cyclin-dependent kinase-like 5 (CDKL5) deficiency disorder (CDD) in patients ≥2 years old by the FDA.[L41130] It is also approved as an adjuvant treatment for the same condition in patients aged 2 to 17, although it may be continued in patients 18 years old or older, by the EMA.[L47631]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-30 10:43 | 4:07 | 0/1/0 | 1/0/0 | 0/0/0 | 48,714/2,514 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Zolkowska_2018](drugs/drug_ganaxolone/Ganaxolone_Zolkowska2018_reference.md) | Zolkowska D et al., Intramuscular allopregnanolone and gana…, Epilepsia (2018) | [10.1111/epi.13999](https://doi.org/10.1111/epi.13999) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Pinna_2014](drugs/drug_ganaxolone/pd_Pinna_2014_aggression.md) | Pinna G et al., Ganaxolone improves behavioral deficits…, Frontiers in cellular neuro… (2014) | [10.3389/fncel.2014.00256](https://doi.org/10.3389/fncel.2014.00256) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pinna_2014](drugs/drug_ganaxolone/pd_Pinna_2014_anxiety.md) | Pinna G et al., Ganaxolone improves behavioral deficits…, Frontiers in cellular neuro… (2014) | [10.3389/fncel.2014.00256](https://doi.org/10.3389/fncel.2014.00256) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pinna_2014](drugs/drug_ganaxolone/pd_Pinna_2014_fear_extinction.md) | Pinna G et al., Ganaxolone improves behavioral deficits…, Frontiers in cellular neuro… (2014) | [10.3389/fncel.2014.00256](https://doi.org/10.3389/fncel.2014.00256) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pinna_2014](drugs/drug_ganaxolone/pd_Pinna_2014_locomotion.md) | Pinna G et al., Ganaxolone improves behavioral deficits…, Frontiers in cellular neuro… (2014) | [10.3389/fncel.2014.00256](https://doi.org/10.3389/fncel.2014.00256) |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zolkowska_2018.pdf` | Zolkowska D et al., Intramuscular allopregnanolone and gana…, Epilepsia 59 Suppl 2(Suppl… (2018) | popPK | 10 | [10.1111/epi.13999](https://doi.org/10.1111/epi.13999) | [29453777](https://pubmed.ncbi.nlm.nih.gov/29453777) | The study reports quantitative pharmacokinetic parameters (Vd, CL, t1/2, F) for ganaxolone in mice, with all numeric values explicitly present in the text. |
| `Carter_1997.pdf` | Carter RB et al., Characterization of the anticonvulsant…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9067315](https://www.ncbi.nlm.nih.gov/pubmed/9067315) | metadata signals extractable PD data (IC50) |
| `Devenish_2021.pdf` | Devenish SO et al., The anticonvulsant zonisamide positivel…, Neuropharmacology (2021) | pd | 4 | [10.1016/j.neuropharm.2020.108371](https://doi.org/10.1016/j.neuropharm.2020.108371) | [33122032](https://www.ncbi.nlm.nih.gov/pubmed/33122032) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T00:08:27.575300+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carter_1997 | irrelevant | 0 | 0 | The paper reports pharmacodynamic and electrophysiological data (IC50, ED50) but contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Devenish_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of zonisamide's mechanism of action on glycine receptors, with no pharmacokinetic parameters reported for ganaxolone. |
| PGx | Martins_2026 | not_relevant | 0 | 0 | The paper is a review of the antiseizure medication pipeline and does not report specific pharmacogenomic effects on the PK/PD of ganaxolone. |
| popPK | Nik_2017 | irrelevant | 0 | 0 | The paper describes an in-vitro functional assay for GABA receptors and does not report any pharmacokinetic parameters for ganaxolone. |
| popPK | Olson_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study reporting seizure frequency outcomes, not a pharmacokinetic study, and contains no PK parameters for ganaxolone. |
| popPK | Pinna_2014 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice that reports dose-response data (EC50) for behavioral effects but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for ganaxolone. |
| PGx | Tobiasz_2025 | not_relevant | 0 | 0 | The paper is a systematic review of clinical treatment outcomes for PCDH19-related epilepsy and does not report pharmacokinetic or pharmacodynamic parameters or specific pharmacogenomic effects of ganaxolone. |
| PGx | Zimmern_2022 | not_relevant | 0 | 0 | The paper is a review of genetic epilepsies and treatments, mentioning ganaxolone efficacy in CDKL5 deficiency, but it does not report pharmacogenomic effects (gene variants affecting PK/PD) of ganaxolone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ganaxolone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
