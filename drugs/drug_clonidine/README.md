# clonidine

- **generic name:** clonidine
- **ATC codes:** `C02AC01`, `C02LC01`, `C02LC51`, `N02CX02`, `S01EA04`
- **DrugBank:** [DB00575](https://go.drugbank.com/drugs/DB00575)
- **groups:** approved, investigational

## About

**Description.** Clonidine is an imidazole derivate that acts as an agonist of alpha-2 adrenoceptors.[A180559] This activity is useful for the treatment of hypertension, severe pain, and ADHD.[L7237,L54536,L7240,L7243,L7246]

Clonidine was granted FDA approval on 3 September 1974.[L7237]

**Indication.** Clonidine tablets, oral solution and transdermal systems are indicated for the treatment of hypertension alone or in combination with other medications.[L7237,L7240, L54536] A clonidine injection is indicated for use with opiates in the treatment of severe cancer pain where opiates alone are insufficient.[L7243] An extended-release tablet of clonidine is indicated for the treatment of ADHD, either alone or in combination with other medications.[L7246]

Clonidine is also used for the diagnosis of pheochromocytoma,[A180565] treatment of nicotine dependance,[A180568] and opiate withdrawal.[A180571]

Additionally, clonidine is also indicated for the treatment of Attention Deficit Hyperactivity Disorder (ADHD) as a monotherapy or as an adjunctive therapy to central nervous system (CNS) stimulant medications in pediatric patients 6 years of age and older.[L52295,L52300]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 15 | 1/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Bardol_2025](drugs/drug_clonidine/Clonidine_Bardol2025_reference.md) | Bardol M et al., Pharmacokinetic and Pharmacodynamic Mod…, Paediatric anaesthesia (2025) | [10.1111/pan.70050](https://doi.org/10.1111/pan.70050) |

## Coverage

- **PubMed hits:** 225 matched, 20 returned
- **screened:** 1  ·  **relevant:** 6
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chiang_1986.pdf` | Chiang CH et al., Ocular pharmacokinetic models of clonid…, Journal of pharmacokinetics… (1986) | popPK | 10 | [10.1007/BF01065260](https://doi.org/10.1007/BF01065260) | [3746638](https://pubmed.ncbi.nlm.nih.gov/3746638) | The paper explicitly reports quantitative compartmental and noncompartmental pharmacokinetic parameters (ka, Vss, clearance) for clonidine following topical ocular administration in rabbits. |
| `Davies_1977.pdf` | Davies DS et al., Pharmacokinetics and concentration-effe…, Clinical pharmacology and t… (1977) | popPK | 10 | [10.1002/cpt1977215593](https://doi.org/10.1002/cpt1977215593) | [870272](https://pubmed.ncbi.nlm.nih.gov/870272) | The paper explicitly reports quantitative two-compartment pharmacokinetic parameters including clearance, volume of distribution, and half-lives for clonidine in humans. |
| `Larsson_2011.pdf` | Larsson P et al., Oral bioavailability of clonidine in ch…, Paediatric anaesthesia (2011) | popPK | 10 | [10.1111/j.1460-9592.2010.03397.x](https://doi.org/10.1111/j.1460-9592.2010.03397.x) | [20735802](https://pubmed.ncbi.nlm.nih.gov/20735802) | The paper explicitly reports quantitative population pharmacokinetic parameters (CL, V1, V2, Q, absorption half-life) for clonidine in children using a two-compartment nonlinear mixed-effects model. |
| `Paalzow_1979.pdf` | Paalzow LK et al., Pharmacokinetics of clonidine in the ra…, Journal of pharmacokinetics… (1979) | popPK | 10 | [10.1007/BF01062390](https://doi.org/10.1007/BF01062390) | [529018](https://pubmed.ncbi.nlm.nih.gov/529018) | The paper explicitly reports quantitative two-compartment model parameters (CL, Vc, Vd_ss, and rate constants) for clonidine in rats and cats. |
| `Potts_2007.pdf` | Potts AL et al., Clonidine disposition in children; a po…, Paediatric anaesthesia (2007) | popPK | 10 | [10.1111/j.1460-9592.2007.02251.x](https://doi.org/10.1111/j.1460-9592.2007.02251.x) | [17767627](https://pubmed.ncbi.nlm.nih.gov/17767627) | The paper explicitly develops and reports quantitative population pharmacokinetic parameters for clonidine in children using nonlinear mixed-effects modeling. |

<sub>queue written 2026-07-18T01:56:34.682983+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arndts_1983 | relevant | not captured | not captured | Contains original quantitative PK data (half-life, AUC, bioavailability) for clonidine in humans but explicitly states compartmental models are unsuitable and lacks clearance or volume parameters. |
| popPK | Lowenthal_1980 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Tang_2021 | irrelevant | not captured | not captured | The paper is a review article that summarizes existing literature and lacks extractable quantitative PK parameter estimates for clonidine. |
| popPK | Yalcin_2022 | irrelevant | not captured | not captured | This is a systematic review summarizing other studies and lacks original quantitative population pharmacokinetic parameters or model estimates for clonidine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_clonidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
