# ethosuximide

- **generic name:** ethosuximide
- **ATC codes:** `N03AD01`
- **DrugBank:** [DB00593](https://go.drugbank.com/drugs/DB00593)
- **groups:** approved, investigational

## About

**Description.** An anticonvulsant especially useful in the treatment of absence seizures unaccompanied by other types of seizures.

**Indication.** For the treatment of petit mal epilepsy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 00:41 | 5:54 | 0/1/0 | 0/0/0 | 0/0/0 | 38,854/2,056 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [el_1978](drugs/drug_ethosuximide/Ethosuximide_el1978_reference.md) | el Sayed MA et al., Pharmacokinetics of ethosuximide in the…, Archives internationales de… (1978) | — |

## Coverage

- **PubMed hits:** 33 matched, 32 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mizuno_2023.pdf` | Mizuno K et al., Model-Informed Precision Dosing Guidanc…, Clinical pharmacology and t… (2023) | popPK | 10 | [10.1002/cpt.2965](https://doi.org/10.1002/cpt.2965) | [37316457](https://pubmed.ncbi.nlm.nih.gov/37316457) | The paper describes a population PK model for ethosuximide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains exposure-response AUC values and dosing guidance. |
| `Patel_1975.pdf` | Patel IH et al., Pharmacokinetic properties of ethosuxim…, Epilepsia (1975) | popPK | 10 | [10.1111/j.1528-1157.1975.tb04755.x](https://doi.org/10.1111/j.1528-1157.1975.tb04755.x) | [816644](https://pubmed.ncbi.nlm.nih.gov/816644) | The paper reports quantitative pharmacokinetic parameters (Vd, CL, t1/2) for ethosuximide in monkeys with specific numeric values present in the text. |
| `el_1978.pdf` | el Sayed MA et al., Pharmacokinetics of ethosuximide in the…, Archives internationales de… (1978) | popPK | 9 | not captured | [708147](https://pubmed.ncbi.nlm.nih.gov/708147) | The paper reports quantitative pharmacokinetic parameters (half-life, volume of distribution, absorption) for ethosuximide in dogs, with specific numeric ranges provided in the text. |
| `Roks_1999.pdf` | Roks G et al., Effects of polytherapy compared with mo…, The Journal of pharmacology… (1999) | pd | 4 | not captured | [9918547](https://www.ncbi.nlm.nih.gov/pubmed/9918547) | metadata signals extractable PD data (sigmoid) |
| `Glauser_2017.pdf` | Glauser TA et al., Pharmacogenetics of antiepileptic drug…, Annals of neurology (2017) | pgx | 8 | [10.1002/ana.24886](https://doi.org/10.1002/ana.24886) | [28165634](https://www.ncbi.nlm.nih.gov/pubmed/28165634) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Bachmann_2003.pdf` | Bachmann K et al., Characterization of the cytochrome P450…, Xenobiotica; the fate of fo… (2003) | pgx | 7 | [10.1080/0049825021000061606](https://doi.org/10.1080/0049825021000061606) | [12637244](https://www.ncbi.nlm.nih.gov/pubmed/12637244) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yau_2014.pdf` | Yau M et al., Effect of ethosuximide on cortisol meta…, Journal of pediatric endocr… (2014) | pgx | 7 | [10.1515/jpem-2013-0147](https://doi.org/10.1515/jpem-2013-0147) | [24468605](https://www.ncbi.nlm.nih.gov/pubmed/24468605) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-10T00:40:27.629679+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albus_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiepileptic drug efficacy in hippocampal slices, not a pharmacokinetic study, and reports no disposition parameters for ethosuximide. |
| PGx | Anderson_1998 | not_relevant | 0 | 0 | The paper is a general review of antiepileptic drug interactions and does not report any pharmacogenomic effects on ethosuximide PK or PD parameters. |
| PGx | Bachmann_2003 | not_relevant | 0 | 0 | The paper characterizes the enzymes involved in ethosuximide metabolism in vitro but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Bachmann_2004 | irrelevant | 1 | 0 | Ethosuximide is used only as a probe drug to measure CYP3A activity in a mechanistic study of lipid regulation, with no quantitative PK parameters reported. |
| PD | Bachmann_2004 | not_relevant | 0 | 0 | The paper uses ethosuximide clearance as a biomarker for CYP3A activity to correlate with HDL-C levels, but does not report a pharmacodynamic exposure-response relationship for ethosuximide itself (e.g., effect of ethosuximide concentration on a biological endpoint). |
| PGx | Cerveny_2006 | not_relevant | 0 | 0 | The study investigates transporter interactions (BCRP) in vitro and does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between Paxlovid and antiseizure medications, not pharmacogenomic effects of gene variants on ethosuximide PK/PD. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper focuses on mephenytoin metabolism and inhibition by other drugs; ethosuximide is only mentioned as a non-inhibitor and no pharmacogenomic effect on its PK/PD is reported. |
| PGx | Kamiński_2015 | not_relevant | 0 | 0 | The paper reports the synthesis and preclinical evaluation of new hybrid anticonvulsants, not the pharmacogenomics of ethosuximide. |
| PGx | Luszczki_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions in mice and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Mizuno_2023 | relevant | 10 | 0 | The paper describes a population PK model for ethosuximide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains exposure-response AUC values and dosing guidance. |
| PGx | Moog_2022 | not_relevant | 0 | 0 | The paper reports the efficacy of antiseizure drugs in a zebrafish model of STXBP1 disorder, not a pharmacogenomic effect on the PK or PD of ethosuximide. |
| PGx | Myers_2021 | not_relevant | 2 | 5 | The paper investigates genetic associations with clinical response (efficacy) rather than specific pharmacokinetic or pharmacodynamic parameters. |
| popPK | Rigo_2002 | irrelevant | 0 | 0 | The study is a mechanistic investigation of levetiracetam's effect on ion channels, using ethosuximide only as a comparator agent without reporting any pharmacokinetic parameters. |
| PD | Rigo_2002 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of levetiracetam; ethosuximide is only mentioned as a reference drug in qualitative comparisons without any reported exposure-response or dose-response data. |
| popPK | Roks_1999 | irrelevant | 0 | 0 | The provided evidence contains only the title of an animal study and lacks any quantitative pharmacokinetic parameters or data for ethosuximide. |
| PD | Roks_1999 | not_relevant | 0 | 0 | The paper is an animal study comparing polytherapy and monotherapy, likely focusing on efficacy or toxicity rather than deriving specific numeric pharmacodynamic parameters (like Emax or EC50) for ethosuximide via PK/PD modeling. |
| PGx | Shay_2016 | not_relevant | 0 | 0 | The text is a table of contents for a conference; while abstract P44 mentions ethosuximide, it concerns gene expression and reproductive dysfunction, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving carbamazepine and ethosuximide, not pharmacogenomic effects of gene variants on ethosuximide PK/PD. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of T-type calcium currents, not a pharmacokinetic study, and reports no disposition parameters for ethosuximide. |
| popPK | Ueshima_2008 | irrelevant | 0 | 0 | The study focuses on valproic acid pharmacokinetics, with ethosuximide mentioned only as a co-administered drug affecting VPA binding. |
| popPK | Wamil_1994 | irrelevant | 0 | 0 | The study focuses on oxcarbazepine and its metabolite, with ethosuximide mentioned only as a less potent comparator in seizure models without any pharmacokinetic parameter reporting. |
| PD | Wamil_1994 | not_relevant | 0 | 0 | The paper focuses on oxcarbazepine and its metabolite; ethosuximide is only mentioned qualitatively as being less potent without providing any numeric PD parameters or concentration-effect data. |
| PGx | Yap_2008 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between chemotherapeutics and antiepileptics, not pharmacogenomic effects of gene variants on ethosuximide PK/PD. |
| PGx | Yau_2014 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (ethosuximide affecting hydrocortisone clearance) in a single patient, not a pharmacogenomic effect of a gene variant on ethosuximide's PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ethosuximide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
