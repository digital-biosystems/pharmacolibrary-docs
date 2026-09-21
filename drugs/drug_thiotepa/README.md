<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;thiotepa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiotepa_Huitema2001_patients_undergoing_high_dose_chemother&quot;,&quot;label&quot;:&quot;Huitema_2001_patients undergoing high-dose chemotherapy&quot;,&quot;href&quot;:&quot;drugs/drug_thiotepa/Thiotepa_Huitema2001_patients_undergoing_high_dose_chemother.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thiotepa_Przepiorka1995_adults_undergoing_marrow_transplanta&quot;,&quot;label&quot;:&quot;Przepiorka_1995_adults undergoing marrow transplantation&quot;,&quot;href&quot;:&quot;drugs/drug_thiotepa/Thiotepa_Przepiorka1995_adults_undergoing_marrow_transplanta.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thiotepa_de2004_patients_receiving_high_dose_chemotherapy&quot;,&quot;label&quot;:&quot;de_2004_patients receiving high-dose chemotherapy&quot;,&quot;href&quot;:&quot;drugs/drug_thiotepa/Thiotepa_de2004_patients_receiving_high_dose_chemotherapy.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# thiotepa

- **generic name:** thiotepa
- **ATC codes:** `L01AC01`
- **DrugBank:** [DB04572](https://go.drugbank.com/drugs/DB04572)
- **groups:** approved, investigational

## About

**Description.** N,N'N'-triethylenethiophosphoramide (ThioTEPA) is a cancer chemotherapeutic member of the alkylating agent group, now in use for over 50 years. It is a stable derivative of N,N',N''- triethylenephosphoramide (TEPA). It is mostly used to treat breast cancer, ovarian cancer and bladder cancer. It is also used as conditioning for Bone marrow transplantation. Its main toxicity is myelosuppression.

**Indication.** ThioTEPA is used a as conditioning treatment prior to allogeneic or autologous haematopoietic progenitor cell transplantation (HPCT) in haematological diseases in adult and paediatric patients. Also, when high dose chemotherapy with HPCT support it is appropriate for the treatment of solid tumours in adult and paediatric patients.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 04:35 | 11:21 | 0/0/0 | 0/0/0 | 0/0/0 | 58,158/3,063 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Huitema_2001_patients undergoing high-dose chemotherapy](drugs/drug_thiotepa/Thiotepa_Huitema2001_patients_undergoing_high_dose_chemother.md) | Huitema (2001) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Przepiorka_1995_adults undergoing marrow transplantation](drugs/drug_thiotepa/Thiotepa_Przepiorka1995_adults_undergoing_marrow_transplanta.md) | Przepiorka D et al., Dosing of thioTEPA for myeloablative th…, Cancer chemotherapy and pha… (1995) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [de_2004_patients receiving high-dose chemotherapy](drugs/drug_thiotepa/Thiotepa_de2004_patients_receiving_high_dose_chemotherapy.md) | de Jonge ME et al., Integrated Population Pharmacokinetic M…, Journal of pharmacokinetics… (2004) | [10.1023/b:jopa.0000034405.03895.c2](https://doi.org/10.1023/b:jopa.0000034405.03895.c2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thiotepa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `CYP2B6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Urinary excretion of 14C-labeled thiotepa and metabolites in a 34-y…”</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

## Coverage

- **PubMed hits:** 80 matched, 54 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huitema_2001.pdf` | Huitema AD et al., Population pharmacokinetics of thioTEPA…, British journal of clinical… (2001) | popPK | 10 | [10.1046/j.1365-2125.2001.01301.x](https://doi.org/10.1046/j.1365-2125.2001.01301.x) | [11167666](https://pubmed.ncbi.nlm.nih.gov/11167666) | The paper reports a population PK model for thiotepa with explicit numeric values for clearance, volume of distribution, and metabolite parameters directly in the text. |
| `Przepiorka_1995.pdf` | Przepiorka D et al., Dosing of thioTEPA for myeloablative th…, Cancer chemotherapy and pha… (1995) | popPK | 10 | not captured | [7497586](https://pubmed.ncbi.nlm.nih.gov/7497586) | The paper reports quantitative compartmental pharmacokinetic parameters (Vc, t1/2, clearance) for thiotepa in humans, with all numeric values explicitly present in the text. |
| `de_2004.pdf` | de Jonge ME et al., Integrated Population Pharmacokinetic M…, Journal of pharmacokinetics… (2004) | popPK | 10 | [10.1023/b:jopa.0000034405.03895.c2](https://doi.org/10.1023/b:jopa.0000034405.03895.c2) | [15379382](https://pubmed.ncbi.nlm.nih.gov/15379382) | The paper reports a population PK model for thiotepa with specific numeric clearance values (ClindTT, ClnonindTT) and enzyme elimination rate constants present in the text. |
| `Huitema_2002.pdf` | Huitema AD et al., Relationship between exposure and toxic…, Annals of oncology : offici… (2002) | popPK | 9 | [10.1093/annonc/mdf052](https://doi.org/10.1093/annonc/mdf052) | [11996467](https://pubmed.ncbi.nlm.nih.gov/11996467) | The paper is a population pharmacokinetic study of thiotepa, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `de_2005.pdf` | de Jonge ME et al., Aprepitant inhibits cyclophosphamide bi…, Cancer chemotherapy and pha… (2005) | popPK | 8 | [10.1007/s00280-005-1005-4](https://doi.org/10.1007/s00280-005-1005-4) | [15838656](https://pubmed.ncbi.nlm.nih.gov/15838656) | The study performs a population pharmacokinetic analysis of thiotepa and reports a specific percentage change in formation clearance, but lacks the absolute numeric values for clearance, volume, or half-life required for parameter extraction. |
| `Ekhart_2009.pdf` | Ekhart C et al., Polymorphisms of drug-metabolizing enzy…, British journal of clinical… (2009) | pgx | 8 | [10.1111/j.1365-2125.2008.03321.x](https://doi.org/10.1111/j.1365-2125.2008.03321.x) | [19076156](https://www.ncbi.nlm.nih.gov/pubmed/19076156) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Li_2013.pdf` | Li Y et al., The CYP2B6*6 allele significantly alter…, Drug metabolism and disposi… (2013) | pgx | 8 | [10.1124/dmd.113.051631](https://doi.org/10.1124/dmd.113.051631) | [23550066](https://www.ncbi.nlm.nih.gov/pubmed/23550066) | metadata signals extractable PGX data (CYP2B6*6, PK/PD-context) |
| `Rae_2002.pdf` | Rae JM et al., Triethylenethiophosphoramide is a speci…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.5.525](https://doi.org/10.1124/dmd.30.5.525) | [11950782](https://www.ncbi.nlm.nih.gov/pubmed/11950782) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Ramírez_2004.pdf` | Ramírez J et al., CYP2B6, CYP3A4, and CYP2C19 are respons…, Drug metabolism and disposi… (2004) | pgx | 7 | not captured | [15319333](https://www.ncbi.nlm.nih.gov/pubmed/15319333) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Richter_2005.pdf` | Richter T et al., Inhibition of human CYP2B6 by N,N',N''-…, Biochemical pharmacology (2005) | pgx | 7 | [10.1016/j.bcp.2004.10.008](https://doi.org/10.1016/j.bcp.2004.10.008) | [15652242](https://www.ncbi.nlm.nih.gov/pubmed/15652242) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Seo_2008.pdf` | Seo KA et al., The monoterpenoids citral and geraniol…, Chemico-biological interact… (2008) | pgx | 7 | [10.1016/j.cbi.2008.06.003](https://doi.org/10.1016/j.cbi.2008.06.003) | [18611395](https://www.ncbi.nlm.nih.gov/pubmed/18611395) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Ward_2003.pdf` | Ward BA et al., The cytochrome P450 2B6 (CYP2B6) is the…, The Journal of pharmacology… (2003) | pgx | 7 | [10.1124/jpet.103.049601](https://doi.org/10.1124/jpet.103.049601) | [12676886](https://www.ncbi.nlm.nih.gov/pubmed/12676886) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Ekhart_2008.pdf` | Ekhart C et al., Relations between polymorphisms in drug…, Pharmacogenetics and genomi… (2008) | pgx | 5 | [10.1097/FPC.0b013e328313aaa4](https://doi.org/10.1097/FPC.0b013e328313aaa4) | [18854779](https://www.ncbi.nlm.nih.gov/pubmed/18854779) | metadata signals extractable PGX data (CYP2B6) |
| `Zhou_2018.pdf` | Zhou X et al., CYP1A1 genetic polymorphism is a promis…, Cancer chemotherapy and pha… (2018) | pgx | 5 | [10.1007/s00280-017-3500-9](https://doi.org/10.1007/s00280-017-3500-9) | [29242966](https://www.ncbi.nlm.nih.gov/pubmed/29242966) | metadata signals extractable PGX data (CYP1A1) |

<sub>queue written 2026-09-15T04:32:27.264125+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aversa_1998 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a stem cell transplant regimen containing thiotepa but does not investigate pharmacogenomic effects on thiotepa PK or PD parameters. |
| PGx | Aversa_2002 | not_relevant | 0 | 0 | The paper reports clinical outcomes of stem cell transplantation and does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of thiotepa. |
| PGx | Bae_2013 | not_relevant | 0 | 0 | The paper studies sibutramine as a CYP2B6 inhibitor and mentions thiotepa only as a reference compound for inhibition potency, without reporting any pharmacogenomic effects on thiotepa's PK or PD. |
| PGx | Ben_2021 | not_relevant | 0 | 0 | The paper is a review of conditioning regimens for ALL and discusses pharmacogenetics only as a future direction for busulfan, without reporting any specific pharmacogenomic effects on thiotepa PK or PD. |
| popPK | Ben_2026 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and outcomes, with thiotepa only mentioned as part of the conditioning regimen without any reported PK parameters for thiotepa. |
| popPK | Chen_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide and its metabolites, with thiotepa only mentioned as a co-administered agent without any reported PK parameters. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen and mentions thiotepa only as an additional agent for some patients, without analyzing any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Ekhart_2008 | not_relevant | 2 | 5 | The paper reports associations between gene variants and toxicity outcomes (PD), but does not report changes in specific pharmacokinetic parameters (e.g., AUC, Cmax) or fitted effect sizes for PK/PD parameters. |
| PGx | Ekhart_2008_2 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of cyclophosphamide, not thiotepa. |
| popPK | Ekhart_2009 | irrelevant | 0 | 0 | The evidence provided consists only of the paper title, which suggests a study on pharmacokinetics, but contains no quantitative disposition parameters, numeric values, or model details for thiotepa. |
| PGx | Ganesan_2009 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of primaquine (G6PD deficiency and CYP metabolism), and thiotepa is only mentioned as a CYP2B6 inhibitor used in the assay, not as the drug of interest. |
| PGx | Gor_2010 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on survival outcomes for cyclophosphamide, not PK/PD parameters for thiotepa. |
| popPK | Huitema_2001_2 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide and its metabolites, with thiotepa serving only as an inhibitor in the model rather than the subject drug for which disposition parameters are reported. |
| popPK | Huitema_2002 | relevant | 9 | 0 | The paper is a population pharmacokinetic study of thiotepa, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Jacobson_2002 | not_relevant | 2 | 0 | The paper identifies CYP3A4 and CYP2B6 as metabolic enzymes for thiotepa in vitro but does not report specific gene variants or genotypes affecting PK/PD parameters. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of ketamine metabolism, not thiotepa. |
| PGx | Miyazawa_2006 | not_relevant | 0 | 0 | The paper investigates the metabolism of (ϩ)-fenchone, not thiotepa, and does not report pharmacogenomic effects on thiotepa PK/PD. |
| PGx | Miyazawa_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of (-)-fenchone, not thiotepa. |
| PGx | Nakahashi_2015 | not_relevant | 0 | 0 | The paper investigates the metabolism of rose oxide, not thiotepa; thiotepa is only mentioned as an inhibitor of CYP2B6. |
| PGx | Ocanto_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen involving thiotepa but does not investigate pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Pai_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the PK of treosulfan, not thiotepa. |
| PGx | Rae_2002 | not_relevant | 0 | 0 | The paper investigates thiotepa as an inhibitor of CYP2B6 affecting cyclophosphamide metabolism, rather than reporting a pharmacogenomic effect on thiotepa's own PK/PD parameters. |
| PGx | Ramírez_2004 | not_relevant | 0 | 0 | The paper investigates the metabolism of meperidine, not thiotepa. |
| PGx | Richter_2005 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2B6 inhibition by thiotepa in vitro but does not report any pharmacogenomic effects (gene variants) on thiotepa's PK or PD parameters. |
| PGx | Seo_2008 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of monoterpenoids on CYP2B6 activity and mentions thiotepa only as a reference inhibitor, without reporting any pharmacogenomic effects on thiotepa's PK or PD parameters. |
| PGx | Song_2015 | not_relevant | 0 | 0 | The study reports clinical outcomes (surival) rather than pharmacokinetic or pharmacodynamic parameters. |
| PGx | Vogel_1989 | not_relevant | 0 | 0 | The paper studies mutagenicity in Drosophila and does not report pharmacokinetic or pharmacodynamic parameters of thiotepa in humans or relevant pharmacogenomic contexts. |
| PGx | Walsky_2007 | not_relevant | 0 | 0 | The paper investigates thiotepa as a chemical inhibitor of CYP2B6, not the pharmacokinetics or pharmacodynamics of thiotepa itself in relation to genetic variants. |
| popPK | Ward_2003 | irrelevant | 0 | 0 | The paper focuses on efavirenz and CYP2B6, not thiotepa pharmacokinetics. |
| PD | Ward_2003 | not_relevant | 0 | 0 | The paper focuses on efavirenz metabolism and CYP2B6 activity, not thiotepa pharmacodynamics. |
| PGx | Ward_2003 | not_relevant | 0 | 0 | The paper focuses on efavirenz and CYP2B6, not thiotepa. |
| popPK | Weigt_2011 | irrelevant | 0 | 0 | The study is a teratogenicity assay in zebrafish embryos that reports toxicity endpoints (LC50, EC50) rather than pharmacokinetic disposition parameters for thiotepa. |
| PGx | Wright_2015 | not_relevant | 0 | 0 | The paper is a review discussing the general potential of pharmacogenomics in stem cell transplant conditioning regimens and does not report specific quantitative data on how gene variants affect the PK or PD of thiotepa. |
| PGx | Zhou_2015 | not_relevant | 2 | 5 | The paper reports an association between GSTP1 genotype and clinical outcomes (PFS/response), but does not report changes in specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., biomarker levels) parameters of thiotepa. |
| PGx | Zhou_2018 | not_relevant | 0 | 0 | The paper reports clinical outcomes (PFS/OS) rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | de_2005 | relevant | 8 | 2 | The study performs a population pharmacokinetic analysis of thiotepa and reports a specific percentage change in formation clearance, but lacks the absolute numeric values for clearance, volume, or half-life required for parameter extraction. |
| popPK | de_2005_2 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide and its metabolites, with thiotepa acting as an interacting agent rather than the subject drug, and no quantitative PK parameters for thiotepa are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_thiotepa`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
