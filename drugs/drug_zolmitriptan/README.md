# zolmitriptan

- **generic name:** zolmitriptan
- **ATC codes:** `N02CC03`
- **DrugBank:** [DB00315](https://go.drugbank.com/drugs/DB00315)
- **groups:** approved, investigational

## About

**Description.** Zolmitriptan is a member of the triptan class of 5-hydroxytryptamine(5-HT)<sub>1B/1D/(1F)</sub> receptor agonists used to treat acute migraine.[A462, L12978] [Sumatriptan] was the first triptan to be developed, but had poor oral bioavailability and lipophilicity. This led to the development of second-generation triptans, including [almotriptan], [eletriptan], [frovatriptan], [naratriptan], [rizatriptan], and zolmitriptan.[A193791] Triptans can be administered alone or in combination with an NSAID like [naproxen], and represent the current "gold standard" for acute migraine treatment.[A193797]

Zolmitriptan was first approved by the FDA for sale by Zeneca Pharmaceuticals under the trade name Zomig® on November 25, 1997. It is currently available in both tablet and nasal spray forms.[L12978]

**Indication.** Zolmitriptan is indicated for the acute treatment of migraine with or without auras in patients aged 18 and over.[L12978]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 22:39 | 7:42 | 0/1/0 | 0/1/0 | 0/0/0 | 96,960/6,661 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2017](drugs/drug_zolmitriptan/Zolmitriptan_Zhou2017_reference.md) | Zhou W et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.935](https://doi.org/10.1002/jcph.935) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [MaassenVanDenBrink_1998](drugs/drug_zolmitriptan/pd_MaassenVanDenBrink_1998_unknown.md) | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2017.pdf` | Zhou W et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.935](https://doi.org/10.1002/jcph.935) | [28581633](https://pubmed.ncbi.nlm.nih.gov/28581633) | The paper is a population PK study for zolmitriptan and explicitly reports numeric values for clearance (121 L/h) and volume of distribution (136 L) in the text. |
| `Pauwels_1998.pdf` | Pauwels PJ et al., Pharmacological analysis of G-protein a…, British journal of pharmaco… (1998) | pd | 5 | [10.1038/sj.bjp.0701584](https://doi.org/10.1038/sj.bjp.0701584) | [9484854](https://www.ncbi.nlm.nih.gov/pubmed/9484854) | metadata signals extractable PD data (Emax) |
| `Moghaddam_2019.pdf` | Moghaddam RA et al., Evaluation of Isolated Vascular Respons…, Drug research (2019) | pd | 4 | [10.1055/a-0800-8391](https://doi.org/10.1055/a-0800-8391) | [30536257](https://www.ncbi.nlm.nih.gov/pubmed/30536257) | metadata signals extractable PD data (EC50) |
| `Murray_2011.pdf` | Murray KC et al., Polysynaptic excitatory postsynaptic po…, Journal of neurophysiology (2011) | pd | 4 | [10.1152/jn.01011.2010](https://doi.org/10.1152/jn.01011.2010) | [21653728](https://www.ncbi.nlm.nih.gov/pubmed/21653728) | metadata signals extractable PD data (sigmoid) |
| `Perez_1998.pdf` | Perez M et al., Dimerization of sumatriptan as an effic…, Bioorganic & medicinal chem… (1998) | pd | 4 | [10.1016/s0960-894x(98)00090-0](https://doi.org/10.1016/s0960-894x(98)00090-0) | [9871581](https://www.ncbi.nlm.nih.gov/pubmed/9871581) | metadata signals extractable PD data (EC50) |
| `Karjalainen_2008.pdf` | Karjalainen MJ et al., In vitro inhibition of CYP1A2 by model…, Basic & clinical pharmacolo… (2008) | pgx | 7 | [10.1111/j.1742-7843.2008.00252.x](https://doi.org/10.1111/j.1742-7843.2008.00252.x) | [18816299](https://www.ncbi.nlm.nih.gov/pubmed/18816299) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Yu_2003.pdf` | Yu LS et al., In vitro metabolism of zolmitriptan in…, Chemico-biological interact… (2003) | pgx | 7 | [10.1016/j.cbi.2003.08.001](https://doi.org/10.1016/j.cbi.2003.08.001) | [14642738](https://www.ncbi.nlm.nih.gov/pubmed/14642738) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-08-29T22:36:00.237233+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Capi_2016 | not_relevant | 0 | 0 | The paper reviews eletriptan, not zolmitriptan, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Han_2021 | not_relevant | 2 | 0 | The study investigates the metabolic mechanism of zolmitriptan activation by CYP2D6 in rats but does not report human pharmacogenomic effects on PK or PD parameters. |
| PGx | Karjalainen_2008 | not_relevant | 0 | 0 | The paper studies in vitro CYP1A2 inhibition by zolmitriptan and other drugs, but does not report pharmacogenomic effects on zolmitriptan's PK or PD parameters. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated transport, not a pharmacokinetic study reporting quantitative disposition parameters for zolmitriptan. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for zolmitriptan. |
| PGx | Matthaei_2016 | not_relevant | 2 | 0 | The paper reports pharmacokinetic data for sumatriptan, not zolmitriptan, although it notes that OCT1 transports zolmitriptan. |
| popPK | Moghaddam_2019 | irrelevant | 0 | 0 | The study is an in-vitro vascular pharmacology experiment using zolmitriptan as a receptor agonist, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Murray_2011 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of serotonin receptors in spinal cord injury, not a pharmacokinetic study, and reports no disposition parameters for zolmitriptan. |
| popPK | Pauwels_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated cell growth, not a pharmacokinetic study, and reports no disposition parameters for zolmitriptan. |
| popPK | Pauwels_1998 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of receptor binding and G-protein activation, not a pharmacokinetic study, and contains no disposition parameters for zolmitriptan. |
| PD | Pauwels_1998 | not_relevant | 3 | 2 | The paper reports in vitro receptor pharmacology (binding affinity and G-protein activation potency/efficacy) rather than a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response relationship for the drug in a biological system. |
| popPK | Perez_1998 | irrelevant | 0 | 0 | The paper is an in-vitro/in-vivo pharmacological study of a sumatriptan dimer, with zolmitriptan serving only as a comparator and no PK parameters reported. |
| PD | Perez_1998 | not_relevant | 1 | 2 | The paper reports in vitro receptor binding and functional assay data (Ki, EC50, pD2) for a new dimeric compound, comparing it to zolmitriptan, but does not provide a pharmacokinetic or exposure-response analysis for zolmitriptan itself. |
| PGx | Pöstges_2023 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of sumatriptan and zolmitriptan using recombinant enzymes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated vascular contraction, not a pharmacokinetic study, and reports no disposition parameters for zolmitriptan. |
| PGx | Sternieri_2006 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on zolmitriptan PK/PD. |
| PGx | Tepper_2001 | not_relevant | 0 | 0 | The paper discusses general safety and drug-drug interactions (e.g., cimetidine) but does not report pharmacogenomic effects of gene variants on zolmitriptan PK/PD. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and therapeutic delay, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for zolmitriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing time to maximum effect (Emax) with Tmax, but it does not provide numeric concentration-effect parameters (like EC50 or slope) or a derivable PD curve for zolmitriptan. |
| popPK | Wainscott_1998 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and mechanistic study, not a pharmacokinetic study, and contains no disposition parameters for zolmitriptan. |
| PGx | Wild_1999 | not_relevant | 0 | 0 | The paper identifies the metabolic enzymes (CYP1A2, MAO-A) involved in zolmitriptan metabolism but does not report any pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |
| popPK | Wurch_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of receptor coupling and does not report pharmacokinetic parameters for zolmitriptan. |
| PGx | Yu_2003 | not_relevant | 0 | 0 | The study investigates in vitro metabolism and drug-drug interactions in rat microsomes, not the effect of human gene variants on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_zolmitriptan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
