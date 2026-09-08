# naratriptan

- **generic name:** naratriptan
- **ATC codes:** `N02CC02`
- **DrugBank:** [DB00952](https://go.drugbank.com/drugs/DB00952)
- **groups:** approved

## About

**Description.** Naratriptan is a triptan drug that is selective for the 5-hydroxytryptamine1 receptor subtype. It is typically used for the treatment of migraine headaches.

**Indication.** For the acute treatment of migraine attacks with or without aura in adults.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 21:10 | 14:31 | 0/0/0 | 0/3/1 | 0/0/0 | 202,542/4,211 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Maas_2006](drugs/drug_naratriptan/pd_Maas_2006_unknown.md) | Maas HJ et al., A model-based approach to treatment com…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02670.x](https://doi.org/10.1111/j.1365-2125.2006.02670.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [MaassenVanDenBrink_1998](drugs/drug_naratriptan/pd_MaassenVanDenBrink_1998_unknown.md) | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tokuoka_2014](drugs/drug_naratriptan/pd_Tokuoka_2014_unknown.md) | Tokuoka K et al., Theory-based analysis of clinical effic…, The journal of headache and… (2014) | [10.1186/1129-2377-15-85](https://doi.org/10.1186/1129-2377-15-85) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tokuoka_2015](drugs/drug_naratriptan/pd_Tokuoka_2015_headache_recurrence_rate.md) | Tokuoka K et al., Theoretical analysis of headache recurr…, The journal of headache and… (2015) | [10.1186/s10194-015-0558-9](https://doi.org/10.1186/s10194-015-0558-9) |

## Coverage

- **PubMed hits:** 47 matched, 47 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gueorguieva_2005.pdf` | Gueorguieva I et al., Uncertainty analysis in pharmacokinetic…, Pharmaceutical research (2005) | pd | 5 | [10.1007/s11095-005-6629-x](https://doi.org/10.1007/s11095-005-6629-x) | [16180118](https://www.ncbi.nlm.nih.gov/pubmed/16180118) | metadata signals extractable PD data (PK/PD) |
| `Nestorov_2001.pdf` | Nestorov I et al., Modeling and stimulation for clinical t…, Pharmaceutical research (2001) | pd | 5 | [10.1023/a:1010943430471](https://doi.org/10.1023/a:1010943430471) | [11587494](https://www.ncbi.nlm.nih.gov/pubmed/11587494) | metadata signals extractable PD data (PK-PD) |
| `Pauwels_1998.pdf` | Pauwels PJ et al., Pharmacological analysis of G-protein a…, British journal of pharmaco… (1998) | pd | 5 | [10.1038/sj.bjp.0701584](https://doi.org/10.1038/sj.bjp.0701584) | [9484854](https://www.ncbi.nlm.nih.gov/pubmed/9484854) | metadata signals extractable PD data (Emax) |
| `Connor_1997.pdf` | Connor HE et al., Naratriptan: biological profile in anim…, Cephalalgia : an internatio… (1997) | pd | 4 | [10.1046/j.1468-2982.1997.1703145.x](https://doi.org/10.1046/j.1468-2982.1997.1703145.x) | [9170336](https://www.ncbi.nlm.nih.gov/pubmed/9170336) | metadata signals extractable PD data (EC50) |
| `Hou_2019.pdf` | Hou M et al., Efficacy of triptans for the treatment…, European journal of clinica… (2019) | pd | 4 | [10.1007/s00228-019-02748-4](https://doi.org/10.1007/s00228-019-02748-4) | [31446449](https://www.ncbi.nlm.nih.gov/pubmed/31446449) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Moret_1997.pdf` | Moret C et al., 5-HT autoreceptors in the regulation of…, Neuropharmacology (1997) | pd | 4 | [10.1016/s0028-3908(97)00145-7](https://doi.org/10.1016/s0028-3908(97)00145-7) | [9517443](https://www.ncbi.nlm.nih.gov/pubmed/9517443) | metadata signals extractable PD data (concentration-effect) |
| `Newman-Tancredi_1997.pdf` | Newman-Tancredi A et al., Agonist activity of antimigraine drugs…, Naunyn-Schmiedeberg's archi… (1997) | pd | 4 | [10.1007/pl00005000](https://doi.org/10.1007/pl00005000) | [9205951](https://www.ncbi.nlm.nih.gov/pubmed/9205951) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-08-29T21:06:05.935135+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review discussing the clinical use and profiles of triptans, including naratriptan, but it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for naratriptan. |
| popPK | Connor_1997 | irrelevant | 2 | 0 | The paper reports pharmacodynamic and receptor binding data (pKi, EC50, CD50) and bioavailability, but lacks quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Fox_2000 | irrelevant | 1 | 0 | The paper is a comparative tolerability review that discusses exposure metrics (Cmax, bioavailability) qualitatively or via correlation, but does not report specific quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for naratriptan. |
| PD | Fox_2000 | not_relevant | 2 | 1 | The paper discusses qualitative rank orders and correlations between dose/exposure and adverse events but does not provide numeric PD parameters (e.g., Emax, EC50) or a specific concentration-effect curve for naratriptan. |
| popPK | Färkkilä_2005 | irrelevant | 0 | 0 | The paper is a review of eletriptan where naratriptan is only mentioned as a comparator in efficacy trials, with no pharmacokinetic parameters reported. |
| popPK | Gueorguieva_2005 | irrelevant | 2 | 0 | The paper is a modeling/uncertainty analysis study that does not report original quantitative PK parameter values for naratriptan in the provided evidence. |
| PD | Gueorguieva_2005 | not_relevant | 4 | 2 | The paper describes a PK/PD model and sensitivity analysis for naratriptan but does not provide the specific numeric PD parameters (e.g., Emax, EC50) or the underlying concentration-effect data required to extract a quantitative relationship. |
| popPK | Jhee_2001 | irrelevant | 2 | 0 | The paper is a comparative review that mentions naratriptan's bioavailability and half-life but does not report original quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| PD | Jhee_2001 | not_relevant | 2 | 1 | The text is a comparative review summarizing general PK properties (bioavailability, half-life) and qualitative efficacy, but it does not report specific numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve for naratriptan. |
| popPK | Kassem_2016 | irrelevant | 1 | 0 | The paper is a review of formulation approaches for triptans and does not report original quantitative pharmacokinetic parameters for naratriptan. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a narrative review comparing the clinical efficacy and safety of gepants and triptans, and it does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Maas_2006 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling (Markov model) of migraine response and uses PK data only as a covariate, without reporting specific quantitative PK parameter values (CL, V, ka) for naratriptan in the text. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for naratriptan. |
| popPK | Macone_2017 | irrelevant | 0 | 0 | The paper is a narrative review of triptan development and clinical use, containing no original pharmacokinetic data or quantitative disposition parameters for naratriptan. |
| PGx | Matthaei_2016 | not_relevant | 2 | 0 | The paper reports pharmacokinetic effects for sumatriptan, not naratriptan, although it notes OCT1 transports naratriptan. |
| popPK | Millson_2000 | irrelevant | 1 | 0 | The paper is a clinical review discussing the general pharmacokinetic profiles of triptans without reporting specific quantitative disposition parameters (e.g., CL, V, ka) for naratriptan. |
| PD | Moret_1997 | not_relevant | 2 | 1 | The paper describes qualitative effects of naratriptan on 5-HT release in an in vitro/in vivo animal model but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for naratriptan. |
| PD | Nestorov_2001 | not_relevant | 4 | 2 | The paper describes the development of a PK-PD model for trial simulation but the provided text does not contain the specific numeric PD parameters (e.g., Emax, EC50) or the model equations required to extract them. |
| popPK | Newman-Tancredi_1997 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and functional assay study, not a pharmacokinetic study, and reports no disposition parameters for naratriptan. |
| popPK | Pauwels_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT1D receptor-mediated cell growth, not a pharmacokinetic study, and naratriptan is used only as a ligand to determine EC50 values. |
| popPK | Pauwels_1998 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of receptor binding and G-protein activation, not a pharmacokinetic study, and contains no disposition parameters for naratriptan. |
| PD | Pauwels_1998 | not_relevant | 3 | 2 | The paper reports in vitro receptor pharmacology (binding and G-protein activation) with relative efficacy and potency correlations, but does not provide in vivo PK/PD modeling, exposure-response relationships, or specific numeric PD parameters (like EC50/Emax in concentration units) for naratriptan. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated vascular contraction, not a pharmacokinetic study, and reports no disposition parameters for naratriptan. |
| popPK | Saito_2023 | irrelevant | 2 | 0 | Naratriptan is one of nine compounds used as a probe to characterize MATE1 transport mechanisms in mice, and the provided evidence contains no quantitative PK parameter values (CL, V, ka, etc.) for naratriptan. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 1 | 0 | The paper is a comparative review that mentions naratriptan's half-life qualitatively but does not report quantitative disposition parameters like clearance or volume. |
| PD | Tfelt-Hansen_2000 | not_relevant | 1 | 0 | The text is a comparative review summarizing clinical efficacy (therapeutic gain) and PK parameters, but it does not report any exposure-response or dose-response modeling, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 0 | 0 | The paper is a clinical review of dose-response and tolerability, not a pharmacokinetic study, and does not report quantitative PK parameters (CL, V, ka, etc.) for naratriptan. |
| PD | Tfelt-Hansen_2011 | not_relevant | 3 | 2 | The paper is a review that qualitatively describes dose-response curves for naratriptan (efficacy plateau at 7.5 mg) but does not provide a formal PD model, numeric PD parameters (like Emax/EC50), or a detailed table of numeric effect values for extraction. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and therapeutic delay, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for naratriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing Tmax with time to maximum effect (Emax) for various drugs, but it does not report a quantitative concentration-effect model or specific numeric PD parameters (like EC50 or slope) for naratriptan. |
| PD | Tfelt-Hansen_2021 | not_relevant | 2 | 1 | The paper is a mini-review that qualitatively compares clinical efficacy (pain-free rates) at specific doses but does not provide a concentration-effect curve, PK/PD fit, or numeric PD parameters like Emax or EC50. |
| popPK | Tokuoka_2015 | irrelevant | 2 | 1 | The paper is a theoretical analysis of receptor occupancy and headache recurrence using PK data from other studies, and it does not report original quantitative disposition parameters (CL, V, Q, ka) for naratriptan. |
| popPK | Valentin_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile responses in canine coronary arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Villalón_2002 | irrelevant | 0 | 0 | The paper is a general review of migraine pharmacology and does not report any quantitative pharmacokinetic parameters for naratriptan. |
| popPK | Villalón_2003 | irrelevant | 0 | 0 | The paper is a general review of migraine pathophysiology and treatment that mentions naratriptan only as a class example without reporting any quantitative pharmacokinetic parameters. |
| popPK | Wainscott_1998 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and mechanistic study, not a pharmacokinetic study, and contains no disposition parameters for naratriptan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_naratriptan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
