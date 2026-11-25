<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;mupirocin&quot;}]"></div>

# mupirocin

- **generic name:** mupirocin
- **ATC codes:** `D06AX09`, `R01AX06`
- **DrugBank:** [DB00410](https://go.drugbank.com/drugs/DB00410) · **PubChem:** [CID 446596](https://pubchem.ncbi.nlm.nih.gov/compound/446596)
- **molar mass:** 500.6222 g/mol (C26H44O9) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Mupirocin is a topical antibiotic indicated for superficial skin infections like impetigo. It is applied to the skin as a cream or ointment, or given intranasally for decolonization. This medication is widely used and available as a generic product.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q413578](https://www.wikidata.org/wiki/Q413578), [Wikipedia](https://en.wikipedia.org/wiki/Mupirocin?oldid=1360195352) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Villiger_1986_Clinical_response_to_mupirocin_ointment](drugs/drug_mupirocin/pd_Villiger_1986_Clinical_response_to_mupirocin_ointment.md) | Clinical response to mupirocin ointment · model not identified | — | Villiger JW et al., A comparison of the new topical antibio…, Current medical research an… (1986) | [10.1185/03007998609111100](https://doi.org/10.1185/03007998609111100) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wiegand_2012_bacterial_growth](drugs/drug_mupirocin/pd_Wiegand_2012_bacterial_growth.md) | bacterial growth ← mupirocin · inhibition effect | — | Wiegand C et al., Analysis of the adaptation capacity of…, Skin pharmacology and physi… (2012) | [10.1159/000341222](https://doi.org/10.1159/000341222) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:22 | 0:04 | 0/0/0 | 0/2/0 | 0/0/0 | 4,272/200 | einfracz / qwen3.8-27b | 12 | 2/6 | 11/1 | 0 |

## Coverage

- **PubMed hits:** 61 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2026 | irrelevant | 1 | 0 | The study focuses on in-vitro/ex-vivo delivery and pharmacodynamic effects in mice, reporting no quantitative systemic pharmacokinetic parameters for mupirocin. |
| PGx | Abbas_2026 | not_relevant | 0 | 0 | The paper reports the formulation and efficacy of a mupirocin nanoemulsion in a mouse model of psoriasis, but contains no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Al_2022 | irrelevant | 0 | 0 | The paper is a retrospective analysis of antibiotic utilization and dosing appropriateness, reporting no quantitative pharmacokinetic parameters (CL, V, etc.) for mupirocin. |
| PGx | Al_2022 | not_relevant | 0 | 0 | The paper focuses on antibiotic usage patterns and dosage appropriateness in hemodialysis patients, not on pharmacogenomics. |
| popPK | Anderson_2015 | irrelevant | 0 | 0 | The study focuses on the antimicrobial efficacy of povidone-iodine and mupirocin against Staphylococcus aureus, reporting bacterial counts (CFU) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for mupirocin. |
| PGx | Anderson_2015 | not_relevant | 0 | 0 | The paper compares antimicrobial efficacy of povidone-iodine and mupirocin on bacteria and does not involve human gene variants or genotypes affecting mupirocin pharmacokinetics or pharmacodynamics. |
| popPK | Bertino_1997 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and general pharmacology that lacks quantitative pharmacokinetic parameters (CL, V, t1/2) for mupirocin. |
| PGx | Bertino_1997 | not_relevant | 0 | 0 | The paper reviews the general pharmacology and clinical efficacy of mupirocin for MRSA outbreaks but does not mention any gene variants or pharmacogenomic effects. |
| popPK | Bonamonte_2014 | irrelevant | 0 | 0 | The paper is a review focused on fusidic acid, with mupirocin mentioned only as a comparative agent without providing specific quantitative pharmacokinetic parameters for mupirocin. |
| PGx | Bonamonte_2014 | not_relevant | 0 | 0 | The paper discusses fusidic acid, not mupirocin, and contains no pharmacogenomic data or PK/PD parameter changes. |
| popPK | Bourgeois-Nicolaos_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, not mupirocin. |
| PGx | Bourgeois-Nicolaos_2014 | not_relevant | 0 | 0 | The paper discusses linezolid, not mupirocin, and investigates resistance emergence rather than pharmacogenomic effects on PK/PD. |
| popPK | Cai_2025 | irrelevant | 0 | 0 | The study focuses on chrysomycin A delivery, and mupirocin is used only as a positive control comparator without any pharmacokinetic data reported. |
| PGx | Cai_2025 | not_relevant | 0 | 0 | The paper investigates a new transdermal delivery system for chrysomycin A and compares its efficacy to mupirocin, but it does not report any pharmacogenomic effects or genotype-specific changes in PK/PD parameters. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| PGx | Chase_2012 | not_relevant | 0 | 0 | The paper discusses the definition of the letter 'S' in SMR (Single-molecule resonator) and does not contain any information regarding mupirocin, pharmacogenomics, or PK/PD parameters. |
| popPK | European_2018 | irrelevant | 0 | 0 | This antimicrobial-resistance surveillance report contains no mupirocin pharmacokinetic parameters. |
| popPK | European_2019 | irrelevant | 0 | 0 | This antimicrobial-resistance surveillance report contains no quantitative mupirocin pharmacokinetic parameters. |
| popPK | European_2020 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it gives no disposition parameter values. |
| popPK | European_2021 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it reports no PK parameter values. |
| popPK | European_2022 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report, not a mupirocin pharmacokinetic study, and it reports no disposition parameters. |
| popPK | European_2023 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report and contains no mupirocin pharmacokinetic parameters. |
| PGx | Furi_2016 | not_relevant | 0 | 0 | Mupirocin resistance genes are mentioned only as examples of mobile resistance mechanisms; no pharmacogenomic effect on a mupirocin PK or PD parameter is reported. |
| popPK | Gilbart_1993 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of mupirocin resistance in Staphylococcus aureus, not pharmacokinetics. |
| PGx | Gilbart_1993 | not_relevant | 0 | 0 | The paper describes bacterial genetic mechanisms for mupirocin resistance (MIC changes), not human pharmacogenomic effects on PK/PD parameters. |
| popPK | Ha_2008 | irrelevant | 0 | 0 | The study is an in-vitro microbiology investigation of mupirocin's efficacy against S. aureus biofilms and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PGx | Ha_2008 | not_relevant | 0 | 0 | The study investigates the in vitro antimicrobial activity of mupirocin on bacterial biofilms and does not involve human gene variants or pharmacogenomics. |
| popPK | Jacobs_2007 | irrelevant | 0 | 0 | The paper is a clinical review of oral beta-lactams for skin infections and does not provide any quantitative pharmacokinetic parameters or disposition data for mupirocin. |
| PGx | Jacobs_2007 | not_relevant | 0 | 0 | The paper is a general review of the treatment guidelines for uncomplicated skin and skin structure infections, without discussing pharmacogenomics, gene variants, or their effects on mupirocin PK/PD. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical study on leptospirosis presentation and contains no pharmacokinetic data for mupirocin. |
| PGx | Jauréguiberry_2005 | not_relevant | 0 | 0 | The paper reports on the clinical presentation of leptospirosis and does not mention mupirocin, pharmacogenomics, or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Kale_2021 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method development and validation for simultaneous determination of mupirocin and simvastatin, containing no pharmacokinetic data (CL, Vd, etc.). |
| PGx | Kale_2021 | not_relevant | 0 | 0 | The paper describes the development of an analytical HPLC method, not a pharmacogenomic study. |
| PGx | Katayama_2017 | not_relevant | 0 | 0 | The paper studies mupirocin-induced changes in vancomycin resistance, not genetic effects on mupirocin pharmacokinetic or pharmacodynamic parameters. |
| popPK | Knaack_2019 | irrelevant | 0 | 0 | The paper is an in-vitro microbiology study focusing on bactericidal activity (MIC/MBC), not pharmacokinetics, and mupirocin is used only as a comparator antibiotic. |
| PGx | Knaack_2019 | not_relevant | 0 | 0 | The paper evaluates the antimicrobial activity of a bacteriophage endolysin (HY-133) against S. aureus and does not investigate pharmacogenomic effects on mupirocin's PK or PD. |
| popPK | Kpanou_2021 | irrelevant | 0 | 0 | This computational drug–drug interaction study reports no quantitative mupirocin disposition parameters. |
| popPK | Lanoiselée_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of cefuroxime, not mupirocin. |
| PGx | Lanoiselée_2020 | not_relevant | 0 | 0 | The paper discusses cefuroxime pharmacokinetics and does not mention mupirocin or any pharmacogenomic factors. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a materials science and microbiology study focusing on antibiotic delivery systems and antibacterial efficacy, not a pharmacokinetic study for mupirocin. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper describes a novel microneedle delivery system and does not investigate pharmacogenomic effects on mupirocin PK or PD. |
| popPK | Lin_2025 | irrelevant | 1 | 0 | This is a formulation and pharmacodynamic study focusing on wound healing and in-vitro permeation/antibacterial activity, with no quantitative pharmacokinetic parameters (CL, V, t1/2) reported for mupirocin. |
| PGx | Lin_2025 | not_relevant | 0 | 0 | The paper focuses on a novel drug delivery formulation (microemulsion hydrogel) and its effects on wound healing and bacterial infection; it contains no data on gene variants or pharmacogenomic effects on PK/PD. |
| popPK | Lusina_2015 | irrelevant | 0 | 0 | The study is an in-vitro release method development for mupirocin microparticles, not a pharmacokinetic study of disposition parameters in vivo. |
| PGx | Lusina_2015 | not_relevant | 0 | 0 | The paper describes the development of an in vitro release method for mupirocin microparticles and contains no information on genetic variants or pharmacogenomics. |
| popPK | Moulin_2008 | irrelevant | 0 | 0 | The text is a clinical review of pediatric skin infections that mentions mupirocin as a treatment option but contains no pharmacokinetic data or quantitative disposition parameters. |
| PGx | Moulin_2008 | not_relevant | 0 | 0 | The text is a general review of pediatric skin infection treatment guidelines and does not discuss pharmacogenomics or genetic variants affecting mupirocin PK/PD. |
| popPK | Parenti_1987 | irrelevant | 2 | 0 | The paper is a general review of mupirocin's chemistry and clinical efficacy without reporting specific quantitative population-pharmacokinetic parameters (CL, V, etc.). |
| PGx | Parenti_1987 | not_relevant | 0 | 0 | The paper is a review of mupirocin's properties and does not report on any gene variants or pharmacogenomic effects on PK or PD parameters. |
| popPK | Paulander_2007 | irrelevant | 0 | 0 | This is a mechanistic microbiology study on resistance fitness in Salmonella typhimurium, not a pharmacokinetic study. |
| PGx | Paulander_2007 | not_relevant | 0 | 0 | The paper describes bacterial evolution and compensation mechanisms for mupirocin resistance, not human pharmacogenomics affecting drug PK or PD. |
| popPK | Reva_2019 | irrelevant | 0 | 0 | The paper investigates the in-vitro cytotoxicity and molecular docking of mupirocin against cancer cell lines, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Reva_2019 | not_relevant | 0 | 0 | The paper compares the cytotoxicity of mupirocin and batumin against cancer cell lines and does not investigate gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Saravolatz_2017 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic parameters (postantibiotic effect) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for mupirocin. |
| PGx | Saravolatz_2017 | not_relevant | 0 | 0 | The study evaluates pharmacodynamic parameters of LTX-109 and mupirocin but does not investigate the effect of gene variants/genotypes on these parameters. |
| PGx | Talon_1995 | not_relevant | 0 | 0 | The paper reports mupirocin efficacy and colonization outcomes, but no genetic variation or genotype-related PK/PD effects. |
| PGx | Terlecky_2026 | not_relevant | 2 | 1 | The study detects mupA and describes resistance mechanisms, but does not report a genotype-associated change in mupirocin MIC or another PK/PD parameter. |
| popPK | Villiger_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing topical mupirocin with oral antibiotics for skin infections and does not report any pharmacokinetic parameters. |
| PGx | Villiger_1986 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of mupirocin against other antibiotics but does not investigate any pharmacogenomic influences on its pharmacokinetics or pharmacodynamics. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | This review reports no quantitative mupirocin pharmacokinetic parameters or disposition model. |
| popPK | Whitehead_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study for topical treatment of rhinosinusitis, not a pharmacokinetic study; it reports clinical scores (LK, SNOT) and contains no quantitative PK parameters (CL, V, ka, etc.) for mupirocin. |
| PGx | Whitehead_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy of topical mupirocin for chronic rhinosinusitis but does not mention any genetic variants or pharmacogenomic factors. |
| popPK | Wiegand_2012 | irrelevant | 0 | 0 | This in-vitro bacterial adaptation study reports no mupirocin pharmacokinetic disposition parameters. |
| popPK | Yendewa_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of XF-73, not mupirocin; mupirocin is only mentioned as a background comparator for decolonization. |
| PGx | Yendewa_2020 | not_relevant | 0 | 0 | The paper compares different formulations of a novel antibacterial (XF-73) in healthy volunteers and SA carriers, reporting safety and local tolerability/PK/PD outcomes, but it does not report any pharmacogenomic effects (gene variant/genotype) on pharmacokinetic or pharmacodynamic parameters of mupirocin or XF-73. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmupirocin%5D&body=Drug%3A%20mupirocin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mupirocin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
