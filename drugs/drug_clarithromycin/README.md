<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;clarithromycin&quot;}]"></div>

# clarithromycin

- **generic name:** clarithromycin
- **ATC codes:** `A02BD04`, `A02BD05`, `A02BD06`, `A02BD07`, `A02BD09`, `A02BD11`, `A02BD12`, `A02BD14`, `J01FA09`
- **DrugBank:** [DB01211](https://go.drugbank.com/drugs/DB01211) · **PubChem:** [CID 84029](https://pubchem.ncbi.nlm.nih.gov/compound/84029)
- **molar mass:** 747.9534 g/mol (C38H69NO13) — DrugBank
- **groups:** approved, investigational

## About

Clarithromycin is a macrolide antibiotic used to treat many bacterial infections, including respiratory, skin, ear, and throat infections, and to help eradicate Helicobacter pylori in peptic ulcer disease. It is widely used in human medicine and appears on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q118551](https://www.wikidata.org/wiki/Q118551) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clarithromycin | parent | 747.953 | C38H69NO13 | DrugBank | [84029](https://pubchem.ncbi.nlm.nih.gov/compound/84029) | Shah_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:44 | 3:14 | 0/1/0 | 2/0/0 | 0/0/0 | 220,644/15,576 | einfracz / qwen3.8-27b | 20 | 4/16 | 19/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Shah_2025_reference](drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference.md) | — | 2-compartment (no model) | 4 | Shah RV et al., Intravenous Clarithromycin in Criticall…, Antibiotics (Basel, Switzer… (2025) | [10.3390/antibiotics14060559](https://doi.org/10.3390/antibiotics14060559) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Singh_2025_RLU](drugs/drug_clarithromycin/pd_Singh_2025_RLU.md) | relative light units ← clarithromycin · direct sigmoid Emax (Hill) effect | — | Singh S et al., Repurposing drugs to advance the treatm…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00029-25](https://doi.org/10.1128/aac.00029-25) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Zhang_2023_rGr](drugs/drug_clarithromycin/pd_Zhang_2023_rGr.md) | M. aeruginosa cell growth rate ← Clarithromycin · direct sigmoid Emax (Hill) effect | — | Zhang Q et al., The influence of pH and dissolved organ…, The Science of the total en… (2023) | [10.1016/j.scitotenv.2023.166781](https://doi.org/10.1016/j.scitotenv.2023.166781) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clarithromycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate, `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `SLC22A7` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 714 matched, 75 returned
- **screened:** 15  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_23 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Poapolathep_2022.pdf` | Poapolathep S et al., Pharmacokinetic profiles of clarithromy…, Journal of veterinary pharm… (2022) | popPK | 9 | [10.1111/jvp.13034](https://doi.org/10.1111/jvp.13034) | [34845734](https://pubmed.ncbi.nlm.nih.gov/34845734) | Reports pharmacokinetics of clarithromycin in crocodiles with key parameters like t1/2 (20 h), bioavailability (complete), and protein binding (30%) present in the abstract, but other compartmental values (CL, V) are likely in the full text/tables not fully provided. |
| `Methaneethorn_2014.pdf` | Methaneethorn J et al., A pharmacokinetic drug-drug interaction…, Annual International Confer… (2014) | popPK | 6 | [10.1109/EMBC.2014.6944922](https://doi.org/10.1109/EMBC.2014.6944922) | [25571290](https://pubmed.ncbi.nlm.nih.gov/25571290) | The paper develops a population PK model for clarithromycin (parent-metabolite) in a drug-drug interaction study, but the specific numeric parameter values are not present in the extracted text. |
| `Del_2009.pdf` | Del Bortolo Ruenis AP et al., A PK/PD approach on the effects of clar…, International journal of cl… (2009) | pd | 5 | [10.5414/cpp47096](https://doi.org/10.5414/cpp47096) | [19203565](https://www.ncbi.nlm.nih.gov/pubmed/19203565) | metadata signals extractable PD data (PK/PD) |
| `Sanders_2026.pdf` | Sanders M et al., Effect of concomitant rifampin and clar…, Expert opinion on drug meta… (2026) | pd | 5 | [10.1080/17425255.2026.2689048](https://doi.org/10.1080/17425255.2026.2689048) | [42287332](https://www.ncbi.nlm.nih.gov/pubmed/42287332) | metadata signals extractable PD data (EC50) |
| `Srivastava_2022.pdf` | Srivastava S et al., An overview of drugs for the treatment…, Journal of global antimicro… (2022) | pd | 4 | [10.1016/j.jgar.2021.12.010](https://doi.org/10.1016/j.jgar.2021.12.010) | [34933140](https://www.ncbi.nlm.nih.gov/pubmed/34933140) | metadata signals extractable PD data (sigmoid) |
| `Byeon_2018.pdf` | Byeon JY et al., The influences of CYP2C9*1/*3 genotype…, Archives of pharmacal resea… (2018) | pgx | 8 | [10.1007/s12272-018-1070-y](https://doi.org/10.1007/s12272-018-1070-y) | [30178440](https://www.ncbi.nlm.nih.gov/pubmed/30178440) | metadata signals extractable PGX data (CYP2C9*1, PK/PD-context) |
| `Maev_2017.pdf` | Maev IV et al., [Molecular genetic predictors of resist…, Terapevticheskii arkhiv (2017) | pgx | 8 | [10.17116/terarkh20178985-12](https://doi.org/10.17116/terarkh20178985-12) | [28914844](https://www.ncbi.nlm.nih.gov/pubmed/28914844) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Marsousi_2018.pdf` | Marsousi N et al., Prediction of drug-drug interactions us…, Biopharmaceutics & drug dis… (2018) | pgx | 8 | [10.1002/bdd.2107](https://doi.org/10.1002/bdd.2107) | [28960401](https://www.ncbi.nlm.nih.gov/pubmed/28960401) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Saito_2005.pdf` | Saito M et al., Effects of clarithromycin on lansoprazo…, British journal of clinical… (2005) | pgx | 8 | [10.1111/j.1365-2125.2004.02329.x](https://doi.org/10.1111/j.1365-2125.2004.02329.x) | [15752376](https://www.ncbi.nlm.nih.gov/pubmed/15752376) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Yang_2009.pdf` | Yang JC et al., Pharmacokinetic- pharmacodynamic analys…, British journal of clinical… (2009) | pgx | 8 | [10.1111/j.1365-2125.2009.03393.x](https://doi.org/10.1111/j.1365-2125.2009.03393.x) | [19552744](https://www.ncbi.nlm.nih.gov/pubmed/19552744) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Abduljalil_2009.pdf` | Abduljalil K et al., Modeling the autoinhibition of clarithr…, Antimicrobial agents and ch… (2009) | pgx | 7 | [10.1128/AAC.01193-08](https://doi.org/10.1128/AAC.01193-08) | [19414584](https://www.ncbi.nlm.nih.gov/pubmed/19414584) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Arazo_2013.pdf` | Arazo Garcés P et al., [Pharmacokinetic interactions], Enfermedades infecciosas y… (2013) | pgx | 7 | [10.1016/S0213-005X(13)70138-1](https://doi.org/10.1016/S0213-005X(13)70138-1) | [24252529](https://www.ncbi.nlm.nih.gov/pubmed/24252529) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Becker_2016.pdf` | Becker C et al., Pharmacokinetic interaction of riocigua…, Pulmonary circulation (2016) | pgx | 7 | [10.1086/685016](https://doi.org/10.1086/685016) | [27162627](https://www.ncbi.nlm.nih.gov/pubmed/27162627) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Djebli_2021.pdf` | Djebli N et al., Physiologically-Based Pharmacokinetic M…, European journal of drug me… (2021) | pgx | 7 | [10.1007/s13318-021-00714-z](https://doi.org/10.1007/s13318-021-00714-z) | [34495458](https://www.ncbi.nlm.nih.gov/pubmed/34495458) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Gallelli_2017.pdf` | Gallelli L et al., Drug-Drug Interactions in Cocaine-users…, Current drug abuse reviews (2017) | pgx | 7 | [10.2174/1874473710666170920143344](https://doi.org/10.2174/1874473710666170920143344) | [29185916](https://www.ncbi.nlm.nih.gov/pubmed/29185916) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Kaukab_2020.pdf` | Kaukab I et al., Effect of clarithromycin pre-treatment…, Expert opinion on drug meta… (2020) | pgx | 7 | [10.1080/17425255.2020.1779699](https://doi.org/10.1080/17425255.2020.1779699) | [32524862](https://www.ncbi.nlm.nih.gov/pubmed/32524862) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nakade_2008.pdf` | Nakade S et al., Effect of clarithromycin on the pharmac…, Drug metabolism and pharmac… (2008) | pgx | 7 | [10.2133/dmpk.23.428](https://doi.org/10.2133/dmpk.23.428) | [19122337](https://www.ncbi.nlm.nih.gov/pubmed/19122337) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ngeyvijit_2023.pdf` | Ngeyvijit J et al., CYP3A4/P-glycoprotein inhibitors relate…, BMJ case reports (2023) | pgx | 7 | [10.1136/bcr-2023-257186](https://doi.org/10.1136/bcr-2023-257186) | [37813551](https://www.ncbi.nlm.nih.gov/pubmed/37813551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Williams_2002.pdf` | Williams JA et al., Comparative metabolic capabilities of C…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.8.883](https://doi.org/10.1124/dmd.30.8.883) | [12124305](https://www.ncbi.nlm.nih.gov/pubmed/12124305) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhanel_2016.pdf` | Zhanel GG et al., Solithromycin: A Novel Fluoroketolide f…, Drugs (2016) | pgx | 7 | [10.1007/s40265-016-0667-z](https://doi.org/10.1007/s40265-016-0667-z) | [27909995](https://www.ncbi.nlm.nih.gov/pubmed/27909995) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zambon_2007.pdf` | Zambon CF et al., Clarithromycin resistance, tumor necros…, Journal of gastrointestinal… (2007) | pgx | 5 | [10.1007/s11605-007-0246-4](https://doi.org/10.1007/s11605-007-0246-4) | [17846855](https://www.ncbi.nlm.nih.gov/pubmed/17846855) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-15T03:41:40.191668+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abduljalil_2009 | not_relevant | 0 | 0 | The study focuses on the time-dependent autoinhibition of CYP3A4 by clarithromycin in healthy volunteers and does not report any genetic variants or pharmacogenomic factors affecting its pharmacokinetics. |
| PGx | Arazo_2013 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug-drug interactions involving clarithromycin but contains no information regarding gene variants, genotypes, or pharmacogenomic effects. |
| PGx | Attia_2019 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving clarithromycin affecting omeprazole metabolism, not the pharmacogenomic effect of a gene variant on clarithromycin PK/PD. |
| PGx | Auttajaroon_2019 | not_relevant | 0 | 0 | The study reports the prevalence of H. pylori resistance to clarithromycin but does not measure or report pharmacokinetic or pharmacodynamic parameters of the drug affected by the CYP2C19 genotype. |
| PGx | Becker_2016 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between riociguat and clarithromycin, not a pharmacogenomic effect of a genetic variant on clarithromycin PK/PD. |
| PGx | Byeon_2018 | not_relevant | 0 | 0 | The paper reports on the pharmacokinetics of zolpidem, not clarithromycin; clarithromycin is only used as a CYP3A4 inhibitor. |
| PGx | Cao_2026 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (DDI) involving clarithromycin, but clarithromycin is used as a perpetrator/inhibitor to modulate the PK of the study drug (JP-1366/Zastaprazan); the paper does not report how genetic variants affect clarithromycin's own PK or PD parameters. |
| PGx | Cobos-Trigueros_2009 | not_relevant | 0 | 0 | The text provides a general overview of macrolides and ketolides, including their metabolic pathways, but does not report any specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Cui_2021 | not_relevant | 0 | 0 | The paper investigates antimicrobial resistance in Helicobacter pylori, not pharmacogenomics of clarithromycin in humans. |
| popPK | Del_2009 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Del_2009 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, results, or any numeric PD parameters. |
| PGx | Djebli_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (CYP3A4 inhibition/induction) affecting entrectinib pharmacokinetics and does not report pharmacogenomic effects on clarithromycin. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | This is a review article discussing clarithromycin as a CYP3A4 inhibitor affecting other drugs, not a study reporting clarithromycin's own quantitative pharmacokinetic parameters. |
| PD | Dresser_2000 | not_relevant | 1 | 0 | The text is a general review of CYP3A4 inhibition and drug interactions, mentioning clarithromycin only as an example of an inhibitor without providing any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Echizen_2016 | irrelevant | 0 | 0 | The paper is a pharmacokinetic review of vonoprazan, and clarithromycin is only mentioned as a co-administered comparator/probe drug without its own quantitative PK parameters being reported. |
| PGx | Echizen_2016 | not_relevant | 2 | 10 | The paper reports the pharmacokinetics of vonoprazan and mentions that CYP2C19 polymorphism affects vonoprazan exposure, but it does not report pharmacogenomic effects on the PK or PD of clarithromycin. |
| PGx | Gallelli_2017 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in cocaine users and mentions clarithromycin only as a CYP3A4 inhibitor, without reporting any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Ghiaur_2023 | not_relevant | 2 | 0 | The paper describes the use of clarithromycin as a CYP3A4 inhibitor to overcome chemoresistance in a cancer model, but it does not report pharmacogenomic effects (gene variants) on clarithromycin's own PK or PD parameters. |
| PGx | Hanke_2018 | not_relevant | 0 | 0 | The paper reports PBPK modeling of drug-drug interactions (DDIs) involving clarithromycin as a perpetrator, but it does not investigate gene variants, genotypes, or pharmacogenomic effects on clarithromycin's PK or PD parameters. |
| popPK | Hirai_2024 | irrelevant | 1 | 0 | Clarithromycin is a mechanistic component of a drug-drug interaction model for tacrolimus, with no quantitative disposition parameters reported for clarithromycin itself. |
| PGx | Hirai_2024 | not_relevant | 0 | 0 | The paper models drug-drug interactions between tacrolimus and clarithromycin/voriconazole, not pharmacogenomic effects of gene variants on clarithromycin. |
| popPK | Ho_2022 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of H. pylori antibiotic resistance rates, not a pharmacokinetic study reporting disposition parameters for clarithromycin. |
| popPK | Jayasagar_2000 | irrelevant | 1 | 1 | Clarithromycin is used only as a probe/co-administered agent to study the pharmacokinetics of tolbutamide, and no PK parameters for clarithromycin itself are reported. |
| popPK | Jeong_2019 | irrelevant | 0 | 0 | This is a retrospective cohort study on clinical outcomes (renal function, hospitalization) in kidney transplant recipients; it does not report pharmacokinetic parameters (CL, V, ka) for clarithromycin. |
| PGx | Jurima-Romet_1994 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic interaction between clarithromycin and terfenadine (in vitro) rather than a pharmacogenomic effect (gene variant) on clarithromycin's PK/PD parameters. |
| popPK | Katsube_2014 | irrelevant | 0 | 0 | The study focuses on in-vitro pharmacodynamic modeling of modithromycin, with clarithromycin used only as a comparator in time-kill assays, not as the subject of PK parameter estimation. |
| PD | Katsube_2014 | not_relevant | 4 | 3 | The paper focuses on modithromycin and only uses clarithromycin as a comparator in in vitro time-kill modeling; it does not report specific numeric PD parameters (e.g., Emax, EC50) for clarithromycin in the provided text. |
| PGx | Kaukab_2020 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (clarithromycin affecting metoclopramide PK) and does not investigate any genetic variants or pharmacogenomic factors. |
| PGx | Klis_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of clarithromycin influenced by drug-drug interactions (Rifampicin), but does not study or report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Kovar_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for the drug (E)-clomiphene, not clarithromycin (which is used as a CYP3A4 inhibitor/perpetrator). |
| PGx | Kurata_2020 | not_relevant | 0 | 0 | The study investigates pharmacokinetics of theophylline, not clarithromycin, and does not report a pharmacogenomic effect. |
| PGx | Kurata_2021 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of theophylline, not clarithromycin, and does not report gene variants. |
| popPK | Kurosawa_2021 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of bedaquiline with clarithromycin as a co-administered CYP3A inhibitor; while limited NCA parameters for clarithromycin are reported, there are no disposition parameters (CL, V, half-life) or population PK model for clarithromycin. |
| PGx | Laberge_1997 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (clarithromycin-digoxin) but does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of clarithromycin. |
| PGx | Levy_1995 | not_relevant | 1 | 1 | The paper discusses drug-drug interactions involving clarithromycin (as an inhibitor) but does not report any pharmacogenomic effects (gene variants) on clarithromycin's PK/PD parameters. |
| PGx | Maev_2017 | not_relevant | 0 | 0 | The paper discusses genetic predictors for *Helicobacter pylori* antibiotic resistance and host genetics affecting PPI pharmacokinetics, but it does not report any pharmacogenomic effects on the PK or PD parameters of clarithromycin. |
| PGx | Makihara_2017 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (clarithromycin and irinotecan) and clinical toxicity outcomes, but it does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Marsousi_2018 | not_relevant | 0 | 0 | The paper evaluates PBPK models for drug-drug interactions involving CYP modulators (including clarithromycin) but does not report pharmacogenomic effects (gene variants) on clarithromycin PK/PD. |
| popPK | Methaneethorn_2014 | relevant | 6 | 2 | The paper develops a population PK model for clarithromycin (parent-metabolite) in a drug-drug interaction study, but the specific numeric parameter values are not present in the extracted text. |
| PGx | Methaneethorn_2014 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between simvastatin and clarithromycin, not a pharmacogenomic effect of clarithromycin on its own PK or PD parameters. |
| PGx | Miyamoto_2016 | not_relevant | 0 | 0 | The paper analyzes H. pylori genotypes and clarithromycin resistance in bacteria, not human pharmacogenomic effects on drug PK or PD. |
| PGx | Nakade_2008 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between clarithromycin and pranlukast, but does not report any pharmacogenomic effects (gene variants/genotypes) on the PK or PD of clarithromycin. |
| PGx | Ngeyvijit_2023 | not_relevant | 0 | 0 | The paper describes a clinical case of colchicine toxicity due to drug-drug interaction with clarithromycin, but does not report pharmacogenomic effects on clarithromycin PK/PD parameters. |
| PGx | Saito_2005 | not_relevant | 0 | 0 | The study reports CYP2C19 genotype effects on Lansoprazole pharmacokinetics, not Clarithromycin. |
| popPK | Sanders_2026 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PD | Sanders_2026 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of drug-drug interactions (PK only) and does not report any pharmacodynamic or exposure-response relationships for clarithromycin. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | This is an in-vitro microbiological study measuring MICs and bactericidal activity of clarithromycin against M. ulcerans, not a pharmacokinetic study of the drug's disposition. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Srivastava_2022 | not_relevant | 1 | 0 | The paper is a general overview/review of drugs for Mycobacterium kansasii and does not report specific pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for clarithromycin. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The study investigates drug-drug interactions involving nateglinide and does not report pharmacogenomic effects on clarithromycin. |
| popPK | Torumkuney_2020 | irrelevant | 0 | 0 | The study reports antimicrobial susceptibility (MICs) and breakpoint applications for clarithromycin, not pharmacokinetic parameters for the drug itself. |
| PD | Torumkuney_2020 | not_relevant | 1 | 0 | The paper reports antibiotic susceptibility rates using PK/PD breakpoints but does not provide a concentration-effect analysis or numeric PD parameters (e.g., Emax, EC50) for clarithromycin. |
| PGx | Tungtrongchitr_2024 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy (eradication rate) of a treatment regimen in relation to H. pylori antibiotic resistance, not the effect of a pharmacogenomic variant on the pharmacokinetic or pharmacodynamic parameters of clarithromycin. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper reports bacterial genetic variants (erm(41), rrl) associated with drug resistance, which is antimicrobial resistance, not human pharmacogenomics. |
| popPK | Wei_2023 | irrelevant | 4 | 0 | Clarithromycin is a co-administered DDI perpetrator (CYP3A4 inhibitor) rather than the subject of the PK investigation, and the specific quantitative parameter values for clarithromycin are located in Supplementary Table S1 which is not provided in the evidence. |
| PD | Wei_2023 | not_relevant | 2 | 0 | The paper focuses on PBPK modeling of clarithromycin PK and DDI effects on tegoprazan PD (pH), but does not report a concentration-effect or dose-response model for clarithromycin itself with numeric PD parameters. |
| PGx | Wendl_2022 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition by clarithromycin), not a pharmacogenomic effect (gene variant/genotype impact) on PK/PD parameters. |
| PGx | Williams_2002 | not_relevant | 0 | 0 | The paper compares in vitro metabolic capabilities of CYP3A isoforms but does not report pharmacogenomic effects of specific human gene variants on PK/PD parameters in a clinical or human pharmacokinetic context. |
| PGx | Yang_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of rabeprazole (CYP2C19), not clarithromycin. |
| PGx | Yoneda_2009 | not_relevant | 0 | 0 | The paper investigates the metabolism of pranlukast and its interaction with clarithromycin, but does not report on the effect of any gene variant or genotype on the pharmacokinetics or pharmacodynamics of clarithromycin. |
| PGx | Yoon_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interaction modeling (clarihromycin as a CYP3A4 inhibitor affecting tegoprazan) and does not report any pharmacogenomic effects on clarithromycin's PK/PD parameters. |
| PGx | Zambon_2007 | not_relevant | 0 | 0 | The paper investigates the relationship between host gene polymorphisms and clinical eradication success, but does not report any changes in the pharmacokinetic or pharmacodynamic parameters of clarithromycin. |
| popPK | Zhanel_2016 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PGx | Zhanel_2016 | not_relevant | 0 | 0 | The paper discusses solithromycin, not clarithromycin, and does not report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper describes an ecotoxicity and bioavailability study of clarithromycin in cyanobacteria (Microcystis aeruginosa), not a pharmacokinetic study measuring disposition parameters like CL or V in an organism. |
| PGx | van_2019 | not_relevant | 0 | 0 | The study investigates sampling strategies for CYP3A phenotyping using midazolam; it does not report pharmacogenomic effects (gene variants) on the pharmacokinetics of clarithromycin. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions via CYP3A4 inhibition, not pharmacogenomic (genetic variant) effects. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:41 UTC</sub>
