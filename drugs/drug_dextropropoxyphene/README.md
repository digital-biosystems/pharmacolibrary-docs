<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dextropropoxyphene&quot;}]"></div>

# dextropropoxyphene

- **generic name:** dextropropoxyphene
- **ATC codes:** `N02AC04`
- **DrugBank:** [DB00647](https://go.drugbank.com/drugs/DB00647) · **PubChem:** [CID 10100](https://pubchem.ncbi.nlm.nih.gov/compound/10100)
- **molar mass:** 339.4712 g/mol (C22H29NO2) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Dextropropoxyphene is an opioid painkiller that was used to treat mild to moderate pain. It has been withdrawn from the market because it could cause serious heart problems, even at recommended doses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2268608](https://www.wikidata.org/wiki/Q2268608) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:17 | 0:43 | 0/0/0 | 0/0/0 | 0/0/0 | 49,896/2,106 | einfracz / qwen3.8-27b | 6 | 3/1 | 5/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dextropropoxyphene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GRIN1 (target), OPRD1 (target), OPRK1 (target), OPRM1 (target), UGT2B4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 100 matched, 77 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gram_1984.pdf` | Gram LF et al., D-propoxyphene kinetics in man: signifi…, European journal of clinica… (1984) | popPK | 9 | [10.1007/BF00541937](https://doi.org/10.1007/BF00541937) | [6489415](https://pubmed.ncbi.nlm.nih.gov/6489415) | The paper reports a 3-compartment PK model for dextropropoxyphene, but the specific numeric parameter values are not listed in the provided text. |
| `Choi_1988.pdf` | Choi DW et al., Opioids and non-opioid enantiomers sele…, European journal of pharmac… (1988) | pd | 5 | [10.1016/0014-2999(88)90399-8](https://doi.org/10.1016/0014-2999(88)90399-8) | [3072212](https://www.ncbi.nlm.nih.gov/pubmed/3072212) | metadata signals extractable PD data (EC50) |
| `Wu_1994.pdf` | Wu C et al., Interaction between ethanol and opioids…, Human & experimental toxico… (1994) | pd | 4 | [10.1177/096032719401300301](https://doi.org/10.1177/096032719401300301) | [7909674](https://www.ncbi.nlm.nih.gov/pubmed/7909674) | metadata signals extractable PD data (EC50) |
| `Somogyi_2004.pdf` | Somogyi AA et al., CYP3A4 mediates dextropropoxyphene N-de…, Xenobiotica; the fate of fo… (2004) | pgx | 8 | [10.1080/00498250400008371](https://doi.org/10.1080/00498250400008371) | [15764408](https://www.ncbi.nlm.nih.gov/pubmed/15764408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yin_2010.pdf` | Yin OQ et al., CYP3A5 but not CYP2D6 polymorphism cont…, Journal of clinical pharmac… (2010) | pgx | 8 | [10.1177/0091270009359006](https://doi.org/10.1177/0091270009359006) | [20133509](https://www.ncbi.nlm.nih.gov/pubmed/20133509) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Raungrut_2010.pdf` | Raungrut P et al., In vitro-in vivo extrapolation predicts…, The Journal of pharmacology… (2010) | pgx | 7 | [10.1124/jpet.110.167916](https://doi.org/10.1124/jpet.110.167916) | [20484152](https://www.ncbi.nlm.nih.gov/pubmed/20484152) | metadata signals extractable PGX data (UGT2B4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T05:16:42.325696+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Armstrong_2009 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions mediated by CYP3A4, not a report on pharmacogenomic effects of specific genetic variants on dextropropoxyphene. |
| PGx | Beyeler_1994 | not_relevant | 0 | 0 | The paper reports that dextropropoxyphene interfered with the phenotyping probe (debrisoquin) rather than reporting a pharmacogenomic effect on dextropropoxyphene's own PK or PD parameters. |
| PGx | Bonnet_2003 | not_relevant | 0 | 0 | The paper discusses moclobemide, not dextropropoxyphene, and does not report pharmacogenomic data. |
| popPK | Choi_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotoxicity attenuation, not a pharmacokinetic study, and does not report any disposition parameters for dextropropoxyphene. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper describes a dataset of gene profiles and metabolic pathways for a list of drugs including dextropropoxyphene, but does not report specific pharmacokinetic or pharmacodynamic effects or measurements for this drug. |
| PGx | DArcy_1984 | not_relevant | 3 | 0 | The paper is a review that mentions propoxyphene as having a clinically significant interaction with tobacco smoking (induction), but it does not provide specific gene variants or quantitative pharmacokinetic parameters required to assess a pharmacogenomic effect. |
| popPK | Gram_1984 | relevant | 9 | 2 | The paper reports a 3-compartment PK model for dextropropoxyphene, but the specific numeric parameter values are not listed in the provided text. |
| PGx | Jerling_1994 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions involving amitriptyline and nortriptyline, not the pharmacogenomics of dextropropoxyphene. |
| popPK | Jordan_2023 | irrelevant | 0 | 0 | The paper is a systematic scoping review regarding databases linking infant outcomes and breastfeeding, containing no original pharmacokinetic data for dextropropoxyphene. |
| PD | Jordan_2023 | not_relevant | 0 | 0 | The paper is a systematic scoping review of databases regarding breastfeeding and medicine exposure; it does not report any specific pharmacodynamic or exposure-response analysis for dextropropoxyphene. |
| PGx | Kerry_1993 | not_relevant | 0 | 0 | The paper studies the pharmacogenetics of dextromethorhan metabolism in rats, with dextropropoxyphene only mentioned as an inhibitor, not as the subject of PK/PD analysis. |
| PGx | Kerry_1994 | not_relevant | 2 | 10 | The study characterizes the metabolism of dextromethorphan; dextropropoxyphene is used only as an inhibitor to demonstrate CYP2D6 involvement, and no PK/PD parameters for dextropropoxyphene are reported. |
| popPK | Koski_2003 | irrelevant | 0 | 0 | The paper is a forensic toxicology study analyzing postmortem blood concentrations in fatal poisonings, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses the metabolism of phenytoin and carbamazepine, not dextropropoxyphene. |
| PGx | Mannheimer_2010 | not_relevant | 0 | 0 | The study analyzes prescription patterns of drug-drug interactions, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of dextropropoxyphene. |
| PGx | Marraffa_2006 | not_relevant | 0 | 0 | The paper describes a pharmacodynamic drug-drug interaction (CYP2D6 inhibition by propoxyphene affecting metoprolol) and does not report any pharmacogenomic effect (gene variant) on the PK/PD of dextropropoxyphene. |
| popPK | McQuay_1998 | irrelevant | 0 | 0 | The paper is a systematic review of analgesic efficacy and safety, not a pharmacokinetic study, and contains no quantitative disposition parameters for dextropropoxyphene. |
| PD | McQuay_1998 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials for postoperative analgesia and vomiting, focusing on efficacy and safety outcomes rather than pharmacokinetic or pharmacodynamic modeling; it does not report numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for dextropropoxyphene. |
| popPK | Milligan_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sildenafil citrate, not dextropropoxyphene. |
| PD | Milligan_2002 | not_relevant | 0 | 0 | The provided text is garbled and does not contain readable information regarding dextropropoxyphene or any pharmacodynamic parameters. |
| popPK | Nerella_1993 | relevant | 4 | 0 | The study uses dextropropoxyphene (propoxyphene napsylate) bioequivalence data to demonstrate the impact of lag time, but the extracted evidence does not provide specific numeric PK parameter values (CL, V, etc.) for the drug itself, only a range of rate constants used in simulations. |
| PGx | Raungrut_2010 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving dextropropoxyphene and does not report any gene variants or pharmacogenomic effects. |
| popPK | Schmidli_2005 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of imatinib mesylate, not dextropropoxyphene. |
| PD | Schmidli_2005 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of imatinib, not dextropropoxyphene, and contains no pharmacodynamic (PD) or exposure-response modeling for the target drug. |
| popPK | Seibert_2002 | irrelevant | 1 | 0 | This is an in vitro study characterizing protein binding effects on cytotoxic potency (EC50) using dextropropoxyphene as one of several test compounds, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Somogyi_2004 | not_relevant | 0 | 0 | The paper explicitly states that CYP2D6 genotype does not affect the pharmacokinetics of dextropropoxyphene, and does not report a pharmacogenomic effect for CYP3A4 either. |
| PGx | Spigset_1997 | not_relevant | 0 | 0 | The paper studies adverse events (seizures/myoclonus) associated with antidepressants, not the pharmacokinetics or pharmacodynamics of dextropropoxyphene itself. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction where propoxyphene inhibits carbamazepine metabolism, but it does not report a pharmacogenomic effect (gene variant) influencing propoxyphene's PK/PD. |
| popPK | Tyers_1980 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of antinociception (pain relief) in animals, not a pharmacokinetic study, and reports no disposition parameters for dextropropoxyphene. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper focuses on theophylline, and dextropropoxyphene is listed only as a drug that does not influence theophylline kinetics, with no pharmacogenomic data. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not mention dextropropoxyphene or report any pharmacokinetic parameters. |
| popPK | Weinstein_2018 | irrelevant | 0 | 0 | This is a systematic review on regional anaesthesia for pain prevention and contains no pharmacokinetic parameters for dextropropoxyphene. |
| popPK | Weinstein_2018_2 | irrelevant | 0 | 0 | This is a systematic review of regional anesthesia for postoperative pain prevention and contains no pharmacokinetic data for dextropropoxyphene. |
| popPK | Wu_1994 | irrelevant | 0 | 0 | The study is an in-vitro protozoan assay measuring EC50 values for motility reduction, not pharmacokinetic parameters like clearance or volume. |
| popPK | Xiao_2001 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of action (nicotinic receptor blockade) of methadone and structurally related analogs, not the pharmacokinetics of dextropropoxyphene. |
| PGx | Yue_1997 | not_relevant | 0 | 0 | The paper studies the inhibition of codeine metabolism by dextropropoxyphene and does not report pharmacogenomic effects on the PK/PD of dextropropoxyphene. |
| popPK | unknown_1988 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The paper consists of meeting abstracts regarding ICU diagnostics (viral PCR, citrulline, procalcitonin) and does not mention dextropropoxyphene or any pharmacodynamic modeling. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
