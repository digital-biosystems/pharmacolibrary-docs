<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;pizotifen&quot;}]"></div>

# pizotifen

- **generic name:** pizotifen
- **ATC codes:** `N02CX01`
- **DrugBank:** [DB06153](https://go.drugbank.com/drugs/DB06153)
- **groups:** approved

## About

**Description.** Pizotifen belongs to the class of antamines and is related to [cyproheptadine].[A32532] It is a potent serotonin and tryptamine antagonist that has been used for migraine prevention for many years. It exhibits weak anticholinergic, antihistamine, and antikinin actions in addition to sedative and appetite-stimulating properties [L2292]. Some patients receiving pizotifen treatment developed tolerance with the prolonged use of the drug [L2292]. Numerous studies have revealed the potential antidepressant effects of pizotifen, which are independent of its antimigraine action [A32538]. While it is suggested that pizotifen may act similarly to the classic tricyclic antidepressants [A32538], its full mechanism of antidepressant action is not fully elucidated. Pizotifen hydrochloride is an active ingredient in Sandomigran, which is used for the prophylactic management of migraines. Sandomigran is available in a number of countries but is not approved by the FDA nor EMA.

**Indication.** Indicated for the prophylactic management of migraines [L2292].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 07:22 | 4:46 | 0/0/0 | 0/2/0 | 0/0/0 | 75,923/3,739 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Glusa_1996](drugs/drug_pizotifen/pd_Glusa_1996_unknown.md) | Glusa E et al., Endothelial 5-HT receptors mediate rela…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15990.x](https://doi.org/10.1111/j.1476-5381.1996.tb15990.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Glusa_2000](drugs/drug_pizotifen/pd_Glusa_2000_unknown.md) | Glusa E et al., Further evidence that 5-HT-induced rela…, British journal of pharmaco… (2000) | [10.1038/sj.bjp.0703341](https://doi.org/10.1038/sj.bjp.0703341) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pizotifen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>“…e accounts for at least 50% of the plasma and 60-70% of the urinary-excreted radioactivity…”</sub> | prose |
| metabolism | liver | <sub>“…Pizotifen is extensively metabolized in the liver, where it primarily undergoes N-glucuron…”</sub> | prose |
| excretion | bile duct | <sub>“…of the total orally administered dose is excreted into the feces. Less than 1% of the tota…”</sub> | prose |
| excretion | kidney | <sub>“…he feces. Less than 1% of the total dose is excreted in the urine as the unchanged parent…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), HRH1 (target), HTR1A (partial agonist), HTR1B (target), HTR2A (target), HTR2B (target), HTR2C (target), UGT2B10 (substrate).</sub>

## Coverage

