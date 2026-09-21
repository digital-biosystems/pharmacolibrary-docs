<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;ecallantide&quot;}]"></div>

# ecallantide

- **generic name:** ecallantide
- **ATC codes:** `B06AC03`
- **DrugBank:** [DB05311](https://go.drugbank.com/drugs/DB05311)
- **groups:** approved

## About

**Description.** Ecallantide is a potent and selective human plasma kallikrein inhibitor that is indicated for the symptomatic treatment of hereditary angioedema. Ecallantide is a recombinant 60-amino-acid protein produced in _Pichia pastoris_ yeast cells that contains three intramolecular disulfide bonds [FDA Label]. It was discovered by phage display technology [A32017]. It shares sequence similarities with the naturally occurring human protein tissue-factor pathway inhibitor (TFPI), which is also known lipoprotein-associated coagulation inhibitor (LACI) [L1458]. The amino acid sequence of two compounds differ by seven amino acids [L1458]. 

Ecallantide works by blocking kallikrein to participate in the kallikrein-kinin system, which is a complex proteolytic cascade that initiates inflammatory and coagulation pathways [FDA Label]. The protease plasma kallikerin facilitates the conversion of kininogen to bradykinin, which is a pro-inflammatory vasodilator that  increases vascular permeability and induces pain [A3362]. Hereditary angioedema is a rare autosomal dominant disorder with mutations to C1-esterase-inhibitor (C1-INH) located on Chromosome 11q, resulting in substantially lower levels of C4 and C1-INH activity [FDA Label]. The disorder is associated with recurrent attacks of severe swelling and is thought to be caused by unregulated activity of kallikrein and excessive bradykinin production [FDA Label]. By reversibly binding to plasma kallikrein, ecallantide displays a rapid on-rate and a slow off-rate that results in high affinity inhibition in the picomolar range [L1458]. Ecallantide is marketed by FDA and EMA under the trade name Kalbitor for subcutaneous injection. Apart from its FDA and EMA indication, ecallantide has been used off label in the management of nonhistaminergic angioedema, not due to HAE [A32017].

**Indication.** Indicated for the symptomatic treatment of acute attacks of hereditary angioedema (HAE) in patients 12 years of age and older [FDA Label].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 11:39 | 2:03 | 0/0/0 | 0/0/0 | 0/0/0 | 41,913/1,179 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/2 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ecallantide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Ecallantide undergoes renal elimination [FDA Label].…”</sub> | prose |

<sub>Actors without a tissue in the table: KLKB1 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 10 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Adimi_2024.pdf` | Al-Adimi G et al., Extension of the circulatory half-life…, Journal of biotechnology (2024) | popPK | 8 | [10.1016/j.jbiotec.2024.06.002](https://doi.org/10.1016/j.jbiotec.2024.06.002) | [38844246](https://pubmed.ncbi.nlm.nih.gov/38844246) | The study reports in-vivo PK parameters (AUC, half-life) for ecallantide fusion proteins in mice, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only relative fold-changes. |

<sub>queue written 2026-09-19T11:39:14.574910+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Adimi_2024 | relevant | 8 | 2 | The study reports in-vivo PK parameters (AUC, half-life) for ecallantide fusion proteins in mice, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only relative fold-changes. |
| popPK | Bernstein_2010 | irrelevant | 1 | 0 | The provided text is a qualitative summary of pharmacology and clinical efficacy without any quantitative pharmacokinetic parameter values. |
| popPK | Cole_2013 | irrelevant | 0 | 0 | The paper is a review of icatibant, not ecallantide, and ecallantide is only mentioned as a cost comparator without any PK parameters. |
| popPK | Craig_2009 | irrelevant | 0 | 0 | The paper is a review discussing the clinical indication for prophylaxis and mentions ecallantide's short half-life qualitatively, but it does not report quantitative pharmacokinetic parameters or models. |
| popPK | Kafil_2020 | irrelevant | 0 | 0 | The paper is a review of antibody scaffolds for cancer therapy and mentions ecallantide only as an example of a mimetic antibody without providing any pharmacokinetic data. |
| PD | Kafil_2020 | not_relevant | 1 | 0 | The text is a review discussing antibody scaffolds and mentions ecallantide only as an example of a mimetic antibody with improved properties, without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Longhurst_2017 | irrelevant | 0 | 0 | The paper is a clinical consensus review focusing on efficacy and safety outcomes (time to improvement/resolution) rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for ecallantide. |
| PD | Longhurst_2017 | not_relevant | 1 | 0 | The paper is a qualitative expert consensus review that mentions ecallantide's efficacy and safety but does not report any numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data. |
| popPK | Martello_2012 | irrelevant | 1 | 0 | The paper is a clinical review that discusses pharmacokinetics qualitatively but does not report specific quantitative disposition parameters (e.g., CL, V, t1/2) for ecallantide. |
| popPK | Sabharwal_2015 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism and clinical use of ecallantide as a comparator, without reporting any original quantitative pharmacokinetic parameters. |
| popPK | Sanhajariya_2020 | irrelevant | 0 | 0 | The paper is an in silico simulation study on snake venom toxins and does not report pharmacokinetic parameters for ecallantide. |
| PD | Sanhajariya_2020 | not_relevant | 0 | 0 | The paper is an in silico pharmacokinetic (PK) simulation study of snake venom components and does not report any pharmacodynamic (PD) or exposure-response relationships for ecallantide or any other drug. |
| popPK | Stolz_2010 | irrelevant | 0 | 0 | The text is a clinical review of ecallantide's efficacy and safety in HAE and contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The study focuses on a novel factor XIa inhibitor (DX-88mut) and does not report pharmacokinetic parameters for ecallantide. |
| PD | Sun_2024 | not_relevant | 0 | 0 | The paper studies a novel peptide (DX-88mut), not ecallantide, and does not report PD parameters for ecallantide. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract and contains no data, results, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ecallantide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
