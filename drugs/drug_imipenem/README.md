<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Imipenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imipenem_Chu2010_reference&quot;,&quot;label&quot;:&quot;Chu_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imipenem/Imipenem_Chu2010_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imipenem_Gomez2015_reference&quot;,&quot;label&quot;:&quot;Gomez_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imipenem/Imipenem_Gomez2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Imipenem

- **generic name:** Imipenem
- **ATC codes:** `J01DH51`
- **DrugBank:** [DB01598](https://go.drugbank.com/drugs/DB01598) · **PubChem:** [CID 104838](https://pubchem.ncbi.nlm.nih.gov/compound/104838)
- **molar mass:** 299.346 g/mol (C12H17N3O4S) — DrugBank
- **groups:** approved, investigational

## About

Imipenem is a carbapenem antibiotic used to treat serious bacterial infections such as sepsis, urinary tract infections, endocarditis, and infections caused by staphylococci or Pseudomonas. It is an approved antibiotic, generally given by injection and mainly reserved for severe or hospital-treated infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425152](https://www.wikidata.org/wiki/Q425152) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| imipenem | parent | 299.346 | C12H17N3O4S | DrugBank | [104838](https://pubchem.ncbi.nlm.nih.gov/compound/104838) | Gruber_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:24 | 15:12 | 2/1/1 | 2/0/0 | 0/0/0 | 335,925/51,264 | einfracz / qwen3.8-27b | 22 | 2/18 | 21/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chu_2010_reference](drugs/drug_imipenem/Imipenem_Chu2010_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Chu YZ et al., Pharmacokinetic-pharmacodynamic profili…, BMC infectious diseases (2010) | [10.1186/1471-2334-10-171](https://doi.org/10.1186/1471-2334-10-171) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gomez_2015_reference](drugs/drug_imipenem/Imipenem_Gomez2015_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Gomez DS et al., Imipenem in burn patients: pharmacokine…, The Journal of antibiotics (2015) | [10.1038/ja.2014.121](https://doi.org/10.1038/ja.2014.121) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Gruber_1985_reference](drugs/drug_imipenem/Imipenem_Gruber1985_reference.md) | — | 1-compartment (no model) | 4 | Gruber WC et al., Single-dose pharmacokinetics of imipene…, Antimicrobial agents and ch… (1985) | [10.1128/AAC.27.4.511](https://doi.org/10.1128/AAC.27.4.511) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ito_1986_reference](drugs/drug_imipenem/Imipenem_Ito1986_reference.md) | — | 1-compartment (no model) | 0 | Ito K et al., [Fundamental and clinical studies of im…, The Japanese journal of ant… (1986) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fujimoto_1995_GABA_induced_Cl_current](drugs/drug_imipenem/pd_Fujimoto_1995_GABA_induced_Cl_current.md) | GABA-induced Cl- current biomarker turnover ← imipenem | — | Fujimoto M et al., Dual mechanisms of GABAA response inhib…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15957.x](https://doi.org/10.1111/j.1476-5381.1995.tb15957.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Koomanachai_2010_CFR](drugs/drug_imipenem/pd_Koomanachai_2010_CFR.md) | Cumulative Fraction of Response (CFR) ← imipenem · model not identified | — | Koomanachai P et al., Pharmacodynamic modeling of intravenous…, Clinical therapeutics (2010) | [10.1016/j.clinthera.2010.04.003](https://doi.org/10.1016/j.clinthera.2010.04.003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imipenem) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DPEP1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 607 matched, 84 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boucher_1990.pdf` | Boucher BA et al., Imipenem pharmacokinetics in patients w…, Clinical pharmacology and t… (1990) | popPK | 10 | [10.1038/clpt.1990.127](https://doi.org/10.1038/clpt.1990.127) | [2379384](https://pubmed.ncbi.nlm.nih.gov/2379384) | The study reports quantitative disposition parameters (CL, Vc, Vss, half-lives) for imipenem in human patients with burns. |
| `Jacobs_1984.pdf` | Jacobs RF et al., Single-dose pharmacokinetics of imipene…, The Journal of pediatrics (1984) | popPK | 10 | [10.1016/s0022-3476(84)80098-0](https://doi.org/10.1016/s0022-3476(84)80098-0) | [6594492](https://pubmed.ncbi.nlm.nih.gov/6594492) | The abstract explicitly reports quantitative single-dose pharmacokinetic parameters (Vd, CL, t1/2) for imipenem in pediatric humans. |
| `Lala_2019.pdf` | Lala M et al., Simplification of Imipenem Dosing by Re…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1356](https://doi.org/10.1002/jcph.1356) | [30536420](https://pubmed.ncbi.nlm.nih.gov/30536420) | The paper describes a population pharmacokinetic model for imipenem in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| `Gruber_1985.pdf` | Gruber WC et al., Single-dose pharmacokinetics of imipene…, Antimicrobial agents and ch… (1985) | popPK | 9 | [10.1128/AAC.27.4.511](https://doi.org/10.1128/AAC.27.4.511) | [3859243](https://pubmed.ncbi.nlm.nih.gov/3859243) | The paper reports quantitative single-dose pharmacokinetic parameters (t1/2, Vd) for imipenem in neonates. |
| `Somani_1988.pdf` | Somani P et al., Pharmacokinetics of imipenem-cilastatin…, Antimicrobial agents and ch… (1988) | popPK | 9 | [10.1128/AAC.32.4.530](https://doi.org/10.1128/AAC.32.4.530) | [3377464](https://pubmed.ncbi.nlm.nih.gov/3377464) | Study reports PK parameters for imipenem in humans, providing numeric values for half-life (3.28 h) and stating CL, V, and AUC were calculated but specific numeric values for CL and V are not explicitly listed in the provided text. |
| `Ito_1986.pdf` | Ito K et al., [Fundamental and clinical studies of im…, The Japanese journal of ant… (1986) | popPK | 7 | not captured | [3463797](https://pubmed.ncbi.nlm.nih.gov/3463797) | The study applies a two-compartment model to imipenem data and provides plasma concentration-time points, but specific PK parameter values (CL, V) are not explicitly listed in the text. |
| `Freij_1985.pdf` | Freij BJ et al., Pharmacokinetics of imipenem-cilastatin…, Antimicrobial agents and ch… (1985) | popPK | 6 | [10.1128/AAC.27.4.431](https://doi.org/10.1128/AAC.27.4.431) | [3859242](https://pubmed.ncbi.nlm.nih.gov/3859242) | The study reports qualitative PK parameters (half-life, relative clearance, model type) for imipenem but lacks specific numeric values for CL and V, and does not specify the species in the provided text. |
| `Chen_2020.pdf` | Chen IH et al., Imipenem/Cilastatin/Relebactam Alone an…, Antimicrobial agents and ch… (2020) | pd | 5 | [10.1128/AAC.01764-20](https://doi.org/10.1128/AAC.01764-20) | [33139283](https://www.ncbi.nlm.nih.gov/pubmed/33139283) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Horcajada_2019.pdf` | Horcajada JP et al., Epidemiology and Treatment of Multidrug…, Clinical microbiology revie… (2019) | pd | 5 | [10.1128/CMR.00031-19](https://doi.org/10.1128/CMR.00031-19) | [31462403](https://www.ncbi.nlm.nih.gov/pubmed/31462403) | metadata signals extractable PD data (PK/PD) |
| `Kotapati_2005.pdf` | Kotapati S et al., Pharmacodynamic modeling of beta-lactam…, Surgical infections (2005) | pd | 5 | [10.1089/sur.2005.6.297](https://doi.org/10.1089/sur.2005.6.297) | [16201939](https://www.ncbi.nlm.nih.gov/pubmed/16201939) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Mavridou_2015.pdf` | Mavridou E et al., Pharmacodynamics of imipenem in combina…, Antimicrobial agents and ch… (2015) | pd | 5 | [10.1128/AAC.03706-14](https://doi.org/10.1128/AAC.03706-14) | [25403667](https://www.ncbi.nlm.nih.gov/pubmed/25403667) | metadata signals extractable PD data (sigmoid) |
| `Appelbaum_1994.pdf` | Appelbaum PC et al., Characterization of a beta-lactamase fr…, The Journal of antimicrobia… (1994) | pd | 4 | [10.1093/jac/33.1.33](https://doi.org/10.1093/jac/33.1.33) | [8157571](https://www.ncbi.nlm.nih.gov/pubmed/8157571) | metadata signals extractable PD data (IC50) |
| `Teng_2024.pdf` | Teng H et al., HDL-C and creatinine levels at 1 month…, Pharmacogenetics and genomi… (2024) | pgx | 8 | [10.1097/FPC.0000000000000514](https://doi.org/10.1097/FPC.0000000000000514) | [37906625](https://www.ncbi.nlm.nih.gov/pubmed/37906625) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Szałek_2012.pdf` | Szałek E et al., [Optimization of antibiotic therapy in…, Ginekologia polska (2012) | pgx | 7 | not captured | [22880468](https://www.ncbi.nlm.nih.gov/pubmed/22880468) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T11:17:33.359773+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agudelo_2019 | relevant | 9 | 1 | The study explicitly reports a population PK analysis for imipenem in mice using the Pmetrics package to estimate Ka, Ke, V, KCP, and KPC, but the actual numeric parameter values are not provided in the extracted text, likely residing in figures or supplementary tables not included here. |
| popPK | Bilal_2021 | irrelevant | 0 | 0 | The paper is a pharmacokinetic review of cefiderocol, and imipenem is only mentioned as a comparator in clinical efficacy trials, with no PK parameters for imipenem reported. |
| PGx | Candela_2025 | not_relevant | 0 | 0 | The paper describes a diagnostic method (MALDI-TOF MS) to detect bacterial resistance mechanisms (carbapenemases) to imipenem, not the effect of human gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of antimicrobial efficacy (CFU reduction) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Chu_2010 | irrelevant | 3 | 8 | The paper is a PK/PD simulation study that uses literature-derived PK parameters for imipenem (CL, Vd) rather than measuring them, and while Table 2 containing the values is referenced, it is not included in the provided evidence. |
| PGx | Ding_2022 | not_relevant | 0 | 0 | The paper describes a clinical case of bacterial infection treatment involving antimicrobial resistance mechanisms (blaKPC-2/blaKPC-33) and does not investigate host pharmacogenomics or their impact on imipenem pharmacokinetics/pharmacodynamics. |
| PGx | Dong_2024 | not_relevant | 0 | 0 | The paper focuses on the structural optimization and general pharmacokinetic profile of novel β-lactamase inhibitors, and does not report pharmacogenomic (gene variant) effects on PK/PD parameters. |
| PGx | Duan_2021 | not_relevant | 0 | 0 | The paper investigates bacterial genetic adaptation (rpoS mutations in P. aeruginosa) under antibiotic pressure, not human pharmacogenomics or host genetic effects on drug PK/PD. |
| PGx | Falcone_2026 | not_relevant | 0 | 0 | The paper reviews the epidemiology and mechanisms of antimicrobial resistance (AMR) in bacteria, not pharmacogenomic effects on patient PK/PD parameters. |
| popPK | Fantin_1991 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic indices (Emax, P50) in a mouse infection model and does not report pharmacokinetic disposition parameters like clearance or volume of distribution for imipenem. |
| PGx | Farhat_2024 | not_relevant | 0 | 0 | The paper investigates chemical inhibitors against bacterial enzymes (NDM-1) and their effect on antibiotic MIC, which is a microbiological susceptibility measure, not a human pharmacogenomic effect on PK or PD parameters. |
| PGx | Fathollahi_2021 | not_relevant | 0 | 0 | The paper focuses on in silico vaccine design against NDM enzymes and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imipenem. |
| popPK | Freij_1985 | relevant | 6 | 3 | The study reports qualitative PK parameters (half-life, relative clearance, model type) for imipenem but lacks specific numeric values for CL and V, and does not specify the species in the provided text. |
| PGx | Friedland_2003 | not_relevant | 0 | 0 | The paper reports antimicrobial resistance patterns in bacteria, not the effect of human genetic variants on imipenem pharmacokinetics or pharmacodynamics. |
| popPK | Fujimoto_1995 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study measuring the effect of imipenem on GABA receptors, not a pharmacokinetic study. |
| PGx | Gaire_2024 | not_relevant | 0 | 0 | The paper is a case report on SJS/TEN and mentions HLA-B*38:02 susceptibility for co-trimoxazole, but does not report any pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of imipenem. |
| PGx | Gatti_2026 | not_relevant | 0 | 0 | The paper reviews clinical efficacy and PK/PD optimization of novel antibiotics, but contains no data on pharmacogenomics (gene variants/genotypes). |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The paper reports in vitro MICs and bactericidal efficacy (antimicrobial activity) of imipenem, not pharmacokinetic parameters. |
| popPK | Guo_2025 | irrelevant | 1 | 0 | The study is an in silico modeling framework for spatial drug distribution in mucus, not a clinical PK study reporting standard population PK parameters (CL, V) for imipenem. |
| popPK | Hongo_1986 | irrelevant | 3 | 1 | The study reports only tissue concentrations and does not provide quantitative population PK parameter estimates (CL, V, Q, t1/2) despite mentioning a model. |
| PGx | Hovde_2003 | not_relevant | 0 | 0 | The paper investigates antimicrobial susceptibility (MPC) of bacteria, not pharmacogenomic effects on human PK/PD parameters. |
| PGx | Huo_2019 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and transporter mechanisms (OAT1/3) but does not report on genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kawamoto_2010 | not_relevant | 0 | 0 | The paper assesses antibiotic susceptibility of bacterial strains and simulates drug efficacy, but it does not report any human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imipenem. |
| popPK | Koomanachai_2010 | irrelevant | 2 | 0 | This is a pharmacodynamic modeling study focusing on probability of target attainment (T&gt;MIC) rather than a report of quantitative pharmacokinetic parameter values (CL, V) for imipenem. |
| popPK | Kotapati_2005 | irrelevant | 1 | 0 | This is a pharmacodynamic simulation study that cites previously published PK parameters but does not report original quantitative PK values for imipenem in the evidence. |
| popPK | Lala_2019 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for imipenem in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper focuses on microbial (bacterial) genomics and resistance mechanisms in Klebsiella pneumoniae, not on human pharmacogenomics affecting imipenem PK or PD. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | The paper is a comparative genomic analysis of Lactococcus garvieae isolates, not a pharmacogenomic study of imipenem. |
| PGx | Mac_2012 | not_relevant | 0 | 0 | The paper describes bacterial mechanisms of antibiotic resistance (oprD mutation) rather than human pharmacogenomics affecting imipenem PK/PD. |
| PGx | Madani_2020 | not_relevant | 0 | 0 | The paper investigates the antibacterial activity of oxadiazolone derivatives against Mycobacterium abscessus, not pharmacogenomic effects on imipenem PK/PD. |
| popPK | Mavridou_2015 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| popPK | Navas_2006 | irrelevant | 2 | 0 | The study reports trough serum concentrations of imipenem but does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Quentin_2004 | not_relevant | 0 | 0 | The paper reports bacterial antibiotic resistance rates and phenotypes, not pharmacogenomic effects of human gene variants on imipenem pharmacokinetics or pharmacodynamics. |
| popPK | Rando_2024 | irrelevant | 2 | 1 | This is a systematic review of novel beta-lactams (including imipenem/cilastatin/relebactam) and lacks specific, readable numeric PK parameter values for imipenem in the provided evidence. |
| PGx | Rapti_2026 | not_relevant | 0 | 0 | The paper discusses clinical management and resistance mechanisms of KPC infections using BLBLIs, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Shen_2024 | not_relevant | 0 | 0 | The paper focuses on bacterial resistance (KPC mutations) to ceftazidime-avibactam and carbapenems, not human pharmacogenomics or host PK/PD effects. |
| popPK | Somani_1988 | relevant | 9 | 4 | Study reports PK parameters for imipenem in humans, providing numeric values for half-life (3.28 h) and stating CL, V, and AUC were calculated but specific numeric values for CL and V are not explicitly listed in the provided text. |
| PGx | Su_2023 | not_relevant | 0 | 0 | The paper reports bacterial resistance to imipenem, not a pharmacogenomic effect on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Subhi_2026 | not_relevant | 0 | 0 | The paper reviews antimicrobial resistance patterns and empiric therapy strategies; it does not report human pharmacogenomic effects on imipenem PK or PD. |
| popPK | Suchánková_2017 | irrelevant | 2 | 0 | The study describes a Monte Carlo simulation using a previously established model, and no quantitative PK parameter values (CL, V, etc.) for imipenem are provided in the evidence. |
| PGx | Szałek_2012 | not_relevant | 0 | 0 | The paper discusses the impact of physiological changes in pregnancy on the PK of imipenem and other drugs but does not report on genetic variants or pharmacogenomics. |
| PGx | Teng_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects of CYP3A5 on tacrolimus, not imipenem. |
| PGx | Teo_2023 | not_relevant | 0 | 0 | The paper reports microbial genotype (resistance mechanisms) effects on antibiotic susceptibility, not human pharmacogenomic effects on drug PK/PD parameters. |
| PGx | Thadtapong_2024 | not_relevant | 0 | 0 | The paper studies bacterial genomics (SNPs) and the adjuvant effect of panduratin A on colistin/imipenem efficacy in bacteria, not human pharmacogenomics affecting PK/PD. |
| PGx | Toda_2009 | not_relevant | 0 | 0 | The paper investigates the impact of antibiotics on CYP3A expression in mice, not the effect of a gene variant on the PK/PD of imipenem. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper describes genomic variations in the bacterial pathogen (Burkholderia pseudomallei) that cause antibiotic resistance, not human pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of imipenem. |
| popPK | Watanabe_1992 | irrelevant | 1 | 0 | This is an in-vitro bactericidal study comparing cefclidin to imipenem; imipenem is a comparator, and no quantitative population PK parameters for imipenem are reported. |
| PGx | Watanabe_1992 | not_relevant | 0 | 0 | The paper investigates the in-vitro bactericidal activity and resistance selection of cefclidin compared to imipenem, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Wiskirchen_2014 | not_relevant | 0 | 0 | The paper evaluates the efficacy of antibiotics against bacterial isolates in a murine model and discusses bacterial genotype (OXA-48) vs. phenotypic MIC, not human pharmacogenomics affecting drug PK/PD. |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper is a review of cefiderocol, and imipenem is mentioned only as a comparator in clinical trials without reporting any quantitative pharmacokinetic parameters for it. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper describes bacterial resistance mechanisms involving a carbapenemase variant, not a human pharmacogenomic effect on imipenem PK or PD. |
| popPK | Zinner_1985 | irrelevant | 0 | 0 | The study focuses on piperacillin and thienamycin (a prodrug of imipenem) in an in-vitro model, not quantitative PK parameters for imipenem itself. |
| PGx | unknown_2026 | not_relevant | 0 | 0 | The paper is a guideline for off-label use of anti-TB drugs; it does not report pharmacogenomic studies of imipenem PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:21 UTC</sub>