- **PubMed hits:** 33 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brazenor_1981.pdf` | Brazenor RM et al., Ergometrine contracts isolated canine c…, The Journal of pharmacology… (1981) | pd | 4 | not captured | [6114172](https://www.ncbi.nlm.nih.gov/pubmed/6114172) | metadata signals extractable PD data (EC50) |
| `Fiorella_1995.pdf` | Fiorella D et al., The role of the 5-HT2A and 5-HT2C recep…, Psychopharmacology (1995) | pd | 4 | [10.1007/BF02246074](https://doi.org/10.1007/BF02246074) | [8584617](https://www.ncbi.nlm.nih.gov/pubmed/8584617) | metadata signals extractable PD data (IC50) |
| `Hiner_1986.pdf` | Hiner BC et al., Antimigraine drug interactions with 5-h…, Annals of neurology (1986) | pd | 4 | [10.1002/ana.410190518](https://doi.org/10.1002/ana.410190518) | [2940961](https://www.ncbi.nlm.nih.gov/pubmed/2940961) | metadata signals extractable PD data (IC50) |
| `Peters_1990.pdf` | Peters W et al., The chemotherapy of rodent malaria. XLV…, Annals of tropical medicine… (1990) | pd | 4 | [10.1080/00034983.1990.11812509](https://doi.org/10.1080/00034983.1990.11812509) | [1981663](https://www.ncbi.nlm.nih.gov/pubmed/1981663) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-21T07:21:01.735547+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aellig_1983 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of pizotifen on venous compliance and receptor antagonism, not pharmacokinetic disposition parameters. |
| PD | Aellig_1983 | not_relevant | 4 | 2 | The paper describes a dose-response shift (competitive antagonism) for pizotifen on 5-HT-induced venoconstriction, but the provided text lacks the specific numeric PD parameters (e.g., EC50 values, pA2, or curve coordinates) required to extract a quantitative relationship. |
| popPK | Brazenor_1981 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Brazenor_1981 | not_relevant | 0 | 0 | The paper studies ergometrine, not pizotifen. |
| popPK | Fiorella_1995 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of hallucinogenic drugs where pizotifen (pizotyline) is used only as a serotonergic antagonist, with no pharmacokinetic parameters reported. |
| popPK | Friedman_1983 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of serotonin receptors using pizotifen (pizotyline) as a comparator antagonist, and it does not report any pharmacokinetic parameters. |
| PD | Friedman_1983 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response relationship for L-5-HTP and competitive antagonism by pizotifen, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for pizotifen. |
| popPK | Glusa_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptor blocking properties on platelet aggregation, not a pharmacokinetic study, and reports no disposition parameters for pizotifen. |
| popPK | Glusa_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated vascular relaxation in porcine arteries, not a pharmacokinetic study, and pizotifen is used only as a receptor antagonist. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | The paper is a pharmacological study characterizing 5-HT2B receptors in pig pulmonary artery, using pizotifen as an antagonist, and does not report any pharmacokinetic parameters. |
| popPK | Gudelsky_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of serotonin receptor desensitization in rats, with pizotifen serving only as a comparator agent and no pharmacokinetic parameters reported. |
| PD | Gudelsky_1987 | not_relevant | 2 | 1 | The paper mentions pizotifen only qualitatively as one of several antagonists that diminished a hyperthermic response, without providing specific numeric dose-response parameters or concentration-effect data for pizotifen. |
| popPK | Hamel_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor subtypes in feline arteries where pizotifen is used only as a comparative antagonist, with no pharmacokinetic parameters reported. |
| PD | Hamel_1989 | not_relevant | 3 | 1 | The paper describes qualitative receptor pharmacology and potency rankings for pizotifen in an isolated organ bath but does not provide numeric PD parameters (e.g., pA2, Ki, IC50) or extractable concentration-effect curves. |
| popPK | Hiner_1986 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay measuring affinity (IC50) and does not report pharmacokinetic disposition parameters for pizotifen. |
| popPK | Holmes_1984 | irrelevant | 0 | 0 | The paper is a review of flunarizine, and pizotifen is only mentioned as a comparator in therapeutic trials without any pharmacokinetic parameter values. |
| PD | Holmes_1984 | not_relevant | 0 | 0 | The text is a review of flunarizine and only mentions pizotifen in the context of comparative efficacy trials, providing no pharmacodynamic or exposure-response data for pizotifen. |
| popPK | Kato_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UGT2B10 enzyme kinetics, not a pharmacokinetic study reporting disposition parameters for pizotifen. |
| popPK | Mokler_1983 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats assessing the antagonistic effects of pizotifen on other drugs, reporting no pharmacokinetic parameters. |
| popPK | Müller-Schweinitzer_1976 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor antagonism in canine arteries, not a pharmacokinetic study, and reports no disposition parameters for pizotifen. |
| popPK | Müller-Schweinitzer_1986 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (venoconstriction and receptor binding) rather than pharmacokinetic disposition parameters. |
| popPK | Müller-Schweinitzer_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dihydroergotamine (DHE) in dogs, using pizotifen only as a pharmacological antagonist to determine receptor mechanisms, not as the subject drug for PK parameter estimation. |
| PD | Müller-Schweinitzer_1987 | not_relevant | 1 | 0 | The paper focuses on dihydroergotamine (DHE) PK/PD; pizotifen is only mentioned as a qualitative antagonist to identify receptor mechanisms, with no numeric PD parameters or exposure-response data provided for pizotifen. |
| popPK | Nielsen_1982 | irrelevant | 0 | 0 | Pizotifen is used only as a pharmacological antagonist in a behavioral study, with no pharmacokinetic parameters reported. |
| PD | Nielsen_1982 | not_relevant | 0 | 0 | The paper uses pizotifen only as a qualitative antagonist to confirm the serotonergic mechanism of THBCs and does not report any exposure-response or dose-response data for pizotifen itself. |
| popPK | Peters_1980 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay where pizotifen is used only as a competitive inhibitor, not as the subject of pharmacokinetic analysis. |
| PD | Peters_1980 | not_relevant | 2 | 1 | The paper reports receptor binding affinity (KD) and qualitative rank order of potency for pizotifen, but does not provide a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50 for effect) for pizotifen. |
| popPK | Peters_1990 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Peters_1990 | not_relevant | 0 | 0 | The paper focuses on chloroquine resistance reversal by antihistaminic agents and does not report pharmacodynamic or exposure-response data for pizotifen. |
| popPK | Rolan_1997 | irrelevant | 0 | 0 | Pizotifen is only a co-administered drug in a study focused on the pharmacokinetics of zolmitriptan, and no PK parameters for pizotifen are reported. |
| popPK | Roth_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT2 receptor mechanisms in rat aorta, not a pharmacokinetic study, and reports no disposition parameters for pizotifen. |
| PD | Roth_1986 | not_relevant | 3 | 2 | The paper reports qualitative potency (low nanomolar range) and correlation data for pizotifen as a 5-HT2 antagonist, but does not provide specific numeric PD parameters (e.g., Ki, IC50) or a concentration-effect curve for pizotifen in the provided text. |
| popPK | Scott_1994 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of sumatriptan, and pizotifen is only mentioned as a co-administered drug in an interaction study without any PK parameters reported for it. |
| popPK | Signs_1988 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment using pizotifen as a receptor antagonist to test ethanol discrimination, and it does not report any pharmacokinetic parameters. |
| PD | Signs_1988 | not_relevant | 1 | 0 | The paper reports qualitative behavioral results (ineffective blocking) for pizotifen in a drug discrimination paradigm without providing numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Smith_1995 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of serotonin receptor discrimination where pizotifen is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Smith_1995 | not_relevant | 2 | 1 | The paper reports behavioral dose-response curves for quipazine and ketanserin and mentions pizotifen as a generalizing antagonist, but it does not provide numeric PD parameters (e.g., ED50, Emax) or concentration-effect data for pizotifen. |
| popPK | Srinivasu_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sumatriptan, with pizotifen mentioned only as a comparator in the introduction. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no specific data, models, or parameters for pizotifen. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_pizotifen`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
