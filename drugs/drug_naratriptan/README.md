<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;naratriptan&quot;}]"></div>

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
| 2026-09-21 07:16 | 17:48 | 0/0/0 | 0/3/1 | 0/0/0 | 268,158/7,225 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/4 | 6/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Maas_2006](drugs/drug_naratriptan/pd_Maas_2006_unknown.md) | Maas HJ et al., A model-based approach to treatment com…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02670.x](https://doi.org/10.1111/j.1365-2125.2006.02670.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [MaassenVanDenBrink_1998](drugs/drug_naratriptan/pd_MaassenVanDenBrink_1998_unknown.md) | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tokuoka_2014](drugs/drug_naratriptan/pd_Tokuoka_2014_unknown.md) | Tokuoka K et al., Theory-based analysis of clinical effic…, The journal of headache and… (2014) | [10.1186/1129-2377-15-85](https://doi.org/10.1186/1129-2377-15-85) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tokuoka_2015](drugs/drug_naratriptan/pd_Tokuoka_2015_headache_recurrence_rate.md) | Tokuoka K et al., Theoretical analysis of headache recurr…, The journal of headache and… (2015) | [10.1186/s10194-015-0558-9](https://doi.org/10.1186/s10194-015-0558-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=naratriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` substrate | DrugBank actor |
| metabolism | liver | `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (target), HTR1B (target), HTR1D (target), HTR1F (target).</sub>

## Coverage

- **PubMed hits:** 51 matched, 59 returned
- **screened:** 1  ·  **relevant:** 0
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

<sub>queue written 2026-09-21T07:10:41.024989+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adelman_2001 | irrelevant | 0 | 0 | The paper is a clinical review comparing triptans for migraine treatment and does not report quantitative pharmacokinetic parameters for naratriptan. |
| popPK | Amundsen_2021 | irrelevant | 2 | 0 | The study reports relative infant dose (RID) for naratriptan in breast milk but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Belvis_2014 | irrelevant | 0 | 0 | The paper is a narrative review discussing migraine treatment strategies and does not report original quantitative pharmacokinetic parameters for naratriptan. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review discussing the clinical use and profiles of triptans, including naratriptan, but it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Belvís_2009 | irrelevant | 0 | 0 | The paper is a review discussing triptan selection and does not report original quantitative pharmacokinetic parameters for naratriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for naratriptan. |
| popPK | Brêtas_2016 | irrelevant | 0 | 0 | Naratriptan is used only as an internal standard for the quantification of naproxen and sumatriptan, and no PK parameters for naratriptan are reported. |
| popPK | Christensen_2001 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Connor_1997 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Connor_1997 | not_relevant | 0 | 0 | The paper describes the biological profile in animal models but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters for naratriptan. |
| popPK | Deleu_2000 | irrelevant | 1 | 0 | The paper is a comparative review of second-generation triptans and does not report original quantitative pharmacokinetic parameter values for naratriptan. |
| popPK | Duléry_1997 | irrelevant | 0 | 0 | no_text gate: only 209 chars of text extracted (&lt; 400) |
| popPK | Fox_2000 | irrelevant | 1 | 0 | The paper is a comparative tolerability review that discusses exposure metrics (Cmax, bioavailability) qualitatively or via correlation, but does not report specific quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for naratriptan. |
| PD | Fox_2000 | not_relevant | 2 | 1 | The paper discusses qualitative rank orders and correlations between dose/exposure and adverse events but does not provide numeric PD parameters (e.g., Emax, EC50) or a specific concentration-effect curve for naratriptan. |
| popPK | Färkkilä_2005 | irrelevant | 0 | 0 | The paper is a review of eletriptan where naratriptan is only mentioned as a comparator in efficacy trials, with no pharmacokinetic parameters reported. |
| popPK | Gueorguieva_2005 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Hou_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis of efficacy (pain-free/relief rates) and does not report pharmacokinetic parameters for naratriptan. |
| popPK | Jhee_2001 | irrelevant | 2 | 0 | The paper is a comparative review that mentions naratriptan's bioavailability and half-life but does not report original quantitative disposition parameters like clearance, volume, or compartmental model parameters. |
| PD | Jhee_2001 | not_relevant | 1 | 0 | The text is a comparative review of pharmacokinetic properties (bioavailability, half-life) and general mechanisms, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for naratriptan. |
| popPK | Kassem_2016 | irrelevant | 1 | 0 | The paper is a review of formulation approaches for triptans and does not report original quantitative pharmacokinetic parameters for naratriptan. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a narrative review comparing gepants and triptans for migraine treatment and does not report pharmacogenomic effects on naratriptan PK/PD. |
| popPK | Maas_2006 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling (Markov model) of migraine response and uses PK data only as a covariate, without reporting specific quantitative PK parameter values (CL, V, ka) for naratriptan in the text. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for naratriptan. |
| popPK | Macone_2017 | irrelevant | 0 | 0 | The paper is a narrative review of triptan development and clinical use, containing no original pharmacokinetic data or quantitative disposition parameters for naratriptan. |
| popPK | Matthaei_2016 | irrelevant | 1 | 0 | The study focuses on sumatriptan as the subject drug, with naratriptan mentioned only as a secondary substrate for OCT1 transport without specific PK parameter values. |
| PGx | Matthaei_2016 | not_relevant | 2 | 0 | The paper reports pharmacokinetic effects for sumatriptan, not naratriptan, although it notes OCT1 transports naratriptan. |
| popPK | Millson_2000 | irrelevant | 1 | 0 | The paper is a clinical review discussing the general pharmacokinetic profiles of triptans without reporting specific quantitative disposition parameters (e.g., CL, V, ka) for naratriptan. |
| popPK | Moret_1997 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic investigation of 5-HT autoreceptors where naratriptan is used as a pharmacological tool, not a PK study. |
| PD | Moret_1997 | not_relevant | 2 | 1 | The paper describes qualitative effects of naratriptan on 5-HT release in an in vitro/in vivo animal model but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for naratriptan. |
| popPK | Nestorov_2001 | irrelevant | 2 | 0 | The paper focuses on clinical trial design and simulation using a PK-PD model, but the specific quantitative PK parameter values (CL, V, etc.) are not reported in the provided evidence. |
| PD | Nestorov_2001 | not_relevant | 4 | 2 | The paper describes the development of a PK-PD model for trial simulation but the provided text does not contain the specific numeric PD parameters (e.g., Emax, EC50) or the model equations required to extract them. |
| popPK | Newman-Tancredi_1997 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Newman-Tancredi_1997 | not_relevant | 3 | 2 | The paper reports in vitro receptor binding/agonist activity (functional affinity) rather than an in vivo pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50 in a clinical or PK/PD context. |
| popPK | Pauwels_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT1D receptor-mediated cell growth, not a pharmacokinetic study, and reports no disposition parameters for naratriptan. |
| popPK | Pauwels_1998 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Pauwels_1998 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of 5-HT1B receptors in guinea-pig cells and does not mention naratriptan or report any exposure-response or dose-response data for it. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated vascular contraction, not a pharmacokinetic study, and reports no disposition parameters for naratriptan. |
| popPK | Saito_2023 | irrelevant | 2 | 0 | Naratriptan is one of nine compounds used as a probe to characterize MATE1 transport in mice, and no specific quantitative PK parameters (CL, V, ka) for naratriptan are reported in the provided evidence. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 1 | 0 | The paper is a comparative review that mentions naratriptan's half-life qualitatively but does not report quantitative disposition parameters like clearance or volume. |
| PD | Tfelt-Hansen_2000 | not_relevant | 1 | 0 | The text is a comparative review summarizing clinical efficacy (therapeutic gain) and PK parameters, but it does not report any exposure-response or dose-response modeling, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 0 | 0 | The paper is a clinical review of dose-response and tolerability, not a pharmacokinetic study, and does not report quantitative PK parameters (CL, V, ka, etc.) for naratriptan. |
| PD | Tfelt-Hansen_2011 | not_relevant | 3 | 2 | The paper is a review that qualitatively describes dose-response curves for naratriptan (efficacy plateau at 7.5 mg) but does not provide a formal PD model or a table of numeric effect values from which specific PD parameters (like Emax or EC50) can be derived. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and therapeutic delay, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for naratriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing Tmax with time to maximum effect (Emax) for various drugs, but it does not report a quantitative concentration-effect model or specific numeric PD parameters (like EC50 or slope) for naratriptan. |
| popPK | Tfelt-Hansen_2021 | irrelevant | 2 | 3 | The paper is a clinical review comparing efficacy and tolerability, reporting only basic PK descriptors (bioavailability, Tmax, half-life) without compartmental parameters (CL, V, Q, ka) or population PK models. |
| popPK | Tokuoka_2014 | irrelevant | 2 | 1 | The study is a retrospective pharmacodynamic analysis of receptor occupancy for multiple triptans, not a primary PK study reporting quantitative disposition parameters (CL, V, ka) for naratriptan. |
| popPK | Tokuoka_2015 | irrelevant | 2 | 1 | The paper is a theoretical analysis of receptor occupancy and headache recurrence using PK data from other studies, and it does not report original quantitative disposition parameters (CL, V, Q, ka) for naratriptan. |
| popPK | Valentin_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile responses in canine coronary arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Villalón_2002 | irrelevant | 0 | 0 | The paper is a general review of migraine pharmacology and does not report any quantitative pharmacokinetic parameters for naratriptan. |
| popPK | Villalón_2003 | irrelevant | 0 | 0 | The paper is a general review of migraine pathophysiology and treatment that mentions naratriptan only as a class example without reporting any quantitative pharmacokinetic parameters. |
| popPK | Vishwanathan_2000 | irrelevant | 1 | 0 | The paper describes an analytical method (LC/MS/MS) for quantifying naratriptan in serum but does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wainscott_1998 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and mechanistic study, not a pharmacokinetic study, and contains no disposition parameters for naratriptan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_naratriptan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
