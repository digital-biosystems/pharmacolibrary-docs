# benzydamine

- **generic name:** benzydamine
- **ATC codes:** `A01AD02`, `G02CC03`, `M01AX07`, `M02AA05`, `R02AX03`
- **DrugBank:** [DB09084](https://go.drugbank.com/drugs/DB09084)
- **groups:** approved, investigational

## About

**Description.** Benzydamine (also known as Tantum Verde or Difflam), available as the hydrochloride salt, is a locally-acting nonsteroidal anti-inflammatory drug (NSAID) with local anaesthetic and analgesic properties. It is used topically for pain relief and anti-inflammatory treatment of the mouth, throat, or muscoskeletal system.

Although the indazole analogue benzydamine is a non-steroidal anti-inflammatory drug (NSAID), it has various physicochemical properties and pharmacologic activities that are different from those of traditional aspirin-like NSAIDs but facilitate benzydamine's mechanism of action as an effective locally-acting NSAID with local anaesthetic and analgesic properties. Moreover, unlike aspirin-like NSAIDs which are acids or metabolised to acids, benzydamine is in fact a weak base.

**Indication.** Available predominantly as a liquid mouthwash, oromucosal spray, or topical cream, benzydamine is most frequently employed as a locally acting analgesic and anti-inflammatory treatment for the relief of painful inflammatory conditions. 

When formulated as a mouthwash or spray, benzydamine may be used to treat traumatic conditions like pharyngitis following tonsillectomy or the use of a naso-gastric tube, inflammatory conditions like pharyngitis, aphthous ulcers and oral ulceration due to radiation therapy, dentistry operations and procedures, or more general conditions like sore throat, sore tongue, sore gums, mouth ulcers, or discomfort caused by dentures. [L1121] 

When used as a topical cream, benzydamine may be employed to relieve symptoms associated with painful inflammatory conditions of the muscolo-skeletal system including acute inflammatory disorders such as myalgia and bursitis or traumatic conditions like sprains, strains, bruises, sore muscles, stiff joints, or even the after-effects of fractures. [ L1123]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 05:26 | 11:15 | 0/0/0 | 0/0/0 | 0/0/0 | 51,117/3,590 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 43 matched, 43 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anfossi_1993.pdf` | Anfossi P et al., Pharmacokinetics of benzydamine in dair…, Veterinary research communi… (1993) | popPK | 10 | [10.1007/BF01839222](https://doi.org/10.1007/BF01839222) | [8146956](https://pubmed.ncbi.nlm.nih.gov/8146956) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-lives) for benzydamine in dairy cows, and all numeric values are explicitly present in the provided text. |
| `Jansen_1987.pdf` | Jansen JW, [Antithrombotic action of benzydamine], Arzneimittel-Forschung (1987) | pd | 4 | not captured | [3619983](https://www.ncbi.nlm.nih.gov/pubmed/3619983) | metadata signals extractable PD data (IC50) |
| `Miró_2020.pdf` | Miró V et al., In vitro inhibition of the hepatic S-ox…, Xenobiotica; the fate of fo… (2020) | pd | 4 | [10.1080/00498254.2019.1644390](https://doi.org/10.1080/00498254.2019.1644390) | [31305200](https://www.ncbi.nlm.nih.gov/pubmed/31305200) | metadata signals extractable PD data (IC50) |
| `Moncada_1976.pdf` | Moncada S et al., Prostaglandin endoperoxide and thrombox…, Prostaglandins (1976) | pd | 4 | [10.1016/0090-6980(76)90014-9](https://doi.org/10.1016/0090-6980(76)90014-9) | [968048](https://www.ncbi.nlm.nih.gov/pubmed/968048) | metadata signals extractable PD data (IC50) |
| `Müller-Peddinghaus_1987.pdf` | Müller-Peddinghaus R et al., [The effect of benzydamine on the gener…, Arzneimittel-Forschung (1987) | pd | 4 | not captured | [3040020](https://www.ncbi.nlm.nih.gov/pubmed/3040020) | metadata signals extractable PD data (IC50) |
| `Giri_2022.pdf` | Giri P et al., ZY12201, A Potent TGR5 Agonist: Identif…, Drug metabolism letters (2022) | pgx | 7 | [10.2174/1872312815666220315145945](https://doi.org/10.2174/1872312815666220315145945) | [35293300](https://www.ncbi.nlm.nih.gov/pubmed/35293300) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-10T05:24:28.054615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bortolussi_2021 | not_relevant | 2 | 5 | The paper reports in vitro catalytic rates of FMO3 variants on benzydamine, but does not report in vivo pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Collier_1968 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on bronchoconstriction antagonism in guinea pigs and does not report any pharmacokinetic parameters for benzydamine. |
| PD | Collier_1968 | not_relevant | 2 | 1 | The paper reports that benzydamine was inactive in the tested model and provides no numeric PD parameters or concentration-effect data for it. |
| popPK | Damerau_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of benzydamine's effect on granulocyte function and does not report any pharmacokinetic parameters. |
| PGx | Gao_2016 | not_relevant | 2 | 0 | The paper focuses on structural modeling and molecular docking of hFMO3 variants with benzydamine, providing mechanistic insights into binding but reporting no in vivo or in vitro pharmacokinetic/pharmacodynamic parameter changes. |
| popPK | Gentile_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ER stress and cell viability, not a pharmacokinetic study, and contains no PK parameters for benzydamine. |
| PD | Gentile_2025 | not_relevant | 2 | 1 | The paper reports qualitative cytoprotective effects and mentions nanomolar concentrations for benzydamine, but provides no numeric dose-response curves, Emax, or EC50 values in the text. |
| popPK | Giri_2022 | irrelevant | 0 | 0 | The paper focuses on a TGR5 agonist (ZY12201) and CYP450 inhibition, with no mention of benzydamine or its pharmacokinetic parameters. |
| PD | Giri_2022 | not_relevant | 0 | 0 | The paper focuses on ZY12201, a TGR5 agonist and CYP450 inhibitor, and does not contain any pharmacodynamic or exposure-response data for benzydamine. |
| PGx | Giri_2022 | not_relevant | 0 | 0 | The paper describes a CYP450 inhibitor tool compound (ZY12201) and does not report pharmacogenomic effects on benzydamine. |
| popPK | Guglielmotti_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of benzydamine's protective effects in a mouse model of endotoxemia and does not report any pharmacokinetic parameters. |
| PGx | Hoskins_2001 | not_relevant | 0 | 0 | The paper investigates the metabolism of moclobemide, not benzydamine, and does not report pharmacogenomic effects on benzydamine PK/PD. |
| PGx | Ichinose_2024 | not_relevant | 0 | 0 | The paper compares species differences in xenobiotic metabolism using liver slices and does not investigate the effect of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Jansen_1987 | irrelevant | 0 | 0 | The paper focuses on the antithrombotic action of benzydamine, which is a pharmacodynamic/mechanistic study, and no pharmacokinetic parameters are reported in the evidence. |
| PD | Jansen_1987 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to assess pharmacodynamic relationships. |
| popPK | Kalil_2014 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy for preventing postoperative sore throat and does not report any pharmacokinetic parameters for benzydamine. |
| PD | Kalil_2014 | not_relevant | 1 | 0 | The paper is a review of clinical trials regarding the efficacy of benzydamine for sore throat and explicitly states that dose-response relationships need to be explored in future trials, providing no numeric PD parameters. |
| popPK | Kaval_2022 | irrelevant | 0 | 0 | The study is an in-vitro investigation of anti-inflammatory cytokine expression and cytotoxicity, containing no pharmacokinetic parameters for benzydamine. |
| PGx | Lang_2000 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics for benzydamine metabolism by FMO and P450 isoforms but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Larsen_2023 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of acaricides on liver enzymes in bovine microsomes and does not report any pharmacogenomic effects (gene variants) on the PK/PD of benzydamine. |
| popPK | Miró_2020 | irrelevant | 0 | 0 | The paper focuses on in vitro inhibition of albendazole by thymol and does not involve benzydamine or report its pharmacokinetic parameters. |
| PD | Miró_2020 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of albendazole metabolism by thymol, not the pharmacodynamics of benzydamine. |
| popPK | Moncada_1976 | irrelevant | 0 | 0 | The paper concerns prostaglandin and thromboxane systems, not the pharmacokinetics of benzydamine. |
| PD | Moncada_1976 | not_relevant | 0 | 0 | The provided text is a title regarding prostaglandin systems and does not contain any data, analysis, or mention of benzydamine or its pharmacodynamic parameters. |
| popPK | Müller-Peddinghaus_1987 | irrelevant | 0 | 0 | The paper focuses on the mechanistic effects of benzydamine on reactive oxygen species and enzymes, not on pharmacokinetic parameters. |
| PD | Müller-Peddinghaus_1987 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of benzydamine on reactive oxygen species and enzyme pathways, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response relationship with numeric PD parameters. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data or mention of benzydamine. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain any specific data, analysis, or mention of benzydamine or its pharmacodynamic parameters. |
| popPK | Ohnishi_1980 | irrelevant | 0 | 0 | The study focuses on the pharmacological activity of protizinic acid, with benzydamine serving only as a comparator in platelet aggregation assays without any pharmacokinetic parameters reported. |
| PD | Ohnishi_1980 | not_relevant | 0 | 0 | The paper focuses on protizinic acid and only mentions benzydamine as a reference agent in a ranking list without providing specific numeric PD parameters or exposure-response data for it. |
| PGx | Pike_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of a disulfiram metabolite by FMO1, using benzydamine only as a probe for enzyme activity, and does not report pharmacogenomic effects on benzydamine's PK or PD. |
| popPK | Quane_1998 | irrelevant | 1 | 0 | The paper is a pharmacological review discussing mechanism of action and in-vitro concentrations, lacking any quantitative population pharmacokinetic parameters (CL, V, ka) for benzydamine. |
| PD | Quane_1998 | not_relevant | 3 | 4 | The text is a qualitative review that lists specific in vitro concentrations for various effects (e.g., TNF-alpha EC50 25 µM, neutrophil inhibition 30-100 µM) but does not present a formal PK/PD model, dose-response curve, or population-level analysis linking exposure to effect in a clinical or pharmacokinetic context. |
| PGx | Reddy_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for FMO substrates including benzydamine but does not report specific pharmacogenomic effects (gene variants) on PK parameters. |
| popPK | Riboldi_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of benzydamine's effect on monocyte migration and MAPK activation, reporting no pharmacokinetic parameters. |
| PGx | Taniguchi-Takizawa_2015 | not_relevant | 0 | 0 | The study characterizes species differences in liver microsomal metabolism and enzyme identification (FMO vs CYP), but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Uehara_2015 | not_relevant | 0 | 0 | The paper focuses on MPTP metabolism in marmosets and uses benzydamine only as a probe substrate for FMO activity, not as the primary drug of interest for pharmacogenomic analysis. |
| PGx | Xu_2017 | not_relevant | 2 | 5 | The paper reports genetic associations with FMO3 protein abundance and mRNA expression, but does not report changes in specific pharmacokinetic (e.g., AUC, clearance) or pharmacodynamic parameters of benzydamine in humans. |
| PGx | Yeung_2007 | not_relevant | 0 | 0 | The paper studies FMO3 variants and their effect on trimethylamine and benzydamine metabolism in vitro, but does not report pharmacogenomic effects on PK/PD parameters in humans or for the specific clinical context of benzydamine. |
| popPK | Ősz_2023 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic properties and mechanisms of action, not a pharmacokinetic study, and it lacks quantitative disposition parameters like clearance or volume of distribution. |
| PD | Ősz_2023 | not_relevant | 2 | 0 | The paper is a qualitative review of chemical structure and proposed mechanisms, lacking any quantitative exposure-response or dose-response data with numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_benzydamine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
