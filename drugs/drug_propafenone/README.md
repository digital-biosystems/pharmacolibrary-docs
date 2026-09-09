# propafenone

- **generic name:** propafenone
- **ATC codes:** `C01BC03`
- **DrugBank:** [DB01182](https://go.drugbank.com/drugs/DB01182)
- **groups:** approved, investigational

## About

**Description.** An antiarrhythmia agent that is particularly effective in ventricular arrhythmias. It also has weak beta-blocking activity. The drug is generally well tolerated.

**Indication.** Used to prolong the time to recurrence of paroxysmal atrial fibrillation/flutter (PAF) associated with disabling symptoms in patients without structural heart disease. Also used for the treatment of life-threatening documented ventricular arrhythmias, such as sustained ventricular tachycardia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 08:56 | 3:00 | 0/3/0 | 0/0/0 | 0/0/0 | 35,949/10,101 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Arboix_1985](drugs/drug_propafenone/Propafenone_Arboix1985_reference.md) | Arboix M et al., Pharmacokinetics of intravenous propafe…, Methods and findings in exp… (1985) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Connolly_1984](drugs/drug_propafenone/Propafenone_Connolly1984_reference.md) | Connolly S et al., Propafenone disposition kinetics in car…, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.157](https://doi.org/10.1038/clpt.1984.157) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Fernández_1991](drugs/drug_propafenone/Propafenone_Fernndez1991_reference.md) | Fernández J et al., Tissue distribution of propafenone in t…, European journal of drug me… (1991) | [10.1007/BF03189870](https://doi.org/10.1007/BF03189870) |

## Coverage

- **PubMed hits:** 17 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arboix_1985.pdf` | Arboix M et al., Pharmacokinetics of intravenous propafe…, Methods and findings in exp… (1985) | popPK | 10 | not captured | [4079594](https://pubmed.ncbi.nlm.nih.gov/4079594) | The paper reports quantitative pharmacokinetic parameters (CL, Vd, half-lives) for propafenone in humans, and all numeric values are explicitly present in the provided evidence. |
| `Connolly_1984.pdf` | Connolly S et al., Propafenone disposition kinetics in car…, Clinical pharmacology and t… (1984) | popPK | 10 | [10.1038/clpt.1984.157](https://doi.org/10.1038/clpt.1984.157) | [6744775](https://pubmed.ncbi.nlm.nih.gov/6744775) | The evidence explicitly reports quantitative disposition parameters (clearance, volume of distribution, and half-life) for propafenone in patients. |
| `Fernández_1991.pdf` | Fernández J et al., Tissue distribution of propafenone in t…, European journal of drug me… (1991) | popPK | 9 | [10.1007/BF03189870](https://doi.org/10.1007/BF03189870) | [1936057](https://pubmed.ncbi.nlm.nih.gov/1936057) | The study reports quantitative pharmacokinetic parameters (CL, Vd, t1/2) for propafenone in rats, and the specific numeric values are explicitly present in the provided text. |
| `Cai_2001.pdf` | Cai WM et al., Simultaneous modeling of pharmacokineti…, Acta pharmacologica Sinica (2001) | popPK | 8 | not captured | [11749782](https://pubmed.ncbi.nlm.nih.gov/11749782) | The study reports PK-PD modeling for propafenone but the evidence only provides AUC and PD parameters (Ce50, gamma), lacking specific quantitative disposition parameters like clearance (CL), volume (V), or half-life (t1/2). |
| `Gillis_1986.pdf` | Gillis AM et al., Myocardial uptake kinetics and pharmaco…, The Journal of pharmacology… (1986) | popPK | 8 | not captured | [3712276](https://pubmed.ncbi.nlm.nih.gov/3712276) | The study reports quantitative myocardial uptake kinetics (half-life, accumulation ratio) for propafenone in an animal model, with specific numeric values provided in the text. |

<sub>queue written 2026-09-09T11:09:52.527240+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cai_2001 | relevant | 8 | 2 | The study reports PK-PD modeling for propafenone but the evidence only provides AUC and PD parameters (Ce50, gamma), lacking specific quantitative disposition parameters like clearance (CL), volume (V), or half-life (t1/2). |
| popPK | Chiba_1997 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and MDR-modulating activity of propafenone analogs, containing no pharmacokinetic parameters. |
| PD | Chiba_1997 | not_relevant | 4 | 2 | The paper reports EC50 values for analogs in a daunomycin efflux assay, but the specific numeric values are not provided in the text, making them non-extractable. |
| popPK | Cogolludo_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of propafenone's effects on potassium channels in rat vascular smooth muscle, not a pharmacokinetic study. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions propafenone as a contraindicated interacting drug, providing no pharmacokinetic parameters for propafenone. |
| PD | Cvetkovic_2003 | not_relevant | 1 | 0 | The paper is a review of lopinavir/ritonavir and mentions propafenone only as a contraindicated drug interaction, providing no pharmacodynamic or exposure-response data for propafenone. |
| popPK | Gómez_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of propafenone's effect on Kir2.1 channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Haefeli_1991 | irrelevant | 2 | 2 | The study focuses on the metabolite 5-hydroxypropafenone, not the parent drug propafenone, and reports only limited PK parameters (tmax, Cmax, t1/2) without clearance or volume of distribution. |
| popPK | Hoppe_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel modulation, not a pharmacokinetic study, and reports no disposition parameters for propafenone. |
| popPK | McLeod_1984 | irrelevant | 0 | 0 | The study focuses on beta-adrenoceptor blockade and in-vitro binding affinities (EC50, KD) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for propafenone. |
| popPK | Michaud_2006 | irrelevant | 1 | 0 | The study investigates the effect of propafenone on caffeine pharmacokinetics, making propafenone a perpetrator/comparator rather than the subject drug for which disposition parameters are reported. |
| popPK | Oti-Amoako_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of antiarrhythmic potency in isolated rat hearts, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Porto_2021 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo antiparasitic efficacy study, not a pharmacokinetic study, and reports no disposition parameters for propafenone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_propafenone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
