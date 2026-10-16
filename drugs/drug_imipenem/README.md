<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Imipenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imipenem_Bilal2021_reference&quot;,&quot;label&quot;:&quot;Bilal_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imipenem/Imipenem_Bilal2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imipenem_Chu2010_reference&quot;,&quot;label&quot;:&quot;Chu_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imipenem/Imipenem_Chu2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imipenem_Gomez2015_reference&quot;,&quot;label&quot;:&quot;Gomez_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imipenem/Imipenem_Gomez2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Imipenem

- **generic name:** Imipenem
- **ATC codes:** `J01DH51`
- **DrugBank:** [DB01598](https://go.drugbank.com/drugs/DB01598) · **PubChem:** [CID 104838](https://pubchem.ncbi.nlm.nih.gov/compound/104838)
- **molar mass:** 299.346 g/mol (C12H17N3O4S) — DrugBank
- **groups:** approved, investigational

## About

Imipenem is a carbapenem antibiotic used to treat serious bacterial infections such as sepsis, urinary tract infections, endocarditis, and infections caused by staphylococci or Pseudomonas. It is an approved antibiotic, generally given by injection and mainly reserved for severe or hospital-treated infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425152](https://www.wikidata.org/wiki/Q425152) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| imipenem | parent | 299.346 | C12H17N3O4S | DrugBank | [104838](https://pubchem.ncbi.nlm.nih.gov/compound/104838) | Freij_1985, Lafaurie_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:15 | 4:14 | 2/5/1 | 1/0/0 | 0/0/0 | 284,758/20,983 | einfracz / qwen3.8-27b | 22 | 2/18 | 21/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Bilal_2021_reference](drugs/drug_imipenem/Imipenem_Bilal2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Bilal M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01063-5](https://doi.org/10.1007/s40262-021-01063-5) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Chu_2010_reference](drugs/drug_imipenem/Imipenem_Chu2010_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Chu YZ et al., Pharmacokinetic-pharmacodynamic profili…, BMC infectious diseases (2010) | [10.1186/1471-2334-10-171](https://doi.org/10.1186/1471-2334-10-171) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Gomez_2015_reference](drugs/drug_imipenem/Imipenem_Gomez2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Gomez DS et al., Imipenem in burn patients: pharmacokine…, The Journal of antibiotics (2015) | [10.1038/ja.2014.121](https://doi.org/10.1038/ja.2014.121) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Freij_1985_reference](drugs/drug_imipenem/Imipenem_Freij1985_reference.md) | — | general linear (no model) | 0 | Freij BJ et al., Pharmacokinetics of imipenem-cilastatin…, Antimicrobial agents and ch… (1985) | [10.1128/AAC.27.4.431](https://doi.org/10.1128/AAC.27.4.431) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gruber_1985_reference](drugs/drug_imipenem/Imipenem_Gruber1985_reference.md) | — | 1-compartment (no model) | 0 | Gruber WC et al., Single-dose pharmacokinetics of imipene…, Antimicrobial agents and ch… (1985) | [10.1128/AAC.27.4.511](https://doi.org/10.1128/AAC.27.4.511) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hongo_1986_reference](drugs/drug_imipenem/Imipenem_Hongo1986_reference.md) | — | 1-compartment (no model) | 0 | Hongo M et al., [A study on the penetration of imipenem…, The Japanese journal of ant… (1986) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ito_1986_reference](drugs/drug_imipenem/Imipenem_Ito1986_reference.md) | — | 1-compartment (no model) | 0 | Ito K et al., [Fundamental and clinical studies of im…, The Japanese journal of ant… (1986) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lafaurie_2023_reference](drugs/drug_imipenem/Imipenem_Lafaurie2023_reference.md) | — | 1-compartment (no model) | 3 | Lafaurie M et al., Population pharmacokinetics and pharmac…, Infectious diseases now (2023) | [10.1016/j.idnow.2022.09.020](https://doi.org/10.1016/j.idnow.2022.09.020) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Koomanachai_2010_PTA](drugs/drug_imipenem/pd_Koomanachai_2010_PTA.md) | Probability of target attainment (PTA) ← imipenem · model not identified | — | Koomanachai P et al., Pharmacodynamic modeling of intravenous…, Clinical therapeutics (2010) | [10.1016/j.clinthera.2010.04.003](https://doi.org/10.1016/j.clinthera.2010.04.003) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=imipenem).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DPEP1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 607 matched, 84 returned
- **screened:** 8  ·  **relevant:** 7
- **records:** 8  ·  extracted 2  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boucher_1990.pdf` | Boucher BA et al., Imipenem pharmacokinetics in patients w…, Clinical pharmacology and t… (1990) | popPK | 10 | [10.1038/clpt.1990.127](https://doi.org/10.1038/clpt.1990.127) | [2379384](https://pubmed.ncbi.nlm.nih.gov/2379384) | The abstract provides specific quantitative pharmacokinetic parameters (VC, Vss, CL, half-lives) for imipenem in human burn patients. |
| `Gruber_1985.pdf` | Gruber WC et al., Single-dose pharmacokinetics of imipene…, Antimicrobial agents and ch… (1985) | popPK | 10 | [10.1128/AAC.27.4.511](https://doi.org/10.1128/AAC.27.4.511) | [3859243](https://pubmed.ncbi.nlm.nih.gov/3859243) | The abstract provides specific numeric values for peak plasma levels, t1/2 beta, and volume of distribution for imipenem in neonates, confirming quantitative PK parameters are present. |
| `Jacobs_1984.pdf` | Jacobs RF et al., Single-dose pharmacokinetics of imipene…, The Journal of pediatrics (1984) | popPK | 10 | [10.1016/s0022-3476(84)80098-0](https://doi.org/10.1016/s0022-3476(84)80098-0) | [6594492](https://pubmed.ncbi.nlm.nih.gov/6594492) | The text explicitly reports quantitative pharmacokinetic parameters for imipenem in children, including half-lives, volume of distribution, and clearance. |
| `Lafaurie_2023.pdf` | Lafaurie M et al., Population pharmacokinetics and pharmac…, Infectious diseases now (2023) | popPK | 10 | [10.1016/j.idnow.2022.09.020](https://doi.org/10.1016/j.idnow.2022.09.020) | [36174960](https://pubmed.ncbi.nlm.nih.gov/36174960) | The abstract provides specific numeric values for clearance and volume of distribution for imipenem in human patients. |
| `Suchánková_2017.pdf` | Suchánková H et al., Is continuous infusion of imipenem alwa…, International journal of an… (2017) | popPK | 10 | [10.1016/j.ijantimicag.2016.12.005](https://doi.org/10.1016/j.ijantimicag.2016.12.005) | [28189734](https://pubmed.ncbi.nlm.nih.gov/28189734) | The paper describes a population pharmacokinetic study of imipenem in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| `Freij_1985.pdf` | Freij BJ et al., Pharmacokinetics of imipenem-cilastatin…, Antimicrobial agents and ch… (1985) | popPK | 9 | [10.1128/AAC.27.4.431](https://doi.org/10.1128/AAC.27.4.431) | [3859242](https://pubmed.ncbi.nlm.nih.gov/3859242) | The paper reports PK parameters for imipenem in neonates, including specific plasma half-life values (1.7-2.4 h) and relative clearance comparisons, though exact numeric clearance and volume values are not explicitly listed in the provided text. |
| `Hongo_1986.pdf` | Hongo M et al., [A study on the penetration of imipenem…, The Japanese journal of ant… (1986) | popPK | 9 | not captured | [3463785](https://pubmed.ncbi.nlm.nih.gov/3463785) | The study reports quantitative tissue and plasma concentrations of imipenem analyzed using a two-compartment open model in humans. |
| `Lala_2019.pdf` | Lala M et al., Simplification of Imipenem Dosing by Re…, Journal of clinical pharmac… (2019) | popPK | 9 | [10.1002/jcph.1356](https://doi.org/10.1002/jcph.1356) | [30536420](https://pubmed.ncbi.nlm.nih.gov/30536420) | The study describes a population PK model for imipenem in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Somani_1988.pdf` | Somani P et al., Pharmacokinetics of imipenem-cilastatin…, Antimicrobial agents and ch… (1988) | popPK | 9 | [10.1128/AAC.32.4.530](https://doi.org/10.1128/AAC.32.4.530) | [3377464](https://pubmed.ncbi.nlm.nih.gov/3377464) | The study reports imipenem PK parameters in humans, but only the half-life (3.28 h) is explicitly provided in the text; other values like clearance and volume are discussed qualitatively or in tables not fully included in the evidence snippet. |
| `Chen_2020.pdf` | Chen IH et al., Imipenem/Cilastatin/Relebactam Alone an…, Antimicrobial agents and ch… (2020) | pd | 5 | [10.1128/AAC.01764-20](https://doi.org/10.1128/AAC.01764-20) | [33139283](https://www.ncbi.nlm.nih.gov/pubmed/33139283) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Horcajada_2019.pdf` | Horcajada JP et al., Epidemiology and Treatment of Multidrug…, Clinical microbiology revie… (2019) | pd | 5 | [10.1128/CMR.00031-19](https://doi.org/10.1128/CMR.00031-19) | [31462403](https://www.ncbi.nlm.nih.gov/pubmed/31462403) | metadata signals extractable PD data (PK/PD) |
| `Kotapati_2005.pdf` | Kotapati S et al., Pharmacodynamic modeling of beta-lactam…, Surgical infections (2005) | pd | 5 | [10.1089/sur.2005.6.297](https://doi.org/10.1089/sur.2005.6.297) | [16201939](https://www.ncbi.nlm.nih.gov/pubmed/16201939) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Mavridou_2015.pdf` | Mavridou E et al., Pharmacodynamics of imipenem in combina…, Antimicrobial agents and ch… (2015) | pd | 5 | [10.1128/AAC.03706-14](https://doi.org/10.1128/AAC.03706-14) | [25403667](https://www.ncbi.nlm.nih.gov/pubmed/25403667) | metadata signals extractable PD data (sigmoid) |
| `Appelbaum_1994.pdf` | Appelbaum PC et al., Characterization of a beta-lactamase fr…, The Journal of antimicrobia… (1994) | pd | 4 | [10.1093/jac/33.1.33](https://doi.org/10.1093/jac/33.1.33) | [8157571](https://www.ncbi.nlm.nih.gov/pubmed/8157571) | metadata signals extractable PD data (IC50) |
| `Teng_2024.pdf` | Teng H et al., HDL-C and creatinine levels at 1 month…, Pharmacogenetics and genomi… (2024) | pgx | 8 | [10.1097/FPC.0000000000000514](https://doi.org/10.1097/FPC.0000000000000514) | [37906625](https://www.ncbi.nlm.nih.gov/pubmed/37906625) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Szałek_2012.pdf` | Szałek E et al., [Optimization of antibiotic therapy in…, Ginekologia polska (2012) | pgx | 7 | not captured | [22880468](https://www.ncbi.nlm.nih.gov/pubmed/22880468) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-15T00:11:55.919765+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agudelo_2019 | relevant | 10 | 0 | The study performs population PK analysis on imipenem in mice and reports parameters like Ka, Ke, and V, but the specific numeric values are not present in the provided text. |
| popPK | Bilal_2021 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of cefiderocol, not imipenem; imipenem is only mentioned as a comparator drug in clinical trials. |
| PGx | Candela_2025 | not_relevant | 0 | 0 | The paper reports a diagnostic method for detecting bacterial resistance enzymes (carbapenemases) in Pseudomonas aeruginosa, not the effect of human gene variants on imipenem pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic (PD) model measuring bacterial kill curves (CFU reduction), not a pharmacokinetic (PK) study reporting quantitative disposition parameters for imipenem. |
| popPK | Chu_2010 | irrelevant | 2 | 3 | The study uses imipenem PK parameters from other healthy volunteer studies for Monte Carlo simulations; specific numeric values are in Table 2 which is not provided in the evidence. |
| PGx | Ding_2022 | not_relevant | 0 | 0 | The paper is a clinical case report on antimicrobial salvage therapy; it does not investigate host pharmacogenomic variants or their impact on imipenem PK/PD. |
| PGx | Dong_2024 | not_relevant | 0 | 0 | The paper describes the development of novel beta-lactamase inhibitors and their PK/PD properties, but does not report pharmacogenomic effects (gene variants/genotypes) on imipenem PK/PD parameters. |
| PGx | Duan_2021 | not_relevant | 0 | 0 | The paper studies bacterial rpoS mutations and biofilm evolution, not human pharmacogenomics affecting imipenem PK or PD parameters. |
| PGx | Falcone_2026 | not_relevant | 0 | 0 | The paper discusses bacterial resistance mechanisms (microbiology) to antibiotics, not human host pharmacogenomics affecting PK or PD. |
| popPK | Fantin_1991 | irrelevant | 2 | 0 | The study reports in vivo efficacy parameters (Emax, P50, static dose) and MIC correlations, not quantitative pharmacokinetic disposition parameters (CL, V, ka) for imipenem. |
| PGx | Farhat_2024 | not_relevant | 0 | 0 | The study investigates chemical inhibitors of the bacterial enzyme NDM-1, not human genetic variants affecting drug pharmacokinetics or pharmacodynamics. |
| PGx | Fathollahi_2021 | not_relevant | 0 | 0 | The paper describes in silico vaccine design against NDM and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imipenem. |
| PGx | Friedland_2003 | not_relevant | 0 | 0 | The paper reports bacterial antimicrobial resistance patterns in P. aeruginosa and Acinetobacter, not human pharmacogenomic effects on imipenem pharmacokinetics or pharmacodynamics. |
| popPK | Fujimoto_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of imipenem's mechanism of action on GABAA receptors in rat neurons, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Gaire_2024 | not_relevant | 0 | 0 | The paper is a case report on co-trimoxazole toxicity and does not investigate any genetic variants or pharmacogenomic effects on imipenem PK/PD parameters. |
| PGx | Gatti_2026 | not_relevant | 0 | 0 | The paper is a review of clinical efficacy and place in therapy for novel beta-lactams, focusing on bacterial resistance mechanisms rather than human pharmacogenomic variants affecting drug PK/PD. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay determining MICs and kill efficacy of imipenem against Mycobacterium abscessus, containing no pharmacokinetic disposition parameters. |
| popPK | Guo_2025 | irrelevant | 2 | 0 | The study is a spatial modeling framework using hypothetical drugs and does not report observed population PK parameters (CL, V, etc.) for imipenem. |
| PGx | Hovde_2003 | not_relevant | 0 | 0 | The paper investigates the mutation prevention concentration of antimicrobials against bacterial strains, which is a microbiological study, not a pharmacogenomic study of human PK/PD parameters. |
| PGx | Huo_2019 | not_relevant | 0 | 0 | The study investigates transporter-mediated drug-drug interactions and nephrotoxicity mechanisms, but does not report any effects of genetic variants (pharmacogenomics) on the pharmacokinetics or pharmacodynamics of imipenem. |
| popPK | Ito_1986 | irrelevant | 2 | 1 | The study reports tissue penetration concentrations and mentions a two-compartment model but does not provide explicit numerical values for PK parameters (CL, V, t1/2). |
| PGx | Kawamoto_2010 | not_relevant | 0 | 0 | The paper analyzes bacterial susceptibility and drug efficacy for quinolones and other antibiotics, but does not report human pharmacogenomic effects on the PK or PD of imipenem. |
| popPK | Koomanachai_2010 | irrelevant | 2 | 1 | This is a pharmacodynamic (PD) modeling study comparing antibiotic efficacy probabilities (CFR) against bacterial MICs, rather than a study reporting quantitative population pharmacokinetic parameters (CL, V, ka) for imipenem. |
| popPK | Kotapati_2005 | irrelevant | 1 | 0 | The study uses previously published PK parameters for simulation but does not report original quantitative disposition parameters or specific numeric values for imipenem in the evidence. |
| popPK | Lala_2019 | relevant | 9 | 0 | The study describes a population PK model for imipenem in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The study focuses on antimicrobial resistance in Klebsiella pneumoniae using machine learning, not on human pharmacogenomics affecting drug pharmacokinetics or pharmacodynamics. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | The paper focuses on the genomic characterization and antimicrobial resistance of the bacterial pathogen Lactococcus garvieae, not on host pharmacogenomics or PK/PD parameters for imipenem. |
| PGx | Mac_2012 | not_relevant | 0 | 0 | The paper describes bacterial resistance mechanisms in Pseudomonas aeruginosa, not human pharmacogenomic effects on drug PK or PD. |
| PGx | Madani_2020 | not_relevant | 0 | 0 | The paper investigates the antibacterial mechanism of novel oxadiazolone derivatives against Mycobacterium abscessus and does not report pharmacogenomic effects on imipenem pharmacokinetics or pharmacodynamics. |
| popPK | Mavridou_2015 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| popPK | Navas_2006 | irrelevant | 2 | 0 | The study reports descriptive trough serum concentration data and adherence percentages for imipenem but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or a compartmental model. |
| PGx | Quentin_2004 | not_relevant | 0 | 0 | The paper describes bacterial antibiotic resistance rates and phenotypes, not human pharmacogenomics or pharmacokinetics/pharmacodynamics of imipenem. |
| popPK | Rando_2024 | irrelevant | 1 | 0 | This is a systematic review that discusses population PK data for imipenem/cilastatin/relebactam, but the provided evidence contains only a summary and does not include the specific quantitative parameter values (CL, V, Q, etc.) required for extraction. |
| PGx | Rapti_2026 | not_relevant | 0 | 0 | The paper discusses antimicrobial resistance mechanisms and clinical usage of beta-lactams, not human pharmacogenomic variants affecting imipenem PK/PD. |
| PGx | Shen_2024 | not_relevant | 0 | 0 | The paper studies bacterial gene mutations affecting antibiotic resistance, not human pharmacogenomics. |
| popPK | Somani_1988 | relevant | 9 | 2 | The study reports imipenem PK parameters in humans, but only the half-life (3.28 h) is explicitly provided in the text; other values like clearance and volume are discussed qualitatively or in tables not fully included in the evidence snippet. |
| PGx | Su_2023 | not_relevant | 0 | 0 | The paper reports on a bacterial pathogen (Aeromonas veronii) and its antibiotic resistance profile, not on the pharmacokinetics or pharmacodynamics of imipenem in humans or its genetic determinants. |
| PGx | Subhi_2026 | not_relevant | 0 | 0 | The paper is a narrative review on antimicrobial resistance surveillance and empiric therapy guidelines, lacking any pharmacogenomic or PK/PD modeling analysis. |
| popPK | Suchánková_2017 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study of imipenem in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| PGx | Szałek_2012 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic changes due to pregnancy physiology, not pharmacogenomic effects (gene variants) on imipenem. |
| PGx | Teng_2024 | not_relevant | 3 | 5 | The paper reports a drug-drug interaction between imipenem and mycophenolate mofetil (PD/PK parameter), not a pharmacogenomic effect of a gene variant on imipenem's pharmacokinetics or pharmacodynamics. |
| PGx | Teo_2023 | not_relevant | 0 | 0 | The study investigates antimicrobial susceptibility based on bacterial resistance genotypes, not human pharmacogenomics or PK/PD effects. |
| PGx | Thadtapong_2024 | not_relevant | 0 | 0 | The paper investigates bacterial resistance and the effect of an adjuvant on the drug's efficacy, not human pharmacogenomics (host genetic variants affecting PK/PD). |
| PGx | Toda_2009 | not_relevant | 0 | 0 | The paper describes how antibiotic administration alters Cyp3a expression via changes in gut flora, which is an environmental factor rather than a pharmacogenomic genetic variant effect. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper analyzes bacterial genomic variations in Burkholderia pseudomallei, not human host pharmacogenomics (gene variants affecting the patient's drug response). |
| popPK | Watanabe_1992 | irrelevant | 0 | 0 | Imipenem is used only as a comparator in an in-vitro bactericidal activity study, not as the subject of a PK parameter estimation. |
| PGx | Watanabe_1992 | not_relevant | 0 | 0 | The paper investigates the in-vitro bactericidal activity of cefclidin, ceftazidime, and imipenem in a PK model and does not report any effect of human gene variants on the pharmacokinetics or pharmacodynamics of imipenem. |
| PGx | Wiskirchen_2014 | not_relevant | 0 | 0 | The paper discusses the effect of bacterial genotypes (OXA-48) on antimicrobial efficacy, not human pharmacogenomics. |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper is a review of cefiderocol's pharmacokinetics and clinical efficacy, using imipenem only as a comparator drug without reporting its specific PK parameters. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper describes a bacterial resistance gene (KPC-228) affecting antibiotic susceptibility (MIC), not a human pharmacogenomic effect on the PK or PD of imipenem. |
| popPK | Zinner_1985 | irrelevant | 0 | 0 | The study is an in-vitro kinetic model using piperacillin, thienamycin, amikacin, azlocillin, and netilmicin, and does not study imipenem pharmacokinetics. |
| PGx | unknown_2026 | not_relevant | 0 | 0 | The paper discusses the off-label use of imipenem for tuberculosis but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:12 UTC</sub>
