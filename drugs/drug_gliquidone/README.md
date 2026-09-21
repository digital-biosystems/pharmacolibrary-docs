<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gliquidone&quot;}]"></div>

# gliquidone

- **generic name:** gliquidone
- **ATC codes:** `A10BB08`
- **DrugBank:** [DB01251](https://go.drugbank.com/drugs/DB01251)
- **groups:** approved

## About

**Description.** Gliquidone is a sulfonylurea drug used to treat diabetes mellitus type 2. It is an ATP-dependent K+ (KATP) channel blocker. This block causes a depolarization which leads to activation of voltage-dependent Ca channels and Ca2+ influx, and eventually increases insulin release.

**Indication.** Used in the treatment of diabetes mellitus type 2.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 22:09 | 7:00 | 0/0/0 | 0/0/0 | 0/0/0 | 33,284/2,591 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gliquidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inhibitor), KCNJ10 (binder), KCNJ8 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 26 matched, 26 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `von_1997.pdf` | von Nicolai H et al., Duration of action and pharmacokinetics…, Arzneimittel-Forschung (1997) | popPK | 10 | not captured | [9105542](https://pubmed.ncbi.nlm.nih.gov/9105542) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, AUC, t1/2 alpha, t1/2 beta) for gliquidone in humans, with all numeric values explicitly present in the text. |
| `Liu_2015.pdf` | Liu SY et al., The effect of gliquidone on KATP channe…, Diabetes research and clini… (2015) | pd | 4 | [10.1016/j.diabres.2015.05.036](https://doi.org/10.1016/j.diabres.2015.05.036) | [26044612](https://www.ncbi.nlm.nih.gov/pubmed/26044612) | metadata signals extractable PD data (IC50) |
| `Yang_2024.pdf` | Yang C et al., Inhibition of Cardiac Kv4.3/KChIP2 Chan…, Molecular pharmacology (2024) | pd | 4 | [10.1124/molpharm.123.000787](https://doi.org/10.1124/molpharm.123.000787) | [38164605](https://www.ncbi.nlm.nih.gov/pubmed/38164605) | metadata signals extractable PD data (IC50) |
| `Zini_1991.pdf` | Zini S et al., Characterization of sulfonylurea recept…, The Journal of pharmacology… (1991) | pd | 4 | not captured | [1658303](https://www.ncbi.nlm.nih.gov/pubmed/1658303) | metadata signals extractable PD data (IC50) |
| `Zeng_2017.pdf` | Zeng J et al., A validated UPLC-MS/MS method for simul…, Journal of pharmaceutical a… (2017) | pgx | 8 | [10.1016/j.jpha.2017.07.009](https://doi.org/10.1016/j.jpha.2017.07.009) | [29404062](https://www.ncbi.nlm.nih.gov/pubmed/29404062) | metadata signals extractable PGX data (SLC22A5, PK/PD-context) |
| `He_2014.pdf` | He F et al., Contribution of cytochrome P450 isoform…, Xenobiotica; the fate of fo… (2014) | pgx | 7 | [10.3109/00498254.2013.831957](https://doi.org/10.3109/00498254.2013.831957) | [23987740](https://www.ncbi.nlm.nih.gov/pubmed/23987740) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Huang_2022.pdf` | Huang L et al., Effects of high-altitude environment on…, Zhejiang da xue xue bao. Yi… (2022) | pgx | 7 | [10.3724/zdxbyxb-2022-0129](https://doi.org/10.3724/zdxbyxb-2022-0129) | [37202102](https://www.ncbi.nlm.nih.gov/pubmed/37202102) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-15T22:08:13.947757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cerasi_1979 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effect of gliquidone on insulin secretion and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Decker_2009 | irrelevant | 0 | 0 | The study focuses on prednisolone pharmacokinetics and dosing, with gliquidone mentioned only as a co-administered antidiabetic drug without any PK parameters reported. |
| PD | Decker_2009 | not_relevant | 0 | 0 | The paper studies prednisolone dosing and only mentions gliquidone as a comorbidity medication (antidiabetic) without reporting any pharmacodynamic or exposure-response data for it. |
| popPK | Hartmann_2010 | irrelevant | 0 | 0 | The paper is a general review of drug therapy in renal failure that mentions gliquidone only as a recommended alternative agent, without reporting any quantitative pharmacokinetic parameters. |
| PD | Hartmann_2010 | not_relevant | 1 | 0 | The paper is a general review of drug therapy in renal failure that mentions gliquidone only as a qualitative alternative to glibenclamide, without providing any numeric PD parameters or exposure-response data. |
| popPK | Haupt_1977 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (blood glucose and insulin levels) rather than pharmacokinetic disposition parameters. |
| popPK | He_2014 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | He_2014 | not_relevant | 0 | 0 | The paper focuses on the metabolic pathways and CYP450 isoform contribution to gliquidone clearance, not on pharmacodynamic or exposure-response relationships. |
| PGx | He_2014 | not_relevant | 0 | 0 | The paper investigates CYP450 isoform contributions to metabolism in rats and humans but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Holstein_2011 | not_relevant | 3 | 2 | The study investigates the association between CYP2C9 genotypes and the clinical outcome of severe hypoglycemia, rather than reporting direct pharmacokinetic or pharmacodynamic parameter changes for gliquidone. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The study investigates the effect of high-altitude hypoxia (environmental factor) on gliquidone PK in rats, not the effect of a specific gene variant or genotype. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| popPK | Lueangaramkul_2026 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening of gliquidone against FIP virus, reporting EC50/IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Ocaña_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception in mice where gliquidone is used as a K+ channel blocker, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ocaña_1993_2 | irrelevant | 0 | 0 | The study is a pharmacological investigation of gliquidone's mechanism of action on morphine-induced hypermotility in mice and does not report any pharmacokinetic parameters. |
| popPK | Ocaña_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception in mice where gliquidone is used as a KATP channel blocker, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ocaña_1996 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception in mice where gliquidone is used as a KATP channel blocker (comparator/antagonist), not as the subject drug for PK analysis, and no PK parameters are reported. |
| PD | Ocaña_1996 | not_relevant | 3 | 2 | The paper reports a qualitative dose-dependent antagonism of cromakalim's effect by gliquidone, but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for gliquidone. |
| popPK | Procacci_1988 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| popPK | Vázquez_2024 | irrelevant | 0 | 0 | The study focuses on the antiparasitic efficacy of gliquidone in vitro and in vivo, not on its pharmacokinetic disposition parameters. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper describes an analytical method for imatinib, dasatinib, and nilotinib, using gliquidone only as an internal standard, and does not report pharmacogenomic effects on gliquidone PK/PD. |
| popPK | Zhou_2025 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of tofacitinib as the subject drug, with gliquidone serving only as a co-administered inhibitor/comparator agent. |
| popPK | Zini_1991 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Zini_1991 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of potassium channel openers on cholinergic neurotransmission in guinea pig intestine and does not report pharmacokinetic or pharmacodynamic exposure-response data for gliquidone. |
| PD | von_1997 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_gliquidone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
