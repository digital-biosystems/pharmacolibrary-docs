# neomycin

- **generic name:** neomycin
- **ATC codes:** `A01AB08`, `A07AA01`, `B05CA09`, `D06AX04`, `J01GB05`, `R02AB01`, `S01AA03`, `S02AA07`, `S03AA01`
- **DrugBank:** [DB00994](https://go.drugbank.com/drugs/DB00994)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Neomycin is a broad-spectrum aminoglycoside antibiotic drug that is derived from the metabolic products of _Streptomyces fradiae_.[L11979] Neomycin is a complex comprised of three components, neomycin A, B, and C.[A191529] Neomycin B, also known as [framycetin], is the most active component of the complex and neomycin C is the isomer of neomycin B, making these two stereoisomers the active components of neomycin.[A175042,A191529] Neomycin A, or [neamine], is a moiety that conjoins two molecules of neomycin B and C together.[A175042] Neomycin is active against both gram-positive and gram-negative organisms and mediates its pharmacological action by binding to bacterial ribosomes and inhibiting protein synthesis, which is crucial for the survival of bacteria.[L11985] 

Neomycin sulfate is the most common form for pharmaceutical preparations; because the compound is a complex, the amount of neomycin in products is measured in units.[A191529] Neomycin sulfate as monotherapy is available in an oral solution for adjunct use in the treatment of hepatic coma.[L11979] It is also used in combination with [polymyxin B] sulfates and [hydrocortisone] in otic suspensions for use in the treatment of bacterial infections in the external auditory canal, including infections caused by medical procedures in the ear.[L10532] Neomycin is also used in combination with [polymyxin B] sulfates and [dexamethasone] in ophthalmic preparations for use in the treatment of inflammatory conditions and infections in the eye.[L10716] Neomycin is also available in over-the-counter topical products to prevent minor skin infections.

**Indication.** Oral neomycin sulfate is indicated as an adjunctive therapy in hepatic coma (portal-system encephalopathy) by reducing ammonia-forming bacteria in the intestinal tract. It is strongly recommended that oral neomycin is only used in infections that are proven or strongly suspected to be caused by susceptible bacteria to reduce the risk of the development of drug-resistant bacteria.[L11979]

Neomycin, in combination with polymyxin B sulfates and hydrocortisone in otic suspensions, is used in the treatment of superficial bacterial infections of the external auditory canal caused by organisms susceptible to the antibiotics. This otic formulation is also used in the treatment of infections of mastoidectomy and fenestration cavities caused by organisms susceptible to the antibiotics.[L10532]

The ophthalmic solution containing neomycin in combination with polymyxin B sulfates and dexamethasone is used to treat steroid-responsive inflammatory ocular conditions for which a corticosteroid is indicated and where bacterial infection or a risk of bacterial infection exists.[L10716]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 09:17 | 1:54 | 0/1/0 | 1/0/0 | 0/0/0 | 52,712/2,974 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Lentzen_1981](drugs/drug_neomycin/Neomycin_Lentzen1981_reference.md) | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodriguez_2024](drugs/drug_neomycin/pd_Rodriguez_2024_unknown.md) | Rodriguez I et al., Effects of, Nutrients (2024) | [10.3390/nu16162716](https://doi.org/10.3390/nu16162716) |

## Coverage

- **PubMed hits:** 54 matched, 19 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Black_1983.pdf` | Black WD et al., Pharmacokinetic study of neomycin in ca…, Canadian journal of compara… (1983) | popPK | 10 | not captured | [6667431](https://pubmed.ncbi.nlm.nih.gov/6667431) | The paper reports quantitative two-compartment pharmacokinetic parameters (CL, V, half-lives, rate constants) for neomycin in calves with all numeric values explicitly listed in the evidence. |
| `Burrows_1987.pdf` | Burrows GE et al., Comparative pharmacokinetics of gentami…, Journal of veterinary pharm… (1987) | popPK | 9 | [10.1111/j.1365-2885.1987.tb00077.x](https://doi.org/10.1111/j.1365-2885.1987.tb00077.x) | [3586124](https://pubmed.ncbi.nlm.nih.gov/3586124) | The study reports quantitative PK parameters for neomycin in calves, but the specific numeric values for neomycin are not present in the provided text (only oxytetracycline values are explicitly listed). |
| `Lentzen_1981.pdf` | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | popPK | 9 | not captured | [7198477](https://pubmed.ncbi.nlm.nih.gov/7198477) | The study reports quantitative PK parameters for neomycin, including half-lives (1.5 h, 9 h), Tmax (2.6 h), Cmax (5.1 µg/ml), and AUC comparisons, derived from a two-compartment model. |
| `Liu_2021_2.pdf` | Liu Y et al., Pharmacokinetics of neomycin sulfate af…, Journal of veterinary pharm… (2021) | popPK | 9 | [10.1111/jvp.12981](https://doi.org/10.1111/jvp.12981) | [34165196](https://pubmed.ncbi.nlm.nih.gov/34165196) | The study reports quantitative non-compartmental pharmacokinetic parameters (half-life, MRT, Cmax, Tmax, AUC, bioavailability) for neomycin in swine, with all numeric values explicitly present in the text. |
| `Mishra_2024.pdf` | Mishra A et al., Concurrent determination of anti-microb…, Journal of pharmaceutical a… (2024) | popPK | 8 | [10.1016/j.jpba.2023.115920](https://doi.org/10.1016/j.jpba.2023.115920) | [38113826](https://pubmed.ncbi.nlm.nih.gov/38113826) | The study reports ocular pharmacokinetics for neomycin in rabbits, but specific quantitative parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only dosing frequency predictions. |

<sub>queue written 2026-09-10T09:16:04.252233+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alcaraz-Estrada_2013 | irrelevant | 0 | 0 | The paper describes the construction of a viral replicon system where neomycin phosphotransferase is used as a selection marker for cell lines, not a pharmacokinetic study of neomycin. |
| PD | Alcaraz-Estrada_2013 | not_relevant | 0 | 0 | The paper describes the construction of a viral replicon system for antiviral screening; neomycin is mentioned only as a selection marker (G418 resistance) and no pharmacodynamic or exposure-response data for neomycin is reported. |
| popPK | Burrows_1987 | relevant | 9 | 2 | The study reports quantitative PK parameters for neomycin in calves, but the specific numeric values for neomycin are not present in the provided text (only oxytetracycline values are explicitly listed). |
| popPK | Lee_2012 | irrelevant | 0 | 0 | Neomycin is used only as part of an antibiotic cocktail to prepare pseudo germ-free rats, and the pharmacokinetic parameters reported are for acetaminophen, not neomycin. |
| popPK | Maeng_2019 | irrelevant | 0 | 0 | The study focuses on the effect of topical steroids on intraocular pressure, and neomycin is only mentioned as a component of a combination ophthalmic ointment, with no pharmacokinetic parameters reported. |
| popPK | Mishra_2024 | relevant | 8 | 2 | The study reports ocular pharmacokinetics for neomycin in rabbits, but specific quantitative parameter values (CL, V, t1/2) are not explicitly listed in the provided text, only dosing frequency predictions. |
| popPK | Parkash_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in breast cancer cells where neomycin is used as a probe agent, not a pharmacokinetic study of neomycin disposition. |
| popPK | Ponce_2023 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on TRPV4 channels where neomycin is used only as a phospholipase C inhibitor, not as a subject drug for pharmacokinetic analysis. |
| PD | Ponce_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of ouabain (reporting an EC50), not neomycin; neomycin is only mentioned as an inhibitor used to probe signaling pathways. |
| popPK | Rodriguez_2024 | irrelevant | 0 | 0 | The study investigates the protective effects of Castanopsis echinocarpa on hearing loss, using neomycin only as an ototoxic agent to induce injury in zebrafish, and does not report any pharmacokinetic parameters for neomycin. |
| popPK | Sandmann_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on muscarinic receptors where neomycin is used as a pharmacological inhibitor, not a subject of pharmacokinetic analysis. |
| PD | Sandmann_1991 | not_relevant | 1 | 1 | The paper reports a single-point inhibition percentage (50% and 20%) for neomycin at a fixed concentration (1 mM) without providing a dose-response curve or numeric PD parameters like IC50. |
| popPK | Seol_2005 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium signaling where neomycin is used only as a pharmacological inhibitor, not as the subject of a pharmacokinetic analysis. |
| PD | Seol_2005 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill coefficient) for sphingosine-1-phosphate (S1P), not for neomycin, which is only mentioned as a qualitative inhibitor of the pathway. |
| popPK | Soback_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mecillinam, with neomycin only mentioned as a comparator for MIC values. |
| popPK | Teng_1997 | irrelevant | 0 | 0 | The paper studies the mechanism of platelet aggregation by rugosin E, using neomycin only as a non-specific inhibitor/comparator, and reports no pharmacokinetic parameters for neomycin. |
| PD | Teng_1997 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for rugosin E, not neomycin; neomycin is only mentioned qualitatively as an inhibitor without numeric dose-response data. |
| popPK | Wehling_1995 | irrelevant | 0 | 0 | The paper studies the nongenomic effects of aldosterone on calcium signaling, using neomycin only as a pharmacological inhibitor, and contains no pharmacokinetic parameters for neomycin. |
| PD | Wehling_1995 | not_relevant | 0 | 0 | The paper reports PD parameters for aldosterone and other steroids, not for neomycin, which is only mentioned as an inhibitor of the aldosterone effect. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of geneticin against dengue virus, with neomycin only mentioned as a comparator with weak activity, and no pharmacokinetic parameters are reported. |
| PD | Zhang_2009 | not_relevant | 0 | 0 | The paper reports PD parameters for geneticin (G418), not neomycin; neomycin is only mentioned as having weak activity without specific numeric PD parameters. |
| popPK | Ziv_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of apramycin, with neomycin serving only as a comparator for in-vitro MICs. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_neomycin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
